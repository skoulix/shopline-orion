var el = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = el.NODE_ENV !== "production" ? Object.freeze({}) : {}, ms = el.NODE_ENV !== "production" ? Object.freeze([]) : [], Oe = () => {
}, qs = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qo = (e) => e.startsWith("onUpdate:"), de = Object.assign, tl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pf = Object.prototype.hasOwnProperty, me = (e, t) => Pf.call(e, t), q = Array.isArray, Wn = (e) => Ps(e) === "[object Map]", is = (e) => Ps(e) === "[object Set]", sa = (e) => Ps(e) === "[object Date]", Rf = (e) => Ps(e) === "[object RegExp]", se = (e) => typeof e == "function", re = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", Ci = (e) => (he(e) || se(e)) && se(e.then) && se(e.catch), Cc = Object.prototype.toString, Ps = (e) => Cc.call(e), nl = (e) => Ps(e).slice(8, -1), ki = (e) => Ps(e) === "[object Object]", sl = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ Ue(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kc = /* @__PURE__ */ Ue(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Oi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Lf = /-(\w)/g, Se = Oi(
  (e) => e.replace(Lf, (t, n) => n ? n.toUpperCase() : "")
), Ff = /\B([A-Z])/g, Xe = Oi(
  (e) => e.replace(Ff, "-$1").toLowerCase()
), on = Oi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = Oi(
  (e) => e ? `on${on(e)}` : ""
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
}, Zo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ei = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oa;
const Eo = () => oa || (oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const Js = {
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
}, jf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Hf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Uf = /* @__PURE__ */ Ue(Hf), ia = 2;
function qf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let i = 0;
  const r = [];
  for (let l = 0; l < s.length; l++)
    if (i += s[l].length + (o[l] && o[l].length || 0), i >= t) {
      for (let a = l - ia; a <= l + ia || n > i; a++) {
        if (a < 0 || a >= s.length) continue;
        const c = a + 1;
        r.push(
          `${c}${" ".repeat(Math.max(3 - String(c).length, 0))}|  ${s[a]}`
        );
        const d = s[a].length, u = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (i - (d + u)), m = Math.max(
            1,
            n > i ? d - p : n - t
          );
          r.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > i) {
            const p = Math.max(Math.min(n - i, d), 1);
            r.push("   |  " + "^".repeat(p));
          }
          i += d + u;
        }
      }
      break;
    }
  return r.join(`
`);
}
function Nt(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = re(s) ? Oc(s) : Nt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (re(e) || he(e))
    return e;
}
const Kf = /;(?![^(]*\))/g, zf = /:([^]+)/, Wf = /\/\*[^]*?\*\//g;
function Oc(e) {
  const t = {};
  return e.replace(Wf, "").split(Kf).forEach((n) => {
    if (n) {
      const s = n.split(zf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Gf(e) {
  if (!e) return "";
  if (re(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (re(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : Xe(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function Ze(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ze(e[n]);
      s && (t += s + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Yf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !re(t) && (e.class = Ze(t)), n && (e.style = Nt(n)), e;
}
const Jf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Xf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Qf = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Zf = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Tc = /* @__PURE__ */ Ue(Jf), Dc = /* @__PURE__ */ Ue(Xf), Vc = /* @__PURE__ */ Ue(Qf), ep = /* @__PURE__ */ Ue(Zf), $c = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tp = /* @__PURE__ */ Ue($c), ra = /* @__PURE__ */ Ue(
  $c + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ol(e) {
  return !!e || e === "";
}
const np = /* @__PURE__ */ Ue(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), sp = /* @__PURE__ */ Ue(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function op(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const ip = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function rp(e, t) {
  return e.replace(
    ip,
    (n) => `\\${n}`
  );
}
function lp(e, t) {
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
  if (n = yt(e), s = yt(t), n || s)
    return e === t;
  if (n = q(e), s = q(t), n || s)
    return n && s ? lp(e, t) : !1;
  if (n = he(e), s = he(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Mn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ti(e, t) {
  return e.findIndex((n) => Mn(n, t));
}
const Ac = (e) => !!(e && e.__v_isRef === !0), J = (e) => re(e) ? e : e == null ? "" : q(e) || he(e) && (e.toString === Cc || !se(e.toString)) ? Ac(e) ? J(e.value) : JSON.stringify(e, Ic, 2) : String(e), Ic = (e, t) => Ac(t) ? Ic(e, t.value) : Wn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[tr(s, i) + " =>"] = o, n),
    {}
  )
} : is(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => tr(n))
} : yt(t) ? tr(t) : he(t) && !q(t) && !ki(t) ? String(t) : t, tr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Mc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && el.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var be = {};
function Dt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ye;
class il {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ye, !t && Ye && (this.index = (Ye.scopes || (Ye.scopes = [])).push(
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
      const n = Ye;
      try {
        return Ye = this, t();
      } finally {
        Ye = n;
      }
    } else be.NODE_ENV !== "production" && Dt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ye, Ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ye = this.prevScope, this.prevScope = void 0);
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
function ap(e) {
  return new il(e);
}
function rl() {
  return Ye;
}
function Pc(e, t = !1) {
  Ye ? Ye.cleanups.push(e) : be.NODE_ENV !== "production" && !t && Dt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _e;
const nr = /* @__PURE__ */ new WeakSet();
class ro {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ye && Ye.active && Ye.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, nr.has(this) && (nr.delete(this), this.trigger()));
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
    const t = _e, n = Bt;
    _e = this, Bt = !0;
    try {
      return this.fn();
    } finally {
      be.NODE_ENV !== "production" && _e !== this && Dt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Bc(this), _e = t, Bt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cl(t);
      this.deps = this.depsTail = void 0, la(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? nr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    br(this) && this.run();
  }
  get dirty() {
    return br(this);
  }
}
let Rc = 0, Xs, Qs;
function Lc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qs, Qs = e;
    return;
  }
  e.next = Xs, Xs = e;
}
function ll() {
  Rc++;
}
function al() {
  if (--Rc > 0)
    return;
  if (Qs) {
    let t = Qs;
    for (Qs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xs; ) {
    let t = Xs;
    for (Xs = void 0; t; ) {
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
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), cl(s), cp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function br(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (jc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function jc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === lo) || (e.globalVersion = lo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !br(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, s = Bt;
  _e = e, Bt = !0;
  try {
    Fc(e);
    const o = e.fn(e._value);
    (t.version === 0 || it(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    _e = n, Bt = s, Bc(e), e.flags &= -3;
  }
}
function cl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), be.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      cl(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function up(e, t) {
  e.effect instanceof ro && (e = e.effect.fn);
  const n = new ro(e);
  t && de(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function dp(e) {
  e.effect.stop();
}
let Bt = !0;
const Hc = [];
function Ht() {
  Hc.push(Bt), Bt = !1;
}
function Ut() {
  const e = Hc.pop();
  Bt = e === void 0 ? !0 : e;
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
let lo = 0;
class fp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Di {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, be.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!_e || !Bt || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new fp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Uc(n);
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
    this.version++, lo++, this.notify(t);
  }
  notify(t) {
    ll();
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
      al();
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
const ti = /* @__PURE__ */ new WeakMap(), Gn = Symbol(
  be.NODE_ENV !== "production" ? "Object iterate" : ""
), _r = Symbol(
  be.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ao = Symbol(
  be.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Fe(e, t, n) {
  if (Bt && _e) {
    let s = ti.get(e);
    s || ti.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Di()), o.map = s, o.key = n), be.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Zt(e, t, n, s, o, i) {
  const r = ti.get(e);
  if (!r) {
    lo++;
    return;
  }
  const l = (a) => {
    a && (be.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: i
    }) : a.trigger());
  };
  if (ll(), t === "clear")
    r.forEach(l);
  else {
    const a = q(e), c = a && sl(n);
    if (a && n === "length") {
      const d = Number(s);
      r.forEach((u, p) => {
        (p === "length" || p === ao || !yt(p) && p >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), c && l(r.get(ao)), t) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(Gn)), Wn(e) && l(r.get(_r)));
          break;
        case "delete":
          a || (l(r.get(Gn)), Wn(e) && l(r.get(_r)));
          break;
        case "set":
          Wn(e) && l(r.get(Gn));
          break;
      }
  }
  al();
}
function pp(e, t) {
  const n = ti.get(e);
  return n && n.get(t);
}
function ds(e) {
  const t = ae(e);
  return t === e ? t : (Fe(t, "iterate", ao), et(e) ? t : t.map(ze));
}
function Vi(e) {
  return Fe(e = ae(e), "iterate", ao), e;
}
const hp = {
  __proto__: null,
  [Symbol.iterator]() {
    return sr(this, Symbol.iterator, ze);
  },
  concat(...e) {
    return ds(this).concat(
      ...e.map((t) => q(t) ? ds(t) : t)
    );
  },
  entries() {
    return sr(this, "entries", (e) => (e[1] = ze(e[1]), e));
  },
  every(e, t) {
    return ln(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ln(this, "filter", e, t, (n) => n.map(ze), arguments);
  },
  find(e, t) {
    return ln(this, "find", e, t, ze, arguments);
  },
  findIndex(e, t) {
    return ln(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ln(this, "findLast", e, t, ze, arguments);
  },
  findLastIndex(e, t) {
    return ln(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ln(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return or(this, "includes", e);
  },
  indexOf(...e) {
    return or(this, "indexOf", e);
  },
  join(e) {
    return ds(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return or(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ln(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Bs(this, "pop");
  },
  push(...e) {
    return Bs(this, "push", e);
  },
  reduce(e, ...t) {
    return aa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return aa(this, "reduceRight", e, t);
  },
  shift() {
    return Bs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ln(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Bs(this, "splice", e);
  },
  toReversed() {
    return ds(this).toReversed();
  },
  toSorted(e) {
    return ds(this).toSorted(e);
  },
  toSpliced(...e) {
    return ds(this).toSpliced(...e);
  },
  unshift(...e) {
    return Bs(this, "unshift", e);
  },
  values() {
    return sr(this, "values", ze);
  }
};
function sr(e, t, n) {
  const s = Vi(e), o = s[t]();
  return s !== e && !et(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const mp = Array.prototype;
function ln(e, t, n, s, o, i) {
  const r = Vi(e), l = r !== e && !et(e), a = r[t];
  if (a !== mp[t]) {
    const u = a.apply(e, i);
    return l ? ze(u) : u;
  }
  let c = n;
  r !== e && (l ? c = function(u, p) {
    return n.call(this, ze(u), p, e);
  } : n.length > 2 && (c = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const d = a.call(r, c, s);
  return l && o ? o(d) : d;
}
function aa(e, t, n, s) {
  const o = Vi(e);
  let i = n;
  return o !== e && (et(e) ? n.length > 3 && (i = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : i = function(r, l, a) {
    return n.call(this, r, ze(l), a, e);
  }), o[t](i, ...s);
}
function or(e, t, n) {
  const s = ae(e);
  Fe(s, "iterate", ao);
  const o = s[t](...n);
  return (o === -1 || o === !1) && ws(n[0]) ? (n[0] = ae(n[0]), s[t](...n)) : o;
}
function Bs(e, t, n = []) {
  Ht(), ll();
  const s = ae(e)[t].apply(e, n);
  return al(), Ut(), s;
}
const gp = /* @__PURE__ */ Ue("__proto__,__v_isRef,__isVue"), qc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function vp(e) {
  yt(e) || (e = String(e));
  const t = ae(this);
  return Fe(t, "has", e), t.hasOwnProperty(e);
}
class Kc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? Xc : Jc : i ? Yc : Gc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = q(t);
    if (!o) {
      let a;
      if (r && (a = hp[n]))
        return a;
      if (n === "hasOwnProperty")
        return vp;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ve(t) ? t : s
    );
    return (yt(n) ? qc.has(n) : gp(n)) || (o || Fe(t, "get", n), i) ? l : Ve(l) ? r && sl(n) ? l : l.value : he(l) ? o ? Ai(l) : Ns(l) : l;
  }
}
class zc extends Kc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = qt(i);
      if (!et(s) && !qt(s) && (i = ae(i), s = ae(s)), !q(t) && Ve(i) && !Ve(s))
        return a ? !1 : (i.value = s, !0);
    }
    const r = q(t) && sl(n) ? Number(n) < t.length : me(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ve(t) ? t : o
    );
    return t === ae(o) && (r ? it(s, i) && Zt(t, "set", n, s, i) : Zt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = me(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && Zt(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!yt(n) || !qc.has(n)) && Fe(t, "has", n), s;
  }
  ownKeys(t) {
    return Fe(
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
    return be.NODE_ENV !== "production" && Dt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return be.NODE_ENV !== "production" && Dt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const yp = /* @__PURE__ */ new zc(), bp = /* @__PURE__ */ new Wc(), _p = /* @__PURE__ */ new zc(!0), Ep = /* @__PURE__ */ new Wc(!0), Er = (e) => e, Vo = (e) => Reflect.getPrototypeOf(e);
function Np(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = ae(o), r = Wn(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, c = o[e](...s), d = n ? Er : t ? ni : ze;
    return !t && Fe(
      i,
      "iterate",
      a ? _r : Gn
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
function $o(e) {
  return function(...t) {
    if (be.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Dt(
        `${on(e)} operation ${n}failed: target is readonly.`,
        ae(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wp(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      e || (it(o, l) && Fe(r, "get", o), Fe(r, "get", l));
      const { has: a } = Vo(r), c = t ? Er : e ? ni : ze;
      if (a.call(r, o))
        return c(i.get(o));
      if (a.call(r, l))
        return c(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Fe(ae(o), "iterate", Gn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      return e || (it(o, l) && Fe(r, "has", o), Fe(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = ae(l), c = t ? Er : e ? ni : ze;
      return !e && Fe(a, "iterate", Gn), l.forEach((d, u) => o.call(i, c(d), c(u), r));
    }
  };
  return de(
    n,
    e ? {
      add: $o("add"),
      set: $o("set"),
      delete: $o("delete"),
      clear: $o("clear")
    } : {
      add(o) {
        !t && !et(o) && !qt(o) && (o = ae(o));
        const i = ae(this);
        return Vo(i).has.call(i, o) || (i.add(o), Zt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !et(i) && !qt(i) && (i = ae(i));
        const r = ae(this), { has: l, get: a } = Vo(r);
        let c = l.call(r, o);
        c ? be.NODE_ENV !== "production" && ca(r, l, o) : (o = ae(o), c = l.call(r, o));
        const d = a.call(r, o);
        return r.set(o, i), c ? it(i, d) && Zt(r, "set", o, i, d) : Zt(r, "add", o, i), this;
      },
      delete(o) {
        const i = ae(this), { has: r, get: l } = Vo(i);
        let a = r.call(i, o);
        a ? be.NODE_ENV !== "production" && ca(i, r, o) : (o = ae(o), a = r.call(i, o));
        const c = l ? l.call(i, o) : void 0, d = i.delete(o);
        return a && Zt(i, "delete", o, void 0, c), d;
      },
      clear() {
        const o = ae(this), i = o.size !== 0, r = be.NODE_ENV !== "production" ? Wn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && Zt(
          o,
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
  ].forEach((o) => {
    n[o] = Np(o, e, t);
  }), n;
}
function $i(e, t) {
  const n = wp(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    me(n, o) && o in s ? n : s,
    o,
    i
  );
}
const xp = {
  get: /* @__PURE__ */ $i(!1, !1)
}, Sp = {
  get: /* @__PURE__ */ $i(!1, !0)
}, Cp = {
  get: /* @__PURE__ */ $i(!0, !1)
}, kp = {
  get: /* @__PURE__ */ $i(!0, !0)
};
function ca(e, t, n) {
  const s = ae(n);
  if (s !== n && t.call(e, s)) {
    const o = nl(e);
    Dt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Gc = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Jc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap();
function Op(e) {
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
function Tp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Op(nl(e));
}
function Ns(e) {
  return qt(e) ? e : Ii(
    e,
    !1,
    yp,
    xp,
    Gc
  );
}
function Qc(e) {
  return Ii(
    e,
    !1,
    _p,
    Sp,
    Yc
  );
}
function Ai(e) {
  return Ii(
    e,
    !0,
    bp,
    Cp,
    Jc
  );
}
function Rt(e) {
  return Ii(
    e,
    !0,
    Ep,
    kp,
    Xc
  );
}
function Ii(e, t, n, s, o) {
  if (!he(e))
    return be.NODE_ENV !== "production" && Dt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Tp(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function hn(e) {
  return qt(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qt(e) {
  return !!(e && e.__v_isReadonly);
}
function et(e) {
  return !!(e && e.__v_isShallow);
}
function ws(e) {
  return e ? !!e.__v_raw : !1;
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function Zc(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && es(e, "__v_skip", !0), e;
}
const ze = (e) => he(e) ? Ns(e) : e, ni = (e) => he(e) ? Ai(e) : e;
function Ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return tu(e, !1);
}
function eu(e) {
  return tu(e, !0);
}
function tu(e, t) {
  return Ve(e) ? e : new Dp(e, t);
}
class Dp {
  constructor(t, n) {
    this.dep = new Di(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ae(t), this._value = n ? t : ze(t), this.__v_isShallow = n;
  }
  get value() {
    return be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || et(t) || qt(t);
    t = s ? t : ae(t), it(t, n) && (this._rawValue = t, this._value = s ? t : ze(t), be.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Vp(e) {
  e.dep && (be.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function No(e) {
  return Ve(e) ? e.value : e;
}
function $p(e) {
  return se(e) ? e() : No(e);
}
const Ap = {
  get: (e, t, n) => t === "__v_raw" ? e : No(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ve(o) && !Ve(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ul(e) {
  return hn(e) ? e : new Proxy(e, Ap);
}
class Ip {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Di(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function nu(e) {
  return new Ip(e);
}
function Mp(e) {
  be.NODE_ENV !== "production" && !ws(e) && Dt("toRefs() expects a reactive object but received a plain one.");
  const t = q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = su(e, n);
  return t;
}
class Pp {
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
    return pp(ae(this._object), this._key);
  }
}
class Rp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Lp(e, t, n) {
  return Ve(e) ? e : se(e) ? new Rp(e) : he(e) && arguments.length > 1 ? su(e, t, n) : G(e);
}
function su(e, t, n) {
  const s = e[t];
  return Ve(s) ? s : new Pp(e, t, n);
}
class Fp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Di(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = lo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
    this.setter ? this.setter(t) : be.NODE_ENV !== "production" && Dt("Write operation failed: computed value is readonly");
  }
}
function Bp(e, t, n = !1) {
  let s, o;
  se(e) ? s = e : (s = e.get, o = e.set);
  const i = new Fp(s, o, n);
  return be.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const jp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Hp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Ao = {}, si = /* @__PURE__ */ new WeakMap();
let wn;
function Up() {
  return wn;
}
function ou(e, t = !1, n = wn) {
  if (n) {
    let s = si.get(n);
    s || si.set(n, s = []), s.push(e);
  } else be.NODE_ENV !== "production" && !t && Dt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function qp(e, t, n = fe) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, c = (b) => {
    (n.onWarn || Dt)(
      "Invalid watch source: ",
      b,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (b) => o ? b : et(b) || o === !1 || o === 0 ? fn(b, 1) : fn(b);
  let u, p, m, E, v = !1, D = !1;
  if (Ve(e) ? (p = () => e.value, v = et(e)) : hn(e) ? (p = () => d(e), v = !0) : q(e) ? (D = !0, v = e.some((b) => hn(b) || et(b)), p = () => e.map((b) => {
    if (Ve(b))
      return b.value;
    if (hn(b))
      return d(b);
    if (se(b))
      return a ? a(b, 2) : b();
    be.NODE_ENV !== "production" && c(b);
  })) : se(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Ht();
      try {
        m();
      } finally {
        Ut();
      }
    }
    const b = wn;
    wn = u;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      wn = b;
    }
  } : (p = Oe, be.NODE_ENV !== "production" && c(e)), t && o) {
    const b = p, V = o === !0 ? 1 / 0 : o;
    p = () => fn(b(), V);
  }
  const C = rl(), y = () => {
    u.stop(), C && C.active && tl(C.effects, u);
  };
  if (i && t) {
    const b = t;
    t = (...V) => {
      b(...V), y();
    };
  }
  let f = D ? new Array(e.length).fill(Ao) : Ao;
  const w = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const V = u.run();
        if (o || v || (D ? V.some((P, S) => it(P, f[S])) : it(V, f))) {
          m && m();
          const P = wn;
          wn = u;
          try {
            const S = [
              V,
              // pass undefined as the old value when it's changed for the first time
              f === Ao ? void 0 : D && f[0] === Ao ? [] : f,
              E
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
        u.run();
  };
  return l && l(w), u = new ro(p), u.scheduler = r ? () => r(w, !1) : w, E = (b) => ou(b, !1, u), m = u.onStop = () => {
    const b = si.get(u);
    if (b) {
      if (a)
        a(b, 4);
      else
        for (const V of b) V();
      si.delete(u);
    }
  }, be.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? w(!0) : f = u.run() : r ? r(w.bind(null, !0), !0) : u.run(), y.pause = u.pause.bind(u), y.resume = u.resume.bind(u), y.stop = y, y;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ve(e))
    fn(e.value, t, n);
  else if (q(e))
    for (let s = 0; s < e.length; s++)
      fn(e[s], t, n);
  else if (is(e) || Wn(e))
    e.forEach((s) => {
      fn(s, t, n);
    });
  else if (ki(e)) {
    for (const s in e)
      fn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && fn(e[s], t, n);
  }
  return e;
}
var N = {};
const Yn = [];
function gs(e) {
  Yn.push(e);
}
function vs() {
  Yn.pop();
}
let ir = !1;
function M(e, ...t) {
  if (ir) return;
  ir = !0, Ht();
  const n = Yn.length ? Yn[Yn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Kp();
  if (s)
    rs(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Ki(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...zp(o)), console.warn(...i);
  }
  Ut(), ir = !1;
}
function Kp() {
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
function zp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Wp(n));
  }), t;
}
function Wp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Ki(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...Gp(e.props), i] : [o + i];
}
function Gp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...iu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function iu(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ve(t) ? (t = iu(e, ae(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : se(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ae(t), n ? t : [`${e}=`, t]);
}
function dl(e, t) {
  N.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? M(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && M(`${t} is NaN - the duration expression might be incorrect.`));
}
const Yp = {
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
}, Mi = {
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
  } catch (o) {
    Ln(o, t, n);
  }
}
function Vt(e, t, n, s) {
  if (se(e)) {
    const o = rs(e, t, n, s);
    return o && Ci(o) && o.catch((i) => {
      Ln(i, t, n);
    }), o;
  }
  if (q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Vt(e[i], t, n, s));
    return o;
  } else N.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ln(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = N.NODE_ENV !== "production" ? Mi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ht(), rs(i, null, 10, [
        e,
        a,
        c
      ]), Ut();
      return;
    }
  }
  Jp(e, n, o, s, r);
}
function Jp(e, t, n, s = !0, o = !1) {
  if (N.NODE_ENV !== "production") {
    const i = Mi[t];
    if (n && gs(n), M(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && vs(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const rt = [];
let Gt = -1;
const ys = [];
let xn = null, hs = 0;
const ru = /* @__PURE__ */ Promise.resolve();
let oi = null;
const Xp = 100;
function wo(e) {
  const t = oi || ru;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qp(e) {
  let t = Gt + 1, n = rt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = rt[s], i = co(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Pi(e) {
  if (!(e.flags & 1)) {
    const t = co(e), n = rt[rt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= co(n) ? rt.push(e) : rt.splice(Qp(t), 0, e), e.flags |= 1, lu();
  }
}
function lu() {
  oi || (oi = ru.then(au));
}
function xs(e) {
  q(e) ? ys.push(...e) : xn && e.id === -1 ? xn.splice(hs + 1, 0, e) : e.flags & 1 || (ys.push(e), e.flags |= 1), lu();
}
function ua(e, t, n = Gt + 1) {
  for (N.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < rt.length; n++) {
    const s = rt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || N.NODE_ENV !== "production" && fl(t, s))
        continue;
      rt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ii(e) {
  if (ys.length) {
    const t = [...new Set(ys)].sort(
      (n, s) => co(n) - co(s)
    );
    if (ys.length = 0, xn) {
      xn.push(...t);
      return;
    }
    for (xn = t, N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), hs = 0; hs < xn.length; hs++) {
      const n = xn[hs];
      N.NODE_ENV !== "production" && fl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, hs = 0;
  }
}
const co = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function au(e) {
  N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = N.NODE_ENV !== "production" ? (n) => fl(e, n) : Oe;
  try {
    for (Gt = 0; Gt < rt.length; Gt++) {
      const n = rt[Gt];
      if (n && !(n.flags & 8)) {
        if (N.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), rs(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Gt < rt.length; Gt++) {
      const n = rt[Gt];
      n && (n.flags &= -2);
    }
    Gt = -1, rt.length = 0, ii(e), oi = null, (rt.length || ys.length) && au(e);
  }
}
function fl(e, t) {
  const n = e.get(t) || 0;
  if (n > Xp) {
    const s = t.i, o = s && Os(s.type);
    return Ln(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Lt = !1;
const Uo = /* @__PURE__ */ new Map();
N.NODE_ENV !== "production" && (Eo().__VUE_HMR_RUNTIME__ = {
  createRecord: rr(cu),
  rerender: rr(th),
  reload: rr(nh)
});
const ts = /* @__PURE__ */ new Map();
function Zp(e) {
  const t = e.type.__hmrId;
  let n = ts.get(t);
  n || (cu(t, e.type), n = ts.get(t)), n.instances.add(e);
}
function eh(e) {
  ts.get(e.type.__hmrId).instances.delete(e);
}
function cu(e, t) {
  return ts.has(e) ? !1 : (ts.set(e, {
    initialDef: ri(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ri(e) {
  return yd(e) ? e.__vccOpts : e;
}
function th(e, t) {
  const n = ts.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, ri(s.type).render = t), s.renderCache = [], Lt = !0, s.update(), Lt = !1;
  }));
}
function nh(e, t) {
  const n = ts.get(e);
  if (!n) return;
  t = ri(t), da(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = ri(i.type);
    let l = Uo.get(r);
    l || (r !== n.initialDef && da(r, t), Uo.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Pi(() => {
      Lt = !0, i.parent.update(), Lt = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  xs(() => {
    Uo.clear();
  });
}
function da(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function rr(e) {
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
let Mt, Ks = [], Nr = !1;
function xo(e, ...t) {
  Mt ? Mt.emit(e, ...t) : Nr || Ks.push({ event: e, args: t });
}
function pl(e, t) {
  var n, s;
  Mt = e, Mt ? (Mt.enabled = !0, Ks.forEach(({ event: o, args: i }) => Mt.emit(o, ...i)), Ks = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    pl(i, t);
  }), setTimeout(() => {
    Mt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Nr = !0, Ks = []);
  }, 3e3)) : (Nr = !0, Ks = []);
}
function sh(e, t) {
  xo("app:init", e, t, {
    Fragment: ue,
    Text: nn,
    Comment: Te,
    Static: An
  });
}
function oh(e) {
  xo("app:unmount", e);
}
const wr = /* @__PURE__ */ hl(
  "component:added"
  /* COMPONENT_ADDED */
), uu = /* @__PURE__ */ hl(
  "component:updated"
  /* COMPONENT_UPDATED */
), ih = /* @__PURE__ */ hl(
  "component:removed"
  /* COMPONENT_REMOVED */
), rh = (e) => {
  Mt && typeof Mt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Mt.cleanupBuffer(e) && ih(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hl(e) {
  return (t) => {
    xo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const lh = /* @__PURE__ */ du(
  "perf:start"
  /* PERFORMANCE_START */
), ah = /* @__PURE__ */ du(
  "perf:end"
  /* PERFORMANCE_END */
);
function du(e) {
  return (t, n, s) => {
    xo(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ch(e, t, n) {
  xo(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Pe = null, Ri = null;
function uo(e) {
  const t = Pe;
  return Pe = e, Ri = e && e.type.__scopeId || null, t;
}
function uh(e) {
  Ri = e;
}
function dh() {
  Ri = null;
}
const fh = (e) => kt;
function kt(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && $r(-1);
    const i = uo(t);
    let r;
    try {
      r = e(...o);
    } finally {
      uo(i), s._d && $r(1);
    }
    return N.NODE_ENV !== "production" && uu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function fu(e) {
  kc(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function mt(e, t) {
  if (Pe === null)
    return N.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = Co(Pe), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = fe] = t[o];
    i && (se(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && fn(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Jt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (Ht(), Vt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ut());
  }
}
const pu = Symbol("_vte"), hu = (e) => e.__isTeleport, Jn = (e) => e && (e.disabled || e.disabled === ""), fa = (e) => e && (e.defer || e.defer === ""), pa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ha = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xr = (e, t) => {
  const n = e && e.to;
  if (re(n))
    if (t) {
      const s = t(n);
      return N.NODE_ENV !== "production" && !s && !Jn(e) && M(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return N.NODE_ENV !== "production" && M(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return N.NODE_ENV !== "production" && !n && !Jn(e) && M(`Invalid Teleport target: ${n}`), n;
}, mu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: E, createText: v, createComment: D }
    } = c, C = Jn(t.props);
    let { shapeFlag: y, children: f, dynamicChildren: w } = t;
    if (N.NODE_ENV !== "production" && Lt && (a = !1, w = null), e == null) {
      const b = t.el = N.NODE_ENV !== "production" ? D("teleport start") : v(""), V = t.anchor = N.NODE_ENV !== "production" ? D("teleport end") : v("");
      m(b, n, s), m(V, n, s);
      const P = (_, O) => {
        y & 16 && (o && o.isCE && (o.ce._teleportTarget = _), d(
          f,
          _,
          O,
          o,
          i,
          r,
          l,
          a
        ));
      }, S = () => {
        const _ = t.target = xr(t.props, E), O = gu(_, t, v, m);
        _ ? (r !== "svg" && pa(_) ? r = "svg" : r !== "mathml" && ha(_) && (r = "mathml"), C || (P(_, O), qo(t, !1))) : N.NODE_ENV !== "production" && !C && M(
          "Invalid Teleport target on mount:",
          _,
          `(${typeof _})`
        );
      };
      C && (P(n, V), qo(t, !0)), fa(t.props) ? (t.el.__isMounted = !1, Le(() => {
        S(), delete t.el.__isMounted;
      }, i)) : S();
    } else {
      if (fa(t.props) && e.el.__isMounted === !1) {
        Le(() => {
          mu.process(
            e,
            t,
            n,
            s,
            o,
            i,
            r,
            l,
            a,
            c
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const b = t.anchor = e.anchor, V = t.target = e.target, P = t.targetAnchor = e.targetAnchor, S = Jn(e.props), _ = S ? n : V, O = S ? b : P;
      if (r === "svg" || pa(V) ? r = "svg" : (r === "mathml" || ha(V)) && (r = "mathml"), w ? (p(
        e.dynamicChildren,
        w,
        _,
        o,
        i,
        r,
        l
      ), to(e, t, N.NODE_ENV === "production")) : a || u(
        e,
        t,
        _,
        O,
        o,
        i,
        r,
        l,
        !1
      ), C)
        S ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Io(
          t,
          n,
          b,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = t.target = xr(
          t.props,
          E
        );
        I ? Io(
          t,
          I,
          null,
          c,
          0
        ) : N.NODE_ENV !== "production" && M(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else S && Io(
        t,
        V,
        P,
        c,
        1
      );
      qo(t, C);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: d,
      target: u,
      props: p
    } = e;
    if (u && (o(c), o(d)), i && o(a), r & 16) {
      const m = i || !Jn(p);
      for (let E = 0; E < l.length; E++) {
        const v = l[E];
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
  move: Io,
  hydrate: ph
};
function Io(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: d } = e, u = i === 2;
  if (u && s(r, t, n), (!u || Jn(d)) && a & 16)
    for (let p = 0; p < c.length; p++)
      o(
        c[p],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function ph(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const p = t.target = xr(
    t.props,
    a
  );
  if (p) {
    const m = Jn(t.props), E = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = u(
          r(e),
          t,
          l(e),
          n,
          s,
          o,
          i
        ), t.targetStart = E, t.targetAnchor = E && r(E);
      else {
        t.anchor = r(e);
        let v = E;
        for (; v; ) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor")
              t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, p._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          v = r(v);
        }
        t.targetAnchor || gu(p, t, d, c), u(
          E && r(E),
          t,
          p,
          n,
          s,
          o,
          i
        );
      }
    qo(t, m);
  }
  return t.anchor && r(t.anchor);
}
const ls = mu;
function qo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function gu(e, t, n, s) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[pu] = i, e && (s(o, e), s(i, e)), i;
}
const Sn = Symbol("_leaveCb"), Mo = Symbol("_enterCb");
function ml() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return We(() => {
    e.isMounted = !0;
  }), ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ct = [Function, Array], gl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ct,
  onEnter: Ct,
  onAfterEnter: Ct,
  onEnterCancelled: Ct,
  // leave
  onBeforeLeave: Ct,
  onLeave: Ct,
  onAfterLeave: Ct,
  onLeaveCancelled: Ct,
  // appear
  onBeforeAppear: Ct,
  onAppear: Ct,
  onAfterAppear: Ct,
  onAppearCancelled: Ct
}, vu = (e) => {
  const t = e.subTree;
  return t.component ? vu(t.component) : t;
}, hh = {
  name: "BaseTransition",
  props: gl,
  setup(e, { slots: t }) {
    const n = at(), s = ml();
    return () => {
      const o = t.default && Li(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = yu(o), r = ae(e), { mode: l } = r;
      if (N.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && M(`invalid <transition> mode: ${l}`), s.isLeaving)
        return lr(i);
      const a = ma(i);
      if (!a)
        return lr(i);
      let c = Ss(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      a.type !== Te && vn(a, c);
      let d = n.subTree && ma(n.subTree);
      if (d && d.type !== Te && !Pt(a, d) && vu(n).type !== Te) {
        let u = Ss(
          d,
          r,
          s,
          n
        );
        if (vn(d, u), l === "out-in" && a.type !== Te)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, lr(i);
        l === "in-out" && a.type !== Te ? u.delayLeave = (p, m, E) => {
          const v = _u(
            s,
            d
          );
          v[String(d.key)] = d, p[Sn] = () => {
            m(), p[Sn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            E(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function yu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Te) {
        if (N.NODE_ENV !== "production" && n) {
          M(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, N.NODE_ENV === "production") break;
      }
  }
  return t;
}
const bu = hh;
function _u(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ss(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: E,
    onLeaveCancelled: v,
    onBeforeAppear: D,
    onAppear: C,
    onAfterAppear: y,
    onAppearCancelled: f
  } = t, w = String(e.key), b = _u(n, e), V = (_, O) => {
    _ && Vt(
      _,
      s,
      9,
      O
    );
  }, P = (_, O) => {
    const I = O[1];
    V(_, O), q(_) ? _.every(($) => $.length <= 1) && I() : _.length <= 1 && I();
  }, S = {
    mode: r,
    persisted: l,
    beforeEnter(_) {
      let O = a;
      if (!n.isMounted)
        if (i)
          O = D || a;
        else
          return;
      _[Sn] && _[Sn](
        !0
        /* cancelled */
      );
      const I = b[w];
      I && Pt(e, I) && I.el[Sn] && I.el[Sn](), V(O, [_]);
    },
    enter(_) {
      let O = c, I = d, $ = u;
      if (!n.isMounted)
        if (i)
          O = C || c, I = y || d, $ = f || u;
        else
          return;
      let L = !1;
      const Y = _[Mo] = (ee) => {
        L || (L = !0, ee ? V($, [_]) : V(I, [_]), S.delayedLeave && S.delayedLeave(), _[Mo] = void 0);
      };
      O ? P(O, [_, Y]) : Y();
    },
    leave(_, O) {
      const I = String(e.key);
      if (_[Mo] && _[Mo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      V(p, [_]);
      let $ = !1;
      const L = _[Sn] = (Y) => {
        $ || ($ = !0, O(), Y ? V(v, [_]) : V(E, [_]), _[Sn] = void 0, b[I] === e && delete b[I]);
      };
      b[I] = e, m ? P(m, [_, L]) : L();
    },
    clone(_) {
      const O = Ss(
        _,
        t,
        n,
        s,
        o
      );
      return o && o(O), O;
    }
  };
  return S;
}
function lr(e) {
  if (Rs(e))
    return e = $t(e), e.children = null, e;
}
function ma(e) {
  if (!Rs(e))
    return hu(e.type) && e.children ? yu(e.children) : e;
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
function vn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Li(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ue ? (r.patchFlag & 128 && o++, s = s.concat(
      Li(r.children, t, l)
    )) : (t || r.type !== Te) && s.push(l != null ? $t(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vl(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function mh() {
  const e = at();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (N.NODE_ENV !== "production" && M(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function yl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Eu = /* @__PURE__ */ new WeakSet();
function gh(e) {
  const t = at(), n = eu(null);
  if (t) {
    const o = t.refs === fe ? t.refs = {} : t.refs;
    let i;
    N.NODE_ENV !== "production" && (i = Object.getOwnPropertyDescriptor(o, e)) && !i.configurable ? M(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else N.NODE_ENV !== "production" && M(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = N.NODE_ENV !== "production" ? Ai(n) : n;
  return N.NODE_ENV !== "production" && Eu.add(s), s;
}
function bs(e, t, n, s, o = !1) {
  if (q(e)) {
    e.forEach(
      (E, v) => bs(
        E,
        t && (q(t) ? t[v] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if ($n(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && bs(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Co(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e;
  if (N.NODE_ENV !== "production" && !l) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, u = l.setupState, p = ae(u), m = u === fe ? () => !1 : (E) => N.NODE_ENV !== "production" && (me(p, E) && !Ve(p[E]) && M(
    `Template ref "${E}" used on a non-ref value. It will not work in the production build.`
  ), Eu.has(p[E])) ? !1 : me(p, E);
  if (c != null && c !== a && (re(c) ? (d[c] = null, m(c) && (u[c] = null)) : Ve(c) && (c.value = null)), se(a))
    rs(a, l, 12, [r, d]);
  else {
    const E = re(a), v = Ve(a);
    if (E || v) {
      const D = () => {
        if (e.f) {
          const C = E ? m(a) ? u[a] : d[a] : a.value;
          o ? q(C) && tl(C, i) : q(C) ? C.includes(i) || C.push(i) : E ? (d[a] = [i], m(a) && (u[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else E ? (d[a] = r, m(a) && (u[a] = r)) : v ? (a.value = r, e.k && (d[e.k] = r)) : N.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (D.id = -1, Le(D, n)) : D();
    } else N.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ga = !1;
const Fn = () => {
  ga || (console.error("Hydration completed but contains mismatches."), ga = !0);
}, vh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", yh = (e) => e.namespaceURI.includes("MathML"), Po = (e) => {
  if (e.nodeType === 1) {
    if (vh(e)) return "svg";
    if (yh(e)) return "mathml";
  }
}, qn = (e) => e.nodeType === 8;
function bh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: o,
      nextSibling: i,
      parentNode: r,
      remove: l,
      insert: a,
      createComment: c
    }
  } = e, d = (f, w) => {
    if (!w.hasChildNodes()) {
      N.NODE_ENV !== "production" && M(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, f, w), ii(), w._vnode = f;
      return;
    }
    u(w.firstChild, f, null, null, null), ii(), w._vnode = f;
  }, u = (f, w, b, V, P, S = !1) => {
    S = S || !!w.dynamicChildren;
    const _ = qn(f) && f.data === "[", O = () => v(
      f,
      w,
      b,
      V,
      P,
      _
    ), { type: I, ref: $, shapeFlag: L, patchFlag: Y } = w;
    let ee = f.nodeType;
    w.el = f, N.NODE_ENV !== "production" && (es(f, "__vnode", w, !0), es(f, "__vueParentComponent", b, !0)), Y === -2 && (S = !1, w.dynamicChildren = null);
    let Z = null;
    switch (I) {
      case nn:
        ee !== 3 ? w.children === "" ? (a(w.el = o(""), r(f), f), Z = f) : Z = O() : (f.data !== w.children && (N.NODE_ENV !== "production" && M(
          "Hydration text mismatch in",
          f.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            f.data
          )}
  - expected on client: ${JSON.stringify(w.children)}`
        ), Fn(), f.data = w.children), Z = i(f));
        break;
      case Te:
        y(f) ? (Z = i(f), C(
          w.el = f.content.firstChild,
          f,
          b
        )) : ee !== 8 || _ ? Z = O() : Z = i(f);
        break;
      case An:
        if (_ && (f = i(f), ee = f.nodeType), ee === 1 || ee === 3) {
          Z = f;
          const ne = !w.children.length;
          for (let Q = 0; Q < w.staticCount; Q++)
            ne && (w.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), Q === w.staticCount - 1 && (w.anchor = Z), Z = i(Z);
          return _ ? i(Z) : Z;
        } else
          O();
        break;
      case ue:
        _ ? Z = E(
          f,
          w,
          b,
          V,
          P,
          S
        ) : Z = O();
        break;
      default:
        if (L & 1)
          (ee !== 1 || w.type.toLowerCase() !== f.tagName.toLowerCase()) && !y(f) ? Z = O() : Z = p(
            f,
            w,
            b,
            V,
            P,
            S
          );
        else if (L & 6) {
          w.slotScopeIds = P;
          const ne = r(f);
          if (_ ? Z = D(f) : qn(f) && f.data === "teleport start" ? Z = D(f, f.data, "teleport end") : Z = i(f), t(
            w,
            ne,
            null,
            b,
            V,
            Po(ne),
            S
          ), $n(w) && !w.type.__asyncResolved) {
            let Q;
            _ ? (Q = ye(ue), Q.anchor = Z ? Z.previousSibling : ne.lastChild) : Q = f.nodeType === 3 ? He("") : ye("div"), Q.el = f, w.component.subTree = Q;
          }
        } else L & 64 ? ee !== 8 ? Z = O() : Z = w.type.hydrate(
          f,
          w,
          b,
          V,
          P,
          S,
          e,
          m
        ) : L & 128 ? Z = w.type.hydrate(
          f,
          w,
          b,
          V,
          Po(r(f)),
          P,
          S,
          e,
          u
        ) : N.NODE_ENV !== "production" && M("Invalid HostVNode type:", I, `(${typeof I})`);
    }
    return $ != null && bs($, null, V, w), Z;
  }, p = (f, w, b, V, P, S) => {
    S = S || !!w.dynamicChildren;
    const { type: _, props: O, patchFlag: I, shapeFlag: $, dirs: L, transition: Y } = w, ee = _ === "input" || _ === "option";
    if (N.NODE_ENV !== "production" || ee || I !== -1) {
      L && Jt(w, null, b, "created");
      let Z = !1;
      if (y(f)) {
        Z = Gu(
          null,
          // no need check parentSuspense in hydration
          Y
        ) && b && b.vnode.props && b.vnode.props.appear;
        const Q = f.content.firstChild;
        if (Z) {
          const Ee = Q.getAttribute("class");
          Ee && (Q.$cls = Ee), Y.beforeEnter(Q);
        }
        C(Q, f, b), w.el = f = Q;
      }
      if ($ & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let Q = m(
          f.firstChild,
          w,
          f,
          b,
          V,
          P,
          S
        ), Ee = !1;
        for (; Q; ) {
          zs(
            f,
            1
            /* CHILDREN */
          ) || (N.NODE_ENV !== "production" && !Ee && (M(
            "Hydration children mismatch on",
            f,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), Fn());
          const ut = Q;
          Q = Q.nextSibling, l(ut);
        }
      } else if ($ & 8) {
        let Q = w.children;
        Q[0] === `
` && (f.tagName === "PRE" || f.tagName === "TEXTAREA") && (Q = Q.slice(1)), f.textContent !== Q && (zs(
          f,
          0
          /* TEXT */
        ) || (N.NODE_ENV !== "production" && M(
          "Hydration text content mismatch on",
          f,
          `
  - rendered on server: ${f.textContent}
  - expected on client: ${w.children}`
        ), Fn()), f.textContent = w.children);
      }
      if (O) {
        if (N.NODE_ENV !== "production" || ee || !S || I & 48) {
          const Q = f.tagName.includes("-");
          for (const Ee in O)
            N.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(L && L.some((ut) => ut.dir.created)) && _h(f, Ee, O[Ee], w, b) && Fn(), (ee && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !Vn(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || Q) && s(f, Ee, null, O[Ee], void 0, b);
        } else if (O.onClick)
          s(
            f,
            "onClick",
            null,
            O.onClick,
            void 0,
            b
          );
        else if (I & 4 && hn(O.style))
          for (const Q in O.style) O.style[Q];
      }
      let ne;
      (ne = O && O.onVnodeBeforeMount) && ht(ne, b, w), L && Jt(w, null, b, "beforeMount"), ((ne = O && O.onVnodeMounted) || L || Z) && od(() => {
        ne && ht(ne, b, w), Z && Y.enter(f), L && Jt(w, null, b, "mounted");
      }, V);
    }
    return f.nextSibling;
  }, m = (f, w, b, V, P, S, _) => {
    _ = _ || !!w.dynamicChildren;
    const O = w.children, I = O.length;
    let $ = !1;
    for (let L = 0; L < I; L++) {
      const Y = _ ? O[L] : O[L] = lt(O[L]), ee = Y.type === nn;
      f ? (ee && !_ && L + 1 < I && lt(O[L + 1]).type === nn && (a(
        o(
          f.data.slice(Y.children.length)
        ),
        b,
        i(f)
      ), f.data = Y.children), f = u(
        f,
        Y,
        V,
        P,
        S,
        _
      )) : ee && !Y.children ? a(Y.el = o(""), b) : (zs(
        b,
        1
        /* CHILDREN */
      ) || (N.NODE_ENV !== "production" && !$ && (M(
        "Hydration children mismatch on",
        b,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), $ = !0), Fn()), n(
        null,
        Y,
        b,
        null,
        V,
        P,
        Po(b),
        S
      ));
    }
    return f;
  }, E = (f, w, b, V, P, S) => {
    const { slotScopeIds: _ } = w;
    _ && (P = P ? P.concat(_) : _);
    const O = r(f), I = m(
      i(f),
      w,
      O,
      b,
      V,
      P,
      S
    );
    return I && qn(I) && I.data === "]" ? i(w.anchor = I) : (Fn(), a(w.anchor = c("]"), O, I), I);
  }, v = (f, w, b, V, P, S) => {
    if (zs(
      f.parentElement,
      1
      /* CHILDREN */
    ) || (N.NODE_ENV !== "production" && M(
      `Hydration node mismatch:
- rendered on server:`,
      f,
      f.nodeType === 3 ? "(text)" : qn(f) && f.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      w.type
    ), Fn()), w.el = null, S) {
      const I = D(f);
      for (; ; ) {
        const $ = i(f);
        if ($ && $ !== I)
          l($);
        else
          break;
      }
    }
    const _ = i(f), O = r(f);
    return l(f), n(
      null,
      w,
      O,
      _,
      b,
      V,
      Po(O),
      P
    ), b && (b.vnode.el = w.el, qi(b, w.el)), _;
  }, D = (f, w = "[", b = "]") => {
    let V = 0;
    for (; f; )
      if (f = i(f), f && qn(f) && (f.data === w && V++, f.data === b)) {
        if (V === 0)
          return i(f);
        V--;
      }
    return f;
  }, C = (f, w, b) => {
    const V = w.parentNode;
    V && V.replaceChild(f, w);
    let P = b;
    for (; P; )
      P.vnode.el === w && (P.vnode.el = P.subTree.el = f), P = P.parent;
  }, y = (f) => f.nodeType === 1 && f.tagName === "TEMPLATE";
  return [d, u];
}
function _h(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ze(n), Eh(va(l || ""), va(a)) || (i = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = re(n) ? n : Gf(Nt(n));
    const c = ya(l), d = ya(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && d.set("display", "none");
    o && Nu(o, s, d), Nh(c, d) || (i = 3, r = "style");
  } else (e instanceof SVGElement && sp(t) || e instanceof HTMLElement && (ra(t) || np(t))) && (ra(t) ? (l = e.hasAttribute(t), a = ol(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = op(n) ? String(n) : !1), l !== a && (i = 4, r = t));
  if (i != null && !zs(e, i)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${r}="${p}"`, d = `Hydration ${wu[i]} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return M(d, e, u), !0;
  }
  return !1;
}
function va(e) {
  return new Set(e.trim().split(/\s+/));
}
function Eh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function ya(e) {
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
function Nu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ue && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const i in o) {
      const r = Mc(o[i]);
      n.set(`--${rp(i)}`, r);
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
function zs(e, t) {
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
const wh = Eo().requestIdleCallback || ((e) => setTimeout(e, 1)), xh = Eo().cancelIdleCallback || ((e) => clearTimeout(e)), Sh = (e = 1e4) => (t) => {
  const n = wh(t, { timeout: e });
  return () => xh(n);
};
function Ch(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: i, innerWidth: r } = window;
  return (t > 0 && t < i || s > 0 && s < i) && (n > 0 && n < r || o > 0 && o < r);
}
const kh = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const i of o)
      if (i.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Ch(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Oh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Th = (e = []) => (t, n) => {
  re(e) && (e = [e]);
  let s = !1;
  const o = (r) => {
    s || (s = !0, i(), t(), r.target.dispatchEvent(new r.constructor(r.type, r)));
  }, i = () => {
    n((r) => {
      for (const l of e)
        r.removeEventListener(l, o);
    });
  };
  return n((r) => {
    for (const l of e)
      r.addEventListener(l, o, { once: !0 });
  }), i;
};
function Dh(e, t) {
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
function Vh(e) {
  se(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: i,
    timeout: r,
    // undefined = never times out
    suspensible: l = !0,
    onError: a
  } = e;
  let c = null, d, u = 0;
  const p = () => (u++, c = null, m()), m = () => {
    let E;
    return c || (E = c = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), a)
        return new Promise((D, C) => {
          a(v, () => D(p()), () => C(v), u + 1);
        });
      throw v;
    }).then((v) => {
      if (E !== c && c)
        return c;
      if (N.NODE_ENV !== "production" && !v && M(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), N.NODE_ENV !== "production" && v && !he(v) && !se(v))
        throw new Error(`Invalid async component load result: ${v}`);
      return d = v, v;
    }));
  };
  return /* @__PURE__ */ vl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(E, v, D) {
      let C = !1;
      (v.bu || (v.bu = [])).push(() => C = !0);
      const y = () => {
        if (C) {
          N.NODE_ENV !== "production" && M(
            `Skipping lazy hydration for component '${Os(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        D();
      }, f = i ? () => {
        const w = i(
          y,
          (b) => Dh(E, b)
        );
        w && (v.bum || (v.bum = [])).push(w);
      } : y;
      d ? f() : m().then(() => !v.isUnmounted && f());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const E = je;
      if (yl(E), d)
        return () => ar(d, E);
      const v = (f) => {
        c = null, Ln(
          f,
          E,
          13,
          !s
        );
      };
      if (l && E.suspense || ks)
        return m().then((f) => () => ar(f, E)).catch((f) => (v(f), () => s ? ye(s, {
          error: f
        }) : null));
      const D = G(!1), C = G(), y = G(!!o);
      return o && setTimeout(() => {
        y.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!D.value && !C.value) {
          const f = new Error(
            `Async component timed out after ${r}ms.`
          );
          v(f), C.value = f;
        }
      }, r), m().then(() => {
        D.value = !0, E.parent && Rs(E.parent.vnode) && E.parent.update();
      }).catch((f) => {
        v(f), C.value = f;
      }), () => {
        if (D.value && d)
          return ar(d, E);
        if (C.value && s)
          return ye(s, {
            error: C.value
          });
        if (n && !y.value)
          return ye(n);
      };
    }
  });
}
function ar(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, r = ye(e, s, o);
  return r.ref = n, r.ce = i, delete t.vnode.ce, r;
}
const Rs = (e) => e.type.__isKeepAlive, $h = {
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
    const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let r = null;
    N.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: d,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (y, f, w, b, V) => {
      const P = y.component;
      c(y, f, w, 0, l), a(
        P.vnode,
        y,
        f,
        w,
        P,
        l,
        b,
        y.slotScopeIds,
        V
      ), Le(() => {
        P.isDeactivated = !1, P.a && On(P.a);
        const S = y.props && y.props.onVnodeMounted;
        S && ht(S, P.parent, y);
      }, l), N.NODE_ENV !== "production" && wr(P);
    }, s.deactivate = (y) => {
      const f = y.component;
      ui(f.m), ui(f.a), c(y, p, null, 1, l), Le(() => {
        f.da && On(f.da);
        const w = y.props && y.props.onVnodeUnmounted;
        w && ht(w, f.parent, y), f.isDeactivated = !0;
      }, l), N.NODE_ENV !== "production" && wr(f), N.NODE_ENV !== "production" && (f.__keepAliveStorageContainer = p);
    };
    function m(y) {
      cr(y), d(y, n, l, !0);
    }
    function E(y) {
      o.forEach((f, w) => {
        const b = Os(f.type);
        b && !y(b) && v(w);
      });
    }
    function v(y) {
      const f = o.get(y);
      f && (!r || !Pt(f, r)) ? m(f) : r && cr(r), o.delete(y), i.delete(y);
    }
    tn(
      () => [e.include, e.exclude],
      ([y, f]) => {
        y && E((w) => Ws(y, w)), f && E((w) => !Ws(f, w));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let D = null;
    const C = () => {
      D != null && (fi(n.subTree.type) ? Le(() => {
        o.set(D, Ro(n.subTree));
      }, n.subTree.suspense) : o.set(D, Ro(n.subTree)));
    };
    return We(C), Bi(C), ji(() => {
      o.forEach((y) => {
        const { subTree: f, suspense: w } = n, b = Ro(f);
        if (y.type === b.type && y.key === b.key) {
          cr(b);
          const V = b.component.da;
          V && Le(V, w);
          return;
        }
        m(y);
      });
    }), () => {
      if (D = null, !t.default)
        return r = null;
      const y = t.default(), f = y[0];
      if (y.length > 1)
        return N.NODE_ENV !== "production" && M("KeepAlive should contain exactly one component child."), r = null, y;
      if (!rn(f) || !(f.shapeFlag & 4) && !(f.shapeFlag & 128))
        return r = null, f;
      let w = Ro(f);
      if (w.type === Te)
        return r = null, w;
      const b = w.type, V = Os(
        $n(w) ? w.type.__asyncResolved || {} : b
      ), { include: P, exclude: S, max: _ } = e;
      if (P && (!V || !Ws(P, V)) || S && V && Ws(S, V))
        return w.shapeFlag &= -257, r = w, f;
      const O = w.key == null ? b : w.key, I = o.get(O);
      return w.el && (w = $t(w), f.shapeFlag & 128 && (f.ssContent = w)), D = O, I ? (w.el = I.el, w.component = I.component, w.transition && vn(w, w.transition), w.shapeFlag |= 512, i.delete(O), i.add(O)) : (i.add(O), _ && i.size > parseInt(_, 10) && v(i.values().next().value)), w.shapeFlag |= 256, r = w, fi(f.type) ? f : w;
    };
  }
}, Ah = $h;
function Ws(e, t) {
  return q(e) ? e.some((n) => Ws(n, t)) : re(e) ? e.split(",").includes(t) : Rf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function xu(e, t) {
  Cu(e, "a", t);
}
function Su(e, t) {
  Cu(e, "da", t);
}
function Cu(e, t, n = je) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Fi(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Rs(o.parent.vnode) && Ih(s, t, n, o), o = o.parent;
  }
}
function Ih(e, t, n, s) {
  const o = Fi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  At(() => {
    tl(s[t], o);
  }, n);
}
function cr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ro(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Fi(e, t, n = je, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Ht();
      const l = ss(n), a = Vt(t, n, e, r);
      return l(), Ut(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (N.NODE_ENV !== "production") {
    const o = Qt(Mi[e].replace(/ hook$/, ""));
    M(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yn = (e) => (t, n = je) => {
  (!ks || e === "sp") && Fi(e, (...s) => t(...s), n);
}, ku = yn("bm"), We = yn("m"), bl = yn(
  "bu"
), Bi = yn("u"), ji = yn(
  "bum"
), At = yn("um"), Ou = yn(
  "sp"
), Tu = yn("rtg"), Du = yn("rtc");
function Vu(e, t = je) {
  Fi("ec", e, t);
}
const li = "components", Mh = "directives";
function Ph(e, t) {
  return El(li, e, !0, t) || e;
}
const _l = Symbol.for("v-ndc");
function $u(e) {
  return re(e) ? El(li, e, !1) || e : e || _l;
}
function Rh(e) {
  return El(Mh, e);
}
function El(e, t, n = !0, s = !1) {
  const o = Pe || je;
  if (o) {
    const i = o.type;
    if (e === li) {
      const l = Os(
        i,
        !1
      );
      if (l && (l === t || l === Se(t) || l === on(Se(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      _a(o[e] || i[e], t) || // global registration
      _a(o.appContext[e], t)
    );
    if (!r && s)
      return i;
    if (N.NODE_ENV !== "production" && n && !r) {
      const l = e === li ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else N.NODE_ENV !== "production" && M(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function _a(e, t) {
  return e && (e[t] || e[Se(t)] || e[on(Se(t))]);
}
function Ae(e, t, n, s) {
  let o;
  const i = n && n[s], r = q(e);
  if (r || re(e)) {
    const l = r && hn(e);
    let a = !1, c = !1;
    l && (a = !et(e), c = qt(e), e = Vi(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? ni(ze(e[d])) : ze(e[d]) : e[d],
        d,
        void 0,
        i && i[d]
      );
  } else if (typeof e == "number") {
    N.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i && i[l]);
  } else if (he(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i && i[a])
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, i && i[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Lh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (q(s))
      for (let o = 0; o < s.length; o++)
        e[s[o].name] = s[o].fn;
    else s && (e[s.name] = s.key ? (...o) => {
      const i = s.fn(...o);
      return i && (i.key = s.key), i;
    } : s.fn);
  }
  return e;
}
function as(e, t, n = {}, s, o) {
  if (Pe.ce || Pe.parent && $n(Pe.parent) && Pe.parent.ce)
    return t !== "default" && (n.name = t), k(), Kt(
      ue,
      null,
      [ye("slot", n, s && s())],
      64
    );
  let i = e[t];
  N.NODE_ENV !== "production" && i && i.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), k();
  const r = i && Nl(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = Kt(
    ue,
    {
      key: (l && !yt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function Nl(e) {
  return e.some((t) => rn(t) ? !(t.type === Te || t.type === ue && !Nl(t.children)) : !0) ? e : null;
}
function Fh(e, t) {
  const n = {};
  if (N.NODE_ENV !== "production" && !he(e))
    return M("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Qt(s)] = e[s];
  return n;
}
const Sr = (e) => e ? pd(e) ? Co(e) : Sr(e.parent) : null, Xn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => N.NODE_ENV !== "production" ? Rt(e.props) : e.props,
    $attrs: (e) => N.NODE_ENV !== "production" ? Rt(e.attrs) : e.attrs,
    $slots: (e) => N.NODE_ENV !== "production" ? Rt(e.slots) : e.slots,
    $refs: (e) => N.NODE_ENV !== "production" ? Rt(e.refs) : e.refs,
    $parent: (e) => Sr(e.parent),
    $root: (e) => Sr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Pi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wo.bind(e.proxy)),
    $watch: (e) => Tm.bind(e)
  })
), wl = (e) => e === "_" || e === "$", ur = (e, t) => e !== fe && !e.__isScriptSetup && me(e, t), Zs = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (N.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const m = r[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ur(s, t))
          return r[t] = 1, s[t];
        if (o !== fe && me(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && me(c, t)
        )
          return r[t] = 3, i[t];
        if (n !== fe && me(n, t))
          return r[t] = 4, n[t];
        Cr && (r[t] = 0);
      }
    }
    const d = Xn[t];
    let u, p;
    if (d)
      return t === "$attrs" ? (Fe(e.attrs, "get", ""), N.NODE_ENV !== "production" && di()) : N.NODE_ENV !== "production" && t === "$slots" && Fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== fe && me(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, me(p, t)
    )
      return p[t];
    N.NODE_ENV !== "production" && Pe && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== fe && wl(t[0]) && me(o, t) ? M(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Pe && M(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return ur(o, t) ? (o[t] = n, !0) : N.NODE_ENV !== "production" && o.__isScriptSetup && me(o, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== fe && me(s, t) ? (s[t] = n, !0) : me(e.props, t) ? (N.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (N.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (N.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i }
  }, r) {
    let l;
    return !!n[r] || e !== fe && me(e, r) || ur(t, r) || (l = i[0]) && me(l, r) || me(s, r) || me(Xn, r) || me(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
N.NODE_ENV !== "production" && (Zs.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Bh = /* @__PURE__ */ de({}, Zs, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return Zs.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Uf(t);
    return N.NODE_ENV !== "production" && !n && Zs.has(e, t) && M(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function jh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Xn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Xn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Oe
    });
  }), t;
}
function Hh(e) {
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
function Uh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ae(n)).forEach((s) => {
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
const cs = (e) => M(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function qh() {
  return N.NODE_ENV !== "production" && cs("defineProps"), null;
}
function Kh() {
  return N.NODE_ENV !== "production" && cs("defineEmits"), null;
}
function zh(e) {
  N.NODE_ENV !== "production" && cs("defineExpose");
}
function Wh(e) {
  N.NODE_ENV !== "production" && cs("defineOptions");
}
function Gh() {
  return N.NODE_ENV !== "production" && cs("defineSlots"), null;
}
function Yh() {
  N.NODE_ENV !== "production" && cs("defineModel");
}
function Jh(e, t) {
  return N.NODE_ENV !== "production" && cs("withDefaults"), null;
}
function Xh() {
  return Au("useSlots").slots;
}
function Qh() {
  return Au("useAttrs").attrs;
}
function Au(e) {
  const t = at();
  return N.NODE_ENV !== "production" && !t && M(`${e}() called without active instance.`), t.setupContext || (t.setupContext = vd(t));
}
function fo(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Zh(e, t) {
  const n = fo(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? q(o) || se(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : N.NODE_ENV !== "production" && M(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function em(e, t) {
  return !e || !t ? e || t : q(e) && q(t) ? e.concat(t) : de({}, fo(e), fo(t));
}
function tm(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function nm(e) {
  const t = at();
  N.NODE_ENV !== "production" && !t && M(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Mr(), Ci(n) && (n = n.catch((s) => {
    throw ss(t), s;
  })), [n, () => ss(t)];
}
function sm() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Cr = !0;
function om(e) {
  const t = xl(e), n = e.proxy, s = e.ctx;
  Cr = !1, t.beforeCreate && Ea(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: E,
    activated: v,
    deactivated: D,
    beforeDestroy: C,
    beforeUnmount: y,
    destroyed: f,
    unmounted: w,
    render: b,
    renderTracked: V,
    renderTriggered: P,
    errorCaptured: S,
    serverPrefetch: _,
    // public API
    expose: O,
    inheritAttrs: I,
    // assets
    components: $,
    directives: L,
    filters: Y
  } = t, ee = N.NODE_ENV !== "production" ? sm() : null;
  if (N.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const Q in ne)
        ee("Props", Q);
  }
  if (c && im(c, s, ee), r)
    for (const ne in r) {
      const Q = r[ne];
      se(Q) ? (N.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = Q.bind(n), N.NODE_ENV !== "production" && ee("Methods", ne)) : N.NODE_ENV !== "production" && M(
        `Method "${ne}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    N.NODE_ENV !== "production" && !se(o) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (N.NODE_ENV !== "production" && Ci(ne) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !he(ne))
      N.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = Ns(ne), N.NODE_ENV !== "production")
      for (const Q in ne)
        ee("Data", Q), wl(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => ne[Q],
          set: Oe
        });
  }
  if (Cr = !0, i)
    for (const ne in i) {
      const Q = i[ne], Ee = se(Q) ? Q.bind(n, n) : se(Q.get) ? Q.get.bind(n, n) : Oe;
      N.NODE_ENV !== "production" && Ee === Oe && M(`Computed property "${ne}" has no getter.`);
      const ut = !se(Q) && se(Q.set) ? Q.set.bind(n) : N.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : Oe, xt = ie({
        get: Ee,
        set: ut
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (St) => xt.value = St
      }), N.NODE_ENV !== "production" && ee("Computed", ne);
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
  if (Z(ku, u), Z(We, p), Z(bl, m), Z(Bi, E), Z(xu, v), Z(Su, D), Z(Vu, S), Z(Du, V), Z(Tu, P), Z(ji, y), Z(At, w), Z(Ou, _), q(O))
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
  b && e.render === Oe && (e.render = b), I != null && (e.inheritAttrs = I), $ && (e.components = $), L && (e.directives = L), _ && yl(e);
}
function im(e, t, n = Oe) {
  q(e) && (e = kr(e));
  for (const s in e) {
    const o = e[s];
    let i;
    he(o) ? "default" in o ? i = eo(
      o.from || s,
      o.default,
      !0
    ) : i = eo(o.from || s) : i = eo(o), Ve(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, N.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Ea(e, t, n) {
  Vt(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Iu(e, t, n, s) {
  let o = s.includes(".") ? Zu(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    se(i) ? tn(o, i) : N.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, i);
  } else if (se(e))
    tn(o, e.bind(n));
  else if (he(e))
    if (q(e))
      e.forEach((i) => Iu(i, t, n, s));
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(i) ? tn(o, i, e) : N.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else N.NODE_ENV !== "production" && M(`Invalid watch option: "${s}"`, e);
}
function xl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => ai(a, c, r, !0)
  ), ai(a, t, r)), he(t) && i.set(t, a), a;
}
function ai(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && ai(e, i, n, !0), o && o.forEach(
    (r) => ai(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      N.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = rm[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const rm = {
  data: Na,
  props: wa,
  emits: wa,
  // objects
  methods: Gs,
  computed: Gs,
  // lifecycle
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  // assets
  components: Gs,
  directives: Gs,
  // watch
  watch: am,
  // provide / inject
  provide: Na,
  inject: lm
};
function Na(e, t) {
  return t ? e ? function() {
    return de(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lm(e, t) {
  return Gs(kr(e), kr(t));
}
function kr(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gs(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wa(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    fo(e),
    fo(t ?? {})
  ) : t;
}
function am(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ot(e[s], t[s]);
  return n;
}
function Mu() {
  return {
    app: null,
    config: {
      isNativeTag: qs,
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
let cm = 0;
function um(e, t) {
  return function(s, o = null) {
    se(s) || (s = de({}, s)), o != null && !he(o) && (N.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), o = null);
    const i = Mu(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: cm++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Fr,
      get config() {
        return i.config;
      },
      set config(d) {
        N.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? N.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : d && se(d.install) ? (r.add(d), d.install(c, ...u)) : se(d) ? (r.add(d), d(c, ...u)) : N.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return i.mixins.includes(d) ? N.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), c;
      },
      component(d, u) {
        return N.NODE_ENV !== "production" && Pr(d, i.config), u ? (N.NODE_ENV !== "production" && i.components[d] && M(`Component "${d}" has already been registered in target app.`), i.components[d] = u, c) : i.components[d];
      },
      directive(d, u) {
        return N.NODE_ENV !== "production" && fu(d), u ? (N.NODE_ENV !== "production" && i.directives[d] && M(`Directive "${d}" has already been registered in target app.`), i.directives[d] = u, c) : i.directives[d];
      },
      mount(d, u, p) {
        if (a)
          N.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          N.NODE_ENV !== "production" && d.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || ye(s, o);
          return m.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), N.NODE_ENV !== "production" && (i.reload = () => {
            const E = $t(m);
            E.el = null, e(E, d, p);
          }), u && t ? t(m, d) : e(m, d, p), a = !0, c._container = d, d.__vue_app__ = c, N.NODE_ENV !== "production" && (c._instance = m.component, sh(c, Fr)), Co(m.component);
        }
      },
      onUnmount(d) {
        N.NODE_ENV !== "production" && typeof d != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Vt(
          l,
          c._instance,
          16
        ), e(null, c._container), N.NODE_ENV !== "production" && (c._instance = null, oh(c)), delete c._container.__vue_app__) : N.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return N.NODE_ENV !== "production" && d in i.provides && (me(i.provides, d) ? M(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Qn;
        Qn = c;
        try {
          return d();
        } finally {
          Qn = u;
        }
      }
    };
    return c;
  };
}
let Qn = null;
function Pu(e, t) {
  if (!je)
    N.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = je.provides;
    const s = je.parent && je.parent.provides;
    s === n && (n = je.provides = Object.create(s)), n[e] = t;
  }
}
function eo(e, t, n = !1) {
  const s = at();
  if (s || Qn) {
    let o = Qn ? Qn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
    N.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else N.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
function dm() {
  return !!(at() || Qn);
}
const Ru = {}, Lu = () => Object.create(Ru), Fu = (e) => Object.getPrototypeOf(e) === Ru;
function fm(e, t, n, s = !1) {
  const o = {}, i = Lu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Bu(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  N.NODE_ENV !== "production" && Hu(t || {}, o, e), n ? e.props = s ? o : Qc(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function pm(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function hm(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = ae(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(N.NODE_ENV !== "production" && pm(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (Hi(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (me(i, p))
            m !== i[p] && (i[p] = m, c = !0);
          else {
            const E = Se(p);
            o[E] = Or(
              a,
              l,
              E,
              m,
              e,
              !1
            );
          }
        else
          m !== i[p] && (i[p] = m, c = !0);
      }
    }
  } else {
    Bu(e, t, o, i) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !me(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Xe(u)) === u || !me(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = Or(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== l)
      for (const u in i)
        (!t || !me(t, u)) && (delete i[u], c = !0);
  }
  c && Zt(e.attrs, "set", ""), N.NODE_ENV !== "production" && Hu(t || {}, o, e);
}
function Bu(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Vn(a))
        continue;
      const c = t[a];
      let d;
      o && me(o, d = Se(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : Hi(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, r = !0);
    }
  if (i) {
    const a = ae(n), c = l || fe;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      n[u] = Or(
        o,
        a,
        u,
        c[u],
        e,
        !me(c, u)
      );
    }
  }
  return r;
}
function Or(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = me(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && se(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const d = ss(o);
          s = c[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Xe(n)) && (s = !0));
  }
  return s;
}
const mm = /* @__PURE__ */ new WeakMap();
function ju(e, t, n = !1) {
  const s = n ? mm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!se(e)) {
    const d = (u) => {
      a = !0;
      const [p, m] = ju(u, t, !0);
      de(r, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return he(e) && s.set(e, ms), ms;
  if (q(i))
    for (let d = 0; d < i.length; d++) {
      N.NODE_ENV !== "production" && !re(i[d]) && M("props must be strings when using array syntax.", i[d]);
      const u = Se(i[d]);
      xa(u) && (r[u] = fe);
    }
  else if (i) {
    N.NODE_ENV !== "production" && !he(i) && M("invalid props options", i);
    for (const d in i) {
      const u = Se(d);
      if (xa(u)) {
        const p = i[d], m = r[u] = q(p) || se(p) ? { type: p } : de({}, p), E = m.type;
        let v = !1, D = !0;
        if (q(E))
          for (let C = 0; C < E.length; ++C) {
            const y = E[C], f = se(y) && y.name;
            if (f === "Boolean") {
              v = !0;
              break;
            } else f === "String" && (D = !1);
          }
        else
          v = se(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = v, m[
          1
          /* shouldCastTrue */
        ] = D, (v || me(m, "default")) && l.push(u);
      }
    }
  }
  const c = [r, l];
  return he(e) && s.set(e, c), c;
}
function xa(e) {
  return e[0] !== "$" && !Vn(e) ? !0 : (N.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function gm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Hu(e, t, n) {
  const s = ae(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Se(r));
  for (const r in o) {
    let l = o[r];
    l != null && vm(
      r,
      s[r],
      l,
      N.NODE_ENV !== "production" ? Rt(s) : s,
      !i.includes(r)
    );
  }
}
function vm(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let c = !1;
      const d = q(i) ? i : [i], u = [];
      for (let p = 0; p < d.length && !c; p++) {
        const { valid: m, expectedType: E } = bm(t, d[p]);
        u.push(E || ""), c = m;
      }
      if (!c) {
        M(_m(e, t, u));
        return;
      }
    }
    l && !l(t, s) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ym = /* @__PURE__ */ Ue(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function bm(e, t) {
  let n;
  const s = gm(t);
  if (s === "null")
    n = e === null;
  else if (ym(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = he(e) : s === "Array" ? n = q(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function _m(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(on).join(" | ")}`;
  const o = n[0], i = nl(t), r = Sa(t, o), l = Sa(t, i);
  return n.length === 1 && Ca(o) && !Em(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, Ca(i) && (s += `with value ${l}.`), s;
}
function Sa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ca(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Em(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Sl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Cl = (e) => q(e) ? e.map(lt) : [lt(e)], Nm = (e, t, n) => {
  if (t._n)
    return t;
  const s = kt((...o) => (N.NODE_ENV !== "production" && je && !(n === null && Pe) && !(n && n.root !== je.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Cl(t(...o))), n);
  return s._c = !1, s;
}, Uu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Sl(o)) continue;
    const i = e[o];
    if (se(i))
      t[o] = Nm(o, i, s);
    else if (i != null) {
      N.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Cl(i);
      t[o] = () => r;
    }
  }
}, qu = (e, t) => {
  N.NODE_ENV !== "production" && !Rs(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Cl(t);
  e.slots.default = () => n;
}, Tr = (e, t, n) => {
  for (const s in t)
    (n || !Sl(s)) && (e[s] = t[s]);
}, wm = (e, t, n) => {
  const s = e.slots = Lu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && es(s, "__", o, !0);
    const i = t._;
    i ? (Tr(s, t, n), n && es(s, "_", i, !0)) : Uu(t, s);
  } else t && qu(e, t);
}, xm = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? N.NODE_ENV !== "production" && Lt ? (Tr(o, t, n), Zt(e, "set", "$slots")) : n && l === 1 ? i = !1 : Tr(o, t, n) : (i = !t.$stable, Uu(t, o)), r = t;
  } else t && (qu(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Sl(l) && r[l] == null && delete o[l];
};
let js, Tn;
function an(e, t) {
  e.appContext.config.performance && ci() && Tn.mark(`vue-${t}-${e.uid}`), N.NODE_ENV !== "production" && lh(e, t, ci() ? Tn.now() : Date.now());
}
function cn(e, t) {
  if (e.appContext.config.performance && ci()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Tn.mark(s), Tn.measure(
      `<${Ki(e, e.type)}> ${t}`,
      n,
      s
    ), Tn.clearMarks(n), Tn.clearMarks(s);
  }
  N.NODE_ENV !== "production" && ah(e, t, ci() ? Tn.now() : Date.now());
}
function ci() {
  return js !== void 0 || (typeof window < "u" && window.performance ? (js = !0, Tn = window.performance) : js = !1), js;
}
function Sm() {
  const e = [];
  if (N.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Le = od;
function Ku(e) {
  return Wu(e);
}
function zu(e) {
  return Wu(e, bh);
}
function Wu(e, t) {
  Sm();
  const n = Eo();
  n.__VUE__ = !0, N.NODE_ENV !== "production" && pl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: p,
    setScopeId: m = Oe,
    insertStaticContent: E
  } = e, v = (g, x, A, B = null, R = null, F = null, z = void 0, U = null, H = N.NODE_ENV !== "production" && Lt ? !1 : !!x.dynamicChildren) => {
    if (g === x)
      return;
    g && !Pt(g, x) && (B = Do(g), bn(g, R, F, !0), g = null), x.patchFlag === -2 && (H = !1, x.dynamicChildren = null);
    const { type: j, ref: oe, shapeFlag: W } = x;
    switch (j) {
      case nn:
        D(g, x, A, B);
        break;
      case Te:
        C(g, x, A, B);
        break;
      case An:
        g == null ? y(x, A, B, z) : N.NODE_ENV !== "production" && f(g, x, A, z);
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
        ) : W & 6 ? Y(
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
          us
        ) : N.NODE_ENV !== "production" && M("Invalid VNode type:", j, `(${typeof j})`);
    }
    oe != null && R ? bs(oe, g && g.ref, F, x || g, !x) : oe == null && g && g.ref != null && bs(g.ref, null, F, g, !0);
  }, D = (g, x, A, B) => {
    if (g == null)
      s(
        x.el = l(x.children),
        A,
        B
      );
    else {
      const R = x.el = g.el;
      x.children !== g.children && c(R, x.children);
    }
  }, C = (g, x, A, B) => {
    g == null ? s(
      x.el = a(x.children || ""),
      A,
      B
    ) : x.el = g.el;
  }, y = (g, x, A, B) => {
    [g.el, g.anchor] = E(
      g.children,
      x,
      A,
      B,
      g.el,
      g.anchor
    );
  }, f = (g, x, A, B) => {
    if (x.children !== g.children) {
      const R = p(g.anchor);
      b(g), [x.el, x.anchor] = E(
        x.children,
        A,
        R,
        B
      );
    } else
      x.el = g.el, x.anchor = g.anchor;
  }, w = ({ el: g, anchor: x }, A, B) => {
    let R;
    for (; g && g !== x; )
      R = p(g), s(g, A, B), g = R;
    s(x, A, B);
  }, b = ({ el: g, anchor: x }) => {
    let A;
    for (; g && g !== x; )
      A = p(g), o(g), g = A;
    o(x);
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
    const { props: oe, shapeFlag: W, transition: te, dirs: le } = g;
    if (H = g.el = r(
      g.type,
      F,
      oe && oe.is,
      oe
    ), W & 8 ? d(H, g.children) : W & 16 && _(
      g.children,
      H,
      null,
      B,
      R,
      dr(g, F),
      z,
      U
    ), le && Jt(g, null, B, "created"), S(H, g, g.scopeId, z, B), oe) {
      for (const Ce in oe)
        Ce !== "value" && !Vn(Ce) && i(H, Ce, null, oe[Ce], F, B);
      "value" in oe && i(H, "value", null, oe.value, F), (j = oe.onVnodeBeforeMount) && ht(j, B, g);
    }
    N.NODE_ENV !== "production" && (es(H, "__vnode", g, !0), es(H, "__vueParentComponent", B, !0)), le && Jt(g, null, B, "beforeMount");
    const ve = Gu(R, te);
    ve && te.beforeEnter(H), s(H, x, A), ((j = oe && oe.onVnodeMounted) || ve || le) && Le(() => {
      j && ht(j, B, g), ve && te.enter(H), le && Jt(g, null, B, "mounted");
    }, R);
  }, S = (g, x, A, B, R) => {
    if (A && m(g, A), B)
      for (let F = 0; F < B.length; F++)
        m(g, B[F]);
    if (R) {
      let F = R.subTree;
      if (N.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = Ui(F.children) || F), x === F || fi(F.type) && (F.ssContent === x || F.ssFallback === x)) {
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
  }, _ = (g, x, A, B, R, F, z, U, H = 0) => {
    for (let j = H; j < g.length; j++) {
      const oe = g[j] = U ? Cn(g[j]) : lt(g[j]);
      v(
        null,
        oe,
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
    N.NODE_ENV !== "production" && (U.__vnode = x);
    let { patchFlag: H, dynamicChildren: j, dirs: oe } = x;
    H |= g.patchFlag & 16;
    const W = g.props || fe, te = x.props || fe;
    let le;
    if (A && Bn(A, !1), (le = te.onVnodeBeforeUpdate) && ht(le, A, x, g), oe && Jt(x, g, A, "beforeUpdate"), A && Bn(A, !0), N.NODE_ENV !== "production" && Lt && (H = 0, z = !1, j = null), (W.innerHTML && te.innerHTML == null || W.textContent && te.textContent == null) && d(U, ""), j ? (I(
      g.dynamicChildren,
      j,
      U,
      A,
      B,
      dr(x, R),
      F
    ), N.NODE_ENV !== "production" && to(g, x)) : z || Ee(
      g,
      x,
      U,
      null,
      A,
      B,
      dr(x, R),
      F,
      !1
    ), H > 0) {
      if (H & 16)
        $(U, W, te, A, R);
      else if (H & 2 && W.class !== te.class && i(U, "class", null, te.class, R), H & 4 && i(U, "style", W.style, te.style, R), H & 8) {
        const ve = x.dynamicProps;
        for (let Ce = 0; Ce < ve.length; Ce++) {
          const Ne = ve[Ce], dt = W[Ne], Ge = te[Ne];
          (Ge !== dt || Ne === "value") && i(U, Ne, dt, Ge, R, A);
        }
      }
      H & 1 && g.children !== x.children && d(U, x.children);
    } else !z && j == null && $(U, W, te, A, R);
    ((le = te.onVnodeUpdated) || oe) && Le(() => {
      le && ht(le, A, x, g), oe && Jt(x, g, A, "updated");
    }, B);
  }, I = (g, x, A, B, R, F, z) => {
    for (let U = 0; U < x.length; U++) {
      const H = g[U], j = x[U], oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(H, j) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? u(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      v(
        H,
        j,
        oe,
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
          !Vn(F) && !(F in A) && i(
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
        z !== U && F !== "value" && i(g, F, U, z, R, B);
      }
      "value" in A && i(g, "value", x.value, A.value, R);
    }
  }, L = (g, x, A, B, R, F, z, U, H) => {
    const j = x.el = g ? g.el : l(""), oe = x.anchor = g ? g.anchor : l("");
    let { patchFlag: W, dynamicChildren: te, slotScopeIds: le } = x;
    N.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Lt || W & 2048) && (W = 0, H = !1, te = null), le && (U = U ? U.concat(le) : le), g == null ? (s(j, A, B), s(oe, A, B), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      A,
      oe,
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
    ), N.NODE_ENV !== "production" ? to(g, x) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (x.key != null || R && x === R.subTree) && to(
        g,
        x,
        !0
        /* shallow */
      )
    )) : Ee(
      g,
      x,
      A,
      oe,
      R,
      F,
      z,
      U,
      H
    );
  }, Y = (g, x, A, B, R, F, z, U, H) => {
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
    if (N.NODE_ENV !== "production" && U.type.__hmrId && Zp(U), N.NODE_ENV !== "production" && (gs(g), an(U, "mount")), Rs(g) && (U.ctx.renderer = us), N.NODE_ENV !== "production" && an(U, "init"), hd(U, !1, z), N.NODE_ENV !== "production" && cn(U, "init"), N.NODE_ENV !== "production" && Lt && (g.el = null), U.asyncDep) {
      if (R && R.registerDep(U, ne, z), !g.el) {
        const H = U.subTree = ye(Te);
        C(null, H, x, A), g.placeholder = H.el;
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
    N.NODE_ENV !== "production" && (vs(), cn(U, "mount"));
  }, Z = (g, x, A) => {
    const B = x.component = g.component;
    if (Im(g, x, A))
      if (B.asyncDep && !B.asyncResolved) {
        N.NODE_ENV !== "production" && gs(x), Q(B, x, A), N.NODE_ENV !== "production" && vs();
        return;
      } else
        B.next = x, B.update();
    else
      x.el = g.el, B.vnode = x;
  }, ne = (g, x, A, B, R, F, z) => {
    const U = () => {
      if (g.isMounted) {
        let { next: W, bu: te, u: le, parent: ve, vnode: Ce } = g;
        {
          const bt = Yu(g);
          if (bt) {
            W && (W.el = Ce.el, Q(g, W, z)), bt.asyncDep.then(() => {
              g.isUnmounted || U();
            });
            return;
          }
        }
        let Ne = W, dt;
        N.NODE_ENV !== "production" && gs(W || g.vnode), Bn(g, !1), W ? (W.el = Ce.el, Q(g, W, z)) : W = Ce, te && On(te), (dt = W.props && W.props.onVnodeBeforeUpdate) && ht(dt, ve, W, Ce), Bn(g, !0), N.NODE_ENV !== "production" && an(g, "render");
        const Ge = Ko(g);
        N.NODE_ENV !== "production" && cn(g, "render");
        const It = g.subTree;
        g.subTree = Ge, N.NODE_ENV !== "production" && an(g, "patch"), v(
          It,
          Ge,
          // parent may have changed if it's in a teleport
          u(It.el),
          // anchor may have changed if it's in a fragment
          Do(It),
          g,
          R,
          F
        ), N.NODE_ENV !== "production" && cn(g, "patch"), W.el = Ge.el, Ne === null && qi(g, Ge.el), le && Le(le, R), (dt = W.props && W.props.onVnodeUpdated) && Le(
          () => ht(dt, ve, W, Ce),
          R
        ), N.NODE_ENV !== "production" && uu(g), N.NODE_ENV !== "production" && vs();
      } else {
        let W;
        const { el: te, props: le } = x, { bm: ve, m: Ce, parent: Ne, root: dt, type: Ge } = g, It = $n(x);
        if (Bn(g, !1), ve && On(ve), !It && (W = le && le.onVnodeBeforeMount) && ht(W, Ne, x), Bn(g, !0), te && er) {
          const bt = () => {
            N.NODE_ENV !== "production" && an(g, "render"), g.subTree = Ko(g), N.NODE_ENV !== "production" && cn(g, "render"), N.NODE_ENV !== "production" && an(g, "hydrate"), er(
              te,
              g.subTree,
              g,
              R,
              null
            ), N.NODE_ENV !== "production" && cn(g, "hydrate");
          };
          It && Ge.__asyncHydrate ? Ge.__asyncHydrate(
            te,
            g,
            bt
          ) : bt();
        } else {
          dt.ce && // @ts-expect-error _def is private
          dt.ce._def.shadowRoot !== !1 && dt.ce._injectChildStyle(Ge), N.NODE_ENV !== "production" && an(g, "render");
          const bt = g.subTree = Ko(g);
          N.NODE_ENV !== "production" && cn(g, "render"), N.NODE_ENV !== "production" && an(g, "patch"), v(
            null,
            bt,
            A,
            B,
            g,
            R,
            F
          ), N.NODE_ENV !== "production" && cn(g, "patch"), x.el = bt.el;
        }
        if (Ce && Le(Ce, R), !It && (W = le && le.onVnodeMounted)) {
          const bt = x;
          Le(
            () => ht(W, Ne, bt),
            R
          );
        }
        (x.shapeFlag & 256 || Ne && $n(Ne.vnode) && Ne.vnode.shapeFlag & 256) && g.a && Le(g.a, R), g.isMounted = !0, N.NODE_ENV !== "production" && wr(g), x = A = B = null;
      }
    };
    g.scope.on();
    const H = g.effect = new ro(U);
    g.scope.off();
    const j = g.update = H.run.bind(H), oe = g.job = H.runIfDirty.bind(H);
    oe.i = g, oe.id = g.uid, H.scheduler = () => Pi(oe), Bn(g, !0), N.NODE_ENV !== "production" && (H.onTrack = g.rtc ? (W) => On(g.rtc, W) : void 0, H.onTrigger = g.rtg ? (W) => On(g.rtg, W) : void 0), j();
  }, Q = (g, x, A) => {
    x.component = g;
    const B = g.vnode.props;
    g.vnode = x, g.next = null, hm(g, x.props, B, A), xm(g, x.children, A), Ht(), ua(g), Ut();
  }, Ee = (g, x, A, B, R, F, z, U, H = !1) => {
    const j = g && g.children, oe = g ? g.shapeFlag : 0, W = x.children, { patchFlag: te, shapeFlag: le } = x;
    if (te > 0) {
      if (te & 128) {
        xt(
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
        ut(
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
    le & 8 ? (oe & 16 && Ls(j, R, F), W !== j && d(A, W)) : oe & 16 ? le & 16 ? xt(
      j,
      W,
      A,
      B,
      R,
      F,
      z,
      U,
      H
    ) : Ls(j, R, F, !0) : (oe & 8 && d(A, ""), le & 16 && _(
      W,
      A,
      B,
      R,
      F,
      z,
      U,
      H
    ));
  }, ut = (g, x, A, B, R, F, z, U, H) => {
    g = g || ms, x = x || ms;
    const j = g.length, oe = x.length, W = Math.min(j, oe);
    let te;
    for (te = 0; te < W; te++) {
      const le = x[te] = H ? Cn(x[te]) : lt(x[te]);
      v(
        g[te],
        le,
        A,
        null,
        R,
        F,
        z,
        U,
        H
      );
    }
    j > oe ? Ls(
      g,
      R,
      F,
      !0,
      !1,
      W
    ) : _(
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
  }, xt = (g, x, A, B, R, F, z, U, H) => {
    let j = 0;
    const oe = x.length;
    let W = g.length - 1, te = oe - 1;
    for (; j <= W && j <= te; ) {
      const le = g[j], ve = x[j] = H ? Cn(x[j]) : lt(x[j]);
      if (Pt(le, ve))
        v(
          le,
          ve,
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
      const le = g[W], ve = x[te] = H ? Cn(x[te]) : lt(x[te]);
      if (Pt(le, ve))
        v(
          le,
          ve,
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
        const le = te + 1, ve = le < oe ? x[le].el : B;
        for (; j <= te; )
          v(
            null,
            x[j] = H ? Cn(x[j]) : lt(x[j]),
            A,
            ve,
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
      const le = j, ve = j, Ce = /* @__PURE__ */ new Map();
      for (j = ve; j <= te; j++) {
        const st = x[j] = H ? Cn(x[j]) : lt(x[j]);
        st.key != null && (N.NODE_ENV !== "production" && Ce.has(st.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(st.key),
          "Make sure keys are unique."
        ), Ce.set(st.key, j));
      }
      let Ne, dt = 0;
      const Ge = te - ve + 1;
      let It = !1, bt = 0;
      const Fs = new Array(Ge);
      for (j = 0; j < Ge; j++) Fs[j] = 0;
      for (j = le; j <= W; j++) {
        const st = g[j];
        if (dt >= Ge) {
          bn(st, R, F, !0);
          continue;
        }
        let zt;
        if (st.key != null)
          zt = Ce.get(st.key);
        else
          for (Ne = ve; Ne <= te; Ne++)
            if (Fs[Ne - ve] === 0 && Pt(st, x[Ne])) {
              zt = Ne;
              break;
            }
        zt === void 0 ? bn(st, R, F, !0) : (Fs[zt - ve] = j + 1, zt >= bt ? bt = zt : It = !0, v(
          st,
          x[zt],
          A,
          null,
          R,
          F,
          z,
          U,
          H
        ), dt++);
      }
      const ea = It ? Cm(Fs) : ms;
      for (Ne = ea.length - 1, j = Ge - 1; j >= 0; j--) {
        const st = ve + j, zt = x[st], ta = x[st + 1], na = st + 1 < oe ? (
          // #13559, fallback to el placeholder for unresolved async component
          ta.el || ta.placeholder
        ) : B;
        Fs[j] === 0 ? v(
          null,
          zt,
          A,
          na,
          R,
          F,
          z,
          U,
          H
        ) : It && (Ne < 0 || j !== ea[Ne] ? St(zt, A, na, 2) : Ne--);
      }
    }
  }, St = (g, x, A, B, R = null) => {
    const { el: F, type: z, transition: U, children: H, shapeFlag: j } = g;
    if (j & 6) {
      St(g.component.subTree, x, A, B);
      return;
    }
    if (j & 128) {
      g.suspense.move(x, A, B);
      return;
    }
    if (j & 64) {
      z.move(g, x, A, us);
      return;
    }
    if (z === ue) {
      s(F, x, A);
      for (let W = 0; W < H.length; W++)
        St(H[W], x, A, B);
      s(g.anchor, x, A);
      return;
    }
    if (z === An) {
      w(g, x, A);
      return;
    }
    if (B !== 2 && j & 1 && U)
      if (B === 0)
        U.beforeEnter(F), s(F, x, A), Le(() => U.enter(F), R);
      else {
        const { leave: W, delayLeave: te, afterLeave: le } = U, ve = () => {
          g.ctx.isUnmounted ? o(F) : s(F, x, A);
        }, Ce = () => {
          W(F, () => {
            ve(), le && le();
          });
        };
        te ? te(F, ve, Ce) : Ce();
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
      shapeFlag: oe,
      patchFlag: W,
      dirs: te,
      cacheIndex: le
    } = g;
    if (W === -2 && (R = !1), U != null && (Ht(), bs(U, null, A, g, !0), Ut()), le != null && (x.renderCache[le] = void 0), oe & 256) {
      x.ctx.deactivate(g);
      return;
    }
    const ve = oe & 1 && te, Ce = !$n(g);
    let Ne;
    if (Ce && (Ne = z && z.onVnodeBeforeUnmount) && ht(Ne, x, g), oe & 6)
      Mf(g.component, A, B);
    else {
      if (oe & 128) {
        g.suspense.unmount(A, B);
        return;
      }
      ve && Jt(g, null, x, "beforeUnmount"), oe & 64 ? g.type.remove(
        g,
        x,
        A,
        us,
        B
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ue || W > 0 && W & 64) ? Ls(
        j,
        x,
        A,
        !1,
        !0
      ) : (F === ue && W & 384 || !R && oe & 16) && Ls(H, x, A), B && Xi(g);
    }
    (Ce && (Ne = z && z.onVnodeUnmounted) || ve) && Le(() => {
      Ne && ht(Ne, x, g), ve && Jt(g, null, x, "unmounted");
    }, A);
  }, Xi = (g) => {
    const { type: x, el: A, anchor: B, transition: R } = g;
    if (x === ue) {
      N.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && R && !R.persisted ? g.children.forEach((z) => {
        z.type === Te ? o(z.el) : Xi(z);
      }) : If(A, B);
      return;
    }
    if (x === An) {
      b(g);
      return;
    }
    const F = () => {
      o(A), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (g.shapeFlag & 1 && R && !R.persisted) {
      const { leave: z, delayLeave: U } = R, H = () => z(A, F);
      U ? U(g.el, F, H) : H();
    } else
      F();
  }, If = (g, x) => {
    let A;
    for (; g !== x; )
      A = p(g), o(g), g = A;
    o(x);
  }, Mf = (g, x, A) => {
    N.NODE_ENV !== "production" && g.type.__hmrId && eh(g);
    const {
      bum: B,
      scope: R,
      job: F,
      subTree: z,
      um: U,
      m: H,
      a: j,
      parent: oe,
      slots: { __: W }
    } = g;
    ui(H), ui(j), B && On(B), oe && q(W) && W.forEach((te) => {
      oe.renderCache[te] = void 0;
    }), R.stop(), F && (F.flags |= 8, bn(z, g, x, A)), U && Le(U, x), Le(() => {
      g.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve()), N.NODE_ENV !== "production" && rh(g);
  }, Ls = (g, x, A, B = !1, R = !1, F = 0) => {
    for (let z = F; z < g.length; z++)
      bn(g[z], x, A, B, R);
  }, Do = (g) => {
    if (g.shapeFlag & 6)
      return Do(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const x = p(g.anchor || g.el), A = x && x[pu];
    return A ? p(A) : x;
  };
  let Qi = !1;
  const Zl = (g, x, A) => {
    g == null ? x._vnode && bn(x._vnode, null, null, !0) : v(
      x._vnode || null,
      g,
      x,
      null,
      null,
      null,
      A
    ), x._vnode = g, Qi || (Qi = !0, ua(), ii(), Qi = !1);
  }, us = {
    p: v,
    um: bn,
    m: St,
    r: Xi,
    mt: ee,
    mc: _,
    pc: Ee,
    pbc: I,
    n: Do,
    o: e
  };
  let Zi, er;
  return t && ([Zi, er] = t(
    us
  )), {
    render: Zl,
    hydrate: Zi,
    createApp: um(Zl, Zi)
  };
}
function dr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Gu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function to(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (q(s) && q(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Cn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && to(r, l)), l.type === nn && (l.el = r.el), l.type === Te && !l.el && (l.el = r.el), N.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Cm(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < c ? i = l + 1 : r = l;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Yu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yu(t);
}
function ui(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ju = Symbol.for("v-scx"), Xu = () => {
  {
    const e = eo(Ju);
    return e || N.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function km(e, t) {
  return So(e, null, t);
}
function Om(e, t) {
  return So(
    e,
    null,
    N.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Qu(e, t) {
  return So(
    e,
    null,
    N.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function tn(e, t, n) {
  return N.NODE_ENV !== "production" && !se(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), So(e, t, n);
}
function So(e, t, n = fe) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  N.NODE_ENV !== "production" && !t && (s !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  N.NODE_ENV !== "production" && (l.onWarn = M);
  const a = t && s || !t && i !== "post";
  let c;
  if (ks) {
    if (i === "sync") {
      const m = Xu();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Oe, m.resume = Oe, m.pause = Oe, m;
    }
  }
  const d = je;
  l.call = (m, E, v) => Vt(m, d, E, v);
  let u = !1;
  i === "post" ? l.scheduler = (m) => {
    Le(m, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (m, E) => {
    E ? m() : Pi(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const p = qp(e, t, l);
  return ks && (c ? c.push(p) : a && p()), p;
}
function Tm(e, t, n) {
  const s = this.proxy, o = re(e) ? e.includes(".") ? Zu(s, e) : () => s[e] : e.bind(s, s);
  let i;
  se(t) ? i = t : (i = t.handler, n = t);
  const r = ss(this), l = So(o, i.bind(s), n);
  return r(), l;
}
function Zu(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Dm(e, t, n = fe) {
  const s = at();
  if (N.NODE_ENV !== "production" && !s)
    return M("useModel() called without active instance."), G();
  const o = Se(t);
  if (N.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return M(`useModel() called with prop "${t}" which is not declared.`), G();
  const i = Xe(t), r = ed(e, o), l = nu((a, c) => {
    let d, u = fe, p;
    return Qu(() => {
      const m = e[o];
      it(d, m) && (d = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const E = n.set ? n.set(m) : m;
        if (!it(E, d) && !(u !== fe && it(m, u)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || i in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${i}` in v) || (d = m, c()), s.emit(`update:${t}`, E), it(m, E) && it(m, u) && !it(E, p) && c(), u = m, p = E;
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
const ed = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function Vm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  if (N.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Qt(Se(t)) in u)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(Se(t))}" prop.`
        );
      else {
        const p = d[t];
        se(p) && (p(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && ed(s, t.slice(7));
  if (r && (r.trim && (o = n.map((d) => re(d) ? d.trim() : d)), r.number && (o = n.map(Zo))), N.NODE_ENV !== "production" && ch(e, t, o), N.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[Qt(d)] && M(
      `Event "${d}" is emitted in component ${Ki(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Qt(t)] || // also try camelCase event handler (#2249)
  s[l = Qt(Se(t))];
  !a && i && (a = s[l = Qt(Xe(t))]), a && Vt(
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
    e.emitted[l] = !0, Vt(
      c,
      e,
      6,
      o
    );
  }
}
function td(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!se(e)) {
    const a = (c) => {
      const d = td(c, t, !0);
      d && (l = !0, de(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (he(e) && s.set(e, null), null) : (q(i) ? i.forEach((a) => r[a] = null) : de(r, i), he(e) && s.set(e, r), r);
}
function Hi(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Xe(t)) || me(e, t));
}
let Dr = !1;
function di() {
  Dr = !0;
}
function Ko(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: c,
    renderCache: d,
    props: u,
    data: p,
    setupState: m,
    ctx: E,
    inheritAttrs: v
  } = e, D = uo(e);
  let C, y;
  N.NODE_ENV !== "production" && (Dr = !1);
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, V = N.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(b, {
        get(P, S, _) {
          return M(
            `Property '${String(
              S
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, S, _);
        }
      }) : b;
      C = lt(
        c.call(
          V,
          b,
          d,
          N.NODE_ENV !== "production" ? Rt(u) : u,
          m,
          p,
          E
        )
      ), y = l;
    } else {
      const b = t;
      N.NODE_ENV !== "production" && l === u && di(), C = lt(
        b.length > 1 ? b(
          N.NODE_ENV !== "production" ? Rt(u) : u,
          N.NODE_ENV !== "production" ? {
            get attrs() {
              return di(), Rt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : b(
          N.NODE_ENV !== "production" ? Rt(u) : u,
          null
        )
      ), y = t.props ? l : $m(l);
    }
  } catch (b) {
    no.length = 0, Ln(b, e, 1), C = ye(Te);
  }
  let f = C, w;
  if (N.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([f, w] = nd(C)), y && v !== !1) {
    const b = Object.keys(y), { shapeFlag: V } = f;
    if (b.length) {
      if (V & 7)
        i && b.some(Qo) && (y = Am(
          y,
          i
        )), f = $t(f, y, !1, !0);
      else if (N.NODE_ENV !== "production" && !Dr && f.type !== Te) {
        const P = Object.keys(l), S = [], _ = [];
        for (let O = 0, I = P.length; O < I; O++) {
          const $ = P[O];
          gn($) ? Qo($) || S.push($[2].toLowerCase() + $.slice(3)) : _.push($);
        }
        _.length && M(
          `Extraneous non-props attributes (${_.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), S.length && M(
          `Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (N.NODE_ENV !== "production" && !ka(f) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), f = $t(f, null, !1, !0), f.dirs = f.dirs ? f.dirs.concat(n.dirs) : n.dirs), n.transition && (N.NODE_ENV !== "production" && !ka(f) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(f, n.transition)), N.NODE_ENV !== "production" && w ? w(f) : C = f, uo(D), C;
}
const nd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ui(t, !1);
  if (s) {
    if (N.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return nd(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [lt(s), r];
};
function Ui(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rn(o)) {
      if (o.type !== Te || o.children === "v-if") {
        if (n)
          return;
        if (n = o, N.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ui(n.children);
      }
    } else
      return;
  }
  return n;
}
const $m = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Am = (e, t) => {
  const n = {};
  for (const s in e)
    (!Qo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, ka = (e) => e.shapeFlag & 7 || e.type === Te;
function Im(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (N.NODE_ENV !== "production" && (o || l) && Lt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Oa(s, r, c) : !!r;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const p = d[u];
        if (r[p] !== s[p] && !Hi(c, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Oa(s, r, c) : !0 : !!r;
  return !1;
}
function Oa(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !Hi(n, i))
      return !0;
  }
  return !1;
}
function qi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const fi = (e) => e.__isSuspense;
let Vr = 0;
const Mm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    if (e == null)
      Rm(
        t,
        n,
        s,
        o,
        i,
        r,
        l,
        a,
        c
      );
    else {
      if (i && i.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Lm(
        e,
        t,
        n,
        s,
        o,
        r,
        l,
        a,
        c
      );
    }
  },
  hydrate: Fm,
  normalize: Bm
}, Pm = Mm;
function po(e, t) {
  const n = e.props && e.props[t];
  se(n) && n();
}
function Rm(e, t, n, s, o, i, r, l, a) {
  const {
    p: c,
    o: { createElement: d }
  } = a, u = d("div"), p = e.suspense = sd(
    e,
    o,
    s,
    t,
    u,
    n,
    i,
    r,
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
    i,
    r
  ), p.deps > 0 ? (po(e, "onPending"), po(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    r
  ), _s(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Lm(e, t, n, s, o, i, r, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: E, pendingBranch: v, isInFallback: D, isHydrating: C } = u;
  if (v)
    u.pendingBranch = p, Pt(p, v) ? (a(
      v,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : D && (C || (a(
      E,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), _s(u, m)))) : (u.pendingId = Vr++, C ? (u.isHydrating = !1, u.activeBranch = v) : c(v, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), D ? (a(
      null,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      E,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), _s(u, m))) : E && Pt(p, E) ? (a(
      E,
      p,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), u.resolve(!0)) : (a(
      null,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (E && Pt(p, E))
    a(
      E,
      p,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), _s(u, p);
  else if (po(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = Vr++, a(
    null,
    p,
    u.hiddenContainer,
    null,
    o,
    u,
    i,
    r,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: y, pendingId: f } = u;
    y > 0 ? setTimeout(() => {
      u.pendingId === f && u.fallback(m);
    }, y) : y === 0 && u.fallback(m);
  }
}
let Ta = !1;
function sd(e, t, n, s, o, i, r, l, a, c, d = !1) {
  N.NODE_ENV !== "production" && !Ta && (Ta = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: m,
    n: E,
    o: { parentNode: v, remove: D }
  } = c;
  let C;
  const y = jm(e);
  y && t && t.pendingBranch && (C = t.pendingId, t.deps++);
  const f = e.props ? ei(e.props.timeout) : void 0;
  N.NODE_ENV !== "production" && dl(f, "Suspense timeout");
  const w = i, b = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: r,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Vr++,
    timeout: typeof f == "number" ? f : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, P = !1) {
      if (N.NODE_ENV !== "production") {
        if (!V && !b.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (b.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: S,
        activeBranch: _,
        pendingBranch: O,
        pendingId: I,
        effects: $,
        parentComponent: L,
        container: Y
      } = b;
      let ee = !1;
      b.isHydrating ? b.isHydrating = !1 : V || (ee = _ && O.transition && O.transition.mode === "out-in", ee && (_.transition.afterLeave = () => {
        I === b.pendingId && (p(
          O,
          Y,
          i === w ? E(_) : i,
          0
        ), xs($));
      }), _ && (v(_.el) === Y && (i = E(_)), m(_, L, b, !0)), ee || p(O, Y, i, 0)), _s(b, O), b.pendingBranch = null, b.isInFallback = !1;
      let Z = b.parent, ne = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...$), ne = !0;
          break;
        }
        Z = Z.parent;
      }
      !ne && !ee && xs($), b.effects = [], y && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), po(S, "onResolve");
    },
    fallback(V) {
      if (!b.pendingBranch)
        return;
      const { vnode: P, activeBranch: S, parentComponent: _, container: O, namespace: I } = b;
      po(P, "onFallback");
      const $ = E(S), L = () => {
        b.isInFallback && (u(
          null,
          V,
          O,
          $,
          _,
          null,
          // fallback tree will not have suspense context
          I,
          l,
          a
        ), _s(b, V));
      }, Y = V.transition && V.transition.mode === "out-in";
      Y && (S.transition.afterLeave = L), b.isInFallback = !0, m(
        S,
        _,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), Y || L();
    },
    move(V, P, S) {
      b.activeBranch && p(b.activeBranch, V, P, S), b.container = V;
    },
    next() {
      return b.activeBranch && E(b.activeBranch);
    },
    registerDep(V, P, S) {
      const _ = !!b.pendingBranch;
      _ && b.deps++;
      const O = V.vnode.el;
      V.asyncDep.catch((I) => {
        Ln(I, V, 0);
      }).then((I) => {
        if (V.isUnmounted || b.isUnmounted || b.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: $ } = V;
        N.NODE_ENV !== "production" && gs($), Rr(V, I, !1), O && ($.el = O);
        const L = !O && V.subTree.el;
        P(
          V,
          $,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          v(O || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : E(V.subTree),
          b,
          r,
          S
        ), L && D(L), qi(V, $.el), N.NODE_ENV !== "production" && vs(), _ && --b.deps === 0 && b.resolve();
      });
    },
    unmount(V, P) {
      b.isUnmounted = !0, b.activeBranch && m(
        b.activeBranch,
        n,
        V,
        P
      ), b.pendingBranch && m(
        b.pendingBranch,
        n,
        V,
        P
      );
    }
  };
  return b;
}
function Fm(e, t, n, s, o, i, r, l, a) {
  const c = t.suspense = sd(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    o,
    i,
    r,
    l,
    !0
  ), d = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    i,
    r
  );
  return c.deps === 0 && c.resolve(!1, !0), d;
}
function Bm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Da(
    s ? n.default : n
  ), e.ssFallback = s ? Da(n.fallback) : ye(Te);
}
function Da(e) {
  let t;
  if (se(e)) {
    const n = ns && e._c;
    n && (e._d = !1, k()), e = e(), n && (e._d = !0, t = Qe, id());
  }
  if (q(e)) {
    const n = Ui(e);
    N.NODE_ENV !== "production" && !n && e.filter((s) => s !== _l).length > 0 && M("<Suspense> slots expect a single root node."), e = n;
  }
  return e = lt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function od(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : xs(e);
}
function _s(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, qi(s, o));
}
function jm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ue = Symbol.for("v-fgt"), nn = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), no = [];
let Qe = null;
function k(e = !1) {
  no.push(Qe = e ? null : []);
}
function id() {
  no.pop(), Qe = no[no.length - 1] || null;
}
let ns = 1;
function $r(e, t = !1) {
  ns += e, e < 0 && Qe && t && (Qe.hasOnce = !0);
}
function rd(e) {
  return e.dynamicChildren = ns > 0 ? Qe || ms : null, id(), ns > 0 && Qe && Qe.push(e), e;
}
function T(e, t, n, s, o, i) {
  return rd(
    h(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Kt(e, t, n, s, o) {
  return rd(
    ye(
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
function Pt(e, t) {
  if (N.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Uo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Ar;
function Hm(e) {
  Ar = e;
}
const Um = (...e) => ad(
  ...Ar ? Ar(e, Pe) : e
), ld = ({ key: e }) => e ?? null, zo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || Ve(e) || se(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, s = 0, o = null, i = e === ue ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ld(t),
    ref: t && zo(t),
    scopeId: Ri,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pe
  };
  return l ? (kl(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), N.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), ns > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Qe.push(a), a;
}
const ye = N.NODE_ENV !== "production" ? Um : ad;
function ad(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === _l) && (N.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Te), rn(e)) {
    const l = $t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && kl(l, n), ns > 0 && !i && Qe && (l.shapeFlag & 6 ? Qe[Qe.indexOf(e)] = l : Qe.push(l)), l.patchFlag = -2, l;
  }
  if (yd(e) && (e = e.__vccOpts), t) {
    t = cd(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Ze(l)), he(a) && (ws(a) && !q(a) && (a = de({}, a)), t.style = Nt(a));
  }
  const r = re(e) ? 1 : fi(e) ? 128 : hu(e) ? 64 : he(e) ? 4 : se(e) ? 2 : 0;
  return N.NODE_ENV !== "production" && r & 4 && ws(e) && (e = ae(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), h(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function cd(e) {
  return e ? ws(e) || Fu(e) ? de({}, e) : e : null;
}
function $t(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, c = t ? dd(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ld(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? q(i) ? i.concat(zo(t)) : [i, zo(t)] : zo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: N.NODE_ENV !== "production" && r === -1 && q(l) ? l.map(ud) : l,
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
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && vn(
    d,
    a.clone(d)
  ), d;
}
function ud(e) {
  const t = $t(e);
  return q(e.children) && (t.children = e.children.map(ud)), t;
}
function He(e = " ", t = 0) {
  return ye(nn, null, e, t);
}
function Cs(e, t) {
  const n = ye(An, null, e);
  return n.staticCount = t, n;
}
function X(e = "", t = !1) {
  return t ? (k(), Kt(Te, null, e)) : ye(Te, null, e);
}
function lt(e) {
  return e == null || typeof e == "boolean" ? ye(Te) : q(e) ? ye(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? Cn(e) : ye(nn, null, String(e));
}
function Cn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : $t(e);
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
      const o = t.default;
      o && (o._c && (o._d = !1), kl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Fu(t) ? t._ctx = Pe : o === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else se(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [He(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ze([t.class, s.class]));
      else if (o === "style")
        t.style = Nt([t.style, s.style]);
      else if (gn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(q(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ht(e, t, n, s = null) {
  Vt(e, t, 7, [
    n,
    s
  ]);
}
const qm = Mu();
let Km = 0;
function fd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || qm, i = {
    uid: Km++,
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
    scope: new il(
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
    propsOptions: ju(s, o),
    emitsOptions: td(s, o),
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
  return N.NODE_ENV !== "production" ? i.ctx = jh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Vm.bind(null, i), e.ce && e.ce(i), i;
}
let je = null;
const at = () => je || Pe;
let pi, Ir;
{
  const e = Eo(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  pi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), Ir = t(
    "__VUE_SSR_SETTERS__",
    (n) => ks = n
  );
}
const ss = (e) => {
  const t = je;
  return pi(e), e.scope.on(), () => {
    e.scope.off(), pi(t);
  };
}, Mr = () => {
  je && je.scope.off(), pi(null);
}, zm = /* @__PURE__ */ Ue("slot,component");
function Pr(e, { isNativeTag: t }) {
  (zm(e) || t(e)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function pd(e) {
  return e.vnode.shapeFlag & 4;
}
let ks = !1;
function hd(e, t = !1, n = !1) {
  t && Ir(t);
  const { props: s, children: o } = e.vnode, i = pd(e);
  fm(e, s, i, t), wm(e, o, n || t);
  const r = i ? Wm(e, t) : void 0;
  return t && Ir(!1), r;
}
function Wm(e, t) {
  var n;
  const s = e.type;
  if (N.NODE_ENV !== "production") {
    if (s.name && Pr(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let r = 0; r < i.length; r++)
        Pr(i[r], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let r = 0; r < i.length; r++)
        fu(i[r]);
    }
    s.compilerOptions && Ol() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zs), N.NODE_ENV !== "production" && Hh(e);
  const { setup: o } = s;
  if (o) {
    Ht();
    const i = e.setupContext = o.length > 1 ? vd(e) : null, r = ss(e), l = rs(
      o,
      e,
      0,
      [
        N.NODE_ENV !== "production" ? Rt(e.props) : e.props,
        i
      ]
    ), a = Ci(l);
    if (Ut(), r(), (a || e.sp) && !$n(e) && yl(e), a) {
      if (l.then(Mr, Mr), t)
        return l.then((c) => {
          Rr(e, c, t);
        }).catch((c) => {
          Ln(c, e, 0);
        });
      if (e.asyncDep = l, N.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        M(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Rr(e, l, t);
  } else
    gd(e, t);
}
function Rr(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) ? (N.NODE_ENV !== "production" && rn(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), N.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ul(t), N.NODE_ENV !== "production" && Uh(e)) : N.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), gd(e, n);
}
let so, Lr;
function md(e) {
  so = e, Lr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Bh));
  };
}
const Ol = () => !so;
function gd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && so && !s.render) {
      const o = s.template || xl(e).template;
      if (o) {
        N.NODE_ENV !== "production" && an(e, "compile");
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, c = de(
          de(
            {
              isCustomElement: i,
              delimiters: l
            },
            r
          ),
          a
        );
        s.render = so(o, c), N.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || Oe, Lr && Lr(e);
  }
  {
    const o = ss(e);
    Ht();
    try {
      om(e);
    } finally {
      Ut(), o();
    }
  }
  N.NODE_ENV !== "production" && !s.render && e.render === Oe && !t && (!so && s.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", s));
}
const Va = N.NODE_ENV !== "production" ? {
  get(e, t) {
    return di(), Fe(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Fe(e, "get", ""), e[t];
  }
};
function Gm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Fe(e, "get", "$slots"), t[n];
    }
  });
}
function vd(e) {
  const t = (n) => {
    if (N.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (q(n) ? s = "array" : Ve(n) && (s = "ref")), s !== "object" && M(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (N.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Va));
      },
      get slots() {
        return s || (s = Gm(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
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
function Co(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ul(Zc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Xn)
        return Xn[n](e);
    },
    has(t, n) {
      return n in t || n in Xn;
    }
  })) : e.proxy;
}
const Ym = /(?:^|[-_])(\w)/g, Jm = (e) => e.replace(Ym, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Os(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ki(e, t, n = !1) {
  let s = Os(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? Jm(s) : n ? "App" : "Anonymous";
}
function yd(e) {
  return se(e) && "__vccOpts" in e;
}
const ie = (e, t) => {
  const n = Bp(e, t, ks);
  if (N.NODE_ENV !== "production") {
    const s = at();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Yt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? he(t) && !q(t) ? rn(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && rn(n) && (n = [n]), ye(e, t, n));
}
function bd() {
  if (N.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!he(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Ve(u)) {
        Ht();
        const p = u.value;
        return Ut(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (hn(u))
          return [
            "div",
            {},
            ["span", e, et(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${qt(u) ? " (readonly)" : ""}`
          ];
        if (qt(u))
          return [
            "div",
            {},
            ["span", e, et(u) ? "ShallowReadonly" : "Readonly"],
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
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const p = [];
    u.type.props && u.props && p.push(r("props", ae(u.props))), u.setupState !== fe && p.push(r("setup", u.setupState)), u.data !== fe && p.push(r("data", ae(u.data)));
    const m = a(u, "computed");
    m && p.push(r("computed", m));
    const E = a(u, "inject");
    return E && p.push(r("injected", E)), p.push([
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
  function r(u, p) {
    return p = de({}, p), Object.keys(p).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : he(u) ? ["object", { object: p ? ae(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const m = u.type;
    if (se(m))
      return;
    const E = {};
    for (const v in u.ctx)
      c(m, v, p) && (E[v] = u.ctx[v]);
    return E;
  }
  function c(u, p, m) {
    const E = u[m];
    if (q(E) && E.includes(p) || he(E) && p in E || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((v) => c(v, p, m)))
      return !0;
  }
  function d(u) {
    return et(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Xm(e, t, n, s) {
  const o = n[s];
  if (o && _d(o, e))
    return o;
  const i = t();
  return i.memo = e.slice(), i.cacheIndex = s, n[s] = i;
}
function _d(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (it(n[s], t[s]))
      return !1;
  return ns > 0 && Qe && Qe.push(e), !0;
}
const Fr = "3.5.18", $e = N.NODE_ENV !== "production" ? M : Oe, Qm = Mi, Zm = Mt, eg = pl, tg = {
  createComponentInstance: fd,
  setupComponent: hd,
  renderComponentRoot: Ko,
  setCurrentRenderingInstance: uo,
  isVNode: rn,
  normalizeVNode: lt,
  getComponentPublicInstance: Co,
  ensureValidVNode: Nl,
  pushWarningContext: gs,
  popWarningContext: vs
}, ng = tg, sg = null, og = null, ig = null;
var xe = {};
let Br;
const $a = typeof window < "u" && window.trustedTypes;
if ($a)
  try {
    Br = /* @__PURE__ */ $a.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    xe.NODE_ENV !== "production" && $e(`Error creating trusted types policy: ${e}`);
  }
const Ed = Br ? (e) => Br.createHTML(e) : (e) => e, rg = "http://www.w3.org/2000/svg", lg = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Aa = dn && /* @__PURE__ */ dn.createElement("template"), ag = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? dn.createElementNS(rg, e) : t === "mathml" ? dn.createElementNS(lg, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
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
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
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
}, _n = "transition", Hs = "animation", Ts = Symbol("_vtc"), Nd = {
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
  gl,
  Nd
), cg = (e) => (e.displayName = "Transition", e.props = wd, e), en = /* @__PURE__ */ cg(
  (e, { slots: t }) => Yt(bu, xd(e), t)
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
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = r,
    appearToClass: d = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, E = ug(o), v = E && E[0], D = E && E[1], {
    onBeforeEnter: C,
    onEnter: y,
    onEnterCancelled: f,
    onLeave: w,
    onLeaveCancelled: b,
    onBeforeAppear: V = C,
    onAppear: P = y,
    onAppearCancelled: S = f
  } = t, _ = ($, L, Y, ee) => {
    $._enterCancelled = ee, Nn($, L ? d : l), Nn($, L ? c : r), Y && Y();
  }, O = ($, L) => {
    $._isLeaving = !1, Nn($, u), Nn($, m), Nn($, p), L && L();
  }, I = ($) => (L, Y) => {
    const ee = $ ? P : y, Z = () => _(L, $, Y);
    jn(ee, [L, Z]), Ma(() => {
      Nn(L, $ ? a : i), Wt(L, $ ? d : l), Ia(ee) || Pa(L, s, v, Z);
    });
  };
  return de(t, {
    onBeforeEnter($) {
      jn(C, [$]), Wt($, i), Wt($, r);
    },
    onBeforeAppear($) {
      jn(V, [$]), Wt($, a), Wt($, c);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave($, L) {
      $._isLeaving = !0;
      const Y = () => O($, L);
      Wt($, u), $._enterCancelled ? (Wt($, p), jr()) : (jr(), Wt($, p)), Ma(() => {
        $._isLeaving && (Nn($, u), Wt($, m), Ia(w) || Pa($, s, D, Y));
      }), jn(w, [$, Y]);
    },
    onEnterCancelled($) {
      _($, !1, void 0, !0), jn(f, [$]);
    },
    onAppearCancelled($) {
      _($, !0, void 0, !0), jn(S, [$]);
    },
    onLeaveCancelled($) {
      O($), jn(b, [$]);
    }
  });
}
function ug(e) {
  if (e == null)
    return null;
  if (he(e))
    return [fr(e.enter), fr(e.leave)];
  {
    const t = fr(e);
    return [t, t];
  }
}
function fr(e) {
  const t = ei(e);
  return xe.NODE_ENV !== "production" && dl(t, "<transition> explicit duration"), t;
}
function Wt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ts] || (e[Ts] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ts];
  n && (n.delete(t), n.size || (e[Ts] = void 0));
}
function Ma(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let dg = 0;
function Pa(e, t, n, s) {
  const o = e._endId = ++dg, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: a } = Sd(e, t);
  if (!r)
    return s();
  const c = r + "end";
  let d = 0;
  const u = () => {
    e.removeEventListener(c, p), i();
  }, p = (m) => {
    m.target === e && ++d >= a && u();
  };
  setTimeout(() => {
    d < a && u();
  }, l + 1), e.addEventListener(c, p);
}
function Sd(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${_n}Delay`), i = s(`${_n}Duration`), r = Ra(o, i), l = s(`${Hs}Delay`), a = s(`${Hs}Duration`), c = Ra(l, a);
  let d = null, u = 0, p = 0;
  t === _n ? r > 0 && (d = _n, u = r, p = i.length) : t === Hs ? c > 0 && (d = Hs, u = c, p = a.length) : (u = Math.max(r, c), d = u > 0 ? r > c ? _n : Hs : null, p = d ? d === _n ? i.length : a.length : 0);
  const m = d === _n && /\b(transform|all)(,|$)/.test(
    s(`${_n}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: p,
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
function jr() {
  return document.body.offsetHeight;
}
function fg(e, t, n) {
  const s = e[Ts];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const hi = Symbol("_vod"), Cd = Symbol("_vsh"), Tl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[hi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Us(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Us(e, !0), s.enter(e)) : s.leave(e, () => {
      Us(e, !1);
    }) : Us(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Us(e, t);
  }
};
xe.NODE_ENV !== "production" && (Tl.name = "show");
function Us(e, t) {
  e.style.display = t ? e[hi] : "none", e[Cd] = !t;
}
function pg() {
  Tl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const kd = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function hg(e) {
  const t = at();
  if (!t) {
    xe.NODE_ENV !== "production" && $e("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => mi(i, o));
  };
  xe.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? mi(t.ce, o) : Hr(t.subTree, o), n(o);
  };
  bl(() => {
    xs(s);
  }), We(() => {
    tn(s, Oe, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), At(() => o.disconnect());
  });
}
function Hr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Hr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    mi(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => Hr(n, t));
  else if (e.type === An) {
    let { el: n, anchor: s } = e;
    for (; n && (mi(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function mi(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const o in t) {
      const i = Mc(t[o]);
      n.setProperty(`--${o}`, i), s += `--${o}: ${i};`;
    }
    n[kd] = s;
  }
}
const mg = /(^|;)\s*display\s*:/;
function gg(e, t, n) {
  const s = e.style, o = re(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (re(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && Wo(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && Wo(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), Wo(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[kd];
      r && (n += ";" + r), s.cssText = n, i = mg.test(n);
    }
  } else t && e.removeAttribute("style");
  hi in e && (e[hi] = i ? s.display : "", e[Cd] && (s.display = "none"));
}
const vg = /[^\\];\s*$/, Fa = /\s*!important$/;
function Wo(e, t, n) {
  if (q(n))
    n.forEach((s) => Wo(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && vg.test(n) && $e(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = yg(e, t);
    Fa.test(n) ? e.setProperty(
      Xe(s),
      n.replace(Fa, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ba = ["Webkit", "Moz", "ms"], pr = {};
function yg(e, t) {
  const n = pr[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return pr[t] = s;
  s = on(s);
  for (let o = 0; o < Ba.length; o++) {
    const i = Ba[o] + s;
    if (i in e)
      return pr[t] = i;
  }
  return t;
}
const ja = "http://www.w3.org/1999/xlink";
function Ha(e, t, n, s, o, i = tp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ja, t.slice(6, t.length)) : e.setAttributeNS(ja, t, n) : n == null || i && !ol(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : yt(n) ? String(n) : n
  );
}
function Ua(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ed(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
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
    l === "boolean" ? n = ol(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    xe.NODE_ENV !== "production" && !r && $e(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function pn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function bg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const qa = Symbol("_vei");
function _g(e, t, n, s, o = null) {
  const i = e[qa] || (e[qa] = {}), r = i[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? za(s, t) : s;
  else {
    const [l, a] = Eg(t);
    if (s) {
      const c = i[t] = xg(
        xe.NODE_ENV !== "production" ? za(s, t) : s,
        o
      );
      pn(e, l, c, a);
    } else r && (bg(e, l, r, a), i[t] = void 0);
  }
}
const Ka = /(?:Once|Passive|Capture)$/;
function Eg(e) {
  let t;
  if (Ka.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ka); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let hr = 0;
const Ng = /* @__PURE__ */ Promise.resolve(), wg = () => hr || (Ng.then(() => hr = 0), hr = Date.now());
function xg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Vt(
      Sg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = wg(), n;
}
function za(e, t) {
  return se(e) || q(e) ? e : ($e(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Oe);
}
function Sg(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Wa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cg = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? fg(e, s, r) : t === "style" ? gg(e, n, s) : gn(t) ? Qo(t) || _g(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kg(e, t, s, r)) ? (Ua(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ha(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? Ua(e, Se(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ha(e, t, s, r));
};
function kg(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wa(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wa(t) && re(n) ? !1 : t in e;
}
const Ga = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Re(e, t, n) {
  const s = /* @__PURE__ */ vl(e, t);
  ki(s) && de(s, t);
  class o extends zi {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Og = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Re(e, t, Ld), Tg = typeof HTMLElement < "u" ? HTMLElement : class {
};
class zi extends Tg {
  constructor(t, n = {}, s = Es) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Es ? this._root = this.shadowRoot : (xe.NODE_ENV !== "production" && this.shadowRoot && $e(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof zi) {
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
    this._connected = !1, wo(() => {
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
      const { props: i, styles: r } = s;
      let l;
      if (i && !q(i))
        for (const a in i) {
          const c = i[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = ei(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Se(a)] = !0);
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
          get: () => No(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = q(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(Se))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Ga;
    const o = Se(t);
    n && this._numberProps && this._numberProps[o] && (s = ei(s)), this._setProp(o, s, !1, !0);
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
    if (n !== this._props[t] && (n === Ga ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(Xe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Xe(t), n + "") : n || this.removeAttribute(Xe(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Rd(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ye(this._def, de(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, xe.NODE_ENV !== "production" && (s.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            ki(r[0]) ? de({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Xe(i) !== i && o(Xe(i), r);
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
      const i = document.createElement("style");
      if (s && i.setAttribute("nonce", s), i.textContent = t[o], this.shadowRoot.prepend(i), xe.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(i);
          }
        } else
          (this._styles || (this._styles = [])).push(i);
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
      const o = t[s], i = o.getAttribute("name") || "default", r = this._slots[i], l = o.parentNode;
      if (r)
        for (const a of r) {
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
    if (xe.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function Ur(e) {
  const t = at(), n = t && t.ce;
  return n || (xe.NODE_ENV !== "production" && $e(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Dg() {
  const e = xe.NODE_ENV !== "production" ? Ur("useShadowRoot") : Ur();
  return e && e.shadowRoot;
}
function Vg(e = "$style") {
  {
    const t = at();
    if (!t)
      return xe.NODE_ENV !== "production" && $e("useCssModule must be called inside setup()"), fe;
    const n = t.type.__cssModules;
    if (!n)
      return xe.NODE_ENV !== "production" && $e("Current instance does not have CSS modules injected."), fe;
    const s = n[e];
    return s || (xe.NODE_ENV !== "production" && $e(`Current instance does not have CSS module named "${e}".`), fe);
  }
}
const Od = /* @__PURE__ */ new WeakMap(), Td = /* @__PURE__ */ new WeakMap(), gi = Symbol("_moveCb"), Ya = Symbol("_enterCb"), $g = (e) => (delete e.props.mode, e), Ag = /* @__PURE__ */ $g({
  name: "TransitionGroup",
  props: /* @__PURE__ */ de({}, wd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = at(), s = ml();
    let o, i;
    return Bi(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Lg(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(Mg), o.forEach(Pg);
      const l = o.filter(Rg);
      jr(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Wt(c, r), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[gi] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", u), c[gi] = null, Nn(c, r));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const r = ae(e), l = xd(r);
      let a = r.tag || ue;
      if (o = [], i)
        for (let c = 0; c < i.length; c++) {
          const d = i[c];
          d.el && d.el instanceof Element && (o.push(d), vn(
            d,
            Ss(
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
      i = t.default ? Li(t.default()) : [];
      for (let c = 0; c < i.length; c++) {
        const d = i[c];
        d.key != null ? vn(
          d,
          Ss(d, l, s, n)
        ) : xe.NODE_ENV !== "production" && d.type !== nn && $e("<TransitionGroup> children must be keyed.");
      }
      return ye(a, null, i);
    };
  }
}), Ig = Ag;
function Mg(e) {
  const t = e.el;
  t[gi] && t[gi](), t[Ya] && t[Ya]();
}
function Pg(e) {
  Td.set(e, e.el.getBoundingClientRect());
}
function Rg(e) {
  const t = Od.get(e), n = Td.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Lg(e, t, n) {
  const s = e.cloneNode(), o = e[Ts];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: r } = Sd(s);
  return i.removeChild(s), r;
}
const Pn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => On(t, n) : t;
};
function Fg(e) {
  e.target.composing = !0;
}
function Ja(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tt = Symbol("_assign"), Rn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Tt] = Pn(o);
    const i = s || o.props && o.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = Zo(l)), e[Tt](l);
    }), n && pn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (pn(e, "compositionstart", Fg), pn(e, "compositionend", Ja), pn(e, "change", Ja));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Tt] = Pn(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Zo(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Xt = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Tt] = Pn(n), pn(e, "change", () => {
      const s = e._modelValue, o = Ds(e), i = e.checked, r = e[Tt];
      if (q(s)) {
        const l = Ti(s, o), a = l !== -1;
        if (i && !a)
          r(s.concat(o));
        else if (!i && a) {
          const c = [...s];
          c.splice(l, 1), r(c);
        }
      } else if (is(s)) {
        const l = new Set(s);
        i ? l.add(o) : l.delete(o), r(l);
      } else
        r(Dd(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Xa,
  beforeUpdate(e, t, n) {
    e[Tt] = Pn(n), Xa(e, t, n);
  }
};
function Xa(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (q(t))
    o = Ti(t, s.props.value) > -1;
  else if (is(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Mn(t, Dd(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Dl = {
  created(e, { value: t }, n) {
    e.checked = Mn(t, n.props.value), e[Tt] = Pn(n), pn(e, "change", () => {
      e[Tt](Ds(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Tt] = Pn(s), t !== n && (e.checked = Mn(t, s.props.value));
  }
}, Wi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = is(t);
    pn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? Zo(Ds(r)) : Ds(r)
      );
      e[Tt](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, wo(() => {
        e._assigning = !1;
      });
    }), e[Tt] = Pn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Qa(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Tt] = Pn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Qa(e, t);
  }
};
function Qa(e, t) {
  const n = e.multiple, s = q(t);
  if (n && !s && !is(t)) {
    xe.NODE_ENV !== "production" && $e(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, i = e.options.length; o < i; o++) {
    const r = e.options[o], l = Ds(r);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? r.selected = t.some((c) => String(c) === String(l)) : r.selected = Ti(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (Mn(Ds(r), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ds(e) {
  return "_value" in e ? e._value : e.value;
}
function Dd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Vd = {
  created(e, t, n) {
    Lo(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Lo(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Lo(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Lo(e, t, n, s, "updated");
  }
};
function $d(e, t) {
  switch (e) {
    case "SELECT":
      return Wi;
    case "TEXTAREA":
      return Rn;
    default:
      switch (t) {
        case "checkbox":
          return Xt;
        case "radio":
          return Dl;
        default:
          return Rn;
      }
  }
}
function Lo(e, t, n, s, o) {
  const r = $d(
    e.tagName,
    n.props && n.props.type
  )[o];
  r && r(e, t, n, s);
}
function Bg() {
  Rn.getSSRProps = ({ value: e }) => ({ value: e }), Dl.getSSRProps = ({ value: e }, t) => {
    if (t.props && Mn(t.props.value, e))
      return { checked: !0 };
  }, Xt.getSSRProps = ({ value: e }, t) => {
    if (q(e)) {
      if (t.props && Ti(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (is(e)) {
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
const jg = ["ctrl", "shift", "alt", "meta"], Hg = {
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
  exact: (e, t) => jg.some((n) => e[`${n}Key`] && !t.includes(n))
}, sn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = Hg[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, Ug = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ad = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Xe(o.key);
    if (t.some(
      (r) => r === i || Ug[r] === i
    ))
      return e(o);
  });
}, Id = /* @__PURE__ */ de({ patchProp: Cg }, ag);
let oo, Za = !1;
function Md() {
  return oo || (oo = Ku(Id));
}
function Pd() {
  return oo = Za ? oo : zu(Id), Za = !0, oo;
}
const Rd = (...e) => {
  Md().render(...e);
}, qg = (...e) => {
  Pd().hydrate(...e);
}, Es = (...e) => {
  const t = Md().createApp(...e);
  xe.NODE_ENV !== "production" && (Bd(t), jd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Hd(s);
    if (!o) return;
    const i = t._component;
    !se(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Fd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
}, Ld = (...e) => {
  const t = Pd().createApp(...e);
  xe.NODE_ENV !== "production" && (Bd(t), jd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Hd(s);
    if (o)
      return n(o, !0, Fd(o));
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
  if (re(e)) {
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
const Kg = () => {
  ec || (ec = !0, Bg(), pg());
}, zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: bu,
  BaseTransitionPropsValidators: gl,
  Comment: Te,
  DeprecationTypes: ig,
  EffectScope: il,
  ErrorCodes: Yp,
  ErrorTypeStrings: Qm,
  Fragment: ue,
  KeepAlive: Ah,
  ReactiveEffect: ro,
  Static: An,
  Suspense: Pm,
  Teleport: ls,
  Text: nn,
  TrackOpTypes: jp,
  Transition: en,
  TransitionGroup: Ig,
  TriggerOpTypes: Hp,
  VueElement: zi,
  assertNumber: dl,
  callWithAsyncErrorHandling: Vt,
  callWithErrorHandling: rs,
  camelize: Se,
  capitalize: on,
  cloneVNode: $t,
  compatUtils: og,
  computed: ie,
  createApp: Es,
  createBlock: Kt,
  createCommentVNode: X,
  createElementBlock: T,
  createElementVNode: h,
  createHydrationRenderer: zu,
  createPropsRestProxy: tm,
  createRenderer: Ku,
  createSSRApp: Ld,
  createSlots: Lh,
  createStaticVNode: Cs,
  createTextVNode: He,
  createVNode: ye,
  customRef: nu,
  defineAsyncComponent: Vh,
  defineComponent: vl,
  defineCustomElement: Re,
  defineEmits: Kh,
  defineExpose: zh,
  defineModel: Yh,
  defineOptions: Wh,
  defineProps: qh,
  defineSSRCustomElement: Og,
  defineSlots: Gh,
  devtools: Zm,
  effect: up,
  effectScope: ap,
  getCurrentInstance: at,
  getCurrentScope: rl,
  getCurrentWatcher: Up,
  getTransitionRawChildren: Li,
  guardReactiveProps: cd,
  h: Yt,
  handleError: Ln,
  hasInjectionContext: dm,
  hydrate: qg,
  hydrateOnIdle: Sh,
  hydrateOnInteraction: Th,
  hydrateOnMediaQuery: Oh,
  hydrateOnVisible: kh,
  initCustomFormatter: bd,
  initDirectivesForSSR: Kg,
  inject: eo,
  isMemoSame: _d,
  isProxy: ws,
  isReactive: hn,
  isReadonly: qt,
  isRef: Ve,
  isRuntimeOnly: Ol,
  isShallow: et,
  isVNode: rn,
  markRaw: Zc,
  mergeDefaults: Zh,
  mergeModels: em,
  mergeProps: dd,
  nextTick: wo,
  normalizeClass: Ze,
  normalizeProps: Yf,
  normalizeStyle: Nt,
  onActivated: xu,
  onBeforeMount: ku,
  onBeforeUnmount: ji,
  onBeforeUpdate: bl,
  onDeactivated: Su,
  onErrorCaptured: Vu,
  onMounted: We,
  onRenderTracked: Du,
  onRenderTriggered: Tu,
  onScopeDispose: Pc,
  onServerPrefetch: Ou,
  onUnmounted: At,
  onUpdated: Bi,
  onWatcherCleanup: ou,
  openBlock: k,
  popScopeId: dh,
  provide: Pu,
  proxyRefs: ul,
  pushScopeId: uh,
  queuePostFlushCb: xs,
  reactive: Ns,
  readonly: Ai,
  ref: G,
  registerRuntimeCompiler: md,
  render: Rd,
  renderList: Ae,
  renderSlot: as,
  resolveComponent: Ph,
  resolveDirective: Rh,
  resolveDynamicComponent: $u,
  resolveFilter: sg,
  resolveTransitionHooks: Ss,
  setBlockTracking: $r,
  setDevtoolsHook: eg,
  setTransitionHooks: vn,
  shallowReactive: Qc,
  shallowReadonly: Rt,
  shallowRef: eu,
  ssrContextKey: Ju,
  ssrUtils: ng,
  stop: dp,
  toDisplayString: J,
  toHandlerKey: Qt,
  toHandlers: Fh,
  toRaw: ae,
  toRef: Lp,
  toRefs: Mp,
  toValue: $p,
  transformVNodeArgs: Hm,
  triggerRef: Vp,
  unref: No,
  useAttrs: Qh,
  useCssModule: Vg,
  useCssVars: hg,
  useHost: Ur,
  useId: mh,
  useModel: Dm,
  useSSRContext: Xu,
  useShadowRoot: Dg,
  useSlots: Xh,
  useTemplateRef: gh,
  useTransitionState: ml,
  vModelCheckbox: Xt,
  vModelDynamic: Vd,
  vModelRadio: Dl,
  vModelSelect: Wi,
  vModelText: Rn,
  vShow: Tl,
  version: Fr,
  warn: $e,
  watch: tn,
  watchEffect: km,
  watchPostEffect: Om,
  watchSyncEffect: Qu,
  withAsyncContext: nm,
  withCtx: kt,
  withDefaults: Jh,
  withDirectives: mt,
  withKeys: Ad,
  withMemo: Xm,
  withModifiers: sn,
  withScopeId: fh
}, Symbol.toStringTag, { value: "Module" }));
var K = {};
const ho = Symbol(K.NODE_ENV !== "production" ? "Fragment" : ""), io = Symbol(K.NODE_ENV !== "production" ? "Teleport" : ""), Vl = Symbol(K.NODE_ENV !== "production" ? "Suspense" : ""), vi = Symbol(K.NODE_ENV !== "production" ? "KeepAlive" : ""), Ud = Symbol(
  K.NODE_ENV !== "production" ? "BaseTransition" : ""
), os = Symbol(K.NODE_ENV !== "production" ? "openBlock" : ""), qd = Symbol(K.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  K.NODE_ENV !== "production" ? "createElementBlock" : ""
), $l = Symbol(K.NODE_ENV !== "production" ? "createVNode" : ""), Al = Symbol(
  K.NODE_ENV !== "production" ? "createElementVNode" : ""
), ko = Symbol(
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
), Bl = Symbol(K.NODE_ENV !== "production" ? "renderList" : ""), Wd = Symbol(K.NODE_ENV !== "production" ? "renderSlot" : ""), Gd = Symbol(K.NODE_ENV !== "production" ? "createSlots" : ""), Gi = Symbol(
  K.NODE_ENV !== "production" ? "toDisplayString" : ""
), yi = Symbol(K.NODE_ENV !== "production" ? "mergeProps" : ""), jl = Symbol(
  K.NODE_ENV !== "production" ? "normalizeClass" : ""
), Hl = Symbol(
  K.NODE_ENV !== "production" ? "normalizeStyle" : ""
), mo = Symbol(
  K.NODE_ENV !== "production" ? "normalizeProps" : ""
), Oo = Symbol(
  K.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Ul = Symbol(K.NODE_ENV !== "production" ? "toHandlers" : ""), qr = Symbol(K.NODE_ENV !== "production" ? "camelize" : ""), Wg = Symbol(K.NODE_ENV !== "production" ? "capitalize" : ""), Kr = Symbol(
  K.NODE_ENV !== "production" ? "toHandlerKey" : ""
), bi = Symbol(
  K.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Gg = Symbol(K.NODE_ENV !== "production" ? "pushScopeId" : ""), Yg = Symbol(K.NODE_ENV !== "production" ? "popScopeId" : ""), ql = Symbol(K.NODE_ENV !== "production" ? "withCtx" : ""), Jg = Symbol(K.NODE_ENV !== "production" ? "unref" : ""), Xg = Symbol(K.NODE_ENV !== "production" ? "isRef" : ""), Kl = Symbol(K.NODE_ENV !== "production" ? "withMemo" : ""), Yd = Symbol(K.NODE_ENV !== "production" ? "isMemoSame" : ""), Vs = {
  [ho]: "Fragment",
  [io]: "Teleport",
  [Vl]: "Suspense",
  [vi]: "KeepAlive",
  [Ud]: "BaseTransition",
  [os]: "openBlock",
  [qd]: "createBlock",
  [Kd]: "createElementBlock",
  [$l]: "createVNode",
  [Al]: "createElementVNode",
  [ko]: "createCommentVNode",
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
  [Gi]: "toDisplayString",
  [yi]: "mergeProps",
  [jl]: "normalizeClass",
  [Hl]: "normalizeStyle",
  [mo]: "normalizeProps",
  [Oo]: "guardReactiveProps",
  [Ul]: "toHandlers",
  [qr]: "camelize",
  [Wg]: "capitalize",
  [Kr]: "toHandlerKey",
  [bi]: "setBlockTracking",
  [Gg]: "pushScopeId",
  [Yg]: "popScopeId",
  [ql]: "withCtx",
  [Jg]: "unref",
  [Xg]: "isRef",
  [Kl]: "withMemo",
  [Yd]: "isMemoSame"
};
function Qg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Vs[t] = e[t];
  });
}
const wt = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Zg(e, t = "") {
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
    loc: wt
  };
}
function go(e, t, n, s, o, i, r, l = !1, a = !1, c = !1, d = wt) {
  return e && (l ? (e.helper(os), e.helper(Is(e.inSSR, c))) : e.helper(As(e.inSSR, c)), r && e.helper(Fl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: i,
    directives: r,
    isBlock: l,
    disableTracking: a,
    isComponent: c,
    loc: d
  };
}
function Zn(e, t = wt) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Ot(e, t = wt) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Ie(e, t) {
  return {
    type: 16,
    loc: wt,
    key: re(e) ? ce(e, !0) : e,
    value: t
  };
}
function ce(e, t = !1, n = wt, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function jt(e, t = wt) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Be(e, t = [], n = wt) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function $s(e, t = void 0, n = !1, s = !1, o = wt) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: o
  };
}
function zr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: wt
  };
}
function e0(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: wt
  };
}
function t0(e) {
  return {
    type: 21,
    body: e,
    loc: wt
  };
}
function As(e, t) {
  return e || t ? $l : Al;
}
function Is(e, t) {
  return e || t ? qd : Kd;
}
function zl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(As(s, e.isComponent)), t(os), t(Is(s, e.isComponent)));
}
const tc = new Uint8Array([123, 123]), nc = new Uint8Array([125, 125]);
function sc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function _t(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function En(e) {
  return e === 47 || e === 62 || _t(e);
}
function _i(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const qe = {
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
class n0 {
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
    for (let o = this.newlines.length - 1; o >= 0; o--) {
      const i = this.newlines[o];
      if (t > i) {
        n = o + 2, s = t - i;
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
      if (t === 62 || _t(t)) {
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === qe.TitleEnd || this.currentSequence === qe.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === qe.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === qe.Cdata.length && (this.state = 28, this.currentSequence = qe.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === qe.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
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
      n !== "template" && this.enterRCDATA(_i("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    _t(t) || (t === 62 ? (K.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = sc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || _t(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, K.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : _t(t) || (K.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : _t(t) || (this.state = 11, this.stateBeforeAttrName(t));
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
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : _t(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : _t(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
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
    _t(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (K.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = qe.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === qe.ScriptEnd[3] ? this.startSpecial(qe.ScriptEnd, 4) : t === qe.StyleEnd[3] ? this.startSpecial(qe.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === qe.TitleEnd[3] ? this.startSpecial(qe.TitleEnd, 4) : t === qe.TextareaEnd[3] ? this.startSpecial(qe.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === qe.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const s0 = {
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
function Wr(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function In(e, t) {
  const n = Wr("MODE", t), s = Wr(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ms(e, t, n, ...s) {
  const o = In(e, t);
  return K.NODE_ENV !== "production" && o && Ei(e, t, n, ...s), o;
}
function Ei(e, t, n, ...s) {
  if (Wr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = s0[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
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
  const o = K.NODE_ENV !== "production" ? (n || o0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const o0 = {
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
}, vt = (e) => e.type === 4 && e.isStatic;
function Xd(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return io;
    case "Suspense":
    case "suspense":
      return Vl;
    case "KeepAlive":
    case "keep-alive":
      return vi;
    case "BaseTransition":
    case "base-transition":
      return Ud;
  }
}
const i0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Gl = (e) => !i0.test(e), r0 = /[A-Za-z_$\xA0-\uFFFF]/, l0 = /[\.\?\w$\xA0-\uFFFF]/, a0 = /\s+[.[]\s*|\s*[.[]\s+/g, Qd = (e) => e.type === 4 ? e.content : e.loc.source, c0 = (e) => {
  const t = Qd(e).trim().replace(a0, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? r0 : l0).test(a))
          return !1;
        break;
      case 1:
        a === "'" || a === '"' || a === "`" ? (s.push(n), n = 3, r = a) : a === "[" ? o++ : a === "]" && (--o || (n = s.pop()));
        break;
      case 2:
        if (a === "'" || a === '"' || a === "`")
          s.push(n), n = 3, r = a;
        else if (a === "(")
          i++;
        else if (a === ")") {
          if (l === t.length - 1)
            return !1;
          --i || (n = s.pop());
        }
        break;
      case 3:
        a === r && (n = s.pop(), r = null);
        break;
    }
  }
  return !o && !i;
}, Zd = c0, u0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, d0 = (e) => u0.test(Qd(e)), f0 = d0;
function oc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function gt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 7 && (n || o.exp) && (re(t) ? o.name === t : t.test(o.name)))
      return o;
  }
}
function vo(e, t, n = !1, s = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const i = e.props[o];
    if (i.type === 6) {
      if (n) continue;
      if (i.name === t && (i.value || s))
        return i;
    } else if (i.name === "bind" && (i.exp || s) && Dn(i.arg, t))
      return i;
  }
}
function Dn(e, t) {
  return !!(e && vt(e) && e.content === t);
}
function p0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function mr(e) {
  return e.type === 5 || e.type === 2;
}
function ic(e) {
  return e.type === 7 && e.name === "pre";
}
function h0(e) {
  return e.type === 7 && e.name === "slot";
}
function Ni(e) {
  return e.type === 1 && e.tagType === 3;
}
function wi(e) {
  return e.type === 1 && e.tagType === 2;
}
const m0 = /* @__PURE__ */ new Set([mo, Oo]);
function ef(e, t = []) {
  if (e && !re(e) && e.type === 14) {
    const n = e.callee;
    if (!re(n) && m0.has(n))
      return ef(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function xi(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], i = [], r;
  if (o && !re(o) && o.type === 14) {
    const l = ef(o);
    o = l[0], i = l[1], r = i[i.length - 1];
  }
  if (o == null || re(o))
    s = Ot([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !re(l) && l.type === 15 ? rc(t, l) || l.properties.unshift(t) : o.callee === Ul ? s = Be(n.helper(yi), [
      Ot([t]),
      o
    ]) : o.arguments.unshift(Ot([t])), !s && (s = o);
  } else o.type === 15 ? (rc(t, o) || o.properties.unshift(t), s = o) : (s = Be(n.helper(yi), [
    Ot([t]),
    o
  ]), r && r.callee === Oo && (r = i[i.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = s : e.props = s : r ? r.arguments[0] = s : e.arguments[2] = s;
}
function rc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (o) => o.key.type === 4 && o.key.content === s
    );
  }
  return n;
}
function yo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function g0(e) {
  return e.type === 14 && e.callee === Kl ? e.arguments[1].returns : e;
}
const v0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, tf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: qs,
  isPreTag: qs,
  isIgnoreNewlineTag: qs,
  isCustomElement: qs,
  onError: Wl,
  onWarn: Jd,
  comments: K.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ge = tf, bo = null, mn = "", Je = null, pe = null, pt = "", un = -1, Hn = -1, Yl = 0, kn = !1, Gr = null;
const De = [], ke = new n0(De, {
  onerr: ft,
  ontext(e, t) {
    Fo(Ke(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Fo(e, t, n);
  },
  oninterpolation(e, t) {
    if (kn)
      return Fo(Ke(e, t), e, t);
    let n = e + ke.delimiterOpen.length, s = t - ke.delimiterClose.length;
    for (; _t(mn.charCodeAt(n)); )
      n++;
    for (; _t(mn.charCodeAt(s - 1)); )
      s--;
    let o = Ke(n, s);
    o.includes("&") && (o = ge.decodeEntities(o, !1)), Yr({
      type: 5,
      content: Yo(o, !1, Me(n, s)),
      loc: Me(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Ke(e, t);
    Je = {
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
    const n = Ke(e, t);
    if (!ge.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < De.length; o++)
        if (De[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && ft(24, De[0].loc.start.offset);
          for (let r = 0; r <= o; r++) {
            const l = De.shift();
            Go(l, t, r < o);
          }
          break;
        }
      s || ft(23, nf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Je.tag;
    Je.isSelfClosing = !0, ac(e), De[0] && De[0].tag === t && Go(De.shift(), e);
  },
  onattribname(e, t) {
    pe = {
      type: 6,
      name: Ke(e, t),
      nameLoc: Me(e, t),
      value: void 0,
      loc: Me(e)
    };
  },
  ondirname(e, t) {
    const n = Ke(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!kn && s === "" && ft(26, e), kn || s === "")
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
      kn = ke.inVPre = !0, Gr = Je;
      const o = Je.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = O0(o[i]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Ke(e, t);
    if (kn && !ic(pe))
      pe.name += n, Kn(pe.nameLoc, t);
    else {
      const s = n[0] !== "[";
      pe.arg = Yo(
        s ? n : n.slice(1, -1),
        s,
        Me(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Ke(e, t);
    if (kn && !ic(pe))
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
    pt += Ke(e, t), un < 0 && (un = e), Hn = t;
  },
  onattribentity(e, t, n) {
    pt += e, un < 0 && (un = t), Hn = n;
  },
  onattribnameend(e) {
    const t = pe.loc.start.offset, n = Ke(t, e);
    pe.type === 7 && (pe.rawName = n), Je.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && ft(2, t);
  },
  onattribend(e, t) {
    if (Je && pe) {
      if (Kn(pe.loc, t), e !== 0)
        if (pt.includes("&") && (pt = ge.decodeEntities(
          pt,
          !0
        )), pe.type === 6)
          pe.name === "class" && (pt = of(pt).trim()), e === 1 && !pt && ft(13, t), pe.value = {
            type: 2,
            content: pt,
            loc: e === 1 ? Me(un, Hn) : Me(un - 1, Hn + 1)
          }, ke.inSFCRoot && Je.tag === "template" && pe.name === "lang" && pt && pt !== "html" && ke.enterRCDATA(_i("</template"), 0);
        else {
          let n = 0;
          pe.exp = Yo(
            pt,
            !1,
            Me(un, Hn),
            0,
            n
          ), pe.name === "for" && (pe.forParseResult = b0(pe.exp));
          let s = -1;
          pe.name === "bind" && (s = pe.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && Ms(
            "COMPILER_V_BIND_SYNC",
            ge,
            pe.loc,
            pe.arg.loc.source
          ) && (pe.name = "model", pe.modifiers.splice(s, 1));
        }
      (pe.type !== 7 || pe.name !== "pre") && Je.props.push(pe);
    }
    pt = "", un = Hn = -1;
  },
  oncomment(e, t) {
    ge.comments && Yr({
      type: 3,
      content: Ke(e, t),
      loc: Me(e - 4, t + 3)
    });
  },
  onend() {
    const e = mn.length;
    if (K.NODE_ENV !== "production" && ke.state !== 1)
      switch (ke.state) {
        case 5:
        case 8:
          ft(5, e);
          break;
        case 3:
        case 4:
          ft(
            25,
            ke.sectionStart
          );
          break;
        case 28:
          ke.currentSequence === qe.CdataEnd ? ft(6, e) : ft(7, e);
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
          ft(9, e);
          break;
      }
    for (let t = 0; t < De.length; t++)
      Go(De[t], e - 1), ft(24, De[t].loc.start.offset);
  },
  oncdata(e, t) {
    De[0].ns !== 0 ? Fo(Ke(e, t), e, t) : ft(1, e - 9);
  },
  onprocessinginstruction(e) {
    (De[0] ? De[0].ns : ge.ns) === 0 && ft(
      21,
      e - 1
    );
  }
}), lc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, y0 = /^\(|\)$/g;
function b0(e) {
  const t = e.loc, n = e.content, s = n.match(v0);
  if (!s) return;
  const [, o, i] = s, r = (u, p, m = !1) => {
    const E = t.start.offset + p, v = E + u.length;
    return Yo(
      u,
      !1,
      Me(E, v),
      0,
      m ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: r(i.trim(), n.indexOf(i, o.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = o.trim().replace(y0, "").trim();
  const c = o.indexOf(a), d = a.match(lc);
  if (d) {
    a = a.replace(lc, "").trim();
    const u = d[1].trim();
    let p;
    if (u && (p = n.indexOf(u, c + a.length), l.key = r(u, p, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = r(
        m,
        n.indexOf(
          m,
          l.key ? p + u.length : c + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = r(a, c, !0)), l;
}
function Ke(e, t) {
  return mn.slice(e, t);
}
function ac(e) {
  ke.inSFCRoot && (Je.innerLoc = Me(e + 1, e + 1)), Yr(Je);
  const { tag: t, ns: n } = Je;
  n === 0 && ge.isPreTag(t) && Yl++, ge.isVoidTag(t) ? Go(Je, e) : (De.unshift(Je), (n === 1 || n === 2) && (ke.inXML = !0)), Je = null;
}
function Fo(e, t, n) {
  {
    const i = De[0] && De[0].tag;
    i !== "script" && i !== "style" && e.includes("&") && (e = ge.decodeEntities(e, !1));
  }
  const s = De[0] || bo, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Kn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Me(t, n)
  });
}
function Go(e, t, n = !1) {
  n ? Kn(e.loc, nf(t, 60)) : Kn(e.loc, _0(t, 62) + 1), ke.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = Ke(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (kn || (s === "slot" ? e.tagType = 2 : cc(e) ? e.tagType = 3 : N0(e) && (e.tagType = 1)), ke.inRCDATA || (e.children = sf(i)), o === 0 && ge.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ge.isPreTag(s) && Yl--, Gr === e && (kn = ke.inVPre = !1, Gr = null), ke.inXML && (De[0] ? De[0].ns : ge.ns) === 0 && (ke.inXML = !1);
  {
    const r = e.props;
    if (K.NODE_ENV !== "production" && In(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ge
    )) {
      let a = !1, c = !1;
      for (let d = 0; d < r.length; d++) {
        const u = r[d];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (c = !0)), a && c) {
          Ei(
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
      K.NODE_ENV !== "production" && Ei(
        "COMPILER_NATIVE_TEMPLATE",
        ge,
        e.loc
      );
      const a = De[0] || bo, c = a.children.indexOf(e);
      a.children.splice(c, 1, ...e.children);
    }
    const l = r.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ms(
      "COMPILER_INLINE_TEMPLATE",
      ge,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: Ke(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function _0(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n < mn.length - 1; ) n++;
  return n;
}
function nf(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const E0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function cc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && E0.has(t[n].name))
        return !0;
  }
  return !1;
}
function N0({ tag: e, props: t }) {
  if (ge.isCustomElement(e))
    return !1;
  if (e === "component" || w0(e.charCodeAt(0)) || Xd(e) || ge.isBuiltInComponent && ge.isBuiltInComponent(e) || ge.isNativeTag && !ge.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Ms(
          "COMPILER_IS_ON_ELEMENT",
          ge,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Dn(s.arg, "is") && Ms(
        "COMPILER_IS_ON_ELEMENT",
        ge,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function w0(e) {
  return e > 64 && e < 91;
}
const x0 = /\r\n/g;
function sf(e) {
  const t = ge.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Yl)
        o.content = o.content.replace(x0, `
`);
      else if (S0(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && C0(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = of(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function S0(e) {
  for (let t = 0; t < e.length; t++)
    if (!_t(e.charCodeAt(t)))
      return !1;
  return !0;
}
function C0(e) {
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
    _t(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Yr(e) {
  (De[0] || bo).children.push(e);
}
function Me(e, t) {
  return {
    start: ke.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : ke.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Ke(e, t)
  };
}
function k0(e) {
  return Me(e.start.offset, e.end.offset);
}
function Kn(e, t) {
  e.end = ke.getPos(t), e.source = Ke(e.start.offset, t);
}
function O0(e) {
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
function Yo(e, t = !1, n, s = 0, o = 0) {
  return ce(e, t, n, s);
}
function ft(e, t, n) {
  ge.onError(
    we(e, Me(t, t), void 0, n)
  );
}
function T0() {
  ke.reset(), Je = null, pe = null, pt = "", un = -1, Hn = -1, De.length = 0;
}
function D0(e, t) {
  if (T0(), mn = e, ge = de({}, tf), t) {
    let o;
    for (o in t)
      t[o] != null && (ge[o] = t[o]);
  }
  if (K.NODE_ENV !== "production" && !ge.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  ke.mode = ge.parseMode === "html" ? 1 : ge.parseMode === "sfc" ? 2 : 0, ke.inXML = ge.ns === 1 || ge.ns === 2;
  const n = t && t.delimiters;
  n && (ke.delimiterOpen = _i(n[0]), ke.delimiterClose = _i(n[1]));
  const s = bo = Zg([], e);
  return ke.parse(mn), s.loc = Me(0, e.length), s.children = sf(s.children), bo = null, s;
}
function V0(e, t) {
  Jo(
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
  return t.length === 1 && t[0].type === 1 && !wi(t[0]) ? t[0] : null;
}
function Jo(e, t, n, s = !1, o = !1) {
  const { children: i } = e, r = [];
  for (let u = 0; u < i.length; u++) {
    const p = i[u];
    if (p.type === 1 && p.tagType === 0) {
      const m = s ? 0 : Et(p, n);
      if (m > 0) {
        if (m >= 2) {
          p.codegenNode.patchFlag = -1, r.push(p);
          continue;
        }
      } else {
        const E = p.codegenNode;
        if (E.type === 13) {
          const v = E.patchFlag;
          if ((v === void 0 || v === 512 || v === 1) && af(p, n) >= 2) {
            const D = cf(p);
            D && (E.props = n.hoist(D));
          }
          E.dynamicProps && (E.dynamicProps = n.hoist(E.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : Et(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (K.NODE_ENV !== "production" ? ` /* ${Js[-1]} */` : "")
      ), r.push(p);
      continue;
    }
    if (p.type === 1) {
      const m = p.tagType === 1;
      m && n.scopes.vSlot++, Jo(p, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (p.type === 11)
      Jo(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let m = 0; m < p.branches.length; m++)
        Jo(
          p.branches[m],
          e,
          n,
          p.branches[m].children.length === 1,
          o
        );
  }
  let l = !1;
  const a = [];
  if (r.length === i.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && q(e.codegenNode.children))
      e.codegenNode.children = c(
        Zn(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !q(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        Zn(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !q(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = gt(e, "slot", !0), p = u && u.arg && d(t.codegenNode, u.arg);
      p && (a.push(n.cached.length), p.returns = c(
        Zn(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of r)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !q(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Ie(
      "__",
      ce(JSON.stringify(a), !1)
    )
  );
  function c(u) {
    const p = n.cache(u);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function d(u, p) {
    if (u.children && !q(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (E) => E.key === p || E.key.content === p
      );
      return m && m.value;
    }
  }
  r.length && n.transformHoist && n.transformHoist(i, n, e);
}
function Et(e, t) {
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
        let r = 3;
        const l = af(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < r && (r = l);
        for (let a = 0; a < e.children.length; a++) {
          const c = Et(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < r && (r = c);
        }
        if (r > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const d = Et(c.exp, t);
              if (d === 0)
                return n.set(e, 0), 0;
              d < r && (r = d);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(os), t.removeHelper(
            Is(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(As(t.inSSR, o.isComponent));
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
      return Et(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let i = 3;
      for (let r = 0; r < e.children.length; r++) {
        const l = e.children[r];
        if (re(l) || yt(l))
          continue;
        const a = Et(l, t);
        if (a === 0)
          return 0;
        a < i && (i = a);
      }
      return i;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const $0 = /* @__PURE__ */ new Set([
  jl,
  Hl,
  mo,
  Oo
]);
function lf(e, t) {
  if (e.type === 14 && !re(e.callee) && $0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Et(n, t);
    if (n.type === 14)
      return lf(n, t);
  }
  return 0;
}
function af(e, t) {
  let n = 3;
  const s = cf(e);
  if (s && s.type === 15) {
    const { properties: o } = s;
    for (let i = 0; i < o.length; i++) {
      const { key: r, value: l } = o[i], a = Et(r, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = Et(l, t) : l.type === 14 ? c = lf(l, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function cf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function A0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: i = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = Oe,
  isCustomElement: d = Oe,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: E = !1,
  inSSR: v = !1,
  ssrCssVars: D = "",
  bindingMetadata: C = fe,
  inline: y = !1,
  isTS: f = !1,
  onError: w = Wl,
  onWarn: b = Jd,
  compatConfig: V
}) {
  const P = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), S = {
    // options
    filename: t,
    selfName: P && on(Se(P[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: o,
    cacheHandlers: i,
    nodeTransforms: r,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: c,
    isCustomElement: d,
    expressionPlugins: u,
    scopeId: p,
    slotted: m,
    ssr: E,
    inSSR: v,
    ssrCssVars: D,
    bindingMetadata: C,
    inline: y,
    isTS: f,
    onError: w,
    onWarn: b,
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
    helper(_) {
      const O = S.helpers.get(_) || 0;
      return S.helpers.set(_, O + 1), _;
    },
    removeHelper(_) {
      const O = S.helpers.get(_);
      if (O) {
        const I = O - 1;
        I ? S.helpers.set(_, I) : S.helpers.delete(_);
      }
    },
    helperString(_) {
      return `_${Vs[S.helper(_)]}`;
    },
    replaceNode(_) {
      if (K.NODE_ENV !== "production") {
        if (!S.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!S.parent)
          throw new Error("Cannot replace root node.");
      }
      S.parent.children[S.childIndex] = S.currentNode = _;
    },
    removeNode(_) {
      if (K.NODE_ENV !== "production" && !S.parent)
        throw new Error("Cannot remove root node.");
      const O = S.parent.children, I = _ ? O.indexOf(_) : S.currentNode ? S.childIndex : -1;
      if (K.NODE_ENV !== "production" && I < 0)
        throw new Error("node being removed is not a child of current parent");
      !_ || _ === S.currentNode ? (S.currentNode = null, S.onNodeRemoved()) : S.childIndex > I && (S.childIndex--, S.onNodeRemoved()), S.parent.children.splice(I, 1);
    },
    onNodeRemoved: Oe,
    addIdentifiers(_) {
    },
    removeIdentifiers(_) {
    },
    hoist(_) {
      re(_) && (_ = ce(_)), S.hoists.push(_);
      const O = ce(
        `_hoisted_${S.hoists.length}`,
        !1,
        _.loc,
        2
      );
      return O.hoisted = _, O;
    },
    cache(_, O = !1, I = !1) {
      const $ = e0(
        S.cached.length,
        _,
        O,
        I
      );
      return S.cached.push($), $;
    }
  };
  return S.filters = /* @__PURE__ */ new Set(), S;
}
function I0(e, t) {
  const n = A0(e, t);
  Yi(e, n), t.hoistStatic && V0(e, n), t.ssr || M0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function M0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = rf(e);
    if (o && o.codegenNode) {
      const i = o.codegenNode;
      i.type === 13 && zl(i, t), e.codegenNode = i;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    K.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = go(
      t,
      n(ho),
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
function P0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const o = e.children[n];
    re(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Yi(o, t));
  }
}
function Yi(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let i = 0; i < n.length; i++) {
    const r = n[i](e, t);
    if (r && (q(r) ? s.push(...r) : s.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(ko);
      break;
    case 5:
      t.ssr || t.helper(Gi);
      break;
    case 9:
      for (let i = 0; i < e.branches.length; i++)
        Yi(e.branches[i], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      P0(e, t);
      break;
  }
  t.currentNode = e;
  let o = s.length;
  for (; o--; )
    s[o]();
}
function uf(e, t) {
  const n = re(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: i } = s;
      if (s.tagType === 3 && i.some(h0))
        return;
      const r = [];
      for (let l = 0; l < i.length; l++) {
        const a = i[l];
        if (a.type === 7 && n(a.name)) {
          i.splice(l, 1), l--;
          const c = t(s, a, o);
          c && r.push(c);
        }
      }
      return r;
    }
  };
}
const Ji = "/*@__PURE__*/", df = (e) => `${Vs[e]}: _${Vs[e]}`;
function R0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: i = null,
  optimizeImports: r = !1,
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
    scopeId: i,
    optimizeImports: r,
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
    push(v, D = -2, C) {
      m.code += v;
    },
    indent() {
      E(++m.indentLevel);
    },
    deindent(v = !1) {
      v ? --m.indentLevel : E(--m.indentLevel);
    },
    newline() {
      E(m.indentLevel);
    }
  };
  function E(v) {
    m.push(
      `
` + "  ".repeat(v),
      0
      /* Start */
    );
  }
  return m;
}
function L0(e, t = {}) {
  const n = R0(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: i,
    indent: r,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: d
  } = n, u = Array.from(e.helpers), p = u.length > 0, m = !i && s !== "module";
  F0(e, n);
  const v = d ? "ssrRender" : "render", C = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${v}(${C}) {`), r(), m && (o("with (_ctx) {"), r(), p && (o(
    `const { ${u.map(df).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (gr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (gr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), gr(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let y = 0; y < e.temps; y++)
      o(`${y > 0 ? ", " : ""}_temp${y}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? tt(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function F0(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: i,
    runtimeModuleName: r,
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
      $l,
      Al,
      ko,
      Il,
      zd
    ].filter((p) => d.includes(p)).map(df).join(", ");
    o(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  B0(e.hoists, t), i(), o("return ");
}
function gr(e, t, { helper: n, push: s, newline: o, isTS: i }) {
  const r = n(
    t === "filter" ? Ll : t === "component" ? Ml : Rl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), s(
      `const ${yo(a, t)} = ${r}(${JSON.stringify(a)}${c ? ", true" : ""})${i ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function B0(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i && (n(`const _hoisted_${o + 1} = `), tt(i, t), s());
  }
  t.pure = !1;
}
function j0(e) {
  return re(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Jl(e, t) {
  const n = e.length > 3 || K.NODE_ENV !== "production" && e.some((s) => q(s) || !j0(s));
  t.push("["), n && t.indent(), To(e, t, n), n && t.deindent(), t.push("]");
}
function To(e, t, n = !1, s = !0) {
  const { push: o, newline: i } = t;
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    re(l) ? o(
      l,
      -3
      /* Unknown */
    ) : q(l) ? Jl(l, t) : tt(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
  }
}
function tt(e, t) {
  if (re(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (yt(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      K.NODE_ENV !== "production" && oc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), tt(e.codegenNode, t);
      break;
    case 2:
      H0(e, t);
      break;
    case 4:
      ff(e, t);
      break;
    case 5:
      U0(e, t);
      break;
    case 12:
      tt(e.codegenNode, t);
      break;
    case 8:
      pf(e, t);
      break;
    case 3:
      K0(e, t);
      break;
    case 13:
      z0(e, t);
      break;
    case 14:
      G0(e, t);
      break;
    case 15:
      Y0(e, t);
      break;
    case 17:
      J0(e, t);
      break;
    case 18:
      X0(e, t);
      break;
    case 19:
      Q0(e, t);
      break;
    case 20:
      Z0(e, t);
      break;
    case 21:
      To(e.body, t, !0, !1);
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
        return oc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function H0(e, t) {
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
function U0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Ji), n(`${s(Gi)}(`), tt(e.content, t), n(")");
}
function pf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    re(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : tt(s, t);
  }
}
function q0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), pf(e, t), n("]");
  else if (e.isStatic) {
    const s = Gl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function K0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Ji), n(
    `${s(ko)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function z0(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: i,
    props: r,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: d,
    isBlock: u,
    disableTracking: p,
    isComponent: m
  } = e;
  let E;
  if (a)
    if (K.NODE_ENV !== "production")
      if (a < 0)
        E = a + ` /* ${Js[a]} */`;
      else {
        const D = Object.keys(Js).map(Number).filter((C) => C > 0 && a & C).map((C) => Js[C]).join(", ");
        E = a + ` /* ${D} */`;
      }
    else
      E = String(a);
  d && n(s(Fl) + "("), u && n(`(${s(os)}(${p ? "true" : ""}), `), o && n(Ji);
  const v = u ? Is(t.inSSR, m) : As(t.inSSR, m);
  n(s(v) + "(", -2, e), To(
    W0([i, r, l, E, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), tt(d, t), n(")"));
}
function W0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function G0(e, t) {
  const { push: n, helper: s, pure: o } = t, i = re(e.callee) ? e.callee : s(e.callee);
  o && n(Ji), n(i + "(", -2, e), To(e.arguments, t), n(")");
}
function Y0(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || K.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: c, value: d } = r[a];
    q0(c, t), n(": "), tt(d, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function J0(e, t) {
  Jl(e.elements, t);
}
function X0(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Vs[ql]}(`), n("(", -2, e), q(i) ? To(i, t) : i && tt(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), q(r) ? Jl(r, t) : tt(r, t)) : l && tt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Q0(e, t) {
  const { test: n, consequent: s, alternate: o, newline: i } = e, { push: r, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !Gl(n.content);
    u && r("("), ff(n, t), u && r(")");
  } else
    r("("), tt(n, t), r(")");
  i && l(), t.indentLevel++, i || r(" "), r("? "), tt(s, t), t.indentLevel--, i && c(), i || r(" "), r(": ");
  const d = o.type === 19;
  d || t.indentLevel++, tt(o, t), d || t.indentLevel--, i && a(
    !0
    /* without newline */
  );
}
function Z0(e, t) {
  const { push: n, helper: s, indent: o, deindent: i, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(bi)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), tt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(bi)}(1),`), r(), n(`_cache[${e.index}]`), i()), n(")"), a && n(")]");
}
const ev = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), tv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function zn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (i) {
      let r = i.message;
      const l = o.replace(tv, "").match(ev);
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
const nv = (e, t) => {
  if (e.type === 5)
    e.content = vr(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = gt(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const o = e.props[s];
      if (o.type === 7 && o.name !== "for") {
        const i = o.exp, r = o.arg;
        i && i.type === 4 && !(o.name === "on" && r) && // key has been processed in transformFor(vMemo + vFor)
        !(n && r && r.type === 4 && r.content === "key") && (o.exp = vr(
          i,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (o.arg = vr(r, t));
      }
    }
  }
};
function vr(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return K.NODE_ENV !== "production" && zn(e, t, n, s), e;
}
const sv = uf(
  /^(if|else|else-if)$/,
  (e, t, n) => ov(e, t, n, (s, o, i) => {
    const r = n.parent.children;
    let l = r.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const c = r[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (i)
        s.codegenNode = dc(
          o,
          a,
          n
        );
      else {
        const c = rv(s.codegenNode);
        c.alternate = dc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function ov(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      we(28, t.loc)
    ), t.exp = ce("true", !1, o);
  }
  if (K.NODE_ENV !== "production" && t.exp && zn(t.exp, n), t.name === "if") {
    const o = uc(e, t), i = {
      type: 9,
      loc: k0(e.loc),
      branches: [o]
    };
    if (n.replaceNode(i), s)
      return s(i, o, !0);
  } else {
    const o = n.parent.children, i = [];
    let r = o.indexOf(e);
    for (; r-- >= -1; ) {
      const l = o[r];
      if (l && l.type === 3) {
        n.removeNode(l), K.NODE_ENV !== "production" && i.unshift(l);
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
        if (K.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), K.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: u }) => {
            iv(u, d) && n.onError(
              we(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const c = s && s(l, a, !1);
        Yi(a, n), c && c(), n.currentNode = null;
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
    children: n && !gt(e, "for") ? e.children : [e],
    userKey: vo(e, "key"),
    isTemplateIf: n
  };
}
function dc(e, t, n) {
  return e.condition ? zr(
    e.condition,
    fc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Be(n.helper(ko), [
      K.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : fc(e, t, n);
}
function fc(e, t, n) {
  const { helper: s } = n, o = Ie(
    "key",
    ce(
      `${t}`,
      !1,
      wt,
      2
    )
  ), { children: i } = e, r = i[0];
  if (i.length !== 1 || r.type !== 1)
    if (i.length === 1 && r.type === 11) {
      const a = r.codegenNode;
      return xi(a, o, n), a;
    } else {
      let a = 64;
      return K.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((c) => c.type !== 3).length === 1 && (a |= 2048), go(
        n,
        s(ho),
        Ot([o]),
        i,
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
    const a = r.codegenNode, c = g0(a);
    return c.type === 13 && zl(c, n), xi(c, o, n), a;
  }
}
function iv(e, t) {
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
function rv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const lv = (e, t, n) => {
  const { modifiers: s, loc: o } = e, i = e.arg;
  let { exp: r } = e;
  if (r && r.type === 4 && !r.content.trim() && (r = void 0), !r) {
    if (i.type !== 4 || !i.isStatic)
      return n.onError(
        we(
          52,
          i.loc
        )
      ), {
        props: [
          Ie(i, ce("", !0, o))
        ]
      };
    hf(e), r = e.exp;
  }
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = Se(i.content) : i.content = `${n.helperString(qr)}(${i.content})` : (i.children.unshift(`${n.helperString(qr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && pc(i, "."), s.some((l) => l.content === "attr") && pc(i, "^")), {
    props: [Ie(i, r)]
  };
}, hf = (e, t) => {
  const n = e.arg, s = Se(n.content);
  e.exp = ce(s, !1, n.loc);
}, pc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, av = uf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return cv(e, t, n, (i) => {
      const r = Be(s(Bl), [
        i.source
      ]), l = Ni(e), a = gt(e, "memo"), c = vo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && hf(c);
      let u = c && (c.type === 6 ? c.value ? ce(c.value.content, !0) : void 0 : c.exp);
      const p = c && u ? Ie("key", u) : null, m = i.source.type === 4 && i.source.constType > 0, E = m ? 64 : c ? 128 : 256;
      return i.codegenNode = go(
        n,
        s(ho),
        void 0,
        r,
        E,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let v;
        const { children: D } = i;
        K.NODE_ENV !== "production" && l && e.children.some((f) => {
          if (f.type === 1) {
            const w = vo(f, "key");
            if (w)
              return n.onError(
                we(
                  33,
                  w.loc
                )
              ), !0;
          }
        });
        const C = D.length !== 1 || D[0].type !== 1, y = wi(e) ? e : l && e.children.length === 1 && wi(e.children[0]) ? e.children[0] : null;
        if (y ? (v = y.codegenNode, l && p && xi(v, p, n)) : C ? v = go(
          n,
          s(ho),
          p ? Ot([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (v = D[0].codegenNode, l && p && xi(v, p, n), v.isBlock !== !m && (v.isBlock ? (o(os), o(
          Is(n.inSSR, v.isComponent)
        )) : o(
          As(n.inSSR, v.isComponent)
        )), v.isBlock = !m, v.isBlock ? (s(os), s(Is(n.inSSR, v.isComponent))) : s(As(n.inSSR, v.isComponent))), a) {
          const f = $s(
            Jr(i.parseResult, [
              ce("_cached")
            ])
          );
          f.body = t0([
            jt(["const _memo = (", a.exp, ")"]),
            jt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Yd
              )}(_cached, _memo)) return _cached`
            ]),
            jt(["const _item = ", v]),
            ce("_item.memo = _memo"),
            ce("return _item")
          ]), r.arguments.push(
            f,
            ce("_cache"),
            ce(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            $s(
              Jr(i.parseResult),
              v,
              !0
            )
          );
      };
    });
  }
);
function cv(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      we(31, t.loc)
    );
    return;
  }
  const o = t.forParseResult;
  if (!o) {
    n.onError(
      we(32, t.loc)
    );
    return;
  }
  mf(o, n);
  const { addIdentifiers: i, removeIdentifiers: r, scopes: l } = n, { source: a, value: c, key: d, index: u } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: d,
    objectIndexAlias: u,
    parseResult: o,
    children: Ni(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const m = s && s(p);
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
function Jr({ value: e, key: t, index: n }, s = []) {
  return uv([e, t, n, ...s]);
}
function uv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || ce("_".repeat(s + 1), !1));
}
const hc = ce("undefined", !1), dv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = gt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, fv = (e, t, n, s) => $s(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function pv(e, t, n = fv) {
  t.helper(ql);
  const { children: s, loc: o } = e, i = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = gt(e, "slot", !0);
  if (a) {
    const { arg: D, exp: C } = a;
    D && !vt(D) && (l = !0), i.push(
      Ie(
        D || ce("default", !0),
        n(C, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let D = 0; D < s.length; D++) {
    const C = s[D];
    let y;
    if (!Ni(C) || !(y = gt(C, "slot", !0))) {
      C.type !== 3 && u.push(C);
      continue;
    }
    if (a) {
      t.onError(
        we(37, y.loc)
      );
      break;
    }
    c = !0;
    const { children: f, loc: w } = C, {
      arg: b = ce("default", !0),
      exp: V,
      loc: P
    } = y;
    let S;
    vt(b) ? S = b ? b.content : "default" : l = !0;
    const _ = gt(C, "for"), O = n(V, _, f, w);
    let I, $;
    if (I = gt(C, "if"))
      l = !0, r.push(
        zr(
          I.exp,
          Bo(b, O, m++),
          hc
        )
      );
    else if ($ = gt(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let L = D, Y;
      for (; L-- && (Y = s[L], !(Y.type !== 3 && Xr(Y))); )
        ;
      if (Y && Ni(Y) && gt(Y, /^(else-)?if$/)) {
        let ee = r[r.length - 1];
        for (; ee.alternate.type === 19; )
          ee = ee.alternate;
        ee.alternate = $.exp ? zr(
          $.exp,
          Bo(
            b,
            O,
            m++
          ),
          hc
        ) : Bo(b, O, m++);
      } else
        t.onError(
          we(30, $.loc)
        );
    } else if (_) {
      l = !0;
      const L = _.forParseResult;
      L ? (mf(L, t), r.push(
        Be(t.helper(Bl), [
          L.source,
          $s(
            Jr(L),
            Bo(b, O),
            !0
          )
        ])
      )) : t.onError(
        we(
          32,
          _.loc
        )
      );
    } else {
      if (S) {
        if (p.has(S)) {
          t.onError(
            we(
              38,
              P
            )
          );
          continue;
        }
        p.add(S), S === "default" && (d = !0);
      }
      i.push(Ie(b, O));
    }
  }
  if (!a) {
    const D = (C, y) => {
      const f = n(C, void 0, y, o);
      return t.compatConfig && (f.isNonScopedSlot = !0), Ie("default", f);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((C) => Xr(C)) && (d ? t.onError(
      we(
        39,
        u[0].loc
      )
    ) : i.push(
      D(void 0, u)
    )) : i.push(D(void 0, s));
  }
  const E = l ? 2 : Xo(e.children) ? 3 : 1;
  let v = Ot(
    i.concat(
      Ie(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ce(
          E + (K.NODE_ENV !== "production" ? ` /* ${jf[E]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return r.length && (v = Be(t.helper(Gd), [
    v,
    Zn(r)
  ])), {
    slots: v,
    hasDynamicSlots: l
  };
}
function Bo(e, t, n) {
  const s = [
    Ie("name", e),
    Ie("fn", t)
  ];
  return n != null && s.push(
    Ie("key", ce(String(n), !0))
  ), Ot(s);
}
function Xo(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Xo(n.children))
          return !0;
        break;
      case 9:
        if (Xo(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Xo(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Xr(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Xr(e.content);
}
const gf = /* @__PURE__ */ new WeakMap(), hv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, i = e.tagType === 1;
  let r = i ? mv(e, t) : `"${s}"`;
  const l = he(r) && r.callee === Pl;
  let a, c, d = 0, u, p, m, E = (
    // dynamic component may resolve to plain elements
    l || r === io || r === Vl || !i && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const v = vf(
      e,
      t,
      void 0,
      i,
      l
    );
    a = v.props, d = v.patchFlag, p = v.dynamicPropNames;
    const D = v.directives;
    m = D && D.length ? Zn(
      D.map((C) => vv(C, t))
    ) : void 0, v.shouldUseBlock && (E = !0);
  }
  if (e.children.length > 0)
    if (r === vi && (E = !0, d |= 1024, K.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      we(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== io && // explained above.
    r !== vi) {
      const { slots: D, hasDynamicSlots: C } = pv(e, t);
      c = D, C && (d |= 1024);
    } else if (e.children.length === 1 && r !== io) {
      const D = e.children[0], C = D.type, y = C === 5 || C === 8;
      y && Et(D, t) === 0 && (d |= 1), y || C === 2 ? c = D : c = e.children;
    } else
      c = e.children;
  p && p.length && (u = yv(p)), e.codegenNode = go(
    t,
    r,
    a,
    c,
    d === 0 ? void 0 : d,
    u,
    m,
    !!E,
    !1,
    i,
    e.loc
  );
};
function mv(e, t, n = !1) {
  let { tag: s } = e;
  const o = Qr(s), i = vo(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (i)
    if (o || In(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (i.type === 6 ? l = i.value && ce(i.value.content, !0) : (l = i.exp, l || (l = ce("is", !1, i.arg.loc))), l)
        return Be(t.helper(Pl), [
          l
        ]);
    } else i.type === 6 && i.value.content.startsWith("vue:") && (s = i.value.content.slice(4));
  const r = Xd(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(Ml), t.components.add(s), yo(s, "component"));
}
function vf(e, t, n = e.props, s, o, i = !1) {
  const { tag: r, loc: l, children: a } = e;
  let c = [];
  const d = [], u = [], p = a.length > 0;
  let m = !1, E = 0, v = !1, D = !1, C = !1, y = !1, f = !1, w = !1;
  const b = [], V = (O) => {
    c.length && (d.push(
      Ot(mc(c), l)
    ), c = []), O && d.push(O);
  }, P = () => {
    t.scopes.vFor > 0 && c.push(
      Ie(
        ce("ref_for", !0),
        ce("true")
      )
    );
  }, S = ({ key: O, value: I }) => {
    if (vt(O)) {
      const $ = O.content, L = gn($);
      if (L && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      $.toLowerCase() !== "onclick" && // omit v-model handlers
      $ !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Vn($) && (y = !0), L && Vn($) && (w = !0), L && I.type === 14 && (I = I.arguments[0]), I.type === 20 || (I.type === 4 || I.type === 8) && Et(I, t) > 0)
        return;
      $ === "ref" ? v = !0 : $ === "class" ? D = !0 : $ === "style" ? C = !0 : $ !== "key" && !b.includes($) && b.push($), s && ($ === "class" || $ === "style") && !b.includes($) && b.push($);
    } else
      f = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const I = n[O];
    if (I.type === 6) {
      const { loc: $, name: L, nameLoc: Y, value: ee } = I;
      let Z = !0;
      if (L === "ref" && (v = !0, P()), L === "is" && (Qr(r) || ee && ee.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Ie(
          ce(L, !0, Y),
          ce(
            ee ? ee.content : "",
            Z,
            ee ? ee.loc : $
          )
        )
      );
    } else {
      const { name: $, arg: L, exp: Y, loc: ee, modifiers: Z } = I, ne = $ === "bind", Q = $ === "on";
      if ($ === "slot") {
        s || t.onError(
          we(40, ee)
        );
        continue;
      }
      if ($ === "once" || $ === "memo" || $ === "is" || ne && Dn(L, "is") && (Qr(r) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Dn(L, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && p && Dn(L, "vue:before-update")) && (m = !0), ne && Dn(L, "ref") && P(), !L && (ne || Q)
      ) {
        if (f = !0, Y)
          if (ne) {
            if (V(), K.NODE_ENV !== "production" && d.some((xt) => xt.type === 15 ? xt.properties.some(({ key: St }) => St.type !== 4 || !St.isStatic ? !0 : St.content !== "class" && St.content !== "style" && !gn(St.content)) : !0) && Ms(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              ee
            ), In(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(Y);
              continue;
            }
            P(), V(), d.push(Y);
          } else
            V({
              type: 14,
              loc: ee,
              callee: t.helper(Ul),
              arguments: s ? [Y] : [Y, "true"]
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
      ne && Z.some((ut) => ut.content === "prop") && (E |= 32);
      const Ee = t.directiveTransforms[$];
      if (Ee) {
        const { props: ut, needRuntime: xt } = Ee(I, e, t);
        !i && ut.forEach(S), Q && L && !vt(L) ? V(Ot(ut, l)) : c.push(...ut), xt && (u.push(I), yt(xt) && gf.set(I, xt));
      } else kc($) || (u.push(I), p && (m = !0));
    }
  }
  let _;
  if (d.length ? (V(), d.length > 1 ? _ = Be(
    t.helper(yi),
    d,
    l
  ) : _ = d[0]) : c.length && (_ = Ot(
    mc(c),
    l
  )), f ? E |= 16 : (D && !s && (E |= 2), C && !s && (E |= 4), b.length && (E |= 8), y && (E |= 32)), !m && (E === 0 || E === 32) && (v || w || u.length > 0) && (E |= 512), !t.inSSR && _)
    switch (_.type) {
      case 15:
        let O = -1, I = -1, $ = !1;
        for (let ee = 0; ee < _.properties.length; ee++) {
          const Z = _.properties[ee].key;
          vt(Z) ? Z.content === "class" ? O = ee : Z.content === "style" && (I = ee) : Z.isHandlerKey || ($ = !0);
        }
        const L = _.properties[O], Y = _.properties[I];
        $ ? _ = Be(
          t.helper(mo),
          [_]
        ) : (L && !vt(L.value) && (L.value = Be(
          t.helper(jl),
          [L.value]
        )), Y && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (C || Y.value.type === 4 && Y.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        Y.value.type === 17) && (Y.value = Be(
          t.helper(Hl),
          [Y.value]
        )));
        break;
      case 14:
        break;
      default:
        _ = Be(
          t.helper(mo),
          [
            Be(t.helper(Oo), [
              _
            ])
          ]
        );
        break;
    }
  return {
    props: _,
    directives: u,
    patchFlag: E,
    dynamicPropNames: b,
    shouldUseBlock: m
  };
}
function mc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.key.type === 8 || !o.key.isStatic) {
      n.push(o);
      continue;
    }
    const i = o.key.content, r = t.get(i);
    r ? (i === "style" || i === "class" || gn(i)) && gv(r, o) : (t.set(i, o), n.push(o));
  }
  return n;
}
function gv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Zn(
    [e.value, t.value],
    e.loc
  );
}
function vv(e, t) {
  const n = [], s = gf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Rl), t.directives.add(e.name), n.push(yo(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const i = ce("true", !1, o);
    n.push(
      Ot(
        e.modifiers.map(
          (r) => Ie(r, i)
        ),
        o
      )
    );
  }
  return Zn(n, e.loc);
}
function yv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Qr(e) {
  return e === "component" || e === "Component";
}
const bv = (e, t) => {
  if (wi(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: i } = _v(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    i && (r[2] = i, l = 3), n.length && (r[3] = $s([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = Be(
      t.helper(Wd),
      r,
      s
    );
  }
};
function _v(e, t) {
  let n = '"default"', s;
  const o = [];
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 6)
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = Se(r.name), o.push(r)));
    else if (r.name === "bind" && Dn(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const l = Se(r.arg.content);
        n = r.exp = ce(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && vt(r.arg) && (r.arg.content = Se(r.arg.content)), o.push(r);
  }
  if (o.length > 0) {
    const { props: i, directives: r } = vf(
      e,
      t,
      o,
      !1,
      !1
    );
    s = i, r.length && t.onError(
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
const yf = (e, t, n, s) => {
  const { loc: o, modifiers: i, arg: r } = e;
  !e.exp && !i.length && n.onError(we(35, o));
  let l;
  if (r.type === 4)
    if (r.isStatic) {
      let u = r.content;
      K.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(we(51, r.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Qt(Se(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = ce(p, !0, r.loc);
    } else
      l = jt([
        `${n.helperString(Kr)}(`,
        r,
        ")"
      ]);
  else
    l = r, l.children.unshift(`${n.helperString(Kr)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = Zd(a), p = !(u || f0(a)), m = a.content.includes(";");
    K.NODE_ENV !== "production" && zn(
      a,
      n,
      !1,
      m
    ), (p || c && u) && (a = jt([
      `${p ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      Ie(
        l,
        a || ce("() => {}", !1, o)
      )
    ]
  };
  return s && (d = s(d)), c && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((u) => u.key.isHandlerKey = !0), d;
}, Ev = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (mr(r)) {
          o = !0;
          for (let l = i + 1; l < n.length; l++) {
            const a = n[l];
            if (mr(a))
              s || (s = n[i] = jt(
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
        (i) => i.type === 7 && !t.directiveTransforms[i.name]
      ) && e.tag !== "template")))
        for (let i = 0; i < n.length; i++) {
          const r = n[i];
          if (mr(r) || r.type === 8) {
            const l = [];
            (r.type !== 2 || r.content !== " ") && l.push(r), !t.ssr && Et(r, t) === 0 && l.push(
              1 + (K.NODE_ENV !== "production" ? ` /* ${Js[1]} */` : "")
            ), n[i] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: Be(
                t.helper(Il),
                l
              )
            };
          }
        }
    };
}, gc = /* @__PURE__ */ new WeakSet(), Nv = (e, t) => {
  if (e.type === 1 && gt(e, "once", !0))
    return gc.has(e) || t.inVOnce || t.inSSR ? void 0 : (gc.add(e), t.inVOnce = !0, t.helper(bi), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, bf = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      we(41, e.loc)
    ), jo();
  const i = s.loc.source.trim(), r = s.type === 4 ? s.content : i, l = n.bindingMetadata[i];
  if (l === "props" || l === "props-aliased")
    return n.onError(we(44, s.loc)), jo();
  if (!r.trim() || !Zd(s))
    return n.onError(
      we(42, s.loc)
    ), jo();
  const a = o || ce("modelValue", !0), c = o ? vt(o) ? `onUpdate:${Se(o.content)}` : jt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const u = n.isTS ? "($event: any)" : "$event";
  d = jt([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Ie(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Ie(c, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((v) => v.content).map((v) => (Gl(v) ? v : JSON.stringify(v)) + ": true").join(", "), E = o ? vt(o) ? `${o.content}Modifiers` : jt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Ie(
        E,
        ce(
          `{ ${m} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return jo(p);
};
function jo(e = []) {
  return { props: e };
}
const wv = /[\w).+\-_$\]]/, xv = (e, t) => {
  In("COMPILER_FILTERS", t) && (e.type === 5 ? Si(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Si(n.exp, t);
  }));
};
function Si(e, t) {
  if (e.type === 4)
    vc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? vc(s, t) : s.type === 8 ? Si(e, t) : s.type === 5 && Si(s.content, t));
    }
}
function vc(e, t) {
  const n = e.content;
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, c = 0, d = 0, u, p, m, E, v = [];
  for (m = 0; m < n.length; m++)
    if (p = u, u = n.charCodeAt(m), s)
      u === 39 && p !== 92 && (s = !1);
    else if (o)
      u === 34 && p !== 92 && (o = !1);
    else if (i)
      u === 96 && p !== 92 && (i = !1);
    else if (r)
      u === 47 && p !== 92 && (r = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !c)
      E === void 0 ? (d = m + 1, E = n.slice(0, m).trim()) : D();
    else {
      switch (u) {
        case 34:
          o = !0;
          break;
        case 39:
          s = !0;
          break;
        case 96:
          i = !0;
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
        (!y || !wv.test(y)) && (r = !0);
      }
    }
  E === void 0 ? E = n.slice(0, m).trim() : d !== 0 && D();
  function D() {
    v.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (v.length) {
    for (K.NODE_ENV !== "production" && Ei(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < v.length; m++)
      E = Sv(E, v[m], t);
    e.content = E, e.ast = void 0;
  }
}
function Sv(e, t, n) {
  n.helper(Ll);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${yo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), i = t.slice(s + 1);
    return n.filters.add(o), `${yo(o, "filter")}(${e}${i !== ")" ? "," + i : i}`;
  }
}
const yc = /* @__PURE__ */ new WeakSet(), Cv = (e, t) => {
  if (e.type === 1) {
    const n = gt(e, "memo");
    return !n || yc.has(e) ? void 0 : (yc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && zl(s, t), e.codegenNode = Be(t.helper(Kl), [
        n.exp,
        $s(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function kv(e) {
  return [
    [
      Nv,
      sv,
      Cv,
      av,
      xv,
      ...K.NODE_ENV !== "production" ? [nv] : [],
      bv,
      hv,
      dv,
      Ev
    ],
    {
      on: yf,
      bind: lv,
      model: bf
    }
  ];
}
function Ov(e, t = {}) {
  const n = t.onError || Wl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(we(47)) : s && n(we(48));
  const o = !1;
  t.cacheHandlers && n(we(49)), t.scopeId && !s && n(we(50));
  const i = de({}, t, {
    prefixIdentifiers: o
  }), r = re(e) ? D0(e, i) : e, [l, a] = kv();
  return I0(
    r,
    de({}, i, {
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
  ), L0(r, i);
}
const Tv = () => ({ props: [] });
var nt = {};
const _f = Symbol(nt.NODE_ENV !== "production" ? "vModelRadio" : ""), Ef = Symbol(
  nt.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(nt.NODE_ENV !== "production" ? "vModelText" : ""), wf = Symbol(
  nt.NODE_ENV !== "production" ? "vModelSelect" : ""
), Zr = Symbol(
  nt.NODE_ENV !== "production" ? "vModelDynamic" : ""
), xf = Symbol(
  nt.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Sf = Symbol(
  nt.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Cf = Symbol(nt.NODE_ENV !== "production" ? "vShow" : ""), Xl = Symbol(nt.NODE_ENV !== "production" ? "Transition" : ""), kf = Symbol(
  nt.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
Qg({
  [_f]: "vModelRadio",
  [Ef]: "vModelCheckbox",
  [Nf]: "vModelText",
  [wf]: "vModelSelect",
  [Zr]: "vModelDynamic",
  [xf]: "withModifiers",
  [Sf]: "withKeys",
  [Cf]: "vShow",
  [Xl]: "Transition",
  [kf]: "TransitionGroup"
});
let fs;
function Dv(e, t = !1) {
  return fs || (fs = document.createElement("div")), t ? (fs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, fs.children[0].getAttribute("foo")) : (fs.innerHTML = e, fs.textContent);
}
const Vv = {
  parseMode: "html",
  isVoidTag: ep,
  isNativeTag: (e) => Tc(e) || Dc(e) || Vc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Dv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Xl;
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
}, $v = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ce("style", !0, t.loc),
      exp: Av(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Av = (e, t) => {
  const n = Oc(e);
  return ce(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Ft(e, t) {
  return we(
    e,
    t,
    nt.NODE_ENV !== "production" ? Iv : void 0
  );
}
const Iv = {
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
}, Mv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Ft(53, o)
  ), t.children.length && (n.onError(
    Ft(54, o)
  ), t.children.length = 0), {
    props: [
      Ie(
        ce("innerHTML", !0, o),
        s || ce("", !0)
      )
    ]
  };
}, Pv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Ft(55, o)
  ), t.children.length && (n.onError(
    Ft(56, o)
  ), t.children.length = 0), {
    props: [
      Ie(
        ce("textContent", !0),
        s ? Et(s, n) > 0 ? s : Be(
          n.helperString(Gi),
          [s],
          o
        ) : ce("", !0)
      )
    ]
  };
}, Rv = (e, t, n) => {
  const s = bf(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    Ft(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = gt(t, "bind");
    l && Dn(l.arg, "value") && n.onError(
      Ft(
        60,
        l.loc
      )
    );
  }
  const { tag: i } = t, r = n.isCustomElement(i);
  if (i === "input" || i === "textarea" || i === "select" || r) {
    let l = Nf, a = !1;
    if (i === "input" || r) {
      const c = vo(t, "type");
      if (c) {
        if (c.type === 7)
          l = Zr;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              l = _f;
              break;
            case "checkbox":
              l = Ef;
              break;
            case "file":
              a = !0, n.onError(
                Ft(
                  59,
                  e.loc
                )
              );
              break;
            default:
              nt.NODE_ENV !== "production" && o();
              break;
          }
      } else p0(t) ? l = Zr : nt.NODE_ENV !== "production" && o();
    } else i === "select" ? l = wf : nt.NODE_ENV !== "production" && o();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      Ft(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Lv = /* @__PURE__ */ Ue("passive,once,capture"), Fv = /* @__PURE__ */ Ue(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Bv = /* @__PURE__ */ Ue("left,right"), Of = /* @__PURE__ */ Ue("onkeyup,onkeydown,onkeypress"), jv = (e, t, n, s) => {
  const o = [], i = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ms(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Lv(a) ? r.push(a) : Bv(a) ? vt(e) ? Of(e.content.toLowerCase()) ? o.push(a) : i.push(a) : (o.push(a), i.push(a)) : Fv(a) ? i.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: i,
    eventOptionModifiers: r
  };
}, bc = (e, t) => vt(e) && e.content.toLowerCase() === "onclick" ? ce(t, !0) : e.type !== 4 ? jt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Hv = (e, t, n) => yf(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: i, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = jv(i, o, n, e.loc);
  if (a.includes("right") && (i = bc(i, "onContextmenu")), a.includes("middle") && (i = bc(i, "onMouseup")), a.length && (r = Be(n.helper(xf), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!vt(i) || Of(i.content.toLowerCase())) && (r = Be(n.helper(Sf), [
    r,
    JSON.stringify(l)
  ])), c.length) {
    const d = c.map(on).join("");
    i = vt(i) ? ce(`${i.content}${d}`, !0) : jt(["(", i, `) + "${d}"`]);
  }
  return {
    props: [Ie(i, r)]
  };
}), Uv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Ft(61, o)
  ), {
    props: [],
    needRuntime: n.helper(Cf)
  };
}, qv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === Xl)
    return () => {
      if (!e.children.length)
        return;
      Tf(e) && t.onError(
        Ft(
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
function Tf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Tf);
}
const Kv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (nt.NODE_ENV !== "production" && t.onError(
    Ft(
      63,
      e.loc
    )
  ), t.removeNode());
};
function zv(e, t) {
  return e === "template" ? !0 : e in _c ? _c[e].has(t) : t in Ec ? Ec[t].has(e) : !(e in Nc && Nc[e].has(t) || t in wc && wc[t].has(e));
}
const ps = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Un = /* @__PURE__ */ new Set([]), _c = {
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
  h1: ps,
  h2: ps,
  h3: ps,
  h4: ps,
  h5: ps,
  h6: ps
}, Wv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !zv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Gv = [
  $v,
  ...nt.NODE_ENV !== "production" ? [qv, Wv] : []
], Yv = {
  cloak: Tv,
  html: Mv,
  text: Pv,
  model: Rv,
  // override compiler-core
  on: Hv,
  // override compiler-core
  show: Uv
};
function Jv(e, t = {}) {
  return Ov(
    e,
    de({}, Vv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Kv,
        ...Gv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: de(
        {},
        Yv,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Ys = {};
function Xv() {
  bd();
}
Ys.NODE_ENV !== "production" && Xv();
const xc = /* @__PURE__ */ Object.create(null);
function Qv(e, t) {
  if (!re(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Ys.NODE_ENV !== "production" && $e("invalid template option: ", e), Oe;
  const n = Bf(e, t), s = xc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Ys.NODE_ENV !== "production" && !a && $e(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = de(
    {
      hoistStatic: !0,
      onError: Ys.NODE_ENV !== "production" ? r : void 0,
      onWarn: Ys.NODE_ENV !== "production" ? (a) => r(a, !0) : Oe
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: i } = Jv(e, o);
  function r(a, c = !1) {
    const d = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && qf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    $e(u ? `${d}
${u}` : d);
  }
  const l = new Function("Vue", i)(zg);
  return l._rc = !0, xc[n] = l;
}
md(Qv);
const ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Zv = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, ey = { class: "absolute inset-0 overflow-hidden" }, ty = { class: "fixed inset-y-0 right-0 max-w-full flex" }, ny = {
  key: 0,
  class: "w-screen max-w-md transform transition-transform duration-300 ease-out"
}, sy = { class: "h-full flex flex-col bg-white shadow-xl" }, oy = { class: "flex-1 overflow-y-auto px-4 sm:px-6" }, iy = {
  key: 0,
  class: "text-center py-12"
}, ry = {
  key: 1,
  class: "flow-root"
}, ly = {
  role: "list",
  class: "-my-6 divide-y divide-gray-200"
}, ay = { class: "flex-shrink-0 w-24 h-24 rounded-md overflow-hidden" }, cy = ["src", "alt"], uy = { class: "ml-4 flex-1 flex flex-col" }, dy = { class: "flex justify-between text-base font-medium text-gray-900" }, fy = ["href"], py = { class: "ml-4" }, hy = {
  key: 0,
  class: "mt-1 text-sm text-gray-500"
}, my = { class: "flex-1 flex items-end justify-between text-sm" }, gy = ["value", "max", "onUpdate"], vy = ["onClick"], yy = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6"
}, by = { class: "flex justify-between text-base font-medium text-gray-900" }, _y = { class: "mt-6" }, Ey = ["href"], Ny = {
  __name: "CartDrawer",
  setup(e) {
    const t = G(!1), n = G([]), s = G(0), o = ie(() => {
      var u;
      return ((u = window.routes) == null ? void 0 : u.cart_url) || "/cart";
    }), i = (u) => {
      var p, m;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((m = (p = window.Shopify) == null ? void 0 : p.currency) == null ? void 0 : m.active) || "USD"
      }).format(u / 100);
    }, r = () => {
      t.value = !0, document.body.style.overflow = "hidden", a();
    }, l = () => {
      t.value = !1, document.body.style.overflow = "";
    }, a = async () => {
      const u = await window.OrionCart.fetchCart();
      n.value = u.items, s.value = u.total_price;
    }, c = async (u, p) => {
      await window.OrionCart.updateItem(u, p), a();
    }, d = async (u) => {
      await window.OrionCart.removeItem(u), a();
    };
    return We(() => {
      document.addEventListener("cart:open", r), document.addEventListener("cart:close", l);
      const u = (p) => {
        p.key === "Escape" && t.value && l();
      };
      document.addEventListener("keydown", u), At(() => {
        document.removeEventListener("cart:open", r), document.removeEventListener("cart:close", l), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (k(), Kt(ls, { to: "body" }, [
      ye(en, { name: "drawer" }, {
        default: kt(() => [
          t.value ? (k(), T("div", Zv, [
            h("div", ey, [
              ye(en, { name: "fade" }, {
                default: kt(() => [
                  t.value ? (k(), T("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: l
                  })) : X("", !0)
                ]),
                _: 1
              }),
              h("div", ty, [
                ye(en, { name: "slide" }, {
                  default: kt(() => [
                    t.value ? (k(), T("div", ny, [
                      h("div", sy, [
                        h("div", { class: "flex items-start justify-between px-4 py-6 sm:px-6" }, [
                          p[1] || (p[1] = h("h2", { class: "text-lg font-medium text-gray-900" }, "Shopping Cart", -1)),
                          h("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                            onClick: l
                          }, p[0] || (p[0] = [
                            h("span", { class: "sr-only" }, "Close cart", -1),
                            h("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              h("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        h("div", oy, [
                          n.value.length === 0 ? (k(), T("div", iy, [
                            p[2] || (p[2] = h("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              h("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              })
                            ], -1)),
                            p[3] || (p[3] = h("h3", { class: "mt-2 text-sm font-medium text-gray-900" }, "Your cart is empty", -1)),
                            p[4] || (p[4] = h("p", { class: "mt-1 text-sm text-gray-500" }, "Start shopping to add items to your cart!", -1)),
                            h("button", {
                              onClick: l,
                              class: "mt-6 btn-primary"
                            }, " Continue Shopping ")
                          ])) : (k(), T("div", ry, [
                            h("ul", ly, [
                              (k(!0), T(ue, null, Ae(n.value, (m) => {
                                var E;
                                return k(), T("li", {
                                  key: m.key,
                                  class: "py-6 flex"
                                }, [
                                  h("div", ay, [
                                    h("img", {
                                      src: m.image,
                                      alt: m.product_title,
                                      class: "w-full h-full object-center object-cover"
                                    }, null, 8, cy)
                                  ]),
                                  h("div", uy, [
                                    h("div", null, [
                                      h("div", dy, [
                                        h("h3", null, [
                                          h("a", {
                                            href: m.url
                                          }, J(m.product_title), 9, fy)
                                        ]),
                                        h("p", py, J(i(m.line_price)), 1)
                                      ]),
                                      m.variant_title ? (k(), T("p", hy, J(m.variant_title), 1)) : X("", !0)
                                    ]),
                                    h("div", my, [
                                      h("quantity-selector", {
                                        value: m.quantity,
                                        min: 0,
                                        max: ((E = m.variant) == null ? void 0 : E.inventory_quantity) || 999,
                                        onUpdate: (v) => c(m.key, v)
                                      }, null, 40, gy),
                                      h("button", {
                                        type: "button",
                                        class: "font-medium text-primary-600 hover:text-primary-500",
                                        onClick: (v) => d(m.key)
                                      }, " Remove ", 8, vy)
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]))
                        ]),
                        n.value.length > 0 ? (k(), T("div", yy, [
                          h("div", by, [
                            p[5] || (p[5] = h("p", null, "Subtotal", -1)),
                            h("p", null, J(i(s.value)), 1)
                          ]),
                          p[8] || (p[8] = h("p", { class: "mt-0.5 text-sm text-gray-500" }, "Shipping and taxes calculated at checkout.", -1)),
                          h("div", _y, [
                            h("a", {
                              href: o.value,
                              class: "flex items-center justify-center btn-primary w-full"
                            }, " Checkout ", 8, Ey)
                          ]),
                          h("div", { class: "mt-6 flex justify-center text-sm text-center text-gray-500" }, [
                            h("p", null, [
                              p[7] || (p[7] = He(" or ", -1)),
                              h("button", {
                                type: "button",
                                class: "text-primary-600 font-medium hover:text-primary-500",
                                onClick: l
                              }, p[6] || (p[6] = [
                                He(" Continue Shopping ", -1),
                                h("span", { "aria-hidden": "true" }, " →", -1)
                              ]))
                            ])
                          ])
                        ])) : X("", !0)
                      ])
                    ])) : X("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : X("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Df = /* @__PURE__ */ ct(Ny, [["__scopeId", "data-v-cd70f3c0"]]), wy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, xy = { class: "absolute inset-0 overflow-hidden" }, Sy = { class: "fixed inset-y-0 left-0 max-w-full flex" }, Cy = {
  key: 0,
  class: "w-screen max-w-sm transform transition-transform duration-300 ease-out"
}, ky = { class: "h-full flex flex-col bg-white shadow-xl" }, Oy = { class: "flex-1 overflow-y-auto" }, Ty = { class: "px-4 py-4" }, Dy = { class: "space-y-1" }, Vy = { key: 0 }, $y = { key: 0 }, Ay = ["onClick"], Iy = {
  key: 0,
  class: "mt-1 space-y-1"
}, My = { key: 0 }, Py = ["onClick"], Ry = {
  key: 0,
  class: "mt-1 space-y-1"
}, Ly = ["href"], Fy = ["href"], By = ["href"], jy = { class: "px-4 py-4 border-t" }, Hy = { class: "space-y-1" }, Uy = ["href"], qy = {
  key: 0,
  class: "px-4 py-4 border-t"
}, Ky = {
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
    const n = e, s = ie(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = G(!1), i = G([]), r = () => {
      o.value = !0, document.body.style.overflow = "hidden";
    }, l = () => {
      o.value = !1, document.body.style.overflow = "";
    }, a = (c) => {
      const d = i.value.indexOf(c);
      d > -1 ? i.value.splice(d, 1) : i.value.push(c);
    };
    return t({
      openMenu: r,
      closeMenu: l
    }), We(() => {
      document.addEventListener("mobile-menu:open", r), document.addEventListener("mobile-menu:close", l);
      const c = (d) => {
        d.key === "Escape" && o.value && l();
      };
      document.addEventListener("keydown", c), At(() => {
        document.removeEventListener("mobile-menu:open", r), document.removeEventListener("mobile-menu:close", l), document.removeEventListener("keydown", c);
      });
    }), (c, d) => (k(), T("div", null, [
      (k(), Kt(ls, { to: "body" }, [
        ye(en, { name: "menu" }, {
          default: kt(() => [
            o.value ? (k(), T("div", wy, [
              h("div", xy, [
                ye(en, { name: "fade" }, {
                  default: kt(() => [
                    o.value ? (k(), T("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: l
                    })) : X("", !0)
                  ]),
                  _: 1
                }),
                h("div", Sy, [
                  ye(en, { name: "slide-left" }, {
                    default: kt(() => [
                      o.value ? (k(), T("div", Cy, [
                        h("div", ky, [
                          h("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            d[1] || (d[1] = h("h2", { class: "text-lg font-medium text-gray-900" }, "Menu", -1)),
                            h("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: l
                            }, d[0] || (d[0] = [
                              h("span", { class: "sr-only" }, "Close menu", -1),
                              h("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                h("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          h("div", Oy, [
                            h("nav", Ty, [
                              h("ul", Dy, [
                                s.value.length === 0 ? (k(), T("li", Vy, d[2] || (d[2] = [
                                  h("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : X("", !0),
                                (k(!0), T(ue, null, Ae(s.value, (u) => (k(), T("li", {
                                  key: u.id || u.title
                                }, [
                                  u.links && u.links.length ? (k(), T("div", $y, [
                                    h("button", {
                                      onClick: (p) => a(u.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      h("span", null, J(u.title), 1),
                                      (k(), T("svg", {
                                        class: Ze(["h-5 w-5 transition-transform duration-200", { "rotate-180": i.value.includes(u.title) }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, d[3] || (d[3] = [
                                        h("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, Ay),
                                    ye(en, { name: "submenu" }, {
                                      default: kt(() => [
                                        i.value.includes(u.title) ? (k(), T("ul", Iy, [
                                          (k(!0), T(ue, null, Ae(u.links, (p) => (k(), T("li", {
                                            key: p.id || p.title
                                          }, [
                                            p.links && p.links.length ? (k(), T("div", My, [
                                              h("button", {
                                                onClick: (m) => a(`${u.title}-${p.title}`),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                h("span", null, J(p.title), 1),
                                                (k(), T("svg", {
                                                  class: Ze(["h-4 w-4 transition-transform duration-200", { "rotate-180": i.value.includes(`${u.title}-${p.title}`) }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, d[4] || (d[4] = [
                                                  h("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, Py),
                                              ye(en, { name: "submenu" }, {
                                                default: kt(() => [
                                                  i.value.includes(`${u.title}-${p.title}`) ? (k(), T("ul", Ry, [
                                                    (k(!0), T(ue, null, Ae(p.links, (m) => (k(), T("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      h("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: l
                                                      }, J(m.title), 9, Ly)
                                                    ]))), 128))
                                                  ])) : X("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (k(), T("a", {
                                              key: 1,
                                              href: p.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: l
                                            }, J(p.title), 9, Fy))
                                          ]))), 128))
                                        ])) : X("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (k(), T("a", {
                                    key: 1,
                                    href: u.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: l
                                  }, J(u.title), 9, By))
                                ]))), 128))
                              ])
                            ]),
                            h("div", jy, [
                              h("div", Hy, [
                                e.customerUrl ? (k(), T("a", {
                                  key: 0,
                                  href: e.customerUrl,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, d[5] || (d[5] = [
                                  h("span", { class: "flex items-center" }, [
                                    h("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      h("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    He(" Account ")
                                  ], -1)
                                ]), 8, Uy)) : X("", !0),
                                d[6] || (d[6] = h("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  h("span", { class: "flex items-center" }, [
                                    h("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      h("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      })
                                    ]),
                                    He(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            e.showLocalization ? (k(), T("div", qy, [
                              as(c.$slots, "localization", {}, void 0, !0)
                            ])) : X("", !0)
                          ])
                        ])
                      ])) : X("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : X("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, Vf = /* @__PURE__ */ ct(Ky, [["__scopeId", "data-v-f404e536"]]), zy = { class: "variant-picker" }, Wy = { class: "text-sm font-medium text-gray-900 mb-3" }, Gy = { class: "font-normal text-gray-600" }, Yy = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, Jy = ["title", "aria-label", "disabled", "onClick"], Xy = { class: "sr-only" }, Qy = {
  key: 0,
  class: "color-swatch__checkmark"
}, Zy = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, e1 = ["aria-label", "disabled", "onClick"], t1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, n1 = { class: "flex items-center gap-4" }, s1 = { class: "text-2xl font-bold text-gray-900" }, o1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, i1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, r1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, l1 = {
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
    const n = e, s = t, o = G({}), i = G(null), r = ie(() => n.product.options || []), l = ie(() => n.product.variants || []);
    We(() => {
      if (n.selectedVariantId) {
        const D = l.value.find((C) => C.id == n.selectedVariantId);
        D && a(D);
      } else if (l.value.length > 0) {
        const D = l.value.find((C) => C.available) || l.value[0];
        a(D);
      }
    });
    const a = (D) => {
      i.value = D, r.value.forEach((C, y) => {
        o.value[C.name] = D[`option${y + 1}`];
      }), s("variant-change", D);
    }, c = (D, C) => {
      o.value[D] = C;
      const y = l.value.find((f) => r.value.every((w, b) => {
        const V = o.value[w.name];
        return f[`option${b + 1}`] === V;
      }));
      y && (i.value = y, s("variant-change", y));
    }, d = (D) => o.value[D] || "", u = (D, C) => o.value[D] === C, p = (D, C) => {
      const y = r.value.findIndex((f) => f.name === D);
      return l.value.some((f) => {
        const w = f[`option${y + 1}`] === C, b = r.value.every((V, P) => {
          if (V.name === D) return !0;
          const S = o.value[V.name];
          return S ? f[`option${P + 1}`] === S : !0;
        });
        return w && b && f.available;
      });
    }, m = (D) => D.toLowerCase().includes("color") || D.toLowerCase().includes("colour"), E = (D) => ({
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
    })[D.toLowerCase()] || "#E5E7EB", v = (D) => {
      var C, y;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((y = (C = window.Shopify) == null ? void 0 : C.currency) == null ? void 0 : y.active) || "USD"
      }).format(D / 100);
    };
    return (D, C) => (k(), T("div", zy, [
      (k(!0), T(ue, null, Ae(r.value, (y) => (k(), T("div", {
        key: y.name,
        class: "variant-option mb-6"
      }, [
        h("h3", Wy, [
          He(J(y.name) + ": ", 1),
          h("span", Gy, J(d(y.name)), 1)
        ]),
        m(y.name) ? (k(), T("div", Yy, [
          (k(!0), T(ue, null, Ae(y.values, (f) => (k(), T("button", {
            key: f,
            type: "button",
            class: Ze([
              "color-swatch",
              u(y.name, f) ? "color-swatch--selected" : "",
              p(y.name, f) ? "" : "color-swatch--unavailable"
            ]),
            style: Nt({ backgroundColor: E(f) }),
            title: f,
            "aria-label": `Select ${y.name} ${f}`,
            disabled: !p(y.name, f),
            onClick: (w) => c(y.name, f)
          }, [
            h("span", Xy, J(f), 1),
            u(y.name, f) ? (k(), T("span", Qy, C[0] || (C[0] = [
              h("svg", {
                class: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                h("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : X("", !0)
          ], 14, Jy))), 128))
        ])) : (k(), T("div", Zy, [
          (k(!0), T(ue, null, Ae(y.values, (f) => (k(), T("button", {
            key: f,
            type: "button",
            class: Ze([
              "variant-button",
              u(y.name, f) ? "variant-button--selected" : "",
              p(y.name, f) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${y.name} ${f}`,
            disabled: !p(y.name, f),
            onClick: (w) => c(y.name, f)
          }, J(f), 11, e1))), 128))
        ]))
      ]))), 128)),
      i.value ? (k(), T("div", t1, [
        h("div", n1, [
          h("span", s1, J(v(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (k(), T("span", o1, J(v(i.value.compare_at_price)), 1)) : X("", !0)
        ]),
        i.value.available ? (k(), T("div", i1, " In Stock ")) : (k(), T("div", r1, " Out of Stock "))
      ])) : X("", !0)
    ]));
  }
}, a1 = /* @__PURE__ */ ct(l1, [["__scopeId", "data-v-6eb16bf8"]]), c1 = { class: "quantity-selector" }, u1 = ["disabled"], d1 = ["value", "min", "max"], f1 = ["disabled"], p1 = {
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
    const n = e, s = t, o = ie({
      get: () => n.modelValue,
      set: (c) => {
        const d = Math.max(n.min, Math.min(n.max, c));
        s("update:modelValue", d), s("update", d);
      }
    }), i = () => {
      o.value > n.min && (o.value = o.value - n.step);
    }, r = () => {
      o.value < n.max && (o.value = o.value + n.step);
    }, l = (c) => {
      const d = parseInt(c.target.value) || n.min;
      o.value = d;
    }, a = (c) => {
      const d = parseInt(c.target.value) || n.min;
      o.value = d, c.target.value = o.value;
    };
    return (c, d) => (k(), T("div", c1, [
      h("button", {
        type: "button",
        class: "quantity-button quantity-button--minus",
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, d[0] || (d[0] = [
        h("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          })
        ], -1)
      ]), 8, u1),
      h("input", {
        type: "number",
        class: "quantity-input",
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: l,
        onBlur: a,
        "aria-label": "Quantity"
      }, null, 40, d1),
      h("button", {
        type: "button",
        class: "quantity-button quantity-button--plus",
        disabled: e.modelValue >= e.max,
        onClick: r,
        "aria-label": "Increase quantity"
      }, d[1] || (d[1] = [
        h("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          })
        ], -1)
      ]), 8, f1)
    ]));
  }
}, h1 = /* @__PURE__ */ ct(p1, [["__scopeId", "data-v-06e9d113"]]);
function m1(e) {
  return rl() ? (Pc(e), !0) : !1;
}
function Ql(e) {
  return typeof e == "function" ? e() : No(e);
}
const g1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const v1 = Object.prototype.toString, y1 = (e) => v1.call(e) === "[object Object]", _o = () => {
};
function b1(e, t) {
  function n(...s) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(i);
    });
  }
  return n;
}
function _1(...e) {
  let t = 0, n, s = !0, o = _o, i, r, l, a, c;
  !Ve(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [r, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = _o);
  };
  return (p) => {
    const m = Ql(r), E = Date.now() - t, v = () => i = p();
    return d(), m <= 0 ? (t = Date.now(), v()) : (E > m && (a || !s) ? (t = Date.now(), v()) : l && (i = new Promise((D, C) => {
      o = c ? C : D, n = setTimeout(() => {
        t = Date.now(), s = !0, D(v()), d();
      }, Math.max(0, m - E));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, i);
  };
}
function E1(e, t = 200, n = !1, s = !0, o = !1) {
  return b1(
    _1(t, n, s, o),
    e
  );
}
function N1(e) {
  var t;
  const n = Ql(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const $f = g1 ? window : void 0;
function yr(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = $f) : [t, n, s, o] = e, !t)
    return _o;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((d) => d()), i.length = 0;
  }, l = (d, u, p, m) => (d.addEventListener(u, p, m), () => d.removeEventListener(u, p, m)), a = tn(
    () => [N1(t), Ql(o)],
    ([d, u]) => {
      if (r(), !d)
        return;
      const p = y1(u) ? { ...u } : u;
      i.push(
        ...n.flatMap((m) => s.map((E) => l(d, m, E, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), r();
  };
  return m1(c), c;
}
function w1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: i,
    passive: r = !0,
    window: l = $f
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), d = ie(() => a.x - c.x), u = ie(() => a.y - c.y), { max: p, abs: m } = Math, E = ie(() => p(m(d.value), m(u.value)) >= n), v = G(!1), D = ie(() => E.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), C = (_) => [_.touches[0].clientX, _.touches[0].clientY], y = (_, O) => {
    a.x = _, a.y = O;
  }, f = (_, O) => {
    c.x = _, c.y = O;
  };
  let w;
  const b = x1(l == null ? void 0 : l.document);
  r ? w = b ? { passive: !0 } : { capture: !1 } : w = b ? { passive: !1, capture: !0 } : { capture: !0 };
  const V = (_) => {
    v.value && (o == null || o(_, D.value)), v.value = !1;
  }, P = [
    yr(e, "touchstart", (_) => {
      if (_.touches.length !== 1)
        return;
      w.capture && !w.passive && _.preventDefault();
      const [O, I] = C(_);
      y(O, I), f(O, I), i == null || i(_);
    }, w),
    yr(e, "touchmove", (_) => {
      if (_.touches.length !== 1)
        return;
      const [O, I] = C(_);
      f(O, I), !v.value && E.value && (v.value = !0), v.value && (s == null || s(_));
    }, w),
    yr(e, ["touchend", "touchcancel"], V, w)
  ];
  return {
    isPassiveEventSupported: b,
    isSwiping: v,
    direction: D,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => P.forEach((_) => _())
  };
}
function x1(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", _o, n), e.removeEventListener("x", _o), t;
}
const S1 = { class: "sticky-header-container" }, C1 = {
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
    const t = e, n = G(null), s = G(!1), o = G(!1), i = G(!1), r = G(!1), l = G("#ffffff"), a = G(0), c = G(0), d = ie(() => D.value ? `${c.value}px` : "0");
    let u = 0;
    const p = ie(() => {
      const y = {};
      return D.value && s.value && (y.position = "fixed", y.top = "0", y.left = "0", y.right = "0", y.zIndex = "40", o.value ? y.transform = "translateY(-100%)" : y.transform = "translateY(0)"), r.value && (a.value === 0 ? y.backgroundColor = "transparent" : D.value && s.value && (y.backgroundColor = l.value)), y.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", y;
    }), m = () => {
      var w, b, V;
      const y = (b = (w = n.value) == null ? void 0 : w.getRootNode()) == null ? void 0 : b.host;
      if (!y) return;
      y.classList.add("sticky-header-wrapper");
      const f = (V = n.value) == null ? void 0 : V.querySelector(".main-header");
      f && r.value && (a.value === 0 ? (f.style.backgroundColor = "transparent", f.style.borderBottomColor = "transparent") : D.value && s.value && (f.style.backgroundColor = l.value, f.style.borderBottomColor = "#e5e7eb"));
    }, E = E1(() => {
      if (!D.value)
        return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = y, s.value = y > 0, i.value = y > 10, v.value && s.value) {
        const f = y - u;
        Math.abs(f) > 5 && (f > 0 && y > c.value ? o.value = !0 : f < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(y - u) > 1 && (u = y), m();
    }, 50), v = G(t.hideOnScrollDown), D = G(t.sticky), C = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return We(() => {
      if (n.value) {
        const y = n.value.getRootNode().host;
        if (y) {
          y.classList.add("sticky-header-wrapper"), r.value = y.classList.contains("header-transparent");
          const f = y.getAttribute("data-hide-on-scroll-down"), w = y.getAttribute("data-sticky"), b = y.getAttribute("data-sticky-bg");
          f !== null && (v.value = f === "true"), w !== null && (D.value = w === "true"), b !== null && (l.value = b || "#ffffff"), setTimeout(C, 100), window.addEventListener("resize", C);
        }
      }
      window.addEventListener("scroll", E, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), E();
    }), At(() => {
      window.removeEventListener("scroll", E), window.removeEventListener("resize", C);
    }), (y, f) => (k(), T("div", S1, [
      D.value && s.value ? (k(), T("div", {
        key: 0,
        class: "header-placeholder",
        style: Nt({ height: d.value })
      }, null, 4)) : X("", !0),
      h("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Ze(["sticky-header-inner", {
          "is-fixed": D.value && s.value,
          "is-hidden": o.value,
          "has-shadow": i.value,
          "is-transparent": r.value && a.value === 0
        }]),
        style: Nt(p.value)
      }, [
        as(y.$slots, "default")
      ], 6)
    ]));
  }
}, k1 = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, O1 = { class: "main-header__wrapper" }, T1 = {
  href: "/",
  class: "main-header__logo"
}, D1 = ["src", "alt"], V1 = {
  key: 1,
  class: "text-xl font-bold"
}, $1 = { class: "main-header__nav hidden lg:flex" }, A1 = ["href"], I1 = { class: "main-header__actions" }, M1 = {
  key: 0,
  class: "cart-count"
}, P1 = { class: "search-overlay__container" }, R1 = {
  action: "/search",
  method: "get",
  class: "search-form"
}, L1 = {
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
    const t = G(null), n = G(!1), s = G(0), o = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, i = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, r = async () => {
      var a;
      n.value = !n.value, n.value && (await wo(), (a = t.value) == null || a.focus());
    }, l = () => {
      var a;
      (a = window.OrionCart) != null && a.state && (s.value = window.OrionCart.state.itemCount || 0);
    };
    return We(() => {
      document.addEventListener("cart:updated", l), l();
    }), At(() => {
      document.removeEventListener("cart:updated", l);
    }), (a, c) => (k(), T("div", k1, [
      h("div", O1, [
        h("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: o,
          "aria-label": "Open menu"
        }, c[0] || (c[0] = [
          h("svg", {
            class: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          ], -1)
        ])),
        h("a", T1, [
          e.logoUrl ? (k(), T("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, D1)) : (k(), T("span", V1, J(e.shopName), 1))
        ]),
        h("nav", $1, [
          (k(!0), T(ue, null, Ae(e.navigationLinks, (d) => (k(), T("a", {
            key: d.url,
            href: d.url,
            class: "nav-link"
          }, J(d.title), 9, A1))), 128))
        ]),
        h("div", I1, [
          h("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: r,
            "aria-label": "Search"
          }, c[1] || (c[1] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            ], -1)
          ])),
          c[3] || (c[3] = h("a", {
            href: "/account",
            class: "action-button",
            "aria-label": "Account"
          }, [
            h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ])
          ], -1)),
          h("button", {
            type: "button",
            class: "action-button relative",
            onClick: i,
            "aria-label": "Cart"
          }, [
            c[2] || (c[2] = h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)),
            s.value > 0 ? (k(), T("span", M1, J(s.value), 1)) : X("", !0)
          ])
        ])
      ]),
      (k(), Kt(ls, { to: "body" }, [
        ye(en, { name: "fade" }, {
          default: kt(() => [
            n.value ? (k(), T("div", {
              key: 0,
              class: "search-overlay",
              onClick: sn(r, ["self"])
            }, [
              h("div", P1, [
                h("form", R1, [
                  h("input", {
                    ref_key: "searchInput",
                    ref: t,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Ad(r, ["esc"])
                  }, null, 544),
                  c[4] || (c[4] = h("button", {
                    type: "submit",
                    class: "search-submit"
                  }, [
                    h("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      h("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1))
                ]),
                h("button", {
                  type: "button",
                  class: "search-close",
                  onClick: r,
                  "aria-label": "Close search"
                }, c[5] || (c[5] = [
                  h("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ])
            ])) : X("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Af = /* @__PURE__ */ ct(L1, [["__scopeId", "data-v-b1f748a1"]]), F1 = { class: "site-footer" }, B1 = {
  key: 0,
  class: "newsletter-section"
}, j1 = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, H1 = { class: "newsletter-content" }, U1 = { class: "newsletter-text" }, q1 = { class: "text-xl font-semibold mb-2" }, K1 = { class: "text-gray-600" }, z1 = ["disabled"], W1 = ["disabled"], G1 = { key: 0 }, Y1 = { key: 1 }, J1 = { class: "footer-main" }, X1 = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Q1 = { class: "footer-grid" }, Z1 = { class: "footer-column" }, eb = { class: "footer-heading" }, tb = { class: "text-gray-600 mb-4" }, nb = {
  key: 0,
  class: "social-links"
}, sb = ["href", "aria-label"], ob = { class: "footer-heading" }, ib = { class: "footer-links" }, rb = ["href"], lb = {
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
}, pb = { class: "payment-icons" }, hb = ["src", "alt"], mb = { class: "footer-bottom" }, gb = { class: "copyright" }, vb = {
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
    const t = G(""), n = G(!1), s = ie(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
    }, i = (r) => {
      const l = {
        facebook: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[r.toLowerCase()] || l.facebook;
    };
    return (r, l) => (k(), T("footer", F1, [
      e.showNewsletter ? (k(), T("div", B1, [
        h("div", j1, [
          h("div", H1, [
            h("div", U1, [
              h("h3", q1, J(e.newsletterTitle), 1),
              h("p", K1, J(e.newsletterDescription), 1)
            ]),
            h("form", {
              onSubmit: sn(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              mt(h("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, z1), [
                [Rn, t.value]
              ]),
              h("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (k(), T("span", Y1, "Subscribing...")) : (k(), T("span", G1, "Subscribe"))
              ], 8, W1)
            ], 32)
          ])
        ])
      ])) : X("", !0),
      h("div", J1, [
        h("div", X1, [
          h("div", Q1, [
            h("div", Z1, [
              h("h4", eb, J(e.companyName), 1),
              h("p", tb, J(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (k(), T("div", nb, [
                (k(!0), T(ue, null, Ae(e.socialLinks, (a) => (k(), T("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (k(), Kt($u(i(a.name))))
                ], 8, sb))), 128))
              ])) : X("", !0)
            ]),
            (k(!0), T(ue, null, Ae(e.footerColumns, (a) => (k(), T("div", {
              key: a.title,
              class: "footer-column"
            }, [
              h("h4", ob, J(a.title), 1),
              h("ul", ib, [
                (k(!0), T(ue, null, Ae(a.links, (c) => (k(), T("li", {
                  key: c.title
                }, [
                  h("a", {
                    href: c.url,
                    class: "footer-link"
                  }, J(c.title), 9, rb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (k(), T("div", lb, [
              l[4] || (l[4] = h("h4", { class: "footer-heading" }, "Contact", -1)),
              h("div", ab, [
                e.contactEmail ? (k(), T("p", cb, [
                  l[1] || (l[1] = h("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ], -1)),
                  He(" " + J(e.contactEmail), 1)
                ])) : X("", !0),
                e.contactPhone ? (k(), T("p", ub, [
                  l[2] || (l[2] = h("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    })
                  ], -1)),
                  He(" " + J(e.contactPhone), 1)
                ])) : X("", !0),
                e.contactAddress ? (k(), T("p", db, [
                  l[3] || (l[3] = h("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  He(" " + J(e.contactAddress), 1)
                ])) : X("", !0)
              ])
            ])) : X("", !0)
          ]),
          e.paymentMethods.length > 0 ? (k(), T("div", fb, [
            l[5] || (l[5] = h("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            h("div", pb, [
              (k(!0), T(ue, null, Ae(e.paymentMethods, (a) => (k(), T("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, hb))), 128))
            ])
          ])) : X("", !0),
          h("div", mb, [
            h("p", gb, " © " + J(s.value) + " " + J(e.companyName) + ". All rights reserved. ", 1),
            l[6] || (l[6] = h("div", { class: "footer-bottom-links" }, [
              h("a", {
                href: "/pages/privacy-policy",
                class: "footer-bottom-link"
              }, "Privacy Policy"),
              h("a", {
                href: "/pages/terms-of-service",
                class: "footer-bottom-link"
              }, "Terms of Service"),
              h("a", {
                href: "/pages/refund-policy",
                class: "footer-bottom-link"
              }, "Refund Policy")
            ], -1))
          ])
        ])
      ])
    ]));
  }
}, yb = /* @__PURE__ */ ct(vb, [["__scopeId", "data-v-799862f9"]]), bb = { class: "product-card group relative" }, _b = { class: "relative overflow-hidden rounded-lg bg-white" }, Eb = ["href"], Nb = ["src", "alt"], wb = {
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
    const n = e, s = t, o = G(""), i = G(!1), r = ie(() => {
      var w, b;
      return i.value && ((w = n.product.media) != null && w[1]) ? n.product.media[1].src : ((b = n.product.featured_media) == null ? void 0 : b.src) || "/placeholder.jpg";
    }), l = ie(() => {
      var w;
      return (w = n.product.options) == null ? void 0 : w.some(
        (b) => b.name.toLowerCase().includes("color") || b.name.toLowerCase().includes("colour")
      );
    }), a = ie(() => {
      var b;
      const w = (b = n.product.options) == null ? void 0 : b.find(
        (V) => V.name.toLowerCase().includes("color") || V.name.toLowerCase().includes("colour")
      );
      return (w == null ? void 0 : w.values) || [];
    }), c = ie(() => n.product.price || 0), d = ie(() => n.product.compare_at_price || 0), u = ie(() => n.product.available && d.value > c.value), p = ie(() => u.value ? Math.round((d.value - c.value) / d.value * 100) : 0), m = (w) => `$${(w / 100).toFixed(2)}`, E = (w) => {
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
      }, V = w.toLowerCase();
      return b[V] || `#${V.replace("#", "")}`;
    }, v = () => {
      var w;
      ((w = n.product.media) == null ? void 0 : w.length) > 1 && (i.value = !0);
    }, D = () => {
      i.value = !1;
    }, C = (w) => {
      o.value = w.value;
    }, y = () => {
      s("quick-add", n.product);
    }, f = () => {
      s("quick-view", n.product);
    };
    return (w, b) => (k(), T("div", bb, [
      h("div", _b, [
        h("a", {
          href: e.product.url || "#",
          class: "block aspect-[3/4]"
        }, [
          h("img", {
            src: r.value,
            alt: e.product.title,
            class: "h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105",
            onMouseenter: v,
            onMouseleave: D
          }, null, 40, Nb),
          u.value ? (k(), T("div", wb, J(p.value) + "% OFF ", 1)) : X("", !0),
          e.product.available ? X("", !0) : (k(), T("div", xb, b[0] || (b[0] = [
            h("span", { class: "bg-white text-secondary-900 px-4 py-2 font-medium rounded" }, " Out of Stock ", -1)
          ])))
        ], 8, Eb),
        h("div", Sb, [
          e.product.available && e.enableQuickAdd ? (k(), T("button", {
            key: 0,
            onClick: y,
            class: "w-full bg-secondary-900 text-white py-2 px-4 rounded hover:bg-secondary-800 transition-colors text-sm font-medium"
          }, " Quick Add ")) : X("", !0),
          e.enableQuickView ? (k(), T("button", {
            key: 1,
            onClick: f,
            class: "w-full bg-white text-secondary-900 border border-secondary-300 py-2 px-4 rounded hover:bg-secondary-50 transition-colors text-sm font-medium mt-2"
          }, " Quick View ")) : X("", !0)
        ])
      ]),
      h("div", Cb, [
        l.value ? (k(), T("div", kb, [
          h("div", Ob, [
            (k(!0), T(ue, null, Ae(a.value, (V) => (k(), T("button", {
              key: V.value,
              onClick: (P) => C(V),
              title: V.value,
              class: Ze([
                "w-6 h-6 rounded-full border-2 transition-all",
                o.value === V.value ? "border-secondary-900 scale-110" : "border-secondary-300"
              ]),
              style: Nt({ backgroundColor: E(V.value) })
            }, null, 14, Tb))), 128))
          ])
        ])) : X("", !0),
        h("h3", Db, [
          h("a", {
            href: e.product.url || "#",
            class: "hover:text-primary-600 transition-colors"
          }, J(e.product.title), 9, Vb)
        ]),
        h("div", $b, [
          h("span", Ab, J(m(c.value)), 1),
          d.value > c.value ? (k(), T("span", Ib, J(m(d.value)), 1)) : X("", !0)
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
}, Xb = { class: "space-y-2" }, Qb = ["value"], Zb = { class: "ml-2 text-sm" }, e_ = { class: "filter-group" }, t_ = { class: "flex items-center" }, n_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, s_ = { class: "h-full flex flex-col" }, o_ = { class: "flex items-center justify-between p-4 border-b" }, i_ = {
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
    const n = e, s = t, o = G("manual"), i = G([]), r = G([]), l = G([]), a = G(!1), c = G(!1), d = ie(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.product_type && y.add(f.product_type);
      }), Array.from(y).sort();
    }), u = ie(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.vendor && y.add(f.vendor);
      }), Array.from(y).sort();
    }), p = ie(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      C();
    }, E = () => {
      C();
    }, v = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1, C();
    }, D = () => {
      c.value = !1, C();
    }, C = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: i.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (y, f) => (k(), T("div", Pb, [
      h("div", Rb, [
        h("button", {
          onClick: f[0] || (f[0] = (w) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, f[12] || (f[12] = [
          h("span", { class: "font-medium" }, "Filters", -1),
          h("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      h("div", Lb, [
        h("div", Fb, [
          f[14] || (f[14] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          mt(h("select", {
            "onUpdate:modelValue": f[1] || (f[1] = (w) => o.value = w),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, f[13] || (f[13] = [
            Cs('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Wi, o.value]
          ])
        ]),
        h("div", Bb, [
          f[19] || (f[19] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          h("div", jb, [
            h("label", Hb, [
              mt(h("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": f[2] || (f[2] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[15] || (f[15] = h("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            h("label", Ub, [
              mt(h("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": f[3] || (f[3] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[16] || (f[16] = h("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            h("label", qb, [
              mt(h("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": f[4] || (f[4] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[17] || (f[17] = h("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            h("label", Kb, [
              mt(h("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": f[5] || (f[5] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[18] || (f[18] = h("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (k(), T("div", zb, [
          f[20] || (f[20] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          h("div", Wb, [
            (k(!0), T(ue, null, Ae(d.value, (w) => (k(), T("label", {
              key: w,
              class: "flex items-center"
            }, [
              mt(h("input", {
                type: "checkbox",
                value: w,
                "onUpdate:modelValue": f[6] || (f[6] = (b) => r.value = b),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, Gb), [
                [Xt, r.value]
              ]),
              h("span", Yb, J(w), 1)
            ]))), 128))
          ])
        ])) : X("", !0),
        u.value.length > 0 ? (k(), T("div", Jb, [
          f[21] || (f[21] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          h("div", Xb, [
            (k(!0), T(ue, null, Ae(u.value, (w) => (k(), T("label", {
              key: w,
              class: "flex items-center"
            }, [
              mt(h("input", {
                type: "checkbox",
                value: w,
                "onUpdate:modelValue": f[7] || (f[7] = (b) => l.value = b),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, Qb), [
                [Xt, l.value]
              ]),
              h("span", Zb, J(w), 1)
            ]))), 128))
          ])
        ])) : X("", !0),
        h("div", e_, [
          f[23] || (f[23] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          h("label", t_, [
            mt(h("input", {
              type: "checkbox",
              "onUpdate:modelValue": f[8] || (f[8] = (w) => a.value = w),
              onChange: E,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Xt, a.value]
            ]),
            f[22] || (f[22] = h("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        p.value ? (k(), T("button", {
          key: 2,
          onClick: v,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : X("", !0)
      ]),
      (k(), Kt(ls, { to: "body" }, [
        c.value ? (k(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: f[11] || (f[11] = sn((w) => c.value = !1, ["self"]))
        }, [
          h("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: f[9] || (f[9] = (w) => c.value = !1)
          }),
          h("div", n_, [
            h("div", s_, [
              h("div", o_, [
                f[25] || (f[25] = h("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                h("button", {
                  onClick: f[10] || (f[10] = (w) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, f[24] || (f[24] = [
                  h("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              f[26] || (f[26] = h("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
              h("div", { class: "p-4 border-t" }, [
                h("button", {
                  onClick: D,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : X("", !0)
      ]))
    ]));
  }
}, r_ = /* @__PURE__ */ ct(i_, [["__scopeId", "data-v-67473a91"]]), l_ = { class: "collection-grid" }, a_ = {
  key: 0,
  class: "mb-8"
}, c_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, u_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, d_ = { class: "mt-4 flex items-center justify-between" }, f_ = { class: "text-sm text-secondary-600" }, p_ = { class: "lg:hidden" }, h_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, m_ = { class: "lg:col-span-1" }, g_ = ["products"], v_ = { class: "lg:col-span-3" }, y_ = {
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
    const t = e, n = G(!1), s = G(!1), o = G(1), i = G(t.productsPerPage), r = G("manual"), l = G({}), a = G(null), c = G(null), d = ie(() => {
      var O, I, $;
      let S = [...t.products];
      switch (l.value.inStockOnly && (S = S.filter((L) => L.available)), ((O = l.value.priceRanges) == null ? void 0 : O.length) > 0 && (S = S.filter((L) => {
        const Y = L.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? Y < 50 : ee === "50-100" ? Y >= 50 && Y < 100 : ee === "100-200" ? Y >= 100 && Y < 200 : ee === "200+" ? Y >= 200 : !1);
      })), ((I = l.value.types) == null ? void 0 : I.length) > 0 && (S = S.filter((L) => l.value.types.includes(L.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (S = S.filter((L) => l.value.vendors.includes(L.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          S.sort((L, Y) => L.price - Y.price);
          break;
        case "price-descending":
          S.sort((L, Y) => Y.price - L.price);
          break;
        case "title-ascending":
          S.sort((L, Y) => L.title.localeCompare(Y.title));
          break;
        case "title-descending":
          S.sort((L, Y) => Y.title.localeCompare(L.title));
          break;
        case "created-ascending":
          S.sort((L, Y) => new Date(L.created_at) - new Date(Y.created_at));
          break;
        case "created-descending":
          S.sort((L, Y) => new Date(Y.created_at) - new Date(L.created_at));
          break;
      }
      return S;
    }), u = ie(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, i.value);
      const S = (o.value - 1) * t.productsPerPage, _ = S + t.productsPerPage;
      return d.value.slice(S, _);
    }), p = ie(() => Math.ceil(d.value.length / t.productsPerPage)), m = ie(() => i.value < d.value.length), E = ie(() => Math.max(0, d.value.length - i.value)), v = ie(() => {
      const S = [], _ = p.value, O = o.value;
      if (_ <= 7)
        for (let I = 1; I <= _; I++)
          S.push(I);
      else if (O <= 3) {
        for (let I = 1; I <= 5; I++)
          S.push(I);
        S.push("..."), S.push(_);
      } else if (O >= _ - 2) {
        S.push(1), S.push("...");
        for (let I = _ - 4; I <= _; I++)
          S.push(I);
      } else {
        S.push(1), S.push("...");
        for (let I = O - 1; I <= O + 1; I++)
          S.push(I);
        S.push("..."), S.push(_);
      }
      return S.filter((I) => I === "..." || I >= 1 && I <= _);
    }), D = (S) => {
      l.value = S, o.value = 1, i.value = t.productsPerPage;
    }, C = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, y = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, f = async (S) => {
      var O;
      const _ = new FormData();
      _.append("id", S.variants[0].id), _.append("quantity", "1"), await ((O = window.OrionCart) == null ? void 0 : O.addItem(_)), console.log("Added to cart:", S.title);
    }, w = (S) => {
      a.value = S;
    }, b = () => {
      a.value = null;
    };
    let V = null;
    const P = () => {
      !t.enableInfiniteScroll || !c.value || (V = new IntersectionObserver(
        (S) => {
          S[0].isIntersecting && m.value && !s.value && y();
        },
        { threshold: 0.1 }
      ), V.observe(c.value));
    };
    return We(() => {
      P();
    }), At(() => {
      V && V.disconnect();
    }), tn(() => t.enableInfiniteScroll, () => {
      P();
    }), (S, _) => (k(), T("div", l_, [
      e.showHeader ? (k(), T("div", a_, [
        h("h1", c_, J(e.collectionTitle), 1),
        e.collectionDescription ? (k(), T("div", u_, J(e.collectionDescription), 1)) : X("", !0),
        h("div", d_, [
          h("p", f_, J(d.value.length) + " products ", 1),
          h("div", p_, [
            mt(h("select", {
              "onUpdate:modelValue": _[0] || (_[0] = (O) => r.value = O),
              onChange: C,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, _[5] || (_[5] = [
              Cs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Wi, r.value]
            ])
          ])
        ])
      ])) : X("", !0),
      h("div", h_, [
        h("aside", m_, [
          h("collection-filters", {
            products: e.products,
            onUpdateFilters: D
          }, null, 40, g_)
        ]),
        h("div", v_, [
          n.value ? (k(), T("div", y_, [
            (k(), T(ue, null, Ae(6, (O) => h("div", {
              key: O,
              class: "animate-pulse"
            }, _[6] || (_[6] = [
              h("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              h("div", { class: "mt-4 space-y-2" }, [
                h("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                h("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ])) : d.value.length === 0 ? (k(), T("div", b_, _[7] || (_[7] = [
            h("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            h("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            h("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (k(), T("div", __, [
            (k(!0), T(ue, null, Ae(u.value, (O) => (k(), T("product-card", {
              key: O.id,
              product: O,
              onQuickAdd: f,
              onQuickView: w
            }, null, 40, E_))), 128))
          ])),
          !n.value && d.value.length > 0 ? (k(), T("div", N_, [
            e.enableInfiniteScroll ? (k(), T("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (k(), T("div", w_, _[8] || (_[8] = [
                h("svg", {
                  class: "animate-spin h-5 w-5 text-primary-600 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  h("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  h("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                He(" Loading more products... ", -1)
              ]))) : X("", !0)
            ], 512)) : m.value ? (k(), T("div", x_, [
              h("button", {
                onClick: y,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (k(), T("span", C_, "Loading...")) : (k(), T("span", k_, "Load More (" + J(E.value) + " remaining)", 1))
              ], 8, S_)
            ])) : X("", !0),
            !e.enableInfiniteScroll && p.value > 1 ? (k(), T("nav", O_, [
              h("div", T_, [
                h("button", {
                  onClick: _[1] || (_[1] = (O) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, D_),
                h("button", {
                  onClick: _[2] || (_[2] = (O) => o.value++),
                  disabled: o.value === p.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, V_)
              ]),
              h("div", $_, [
                h("div", null, [
                  h("nav", A_, [
                    h("button", {
                      onClick: _[3] || (_[3] = (O) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, _[9] || (_[9] = [
                      h("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        h("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, I_),
                    (k(!0), T(ue, null, Ae(v.value, (O) => (k(), T("button", {
                      key: O,
                      onClick: (I) => o.value = O,
                      class: Ze([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === O ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, J(O), 11, M_))), 128)),
                    h("button", {
                      onClick: _[4] || (_[4] = (O) => o.value++),
                      disabled: o.value === p.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, _[10] || (_[10] = [
                      h("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        h("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, P_)
                  ])
                ])
              ])
            ])) : X("", !0)
          ])) : X("", !0)
        ])
      ]),
      (k(), Kt(ls, { to: "body" }, [
        a.value ? (k(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: sn(b, ["self"])
        }, [
          h("div", R_, [
            h("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: b
            }),
            h("div", L_, [
              h("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                h("button", {
                  onClick: b,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, _[11] || (_[11] = [
                  h("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              h("div", F_, [
                h("h3", B_, J(a.value.title), 1),
                _[12] || (_[12] = h("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : X("", !0)
      ]))
    ]));
  }
}, H_ = { class: "product-gallery" }, U_ = { class: "main-image-wrapper" }, q_ = ["src", "alt"], K_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, z_ = {
  key: 0,
  class: "thumbnails-wrapper"
}, W_ = ["disabled"], G_ = ["onClick", "aria-label"], Y_ = ["src", "alt"], J_ = ["disabled"], X_ = {
  key: 1,
  class: "swiper-dots"
}, Q_ = ["onClick", "aria-label"], Z_ = ["src", "alt"], eE = { class: "lightbox-counter" }, tE = 80, Ho = 4, Sc = 2, nE = {
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
    const t = e, n = G(0), s = G(!1), o = G(!1), i = G(!1), r = G(!1), l = G(0), a = G(null), c = G(0), d = G(0), u = G({}), p = ie(() => t.images.map((P) => {
      if (P.src)
        return P;
      const S = P.url || P;
      return {
        src: `${S}?width=${t.imageTransformWidth}`,
        thumbnail: `${S}?width=${t.thumbnailWidth}`,
        alt: P.alt || t.productTitle
      };
    })), m = ie(() => p.value[n.value] || { src: "", alt: "" }), E = ie(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), v = ie(() => {
      const S = c.value / u.value.width * 100, _ = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * Sc}px ${u.value.height * Sc}px`,
        backgroundPosition: `${S}% ${_}%`
      };
    }), D = (P) => {
      s.value = !0, n.value = P;
    }, C = (P) => {
      P === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Ho,
        l.value + 1
      );
    }, y = (P) => {
      n.value = P, o.value = !0, document.body.style.overflow = "hidden";
    }, f = () => {
      o.value = !1, document.body.style.overflow = "";
    }, w = (P) => {
      P === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, b = (P) => {
      const S = P.currentTarget.getBoundingClientRect();
      u.value = S, c.value = P.clientX - S.left, d.value = P.clientY - S.top;
    }, { lengthX: V } = w1(
      a,
      {
        onSwipeEnd() {
          V.value > 50 ? C("prev") : V.value < -50 && C("next");
        }
      }
    );
    return We(() => {
      r.value = window.innerWidth < 768;
      const P = () => {
        r.value = window.innerWidth < 768;
      }, S = (_) => {
        o.value && (_.key === "Escape" && f(), _.key === "ArrowLeft" && w("prev"), _.key === "ArrowRight" && w("next"));
      };
      window.addEventListener("resize", P), window.addEventListener("keydown", S), At(() => {
        window.removeEventListener("resize", P), window.removeEventListener("keydown", S);
      });
    }), (P, S) => (k(), T("div", H_, [
      h("div", U_, [
        h("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: S[1] || (S[1] = (_) => y(n.value)),
          onMouseenter: S[2] || (S[2] = (_) => i.value = !0),
          onMouseleave: S[3] || (S[3] = (_) => i.value = !1),
          onMousemove: b
        }, [
          h("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ze(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: S[0] || (S[0] = (_) => s.value = !1)
          }, null, 42, q_),
          s.value ? (k(), T("div", K_, S[9] || (S[9] = [
            h("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : X("", !0),
          S[10] || (S[10] = h("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            h("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              })
            ])
          ], -1)),
          i.value && !r.value ? (k(), T("div", {
            key: 1,
            class: "zoom-lens",
            style: Nt(E.value)
          }, null, 4)) : X("", !0)
        ], 32),
        i.value && !r.value ? (k(), T("div", {
          key: 0,
          class: "zoom-preview",
          style: Nt(v.value)
        }, null, 4)) : X("", !0)
      ]),
      p.value.length > 1 ? (k(), T("div", z_, [
        p.value.length > Ho ? (k(), T("button", {
          key: 0,
          onClick: S[4] || (S[4] = (_) => C("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, S[11] || (S[11] = [
          h("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, W_)) : X("", !0),
        h("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          h("div", {
            class: "thumbnails-track",
            style: Nt({ transform: `translateX(-${l.value * (tE + 8)}px)` })
          }, [
            (k(!0), T(ue, null, Ae(p.value, (_, O) => (k(), T("button", {
              key: O,
              onClick: (I) => D(O),
              class: Ze(["thumbnail", { active: O === n.value }]),
              "aria-label": `View image ${O + 1}`
            }, [
              h("img", {
                src: _.thumbnail || _.src,
                alt: _.alt,
                class: "w-full h-full object-contain"
              }, null, 8, Y_)
            ], 10, G_))), 128))
          ], 4)
        ], 512),
        p.value.length > Ho ? (k(), T("button", {
          key: 1,
          onClick: S[5] || (S[5] = (_) => C("next")),
          disabled: l.value >= p.value.length - Ho,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, S[12] || (S[12] = [
          h("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, J_)) : X("", !0)
      ])) : X("", !0),
      p.value.length > 1 && r.value ? (k(), T("div", X_, [
        (k(!0), T(ue, null, Ae(p.value, (_, O) => (k(), T("button", {
          key: O,
          onClick: (I) => D(O),
          class: Ze(["swiper-dot", { active: O === n.value }]),
          "aria-label": `Go to image ${O + 1}`
        }, null, 10, Q_))), 128))
      ])) : X("", !0),
      (k(), Kt(ls, { to: "body" }, [
        o.value ? (k(), T("div", {
          key: 0,
          class: "lightbox",
          onClick: f
        }, [
          h("button", {
            onClick: f,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, S[13] || (S[13] = [
            h("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          p.value.length > 1 ? (k(), T("button", {
            key: 0,
            onClick: S[6] || (S[6] = sn((_) => w("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, S[14] || (S[14] = [
            h("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : X("", !0),
          h("div", {
            class: "lightbox-image-wrapper",
            onClick: S[7] || (S[7] = sn(() => {
            }, ["stop"]))
          }, [
            h("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, Z_)
          ]),
          p.value.length > 1 ? (k(), T("button", {
            key: 1,
            onClick: S[8] || (S[8] = sn((_) => w("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, S[15] || (S[15] = [
            h("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : X("", !0),
          h("div", eE, J(n.value + 1) + " / " + J(p.value.length), 1)
        ])) : X("", !0)
      ]))
    ]));
  }
}, sE = /* @__PURE__ */ ct(nE, [["__scopeId", "data-v-a7c1d2a3"]]), oE = { class: "product-info" }, iE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, rE = {
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
}, pE = ["product", "current-variant"], hE = ["value"], mE = { class: "mb-4" }, gE = ["max"], vE = { class: "mb-4" }, yE = {
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
    const n = e, s = t, o = G(n.product.selected_or_first_available_variant || ((D = n.product.variants) == null ? void 0 : D[0]) || {}), i = G(1), r = G(!1), l = G(!1), a = ie(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = ie(() => {
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
      r.value = !0;
      const C = new FormData();
      C.append("id", o.value.id), C.append("quantity", i.value);
      try {
        await ((y = window.OrionCart) == null ? void 0 : y.addItem(C));
        const f = event.target, w = f.textContent;
        f.textContent = "✓ Added to Cart", setTimeout(() => {
          f.textContent = w;
        }, 2e3);
      } catch (f) {
        console.error("Failed to add to cart:", f), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, E = (C) => {
      const y = window.location.href, f = n.product.title, w = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(y)}&text=${encodeURIComponent(f)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(y)}&description=${encodeURIComponent(f)}`
      };
      w[C] && window.open(w[C], "_blank", "width=600,height=400");
    }, v = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (C) {
        console.error("Failed to copy link:", C);
      }
    };
    return tn(() => n.product.selected_variant, (C) => {
      C && (o.value = C);
    }), (C, y) => (k(), T("div", oE, [
      h("h1", iE, J(e.product.title), 1),
      e.product.vendor ? (k(), T("p", rE, " by " + J(e.product.vendor), 1)) : X("", !0),
      h("div", lE, [
        h("div", aE, [
          h("span", cE, J(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (k(), T("span", uE, J(d(o.value.compare_at_price)), 1)) : X("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (k(), T("p", dE, " Save " + J(d(o.value.compare_at_price - o.value.price)) + " (" + J(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : X("", !0)
      ]),
      e.product.has_only_default_variant ? X("", !0) : (k(), T("div", fE, [
        h("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, pE)
      ])),
      h("form", {
        onSubmit: sn(p, ["prevent"]),
        class: "mb-8"
      }, [
        h("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, hE),
        h("div", mE, [
          y[4] || (y[4] = h("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          mt(h("quantity-selector", {
            "onUpdate:modelValue": y[0] || (y[0] = (f) => i.value = f),
            min: 1,
            max: a.value
          }, null, 8, gE), [
            [Rn, i.value]
          ])
        ]),
        h("div", vE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (k(), T("p", bE, " Only " + J(o.value.inventory_quantity) + " left in stock ", 1)) : (k(), T("p", _E, " ✓ In Stock ")) : (k(), T("p", yE, " Out of Stock "))
        ]),
        h("div", EE, [
          h("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || r.value
          }, [
            r.value ? (k(), T("span", wE, y[5] || (y[5] = [
              h("svg", {
                class: "animate-spin h-5 w-5",
                viewBox: "0 0 24 24"
              }, [
                h("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  fill: "none"
                }),
                h("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1),
              He(" Adding... ", -1)
            ]))) : o.value.available ? (k(), T("span", SE, " Add to Cart ")) : (k(), T("span", xE, " Sold Out "))
          ], 8, NE),
          e.showBuyNow ? (k(), T("button", {
            key: 0,
            type: "button",
            onClick: m,
            class: "btn btn-secondary flex-1",
            disabled: !o.value.available
          }, " Buy Now ", 8, CE)) : X("", !0)
        ])
      ], 32),
      e.product.description ? (k(), T("div", kE, [
        y[6] || (y[6] = h("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        h("div", {
          innerHTML: e.product.description
        }, null, 8, OE)
      ])) : X("", !0),
      h("div", TE, [
        y[9] || (y[9] = Cs('<details class="group" data-v-6a5eb736><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-6a5eb736><span class="font-medium" data-v-6a5eb736>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6a5eb736><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-6a5eb736></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-6a5eb736><p class="mb-2" data-v-6a5eb736>Free shipping on orders over $50.</p><p class="mb-2" data-v-6a5eb736>Standard shipping typically takes 3-5 business days.</p><p data-v-6a5eb736>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (k(), T("details", DE, [
          y[7] || (y[7] = h("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
            h("span", { class: "font-medium" }, "Care Instructions"),
            h("svg", {
              class: "w-5 h-5 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          h("div", {
            class: "py-4 text-sm text-gray-600",
            innerHTML: e.product.care_instructions
          }, null, 8, VE)
        ])) : X("", !0),
        c.value ? (k(), T("details", $E, y[8] || (y[8] = [
          Cs('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-6a5eb736><span class="font-medium" data-v-6a5eb736>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6a5eb736><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-6a5eb736></path></svg></summary><div class="py-4" data-v-6a5eb736><table class="w-full text-sm" data-v-6a5eb736><thead data-v-6a5eb736><tr class="border-b" data-v-6a5eb736><th class="text-left py-2" data-v-6a5eb736>Size</th><th class="text-left py-2" data-v-6a5eb736>Chest</th><th class="text-left py-2" data-v-6a5eb736>Length</th></tr></thead><tbody data-v-6a5eb736><tr class="border-b" data-v-6a5eb736><td class="py-2" data-v-6a5eb736>S</td><td class="py-2" data-v-6a5eb736>36&quot;</td><td class="py-2" data-v-6a5eb736>28&quot;</td></tr><tr class="border-b" data-v-6a5eb736><td class="py-2" data-v-6a5eb736>M</td><td class="py-2" data-v-6a5eb736>40&quot;</td><td class="py-2" data-v-6a5eb736>29&quot;</td></tr><tr class="border-b" data-v-6a5eb736><td class="py-2" data-v-6a5eb736>L</td><td class="py-2" data-v-6a5eb736>44&quot;</td><td class="py-2" data-v-6a5eb736>30&quot;</td></tr><tr data-v-6a5eb736><td class="py-2" data-v-6a5eb736>XL</td><td class="py-2" data-v-6a5eb736>48&quot;</td><td class="py-2" data-v-6a5eb736>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : X("", !0)
      ]),
      h("div", AE, [
        y[14] || (y[14] = h("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        h("div", IE, [
          h("button", {
            onClick: y[1] || (y[1] = (f) => E("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, y[10] || (y[10] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          h("button", {
            onClick: y[2] || (y[2] = (f) => E("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, y[11] || (y[11] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          h("button", {
            onClick: y[3] || (y[3] = (f) => E("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, y[12] || (y[12] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          h("button", {
            onClick: v,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            y[13] || (y[13] = h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              })
            ], -1)),
            l.value ? (k(), T("span", ME, " Link copied! ")) : X("", !0)
          ])
        ])
      ])
    ]));
  }
}, RE = /* @__PURE__ */ ct(PE, [["__scopeId", "data-v-6a5eb736"]]), LE = { class: "cart-item" }, FE = { class: "flex gap-4" }, BE = { class: "cart-item-image" }, jE = ["href"], HE = ["src", "alt"], UE = { class: "cart-item-details flex-1" }, qE = { class: "flex justify-between items-start mb-2" }, KE = { class: "font-medium text-gray-900" }, zE = ["href"], WE = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, GE = {
  key: 1,
  class: "mt-2 space-y-1"
}, YE = { class: "font-medium" }, JE = { class: "text-right lg:hidden" }, XE = { class: "font-medium text-gray-900" }, QE = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, ZE = {
  key: 0,
  class: "mb-2"
}, e2 = { class: "flex items-center justify-between mt-3" }, t2 = { class: "flex items-center gap-3" }, n2 = ["max", "disabled"], s2 = ["disabled"], o2 = { class: "text-right hidden lg:block" }, i2 = { class: "font-medium text-gray-900" }, r2 = {
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
    const n = e, s = t, o = G(n.item.quantity), i = G(!1), r = G(""), l = ie(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = ie(() => {
      var m;
      return ((m = n.item.variant) == null ? void 0 : m.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (m) => `$${(m / 100).toFixed(2)}`, d = () => {
      const m = n.item.original_line_price - n.item.final_line_price;
      return Math.round(m / n.item.original_line_price * 100);
    }, u = async (m) => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: m
          }), m === 0 && s("remove", n.item.key);
        } catch (E) {
          console.error("Failed to update quantity:", E), r.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
        } finally {
          i.value = !1;
        }
      }
    }, p = async () => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("remove", n.item.key);
        } catch (m) {
          console.error("Failed to remove item:", m), r.value = "Failed to remove item. Please try again.";
        } finally {
          i.value = !1;
        }
      }
    };
    return tn(() => n.item.quantity, (m) => {
      o.value = m;
    }), (m, E) => (k(), T("div", LE, [
      h("div", FE, [
        h("div", BE, [
          h("a", {
            href: e.item.url,
            class: "block"
          }, [
            h("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "w-full h-full object-cover rounded-md",
              loading: "lazy"
            }, null, 8, HE)
          ], 8, jE)
        ]),
        h("div", UE, [
          h("div", qE, [
            h("div", null, [
              h("h3", KE, [
                h("a", {
                  href: e.item.url,
                  class: "hover:text-red-600 transition-colors"
                }, J(e.item.product_title), 9, zE)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (k(), T("p", WE, J(e.item.variant_title), 1)) : X("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (k(), T("div", GE, [
                (k(!0), T(ue, null, Ae(e.item.properties, (v, D) => (k(), T("p", {
                  key: D,
                  class: "text-xs text-gray-600"
                }, [
                  h("span", YE, J(D) + ":", 1),
                  He(" " + J(v), 1)
                ]))), 128))
              ])) : X("", !0)
            ]),
            h("div", JE, [
              h("p", XE, J(c(e.item.final_line_price)), 1),
              e.item.original_line_price > e.item.final_line_price ? (k(), T("p", QE, J(c(e.item.original_line_price)), 1)) : X("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (k(), T("div", ZE, [
            (k(!0), T(ue, null, Ae(e.item.discounts, (v) => (k(), T("div", {
              key: v.id,
              class: "inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded"
            }, [
              E[1] || (E[1] = h("svg", {
                class: "w-3 h-3",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                h("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              He(" " + J(v.title) + " (-" + J(c(v.amount)) + ") ", 1)
            ]))), 128))
          ])) : X("", !0),
          h("div", e2, [
            h("div", t2, [
              mt(h("quantity-selector", {
                "onUpdate:modelValue": E[0] || (E[0] = (v) => o.value = v),
                min: 0,
                max: l.value,
                "on:update:modelValue": u,
                disabled: i.value,
                class: "w-24"
              }, null, 40, n2), [
                [Rn, o.value]
              ]),
              h("button", {
                type: "button",
                onClick: p,
                class: "text-sm text-gray-500 hover:text-red-600 transition-colors",
                disabled: i.value
              }, J(i.value ? "Removing..." : "Remove"), 9, s2)
            ]),
            h("div", o2, [
              h("p", i2, J(c(e.item.final_line_price)), 1),
              e.item.original_line_price > e.item.final_line_price ? (k(), T("p", r2, J(c(e.item.original_line_price)), 1)) : X("", !0),
              e.item.original_line_price > e.item.final_line_price ? (k(), T("p", l2, " Save " + J(d()) + "% ", 1)) : X("", !0)
            ])
          ]),
          a.value ? (k(), T("p", a2, " Only " + J(e.item.variant.inventory_quantity) + " left in stock ", 1)) : X("", !0),
          r.value ? (k(), T("p", c2, J(r.value), 1)) : X("", !0)
        ])
      ])
    ]));
  }
}, d2 = /* @__PURE__ */ ct(u2, [["__scopeId", "data-v-e99b3eca"]]), f2 = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, p2 = { class: "space-y-3 mb-4" }, h2 = { class: "flex justify-between text-sm" }, m2 = { class: "text-gray-600" }, g2 = { class: "font-medium text-gray-900" }, v2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, y2 = {
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
    const n = e, s = t, o = G(""), i = G(""), r = G(""), l = G(!1), a = G(!1), c = ie(() => n.cart.item_count || 0), d = ie(() => n.cart.total_price || 0), u = ie(() => n.cart.original_total_price || n.cart.total_price || 0), p = ie(() => n.cart.total_discount || 0), m = ie(() => d.value >= 5e3 ? 0 : 500), E = ie(() => Math.round(d.value * 0.1)), v = (y) => `$${(y / 100).toFixed(2)}`, D = async () => {
      var y;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const f = new FormData();
          f.append("discount_code", o.value);
          const w = await fetch("/discount/apply", {
            method: "POST",
            body: f
          });
          if (w.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((y = window.OrionCart) == null ? void 0 : y.fetchCart());
          else {
            const b = await w.json();
            i.value = b.message || "Invalid promo code";
          }
        } catch (f) {
          console.error("Failed to apply promo code:", f), i.value = "Failed to apply promo code. Please try again.";
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
    return (y, f) => (k(), T("div", f2, [
      f[8] || (f[8] = h("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      h("div", p2, [
        h("div", h2, [
          h("span", m2, "Subtotal (" + J(c.value) + " " + J(c.value === 1 ? "item" : "items") + ")", 1),
          h("span", g2, J(v(u.value)), 1)
        ]),
        p.value > 0 ? (k(), T("div", v2, [
          f[1] || (f[1] = h("span", { class: "flex items-center gap-1" }, [
            h("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            He(" Discounts ")
          ], -1)),
          h("span", null, "-" + J(v(p.value)), 1)
        ])) : X("", !0),
        e.showShipping ? (k(), T("div", y2, [
          f[2] || (f[2] = h("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          h("span", b2, J(m.value === 0 ? "Free" : v(m.value)), 1)
        ])) : X("", !0),
        e.showTax ? (k(), T("div", _2, [
          f[3] || (f[3] = h("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          h("span", E2, J(v(E.value)), 1)
        ])) : X("", !0)
      ]),
      h("div", N2, [
        h("div", w2, [
          f[4] || (f[4] = h("span", { class: "text-lg font-semibold" }, "Total", -1)),
          h("div", x2, [
            h("span", S2, J(v(d.value)), 1),
            p.value > 0 ? (k(), T("p", C2, " You saved " + J(v(p.value)) + "! ", 1)) : X("", !0)
          ])
        ])
      ]),
      h("div", k2, [
        h("details", O2, [
          f[5] || (f[5] = h("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            h("span", null, "Have a promo code?"),
            h("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          h("div", T2, [
            h("form", {
              onSubmit: sn(D, ["prevent"]),
              class: "flex gap-2"
            }, [
              mt(h("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (w) => o.value = w),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, D2), [
                [Rn, o.value]
              ]),
              h("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, J(l.value ? "Applying..." : "Apply"), 9, V2)
            ], 32),
            i.value ? (k(), T("p", $2, J(i.value), 1)) : X("", !0),
            r.value ? (k(), T("p", A2, J(r.value), 1)) : X("", !0)
          ])
        ])
      ]),
      h("button", {
        onClick: C,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (k(), T("span", M2, f[6] || (f[6] = [
          h("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            h("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            h("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          He(" Processing... ", -1)
        ]))) : (k(), T("span", P2, f[7] || (f[7] = [
          He(" Proceed to Checkout ", -1),
          h("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 8, I2),
      f[9] || (f[9] = Cs('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, L2 = /* @__PURE__ */ ct(R2, [["__scopeId", "data-v-d638da26"]]), F2 = { class: "slideshow-banner" }, B2 = {
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
    const t = e, n = G(0), s = G([]), o = G(null), i = ie(() => t.autoRotate === !0 || t.autoRotate === "true"), r = ie(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const v = document.querySelector(".slideshow-prev"), D = document.querySelector(".slideshow-next"), C = document.querySelectorAll(".slide-indicator");
      v && v.addEventListener("click", d), D && D.addEventListener("click", c), C.forEach((y, f) => {
        y.addEventListener("click", () => a(f));
      }), i.value && u();
    }, a = (v) => {
      var y, f, w, b;
      if (v === n.value || !s.value.length) return;
      (y = s.value[n.value]) == null || y.classList.remove("opacity-100"), (f = s.value[n.value]) == null || f.classList.add("opacity-0");
      const D = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      D == null || D.classList.remove("opacity-100"), D == null || D.classList.add("opacity-50"), n.value = v, (w = s.value[n.value]) == null || w.classList.remove("opacity-0"), (b = s.value[n.value]) == null || b.classList.add("opacity-100");
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
      }, r.value);
    }, p = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      i.value && p();
    }, E = () => {
      i.value && u();
    };
    return We(() => {
      setTimeout(l, 100);
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.addEventListener("mouseenter", m), v.addEventListener("mouseleave", E));
    }), At(() => {
      p();
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.removeEventListener("mouseenter", m), v.removeEventListener("mouseleave", E));
    }), (v, D) => (k(), T("div", F2, [
      as(v.$slots, "default", {}, void 0, !0)
    ]));
  }
}, j2 = /* @__PURE__ */ ct(B2, [["__scopeId", "data-v-8690c751"]]), H2 = { class: "testimonials-carousel relative" }, U2 = {
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
    const t = e, n = G(0), s = G([]), o = G(null), i = G(null), r = ie(() => t.autoRotate === !0 || t.autoRotate === "true"), l = ie(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), i.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const b = document.querySelector(".testimonials-prev"), V = document.querySelector(".testimonials-next"), P = document.querySelectorAll(".testimonial-indicator");
      b && b.addEventListener("click", u), V && V.addEventListener("click", d), P.forEach((S, _) => {
        S.addEventListener("click", () => c(_));
      }), r.value && p();
    }, c = (b) => {
      if (b === n.value || !s.value.length || !i.value) return;
      n.value = b;
      const P = -s.value[0].offsetWidth * n.value;
      i.value.style.transform = `translateX(${P}px)`, document.querySelectorAll(".testimonial-indicator").forEach((_, O) => {
        O === n.value ? (_.classList.remove("bg-gray-300"), _.classList.add("bg-red-600")) : (_.classList.remove("bg-red-600"), _.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const b = (n.value + 1) % s.value.length;
      c(b);
    }, u = () => {
      const b = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(b);
    }, p = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        d();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, E = () => {
      r.value && m();
    }, v = () => {
      r.value && p();
    };
    let D = 0, C = 0;
    const y = (b) => {
      D = b.changedTouches[0].screenX;
    }, f = (b) => {
      C = b.changedTouches[0].screenX, w();
    }, w = () => {
      const V = D - C;
      Math.abs(V) > 50 && (V > 0 ? d() : u());
    };
    return We(() => {
      setTimeout(a, 100);
      const b = document.querySelector(".testimonials-wrapper");
      b && (b.addEventListener("mouseenter", E), b.addEventListener("mouseleave", v), b.addEventListener("touchstart", y), b.addEventListener("touchend", f));
    }), At(() => {
      m();
      const b = document.querySelector(".testimonials-wrapper");
      b && (b.removeEventListener("mouseenter", E), b.removeEventListener("mouseleave", v), b.removeEventListener("touchstart", y), b.removeEventListener("touchend", f));
    }), (b, V) => (k(), T("div", H2, [
      as(b.$slots, "default", {}, void 0, !0)
    ]));
  }
}, q2 = /* @__PURE__ */ ct(U2, [["__scopeId", "data-v-276cc4e8"]]), K2 = { class: "video-player relative w-full h-full" }, z2 = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, W2 = ["src", "title"], G2 = {
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
    const t = e, n = G(!1), s = G(""), o = G(""), i = ie(() => t.autoplay === !0 || t.autoplay === "true"), r = ie(() => t.muted === !0 || t.muted === "true"), l = ie(() => t.controls === !0 || t.controls === "true"), a = ie(() => `${s.value} video player`), c = ie(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const E = i.value ? "1" : "0", v = r.value ? "1" : "0", D = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${E}&mute=${v}&controls=${D}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${E}&muted=${v}&controls=${D}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const E = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const D of E) {
        const C = m.match(D);
        if (C)
          return { type: "youtube", id: C[1] };
      }
      const v = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const D of v) {
        const C = m.match(D);
        if (C)
          return { type: "vimeo", id: C[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      i.value && o.value && s.value && (n.value = !0);
    };
    return We(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const E = document.querySelector(".play-button");
      E && E.addEventListener("click", u), p();
    }), (m, E) => (k(), T("div", K2, [
      n.value ? (k(), T("div", z2, [
        h("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, W2)
      ])) : (k(), T("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        as(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, Y2 = /* @__PURE__ */ ct(G2, [["__scopeId", "data-v-540fecb2"]]), J2 = { class: "password-modal" }, X2 = {
  __name: "PasswordModal",
  setup(e) {
    const t = G(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (c) => {
      c.preventDefault(), t.value ? s() : n();
    }, i = (c) => {
      c.key === "Escape" && t.value && s();
    }, r = (c) => {
      const d = document.querySelector(".password-content"), u = document.querySelector(".password-toggle");
      t.value && d && !d.contains(c.target) && !u.contains(c.target) && s();
    };
    We(() => {
      const c = document.querySelector(".password-toggle");
      c && c.addEventListener("click", o), document.addEventListener("keydown", i), document.addEventListener("click", r), setTimeout(() => {
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
    return We(() => {
      a(() => {
        l();
      });
    }), (c, d) => (k(), T("div", J2, [
      as(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Q2 = /* @__PURE__ */ ct(X2, [["__scopeId", "data-v-075988c6"]]), Z2 = /* @__PURE__ */ Re(Df), eN = /* @__PURE__ */ Re(Vf), tN = /* @__PURE__ */ Re(a1), nN = /* @__PURE__ */ Re(h1), sN = /* @__PURE__ */ Re(C1), oN = /* @__PURE__ */ Re(Af), iN = /* @__PURE__ */ Re(yb), rN = /* @__PURE__ */ Re(Mb), lN = /* @__PURE__ */ Re(r_), aN = /* @__PURE__ */ Re(j_), cN = /* @__PURE__ */ Re(sE), uN = /* @__PURE__ */ Re(RE), dN = /* @__PURE__ */ Re(d2), fN = /* @__PURE__ */ Re(L2), pN = /* @__PURE__ */ Re(j2), hN = /* @__PURE__ */ Re(q2), mN = /* @__PURE__ */ Re(Y2), gN = /* @__PURE__ */ Re(Q2);
customElements.define("cart-drawer", Z2);
customElements.define("mobile-menu", eN);
customElements.define("product-variant-picker", tN);
customElements.define("quantity-selector", nN);
customElements.define("sticky-header", sN);
customElements.define("main-header", oN);
customElements.define("site-footer", iN);
customElements.define("product-card", rN);
customElements.define("collection-filters", lN);
customElements.define("collection-grid", aN);
customElements.define("product-gallery", cN);
customElements.define("product-info", uN);
customElements.define("cart-item", dN);
customElements.define("cart-summary", fN);
customElements.define("slideshow-banner", pN);
customElements.define("testimonials-carousel", hN);
customElements.define("video-player", mN);
customElements.define("password-modal", gN);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".main-header-mount").forEach((o) => {
    Es(Af, {
      shopName: o.dataset.shopName || "Orion Store",
      logoUrl: o.dataset.logoUrl || "",
      navigationLinks: JSON.parse(o.dataset.navigationLinks || "[]")
    }).mount(o);
  }), document.querySelectorAll(".mobile-menu-mount").forEach((o) => {
    Es(Vf, {
      menuItems: JSON.parse(o.dataset.menuItems || "[]"),
      customerUrl: o.dataset.customerUrl || "/account",
      showLocalization: o.dataset.showLocalization === "true"
    }).mount(o);
  }), document.querySelectorAll(".cart-drawer-mount").forEach((o) => {
    Es(Df).mount(o);
  }), document.querySelectorAll(".sticky-header").forEach((o) => {
    if (o.dataset.sticky === "true") {
      let i = window.scrollY;
      window.addEventListener("scroll", () => {
        const r = window.scrollY, l = o.dataset.transparent === "true", a = o.dataset.hideOnScroll === "true";
        r > 100 && !l ? (o.classList.add("sticky", "top-0", "shadow-md"), o.style.backgroundColor = o.dataset.stickyBackground || "#ffffff") : (o.classList.remove("sticky", "shadow-md"), o.style.backgroundColor = ""), a && (r > i && r > 100 ? o.style.transform = "translateY(-100%)" : o.style.transform = "translateY(0)"), i = r;
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
      try {
        const i = await (await fetch(window.routes.cart_url + ".js")).json();
        return this.state.items = i.items, this.state.totalPrice = i.total_price, this.state.itemCount = i.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: i })), i;
      } catch (o) {
        console.error("Failed to fetch cart:", o);
      }
    },
    async addItem(o) {
      try {
        const r = await (await fetch(window.routes.cart_add_url, {
          method: "POST",
          body: o
        })).json();
        return await this.fetchCart(), this.openDrawer(), r;
      } catch (i) {
        console.error("Failed to add item to cart:", i);
      }
    },
    async updateItem(o, i) {
      try {
        const r = new FormData();
        r.append("updates[" + o + "]", i);
        const a = await (await fetch(window.routes.cart_update_url, {
          method: "POST",
          body: r
        })).json();
        return await this.fetchCart(), a;
      } catch (r) {
        console.error("Failed to update cart:", r);
      }
    },
    async removeItem(o) {
      return this.updateItem(o, 0);
    },
    openDrawer() {
      this.state.isOpen = !0, document.dispatchEvent(new CustomEvent("cart:open"));
    },
    closeDrawer() {
      this.state.isOpen = !1, document.dispatchEvent(new CustomEvent("cart:close"));
    }
  }, window.OrionCart.fetchCart(), document.addEventListener("cart:updated", (o) => {
    const i = o.detail.item_count;
    document.querySelectorAll(".cart-count").forEach((l) => {
      i > 0 ? (l.textContent = i, l.style.opacity = "1") : l.style.opacity = "0";
    });
  });
});
