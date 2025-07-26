var Zr = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = Zr.NODE_ENV !== "production" ? Object.freeze({}) : {}, hs = Zr.NODE_ENV !== "production" ? Object.freeze([]) : [], Oe = () => {
}, Hs = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yi = (e) => e.startsWith("onUpdate:"), de = Object.assign, el = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Af = Object.prototype.hasOwnProperty, me = (e, t) => Af.call(e, t), q = Array.isArray, Wn = (e) => Is(e) === "[object Map]", os = (e) => Is(e) === "[object Set]", sa = (e) => Is(e) === "[object Date]", If = (e) => Is(e) === "[object RegExp]", se = (e) => typeof e == "function", oe = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", xo = (e) => (he(e) || se(e)) && se(e.then) && se(e.catch), Cc = Object.prototype.toString, Is = (e) => Cc.call(e), tl = (e) => Is(e).slice(8, -1), So = (e) => Is(e) === "[object Object]", nl = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ He(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kc = /* @__PURE__ */ He(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Co = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mf = /-(\w)/g, Se = Co(
  (e) => e.replace(Mf, (t, n) => n ? n.toUpperCase() : "")
), Pf = /\B([A-Z])/g, Ye = Co(
  (e) => e.replace(Pf, "-$1").toLowerCase()
), sn = Co((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = Co(
  (e) => e ? `on${sn(e)}` : ""
), it = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, es = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ji = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Qi = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ia;
const vi = () => ia || (ia = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const Gs = {
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
}, Lf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Ff = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Bf = /* @__PURE__ */ He(Ff), oa = 2;
function jf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const i = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let o = 0;
  const r = [];
  for (let l = 0; l < s.length; l++)
    if (o += s[l].length + (i[l] && i[l].length || 0), o >= t) {
      for (let a = l - oa; a <= l + oa || n > o; a++) {
        if (a < 0 || a >= s.length) continue;
        const u = a + 1;
        r.push(
          `${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${s[a]}`
        );
        const d = s[a].length, c = i[a] && i[a].length || 0;
        if (a === l) {
          const h = t - (o - (d + c)), m = Math.max(
            1,
            n > o ? d - h : n - t
          );
          r.push("   |  " + " ".repeat(h) + "^".repeat(m));
        } else if (a > l) {
          if (n > o) {
            const h = Math.max(Math.min(n - o, d), 1);
            r.push("   |  " + "^".repeat(h));
          }
          o += d + c;
        }
      }
      break;
    }
  return r.join(`
`);
}
function _t(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = oe(s) ? Oc(s) : _t(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (oe(e) || he(e))
    return e;
}
const Hf = /;(?![^(]*\))/g, Uf = /:([^]+)/, qf = /\/\*[^]*?\*\//g;
function Oc(e) {
  const t = {};
  return e.replace(qf, "").split(Hf).forEach((n) => {
    if (n) {
      const s = n.split(Uf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Kf(e) {
  if (!e) return "";
  if (oe(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (oe(s) || typeof s == "number") {
      const i = n.startsWith("--") ? n : Ye(n);
      t += `${i}:${s};`;
    }
  }
  return t;
}
function Qe(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = Qe(e[n]);
      s && (t += s + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function zf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !oe(t) && (e.class = Qe(t)), n && (e.style = _t(n)), e;
}
const Wf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Gf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yf = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Jf = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Tc = /* @__PURE__ */ He(Wf), Dc = /* @__PURE__ */ He(Gf), Vc = /* @__PURE__ */ He(Yf), Qf = /* @__PURE__ */ He(Jf), $c = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xf = /* @__PURE__ */ He($c), ra = /* @__PURE__ */ He(
  $c + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function sl(e) {
  return !!e || e === "";
}
const Zf = /* @__PURE__ */ He(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ep = /* @__PURE__ */ He(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function tp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const np = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function sp(e, t) {
  return e.replace(
    np,
    (n) => `\\${n}`
  );
}
function ip(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Mn(e[s], t[s]);
  return n;
}
function Mn(e, t) {
  if (e === t) return !0;
  let n = sa(e), s = sa(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = gt(e), s = gt(t), n || s)
    return e === t;
  if (n = q(e), s = q(t), n || s)
    return n && s ? ip(e, t) : !1;
  if (n = he(e), s = he(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Mn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ko(e, t) {
  return e.findIndex((n) => Mn(n, t));
}
const Ac = (e) => !!(e && e.__v_isRef === !0), Y = (e) => oe(e) ? e : e == null ? "" : q(e) || he(e) && (e.toString === Cc || !se(e.toString)) ? Ac(e) ? Y(e.value) : JSON.stringify(e, Ic, 2) : String(e), Ic = (e, t) => Ac(t) ? Ic(e, t.value) : Wn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[Zo(s, o) + " =>"] = i, n),
    {}
  )
} : os(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zo(n))
} : gt(t) ? Zo(t) : he(t) && !q(t) && !So(t) ? String(t) : t, Zo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Mc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && Zr.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var be = {};
function Ot(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let We;
class il {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = We, !t && We && (this.index = (We.scopes || (We.scopes = [])).push(
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
      const n = We;
      try {
        return We = this, t();
      } finally {
        We = n;
      }
    } else be.NODE_ENV !== "production" && Ot("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = We, We = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (We = this.prevScope, this.prevScope = void 0);
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
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function op(e) {
  return new il(e);
}
function ol() {
  return We;
}
function Pc(e, t = !1) {
  We ? We.cleanups.push(e) : be.NODE_ENV !== "production" && !t && Ot(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _e;
const er = /* @__PURE__ */ new WeakSet();
class ii {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, We && We.active && We.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, er.has(this) && (er.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, la(this), Fc(this);
    const t = _e, n = Lt;
    _e = this, Lt = !0;
    try {
      return this.fn();
    } finally {
      be.NODE_ENV !== "production" && _e !== this && Ot(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Bc(this), _e = t, Lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        al(t);
      this.deps = this.depsTail = void 0, la(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? er.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yr(this) && this.run();
  }
  get dirty() {
    return yr(this);
  }
}
let Rc = 0, Ys, Js;
function Lc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Js, Js = e;
    return;
  }
  e.next = Ys, Ys = e;
}
function rl() {
  Rc++;
}
function ll() {
  if (--Rc > 0)
    return;
  if (Js) {
    let t = Js;
    for (Js = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ys; ) {
    let t = Ys;
    for (Ys = void 0; t; ) {
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
function Fc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), al(s), rp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function yr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (jc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function jc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === oi) || (e.globalVersion = oi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, s = Lt;
  _e = e, Lt = !0;
  try {
    Fc(e);
    const i = e.fn(e._value);
    (t.version === 0 || it(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    _e = n, Lt = s, Bc(e), e.flags &= -3;
  }
}
function al(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), be.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      al(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function lp(e, t) {
  e.effect instanceof ii && (e = e.effect.fn);
  const n = new ii(e);
  t && de(n, t);
  try {
    n.run();
  } catch (i) {
    throw n.stop(), i;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function ap(e) {
  e.effect.stop();
}
let Lt = !0;
const Hc = [];
function Bt() {
  Hc.push(Lt), Lt = !1;
}
function jt() {
  const e = Hc.pop();
  Lt = e === void 0 ? !0 : e;
}
function la(e) {
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
let oi = 0;
class cp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Oo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, be.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!_e || !Lt || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new cp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Uc(n);
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
    this.version++, oi++, this.notify(t);
  }
  notify(t) {
    rl();
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
      ll();
    }
  }
}
function Uc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Uc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), be.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Xi = /* @__PURE__ */ new WeakMap(), Gn = Symbol(
  be.NODE_ENV !== "production" ? "Object iterate" : ""
), vr = Symbol(
  be.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ri = Symbol(
  be.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Le(e, t, n) {
  if (Lt && _e) {
    let s = Xi.get(e);
    s || Xi.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Oo()), i.map = s, i.key = n), be.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Xt(e, t, n, s, i, o) {
  const r = Xi.get(e);
  if (!r) {
    oi++;
    return;
  }
  const l = (a) => {
    a && (be.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: i,
      oldTarget: o
    }) : a.trigger());
  };
  if (rl(), t === "clear")
    r.forEach(l);
  else {
    const a = q(e), u = a && nl(n);
    if (a && n === "length") {
      const d = Number(s);
      r.forEach((c, h) => {
        (h === "length" || h === ri || !gt(h) && h >= d) && l(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(ri)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(Gn)), Wn(e) && l(r.get(vr)));
          break;
        case "delete":
          a || (l(r.get(Gn)), Wn(e) && l(r.get(vr)));
          break;
        case "set":
          Wn(e) && l(r.get(Gn));
          break;
      }
  }
  ll();
}
function up(e, t) {
  const n = Xi.get(e);
  return n && n.get(t);
}
function us(e) {
  const t = le(e);
  return t === e ? t : (Le(t, "iterate", ri), Xe(e) ? t : t.map(Ke));
}
function To(e) {
  return Le(e = le(e), "iterate", ri), e;
}
const dp = {
  __proto__: null,
  [Symbol.iterator]() {
    return tr(this, Symbol.iterator, Ke);
  },
  concat(...e) {
    return us(this).concat(
      ...e.map((t) => q(t) ? us(t) : t)
    );
  },
  entries() {
    return tr(this, "entries", (e) => (e[1] = Ke(e[1]), e));
  },
  every(e, t) {
    return ln(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ln(this, "filter", e, t, (n) => n.map(Ke), arguments);
  },
  find(e, t) {
    return ln(this, "find", e, t, Ke, arguments);
  },
  findIndex(e, t) {
    return ln(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ln(this, "findLast", e, t, Ke, arguments);
  },
  findLastIndex(e, t) {
    return ln(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ln(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return nr(this, "includes", e);
  },
  indexOf(...e) {
    return nr(this, "indexOf", e);
  },
  join(e) {
    return us(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return nr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ln(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ls(this, "pop");
  },
  push(...e) {
    return Ls(this, "push", e);
  },
  reduce(e, ...t) {
    return aa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return aa(this, "reduceRight", e, t);
  },
  shift() {
    return Ls(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ln(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ls(this, "splice", e);
  },
  toReversed() {
    return us(this).toReversed();
  },
  toSorted(e) {
    return us(this).toSorted(e);
  },
  toSpliced(...e) {
    return us(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ls(this, "unshift", e);
  },
  values() {
    return tr(this, "values", Ke);
  }
};
function tr(e, t, n) {
  const s = To(e), i = s[t]();
  return s !== e && !Xe(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const fp = Array.prototype;
function ln(e, t, n, s, i, o) {
  const r = To(e), l = r !== e && !Xe(e), a = r[t];
  if (a !== fp[t]) {
    const c = a.apply(e, o);
    return l ? Ke(c) : c;
  }
  let u = n;
  r !== e && (l ? u = function(c, h) {
    return n.call(this, Ke(c), h, e);
  } : n.length > 2 && (u = function(c, h) {
    return n.call(this, c, h, e);
  }));
  const d = a.call(r, u, s);
  return l && i ? i(d) : d;
}
function aa(e, t, n, s) {
  const i = To(e);
  let o = n;
  return i !== e && (Xe(e) ? n.length > 3 && (o = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : o = function(r, l, a) {
    return n.call(this, r, Ke(l), a, e);
  }), i[t](o, ...s);
}
function nr(e, t, n) {
  const s = le(e);
  Le(s, "iterate", ri);
  const i = s[t](...n);
  return (i === -1 || i === !1) && Es(n[0]) ? (n[0] = le(n[0]), s[t](...n)) : i;
}
function Ls(e, t, n = []) {
  Bt(), rl();
  const s = le(e)[t].apply(e, n);
  return ll(), jt(), s;
}
const pp = /* @__PURE__ */ He("__proto__,__v_isRef,__isVue"), qc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
);
function hp(e) {
  gt(e) || (e = String(e));
  const t = le(this);
  return Le(t, "has", e), t.hasOwnProperty(e);
}
class Kc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (i ? o ? Qc : Jc : o ? Yc : Gc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = q(t);
    if (!i) {
      let a;
      if (r && (a = dp[n]))
        return a;
      if (n === "hasOwnProperty")
        return hp;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ve(t) ? t : s
    );
    return (gt(n) ? qc.has(n) : pp(n)) || (i || Le(t, "get", n), o) ? l : Ve(l) ? r && nl(n) ? l : l.value : he(l) ? i ? Vo(l) : _s(l) : l;
  }
}
class zc extends Kc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    if (!this._isShallow) {
      const a = Ht(o);
      if (!Xe(s) && !Ht(s) && (o = le(o), s = le(s)), !q(t) && Ve(o) && !Ve(s))
        return a ? !1 : (o.value = s, !0);
    }
    const r = q(t) && nl(n) ? Number(n) < t.length : me(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ve(t) ? t : i
    );
    return t === le(i) && (r ? it(s, o) && Xt(t, "set", n, s, o) : Xt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = me(t, n), i = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && Xt(t, "delete", n, void 0, i), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!gt(n) || !qc.has(n)) && Le(t, "has", n), s;
  }
  ownKeys(t) {
    return Le(
      t,
      "iterate",
      q(t) ? "length" : Gn
    ), Reflect.ownKeys(t);
  }
}
class Wc extends Kc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return be.NODE_ENV !== "production" && Ot(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return be.NODE_ENV !== "production" && Ot(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const mp = /* @__PURE__ */ new zc(), gp = /* @__PURE__ */ new Wc(), yp = /* @__PURE__ */ new zc(!0), vp = /* @__PURE__ */ new Wc(!0), br = (e) => e, Oi = (e) => Reflect.getPrototypeOf(e);
function bp(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = le(i), r = Wn(o), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = i[e](...s), d = n ? br : t ? Zi : Ke;
    return !t && Le(
      o,
      "iterate",
      a ? vr : Gn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: h } = u.next();
        return h ? { value: c, done: h } : {
          value: l ? [d(c[0]), d(c[1])] : d(c),
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
function Ti(e) {
  return function(...t) {
    if (be.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ot(
        `${sn(e)} operation ${n}failed: target is readonly.`,
        le(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _p(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = le(o), l = le(i);
      e || (it(i, l) && Le(r, "get", i), Le(r, "get", l));
      const { has: a } = Oi(r), u = t ? br : e ? Zi : Ke;
      if (a.call(r, i))
        return u(o.get(i));
      if (a.call(r, l))
        return u(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Le(le(i), "iterate", Gn), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, r = le(o), l = le(i);
      return e || (it(i, l) && Le(r, "has", i), Le(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, a = le(l), u = t ? br : e ? Zi : Ke;
      return !e && Le(a, "iterate", Gn), l.forEach((d, c) => i.call(o, u(d), u(c), r));
    }
  };
  return de(
    n,
    e ? {
      add: Ti("add"),
      set: Ti("set"),
      delete: Ti("delete"),
      clear: Ti("clear")
    } : {
      add(i) {
        !t && !Xe(i) && !Ht(i) && (i = le(i));
        const o = le(this);
        return Oi(o).has.call(o, i) || (o.add(i), Xt(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !Xe(o) && !Ht(o) && (o = le(o));
        const r = le(this), { has: l, get: a } = Oi(r);
        let u = l.call(r, i);
        u ? be.NODE_ENV !== "production" && ca(r, l, i) : (i = le(i), u = l.call(r, i));
        const d = a.call(r, i);
        return r.set(i, o), u ? it(o, d) && Xt(r, "set", i, o, d) : Xt(r, "add", i, o), this;
      },
      delete(i) {
        const o = le(this), { has: r, get: l } = Oi(o);
        let a = r.call(o, i);
        a ? be.NODE_ENV !== "production" && ca(o, r, i) : (i = le(i), a = r.call(o, i));
        const u = l ? l.call(o, i) : void 0, d = o.delete(i);
        return a && Xt(o, "delete", i, void 0, u), d;
      },
      clear() {
        const i = le(this), o = i.size !== 0, r = be.NODE_ENV !== "production" ? Wn(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return o && Xt(
          i,
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
  ].forEach((i) => {
    n[i] = bp(i, e, t);
  }), n;
}
function Do(e, t) {
  const n = _p(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    me(n, i) && i in s ? n : s,
    i,
    o
  );
}
const Ep = {
  get: /* @__PURE__ */ Do(!1, !1)
}, Np = {
  get: /* @__PURE__ */ Do(!1, !0)
}, wp = {
  get: /* @__PURE__ */ Do(!0, !1)
}, xp = {
  get: /* @__PURE__ */ Do(!0, !0)
};
function ca(e, t, n) {
  const s = le(n);
  if (s !== n && t.call(e, s)) {
    const i = tl(e);
    Ot(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Gc = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Jc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap();
function Sp(e) {
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
function Cp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sp(tl(e));
}
function _s(e) {
  return Ht(e) ? e : $o(
    e,
    !1,
    mp,
    Ep,
    Gc
  );
}
function Xc(e) {
  return $o(
    e,
    !1,
    yp,
    Np,
    Yc
  );
}
function Vo(e) {
  return $o(
    e,
    !0,
    gp,
    wp,
    Jc
  );
}
function Mt(e) {
  return $o(
    e,
    !0,
    vp,
    xp,
    Qc
  );
}
function $o(e, t, n, s, i) {
  if (!he(e))
    return be.NODE_ENV !== "production" && Ot(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Cp(e);
  if (o === 0)
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
function hn(e) {
  return Ht(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ht(e) {
  return !!(e && e.__v_isReadonly);
}
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
function Es(e) {
  return e ? !!e.__v_raw : !1;
}
function le(e) {
  const t = e && e.__v_raw;
  return t ? le(t) : e;
}
function Zc(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && es(e, "__v_skip", !0), e;
}
const Ke = (e) => he(e) ? _s(e) : e, Zi = (e) => he(e) ? Vo(e) : e;
function Ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return tu(e, !1);
}
function eu(e) {
  return tu(e, !0);
}
function tu(e, t) {
  return Ve(e) ? e : new kp(e, t);
}
class kp {
  constructor(t, n) {
    this.dep = new Oo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : le(t), this._value = n ? t : Ke(t), this.__v_isShallow = n;
  }
  get value() {
    return be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Xe(t) || Ht(t);
    t = s ? t : le(t), it(t, n) && (this._rawValue = t, this._value = s ? t : Ke(t), be.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Op(e) {
  e.dep && (be.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function bi(e) {
  return Ve(e) ? e.value : e;
}
function Tp(e) {
  return se(e) ? e() : bi(e);
}
const Dp = {
  get: (e, t, n) => t === "__v_raw" ? e : bi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Ve(i) && !Ve(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function cl(e) {
  return hn(e) ? e : new Proxy(e, Dp);
}
class Vp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Oo(), { get: s, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function nu(e) {
  return new Vp(e);
}
function $p(e) {
  be.NODE_ENV !== "production" && !Es(e) && Ot("toRefs() expects a reactive object but received a plain one.");
  const t = q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = su(e, n);
  return t;
}
class Ap {
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
    return up(le(this._object), this._key);
  }
}
class Ip {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Mp(e, t, n) {
  return Ve(e) ? e : se(e) ? new Ip(e) : he(e) && arguments.length > 1 ? su(e, t, n) : X(e);
}
function su(e, t, n) {
  const s = e[t];
  return Ve(s) ? s : new Ap(e, t, n);
}
class Pp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Oo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = oi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _e !== this)
      return Lc(this, !0), !0;
  }
  get value() {
    const t = be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return jc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : be.NODE_ENV !== "production" && Ot("Write operation failed: computed value is readonly");
  }
}
function Rp(e, t, n = !1) {
  let s, i;
  se(e) ? s = e : (s = e.get, i = e.set);
  const o = new Pp(s, i, n);
  return be.NODE_ENV !== "production" && t && !n && (o.onTrack = t.onTrack, o.onTrigger = t.onTrigger), o;
}
const Lp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Fp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Di = {}, eo = /* @__PURE__ */ new WeakMap();
let wn;
function Bp() {
  return wn;
}
function iu(e, t = !1, n = wn) {
  if (n) {
    let s = eo.get(n);
    s || eo.set(n, s = []), s.push(e);
  } else be.NODE_ENV !== "production" && !t && Ot(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function jp(e, t, n = fe) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: a } = n, u = (w) => {
    (n.onWarn || Ot)(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (w) => i ? w : Xe(w) || i === !1 || i === 0 ? fn(w, 1) : fn(w);
  let c, h, m, N, E = !1, D = !1;
  if (Ve(e) ? (h = () => e.value, E = Xe(e)) : hn(e) ? (h = () => d(e), E = !0) : q(e) ? (D = !0, E = e.some((w) => hn(w) || Xe(w)), h = () => e.map((w) => {
    if (Ve(w))
      return w.value;
    if (hn(w))
      return d(w);
    if (se(w))
      return a ? a(w, 2) : w();
    be.NODE_ENV !== "production" && u(w);
  })) : se(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      Bt();
      try {
        m();
      } finally {
        jt();
      }
    }
    const w = wn;
    wn = c;
    try {
      return a ? a(e, 3, [N]) : e(N);
    } finally {
      wn = w;
    }
  } : (h = Oe, be.NODE_ENV !== "production" && u(e)), t && i) {
    const w = h, V = i === !0 ? 1 / 0 : i;
    h = () => fn(w(), V);
  }
  const k = ol(), y = () => {
    c.stop(), k && k.active && el(k.effects, c);
  };
  if (o && t) {
    const w = t;
    t = (...V) => {
      w(...V), y();
    };
  }
  let f = D ? new Array(e.length).fill(Di) : Di;
  const _ = (w) => {
    if (!(!(c.flags & 1) || !c.dirty && !w))
      if (t) {
        const V = c.run();
        if (i || E || (D ? V.some((P, S) => it(P, f[S])) : it(V, f))) {
          m && m();
          const P = wn;
          wn = c;
          try {
            const S = [
              V,
              // pass undefined as the old value when it's changed for the first time
              f === Di ? void 0 : D && f[0] === Di ? [] : f,
              N
            ];
            f = V, a ? a(t, 3, S) : (
              // @ts-expect-error
              t(...S)
            );
          } finally {
            wn = P;
          }
        }
      } else
        c.run();
  };
  return l && l(_), c = new ii(h), c.scheduler = r ? () => r(_, !1) : _, N = (w) => iu(w, !1, c), m = c.onStop = () => {
    const w = eo.get(c);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const V of w) V();
      eo.delete(c);
    }
  }, be.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? _(!0) : f = c.run() : r ? r(_.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ve(e))
    fn(e.value, t, n);
  else if (q(e))
    for (let s = 0; s < e.length; s++)
      fn(e[s], t, n);
  else if (os(e) || Wn(e))
    e.forEach((s) => {
      fn(s, t, n);
    });
  else if (So(e)) {
    for (const s in e)
      fn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && fn(e[s], t, n);
  }
  return e;
}
var b = {};
const Yn = [];
function ms(e) {
  Yn.push(e);
}
function gs() {
  Yn.pop();
}
let sr = !1;
function M(e, ...t) {
  if (sr) return;
  sr = !0, Bt();
  const n = Yn.length ? Yn[Yn.length - 1].component : null, s = n && n.appContext.config.warnHandler, i = Hp();
  if (s)
    rs(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var r, l;
          return (l = (r = o.toString) == null ? void 0 : r.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${Uo(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Up(i)), console.warn(...o);
  }
  jt(), sr = !1;
}
function Hp() {
  let e = Yn[Yn.length - 1];
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
function Up(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...qp(n));
  }), t;
}
function qp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, i = ` at <${Uo(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [i, ...Kp(e.props), o] : [i + o];
}
function Kp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...ou(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ou(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ve(t) ? (t = ou(e, le(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : se(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = le(t), n ? t : [`${e}=`, t]);
}
function ul(e, t) {
  b.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? M(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && M(`${t} is NaN - the duration expression might be incorrect.`));
}
const zp = {
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
}, Ao = {
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
function rs(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Ln(i, t, n);
  }
}
function Tt(e, t, n, s) {
  if (se(e)) {
    const i = rs(e, t, n, s);
    return i && xo(i) && i.catch((o) => {
      Ln(o, t, n);
    }), i;
  }
  if (q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Tt(e[o], t, n, s));
    return i;
  } else b.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ln(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = b.NODE_ENV !== "production" ? Ao[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Bt(), rs(o, null, 10, [
        e,
        a,
        u
      ]), jt();
      return;
    }
  }
  Wp(e, n, i, s, r);
}
function Wp(e, t, n, s = !0, i = !1) {
  if (b.NODE_ENV !== "production") {
    const o = Ao[t];
    if (n && ms(n), M(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && gs(), s)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const ot = [];
let Wt = -1;
const ys = [];
let xn = null, ps = 0;
const ru = /* @__PURE__ */ Promise.resolve();
let to = null;
const Gp = 100;
function _i(e) {
  const t = to || ru;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yp(e) {
  let t = Wt + 1, n = ot.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ot[s], o = li(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Io(e) {
  if (!(e.flags & 1)) {
    const t = li(e), n = ot[ot.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= li(n) ? ot.push(e) : ot.splice(Yp(t), 0, e), e.flags |= 1, lu();
  }
}
function lu() {
  to || (to = ru.then(au));
}
function Ns(e) {
  q(e) ? ys.push(...e) : xn && e.id === -1 ? xn.splice(ps + 1, 0, e) : e.flags & 1 || (ys.push(e), e.flags |= 1), lu();
}
function ua(e, t, n = Wt + 1) {
  for (b.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ot.length; n++) {
    const s = ot[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || b.NODE_ENV !== "production" && dl(t, s))
        continue;
      ot.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function no(e) {
  if (ys.length) {
    const t = [...new Set(ys)].sort(
      (n, s) => li(n) - li(s)
    );
    if (ys.length = 0, xn) {
      xn.push(...t);
      return;
    }
    for (xn = t, b.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ps = 0; ps < xn.length; ps++) {
      const n = xn[ps];
      b.NODE_ENV !== "production" && dl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, ps = 0;
  }
}
const li = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function au(e) {
  b.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = b.NODE_ENV !== "production" ? (n) => dl(e, n) : Oe;
  try {
    for (Wt = 0; Wt < ot.length; Wt++) {
      const n = ot[Wt];
      if (n && !(n.flags & 8)) {
        if (b.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), rs(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Wt < ot.length; Wt++) {
      const n = ot[Wt];
      n && (n.flags &= -2);
    }
    Wt = -1, ot.length = 0, no(e), to = null, (ot.length || ys.length) && au(e);
  }
}
function dl(e, t) {
  const n = e.get(t) || 0;
  if (n > Gp) {
    const s = t.i, i = s && Cs(s.type);
    return Ln(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Pt = !1;
const Bi = /* @__PURE__ */ new Map();
b.NODE_ENV !== "production" && (vi().__VUE_HMR_RUNTIME__ = {
  createRecord: ir(cu),
  rerender: ir(Xp),
  reload: ir(Zp)
});
const ts = /* @__PURE__ */ new Map();
function Jp(e) {
  const t = e.type.__hmrId;
  let n = ts.get(t);
  n || (cu(t, e.type), n = ts.get(t)), n.instances.add(e);
}
function Qp(e) {
  ts.get(e.type.__hmrId).instances.delete(e);
}
function cu(e, t) {
  return ts.has(e) ? !1 : (ts.set(e, {
    initialDef: so(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function so(e) {
  return vd(e) ? e.__vccOpts : e;
}
function Xp(e, t) {
  const n = ts.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, so(s.type).render = t), s.renderCache = [], Pt = !0, s.update(), Pt = !1;
  }));
}
function Zp(e, t) {
  const n = ts.get(e);
  if (!n) return;
  t = so(t), da(n.initialDef, t);
  const s = [...n.instances];
  for (let i = 0; i < s.length; i++) {
    const o = s[i], r = so(o.type);
    let l = Bi.get(r);
    l || (r !== n.initialDef && da(r, t), Bi.set(r, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? Io(() => {
      Pt = !0, o.parent.update(), Pt = !1, l.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(r);
  }
  Ns(() => {
    Bi.clear();
  });
}
function da(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ir(e) {
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
let At, Us = [], _r = !1;
function Ei(e, ...t) {
  At ? At.emit(e, ...t) : _r || Us.push({ event: e, args: t });
}
function fl(e, t) {
  var n, s;
  At = e, At ? (At.enabled = !0, Us.forEach(({ event: i, args: o }) => At.emit(i, ...o)), Us = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    fl(o, t);
  }), setTimeout(() => {
    At || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _r = !0, Us = []);
  }, 3e3)) : (_r = !0, Us = []);
}
function eh(e, t) {
  Ei("app:init", e, t, {
    Fragment: ue,
    Text: tn,
    Comment: Te,
    Static: An
  });
}
function th(e) {
  Ei("app:unmount", e);
}
const Er = /* @__PURE__ */ pl(
  "component:added"
  /* COMPONENT_ADDED */
), uu = /* @__PURE__ */ pl(
  "component:updated"
  /* COMPONENT_UPDATED */
), nh = /* @__PURE__ */ pl(
  "component:removed"
  /* COMPONENT_REMOVED */
), sh = (e) => {
  At && typeof At.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !At.cleanupBuffer(e) && nh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pl(e) {
  return (t) => {
    Ei(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ih = /* @__PURE__ */ du(
  "perf:start"
  /* PERFORMANCE_START */
), oh = /* @__PURE__ */ du(
  "perf:end"
  /* PERFORMANCE_END */
);
function du(e) {
  return (t, n, s) => {
    Ei(e, t.appContext.app, t.uid, t, n, s);
  };
}
function rh(e, t, n) {
  Ei(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Pe = null, Mo = null;
function ai(e) {
  const t = Pe;
  return Pe = e, Mo = e && e.type.__scopeId || null, t;
}
function lh(e) {
  Mo = e;
}
function ah() {
  Mo = null;
}
const ch = (e) => St;
function St(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Dr(-1);
    const o = ai(t);
    let r;
    try {
      r = e(...i);
    } finally {
      ai(o), s._d && Dr(1);
    }
    return b.NODE_ENV !== "production" && uu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function fu(e) {
  kc(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function pt(e, t) {
  if (Pe === null)
    return b.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = wi(Pe), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = fe] = t[i];
    o && (se(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && fn(r), s.push({
      dir: o,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Yt(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let a = l.dir[s];
    a && (Bt(), Tt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), jt());
  }
}
const pu = Symbol("_vte"), hu = (e) => e.__isTeleport, Jn = (e) => e && (e.disabled || e.disabled === ""), fa = (e) => e && (e.defer || e.defer === ""), pa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ha = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nr = (e, t) => {
  const n = e && e.to;
  if (oe(n))
    if (t) {
      const s = t(n);
      return b.NODE_ENV !== "production" && !s && !Jn(e) && M(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return b.NODE_ENV !== "production" && M(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return b.NODE_ENV !== "production" && !n && !Jn(e) && M(`Invalid Teleport target: ${n}`), n;
}, mu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, i, o, r, l, a, u) {
    const {
      mc: d,
      pc: c,
      pbc: h,
      o: { insert: m, querySelector: N, createText: E, createComment: D }
    } = u, k = Jn(t.props);
    let { shapeFlag: y, children: f, dynamicChildren: _ } = t;
    if (b.NODE_ENV !== "production" && Pt && (a = !1, _ = null), e == null) {
      const w = t.el = b.NODE_ENV !== "production" ? D("teleport start") : E(""), V = t.anchor = b.NODE_ENV !== "production" ? D("teleport end") : E("");
      m(w, n, s), m(V, n, s);
      const P = (v, O) => {
        y & 16 && (i && i.isCE && (i.ce._teleportTarget = v), d(
          f,
          v,
          O,
          i,
          o,
          r,
          l,
          a
        ));
      }, S = () => {
        const v = t.target = Nr(t.props, N), O = gu(v, t, E, m);
        v ? (r !== "svg" && pa(v) ? r = "svg" : r !== "mathml" && ha(v) && (r = "mathml"), k || (P(v, O), ji(t, !1))) : b.NODE_ENV !== "production" && !k && M(
          "Invalid Teleport target on mount:",
          v,
          `(${typeof v})`
        );
      };
      k && (P(n, V), ji(t, !0)), fa(t.props) ? (t.el.__isMounted = !1, Re(() => {
        S(), delete t.el.__isMounted;
      }, o)) : S();
    } else {
      if (fa(t.props) && e.el.__isMounted === !1) {
        Re(() => {
          mu.process(
            e,
            t,
            n,
            s,
            i,
            o,
            r,
            l,
            a,
            u
          );
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const w = t.anchor = e.anchor, V = t.target = e.target, P = t.targetAnchor = e.targetAnchor, S = Jn(e.props), v = S ? n : V, O = S ? w : P;
      if (r === "svg" || pa(V) ? r = "svg" : (r === "mathml" || ha(V)) && (r = "mathml"), _ ? (h(
        e.dynamicChildren,
        _,
        v,
        i,
        o,
        r,
        l
      ), Zs(e, t, b.NODE_ENV === "production")) : a || c(
        e,
        t,
        v,
        O,
        i,
        o,
        r,
        l,
        !1
      ), k)
        S ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Vi(
          t,
          n,
          w,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = t.target = Nr(
          t.props,
          N
        );
        I ? Vi(
          t,
          I,
          null,
          u,
          0
        ) : b.NODE_ENV !== "production" && M(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else S && Vi(
        t,
        V,
        P,
        u,
        1
      );
      ji(t, k);
    }
  },
  remove(e, t, n, { um: s, o: { remove: i } }, o) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: d,
      target: c,
      props: h
    } = e;
    if (c && (i(u), i(d)), o && i(a), r & 16) {
      const m = o || !Jn(h);
      for (let N = 0; N < l.length; N++) {
        const E = l[N];
        s(
          E,
          t,
          n,
          m,
          !!E.dynamicChildren
        );
      }
    }
  },
  move: Vi,
  hydrate: uh
};
function Vi(e, t, n, { o: { insert: s }, m: i }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: u, props: d } = e, c = o === 2;
  if (c && s(r, t, n), (!c || Jn(d)) && a & 16)
    for (let h = 0; h < u.length; h++)
      i(
        u[h],
        t,
        n,
        2
      );
  c && s(l, t, n);
}
function uh(e, t, n, s, i, o, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: u, createText: d }
}, c) {
  const h = t.target = Nr(
    t.props,
    a
  );
  if (h) {
    const m = Jn(t.props), N = h._lpa || h.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = c(
          r(e),
          t,
          l(e),
          n,
          s,
          i,
          o
        ), t.targetStart = N, t.targetAnchor = N && r(N);
      else {
        t.anchor = r(e);
        let E = N;
        for (; E; ) {
          if (E && E.nodeType === 8) {
            if (E.data === "teleport start anchor")
              t.targetStart = E;
            else if (E.data === "teleport anchor") {
              t.targetAnchor = E, h._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          E = r(E);
        }
        t.targetAnchor || gu(h, t, d, u), c(
          N && r(N),
          t,
          h,
          n,
          s,
          i,
          o
        );
      }
    ji(t, m);
  }
  return t.anchor && r(t.anchor);
}
const ls = mu;
function ji(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, i;
    for (t ? (s = e.el, i = e.anchor) : (s = e.targetStart, i = e.targetAnchor); s && s !== i; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function gu(e, t, n, s) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[pu] = o, e && (s(i, e), s(o, e)), o;
}
const Sn = Symbol("_leaveCb"), $i = Symbol("_enterCb");
function hl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Vt(() => {
    e.isMounted = !0;
  }), Fo(() => {
    e.isUnmounting = !0;
  }), e;
}
const xt = [Function, Array], ml = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: xt,
  onEnter: xt,
  onAfterEnter: xt,
  onEnterCancelled: xt,
  // leave
  onBeforeLeave: xt,
  onLeave: xt,
  onAfterLeave: xt,
  onLeaveCancelled: xt,
  // appear
  onBeforeAppear: xt,
  onAppear: xt,
  onAfterAppear: xt,
  onAppearCancelled: xt
}, yu = (e) => {
  const t = e.subTree;
  return t.component ? yu(t.component) : t;
}, dh = {
  name: "BaseTransition",
  props: ml,
  setup(e, { slots: t }) {
    const n = lt(), s = hl();
    return () => {
      const i = t.default && Po(t.default(), !0);
      if (!i || !i.length)
        return;
      const o = vu(i), r = le(e), { mode: l } = r;
      if (b.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && M(`invalid <transition> mode: ${l}`), s.isLeaving)
        return or(o);
      const a = ma(o);
      if (!a)
        return or(o);
      let u = ws(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      a.type !== Te && yn(a, u);
      let d = n.subTree && ma(n.subTree);
      if (d && d.type !== Te && !It(a, d) && yu(n).type !== Te) {
        let c = ws(
          d,
          r,
          s,
          n
        );
        if (yn(d, c), l === "out-in" && a.type !== Te)
          return s.isLeaving = !0, c.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, d = void 0;
          }, or(o);
        l === "in-out" && a.type !== Te ? c.delayLeave = (h, m, N) => {
          const E = _u(
            s,
            d
          );
          E[String(d.key)] = d, h[Sn] = () => {
            m(), h[Sn] = void 0, delete u.delayedLeave, d = void 0;
          }, u.delayedLeave = () => {
            N(), delete u.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return o;
    };
  }
};
function vu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Te) {
        if (b.NODE_ENV !== "production" && n) {
          M(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, b.NODE_ENV === "production") break;
      }
  }
  return t;
}
const bu = dh;
function _u(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ws(e, t, n, s, i) {
  const {
    appear: o,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: d,
    onEnterCancelled: c,
    onBeforeLeave: h,
    onLeave: m,
    onAfterLeave: N,
    onLeaveCancelled: E,
    onBeforeAppear: D,
    onAppear: k,
    onAfterAppear: y,
    onAppearCancelled: f
  } = t, _ = String(e.key), w = _u(n, e), V = (v, O) => {
    v && Tt(
      v,
      s,
      9,
      O
    );
  }, P = (v, O) => {
    const I = O[1];
    V(v, O), q(v) ? v.every(($) => $.length <= 1) && I() : v.length <= 1 && I();
  }, S = {
    mode: r,
    persisted: l,
    beforeEnter(v) {
      let O = a;
      if (!n.isMounted)
        if (o)
          O = D || a;
        else
          return;
      v[Sn] && v[Sn](
        !0
        /* cancelled */
      );
      const I = w[_];
      I && It(e, I) && I.el[Sn] && I.el[Sn](), V(O, [v]);
    },
    enter(v) {
      let O = u, I = d, $ = c;
      if (!n.isMounted)
        if (o)
          O = k || u, I = y || d, $ = f || c;
        else
          return;
      let L = !1;
      const G = v[$i] = (ee) => {
        L || (L = !0, ee ? V($, [v]) : V(I, [v]), S.delayedLeave && S.delayedLeave(), v[$i] = void 0);
      };
      O ? P(O, [v, G]) : G();
    },
    leave(v, O) {
      const I = String(e.key);
      if (v[$i] && v[$i](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      V(h, [v]);
      let $ = !1;
      const L = v[Sn] = (G) => {
        $ || ($ = !0, O(), G ? V(E, [v]) : V(N, [v]), v[Sn] = void 0, w[I] === e && delete w[I]);
      };
      w[I] = e, m ? P(m, [v, L]) : L();
    },
    clone(v) {
      const O = ws(
        v,
        t,
        n,
        s,
        i
      );
      return i && i(O), O;
    }
  };
  return S;
}
function or(e) {
  if (Ms(e))
    return e = Dt(e), e.children = null, e;
}
function ma(e) {
  if (!Ms(e))
    return hu(e.type) && e.children ? vu(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && se(n.default))
      return n.default();
  }
}
function yn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Po(e, t = !1, n) {
  let s = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === ue ? (r.patchFlag & 128 && i++, s = s.concat(
      Po(r.children, t, l)
    )) : (t || r.type !== Te) && s.push(l != null ? Dt(r, { key: l }) : r);
  }
  if (i > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gl(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function fh() {
  const e = lt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (b.NODE_ENV !== "production" && M(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function yl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Eu = /* @__PURE__ */ new WeakSet();
function ph(e) {
  const t = lt(), n = eu(null);
  if (t) {
    const i = t.refs === fe ? t.refs = {} : t.refs;
    let o;
    b.NODE_ENV !== "production" && (o = Object.getOwnPropertyDescriptor(i, e)) && !o.configurable ? M(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(i, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else b.NODE_ENV !== "production" && M(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = b.NODE_ENV !== "production" ? Vo(n) : n;
  return b.NODE_ENV !== "production" && Eu.add(s), s;
}
function vs(e, t, n, s, i = !1) {
  if (q(e)) {
    e.forEach(
      (N, E) => vs(
        N,
        t && (q(t) ? t[E] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if ($n(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && vs(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? wi(s.component) : s.el, r = i ? null : o, { i: l, r: a } = e;
  if (b.NODE_ENV !== "production" && !l) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, c = l.setupState, h = le(c), m = c === fe ? () => !1 : (N) => b.NODE_ENV !== "production" && (me(h, N) && !Ve(h[N]) && M(
    `Template ref "${N}" used on a non-ref value. It will not work in the production build.`
  ), Eu.has(h[N])) ? !1 : me(h, N);
  if (u != null && u !== a && (oe(u) ? (d[u] = null, m(u) && (c[u] = null)) : Ve(u) && (u.value = null)), se(a))
    rs(a, l, 12, [r, d]);
  else {
    const N = oe(a), E = Ve(a);
    if (N || E) {
      const D = () => {
        if (e.f) {
          const k = N ? m(a) ? c[a] : d[a] : a.value;
          i ? q(k) && el(k, o) : q(k) ? k.includes(o) || k.push(o) : N ? (d[a] = [o], m(a) && (c[a] = d[a])) : (a.value = [o], e.k && (d[e.k] = a.value));
        } else N ? (d[a] = r, m(a) && (c[a] = r)) : E ? (a.value = r, e.k && (d[e.k] = r)) : b.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (D.id = -1, Re(D, n)) : D();
    } else b.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ga = !1;
const Fn = () => {
  ga || (console.error("Hydration completed but contains mismatches."), ga = !0);
}, hh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", mh = (e) => e.namespaceURI.includes("MathML"), Ai = (e) => {
  if (e.nodeType === 1) {
    if (hh(e)) return "svg";
    if (mh(e)) return "mathml";
  }
}, qn = (e) => e.nodeType === 8;
function gh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: i,
      nextSibling: o,
      parentNode: r,
      remove: l,
      insert: a,
      createComment: u
    }
  } = e, d = (f, _) => {
    if (!_.hasChildNodes()) {
      b.NODE_ENV !== "production" && M(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, f, _), no(), _._vnode = f;
      return;
    }
    c(_.firstChild, f, null, null, null), no(), _._vnode = f;
  }, c = (f, _, w, V, P, S = !1) => {
    S = S || !!_.dynamicChildren;
    const v = qn(f) && f.data === "[", O = () => E(
      f,
      _,
      w,
      V,
      P,
      v
    ), { type: I, ref: $, shapeFlag: L, patchFlag: G } = _;
    let ee = f.nodeType;
    _.el = f, b.NODE_ENV !== "production" && (es(f, "__vnode", _, !0), es(f, "__vueParentComponent", w, !0)), G === -2 && (S = !1, _.dynamicChildren = null);
    let Z = null;
    switch (I) {
      case tn:
        ee !== 3 ? _.children === "" ? (a(_.el = i(""), r(f), f), Z = f) : Z = O() : (f.data !== _.children && (b.NODE_ENV !== "production" && M(
          "Hydration text mismatch in",
          f.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            f.data
          )}
  - expected on client: ${JSON.stringify(_.children)}`
        ), Fn(), f.data = _.children), Z = o(f));
        break;
      case Te:
        y(f) ? (Z = o(f), k(
          _.el = f.content.firstChild,
          f,
          w
        )) : ee !== 8 || v ? Z = O() : Z = o(f);
        break;
      case An:
        if (v && (f = o(f), ee = f.nodeType), ee === 1 || ee === 3) {
          Z = f;
          const ne = !_.children.length;
          for (let Q = 0; Q < _.staticCount; Q++)
            ne && (_.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), Q === _.staticCount - 1 && (_.anchor = Z), Z = o(Z);
          return v ? o(Z) : Z;
        } else
          O();
        break;
      case ue:
        v ? Z = N(
          f,
          _,
          w,
          V,
          P,
          S
        ) : Z = O();
        break;
      default:
        if (L & 1)
          (ee !== 1 || _.type.toLowerCase() !== f.tagName.toLowerCase()) && !y(f) ? Z = O() : Z = h(
            f,
            _,
            w,
            V,
            P,
            S
          );
        else if (L & 6) {
          _.slotScopeIds = P;
          const ne = r(f);
          if (v ? Z = D(f) : qn(f) && f.data === "teleport start" ? Z = D(f, f.data, "teleport end") : Z = o(f), t(
            _,
            ne,
            null,
            w,
            V,
            Ai(ne),
            S
          ), $n(_) && !_.type.__asyncResolved) {
            let Q;
            v ? (Q = ve(ue), Q.anchor = Z ? Z.previousSibling : ne.lastChild) : Q = f.nodeType === 3 ? je("") : ve("div"), Q.el = f, _.component.subTree = Q;
          }
        } else L & 64 ? ee !== 8 ? Z = O() : Z = _.type.hydrate(
          f,
          _,
          w,
          V,
          P,
          S,
          e,
          m
        ) : L & 128 ? Z = _.type.hydrate(
          f,
          _,
          w,
          V,
          Ai(r(f)),
          P,
          S,
          e,
          c
        ) : b.NODE_ENV !== "production" && M("Invalid HostVNode type:", I, `(${typeof I})`);
    }
    return $ != null && vs($, null, V, _), Z;
  }, h = (f, _, w, V, P, S) => {
    S = S || !!_.dynamicChildren;
    const { type: v, props: O, patchFlag: I, shapeFlag: $, dirs: L, transition: G } = _, ee = v === "input" || v === "option";
    if (b.NODE_ENV !== "production" || ee || I !== -1) {
      L && Yt(_, null, w, "created");
      let Z = !1;
      if (y(f)) {
        Z = Gu(
          null,
          // no need check parentSuspense in hydration
          G
        ) && w && w.vnode.props && w.vnode.props.appear;
        const Q = f.content.firstChild;
        if (Z) {
          const Ee = Q.getAttribute("class");
          Ee && (Q.$cls = Ee), G.beforeEnter(Q);
        }
        k(Q, f, w), _.el = f = Q;
      }
      if ($ & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let Q = m(
          f.firstChild,
          _,
          f,
          w,
          V,
          P,
          S
        ), Ee = !1;
        for (; Q; ) {
          qs(
            f,
            1
            /* CHILDREN */
          ) || (b.NODE_ENV !== "production" && !Ee && (M(
            "Hydration children mismatch on",
            f,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), Fn());
          const at = Q;
          Q = Q.nextSibling, l(at);
        }
      } else if ($ & 8) {
        let Q = _.children;
        Q[0] === `
` && (f.tagName === "PRE" || f.tagName === "TEXTAREA") && (Q = Q.slice(1)), f.textContent !== Q && (qs(
          f,
          0
          /* TEXT */
        ) || (b.NODE_ENV !== "production" && M(
          "Hydration text content mismatch on",
          f,
          `
  - rendered on server: ${f.textContent}
  - expected on client: ${_.children}`
        ), Fn()), f.textContent = _.children);
      }
      if (O) {
        if (b.NODE_ENV !== "production" || ee || !S || I & 48) {
          const Q = f.tagName.includes("-");
          for (const Ee in O)
            b.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(L && L.some((at) => at.dir.created)) && yh(f, Ee, O[Ee], _, w) && Fn(), (ee && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !Vn(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || Q) && s(f, Ee, null, O[Ee], void 0, w);
        } else if (O.onClick)
          s(
            f,
            "onClick",
            null,
            O.onClick,
            void 0,
            w
          );
        else if (I & 4 && hn(O.style))
          for (const Q in O.style) O.style[Q];
      }
      let ne;
      (ne = O && O.onVnodeBeforeMount) && ft(ne, w, _), L && Yt(_, null, w, "beforeMount"), ((ne = O && O.onVnodeMounted) || L || Z) && id(() => {
        ne && ft(ne, w, _), Z && G.enter(f), L && Yt(_, null, w, "mounted");
      }, V);
    }
    return f.nextSibling;
  }, m = (f, _, w, V, P, S, v) => {
    v = v || !!_.dynamicChildren;
    const O = _.children, I = O.length;
    let $ = !1;
    for (let L = 0; L < I; L++) {
      const G = v ? O[L] : O[L] = rt(O[L]), ee = G.type === tn;
      f ? (ee && !v && L + 1 < I && rt(O[L + 1]).type === tn && (a(
        i(
          f.data.slice(G.children.length)
        ),
        w,
        o(f)
      ), f.data = G.children), f = c(
        f,
        G,
        V,
        P,
        S,
        v
      )) : ee && !G.children ? a(G.el = i(""), w) : (qs(
        w,
        1
        /* CHILDREN */
      ) || (b.NODE_ENV !== "production" && !$ && (M(
        "Hydration children mismatch on",
        w,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), $ = !0), Fn()), n(
        null,
        G,
        w,
        null,
        V,
        P,
        Ai(w),
        S
      ));
    }
    return f;
  }, N = (f, _, w, V, P, S) => {
    const { slotScopeIds: v } = _;
    v && (P = P ? P.concat(v) : v);
    const O = r(f), I = m(
      o(f),
      _,
      O,
      w,
      V,
      P,
      S
    );
    return I && qn(I) && I.data === "]" ? o(_.anchor = I) : (Fn(), a(_.anchor = u("]"), O, I), I);
  }, E = (f, _, w, V, P, S) => {
    if (qs(
      f.parentElement,
      1
      /* CHILDREN */
    ) || (b.NODE_ENV !== "production" && M(
      `Hydration node mismatch:
- rendered on server:`,
      f,
      f.nodeType === 3 ? "(text)" : qn(f) && f.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      _.type
    ), Fn()), _.el = null, S) {
      const I = D(f);
      for (; ; ) {
        const $ = o(f);
        if ($ && $ !== I)
          l($);
        else
          break;
      }
    }
    const v = o(f), O = r(f);
    return l(f), n(
      null,
      _,
      O,
      v,
      w,
      V,
      Ai(O),
      P
    ), w && (w.vnode.el = _.el, Ho(w, _.el)), v;
  }, D = (f, _ = "[", w = "]") => {
    let V = 0;
    for (; f; )
      if (f = o(f), f && qn(f) && (f.data === _ && V++, f.data === w)) {
        if (V === 0)
          return o(f);
        V--;
      }
    return f;
  }, k = (f, _, w) => {
    const V = _.parentNode;
    V && V.replaceChild(f, _);
    let P = w;
    for (; P; )
      P.vnode.el === _ && (P.vnode.el = P.subTree.el = f), P = P.parent;
  }, y = (f) => f.nodeType === 1 && f.tagName === "TEMPLATE";
  return [d, c];
}
function yh(e, t, n, s, i) {
  let o, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Qe(n), vh(ya(l || ""), ya(a)) || (o = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = oe(n) ? n : Kf(_t(n));
    const u = va(l), d = va(a);
    if (s.dirs)
      for (const { dir: c, value: h } of s.dirs)
        c.name === "show" && !h && d.set("display", "none");
    i && Nu(i, s, d), bh(u, d) || (o = 3, r = "style");
  } else (e instanceof SVGElement && ep(t) || e instanceof HTMLElement && (ra(t) || Zf(t))) && (ra(t) ? (l = e.hasAttribute(t), a = sl(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = tp(n) ? String(n) : !1), l !== a && (o = 4, r = t));
  if (o != null && !qs(e, o)) {
    const u = (h) => h === !1 ? "(not rendered)" : `${r}="${h}"`, d = `Hydration ${wu[o]} mismatch on`, c = `
  - rendered on server: ${u(l)}
  - expected on client: ${u(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return M(d, e, c), !0;
  }
  return !1;
}
function ya(e) {
  return new Set(e.trim().split(/\s+/));
}
function vh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function va(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, i] = n.split(":");
    s = s.trim(), i = i && i.trim(), s && i && t.set(s, i);
  }
  return t;
}
function bh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function Nu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ue && s.children.includes(t))) {
    const i = e.getCssVars();
    for (const o in i) {
      const r = Mc(i[o]);
      n.set(`--${sp(o)}`, r);
    }
  }
  t === s && e.parent && Nu(e.parent, e.vnode, n);
}
const ba = "data-allow-mismatch", wu = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function qs(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(ba); )
      e = e.parentElement;
  const n = e && e.getAttribute(ba);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(wu[t]);
  }
}
const _h = vi().requestIdleCallback || ((e) => setTimeout(e, 1)), Eh = vi().cancelIdleCallback || ((e) => clearTimeout(e)), Nh = (e = 1e4) => (t) => {
  const n = _h(t, { timeout: e });
  return () => Eh(n);
};
function wh(e) {
  const { top: t, left: n, bottom: s, right: i } = e.getBoundingClientRect(), { innerHeight: o, innerWidth: r } = window;
  return (t > 0 && t < o || s > 0 && s < o) && (n > 0 && n < r || i > 0 && i < r);
}
const xh = (e) => (t, n) => {
  const s = new IntersectionObserver((i) => {
    for (const o of i)
      if (o.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((i) => {
    if (i instanceof Element) {
      if (wh(i))
        return t(), s.disconnect(), !1;
      s.observe(i);
    }
  }), () => s.disconnect();
}, Sh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Ch = (e = []) => (t, n) => {
  oe(e) && (e = [e]);
  let s = !1;
  const i = (r) => {
    s || (s = !0, o(), t(), r.target.dispatchEvent(new r.constructor(r.type, r)));
  }, o = () => {
    n((r) => {
      for (const l of e)
        r.removeEventListener(l, i);
    });
  };
  return n((r) => {
    for (const l of e)
      r.addEventListener(l, i, { once: !0 });
  }), o;
};
function kh(e, t) {
  if (qn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (qn(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const $n = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oh(e) {
  se(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: i = 200,
    hydrate: o,
    timeout: r,
    // undefined = never times out
    suspensible: l = !0,
    onError: a
  } = e;
  let u = null, d, c = 0;
  const h = () => (c++, u = null, m()), m = () => {
    let N;
    return u || (N = u = t().catch((E) => {
      if (E = E instanceof Error ? E : new Error(String(E)), a)
        return new Promise((D, k) => {
          a(E, () => D(h()), () => k(E), c + 1);
        });
      throw E;
    }).then((E) => {
      if (N !== u && u)
        return u;
      if (b.NODE_ENV !== "production" && !E && M(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), E && (E.__esModule || E[Symbol.toStringTag] === "Module") && (E = E.default), b.NODE_ENV !== "production" && E && !he(E) && !se(E))
        throw new Error(`Invalid async component load result: ${E}`);
      return d = E, E;
    }));
  };
  return /* @__PURE__ */ gl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(N, E, D) {
      let k = !1;
      (E.bu || (E.bu = [])).push(() => k = !0);
      const y = () => {
        if (k) {
          b.NODE_ENV !== "production" && M(
            `Skipping lazy hydration for component '${Cs(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        D();
      }, f = o ? () => {
        const _ = o(
          y,
          (w) => kh(N, w)
        );
        _ && (E.bum || (E.bum = [])).push(_);
      } : y;
      d ? f() : m().then(() => !E.isUnmounted && f());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const N = Be;
      if (yl(N), d)
        return () => rr(d, N);
      const E = (f) => {
        u = null, Ln(
          f,
          N,
          13,
          !s
        );
      };
      if (l && N.suspense || Ss)
        return m().then((f) => () => rr(f, N)).catch((f) => (E(f), () => s ? ve(s, {
          error: f
        }) : null));
      const D = X(!1), k = X(), y = X(!!i);
      return i && setTimeout(() => {
        y.value = !1;
      }, i), r != null && setTimeout(() => {
        if (!D.value && !k.value) {
          const f = new Error(
            `Async component timed out after ${r}ms.`
          );
          E(f), k.value = f;
        }
      }, r), m().then(() => {
        D.value = !0, N.parent && Ms(N.parent.vnode) && N.parent.update();
      }).catch((f) => {
        E(f), k.value = f;
      }), () => {
        if (D.value && d)
          return rr(d, N);
        if (k.value && s)
          return ve(s, {
            error: k.value
          });
        if (n && !y.value)
          return ve(n);
      };
    }
  });
}
function rr(e, t) {
  const { ref: n, props: s, children: i, ce: o } = t.vnode, r = ve(e, s, i);
  return r.ref = n, r.ce = o, delete t.vnode.ce, r;
}
const Ms = (e) => e.type.__isKeepAlive, Th = {
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
    const n = lt(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const y = t.default && t.default();
        return y && y.length === 1 ? y[0] : y;
      };
    const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    let r = null;
    b.NODE_ENV !== "production" && (n.__v_cache = i);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: u,
        um: d,
        o: { createElement: c }
      }
    } = s, h = c("div");
    s.activate = (y, f, _, w, V) => {
      const P = y.component;
      u(y, f, _, 0, l), a(
        P.vnode,
        y,
        f,
        _,
        P,
        l,
        w,
        y.slotScopeIds,
        V
      ), Re(() => {
        P.isDeactivated = !1, P.a && On(P.a);
        const S = y.props && y.props.onVnodeMounted;
        S && ft(S, P.parent, y);
      }, l), b.NODE_ENV !== "production" && Er(P);
    }, s.deactivate = (y) => {
      const f = y.component;
      lo(f.m), lo(f.a), u(y, h, null, 1, l), Re(() => {
        f.da && On(f.da);
        const _ = y.props && y.props.onVnodeUnmounted;
        _ && ft(_, f.parent, y), f.isDeactivated = !0;
      }, l), b.NODE_ENV !== "production" && Er(f), b.NODE_ENV !== "production" && (f.__keepAliveStorageContainer = h);
    };
    function m(y) {
      lr(y), d(y, n, l, !0);
    }
    function N(y) {
      i.forEach((f, _) => {
        const w = Cs(f.type);
        w && !y(w) && E(_);
      });
    }
    function E(y) {
      const f = i.get(y);
      f && (!r || !It(f, r)) ? m(f) : r && lr(r), i.delete(y), o.delete(y);
    }
    en(
      () => [e.include, e.exclude],
      ([y, f]) => {
        y && N((_) => Ks(y, _)), f && N((_) => !Ks(f, _));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let D = null;
    const k = () => {
      D != null && (co(n.subTree.type) ? Re(() => {
        i.set(D, Ii(n.subTree));
      }, n.subTree.suspense) : i.set(D, Ii(n.subTree)));
    };
    return Vt(k), Lo(k), Fo(() => {
      i.forEach((y) => {
        const { subTree: f, suspense: _ } = n, w = Ii(f);
        if (y.type === w.type && y.key === w.key) {
          lr(w);
          const V = w.component.da;
          V && Re(V, _);
          return;
        }
        m(y);
      });
    }), () => {
      if (D = null, !t.default)
        return r = null;
      const y = t.default(), f = y[0];
      if (y.length > 1)
        return b.NODE_ENV !== "production" && M("KeepAlive should contain exactly one component child."), r = null, y;
      if (!on(f) || !(f.shapeFlag & 4) && !(f.shapeFlag & 128))
        return r = null, f;
      let _ = Ii(f);
      if (_.type === Te)
        return r = null, _;
      const w = _.type, V = Cs(
        $n(_) ? _.type.__asyncResolved || {} : w
      ), { include: P, exclude: S, max: v } = e;
      if (P && (!V || !Ks(P, V)) || S && V && Ks(S, V))
        return _.shapeFlag &= -257, r = _, f;
      const O = _.key == null ? w : _.key, I = i.get(O);
      return _.el && (_ = Dt(_), f.shapeFlag & 128 && (f.ssContent = _)), D = O, I ? (_.el = I.el, _.component = I.component, _.transition && yn(_, _.transition), _.shapeFlag |= 512, o.delete(O), o.add(O)) : (o.add(O), v && o.size > parseInt(v, 10) && E(o.values().next().value)), _.shapeFlag |= 256, r = _, co(f.type) ? f : _;
    };
  }
}, Dh = Th;
function Ks(e, t) {
  return q(e) ? e.some((n) => Ks(n, t)) : oe(e) ? e.split(",").includes(t) : If(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function xu(e, t) {
  Cu(e, "a", t);
}
function Su(e, t) {
  Cu(e, "da", t);
}
function Cu(e, t, n = Be) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ro(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ms(i.parent.vnode) && Vh(s, t, n, i), i = i.parent;
  }
}
function Vh(e, t, n, s) {
  const i = Ro(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  rn(() => {
    el(s[t], i);
  }, n);
}
function lr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ii(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ro(e, t, n = Be, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Bt();
      const l = ss(n), a = Tt(t, n, e, r);
      return l(), jt(), a;
    });
    return s ? i.unshift(o) : i.push(o), o;
  } else if (b.NODE_ENV !== "production") {
    const i = Qt(Ao[e].replace(/ hook$/, ""));
    M(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const vn = (e) => (t, n = Be) => {
  (!Ss || e === "sp") && Ro(e, (...s) => t(...s), n);
}, ku = vn("bm"), Vt = vn("m"), vl = vn(
  "bu"
), Lo = vn("u"), Fo = vn(
  "bum"
), rn = vn("um"), Ou = vn(
  "sp"
), Tu = vn("rtg"), Du = vn("rtc");
function Vu(e, t = Be) {
  Ro("ec", e, t);
}
const io = "components", $h = "directives";
function Ah(e, t) {
  return _l(io, e, !0, t) || e;
}
const bl = Symbol.for("v-ndc");
function $u(e) {
  return oe(e) ? _l(io, e, !1) || e : e || bl;
}
function Ih(e) {
  return _l($h, e);
}
function _l(e, t, n = !0, s = !1) {
  const i = Pe || Be;
  if (i) {
    const o = i.type;
    if (e === io) {
      const l = Cs(
        o,
        !1
      );
      if (l && (l === t || l === Se(t) || l === sn(Se(t))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      _a(i[e] || o[e], t) || // global registration
      _a(i.appContext[e], t)
    );
    if (!r && s)
      return o;
    if (b.NODE_ENV !== "production" && n && !r) {
      const l = e === io ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else b.NODE_ENV !== "production" && M(
    `resolve${sn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function _a(e, t) {
  return e && (e[t] || e[Se(t)] || e[sn(Se(t))]);
}
function Ae(e, t, n, s) {
  let i;
  const o = n && n[s], r = q(e);
  if (r || oe(e)) {
    const l = r && hn(e);
    let a = !1, u = !1;
    l && (a = !Xe(e), u = Ht(e), e = To(e)), i = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      i[d] = t(
        a ? u ? Zi(Ke(e[d])) : Ke(e[d]) : e[d],
        d,
        void 0,
        o && o[d]
      );
  } else if (typeof e == "number") {
    b.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o && o[l]);
  } else if (he(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o && o[a])
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const d = l[a];
        i[a] = t(e[d], d, a, o && o[a]);
      }
    }
  else
    i = [];
  return n && (n[s] = i), i;
}
function Mh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (q(s))
      for (let i = 0; i < s.length; i++)
        e[s[i].name] = s[i].fn;
    else s && (e[s.name] = s.key ? (...i) => {
      const o = s.fn(...i);
      return o && (o.key = s.key), o;
    } : s.fn);
  }
  return e;
}
function El(e, t, n = {}, s, i) {
  if (Pe.ce || Pe.parent && $n(Pe.parent) && Pe.parent.ce)
    return t !== "default" && (n.name = t), C(), Ut(
      ue,
      null,
      [ve("slot", n, s && s())],
      64
    );
  let o = e[t];
  b.NODE_ENV !== "production" && o && o.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), C();
  const r = o && Nl(o(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = Ut(
    ue,
    {
      key: (l && !gt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && e._ === 1 ? 64 : -2
  );
  return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), o && o._c && (o._d = !0), a;
}
function Nl(e) {
  return e.some((t) => on(t) ? !(t.type === Te || t.type === ue && !Nl(t.children)) : !0) ? e : null;
}
function Ph(e, t) {
  const n = {};
  if (b.NODE_ENV !== "production" && !he(e))
    return M("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Qt(s)] = e[s];
  return n;
}
const wr = (e) => e ? pd(e) ? wi(e) : wr(e.parent) : null, Qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => b.NODE_ENV !== "production" ? Mt(e.props) : e.props,
    $attrs: (e) => b.NODE_ENV !== "production" ? Mt(e.attrs) : e.attrs,
    $slots: (e) => b.NODE_ENV !== "production" ? Mt(e.slots) : e.slots,
    $refs: (e) => b.NODE_ENV !== "production" ? Mt(e.refs) : e.refs,
    $parent: (e) => wr(e.parent),
    $root: (e) => wr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Io(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _i.bind(e.proxy)),
    $watch: (e) => Cm.bind(e)
  })
), wl = (e) => e === "_" || e === "$", ar = (e, t) => e !== fe && !e.__isScriptSetup && me(e, t), Qs = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: l, appContext: a } = e;
    if (b.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const m = r[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ar(s, t))
          return r[t] = 1, s[t];
        if (i !== fe && me(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && me(u, t)
        )
          return r[t] = 3, o[t];
        if (n !== fe && me(n, t))
          return r[t] = 4, n[t];
        xr && (r[t] = 0);
      }
    }
    const d = Qn[t];
    let c, h;
    if (d)
      return t === "$attrs" ? (Le(e.attrs, "get", ""), b.NODE_ENV !== "production" && ao()) : b.NODE_ENV !== "production" && t === "$slots" && Le(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== fe && me(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, me(h, t)
    )
      return h[t];
    b.NODE_ENV !== "production" && Pe && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== fe && wl(t[0]) && me(i, t) ? M(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Pe && M(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return ar(i, t) ? (i[t] = n, !0) : b.NODE_ENV !== "production" && i.__isScriptSetup && me(i, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== fe && me(s, t) ? (s[t] = n, !0) : me(e.props, t) ? (b.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (b.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (b.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o }
  }, r) {
    let l;
    return !!n[r] || e !== fe && me(e, r) || ar(t, r) || (l = o[0]) && me(l, r) || me(s, r) || me(Qn, r) || me(i.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
b.NODE_ENV !== "production" && (Qs.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Rh = /* @__PURE__ */ de({}, Qs, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return Qs.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Bf(t);
    return b.NODE_ENV !== "production" && !n && Qs.has(e, t) && M(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Lh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Qn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Qn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Oe
    });
  }), t;
}
function Fh(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Oe
    });
  });
}
function Bh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(le(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (wl(s[0])) {
        M(
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
        set: Oe
      });
    }
  });
}
const as = (e) => M(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function jh() {
  return b.NODE_ENV !== "production" && as("defineProps"), null;
}
function Hh() {
  return b.NODE_ENV !== "production" && as("defineEmits"), null;
}
function Uh(e) {
  b.NODE_ENV !== "production" && as("defineExpose");
}
function qh(e) {
  b.NODE_ENV !== "production" && as("defineOptions");
}
function Kh() {
  return b.NODE_ENV !== "production" && as("defineSlots"), null;
}
function zh() {
  b.NODE_ENV !== "production" && as("defineModel");
}
function Wh(e, t) {
  return b.NODE_ENV !== "production" && as("withDefaults"), null;
}
function Gh() {
  return Au("useSlots").slots;
}
function Yh() {
  return Au("useAttrs").attrs;
}
function Au(e) {
  const t = lt();
  return b.NODE_ENV !== "production" && !t && M(`${e}() called without active instance.`), t.setupContext || (t.setupContext = yd(t));
}
function ci(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Jh(e, t) {
  const n = ci(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let i = n[s];
    i ? q(i) || se(i) ? i = n[s] = { type: i, default: t[s] } : i.default = t[s] : i === null ? i = n[s] = { default: t[s] } : b.NODE_ENV !== "production" && M(`props default key "${s}" has no corresponding declaration.`), i && t[`__skip_${s}`] && (i.skipFactory = !0);
  }
  return n;
}
function Qh(e, t) {
  return !e || !t ? e || t : q(e) && q(t) ? e.concat(t) : de({}, ci(e), ci(t));
}
function Xh(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function Zh(e) {
  const t = lt();
  b.NODE_ENV !== "production" && !t && M(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Ar(), xo(n) && (n = n.catch((s) => {
    throw ss(t), s;
  })), [n, () => ss(t)];
}
function em() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let xr = !0;
function tm(e) {
  const t = xl(e), n = e.proxy, s = e.ctx;
  xr = !1, t.beforeCreate && Ea(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: h,
    beforeUpdate: m,
    updated: N,
    activated: E,
    deactivated: D,
    beforeDestroy: k,
    beforeUnmount: y,
    destroyed: f,
    unmounted: _,
    render: w,
    renderTracked: V,
    renderTriggered: P,
    errorCaptured: S,
    serverPrefetch: v,
    // public API
    expose: O,
    inheritAttrs: I,
    // assets
    components: $,
    directives: L,
    filters: G
  } = t, ee = b.NODE_ENV !== "production" ? em() : null;
  if (b.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const Q in ne)
        ee("Props", Q);
  }
  if (u && nm(u, s, ee), r)
    for (const ne in r) {
      const Q = r[ne];
      se(Q) ? (b.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = Q.bind(n), b.NODE_ENV !== "production" && ee("Methods", ne)) : b.NODE_ENV !== "production" && M(
        `Method "${ne}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    b.NODE_ENV !== "production" && !se(i) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = i.call(n, n);
    if (b.NODE_ENV !== "production" && xo(ne) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !he(ne))
      b.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = _s(ne), b.NODE_ENV !== "production")
      for (const Q in ne)
        ee("Data", Q), wl(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => ne[Q],
          set: Oe
        });
  }
  if (xr = !0, o)
    for (const ne in o) {
      const Q = o[ne], Ee = se(Q) ? Q.bind(n, n) : se(Q.get) ? Q.get.bind(n, n) : Oe;
      b.NODE_ENV !== "production" && Ee === Oe && M(`Computed property "${ne}" has no getter.`);
      const at = !se(Q) && se(Q.set) ? Q.set.bind(n) : b.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : Oe, Nt = ae({
        get: Ee,
        set: at
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (wt) => Nt.value = wt
      }), b.NODE_ENV !== "production" && ee("Computed", ne);
    }
  if (l)
    for (const ne in l)
      Iu(l[ne], s, n, ne);
  if (a) {
    const ne = se(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((Q) => {
      Pu(Q, ne[Q]);
    });
  }
  d && Ea(d, e, "c");
  function Z(ne, Q) {
    q(Q) ? Q.forEach((Ee) => ne(Ee.bind(n))) : Q && ne(Q.bind(n));
  }
  if (Z(ku, c), Z(Vt, h), Z(vl, m), Z(Lo, N), Z(xu, E), Z(Su, D), Z(Vu, S), Z(Du, V), Z(Tu, P), Z(Fo, y), Z(rn, _), Z(Ou, v), q(O))
    if (O.length) {
      const ne = e.exposed || (e.exposed = {});
      O.forEach((Q) => {
        Object.defineProperty(ne, Q, {
          get: () => n[Q],
          set: (Ee) => n[Q] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === Oe && (e.render = w), I != null && (e.inheritAttrs = I), $ && (e.components = $), L && (e.directives = L), v && yl(e);
}
function nm(e, t, n = Oe) {
  q(e) && (e = Sr(e));
  for (const s in e) {
    const i = e[s];
    let o;
    he(i) ? "default" in i ? o = Xs(
      i.from || s,
      i.default,
      !0
    ) : o = Xs(i.from || s) : o = Xs(i), Ve(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[s] = o, b.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Ea(e, t, n) {
  Tt(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Iu(e, t, n, s) {
  let i = s.includes(".") ? Zu(n, s) : () => n[s];
  if (oe(e)) {
    const o = t[e];
    se(o) ? en(i, o) : b.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, o);
  } else if (se(e))
    en(i, e.bind(n));
  else if (he(e))
    if (q(e))
      e.forEach((o) => Iu(o, t, n, s));
    else {
      const o = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(o) ? en(i, o, e) : b.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else b.NODE_ENV !== "production" && M(`Invalid watch option: "${s}"`, e);
}
function xl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(
    (u) => oo(a, u, r, !0)
  ), oo(a, t, r)), he(t) && o.set(t, a), a;
}
function oo(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && oo(e, o, n, !0), i && i.forEach(
    (r) => oo(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      b.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = sm[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const sm = {
  data: Na,
  props: wa,
  emits: wa,
  // objects
  methods: zs,
  computed: zs,
  // lifecycle
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  // assets
  components: zs,
  directives: zs,
  // watch
  watch: om,
  // provide / inject
  provide: Na,
  inject: im
};
function Na(e, t) {
  return t ? e ? function() {
    return de(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function im(e, t) {
  return zs(Sr(e), Sr(t));
}
function Sr(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function st(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zs(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wa(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    ci(e),
    ci(t ?? {})
  ) : t;
}
function om(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = st(e[s], t[s]);
  return n;
}
function Mu() {
  return {
    app: null,
    config: {
      isNativeTag: Hs,
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
let rm = 0;
function lm(e, t) {
  return function(s, i = null) {
    se(s) || (s = de({}, s)), i != null && !he(i) && (b.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), i = null);
    const o = Mu(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = o.app = {
      _uid: rm++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Rr,
      get config() {
        return o.config;
      },
      set config(d) {
        b.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return r.has(d) ? b.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : d && se(d.install) ? (r.add(d), d.install(u, ...c)) : se(d) ? (r.add(d), d(u, ...c)) : b.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return o.mixins.includes(d) ? b.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), u;
      },
      component(d, c) {
        return b.NODE_ENV !== "production" && Ir(d, o.config), c ? (b.NODE_ENV !== "production" && o.components[d] && M(`Component "${d}" has already been registered in target app.`), o.components[d] = c, u) : o.components[d];
      },
      directive(d, c) {
        return b.NODE_ENV !== "production" && fu(d), c ? (b.NODE_ENV !== "production" && o.directives[d] && M(`Directive "${d}" has already been registered in target app.`), o.directives[d] = c, u) : o.directives[d];
      },
      mount(d, c, h) {
        if (a)
          b.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          b.NODE_ENV !== "production" && d.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = u._ceVNode || ve(s, i);
          return m.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), b.NODE_ENV !== "production" && (o.reload = () => {
            const N = Dt(m);
            N.el = null, e(N, d, h);
          }), c && t ? t(m, d) : e(m, d, h), a = !0, u._container = d, d.__vue_app__ = u, b.NODE_ENV !== "production" && (u._instance = m.component, eh(u, Rr)), wi(m.component);
        }
      },
      onUnmount(d) {
        b.NODE_ENV !== "production" && typeof d != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Tt(
          l,
          u._instance,
          16
        ), e(null, u._container), b.NODE_ENV !== "production" && (u._instance = null, th(u)), delete u._container.__vue_app__) : b.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return b.NODE_ENV !== "production" && d in o.provides && (me(o.provides, d) ? M(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[d] = c, u;
      },
      runWithContext(d) {
        const c = Xn;
        Xn = u;
        try {
          return d();
        } finally {
          Xn = c;
        }
      }
    };
    return u;
  };
}
let Xn = null;
function Pu(e, t) {
  if (!Be)
    b.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = Be.provides;
    const s = Be.parent && Be.parent.provides;
    s === n && (n = Be.provides = Object.create(s)), n[e] = t;
  }
}
function Xs(e, t, n = !1) {
  const s = lt();
  if (s || Xn) {
    let i = Xn ? Xn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
    b.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else b.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
function am() {
  return !!(lt() || Xn);
}
const Ru = {}, Lu = () => Object.create(Ru), Fu = (e) => Object.getPrototypeOf(e) === Ru;
function cm(e, t, n, s = !1) {
  const i = {}, o = Lu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Bu(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  b.NODE_ENV !== "production" && Hu(t || {}, i, e), n ? e.props = s ? i : Xc(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function um(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function dm(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = le(i), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(b.NODE_ENV !== "production" && um(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let h = d[c];
        if (Bo(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (me(o, h))
            m !== o[h] && (o[h] = m, u = !0);
          else {
            const N = Se(h);
            i[N] = Cr(
              a,
              l,
              N,
              m,
              e,
              !1
            );
          }
        else
          m !== o[h] && (o[h] = m, u = !0);
      }
    }
  } else {
    Bu(e, t, i, o) && (u = !0);
    let d;
    for (const c in l)
      (!t || // for camelCase
      !me(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ye(c)) === c || !me(t, d))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[c] = Cr(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete i[c]);
    if (o !== l)
      for (const c in o)
        (!t || !me(t, c)) && (delete o[c], u = !0);
  }
  u && Xt(e.attrs, "set", ""), b.NODE_ENV !== "production" && Hu(t || {}, i, e);
}
function Bu(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Vn(a))
        continue;
      const u = t[a];
      let d;
      i && me(i, d = Se(a)) ? !o || !o.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : Bo(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (o) {
    const a = le(n), u = l || fe;
    for (let d = 0; d < o.length; d++) {
      const c = o[d];
      n[c] = Cr(
        i,
        a,
        c,
        u[c],
        e,
        !me(u, c)
      );
    }
  }
  return r;
}
function Cr(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = me(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && se(a)) {
        const { propsDefaults: u } = i;
        if (n in u)
          s = u[n];
        else {
          const d = ss(i);
          s = u[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ye(n)) && (s = !0));
  }
  return s;
}
const fm = /* @__PURE__ */ new WeakMap();
function ju(e, t, n = !1) {
  const s = n ? fm : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let a = !1;
  if (!se(e)) {
    const d = (c) => {
      a = !0;
      const [h, m] = ju(c, t, !0);
      de(r, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !a)
    return he(e) && s.set(e, hs), hs;
  if (q(o))
    for (let d = 0; d < o.length; d++) {
      b.NODE_ENV !== "production" && !oe(o[d]) && M("props must be strings when using array syntax.", o[d]);
      const c = Se(o[d]);
      xa(c) && (r[c] = fe);
    }
  else if (o) {
    b.NODE_ENV !== "production" && !he(o) && M("invalid props options", o);
    for (const d in o) {
      const c = Se(d);
      if (xa(c)) {
        const h = o[d], m = r[c] = q(h) || se(h) ? { type: h } : de({}, h), N = m.type;
        let E = !1, D = !0;
        if (q(N))
          for (let k = 0; k < N.length; ++k) {
            const y = N[k], f = se(y) && y.name;
            if (f === "Boolean") {
              E = !0;
              break;
            } else f === "String" && (D = !1);
          }
        else
          E = se(N) && N.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = E, m[
          1
          /* shouldCastTrue */
        ] = D, (E || me(m, "default")) && l.push(c);
      }
    }
  }
  const u = [r, l];
  return he(e) && s.set(e, u), u;
}
function xa(e) {
  return e[0] !== "$" && !Vn(e) ? !0 : (b.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function pm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Hu(e, t, n) {
  const s = le(t), i = n.propsOptions[0], o = Object.keys(e).map((r) => Se(r));
  for (const r in i) {
    let l = i[r];
    l != null && hm(
      r,
      s[r],
      l,
      b.NODE_ENV !== "production" ? Mt(s) : s,
      !o.includes(r)
    );
  }
}
function hm(e, t, n, s, i) {
  const { type: o, required: r, validator: l, skipCheck: a } = n;
  if (r && i) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !a) {
      let u = !1;
      const d = q(o) ? o : [o], c = [];
      for (let h = 0; h < d.length && !u; h++) {
        const { valid: m, expectedType: N } = gm(t, d[h]);
        c.push(N || ""), u = m;
      }
      if (!u) {
        M(ym(e, t, c));
        return;
      }
    }
    l && !l(t, s) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const mm = /* @__PURE__ */ He(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function gm(e, t) {
  let n;
  const s = pm(t);
  if (s === "null")
    n = e === null;
  else if (mm(s)) {
    const i = typeof e;
    n = i === s.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else s === "Object" ? n = he(e) : s === "Array" ? n = q(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function ym(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(sn).join(" | ")}`;
  const i = n[0], o = tl(t), r = Sa(t, i), l = Sa(t, o);
  return n.length === 1 && Ca(i) && !vm(i, o) && (s += ` with value ${r}`), s += `, got ${o} `, Ca(o) && (s += `with value ${l}.`), s;
}
function Sa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ca(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function vm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Sl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Cl = (e) => q(e) ? e.map(rt) : [rt(e)], bm = (e, t, n) => {
  if (t._n)
    return t;
  const s = St((...i) => (b.NODE_ENV !== "production" && Be && !(n === null && Pe) && !(n && n.root !== Be.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Cl(t(...i))), n);
  return s._c = !1, s;
}, Uu = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Sl(i)) continue;
    const o = e[i];
    if (se(o))
      t[i] = bm(i, o, s);
    else if (o != null) {
      b.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Cl(o);
      t[i] = () => r;
    }
  }
}, qu = (e, t) => {
  b.NODE_ENV !== "production" && !Ms(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Cl(t);
  e.slots.default = () => n;
}, kr = (e, t, n) => {
  for (const s in t)
    (n || !Sl(s)) && (e[s] = t[s]);
}, _m = (e, t, n) => {
  const s = e.slots = Lu();
  if (e.vnode.shapeFlag & 32) {
    const i = t.__;
    i && es(s, "__", i, !0);
    const o = t._;
    o ? (kr(s, t, n), n && es(s, "_", o, !0)) : Uu(t, s);
  } else t && qu(e, t);
}, Em = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? b.NODE_ENV !== "production" && Pt ? (kr(i, t, n), Xt(e, "set", "$slots")) : n && l === 1 ? o = !1 : kr(i, t, n) : (o = !t.$stable, Uu(t, i)), r = t;
  } else t && (qu(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !Sl(l) && r[l] == null && delete i[l];
};
let Fs, Tn;
function an(e, t) {
  e.appContext.config.performance && ro() && Tn.mark(`vue-${t}-${e.uid}`), b.NODE_ENV !== "production" && ih(e, t, ro() ? Tn.now() : Date.now());
}
function cn(e, t) {
  if (e.appContext.config.performance && ro()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Tn.mark(s), Tn.measure(
      `<${Uo(e, e.type)}> ${t}`,
      n,
      s
    ), Tn.clearMarks(n), Tn.clearMarks(s);
  }
  b.NODE_ENV !== "production" && oh(e, t, ro() ? Tn.now() : Date.now());
}
function ro() {
  return Fs !== void 0 || (typeof window < "u" && window.performance ? (Fs = !0, Tn = window.performance) : Fs = !1), Fs;
}
function Nm() {
  const e = [];
  if (b.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = id;
function Ku(e) {
  return Wu(e);
}
function zu(e) {
  return Wu(e, gh);
}
function Wu(e, t) {
  Nm();
  const n = vi();
  n.__VUE__ = !0, b.NODE_ENV !== "production" && fl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: d,
    parentNode: c,
    nextSibling: h,
    setScopeId: m = Oe,
    insertStaticContent: N
  } = e, E = (g, x, A, B = null, R = null, F = null, z = void 0, U = null, H = b.NODE_ENV !== "production" && Pt ? !1 : !!x.dynamicChildren) => {
    if (g === x)
      return;
    g && !It(g, x) && (B = ki(g), bn(g, R, F, !0), g = null), x.patchFlag === -2 && (H = !1, x.dynamicChildren = null);
    const { type: j, ref: ie, shapeFlag: W } = x;
    switch (j) {
      case tn:
        D(g, x, A, B);
        break;
      case Te:
        k(g, x, A, B);
        break;
      case An:
        g == null ? y(x, A, B, z) : b.NODE_ENV !== "production" && f(g, x, A, z);
        break;
      case ue:
        L(
          g,
          x,
          A,
          B,
          R,
          F,
          z,
          U,
          H
        );
        break;
      default:
        W & 1 ? V(
          g,
          x,
          A,
          B,
          R,
          F,
          z,
          U,
          H
        ) : W & 6 ? G(
          g,
          x,
          A,
          B,
          R,
          F,
          z,
          U,
          H
        ) : W & 64 || W & 128 ? j.process(
          g,
          x,
          A,
          B,
          R,
          F,
          z,
          U,
          H,
          cs
        ) : b.NODE_ENV !== "production" && M("Invalid VNode type:", j, `(${typeof j})`);
    }
    ie != null && R ? vs(ie, g && g.ref, F, x || g, !x) : ie == null && g && g.ref != null && vs(g.ref, null, F, g, !0);
  }, D = (g, x, A, B) => {
    if (g == null)
      s(
        x.el = l(x.children),
        A,
        B
      );
    else {
      const R = x.el = g.el;
      x.children !== g.children && u(R, x.children);
    }
  }, k = (g, x, A, B) => {
    g == null ? s(
      x.el = a(x.children || ""),
      A,
      B
    ) : x.el = g.el;
  }, y = (g, x, A, B) => {
    [g.el, g.anchor] = N(
      g.children,
      x,
      A,
      B,
      g.el,
      g.anchor
    );
  }, f = (g, x, A, B) => {
    if (x.children !== g.children) {
      const R = h(g.anchor);
      w(g), [x.el, x.anchor] = N(
        x.children,
        A,
        R,
        B
      );
    } else
      x.el = g.el, x.anchor = g.anchor;
  }, _ = ({ el: g, anchor: x }, A, B) => {
    let R;
    for (; g && g !== x; )
      R = h(g), s(g, A, B), g = R;
    s(x, A, B);
  }, w = ({ el: g, anchor: x }) => {
    let A;
    for (; g && g !== x; )
      A = h(g), i(g), g = A;
    i(x);
  }, V = (g, x, A, B, R, F, z, U, H) => {
    x.type === "svg" ? z = "svg" : x.type === "math" && (z = "mathml"), g == null ? P(
      x,
      A,
      B,
      R,
      F,
      z,
      U,
      H
    ) : O(
      g,
      x,
      R,
      F,
      z,
      U,
      H
    );
  }, P = (g, x, A, B, R, F, z, U) => {
    let H, j;
    const { props: ie, shapeFlag: W, transition: te, dirs: re } = g;
    if (H = g.el = r(
      g.type,
      F,
      ie && ie.is,
      ie
    ), W & 8 ? d(H, g.children) : W & 16 && v(
      g.children,
      H,
      null,
      B,
      R,
      cr(g, F),
      z,
      U
    ), re && Yt(g, null, B, "created"), S(H, g, g.scopeId, z, B), ie) {
      for (const Ce in ie)
        Ce !== "value" && !Vn(Ce) && o(H, Ce, null, ie[Ce], F, B);
      "value" in ie && o(H, "value", null, ie.value, F), (j = ie.onVnodeBeforeMount) && ft(j, B, g);
    }
    b.NODE_ENV !== "production" && (es(H, "__vnode", g, !0), es(H, "__vueParentComponent", B, !0)), re && Yt(g, null, B, "beforeMount");
    const ye = Gu(R, te);
    ye && te.beforeEnter(H), s(H, x, A), ((j = ie && ie.onVnodeMounted) || ye || re) && Re(() => {
      j && ft(j, B, g), ye && te.enter(H), re && Yt(g, null, B, "mounted");
    }, R);
  }, S = (g, x, A, B, R) => {
    if (A && m(g, A), B)
      for (let F = 0; F < B.length; F++)
        m(g, B[F]);
    if (R) {
      let F = R.subTree;
      if (b.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = jo(F.children) || F), x === F || co(F.type) && (F.ssContent === x || F.ssFallback === x)) {
        const z = R.vnode;
        S(
          g,
          z,
          z.scopeId,
          z.slotScopeIds,
          R.parent
        );
      }
    }
  }, v = (g, x, A, B, R, F, z, U, H = 0) => {
    for (let j = H; j < g.length; j++) {
      const ie = g[j] = U ? Cn(g[j]) : rt(g[j]);
      E(
        null,
        ie,
        x,
        A,
        B,
        R,
        F,
        z,
        U
      );
    }
  }, O = (g, x, A, B, R, F, z) => {
    const U = x.el = g.el;
    b.NODE_ENV !== "production" && (U.__vnode = x);
    let { patchFlag: H, dynamicChildren: j, dirs: ie } = x;
    H |= g.patchFlag & 16;
    const W = g.props || fe, te = x.props || fe;
    let re;
    if (A && Bn(A, !1), (re = te.onVnodeBeforeUpdate) && ft(re, A, x, g), ie && Yt(x, g, A, "beforeUpdate"), A && Bn(A, !0), b.NODE_ENV !== "production" && Pt && (H = 0, z = !1, j = null), (W.innerHTML && te.innerHTML == null || W.textContent && te.textContent == null) && d(U, ""), j ? (I(
      g.dynamicChildren,
      j,
      U,
      A,
      B,
      cr(x, R),
      F
    ), b.NODE_ENV !== "production" && Zs(g, x)) : z || Ee(
      g,
      x,
      U,
      null,
      A,
      B,
      cr(x, R),
      F,
      !1
    ), H > 0) {
      if (H & 16)
        $(U, W, te, A, R);
      else if (H & 2 && W.class !== te.class && o(U, "class", null, te.class, R), H & 4 && o(U, "style", W.style, te.style, R), H & 8) {
        const ye = x.dynamicProps;
        for (let Ce = 0; Ce < ye.length; Ce++) {
          const Ne = ye[Ce], ct = W[Ne], ze = te[Ne];
          (ze !== ct || Ne === "value") && o(U, Ne, ct, ze, R, A);
        }
      }
      H & 1 && g.children !== x.children && d(U, x.children);
    } else !z && j == null && $(U, W, te, A, R);
    ((re = te.onVnodeUpdated) || ie) && Re(() => {
      re && ft(re, A, x, g), ie && Yt(x, g, A, "updated");
    }, B);
  }, I = (g, x, A, B, R, F, z) => {
    for (let U = 0; U < x.length; U++) {
      const H = g[U], j = x[U], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !It(H, j) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? c(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      E(
        H,
        j,
        ie,
        null,
        B,
        R,
        F,
        z,
        !0
      );
    }
  }, $ = (g, x, A, B, R) => {
    if (x !== A) {
      if (x !== fe)
        for (const F in x)
          !Vn(F) && !(F in A) && o(
            g,
            F,
            x[F],
            null,
            R,
            B
          );
      for (const F in A) {
        if (Vn(F)) continue;
        const z = A[F], U = x[F];
        z !== U && F !== "value" && o(g, F, U, z, R, B);
      }
      "value" in A && o(g, "value", x.value, A.value, R);
    }
  }, L = (g, x, A, B, R, F, z, U, H) => {
    const j = x.el = g ? g.el : l(""), ie = x.anchor = g ? g.anchor : l("");
    let { patchFlag: W, dynamicChildren: te, slotScopeIds: re } = x;
    b.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Pt || W & 2048) && (W = 0, H = !1, te = null), re && (U = U ? U.concat(re) : re), g == null ? (s(j, A, B), s(ie, A, B), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      A,
      ie,
      R,
      F,
      z,
      U,
      H
    )) : W > 0 && W & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (I(
      g.dynamicChildren,
      te,
      A,
      R,
      F,
      z,
      U
    ), b.NODE_ENV !== "production" ? Zs(g, x) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (x.key != null || R && x === R.subTree) && Zs(
        g,
        x,
        !0
        /* shallow */
      )
    )) : Ee(
      g,
      x,
      A,
      ie,
      R,
      F,
      z,
      U,
      H
    );
  }, G = (g, x, A, B, R, F, z, U, H) => {
    x.slotScopeIds = U, g == null ? x.shapeFlag & 512 ? R.ctx.activate(
      x,
      A,
      B,
      z,
      H
    ) : ee(
      x,
      A,
      B,
      R,
      F,
      z,
      H
    ) : Z(g, x, H);
  }, ee = (g, x, A, B, R, F, z) => {
    const U = g.component = fd(
      g,
      B,
      R
    );
    if (b.NODE_ENV !== "production" && U.type.__hmrId && Jp(U), b.NODE_ENV !== "production" && (ms(g), an(U, "mount")), Ms(g) && (U.ctx.renderer = cs), b.NODE_ENV !== "production" && an(U, "init"), hd(U, !1, z), b.NODE_ENV !== "production" && cn(U, "init"), b.NODE_ENV !== "production" && Pt && (g.el = null), U.asyncDep) {
      if (R && R.registerDep(U, ne, z), !g.el) {
        const H = U.subTree = ve(Te);
        k(null, H, x, A), g.placeholder = H.el;
      }
    } else
      ne(
        U,
        g,
        x,
        A,
        R,
        F,
        z
      );
    b.NODE_ENV !== "production" && (gs(), cn(U, "mount"));
  }, Z = (g, x, A) => {
    const B = x.component = g.component;
    if (Vm(g, x, A))
      if (B.asyncDep && !B.asyncResolved) {
        b.NODE_ENV !== "production" && ms(x), Q(B, x, A), b.NODE_ENV !== "production" && gs();
        return;
      } else
        B.next = x, B.update();
    else
      x.el = g.el, B.vnode = x;
  }, ne = (g, x, A, B, R, F, z) => {
    const U = () => {
      if (g.isMounted) {
        let { next: W, bu: te, u: re, parent: ye, vnode: Ce } = g;
        {
          const yt = Yu(g);
          if (yt) {
            W && (W.el = Ce.el, Q(g, W, z)), yt.asyncDep.then(() => {
              g.isUnmounted || U();
            });
            return;
          }
        }
        let Ne = W, ct;
        b.NODE_ENV !== "production" && ms(W || g.vnode), Bn(g, !1), W ? (W.el = Ce.el, Q(g, W, z)) : W = Ce, te && On(te), (ct = W.props && W.props.onVnodeBeforeUpdate) && ft(ct, ye, W, Ce), Bn(g, !0), b.NODE_ENV !== "production" && an(g, "render");
        const ze = Hi(g);
        b.NODE_ENV !== "production" && cn(g, "render");
        const $t = g.subTree;
        g.subTree = ze, b.NODE_ENV !== "production" && an(g, "patch"), E(
          $t,
          ze,
          // parent may have changed if it's in a teleport
          c($t.el),
          // anchor may have changed if it's in a fragment
          ki($t),
          g,
          R,
          F
        ), b.NODE_ENV !== "production" && cn(g, "patch"), W.el = ze.el, Ne === null && Ho(g, ze.el), re && Re(re, R), (ct = W.props && W.props.onVnodeUpdated) && Re(
          () => ft(ct, ye, W, Ce),
          R
        ), b.NODE_ENV !== "production" && uu(g), b.NODE_ENV !== "production" && gs();
      } else {
        let W;
        const { el: te, props: re } = x, { bm: ye, m: Ce, parent: Ne, root: ct, type: ze } = g, $t = $n(x);
        if (Bn(g, !1), ye && On(ye), !$t && (W = re && re.onVnodeBeforeMount) && ft(W, Ne, x), Bn(g, !0), te && Xo) {
          const yt = () => {
            b.NODE_ENV !== "production" && an(g, "render"), g.subTree = Hi(g), b.NODE_ENV !== "production" && cn(g, "render"), b.NODE_ENV !== "production" && an(g, "hydrate"), Xo(
              te,
              g.subTree,
              g,
              R,
              null
            ), b.NODE_ENV !== "production" && cn(g, "hydrate");
          };
          $t && ze.__asyncHydrate ? ze.__asyncHydrate(
            te,
            g,
            yt
          ) : yt();
        } else {
          ct.ce && // @ts-expect-error _def is private
          ct.ce._def.shadowRoot !== !1 && ct.ce._injectChildStyle(ze), b.NODE_ENV !== "production" && an(g, "render");
          const yt = g.subTree = Hi(g);
          b.NODE_ENV !== "production" && cn(g, "render"), b.NODE_ENV !== "production" && an(g, "patch"), E(
            null,
            yt,
            A,
            B,
            g,
            R,
            F
          ), b.NODE_ENV !== "production" && cn(g, "patch"), x.el = yt.el;
        }
        if (Ce && Re(Ce, R), !$t && (W = re && re.onVnodeMounted)) {
          const yt = x;
          Re(
            () => ft(W, Ne, yt),
            R
          );
        }
        (x.shapeFlag & 256 || Ne && $n(Ne.vnode) && Ne.vnode.shapeFlag & 256) && g.a && Re(g.a, R), g.isMounted = !0, b.NODE_ENV !== "production" && Er(g), x = A = B = null;
      }
    };
    g.scope.on();
    const H = g.effect = new ii(U);
    g.scope.off();
    const j = g.update = H.run.bind(H), ie = g.job = H.runIfDirty.bind(H);
    ie.i = g, ie.id = g.uid, H.scheduler = () => Io(ie), Bn(g, !0), b.NODE_ENV !== "production" && (H.onTrack = g.rtc ? (W) => On(g.rtc, W) : void 0, H.onTrigger = g.rtg ? (W) => On(g.rtg, W) : void 0), j();
  }, Q = (g, x, A) => {
    x.component = g;
    const B = g.vnode.props;
    g.vnode = x, g.next = null, dm(g, x.props, B, A), Em(g, x.children, A), Bt(), ua(g), jt();
  }, Ee = (g, x, A, B, R, F, z, U, H = !1) => {
    const j = g && g.children, ie = g ? g.shapeFlag : 0, W = x.children, { patchFlag: te, shapeFlag: re } = x;
    if (te > 0) {
      if (te & 128) {
        Nt(
          j,
          W,
          A,
          B,
          R,
          F,
          z,
          U,
          H
        );
        return;
      } else if (te & 256) {
        at(
          j,
          W,
          A,
          B,
          R,
          F,
          z,
          U,
          H
        );
        return;
      }
    }
    re & 8 ? (ie & 16 && Ps(j, R, F), W !== j && d(A, W)) : ie & 16 ? re & 16 ? Nt(
      j,
      W,
      A,
      B,
      R,
      F,
      z,
      U,
      H
    ) : Ps(j, R, F, !0) : (ie & 8 && d(A, ""), re & 16 && v(
      W,
      A,
      B,
      R,
      F,
      z,
      U,
      H
    ));
  }, at = (g, x, A, B, R, F, z, U, H) => {
    g = g || hs, x = x || hs;
    const j = g.length, ie = x.length, W = Math.min(j, ie);
    let te;
    for (te = 0; te < W; te++) {
      const re = x[te] = H ? Cn(x[te]) : rt(x[te]);
      E(
        g[te],
        re,
        A,
        null,
        R,
        F,
        z,
        U,
        H
      );
    }
    j > ie ? Ps(
      g,
      R,
      F,
      !0,
      !1,
      W
    ) : v(
      x,
      A,
      B,
      R,
      F,
      z,
      U,
      H,
      W
    );
  }, Nt = (g, x, A, B, R, F, z, U, H) => {
    let j = 0;
    const ie = x.length;
    let W = g.length - 1, te = ie - 1;
    for (; j <= W && j <= te; ) {
      const re = g[j], ye = x[j] = H ? Cn(x[j]) : rt(x[j]);
      if (It(re, ye))
        E(
          re,
          ye,
          A,
          null,
          R,
          F,
          z,
          U,
          H
        );
      else
        break;
      j++;
    }
    for (; j <= W && j <= te; ) {
      const re = g[W], ye = x[te] = H ? Cn(x[te]) : rt(x[te]);
      if (It(re, ye))
        E(
          re,
          ye,
          A,
          null,
          R,
          F,
          z,
          U,
          H
        );
      else
        break;
      W--, te--;
    }
    if (j > W) {
      if (j <= te) {
        const re = te + 1, ye = re < ie ? x[re].el : B;
        for (; j <= te; )
          E(
            null,
            x[j] = H ? Cn(x[j]) : rt(x[j]),
            A,
            ye,
            R,
            F,
            z,
            U,
            H
          ), j++;
      }
    } else if (j > te)
      for (; j <= W; )
        bn(g[j], R, F, !0), j++;
    else {
      const re = j, ye = j, Ce = /* @__PURE__ */ new Map();
      for (j = ye; j <= te; j++) {
        const nt = x[j] = H ? Cn(x[j]) : rt(x[j]);
        nt.key != null && (b.NODE_ENV !== "production" && Ce.has(nt.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(nt.key),
          "Make sure keys are unique."
        ), Ce.set(nt.key, j));
      }
      let Ne, ct = 0;
      const ze = te - ye + 1;
      let $t = !1, yt = 0;
      const Rs = new Array(ze);
      for (j = 0; j < ze; j++) Rs[j] = 0;
      for (j = re; j <= W; j++) {
        const nt = g[j];
        if (ct >= ze) {
          bn(nt, R, F, !0);
          continue;
        }
        let Kt;
        if (nt.key != null)
          Kt = Ce.get(nt.key);
        else
          for (Ne = ye; Ne <= te; Ne++)
            if (Rs[Ne - ye] === 0 && It(nt, x[Ne])) {
              Kt = Ne;
              break;
            }
        Kt === void 0 ? bn(nt, R, F, !0) : (Rs[Kt - ye] = j + 1, Kt >= yt ? yt = Kt : $t = !0, E(
          nt,
          x[Kt],
          A,
          null,
          R,
          F,
          z,
          U,
          H
        ), ct++);
      }
      const ea = $t ? wm(Rs) : hs;
      for (Ne = ea.length - 1, j = ze - 1; j >= 0; j--) {
        const nt = ye + j, Kt = x[nt], ta = x[nt + 1], na = nt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          ta.el || ta.placeholder
        ) : B;
        Rs[j] === 0 ? E(
          null,
          Kt,
          A,
          na,
          R,
          F,
          z,
          U,
          H
        ) : $t && (Ne < 0 || j !== ea[Ne] ? wt(Kt, A, na, 2) : Ne--);
      }
    }
  }, wt = (g, x, A, B, R = null) => {
    const { el: F, type: z, transition: U, children: H, shapeFlag: j } = g;
    if (j & 6) {
      wt(g.component.subTree, x, A, B);
      return;
    }
    if (j & 128) {
      g.suspense.move(x, A, B);
      return;
    }
    if (j & 64) {
      z.move(g, x, A, cs);
      return;
    }
    if (z === ue) {
      s(F, x, A);
      for (let W = 0; W < H.length; W++)
        wt(H[W], x, A, B);
      s(g.anchor, x, A);
      return;
    }
    if (z === An) {
      _(g, x, A);
      return;
    }
    if (B !== 2 && j & 1 && U)
      if (B === 0)
        U.beforeEnter(F), s(F, x, A), Re(() => U.enter(F), R);
      else {
        const { leave: W, delayLeave: te, afterLeave: re } = U, ye = () => {
          g.ctx.isUnmounted ? i(F) : s(F, x, A);
        }, Ce = () => {
          W(F, () => {
            ye(), re && re();
          });
        };
        te ? te(F, ye, Ce) : Ce();
      }
    else
      s(F, x, A);
  }, bn = (g, x, A, B = !1, R = !1) => {
    const {
      type: F,
      props: z,
      ref: U,
      children: H,
      dynamicChildren: j,
      shapeFlag: ie,
      patchFlag: W,
      dirs: te,
      cacheIndex: re
    } = g;
    if (W === -2 && (R = !1), U != null && (Bt(), vs(U, null, A, g, !0), jt()), re != null && (x.renderCache[re] = void 0), ie & 256) {
      x.ctx.deactivate(g);
      return;
    }
    const ye = ie & 1 && te, Ce = !$n(g);
    let Ne;
    if (Ce && (Ne = z && z.onVnodeBeforeUnmount) && ft(Ne, x, g), ie & 6)
      $f(g.component, A, B);
    else {
      if (ie & 128) {
        g.suspense.unmount(A, B);
        return;
      }
      ye && Yt(g, null, x, "beforeUnmount"), ie & 64 ? g.type.remove(
        g,
        x,
        A,
        cs,
        B
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ue || W > 0 && W & 64) ? Ps(
        j,
        x,
        A,
        !1,
        !0
      ) : (F === ue && W & 384 || !R && ie & 16) && Ps(H, x, A), B && Yo(g);
    }
    (Ce && (Ne = z && z.onVnodeUnmounted) || ye) && Re(() => {
      Ne && ft(Ne, x, g), ye && Yt(g, null, x, "unmounted");
    }, A);
  }, Yo = (g) => {
    const { type: x, el: A, anchor: B, transition: R } = g;
    if (x === ue) {
      b.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && R && !R.persisted ? g.children.forEach((z) => {
        z.type === Te ? i(z.el) : Yo(z);
      }) : Vf(A, B);
      return;
    }
    if (x === An) {
      w(g);
      return;
    }
    const F = () => {
      i(A), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (g.shapeFlag & 1 && R && !R.persisted) {
      const { leave: z, delayLeave: U } = R, H = () => z(A, F);
      U ? U(g.el, F, H) : H();
    } else
      F();
  }, Vf = (g, x) => {
    let A;
    for (; g !== x; )
      A = h(g), i(g), g = A;
    i(x);
  }, $f = (g, x, A) => {
    b.NODE_ENV !== "production" && g.type.__hmrId && Qp(g);
    const {
      bum: B,
      scope: R,
      job: F,
      subTree: z,
      um: U,
      m: H,
      a: j,
      parent: ie,
      slots: { __: W }
    } = g;
    lo(H), lo(j), B && On(B), ie && q(W) && W.forEach((te) => {
      ie.renderCache[te] = void 0;
    }), R.stop(), F && (F.flags |= 8, bn(z, g, x, A)), U && Re(U, x), Re(() => {
      g.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve()), b.NODE_ENV !== "production" && sh(g);
  }, Ps = (g, x, A, B = !1, R = !1, F = 0) => {
    for (let z = F; z < g.length; z++)
      bn(g[z], x, A, B, R);
  }, ki = (g) => {
    if (g.shapeFlag & 6)
      return ki(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const x = h(g.anchor || g.el), A = x && x[pu];
    return A ? h(A) : x;
  };
  let Jo = !1;
  const Zl = (g, x, A) => {
    g == null ? x._vnode && bn(x._vnode, null, null, !0) : E(
      x._vnode || null,
      g,
      x,
      null,
      null,
      null,
      A
    ), x._vnode = g, Jo || (Jo = !0, ua(), no(), Jo = !1);
  }, cs = {
    p: E,
    um: bn,
    m: wt,
    r: Yo,
    mt: ee,
    mc: v,
    pc: Ee,
    pbc: I,
    n: ki,
    o: e
  };
  let Qo, Xo;
  return t && ([Qo, Xo] = t(
    cs
  )), {
    render: Zl,
    hydrate: Qo,
    createApp: lm(Zl, Qo)
  };
}
function cr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Gu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Zs(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (q(s) && q(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Cn(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && Zs(r, l)), l.type === tn && (l.el = r.el), l.type === Te && !l.el && (l.el = r.el), b.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function wm(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        l = o + r >> 1, e[n[l]] < u ? o = l + 1 : r = l;
      u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function Yu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yu(t);
}
function lo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ju = Symbol.for("v-scx"), Qu = () => {
  {
    const e = Xs(Ju);
    return e || b.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function xm(e, t) {
  return Ni(e, null, t);
}
function Sm(e, t) {
  return Ni(
    e,
    null,
    b.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Xu(e, t) {
  return Ni(
    e,
    null,
    b.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function en(e, t, n) {
  return b.NODE_ENV !== "production" && !se(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ni(e, t, n);
}
function Ni(e, t, n = fe) {
  const { immediate: s, deep: i, flush: o, once: r } = n;
  b.NODE_ENV !== "production" && !t && (s !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  b.NODE_ENV !== "production" && (l.onWarn = M);
  const a = t && s || !t && o !== "post";
  let u;
  if (Ss) {
    if (o === "sync") {
      const m = Qu();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Oe, m.resume = Oe, m.pause = Oe, m;
    }
  }
  const d = Be;
  l.call = (m, N, E) => Tt(m, d, N, E);
  let c = !1;
  o === "post" ? l.scheduler = (m) => {
    Re(m, d && d.suspense);
  } : o !== "sync" && (c = !0, l.scheduler = (m, N) => {
    N ? m() : Io(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = jp(e, t, l);
  return Ss && (u ? u.push(h) : a && h()), h;
}
function Cm(e, t, n) {
  const s = this.proxy, i = oe(e) ? e.includes(".") ? Zu(s, e) : () => s[e] : e.bind(s, s);
  let o;
  se(t) ? o = t : (o = t.handler, n = t);
  const r = ss(this), l = Ni(i, o.bind(s), n);
  return r(), l;
}
function Zu(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
function km(e, t, n = fe) {
  const s = lt();
  if (b.NODE_ENV !== "production" && !s)
    return M("useModel() called without active instance."), X();
  const i = Se(t);
  if (b.NODE_ENV !== "production" && !s.propsOptions[0][i])
    return M(`useModel() called with prop "${t}" which is not declared.`), X();
  const o = Ye(t), r = ed(e, i), l = nu((a, u) => {
    let d, c = fe, h;
    return Xu(() => {
      const m = e[i];
      it(d, m) && (d = m, u());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const N = n.set ? n.set(m) : m;
        if (!it(N, d) && !(c !== fe && it(m, c)))
          return;
        const E = s.vnode.props;
        E && // check if parent has passed v-model
        (t in E || i in E || o in E) && (`onUpdate:${t}` in E || `onUpdate:${i}` in E || `onUpdate:${o}` in E) || (d = m, u()), s.emit(`update:${t}`, N), it(m, N) && it(m, c) && !it(N, h) && u(), c = m, h = N;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? r || fe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const ed = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${Ye(t)}Modifiers`];
function Om(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  if (b.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [c]
    } = e;
    if (d)
      if (!(t in d))
        (!c || !(Qt(Se(t)) in c)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(Se(t))}" prop.`
        );
      else {
        const h = d[t];
        se(h) && (h(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const o = t.startsWith("update:"), r = o && ed(s, t.slice(7));
  if (r && (r.trim && (i = n.map((d) => oe(d) ? d.trim() : d)), r.number && (i = n.map(Ji))), b.NODE_ENV !== "production" && rh(e, t, i), b.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[Qt(d)] && M(
      `Event "${d}" is emitted in component ${Uo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ye(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Qt(t)] || // also try camelCase event handler (#2249)
  s[l = Qt(Se(t))];
  !a && o && (a = s[l = Qt(Ye(t))]), a && Tt(
    a,
    e,
    6,
    i
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Tt(
      u,
      e,
      6,
      i
    );
  }
}
function td(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!se(e)) {
    const a = (u) => {
      const d = td(u, t, !0);
      d && (l = !0, de(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (he(e) && s.set(e, null), null) : (q(o) ? o.forEach((a) => r[a] = null) : de(r, o), he(e) && s.set(e, r), r);
}
function Bo(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Ye(t)) || me(e, t));
}
let Or = !1;
function ao() {
  Or = !0;
}
function Hi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: a,
    render: u,
    renderCache: d,
    props: c,
    data: h,
    setupState: m,
    ctx: N,
    inheritAttrs: E
  } = e, D = ai(e);
  let k, y;
  b.NODE_ENV !== "production" && (Or = !1);
  try {
    if (n.shapeFlag & 4) {
      const w = i || s, V = b.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(w, {
        get(P, S, v) {
          return M(
            `Property '${String(
              S
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, S, v);
        }
      }) : w;
      k = rt(
        u.call(
          V,
          w,
          d,
          b.NODE_ENV !== "production" ? Mt(c) : c,
          m,
          h,
          N
        )
      ), y = l;
    } else {
      const w = t;
      b.NODE_ENV !== "production" && l === c && ao(), k = rt(
        w.length > 1 ? w(
          b.NODE_ENV !== "production" ? Mt(c) : c,
          b.NODE_ENV !== "production" ? {
            get attrs() {
              return ao(), Mt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : w(
          b.NODE_ENV !== "production" ? Mt(c) : c,
          null
        )
      ), y = t.props ? l : Tm(l);
    }
  } catch (w) {
    ei.length = 0, Ln(w, e, 1), k = ve(Te);
  }
  let f = k, _;
  if (b.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([f, _] = nd(k)), y && E !== !1) {
    const w = Object.keys(y), { shapeFlag: V } = f;
    if (w.length) {
      if (V & 7)
        o && w.some(Yi) && (y = Dm(
          y,
          o
        )), f = Dt(f, y, !1, !0);
      else if (b.NODE_ENV !== "production" && !Or && f.type !== Te) {
        const P = Object.keys(l), S = [], v = [];
        for (let O = 0, I = P.length; O < I; O++) {
          const $ = P[O];
          gn($) ? Yi($) || S.push($[2].toLowerCase() + $.slice(3)) : v.push($);
        }
        v.length && M(
          `Extraneous non-props attributes (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), S.length && M(
          `Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (b.NODE_ENV !== "production" && !ka(f) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), f = Dt(f, null, !1, !0), f.dirs = f.dirs ? f.dirs.concat(n.dirs) : n.dirs), n.transition && (b.NODE_ENV !== "production" && !ka(f) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(f, n.transition)), b.NODE_ENV !== "production" && _ ? _(f) : k = f, ai(D), k;
}
const nd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = jo(t, !1);
  if (s) {
    if (b.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return nd(s);
  } else return [e, void 0];
  const i = t.indexOf(s), o = n ? n.indexOf(s) : -1, r = (l) => {
    t[i] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [rt(s), r];
};
function jo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (on(i)) {
      if (i.type !== Te || i.children === "v-if") {
        if (n)
          return;
        if (n = i, b.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return jo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Tm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dm = (e, t) => {
  const n = {};
  for (const s in e)
    (!Yi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, ka = (e) => e.shapeFlag & 7 || e.type === Te;
function Vm(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: a } = t, u = o.emitsOptions;
  if (b.NODE_ENV !== "production" && (i || l) && Pt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Oa(s, r, u) : !!r;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const h = d[c];
        if (r[h] !== s[h] && !Bo(u, h))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Oa(s, r, u) : !0 : !!r;
  return !1;
}
function Oa(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (t[o] !== e[o] && !Bo(n, o))
      return !0;
  }
  return !1;
}
function Ho({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const co = (e) => e.__isSuspense;
let Tr = 0;
const $m = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, i, o, r, l, a, u) {
    if (e == null)
      Im(
        t,
        n,
        s,
        i,
        o,
        r,
        l,
        a,
        u
      );
    else {
      if (o && o.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Mm(
        e,
        t,
        n,
        s,
        i,
        r,
        l,
        a,
        u
      );
    }
  },
  hydrate: Pm,
  normalize: Rm
}, Am = $m;
function ui(e, t) {
  const n = e.props && e.props[t];
  se(n) && n();
}
function Im(e, t, n, s, i, o, r, l, a) {
  const {
    p: u,
    o: { createElement: d }
  } = a, c = d("div"), h = e.suspense = sd(
    e,
    i,
    s,
    t,
    c,
    n,
    o,
    r,
    l,
    a
  );
  u(
    null,
    h.pendingBranch = e.ssContent,
    c,
    null,
    s,
    h,
    o,
    r
  ), h.deps > 0 ? (ui(e, "onPending"), ui(e, "onFallback"), u(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    o,
    r
  ), bs(h, e.ssFallback)) : h.resolve(!1, !0);
}
function Mm(e, t, n, s, i, o, r, l, { p: a, um: u, o: { createElement: d } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const h = t.ssContent, m = t.ssFallback, { activeBranch: N, pendingBranch: E, isInFallback: D, isHydrating: k } = c;
  if (E)
    c.pendingBranch = h, It(h, E) ? (a(
      E,
      h,
      c.hiddenContainer,
      null,
      i,
      c,
      o,
      r,
      l
    ), c.deps <= 0 ? c.resolve() : D && (k || (a(
      N,
      m,
      n,
      s,
      i,
      null,
      // fallback tree will not have suspense context
      o,
      r,
      l
    ), bs(c, m)))) : (c.pendingId = Tr++, k ? (c.isHydrating = !1, c.activeBranch = E) : u(E, i, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = d("div"), D ? (a(
      null,
      h,
      c.hiddenContainer,
      null,
      i,
      c,
      o,
      r,
      l
    ), c.deps <= 0 ? c.resolve() : (a(
      N,
      m,
      n,
      s,
      i,
      null,
      // fallback tree will not have suspense context
      o,
      r,
      l
    ), bs(c, m))) : N && It(h, N) ? (a(
      N,
      h,
      n,
      s,
      i,
      c,
      o,
      r,
      l
    ), c.resolve(!0)) : (a(
      null,
      h,
      c.hiddenContainer,
      null,
      i,
      c,
      o,
      r,
      l
    ), c.deps <= 0 && c.resolve()));
  else if (N && It(h, N))
    a(
      N,
      h,
      n,
      s,
      i,
      c,
      o,
      r,
      l
    ), bs(c, h);
  else if (ui(t, "onPending"), c.pendingBranch = h, h.shapeFlag & 512 ? c.pendingId = h.component.suspenseId : c.pendingId = Tr++, a(
    null,
    h,
    c.hiddenContainer,
    null,
    i,
    c,
    o,
    r,
    l
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: y, pendingId: f } = c;
    y > 0 ? setTimeout(() => {
      c.pendingId === f && c.fallback(m);
    }, y) : y === 0 && c.fallback(m);
  }
}
let Ta = !1;
function sd(e, t, n, s, i, o, r, l, a, u, d = !1) {
  b.NODE_ENV !== "production" && !Ta && (Ta = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: h,
    um: m,
    n: N,
    o: { parentNode: E, remove: D }
  } = u;
  let k;
  const y = Lm(e);
  y && t && t.pendingBranch && (k = t.pendingId, t.deps++);
  const f = e.props ? Qi(e.props.timeout) : void 0;
  b.NODE_ENV !== "production" && ul(f, "Suspense timeout");
  const _ = o, w = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: r,
    container: s,
    hiddenContainer: i,
    deps: 0,
    pendingId: Tr++,
    timeout: typeof f == "number" ? f : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, P = !1) {
      if (b.NODE_ENV !== "production") {
        if (!V && !w.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (w.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: S,
        activeBranch: v,
        pendingBranch: O,
        pendingId: I,
        effects: $,
        parentComponent: L,
        container: G
      } = w;
      let ee = !1;
      w.isHydrating ? w.isHydrating = !1 : V || (ee = v && O.transition && O.transition.mode === "out-in", ee && (v.transition.afterLeave = () => {
        I === w.pendingId && (h(
          O,
          G,
          o === _ ? N(v) : o,
          0
        ), Ns($));
      }), v && (E(v.el) === G && (o = N(v)), m(v, L, w, !0)), ee || h(O, G, o, 0)), bs(w, O), w.pendingBranch = null, w.isInFallback = !1;
      let Z = w.parent, ne = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...$), ne = !0;
          break;
        }
        Z = Z.parent;
      }
      !ne && !ee && Ns($), w.effects = [], y && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), ui(S, "onResolve");
    },
    fallback(V) {
      if (!w.pendingBranch)
        return;
      const { vnode: P, activeBranch: S, parentComponent: v, container: O, namespace: I } = w;
      ui(P, "onFallback");
      const $ = N(S), L = () => {
        w.isInFallback && (c(
          null,
          V,
          O,
          $,
          v,
          null,
          // fallback tree will not have suspense context
          I,
          l,
          a
        ), bs(w, V));
      }, G = V.transition && V.transition.mode === "out-in";
      G && (S.transition.afterLeave = L), w.isInFallback = !0, m(
        S,
        v,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), G || L();
    },
    move(V, P, S) {
      w.activeBranch && h(w.activeBranch, V, P, S), w.container = V;
    },
    next() {
      return w.activeBranch && N(w.activeBranch);
    },
    registerDep(V, P, S) {
      const v = !!w.pendingBranch;
      v && w.deps++;
      const O = V.vnode.el;
      V.asyncDep.catch((I) => {
        Ln(I, V, 0);
      }).then((I) => {
        if (V.isUnmounted || w.isUnmounted || w.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: $ } = V;
        b.NODE_ENV !== "production" && ms($), Mr(V, I, !1), O && ($.el = O);
        const L = !O && V.subTree.el;
        P(
          V,
          $,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          E(O || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : N(V.subTree),
          w,
          r,
          S
        ), L && D(L), Ho(V, $.el), b.NODE_ENV !== "production" && gs(), v && --w.deps === 0 && w.resolve();
      });
    },
    unmount(V, P) {
      w.isUnmounted = !0, w.activeBranch && m(
        w.activeBranch,
        n,
        V,
        P
      ), w.pendingBranch && m(
        w.pendingBranch,
        n,
        V,
        P
      );
    }
  };
  return w;
}
function Pm(e, t, n, s, i, o, r, l, a) {
  const u = t.suspense = sd(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    i,
    o,
    r,
    l,
    !0
  ), d = a(
    e,
    u.pendingBranch = t.ssContent,
    n,
    u,
    o,
    r
  );
  return u.deps === 0 && u.resolve(!1, !0), d;
}
function Rm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Da(
    s ? n.default : n
  ), e.ssFallback = s ? Da(n.fallback) : ve(Te);
}
function Da(e) {
  let t;
  if (se(e)) {
    const n = ns && e._c;
    n && (e._d = !1, C()), e = e(), n && (e._d = !0, t = Je, od());
  }
  if (q(e)) {
    const n = jo(e);
    b.NODE_ENV !== "production" && !n && e.filter((s) => s !== bl).length > 0 && M("<Suspense> slots expect a single root node."), e = n;
  }
  return e = rt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function id(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : Ns(e);
}
function bs(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let i = t.el;
  for (; !i && t.component; )
    t = t.component.subTree, i = t.el;
  n.el = i, s && s.subTree === n && (s.vnode.el = i, Ho(s, i));
}
function Lm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ue = Symbol.for("v-fgt"), tn = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), ei = [];
let Je = null;
function C(e = !1) {
  ei.push(Je = e ? null : []);
}
function od() {
  ei.pop(), Je = ei[ei.length - 1] || null;
}
let ns = 1;
function Dr(e, t = !1) {
  ns += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function rd(e) {
  return e.dynamicChildren = ns > 0 ? Je || hs : null, od(), ns > 0 && Je && Je.push(e), e;
}
function T(e, t, n, s, i, o) {
  return rd(
    p(
      e,
      t,
      n,
      s,
      i,
      o,
      !0
    )
  );
}
function Ut(e, t, n, s, i) {
  return rd(
    ve(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function on(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  if (b.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Bi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Vr;
function Fm(e) {
  Vr = e;
}
const Bm = (...e) => ad(
  ...Vr ? Vr(e, Pe) : e
), ld = ({ key: e }) => e ?? null, Ui = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || Ve(e) || se(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, i = null, o = e === ue ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ld(t),
    ref: t && Ui(t),
    scopeId: Mo,
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
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Pe
  };
  return l ? (kl(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= oe(n) ? 8 : 16), b.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), ns > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Je.push(a), a;
}
const ve = b.NODE_ENV !== "production" ? Bm : ad;
function ad(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === bl) && (b.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Te), on(e)) {
    const l = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && kl(l, n), ns > 0 && !o && Je && (l.shapeFlag & 6 ? Je[Je.indexOf(e)] = l : Je.push(l)), l.patchFlag = -2, l;
  }
  if (vd(e) && (e = e.__vccOpts), t) {
    t = cd(t);
    let { class: l, style: a } = t;
    l && !oe(l) && (t.class = Qe(l)), he(a) && (Es(a) && !q(a) && (a = de({}, a)), t.style = _t(a));
  }
  const r = oe(e) ? 1 : co(e) ? 128 : hu(e) ? 64 : he(e) ? 4 : se(e) ? 2 : 0;
  return b.NODE_ENV !== "production" && r & 4 && Es(e) && (e = le(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), p(
    e,
    t,
    n,
    s,
    i,
    r,
    o,
    !0
  );
}
function cd(e) {
  return e ? Es(e) || Fu(e) ? de({}, e) : e : null;
}
function Dt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e, u = t ? dd(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ld(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? q(o) ? o.concat(Ui(t)) : [o, Ui(t)] : Ui(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: b.NODE_ENV !== "production" && r === -1 && q(l) ? l.map(ud) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
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
function ud(e) {
  const t = Dt(e);
  return q(e.children) && (t.children = e.children.map(ud)), t;
}
function je(e = " ", t = 0) {
  return ve(tn, null, e, t);
}
function xs(e, t) {
  const n = ve(An, null, e);
  return n.staticCount = t, n;
}
function J(e = "", t = !1) {
  return t ? (C(), Ut(Te, null, e)) : ve(Te, null, e);
}
function rt(e) {
  return e == null || typeof e == "boolean" ? ve(Te) : q(e) ? ve(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : on(e) ? Cn(e) : ve(tn, null, String(e));
}
function Cn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function kl(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), kl(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Fu(t) ? t._ctx = Pe : i === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else se(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Qe([t.class, s.class]));
      else if (i === "style")
        t.style = _t([t.style, s.style]);
      else if (gn(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(q(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function ft(e, t, n, s = null) {
  Tt(e, t, 7, [
    n,
    s
  ]);
}
const jm = Mu();
let Hm = 0;
function fd(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || jm, o = {
    uid: Hm++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
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
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ju(s, i),
    emitsOptions: td(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return b.NODE_ENV !== "production" ? o.ctx = Lh(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Om.bind(null, o), e.ce && e.ce(o), o;
}
let Be = null;
const lt = () => Be || Pe;
let uo, $r;
{
  const e = vi(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  uo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Be = n
  ), $r = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ss = n
  );
}
const ss = (e) => {
  const t = Be;
  return uo(e), e.scope.on(), () => {
    e.scope.off(), uo(t);
  };
}, Ar = () => {
  Be && Be.scope.off(), uo(null);
}, Um = /* @__PURE__ */ He("slot,component");
function Ir(e, { isNativeTag: t }) {
  (Um(e) || t(e)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function pd(e) {
  return e.vnode.shapeFlag & 4;
}
let Ss = !1;
function hd(e, t = !1, n = !1) {
  t && $r(t);
  const { props: s, children: i } = e.vnode, o = pd(e);
  cm(e, s, o, t), _m(e, i, n || t);
  const r = o ? qm(e, t) : void 0;
  return t && $r(!1), r;
}
function qm(e, t) {
  var n;
  const s = e.type;
  if (b.NODE_ENV !== "production") {
    if (s.name && Ir(s.name, e.appContext.config), s.components) {
      const o = Object.keys(s.components);
      for (let r = 0; r < o.length; r++)
        Ir(o[r], e.appContext.config);
    }
    if (s.directives) {
      const o = Object.keys(s.directives);
      for (let r = 0; r < o.length; r++)
        fu(o[r]);
    }
    s.compilerOptions && Ol() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qs), b.NODE_ENV !== "production" && Fh(e);
  const { setup: i } = s;
  if (i) {
    Bt();
    const o = e.setupContext = i.length > 1 ? yd(e) : null, r = ss(e), l = rs(
      i,
      e,
      0,
      [
        b.NODE_ENV !== "production" ? Mt(e.props) : e.props,
        o
      ]
    ), a = xo(l);
    if (jt(), r(), (a || e.sp) && !$n(e) && yl(e), a) {
      if (l.then(Ar, Ar), t)
        return l.then((u) => {
          Mr(e, u, t);
        }).catch((u) => {
          Ln(u, e, 0);
        });
      if (e.asyncDep = l, b.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = s.name) != null ? n : "Anonymous";
        M(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Mr(e, l, t);
  } else
    gd(e, t);
}
function Mr(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) ? (b.NODE_ENV !== "production" && on(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), b.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = cl(t), b.NODE_ENV !== "production" && Bh(e)) : b.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), gd(e, n);
}
let ti, Pr;
function md(e) {
  ti = e, Pr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Rh));
  };
}
const Ol = () => !ti;
function gd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ti && !s.render) {
      const i = s.template || xl(e).template;
      if (i) {
        b.NODE_ENV !== "production" && an(e, "compile");
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, u = de(
          de(
            {
              isCustomElement: o,
              delimiters: l
            },
            r
          ),
          a
        );
        s.render = ti(i, u), b.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || Oe, Pr && Pr(e);
  }
  {
    const i = ss(e);
    Bt();
    try {
      tm(e);
    } finally {
      jt(), i();
    }
  }
  b.NODE_ENV !== "production" && !s.render && e.render === Oe && !t && (!ti && s.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", s));
}
const Va = b.NODE_ENV !== "production" ? {
  get(e, t) {
    return ao(), Le(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Le(e, "get", ""), e[t];
  }
};
function Km(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Le(e, "get", "$slots"), t[n];
    }
  });
}
function yd(e) {
  const t = (n) => {
    if (b.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (q(n) ? s = "array" : Ve(n) && (s = "ref")), s !== "object" && M(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (b.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Va));
      },
      get slots() {
        return s || (s = Km(e));
      },
      get emit() {
        return (i, ...o) => e.emit(i, ...o);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Va),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function wi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(cl(Zc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qn)
        return Qn[n](e);
    },
    has(t, n) {
      return n in t || n in Qn;
    }
  })) : e.proxy;
}
const zm = /(?:^|[-_])(\w)/g, Wm = (e) => e.replace(zm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Cs(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Uo(e, t, n = !1) {
  let s = Cs(t);
  if (!s && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (s = i[1]);
  }
  if (!s && e && e.parent) {
    const i = (o) => {
      for (const r in o)
        if (o[r] === t)
          return r;
    };
    s = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return s ? Wm(s) : n ? "App" : "Anonymous";
}
function vd(e) {
  return se(e) && "__vccOpts" in e;
}
const ae = (e, t) => {
  const n = Rp(e, t, Ss);
  if (b.NODE_ENV !== "production") {
    const s = lt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Gt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? he(t) && !q(t) ? on(t) ? ve(e, null, [t]) : ve(e, t) : ve(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && on(n) && (n = [n]), ve(e, t, n));
}
function bd() {
  if (b.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!he(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Ve(c)) {
        Bt();
        const h = c.value;
        return jt(), [
          "div",
          {},
          ["span", e, d(c)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (hn(c))
          return [
            "div",
            {},
            ["span", e, Xe(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${Ht(c) ? " (readonly)" : ""}`
          ];
        if (Ht(c))
          return [
            "div",
            {},
            ["span", e, Xe(c) ? "ShallowReadonly" : "Readonly"],
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
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const h = [];
    c.type.props && c.props && h.push(r("props", le(c.props))), c.setupState !== fe && h.push(r("setup", c.setupState)), c.data !== fe && h.push(r("data", le(c.data)));
    const m = a(c, "computed");
    m && h.push(r("computed", m));
    const N = a(c, "inject");
    return N && h.push(r("injected", N)), h.push([
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
    ]), h;
  }
  function r(c, h) {
    return h = de({}, h), Object.keys(h).length ? [
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
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, h = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : he(c) ? ["object", { object: h ? le(c) : c }] : ["span", n, String(c)];
  }
  function a(c, h) {
    const m = c.type;
    if (se(m))
      return;
    const N = {};
    for (const E in c.ctx)
      u(m, E, h) && (N[E] = c.ctx[E]);
    return N;
  }
  function u(c, h, m) {
    const N = c[m];
    if (q(N) && N.includes(h) || he(N) && h in N || c.extends && u(c.extends, h, m) || c.mixins && c.mixins.some((E) => u(E, h, m)))
      return !0;
  }
  function d(c) {
    return Xe(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
function Gm(e, t, n, s) {
  const i = n[s];
  if (i && _d(i, e))
    return i;
  const o = t();
  return o.memo = e.slice(), o.cacheIndex = s, n[s] = o;
}
function _d(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (it(n[s], t[s]))
      return !1;
  return ns > 0 && Je && Je.push(e), !0;
}
const Rr = "3.5.18", $e = b.NODE_ENV !== "production" ? M : Oe, Ym = Ao, Jm = At, Qm = fl, Xm = {
  createComponentInstance: fd,
  setupComponent: hd,
  renderComponentRoot: Hi,
  setCurrentRenderingInstance: ai,
  isVNode: on,
  normalizeVNode: rt,
  getComponentPublicInstance: wi,
  ensureValidVNode: Nl,
  pushWarningContext: ms,
  popWarningContext: gs
}, Zm = Xm, eg = null, tg = null, ng = null;
var xe = {};
let Lr;
const $a = typeof window < "u" && window.trustedTypes;
if ($a)
  try {
    Lr = /* @__PURE__ */ $a.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    xe.NODE_ENV !== "production" && $e(`Error creating trusted types policy: ${e}`);
  }
const Ed = Lr ? (e) => Lr.createHTML(e) : (e) => e, sg = "http://www.w3.org/2000/svg", ig = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Aa = dn && /* @__PURE__ */ dn.createElement("template"), og = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? dn.createElementNS(sg, e) : t === "mathml" ? dn.createElementNS(ig, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
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
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Aa.innerHTML = Ed(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Aa.content;
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
}, _n = "transition", Bs = "animation", ks = Symbol("_vtc"), Nd = {
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
}, wd = /* @__PURE__ */ de(
  {},
  ml,
  Nd
), rg = (e) => (e.displayName = "Transition", e.props = wd, e), Zt = /* @__PURE__ */ rg(
  (e, { slots: t }) => Gt(bu, xd(e), t)
), jn = (e, t = []) => {
  q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ia = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function xd(e) {
  const t = {};
  for (const $ in e)
    $ in Nd || (t[$] = e[$]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = o,
    appearActiveClass: u = r,
    appearToClass: d = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, N = lg(i), E = N && N[0], D = N && N[1], {
    onBeforeEnter: k,
    onEnter: y,
    onEnterCancelled: f,
    onLeave: _,
    onLeaveCancelled: w,
    onBeforeAppear: V = k,
    onAppear: P = y,
    onAppearCancelled: S = f
  } = t, v = ($, L, G, ee) => {
    $._enterCancelled = ee, Nn($, L ? d : l), Nn($, L ? u : r), G && G();
  }, O = ($, L) => {
    $._isLeaving = !1, Nn($, c), Nn($, m), Nn($, h), L && L();
  }, I = ($) => (L, G) => {
    const ee = $ ? P : y, Z = () => v(L, $, G);
    jn(ee, [L, Z]), Ma(() => {
      Nn(L, $ ? a : o), zt(L, $ ? d : l), Ia(ee) || Pa(L, s, E, Z);
    });
  };
  return de(t, {
    onBeforeEnter($) {
      jn(k, [$]), zt($, o), zt($, r);
    },
    onBeforeAppear($) {
      jn(V, [$]), zt($, a), zt($, u);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave($, L) {
      $._isLeaving = !0;
      const G = () => O($, L);
      zt($, c), $._enterCancelled ? (zt($, h), Fr()) : (Fr(), zt($, h)), Ma(() => {
        $._isLeaving && (Nn($, c), zt($, m), Ia(_) || Pa($, s, D, G));
      }), jn(_, [$, G]);
    },
    onEnterCancelled($) {
      v($, !1, void 0, !0), jn(f, [$]);
    },
    onAppearCancelled($) {
      v($, !0, void 0, !0), jn(S, [$]);
    },
    onLeaveCancelled($) {
      O($), jn(w, [$]);
    }
  });
}
function lg(e) {
  if (e == null)
    return null;
  if (he(e))
    return [ur(e.enter), ur(e.leave)];
  {
    const t = ur(e);
    return [t, t];
  }
}
function ur(e) {
  const t = Qi(e);
  return xe.NODE_ENV !== "production" && ul(t, "<transition> explicit duration"), t;
}
function zt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ks] || (e[ks] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[ks];
  n && (n.delete(t), n.size || (e[ks] = void 0));
}
function Ma(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ag = 0;
function Pa(e, t, n, s) {
  const i = e._endId = ++ag, o = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: r, timeout: l, propCount: a } = Sd(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let d = 0;
  const c = () => {
    e.removeEventListener(u, h), o();
  }, h = (m) => {
    m.target === e && ++d >= a && c();
  };
  setTimeout(() => {
    d < a && c();
  }, l + 1), e.addEventListener(u, h);
}
function Sd(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), i = s(`${_n}Delay`), o = s(`${_n}Duration`), r = Ra(i, o), l = s(`${Bs}Delay`), a = s(`${Bs}Duration`), u = Ra(l, a);
  let d = null, c = 0, h = 0;
  t === _n ? r > 0 && (d = _n, c = r, h = o.length) : t === Bs ? u > 0 && (d = Bs, c = u, h = a.length) : (c = Math.max(r, u), d = c > 0 ? r > u ? _n : Bs : null, h = d ? d === _n ? o.length : a.length : 0);
  const m = d === _n && /\b(transform|all)(,|$)/.test(
    s(`${_n}Property`).toString()
  );
  return {
    type: d,
    timeout: c,
    propCount: h,
    hasTransform: m
  };
}
function Ra(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => La(n) + La(e[s])));
}
function La(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fr() {
  return document.body.offsetHeight;
}
function cg(e, t, n) {
  const s = e[ks];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fo = Symbol("_vod"), Cd = Symbol("_vsh"), Tl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[fo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : js(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), js(e, !0), s.enter(e)) : s.leave(e, () => {
      js(e, !1);
    }) : js(e, t));
  },
  beforeUnmount(e, { value: t }) {
    js(e, t);
  }
};
xe.NODE_ENV !== "production" && (Tl.name = "show");
function js(e, t) {
  e.style.display = t ? e[fo] : "none", e[Cd] = !t;
}
function ug() {
  Tl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const kd = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function dg(e) {
  const t = lt();
  if (!t) {
    xe.NODE_ENV !== "production" && $e("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (i = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((o) => po(o, i));
  };
  xe.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const i = e(t.proxy);
    t.ce ? po(t.ce, i) : Br(t.subTree, i), n(i);
  };
  vl(() => {
    Ns(s);
  }), Vt(() => {
    en(s, Oe, { flush: "post" });
    const i = new MutationObserver(s);
    i.observe(t.subTree.el.parentNode, { childList: !0 }), rn(() => i.disconnect());
  });
}
function Br(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Br(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    po(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => Br(n, t));
  else if (e.type === An) {
    let { el: n, anchor: s } = e;
    for (; n && (po(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function po(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const i in t) {
      const o = Mc(t[i]);
      n.setProperty(`--${i}`, o), s += `--${i}: ${o};`;
    }
    n[kd] = s;
  }
}
const fg = /(^|;)\s*display\s*:/;
function pg(e, t, n) {
  const s = e.style, i = oe(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (oe(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && qi(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && qi(s, r, "");
    for (const r in n)
      r === "display" && (o = !0), qi(s, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = s[kd];
      r && (n += ";" + r), s.cssText = n, o = fg.test(n);
    }
  } else t && e.removeAttribute("style");
  fo in e && (e[fo] = o ? s.display : "", e[Cd] && (s.display = "none"));
}
const hg = /[^\\];\s*$/, Fa = /\s*!important$/;
function qi(e, t, n) {
  if (q(n))
    n.forEach((s) => qi(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && hg.test(n) && $e(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = mg(e, t);
    Fa.test(n) ? e.setProperty(
      Ye(s),
      n.replace(Fa, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ba = ["Webkit", "Moz", "ms"], dr = {};
function mg(e, t) {
  const n = dr[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return dr[t] = s;
  s = sn(s);
  for (let i = 0; i < Ba.length; i++) {
    const o = Ba[i] + s;
    if (o in e)
      return dr[t] = o;
  }
  return t;
}
const ja = "http://www.w3.org/1999/xlink";
function Ha(e, t, n, s, i, o = Xf(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ja, t.slice(6, t.length)) : e.setAttributeNS(ja, t, n) : n == null || o && !sl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : gt(n) ? String(n) : n
  );
}
function Ua(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ed(n) : n);
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
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = sl(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    xe.NODE_ENV !== "production" && !r && $e(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(i || t);
}
function pn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function gg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qa = Symbol("_vei");
function yg(e, t, n, s, i = null) {
  const o = e[qa] || (e[qa] = {}), r = o[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? za(s, t) : s;
  else {
    const [l, a] = vg(t);
    if (s) {
      const u = o[t] = Eg(
        xe.NODE_ENV !== "production" ? za(s, t) : s,
        i
      );
      pn(e, l, u, a);
    } else r && (gg(e, l, r, a), o[t] = void 0);
  }
}
const Ka = /(?:Once|Passive|Capture)$/;
function vg(e) {
  let t;
  if (Ka.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ka); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let fr = 0;
const bg = /* @__PURE__ */ Promise.resolve(), _g = () => fr || (bg.then(() => fr = 0), fr = Date.now());
function Eg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Tt(
      Ng(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = _g(), n;
}
function za(e, t) {
  return se(e) || q(e) ? e : ($e(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Oe);
}
function Ng(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const Wa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wg = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? cg(e, s, r) : t === "style" ? pg(e, n, s) : gn(t) ? Yi(t) || yg(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xg(e, t, s, r)) ? (Ua(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ha(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(s)) ? Ua(e, Se(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ha(e, t, s, r));
};
function xg(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wa(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wa(t) && oe(n) ? !1 : t in e;
}
const Ga = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tt(e, t, n) {
  const s = /* @__PURE__ */ gl(e, t);
  So(s) && de(s, t);
  class i extends qo {
    constructor(r) {
      super(s, r, n);
    }
  }
  return i.def = s, i;
}
/*! #__NO_SIDE_EFFECTS__ */
const Sg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ tt(e, t, Ld), Cg = typeof HTMLElement < "u" ? HTMLElement : class {
};
class qo extends Cg {
  constructor(t, n = {}, s = Hr) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Hr ? this._root = this.shadowRoot : (xe.NODE_ENV !== "production" && this.shadowRoot && $e(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof qo) {
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
    this._connected = !1, _i(() => {
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
      for (const i of s)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: r } = s;
      let l;
      if (o && !q(o))
        for (const a in o) {
          const u = o[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = Qi(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Se(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(r) : xe.NODE_ENV !== "production" && r && $e(
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
        me(this, s) ? xe.NODE_ENV !== "production" && $e(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => bi(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = q(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(Se))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Ga;
    const i = Se(t);
    n && this._numberProps && this._numberProps[i] && (s = Qi(s)), this._setProp(i, s, !1, !0);
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
  _setProp(t, n, s = !0, i = !1) {
    if (n !== this._props[t] && (n === Ga ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const o = this._ob;
      o && o.disconnect(), n === !0 ? this.setAttribute(Ye(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ye(t), n + "") : n || this.removeAttribute(Ye(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Rd(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ve(this._def, de(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, xe.NODE_ENV !== "production" && (s.ceReload = (o) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      });
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            So(r[0]) ? de({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (o, ...r) => {
        i(o, r), Ye(o) !== o && i(Ye(o), r);
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
    for (let i = t.length - 1; i >= 0; i--) {
      const o = document.createElement("style");
      if (s && o.setAttribute("nonce", s), o.textContent = t[i], this.shadowRoot.prepend(o), xe.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(o);
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
      const i = t[s], o = i.getAttribute("name") || "default", r = this._slots[o], l = i.parentNode;
      if (r)
        for (const a of r) {
          if (n && a.nodeType === 1) {
            const u = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let c;
            for (; c = d.nextNode(); )
              c.setAttribute(u, "");
          }
          l.insertBefore(a, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
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
function jr(e) {
  const t = lt(), n = t && t.ce;
  return n || (xe.NODE_ENV !== "production" && $e(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function kg() {
  const e = xe.NODE_ENV !== "production" ? jr("useShadowRoot") : jr();
  return e && e.shadowRoot;
}
function Og(e = "$style") {
  {
    const t = lt();
    if (!t)
      return xe.NODE_ENV !== "production" && $e("useCssModule must be called inside setup()"), fe;
    const n = t.type.__cssModules;
    if (!n)
      return xe.NODE_ENV !== "production" && $e("Current instance does not have CSS modules injected."), fe;
    const s = n[e];
    return s || (xe.NODE_ENV !== "production" && $e(`Current instance does not have CSS module named "${e}".`), fe);
  }
}
const Od = /* @__PURE__ */ new WeakMap(), Td = /* @__PURE__ */ new WeakMap(), ho = Symbol("_moveCb"), Ya = Symbol("_enterCb"), Tg = (e) => (delete e.props.mode, e), Dg = /* @__PURE__ */ Tg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ de({}, wd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = lt(), s = hl();
    let i, o;
    return Lo(() => {
      if (!i.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Mg(
        i[0].el,
        n.vnode.el,
        r
      )) {
        i = [];
        return;
      }
      i.forEach($g), i.forEach(Ag);
      const l = i.filter(Ig);
      Fr(), l.forEach((a) => {
        const u = a.el, d = u.style;
        zt(u, r), d.transform = d.webkitTransform = d.transitionDuration = "";
        const c = u[ho] = (h) => {
          h && h.target !== u || (!h || /transform$/.test(h.propertyName)) && (u.removeEventListener("transitionend", c), u[ho] = null, Nn(u, r));
        };
        u.addEventListener("transitionend", c);
      }), i = [];
    }), () => {
      const r = le(e), l = xd(r);
      let a = r.tag || ue;
      if (i = [], o)
        for (let u = 0; u < o.length; u++) {
          const d = o[u];
          d.el && d.el instanceof Element && (i.push(d), yn(
            d,
            ws(
              d,
              l,
              s,
              n
            )
          ), Od.set(
            d,
            d.el.getBoundingClientRect()
          ));
        }
      o = t.default ? Po(t.default()) : [];
      for (let u = 0; u < o.length; u++) {
        const d = o[u];
        d.key != null ? yn(
          d,
          ws(d, l, s, n)
        ) : xe.NODE_ENV !== "production" && d.type !== tn && $e("<TransitionGroup> children must be keyed.");
      }
      return ve(a, null, o);
    };
  }
}), Vg = Dg;
function $g(e) {
  const t = e.el;
  t[ho] && t[ho](), t[Ya] && t[Ya]();
}
function Ag(e) {
  Td.set(e, e.el.getBoundingClientRect());
}
function Ig(e) {
  const t = Od.get(e), n = Td.get(e), s = t.left - n.left, i = t.top - n.top;
  if (s || i) {
    const o = e.el.style;
    return o.transform = o.webkitTransform = `translate(${s}px,${i}px)`, o.transitionDuration = "0s", e;
  }
}
function Mg(e, t, n) {
  const s = e.cloneNode(), i = e[ks];
  i && i.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(s);
  const { hasTransform: r } = Sd(s);
  return o.removeChild(s), r;
}
const Pn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => On(t, n) : t;
};
function Pg(e) {
  e.target.composing = !0;
}
function Ja(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kt = Symbol("_assign"), Rn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e[kt] = Pn(i);
    const o = s || i.props && i.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Ji(l)), e[kt](l);
    }), n && pn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (pn(e, "compositionstart", Pg), pn(e, "compositionend", Ja), pn(e, "change", Ja));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: o } }, r) {
    if (e[kt] = Pn(r), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ji(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a));
  }
}, Jt = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[kt] = Pn(n), pn(e, "change", () => {
      const s = e._modelValue, i = Os(e), o = e.checked, r = e[kt];
      if (q(s)) {
        const l = ko(s, i), a = l !== -1;
        if (o && !a)
          r(s.concat(i));
        else if (!o && a) {
          const u = [...s];
          u.splice(l, 1), r(u);
        }
      } else if (os(s)) {
        const l = new Set(s);
        o ? l.add(i) : l.delete(i), r(l);
      } else
        r(Dd(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Qa,
  beforeUpdate(e, t, n) {
    e[kt] = Pn(n), Qa(e, t, n);
  }
};
function Qa(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (q(t))
    i = ko(t, s.props.value) > -1;
  else if (os(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = Mn(t, Dd(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const Dl = {
  created(e, { value: t }, n) {
    e.checked = Mn(t, n.props.value), e[kt] = Pn(n), pn(e, "change", () => {
      e[kt](Os(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[kt] = Pn(s), t !== n && (e.checked = Mn(t, s.props.value));
  }
}, Ko = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const i = os(t);
    pn(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? Ji(Os(r)) : Os(r)
      );
      e[kt](
        e.multiple ? i ? new Set(o) : o : o[0]
      ), e._assigning = !0, _i(() => {
        e._assigning = !1;
      });
    }), e[kt] = Pn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Xa(e, t);
  },
  beforeUpdate(e, t, n) {
    e[kt] = Pn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Xa(e, t);
  }
};
function Xa(e, t) {
  const n = e.multiple, s = q(t);
  if (n && !s && !os(t)) {
    xe.NODE_ENV !== "production" && $e(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, o = e.options.length; i < o; i++) {
    const r = e.options[i], l = Os(r);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? r.selected = t.some((u) => String(u) === String(l)) : r.selected = ko(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (Mn(Os(r), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Os(e) {
  return "_value" in e ? e._value : e.value;
}
function Dd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Vd = {
  created(e, t, n) {
    Mi(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Mi(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Mi(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Mi(e, t, n, s, "updated");
  }
};
function $d(e, t) {
  switch (e) {
    case "SELECT":
      return Ko;
    case "TEXTAREA":
      return Rn;
    default:
      switch (t) {
        case "checkbox":
          return Jt;
        case "radio":
          return Dl;
        default:
          return Rn;
      }
  }
}
function Mi(e, t, n, s, i) {
  const r = $d(
    e.tagName,
    n.props && n.props.type
  )[i];
  r && r(e, t, n, s);
}
function Rg() {
  Rn.getSSRProps = ({ value: e }) => ({ value: e }), Dl.getSSRProps = ({ value: e }, t) => {
    if (t.props && Mn(t.props.value, e))
      return { checked: !0 };
  }, Jt.getSSRProps = ({ value: e }, t) => {
    if (q(e)) {
      if (t.props && ko(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (os(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Vd.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = $d(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Lg = ["ctrl", "shift", "alt", "meta"], Fg = {
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
  exact: (e, t) => Lg.some((n) => e[`${n}Key`] && !t.includes(n))
}, nn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const l = Fg[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  });
}, Bg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ad = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (i) => {
    if (!("key" in i))
      return;
    const o = Ye(i.key);
    if (t.some(
      (r) => r === o || Bg[r] === o
    ))
      return e(i);
  });
}, Id = /* @__PURE__ */ de({ patchProp: wg }, og);
let ni, Za = !1;
function Md() {
  return ni || (ni = Ku(Id));
}
function Pd() {
  return ni = Za ? ni : zu(Id), Za = !0, ni;
}
const Rd = (...e) => {
  Md().render(...e);
}, jg = (...e) => {
  Pd().hydrate(...e);
}, Hr = (...e) => {
  const t = Md().createApp(...e);
  xe.NODE_ENV !== "production" && (Bd(t), jd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const i = Hd(s);
    if (!i) return;
    const o = t._component;
    !se(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Fd(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
}, Ld = (...e) => {
  const t = Pd().createApp(...e);
  xe.NODE_ENV !== "production" && (Bd(t), jd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const i = Hd(s);
    if (i)
      return n(i, !0, Fd(i));
  }, t;
};
function Fd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Tc(t) || Dc(t) || Vc(t),
    writable: !1
  });
}
function jd(e) {
  if (Ol()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        $e(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return $e(s), n;
      },
      set() {
        $e(s);
      }
    });
  }
}
function Hd(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return xe.NODE_ENV !== "production" && !t && $e(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return xe.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && $e(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let ec = !1;
const Hg = () => {
  ec || (ec = !0, Rg(), ug());
}, Ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: bu,
  BaseTransitionPropsValidators: ml,
  Comment: Te,
  DeprecationTypes: ng,
  EffectScope: il,
  ErrorCodes: zp,
  ErrorTypeStrings: Ym,
  Fragment: ue,
  KeepAlive: Dh,
  ReactiveEffect: ii,
  Static: An,
  Suspense: Am,
  Teleport: ls,
  Text: tn,
  TrackOpTypes: Lp,
  Transition: Zt,
  TransitionGroup: Vg,
  TriggerOpTypes: Fp,
  VueElement: qo,
  assertNumber: ul,
  callWithAsyncErrorHandling: Tt,
  callWithErrorHandling: rs,
  camelize: Se,
  capitalize: sn,
  cloneVNode: Dt,
  compatUtils: tg,
  computed: ae,
  createApp: Hr,
  createBlock: Ut,
  createCommentVNode: J,
  createElementBlock: T,
  createElementVNode: p,
  createHydrationRenderer: zu,
  createPropsRestProxy: Xh,
  createRenderer: Ku,
  createSSRApp: Ld,
  createSlots: Mh,
  createStaticVNode: xs,
  createTextVNode: je,
  createVNode: ve,
  customRef: nu,
  defineAsyncComponent: Oh,
  defineComponent: gl,
  defineCustomElement: tt,
  defineEmits: Hh,
  defineExpose: Uh,
  defineModel: zh,
  defineOptions: qh,
  defineProps: jh,
  defineSSRCustomElement: Sg,
  defineSlots: Kh,
  devtools: Jm,
  effect: lp,
  effectScope: op,
  getCurrentInstance: lt,
  getCurrentScope: ol,
  getCurrentWatcher: Bp,
  getTransitionRawChildren: Po,
  guardReactiveProps: cd,
  h: Gt,
  handleError: Ln,
  hasInjectionContext: am,
  hydrate: jg,
  hydrateOnIdle: Nh,
  hydrateOnInteraction: Ch,
  hydrateOnMediaQuery: Sh,
  hydrateOnVisible: xh,
  initCustomFormatter: bd,
  initDirectivesForSSR: Hg,
  inject: Xs,
  isMemoSame: _d,
  isProxy: Es,
  isReactive: hn,
  isReadonly: Ht,
  isRef: Ve,
  isRuntimeOnly: Ol,
  isShallow: Xe,
  isVNode: on,
  markRaw: Zc,
  mergeDefaults: Jh,
  mergeModels: Qh,
  mergeProps: dd,
  nextTick: _i,
  normalizeClass: Qe,
  normalizeProps: zf,
  normalizeStyle: _t,
  onActivated: xu,
  onBeforeMount: ku,
  onBeforeUnmount: Fo,
  onBeforeUpdate: vl,
  onDeactivated: Su,
  onErrorCaptured: Vu,
  onMounted: Vt,
  onRenderTracked: Du,
  onRenderTriggered: Tu,
  onScopeDispose: Pc,
  onServerPrefetch: Ou,
  onUnmounted: rn,
  onUpdated: Lo,
  onWatcherCleanup: iu,
  openBlock: C,
  popScopeId: ah,
  provide: Pu,
  proxyRefs: cl,
  pushScopeId: lh,
  queuePostFlushCb: Ns,
  reactive: _s,
  readonly: Vo,
  ref: X,
  registerRuntimeCompiler: md,
  render: Rd,
  renderList: Ae,
  renderSlot: El,
  resolveComponent: Ah,
  resolveDirective: Ih,
  resolveDynamicComponent: $u,
  resolveFilter: eg,
  resolveTransitionHooks: ws,
  setBlockTracking: Dr,
  setDevtoolsHook: Qm,
  setTransitionHooks: yn,
  shallowReactive: Xc,
  shallowReadonly: Mt,
  shallowRef: eu,
  ssrContextKey: Ju,
  ssrUtils: Zm,
  stop: ap,
  toDisplayString: Y,
  toHandlerKey: Qt,
  toHandlers: Ph,
  toRaw: le,
  toRef: Mp,
  toRefs: $p,
  toValue: Tp,
  transformVNodeArgs: Fm,
  triggerRef: Op,
  unref: bi,
  useAttrs: Yh,
  useCssModule: Og,
  useCssVars: dg,
  useHost: jr,
  useId: fh,
  useModel: km,
  useSSRContext: Qu,
  useShadowRoot: kg,
  useSlots: Gh,
  useTemplateRef: ph,
  useTransitionState: hl,
  vModelCheckbox: Jt,
  vModelDynamic: Vd,
  vModelRadio: Dl,
  vModelSelect: Ko,
  vModelText: Rn,
  vShow: Tl,
  version: Rr,
  warn: $e,
  watch: en,
  watchEffect: xm,
  watchPostEffect: Sm,
  watchSyncEffect: Xu,
  withAsyncContext: Zh,
  withCtx: St,
  withDefaults: Wh,
  withDirectives: pt,
  withKeys: Ad,
  withMemo: Gm,
  withModifiers: nn,
  withScopeId: ch
}, Symbol.toStringTag, { value: "Module" }));
var K = {};
const di = Symbol(K.NODE_ENV !== "production" ? "Fragment" : ""), si = Symbol(K.NODE_ENV !== "production" ? "Teleport" : ""), Vl = Symbol(K.NODE_ENV !== "production" ? "Suspense" : ""), mo = Symbol(K.NODE_ENV !== "production" ? "KeepAlive" : ""), Ud = Symbol(
  K.NODE_ENV !== "production" ? "BaseTransition" : ""
), is = Symbol(K.NODE_ENV !== "production" ? "openBlock" : ""), qd = Symbol(K.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  K.NODE_ENV !== "production" ? "createElementBlock" : ""
), $l = Symbol(K.NODE_ENV !== "production" ? "createVNode" : ""), Al = Symbol(
  K.NODE_ENV !== "production" ? "createElementVNode" : ""
), xi = Symbol(
  K.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Il = Symbol(
  K.NODE_ENV !== "production" ? "createTextVNode" : ""
), zd = Symbol(
  K.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Ml = Symbol(
  K.NODE_ENV !== "production" ? "resolveComponent" : ""
), Pl = Symbol(
  K.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Rl = Symbol(
  K.NODE_ENV !== "production" ? "resolveDirective" : ""
), Ll = Symbol(
  K.NODE_ENV !== "production" ? "resolveFilter" : ""
), Fl = Symbol(
  K.NODE_ENV !== "production" ? "withDirectives" : ""
), Bl = Symbol(K.NODE_ENV !== "production" ? "renderList" : ""), Wd = Symbol(K.NODE_ENV !== "production" ? "renderSlot" : ""), Gd = Symbol(K.NODE_ENV !== "production" ? "createSlots" : ""), zo = Symbol(
  K.NODE_ENV !== "production" ? "toDisplayString" : ""
), go = Symbol(K.NODE_ENV !== "production" ? "mergeProps" : ""), jl = Symbol(
  K.NODE_ENV !== "production" ? "normalizeClass" : ""
), Hl = Symbol(
  K.NODE_ENV !== "production" ? "normalizeStyle" : ""
), fi = Symbol(
  K.NODE_ENV !== "production" ? "normalizeProps" : ""
), Si = Symbol(
  K.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Ul = Symbol(K.NODE_ENV !== "production" ? "toHandlers" : ""), Ur = Symbol(K.NODE_ENV !== "production" ? "camelize" : ""), qg = Symbol(K.NODE_ENV !== "production" ? "capitalize" : ""), qr = Symbol(
  K.NODE_ENV !== "production" ? "toHandlerKey" : ""
), yo = Symbol(
  K.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Kg = Symbol(K.NODE_ENV !== "production" ? "pushScopeId" : ""), zg = Symbol(K.NODE_ENV !== "production" ? "popScopeId" : ""), ql = Symbol(K.NODE_ENV !== "production" ? "withCtx" : ""), Wg = Symbol(K.NODE_ENV !== "production" ? "unref" : ""), Gg = Symbol(K.NODE_ENV !== "production" ? "isRef" : ""), Kl = Symbol(K.NODE_ENV !== "production" ? "withMemo" : ""), Yd = Symbol(K.NODE_ENV !== "production" ? "isMemoSame" : ""), Ts = {
  [di]: "Fragment",
  [si]: "Teleport",
  [Vl]: "Suspense",
  [mo]: "KeepAlive",
  [Ud]: "BaseTransition",
  [is]: "openBlock",
  [qd]: "createBlock",
  [Kd]: "createElementBlock",
  [$l]: "createVNode",
  [Al]: "createElementVNode",
  [xi]: "createCommentVNode",
  [Il]: "createTextVNode",
  [zd]: "createStaticVNode",
  [Ml]: "resolveComponent",
  [Pl]: "resolveDynamicComponent",
  [Rl]: "resolveDirective",
  [Ll]: "resolveFilter",
  [Fl]: "withDirectives",
  [Bl]: "renderList",
  [Wd]: "renderSlot",
  [Gd]: "createSlots",
  [zo]: "toDisplayString",
  [go]: "mergeProps",
  [jl]: "normalizeClass",
  [Hl]: "normalizeStyle",
  [fi]: "normalizeProps",
  [Si]: "guardReactiveProps",
  [Ul]: "toHandlers",
  [Ur]: "camelize",
  [qg]: "capitalize",
  [qr]: "toHandlerKey",
  [yo]: "setBlockTracking",
  [Kg]: "pushScopeId",
  [zg]: "popScopeId",
  [ql]: "withCtx",
  [Wg]: "unref",
  [Gg]: "isRef",
  [Kl]: "withMemo",
  [Yd]: "isMemoSame"
};
function Yg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Ts[t] = e[t];
  });
}
const Et = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Jg(e, t = "") {
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
    loc: Et
  };
}
function pi(e, t, n, s, i, o, r, l = !1, a = !1, u = !1, d = Et) {
  return e && (l ? (e.helper(is), e.helper($s(e.inSSR, u))) : e.helper(Vs(e.inSSR, u)), r && e.helper(Fl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: i,
    dynamicProps: o,
    directives: r,
    isBlock: l,
    disableTracking: a,
    isComponent: u,
    loc: d
  };
}
function Zn(e, t = Et) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Ct(e, t = Et) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Ie(e, t) {
  return {
    type: 16,
    loc: Et,
    key: oe(e) ? ce(e, !0) : e,
    value: t
  };
}
function ce(e, t = !1, n = Et, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function Ft(e, t = Et) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Fe(e, t = [], n = Et) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Ds(e, t = void 0, n = !1, s = !1, i = Et) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: i
  };
}
function Kr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Et
  };
}
function Qg(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: Et
  };
}
function Xg(e) {
  return {
    type: 21,
    body: e,
    loc: Et
  };
}
function Vs(e, t) {
  return e || t ? $l : Al;
}
function $s(e, t) {
  return e || t ? qd : Kd;
}
function zl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Vs(s, e.isComponent)), t(is), t($s(s, e.isComponent)));
}
const tc = new Uint8Array([123, 123]), nc = new Uint8Array([125, 125]);
function sc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function vt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function En(e) {
  return e === 47 || e === 62 || vt(e);
}
function vo(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ue = {
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
class Zg {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = tc, this.delimiterClose = nc, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = tc, this.delimiterClose = nc;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, s = t + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const o = this.newlines[i];
      if (t > o) {
        n = i + 2, s = t - o;
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
      if (t === 62 || vt(t)) {
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ue.TitleEnd || this.currentSequence === Ue.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ue.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ue.Cdata.length && (this.state = 28, this.currentSequence = Ue.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ue.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : sc(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    En(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (En(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(vo("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    vt(t) || (t === 62 ? (K.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = sc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || vt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, K.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : vt(t) || (K.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : vt(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || En(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : K.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || En(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), K.NODE_ENV !== "production" && this.cbs.onerr(
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
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : vt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : vt(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
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
    vt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (K.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = Ue.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ue.ScriptEnd[3] ? this.startSpecial(Ue.ScriptEnd, 4) : t === Ue.StyleEnd[3] ? this.startSpecial(Ue.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ue.TitleEnd[3] ? this.startSpecial(Ue.TitleEnd, 4) : t === Ue.TextareaEnd[3] ? this.startSpecial(Ue.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ue.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const e0 = {
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
function zr(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function In(e, t) {
  const n = zr("MODE", t), s = zr(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function As(e, t, n, ...s) {
  const i = In(e, t);
  return K.NODE_ENV !== "production" && i && bo(e, t, n, ...s), i;
}
function bo(e, t, n, ...s) {
  if (zr(e, t) === "suppress-warning")
    return;
  const { message: o, link: r } = e0[e], l = `(deprecation ${e}) ${typeof o == "function" ? o(...s) : o}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Wl(e) {
  throw e;
}
function Jd(e) {
  K.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function we(e, t, n, s) {
  const i = K.NODE_ENV !== "production" ? (n || t0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, o = new SyntaxError(String(i));
  return o.code = e, o.loc = t, o;
}
const t0 = {
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
}, mt = (e) => e.type === 4 && e.isStatic;
function Qd(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return si;
    case "Suspense":
    case "suspense":
      return Vl;
    case "KeepAlive":
    case "keep-alive":
      return mo;
    case "BaseTransition":
    case "base-transition":
      return Ud;
  }
}
const n0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Gl = (e) => !n0.test(e), s0 = /[A-Za-z_$\xA0-\uFFFF]/, i0 = /[\.\?\w$\xA0-\uFFFF]/, o0 = /\s+[.[]\s*|\s*[.[]\s+/g, Xd = (e) => e.type === 4 ? e.content : e.loc.source, r0 = (e) => {
  const t = Xd(e).trim().replace(o0, (l) => l.trim());
  let n = 0, s = [], i = 0, o = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, i++;
        else if (a === "(")
          s.push(n), n = 2, o++;
        else if (!(l === 0 ? s0 : i0).test(a))
          return !1;
        break;
      case 1:
        a === "'" || a === '"' || a === "`" ? (s.push(n), n = 3, r = a) : a === "[" ? i++ : a === "]" && (--i || (n = s.pop()));
        break;
      case 2:
        if (a === "'" || a === '"' || a === "`")
          s.push(n), n = 3, r = a;
        else if (a === "(")
          o++;
        else if (a === ")") {
          if (l === t.length - 1)
            return !1;
          --o || (n = s.pop());
        }
        break;
      case 3:
        a === r && (n = s.pop(), r = null);
        break;
    }
  }
  return !i && !o;
}, Zd = r0, l0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, a0 = (e) => l0.test(Xd(e)), c0 = a0;
function ic(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function ht(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const i = e.props[s];
    if (i.type === 7 && (n || i.exp) && (oe(t) ? i.name === t : t.test(i.name)))
      return i;
  }
}
function hi(e, t, n = !1, s = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const o = e.props[i];
    if (o.type === 6) {
      if (n) continue;
      if (o.name === t && (o.value || s))
        return o;
    } else if (o.name === "bind" && (o.exp || s) && Dn(o.arg, t))
      return o;
  }
}
function Dn(e, t) {
  return !!(e && mt(e) && e.content === t);
}
function u0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function pr(e) {
  return e.type === 5 || e.type === 2;
}
function oc(e) {
  return e.type === 7 && e.name === "pre";
}
function d0(e) {
  return e.type === 7 && e.name === "slot";
}
function _o(e) {
  return e.type === 1 && e.tagType === 3;
}
function Eo(e) {
  return e.type === 1 && e.tagType === 2;
}
const f0 = /* @__PURE__ */ new Set([fi, Si]);
function ef(e, t = []) {
  if (e && !oe(e) && e.type === 14) {
    const n = e.callee;
    if (!oe(n) && f0.has(n))
      return ef(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function No(e, t, n) {
  let s, i = e.type === 13 ? e.props : e.arguments[2], o = [], r;
  if (i && !oe(i) && i.type === 14) {
    const l = ef(i);
    i = l[0], o = l[1], r = o[o.length - 1];
  }
  if (i == null || oe(i))
    s = Ct([t]);
  else if (i.type === 14) {
    const l = i.arguments[0];
    !oe(l) && l.type === 15 ? rc(t, l) || l.properties.unshift(t) : i.callee === Ul ? s = Fe(n.helper(go), [
      Ct([t]),
      i
    ]) : i.arguments.unshift(Ct([t])), !s && (s = i);
  } else i.type === 15 ? (rc(t, i) || i.properties.unshift(t), s = i) : (s = Fe(n.helper(go), [
    Ct([t]),
    i
  ]), r && r.callee === Si && (r = o[o.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = s : e.props = s : r ? r.arguments[0] = s : e.arguments[2] = s;
}
function rc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (i) => i.key.type === 4 && i.key.content === s
    );
  }
  return n;
}
function mi(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function p0(e) {
  return e.type === 14 && e.callee === Kl ? e.arguments[1].returns : e;
}
const h0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, tf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Hs,
  isPreTag: Hs,
  isIgnoreNewlineTag: Hs,
  isCustomElement: Hs,
  onError: Wl,
  onWarn: Jd,
  comments: K.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ge = tf, gi = null, mn = "", Ge = null, pe = null, dt = "", un = -1, Hn = -1, Yl = 0, kn = !1, Wr = null;
const De = [], ke = new Zg(De, {
  onerr: ut,
  ontext(e, t) {
    Pi(qe(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Pi(e, t, n);
  },
  oninterpolation(e, t) {
    if (kn)
      return Pi(qe(e, t), e, t);
    let n = e + ke.delimiterOpen.length, s = t - ke.delimiterClose.length;
    for (; vt(mn.charCodeAt(n)); )
      n++;
    for (; vt(mn.charCodeAt(s - 1)); )
      s--;
    let i = qe(n, s);
    i.includes("&") && (i = ge.decodeEntities(i, !1)), Gr({
      type: 5,
      content: zi(i, !1, Me(n, s)),
      loc: Me(e, t)
    });
  },
  onopentagname(e, t) {
    const n = qe(e, t);
    Ge = {
      type: 1,
      tag: n,
      ns: ge.getNamespace(n, De[0], ge.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Me(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    ac(e);
  },
  onclosetag(e, t) {
    const n = qe(e, t);
    if (!ge.isVoidTag(n)) {
      let s = !1;
      for (let i = 0; i < De.length; i++)
        if (De[i].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, i > 0 && ut(24, De[0].loc.start.offset);
          for (let r = 0; r <= i; r++) {
            const l = De.shift();
            Ki(l, t, r < i);
          }
          break;
        }
      s || ut(23, nf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Ge.tag;
    Ge.isSelfClosing = !0, ac(e), De[0] && De[0].tag === t && Ki(De.shift(), e);
  },
  onattribname(e, t) {
    pe = {
      type: 6,
      name: qe(e, t),
      nameLoc: Me(e, t),
      value: void 0,
      loc: Me(e)
    };
  },
  ondirname(e, t) {
    const n = qe(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!kn && s === "" && ut(26, e), kn || s === "")
      pe = {
        type: 6,
        name: n,
        nameLoc: Me(e, t),
        value: void 0,
        loc: Me(e)
      };
    else if (pe = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [ce("prop")] : [],
      loc: Me(e)
    }, s === "pre") {
      kn = ke.inVPre = !0, Wr = Ge;
      const i = Ge.props;
      for (let o = 0; o < i.length; o++)
        i[o].type === 7 && (i[o] = S0(i[o]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = qe(e, t);
    if (kn && !oc(pe))
      pe.name += n, Kn(pe.nameLoc, t);
    else {
      const s = n[0] !== "[";
      pe.arg = zi(
        s ? n : n.slice(1, -1),
        s,
        Me(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = qe(e, t);
    if (kn && !oc(pe))
      pe.name += "." + n, Kn(pe.nameLoc, t);
    else if (pe.name === "slot") {
      const s = pe.arg;
      s && (s.content += "." + n, Kn(s.loc, t));
    } else {
      const s = ce(n, !0, Me(e, t));
      pe.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    dt += qe(e, t), un < 0 && (un = e), Hn = t;
  },
  onattribentity(e, t, n) {
    dt += e, un < 0 && (un = t), Hn = n;
  },
  onattribnameend(e) {
    const t = pe.loc.start.offset, n = qe(t, e);
    pe.type === 7 && (pe.rawName = n), Ge.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && ut(2, t);
  },
  onattribend(e, t) {
    if (Ge && pe) {
      if (Kn(pe.loc, t), e !== 0)
        if (dt.includes("&") && (dt = ge.decodeEntities(
          dt,
          !0
        )), pe.type === 6)
          pe.name === "class" && (dt = of(dt).trim()), e === 1 && !dt && ut(13, t), pe.value = {
            type: 2,
            content: dt,
            loc: e === 1 ? Me(un, Hn) : Me(un - 1, Hn + 1)
          }, ke.inSFCRoot && Ge.tag === "template" && pe.name === "lang" && dt && dt !== "html" && ke.enterRCDATA(vo("</template"), 0);
        else {
          let n = 0;
          pe.exp = zi(
            dt,
            !1,
            Me(un, Hn),
            0,
            n
          ), pe.name === "for" && (pe.forParseResult = g0(pe.exp));
          let s = -1;
          pe.name === "bind" && (s = pe.modifiers.findIndex(
            (i) => i.content === "sync"
          )) > -1 && As(
            "COMPILER_V_BIND_SYNC",
            ge,
            pe.loc,
            pe.arg.loc.source
          ) && (pe.name = "model", pe.modifiers.splice(s, 1));
        }
      (pe.type !== 7 || pe.name !== "pre") && Ge.props.push(pe);
    }
    dt = "", un = Hn = -1;
  },
  oncomment(e, t) {
    ge.comments && Gr({
      type: 3,
      content: qe(e, t),
      loc: Me(e - 4, t + 3)
    });
  },
  onend() {
    const e = mn.length;
    if (K.NODE_ENV !== "production" && ke.state !== 1)
      switch (ke.state) {
        case 5:
        case 8:
          ut(5, e);
          break;
        case 3:
        case 4:
          ut(
            25,
            ke.sectionStart
          );
          break;
        case 28:
          ke.currentSequence === Ue.CdataEnd ? ut(6, e) : ut(7, e);
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
          ut(9, e);
          break;
      }
    for (let t = 0; t < De.length; t++)
      Ki(De[t], e - 1), ut(24, De[t].loc.start.offset);
  },
  oncdata(e, t) {
    De[0].ns !== 0 ? Pi(qe(e, t), e, t) : ut(1, e - 9);
  },
  onprocessinginstruction(e) {
    (De[0] ? De[0].ns : ge.ns) === 0 && ut(
      21,
      e - 1
    );
  }
}), lc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, m0 = /^\(|\)$/g;
function g0(e) {
  const t = e.loc, n = e.content, s = n.match(h0);
  if (!s) return;
  const [, i, o] = s, r = (c, h, m = !1) => {
    const N = t.start.offset + h, E = N + c.length;
    return zi(
      c,
      !1,
      Me(N, E),
      0,
      m ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: r(o.trim(), n.indexOf(o, i.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = i.trim().replace(m0, "").trim();
  const u = i.indexOf(a), d = a.match(lc);
  if (d) {
    a = a.replace(lc, "").trim();
    const c = d[1].trim();
    let h;
    if (c && (h = n.indexOf(c, u + a.length), l.key = r(c, h, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = r(
        m,
        n.indexOf(
          m,
          l.key ? h + c.length : u + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = r(a, u, !0)), l;
}
function qe(e, t) {
  return mn.slice(e, t);
}
function ac(e) {
  ke.inSFCRoot && (Ge.innerLoc = Me(e + 1, e + 1)), Gr(Ge);
  const { tag: t, ns: n } = Ge;
  n === 0 && ge.isPreTag(t) && Yl++, ge.isVoidTag(t) ? Ki(Ge, e) : (De.unshift(Ge), (n === 1 || n === 2) && (ke.inXML = !0)), Ge = null;
}
function Pi(e, t, n) {
  {
    const o = De[0] && De[0].tag;
    o !== "script" && o !== "style" && e.includes("&") && (e = ge.decodeEntities(e, !1));
  }
  const s = De[0] || gi, i = s.children[s.children.length - 1];
  i && i.type === 2 ? (i.content += e, Kn(i.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Me(t, n)
  });
}
function Ki(e, t, n = !1) {
  n ? Kn(e.loc, nf(t, 60)) : Kn(e.loc, y0(t, 62) + 1), ke.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = qe(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: i, children: o } = e;
  if (kn || (s === "slot" ? e.tagType = 2 : cc(e) ? e.tagType = 3 : b0(e) && (e.tagType = 1)), ke.inRCDATA || (e.children = sf(o)), i === 0 && ge.isIgnoreNewlineTag(s)) {
    const r = o[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  i === 0 && ge.isPreTag(s) && Yl--, Wr === e && (kn = ke.inVPre = !1, Wr = null), ke.inXML && (De[0] ? De[0].ns : ge.ns) === 0 && (ke.inXML = !1);
  {
    const r = e.props;
    if (K.NODE_ENV !== "production" && In(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ge
    )) {
      let a = !1, u = !1;
      for (let d = 0; d < r.length; d++) {
        const c = r[d];
        if (c.type === 7 && (c.name === "if" ? a = !0 : c.name === "for" && (u = !0)), a && u) {
          bo(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ge,
            e.loc
          );
          break;
        }
      }
    }
    if (!ke.inSFCRoot && In(
      "COMPILER_NATIVE_TEMPLATE",
      ge
    ) && e.tag === "template" && !cc(e)) {
      K.NODE_ENV !== "production" && bo(
        "COMPILER_NATIVE_TEMPLATE",
        ge,
        e.loc
      );
      const a = De[0] || gi, u = a.children.indexOf(e);
      a.children.splice(u, 1, ...e.children);
    }
    const l = r.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && As(
      "COMPILER_INLINE_TEMPLATE",
      ge,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: qe(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function y0(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n < mn.length - 1; ) n++;
  return n;
}
function nf(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const v0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function cc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && v0.has(t[n].name))
        return !0;
  }
  return !1;
}
function b0({ tag: e, props: t }) {
  if (ge.isCustomElement(e))
    return !1;
  if (e === "component" || _0(e.charCodeAt(0)) || Qd(e) || ge.isBuiltInComponent && ge.isBuiltInComponent(e) || ge.isNativeTag && !ge.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (As(
          "COMPILER_IS_ON_ELEMENT",
          ge,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Dn(s.arg, "is") && As(
        "COMPILER_IS_ON_ELEMENT",
        ge,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function _0(e) {
  return e > 64 && e < 91;
}
const E0 = /\r\n/g;
function sf(e) {
  const t = ge.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.type === 2)
      if (Yl)
        i.content = i.content.replace(E0, `
`);
      else if (N0(i.content)) {
        const o = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !o || !r || t && (o === 3 && (r === 3 || r === 1) || o === 1 && (r === 3 || r === 1 && w0(i.content))) ? (n = !0, e[s] = null) : i.content = " ";
      } else t && (i.content = of(i.content));
  }
  return n ? e.filter(Boolean) : e;
}
function N0(e) {
  for (let t = 0; t < e.length; t++)
    if (!vt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function w0(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function of(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    vt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Gr(e) {
  (De[0] || gi).children.push(e);
}
function Me(e, t) {
  return {
    start: ke.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : ke.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : qe(e, t)
  };
}
function x0(e) {
  return Me(e.start.offset, e.end.offset);
}
function Kn(e, t) {
  e.end = ke.getPos(t), e.source = qe(e.start.offset, t);
}
function S0(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Me(
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
function zi(e, t = !1, n, s = 0, i = 0) {
  return ce(e, t, n, s);
}
function ut(e, t, n) {
  ge.onError(
    we(e, Me(t, t), void 0, n)
  );
}
function C0() {
  ke.reset(), Ge = null, pe = null, dt = "", un = -1, Hn = -1, De.length = 0;
}
function k0(e, t) {
  if (C0(), mn = e, ge = de({}, tf), t) {
    let i;
    for (i in t)
      t[i] != null && (ge[i] = t[i]);
  }
  if (K.NODE_ENV !== "production" && !ge.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  ke.mode = ge.parseMode === "html" ? 1 : ge.parseMode === "sfc" ? 2 : 0, ke.inXML = ge.ns === 1 || ge.ns === 2;
  const n = t && t.delimiters;
  n && (ke.delimiterOpen = vo(n[0]), ke.delimiterClose = vo(n[1]));
  const s = gi = Jg([], e);
  return ke.parse(mn), s.loc = Me(0, e.length), s.children = sf(s.children), gi = null, s;
}
function O0(e, t) {
  Wi(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!rf(e)
  );
}
function rf(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !Eo(t[0]) ? t[0] : null;
}
function Wi(e, t, n, s = !1, i = !1) {
  const { children: o } = e, r = [];
  for (let c = 0; c < o.length; c++) {
    const h = o[c];
    if (h.type === 1 && h.tagType === 0) {
      const m = s ? 0 : bt(h, n);
      if (m > 0) {
        if (m >= 2) {
          h.codegenNode.patchFlag = -1, r.push(h);
          continue;
        }
      } else {
        const N = h.codegenNode;
        if (N.type === 13) {
          const E = N.patchFlag;
          if ((E === void 0 || E === 512 || E === 1) && af(h, n) >= 2) {
            const D = cf(h);
            D && (N.props = n.hoist(D));
          }
          N.dynamicProps && (N.dynamicProps = n.hoist(N.dynamicProps));
        }
      }
    } else if (h.type === 12 && (s ? 0 : bt(h, n)) >= 2) {
      h.codegenNode.type === 14 && h.codegenNode.arguments.length > 0 && h.codegenNode.arguments.push(
        -1 + (K.NODE_ENV !== "production" ? ` /* ${Gs[-1]} */` : "")
      ), r.push(h);
      continue;
    }
    if (h.type === 1) {
      const m = h.tagType === 1;
      m && n.scopes.vSlot++, Wi(h, e, n, !1, i), m && n.scopes.vSlot--;
    } else if (h.type === 11)
      Wi(h, e, n, h.children.length === 1, !0);
    else if (h.type === 9)
      for (let m = 0; m < h.branches.length; m++)
        Wi(
          h.branches[m],
          e,
          n,
          h.branches[m].children.length === 1,
          i
        );
  }
  let l = !1;
  const a = [];
  if (r.length === o.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && q(e.codegenNode.children))
      e.codegenNode.children = u(
        Zn(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !q(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const c = d(e.codegenNode, "default");
      c && (a.push(n.cached.length), c.returns = u(
        Zn(c.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !q(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const c = ht(e, "slot", !0), h = c && c.arg && d(t.codegenNode, c.arg);
      h && (a.push(n.cached.length), h.returns = u(
        Zn(h.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const c of r)
      a.push(n.cached.length), c.codegenNode = n.cache(c.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !q(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Ie(
      "__",
      ce(JSON.stringify(a), !1)
    )
  );
  function u(c) {
    const h = n.cache(c);
    return i && n.hmr && (h.needArraySpread = !0), h;
  }
  function d(c, h) {
    if (c.children && !q(c.children) && c.children.type === 15) {
      const m = c.children.properties.find(
        (N) => N.key === h || N.key.content === h
      );
      return m && m.value;
    }
  }
  r.length && n.transformHoist && n.transformHoist(o, n, e);
}
function bt(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const s = n.get(e);
      if (s !== void 0)
        return s;
      const i = e.codegenNode;
      if (i.type !== 13 || i.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (i.patchFlag === void 0) {
        let r = 3;
        const l = af(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < r && (r = l);
        for (let a = 0; a < e.children.length; a++) {
          const u = bt(e.children[a], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < r && (r = u);
        }
        if (r > 1)
          for (let a = 0; a < e.props.length; a++) {
            const u = e.props[a];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const d = bt(u.exp, t);
              if (d === 0)
                return n.set(e, 0), 0;
              d < r && (r = d);
            }
          }
        if (i.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(is), t.removeHelper(
            $s(t.inSSR, i.isComponent)
          ), i.isBlock = !1, t.helper(Vs(t.inSSR, i.isComponent));
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
      return bt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let o = 3;
      for (let r = 0; r < e.children.length; r++) {
        const l = e.children[r];
        if (oe(l) || gt(l))
          continue;
        const a = bt(l, t);
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
const T0 = /* @__PURE__ */ new Set([
  jl,
  Hl,
  fi,
  Si
]);
function lf(e, t) {
  if (e.type === 14 && !oe(e.callee) && T0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return bt(n, t);
    if (n.type === 14)
      return lf(n, t);
  }
  return 0;
}
function af(e, t) {
  let n = 3;
  const s = cf(e);
  if (s && s.type === 15) {
    const { properties: i } = s;
    for (let o = 0; o < i.length; o++) {
      const { key: r, value: l } = i[o], a = bt(r, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let u;
      if (l.type === 4 ? u = bt(l, t) : l.type === 14 ? u = lf(l, t) : u = 0, u === 0)
        return u;
      u < n && (n = u);
    }
  }
  return n;
}
function cf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function D0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: i = !1,
  cacheHandlers: o = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: u = Oe,
  isCustomElement: d = Oe,
  expressionPlugins: c = [],
  scopeId: h = null,
  slotted: m = !0,
  ssr: N = !1,
  inSSR: E = !1,
  ssrCssVars: D = "",
  bindingMetadata: k = fe,
  inline: y = !1,
  isTS: f = !1,
  onError: _ = Wl,
  onWarn: w = Jd,
  compatConfig: V
}) {
  const P = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), S = {
    // options
    filename: t,
    selfName: P && sn(Se(P[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: i,
    cacheHandlers: o,
    nodeTransforms: r,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: u,
    isCustomElement: d,
    expressionPlugins: c,
    scopeId: h,
    slotted: m,
    ssr: N,
    inSSR: E,
    ssrCssVars: D,
    bindingMetadata: k,
    inline: y,
    isTS: f,
    onError: _,
    onWarn: w,
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
    helper(v) {
      const O = S.helpers.get(v) || 0;
      return S.helpers.set(v, O + 1), v;
    },
    removeHelper(v) {
      const O = S.helpers.get(v);
      if (O) {
        const I = O - 1;
        I ? S.helpers.set(v, I) : S.helpers.delete(v);
      }
    },
    helperString(v) {
      return `_${Ts[S.helper(v)]}`;
    },
    replaceNode(v) {
      if (K.NODE_ENV !== "production") {
        if (!S.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!S.parent)
          throw new Error("Cannot replace root node.");
      }
      S.parent.children[S.childIndex] = S.currentNode = v;
    },
    removeNode(v) {
      if (K.NODE_ENV !== "production" && !S.parent)
        throw new Error("Cannot remove root node.");
      const O = S.parent.children, I = v ? O.indexOf(v) : S.currentNode ? S.childIndex : -1;
      if (K.NODE_ENV !== "production" && I < 0)
        throw new Error("node being removed is not a child of current parent");
      !v || v === S.currentNode ? (S.currentNode = null, S.onNodeRemoved()) : S.childIndex > I && (S.childIndex--, S.onNodeRemoved()), S.parent.children.splice(I, 1);
    },
    onNodeRemoved: Oe,
    addIdentifiers(v) {
    },
    removeIdentifiers(v) {
    },
    hoist(v) {
      oe(v) && (v = ce(v)), S.hoists.push(v);
      const O = ce(
        `_hoisted_${S.hoists.length}`,
        !1,
        v.loc,
        2
      );
      return O.hoisted = v, O;
    },
    cache(v, O = !1, I = !1) {
      const $ = Qg(
        S.cached.length,
        v,
        O,
        I
      );
      return S.cached.push($), $;
    }
  };
  return S.filters = /* @__PURE__ */ new Set(), S;
}
function V0(e, t) {
  const n = D0(e, t);
  Wo(e, n), t.hoistStatic && O0(e, n), t.ssr || $0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function $0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const i = rf(e);
    if (i && i.codegenNode) {
      const o = i.codegenNode;
      o.type === 13 && zl(o, t), e.codegenNode = o;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let i = 64;
    K.NODE_ENV !== "production" && s.filter((o) => o.type !== 3).length === 1 && (i |= 2048), e.codegenNode = pi(
      t,
      n(di),
      void 0,
      e.children,
      i,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function A0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const i = e.children[n];
    oe(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Wo(i, t));
  }
}
function Wo(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o](e, t);
    if (r && (q(r) ? s.push(...r) : s.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(xi);
      break;
    case 5:
      t.ssr || t.helper(zo);
      break;
    case 9:
      for (let o = 0; o < e.branches.length; o++)
        Wo(e.branches[o], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      A0(e, t);
      break;
  }
  t.currentNode = e;
  let i = s.length;
  for (; i--; )
    s[i]();
}
function uf(e, t) {
  const n = oe(e) ? (s) => s === e : (s) => e.test(s);
  return (s, i) => {
    if (s.type === 1) {
      const { props: o } = s;
      if (s.tagType === 3 && o.some(d0))
        return;
      const r = [];
      for (let l = 0; l < o.length; l++) {
        const a = o[l];
        if (a.type === 7 && n(a.name)) {
          o.splice(l, 1), l--;
          const u = t(s, a, i);
          u && r.push(u);
        }
      }
      return r;
    }
  };
}
const Go = "/*@__PURE__*/", df = (e) => `${Ts[e]}: _${Ts[e]}`;
function I0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: i = "template.vue.html",
  scopeId: o = null,
  optimizeImports: r = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: u = "vue/server-renderer",
  ssr: d = !1,
  isTS: c = !1,
  inSSR: h = !1
}) {
  const m = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: i,
    scopeId: o,
    optimizeImports: r,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: u,
    ssr: d,
    isTS: c,
    inSSR: h,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(E) {
      return `_${Ts[E]}`;
    },
    push(E, D = -2, k) {
      m.code += E;
    },
    indent() {
      N(++m.indentLevel);
    },
    deindent(E = !1) {
      E ? --m.indentLevel : N(--m.indentLevel);
    },
    newline() {
      N(m.indentLevel);
    }
  };
  function N(E) {
    m.push(
      `
` + "  ".repeat(E),
      0
      /* Start */
    );
  }
  return m;
}
function M0(e, t = {}) {
  const n = I0(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: i,
    prefixIdentifiers: o,
    indent: r,
    deindent: l,
    newline: a,
    scopeId: u,
    ssr: d
  } = n, c = Array.from(e.helpers), h = c.length > 0, m = !o && s !== "module";
  P0(e, n);
  const E = d ? "ssrRender" : "render", k = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (i(`function ${E}(${k}) {`), r(), m && (i("with (_ctx) {"), r(), h && (i(
    `const { ${c.map(df).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (hr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (hr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), hr(e.filters, "filter", n), a()), e.temps > 0) {
    i("let ");
    for (let y = 0; y < e.temps; y++)
      i(`${y > 0 ? ", " : ""}_temp${y}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (i(
    `
`,
    0
    /* Start */
  ), a()), d || i("return "), e.codegenNode ? Ze(e.codegenNode, n) : i("null"), m && (l(), i("}")), l(), i("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function P0(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: i,
    newline: o,
    runtimeModuleName: r,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, u = l, d = Array.from(e.helpers);
  if (d.length > 0 && (i(
    `const _Vue = ${u}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const c = [
      $l,
      Al,
      xi,
      Il,
      zd
    ].filter((h) => d.includes(h)).map(df).join(", ");
    i(
      `const { ${c} } = _Vue
`,
      -1
      /* End */
    );
  }
  R0(e.hoists, t), o(), i("return ");
}
function hr(e, t, { helper: n, push: s, newline: i, isTS: o }) {
  const r = n(
    t === "filter" ? Ll : t === "component" ? Ml : Rl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const u = a.endsWith("__self");
    u && (a = a.slice(0, -6)), s(
      `const ${mi(a, t)} = ${r}(${JSON.stringify(a)}${u ? ", true" : ""})${o ? "!" : ""}`
    ), l < e.length - 1 && i();
  }
}
function R0(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    o && (n(`const _hoisted_${i + 1} = `), Ze(o, t), s());
  }
  t.pure = !1;
}
function L0(e) {
  return oe(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Jl(e, t) {
  const n = e.length > 3 || K.NODE_ENV !== "production" && e.some((s) => q(s) || !L0(s));
  t.push("["), n && t.indent(), Ci(e, t, n), n && t.deindent(), t.push("]");
}
function Ci(e, t, n = !1, s = !0) {
  const { push: i, newline: o } = t;
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    oe(l) ? i(
      l,
      -3
      /* Unknown */
    ) : q(l) ? Jl(l, t) : Ze(l, t), r < e.length - 1 && (n ? (s && i(","), o()) : s && i(", "));
  }
}
function Ze(e, t) {
  if (oe(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (gt(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      K.NODE_ENV !== "production" && ic(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), Ze(e.codegenNode, t);
      break;
    case 2:
      F0(e, t);
      break;
    case 4:
      ff(e, t);
      break;
    case 5:
      B0(e, t);
      break;
    case 12:
      Ze(e.codegenNode, t);
      break;
    case 8:
      pf(e, t);
      break;
    case 3:
      H0(e, t);
      break;
    case 13:
      U0(e, t);
      break;
    case 14:
      K0(e, t);
      break;
    case 15:
      z0(e, t);
      break;
    case 17:
      W0(e, t);
      break;
    case 18:
      G0(e, t);
      break;
    case 19:
      Y0(e, t);
      break;
    case 20:
      J0(e, t);
      break;
    case 21:
      Ci(e.body, t, !0, !1);
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
      if (K.NODE_ENV !== "production")
        return ic(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function F0(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function ff(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function B0(e, t) {
  const { push: n, helper: s, pure: i } = t;
  i && n(Go), n(`${s(zo)}(`), Ze(e.content, t), n(")");
}
function pf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    oe(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : Ze(s, t);
  }
}
function j0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), pf(e, t), n("]");
  else if (e.isStatic) {
    const s = Gl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function H0(e, t) {
  const { push: n, helper: s, pure: i } = t;
  i && n(Go), n(
    `${s(xi)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function U0(e, t) {
  const { push: n, helper: s, pure: i } = t, {
    tag: o,
    props: r,
    children: l,
    patchFlag: a,
    dynamicProps: u,
    directives: d,
    isBlock: c,
    disableTracking: h,
    isComponent: m
  } = e;
  let N;
  if (a)
    if (K.NODE_ENV !== "production")
      if (a < 0)
        N = a + ` /* ${Gs[a]} */`;
      else {
        const D = Object.keys(Gs).map(Number).filter((k) => k > 0 && a & k).map((k) => Gs[k]).join(", ");
        N = a + ` /* ${D} */`;
      }
    else
      N = String(a);
  d && n(s(Fl) + "("), c && n(`(${s(is)}(${h ? "true" : ""}), `), i && n(Go);
  const E = c ? $s(t.inSSR, m) : Vs(t.inSSR, m);
  n(s(E) + "(", -2, e), Ci(
    q0([o, r, l, N, u]),
    t
  ), n(")"), c && n(")"), d && (n(", "), Ze(d, t), n(")"));
}
function q0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function K0(e, t) {
  const { push: n, helper: s, pure: i } = t, o = oe(e.callee) ? e.callee : s(e.callee);
  i && n(Go), n(o + "(", -2, e), Ci(e.arguments, t), n(")");
}
function z0(e, t) {
  const { push: n, indent: s, deindent: i, newline: o } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || K.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: u, value: d } = r[a];
    j0(u, t), n(": "), Ze(d, t), a < r.length - 1 && (n(","), o());
  }
  l && i(), n(l ? "}" : " }");
}
function W0(e, t) {
  Jl(e.elements, t);
}
function G0(e, t) {
  const { push: n, indent: s, deindent: i } = t, { params: o, returns: r, body: l, newline: a, isSlot: u } = e;
  u && n(`_${Ts[ql]}(`), n("(", -2, e), q(o) ? Ci(o, t) : o && Ze(o, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), q(r) ? Jl(r, t) : Ze(r, t)) : l && Ze(l, t), (a || l) && (i(), n("}")), u && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Y0(e, t) {
  const { test: n, consequent: s, alternate: i, newline: o } = e, { push: r, indent: l, deindent: a, newline: u } = t;
  if (n.type === 4) {
    const c = !Gl(n.content);
    c && r("("), ff(n, t), c && r(")");
  } else
    r("("), Ze(n, t), r(")");
  o && l(), t.indentLevel++, o || r(" "), r("? "), Ze(s, t), t.indentLevel--, o && u(), o || r(" "), r(": ");
  const d = i.type === 19;
  d || t.indentLevel++, Ze(i, t), d || t.indentLevel--, o && a(
    !0
    /* without newline */
  );
}
function J0(e, t) {
  const { push: n, helper: s, indent: i, deindent: o, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (i(), n(`${s(yo)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), Ze(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(yo)}(1),`), r(), n(`_cache[${e.index}]`), o()), n(")"), a && n(")]");
}
const Q0 = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), X0 = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function zn(e, t, n = !1, s = !1) {
  const i = e.content;
  if (i.trim())
    try {
      new Function(
        s ? ` ${i} ` : `return ${n ? `(${i}) => {}` : `(${i})`}`
      );
    } catch (o) {
      let r = o.message;
      const l = i.replace(X0, "").match(Q0);
      l && (r = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        we(
          45,
          e.loc,
          void 0,
          r
        )
      );
    }
}
const Z0 = (e, t) => {
  if (e.type === 5)
    e.content = mr(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = ht(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const i = e.props[s];
      if (i.type === 7 && i.name !== "for") {
        const o = i.exp, r = i.arg;
        o && o.type === 4 && !(i.name === "on" && r) && // key has been processed in transformFor(vMemo + vFor)
        !(n && r && r.type === 4 && r.content === "key") && (i.exp = mr(
          o,
          t,
          // slot args must be processed as function params
          i.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (i.arg = mr(r, t));
      }
    }
  }
};
function mr(e, t, n = !1, s = !1, i = Object.create(t.identifiers)) {
  return K.NODE_ENV !== "production" && zn(e, t, n, s), e;
}
const ey = uf(
  /^(if|else|else-if)$/,
  (e, t, n) => ty(e, t, n, (s, i, o) => {
    const r = n.parent.children;
    let l = r.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const u = r[l];
      u && u.type === 9 && (a += u.branches.length);
    }
    return () => {
      if (o)
        s.codegenNode = dc(
          i,
          a,
          n
        );
      else {
        const u = sy(s.codegenNode);
        u.alternate = dc(
          i,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function ty(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const i = t.exp ? t.exp.loc : e.loc;
    n.onError(
      we(28, t.loc)
    ), t.exp = ce("true", !1, i);
  }
  if (K.NODE_ENV !== "production" && t.exp && zn(t.exp, n), t.name === "if") {
    const i = uc(e, t), o = {
      type: 9,
      loc: x0(e.loc),
      branches: [i]
    };
    if (n.replaceNode(o), s)
      return s(o, i, !0);
  } else {
    const i = n.parent.children, o = [];
    let r = i.indexOf(e);
    for (; r-- >= -1; ) {
      const l = i[r];
      if (l && l.type === 3) {
        n.removeNode(l), K.NODE_ENV !== "production" && o.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          we(30, e.loc)
        ), n.removeNode();
        const a = uc(e, t);
        if (K.NODE_ENV !== "production" && o.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...o, ...a.children]), K.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: c }) => {
            ny(c, d) && n.onError(
              we(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const u = s && s(l, a, !1);
        Wo(a, n), u && u(), n.currentNode = null;
      } else
        n.onError(
          we(30, e.loc)
        );
      break;
    }
  }
}
function uc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !ht(e, "for") ? e.children : [e],
    userKey: hi(e, "key"),
    isTemplateIf: n
  };
}
function dc(e, t, n) {
  return e.condition ? Kr(
    e.condition,
    fc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Fe(n.helper(xi), [
      K.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : fc(e, t, n);
}
function fc(e, t, n) {
  const { helper: s } = n, i = Ie(
    "key",
    ce(
      `${t}`,
      !1,
      Et,
      2
    )
  ), { children: o } = e, r = o[0];
  if (o.length !== 1 || r.type !== 1)
    if (o.length === 1 && r.type === 11) {
      const a = r.codegenNode;
      return No(a, i, n), a;
    } else {
      let a = 64;
      return K.NODE_ENV !== "production" && !e.isTemplateIf && o.filter((u) => u.type !== 3).length === 1 && (a |= 2048), pi(
        n,
        s(di),
        Ct([i]),
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
    const a = r.codegenNode, u = p0(a);
    return u.type === 13 && zl(u, n), No(u, i, n), a;
  }
}
function ny(e, t) {
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
function sy(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const iy = (e, t, n) => {
  const { modifiers: s, loc: i } = e, o = e.arg;
  let { exp: r } = e;
  if (r && r.type === 4 && !r.content.trim() && (r = void 0), !r) {
    if (o.type !== 4 || !o.isStatic)
      return n.onError(
        we(
          52,
          o.loc
        )
      ), {
        props: [
          Ie(o, ce("", !0, i))
        ]
      };
    hf(e), r = e.exp;
  }
  return o.type !== 4 ? (o.children.unshift("("), o.children.push(') || ""')) : o.isStatic || (o.content = o.content ? `${o.content} || ""` : '""'), s.some((l) => l.content === "camel") && (o.type === 4 ? o.isStatic ? o.content = Se(o.content) : o.content = `${n.helperString(Ur)}(${o.content})` : (o.children.unshift(`${n.helperString(Ur)}(`), o.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && pc(o, "."), s.some((l) => l.content === "attr") && pc(o, "^")), {
    props: [Ie(o, r)]
  };
}, hf = (e, t) => {
  const n = e.arg, s = Se(n.content);
  e.exp = ce(s, !1, n.loc);
}, pc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, oy = uf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: i } = n;
    return ry(e, t, n, (o) => {
      const r = Fe(s(Bl), [
        o.source
      ]), l = _o(e), a = ht(e, "memo"), u = hi(e, "key", !1, !0);
      u && u.type === 7 && !u.exp && hf(u);
      let c = u && (u.type === 6 ? u.value ? ce(u.value.content, !0) : void 0 : u.exp);
      const h = u && c ? Ie("key", c) : null, m = o.source.type === 4 && o.source.constType > 0, N = m ? 64 : u ? 128 : 256;
      return o.codegenNode = pi(
        n,
        s(di),
        void 0,
        r,
        N,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let E;
        const { children: D } = o;
        K.NODE_ENV !== "production" && l && e.children.some((f) => {
          if (f.type === 1) {
            const _ = hi(f, "key");
            if (_)
              return n.onError(
                we(
                  33,
                  _.loc
                )
              ), !0;
          }
        });
        const k = D.length !== 1 || D[0].type !== 1, y = Eo(e) ? e : l && e.children.length === 1 && Eo(e.children[0]) ? e.children[0] : null;
        if (y ? (E = y.codegenNode, l && h && No(E, h, n)) : k ? E = pi(
          n,
          s(di),
          h ? Ct([h]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (E = D[0].codegenNode, l && h && No(E, h, n), E.isBlock !== !m && (E.isBlock ? (i(is), i(
          $s(n.inSSR, E.isComponent)
        )) : i(
          Vs(n.inSSR, E.isComponent)
        )), E.isBlock = !m, E.isBlock ? (s(is), s($s(n.inSSR, E.isComponent))) : s(Vs(n.inSSR, E.isComponent))), a) {
          const f = Ds(
            Yr(o.parseResult, [
              ce("_cached")
            ])
          );
          f.body = Xg([
            Ft(["const _memo = (", a.exp, ")"]),
            Ft([
              "if (_cached",
              ...c ? [" && _cached.key === ", c] : [],
              ` && ${n.helperString(
                Yd
              )}(_cached, _memo)) return _cached`
            ]),
            Ft(["const _item = ", E]),
            ce("_item.memo = _memo"),
            ce("return _item")
          ]), r.arguments.push(
            f,
            ce("_cache"),
            ce(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            Ds(
              Yr(o.parseResult),
              E,
              !0
            )
          );
      };
    });
  }
);
function ry(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      we(31, t.loc)
    );
    return;
  }
  const i = t.forParseResult;
  if (!i) {
    n.onError(
      we(32, t.loc)
    );
    return;
  }
  mf(i, n);
  const { addIdentifiers: o, removeIdentifiers: r, scopes: l } = n, { source: a, value: u, key: d, index: c } = i, h = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: u,
    keyAlias: d,
    objectIndexAlias: c,
    parseResult: i,
    children: _o(e) ? e.children : [e]
  };
  n.replaceNode(h), l.vFor++;
  const m = s && s(h);
  return () => {
    l.vFor--, m && m();
  };
}
function mf(e, t) {
  e.finalized || (K.NODE_ENV !== "production" && (zn(e.source, t), e.key && zn(
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
function Yr({ value: e, key: t, index: n }, s = []) {
  return ly([e, t, n, ...s]);
}
function ly(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || ce("_".repeat(s + 1), !1));
}
const hc = ce("undefined", !1), ay = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = ht(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, cy = (e, t, n, s) => Ds(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function uy(e, t, n = cy) {
  t.helper(ql);
  const { children: s, loc: i } = e, o = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = ht(e, "slot", !0);
  if (a) {
    const { arg: D, exp: k } = a;
    D && !mt(D) && (l = !0), o.push(
      Ie(
        D || ce("default", !0),
        n(k, void 0, s, i)
      )
    );
  }
  let u = !1, d = !1;
  const c = [], h = /* @__PURE__ */ new Set();
  let m = 0;
  for (let D = 0; D < s.length; D++) {
    const k = s[D];
    let y;
    if (!_o(k) || !(y = ht(k, "slot", !0))) {
      k.type !== 3 && c.push(k);
      continue;
    }
    if (a) {
      t.onError(
        we(37, y.loc)
      );
      break;
    }
    u = !0;
    const { children: f, loc: _ } = k, {
      arg: w = ce("default", !0),
      exp: V,
      loc: P
    } = y;
    let S;
    mt(w) ? S = w ? w.content : "default" : l = !0;
    const v = ht(k, "for"), O = n(V, v, f, _);
    let I, $;
    if (I = ht(k, "if"))
      l = !0, r.push(
        Kr(
          I.exp,
          Ri(w, O, m++),
          hc
        )
      );
    else if ($ = ht(
      k,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let L = D, G;
      for (; L-- && (G = s[L], !(G.type !== 3 && Jr(G))); )
        ;
      if (G && _o(G) && ht(G, /^(else-)?if$/)) {
        let ee = r[r.length - 1];
        for (; ee.alternate.type === 19; )
          ee = ee.alternate;
        ee.alternate = $.exp ? Kr(
          $.exp,
          Ri(
            w,
            O,
            m++
          ),
          hc
        ) : Ri(w, O, m++);
      } else
        t.onError(
          we(30, $.loc)
        );
    } else if (v) {
      l = !0;
      const L = v.forParseResult;
      L ? (mf(L, t), r.push(
        Fe(t.helper(Bl), [
          L.source,
          Ds(
            Yr(L),
            Ri(w, O),
            !0
          )
        ])
      )) : t.onError(
        we(
          32,
          v.loc
        )
      );
    } else {
      if (S) {
        if (h.has(S)) {
          t.onError(
            we(
              38,
              P
            )
          );
          continue;
        }
        h.add(S), S === "default" && (d = !0);
      }
      o.push(Ie(w, O));
    }
  }
  if (!a) {
    const D = (k, y) => {
      const f = n(k, void 0, y, i);
      return t.compatConfig && (f.isNonScopedSlot = !0), Ie("default", f);
    };
    u ? c.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    c.some((k) => Jr(k)) && (d ? t.onError(
      we(
        39,
        c[0].loc
      )
    ) : o.push(
      D(void 0, c)
    )) : o.push(D(void 0, s));
  }
  const N = l ? 2 : Gi(e.children) ? 3 : 1;
  let E = Ct(
    o.concat(
      Ie(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ce(
          N + (K.NODE_ENV !== "production" ? ` /* ${Lf[N]} */` : ""),
          !1
        )
      )
    ),
    i
  );
  return r.length && (E = Fe(t.helper(Gd), [
    E,
    Zn(r)
  ])), {
    slots: E,
    hasDynamicSlots: l
  };
}
function Ri(e, t, n) {
  const s = [
    Ie("name", e),
    Ie("fn", t)
  ];
  return n != null && s.push(
    Ie("key", ce(String(n), !0))
  ), Ct(s);
}
function Gi(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Gi(n.children))
          return !0;
        break;
      case 9:
        if (Gi(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Gi(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Jr(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Jr(e.content);
}
const gf = /* @__PURE__ */ new WeakMap(), dy = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: i } = e, o = e.tagType === 1;
  let r = o ? fy(e, t) : `"${s}"`;
  const l = he(r) && r.callee === Pl;
  let a, u, d = 0, c, h, m, N = (
    // dynamic component may resolve to plain elements
    l || r === si || r === Vl || !o && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (i.length > 0) {
    const E = yf(
      e,
      t,
      void 0,
      o,
      l
    );
    a = E.props, d = E.patchFlag, h = E.dynamicPropNames;
    const D = E.directives;
    m = D && D.length ? Zn(
      D.map((k) => hy(k, t))
    ) : void 0, E.shouldUseBlock && (N = !0);
  }
  if (e.children.length > 0)
    if (r === mo && (N = !0, d |= 1024, K.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      we(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), o && // Teleport is not a real component and has dedicated runtime handling
    r !== si && // explained above.
    r !== mo) {
      const { slots: D, hasDynamicSlots: k } = uy(e, t);
      u = D, k && (d |= 1024);
    } else if (e.children.length === 1 && r !== si) {
      const D = e.children[0], k = D.type, y = k === 5 || k === 8;
      y && bt(D, t) === 0 && (d |= 1), y || k === 2 ? u = D : u = e.children;
    } else
      u = e.children;
  h && h.length && (c = my(h)), e.codegenNode = pi(
    t,
    r,
    a,
    u,
    d === 0 ? void 0 : d,
    c,
    m,
    !!N,
    !1,
    o,
    e.loc
  );
};
function fy(e, t, n = !1) {
  let { tag: s } = e;
  const i = Qr(s), o = hi(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (o)
    if (i || In(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (o.type === 6 ? l = o.value && ce(o.value.content, !0) : (l = o.exp, l || (l = ce("is", !1, o.arg.loc))), l)
        return Fe(t.helper(Pl), [
          l
        ]);
    } else o.type === 6 && o.value.content.startsWith("vue:") && (s = o.value.content.slice(4));
  const r = Qd(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(Ml), t.components.add(s), mi(s, "component"));
}
function yf(e, t, n = e.props, s, i, o = !1) {
  const { tag: r, loc: l, children: a } = e;
  let u = [];
  const d = [], c = [], h = a.length > 0;
  let m = !1, N = 0, E = !1, D = !1, k = !1, y = !1, f = !1, _ = !1;
  const w = [], V = (O) => {
    u.length && (d.push(
      Ct(mc(u), l)
    ), u = []), O && d.push(O);
  }, P = () => {
    t.scopes.vFor > 0 && u.push(
      Ie(
        ce("ref_for", !0),
        ce("true")
      )
    );
  }, S = ({ key: O, value: I }) => {
    if (mt(O)) {
      const $ = O.content, L = gn($);
      if (L && (!s || i) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      $.toLowerCase() !== "onclick" && // omit v-model handlers
      $ !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Vn($) && (y = !0), L && Vn($) && (_ = !0), L && I.type === 14 && (I = I.arguments[0]), I.type === 20 || (I.type === 4 || I.type === 8) && bt(I, t) > 0)
        return;
      $ === "ref" ? E = !0 : $ === "class" ? D = !0 : $ === "style" ? k = !0 : $ !== "key" && !w.includes($) && w.push($), s && ($ === "class" || $ === "style") && !w.includes($) && w.push($);
    } else
      f = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const I = n[O];
    if (I.type === 6) {
      const { loc: $, name: L, nameLoc: G, value: ee } = I;
      let Z = !0;
      if (L === "ref" && (E = !0, P()), L === "is" && (Qr(r) || ee && ee.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      u.push(
        Ie(
          ce(L, !0, G),
          ce(
            ee ? ee.content : "",
            Z,
            ee ? ee.loc : $
          )
        )
      );
    } else {
      const { name: $, arg: L, exp: G, loc: ee, modifiers: Z } = I, ne = $ === "bind", Q = $ === "on";
      if ($ === "slot") {
        s || t.onError(
          we(40, ee)
        );
        continue;
      }
      if ($ === "once" || $ === "memo" || $ === "is" || ne && Dn(L, "is") && (Qr(r) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && o)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Dn(L, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && h && Dn(L, "vue:before-update")) && (m = !0), ne && Dn(L, "ref") && P(), !L && (ne || Q)
      ) {
        if (f = !0, G)
          if (ne) {
            if (V(), K.NODE_ENV !== "production" && d.some((Nt) => Nt.type === 15 ? Nt.properties.some(({ key: wt }) => wt.type !== 4 || !wt.isStatic ? !0 : wt.content !== "class" && wt.content !== "style" && !gn(wt.content)) : !0) && As(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              ee
            ), In(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(G);
              continue;
            }
            P(), V(), d.push(G);
          } else
            V({
              type: 14,
              loc: ee,
              callee: t.helper(Ul),
              arguments: s ? [G] : [G, "true"]
            });
        else
          t.onError(
            we(
              ne ? 34 : 35,
              ee
            )
          );
        continue;
      }
      ne && Z.some((at) => at.content === "prop") && (N |= 32);
      const Ee = t.directiveTransforms[$];
      if (Ee) {
        const { props: at, needRuntime: Nt } = Ee(I, e, t);
        !o && at.forEach(S), Q && L && !mt(L) ? V(Ct(at, l)) : u.push(...at), Nt && (c.push(I), gt(Nt) && gf.set(I, Nt));
      } else kc($) || (c.push(I), h && (m = !0));
    }
  }
  let v;
  if (d.length ? (V(), d.length > 1 ? v = Fe(
    t.helper(go),
    d,
    l
  ) : v = d[0]) : u.length && (v = Ct(
    mc(u),
    l
  )), f ? N |= 16 : (D && !s && (N |= 2), k && !s && (N |= 4), w.length && (N |= 8), y && (N |= 32)), !m && (N === 0 || N === 32) && (E || _ || c.length > 0) && (N |= 512), !t.inSSR && v)
    switch (v.type) {
      case 15:
        let O = -1, I = -1, $ = !1;
        for (let ee = 0; ee < v.properties.length; ee++) {
          const Z = v.properties[ee].key;
          mt(Z) ? Z.content === "class" ? O = ee : Z.content === "style" && (I = ee) : Z.isHandlerKey || ($ = !0);
        }
        const L = v.properties[O], G = v.properties[I];
        $ ? v = Fe(
          t.helper(fi),
          [v]
        ) : (L && !mt(L.value) && (L.value = Fe(
          t.helper(jl),
          [L.value]
        )), G && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (k || G.value.type === 4 && G.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        G.value.type === 17) && (G.value = Fe(
          t.helper(Hl),
          [G.value]
        )));
        break;
      case 14:
        break;
      default:
        v = Fe(
          t.helper(fi),
          [
            Fe(t.helper(Si), [
              v
            ])
          ]
        );
        break;
    }
  return {
    props: v,
    directives: c,
    patchFlag: N,
    dynamicPropNames: w,
    shouldUseBlock: m
  };
}
function mc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.key.type === 8 || !i.key.isStatic) {
      n.push(i);
      continue;
    }
    const o = i.key.content, r = t.get(o);
    r ? (o === "style" || o === "class" || gn(o)) && py(r, i) : (t.set(o, i), n.push(i));
  }
  return n;
}
function py(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Zn(
    [e.value, t.value],
    e.loc
  );
}
function hy(e, t) {
  const n = [], s = gf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Rl), t.directives.add(e.name), n.push(mi(e.name, "directive")));
  const { loc: i } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const o = ce("true", !1, i);
    n.push(
      Ct(
        e.modifiers.map(
          (r) => Ie(r, o)
        ),
        i
      )
    );
  }
  return Zn(n, e.loc);
}
function my(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Qr(e) {
  return e === "component" || e === "Component";
}
const gy = (e, t) => {
  if (Eo(e)) {
    const { children: n, loc: s } = e, { slotName: i, slotProps: o } = yy(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      i,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    o && (r[2] = o, l = 3), n.length && (r[3] = Ds([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = Fe(
      t.helper(Wd),
      r,
      s
    );
  }
};
function yy(e, t) {
  let n = '"default"', s;
  const i = [];
  for (let o = 0; o < e.props.length; o++) {
    const r = e.props[o];
    if (r.type === 6)
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = Se(r.name), i.push(r)));
    else if (r.name === "bind" && Dn(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const l = Se(r.arg.content);
        n = r.exp = ce(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && mt(r.arg) && (r.arg.content = Se(r.arg.content)), i.push(r);
  }
  if (i.length > 0) {
    const { props: o, directives: r } = yf(
      e,
      t,
      i,
      !1,
      !1
    );
    s = o, r.length && t.onError(
      we(
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
const vf = (e, t, n, s) => {
  const { loc: i, modifiers: o, arg: r } = e;
  !e.exp && !o.length && n.onError(we(35, i));
  let l;
  if (r.type === 4)
    if (r.isStatic) {
      let c = r.content;
      K.NODE_ENV !== "production" && c.startsWith("vnode") && n.onError(we(51, r.loc)), c.startsWith("vue:") && (c = `vnode-${c.slice(4)}`);
      const h = t.tagType !== 0 || c.startsWith("vnode") || !/[A-Z]/.test(c) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Qt(Se(c))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${c}`
      );
      l = ce(h, !0, r.loc);
    } else
      l = Ft([
        `${n.helperString(qr)}(`,
        r,
        ")"
      ]);
  else
    l = r, l.children.unshift(`${n.helperString(qr)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let u = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const c = Zd(a), h = !(c || c0(a)), m = a.content.includes(";");
    K.NODE_ENV !== "production" && zn(
      a,
      n,
      !1,
      m
    ), (h || u && c) && (a = Ft([
      `${h ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      Ie(
        l,
        a || ce("() => {}", !1, i)
      )
    ]
  };
  return s && (d = s(d)), u && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((c) => c.key.isHandlerKey = !0), d;
}, vy = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, i = !1;
      for (let o = 0; o < n.length; o++) {
        const r = n[o];
        if (pr(r)) {
          i = !0;
          for (let l = o + 1; l < n.length; l++) {
            const a = n[l];
            if (pr(a))
              s || (s = n[o] = Ft(
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
      if (!(!i || // if this is a plain element with a single text child, leave it
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
          const r = n[o];
          if (pr(r) || r.type === 8) {
            const l = [];
            (r.type !== 2 || r.content !== " ") && l.push(r), !t.ssr && bt(r, t) === 0 && l.push(
              1 + (K.NODE_ENV !== "production" ? ` /* ${Gs[1]} */` : "")
            ), n[o] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: Fe(
                t.helper(Il),
                l
              )
            };
          }
        }
    };
}, gc = /* @__PURE__ */ new WeakSet(), by = (e, t) => {
  if (e.type === 1 && ht(e, "once", !0))
    return gc.has(e) || t.inVOnce || t.inSSR ? void 0 : (gc.add(e), t.inVOnce = !0, t.helper(yo), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, bf = (e, t, n) => {
  const { exp: s, arg: i } = e;
  if (!s)
    return n.onError(
      we(41, e.loc)
    ), Li();
  const o = s.loc.source.trim(), r = s.type === 4 ? s.content : o, l = n.bindingMetadata[o];
  if (l === "props" || l === "props-aliased")
    return n.onError(we(44, s.loc)), Li();
  if (!r.trim() || !Zd(s))
    return n.onError(
      we(42, s.loc)
    ), Li();
  const a = i || ce("modelValue", !0), u = i ? mt(i) ? `onUpdate:${Se(i.content)}` : Ft(['"onUpdate:" + ', i]) : "onUpdate:modelValue";
  let d;
  const c = n.isTS ? "($event: any)" : "$event";
  d = Ft([
    `${c} => ((`,
    s,
    ") = $event)"
  ]);
  const h = [
    // modelValue: foo
    Ie(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Ie(u, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((E) => E.content).map((E) => (Gl(E) ? E : JSON.stringify(E)) + ": true").join(", "), N = i ? mt(i) ? `${i.content}Modifiers` : Ft([i, ' + "Modifiers"']) : "modelModifiers";
    h.push(
      Ie(
        N,
        ce(
          `{ ${m} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Li(h);
};
function Li(e = []) {
  return { props: e };
}
const _y = /[\w).+\-_$\]]/, Ey = (e, t) => {
  In("COMPILER_FILTERS", t) && (e.type === 5 ? wo(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && wo(n.exp, t);
  }));
};
function wo(e, t) {
  if (e.type === 4)
    yc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? yc(s, t) : s.type === 8 ? wo(e, t) : s.type === 5 && wo(s.content, t));
    }
}
function yc(e, t) {
  const n = e.content;
  let s = !1, i = !1, o = !1, r = !1, l = 0, a = 0, u = 0, d = 0, c, h, m, N, E = [];
  for (m = 0; m < n.length; m++)
    if (h = c, c = n.charCodeAt(m), s)
      c === 39 && h !== 92 && (s = !1);
    else if (i)
      c === 34 && h !== 92 && (i = !1);
    else if (o)
      c === 96 && h !== 92 && (o = !1);
    else if (r)
      c === 47 && h !== 92 && (r = !1);
    else if (c === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !u)
      N === void 0 ? (d = m + 1, N = n.slice(0, m).trim()) : D();
    else {
      switch (c) {
        case 34:
          i = !0;
          break;
        case 39:
          s = !0;
          break;
        case 96:
          o = !0;
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
        (!y || !_y.test(y)) && (r = !0);
      }
    }
  N === void 0 ? N = n.slice(0, m).trim() : d !== 0 && D();
  function D() {
    E.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (E.length) {
    for (K.NODE_ENV !== "production" && bo(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < E.length; m++)
      N = Ny(N, E[m], t);
    e.content = N, e.ast = void 0;
  }
}
function Ny(e, t, n) {
  n.helper(Ll);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${mi(t, "filter")}(${e})`;
  {
    const i = t.slice(0, s), o = t.slice(s + 1);
    return n.filters.add(i), `${mi(i, "filter")}(${e}${o !== ")" ? "," + o : o}`;
  }
}
const vc = /* @__PURE__ */ new WeakSet(), wy = (e, t) => {
  if (e.type === 1) {
    const n = ht(e, "memo");
    return !n || vc.has(e) ? void 0 : (vc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && zl(s, t), e.codegenNode = Fe(t.helper(Kl), [
        n.exp,
        Ds(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function xy(e) {
  return [
    [
      by,
      ey,
      wy,
      oy,
      Ey,
      ...K.NODE_ENV !== "production" ? [Z0] : [],
      gy,
      dy,
      ay,
      vy
    ],
    {
      on: vf,
      bind: iy,
      model: bf
    }
  ];
}
function Sy(e, t = {}) {
  const n = t.onError || Wl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(we(47)) : s && n(we(48));
  const i = !1;
  t.cacheHandlers && n(we(49)), t.scopeId && !s && n(we(50));
  const o = de({}, t, {
    prefixIdentifiers: i
  }), r = oe(e) ? k0(e, o) : e, [l, a] = xy();
  return V0(
    r,
    de({}, o, {
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
  ), M0(r, o);
}
const Cy = () => ({ props: [] });
var et = {};
const _f = Symbol(et.NODE_ENV !== "production" ? "vModelRadio" : ""), Ef = Symbol(
  et.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(et.NODE_ENV !== "production" ? "vModelText" : ""), wf = Symbol(
  et.NODE_ENV !== "production" ? "vModelSelect" : ""
), Xr = Symbol(
  et.NODE_ENV !== "production" ? "vModelDynamic" : ""
), xf = Symbol(
  et.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Sf = Symbol(
  et.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Cf = Symbol(et.NODE_ENV !== "production" ? "vShow" : ""), Ql = Symbol(et.NODE_ENV !== "production" ? "Transition" : ""), kf = Symbol(
  et.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
Yg({
  [_f]: "vModelRadio",
  [Ef]: "vModelCheckbox",
  [Nf]: "vModelText",
  [wf]: "vModelSelect",
  [Xr]: "vModelDynamic",
  [xf]: "withModifiers",
  [Sf]: "withKeys",
  [Cf]: "vShow",
  [Ql]: "Transition",
  [kf]: "TransitionGroup"
});
let ds;
function ky(e, t = !1) {
  return ds || (ds = document.createElement("div")), t ? (ds.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, ds.children[0].getAttribute("foo")) : (ds.innerHTML = e, ds.textContent);
}
const Oy = {
  parseMode: "html",
  isVoidTag: Qf,
  isNativeTag: (e) => Tc(e) || Dc(e) || Vc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: ky,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Ql;
    if (e === "TransitionGroup" || e === "transition-group")
      return kf;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let s = t ? t.ns : n;
    if (t && s === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (i) => i.type === 6 && i.name === "encoding" && i.value != null && (i.value.content === "text/html" || i.value.content === "application/xhtml+xml")
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
}, Ty = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ce("style", !0, t.loc),
      exp: Dy(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Dy = (e, t) => {
  const n = Oc(e);
  return ce(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Rt(e, t) {
  return we(
    e,
    t,
    et.NODE_ENV !== "production" ? Vy : void 0
  );
}
const Vy = {
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
}, $y = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Rt(53, i)
  ), t.children.length && (n.onError(
    Rt(54, i)
  ), t.children.length = 0), {
    props: [
      Ie(
        ce("innerHTML", !0, i),
        s || ce("", !0)
      )
    ]
  };
}, Ay = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Rt(55, i)
  ), t.children.length && (n.onError(
    Rt(56, i)
  ), t.children.length = 0), {
    props: [
      Ie(
        ce("textContent", !0),
        s ? bt(s, n) > 0 ? s : Fe(
          n.helperString(zo),
          [s],
          i
        ) : ce("", !0)
      )
    ]
  };
}, Iy = (e, t, n) => {
  const s = bf(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    Rt(
      58,
      e.arg.loc
    )
  );
  function i() {
    const l = ht(t, "bind");
    l && Dn(l.arg, "value") && n.onError(
      Rt(
        60,
        l.loc
      )
    );
  }
  const { tag: o } = t, r = n.isCustomElement(o);
  if (o === "input" || o === "textarea" || o === "select" || r) {
    let l = Nf, a = !1;
    if (o === "input" || r) {
      const u = hi(t, "type");
      if (u) {
        if (u.type === 7)
          l = Xr;
        else if (u.value)
          switch (u.value.content) {
            case "radio":
              l = _f;
              break;
            case "checkbox":
              l = Ef;
              break;
            case "file":
              a = !0, n.onError(
                Rt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              et.NODE_ENV !== "production" && i();
              break;
          }
      } else u0(t) ? l = Xr : et.NODE_ENV !== "production" && i();
    } else o === "select" ? l = wf : et.NODE_ENV !== "production" && i();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      Rt(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, My = /* @__PURE__ */ He("passive,once,capture"), Py = /* @__PURE__ */ He(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Ry = /* @__PURE__ */ He("left,right"), Of = /* @__PURE__ */ He("onkeyup,onkeydown,onkeypress"), Ly = (e, t, n, s) => {
  const i = [], o = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && As(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || My(a) ? r.push(a) : Ry(a) ? mt(e) ? Of(e.content.toLowerCase()) ? i.push(a) : o.push(a) : (i.push(a), o.push(a)) : Py(a) ? o.push(a) : i.push(a);
  }
  return {
    keyModifiers: i,
    nonKeyModifiers: o,
    eventOptionModifiers: r
  };
}, bc = (e, t) => mt(e) && e.content.toLowerCase() === "onclick" ? ce(t, !0) : e.type !== 4 ? Ft([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Fy = (e, t, n) => vf(e, t, n, (s) => {
  const { modifiers: i } = e;
  if (!i.length) return s;
  let { key: o, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: u } = Ly(o, i, n, e.loc);
  if (a.includes("right") && (o = bc(o, "onContextmenu")), a.includes("middle") && (o = bc(o, "onMouseup")), a.length && (r = Fe(n.helper(xf), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!mt(o) || Of(o.content.toLowerCase())) && (r = Fe(n.helper(Sf), [
    r,
    JSON.stringify(l)
  ])), u.length) {
    const d = u.map(sn).join("");
    o = mt(o) ? ce(`${o.content}${d}`, !0) : Ft(["(", o, `) + "${d}"`]);
  }
  return {
    props: [Ie(o, r)]
  };
}), By = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Rt(61, i)
  ), {
    props: [],
    needRuntime: n.helper(Cf)
  };
}, jy = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === Ql)
    return () => {
      if (!e.children.length)
        return;
      Tf(e) && t.onError(
        Rt(
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
        for (const i of s.props)
          i.type === 7 && i.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function Tf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Tf);
}
const Hy = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (et.NODE_ENV !== "production" && t.onError(
    Rt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Uy(e, t) {
  return e === "template" ? !0 : e in _c ? _c[e].has(t) : t in Ec ? Ec[t].has(e) : !(e in Nc && Nc[e].has(t) || t in wc && wc[t].has(e));
}
const fs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Un = /* @__PURE__ */ new Set([]), _c = {
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
  script: Un,
  iframe: Un,
  option: Un,
  textarea: Un,
  style: Un,
  title: Un
}, Ec = {
  // sections
  html: Un,
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
}, Nc = {
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
}, wc = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: fs,
  h2: fs,
  h3: fs,
  h4: fs,
  h5: fs,
  h6: fs
}, qy = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Uy(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Ky = [
  Ty,
  ...et.NODE_ENV !== "production" ? [jy, qy] : []
], zy = {
  cloak: Cy,
  html: $y,
  text: Ay,
  model: Iy,
  // override compiler-core
  on: Fy,
  // override compiler-core
  show: By
};
function Wy(e, t = {}) {
  return Sy(
    e,
    de({}, Oy, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Hy,
        ...Ky,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: de(
        {},
        zy,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Ws = {};
function Gy() {
  bd();
}
Ws.NODE_ENV !== "production" && Gy();
const xc = /* @__PURE__ */ Object.create(null);
function Yy(e, t) {
  if (!oe(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Ws.NODE_ENV !== "production" && $e("invalid template option: ", e), Oe;
  const n = Rf(e, t), s = xc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Ws.NODE_ENV !== "production" && !a && $e(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const i = de(
    {
      hoistStatic: !0,
      onError: Ws.NODE_ENV !== "production" ? r : void 0,
      onWarn: Ws.NODE_ENV !== "production" ? (a) => r(a, !0) : Oe
    },
    t
  );
  !i.isCustomElement && typeof customElements < "u" && (i.isCustomElement = (a) => !!customElements.get(a));
  const { code: o } = Wy(e, i);
  function r(a, u = !1) {
    const d = u ? a.message : `Template compilation error: ${a.message}`, c = a.loc && jf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    $e(c ? `${d}
${c}` : d);
  }
  const l = new Function("Vue", o)(Ug);
  return l._rc = !0, xc[n] = l;
}
md(Yy);
const qt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Jy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Qy = { class: "absolute inset-0 overflow-hidden" }, Xy = { class: "fixed inset-y-0 right-0 max-w-full flex" }, Zy = {
  key: 0,
  class: "w-screen max-w-md transform transition-transform duration-300 ease-out"
}, ev = { class: "h-full flex flex-col bg-white shadow-xl" }, tv = { class: "flex-1 overflow-y-auto px-4 sm:px-6" }, nv = {
  key: 0,
  class: "text-center py-12"
}, sv = {
  key: 1,
  class: "flow-root"
}, iv = {
  role: "list",
  class: "-my-6 divide-y divide-gray-200"
}, ov = { class: "flex-shrink-0 w-24 h-24 rounded-md overflow-hidden" }, rv = ["src", "alt"], lv = { class: "ml-4 flex-1 flex flex-col" }, av = { class: "flex justify-between text-base font-medium text-gray-900" }, cv = ["href"], uv = { class: "ml-4" }, dv = {
  key: 0,
  class: "mt-1 text-sm text-gray-500"
}, fv = { class: "flex-1 flex items-end justify-between text-sm" }, pv = ["value", "max", "onUpdate"], hv = ["onClick"], mv = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6"
}, gv = { class: "flex justify-between text-base font-medium text-gray-900" }, yv = { class: "mt-6" }, vv = ["href"], bv = {
  __name: "CartDrawer",
  setup(e) {
    const t = X(!1), n = X([]), s = X(0), i = ae(() => {
      var c;
      return ((c = window.routes) == null ? void 0 : c.cart_url) || "/cart";
    }), o = (c) => {
      var h, m;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((m = (h = window.Shopify) == null ? void 0 : h.currency) == null ? void 0 : m.active) || "USD"
      }).format(c / 100);
    }, r = () => {
      t.value = !0, document.body.style.overflow = "hidden", a();
    }, l = () => {
      t.value = !1, document.body.style.overflow = "";
    }, a = async () => {
      const c = await window.OrionCart.fetchCart();
      n.value = c.items, s.value = c.total_price;
    }, u = async (c, h) => {
      await window.OrionCart.updateItem(c, h), a();
    }, d = async (c) => {
      await window.OrionCart.removeItem(c), a();
    };
    return Vt(() => {
      document.addEventListener("cart:open", r), document.addEventListener("cart:close", l);
      const c = (h) => {
        h.key === "Escape" && t.value && l();
      };
      document.addEventListener("keydown", c), rn(() => {
        document.removeEventListener("cart:open", r), document.removeEventListener("cart:close", l), document.removeEventListener("keydown", c);
      });
    }), (c, h) => (C(), Ut(ls, { to: "body" }, [
      ve(Zt, { name: "drawer" }, {
        default: St(() => [
          t.value ? (C(), T("div", Jy, [
            p("div", Qy, [
              ve(Zt, { name: "fade" }, {
                default: St(() => [
                  t.value ? (C(), T("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: l
                  })) : J("", !0)
                ]),
                _: 1
              }),
              p("div", Xy, [
                ve(Zt, { name: "slide" }, {
                  default: St(() => [
                    t.value ? (C(), T("div", Zy, [
                      p("div", ev, [
                        p("div", { class: "flex items-start justify-between px-4 py-6 sm:px-6" }, [
                          h[1] || (h[1] = p("h2", { class: "text-lg font-medium text-gray-900" }, "Shopping Cart", -1)),
                          p("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                            onClick: l
                          }, h[0] || (h[0] = [
                            p("span", { class: "sr-only" }, "Close cart", -1),
                            p("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              p("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        p("div", tv, [
                          n.value.length === 0 ? (C(), T("div", nv, [
                            h[2] || (h[2] = p("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              p("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              })
                            ], -1)),
                            h[3] || (h[3] = p("h3", { class: "mt-2 text-sm font-medium text-gray-900" }, "Your cart is empty", -1)),
                            h[4] || (h[4] = p("p", { class: "mt-1 text-sm text-gray-500" }, "Start shopping to add items to your cart!", -1)),
                            p("button", {
                              onClick: l,
                              class: "mt-6 btn-primary"
                            }, " Continue Shopping ")
                          ])) : (C(), T("div", sv, [
                            p("ul", iv, [
                              (C(!0), T(ue, null, Ae(n.value, (m) => {
                                var N;
                                return C(), T("li", {
                                  key: m.key,
                                  class: "py-6 flex"
                                }, [
                                  p("div", ov, [
                                    p("img", {
                                      src: m.image,
                                      alt: m.product_title,
                                      class: "w-full h-full object-center object-cover"
                                    }, null, 8, rv)
                                  ]),
                                  p("div", lv, [
                                    p("div", null, [
                                      p("div", av, [
                                        p("h3", null, [
                                          p("a", {
                                            href: m.url
                                          }, Y(m.product_title), 9, cv)
                                        ]),
                                        p("p", uv, Y(o(m.line_price)), 1)
                                      ]),
                                      m.variant_title ? (C(), T("p", dv, Y(m.variant_title), 1)) : J("", !0)
                                    ]),
                                    p("div", fv, [
                                      p("quantity-selector", {
                                        value: m.quantity,
                                        min: 0,
                                        max: ((N = m.variant) == null ? void 0 : N.inventory_quantity) || 999,
                                        onUpdate: (E) => u(m.key, E)
                                      }, null, 40, pv),
                                      p("button", {
                                        type: "button",
                                        class: "font-medium text-primary-600 hover:text-primary-500",
                                        onClick: (E) => d(m.key)
                                      }, " Remove ", 8, hv)
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]))
                        ]),
                        n.value.length > 0 ? (C(), T("div", mv, [
                          p("div", gv, [
                            h[5] || (h[5] = p("p", null, "Subtotal", -1)),
                            p("p", null, Y(o(s.value)), 1)
                          ]),
                          h[8] || (h[8] = p("p", { class: "mt-0.5 text-sm text-gray-500" }, "Shipping and taxes calculated at checkout.", -1)),
                          p("div", yv, [
                            p("a", {
                              href: i.value,
                              class: "flex items-center justify-center btn-primary w-full"
                            }, " Checkout ", 8, vv)
                          ]),
                          p("div", { class: "mt-6 flex justify-center text-sm text-center text-gray-500" }, [
                            p("p", null, [
                              h[7] || (h[7] = je(" or ", -1)),
                              p("button", {
                                type: "button",
                                class: "text-primary-600 font-medium hover:text-primary-500",
                                onClick: l
                              }, h[6] || (h[6] = [
                                je(" Continue Shopping ", -1),
                                p("span", { "aria-hidden": "true" }, " →", -1)
                              ]))
                            ])
                          ])
                        ])) : J("", !0)
                      ])
                    ])) : J("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : J("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, _v = /* @__PURE__ */ qt(bv, [["__scopeId", "data-v-cd70f3c0"]]), Ev = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Nv = { class: "absolute inset-0 overflow-hidden" }, wv = { class: "fixed inset-y-0 left-0 max-w-full flex" }, xv = {
  key: 0,
  class: "w-screen max-w-sm transform transition-transform duration-300 ease-out"
}, Sv = { class: "h-full flex flex-col bg-white shadow-xl" }, Cv = { class: "flex-1 overflow-y-auto" }, kv = { class: "px-4 py-4" }, Ov = { class: "space-y-1" }, Tv = { key: 0 }, Dv = { key: 0 }, Vv = ["onClick"], $v = {
  key: 0,
  class: "mt-1 space-y-1"
}, Av = { key: 0 }, Iv = ["onClick"], Mv = {
  key: 0,
  class: "mt-1 space-y-1"
}, Pv = ["href"], Rv = ["href"], Lv = ["href"], Fv = { class: "px-4 py-4 border-t" }, Bv = { class: "space-y-1" }, jv = ["href"], Hv = {
  key: 0,
  class: "px-4 py-4 border-t"
}, Uv = {
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
    const n = e, s = ae(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), i = X(!1), o = X([]), r = () => {
      i.value = !0, document.body.style.overflow = "hidden";
    }, l = () => {
      i.value = !1, document.body.style.overflow = "";
    }, a = (u) => {
      const d = o.value.indexOf(u);
      d > -1 ? o.value.splice(d, 1) : o.value.push(u);
    };
    return t({
      openMenu: r,
      closeMenu: l
    }), Vt(() => {
      document.addEventListener("mobile-menu:open", r), document.addEventListener("mobile-menu:close", l);
      const u = (d) => {
        d.key === "Escape" && i.value && l();
      };
      document.addEventListener("keydown", u), rn(() => {
        document.removeEventListener("mobile-menu:open", r), document.removeEventListener("mobile-menu:close", l), document.removeEventListener("keydown", u);
      });
    }), (u, d) => (C(), T("div", null, [
      (C(), Ut(ls, { to: "body" }, [
        ve(Zt, { name: "menu" }, {
          default: St(() => [
            i.value ? (C(), T("div", Ev, [
              p("div", Nv, [
                ve(Zt, { name: "fade" }, {
                  default: St(() => [
                    i.value ? (C(), T("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: l
                    })) : J("", !0)
                  ]),
                  _: 1
                }),
                p("div", wv, [
                  ve(Zt, { name: "slide-left" }, {
                    default: St(() => [
                      i.value ? (C(), T("div", xv, [
                        p("div", Sv, [
                          p("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            d[1] || (d[1] = p("h2", { class: "text-lg font-medium text-gray-900" }, "Menu", -1)),
                            p("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: l
                            }, d[0] || (d[0] = [
                              p("span", { class: "sr-only" }, "Close menu", -1),
                              p("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                p("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          p("div", Cv, [
                            p("nav", kv, [
                              p("ul", Ov, [
                                s.value.length === 0 ? (C(), T("li", Tv, d[2] || (d[2] = [
                                  p("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : J("", !0),
                                (C(!0), T(ue, null, Ae(s.value, (c) => (C(), T("li", {
                                  key: c.id || c.title
                                }, [
                                  c.links && c.links.length ? (C(), T("div", Dv, [
                                    p("button", {
                                      onClick: (h) => a(c.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      p("span", null, Y(c.title), 1),
                                      (C(), T("svg", {
                                        class: Qe(["h-5 w-5 transition-transform duration-200", { "rotate-180": o.value.includes(c.title) }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, d[3] || (d[3] = [
                                        p("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, Vv),
                                    ve(Zt, { name: "submenu" }, {
                                      default: St(() => [
                                        o.value.includes(c.title) ? (C(), T("ul", $v, [
                                          (C(!0), T(ue, null, Ae(c.links, (h) => (C(), T("li", {
                                            key: h.id || h.title
                                          }, [
                                            h.links && h.links.length ? (C(), T("div", Av, [
                                              p("button", {
                                                onClick: (m) => a(`${c.title}-${h.title}`),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                p("span", null, Y(h.title), 1),
                                                (C(), T("svg", {
                                                  class: Qe(["h-4 w-4 transition-transform duration-200", { "rotate-180": o.value.includes(`${c.title}-${h.title}`) }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, d[4] || (d[4] = [
                                                  p("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, Iv),
                                              ve(Zt, { name: "submenu" }, {
                                                default: St(() => [
                                                  o.value.includes(`${c.title}-${h.title}`) ? (C(), T("ul", Mv, [
                                                    (C(!0), T(ue, null, Ae(h.links, (m) => (C(), T("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      p("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: l
                                                      }, Y(m.title), 9, Pv)
                                                    ]))), 128))
                                                  ])) : J("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (C(), T("a", {
                                              key: 1,
                                              href: h.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: l
                                            }, Y(h.title), 9, Rv))
                                          ]))), 128))
                                        ])) : J("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (C(), T("a", {
                                    key: 1,
                                    href: c.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: l
                                  }, Y(c.title), 9, Lv))
                                ]))), 128))
                              ])
                            ]),
                            p("div", Fv, [
                              p("div", Bv, [
                                e.customerUrl ? (C(), T("a", {
                                  key: 0,
                                  href: e.customerUrl,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, d[5] || (d[5] = [
                                  p("span", { class: "flex items-center" }, [
                                    p("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      p("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    je(" Account ")
                                  ], -1)
                                ]), 8, jv)) : J("", !0),
                                d[6] || (d[6] = p("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  p("span", { class: "flex items-center" }, [
                                    p("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      p("path", {
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
                            e.showLocalization ? (C(), T("div", Hv, [
                              El(u.$slots, "localization", {}, void 0, !0)
                            ])) : J("", !0)
                          ])
                        ])
                      ])) : J("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : J("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, qv = /* @__PURE__ */ qt(Uv, [["__scopeId", "data-v-f404e536"]]), Kv = { class: "variant-picker" }, zv = { class: "text-sm font-medium text-gray-900 mb-3" }, Wv = { class: "font-normal text-gray-600" }, Gv = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, Yv = ["title", "aria-label", "disabled", "onClick"], Jv = { class: "sr-only" }, Qv = {
  key: 0,
  class: "color-swatch__checkmark"
}, Xv = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, Zv = ["aria-label", "disabled", "onClick"], e1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, t1 = { class: "flex items-center gap-4" }, n1 = { class: "text-2xl font-bold text-gray-900" }, s1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, i1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, o1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, r1 = {
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
    const n = e, s = t, i = X({}), o = X(null), r = ae(() => n.product.options || []), l = ae(() => n.product.variants || []);
    Vt(() => {
      if (n.selectedVariantId) {
        const D = l.value.find((k) => k.id == n.selectedVariantId);
        D && a(D);
      } else if (l.value.length > 0) {
        const D = l.value.find((k) => k.available) || l.value[0];
        a(D);
      }
    });
    const a = (D) => {
      o.value = D, r.value.forEach((k, y) => {
        i.value[k.name] = D[`option${y + 1}`];
      }), s("variant-change", D);
    }, u = (D, k) => {
      i.value[D] = k;
      const y = l.value.find((f) => r.value.every((_, w) => {
        const V = i.value[_.name];
        return f[`option${w + 1}`] === V;
      }));
      y && (o.value = y, s("variant-change", y));
    }, d = (D) => i.value[D] || "", c = (D, k) => i.value[D] === k, h = (D, k) => {
      const y = r.value.findIndex((f) => f.name === D);
      return l.value.some((f) => {
        const _ = f[`option${y + 1}`] === k, w = r.value.every((V, P) => {
          if (V.name === D) return !0;
          const S = i.value[V.name];
          return S ? f[`option${P + 1}`] === S : !0;
        });
        return _ && w && f.available;
      });
    }, m = (D) => D.toLowerCase().includes("color") || D.toLowerCase().includes("colour"), N = (D) => ({
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
    })[D.toLowerCase()] || "#E5E7EB", E = (D) => {
      var k, y;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((y = (k = window.Shopify) == null ? void 0 : k.currency) == null ? void 0 : y.active) || "USD"
      }).format(D / 100);
    };
    return (D, k) => (C(), T("div", Kv, [
      (C(!0), T(ue, null, Ae(r.value, (y) => (C(), T("div", {
        key: y.name,
        class: "variant-option mb-6"
      }, [
        p("h3", zv, [
          je(Y(y.name) + ": ", 1),
          p("span", Wv, Y(d(y.name)), 1)
        ]),
        m(y.name) ? (C(), T("div", Gv, [
          (C(!0), T(ue, null, Ae(y.values, (f) => (C(), T("button", {
            key: f,
            type: "button",
            class: Qe([
              "color-swatch",
              c(y.name, f) ? "color-swatch--selected" : "",
              h(y.name, f) ? "" : "color-swatch--unavailable"
            ]),
            style: _t({ backgroundColor: N(f) }),
            title: f,
            "aria-label": `Select ${y.name} ${f}`,
            disabled: !h(y.name, f),
            onClick: (_) => u(y.name, f)
          }, [
            p("span", Jv, Y(f), 1),
            c(y.name, f) ? (C(), T("span", Qv, k[0] || (k[0] = [
              p("svg", {
                class: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                p("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : J("", !0)
          ], 14, Yv))), 128))
        ])) : (C(), T("div", Xv, [
          (C(!0), T(ue, null, Ae(y.values, (f) => (C(), T("button", {
            key: f,
            type: "button",
            class: Qe([
              "variant-button",
              c(y.name, f) ? "variant-button--selected" : "",
              h(y.name, f) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${y.name} ${f}`,
            disabled: !h(y.name, f),
            onClick: (_) => u(y.name, f)
          }, Y(f), 11, Zv))), 128))
        ]))
      ]))), 128)),
      o.value ? (C(), T("div", e1, [
        p("div", t1, [
          p("span", n1, Y(E(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (C(), T("span", s1, Y(E(o.value.compare_at_price)), 1)) : J("", !0)
        ]),
        o.value.available ? (C(), T("div", i1, " In Stock ")) : (C(), T("div", o1, " Out of Stock "))
      ])) : J("", !0)
    ]));
  }
}, l1 = /* @__PURE__ */ qt(r1, [["__scopeId", "data-v-6eb16bf8"]]), a1 = { class: "quantity-selector" }, c1 = ["disabled"], u1 = ["value", "min", "max"], d1 = ["disabled"], f1 = {
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
    }
  },
  emits: ["update:modelValue", "update"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = ae({
      get: () => n.modelValue,
      set: (u) => {
        const d = Math.max(n.min, Math.min(n.max, u));
        s("update:modelValue", d), s("update", d);
      }
    }), o = () => {
      i.value > n.min && (i.value = i.value - n.step);
    }, r = () => {
      i.value < n.max && (i.value = i.value + n.step);
    }, l = (u) => {
      const d = parseInt(u.target.value) || n.min;
      i.value = d;
    }, a = (u) => {
      const d = parseInt(u.target.value) || n.min;
      i.value = d, u.target.value = i.value;
    };
    return (u, d) => (C(), T("div", a1, [
      p("button", {
        type: "button",
        class: "quantity-button quantity-button--minus",
        disabled: e.modelValue <= e.min,
        onClick: o,
        "aria-label": "Decrease quantity"
      }, d[0] || (d[0] = [
        p("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          p("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          })
        ], -1)
      ]), 8, c1),
      p("input", {
        type: "number",
        class: "quantity-input",
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: l,
        onBlur: a,
        "aria-label": "Quantity"
      }, null, 40, u1),
      p("button", {
        type: "button",
        class: "quantity-button quantity-button--plus",
        disabled: e.modelValue >= e.max,
        onClick: r,
        "aria-label": "Increase quantity"
      }, d[1] || (d[1] = [
        p("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          p("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          })
        ], -1)
      ]), 8, d1)
    ]));
  }
}, p1 = /* @__PURE__ */ qt(f1, [["__scopeId", "data-v-06e9d113"]]);
function h1(e) {
  return ol() ? (Pc(e), !0) : !1;
}
function Xl(e) {
  return typeof e == "function" ? e() : bi(e);
}
const m1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const g1 = Object.prototype.toString, y1 = (e) => g1.call(e) === "[object Object]", yi = () => {
};
function v1(e, t) {
  function n(...s) {
    return new Promise((i, o) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(i).catch(o);
    });
  }
  return n;
}
function b1(...e) {
  let t = 0, n, s = !0, i = yi, o, r, l, a, u;
  !Ve(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: l = !0, leading: a = !0, rejectOnCancel: u = !1 } = e[0] : [r, l = !0, a = !0, u = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, i(), i = yi);
  };
  return (h) => {
    const m = Xl(r), N = Date.now() - t, E = () => o = h();
    return d(), m <= 0 ? (t = Date.now(), E()) : (N > m && (a || !s) ? (t = Date.now(), E()) : l && (o = new Promise((D, k) => {
      i = u ? k : D, n = setTimeout(() => {
        t = Date.now(), s = !0, D(E()), d();
      }, Math.max(0, m - N));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, o);
  };
}
function _1(e, t = 200, n = !1, s = !0, i = !1) {
  return v1(
    b1(t, n, s, i),
    e
  );
}
function E1(e) {
  var t;
  const n = Xl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Df = m1 ? window : void 0;
function gr(...e) {
  let t, n, s, i;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, i] = e, t = Df) : [t, n, s, i] = e, !t)
    return yi;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], r = () => {
    o.forEach((d) => d()), o.length = 0;
  }, l = (d, c, h, m) => (d.addEventListener(c, h, m), () => d.removeEventListener(c, h, m)), a = en(
    () => [E1(t), Xl(i)],
    ([d, c]) => {
      if (r(), !d)
        return;
      const h = y1(c) ? { ...c } : c;
      o.push(
        ...n.flatMap((m) => s.map((N) => l(d, m, N, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), r();
  };
  return h1(u), u;
}
function N1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: i,
    onSwipeStart: o,
    passive: r = !0,
    window: l = Df
  } = t, a = _s({ x: 0, y: 0 }), u = _s({ x: 0, y: 0 }), d = ae(() => a.x - u.x), c = ae(() => a.y - u.y), { max: h, abs: m } = Math, N = ae(() => h(m(d.value), m(c.value)) >= n), E = X(!1), D = ae(() => N.value ? m(d.value) > m(c.value) ? d.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), k = (v) => [v.touches[0].clientX, v.touches[0].clientY], y = (v, O) => {
    a.x = v, a.y = O;
  }, f = (v, O) => {
    u.x = v, u.y = O;
  };
  let _;
  const w = w1(l == null ? void 0 : l.document);
  r ? _ = w ? { passive: !0 } : { capture: !1 } : _ = w ? { passive: !1, capture: !0 } : { capture: !0 };
  const V = (v) => {
    E.value && (i == null || i(v, D.value)), E.value = !1;
  }, P = [
    gr(e, "touchstart", (v) => {
      if (v.touches.length !== 1)
        return;
      _.capture && !_.passive && v.preventDefault();
      const [O, I] = k(v);
      y(O, I), f(O, I), o == null || o(v);
    }, _),
    gr(e, "touchmove", (v) => {
      if (v.touches.length !== 1)
        return;
      const [O, I] = k(v);
      f(O, I), !E.value && N.value && (E.value = !0), E.value && (s == null || s(v));
    }, _),
    gr(e, ["touchend", "touchcancel"], V, _)
  ];
  return {
    isPassiveEventSupported: w,
    isSwiping: E,
    direction: D,
    coordsStart: a,
    coordsEnd: u,
    lengthX: d,
    lengthY: c,
    stop: () => P.forEach((v) => v())
  };
}
function w1(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", yi, n), e.removeEventListener("x", yi), t;
}
const x1 = { class: "sticky-header-container" }, S1 = {
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
    const t = e, n = X(null), s = X(!1), i = X(!1), o = X(!1), r = X(!1), l = X("#ffffff"), a = X(0), u = X(0), d = ae(() => D.value ? `${u.value}px` : "0");
    let c = 0;
    const h = ae(() => {
      const y = {};
      return D.value && s.value && (y.position = "fixed", y.top = "0", y.left = "0", y.right = "0", y.zIndex = "40", i.value ? y.transform = "translateY(-100%)" : y.transform = "translateY(0)"), r.value && (a.value === 0 ? y.backgroundColor = "transparent" : D.value && s.value && (y.backgroundColor = l.value)), y.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", y;
    }), m = () => {
      var _, w, V;
      const y = (w = (_ = n.value) == null ? void 0 : _.getRootNode()) == null ? void 0 : w.host;
      if (!y) return;
      y.classList.add("sticky-header-wrapper");
      const f = (V = n.value) == null ? void 0 : V.querySelector(".main-header");
      f && r.value && (a.value === 0 ? (f.style.backgroundColor = "transparent", f.style.borderBottomColor = "transparent") : D.value && s.value && (f.style.backgroundColor = l.value, f.style.borderBottomColor = "#e5e7eb"));
    }, N = _1(() => {
      if (!D.value)
        return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = y, s.value = y > 0, o.value = y > 10, E.value && s.value) {
        const f = y - c;
        Math.abs(f) > 5 && (f > 0 && y > u.value ? i.value = !0 : f < 0 && (i.value = !1));
      } else
        i.value = !1;
      Math.abs(y - c) > 1 && (c = y), m();
    }, 50), E = X(t.hideOnScrollDown), D = X(t.sticky), k = () => {
      n.value && (u.value = n.value.offsetHeight || 80);
    };
    return Vt(() => {
      if (n.value) {
        const y = n.value.getRootNode().host;
        if (y) {
          y.classList.add("sticky-header-wrapper"), r.value = y.classList.contains("header-transparent");
          const f = y.getAttribute("data-hide-on-scroll-down"), _ = y.getAttribute("data-sticky"), w = y.getAttribute("data-sticky-bg");
          f !== null && (E.value = f === "true"), _ !== null && (D.value = _ === "true"), w !== null && (l.value = w || "#ffffff"), setTimeout(k, 100), window.addEventListener("resize", k);
        }
      }
      window.addEventListener("scroll", N, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), N();
    }), rn(() => {
      window.removeEventListener("scroll", N), window.removeEventListener("resize", k);
    }), (y, f) => (C(), T("div", x1, [
      D.value && s.value ? (C(), T("div", {
        key: 0,
        class: "header-placeholder",
        style: _t({ height: d.value })
      }, null, 4)) : J("", !0),
      p("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Qe(["sticky-header-inner", {
          "is-fixed": D.value && s.value,
          "is-hidden": i.value,
          "has-shadow": o.value,
          "is-transparent": r.value && a.value === 0
        }]),
        style: _t(h.value)
      }, [
        El(y.$slots, "default")
      ], 6)
    ]));
  }
}, C1 = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, k1 = { class: "main-header__wrapper" }, O1 = {
  href: "/",
  class: "main-header__logo"
}, T1 = ["src", "alt"], D1 = {
  key: 1,
  class: "text-xl font-bold"
}, V1 = { class: "main-header__nav hidden lg:flex" }, $1 = ["href"], A1 = { class: "main-header__actions" }, I1 = {
  key: 0,
  class: "cart-count"
}, M1 = { class: "search-overlay__container" }, P1 = {
  action: "/search",
  method: "get",
  class: "search-form"
}, R1 = {
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
    }
  },
  setup(e) {
    const t = X(null), n = X(!1), s = X(0), i = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, o = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, r = async () => {
      var a;
      n.value = !n.value, n.value && (await _i(), (a = t.value) == null || a.focus());
    }, l = () => {
      var a;
      (a = window.OrionCart) != null && a.state && (s.value = window.OrionCart.state.itemCount || 0);
    };
    return Vt(() => {
      document.addEventListener("cart:updated", l), l();
    }), rn(() => {
      document.removeEventListener("cart:updated", l);
    }), (a, u) => (C(), T("div", C1, [
      p("div", k1, [
        p("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: i,
          "aria-label": "Open menu"
        }, u[0] || (u[0] = [
          p("svg", {
            class: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          ], -1)
        ])),
        p("a", O1, [
          e.logoUrl ? (C(), T("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, T1)) : (C(), T("span", D1, Y(e.shopName), 1))
        ]),
        p("nav", V1, [
          (C(!0), T(ue, null, Ae(e.navigationLinks, (d) => (C(), T("a", {
            key: d.url,
            href: d.url,
            class: "nav-link"
          }, Y(d.title), 9, $1))), 128))
        ]),
        p("div", A1, [
          p("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: r,
            "aria-label": "Search"
          }, u[1] || (u[1] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            ], -1)
          ])),
          u[3] || (u[3] = p("a", {
            href: "/account",
            class: "action-button",
            "aria-label": "Account"
          }, [
            p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ])
          ], -1)),
          p("button", {
            type: "button",
            class: "action-button relative",
            onClick: o,
            "aria-label": "Cart"
          }, [
            u[2] || (u[2] = p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)),
            s.value > 0 ? (C(), T("span", I1, Y(s.value), 1)) : J("", !0)
          ])
        ])
      ]),
      (C(), Ut(ls, { to: "body" }, [
        ve(Zt, { name: "fade" }, {
          default: St(() => [
            n.value ? (C(), T("div", {
              key: 0,
              class: "search-overlay",
              onClick: nn(r, ["self"])
            }, [
              p("div", M1, [
                p("form", P1, [
                  p("input", {
                    ref_key: "searchInput",
                    ref: t,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Ad(r, ["esc"])
                  }, null, 544),
                  u[4] || (u[4] = p("button", {
                    type: "submit",
                    class: "search-submit"
                  }, [
                    p("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      p("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1))
                ]),
                p("button", {
                  type: "button",
                  class: "search-close",
                  onClick: r,
                  "aria-label": "Close search"
                }, u[5] || (u[5] = [
                  p("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ])
            ])) : J("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, L1 = /* @__PURE__ */ qt(R1, [["__scopeId", "data-v-b1f748a1"]]), F1 = { class: "site-footer" }, B1 = {
  key: 0,
  class: "newsletter-section"
}, j1 = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, H1 = { class: "newsletter-content" }, U1 = { class: "newsletter-text" }, q1 = { class: "text-xl font-semibold mb-2" }, K1 = { class: "text-gray-600" }, z1 = ["disabled"], W1 = ["disabled"], G1 = { key: 0 }, Y1 = { key: 1 }, J1 = { class: "footer-main" }, Q1 = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, X1 = { class: "footer-grid" }, Z1 = { class: "footer-column" }, eb = { class: "footer-heading" }, tb = { class: "text-gray-600 mb-4" }, nb = {
  key: 0,
  class: "social-links"
}, sb = ["href", "aria-label"], ib = { class: "footer-heading" }, ob = { class: "footer-links" }, rb = ["href"], lb = {
  key: 0,
  class: "footer-column"
}, ab = { class: "contact-info" }, cb = {
  key: 0,
  class: "contact-item"
}, ub = {
  key: 1,
  class: "contact-item"
}, db = {
  key: 2,
  class: "contact-item"
}, fb = {
  key: 0,
  class: "payment-methods"
}, pb = { class: "payment-icons" }, hb = ["src", "alt"], mb = { class: "footer-bottom" }, gb = { class: "copyright" }, yb = {
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
    const t = X(""), n = X(!1), s = ae(() => (/* @__PURE__ */ new Date()).getFullYear()), i = async () => {
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
    }, o = (r) => {
      const l = {
        facebook: () => Gt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Gt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Gt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Gt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Gt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Gt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Gt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Gt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[r.toLowerCase()] || l.facebook;
    };
    return (r, l) => (C(), T("footer", F1, [
      e.showNewsletter ? (C(), T("div", B1, [
        p("div", j1, [
          p("div", H1, [
            p("div", U1, [
              p("h3", q1, Y(e.newsletterTitle), 1),
              p("p", K1, Y(e.newsletterDescription), 1)
            ]),
            p("form", {
              onSubmit: nn(i, ["prevent"]),
              class: "newsletter-form"
            }, [
              pt(p("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, z1), [
                [Rn, t.value]
              ]),
              p("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (C(), T("span", Y1, "Subscribing...")) : (C(), T("span", G1, "Subscribe"))
              ], 8, W1)
            ], 32)
          ])
        ])
      ])) : J("", !0),
      p("div", J1, [
        p("div", Q1, [
          p("div", X1, [
            p("div", Z1, [
              p("h4", eb, Y(e.companyName), 1),
              p("p", tb, Y(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (C(), T("div", nb, [
                (C(!0), T(ue, null, Ae(e.socialLinks, (a) => (C(), T("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (C(), Ut($u(o(a.name))))
                ], 8, sb))), 128))
              ])) : J("", !0)
            ]),
            (C(!0), T(ue, null, Ae(e.footerColumns, (a) => (C(), T("div", {
              key: a.title,
              class: "footer-column"
            }, [
              p("h4", ib, Y(a.title), 1),
              p("ul", ob, [
                (C(!0), T(ue, null, Ae(a.links, (u) => (C(), T("li", {
                  key: u.title
                }, [
                  p("a", {
                    href: u.url,
                    class: "footer-link"
                  }, Y(u.title), 9, rb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (C(), T("div", lb, [
              l[4] || (l[4] = p("h4", { class: "footer-heading" }, "Contact", -1)),
              p("div", ab, [
                e.contactEmail ? (C(), T("p", cb, [
                  l[1] || (l[1] = p("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ], -1)),
                  je(" " + Y(e.contactEmail), 1)
                ])) : J("", !0),
                e.contactPhone ? (C(), T("p", ub, [
                  l[2] || (l[2] = p("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    })
                  ], -1)),
                  je(" " + Y(e.contactPhone), 1)
                ])) : J("", !0),
                e.contactAddress ? (C(), T("p", db, [
                  l[3] || (l[3] = p("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  je(" " + Y(e.contactAddress), 1)
                ])) : J("", !0)
              ])
            ])) : J("", !0)
          ]),
          e.paymentMethods.length > 0 ? (C(), T("div", fb, [
            l[5] || (l[5] = p("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            p("div", pb, [
              (C(!0), T(ue, null, Ae(e.paymentMethods, (a) => (C(), T("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, hb))), 128))
            ])
          ])) : J("", !0),
          p("div", mb, [
            p("p", gb, " © " + Y(s.value) + " " + Y(e.companyName) + ". All rights reserved. ", 1),
            l[6] || (l[6] = p("div", { class: "footer-bottom-links" }, [
              p("a", {
                href: "/pages/privacy-policy",
                class: "footer-bottom-link"
              }, "Privacy Policy"),
              p("a", {
                href: "/pages/terms-of-service",
                class: "footer-bottom-link"
              }, "Terms of Service"),
              p("a", {
                href: "/pages/refund-policy",
                class: "footer-bottom-link"
              }, "Refund Policy")
            ], -1))
          ])
        ])
      ])
    ]));
  }
}, vb = /* @__PURE__ */ qt(yb, [["__scopeId", "data-v-799862f9"]]), bb = { class: "product-card group relative" }, _b = { class: "relative overflow-hidden rounded-lg bg-white" }, Eb = ["href"], Nb = ["src", "alt"], wb = {
  key: 0,
  class: "absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 text-xs font-medium rounded"
}, xb = {
  key: 1,
  class: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
}, Sb = { class: "absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity" }, Cb = { class: "mt-4" }, kb = {
  key: 0,
  class: "mb-2"
}, Ob = { class: "flex gap-1 flex-wrap" }, Tb = ["onClick", "title"], Db = { class: "text-sm font-medium text-secondary-900 line-clamp-2" }, Vb = ["href"], $b = { class: "mt-1 flex items-center gap-2" }, Ab = { class: "text-lg font-semibold text-secondary-900" }, Ib = {
  key: 0,
  class: "text-sm text-secondary-500 line-through"
}, Mb = {
  __name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: !0
    },
    enableQuickAdd: {
      type: Boolean,
      default: !0
    },
    enableQuickView: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["quick-add", "quick-view"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = X(""), o = X(!1), r = ae(() => {
      var _, w;
      return o.value && ((_ = n.product.media) != null && _[1]) ? n.product.media[1].src : ((w = n.product.featured_media) == null ? void 0 : w.src) || "/placeholder.jpg";
    }), l = ae(() => {
      var _;
      return (_ = n.product.options) == null ? void 0 : _.some(
        (w) => w.name.toLowerCase().includes("color") || w.name.toLowerCase().includes("colour")
      );
    }), a = ae(() => {
      var w;
      const _ = (w = n.product.options) == null ? void 0 : w.find(
        (V) => V.name.toLowerCase().includes("color") || V.name.toLowerCase().includes("colour")
      );
      return (_ == null ? void 0 : _.values) || [];
    }), u = ae(() => n.product.price || 0), d = ae(() => n.product.compare_at_price || 0), c = ae(() => n.product.available && d.value > u.value), h = ae(() => c.value ? Math.round((d.value - u.value) / d.value * 100) : 0), m = (_) => `$${(_ / 100).toFixed(2)}`, N = (_) => {
      const w = {
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
      }, V = _.toLowerCase();
      return w[V] || `#${V.replace("#", "")}`;
    }, E = () => {
      var _;
      ((_ = n.product.media) == null ? void 0 : _.length) > 1 && (o.value = !0);
    }, D = () => {
      o.value = !1;
    }, k = (_) => {
      i.value = _.value;
    }, y = () => {
      s("quick-add", n.product);
    }, f = () => {
      s("quick-view", n.product);
    };
    return (_, w) => (C(), T("div", bb, [
      p("div", _b, [
        p("a", {
          href: e.product.url || "#",
          class: "block aspect-[3/4]"
        }, [
          p("img", {
            src: r.value,
            alt: e.product.title,
            class: "h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105",
            onMouseenter: E,
            onMouseleave: D
          }, null, 40, Nb),
          c.value ? (C(), T("div", wb, Y(h.value) + "% OFF ", 1)) : J("", !0),
          e.product.available ? J("", !0) : (C(), T("div", xb, w[0] || (w[0] = [
            p("span", { class: "bg-white text-secondary-900 px-4 py-2 font-medium rounded" }, " Out of Stock ", -1)
          ])))
        ], 8, Eb),
        p("div", Sb, [
          e.product.available && e.enableQuickAdd ? (C(), T("button", {
            key: 0,
            onClick: y,
            class: "w-full bg-secondary-900 text-white py-2 px-4 rounded hover:bg-secondary-800 transition-colors text-sm font-medium"
          }, " Quick Add ")) : J("", !0),
          e.enableQuickView ? (C(), T("button", {
            key: 1,
            onClick: f,
            class: "w-full bg-white text-secondary-900 border border-secondary-300 py-2 px-4 rounded hover:bg-secondary-50 transition-colors text-sm font-medium mt-2"
          }, " Quick View ")) : J("", !0)
        ])
      ]),
      p("div", Cb, [
        l.value ? (C(), T("div", kb, [
          p("div", Ob, [
            (C(!0), T(ue, null, Ae(a.value, (V) => (C(), T("button", {
              key: V.value,
              onClick: (P) => k(V),
              title: V.value,
              class: Qe([
                "w-6 h-6 rounded-full border-2 transition-all",
                i.value === V.value ? "border-secondary-900 scale-110" : "border-secondary-300"
              ]),
              style: _t({ backgroundColor: N(V.value) })
            }, null, 14, Tb))), 128))
          ])
        ])) : J("", !0),
        p("h3", Db, [
          p("a", {
            href: e.product.url || "#",
            class: "hover:text-primary-600 transition-colors"
          }, Y(e.product.title), 9, Vb)
        ]),
        p("div", $b, [
          p("span", Ab, Y(m(u.value)), 1),
          d.value > u.value ? (C(), T("span", Ib, Y(m(d.value)), 1)) : J("", !0)
        ])
      ])
    ]));
  }
}, Pb = { class: "collection-filters" }, Rb = { class: "lg:hidden mb-4" }, Lb = { class: "hidden lg:block space-y-6" }, Fb = { class: "filter-group" }, Bb = { class: "filter-group" }, jb = { class: "space-y-2" }, Hb = { class: "flex items-center" }, Ub = { class: "flex items-center" }, qb = { class: "flex items-center" }, Kb = { class: "flex items-center" }, zb = {
  key: 0,
  class: "filter-group"
}, Wb = { class: "space-y-2" }, Gb = ["value"], Yb = { class: "ml-2 text-sm" }, Jb = {
  key: 1,
  class: "filter-group"
}, Qb = { class: "space-y-2" }, Xb = ["value"], Zb = { class: "ml-2 text-sm" }, e_ = { class: "filter-group" }, t_ = { class: "flex items-center" }, n_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, s_ = { class: "h-full flex flex-col" }, i_ = { class: "flex items-center justify-between p-4 border-b" }, o_ = {
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
    const n = e, s = t, i = X("manual"), o = X([]), r = X([]), l = X([]), a = X(!1), u = X(!1), d = ae(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.product_type && y.add(f.product_type);
      }), Array.from(y).sort();
    }), c = ae(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.vendor && y.add(f.vendor);
      }), Array.from(y).sort();
    }), h = ae(() => o.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      k();
    }, N = () => {
      k();
    }, E = () => {
      o.value = [], r.value = [], l.value = [], a.value = !1, k();
    }, D = () => {
      u.value = !1, k();
    }, k = () => {
      s("update-filters", {
        sort: i.value,
        priceRanges: o.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (y, f) => (C(), T("div", Pb, [
      p("div", Rb, [
        p("button", {
          onClick: f[0] || (f[0] = (_) => u.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, f[12] || (f[12] = [
          p("span", { class: "font-medium" }, "Filters", -1),
          p("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      p("div", Lb, [
        p("div", Fb, [
          f[14] || (f[14] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          pt(p("select", {
            "onUpdate:modelValue": f[1] || (f[1] = (_) => i.value = _),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, f[13] || (f[13] = [
            xs('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Ko, i.value]
          ])
        ]),
        p("div", Bb, [
          f[19] || (f[19] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          p("div", jb, [
            p("label", Hb, [
              pt(p("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": f[2] || (f[2] = (_) => o.value = _),
                onChange: N,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Jt, o.value]
              ]),
              f[15] || (f[15] = p("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            p("label", Ub, [
              pt(p("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": f[3] || (f[3] = (_) => o.value = _),
                onChange: N,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Jt, o.value]
              ]),
              f[16] || (f[16] = p("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            p("label", qb, [
              pt(p("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": f[4] || (f[4] = (_) => o.value = _),
                onChange: N,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Jt, o.value]
              ]),
              f[17] || (f[17] = p("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            p("label", Kb, [
              pt(p("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": f[5] || (f[5] = (_) => o.value = _),
                onChange: N,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Jt, o.value]
              ]),
              f[18] || (f[18] = p("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (C(), T("div", zb, [
          f[20] || (f[20] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          p("div", Wb, [
            (C(!0), T(ue, null, Ae(d.value, (_) => (C(), T("label", {
              key: _,
              class: "flex items-center"
            }, [
              pt(p("input", {
                type: "checkbox",
                value: _,
                "onUpdate:modelValue": f[6] || (f[6] = (w) => r.value = w),
                onChange: N,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, Gb), [
                [Jt, r.value]
              ]),
              p("span", Yb, Y(_), 1)
            ]))), 128))
          ])
        ])) : J("", !0),
        c.value.length > 0 ? (C(), T("div", Jb, [
          f[21] || (f[21] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          p("div", Qb, [
            (C(!0), T(ue, null, Ae(c.value, (_) => (C(), T("label", {
              key: _,
              class: "flex items-center"
            }, [
              pt(p("input", {
                type: "checkbox",
                value: _,
                "onUpdate:modelValue": f[7] || (f[7] = (w) => l.value = w),
                onChange: N,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, Xb), [
                [Jt, l.value]
              ]),
              p("span", Zb, Y(_), 1)
            ]))), 128))
          ])
        ])) : J("", !0),
        p("div", e_, [
          f[23] || (f[23] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          p("label", t_, [
            pt(p("input", {
              type: "checkbox",
              "onUpdate:modelValue": f[8] || (f[8] = (_) => a.value = _),
              onChange: N,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Jt, a.value]
            ]),
            f[22] || (f[22] = p("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        h.value ? (C(), T("button", {
          key: 2,
          onClick: E,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : J("", !0)
      ]),
      (C(), Ut(ls, { to: "body" }, [
        u.value ? (C(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: f[11] || (f[11] = nn((_) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: f[9] || (f[9] = (_) => u.value = !1)
          }),
          p("div", n_, [
            p("div", s_, [
              p("div", i_, [
                f[25] || (f[25] = p("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                p("button", {
                  onClick: f[10] || (f[10] = (_) => u.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, f[24] || (f[24] = [
                  p("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              f[26] || (f[26] = p("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
              p("div", { class: "p-4 border-t" }, [
                p("button", {
                  onClick: D,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : J("", !0)
      ]))
    ]));
  }
}, r_ = /* @__PURE__ */ qt(o_, [["__scopeId", "data-v-67473a91"]]), l_ = { class: "collection-grid" }, a_ = {
  key: 0,
  class: "mb-8"
}, c_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, u_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, d_ = { class: "mt-4 flex items-center justify-between" }, f_ = { class: "text-sm text-secondary-600" }, p_ = { class: "lg:hidden" }, h_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, m_ = { class: "lg:col-span-1" }, g_ = ["products"], y_ = { class: "lg:col-span-3" }, v_ = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, b_ = {
  key: 1,
  class: "text-center py-12"
}, __ = {
  key: 2,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, E_ = ["product"], N_ = {
  key: 3,
  class: "mt-8"
}, w_ = {
  key: 0,
  class: "inline-flex items-center"
}, x_ = {
  key: 1,
  class: "text-center"
}, S_ = ["disabled"], C_ = { key: 0 }, k_ = { key: 1 }, O_ = {
  key: 2,
  class: "flex items-center justify-between"
}, T_ = { class: "flex-1 flex justify-between sm:hidden" }, D_ = ["disabled"], V_ = ["disabled"], $_ = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, A_ = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, I_ = ["disabled"], M_ = ["onClick"], P_ = ["disabled"], R_ = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, L_ = { class: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full" }, F_ = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, B_ = { class: "text-lg font-medium text-secondary-900" }, j_ = {
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
    }
  },
  setup(e) {
    const t = e, n = X(!1), s = X(!1), i = X(1), o = X(t.productsPerPage), r = X("manual"), l = X({}), a = X(null), u = X(null), d = ae(() => {
      var O, I, $;
      let S = [...t.products];
      switch (l.value.inStockOnly && (S = S.filter((L) => L.available)), ((O = l.value.priceRanges) == null ? void 0 : O.length) > 0 && (S = S.filter((L) => {
        const G = L.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? G < 50 : ee === "50-100" ? G >= 50 && G < 100 : ee === "100-200" ? G >= 100 && G < 200 : ee === "200+" ? G >= 200 : !1);
      })), ((I = l.value.types) == null ? void 0 : I.length) > 0 && (S = S.filter((L) => l.value.types.includes(L.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (S = S.filter((L) => l.value.vendors.includes(L.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          S.sort((L, G) => L.price - G.price);
          break;
        case "price-descending":
          S.sort((L, G) => G.price - L.price);
          break;
        case "title-ascending":
          S.sort((L, G) => L.title.localeCompare(G.title));
          break;
        case "title-descending":
          S.sort((L, G) => G.title.localeCompare(L.title));
          break;
        case "created-ascending":
          S.sort((L, G) => new Date(L.created_at) - new Date(G.created_at));
          break;
        case "created-descending":
          S.sort((L, G) => new Date(G.created_at) - new Date(L.created_at));
          break;
      }
      return S;
    }), c = ae(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, o.value);
      const S = (i.value - 1) * t.productsPerPage, v = S + t.productsPerPage;
      return d.value.slice(S, v);
    }), h = ae(() => Math.ceil(d.value.length / t.productsPerPage)), m = ae(() => o.value < d.value.length), N = ae(() => Math.max(0, d.value.length - o.value)), E = ae(() => {
      const S = [], v = h.value, O = i.value;
      if (v <= 7)
        for (let I = 1; I <= v; I++)
          S.push(I);
      else if (O <= 3) {
        for (let I = 1; I <= 5; I++)
          S.push(I);
        S.push("..."), S.push(v);
      } else if (O >= v - 2) {
        S.push(1), S.push("...");
        for (let I = v - 4; I <= v; I++)
          S.push(I);
      } else {
        S.push(1), S.push("...");
        for (let I = O - 1; I <= O + 1; I++)
          S.push(I);
        S.push("..."), S.push(v);
      }
      return S.filter((I) => I === "..." || I >= 1 && I <= v);
    }), D = (S) => {
      l.value = S, i.value = 1, o.value = t.productsPerPage;
    }, k = () => {
      i.value = 1, o.value = t.productsPerPage;
    }, y = () => {
      s.value = !0, setTimeout(() => {
        o.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, f = async (S) => {
      var O;
      const v = new FormData();
      v.append("id", S.variants[0].id), v.append("quantity", "1"), await ((O = window.OrionCart) == null ? void 0 : O.addItem(v)), console.log("Added to cart:", S.title);
    }, _ = (S) => {
      a.value = S;
    }, w = () => {
      a.value = null;
    };
    let V = null;
    const P = () => {
      !t.enableInfiniteScroll || !u.value || (V = new IntersectionObserver(
        (S) => {
          S[0].isIntersecting && m.value && !s.value && y();
        },
        { threshold: 0.1 }
      ), V.observe(u.value));
    };
    return Vt(() => {
      P();
    }), rn(() => {
      V && V.disconnect();
    }), en(() => t.enableInfiniteScroll, () => {
      P();
    }), (S, v) => (C(), T("div", l_, [
      e.showHeader ? (C(), T("div", a_, [
        p("h1", c_, Y(e.collectionTitle), 1),
        e.collectionDescription ? (C(), T("div", u_, Y(e.collectionDescription), 1)) : J("", !0),
        p("div", d_, [
          p("p", f_, Y(d.value.length) + " products ", 1),
          p("div", p_, [
            pt(p("select", {
              "onUpdate:modelValue": v[0] || (v[0] = (O) => r.value = O),
              onChange: k,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, v[5] || (v[5] = [
              xs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ko, r.value]
            ])
          ])
        ])
      ])) : J("", !0),
      p("div", h_, [
        p("aside", m_, [
          p("collection-filters", {
            products: e.products,
            onUpdateFilters: D
          }, null, 40, g_)
        ]),
        p("div", y_, [
          n.value ? (C(), T("div", v_, [
            (C(), T(ue, null, Ae(6, (O) => p("div", {
              key: O,
              class: "animate-pulse"
            }, v[6] || (v[6] = [
              p("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              p("div", { class: "mt-4 space-y-2" }, [
                p("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                p("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ])) : d.value.length === 0 ? (C(), T("div", b_, v[7] || (v[7] = [
            p("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            p("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            p("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (C(), T("div", __, [
            (C(!0), T(ue, null, Ae(c.value, (O) => (C(), T("product-card", {
              key: O.id,
              product: O,
              onQuickAdd: f,
              onQuickView: _
            }, null, 40, E_))), 128))
          ])),
          !n.value && d.value.length > 0 ? (C(), T("div", N_, [
            e.enableInfiniteScroll ? (C(), T("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: u,
              class: "text-center py-4"
            }, [
              s.value ? (C(), T("div", w_, v[8] || (v[8] = [
                p("svg", {
                  class: "animate-spin h-5 w-5 text-primary-600 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  p("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  p("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                je(" Loading more products... ", -1)
              ]))) : J("", !0)
            ], 512)) : m.value ? (C(), T("div", x_, [
              p("button", {
                onClick: y,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (C(), T("span", C_, "Loading...")) : (C(), T("span", k_, "Load More (" + Y(N.value) + " remaining)", 1))
              ], 8, S_)
            ])) : J("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (C(), T("nav", O_, [
              p("div", T_, [
                p("button", {
                  onClick: v[1] || (v[1] = (O) => i.value--),
                  disabled: i.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, D_),
                p("button", {
                  onClick: v[2] || (v[2] = (O) => i.value++),
                  disabled: i.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, V_)
              ]),
              p("div", $_, [
                p("div", null, [
                  p("nav", A_, [
                    p("button", {
                      onClick: v[3] || (v[3] = (O) => i.value--),
                      disabled: i.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, v[9] || (v[9] = [
                      p("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        p("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, I_),
                    (C(!0), T(ue, null, Ae(E.value, (O) => (C(), T("button", {
                      key: O,
                      onClick: (I) => i.value = O,
                      class: Qe([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        i.value === O ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, Y(O), 11, M_))), 128)),
                    p("button", {
                      onClick: v[4] || (v[4] = (O) => i.value++),
                      disabled: i.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, v[10] || (v[10] = [
                      p("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        p("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, P_)
                  ])
                ])
              ])
            ])) : J("", !0)
          ])) : J("", !0)
        ])
      ]),
      (C(), Ut(ls, { to: "body" }, [
        a.value ? (C(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: nn(w, ["self"])
        }, [
          p("div", R_, [
            p("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: w
            }),
            p("div", L_, [
              p("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                p("button", {
                  onClick: w,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, v[11] || (v[11] = [
                  p("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              p("div", F_, [
                p("h3", B_, Y(a.value.title), 1),
                v[12] || (v[12] = p("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : J("", !0)
      ]))
    ]));
  }
}, H_ = { class: "product-gallery" }, U_ = { class: "main-image-wrapper" }, q_ = ["src", "alt"], K_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, z_ = {
  key: 0,
  class: "thumbnails-wrapper"
}, W_ = ["disabled"], G_ = ["onClick", "aria-label"], Y_ = ["src", "alt"], J_ = ["disabled"], Q_ = {
  key: 1,
  class: "swiper-dots"
}, X_ = ["onClick", "aria-label"], Z_ = ["src", "alt"], eE = { class: "lightbox-counter" }, tE = 80, Fi = 4, Sc = 2, nE = {
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
    const t = e, n = X(0), s = X(!1), i = X(!1), o = X(!1), r = X(!1), l = X(0), a = X(null), u = X(0), d = X(0), c = X({}), h = ae(() => t.images.map((P) => {
      if (P.src)
        return P;
      const S = P.url || P;
      return {
        src: `${S}?width=${t.imageTransformWidth}`,
        thumbnail: `${S}?width=${t.thumbnailWidth}`,
        alt: P.alt || t.productTitle
      };
    })), m = ae(() => h.value[n.value] || { src: "", alt: "" }), N = ae(() => ({
      width: "150px",
      height: "150px",
      left: `${u.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), E = ae(() => {
      const S = u.value / c.value.width * 100, v = d.value / c.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${c.value.width * Sc}px ${c.value.height * Sc}px`,
        backgroundPosition: `${S}% ${v}%`
      };
    }), D = (P) => {
      s.value = !0, n.value = P;
    }, k = (P) => {
      P === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        h.value.length - Fi,
        l.value + 1
      );
    }, y = (P) => {
      n.value = P, i.value = !0, document.body.style.overflow = "hidden";
    }, f = () => {
      i.value = !1, document.body.style.overflow = "";
    }, _ = (P) => {
      P === "prev" ? n.value = n.value > 0 ? n.value - 1 : h.value.length - 1 : n.value = n.value < h.value.length - 1 ? n.value + 1 : 0;
    }, w = (P) => {
      const S = P.currentTarget.getBoundingClientRect();
      c.value = S, u.value = P.clientX - S.left, d.value = P.clientY - S.top;
    }, { lengthX: V } = N1(
      a,
      {
        onSwipeEnd() {
          V.value > 50 ? k("prev") : V.value < -50 && k("next");
        }
      }
    );
    return Vt(() => {
      r.value = window.innerWidth < 768;
      const P = () => {
        r.value = window.innerWidth < 768;
      }, S = (v) => {
        i.value && (v.key === "Escape" && f(), v.key === "ArrowLeft" && _("prev"), v.key === "ArrowRight" && _("next"));
      };
      window.addEventListener("resize", P), window.addEventListener("keydown", S), rn(() => {
        window.removeEventListener("resize", P), window.removeEventListener("keydown", S);
      });
    }), (P, S) => (C(), T("div", H_, [
      p("div", U_, [
        p("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: S[1] || (S[1] = (v) => y(n.value)),
          onMouseenter: S[2] || (S[2] = (v) => o.value = !0),
          onMouseleave: S[3] || (S[3] = (v) => o.value = !1),
          onMousemove: w
        }, [
          p("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Qe(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: S[0] || (S[0] = (v) => s.value = !1)
          }, null, 42, q_),
          s.value ? (C(), T("div", K_, S[9] || (S[9] = [
            p("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : J("", !0),
          S[10] || (S[10] = p("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            p("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              })
            ])
          ], -1)),
          o.value && !r.value ? (C(), T("div", {
            key: 1,
            class: "zoom-lens",
            style: _t(N.value)
          }, null, 4)) : J("", !0)
        ], 32),
        o.value && !r.value ? (C(), T("div", {
          key: 0,
          class: "zoom-preview",
          style: _t(E.value)
        }, null, 4)) : J("", !0)
      ]),
      h.value.length > 1 ? (C(), T("div", z_, [
        h.value.length > Fi ? (C(), T("button", {
          key: 0,
          onClick: S[4] || (S[4] = (v) => k("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, S[11] || (S[11] = [
          p("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, W_)) : J("", !0),
        p("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          p("div", {
            class: "thumbnails-track",
            style: _t({ transform: `translateX(-${l.value * (tE + 8)}px)` })
          }, [
            (C(!0), T(ue, null, Ae(h.value, (v, O) => (C(), T("button", {
              key: O,
              onClick: (I) => D(O),
              class: Qe(["thumbnail", { active: O === n.value }]),
              "aria-label": `View image ${O + 1}`
            }, [
              p("img", {
                src: v.thumbnail || v.src,
                alt: v.alt,
                class: "w-full h-full object-contain"
              }, null, 8, Y_)
            ], 10, G_))), 128))
          ], 4)
        ], 512),
        h.value.length > Fi ? (C(), T("button", {
          key: 1,
          onClick: S[5] || (S[5] = (v) => k("next")),
          disabled: l.value >= h.value.length - Fi,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, S[12] || (S[12] = [
          p("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, J_)) : J("", !0)
      ])) : J("", !0),
      h.value.length > 1 && r.value ? (C(), T("div", Q_, [
        (C(!0), T(ue, null, Ae(h.value, (v, O) => (C(), T("button", {
          key: O,
          onClick: (I) => D(O),
          class: Qe(["swiper-dot", { active: O === n.value }]),
          "aria-label": `Go to image ${O + 1}`
        }, null, 10, X_))), 128))
      ])) : J("", !0),
      (C(), Ut(ls, { to: "body" }, [
        i.value ? (C(), T("div", {
          key: 0,
          class: "lightbox",
          onClick: f
        }, [
          p("button", {
            onClick: f,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, S[13] || (S[13] = [
            p("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          h.value.length > 1 ? (C(), T("button", {
            key: 0,
            onClick: S[6] || (S[6] = nn((v) => _("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, S[14] || (S[14] = [
            p("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : J("", !0),
          p("div", {
            class: "lightbox-image-wrapper",
            onClick: S[7] || (S[7] = nn(() => {
            }, ["stop"]))
          }, [
            p("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, Z_)
          ]),
          h.value.length > 1 ? (C(), T("button", {
            key: 1,
            onClick: S[8] || (S[8] = nn((v) => _("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, S[15] || (S[15] = [
            p("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : J("", !0),
          p("div", eE, Y(n.value + 1) + " / " + Y(h.value.length), 1)
        ])) : J("", !0)
      ]))
    ]));
  }
}, sE = /* @__PURE__ */ qt(nE, [["__scopeId", "data-v-a7c1d2a3"]]), iE = { class: "product-info" }, oE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, rE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, lE = { class: "price-wrapper mb-6" }, aE = { class: "flex items-baseline gap-3" }, cE = { class: "text-3xl font-semibold text-gray-900" }, uE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, dE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, fE = {
  key: 1,
  class: "mb-6"
}, pE = ["product", "current-variant"], hE = ["value"], mE = { class: "mb-4" }, gE = ["max"], yE = { class: "mb-4" }, vE = {
  key: 0,
  class: "text-red-600 font-medium"
}, bE = {
  key: 1,
  class: "text-amber-600"
}, _E = {
  key: 2,
  class: "text-green-600"
}, EE = { class: "flex flex-col sm:flex-row gap-3" }, NE = ["disabled"], wE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, xE = { key: 1 }, SE = { key: 2 }, CE = ["disabled"], kE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, OE = ["innerHTML"], TE = { class: "space-y-4" }, DE = {
  key: 0,
  class: "group"
}, VE = ["innerHTML"], $E = {
  key: 1,
  class: "group"
}, AE = { class: "mt-8 pt-8 border-t" }, IE = { class: "flex gap-3" }, ME = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, PE = {
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
    var D;
    const n = e, s = t, i = X(n.product.selected_or_first_available_variant || ((D = n.product.variants) == null ? void 0 : D[0]) || {}), o = X(1), r = X(!1), l = X(!1), a = ae(() => i.value.inventory_policy === "continue" ? 999 : Math.min(i.value.inventory_quantity || 10, 10)), u = ae(() => {
      var k;
      return (k = n.product.options) == null ? void 0 : k.some(
        (y) => y.name.toLowerCase() === "size" || y.name.toLowerCase() === "taille"
      );
    }), d = (k) => `$${(k / 100).toFixed(2)}`, c = (k) => {
      i.value = k, s("variant-change", k);
      const y = new URL(window.location);
      y.searchParams.set("variant", k.id), window.history.replaceState({}, "", y);
    }, h = async () => {
      var y;
      r.value = !0;
      const k = new FormData();
      k.append("id", i.value.id), k.append("quantity", o.value);
      try {
        await ((y = window.OrionCart) == null ? void 0 : y.addItem(k));
        const f = event.target, _ = f.textContent;
        f.textContent = "✓ Added to Cart", setTimeout(() => {
          f.textContent = _;
        }, 2e3);
      } catch (f) {
        console.error("Failed to add to cart:", f), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await h(), window.location.href = "/checkout";
    }, N = (k) => {
      const y = window.location.href, f = n.product.title, _ = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(y)}&text=${encodeURIComponent(f)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(y)}&description=${encodeURIComponent(f)}`
      };
      _[k] && window.open(_[k], "_blank", "width=600,height=400");
    }, E = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (k) {
        console.error("Failed to copy link:", k);
      }
    };
    return en(() => n.product.selected_variant, (k) => {
      k && (i.value = k);
    }), (k, y) => (C(), T("div", iE, [
      p("h1", oE, Y(e.product.title), 1),
      e.product.vendor ? (C(), T("p", rE, " by " + Y(e.product.vendor), 1)) : J("", !0),
      p("div", lE, [
        p("div", aE, [
          p("span", cE, Y(d(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (C(), T("span", uE, Y(d(i.value.compare_at_price)), 1)) : J("", !0)
        ]),
        i.value.compare_at_price > i.value.price ? (C(), T("p", dE, " Save " + Y(d(i.value.compare_at_price - i.value.price)) + " (" + Y(Math.round((1 - i.value.price / i.value.compare_at_price) * 100)) + "% off) ", 1)) : J("", !0)
      ]),
      e.product.has_only_default_variant ? J("", !0) : (C(), T("div", fE, [
        p("product-variant-picker", {
          product: e.product,
          "current-variant": i.value,
          onVariantChange: c
        }, null, 40, pE)
      ])),
      p("form", {
        onSubmit: nn(h, ["prevent"]),
        class: "mb-8"
      }, [
        p("input", {
          type: "hidden",
          name: "id",
          value: i.value.id
        }, null, 8, hE),
        p("div", mE, [
          y[4] || (y[4] = p("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          pt(p("quantity-selector", {
            "onUpdate:modelValue": y[0] || (y[0] = (f) => o.value = f),
            min: 1,
            max: a.value
          }, null, 8, gE), [
            [Rn, o.value]
          ])
        ]),
        p("div", yE, [
          i.value.available ? i.value.inventory_quantity && i.value.inventory_quantity <= 10 ? (C(), T("p", bE, " Only " + Y(i.value.inventory_quantity) + " left in stock ", 1)) : (C(), T("p", _E, " ✓ In Stock ")) : (C(), T("p", vE, " Out of Stock "))
        ]),
        p("div", EE, [
          p("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !i.value.available || r.value
          }, [
            r.value ? (C(), T("span", wE, y[5] || (y[5] = [
              p("svg", {
                class: "animate-spin h-5 w-5",
                viewBox: "0 0 24 24"
              }, [
                p("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  fill: "none"
                }),
                p("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1),
              je(" Adding... ", -1)
            ]))) : i.value.available ? (C(), T("span", SE, " Add to Cart ")) : (C(), T("span", xE, " Sold Out "))
          ], 8, NE),
          e.showBuyNow ? (C(), T("button", {
            key: 0,
            type: "button",
            onClick: m,
            class: "btn btn-secondary flex-1",
            disabled: !i.value.available
          }, " Buy Now ", 8, CE)) : J("", !0)
        ])
      ], 32),
      e.product.description ? (C(), T("div", kE, [
        y[6] || (y[6] = p("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        p("div", {
          innerHTML: e.product.description
        }, null, 8, OE)
      ])) : J("", !0),
      p("div", TE, [
        y[9] || (y[9] = xs('<details class="group" data-v-6a5eb736><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-6a5eb736><span class="font-medium" data-v-6a5eb736>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6a5eb736><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-6a5eb736></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-6a5eb736><p class="mb-2" data-v-6a5eb736>Free shipping on orders over $50.</p><p class="mb-2" data-v-6a5eb736>Standard shipping typically takes 3-5 business days.</p><p data-v-6a5eb736>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (C(), T("details", DE, [
          y[7] || (y[7] = p("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
            p("span", { class: "font-medium" }, "Care Instructions"),
            p("svg", {
              class: "w-5 h-5 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          p("div", {
            class: "py-4 text-sm text-gray-600",
            innerHTML: e.product.care_instructions
          }, null, 8, VE)
        ])) : J("", !0),
        u.value ? (C(), T("details", $E, y[8] || (y[8] = [
          xs('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-6a5eb736><span class="font-medium" data-v-6a5eb736>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6a5eb736><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-6a5eb736></path></svg></summary><div class="py-4" data-v-6a5eb736><table class="w-full text-sm" data-v-6a5eb736><thead data-v-6a5eb736><tr class="border-b" data-v-6a5eb736><th class="text-left py-2" data-v-6a5eb736>Size</th><th class="text-left py-2" data-v-6a5eb736>Chest</th><th class="text-left py-2" data-v-6a5eb736>Length</th></tr></thead><tbody data-v-6a5eb736><tr class="border-b" data-v-6a5eb736><td class="py-2" data-v-6a5eb736>S</td><td class="py-2" data-v-6a5eb736>36&quot;</td><td class="py-2" data-v-6a5eb736>28&quot;</td></tr><tr class="border-b" data-v-6a5eb736><td class="py-2" data-v-6a5eb736>M</td><td class="py-2" data-v-6a5eb736>40&quot;</td><td class="py-2" data-v-6a5eb736>29&quot;</td></tr><tr class="border-b" data-v-6a5eb736><td class="py-2" data-v-6a5eb736>L</td><td class="py-2" data-v-6a5eb736>44&quot;</td><td class="py-2" data-v-6a5eb736>30&quot;</td></tr><tr data-v-6a5eb736><td class="py-2" data-v-6a5eb736>XL</td><td class="py-2" data-v-6a5eb736>48&quot;</td><td class="py-2" data-v-6a5eb736>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : J("", !0)
      ]),
      p("div", AE, [
        y[14] || (y[14] = p("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        p("div", IE, [
          p("button", {
            onClick: y[1] || (y[1] = (f) => N("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, y[10] || (y[10] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          p("button", {
            onClick: y[2] || (y[2] = (f) => N("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, y[11] || (y[11] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          p("button", {
            onClick: y[3] || (y[3] = (f) => N("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, y[12] || (y[12] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          p("button", {
            onClick: E,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            y[13] || (y[13] = p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              })
            ], -1)),
            l.value ? (C(), T("span", ME, " Link copied! ")) : J("", !0)
          ])
        ])
      ])
    ]));
  }
}, RE = /* @__PURE__ */ qt(PE, [["__scopeId", "data-v-6a5eb736"]]), LE = { class: "cart-item" }, FE = { class: "flex gap-4" }, BE = { class: "cart-item-image" }, jE = ["href"], HE = ["src", "alt"], UE = { class: "cart-item-details flex-1" }, qE = { class: "flex justify-between items-start mb-2" }, KE = { class: "font-medium text-gray-900" }, zE = ["href"], WE = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, GE = {
  key: 1,
  class: "mt-2 space-y-1"
}, YE = { class: "font-medium" }, JE = { class: "text-right lg:hidden" }, QE = { class: "font-medium text-gray-900" }, XE = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, ZE = {
  key: 0,
  class: "mb-2"
}, e2 = { class: "flex items-center justify-between mt-3" }, t2 = { class: "flex items-center gap-3" }, n2 = ["max", "disabled"], s2 = ["disabled"], i2 = { class: "text-right hidden lg:block" }, o2 = { class: "font-medium text-gray-900" }, r2 = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, l2 = {
  key: 1,
  class: "text-xs text-green-600 font-medium"
}, a2 = {
  key: 1,
  class: "text-xs text-amber-600 mt-2"
}, c2 = {
  key: 2,
  class: "text-xs text-red-600 mt-2"
}, u2 = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = X(n.item.quantity), o = X(!1), r = X(""), l = ae(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = ae(() => {
      var m;
      return ((m = n.item.variant) == null ? void 0 : m.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), u = (m) => `$${(m / 100).toFixed(2)}`, d = () => {
      const m = n.item.original_line_price - n.item.final_line_price;
      return Math.round(m / n.item.original_line_price * 100);
    }, c = async (m) => {
      if (!o.value) {
        o.value = !0, r.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: m
          }), m === 0 && s("remove", n.item.key);
        } catch (N) {
          console.error("Failed to update quantity:", N), r.value = "Failed to update quantity. Please try again.", i.value = n.item.quantity;
        } finally {
          o.value = !1;
        }
      }
    }, h = async () => {
      if (!o.value) {
        o.value = !0, r.value = "";
        try {
          await s("remove", n.item.key);
        } catch (m) {
          console.error("Failed to remove item:", m), r.value = "Failed to remove item. Please try again.";
        } finally {
          o.value = !1;
        }
      }
    };
    return en(() => n.item.quantity, (m) => {
      i.value = m;
    }), (m, N) => (C(), T("div", LE, [
      p("div", FE, [
        p("div", BE, [
          p("a", {
            href: e.item.url,
            class: "block"
          }, [
            p("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "w-full h-full object-cover rounded-md",
              loading: "lazy"
            }, null, 8, HE)
          ], 8, jE)
        ]),
        p("div", UE, [
          p("div", qE, [
            p("div", null, [
              p("h3", KE, [
                p("a", {
                  href: e.item.url,
                  class: "hover:text-red-600 transition-colors"
                }, Y(e.item.product_title), 9, zE)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (C(), T("p", WE, Y(e.item.variant_title), 1)) : J("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (C(), T("div", GE, [
                (C(!0), T(ue, null, Ae(e.item.properties, (E, D) => (C(), T("p", {
                  key: D,
                  class: "text-xs text-gray-600"
                }, [
                  p("span", YE, Y(D) + ":", 1),
                  je(" " + Y(E), 1)
                ]))), 128))
              ])) : J("", !0)
            ]),
            p("div", JE, [
              p("p", QE, Y(u(e.item.final_line_price)), 1),
              e.item.original_line_price > e.item.final_line_price ? (C(), T("p", XE, Y(u(e.item.original_line_price)), 1)) : J("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (C(), T("div", ZE, [
            (C(!0), T(ue, null, Ae(e.item.discounts, (E) => (C(), T("div", {
              key: E.id,
              class: "inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded"
            }, [
              N[1] || (N[1] = p("svg", {
                class: "w-3 h-3",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                p("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              je(" " + Y(E.title) + " (-" + Y(u(E.amount)) + ") ", 1)
            ]))), 128))
          ])) : J("", !0),
          p("div", e2, [
            p("div", t2, [
              pt(p("quantity-selector", {
                "onUpdate:modelValue": N[0] || (N[0] = (E) => i.value = E),
                min: 0,
                max: l.value,
                "on:update:modelValue": c,
                disabled: o.value,
                class: "w-24"
              }, null, 40, n2), [
                [Rn, i.value]
              ]),
              p("button", {
                type: "button",
                onClick: h,
                class: "text-sm text-gray-500 hover:text-red-600 transition-colors",
                disabled: o.value
              }, Y(o.value ? "Removing..." : "Remove"), 9, s2)
            ]),
            p("div", i2, [
              p("p", o2, Y(u(e.item.final_line_price)), 1),
              e.item.original_line_price > e.item.final_line_price ? (C(), T("p", r2, Y(u(e.item.original_line_price)), 1)) : J("", !0),
              e.item.original_line_price > e.item.final_line_price ? (C(), T("p", l2, " Save " + Y(d()) + "% ", 1)) : J("", !0)
            ])
          ]),
          a.value ? (C(), T("p", a2, " Only " + Y(e.item.variant.inventory_quantity) + " left in stock ", 1)) : J("", !0),
          r.value ? (C(), T("p", c2, Y(r.value), 1)) : J("", !0)
        ])
      ])
    ]));
  }
}, d2 = /* @__PURE__ */ qt(u2, [["__scopeId", "data-v-e99b3eca"]]), f2 = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, p2 = { class: "space-y-3 mb-4" }, h2 = { class: "flex justify-between text-sm" }, m2 = { class: "text-gray-600" }, g2 = { class: "font-medium text-gray-900" }, y2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, v2 = {
  key: 1,
  class: "flex justify-between text-sm"
}, b2 = { class: "text-gray-900" }, _2 = {
  key: 2,
  class: "flex justify-between text-sm"
}, E2 = { class: "text-gray-900" }, N2 = { class: "border-t pt-4 mb-6" }, w2 = { class: "flex justify-between items-baseline" }, x2 = { class: "text-right" }, S2 = { class: "text-xl font-bold text-gray-900" }, C2 = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, k2 = { class: "mb-6" }, O2 = { class: "group" }, T2 = { class: "mt-3" }, D2 = ["disabled"], V2 = ["disabled"], $2 = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, A2 = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, I2 = ["disabled"], M2 = {
  key: 0,
  class: "flex items-center gap-2"
}, P2 = { key: 1 }, R2 = {
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
    const n = e, s = t, i = X(""), o = X(""), r = X(""), l = X(!1), a = X(!1), u = ae(() => n.cart.item_count || 0), d = ae(() => n.cart.total_price || 0), c = ae(() => n.cart.original_total_price || n.cart.total_price || 0), h = ae(() => n.cart.total_discount || 0), m = ae(() => d.value >= 5e3 ? 0 : 500), N = ae(() => Math.round(d.value * 0.1)), E = (y) => `$${(y / 100).toFixed(2)}`, D = async () => {
      var y;
      if (!(!i.value.trim() || l.value)) {
        l.value = !0, o.value = "", r.value = "";
        try {
          const f = new FormData();
          f.append("discount_code", i.value);
          const _ = await fetch("/discount/apply", {
            method: "POST",
            body: f
          });
          if (_.ok)
            r.value = "Promo code applied successfully!", i.value = "", await ((y = window.OrionCart) == null ? void 0 : y.fetchCart());
          else {
            const w = await _.json();
            o.value = w.message || "Invalid promo code";
          }
        } catch (f) {
          console.error("Failed to apply promo code:", f), o.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, k = async () => {
      if (!(u.value === 0 || a.value)) {
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
    return (y, f) => (C(), T("div", f2, [
      f[8] || (f[8] = p("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      p("div", p2, [
        p("div", h2, [
          p("span", m2, "Subtotal (" + Y(u.value) + " " + Y(u.value === 1 ? "item" : "items") + ")", 1),
          p("span", g2, Y(E(c.value)), 1)
        ]),
        h.value > 0 ? (C(), T("div", y2, [
          f[1] || (f[1] = p("span", { class: "flex items-center gap-1" }, [
            p("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              p("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            je(" Discounts ")
          ], -1)),
          p("span", null, "-" + Y(E(h.value)), 1)
        ])) : J("", !0),
        e.showShipping ? (C(), T("div", v2, [
          f[2] || (f[2] = p("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          p("span", b2, Y(m.value === 0 ? "Free" : E(m.value)), 1)
        ])) : J("", !0),
        e.showTax ? (C(), T("div", _2, [
          f[3] || (f[3] = p("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          p("span", E2, Y(E(N.value)), 1)
        ])) : J("", !0)
      ]),
      p("div", N2, [
        p("div", w2, [
          f[4] || (f[4] = p("span", { class: "text-lg font-semibold" }, "Total", -1)),
          p("div", x2, [
            p("span", S2, Y(E(d.value)), 1),
            h.value > 0 ? (C(), T("p", C2, " You saved " + Y(E(h.value)) + "! ", 1)) : J("", !0)
          ])
        ])
      ]),
      p("div", k2, [
        p("details", O2, [
          f[5] || (f[5] = p("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            p("span", null, "Have a promo code?"),
            p("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          p("div", T2, [
            p("form", {
              onSubmit: nn(D, ["prevent"]),
              class: "flex gap-2"
            }, [
              pt(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (_) => i.value = _),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, D2), [
                [Rn, i.value]
              ]),
              p("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !i.value.trim() || l.value
              }, Y(l.value ? "Applying..." : "Apply"), 9, V2)
            ], 32),
            o.value ? (C(), T("p", $2, Y(o.value), 1)) : J("", !0),
            r.value ? (C(), T("p", A2, Y(r.value), 1)) : J("", !0)
          ])
        ])
      ]),
      p("button", {
        onClick: k,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: u.value === 0 || a.value
      }, [
        a.value ? (C(), T("span", M2, f[6] || (f[6] = [
          p("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            p("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            p("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          je(" Processing... ", -1)
        ]))) : (C(), T("span", P2, f[7] || (f[7] = [
          je(" Proceed to Checkout ", -1),
          p("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 8, I2),
      f[9] || (f[9] = xs('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, L2 = /* @__PURE__ */ qt(R2, [["__scopeId", "data-v-d638da26"]]), F2 = /* @__PURE__ */ tt(_v), B2 = /* @__PURE__ */ tt(qv), j2 = /* @__PURE__ */ tt(l1), H2 = /* @__PURE__ */ tt(p1), U2 = /* @__PURE__ */ tt(S1), q2 = /* @__PURE__ */ tt(L1), K2 = /* @__PURE__ */ tt(vb), z2 = /* @__PURE__ */ tt(Mb), W2 = /* @__PURE__ */ tt(r_), G2 = /* @__PURE__ */ tt(j_), Y2 = /* @__PURE__ */ tt(sE), J2 = /* @__PURE__ */ tt(RE), Q2 = /* @__PURE__ */ tt(d2), X2 = /* @__PURE__ */ tt(L2);
customElements.define("cart-drawer", F2);
customElements.define("mobile-menu", B2);
customElements.define("product-variant-picker", j2);
customElements.define("quantity-selector", H2);
customElements.define("sticky-header", U2);
customElements.define("main-header", q2);
customElements.define("site-footer", K2);
customElements.define("product-card", z2);
customElements.define("collection-filters", W2);
customElements.define("collection-grid", G2);
customElements.define("product-gallery", Y2);
customElements.define("product-info", J2);
customElements.define("cart-item", Q2);
customElements.define("cart-summary", X2);
document.addEventListener("DOMContentLoaded", () => {
  window.OrionCart = {
    state: {
      isOpen: !1,
      items: [],
      totalPrice: 0,
      itemCount: 0
    },
    async fetchCart() {
      try {
        const t = await (await fetch(window.routes.cart_url + ".js")).json();
        return this.state.items = t.items, this.state.totalPrice = t.total_price, this.state.itemCount = t.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: t })), t;
      } catch (e) {
        console.error("Failed to fetch cart:", e);
      }
    },
    async addItem(e) {
      try {
        const n = await (await fetch(window.routes.cart_add_url, {
          method: "POST",
          body: e
        })).json();
        return await this.fetchCart(), this.openDrawer(), n;
      } catch (t) {
        console.error("Failed to add item to cart:", t);
      }
    },
    async updateItem(e, t) {
      try {
        const n = new FormData();
        n.append("updates[" + e + "]", t);
        const i = await (await fetch(window.routes.cart_update_url, {
          method: "POST",
          body: n
        })).json();
        return await this.fetchCart(), i;
      } catch (n) {
        console.error("Failed to update cart:", n);
      }
    },
    async removeItem(e) {
      return this.updateItem(e, 0);
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
      t > 0 ? (s.textContent = t, s.style.display = "flex") : s.style.display = "none";
    });
  });
});
