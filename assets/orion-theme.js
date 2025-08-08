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
const pe = tl.NODE_ENV !== "production" ? Object.freeze({}) : {}, vs = tl.NODE_ENV !== "production" ? Object.freeze([]) : [], Te = () => {
}, Ks = () => !1, hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, nl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, ve = (e, t) => jf.call(e, t), Y = Array.isArray, Gn = (e) => Ls(e) === "[object Map]", cs = (e) => Ls(e) === "[object Set]", ra = (e) => Ls(e) === "[object Date]", Hf = (e) => Ls(e) === "[object RegExp]", re = (e) => typeof e == "function", le = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Co = (e) => (ge(e) || re(e)) && re(e.then) && re(e.catch), Oc = Object.prototype.toString, Ls = (e) => Oc.call(e), sl = (e) => Ls(e).slice(8, -1), Oo = (e) => Ls(e) === "[object Object]", rl = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $c = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), $o = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ce = $o(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, tt = $o(
  (e) => e.replace(qf, "-$1").toLowerCase()
), nn = $o((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = $o(
  (e) => e ? `on${nn(e)}` : ""
), ut = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ns = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Zr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, eo = (e) => {
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
        const f = a + 1;
        i.push(
          `${f}${" ".repeat(Math.max(3 - String(f).length, 0))}|  ${s[a]}`
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
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? Dc(s) : je(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (le(e) || ge(e))
    return e;
}
const Yf = /;(?![^(]*\))/g, Xf = /:([^]+)/, Qf = /\/\*[^]*?\*\//g;
function Dc(e) {
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
      const r = n.startsWith("--") ? n : tt(n);
      t += `${r}:${s};`;
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
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ep(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = we(t)), n && (e.style = je(n)), e;
}
const tp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", np = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", rp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Tc = /* @__PURE__ */ Ke(tp), Ac = /* @__PURE__ */ Ke(np), Vc = /* @__PURE__ */ Ke(sp), op = /* @__PURE__ */ Ke(rp), Ic = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ip = /* @__PURE__ */ Ke(Ic), la = /* @__PURE__ */ Ke(
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
    n = Mn(e[s], t[s]);
  return n;
}
function Mn(e, t) {
  if (e === t) return !0;
  let n = ra(e), s = ra(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), s = _t(t), n || s)
    return e === t;
  if (n = Y(e), s = Y(t), n || s)
    return n && s ? fp(e, t) : !1;
  if (n = ge(e), s = ge(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !Mn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Do(e, t) {
  return e.findIndex((n) => Mn(n, t));
}
const Mc = (e) => !!(e && e.__v_isRef === !0), J = (e) => le(e) ? e : e == null ? "" : Y(e) || ge(e) && (e.toString === Oc || !re(e.toString)) ? Mc(e) ? J(e.value) : JSON.stringify(e, Pc, 2) : String(e), Pc = (e, t) => Mc(t) ? Pc(e, t.value) : Gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[ei(s, o) + " =>"] = r, n),
    {}
  )
} : cs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ei(n))
} : _t(t) ? ei(t) : ge(t) && !Y(t) && !Oo(t) ? String(t) : t, ei = (e, t = "") => {
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
var Ee = {};
function Vt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ze;
class il {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ze, !t && Ze && (this.index = (Ze.scopes || (Ze.scopes = [])).push(
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
      const n = Ze;
      try {
        return Ze = this, t();
      } finally {
        Ze = n;
      }
    } else Ee.NODE_ENV !== "production" && Vt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ze, Ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ze = this.prevScope, this.prevScope = void 0);
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
  return Ze;
}
function Lc(e, t = !1) {
  Ze ? Ze.cleanups.push(e) : Ee.NODE_ENV !== "production" && !t && Vt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let xe;
const ti = /* @__PURE__ */ new WeakSet();
class cr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ze && Ze.active && Ze.effects.push(this);
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
      Ee.NODE_ENV !== "production" && xe !== this && Vt(
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
let Fc = 0, er, tr;
function Bc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = tr, tr = e;
    return;
  }
  e.next = er, er = e;
}
function al() {
  Fc++;
}
function cl() {
  if (--Fc > 0)
    return;
  if (tr) {
    let t = tr;
    for (tr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; er; ) {
    let t = er;
    for (er = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ur) || (e.globalVersion = ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, s = Ht;
  xe = e, Ht = !0;
  try {
    jc(e);
    const r = e.fn(e._value);
    (t.version === 0 || ut(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    xe = n, Ht = s, Hc(e), e.flags &= -3;
  }
}
function ul(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), Ee.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
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
  e.effect instanceof cr && (e = e.effect.fn);
  const n = new cr(e);
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
function Wt() {
  qc.push(Ht), Ht = !1;
}
function Kt() {
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
let ur = 0;
class vp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class To {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Ee.NODE_ENV !== "production" && (this.subsHead = void 0);
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
    return Ee.NODE_ENV !== "production" && xe.onTrack && xe.onTrack(
      fe(
        {
          effect: xe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ur++, this.notify(t);
  }
  notify(t) {
    al();
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Ee.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const to = /* @__PURE__ */ new WeakMap(), Jn = Symbol(
  Ee.NODE_ENV !== "production" ? "Object iterate" : ""
), bi = Symbol(
  Ee.NODE_ENV !== "production" ? "Map keys iterate" : ""
), dr = Symbol(
  Ee.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ue(e, t, n) {
  if (Ht && xe) {
    let s = to.get(e);
    s || to.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new To()), r.map = s, r.key = n), Ee.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function en(e, t, n, s, r, o) {
  const i = to.get(e);
  if (!i) {
    ur++;
    return;
  }
  const l = (a) => {
    a && (Ee.NODE_ENV !== "production" ? a.trigger({
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
    const a = Y(e), f = a && rl(n);
    if (a && n === "length") {
      const c = Number(s);
      i.forEach((u, p) => {
        (p === "length" || p === dr || !_t(p) && p >= c) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(dr)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Jn)), Gn(e) && l(i.get(bi)));
          break;
        case "delete":
          a || (l(i.get(Jn)), Gn(e) && l(i.get(bi)));
          break;
        case "set":
          Gn(e) && l(i.get(Jn));
          break;
      }
  }
  cl();
}
function yp(e, t) {
  const n = to.get(e);
  return n && n.get(t);
}
function ps(e) {
  const t = ce(e);
  return t === e ? t : (Ue(t, "iterate", dr), st(e) ? t : t.map(Ye));
}
function Ao(e) {
  return Ue(e = ce(e), "iterate", dr), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ni(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return ps(this).concat(
      ...e.map((t) => Y(t) ? ps(t) : t)
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
    return ps(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Us(this, "pop");
  },
  push(...e) {
    return Us(this, "push", e);
  },
  reduce(e, ...t) {
    return ca(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ca(this, "reduceRight", e, t);
  },
  shift() {
    return Us(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Us(this, "splice", e);
  },
  toReversed() {
    return ps(this).toReversed();
  },
  toSorted(e) {
    return ps(this).toSorted(e);
  },
  toSpliced(...e) {
    return ps(this).toSpliced(...e);
  },
  unshift(...e) {
    return Us(this, "unshift", e);
  },
  values() {
    return ni(this, "values", Ye);
  }
};
function ni(e, t, n) {
  const s = Ao(e), r = s[t]();
  return s !== e && !st(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const _p = Array.prototype;
function rn(e, t, n, s, r, o) {
  const i = Ao(e), l = i !== e && !st(e), a = i[t];
  if (a !== _p[t]) {
    const u = a.apply(e, o);
    return l ? Ye(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, p) {
    return n.call(this, Ye(u), p, e);
  } : n.length > 2 && (f = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const c = a.call(i, f, s);
  return l && r ? r(c) : c;
}
function ca(e, t, n, s) {
  const r = Ao(e);
  let o = n;
  return r !== e && (st(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, Ye(l), a, e);
  }), r[t](o, ...s);
}
function si(e, t, n) {
  const s = ce(e);
  Ue(s, "iterate", dr);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Ss(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : r;
}
function Us(e, t, n = []) {
  Wt(), al();
  const s = ce(e)[t].apply(e, n);
  return cl(), Kt(), s;
}
const wp = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Wc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function Ep(e) {
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
    const i = Y(t);
    if (!r) {
      let a;
      if (i && (a = bp[n]))
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
      Me(t) ? t : s
    );
    return (_t(n) ? Wc.has(n) : wp(n)) || (r || Ue(t, "get", n), o) ? l : Me(l) ? i && rl(n) ? l : l.value : ge(l) ? r ? Io(l) : Ns(l) : l;
  }
}
class Gc extends Kc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const a = Gt(o);
      if (!st(s) && !Gt(s) && (o = ce(o), s = ce(s)), !Y(t) && Me(o) && !Me(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = Y(t) && rl(n) ? Number(n) < t.length : ve(t, n), l = Reflect.set(
      t,
      n,
      s,
      Me(t) ? t : r
    );
    return t === ce(r) && (i ? ut(s, o) && en(t, "set", n, s, o) : en(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ve(t, n), r = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && en(t, "delete", n, void 0, r), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!_t(n) || !Wc.has(n)) && Ue(t, "has", n), s;
  }
  ownKeys(t) {
    return Ue(
      t,
      "iterate",
      Y(t) ? "length" : Jn
    ), Reflect.ownKeys(t);
  }
}
class Jc extends Kc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ee.NODE_ENV !== "production" && Vt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ee.NODE_ENV !== "production" && Vt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xp = /* @__PURE__ */ new Gc(), Np = /* @__PURE__ */ new Jc(), Sp = /* @__PURE__ */ new Gc(!0), kp = /* @__PURE__ */ new Jc(!0), _i = (e) => e, Tr = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = ce(r), i = Gn(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = r[e](...s), c = n ? _i : t ? no : Ye;
    return !t && Ue(
      o,
      "iterate",
      a ? bi : Jn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = f.next();
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
    if (Ee.NODE_ENV !== "production") {
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
      e || (ut(r, l) && Ue(i, "get", r), Ue(i, "get", l));
      const { has: a } = Tr(i), f = t ? _i : e ? no : Ye;
      if (a.call(i, r))
        return f(o.get(r));
      if (a.call(i, l))
        return f(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ue(ce(r), "iterate", Jn), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = ce(o), l = ce(r);
      return e || (ut(r, l) && Ue(i, "has", r), Ue(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, a = ce(l), f = t ? _i : e ? no : Ye;
      return !e && Ue(a, "iterate", Jn), l.forEach((c, u) => r.call(o, f(c), f(u), i));
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
        !t && !st(r) && !Gt(r) && (r = ce(r));
        const o = ce(this);
        return Tr(o).has.call(o, r) || (o.add(r), en(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !st(o) && !Gt(o) && (o = ce(o));
        const i = ce(this), { has: l, get: a } = Tr(i);
        let f = l.call(i, r);
        f ? Ee.NODE_ENV !== "production" && ua(i, l, r) : (r = ce(r), f = l.call(i, r));
        const c = a.call(i, r);
        return i.set(r, o), f ? ut(o, c) && en(i, "set", r, o, c) : en(i, "add", r, o), this;
      },
      delete(r) {
        const o = ce(this), { has: i, get: l } = Tr(o);
        let a = i.call(o, r);
        a ? Ee.NODE_ENV !== "production" && ua(o, i, r) : (r = ce(r), a = i.call(o, r));
        const f = l ? l.call(o, r) : void 0, c = o.delete(r);
        return a && en(o, "delete", r, void 0, f), c;
      },
      clear() {
        const r = ce(this), o = r.size !== 0, i = Ee.NODE_ENV !== "production" ? Gn(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return o && en(
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
function Vo(e, t) {
  const n = Op(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ve(n, r) && r in s ? n : s,
    r,
    o
  );
}
const $p = {
  get: /* @__PURE__ */ Vo(!1, !1)
}, Dp = {
  get: /* @__PURE__ */ Vo(!1, !0)
}, Tp = {
  get: /* @__PURE__ */ Vo(!0, !1)
}, Ap = {
  get: /* @__PURE__ */ Vo(!0, !0)
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
function Ns(e) {
  return Gt(e) ? e : Mo(
    e,
    !1,
    xp,
    $p,
    Yc
  );
}
function eu(e) {
  return Mo(
    e,
    !1,
    Sp,
    Dp,
    Xc
  );
}
function Io(e) {
  return Mo(
    e,
    !0,
    Np,
    Tp,
    Qc
  );
}
function Ft(e) {
  return Mo(
    e,
    !0,
    kp,
    Ap,
    Zc
  );
}
function Mo(e, t, n, s, r) {
  if (!ge(e))
    return Ee.NODE_ENV !== "production" && Vt(
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
  return Gt(e) ? fn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gt(e) {
  return !!(e && e.__v_isReadonly);
}
function st(e) {
  return !!(e && e.__v_isShallow);
}
function Ss(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function tu(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && ns(e, "__v_skip", !0), e;
}
const Ye = (e) => ge(e) ? Ns(e) : e, no = (e) => ge(e) ? Io(e) : e;
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
    return Ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || st(t) || Gt(t);
    t = s ? t : ce(t), ut(t, n) && (this._rawValue = t, this._value = s ? t : Ye(t), Ee.NODE_ENV !== "production" ? this.dep.trigger({
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
function xr(e) {
  return Me(e) ? e.value : e;
}
function Rp(e) {
  return re(e) ? e() : xr(e);
}
const Lp = {
  get: (e, t, n) => t === "__v_raw" ? e : xr(Reflect.get(e, t, n)),
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
  Ee.NODE_ENV !== "production" && !Ss(e) && Vt("toRefs() expects a reactive object but received a plain one.");
  const t = Y(e) ? new Array(e.length) : {};
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new To(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
    const t = Ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Uc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ee.NODE_ENV !== "production" && Vt("Write operation failed: computed value is readonly");
  }
}
function zp(e, t, n = !1) {
  let s, r;
  re(e) ? s = e : (s = e.get, r = e.set);
  const o = new qp(s, r, n);
  return Ee.NODE_ENV !== "production" && t && !n && (o.onTrack = t.onTrack, o.onTrigger = t.onTrigger), o;
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
}, Vr = {}, so = /* @__PURE__ */ new WeakMap();
let xn;
function Gp() {
  return xn;
}
function iu(e, t = !1, n = xn) {
  if (n) {
    let s = so.get(n);
    s || so.set(n, s = []), s.push(e);
  } else Ee.NODE_ENV !== "production" && !t && Vt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jp(e, t, n = pe) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: a } = n, f = (w) => {
    (n.onWarn || Vt)(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (w) => r ? w : st(w) || r === !1 || r === 0 ? un(w, 1) : un(w);
  let u, p, h, g, m = !1, P = !1;
  if (Me(e) ? (p = () => e.value, m = st(e)) : fn(e) ? (p = () => c(e), m = !0) : Y(e) ? (P = !0, m = e.some((w) => fn(w) || st(w)), p = () => e.map((w) => {
    if (Me(w))
      return w.value;
    if (fn(w))
      return c(w);
    if (re(w))
      return a ? a(w, 2) : w();
    Ee.NODE_ENV !== "production" && f(w);
  })) : re(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (h) {
      Wt();
      try {
        h();
      } finally {
        Kt();
      }
    }
    const w = xn;
    xn = u;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      xn = w;
    }
  } : (p = Te, Ee.NODE_ENV !== "production" && f(e)), t && r) {
    const w = p, M = r === !0 ? 1 / 0 : r;
    p = () => un(w(), M);
  }
  const D = ll(), $ = () => {
    u.stop(), D && D.active && nl(D.effects, u);
  };
  if (o && t) {
    const w = t;
    t = (...M) => {
      w(...M), $();
    };
  }
  let v = P ? new Array(e.length).fill(Vr) : Vr;
  const k = (w) => {
    if (!(!(u.flags & 1) || !u.dirty && !w))
      if (t) {
        const M = u.run();
        if (r || m || (P ? M.some((N, _) => ut(N, v[_])) : ut(M, v))) {
          h && h();
          const N = xn;
          xn = u;
          try {
            const _ = [
              M,
              // pass undefined as the old value when it's changed for the first time
              v === Vr ? void 0 : P && v[0] === Vr ? [] : v,
              g
            ];
            v = M, a ? a(t, 3, _) : (
              // @ts-expect-error
              t(..._)
            );
          } finally {
            xn = N;
          }
        }
      } else
        u.run();
  };
  return l && l(k), u = new cr(p), u.scheduler = i ? () => i(k, !1) : k, g = (w) => iu(w, !1, u), h = u.onStop = () => {
    const w = so.get(u);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const M of w) M();
      so.delete(u);
    }
  }, Ee.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? k(!0) : v = u.run() : i ? i(k.bind(null, !0), !0) : u.run(), $.pause = u.pause.bind(u), $.resume = u.resume.bind(u), $.stop = $, $;
}
function un(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Me(e))
    un(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      un(e[s], t, n);
  else if (cs(e) || Gn(e))
    e.forEach((s) => {
      un(s, t, n);
    });
  else if (Oo(e)) {
    for (const s in e)
      un(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && un(e[s], t, n);
  }
  return e;
}
var S = {};
const Yn = [];
function ys(e) {
  Yn.push(e);
}
function bs() {
  Yn.pop();
}
let ri = !1;
function B(e, ...t) {
  if (ri) return;
  ri = !0, Wt();
  const n = Yn.length ? Yn[Yn.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Yp();
  if (s)
    us(
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
          ({ vnode: o }) => `at <${zo(n, o.type)}>`
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
  Kt(), ri = !1;
}
function Yp() {
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
function Xp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Qp(n));
  }), t;
}
function Qp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${zo(
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
  S.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
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
}, Po = {
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
function us(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Ln(r, t, n);
  }
}
function It(e, t, n, s) {
  if (re(e)) {
    const r = us(e, t, n, s);
    return r && Co(r) && r.catch((o) => {
      Ln(o, t, n);
    }), r;
  }
  if (Y(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(It(e[o], t, n, s));
    return r;
  } else S.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ln(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = S.NODE_ENV !== "production" ? Po[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Wt(), us(o, null, 10, [
        e,
        a,
        f
      ]), Kt();
      return;
    }
  }
  th(e, n, r, s, i);
}
function th(e, t, n, s = !0, r = !1) {
  if (S.NODE_ENV !== "production") {
    const o = Po[t];
    if (n && ys(n), B(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && bs(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const dt = [];
let Xt = -1;
const _s = [];
let Nn = null, gs = 0;
const au = /* @__PURE__ */ Promise.resolve();
let ro = null;
const nh = 100;
function ss(e) {
  const t = ro || au;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = Xt + 1, n = dt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = dt[s], o = fr(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ro(e) {
  if (!(e.flags & 1)) {
    const t = fr(e), n = dt[dt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fr(n) ? dt.push(e) : dt.splice(sh(t), 0, e), e.flags |= 1, cu();
  }
}
function cu() {
  ro || (ro = au.then(uu));
}
function ks(e) {
  Y(e) ? _s.push(...e) : Nn && e.id === -1 ? Nn.splice(gs + 1, 0, e) : e.flags & 1 || (_s.push(e), e.flags |= 1), cu();
}
function da(e, t, n = Xt + 1) {
  for (S.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < dt.length; n++) {
    const s = dt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || S.NODE_ENV !== "production" && pl(t, s))
        continue;
      dt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function oo(e) {
  if (_s.length) {
    const t = [...new Set(_s)].sort(
      (n, s) => fr(n) - fr(s)
    );
    if (_s.length = 0, Nn) {
      Nn.push(...t);
      return;
    }
    for (Nn = t, S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gs = 0; gs < Nn.length; gs++) {
      const n = Nn[gs];
      S.NODE_ENV !== "production" && pl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Nn = null, gs = 0;
  }
}
const fr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uu(e) {
  S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = S.NODE_ENV !== "production" ? (n) => pl(e, n) : Te;
  try {
    for (Xt = 0; Xt < dt.length; Xt++) {
      const n = dt[Xt];
      if (n && !(n.flags & 8)) {
        if (S.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), us(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Xt < dt.length; Xt++) {
      const n = dt[Xt];
      n && (n.flags &= -2);
    }
    Xt = -1, dt.length = 0, oo(e), ro = null, (dt.length || _s.length) && uu(e);
  }
}
function pl(e, t) {
  const n = e.get(t) || 0;
  if (n > nh) {
    const s = t.i, r = s && $s(s.type);
    return Ln(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Bt = !1;
const Ur = /* @__PURE__ */ new Map();
S.NODE_ENV !== "production" && (Er().__VUE_HMR_RUNTIME__ = {
  createRecord: oi(du),
  rerender: oi(ih),
  reload: oi(lh)
});
const rs = /* @__PURE__ */ new Map();
function rh(e) {
  const t = e.type.__hmrId;
  let n = rs.get(t);
  n || (du(t, e.type), n = rs.get(t)), n.instances.add(e);
}
function oh(e) {
  rs.get(e.type.__hmrId).instances.delete(e);
}
function du(e, t) {
  return rs.has(e) ? !1 : (rs.set(e, {
    initialDef: io(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function io(e) {
  return _d(e) ? e.__vccOpts : e;
}
function ih(e, t) {
  const n = rs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, io(s.type).render = t), s.renderCache = [], Bt = !0, s.update(), Bt = !1;
  }));
}
function lh(e, t) {
  const n = rs.get(e);
  if (!n) return;
  t = io(t), fa(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = io(o.type);
    let l = Ur.get(i);
    l || (i !== n.initialDef && fa(i, t), Ur.set(i, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? Ro(() => {
      Bt = !0, o.parent.update(), Bt = !1, l.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  ks(() => {
    Ur.clear();
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
let Rt, Gs = [], wi = !1;
function Nr(e, ...t) {
  Rt ? Rt.emit(e, ...t) : wi || Gs.push({ event: e, args: t });
}
function hl(e, t) {
  var n, s;
  Rt = e, Rt ? (Rt.enabled = !0, Gs.forEach(({ event: r, args: o }) => Rt.emit(r, ...o)), Gs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    hl(o, t);
  }), setTimeout(() => {
    Rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, wi = !0, Gs = []);
  }, 3e3)) : (wi = !0, Gs = []);
}
function ah(e, t) {
  Nr("app:init", e, t, {
    Fragment: ie,
    Text: tn,
    Comment: Ae,
    Static: Vn
  });
}
function ch(e) {
  Nr("app:unmount", e);
}
const Ei = /* @__PURE__ */ ml(
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
    Nr(
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
    Nr(e, t.appContext.app, t.uid, t, n, s);
  };
}
function hh(e, t, n) {
  Nr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Be = null, Lo = null;
function pr(e) {
  const t = Be;
  return Be = e, Lo = e && e.type.__scopeId || null, t;
}
function mh(e) {
  Lo = e;
}
function gh() {
  Lo = null;
}
const vh = (e) => Pe;
function Pe(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ti(-1);
    const o = pr(t);
    let i;
    try {
      i = e(...r);
    } finally {
      pr(o), s._d && Ti(1);
    }
    return S.NODE_ENV !== "production" && fu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function hu(e) {
  $c(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return S.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
  const n = kr(Be), s = e.dirs || (e.dirs = []);
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
function Qt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[s];
    a && (Wt(), It(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Kt());
  }
}
const mu = Symbol("_vte"), gu = (e) => e.__isTeleport, Xn = (e) => e && (e.disabled || e.disabled === ""), pa = (e) => e && (e.defer || e.defer === ""), ha = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ma = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xi = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return S.NODE_ENV !== "production" && !s && !Xn(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return S.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return S.NODE_ENV !== "production" && !n && !Xn(e) && B(`Invalid Teleport target: ${n}`), n;
}, vu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, o, i, l, a, f) {
    const {
      mc: c,
      pc: u,
      pbc: p,
      o: { insert: h, querySelector: g, createText: m, createComment: P }
    } = f, D = Xn(t.props);
    let { shapeFlag: $, children: v, dynamicChildren: k } = t;
    if (S.NODE_ENV !== "production" && Bt && (a = !1, k = null), e == null) {
      const w = t.el = S.NODE_ENV !== "production" ? P("teleport start") : m(""), M = t.anchor = S.NODE_ENV !== "production" ? P("teleport end") : m("");
      h(w, n, s), h(M, n, s);
      const N = (y, O) => {
        $ & 16 && (r && r.isCE && (r.ce._teleportTarget = y), c(
          v,
          y,
          O,
          r,
          o,
          i,
          l,
          a
        ));
      }, _ = () => {
        const y = t.target = xi(t.props, g), O = yu(y, t, m, h);
        y ? (i !== "svg" && ha(y) ? i = "svg" : i !== "mathml" && ma(y) && (i = "mathml"), D || (N(y, O), qr(t, !1))) : S.NODE_ENV !== "production" && !D && B(
          "Invalid Teleport target on mount:",
          y,
          `(${typeof y})`
        );
      };
      D && (N(n, M), qr(t, !0)), pa(t.props) ? (t.el.__isMounted = !1, He(() => {
        _(), delete t.el.__isMounted;
      }, o)) : _();
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
            f
          );
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const w = t.anchor = e.anchor, M = t.target = e.target, N = t.targetAnchor = e.targetAnchor, _ = Xn(e.props), y = _ ? n : M, O = _ ? w : N;
      if (i === "svg" || ha(M) ? i = "svg" : (i === "mathml" || ma(M)) && (i = "mathml"), k ? (p(
        e.dynamicChildren,
        k,
        y,
        r,
        o,
        i,
        l
      ), rr(e, t, S.NODE_ENV === "production")) : a || u(
        e,
        t,
        y,
        O,
        r,
        o,
        i,
        l,
        !1
      ), D)
        _ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ir(
          t,
          n,
          w,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = xi(
          t.props,
          g
        );
        R ? Ir(
          t,
          R,
          null,
          f,
          0
        ) : S.NODE_ENV !== "production" && B(
          "Invalid Teleport target on update:",
          M,
          `(${typeof M})`
        );
      } else _ && Ir(
        t,
        M,
        N,
        f,
        1
      );
      qr(t, D);
    }
  },
  remove(e, t, n, { um: s, o: { remove: r } }, o) {
    const {
      shapeFlag: i,
      children: l,
      anchor: a,
      targetStart: f,
      targetAnchor: c,
      target: u,
      props: p
    } = e;
    if (u && (r(f), r(c)), o && r(a), i & 16) {
      const h = o || !Xn(p);
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
  move: Ir,
  hydrate: yh
};
function Ir(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: f, props: c } = e, u = o === 2;
  if (u && s(i, t, n), (!u || Xn(c)) && a & 16)
    for (let p = 0; p < f.length; p++)
      r(
        f[p],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function yh(e, t, n, s, r, o, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: f, createText: c }
}, u) {
  const p = t.target = xi(
    t.props,
    a
  );
  if (p) {
    const h = Xn(t.props), g = p._lpa || p.firstChild;
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
        t.targetAnchor || yu(p, t, c, f), u(
          g && i(g),
          t,
          p,
          n,
          s,
          r,
          o
        );
      }
    qr(t, h);
  }
  return t.anchor && i(t.anchor);
}
const Fn = vu;
function qr(e, t) {
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
const Sn = Symbol("_leaveCb"), Mr = Symbol("_enterCb");
function gl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return it(() => {
    e.isMounted = !0;
  }), Bs(() => {
    e.isUnmounting = !0;
  }), e;
}
const $t = [Function, Array], vl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $t,
  onEnter: $t,
  onAfterEnter: $t,
  onEnterCancelled: $t,
  // leave
  onBeforeLeave: $t,
  onLeave: $t,
  onAfterLeave: $t,
  onLeaveCancelled: $t,
  // appear
  onBeforeAppear: $t,
  onAppear: $t,
  onAfterAppear: $t,
  onAppearCancelled: $t
}, bu = (e) => {
  const t = e.subTree;
  return t.component ? bu(t.component) : t;
}, bh = {
  name: "BaseTransition",
  props: vl,
  setup(e, { slots: t }) {
    const n = lt(), s = gl();
    return () => {
      const r = t.default && Fo(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = _u(r), i = ce(e), { mode: l } = i;
      if (S.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ii(o);
      const a = ga(o);
      if (!a)
        return ii(o);
      let f = Cs(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => f = u
      );
      a.type !== Ae && mn(a, f);
      let c = n.subTree && ga(n.subTree);
      if (c && c.type !== Ae && !Lt(a, c) && bu(n).type !== Ae) {
        let u = Cs(
          c,
          i,
          s,
          n
        );
        if (mn(c, u), l === "out-in" && a.type !== Ae)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, c = void 0;
          }, ii(o);
        l === "in-out" && a.type !== Ae ? u.delayLeave = (p, h, g) => {
          const m = Eu(
            s,
            c
          );
          m[String(c.key)] = c, p[Sn] = () => {
            h(), p[Sn] = void 0, delete f.delayedLeave, c = void 0;
          }, f.delayedLeave = () => {
            g(), delete f.delayedLeave, c = void 0;
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
      if (s.type !== Ae) {
        if (S.NODE_ENV !== "production" && n) {
          B(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, S.NODE_ENV === "production") break;
      }
  }
  return t;
}
const wu = bh;
function Eu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Cs(e, t, n, s, r) {
  const {
    appear: o,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: g,
    onLeaveCancelled: m,
    onBeforeAppear: P,
    onAppear: D,
    onAfterAppear: $,
    onAppearCancelled: v
  } = t, k = String(e.key), w = Eu(n, e), M = (y, O) => {
    y && It(
      y,
      s,
      9,
      O
    );
  }, N = (y, O) => {
    const R = O[1];
    M(y, O), Y(y) ? y.every((E) => E.length <= 1) && R() : y.length <= 1 && R();
  }, _ = {
    mode: i,
    persisted: l,
    beforeEnter(y) {
      let O = a;
      if (!n.isMounted)
        if (o)
          O = P || a;
        else
          return;
      y[Sn] && y[Sn](
        !0
        /* cancelled */
      );
      const R = w[k];
      R && Lt(e, R) && R.el[Sn] && R.el[Sn](), M(O, [y]);
    },
    enter(y) {
      let O = f, R = c, E = u;
      if (!n.isMounted)
        if (o)
          O = D || f, R = $ || c, E = v || u;
        else
          return;
      let I = !1;
      const A = y[Mr] = (V) => {
        I || (I = !0, V ? M(E, [y]) : M(R, [y]), _.delayedLeave && _.delayedLeave(), y[Mr] = void 0);
      };
      O ? N(O, [y, A]) : A();
    },
    leave(y, O) {
      const R = String(e.key);
      if (y[Mr] && y[Mr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      M(p, [y]);
      let E = !1;
      const I = y[Sn] = (A) => {
        E || (E = !0, O(), A ? M(m, [y]) : M(g, [y]), y[Sn] = void 0, w[R] === e && delete w[R]);
      };
      w[R] = e, h ? N(h, [y, I]) : I();
    },
    clone(y) {
      const O = Cs(
        y,
        t,
        n,
        s,
        r
      );
      return r && r(O), O;
    }
  };
  return _;
}
function ii(e) {
  if (Fs(e))
    return e = Mt(e), e.children = null, e;
}
function ga(e) {
  if (!Fs(e))
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
function Fo(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ie ? (i.patchFlag & 128 && r++, s = s.concat(
      Fo(i.children, t, l)
    )) : (t || i.type !== Ae) && s.push(l != null ? Mt(i, { key: l }) : i);
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
  const e = lt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (S.NODE_ENV !== "production" && B(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function bl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xu = /* @__PURE__ */ new WeakSet();
function wh(e) {
  const t = lt(), n = nu(null);
  if (t) {
    const r = t.refs === pe ? t.refs = {} : t.refs;
    let o;
    S.NODE_ENV !== "production" && (o = Object.getOwnPropertyDescriptor(r, e)) && !o.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else S.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = S.NODE_ENV !== "production" ? Io(n) : n;
  return S.NODE_ENV !== "production" && xu.add(s), s;
}
function ws(e, t, n, s, r = !1) {
  if (Y(e)) {
    e.forEach(
      (g, m) => ws(
        g,
        t && (Y(t) ? t[m] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (An(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ws(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? kr(s.component) : s.el, i = r ? null : o, { i: l, r: a } = e;
  if (S.NODE_ENV !== "production" && !l) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, c = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), h = u === pe ? () => !1 : (g) => S.NODE_ENV !== "production" && (ve(p, g) && !Me(p[g]) && B(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), xu.has(p[g])) ? !1 : ve(p, g);
  if (f != null && f !== a && (le(f) ? (c[f] = null, h(f) && (u[f] = null)) : Me(f) && (f.value = null)), re(a))
    us(a, l, 12, [i, c]);
  else {
    const g = le(a), m = Me(a);
    if (g || m) {
      const P = () => {
        if (e.f) {
          const D = g ? h(a) ? u[a] : c[a] : a.value;
          r ? Y(D) && nl(D, o) : Y(D) ? D.includes(o) || D.push(o) : g ? (c[a] = [o], h(a) && (u[a] = c[a])) : (a.value = [o], e.k && (c[e.k] = a.value));
        } else g ? (c[a] = i, h(a) && (u[a] = i)) : m ? (a.value = i, e.k && (c[e.k] = i)) : S.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (P.id = -1, He(P, n)) : P();
    } else S.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let va = !1;
const Bn = () => {
  va || (console.error("Hydration completed but contains mismatches."), va = !0);
}, Eh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xh = (e) => e.namespaceURI.includes("MathML"), Pr = (e) => {
  if (e.nodeType === 1) {
    if (Eh(e)) return "svg";
    if (xh(e)) return "mathml";
  }
}, zn = (e) => e.nodeType === 8;
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
      createComment: f
    }
  } = e, c = (v, k) => {
    if (!k.hasChildNodes()) {
      S.NODE_ENV !== "production" && B(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, v, k), oo(), k._vnode = v;
      return;
    }
    u(k.firstChild, v, null, null, null), oo(), k._vnode = v;
  }, u = (v, k, w, M, N, _ = !1) => {
    _ = _ || !!k.dynamicChildren;
    const y = zn(v) && v.data === "[", O = () => m(
      v,
      k,
      w,
      M,
      N,
      y
    ), { type: R, ref: E, shapeFlag: I, patchFlag: A } = k;
    let V = v.nodeType;
    k.el = v, S.NODE_ENV !== "production" && (ns(v, "__vnode", k, !0), ns(v, "__vueParentComponent", w, !0)), A === -2 && (_ = !1, k.dynamicChildren = null);
    let L = null;
    switch (R) {
      case tn:
        V !== 3 ? k.children === "" ? (a(k.el = r(""), i(v), v), L = v) : L = O() : (v.data !== k.children && (S.NODE_ENV !== "production" && B(
          "Hydration text mismatch in",
          v.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            v.data
          )}
  - expected on client: ${JSON.stringify(k.children)}`
        ), Bn(), v.data = k.children), L = o(v));
        break;
      case Ae:
        $(v) ? (L = o(v), D(
          k.el = v.content.firstChild,
          v,
          w
        )) : V !== 8 || y ? L = O() : L = o(v);
        break;
      case Vn:
        if (y && (v = o(v), V = v.nodeType), V === 1 || V === 3) {
          L = v;
          const Q = !k.children.length;
          for (let W = 0; W < k.staticCount; W++)
            Q && (k.children += L.nodeType === 1 ? L.outerHTML : L.data), W === k.staticCount - 1 && (k.anchor = L), L = o(L);
          return y ? o(L) : L;
        } else
          O();
        break;
      case ie:
        y ? L = g(
          v,
          k,
          w,
          M,
          N,
          _
        ) : L = O();
        break;
      default:
        if (I & 1)
          (V !== 1 || k.type.toLowerCase() !== v.tagName.toLowerCase()) && !$(v) ? L = O() : L = p(
            v,
            k,
            w,
            M,
            N,
            _
          );
        else if (I & 6) {
          k.slotScopeIds = N;
          const Q = i(v);
          if (y ? L = P(v) : zn(v) && v.data === "teleport start" ? L = P(v, v.data, "teleport end") : L = o(v), t(
            k,
            Q,
            null,
            w,
            M,
            Pr(Q),
            _
          ), An(k) && !k.type.__asyncResolved) {
            let W;
            y ? (W = ue(ie), W.anchor = L ? L.previousSibling : Q.lastChild) : W = v.nodeType === 3 ? Xe("") : ue("div"), W.el = v, k.component.subTree = W;
          }
        } else I & 64 ? V !== 8 ? L = O() : L = k.type.hydrate(
          v,
          k,
          w,
          M,
          N,
          _,
          e,
          h
        ) : I & 128 ? L = k.type.hydrate(
          v,
          k,
          w,
          M,
          Pr(i(v)),
          N,
          _,
          e,
          u
        ) : S.NODE_ENV !== "production" && B("Invalid HostVNode type:", R, `(${typeof R})`);
    }
    return E != null && ws(E, null, M, k), L;
  }, p = (v, k, w, M, N, _) => {
    _ = _ || !!k.dynamicChildren;
    const { type: y, props: O, patchFlag: R, shapeFlag: E, dirs: I, transition: A } = k, V = y === "input" || y === "option";
    if (S.NODE_ENV !== "production" || V || R !== -1) {
      I && Qt(k, null, w, "created");
      let L = !1;
      if ($(v)) {
        L = Yu(
          null,
          // no need check parentSuspense in hydration
          A
        ) && w && w.vnode.props && w.vnode.props.appear;
        const W = v.content.firstChild;
        if (L) {
          const he = W.getAttribute("class");
          he && (W.$cls = he), A.beforeEnter(W);
        }
        D(W, v, w), k.el = v = W;
      }
      if (E & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let W = h(
          v.firstChild,
          k,
          v,
          w,
          M,
          N,
          _
        ), he = !1;
        for (; W; ) {
          Js(
            v,
            1
            /* CHILDREN */
          ) || (S.NODE_ENV !== "production" && !he && (B(
            "Hydration children mismatch on",
            v,
            `
Server rendered element contains more child nodes than client vdom.`
          ), he = !0), Bn());
          const We = W;
          W = W.nextSibling, l(We);
        }
      } else if (E & 8) {
        let W = k.children;
        W[0] === `
` && (v.tagName === "PRE" || v.tagName === "TEXTAREA") && (W = W.slice(1)), v.textContent !== W && (Js(
          v,
          0
          /* TEXT */
        ) || (S.NODE_ENV !== "production" && B(
          "Hydration text content mismatch on",
          v,
          `
  - rendered on server: ${v.textContent}
  - expected on client: ${k.children}`
        ), Bn()), v.textContent = k.children);
      }
      if (O) {
        if (S.NODE_ENV !== "production" || V || !_ || R & 48) {
          const W = v.tagName.includes("-");
          for (const he in O)
            S.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(I && I.some((We) => We.dir.created)) && Sh(v, he, O[he], k, w) && Bn(), (V && (he.endsWith("value") || he === "indeterminate") || hn(he) && !Tn(he) || // force hydrate v-bind with .prop modifiers
            he[0] === "." || W) && s(v, he, null, O[he], void 0, w);
        } else if (O.onClick)
          s(
            v,
            "onClick",
            null,
            O.onClick,
            void 0,
            w
          );
        else if (R & 4 && fn(O.style))
          for (const W in O.style) O.style[W];
      }
      let Q;
      (Q = O && O.onVnodeBeforeMount) && vt(Q, w, k), I && Qt(k, null, w, "beforeMount"), ((Q = O && O.onVnodeMounted) || I || L) && id(() => {
        Q && vt(Q, w, k), L && A.enter(v), I && Qt(k, null, w, "mounted");
      }, M);
    }
    return v.nextSibling;
  }, h = (v, k, w, M, N, _, y) => {
    y = y || !!k.dynamicChildren;
    const O = k.children, R = O.length;
    let E = !1;
    for (let I = 0; I < R; I++) {
      const A = y ? O[I] : O[I] = ft(O[I]), V = A.type === tn;
      v ? (V && !y && I + 1 < R && ft(O[I + 1]).type === tn && (a(
        r(
          v.data.slice(A.children.length)
        ),
        w,
        o(v)
      ), v.data = A.children), v = u(
        v,
        A,
        M,
        N,
        _,
        y
      )) : V && !A.children ? a(A.el = r(""), w) : (Js(
        w,
        1
        /* CHILDREN */
      ) || (S.NODE_ENV !== "production" && !E && (B(
        "Hydration children mismatch on",
        w,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), E = !0), Bn()), n(
        null,
        A,
        w,
        null,
        M,
        N,
        Pr(w),
        _
      ));
    }
    return v;
  }, g = (v, k, w, M, N, _) => {
    const { slotScopeIds: y } = k;
    y && (N = N ? N.concat(y) : y);
    const O = i(v), R = h(
      o(v),
      k,
      O,
      w,
      M,
      N,
      _
    );
    return R && zn(R) && R.data === "]" ? o(k.anchor = R) : (Bn(), a(k.anchor = f("]"), O, R), R);
  }, m = (v, k, w, M, N, _) => {
    if (Js(
      v.parentElement,
      1
      /* CHILDREN */
    ) || (S.NODE_ENV !== "production" && B(
      `Hydration node mismatch:
- rendered on server:`,
      v,
      v.nodeType === 3 ? "(text)" : zn(v) && v.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      k.type
    ), Bn()), k.el = null, _) {
      const R = P(v);
      for (; ; ) {
        const E = o(v);
        if (E && E !== R)
          l(E);
        else
          break;
      }
    }
    const y = o(v), O = i(v);
    return l(v), n(
      null,
      k,
      O,
      y,
      w,
      M,
      Pr(O),
      N
    ), w && (w.vnode.el = k.el, qo(w, k.el)), y;
  }, P = (v, k = "[", w = "]") => {
    let M = 0;
    for (; v; )
      if (v = o(v), v && zn(v) && (v.data === k && M++, v.data === w)) {
        if (M === 0)
          return o(v);
        M--;
      }
    return v;
  }, D = (v, k, w) => {
    const M = k.parentNode;
    M && M.replaceChild(v, k);
    let N = w;
    for (; N; )
      N.vnode.el === k && (N.vnode.el = N.subTree.el = v), N = N.parent;
  }, $ = (v) => v.nodeType === 1 && v.tagName === "TEMPLATE";
  return [c, u];
}
function Sh(e, t, n, s, r) {
  let o, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = we(n), kh(ya(l || ""), ya(a)) || (o = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Zf(je(n));
    const f = ba(l), c = ba(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && c.set("display", "none");
    r && Nu(r, s, c), Ch(f, c) || (o = 3, i = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (la(t) || lp(t))) && (la(t) ? (l = e.hasAttribute(t), a = ol(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (o = 4, i = t));
  if (o != null && !Js(e, o)) {
    const f = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, c = `Hydration ${Su[o]} mismatch on`, u = `
  - rendered on server: ${f(l)}
  - expected on client: ${f(a)}
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
function Js(e, t) {
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
const Oh = Er().requestIdleCallback || ((e) => setTimeout(e, 1)), $h = Er().cancelIdleCallback || ((e) => clearTimeout(e)), Dh = (e = 1e4) => (t) => {
  const n = Oh(t, { timeout: e });
  return () => $h(n);
};
function Th(e) {
  const { top: t, left: n, bottom: s, right: r } = e.getBoundingClientRect(), { innerHeight: o, innerWidth: i } = window;
  return (t > 0 && t < o || s > 0 && s < o) && (n > 0 && n < i || r > 0 && r < i);
}
const Ah = (e) => (t, n) => {
  const s = new IntersectionObserver((r) => {
    for (const o of r)
      if (o.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((r) => {
    if (r instanceof Element) {
      if (Th(r))
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
  if (zn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (zn(s))
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
  let f = null, c, u = 0;
  const p = () => (u++, f = null, h()), h = () => {
    let g;
    return f || (g = f = t().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), a)
        return new Promise((P, D) => {
          a(m, () => P(p()), () => D(m), u + 1);
        });
      throw m;
    }).then((m) => {
      if (g !== f && f)
        return f;
      if (S.NODE_ENV !== "production" && !m && B(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), S.NODE_ENV !== "production" && m && !ge(m) && !re(m))
        throw new Error(`Invalid async component load result: ${m}`);
      return c = m, m;
    }));
  };
  return /* @__PURE__ */ yl({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(g, m, P) {
      let D = !1;
      (m.bu || (m.bu = [])).push(() => D = !0);
      const $ = () => {
        if (D) {
          S.NODE_ENV !== "production" && B(
            `Skipping lazy hydration for component '${$s(c) || c.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        P();
      }, v = o ? () => {
        const k = o(
          $,
          (w) => Mh(g, w)
        );
        k && (m.bum || (m.bum = [])).push(k);
      } : $;
      c ? v() : h().then(() => !m.isUnmounted && v());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = ze;
      if (bl(g), c)
        return () => li(c, g);
      const m = (v) => {
        f = null, Ln(
          v,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || Os)
        return h().then((v) => () => li(v, g)).catch((v) => (m(v), () => s ? ue(s, {
          error: v
        }) : null));
      const P = ne(!1), D = ne(), $ = ne(!!r);
      return r && setTimeout(() => {
        $.value = !1;
      }, r), i != null && setTimeout(() => {
        if (!P.value && !D.value) {
          const v = new Error(
            `Async component timed out after ${i}ms.`
          );
          m(v), D.value = v;
        }
      }, i), h().then(() => {
        P.value = !0, g.parent && Fs(g.parent.vnode) && g.parent.update();
      }).catch((v) => {
        m(v), D.value = v;
      }), () => {
        if (P.value && c)
          return li(c, g);
        if (D.value && s)
          return ue(s, {
            error: D.value
          });
        if (n && !$.value)
          return ue(n);
      };
    }
  });
}
function li(e, t) {
  const { ref: n, props: s, children: r, ce: o } = t.vnode, i = ue(e, s, r);
  return i.ref = n, i.ce = o, delete t.vnode.ce, i;
}
const Fs = (e) => e.type.__isKeepAlive, Rh = {
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
        const $ = t.default && t.default();
        return $ && $.length === 1 ? $[0] : $;
      };
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    let i = null;
    S.NODE_ENV !== "production" && (n.__v_cache = r);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: f,
        um: c,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = ($, v, k, w, M) => {
      const N = $.component;
      f($, v, k, 0, l), a(
        N.vnode,
        $,
        v,
        k,
        N,
        l,
        w,
        $.slotScopeIds,
        M
      ), He(() => {
        N.isDeactivated = !1, N.a && On(N.a);
        const _ = $.props && $.props.onVnodeMounted;
        _ && vt(_, N.parent, $);
      }, l), S.NODE_ENV !== "production" && Ei(N);
    }, s.deactivate = ($) => {
      const v = $.component;
      uo(v.m), uo(v.a), f($, p, null, 1, l), He(() => {
        v.da && On(v.da);
        const k = $.props && $.props.onVnodeUnmounted;
        k && vt(k, v.parent, $), v.isDeactivated = !0;
      }, l), S.NODE_ENV !== "production" && Ei(v), S.NODE_ENV !== "production" && (v.__keepAliveStorageContainer = p);
    };
    function h($) {
      ai($), c($, n, l, !0);
    }
    function g($) {
      r.forEach((v, k) => {
        const w = $s(v.type);
        w && !$(w) && m(k);
      });
    }
    function m($) {
      const v = r.get($);
      v && (!i || !Lt(v, i)) ? h(v) : i && ai(i), r.delete($), o.delete($);
    }
    Ut(
      () => [e.include, e.exclude],
      ([$, v]) => {
        $ && g((k) => Ys($, k)), v && g((k) => !Ys(v, k));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let P = null;
    const D = () => {
      P != null && (po(n.subTree.type) ? He(() => {
        r.set(P, Rr(n.subTree));
      }, n.subTree.suspense) : r.set(P, Rr(n.subTree)));
    };
    return it(D), jo(D), Bs(() => {
      r.forEach(($) => {
        const { subTree: v, suspense: k } = n, w = Rr(v);
        if ($.type === w.type && $.key === w.key) {
          ai(w);
          const M = w.component.da;
          M && He(M, k);
          return;
        }
        h($);
      });
    }), () => {
      if (P = null, !t.default)
        return i = null;
      const $ = t.default(), v = $[0];
      if ($.length > 1)
        return S.NODE_ENV !== "production" && B("KeepAlive should contain exactly one component child."), i = null, $;
      if (!sn(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128))
        return i = null, v;
      let k = Rr(v);
      if (k.type === Ae)
        return i = null, k;
      const w = k.type, M = $s(
        An(k) ? k.type.__asyncResolved || {} : w
      ), { include: N, exclude: _, max: y } = e;
      if (N && (!M || !Ys(N, M)) || _ && M && Ys(_, M))
        return k.shapeFlag &= -257, i = k, v;
      const O = k.key == null ? w : k.key, R = r.get(O);
      return k.el && (k = Mt(k), v.shapeFlag & 128 && (v.ssContent = k)), P = O, R ? (k.el = R.el, k.component = R.component, k.transition && mn(k, k.transition), k.shapeFlag |= 512, o.delete(O), o.add(O)) : (o.add(O), y && o.size > parseInt(y, 10) && m(o.values().next().value)), k.shapeFlag |= 256, i = k, po(v.type) ? v : k;
    };
  }
}, Lh = Rh;
function Ys(e, t) {
  return Y(e) ? e.some((n) => Ys(n, t)) : le(e) ? e.split(",").includes(t) : Hf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
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
  if (Bo(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Fs(r.parent.vnode) && Fh(s, t, n, r), r = r.parent;
  }
}
function Fh(e, t, n, s) {
  const r = Bo(
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
function Rr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Bo(e, t, n = ze, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Wt();
      const l = is(n), a = It(t, n, e, i);
      return l(), Kt(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  } else if (S.NODE_ENV !== "production") {
    const r = Zt(Po[e].replace(/ hook$/, ""));
    B(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const gn = (e) => (t, n = ze) => {
  (!Os || e === "sp") && Bo(e, (...s) => t(...s), n);
}, $u = gn("bm"), it = gn("m"), _l = gn(
  "bu"
), jo = gn("u"), Bs = gn(
  "bum"
), vn = gn("um"), Du = gn(
  "sp"
), Tu = gn("rtg"), Au = gn("rtc");
function Vu(e, t = ze) {
  Bo("ec", e, t);
}
const lo = "components", Bh = "directives";
function jh(e, t) {
  return El(lo, e, !0, t) || e;
}
const wl = Symbol.for("v-ndc");
function Iu(e) {
  return le(e) ? El(lo, e, !1) || e : e || wl;
}
function Hh(e) {
  return El(Bh, e);
}
function El(e, t, n = !0, s = !1) {
  const r = Be || ze;
  if (r) {
    const o = r.type;
    if (e === lo) {
      const l = $s(
        o,
        !1
      );
      if (l && (l === t || l === Ce(t) || l === nn(Ce(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      wa(r[e] || o[e], t) || // global registration
      wa(r.appContext[e], t)
    );
    if (!i && s)
      return o;
    if (S.NODE_ENV !== "production" && n && !i) {
      const l = e === lo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else S.NODE_ENV !== "production" && B(
    `resolve${nn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function wa(e, t) {
  return e && (e[t] || e[Ce(t)] || e[nn(Ce(t))]);
}
function _e(e, t, n, s) {
  let r;
  const o = n && n[s], i = Y(e);
  if (i || le(e)) {
    const l = i && fn(e);
    let a = !1, f = !1;
    l && (a = !st(e), f = Gt(e), e = Ao(e)), r = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++)
      r[c] = t(
        a ? f ? no(Ye(e[c])) : Ye(e[c]) : e[c],
        c,
        void 0,
        o && o[c]
      );
  } else if (typeof e == "number") {
    S.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
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
      for (let a = 0, f = l.length; a < f; a++) {
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
    if (Y(s))
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
    return t !== "default" && (n.name = t), x(), wt(
      ie,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let o = e[t];
  S.NODE_ENV !== "production" && o && o.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), x();
  const i = o && Nl(o(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = wt(
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
  return e.some((t) => sn(t) ? !(t.type === Ae || t.type === ie && !Nl(t.children)) : !0) ? e : null;
}
function qh(e, t) {
  const n = {};
  if (S.NODE_ENV !== "production" && !ge(e))
    return B("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Zt(s)] = e[s];
  return n;
}
const Ni = (e) => e ? md(e) ? kr(e) : Ni(e.parent) : null, Qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => S.NODE_ENV !== "production" ? Ft(e.props) : e.props,
    $attrs: (e) => S.NODE_ENV !== "production" ? Ft(e.attrs) : e.attrs,
    $slots: (e) => S.NODE_ENV !== "production" ? Ft(e.slots) : e.slots,
    $refs: (e) => S.NODE_ENV !== "production" ? Ft(e.refs) : e.refs,
    $parent: (e) => Ni(e.parent),
    $root: (e) => Ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => kl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ro(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ss.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Sl = (e) => e === "_" || e === "$", ci = (e, t) => e !== pe && !e.__isScriptSetup && ve(e, t), nr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: a } = e;
    if (S.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
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
          (f = e.propsOptions[0]) && ve(f, t)
        )
          return i[t] = 3, o[t];
        if (n !== pe && ve(n, t))
          return i[t] = 4, n[t];
        Si && (i[t] = 0);
      }
    }
    const c = Qn[t];
    let u, p;
    if (c)
      return t === "$attrs" ? (Ue(e.attrs, "get", ""), S.NODE_ENV !== "production" && fo()) : S.NODE_ENV !== "production" && t === "$slots" && Ue(e, "get", t), c(e);
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
    S.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
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
    return ci(r, t) ? (r[t] = n, !0) : S.NODE_ENV !== "production" && r.__isScriptSetup && ve(r, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ve(s, t) ? (s[t] = n, !0) : ve(e.props, t) ? (S.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (S.NODE_ENV !== "production" && B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (S.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ve(e, i) || ci(t, i) || (l = o[0]) && ve(l, i) || ve(s, i) || ve(Qn, i) || ve(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
S.NODE_ENV !== "production" && (nr.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, nr, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return nr.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return S.NODE_ENV !== "production" && !n && nr.has(e, t) && B(
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
  }), Object.keys(Qn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Qn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Te
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
      set: Te
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
        set: Te
      });
    }
  });
}
const ds = (e) => B(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Jh() {
  return S.NODE_ENV !== "production" && ds("defineProps"), null;
}
function Yh() {
  return S.NODE_ENV !== "production" && ds("defineEmits"), null;
}
function Xh(e) {
  S.NODE_ENV !== "production" && ds("defineExpose");
}
function Qh(e) {
  S.NODE_ENV !== "production" && ds("defineOptions");
}
function Zh() {
  return S.NODE_ENV !== "production" && ds("defineSlots"), null;
}
function em() {
  S.NODE_ENV !== "production" && ds("defineModel");
}
function tm(e, t) {
  return S.NODE_ENV !== "production" && ds("withDefaults"), null;
}
function nm() {
  return Mu("useSlots").slots;
}
function sm() {
  return Mu("useAttrs").attrs;
}
function Mu(e) {
  const t = lt();
  return S.NODE_ENV !== "production" && !t && B(`${e}() called without active instance.`), t.setupContext || (t.setupContext = bd(t));
}
function hr(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function rm(e, t) {
  const n = hr(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let r = n[s];
    r ? Y(r) || re(r) ? r = n[s] = { type: r, default: t[s] } : r.default = t[s] : r === null ? r = n[s] = { default: t[s] } : S.NODE_ENV !== "production" && B(`props default key "${s}" has no corresponding declaration.`), r && t[`__skip_${s}`] && (r.skipFactory = !0);
  }
  return n;
}
function om(e, t) {
  return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : fe({}, hr(e), hr(t));
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
  const t = lt();
  S.NODE_ENV !== "production" && !t && B(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Ii(), Co(n) && (n = n.catch((s) => {
    throw is(t), s;
  })), [n, () => is(t)];
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
  Si = !1, t.beforeCreate && Ea(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: h,
    updated: g,
    activated: m,
    deactivated: P,
    beforeDestroy: D,
    beforeUnmount: $,
    destroyed: v,
    unmounted: k,
    render: w,
    renderTracked: M,
    renderTriggered: N,
    errorCaptured: _,
    serverPrefetch: y,
    // public API
    expose: O,
    inheritAttrs: R,
    // assets
    components: E,
    directives: I,
    filters: A
  } = t, V = S.NODE_ENV !== "production" ? am() : null;
  if (S.NODE_ENV !== "production") {
    const [Q] = e.propsOptions;
    if (Q)
      for (const W in Q)
        V("Props", W);
  }
  if (f && um(f, s, V), i)
    for (const Q in i) {
      const W = i[Q];
      re(W) ? (S.NODE_ENV !== "production" ? Object.defineProperty(s, Q, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[Q] = W.bind(n), S.NODE_ENV !== "production" && V("Methods", Q)) : S.NODE_ENV !== "production" && B(
        `Method "${Q}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    S.NODE_ENV !== "production" && !re(r) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Q = r.call(n, n);
    if (S.NODE_ENV !== "production" && Co(Q) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ge(Q))
      S.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = Ns(Q), S.NODE_ENV !== "production")
      for (const W in Q)
        V("Data", W), Sl(W[0]) || Object.defineProperty(s, W, {
          configurable: !0,
          enumerable: !0,
          get: () => Q[W],
          set: Te
        });
  }
  if (Si = !0, o)
    for (const Q in o) {
      const W = o[Q], he = re(W) ? W.bind(n, n) : re(W.get) ? W.get.bind(n, n) : Te;
      S.NODE_ENV !== "production" && he === Te && B(`Computed property "${Q}" has no getter.`);
      const We = !re(W) && re(W.set) ? W.set.bind(n) : S.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${Q}" is readonly.`
        );
      } : Te, xt = te({
        get: he,
        set: We
      });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (Ot) => xt.value = Ot
      }), S.NODE_ENV !== "production" && V("Computed", Q);
    }
  if (l)
    for (const Q in l)
      Pu(l[Q], s, n, Q);
  if (a) {
    const Q = re(a) ? a.call(n) : a;
    Reflect.ownKeys(Q).forEach((W) => {
      Lu(W, Q[W]);
    });
  }
  c && Ea(c, e, "c");
  function L(Q, W) {
    Y(W) ? W.forEach((he) => Q(he.bind(n))) : W && Q(W.bind(n));
  }
  if (L($u, u), L(it, p), L(_l, h), L(jo, g), L(ku, m), L(Cu, P), L(Vu, _), L(Au, M), L(Tu, N), L(Bs, $), L(vn, k), L(Du, y), Y(O))
    if (O.length) {
      const Q = e.exposed || (e.exposed = {});
      O.forEach((W) => {
        Object.defineProperty(Q, W, {
          get: () => n[W],
          set: (he) => n[W] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === Te && (e.render = w), R != null && (e.inheritAttrs = R), E && (e.components = E), I && (e.directives = I), y && bl(e);
}
function um(e, t, n = Te) {
  Y(e) && (e = ki(e));
  for (const s in e) {
    const r = e[s];
    let o;
    ge(r) ? "default" in r ? o = sr(
      r.from || s,
      r.default,
      !0
    ) : o = sr(r.from || s) : o = sr(r), Me(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o, S.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Ea(e, t, n) {
  It(
    Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pu(e, t, n, s) {
  let r = s.includes(".") ? td(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    re(o) ? Ut(r, o) : S.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, o);
  } else if (re(e))
    Ut(r, e.bind(n));
  else if (ge(e))
    if (Y(e))
      e.forEach((o) => Pu(o, t, n, s));
    else {
      const o = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(o) ? Ut(r, o, e) : S.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else S.NODE_ENV !== "production" && B(`Invalid watch option: "${s}"`, e);
}
function kl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (f) => ao(a, f, i, !0)
  ), ao(a, t, i)), ge(t) && o.set(t, a), a;
}
function ao(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && ao(e, o, n, !0), r && r.forEach(
    (i) => ao(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      S.NODE_ENV !== "production" && B(
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
  methods: Xs,
  computed: Xs,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: Xs,
  directives: Xs,
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
  return Xs(ki(e), ki(t));
}
function ki(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xs(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Na(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    hr(e),
    hr(t ?? {})
  ) : t;
}
function pm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ct(e[s], t[s]);
  return n;
}
function Ru() {
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
let hm = 0;
function mm(e, t) {
  return function(s, r = null) {
    re(s) || (s = fe({}, s)), r != null && !ge(r) && (S.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), r = null);
    const o = Ru(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = o.app = {
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
        S.NODE_ENV !== "production" && B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...u) {
        return i.has(c) ? S.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : c && re(c.install) ? (i.add(c), c.install(f, ...u)) : re(c) ? (i.add(c), c(f, ...u)) : S.NODE_ENV !== "production" && B(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(c) {
        return o.mixins.includes(c) ? S.NODE_ENV !== "production" && B(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : o.mixins.push(c), f;
      },
      component(c, u) {
        return S.NODE_ENV !== "production" && Mi(c, o.config), u ? (S.NODE_ENV !== "production" && o.components[c] && B(`Component "${c}" has already been registered in target app.`), o.components[c] = u, f) : o.components[c];
      },
      directive(c, u) {
        return S.NODE_ENV !== "production" && hu(c), u ? (S.NODE_ENV !== "production" && o.directives[c] && B(`Directive "${c}" has already been registered in target app.`), o.directives[c] = u, f) : o.directives[c];
      },
      mount(c, u, p) {
        if (a)
          S.NODE_ENV !== "production" && B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          S.NODE_ENV !== "production" && c.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = f._ceVNode || ue(s, r);
          return h.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), S.NODE_ENV !== "production" && (o.reload = () => {
            const g = Mt(h);
            g.el = null, e(g, c, p);
          }), u && t ? t(h, c) : e(h, c, p), a = !0, f._container = c, c.__vue_app__ = f, S.NODE_ENV !== "production" && (f._instance = h.component, ah(f, Li)), kr(h.component);
        }
      },
      onUnmount(c) {
        S.NODE_ENV !== "production" && typeof c != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), l.push(c);
      },
      unmount() {
        a ? (It(
          l,
          f._instance,
          16
        ), e(null, f._container), S.NODE_ENV !== "production" && (f._instance = null, ch(f)), delete f._container.__vue_app__) : S.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return S.NODE_ENV !== "production" && c in o.provides && (ve(o.provides, c) ? B(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(c)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[c] = u, f;
      },
      runWithContext(c) {
        const u = Zn;
        Zn = f;
        try {
          return c();
        } finally {
          Zn = u;
        }
      }
    };
    return f;
  };
}
let Zn = null;
function Lu(e, t) {
  if (!ze)
    S.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = ze.provides;
    const s = ze.parent && ze.parent.provides;
    s === n && (n = ze.provides = Object.create(s)), n[e] = t;
  }
}
function sr(e, t, n = !1) {
  const s = lt();
  if (s || Zn) {
    let r = Zn ? Zn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(s && s.proxy) : t;
    S.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else S.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function gm() {
  return !!(lt() || Zn);
}
const Fu = {}, Bu = () => Object.create(Fu), ju = (e) => Object.getPrototypeOf(e) === Fu;
function vm(e, t, n, s = !1) {
  const r = {}, o = Bu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hu(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  S.NODE_ENV !== "production" && qu(t || {}, r, e), n ? e.props = s ? r : eu(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
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
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(S.NODE_ENV !== "production" && ym(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (Ho(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (a)
          if (ve(o, p))
            h !== o[p] && (o[p] = h, f = !0);
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
          h !== o[p] && (o[p] = h, f = !0);
      }
    }
  } else {
    Hu(e, t, r, o) && (f = !0);
    let c;
    for (const u in l)
      (!t || // for camelCase
      !ve(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = tt(u)) === u || !ve(t, c))) && (a ? n && // for camelCase
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
        (!t || !ve(t, u)) && (delete o[u], f = !0);
  }
  f && en(e.attrs, "set", ""), S.NODE_ENV !== "production" && qu(t || {}, r, e);
}
function Hu(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Tn(a))
        continue;
      const f = t[a];
      let c;
      r && ve(r, c = Ce(a)) ? !o || !o.includes(c) ? n[c] = f : (l || (l = {}))[c] = f : Ho(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, i = !0);
    }
  if (o) {
    const a = ce(n), f = l || pe;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = Ci(
        r,
        a,
        u,
        f[u],
        e,
        !ve(f, u)
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
        const { propsDefaults: f } = r;
        if (n in f)
          s = f[n];
        else {
          const c = is(r);
          s = f[n] = a.call(
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
    ] && (s === "" || s === tt(n)) && (s = !0));
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
    return ge(e) && s.set(e, vs), vs;
  if (Y(o))
    for (let c = 0; c < o.length; c++) {
      S.NODE_ENV !== "production" && !le(o[c]) && B("props must be strings when using array syntax.", o[c]);
      const u = Ce(o[c]);
      Sa(u) && (i[u] = pe);
    }
  else if (o) {
    S.NODE_ENV !== "production" && !ge(o) && B("invalid props options", o);
    for (const c in o) {
      const u = Ce(c);
      if (Sa(u)) {
        const p = o[c], h = i[u] = Y(p) || re(p) ? { type: p } : fe({}, p), g = h.type;
        let m = !1, P = !0;
        if (Y(g))
          for (let D = 0; D < g.length; ++D) {
            const $ = g[D], v = re($) && $.name;
            if (v === "Boolean") {
              m = !0;
              break;
            } else v === "String" && (P = !1);
          }
        else
          m = re(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = P, (m || ve(h, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return ge(e) && s.set(e, f), f;
}
function Sa(e) {
  return e[0] !== "$" && !Tn(e) ? !0 : (S.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function wm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qu(e, t, n) {
  const s = ce(t), r = n.propsOptions[0], o = Object.keys(e).map((i) => Ce(i));
  for (const i in r) {
    let l = r[i];
    l != null && Em(
      i,
      s[i],
      l,
      S.NODE_ENV !== "production" ? Ft(s) : s,
      !o.includes(i)
    );
  }
}
function Em(e, t, n, s, r) {
  const { type: o, required: i, validator: l, skipCheck: a } = n;
  if (i && r) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (o != null && o !== !0 && !a) {
      let f = !1;
      const c = Y(o) ? o : [o], u = [];
      for (let p = 0; p < c.length && !f; p++) {
        const { valid: h, expectedType: g } = Nm(t, c[p]);
        u.push(g || ""), f = h;
      }
      if (!f) {
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
  const s = wm(t);
  if (s === "null")
    n = e === null;
  else if (xm(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else s === "Object" ? n = ge(e) : s === "Array" ? n = Y(e) : n = e instanceof t;
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
const Cl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Ol = (e) => Y(e) ? e.map(ft) : [ft(e)], Cm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Pe((...r) => (S.NODE_ENV !== "production" && ze && !(n === null && Be) && !(n && n.root !== ze.root) && B(
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
      S.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = Ol(o);
      t[r] = () => i;
    }
  }
}, Wu = (e, t) => {
  S.NODE_ENV !== "production" && !Fs(e.vnode) && B(
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
    r && ns(s, "__", r, !0);
    const o = t._;
    o ? (Oi(s, t, n), n && ns(s, "_", o, !0)) : zu(t, s);
  } else t && Wu(e, t);
}, $m = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? S.NODE_ENV !== "production" && Bt ? (Oi(r, t, n), en(e, "set", "$slots")) : n && l === 1 ? o = !1 : Oi(r, t, n) : (o = !t.$stable, zu(t, r)), i = t;
  } else t && (Wu(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Cl(l) && i[l] == null && delete r[l];
};
let qs, $n;
function on(e, t) {
  e.appContext.config.performance && co() && $n.mark(`vue-${t}-${e.uid}`), S.NODE_ENV !== "production" && fh(e, t, co() ? $n.now() : Date.now());
}
function ln(e, t) {
  if (e.appContext.config.performance && co()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    $n.mark(s), $n.measure(
      `<${zo(e, e.type)}> ${t}`,
      n,
      s
    ), $n.clearMarks(n), $n.clearMarks(s);
  }
  S.NODE_ENV !== "production" && ph(e, t, co() ? $n.now() : Date.now());
}
function co() {
  return qs !== void 0 || (typeof window < "u" && window.performance ? (qs = !0, $n = window.performance) : qs = !1), qs;
}
function Dm() {
  const e = [];
  if (S.NODE_ENV !== "production" && e.length) {
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
  Dm();
  const n = Er();
  n.__VUE__ = !0, S.NODE_ENV !== "production" && hl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: c,
    parentNode: u,
    nextSibling: p,
    setScopeId: h = Te,
    insertStaticContent: g
  } = e, m = (b, T, F, q = null, H = null, U = null, Z = void 0, G = null, K = S.NODE_ENV !== "production" && Bt ? !1 : !!T.dynamicChildren) => {
    if (b === T)
      return;
    b && !Lt(b, T) && (q = Dr(b), bn(b, H, U, !0), b = null), T.patchFlag === -2 && (K = !1, T.dynamicChildren = null);
    const { type: z, ref: oe, shapeFlag: ee } = T;
    switch (z) {
      case tn:
        P(b, T, F, q);
        break;
      case Ae:
        D(b, T, F, q);
        break;
      case Vn:
        b == null ? $(T, F, q, Z) : S.NODE_ENV !== "production" && v(b, T, F, Z);
        break;
      case ie:
        I(
          b,
          T,
          F,
          q,
          H,
          U,
          Z,
          G,
          K
        );
        break;
      default:
        ee & 1 ? M(
          b,
          T,
          F,
          q,
          H,
          U,
          Z,
          G,
          K
        ) : ee & 6 ? A(
          b,
          T,
          F,
          q,
          H,
          U,
          Z,
          G,
          K
        ) : ee & 64 || ee & 128 ? z.process(
          b,
          T,
          F,
          q,
          H,
          U,
          Z,
          G,
          K,
          fs
        ) : S.NODE_ENV !== "production" && B("Invalid VNode type:", z, `(${typeof z})`);
    }
    oe != null && H ? ws(oe, b && b.ref, U, T || b, !T) : oe == null && b && b.ref != null && ws(b.ref, null, U, b, !0);
  }, P = (b, T, F, q) => {
    if (b == null)
      s(
        T.el = l(T.children),
        F,
        q
      );
    else {
      const H = T.el = b.el;
      T.children !== b.children && f(H, T.children);
    }
  }, D = (b, T, F, q) => {
    b == null ? s(
      T.el = a(T.children || ""),
      F,
      q
    ) : T.el = b.el;
  }, $ = (b, T, F, q) => {
    [b.el, b.anchor] = g(
      b.children,
      T,
      F,
      q,
      b.el,
      b.anchor
    );
  }, v = (b, T, F, q) => {
    if (T.children !== b.children) {
      const H = p(b.anchor);
      w(b), [T.el, T.anchor] = g(
        T.children,
        F,
        H,
        q
      );
    } else
      T.el = b.el, T.anchor = b.anchor;
  }, k = ({ el: b, anchor: T }, F, q) => {
    let H;
    for (; b && b !== T; )
      H = p(b), s(b, F, q), b = H;
    s(T, F, q);
  }, w = ({ el: b, anchor: T }) => {
    let F;
    for (; b && b !== T; )
      F = p(b), r(b), b = F;
    r(T);
  }, M = (b, T, F, q, H, U, Z, G, K) => {
    T.type === "svg" ? Z = "svg" : T.type === "math" && (Z = "mathml"), b == null ? N(
      T,
      F,
      q,
      H,
      U,
      Z,
      G,
      K
    ) : O(
      b,
      T,
      H,
      U,
      Z,
      G,
      K
    );
  }, N = (b, T, F, q, H, U, Z, G) => {
    let K, z;
    const { props: oe, shapeFlag: ee, transition: se, dirs: ae } = b;
    if (K = b.el = i(
      b.type,
      U,
      oe && oe.is,
      oe
    ), ee & 8 ? c(K, b.children) : ee & 16 && y(
      b.children,
      K,
      null,
      q,
      H,
      ui(b, U),
      Z,
      G
    ), ae && Qt(b, null, q, "created"), _(K, b, b.scopeId, Z, q), oe) {
      for (const Oe in oe)
        Oe !== "value" && !Tn(Oe) && o(K, Oe, null, oe[Oe], U, q);
      "value" in oe && o(K, "value", null, oe.value, U), (z = oe.onVnodeBeforeMount) && vt(z, q, b);
    }
    S.NODE_ENV !== "production" && (ns(K, "__vnode", b, !0), ns(K, "__vueParentComponent", q, !0)), ae && Qt(b, null, q, "beforeMount");
    const be = Yu(H, se);
    be && se.beforeEnter(K), s(K, T, F), ((z = oe && oe.onVnodeMounted) || be || ae) && He(() => {
      z && vt(z, q, b), be && se.enter(K), ae && Qt(b, null, q, "mounted");
    }, H);
  }, _ = (b, T, F, q, H) => {
    if (F && h(b, F), q)
      for (let U = 0; U < q.length; U++)
        h(b, q[U]);
    if (H) {
      let U = H.subTree;
      if (S.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Uo(U.children) || U), T === U || po(U.type) && (U.ssContent === T || U.ssFallback === T)) {
        const Z = H.vnode;
        _(
          b,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          H.parent
        );
      }
    }
  }, y = (b, T, F, q, H, U, Z, G, K = 0) => {
    for (let z = K; z < b.length; z++) {
      const oe = b[z] = G ? kn(b[z]) : ft(b[z]);
      m(
        null,
        oe,
        T,
        F,
        q,
        H,
        U,
        Z,
        G
      );
    }
  }, O = (b, T, F, q, H, U, Z) => {
    const G = T.el = b.el;
    S.NODE_ENV !== "production" && (G.__vnode = T);
    let { patchFlag: K, dynamicChildren: z, dirs: oe } = T;
    K |= b.patchFlag & 16;
    const ee = b.props || pe, se = T.props || pe;
    let ae;
    if (F && jn(F, !1), (ae = se.onVnodeBeforeUpdate) && vt(ae, F, T, b), oe && Qt(T, b, F, "beforeUpdate"), F && jn(F, !0), S.NODE_ENV !== "production" && Bt && (K = 0, Z = !1, z = null), (ee.innerHTML && se.innerHTML == null || ee.textContent && se.textContent == null) && c(G, ""), z ? (R(
      b.dynamicChildren,
      z,
      G,
      F,
      q,
      ui(T, H),
      U
    ), S.NODE_ENV !== "production" && rr(b, T)) : Z || he(
      b,
      T,
      G,
      null,
      F,
      q,
      ui(T, H),
      U,
      !1
    ), K > 0) {
      if (K & 16)
        E(G, ee, se, F, H);
      else if (K & 2 && ee.class !== se.class && o(G, "class", null, se.class, H), K & 4 && o(G, "style", ee.style, se.style, H), K & 8) {
        const be = T.dynamicProps;
        for (let Oe = 0; Oe < be.length; Oe++) {
          const Ne = be[Oe], ht = ee[Ne], Qe = se[Ne];
          (Qe !== ht || Ne === "value") && o(G, Ne, ht, Qe, H, F);
        }
      }
      K & 1 && b.children !== T.children && c(G, T.children);
    } else !Z && z == null && E(G, ee, se, F, H);
    ((ae = se.onVnodeUpdated) || oe) && He(() => {
      ae && vt(ae, F, T, b), oe && Qt(T, b, F, "updated");
    }, q);
  }, R = (b, T, F, q, H, U, Z) => {
    for (let G = 0; G < T.length; G++) {
      const K = b[G], z = T[G], oe = (
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
        H,
        U,
        Z,
        !0
      );
    }
  }, E = (b, T, F, q, H) => {
    if (T !== F) {
      if (T !== pe)
        for (const U in T)
          !Tn(U) && !(U in F) && o(
            b,
            U,
            T[U],
            null,
            H,
            q
          );
      for (const U in F) {
        if (Tn(U)) continue;
        const Z = F[U], G = T[U];
        Z !== G && U !== "value" && o(b, U, G, Z, H, q);
      }
      "value" in F && o(b, "value", T.value, F.value, H);
    }
  }, I = (b, T, F, q, H, U, Z, G, K) => {
    const z = T.el = b ? b.el : l(""), oe = T.anchor = b ? b.anchor : l("");
    let { patchFlag: ee, dynamicChildren: se, slotScopeIds: ae } = T;
    S.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Bt || ee & 2048) && (ee = 0, K = !1, se = null), ae && (G = G ? G.concat(ae) : ae), b == null ? (s(z, F, q), s(oe, F, q), y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      F,
      oe,
      H,
      U,
      Z,
      G,
      K
    )) : ee > 0 && ee & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (R(
      b.dynamicChildren,
      se,
      F,
      H,
      U,
      Z,
      G
    ), S.NODE_ENV !== "production" ? rr(b, T) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (T.key != null || H && T === H.subTree) && rr(
        b,
        T,
        !0
        /* shallow */
      )
    )) : he(
      b,
      T,
      F,
      oe,
      H,
      U,
      Z,
      G,
      K
    );
  }, A = (b, T, F, q, H, U, Z, G, K) => {
    T.slotScopeIds = G, b == null ? T.shapeFlag & 512 ? H.ctx.activate(
      T,
      F,
      q,
      Z,
      K
    ) : V(
      T,
      F,
      q,
      H,
      U,
      Z,
      K
    ) : L(b, T, K);
  }, V = (b, T, F, q, H, U, Z) => {
    const G = b.component = hd(
      b,
      q,
      H
    );
    if (S.NODE_ENV !== "production" && G.type.__hmrId && rh(G), S.NODE_ENV !== "production" && (ys(b), on(G, "mount")), Fs(b) && (G.ctx.renderer = fs), S.NODE_ENV !== "production" && on(G, "init"), gd(G, !1, Z), S.NODE_ENV !== "production" && ln(G, "init"), S.NODE_ENV !== "production" && Bt && (b.el = null), G.asyncDep) {
      if (H && H.registerDep(G, Q, Z), !b.el) {
        const K = G.subTree = ue(Ae);
        D(null, K, T, F), b.placeholder = K.el;
      }
    } else
      Q(
        G,
        b,
        T,
        F,
        H,
        U,
        Z
      );
    S.NODE_ENV !== "production" && (bs(), ln(G, "mount"));
  }, L = (b, T, F) => {
    const q = T.component = b.component;
    if (Fm(b, T, F))
      if (q.asyncDep && !q.asyncResolved) {
        S.NODE_ENV !== "production" && ys(T), W(q, T, F), S.NODE_ENV !== "production" && bs();
        return;
      } else
        q.next = T, q.update();
    else
      T.el = b.el, q.vnode = T;
  }, Q = (b, T, F, q, H, U, Z) => {
    const G = () => {
      if (b.isMounted) {
        let { next: ee, bu: se, u: ae, parent: be, vnode: Oe } = b;
        {
          const Nt = Xu(b);
          if (Nt) {
            ee && (ee.el = Oe.el, W(b, ee, Z)), Nt.asyncDep.then(() => {
              b.isUnmounted || G();
            });
            return;
          }
        }
        let Ne = ee, ht;
        S.NODE_ENV !== "production" && ys(ee || b.vnode), jn(b, !1), ee ? (ee.el = Oe.el, W(b, ee, Z)) : ee = Oe, se && On(se), (ht = ee.props && ee.props.onVnodeBeforeUpdate) && vt(ht, be, ee, Oe), jn(b, !0), S.NODE_ENV !== "production" && on(b, "render");
        const Qe = zr(b);
        S.NODE_ENV !== "production" && ln(b, "render");
        const Pt = b.subTree;
        b.subTree = Qe, S.NODE_ENV !== "production" && on(b, "patch"), m(
          Pt,
          Qe,
          // parent may have changed if it's in a teleport
          u(Pt.el),
          // anchor may have changed if it's in a fragment
          Dr(Pt),
          b,
          H,
          U
        ), S.NODE_ENV !== "production" && ln(b, "patch"), ee.el = Qe.el, Ne === null && qo(b, Qe.el), ae && He(ae, H), (ht = ee.props && ee.props.onVnodeUpdated) && He(
          () => vt(ht, be, ee, Oe),
          H
        ), S.NODE_ENV !== "production" && fu(b), S.NODE_ENV !== "production" && bs();
      } else {
        let ee;
        const { el: se, props: ae } = T, { bm: be, m: Oe, parent: Ne, root: ht, type: Qe } = b, Pt = An(T);
        if (jn(b, !1), be && On(be), !Pt && (ee = ae && ae.onVnodeBeforeMount) && vt(ee, Ne, T), jn(b, !0), se && Zo) {
          const Nt = () => {
            S.NODE_ENV !== "production" && on(b, "render"), b.subTree = zr(b), S.NODE_ENV !== "production" && ln(b, "render"), S.NODE_ENV !== "production" && on(b, "hydrate"), Zo(
              se,
              b.subTree,
              b,
              H,
              null
            ), S.NODE_ENV !== "production" && ln(b, "hydrate");
          };
          Pt && Qe.__asyncHydrate ? Qe.__asyncHydrate(
            se,
            b,
            Nt
          ) : Nt();
        } else {
          ht.ce && // @ts-expect-error _def is private
          ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(Qe), S.NODE_ENV !== "production" && on(b, "render");
          const Nt = b.subTree = zr(b);
          S.NODE_ENV !== "production" && ln(b, "render"), S.NODE_ENV !== "production" && on(b, "patch"), m(
            null,
            Nt,
            F,
            q,
            b,
            H,
            U
          ), S.NODE_ENV !== "production" && ln(b, "patch"), T.el = Nt.el;
        }
        if (Oe && He(Oe, H), !Pt && (ee = ae && ae.onVnodeMounted)) {
          const Nt = T;
          He(
            () => vt(ee, Ne, Nt),
            H
          );
        }
        (T.shapeFlag & 256 || Ne && An(Ne.vnode) && Ne.vnode.shapeFlag & 256) && b.a && He(b.a, H), b.isMounted = !0, S.NODE_ENV !== "production" && Ei(b), T = F = q = null;
      }
    };
    b.scope.on();
    const K = b.effect = new cr(G);
    b.scope.off();
    const z = b.update = K.run.bind(K), oe = b.job = K.runIfDirty.bind(K);
    oe.i = b, oe.id = b.uid, K.scheduler = () => Ro(oe), jn(b, !0), S.NODE_ENV !== "production" && (K.onTrack = b.rtc ? (ee) => On(b.rtc, ee) : void 0, K.onTrigger = b.rtg ? (ee) => On(b.rtg, ee) : void 0), z();
  }, W = (b, T, F) => {
    T.component = b;
    const q = b.vnode.props;
    b.vnode = T, b.next = null, bm(b, T.props, q, F), $m(b, T.children, F), Wt(), da(b), Kt();
  }, he = (b, T, F, q, H, U, Z, G, K = !1) => {
    const z = b && b.children, oe = b ? b.shapeFlag : 0, ee = T.children, { patchFlag: se, shapeFlag: ae } = T;
    if (se > 0) {
      if (se & 128) {
        xt(
          z,
          ee,
          F,
          q,
          H,
          U,
          Z,
          G,
          K
        );
        return;
      } else if (se & 256) {
        We(
          z,
          ee,
          F,
          q,
          H,
          U,
          Z,
          G,
          K
        );
        return;
      }
    }
    ae & 8 ? (oe & 16 && js(z, H, U), ee !== z && c(F, ee)) : oe & 16 ? ae & 16 ? xt(
      z,
      ee,
      F,
      q,
      H,
      U,
      Z,
      G,
      K
    ) : js(z, H, U, !0) : (oe & 8 && c(F, ""), ae & 16 && y(
      ee,
      F,
      q,
      H,
      U,
      Z,
      G,
      K
    ));
  }, We = (b, T, F, q, H, U, Z, G, K) => {
    b = b || vs, T = T || vs;
    const z = b.length, oe = T.length, ee = Math.min(z, oe);
    let se;
    for (se = 0; se < ee; se++) {
      const ae = T[se] = K ? kn(T[se]) : ft(T[se]);
      m(
        b[se],
        ae,
        F,
        null,
        H,
        U,
        Z,
        G,
        K
      );
    }
    z > oe ? js(
      b,
      H,
      U,
      !0,
      !1,
      ee
    ) : y(
      T,
      F,
      q,
      H,
      U,
      Z,
      G,
      K,
      ee
    );
  }, xt = (b, T, F, q, H, U, Z, G, K) => {
    let z = 0;
    const oe = T.length;
    let ee = b.length - 1, se = oe - 1;
    for (; z <= ee && z <= se; ) {
      const ae = b[z], be = T[z] = K ? kn(T[z]) : ft(T[z]);
      if (Lt(ae, be))
        m(
          ae,
          be,
          F,
          null,
          H,
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
      const ae = b[ee], be = T[se] = K ? kn(T[se]) : ft(T[se]);
      if (Lt(ae, be))
        m(
          ae,
          be,
          F,
          null,
          H,
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
        const ae = se + 1, be = ae < oe ? T[ae].el : q;
        for (; z <= se; )
          m(
            null,
            T[z] = K ? kn(T[z]) : ft(T[z]),
            F,
            be,
            H,
            U,
            Z,
            G,
            K
          ), z++;
      }
    } else if (z > se)
      for (; z <= ee; )
        bn(b[z], H, U, !0), z++;
    else {
      const ae = z, be = z, Oe = /* @__PURE__ */ new Map();
      for (z = be; z <= se; z++) {
        const at = T[z] = K ? kn(T[z]) : ft(T[z]);
        at.key != null && (S.NODE_ENV !== "production" && Oe.has(at.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(at.key),
          "Make sure keys are unique."
        ), Oe.set(at.key, z));
      }
      let Ne, ht = 0;
      const Qe = se - be + 1;
      let Pt = !1, Nt = 0;
      const Hs = new Array(Qe);
      for (z = 0; z < Qe; z++) Hs[z] = 0;
      for (z = ae; z <= ee; z++) {
        const at = b[z];
        if (ht >= Qe) {
          bn(at, H, U, !0);
          continue;
        }
        let Jt;
        if (at.key != null)
          Jt = Oe.get(at.key);
        else
          for (Ne = be; Ne <= se; Ne++)
            if (Hs[Ne - be] === 0 && Lt(at, T[Ne])) {
              Jt = Ne;
              break;
            }
        Jt === void 0 ? bn(at, H, U, !0) : (Hs[Jt - be] = z + 1, Jt >= Nt ? Nt = Jt : Pt = !0, m(
          at,
          T[Jt],
          F,
          null,
          H,
          U,
          Z,
          G,
          K
        ), ht++);
      }
      const ta = Pt ? Tm(Hs) : vs;
      for (Ne = ta.length - 1, z = Qe - 1; z >= 0; z--) {
        const at = be + z, Jt = T[at], na = T[at + 1], sa = at + 1 < oe ? (
          // #13559, fallback to el placeholder for unresolved async component
          na.el || na.placeholder
        ) : q;
        Hs[z] === 0 ? m(
          null,
          Jt,
          F,
          sa,
          H,
          U,
          Z,
          G,
          K
        ) : Pt && (Ne < 0 || z !== ta[Ne] ? Ot(Jt, F, sa, 2) : Ne--);
      }
    }
  }, Ot = (b, T, F, q, H = null) => {
    const { el: U, type: Z, transition: G, children: K, shapeFlag: z } = b;
    if (z & 6) {
      Ot(b.component.subTree, T, F, q);
      return;
    }
    if (z & 128) {
      b.suspense.move(T, F, q);
      return;
    }
    if (z & 64) {
      Z.move(b, T, F, fs);
      return;
    }
    if (Z === ie) {
      s(U, T, F);
      for (let ee = 0; ee < K.length; ee++)
        Ot(K[ee], T, F, q);
      s(b.anchor, T, F);
      return;
    }
    if (Z === Vn) {
      k(b, T, F);
      return;
    }
    if (q !== 2 && z & 1 && G)
      if (q === 0)
        G.beforeEnter(U), s(U, T, F), He(() => G.enter(U), H);
      else {
        const { leave: ee, delayLeave: se, afterLeave: ae } = G, be = () => {
          b.ctx.isUnmounted ? r(U) : s(U, T, F);
        }, Oe = () => {
          ee(U, () => {
            be(), ae && ae();
          });
        };
        se ? se(U, be, Oe) : Oe();
      }
    else
      s(U, T, F);
  }, bn = (b, T, F, q = !1, H = !1) => {
    const {
      type: U,
      props: Z,
      ref: G,
      children: K,
      dynamicChildren: z,
      shapeFlag: oe,
      patchFlag: ee,
      dirs: se,
      cacheIndex: ae
    } = b;
    if (ee === -2 && (H = !1), G != null && (Wt(), ws(G, null, F, b, !0), Kt()), ae != null && (T.renderCache[ae] = void 0), oe & 256) {
      T.ctx.deactivate(b);
      return;
    }
    const be = oe & 1 && se, Oe = !An(b);
    let Ne;
    if (Oe && (Ne = Z && Z.onVnodeBeforeUnmount) && vt(Ne, T, b), oe & 6)
      Bf(b.component, F, q);
    else {
      if (oe & 128) {
        b.suspense.unmount(F, q);
        return;
      }
      be && Qt(b, null, T, "beforeUnmount"), oe & 64 ? b.type.remove(
        b,
        T,
        F,
        fs,
        q
      ) : z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== ie || ee > 0 && ee & 64) ? js(
        z,
        T,
        F,
        !1,
        !0
      ) : (U === ie && ee & 384 || !H && oe & 16) && js(K, T, F), q && Yo(b);
    }
    (Oe && (Ne = Z && Z.onVnodeUnmounted) || be) && He(() => {
      Ne && vt(Ne, T, b), be && Qt(b, null, T, "unmounted");
    }, F);
  }, Yo = (b) => {
    const { type: T, el: F, anchor: q, transition: H } = b;
    if (T === ie) {
      S.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && H && !H.persisted ? b.children.forEach((Z) => {
        Z.type === Ae ? r(Z.el) : Yo(Z);
      }) : Ff(F, q);
      return;
    }
    if (T === Vn) {
      w(b);
      return;
    }
    const U = () => {
      r(F), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (b.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Z, delayLeave: G } = H, K = () => Z(F, U);
      G ? G(b.el, U, K) : K();
    } else
      U();
  }, Ff = (b, T) => {
    let F;
    for (; b !== T; )
      F = p(b), r(b), b = F;
    r(T);
  }, Bf = (b, T, F) => {
    S.NODE_ENV !== "production" && b.type.__hmrId && oh(b);
    const {
      bum: q,
      scope: H,
      job: U,
      subTree: Z,
      um: G,
      m: K,
      a: z,
      parent: oe,
      slots: { __: ee }
    } = b;
    uo(K), uo(z), q && On(q), oe && Y(ee) && ee.forEach((se) => {
      oe.renderCache[se] = void 0;
    }), H.stop(), U && (U.flags |= 8, bn(Z, b, T, F)), G && He(G, T), He(() => {
      b.isUnmounted = !0;
    }, T), T && T.pendingBranch && !T.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === T.pendingId && (T.deps--, T.deps === 0 && T.resolve()), S.NODE_ENV !== "production" && dh(b);
  }, js = (b, T, F, q = !1, H = !1, U = 0) => {
    for (let Z = U; Z < b.length; Z++)
      bn(b[Z], T, F, q, H);
  }, Dr = (b) => {
    if (b.shapeFlag & 6)
      return Dr(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const T = p(b.anchor || b.el), F = T && T[mu];
    return F ? p(F) : T;
  };
  let Xo = !1;
  const ea = (b, T, F) => {
    b == null ? T._vnode && bn(T._vnode, null, null, !0) : m(
      T._vnode || null,
      b,
      T,
      null,
      null,
      null,
      F
    ), T._vnode = b, Xo || (Xo = !0, da(), oo(), Xo = !1);
  }, fs = {
    p: m,
    um: bn,
    m: Ot,
    r: Yo,
    mt: V,
    mc: y,
    pc: he,
    pbc: R,
    n: Dr,
    o: e
  };
  let Qo, Zo;
  return t && ([Qo, Zo] = t(
    fs
  )), {
    render: ea,
    hydrate: Qo,
    createApp: mm(ea, Qo)
  };
}
function ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function jn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (Y(s) && Y(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = kn(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && rr(i, l)), l.type === tn && (l.el = i.el), l.type === Ae && !l.el && (l.el = i.el), S.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Tm(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < f ? o = l + 1 : i = l;
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
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
function uo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qu = Symbol.for("v-scx"), Zu = () => {
  {
    const e = sr(Qu);
    return e || S.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Am(e, t) {
  return Sr(e, null, t);
}
function Vm(e, t) {
  return Sr(
    e,
    null,
    S.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function ed(e, t) {
  return Sr(
    e,
    null,
    S.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Ut(e, t, n) {
  return S.NODE_ENV !== "production" && !re(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Sr(e, t, n);
}
function Sr(e, t, n = pe) {
  const { immediate: s, deep: r, flush: o, once: i } = n;
  S.NODE_ENV !== "production" && !t && (s !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  S.NODE_ENV !== "production" && (l.onWarn = B);
  const a = t && s || !t && o !== "post";
  let f;
  if (Os) {
    if (o === "sync") {
      const h = Zu();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Te, h.resume = Te, h.pause = Te, h;
    }
  }
  const c = ze;
  l.call = (h, g, m) => It(h, c, g, m);
  let u = !1;
  o === "post" ? l.scheduler = (h) => {
    He(h, c && c.suspense);
  } : o !== "sync" && (u = !0, l.scheduler = (h, g) => {
    g ? h() : Ro(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const p = Jp(e, t, l);
  return Os && (f ? f.push(p) : a && p()), p;
}
function Im(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? td(s, e) : () => s[e] : e.bind(s, s);
  let o;
  re(t) ? o = t : (o = t.handler, n = t);
  const i = is(this), l = Sr(r, o.bind(s), n);
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
  const s = lt();
  if (S.NODE_ENV !== "production" && !s)
    return B("useModel() called without active instance."), ne();
  const r = Ce(t);
  if (S.NODE_ENV !== "production" && !s.propsOptions[0][r])
    return B(`useModel() called with prop "${t}" which is not declared.`), ne();
  const o = tt(t), i = nd(e, r), l = ru((a, f) => {
    let c, u = pe, p;
    return ed(() => {
      const h = e[r];
      ut(c, h) && (c = h, f());
    }), {
      get() {
        return a(), n.get ? n.get(c) : c;
      },
      set(h) {
        const g = n.set ? n.set(h) : h;
        if (!ut(g, c) && !(u !== pe && ut(h, u)))
          return;
        const m = s.vnode.props;
        m && // check if parent has passed v-model
        (t in m || r in m || o in m) && (`onUpdate:${t}` in m || `onUpdate:${r}` in m || `onUpdate:${o}` in m) || (c = h, f()), s.emit(`update:${t}`, g), ut(h, g) && ut(h, u) && !ut(g, p) && f(), u = h, p = g;
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
const nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (S.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [u]
    } = e;
    if (c)
      if (!(t in c))
        (!u || !(Zt(Ce(t)) in u)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Zt(Ce(t))}" prop.`
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
  if (i && (i.trim && (r = n.map((c) => le(c) ? c.trim() : c)), i.number && (r = n.map(Zr))), S.NODE_ENV !== "production" && hh(e, t, r), S.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && s[Zt(c)] && B(
      `Event "${c}" is emitted in component ${zo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Zt(t)] || // also try camelCase event handler (#2249)
  s[l = Zt(Ce(t))];
  !a && o && (a = s[l = Zt(tt(t))]), a && It(
    a,
    e,
    6,
    r
  );
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, It(
      f,
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
    const a = (f) => {
      const c = sd(f, t, !0);
      c && (l = !0, fe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (ge(e) && s.set(e, null), null) : (Y(o) ? o.forEach((a) => i[a] = null) : fe(i, o), ge(e) && s.set(e, i), i);
}
function Ho(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, tt(t)) || ve(e, t));
}
let $i = !1;
function fo() {
  $i = !0;
}
function zr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: a,
    render: f,
    renderCache: c,
    props: u,
    data: p,
    setupState: h,
    ctx: g,
    inheritAttrs: m
  } = e, P = pr(e);
  let D, $;
  S.NODE_ENV !== "production" && ($i = !1);
  try {
    if (n.shapeFlag & 4) {
      const w = r || s, M = S.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(w, {
        get(N, _, y) {
          return B(
            `Property '${String(
              _
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, _, y);
        }
      }) : w;
      D = ft(
        f.call(
          M,
          w,
          c,
          S.NODE_ENV !== "production" ? Ft(u) : u,
          h,
          p,
          g
        )
      ), $ = l;
    } else {
      const w = t;
      S.NODE_ENV !== "production" && l === u && fo(), D = ft(
        w.length > 1 ? w(
          S.NODE_ENV !== "production" ? Ft(u) : u,
          S.NODE_ENV !== "production" ? {
            get attrs() {
              return fo(), Ft(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : w(
          S.NODE_ENV !== "production" ? Ft(u) : u,
          null
        )
      ), $ = t.props ? l : Rm(l);
    }
  } catch (w) {
    or.length = 0, Ln(w, e, 1), D = ue(Ae);
  }
  let v = D, k;
  if (S.NODE_ENV !== "production" && D.patchFlag > 0 && D.patchFlag & 2048 && ([v, k] = rd(D)), $ && m !== !1) {
    const w = Object.keys($), { shapeFlag: M } = v;
    if (w.length) {
      if (M & 7)
        o && w.some(Qr) && ($ = Lm(
          $,
          o
        )), v = Mt(v, $, !1, !0);
      else if (S.NODE_ENV !== "production" && !$i && v.type !== Ae) {
        const N = Object.keys(l), _ = [], y = [];
        for (let O = 0, R = N.length; O < R; O++) {
          const E = N[O];
          hn(E) ? Qr(E) || _.push(E[2].toLowerCase() + E.slice(3)) : y.push(E);
        }
        y.length && B(
          `Extraneous non-props attributes (${y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), _.length && B(
          `Extraneous non-emits event listeners (${_.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (S.NODE_ENV !== "production" && !Oa(v) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), v = Mt(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (S.NODE_ENV !== "production" && !Oa(v) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), mn(v, n.transition)), S.NODE_ENV !== "production" && k ? k(v) : D = v, pr(P), D;
}
const rd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Uo(t, !1);
  if (s) {
    if (S.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return rd(s);
  } else return [e, void 0];
  const r = t.indexOf(s), o = n ? n.indexOf(s) : -1, i = (l) => {
    t[r] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ft(s), i];
};
function Uo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (sn(r)) {
      if (r.type !== Ae || r.children === "v-if") {
        if (n)
          return;
        if (n = r, S.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Uo(n.children);
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
    (!Qr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Oa = (e) => e.shapeFlag & 7 || e.type === Ae;
function Fm(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: a } = t, f = o.emitsOptions;
  if (S.NODE_ENV !== "production" && (r || l) && Bt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? $a(s, i, f) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (i[p] !== s[p] && !Ho(f, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? $a(s, i, f) : !0 : !!i;
  return !1;
}
function $a(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Ho(n, o))
      return !0;
  }
  return !1;
}
function qo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const po = (e) => e.__isSuspense;
let Di = 0;
const Bm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, r, o, i, l, a, f) {
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
        f
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
        f
      );
    }
  },
  hydrate: qm,
  normalize: zm
}, jm = Bm;
function mr(e, t) {
  const n = e.props && e.props[t];
  re(n) && n();
}
function Hm(e, t, n, s, r, o, i, l, a) {
  const {
    p: f,
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
  f(
    null,
    p.pendingBranch = e.ssContent,
    u,
    null,
    s,
    p,
    o,
    i
  ), p.deps > 0 ? (mr(e, "onPending"), mr(e, "onFallback"), f(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    o,
    i
  ), Es(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Um(e, t, n, s, r, o, i, l, { p: a, um: f, o: { createElement: c } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, h = t.ssFallback, { activeBranch: g, pendingBranch: m, isInFallback: P, isHydrating: D } = u;
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
    ), u.deps <= 0 ? u.resolve() : P && (D || (a(
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
    ), Es(u, h)))) : (u.pendingId = Di++, D ? (u.isHydrating = !1, u.activeBranch = m) : f(m, r, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = c("div"), P ? (a(
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
    ), Es(u, h))) : g && Lt(p, g) ? (a(
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
    ), Es(u, p);
  else if (mr(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = Di++, a(
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
    const { timeout: $, pendingId: v } = u;
    $ > 0 ? setTimeout(() => {
      u.pendingId === v && u.fallback(h);
    }, $) : $ === 0 && u.fallback(h);
  }
}
let Da = !1;
function od(e, t, n, s, r, o, i, l, a, f, c = !1) {
  S.NODE_ENV !== "production" && !Da && (Da = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: h,
    n: g,
    o: { parentNode: m, remove: P }
  } = f;
  let D;
  const $ = Wm(e);
  $ && t && t.pendingBranch && (D = t.pendingId, t.deps++);
  const v = e.props ? eo(e.props.timeout) : void 0;
  S.NODE_ENV !== "production" && fl(v, "Suspense timeout");
  const k = o, w = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: r,
    deps: 0,
    pendingId: Di++,
    timeout: typeof v == "number" ? v : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !c,
    isHydrating: c,
    isUnmounted: !1,
    effects: [],
    resolve(M = !1, N = !1) {
      if (S.NODE_ENV !== "production") {
        if (!M && !w.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (w.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: _,
        activeBranch: y,
        pendingBranch: O,
        pendingId: R,
        effects: E,
        parentComponent: I,
        container: A
      } = w;
      let V = !1;
      w.isHydrating ? w.isHydrating = !1 : M || (V = y && O.transition && O.transition.mode === "out-in", V && (y.transition.afterLeave = () => {
        R === w.pendingId && (p(
          O,
          A,
          o === k ? g(y) : o,
          0
        ), ks(E));
      }), y && (m(y.el) === A && (o = g(y)), h(y, I, w, !0)), V || p(O, A, o, 0)), Es(w, O), w.pendingBranch = null, w.isInFallback = !1;
      let L = w.parent, Q = !1;
      for (; L; ) {
        if (L.pendingBranch) {
          L.effects.push(...E), Q = !0;
          break;
        }
        L = L.parent;
      }
      !Q && !V && ks(E), w.effects = [], $ && t && t.pendingBranch && D === t.pendingId && (t.deps--, t.deps === 0 && !N && t.resolve()), mr(_, "onResolve");
    },
    fallback(M) {
      if (!w.pendingBranch)
        return;
      const { vnode: N, activeBranch: _, parentComponent: y, container: O, namespace: R } = w;
      mr(N, "onFallback");
      const E = g(_), I = () => {
        w.isInFallback && (u(
          null,
          M,
          O,
          E,
          y,
          null,
          // fallback tree will not have suspense context
          R,
          l,
          a
        ), Es(w, M));
      }, A = M.transition && M.transition.mode === "out-in";
      A && (_.transition.afterLeave = I), w.isInFallback = !0, h(
        _,
        y,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), A || I();
    },
    move(M, N, _) {
      w.activeBranch && p(w.activeBranch, M, N, _), w.container = M;
    },
    next() {
      return w.activeBranch && g(w.activeBranch);
    },
    registerDep(M, N, _) {
      const y = !!w.pendingBranch;
      y && w.deps++;
      const O = M.vnode.el;
      M.asyncDep.catch((R) => {
        Ln(R, M, 0);
      }).then((R) => {
        if (M.isUnmounted || w.isUnmounted || w.pendingId !== M.suspenseId)
          return;
        M.asyncResolved = !0;
        const { vnode: E } = M;
        S.NODE_ENV !== "production" && ys(E), Pi(M, R, !1), O && (E.el = O);
        const I = !O && M.subTree.el;
        N(
          M,
          E,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          m(O || M.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : g(M.subTree),
          w,
          i,
          _
        ), I && P(I), qo(M, E.el), S.NODE_ENV !== "production" && bs(), y && --w.deps === 0 && w.resolve();
      });
    },
    unmount(M, N) {
      w.isUnmounted = !0, w.activeBranch && h(
        w.activeBranch,
        n,
        M,
        N
      ), w.pendingBranch && h(
        w.pendingBranch,
        n,
        M,
        N
      );
    }
  };
  return w;
}
function qm(e, t, n, s, r, o, i, l, a) {
  const f = t.suspense = od(
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
    f.pendingBranch = t.ssContent,
    n,
    f,
    o,
    i
  );
  return f.deps === 0 && f.resolve(!1, !0), c;
}
function zm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Ta(
    s ? n.default : n
  ), e.ssFallback = s ? Ta(n.fallback) : ue(Ae);
}
function Ta(e) {
  let t;
  if (re(e)) {
    const n = os && e._c;
    n && (e._d = !1, x()), e = e(), n && (e._d = !0, t = nt, ld());
  }
  if (Y(e)) {
    const n = Uo(e);
    S.NODE_ENV !== "production" && !n && e.filter((s) => s !== wl).length > 0 && B("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ft(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function id(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : ks(e);
}
function Es(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let r = t.el;
  for (; !r && t.component; )
    t = t.component.subTree, r = t.el;
  n.el = r, s && s.subTree === n && (s.vnode.el = r, qo(s, r));
}
function Wm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ie = Symbol.for("v-fgt"), tn = Symbol.for("v-txt"), Ae = Symbol.for("v-cmt"), Vn = Symbol.for("v-stc"), or = [];
let nt = null;
function x(e = !1) {
  or.push(nt = e ? null : []);
}
function ld() {
  or.pop(), nt = or[or.length - 1] || null;
}
let os = 1;
function Ti(e, t = !1) {
  os += e, e < 0 && nt && t && (nt.hasOnce = !0);
}
function ad(e) {
  return e.dynamicChildren = os > 0 ? nt || vs : null, ld(), os > 0 && nt && nt.push(e), e;
}
function C(e, t, n, s, r, o) {
  return ad(
    d(
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
function wt(e, t, n, s, r) {
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
  if (S.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ur.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Ai;
function Km(e) {
  Ai = e;
}
const Gm = (...e) => ud(
  ...Ai ? Ai(e, Be) : e
), cd = ({ key: e }) => e ?? null, Wr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Me(e) || re(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, r = null, o = e === ie ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cd(t),
    ref: t && Wr(t),
    scopeId: Lo,
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
  return l ? ($l(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), S.NODE_ENV !== "production" && a.key !== a.key && B("VNode created with invalid key (NaN). VNode type:", a.type), os > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && nt.push(a), a;
}
const ue = S.NODE_ENV !== "production" ? Gm : ud;
function ud(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === wl) && (S.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = Ae), sn(e)) {
    const l = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $l(l, n), os > 0 && !o && nt && (l.shapeFlag & 6 ? nt[nt.indexOf(e)] = l : nt.push(l)), l.patchFlag = -2, l;
  }
  if (_d(e) && (e = e.__vccOpts), t) {
    t = dd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = we(l)), ge(a) && (Ss(a) && !Y(a) && (a = fe({}, a)), t.style = je(a));
  }
  const i = le(e) ? 1 : po(e) ? 128 : gu(e) ? 64 : ge(e) ? 4 : re(e) ? 2 : 0;
  return S.NODE_ENV !== "production" && i & 4 && Ss(e) && (e = ce(e), B(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), d(
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
  return e ? Ss(e) || ju(e) ? fe({}, e) : e : null;
}
function Mt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: a } = e, f = t ? pd(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && cd(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Y(o) ? o.concat(Wr(t)) : [o, Wr(t)] : Wr(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: S.NODE_ENV !== "production" && i === -1 && Y(l) ? l.map(fd) : l,
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
  return Y(e.children) && (t.children = e.children.map(fd)), t;
}
function Xe(e = " ", t = 0) {
  return ue(tn, null, e, t);
}
function Pn(e, t) {
  const n = ue(Vn, null, e);
  return n.staticCount = t, n;
}
function j(e = "", t = !1) {
  return t ? (x(), wt(Ae, null, e)) : ue(Ae, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean" ? ue(Ae) : Y(e) ? ue(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sn(e) ? kn(e) : ue(tn, null, String(e));
}
function kn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
}
function $l(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $l(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ju(t) ? t._ctx = Be : r === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else re(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Xe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = we([t.class, s.class]));
      else if (r === "style")
        t.style = je([t.style, s.style]);
      else if (hn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(Y(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
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
  return S.NODE_ENV !== "production" ? o.ctx = Wh(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Pm.bind(null, o), e.ce && e.ce(o), o;
}
let ze = null;
const lt = () => ze || Be;
let ho, Vi;
{
  const e = Er(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  ho = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ze = n
  ), Vi = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const is = (e) => {
  const t = ze;
  return ho(e), e.scope.on(), () => {
    e.scope.off(), ho(t);
  };
}, Ii = () => {
  ze && ze.scope.off(), ho(null);
}, Xm = /* @__PURE__ */ Ke("slot,component");
function Mi(e, { isNativeTag: t }) {
  (Xm(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function md(e) {
  return e.vnode.shapeFlag & 4;
}
let Os = !1;
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
  if (S.NODE_ENV !== "production") {
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
    s.compilerOptions && Dl() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nr), S.NODE_ENV !== "production" && Kh(e);
  const { setup: r } = s;
  if (r) {
    Wt();
    const o = e.setupContext = r.length > 1 ? bd(e) : null, i = is(e), l = us(
      r,
      e,
      0,
      [
        S.NODE_ENV !== "production" ? Ft(e.props) : e.props,
        o
      ]
    ), a = Co(l);
    if (Kt(), i(), (a || e.sp) && !An(e) && bl(e), a) {
      if (l.then(Ii, Ii), t)
        return l.then((f) => {
          Pi(e, f, t);
        }).catch((f) => {
          Ln(f, e, 0);
        });
      if (e.asyncDep = l, S.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        B(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Pi(e, l, t);
  } else
    yd(e, t);
}
function Pi(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (S.NODE_ENV !== "production" && sn(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), S.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dl(t), S.NODE_ENV !== "production" && Gh(e)) : S.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yd(e, n);
}
let ir, Ri;
function vd(e) {
  ir = e, Ri = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zh));
  };
}
const Dl = () => !ir;
function yd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ir && !s.render) {
      const r = s.template || kl(e).template;
      if (r) {
        S.NODE_ENV !== "production" && on(e, "compile");
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, f = fe(
          fe(
            {
              isCustomElement: o,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = ir(r, f), S.NODE_ENV !== "production" && ln(e, "compile");
      }
    }
    e.render = s.render || Te, Ri && Ri(e);
  }
  {
    const r = is(e);
    Wt();
    try {
      cm(e);
    } finally {
      Kt(), r();
    }
  }
  S.NODE_ENV !== "production" && !s.render && e.render === Te && !t && (!ir && s.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", s));
}
const Aa = S.NODE_ENV !== "production" ? {
  get(e, t) {
    return fo(), Ue(e, "get", ""), e[t];
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
    if (S.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Me(n) && (s = "ref")), s !== "object" && B(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (S.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Aa));
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
      attrs: new Proxy(e.attrs, Aa),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function kr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dl(tu(e.exposed)), {
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
const eg = /(?:^|[-_])(\w)/g, tg = (e) => e.replace(eg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function $s(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zo(e, t, n = !1) {
  let s = $s(t);
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
  const n = zp(e, t, Os);
  if (S.NODE_ENV !== "production") {
    const s = lt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function wd(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ge(t) && !Y(t) ? sn(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && sn(n) && (n = [n]), ue(e, t, n));
}
function Ed() {
  if (S.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ge(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Me(u)) {
        Wt();
        const p = u.value;
        return Kt(), [
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
            ["span", e, st(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Gt(u) ? " (readonly)" : ""}`
          ];
        if (Gt(u))
          return [
            "div",
            {},
            ["span", e, st(u) ? "ShallowReadonly" : "Readonly"],
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
      f(h, m, p) && (g[m] = u.ctx[m]);
    return g;
  }
  function f(u, p, h) {
    const g = u[h];
    if (Y(g) && g.includes(p) || ge(g) && p in g || u.extends && f(u.extends, p, h) || u.mixins && u.mixins.some((m) => f(m, p, h)))
      return !0;
  }
  function c(u) {
    return st(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
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
    if (ut(n[s], t[s]))
      return !1;
  return os > 0 && nt && nt.push(e), !0;
}
const Li = "3.5.18", Ie = S.NODE_ENV !== "production" ? B : Te, sg = Po, rg = Rt, og = hl, ig = {
  createComponentInstance: hd,
  setupComponent: gd,
  renderComponentRoot: zr,
  setCurrentRenderingInstance: pr,
  isVNode: sn,
  normalizeVNode: ft,
  getComponentPublicInstance: kr,
  ensureValidVNode: Nl,
  pushWarningContext: ys,
  popWarningContext: bs
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
}, _n = "transition", zs = "animation", Ds = Symbol("_vtc"), Sd = {
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
), hg = (e) => (e.displayName = "Transition", e.props = kd, e), pt = /* @__PURE__ */ hg(
  (e, { slots: t }) => wd(wu, Cd(e), t)
), Hn = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ma = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Cd(e) {
  const t = {};
  for (const E in e)
    E in Sd || (t[E] = e[E]);
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
    appearActiveClass: f = i,
    appearToClass: c = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, g = mg(r), m = g && g[0], P = g && g[1], {
    onBeforeEnter: D,
    onEnter: $,
    onEnterCancelled: v,
    onLeave: k,
    onLeaveCancelled: w,
    onBeforeAppear: M = D,
    onAppear: N = $,
    onAppearCancelled: _ = v
  } = t, y = (E, I, A, V) => {
    E._enterCancelled = V, En(E, I ? c : l), En(E, I ? f : i), A && A();
  }, O = (E, I) => {
    E._isLeaving = !1, En(E, u), En(E, h), En(E, p), I && I();
  }, R = (E) => (I, A) => {
    const V = E ? N : $, L = () => y(I, E, A);
    Hn(V, [I, L]), Pa(() => {
      En(I, E ? a : o), Yt(I, E ? c : l), Ma(V) || Ra(I, s, m, L);
    });
  };
  return fe(t, {
    onBeforeEnter(E) {
      Hn(D, [E]), Yt(E, o), Yt(E, i);
    },
    onBeforeAppear(E) {
      Hn(M, [E]), Yt(E, a), Yt(E, f);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(E, I) {
      E._isLeaving = !0;
      const A = () => O(E, I);
      Yt(E, u), E._enterCancelled ? (Yt(E, p), Bi()) : (Bi(), Yt(E, p)), Pa(() => {
        E._isLeaving && (En(E, u), Yt(E, h), Ma(k) || Ra(E, s, P, A));
      }), Hn(k, [E, A]);
    },
    onEnterCancelled(E) {
      y(E, !1, void 0, !0), Hn(v, [E]);
    },
    onAppearCancelled(E) {
      y(E, !0, void 0, !0), Hn(_, [E]);
    },
    onLeaveCancelled(E) {
      O(E), Hn(w, [E]);
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
  const t = eo(e);
  return ke.NODE_ENV !== "production" && fl(t, "<transition> explicit duration"), t;
}
function Yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ds] || (e[Ds] = /* @__PURE__ */ new Set())).add(t);
}
function En(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ds];
  n && (n.delete(t), n.size || (e[Ds] = void 0));
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
  const f = i + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(f, p), o();
  }, p = (h) => {
    h.target === e && ++c >= a && u();
  };
  setTimeout(() => {
    c < a && u();
  }, l + 1), e.addEventListener(f, p);
}
function Od(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), r = s(`${_n}Delay`), o = s(`${_n}Duration`), i = La(r, o), l = s(`${zs}Delay`), a = s(`${zs}Duration`), f = La(l, a);
  let c = null, u = 0, p = 0;
  t === _n ? i > 0 && (c = _n, u = i, p = o.length) : t === zs ? f > 0 && (c = zs, u = f, p = a.length) : (u = Math.max(i, f), c = u > 0 ? i > f ? _n : zs : null, p = c ? c === _n ? o.length : a.length : 0);
  const h = c === _n && /\b(transform|all)(,|$)/.test(
    s(`${_n}Property`).toString()
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
  const s = e[Ds];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mo = Symbol("_vod"), $d = Symbol("_vsh"), Tl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[mo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ws(e, t);
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
ke.NODE_ENV !== "production" && (Tl.name = "show");
function Ws(e, t) {
  e.style.display = t ? e[mo] : "none", e[$d] = !t;
}
function yg() {
  Tl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Dd = Symbol(ke.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function bg(e) {
  const t = lt();
  if (!t) {
    ke.NODE_ENV !== "production" && Ie("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((o) => go(o, r));
  };
  ke.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const r = e(t.proxy);
    t.ce ? go(t.ce, r) : ji(t.subTree, r), n(r);
  };
  _l(() => {
    ks(s);
  }), it(() => {
    Ut(s, Te, { flush: "post" });
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
    go(e.el, t);
  else if (e.type === ie)
    e.children.forEach((n) => ji(n, t));
  else if (e.type === Vn) {
    let { el: n, anchor: s } = e;
    for (; n && (go(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function go(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const r in t) {
      const o = Rc(t[r]);
      n.setProperty(`--${r}`, o), s += `--${r}: ${o};`;
    }
    n[Dd] = s;
  }
}
const _g = /(^|;)\s*display\s*:/;
function wg(e, t, n) {
  const s = e.style, r = le(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Kr(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Kr(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), Kr(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Dd];
      i && (n += ";" + i), s.cssText = n, o = _g.test(n);
    }
  } else t && e.removeAttribute("style");
  mo in e && (e[mo] = o ? s.display : "", e[$d] && (s.display = "none"));
}
const Eg = /[^\\];\s*$/, Ba = /\s*!important$/;
function Kr(e, t, n) {
  if (Y(n))
    n.forEach((s) => Kr(e, t, s));
  else if (n == null && (n = ""), ke.NODE_ENV !== "production" && Eg.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = xg(e, t);
    Ba.test(n) ? e.setProperty(
      tt(s),
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
      const f = o[t] = $g(
        ke.NODE_ENV !== "production" ? Ka(s, t) : s,
        r
      );
      dn(e, l, f, a);
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
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let pi = 0;
const Cg = /* @__PURE__ */ Promise.resolve(), Og = () => pi || (Cg.then(() => pi = 0), pi = Date.now());
function $g(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    It(
      Dg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Og(), n;
}
function Ka(e, t) {
  return re(e) || Y(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Te);
}
function Dg(e, t) {
  if (Y(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tg = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? vg(e, s, i) : t === "style" ? wg(e, n, s) : hn(t) ? Qr(t) || Sg(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ag(e, t, s, i)) ? (qa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ua(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? qa(e, Ce(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ua(e, t, s, i));
};
function Ag(e, t, n, s) {
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
function Et(e, t, n) {
  const s = /* @__PURE__ */ yl(e, t);
  Oo(s) && fe(s, t);
  class r extends Wo {
    constructor(i) {
      super(s, i, n);
    }
  }
  return r.def = s, r;
}
/*! #__NO_SIDE_EFFECTS__ */
const Vg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Et(e, t, Bd), Ig = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Wo extends Ig {
  constructor(t, n = {}, s = Dt) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Dt ? this._root = this.shadowRoot : (ke.NODE_ENV !== "production" && this.shadowRoot && Ie(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Wo) {
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
    this._connected = !1, ss(() => {
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
      if (o && !Y(o))
        for (const a in o) {
          const f = o[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = eo(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
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
          get: () => xr(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = Y(n) ? n : Object.keys(n || {});
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
    n && this._numberProps && this._numberProps[r] && (s = eo(s)), this._setProp(r, s, !1, !0);
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
      o && o.disconnect(), n === !0 ? this.setAttribute(tt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(tt(t), n + "") : n || this.removeAttribute(tt(t)), o && o.observe(this, { attributes: !0 });
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
            Oo(i[0]) ? fe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (o, ...i) => {
        r(o, i), tt(o) !== o && r(tt(o), i);
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
            const f = n + "-s", c = document.createTreeWalker(a, 1);
            a.setAttribute(f, "");
            let u;
            for (; u = c.nextNode(); )
              u.setAttribute(f, "");
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
  const t = lt(), n = t && t.ce;
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
    const t = lt();
    if (!t)
      return ke.NODE_ENV !== "production" && Ie("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return ke.NODE_ENV !== "production" && Ie("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (ke.NODE_ENV !== "production" && Ie(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const Td = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), vo = Symbol("_moveCb"), Ya = Symbol("_enterCb"), Rg = (e) => (delete e.props.mode, e), Lg = /* @__PURE__ */ Rg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, kd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = lt(), s = gl();
    let r, o;
    return jo(() => {
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
        const f = a.el, c = f.style;
        Yt(f, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const u = f[vo] = (p) => {
          p && p.target !== f || (!p || /transform$/.test(p.propertyName)) && (f.removeEventListener("transitionend", u), f[vo] = null, En(f, i));
        };
        f.addEventListener("transitionend", u);
      }), r = [];
    }), () => {
      const i = ce(e), l = Cd(i);
      let a = i.tag || ie;
      if (r = [], o)
        for (let f = 0; f < o.length; f++) {
          const c = o[f];
          c.el && c.el instanceof Element && (r.push(c), mn(
            c,
            Cs(
              c,
              l,
              s,
              n
            )
          ), Td.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      o = t.default ? Fo(t.default()) : [];
      for (let f = 0; f < o.length; f++) {
        const c = o[f];
        c.key != null ? mn(
          c,
          Cs(c, l, s, n)
        ) : ke.NODE_ENV !== "production" && c.type !== tn && Ie("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, o);
    };
  }
}), Fg = Lg;
function Bg(e) {
  const t = e.el;
  t[vo] && t[vo](), t[Ya] && t[Ya]();
}
function jg(e) {
  Ad.set(e, e.el.getBoundingClientRect());
}
function Hg(e) {
  const t = Td.get(e), n = Ad.get(e), s = t.left - n.left, r = t.top - n.top;
  if (s || r) {
    const o = e.el.style;
    return o.transform = o.webkitTransform = `translate(${s}px,${r}px)`, o.transitionDuration = "0s", e;
  }
}
function Ug(e, t, n) {
  const s = e.cloneNode(), r = e[Ds];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(s);
  const { hasTransform: i } = Od(s);
  return o.removeChild(s), i;
}
const Rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => On(t, n) : t;
};
function qg(e) {
  e.target.composing = !0;
}
function Xa(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const At = Symbol("_assign"), ls = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[At] = Rn(r);
    const o = s || r.props && r.props.type === "number";
    dn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Zr(l)), e[At](l);
    }), n && dn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (dn(e, "compositionstart", qg), dn(e, "compositionend", Xa), dn(e, "change", Xa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[At] = Rn(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Zr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, Le = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[At] = Rn(n), dn(e, "change", () => {
      const s = e._modelValue, r = As(e), o = e.checked, i = e[At];
      if (Y(s)) {
        const l = Do(s, r), a = l !== -1;
        if (o && !a)
          i(s.concat(r));
        else if (!o && a) {
          const f = [...s];
          f.splice(l, 1), i(f);
        }
      } else if (cs(s)) {
        const l = new Set(s);
        o ? l.add(r) : l.delete(r), i(l);
      } else
        i(Vd(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Qa,
  beforeUpdate(e, t, n) {
    e[At] = Rn(n), Qa(e, t, n);
  }
};
function Qa(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (Y(t))
    r = Do(t, s.props.value) > -1;
  else if (cs(t))
    r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = Mn(t, Vd(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const Al = {
  created(e, { value: t }, n) {
    e.checked = Mn(t, n.props.value), e[At] = Rn(n), dn(e, "change", () => {
      e[At](As(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[At] = Rn(s), t !== n && (e.checked = Mn(t, s.props.value));
  }
}, Ts = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = cs(t);
    dn(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Zr(As(i)) : As(i)
      );
      e[At](
        e.multiple ? r ? new Set(o) : o : o[0]
      ), e._assigning = !0, ss(() => {
        e._assigning = !1;
      });
    }), e[At] = Rn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Za(e, t);
  },
  beforeUpdate(e, t, n) {
    e[At] = Rn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Za(e, t);
  }
};
function Za(e, t) {
  const n = e.multiple, s = Y(t);
  if (n && !s && !cs(t)) {
    ke.NODE_ENV !== "production" && Ie(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, o = e.options.length; r < o; r++) {
    const i = e.options[r], l = As(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((f) => String(f) === String(l)) : i.selected = Do(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Mn(As(i), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function As(e) {
  return "_value" in e ? e._value : e.value;
}
function Vd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Id = {
  created(e, t, n) {
    Lr(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Lr(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Lr(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Lr(e, t, n, s, "updated");
  }
};
function Md(e, t) {
  switch (e) {
    case "SELECT":
      return Ts;
    case "TEXTAREA":
      return ls;
    default:
      switch (t) {
        case "checkbox":
          return Le;
        case "radio":
          return Al;
        default:
          return ls;
      }
  }
}
function Lr(e, t, n, s, r) {
  const i = Md(
    e.tagName,
    n.props && n.props.type
  )[r];
  i && i(e, t, n, s);
}
function zg() {
  ls.getSSRProps = ({ value: e }) => ({ value: e }), Al.getSSRProps = ({ value: e }, t) => {
    if (t.props && Mn(t.props.value, e))
      return { checked: !0 };
  }, Le.getSSRProps = ({ value: e }, t) => {
    if (Y(e)) {
      if (t.props && Do(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (cs(e)) {
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
}, qt = (e, t) => {
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
    const o = tt(r.key);
    if (t.some(
      (i) => i === o || Gg[i] === o
    ))
      return e(r);
  });
}, Pd = /* @__PURE__ */ fe({ patchProp: Tg }, pg);
let lr, ec = !1;
function Rd() {
  return lr || (lr = Ku(Pd));
}
function Ld() {
  return lr = ec ? lr : Gu(Pd), ec = !0, lr;
}
const Fd = (...e) => {
  Rd().render(...e);
}, Jg = (...e) => {
  Ld().hydrate(...e);
}, Dt = (...e) => {
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
    value: (t) => Tc(t) || Ac(t) || Vc(t),
    writable: !1
  });
}
function Ud(e) {
  if (Dl()) {
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
  BaseTransition: wu,
  BaseTransitionPropsValidators: vl,
  Comment: Ae,
  DeprecationTypes: ug,
  EffectScope: il,
  ErrorCodes: eh,
  ErrorTypeStrings: sg,
  Fragment: ie,
  KeepAlive: Lh,
  ReactiveEffect: cr,
  Static: Vn,
  Suspense: jm,
  Teleport: Fn,
  Text: tn,
  TrackOpTypes: Wp,
  Transition: pt,
  TransitionGroup: Fg,
  TriggerOpTypes: Kp,
  VueElement: Wo,
  assertNumber: fl,
  callWithAsyncErrorHandling: It,
  callWithErrorHandling: us,
  camelize: Ce,
  capitalize: nn,
  cloneVNode: Mt,
  compatUtils: cg,
  computed: te,
  createApp: Dt,
  createBlock: wt,
  createCommentVNode: j,
  createElementBlock: C,
  createElementVNode: d,
  createHydrationRenderer: Gu,
  createPropsRestProxy: im,
  createRenderer: Ku,
  createSSRApp: Bd,
  createSlots: Uh,
  createStaticVNode: Pn,
  createTextVNode: Xe,
  createVNode: ue,
  customRef: ru,
  defineAsyncComponent: Ph,
  defineComponent: yl,
  defineCustomElement: Et,
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
  getCurrentInstance: lt,
  getCurrentScope: ll,
  getCurrentWatcher: Gp,
  getTransitionRawChildren: Fo,
  guardReactiveProps: dd,
  h: wd,
  handleError: Ln,
  hasInjectionContext: gm,
  hydrate: Jg,
  hydrateOnIdle: Dh,
  hydrateOnInteraction: Ih,
  hydrateOnMediaQuery: Vh,
  hydrateOnVisible: Ah,
  initCustomFormatter: Ed,
  initDirectivesForSSR: Yg,
  inject: sr,
  isMemoSame: xd,
  isProxy: Ss,
  isReactive: fn,
  isReadonly: Gt,
  isRef: Me,
  isRuntimeOnly: Dl,
  isShallow: st,
  isVNode: sn,
  markRaw: tu,
  mergeDefaults: rm,
  mergeModels: om,
  mergeProps: pd,
  nextTick: ss,
  normalizeClass: we,
  normalizeProps: ep,
  normalizeStyle: je,
  onActivated: ku,
  onBeforeMount: $u,
  onBeforeUnmount: Bs,
  onBeforeUpdate: _l,
  onDeactivated: Cu,
  onErrorCaptured: Vu,
  onMounted: it,
  onRenderTracked: Au,
  onRenderTriggered: Tu,
  onScopeDispose: Lc,
  onServerPrefetch: Du,
  onUnmounted: vn,
  onUpdated: jo,
  onWatcherCleanup: iu,
  openBlock: x,
  popScopeId: gh,
  provide: Lu,
  proxyRefs: dl,
  pushScopeId: mh,
  queuePostFlushCb: ks,
  reactive: Ns,
  readonly: Io,
  ref: ne,
  registerRuntimeCompiler: vd,
  render: Fd,
  renderList: _e,
  renderSlot: xl,
  resolveComponent: jh,
  resolveDirective: Hh,
  resolveDynamicComponent: Iu,
  resolveFilter: ag,
  resolveTransitionHooks: Cs,
  setBlockTracking: Ti,
  setDevtoolsHook: og,
  setTransitionHooks: mn,
  shallowReactive: eu,
  shallowReadonly: Ft,
  shallowRef: nu,
  ssrContextKey: Qu,
  ssrUtils: lg,
  stop: gp,
  toDisplayString: J,
  toHandlerKey: Zt,
  toHandlers: qh,
  toRaw: ce,
  toRef: Up,
  toRefs: Bp,
  toValue: Rp,
  transformVNodeArgs: Km,
  triggerRef: Pp,
  unref: xr,
  useAttrs: sm,
  useCssModule: Pg,
  useCssVars: bg,
  useHost: Hi,
  useId: _h,
  useModel: Mm,
  useSSRContext: Zu,
  useShadowRoot: Mg,
  useSlots: nm,
  useTemplateRef: wh,
  useTransitionState: gl,
  vModelCheckbox: Le,
  vModelDynamic: Id,
  vModelRadio: Al,
  vModelSelect: Ts,
  vModelText: ls,
  vShow: Tl,
  version: Li,
  warn: Ie,
  watch: Ut,
  watchEffect: Am,
  watchPostEffect: Vm,
  watchSyncEffect: ed,
  withAsyncContext: lm,
  withCtx: Pe,
  withDefaults: tm,
  withDirectives: $e,
  withKeys: Ui,
  withMemo: ng,
  withModifiers: qt,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var X = {};
const gr = Symbol(X.NODE_ENV !== "production" ? "Fragment" : ""), ar = Symbol(X.NODE_ENV !== "production" ? "Teleport" : ""), Vl = Symbol(X.NODE_ENV !== "production" ? "Suspense" : ""), yo = Symbol(X.NODE_ENV !== "production" ? "KeepAlive" : ""), zd = Symbol(
  X.NODE_ENV !== "production" ? "BaseTransition" : ""
), as = Symbol(X.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(X.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  X.NODE_ENV !== "production" ? "createElementBlock" : ""
), Il = Symbol(X.NODE_ENV !== "production" ? "createVNode" : ""), Ml = Symbol(
  X.NODE_ENV !== "production" ? "createElementVNode" : ""
), Cr = Symbol(
  X.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Pl = Symbol(
  X.NODE_ENV !== "production" ? "createTextVNode" : ""
), Gd = Symbol(
  X.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Rl = Symbol(
  X.NODE_ENV !== "production" ? "resolveComponent" : ""
), Ll = Symbol(
  X.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Fl = Symbol(
  X.NODE_ENV !== "production" ? "resolveDirective" : ""
), Bl = Symbol(
  X.NODE_ENV !== "production" ? "resolveFilter" : ""
), jl = Symbol(
  X.NODE_ENV !== "production" ? "withDirectives" : ""
), Hl = Symbol(X.NODE_ENV !== "production" ? "renderList" : ""), Jd = Symbol(X.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(X.NODE_ENV !== "production" ? "createSlots" : ""), Ko = Symbol(
  X.NODE_ENV !== "production" ? "toDisplayString" : ""
), bo = Symbol(X.NODE_ENV !== "production" ? "mergeProps" : ""), Ul = Symbol(
  X.NODE_ENV !== "production" ? "normalizeClass" : ""
), ql = Symbol(
  X.NODE_ENV !== "production" ? "normalizeStyle" : ""
), vr = Symbol(
  X.NODE_ENV !== "production" ? "normalizeProps" : ""
), Or = Symbol(
  X.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), zl = Symbol(X.NODE_ENV !== "production" ? "toHandlers" : ""), qi = Symbol(X.NODE_ENV !== "production" ? "camelize" : ""), Qg = Symbol(X.NODE_ENV !== "production" ? "capitalize" : ""), zi = Symbol(
  X.NODE_ENV !== "production" ? "toHandlerKey" : ""
), _o = Symbol(
  X.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Zg = Symbol(X.NODE_ENV !== "production" ? "pushScopeId" : ""), e0 = Symbol(X.NODE_ENV !== "production" ? "popScopeId" : ""), Wl = Symbol(X.NODE_ENV !== "production" ? "withCtx" : ""), t0 = Symbol(X.NODE_ENV !== "production" ? "unref" : ""), n0 = Symbol(X.NODE_ENV !== "production" ? "isRef" : ""), Kl = Symbol(X.NODE_ENV !== "production" ? "withMemo" : ""), Xd = Symbol(X.NODE_ENV !== "production" ? "isMemoSame" : ""), Vs = {
  [gr]: "Fragment",
  [ar]: "Teleport",
  [Vl]: "Suspense",
  [yo]: "KeepAlive",
  [zd]: "BaseTransition",
  [as]: "openBlock",
  [Wd]: "createBlock",
  [Kd]: "createElementBlock",
  [Il]: "createVNode",
  [Ml]: "createElementVNode",
  [Cr]: "createCommentVNode",
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
  [Ko]: "toDisplayString",
  [bo]: "mergeProps",
  [Ul]: "normalizeClass",
  [ql]: "normalizeStyle",
  [vr]: "normalizeProps",
  [Or]: "guardReactiveProps",
  [zl]: "toHandlers",
  [qi]: "camelize",
  [Qg]: "capitalize",
  [zi]: "toHandlerKey",
  [_o]: "setBlockTracking",
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
    Vs[t] = e[t];
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
function yr(e, t, n, s, r, o, i, l = !1, a = !1, f = !1, c = Ct) {
  return e && (l ? (e.helper(as), e.helper(Ps(e.inSSR, f))) : e.helper(Ms(e.inSSR, f)), i && e.helper(jl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: r,
    dynamicProps: o,
    directives: i,
    isBlock: l,
    disableTracking: a,
    isComponent: f,
    loc: c
  };
}
function es(e, t = Ct) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Tt(e, t = Ct) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Re(e, t) {
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
function zt(e, t = Ct) {
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
function Is(e, t = void 0, n = !1, s = !1, r = Ct) {
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
function Ms(e, t) {
  return e || t ? Il : Ml;
}
function Ps(e, t) {
  return e || t ? Wd : Kd;
}
function Gl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Ms(s, e.isComponent)), t(as), t(Ps(s, e.isComponent)));
}
const nc = new Uint8Array([123, 123]), sc = new Uint8Array([125, 125]);
function rc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function St(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function wn(e) {
  return e === 47 || e === 62 || St(e);
}
function wo(e) {
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
      wn(t)
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
    wn(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (wn(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(wo("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    St(t) || (t === 62 ? (X.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = rc(t) ? 9 : 27, this.sectionStart = this.index));
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
    t === 61 || wn(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : X.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || wn(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || wn(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || wn(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), X.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || wn(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
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
function In(e, t) {
  const n = Ki("MODE", t), s = Ki(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Rs(e, t, n, ...s) {
  const r = In(e, t);
  return X.NODE_ENV !== "production" && r && Eo(e, t, n, ...s), r;
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
  X.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, n, s) {
  const r = X.NODE_ENV !== "production" ? (n || c0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, o = new SyntaxError(String(r));
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
      return ar;
    case "Suspense":
    case "suspense":
      return Vl;
    case "KeepAlive":
    case "keep-alive":
      return yo;
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
function br(e, t, n = !1, s = !1) {
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
function xo(e) {
  return e.type === 1 && e.tagType === 3;
}
function No(e) {
  return e.type === 1 && e.tagType === 2;
}
const _0 = /* @__PURE__ */ new Set([vr, Or]);
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
function So(e, t, n) {
  let s, r = e.type === 13 ? e.props : e.arguments[2], o = [], i;
  if (r && !le(r) && r.type === 14) {
    const l = nf(r);
    r = l[0], o = l[1], i = o[o.length - 1];
  }
  if (r == null || le(r))
    s = Tt([t]);
  else if (r.type === 14) {
    const l = r.arguments[0];
    !le(l) && l.type === 15 ? lc(t, l) || l.properties.unshift(t) : r.callee === zl ? s = qe(n.helper(bo), [
      Tt([t]),
      r
    ]) : r.arguments.unshift(Tt([t])), !s && (s = r);
  } else r.type === 15 ? (lc(t, r) || r.properties.unshift(t), s = r) : (s = qe(n.helper(bo), [
    Tt([t]),
    r
  ]), i && i.callee === Or && (i = o[o.length - 2]));
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
function _r(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function w0(e) {
  return e.type === 14 && e.callee === Kl ? e.arguments[1].returns : e;
}
const E0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, sf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Ks,
  isPreTag: Ks,
  isIgnoreNewlineTag: Ks,
  isCustomElement: Ks,
  onError: Jl,
  onWarn: Qd,
  comments: X.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ye = sf, wr = null, pn = "", et = null, me = null, gt = "", an = -1, Un = -1, Xl = 0, Cn = !1, Gi = null;
const Ve = [], De = new l0(Ve, {
  onerr: mt,
  ontext(e, t) {
    Fr(Je(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Fr(e, t, n);
  },
  oninterpolation(e, t) {
    if (Cn)
      return Fr(Je(e, t), e, t);
    let n = e + De.delimiterOpen.length, s = t - De.delimiterClose.length;
    for (; St(pn.charCodeAt(n)); )
      n++;
    for (; St(pn.charCodeAt(s - 1)); )
      s--;
    let r = Je(n, s);
    r.includes("&") && (r = ye.decodeEntities(r, !1)), Ji({
      type: 5,
      content: Jr(r, !1, Fe(n, s)),
      loc: Fe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Je(e, t);
    et = {
      type: 1,
      tag: n,
      ns: ye.getNamespace(n, Ve[0], ye.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Fe(e - 1, t),
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
            Gr(l, t, i < r);
          }
          break;
        }
      s || mt(23, rf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = et.tag;
    et.isSelfClosing = !0, cc(e), Ve[0] && Ve[0].tag === t && Gr(Ve.shift(), e);
  },
  onattribname(e, t) {
    me = {
      type: 6,
      name: Je(e, t),
      nameLoc: Fe(e, t),
      value: void 0,
      loc: Fe(e)
    };
  },
  ondirname(e, t) {
    const n = Je(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Cn && s === "" && mt(26, e), Cn || s === "")
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
      Cn = De.inVPre = !0, Gi = et;
      const r = et.props;
      for (let o = 0; o < r.length; o++)
        r[o].type === 7 && (r[o] = V0(r[o]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Je(e, t);
    if (Cn && !ic(me))
      me.name += n, Wn(me.nameLoc, t);
    else {
      const s = n[0] !== "[";
      me.arg = Jr(
        s ? n : n.slice(1, -1),
        s,
        Fe(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Je(e, t);
    if (Cn && !ic(me))
      me.name += "." + n, Wn(me.nameLoc, t);
    else if (me.name === "slot") {
      const s = me.arg;
      s && (s.content += "." + n, Wn(s.loc, t));
    } else {
      const s = de(n, !0, Fe(e, t));
      me.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    gt += Je(e, t), an < 0 && (an = e), Un = t;
  },
  onattribentity(e, t, n) {
    gt += e, an < 0 && (an = t), Un = n;
  },
  onattribnameend(e) {
    const t = me.loc.start.offset, n = Je(t, e);
    me.type === 7 && (me.rawName = n), et.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && mt(2, t);
  },
  onattribend(e, t) {
    if (et && me) {
      if (Wn(me.loc, t), e !== 0)
        if (gt.includes("&") && (gt = ye.decodeEntities(
          gt,
          !0
        )), me.type === 6)
          me.name === "class" && (gt = lf(gt).trim()), e === 1 && !gt && mt(13, t), me.value = {
            type: 2,
            content: gt,
            loc: e === 1 ? Fe(an, Un) : Fe(an - 1, Un + 1)
          }, De.inSFCRoot && et.tag === "template" && me.name === "lang" && gt && gt !== "html" && De.enterRCDATA(wo("</template"), 0);
        else {
          let n = 0;
          me.exp = Jr(
            gt,
            !1,
            Fe(an, Un),
            0,
            n
          ), me.name === "for" && (me.forParseResult = N0(me.exp));
          let s = -1;
          me.name === "bind" && (s = me.modifiers.findIndex(
            (r) => r.content === "sync"
          )) > -1 && Rs(
            "COMPILER_V_BIND_SYNC",
            ye,
            me.loc,
            me.arg.loc.source
          ) && (me.name = "model", me.modifiers.splice(s, 1));
        }
      (me.type !== 7 || me.name !== "pre") && et.props.push(me);
    }
    gt = "", an = Un = -1;
  },
  oncomment(e, t) {
    ye.comments && Ji({
      type: 3,
      content: Je(e, t),
      loc: Fe(e - 4, t + 3)
    });
  },
  onend() {
    const e = pn.length;
    if (X.NODE_ENV !== "production" && De.state !== 1)
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
      Gr(Ve[t], e - 1), mt(24, Ve[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ve[0].ns !== 0 ? Fr(Je(e, t), e, t) : mt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ve[0] ? Ve[0].ns : ye.ns) === 0 && mt(
      21,
      e - 1
    );
  }
}), ac = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, x0 = /^\(|\)$/g;
function N0(e) {
  const t = e.loc, n = e.content, s = n.match(E0);
  if (!s) return;
  const [, r, o] = s, i = (u, p, h = !1) => {
    const g = t.start.offset + p, m = g + u.length;
    return Jr(
      u,
      !1,
      Fe(g, m),
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
  const f = r.indexOf(a), c = a.match(ac);
  if (c) {
    a = a.replace(ac, "").trim();
    const u = c[1].trim();
    let p;
    if (u && (p = n.indexOf(u, f + a.length), l.key = i(u, p, !0)), c[2]) {
      const h = c[2].trim();
      h && (l.index = i(
        h,
        n.indexOf(
          h,
          l.key ? p + u.length : f + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = i(a, f, !0)), l;
}
function Je(e, t) {
  return pn.slice(e, t);
}
function cc(e) {
  De.inSFCRoot && (et.innerLoc = Fe(e + 1, e + 1)), Ji(et);
  const { tag: t, ns: n } = et;
  n === 0 && ye.isPreTag(t) && Xl++, ye.isVoidTag(t) ? Gr(et, e) : (Ve.unshift(et), (n === 1 || n === 2) && (De.inXML = !0)), et = null;
}
function Fr(e, t, n) {
  {
    const o = Ve[0] && Ve[0].tag;
    o !== "script" && o !== "style" && e.includes("&") && (e = ye.decodeEntities(e, !1));
  }
  const s = Ve[0] || wr, r = s.children[s.children.length - 1];
  r && r.type === 2 ? (r.content += e, Wn(r.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Fe(t, n)
  });
}
function Gr(e, t, n = !1) {
  n ? Wn(e.loc, rf(t, 60)) : Wn(e.loc, S0(t, 62) + 1), De.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Je(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: r, children: o } = e;
  if (Cn || (s === "slot" ? e.tagType = 2 : uc(e) ? e.tagType = 3 : C0(e) && (e.tagType = 1)), De.inRCDATA || (e.children = of(o)), r === 0 && ye.isIgnoreNewlineTag(s)) {
    const i = o[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  r === 0 && ye.isPreTag(s) && Xl--, Gi === e && (Cn = De.inVPre = !1, Gi = null), De.inXML && (Ve[0] ? Ve[0].ns : ye.ns) === 0 && (De.inXML = !1);
  {
    const i = e.props;
    if (X.NODE_ENV !== "production" && In(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ye
    )) {
      let a = !1, f = !1;
      for (let c = 0; c < i.length; c++) {
        const u = i[c];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (f = !0)), a && f) {
          Eo(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ye,
            e.loc
          );
          break;
        }
      }
    }
    if (!De.inSFCRoot && In(
      "COMPILER_NATIVE_TEMPLATE",
      ye
    ) && e.tag === "template" && !uc(e)) {
      X.NODE_ENV !== "production" && Eo(
        "COMPILER_NATIVE_TEMPLATE",
        ye,
        e.loc
      );
      const a = Ve[0] || wr, f = a.children.indexOf(e);
      a.children.splice(f, 1, ...e.children);
    }
    const l = i.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Rs(
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
        if (Rs(
          "COMPILER_IS_ON_ELEMENT",
          ye,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Dn(s.arg, "is") && Rs(
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
const $0 = /\r\n/g;
function of(e) {
  const t = ye.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r.type === 2)
      if (Xl)
        r.content = r.content.replace($0, `
`);
      else if (D0(r.content)) {
        const o = e[s - 1] && e[s - 1].type, i = e[s + 1] && e[s + 1].type;
        !o || !i || t && (o === 3 && (i === 3 || i === 1) || o === 1 && (i === 3 || i === 1 && T0(r.content))) ? (n = !0, e[s] = null) : r.content = " ";
      } else t && (r.content = lf(r.content));
  }
  return n ? e.filter(Boolean) : e;
}
function D0(e) {
  for (let t = 0; t < e.length; t++)
    if (!St(e.charCodeAt(t)))
      return !1;
  return !0;
}
function T0(e) {
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
    St(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Ji(e) {
  (Ve[0] || wr).children.push(e);
}
function Fe(e, t) {
  return {
    start: De.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : De.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Je(e, t)
  };
}
function A0(e) {
  return Fe(e.start.offset, e.end.offset);
}
function Wn(e, t) {
  e.end = De.getPos(t), e.source = Je(e.start.offset, t);
}
function V0(e) {
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
function Jr(e, t = !1, n, s = 0, r = 0) {
  return de(e, t, n, s);
}
function mt(e, t, n) {
  ye.onError(
    Se(e, Fe(t, t), void 0, n)
  );
}
function I0() {
  De.reset(), et = null, me = null, gt = "", an = -1, Un = -1, Ve.length = 0;
}
function M0(e, t) {
  if (I0(), pn = e, ye = fe({}, sf), t) {
    let r;
    for (r in t)
      t[r] != null && (ye[r] = t[r]);
  }
  if (X.NODE_ENV !== "production" && !ye.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  De.mode = ye.parseMode === "html" ? 1 : ye.parseMode === "sfc" ? 2 : 0, De.inXML = ye.ns === 1 || ye.ns === 2;
  const n = t && t.delimiters;
  n && (De.delimiterOpen = wo(n[0]), De.delimiterClose = wo(n[1]));
  const s = wr = r0([], e);
  return De.parse(pn), s.loc = Fe(0, e.length), s.children = of(s.children), wr = null, s;
}
function P0(e, t) {
  Yr(
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
  return t.length === 1 && t[0].type === 1 && !No(t[0]) ? t[0] : null;
}
function Yr(e, t, n, s = !1, r = !1) {
  const { children: o } = e, i = [];
  for (let u = 0; u < o.length; u++) {
    const p = o[u];
    if (p.type === 1 && p.tagType === 0) {
      const h = s ? 0 : kt(p, n);
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
            const P = df(p);
            P && (g.props = n.hoist(P));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : kt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (X.NODE_ENV !== "production" ? ` /* ${Zs[-1]} */` : "")
      ), i.push(p);
      continue;
    }
    if (p.type === 1) {
      const h = p.tagType === 1;
      h && n.scopes.vSlot++, Yr(p, e, n, !1, r), h && n.scopes.vSlot--;
    } else if (p.type === 11)
      Yr(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let h = 0; h < p.branches.length; h++)
        Yr(
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
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && Y(e.codegenNode.children))
      e.codegenNode.children = f(
        es(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = c(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = f(
        es(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Y(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = yt(e, "slot", !0), p = u && u.arg && c(t.codegenNode, u.arg);
      p && (a.push(n.cached.length), p.returns = f(
        es(p.returns)
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
  function f(u) {
    const p = n.cache(u);
    return r && n.hmr && (p.needArraySpread = !0), p;
  }
  function c(u, p) {
    if (u.children && !Y(u.children) && u.children.type === 15) {
      const h = u.children.properties.find(
        (g) => g.key === p || g.key.content === p
      );
      return h && h.value;
    }
  }
  i.length && n.transformHoist && n.transformHoist(o, n, e);
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
          const f = kt(e.children[a], t);
          if (f === 0)
            return n.set(e, 0), 0;
          f < i && (i = f);
        }
        if (i > 1)
          for (let a = 0; a < e.props.length; a++) {
            const f = e.props[a];
            if (f.type === 7 && f.name === "bind" && f.exp) {
              const c = kt(f.exp, t);
              if (c === 0)
                return n.set(e, 0), 0;
              c < i && (i = c);
            }
          }
        if (r.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(as), t.removeHelper(
            Ps(t.inSSR, r.isComponent)
          ), r.isBlock = !1, t.helper(Ms(t.inSSR, r.isComponent));
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
      let o = 3;
      for (let i = 0; i < e.children.length; i++) {
        const l = e.children[i];
        if (le(l) || _t(l))
          continue;
        const a = kt(l, t);
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
  vr,
  Or
]);
function cf(e, t) {
  if (e.type === 14 && !le(e.callee) && R0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return kt(n, t);
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
      const { key: i, value: l } = r[o], a = kt(i, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let f;
      if (l.type === 4 ? f = kt(l, t) : l.type === 14 ? f = cf(l, t) : f = 0, f === 0)
        return f;
      f < n && (n = f);
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
  isBuiltInComponent: f = Te,
  isCustomElement: c = Te,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: h = !0,
  ssr: g = !1,
  inSSR: m = !1,
  ssrCssVars: P = "",
  bindingMetadata: D = pe,
  inline: $ = !1,
  isTS: v = !1,
  onError: k = Jl,
  onWarn: w = Qd,
  compatConfig: M
}) {
  const N = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), _ = {
    // options
    filename: t,
    selfName: N && nn(Ce(N[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: r,
    cacheHandlers: o,
    nodeTransforms: i,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: f,
    isCustomElement: c,
    expressionPlugins: u,
    scopeId: p,
    slotted: h,
    ssr: g,
    inSSR: m,
    ssrCssVars: P,
    bindingMetadata: D,
    inline: $,
    isTS: v,
    onError: k,
    onWarn: w,
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
      const O = _.helpers.get(y) || 0;
      return _.helpers.set(y, O + 1), y;
    },
    removeHelper(y) {
      const O = _.helpers.get(y);
      if (O) {
        const R = O - 1;
        R ? _.helpers.set(y, R) : _.helpers.delete(y);
      }
    },
    helperString(y) {
      return `_${Vs[_.helper(y)]}`;
    },
    replaceNode(y) {
      if (X.NODE_ENV !== "production") {
        if (!_.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!_.parent)
          throw new Error("Cannot replace root node.");
      }
      _.parent.children[_.childIndex] = _.currentNode = y;
    },
    removeNode(y) {
      if (X.NODE_ENV !== "production" && !_.parent)
        throw new Error("Cannot remove root node.");
      const O = _.parent.children, R = y ? O.indexOf(y) : _.currentNode ? _.childIndex : -1;
      if (X.NODE_ENV !== "production" && R < 0)
        throw new Error("node being removed is not a child of current parent");
      !y || y === _.currentNode ? (_.currentNode = null, _.onNodeRemoved()) : _.childIndex > R && (_.childIndex--, _.onNodeRemoved()), _.parent.children.splice(R, 1);
    },
    onNodeRemoved: Te,
    addIdentifiers(y) {
    },
    removeIdentifiers(y) {
    },
    hoist(y) {
      le(y) && (y = de(y)), _.hoists.push(y);
      const O = de(
        `_hoisted_${_.hoists.length}`,
        !1,
        y.loc,
        2
      );
      return O.hoisted = y, O;
    },
    cache(y, O = !1, R = !1) {
      const E = o0(
        _.cached.length,
        y,
        O,
        R
      );
      return _.cached.push(E), E;
    }
  };
  return _.filters = /* @__PURE__ */ new Set(), _;
}
function F0(e, t) {
  const n = L0(e, t);
  Go(e, n), t.hoistStatic && P0(e, n), t.ssr || B0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
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
    X.NODE_ENV !== "production" && s.filter((o) => o.type !== 3).length === 1 && (r |= 2048), e.codegenNode = yr(
      t,
      n(gr),
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
    le(r) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Go(r, t));
  }
}
function Go(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let o = 0; o < n.length; o++) {
    const i = n[o](e, t);
    if (i && (Y(i) ? s.push(...i) : s.push(i)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Cr);
      break;
    case 5:
      t.ssr || t.helper(Ko);
      break;
    case 9:
      for (let o = 0; o < e.branches.length; o++)
        Go(e.branches[o], t);
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
          const f = t(s, a, r);
          f && i.push(f);
        }
      }
      return i;
    }
  };
}
const Jo = "/*@__PURE__*/", pf = (e) => `${Vs[e]}: _${Vs[e]}`;
function H0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: r = "template.vue.html",
  scopeId: o = null,
  optimizeImports: i = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: f = "vue/server-renderer",
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
    ssrRuntimeModuleName: f,
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
      return `_${Vs[m]}`;
    },
    push(m, P = -2, D) {
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
    scopeId: f,
    ssr: c
  } = n, u = Array.from(e.helpers), p = u.length > 0, h = !o && s !== "module";
  q0(e, n);
  const m = c ? "ssrRender" : "render", D = (c ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (r(`function ${m}(${D}) {`), i(), h && (r("with (_ctx) {"), i(), p && (r(
    `const { ${u.map(pf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (mi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (mi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), mi(e.filters, "filter", n), a()), e.temps > 0) {
    r("let ");
    for (let $ = 0; $ < e.temps; $++)
      r(`${$ > 0 ? ", " : ""}_temp${$}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (r(
    `
`,
    0
    /* Start */
  ), a()), c || r("return "), e.codegenNode ? rt(e.codegenNode, n) : r("null"), h && (l(), r("}")), l(), r("}"), {
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
  } = t, f = l, c = Array.from(e.helpers);
  if (c.length > 0 && (r(
    `const _Vue = ${f}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      Il,
      Ml,
      Cr,
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
    const f = a.endsWith("__self");
    f && (a = a.slice(0, -6)), s(
      `const ${_r(a, t)} = ${i}(${JSON.stringify(a)}${f ? ", true" : ""})${o ? "!" : ""}`
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
    o && (n(`const _hoisted_${r + 1} = `), rt(o, t), s());
  }
  t.pure = !1;
}
function W0(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Ql(e, t) {
  const n = e.length > 3 || X.NODE_ENV !== "production" && e.some((s) => Y(s) || !W0(s));
  t.push("["), n && t.indent(), $r(e, t, n), n && t.deindent(), t.push("]");
}
function $r(e, t, n = !1, s = !0) {
  const { push: r, newline: o } = t;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    le(l) ? r(
      l,
      -3
      /* Unknown */
    ) : Y(l) ? Ql(l, t) : rt(l, t), i < e.length - 1 && (n ? (s && r(","), o()) : s && r(", "));
  }
}
function rt(e, t) {
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
      X.NODE_ENV !== "production" && oc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), rt(e.codegenNode, t);
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
      rt(e.codegenNode, t);
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
      $r(e.body, t, !0, !1);
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
  r && n(Jo), n(`${s(Ko)}(`), rt(e.content, t), n(")");
}
function mf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : rt(s, t);
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
  r && n(Jo), n(
    `${s(Cr)}(${JSON.stringify(e.content)})`,
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
    dynamicProps: f,
    directives: c,
    isBlock: u,
    disableTracking: p,
    isComponent: h
  } = e;
  let g;
  if (a)
    if (X.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${Zs[a]} */`;
      else {
        const P = Object.keys(Zs).map(Number).filter((D) => D > 0 && a & D).map((D) => Zs[D]).join(", ");
        g = a + ` /* ${P} */`;
      }
    else
      g = String(a);
  c && n(s(jl) + "("), u && n(`(${s(as)}(${p ? "true" : ""}), `), r && n(Jo);
  const m = u ? Ps(t.inSSR, h) : Ms(t.inSSR, h);
  n(s(m) + "(", -2, e), $r(
    Q0([o, i, l, g, f]),
    t
  ), n(")"), u && n(")"), c && (n(", "), rt(c, t), n(")"));
}
function Q0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Z0(e, t) {
  const { push: n, helper: s, pure: r } = t, o = le(e.callee) ? e.callee : s(e.callee);
  r && n(Jo), n(o + "(", -2, e), $r(e.arguments, t), n(")");
}
function ev(e, t) {
  const { push: n, indent: s, deindent: r, newline: o } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || X.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: f, value: c } = i[a];
    J0(f, t), n(": "), rt(c, t), a < i.length - 1 && (n(","), o());
  }
  l && r(), n(l ? "}" : " }");
}
function tv(e, t) {
  Ql(e.elements, t);
}
function nv(e, t) {
  const { push: n, indent: s, deindent: r } = t, { params: o, returns: i, body: l, newline: a, isSlot: f } = e;
  f && n(`_${Vs[Wl]}(`), n("(", -2, e), Y(o) ? $r(o, t) : o && rt(o, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Y(i) ? Ql(i, t) : rt(i, t)) : l && rt(l, t), (a || l) && (r(), n("}")), f && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sv(e, t) {
  const { test: n, consequent: s, alternate: r, newline: o } = e, { push: i, indent: l, deindent: a, newline: f } = t;
  if (n.type === 4) {
    const u = !Yl(n.content);
    u && i("("), hf(n, t), u && i(")");
  } else
    i("("), rt(n, t), i(")");
  o && l(), t.indentLevel++, o || i(" "), i("? "), rt(s, t), t.indentLevel--, o && f(), o || i(" "), i(": ");
  const c = r.type === 19;
  c || t.indentLevel++, rt(r, t), c || t.indentLevel--, o && a(
    !0
    /* without newline */
  );
}
function rv(e, t) {
  const { push: n, helper: s, indent: r, deindent: o, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (r(), n(`${s(_o)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), rt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(_o)}(1),`), i(), n(`_cache[${e.index}]`), o()), n(")"), a && n(")]");
}
const ov = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), iv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Kn(e, t, n = !1, s = !1) {
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
  return X.NODE_ENV !== "production" && Kn(e, t, n, s), e;
}
const av = ff(
  /^(if|else|else-if)$/,
  (e, t, n) => cv(e, t, n, (s, r, o) => {
    const i = n.parent.children;
    let l = i.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const f = i[l];
      f && f.type === 9 && (a += f.branches.length);
    }
    return () => {
      if (o)
        s.codegenNode = fc(
          r,
          a,
          n
        );
      else {
        const f = dv(s.codegenNode);
        f.alternate = fc(
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
  if (X.NODE_ENV !== "production" && t.exp && Kn(t.exp, n), t.name === "if") {
    const r = dc(e, t), o = {
      type: 9,
      loc: A0(e.loc),
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
        n.removeNode(l), X.NODE_ENV !== "production" && o.unshift(l);
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
        if (X.NODE_ENV !== "production" && o.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...o, ...a.children]), X.NODE_ENV !== "production") {
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
        const f = s && s(l, a, !1);
        Go(a, n), f && f(), n.currentNode = null;
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
    userKey: br(e, "key"),
    isTemplateIf: n
  };
}
function fc(e, t, n) {
  return e.condition ? Wi(
    e.condition,
    pc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    qe(n.helper(Cr), [
      X.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : pc(e, t, n);
}
function pc(e, t, n) {
  const { helper: s } = n, r = Re(
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
      return So(a, r, n), a;
    } else {
      let a = 64;
      return X.NODE_ENV !== "production" && !e.isTemplateIf && o.filter((f) => f.type !== 3).length === 1 && (a |= 2048), yr(
        n,
        s(gr),
        Tt([r]),
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
    const a = i.codegenNode, f = w0(a);
    return f.type === 13 && Gl(f, n), So(f, r, n), a;
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
          Re(o, de("", !0, r))
        ]
      };
    gf(e), i = e.exp;
  }
  return o.type !== 4 ? (o.children.unshift("("), o.children.push(') || ""')) : o.isStatic || (o.content = o.content ? `${o.content} || ""` : '""'), s.some((l) => l.content === "camel") && (o.type === 4 ? o.isStatic ? o.content = Ce(o.content) : o.content = `${n.helperString(qi)}(${o.content})` : (o.children.unshift(`${n.helperString(qi)}(`), o.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && hc(o, "."), s.some((l) => l.content === "attr") && hc(o, "^")), {
    props: [Re(o, i)]
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
      ]), l = xo(e), a = yt(e, "memo"), f = br(e, "key", !1, !0);
      f && f.type === 7 && !f.exp && gf(f);
      let u = f && (f.type === 6 ? f.value ? de(f.value.content, !0) : void 0 : f.exp);
      const p = f && u ? Re("key", u) : null, h = o.source.type === 4 && o.source.constType > 0, g = h ? 64 : f ? 128 : 256;
      return o.codegenNode = yr(
        n,
        s(gr),
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
        const { children: P } = o;
        X.NODE_ENV !== "production" && l && e.children.some((v) => {
          if (v.type === 1) {
            const k = br(v, "key");
            if (k)
              return n.onError(
                Se(
                  33,
                  k.loc
                )
              ), !0;
          }
        });
        const D = P.length !== 1 || P[0].type !== 1, $ = No(e) ? e : l && e.children.length === 1 && No(e.children[0]) ? e.children[0] : null;
        if ($ ? (m = $.codegenNode, l && p && So(m, p, n)) : D ? m = yr(
          n,
          s(gr),
          p ? Tt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (m = P[0].codegenNode, l && p && So(m, p, n), m.isBlock !== !h && (m.isBlock ? (r(as), r(
          Ps(n.inSSR, m.isComponent)
        )) : r(
          Ms(n.inSSR, m.isComponent)
        )), m.isBlock = !h, m.isBlock ? (s(as), s(Ps(n.inSSR, m.isComponent))) : s(Ms(n.inSSR, m.isComponent))), a) {
          const v = Is(
            Yi(o.parseResult, [
              de("_cached")
            ])
          );
          v.body = i0([
            zt(["const _memo = (", a.exp, ")"]),
            zt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Xd
              )}(_cached, _memo)) return _cached`
            ]),
            zt(["const _item = ", m]),
            de("_item.memo = _memo"),
            de("return _item")
          ]), i.arguments.push(
            v,
            de("_cache"),
            de(String(n.cached.length))
          ), n.cached.push(null);
        } else
          i.arguments.push(
            Is(
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
  const { addIdentifiers: o, removeIdentifiers: i, scopes: l } = n, { source: a, value: f, key: c, index: u } = r, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: f,
    keyAlias: c,
    objectIndexAlias: u,
    parseResult: r,
    children: xo(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const h = s && s(p);
  return () => {
    l.vFor--, h && h();
  };
}
function vf(e, t) {
  e.finalized || (X.NODE_ENV !== "production" && (Kn(e.source, t), e.key && Kn(
    e.key,
    t,
    !0
  ), e.index && Kn(
    e.index,
    t,
    !0
  ), e.value && Kn(
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
}, vv = (e, t, n, s) => Is(
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
    const { arg: P, exp: D } = a;
    P && !bt(P) && (l = !0), o.push(
      Re(
        P || de("default", !0),
        n(D, void 0, s, r)
      )
    );
  }
  let f = !1, c = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let h = 0;
  for (let P = 0; P < s.length; P++) {
    const D = s[P];
    let $;
    if (!xo(D) || !($ = yt(D, "slot", !0))) {
      D.type !== 3 && u.push(D);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, $.loc)
      );
      break;
    }
    f = !0;
    const { children: v, loc: k } = D, {
      arg: w = de("default", !0),
      exp: M,
      loc: N
    } = $;
    let _;
    bt(w) ? _ = w ? w.content : "default" : l = !0;
    const y = yt(D, "for"), O = n(M, y, v, k);
    let R, E;
    if (R = yt(D, "if"))
      l = !0, i.push(
        Wi(
          R.exp,
          Br(w, O, h++),
          mc
        )
      );
    else if (E = yt(
      D,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let I = P, A;
      for (; I-- && (A = s[I], !(A.type !== 3 && Xi(A))); )
        ;
      if (A && xo(A) && yt(A, /^(else-)?if$/)) {
        let V = i[i.length - 1];
        for (; V.alternate.type === 19; )
          V = V.alternate;
        V.alternate = E.exp ? Wi(
          E.exp,
          Br(
            w,
            O,
            h++
          ),
          mc
        ) : Br(w, O, h++);
      } else
        t.onError(
          Se(30, E.loc)
        );
    } else if (y) {
      l = !0;
      const I = y.forParseResult;
      I ? (vf(I, t), i.push(
        qe(t.helper(Hl), [
          I.source,
          Is(
            Yi(I),
            Br(w, O),
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
      if (_) {
        if (p.has(_)) {
          t.onError(
            Se(
              38,
              N
            )
          );
          continue;
        }
        p.add(_), _ === "default" && (c = !0);
      }
      o.push(Re(w, O));
    }
  }
  if (!a) {
    const P = (D, $) => {
      const v = n(D, void 0, $, r);
      return t.compatConfig && (v.isNonScopedSlot = !0), Re("default", v);
    };
    f ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((D) => Xi(D)) && (c ? t.onError(
      Se(
        39,
        u[0].loc
      )
    ) : o.push(
      P(void 0, u)
    )) : o.push(P(void 0, s));
  }
  const g = l ? 2 : Xr(e.children) ? 3 : 1;
  let m = Tt(
    o.concat(
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
    r
  );
  return i.length && (m = qe(t.helper(Yd), [
    m,
    es(i)
  ])), {
    slots: m,
    hasDynamicSlots: l
  };
}
function Br(e, t, n) {
  const s = [
    Re("name", e),
    Re("fn", t)
  ];
  return n != null && s.push(
    Re("key", de(String(n), !0))
  ), Tt(s);
}
function Xr(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Xr(n.children))
          return !0;
        break;
      case 9:
        if (Xr(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Xr(n.children)) return !0;
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
  let a, f, c = 0, u, p, h, g = (
    // dynamic component may resolve to plain elements
    l || i === ar || i === Vl || !o && // <svg> and <foreignObject> must be forced into blocks so that block
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
    const P = m.directives;
    h = P && P.length ? es(
      P.map((D) => Ev(D, t))
    ) : void 0, m.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === yo && (g = !0, c |= 1024, X.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), o && // Teleport is not a real component and has dedicated runtime handling
    i !== ar && // explained above.
    i !== yo) {
      const { slots: P, hasDynamicSlots: D } = yv(e, t);
      f = P, D && (c |= 1024);
    } else if (e.children.length === 1 && i !== ar) {
      const P = e.children[0], D = P.type, $ = D === 5 || D === 8;
      $ && kt(P, t) === 0 && (c |= 1), $ || D === 2 ? f = P : f = e.children;
    } else
      f = e.children;
  p && p.length && (u = xv(p)), e.codegenNode = yr(
    t,
    i,
    a,
    f,
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
  const r = Qi(s), o = br(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (o)
    if (r || In(
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
  return i ? (n || t.helper(i), i) : (t.helper(Rl), t.components.add(s), _r(s, "component"));
}
function bf(e, t, n = e.props, s, r, o = !1) {
  const { tag: i, loc: l, children: a } = e;
  let f = [];
  const c = [], u = [], p = a.length > 0;
  let h = !1, g = 0, m = !1, P = !1, D = !1, $ = !1, v = !1, k = !1;
  const w = [], M = (O) => {
    f.length && (c.push(
      Tt(gc(f), l)
    ), f = []), O && c.push(O);
  }, N = () => {
    t.scopes.vFor > 0 && f.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, _ = ({ key: O, value: R }) => {
    if (bt(O)) {
      const E = O.content, I = hn(E);
      if (I && (!s || r) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      E.toLowerCase() !== "onclick" && // omit v-model handlers
      E !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Tn(E) && ($ = !0), I && Tn(E) && (k = !0), I && R.type === 14 && (R = R.arguments[0]), R.type === 20 || (R.type === 4 || R.type === 8) && kt(R, t) > 0)
        return;
      E === "ref" ? m = !0 : E === "class" ? P = !0 : E === "style" ? D = !0 : E !== "key" && !w.includes(E) && w.push(E), s && (E === "class" || E === "style") && !w.includes(E) && w.push(E);
    } else
      v = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const R = n[O];
    if (R.type === 6) {
      const { loc: E, name: I, nameLoc: A, value: V } = R;
      let L = !0;
      if (I === "ref" && (m = !0, N()), I === "is" && (Qi(i) || V && V.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      f.push(
        Re(
          de(I, !0, A),
          de(
            V ? V.content : "",
            L,
            V ? V.loc : E
          )
        )
      );
    } else {
      const { name: E, arg: I, exp: A, loc: V, modifiers: L } = R, Q = E === "bind", W = E === "on";
      if (E === "slot") {
        s || t.onError(
          Se(40, V)
        );
        continue;
      }
      if (E === "once" || E === "memo" || E === "is" || Q && Dn(I, "is") && (Qi(i) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || W && o)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (Q && Dn(I, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        W && p && Dn(I, "vue:before-update")) && (h = !0), Q && Dn(I, "ref") && N(), !I && (Q || W)
      ) {
        if (v = !0, A)
          if (Q) {
            if (M(), X.NODE_ENV !== "production" && c.some((xt) => xt.type === 15 ? xt.properties.some(({ key: Ot }) => Ot.type !== 4 || !Ot.isStatic ? !0 : Ot.content !== "class" && Ot.content !== "style" && !hn(Ot.content)) : !0) && Rs(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              V
            ), In(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              c.unshift(A);
              continue;
            }
            N(), M(), c.push(A);
          } else
            M({
              type: 14,
              loc: V,
              callee: t.helper(zl),
              arguments: s ? [A] : [A, "true"]
            });
        else
          t.onError(
            Se(
              Q ? 34 : 35,
              V
            )
          );
        continue;
      }
      Q && L.some((We) => We.content === "prop") && (g |= 32);
      const he = t.directiveTransforms[E];
      if (he) {
        const { props: We, needRuntime: xt } = he(R, e, t);
        !o && We.forEach(_), W && I && !bt(I) ? M(Tt(We, l)) : f.push(...We), xt && (u.push(R), _t(xt) && yf.set(R, xt));
      } else $c(E) || (u.push(R), p && (h = !0));
    }
  }
  let y;
  if (c.length ? (M(), c.length > 1 ? y = qe(
    t.helper(bo),
    c,
    l
  ) : y = c[0]) : f.length && (y = Tt(
    gc(f),
    l
  )), v ? g |= 16 : (P && !s && (g |= 2), D && !s && (g |= 4), w.length && (g |= 8), $ && (g |= 32)), !h && (g === 0 || g === 32) && (m || k || u.length > 0) && (g |= 512), !t.inSSR && y)
    switch (y.type) {
      case 15:
        let O = -1, R = -1, E = !1;
        for (let V = 0; V < y.properties.length; V++) {
          const L = y.properties[V].key;
          bt(L) ? L.content === "class" ? O = V : L.content === "style" && (R = V) : L.isHandlerKey || (E = !0);
        }
        const I = y.properties[O], A = y.properties[R];
        E ? y = qe(
          t.helper(vr),
          [y]
        ) : (I && !bt(I.value) && (I.value = qe(
          t.helper(Ul),
          [I.value]
        )), A && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (D || A.value.type === 4 && A.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        A.value.type === 17) && (A.value = qe(
          t.helper(ql),
          [A.value]
        )));
        break;
      case 14:
        break;
      default:
        y = qe(
          t.helper(vr),
          [
            qe(t.helper(Or), [
              y
            ])
          ]
        );
        break;
    }
  return {
    props: y,
    directives: u,
    patchFlag: g,
    dynamicPropNames: w,
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
    i ? (o === "style" || o === "class" || hn(o)) && wv(i, r) : (t.set(o, r), n.push(r));
  }
  return n;
}
function wv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = es(
    [e.value, t.value],
    e.loc
  );
}
function Ev(e, t) {
  const n = [], s = yf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Fl), t.directives.add(e.name), n.push(_r(e.name, "directive")));
  const { loc: r } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const o = de("true", !1, r);
    n.push(
      Tt(
        e.modifiers.map(
          (i) => Re(i, o)
        ),
        r
      )
    );
  }
  return es(n, e.loc);
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
  if (No(e)) {
    const { children: n, loc: s } = e, { slotName: r, slotProps: o } = Sv(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      r,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    o && (i[2] = o, l = 3), n.length && (i[3] = Is([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = qe(
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
      X.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Se(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Zt(Ce(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = de(p, !0, i.loc);
    } else
      l = zt([
        `${n.helperString(zi)}(`,
        i,
        ")"
      ]);
  else
    l = i, l.children.unshift(`${n.helperString(zi)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let f = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = tf(a), p = !(u || v0(a)), h = a.content.includes(";");
    X.NODE_ENV !== "production" && Kn(
      a,
      n,
      !1,
      h
    ), (p || f && u) && (a = zt([
      `${p ? "$event" : "(...args)"} => ${h ? "{" : "("}`,
      a,
      h ? "}" : ")"
    ]));
  }
  let c = {
    props: [
      Re(
        l,
        a || de("() => {}", !1, r)
      )
    ]
  };
  return s && (c = s(c)), f && (c.props[0].value = n.cache(c.props[0].value)), c.props.forEach((u) => u.key.isHandlerKey = !0), c;
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
              s || (s = n[o] = zt(
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
            (i.type !== 2 || i.content !== " ") && l.push(i), !t.ssr && kt(i, t) === 0 && l.push(
              1 + (X.NODE_ENV !== "production" ? ` /* ${Zs[1]} */` : "")
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
    return vc.has(e) || t.inVOnce || t.inSSR ? void 0 : (vc.add(e), t.inVOnce = !0, t.helper(_o), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, wf = (e, t, n) => {
  const { exp: s, arg: r } = e;
  if (!s)
    return n.onError(
      Se(41, e.loc)
    ), jr();
  const o = s.loc.source.trim(), i = s.type === 4 ? s.content : o, l = n.bindingMetadata[o];
  if (l === "props" || l === "props-aliased")
    return n.onError(Se(44, s.loc)), jr();
  if (!i.trim() || !tf(s))
    return n.onError(
      Se(42, s.loc)
    ), jr();
  const a = r || de("modelValue", !0), f = r ? bt(r) ? `onUpdate:${Ce(r.content)}` : zt(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
  let c;
  const u = n.isTS ? "($event: any)" : "$event";
  c = zt([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Re(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Re(f, c)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const h = e.modifiers.map((m) => m.content).map((m) => (Yl(m) ? m : JSON.stringify(m)) + ": true").join(", "), g = r ? bt(r) ? `${r.content}Modifiers` : zt([r, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Re(
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
  return jr(p);
};
function jr(e = []) {
  return { props: e };
}
const Ov = /[\w).+\-_$\]]/, $v = (e, t) => {
  In("COMPILER_FILTERS", t) && (e.type === 5 ? ko(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && ko(n.exp, t);
  }));
};
function ko(e, t) {
  if (e.type === 4)
    yc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? yc(s, t) : s.type === 8 ? ko(e, t) : s.type === 5 && ko(s.content, t));
    }
}
function yc(e, t) {
  const n = e.content;
  let s = !1, r = !1, o = !1, i = !1, l = 0, a = 0, f = 0, c = 0, u, p, h, g, m = [];
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
    n.charCodeAt(h + 1) !== 124 && n.charCodeAt(h - 1) !== 124 && !l && !a && !f)
      g === void 0 ? (c = h + 1, g = n.slice(0, h).trim()) : P();
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
      if (u === 47) {
        let D = h - 1, $;
        for (; D >= 0 && ($ = n.charAt(D), $ === " "); D--)
          ;
        (!$ || !Ov.test($)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, h).trim() : c !== 0 && P();
  function P() {
    m.push(n.slice(c, h).trim()), c = h + 1;
  }
  if (m.length) {
    for (X.NODE_ENV !== "production" && Eo(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), h = 0; h < m.length; h++)
      g = Dv(g, m[h], t);
    e.content = g, e.ast = void 0;
  }
}
function Dv(e, t, n) {
  n.helper(Bl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${_r(t, "filter")}(${e})`;
  {
    const r = t.slice(0, s), o = t.slice(s + 1);
    return n.filters.add(r), `${_r(r, "filter")}(${e}${o !== ")" ? "," + o : o}`;
  }
}
const bc = /* @__PURE__ */ new WeakSet(), Tv = (e, t) => {
  if (e.type === 1) {
    const n = yt(e, "memo");
    return !n || bc.has(e) ? void 0 : (bc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Gl(s, t), e.codegenNode = qe(t.helper(Kl), [
        n.exp,
        Is(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Av(e) {
  return [
    [
      Cv,
      av,
      Tv,
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
      model: wf
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
  }), i = le(e) ? M0(e, o) : e, [l, a] = Av();
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
var ot = {};
const Ef = Symbol(ot.NODE_ENV !== "production" ? "vModelRadio" : ""), xf = Symbol(
  ot.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(ot.NODE_ENV !== "production" ? "vModelText" : ""), Sf = Symbol(
  ot.NODE_ENV !== "production" ? "vModelSelect" : ""
), Zi = Symbol(
  ot.NODE_ENV !== "production" ? "vModelDynamic" : ""
), kf = Symbol(
  ot.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Cf = Symbol(
  ot.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Of = Symbol(ot.NODE_ENV !== "production" ? "vShow" : ""), Zl = Symbol(ot.NODE_ENV !== "production" ? "Transition" : ""), $f = Symbol(
  ot.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
s0({
  [Ef]: "vModelRadio",
  [xf]: "vModelCheckbox",
  [Nf]: "vModelText",
  [Sf]: "vModelSelect",
  [Zi]: "vModelDynamic",
  [kf]: "withModifiers",
  [Cf]: "withKeys",
  [Of]: "vShow",
  [Zl]: "Transition",
  [$f]: "TransitionGroup"
});
let hs;
function Mv(e, t = !1) {
  return hs || (hs = document.createElement("div")), t ? (hs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, hs.children[0].getAttribute("foo")) : (hs.innerHTML = e, hs.textContent);
}
const Pv = {
  parseMode: "html",
  isVoidTag: op,
  isNativeTag: (e) => Tc(e) || Ac(e) || Vc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Mv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Zl;
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
  const n = Dc(e);
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
    ot.NODE_ENV !== "production" ? Fv : void 0
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
      Re(
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
      Re(
        de("textContent", !0),
        s ? kt(s, n) > 0 ? s : qe(
          n.helperString(Ko),
          [s],
          r
        ) : de("", !0)
      )
    ]
  };
}, Hv = (e, t, n) => {
  const s = wf(e, t, n);
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
      const f = br(t, "type");
      if (f) {
        if (f.type === 7)
          l = Zi;
        else if (f.value)
          switch (f.value.content) {
            case "radio":
              l = Ef;
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
              ot.NODE_ENV !== "production" && r();
              break;
          }
      } else y0(t) ? l = Zi : ot.NODE_ENV !== "production" && r();
    } else o === "select" ? l = Sf : ot.NODE_ENV !== "production" && r();
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
), zv = /* @__PURE__ */ Ke("left,right"), Df = /* @__PURE__ */ Ke("onkeyup,onkeydown,onkeypress"), Wv = (e, t, n, s) => {
  const r = [], o = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Rs(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Uv(a) ? i.push(a) : zv(a) ? bt(e) ? Df(e.content.toLowerCase()) ? r.push(a) : o.push(a) : (r.push(a), o.push(a)) : qv(a) ? o.push(a) : r.push(a);
  }
  return {
    keyModifiers: r,
    nonKeyModifiers: o,
    eventOptionModifiers: i
  };
}, _c = (e, t) => bt(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? zt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Kv = (e, t, n) => _f(e, t, n, (s) => {
  const { modifiers: r } = e;
  if (!r.length) return s;
  let { key: o, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: f } = Wv(o, r, n, e.loc);
  if (a.includes("right") && (o = _c(o, "onContextmenu")), a.includes("middle") && (o = _c(o, "onMouseup")), a.length && (i = qe(n.helper(kf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!bt(o) || Df(o.content.toLowerCase())) && (i = qe(n.helper(Cf), [
    i,
    JSON.stringify(l)
  ])), f.length) {
    const c = f.map(nn).join("");
    o = bt(o) ? de(`${o.content}${c}`, !0) : zt(["(", o, `) + "${c}"`]);
  }
  return {
    props: [Re(o, i)]
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
      Tf(e) && t.onError(
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
function Tf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Tf);
}
const Yv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (ot.NODE_ENV !== "production" && t.onError(
    jt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Xv(e, t) {
  return e === "template" ? !0 : e in wc ? wc[e].has(t) : t in Ec ? Ec[t].has(e) : !(e in xc && xc[e].has(t) || t in Nc && Nc[t].has(e));
}
const ms = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), qn = /* @__PURE__ */ new Set([]), wc = {
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
  script: qn,
  iframe: qn,
  option: qn,
  textarea: qn,
  style: qn,
  title: qn
}, Ec = {
  // sections
  html: qn,
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
  h1: ms,
  h2: ms,
  h3: ms,
  h4: ms,
  h5: ms,
  h6: ms
}, Qv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Xv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Zv = [
  Rv,
  ...ot.NODE_ENV !== "production" ? [Jv, Qv] : []
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
var Qs = {};
function ny() {
  Ed();
}
Qs.NODE_ENV !== "production" && ny();
const Sc = /* @__PURE__ */ Object.create(null);
function sy(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Qs.NODE_ENV !== "production" && Ie("invalid template option: ", e), Te;
  const n = zf(e, t), s = Sc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Qs.NODE_ENV !== "production" && !a && Ie(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const r = fe(
    {
      hoistStatic: !0,
      onError: Qs.NODE_ENV !== "production" ? i : void 0,
      onWarn: Qs.NODE_ENV !== "production" ? (a) => i(a, !0) : Te
    },
    t
  );
  !r.isCustomElement && typeof customElements < "u" && (r.isCustomElement = (a) => !!customElements.get(a));
  const { code: o } = ty(e, r);
  function i(a, f = !1) {
    const c = f ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Jf(
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
const yn = (e, t) => {
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
      var g, m, P;
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
      const h = (P = (m = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : m.settings) == null ? void 0 : P[c];
      if (h != null && h !== "")
        return h;
      try {
        const D = "--" + c.replace(/_/g, "-"), $ = getComputedStyle(document.documentElement).getPropertyValue(D).trim();
        if ($) return $;
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
    }), f = (c) => {
      !n.disabled && !n.loading && s("click", c);
    };
    return (c, u) => (x(), wt(Iu(o.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: we(a.value),
      style: je(l.value),
      onClick: f,
      onMouseenter: u[0] || (u[0] = (p) => r.value = !0),
      onMouseleave: u[1] || (u[1] = (p) => r.value = !1)
    }, {
      default: Pe(() => [
        e.loading ? (x(), C("svg", ry, u[2] || (u[2] = [
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
        xl(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, ts = /* @__PURE__ */ yn(oy, [["__scopeId", "data-v-ee93db6c"]]), iy = ["disabled"], ly = ["value", "min", "max"], ay = ["disabled"], cy = {
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
    const n = e, s = t, r = lt(), o = te({
      get: () => n.modelValue,
      set: (c) => {
        var p, h, g;
        const u = Math.max(n.min, Math.min(n.max, c));
        if (s("update:modelValue", u), s("update", u), ((g = (h = (p = r == null ? void 0 : r.vnode) == null ? void 0 : p.el) == null ? void 0 : h.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const m = r.vnode.el.parentElement, P = m.getAttribute("data-line-key");
          if (P) {
            const D = new CustomEvent("quantity-update", {
              detail: { key: P, value: u },
              bubbles: !0
            });
            m.dispatchEvent(D);
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
    }, f = (c) => {
      const u = parseInt(c.target.value) || n.min;
      o.value = u, c.target.value = o.value;
    };
    return (c, u) => (x(), C("div", {
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
        onBlur: f,
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
}, Af = /* @__PURE__ */ yn(cy, [["__scopeId", "data-v-e177cfb7"]]), uy = ["data-updating"], dy = { class: "cart-item__content flex gap-3 lg:gap-4" }, fy = { class: "cart-item__image flex-shrink-0" }, py = ["href"], hy = ["src", "alt"], my = { class: "cart-item__details flex-1 min-w-0" }, gy = { class: "cart-item__header flex justify-between gap-4 mb-3" }, vy = { class: "cart-item__info flex-1" }, yy = { class: "cart-item__title text-base lg:text-lg font-medium mb-1" }, by = ["href"], _y = {
  key: 0,
  class: "cart-item__variant text-sm text-gray-600 mb-2"
}, wy = {
  key: 1,
  class: "cart-item__properties space-y-1 mt-2"
}, Ey = { class: "cart-item__property-key font-medium" }, xy = { class: "cart-item__price cart-item__price--mobile lg:hidden text-right flex-shrink-0" }, Ny = { class: "cart-item__price-current text-base font-semibold text-gray-900 whitespace-nowrap" }, Sy = {
  key: 0,
  class: "cart-item__price-original text-sm text-gray-500 line-through"
}, ky = {
  key: 0,
  class: "cart-item__discounts space-y-2 mb-3"
}, Cy = { class: "cart-item__actions flex items-center justify-between gap-4" }, Oy = { class: "cart-item__actions-left flex items-center gap-3" }, $y = ["disabled"], Dy = {
  key: 0,
  class: "cart-item__remove-icon w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ty = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading w-5 h-5 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ay = { class: "cart-item__price cart-item__price--desktop hidden lg:block text-right flex-shrink-0" }, Vy = { class: "cart-item__price-current text-lg font-semibold text-gray-900 whitespace-nowrap" }, Iy = {
  key: 0,
  class: "cart-item__price-original text-sm text-gray-500 line-through"
}, My = {
  key: 1,
  class: "cart-item__price-savings text-xs text-green-600 font-medium mt-1"
}, Py = {
  key: 1,
  class: "text-xs text-amber-600 mt-2"
}, Ry = {
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
    }), f = te(() => {
      const h = n.item.image || "/assets/placeholder-product.svg";
      return window.getImageUrl && h !== "/assets/placeholder-product.svg" ? window.getImageUrl(h, { preset: "cart-item" }) : h;
    }), c = (h) => {
      var $, v;
      if (!h && h !== 0) return "$0.00";
      const g = (($ = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : $.money_format) || "${{amount}}", m = ((v = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : v.current) || "en", D = new Intl.NumberFormat(m, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(h));
      return g.replace("{{amount}}", D);
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
    return Ut(
      () => n.item.quantity,
      (h) => {
        r.value = h;
      }
    ), (h, g) => (x(), C("div", {
      class: "cart-item p-3 lg:p-4 border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors",
      "data-updating": o.value
    }, [
      d("div", dy, [
        d("div", fy, [
          d("a", {
            href: e.item.url,
            class: "cart-item__image-link block relative overflow-hidden rounded-lg bg-gray-100"
          }, [
            d("img", {
              src: f.value,
              alt: e.item.product_title,
              class: "cart-item__image-img w-20 h-20 lg:w-24 lg:h-24 object-cover",
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
                  class: "cart-item__title-link text-gray-900 hover:text-gray-700 transition-colors"
                }, J(e.item.product_title), 9, by)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (x(), C("p", _y, J(e.item.variant_title), 1)) : j("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (x(), C("div", wy, [
                (x(!0), C(ie, null, _e(e.item.properties, (m, P) => (x(), C("p", {
                  key: P,
                  class: "cart-item__property text-xs text-gray-600"
                }, [
                  d("span", Ey, J(P) + ":", 1),
                  Xe(" " + J(m), 1)
                ]))), 128))
              ])) : j("", !0)
            ]),
            d("div", xy, [
              d("p", Ny, J(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), C("p", Sy, J(c(e.item.original_price * e.item.quantity)), 1)) : j("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (x(), C("div", ky, [
            (x(!0), C(ie, null, _e(e.item.discounts, (m) => (x(), C("div", {
              key: m.id,
              class: "cart-item__discount flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-lg"
            }, [
              g[1] || (g[1] = d("svg", {
                class: "cart-item__discount-icon w-4 h-4 flex-shrink-0",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                d("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              Xe(" " + J(m.title) + " (-" + J(c(m.amount || m.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : j("", !0),
          d("div", Cy, [
            d("div", Oy, [
              ue(Af, {
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
              d("button", {
                type: "button",
                onClick: p,
                class: "cart-item__remove p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all",
                disabled: o.value,
                "aria-label": "Remove item from cart"
              }, [
                o.value ? (x(), C("svg", Ty, g[3] || (g[3] = [
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
                ]))) : (x(), C("svg", Dy, g[2] || (g[2] = [
                  d("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, $y)
            ]),
            d("div", Ay, [
              d("p", Vy, J(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), C("p", Iy, J(c(e.item.original_price * e.item.quantity)), 1)) : j("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), C("p", My, " Save " + J(Math.round(
                (e.item.original_price - e.item.price) / e.item.original_price * 100
              )) + "% ", 1)) : j("", !0)
            ])
          ]),
          a.value ? (x(), C("p", Py, " Only " + J(e.item.variant.inventory_quantity) + " left in stock ", 1)) : j("", !0),
          i.value ? (x(), C("p", Ry, J(i.value), 1)) : j("", !0)
        ])
      ])
    ], 8, uy));
  }
}, Ly = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, Fy = { class: "absolute inset-0 overflow-hidden" }, By = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, jy = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, Hy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, Uy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, qy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, zy = { class: "flex-1 overflow-y-auto" }, Wy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Ky = { key: 1 }, Gy = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Jy = {
  key: 0,
  class: "flex items-center gap-2"
}, Yy = {
  key: 1,
  class: "flex items-center gap-2"
}, Xy = { class: "text-sm text-blue-800" }, Qy = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, Zy = { class: "flex justify-between text-base font-medium text-gray-900" }, e1 = { class: "space-y-3" }, If = {
  __name: "CartDrawer",
  setup(e) {
    const t = ne(!1), n = ne([]), s = ne(0), r = te(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/checkout";
    }), o = te(() => {
      var m, P;
      return ((P = (m = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : m.settings) == null ? void 0 : P.free_shipping_threshold) || 50;
    }), i = te(() => {
      var g, m;
      return ((m = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : m.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var v, k, w, M;
      if (!g && g !== 0) return "$0.00";
      const m = ((v = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : v.money_format) || "${{amount}}";
      (k = Shopline == null ? void 0 : Shopline.shop) != null && k.money_with_currency_format, (w = Shopline == null ? void 0 : Shopline.shop) != null && w.currency;
      const P = ((M = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : M.current) || "en", $ = new Intl.NumberFormat(P, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return m.replace("{{amount}}", $);
    }, a = () => {
      t.value = !0, document.body.classList.add("overflow-hidden"), c();
    }, f = () => {
      t.value = !1, document.body.classList.remove("overflow-hidden");
    }, c = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, u = async ({ key: g, quantity: m }) => {
      await window.OrionCart.updateItem(g, m), c();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), c();
    }, h = (g) => {
      g.key === "Escape" && t.value && f();
    };
    return it(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", f), document.addEventListener("keydown", h);
    }), vn(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", f), document.removeEventListener("keydown", h);
    }), (g, m) => (x(), wt(Fn, { to: "body" }, [
      ue(pt, { name: "drawer" }, {
        default: Pe(() => [
          t.value ? (x(), C("div", Ly, [
            d("div", Fy, [
              ue(pt, { name: "fade" }, {
                default: Pe(() => [
                  t.value ? (x(), C("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: f
                  })) : j("", !0)
                ]),
                _: 1
              }),
              d("div", By, [
                ue(pt, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Pe(() => [
                    t.value ? (x(), C("div", jy, [
                      d("div", Hy, [
                        d("div", Uy, [
                          d("div", null, [
                            m[0] || (m[0] = d("h2", { class: "text-xl" }, "Shopping Cart", -1)),
                            n.value.length > 0 ? (x(), C("p", qy, J(n.value.length) + " " + J(n.value.length === 1 ? "item" : "items"), 1)) : j("", !0)
                          ]),
                          d("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: f
                          }, m[1] || (m[1] = [
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
                        d("div", zy, [
                          n.value.length === 0 ? (x(), C("div", Wy, [
                            m[3] || (m[3] = d("div", { class: "relative w-24 h-24 mb-6" }, [
                              d("div", { class: "absolute inset-0 bg-gray-100 rounded-full" }),
                              d("svg", {
                                class: "absolute inset-0 w-full h-full p-6 text-gray-400",
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
                            m[4] || (m[4] = d("h3", { class: "text-2xl mb-2" }, "Your cart is empty", -1)),
                            m[5] || (m[5] = d("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            ue(ts, {
                              class: "button",
                              href: "/collections",
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Pe(() => m[2] || (m[2] = [
                                Xe(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (x(), C("div", Ky, [
                            (x(!0), C(ie, null, _e(n.value, (P) => (x(), wt(Vf, {
                              key: P.key,
                              item: P,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (x(), C("div", Gy, [
                          i.value ? (x(), C("div", {
                            key: 0,
                            class: we([
                              s.value >= o.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200",
                              "p-3"
                            ]),
                            style: { "border-radius": "var(--button-radius, 8px)" }
                          }, [
                            s.value >= o.value ? (x(), C("div", Jy, m[6] || (m[6] = [
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
                              d("p", { class: "text-xs text-green-800" }, " Congratulations! You've unlocked free shipping! ", -1)
                            ]))) : (x(), C("div", Yy, [
                              m[7] || (m[7] = d("svg", {
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
                              d("p", Xy, " Add " + J(l(o.value - s.value)) + " more for free shipping! ", 1)
                            ])),
                            s.value < o.value ? (x(), C("div", Qy, [
                              d("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: je({ width: Math.min(s.value / o.value * 100, 100) + "%" })
                              }, null, 4)
                            ])) : j("", !0)
                          ], 2)) : j("", !0),
                          d("div", null, [
                            d("div", Zy, [
                              m[8] || (m[8] = d("p", { class: "uppercase font-semibold" }, "Subtotal", -1)),
                              d("p", null, J(l(s.value)), 1)
                            ]),
                            m[9] || (m[9] = d("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          d("div", e1, [
                            ue(ts, {
                              class: "button",
                              href: r.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Pe(() => m[10] || (m[10] = [
                                Xe(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            ue(ts, {
                              class: "uppercase",
                              onClick: f,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Pe(() => m[11] || (m[11] = [
                                Xe(" Continue Shopping ", -1)
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
}, t1 = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, n1 = { class: "absolute inset-0 overflow-hidden" }, s1 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, r1 = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, o1 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, i1 = { class: "flex-1 overflow-y-auto" }, l1 = { class: "px-4 py-4" }, a1 = { class: "space-y-1" }, c1 = { key: 0 }, u1 = { key: 0 }, d1 = ["onClick"], f1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, p1 = { key: 0 }, h1 = ["onClick"], m1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, g1 = ["href"], v1 = ["href"], y1 = ["href"], b1 = { class: "px-4 py-4 border-t" }, _1 = { class: "space-y-1 uppercase" }, w1 = ["href"], E1 = {
  key: 0,
  class: "px-4 py-4 border-t"
}, x1 = {
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
    }, f = () => {
      i.value = !1, document.body.classList.remove("overflow-hidden");
    }, c = (u) => {
      const p = l.value.indexOf(u);
      p > -1 ? l.value.splice(p, 1) : l.value.push(u);
    };
    return t({
      openMenu: a,
      closeMenu: f
    }), it(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", f);
      const u = (p) => {
        p.key === "Escape" && i.value && f();
      };
      document.addEventListener("keydown", u), vn(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", f), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (x(), C("div", null, [
      (x(), wt(Fn, { to: "body" }, [
        ue(pt, { name: "menu" }, {
          default: Pe(() => [
            i.value ? (x(), C("div", t1, [
              d("div", n1, [
                ue(pt, { name: "fade" }, {
                  default: Pe(() => [
                    i.value ? (x(), C("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: f
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                d("div", s1, [
                  ue(pt, {
                    name: "slide-left",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      i.value ? (x(), C("div", r1, [
                        d("div", o1, [
                          d("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[1] || (p[1] = d("h2", { class: "text-xl" }, "Menu", -1)),
                            d("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: f
                            }, p[0] || (p[0] = [
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
                          d("div", i1, [
                            d("nav", l1, [
                              d("ul", a1, [
                                s.value.length === 0 ? (x(), C("li", c1, p[2] || (p[2] = [
                                  d("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 uppercase"
                                  }, " Shop ", -1)
                                ]))) : j("", !0),
                                (x(!0), C(ie, null, _e(s.value, (h) => (x(), C("li", {
                                  key: h.id || h.title
                                }, [
                                  h.links && h.links.length ? (x(), C("div", u1, [
                                    d("button", {
                                      onClick: (g) => c(h.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50 uppercase"
                                    }, [
                                      d("span", null, J(h.title), 1),
                                      (x(), C("svg", {
                                        class: we(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            h.title
                                          )
                                        }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, p[3] || (p[3] = [
                                        d("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, d1),
                                    ue(pt, { name: "submenu" }, {
                                      default: Pe(() => [
                                        l.value.includes(h.title) ? (x(), C("ul", f1, [
                                          (x(!0), C(ie, null, _e(h.links, (g) => (x(), C("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (x(), C("div", p1, [
                                              d("button", {
                                                onClick: (m) => c(
                                                  `${h.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 uppercase"
                                              }, [
                                                d("span", null, J(g.title), 1),
                                                (x(), C("svg", {
                                                  class: we(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${h.title}-${g.title}`
                                                    )
                                                  }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, p[4] || (p[4] = [
                                                  d("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, h1),
                                              ue(pt, { name: "submenu" }, {
                                                default: Pe(() => [
                                                  l.value.includes(
                                                    `${h.title}-${g.title}`
                                                  ) ? (x(), C("ul", m1, [
                                                    (x(!0), C(ie, null, _e(g.links, (m) => (x(), C("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      d("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 !uppercase",
                                                        onClick: f
                                                      }, J(m.title), 9, g1)
                                                    ]))), 128))
                                                  ])) : j("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (x(), C("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 !uppercase",
                                              onClick: f
                                            }, J(g.title), 9, v1))
                                          ]))), 128))
                                        ])) : j("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (x(), C("a", {
                                    key: 1,
                                    href: h.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 !uppercase",
                                    onClick: f
                                  }, J(h.title), 9, y1))
                                ]))), 128))
                              ])
                            ]),
                            d("div", b1, [
                              d("div", _1, [
                                d("a", {
                                  href: r.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, p[5] || (p[5] = [
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
                                    Xe(" Account ")
                                  ], -1)
                                ]), 8, w1),
                                p[6] || (p[6] = d("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 uppercase"
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
                                    Xe(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            o.value ? (x(), C("div", E1, [
                              xl(u.$slots, "localization", {}, void 0, !0)
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
}, N1 = /* @__PURE__ */ yn(x1, [["__scopeId", "data-v-30459d66"]]), S1 = { class: "variant-picker" }, k1 = {
  key: 0,
  class: "w-12 h-12 single-variant-info mb-6 p-4 bg-gray-50 rounded-full overflow-hidden"
}, C1 = { class: "font-medium text-gray-900" }, O1 = {
  key: 1,
  class: "mt-5 space-y-3.5"
}, $1 = { class: "font-medium text-sm" }, D1 = {
  key: 0,
  class: "flex flex-wrap gap-3"
}, T1 = ["title", "aria-label", "disabled", "onClick"], A1 = ["src", "alt"], V1 = {
  key: 1,
  class: "text-xs"
}, I1 = {
  key: 1,
  class: "color-swatches-wrapper mt-2 space-x-3"
}, M1 = ["title", "aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], P1 = { style: { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", "white-space": "nowrap", "border-width": "0" } }, R1 = {
  key: 0,
  class: "color-swatch__checkmark",
  style: { position: "absolute", inset: "0", display: "flex", "align-items": "center", "justify-content": "center" }
}, L1 = {
  style: { width: "1.25rem", height: "1.25rem", filter: `drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))
                    drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.5))` },
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, F1 = {
  key: 2,
  class: "variant-buttons-wrapper mt-1.5 space-x-2"
}, B1 = ["aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], j1 = {
  key: 2,
  class: "single-variant-options"
}, H1 = { class: "text-sm font-medium text-gray-900" }, U1 = { class: "w-12 h-12 px-4 py-2 bg-gray-50 rounded-full overflow-hidden inline-block" }, q1 = { class: "text-sm font-medium text-gray-700" }, z1 = {
  key: 3,
  class: "variant-picker-empty"
}, W1 = {
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
    const n = e, s = t, r = (E, I) => {
      const A = document.getElementById("variantPicker");
      A && A.dispatchEvent(new CustomEvent(E, { detail: I, bubbles: !0 }));
    }, o = ne({}), i = ne(null), l = ne(!1), a = () => n.product && n.product.id ? n.product : window.productPageData && window.productPageData.product ? window.productPageData.product : {}, f = ne({}), c = te(() => f.value.variants || []), u = te(() => {
      if (f.value.options && f.value.options.length > 0)
        return f.value.options.map((I, A) => ({
          ...I,
          position: I.position || A + 1
        }));
      const E = [];
      if (c.value.length > 0) {
        if (c.value[0].option1) {
          const I = [
            ...new Set(c.value.map((A) => A.option1).filter(Boolean))
          ];
          E.push({
            name: "Size",
            position: 1,
            values: I
          });
        }
        if (c.value[0].option2) {
          const I = [
            ...new Set(c.value.map((A) => A.option2).filter(Boolean))
          ];
          E.push({
            name: "Color",
            position: 2,
            values: I
          });
        }
        if (c.value[0].option3) {
          const I = [
            ...new Set(c.value.map((A) => A.option3).filter(Boolean))
          ];
          E.push({
            name: "Option",
            position: 3,
            values: I
          });
        }
      }
      return E;
    }), p = te(
      () => f.value.options_with_values || u.value
    ), h = async (E = 5) => {
      for (let I = 0; I < E; I++) {
        const A = a();
        if (A && A.id)
          return f.value = A, !0;
        I < E - 1 && await new Promise((V) => setTimeout(V, 100));
      }
      return !1;
    };
    it(async () => {
      if (await h(), c.value.length > 0) {
        let E = null;
        if (n.selectedVariantId && (E = c.value.find(
          (I) => I.id == n.selectedVariantId
        )), E || (E = c.value.find((I) => I.available) || c.value[0]), E)
          if (c.value.length === 1 && u.value.length === 0)
            ss(() => {
              g(E);
            });
          else {
            if (E.option1) {
              const I = u.value.find(
                (A) => A.position === 1
              );
              I && (o.value[I.name] = E.option1);
            }
            if (E.option2) {
              const I = u.value.find(
                (A) => A.position === 2
              );
              I && (o.value[I.name] = E.option2);
            }
            if (E.option3) {
              const I = u.value.find(
                (A) => A.position === 3
              );
              I && (o.value[I.name] = E.option3);
            }
            ss(() => {
              g(E);
            });
          }
      }
    });
    const g = (E) => {
      E && (i.value = E, l.value = !0, u.value.forEach((I, A) => {
        o.value[I.name] = E[`option${A + 1}`];
      }), n.updateUrl && E && m(E), E && E.featured_media && (s("media-change", E.featured_media), r("media-change", E.featured_media)), s("variant-change", E), r("variant-change", E));
    }, m = (E) => {
      const I = new URL(window.location);
      E && E.id ? I.searchParams.set("sku", E.id) : I.searchParams.delete("sku"), window.history.replaceState({}, document.title, I.toString());
    }, P = (E, I) => {
      o.value[E] = I;
      const A = c.value.find((V) => u.value.every((L, Q) => {
        const W = o.value[L.name];
        return V[`option${Q + 1}`] === W;
      }));
      A && (g(A), n.sectionId && D(A));
    }, D = async (E) => {
      if (!(!E || !E.id))
        try {
          const I = await fetch(
            `${window.location.pathname}?sku=${E.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!I.ok) throw new Error("Failed to fetch product info");
          const A = await I.text(), L = new DOMParser().parseFromString(A, "text/html");
          s("product-info-update", {
            variant: E,
            html: L
          });
        } catch {
        }
    };
    Ut(
      () => n.selectedVariantId,
      (E) => {
        if (E) {
          const I = c.value.find((A) => A.id == E);
          I && g(I);
        }
      }
    );
    const $ = (E, I) => o.value[E] === I, v = (E, I) => {
      const A = u.value.findIndex(
        (V) => V.name === E
      );
      return c.value.some((V) => {
        const L = V[`option${A + 1}`] === I, Q = u.value.every((W, he) => {
          if (W.name === E) return !0;
          const We = o.value[W.name];
          return We ? V[`option${he + 1}`] === We : !0;
        });
        return L && Q && V.available;
      });
    }, k = (E) => {
      if (!E) return !1;
      const I = E.toLowerCase();
      return I === "color" || I === "colour" || I.includes("color") || I.includes("colour");
    }, w = (E) => {
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
      }[E.toLowerCase()];
      return A || (E.startsWith("#") ? E : "#E5E7EB");
    }, M = (E) => p.value.some(
      (I) => I.name === E.name && I.values_images && I.values_images.length > 0
    ), N = (E) => {
      const I = p.value.find(
        (A) => A.name === E.name
      );
      return !I || !I.values_images ? E.values.map((A) => ({ value: A, image: null })) : I.values_images;
    }, _ = (E, I = 100) => E ? typeof E == "string" ? E : E.src ? E.src : "" : "", y = (E, I) => {
      const A = $(E, I), V = v(E, I);
      return {
        padding: "0.5rem 1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: A ? "rgb(17 24 39)" : "rgb(209 213 219)",
        borderRadius: "var(--button-radius, 0.375rem)",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        color: A ? "rgb(255 255 255)" : "rgb(55 65 81)",
        backgroundColor: A ? "rgb(17 24 39)" : "rgb(255 255 255)",
        transition: "all 200ms",
        cursor: V ? "pointer" : "not-allowed",
        opacity: V ? "1" : "0.3",
        textDecoration: V ? "none" : "line-through",
        display: "inline-block",
        textAlign: "center",
        userSelect: "none"
      };
    }, O = (E) => {
      const I = $("Color", E), A = v("Color", E), V = w(E), L = V.toLowerCase() === "#ffffff" || E.toLowerCase() === "white";
      return {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        borderWidth: I ? "3px" : "2px",
        borderStyle: "solid",
        borderColor: I ? "rgb(17 24 39)" : "rgb(229 231 235)",
        backgroundColor: V,
        position: "relative",
        flexShrink: "0",
        overflow: "hidden",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: A ? "pointer" : "not-allowed",
        opacity: A ? "1" : "0.4",
        boxShadow: I ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        transform: I ? "scale(1.1)" : "scale(1)"
      };
    }, R = (E, I, A) => {
      const V = $("Color", I);
      v("Color", I) && (A ? (E.target.style.transform = V ? "scale(1.1)" : "scale(1.05)", E.target.style.boxShadow = V ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)") : (E.target.style.transform = V ? "scale(1.1)" : "scale(1)", E.target.style.boxShadow = V ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"));
    };
    return (E, I) => (x(), C("div", S1, [
      c.value.length === 1 && u.value.length === 0 && c.value[0].title && c.value[0].title !== "Default" && c.value[0].title !== "Default Title" && c.value[0].title.toLowerCase() !== "default" ? (x(), C("div", k1, [
        I[0] || (I[0] = d("div", { class: "text-sm text-gray-600 mb-2" }, "Selected Option:", -1)),
        d("div", C1, J(c.value[0].title), 1)
      ])) : u.value.length > 0 ? (x(), C("div", O1, [
        (x(!0), C(ie, null, _e(u.value, (A) => (x(), C("div", {
          key: A.name,
          class: "variant-option"
        }, [
          d("div", $1, J(A.name || "Option"), 1),
          M(A) ? (x(), C("div", D1, [
            (x(!0), C(ie, null, _e(N(A), (V, L) => (x(), C("button", {
              key: V.value,
              type: "button",
              class: we([
                "variant-image-button",
                $(A.name, V.value) ? "variant-image-button--selected" : "",
                v(A.name, V.value) ? "" : "variant-image-button--unavailable"
              ]),
              title: V.value,
              "aria-label": `Select ${A.name} ${V.value}`,
              disabled: !v(A.name, V.value),
              onClick: (Q) => P(A.name, V.value)
            }, [
              V.image ? (x(), C("img", {
                key: 0,
                src: _(V.image, 100),
                alt: V.value,
                class: "w-full h-full object-cover"
              }, null, 8, A1)) : (x(), C("span", V1, J(V.value), 1))
            ], 10, T1))), 128))
          ])) : k(A.name) ? (x(), C("div", I1, [
            (x(!0), C(ie, null, _e(A.values, (V) => (x(), C("button", {
              key: V,
              type: "button",
              class: we([
                "color-swatch",
                $(A.name, V) ? "color-swatch--selected" : "",
                v(A.name, V) ? "" : "color-swatch--unavailable"
              ]),
              style: je(O(V)),
              title: V,
              "aria-label": `Select ${A.name} ${V}`,
              disabled: !v(A.name, V),
              onClick: qt((L) => P(A.name, V), ["stop"]),
              onMouseenter: (L) => R(L, V, !0),
              onMouseleave: (L) => R(L, V, !1)
            }, [
              d("span", P1, J(V), 1),
              $(A.name, V) ? (x(), C("span", R1, [
                (x(), C("svg", L1, I[1] || (I[1] = [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd",
                    style: { fill: "white", stroke: "black", "stroke-width": "0.5px", "paint-order": "stroke" }
                  }, null, -1)
                ])))
              ])) : j("", !0)
            ], 46, M1))), 128))
          ])) : (x(), C("div", F1, [
            (x(!0), C(ie, null, _e(A.values, (V) => (x(), C("button", {
              key: V,
              type: "button",
              class: we(["flex w-12 h-12 text-center justify-center items-center rounded-full overflow-hidden", [
                "variant-button",
                $(A.name, V) ? "variant-button--selected" : "",
                v(A.name, V) ? "" : "variant-button--unavailable"
              ]]),
              style: je(y(A.name, V)),
              "aria-label": `Select ${A.name} ${V}`,
              disabled: !v(A.name, V),
              onClick: qt((L) => P(A.name, V), ["stop"]),
              onMouseenter: (L) => L.target.style.backgroundColor = $(
                A.name,
                V
              ) ? "rgb(31 41 55)" : "rgb(249 250 251)",
              onMouseleave: (L) => L.target.style.backgroundColor = $(
                A.name,
                V
              ) ? "rgb(17 24 39)" : "rgb(255 255 255)"
            }, J(V), 47, B1))), 128))
          ]))
        ]))), 128))
      ])) : c.value.length === 1 && u.value.length > 0 ? (x(), C("div", j1, [
        (x(!0), C(ie, null, _e(u.value, (A) => (x(), C("div", {
          key: A.name
        }, [
          d("h3", H1, J(A.name) + ":", 1),
          d("div", U1, [
            d("span", q1, J(c.value[0][`option${u.value.indexOf(A) + 1}`] || A.values[0]), 1)
          ])
        ]))), 128))
      ])) : j("", !0),
      c.value.length === 0 && u.value.length === 0 && !l.value ? (x(), C("div", z1, I[2] || (I[2] = [
        d("div", { class: "p-4 bg-gray-50 border border-gray-200 rounded-md" }, [
          d("p", { class: "text-sm text-gray-600" }, "Loading variant options...")
        ], -1)
      ]))) : j("", !0)
    ]));
  }
}, K1 = ["href"], G1 = ["src", "alt"], J1 = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Y1 = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, X1 = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Q1 = { class: "p-4 flex-1 flex flex-col" }, Z1 = { class: "flex-1" }, eb = {
  key: 0,
  class: "mb-3"
}, tb = { class: "flex gap-1.5 flex-wrap" }, nb = ["onClick", "title"], sb = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, rb = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, ob = { class: "text-2xl line-clamp-2 mb-2" }, ib = ["href"], lb = {
  key: 2,
  class: "flex items-center gap-1 mb-2"
}, ab = { class: "flex" }, cb = { class: "flex items-baseline gap-2 mb-4" }, ub = { class: "text-xl font-bold text-gray-900" }, db = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, fb = { class: "mt-auto" }, pb = ["disabled"], hb = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, mb = { key: 1 }, gb = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, vb = {
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
      var A, V, L;
      return ((L = (V = (A = window.Shopline) == null ? void 0 : A.theme) == null ? void 0 : V.settings) == null ? void 0 : L.card_show_vendor) !== !1;
    }), s = te(() => {
      var A, V, L;
      return ((L = (V = (A = window.Shopline) == null ? void 0 : A.theme) == null ? void 0 : V.settings) == null ? void 0 : L.card_show_reviews) !== !1;
    }), r = e, o = t, i = ne(""), l = ne(!1), a = ne(!1), f = ne(!1), c = ne(!1), u = te(() => r.product ? r.product : {
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
      const A = u.value.handle;
      return u.value.url || (A ? `/products/${A}` : "#");
    }), h = te(() => {
      var V, L, Q;
      let A = null;
      return l.value && ((V = u.value.images) != null && V[1]) ? A = u.value.images[1].src : A = ((Q = (L = u.value.images) == null ? void 0 : L[0]) == null ? void 0 : Q.src) || u.value.featured_image || u.value.image || "/placeholder.jpg", window.getImageUrl && A !== "/placeholder.jpg" ? window.getImageUrl(A, { preset: "product-card" }) : A;
    }), g = te(() => {
      var A;
      return (A = u.value.options) == null ? void 0 : A.some(
        (V) => {
          var L, Q;
          return ((L = V.name) == null ? void 0 : L.toLowerCase().includes("color")) || ((Q = V.name) == null ? void 0 : Q.toLowerCase().includes("colour"));
        }
      );
    }), m = te(() => {
      var V;
      const A = (V = u.value.options) == null ? void 0 : V.find(
        (L) => {
          var Q, W;
          return ((Q = L.name) == null ? void 0 : Q.toLowerCase().includes("color")) || ((W = L.name) == null ? void 0 : W.toLowerCase().includes("colour"));
        }
      );
      return (A == null ? void 0 : A.values) || [];
    }), P = te(() => u.value.price || 0), D = te(() => u.value.compare_at_price || 0), $ = te(() => u.value.available && D.value > P.value), v = te(() => $.value ? Math.round((D.value - P.value) / D.value * 100) : 0), k = te(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: c.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), w = te(() => ({
      ...k.value,
      backgroundColor: "rgb(var(--color-card-background, 255, 255, 255))"
    })), M = te(() => {
      var A, V, L;
      return ((L = (V = (A = window.Shopline) == null ? void 0 : A.theme) == null ? void 0 : V.settings) == null ? void 0 : L.show_product_card_wishlist) !== !1;
    }), N = (A) => `$${(A / 100).toFixed(2)}`, _ = (A) => {
      const V = {
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
      }, L = A.toLowerCase();
      return V[L] || `#${L.replace("#", "")}`;
    }, y = () => {
      var A;
      ((A = u.value.images) == null ? void 0 : A.length) > 1 && (l.value = !0);
    }, O = () => {
      l.value = !1;
    }, R = (A) => {
      i.value = A.value;
    }, E = () => {
      f.value = !f.value;
    }, I = async () => {
      var A, V, L, Q;
      a.value = !0;
      try {
        const W = (V = (A = u.value.variants) == null ? void 0 : A[0]) == null ? void 0 : V.id;
        if (!W)
          throw console.error("No variant ID found for product:", u.value), new Error("No variant ID found");
        const he = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: W,
              quantity: 1
            }]
          })
        });
        if (!he.ok)
          throw new Error("Failed to add to cart");
        const We = await he.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((Q = (L = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : L.settings) == null ? void 0 : Q.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", o("add-to-cart", { variantId: W, quantity: 1 });
      } catch (W) {
        console.error("Error adding to cart:", W);
      } finally {
        a.value = !1;
      }
    };
    return (A, V) => (x(), C("div", {
      class: "product-card group relative transition-all duration-300 overflow-hidden h-full flex flex-col",
      style: je(w.value),
      onMouseenter: V[2] || (V[2] = (L) => c.value = !0),
      onMouseleave: V[3] || (V[3] = (L) => c.value = !1)
    }, [
      d("a", {
        href: p.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        h.value ? (x(), C("img", {
          key: 0,
          src: h.value,
          alt: u.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: y,
          onMouseleave: O
        }, null, 40, G1)) : (x(), C("div", J1, V[4] || (V[4] = [
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
        $.value ? (x(), C("div", Y1, " -" + J(v.value) + "% ", 1)) : j("", !0),
        u.value.available && M.value ? (x(), C("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: qt(E, ["prevent"])
        }, [
          (x(), C("svg", {
            class: we(["w-5 h-5", f.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, V[5] || (V[5] = [
            d("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : j("", !0),
        u.value.available ? j("", !0) : (x(), C("div", X1, V[6] || (V[6] = [
          d("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, K1),
      d("div", Q1, [
        d("div", Z1, [
          g.value ? (x(), C("div", eb, [
            d("div", tb, [
              (x(!0), C(ie, null, _e(m.value, (L) => (x(), C("button", {
                key: L.value,
                onClick: (Q) => R(L),
                title: L.value,
                class: we([
                  "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                  i.value === L.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
                ]),
                style: je({ backgroundColor: _(L.value) })
              }, [
                i.value === L.value ? (x(), C("span", sb, V[7] || (V[7] = [
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
              ], 14, nb))), 128))
            ])
          ])) : j("", !0),
          n.value && u.value.vendor ? (x(), C("p", rb, J(u.value.vendor), 1)) : j("", !0),
          d("h3", ob, [
            d("a", { href: p.value }, J(u.value.title || "Untitled"), 9, ib)
          ]),
          s.value ? (x(), C("div", lb, [
            d("div", ab, [
              (x(), C(ie, null, _e(5, (L) => d("svg", {
                key: L,
                class: we(["w-4 h-4", L <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
                viewBox: "0 0 20 20"
              }, V[8] || (V[8] = [
                d("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
              ]), 2)), 64))
            ]),
            V[9] || (V[9] = d("span", { class: "text-xs text-gray-500" }, "(24)", -1))
          ])) : j("", !0),
          d("div", cb, [
            d("span", ub, J(N(P.value)), 1),
            D.value > P.value ? (x(), C("span", db, J(N(D.value)), 1)) : j("", !0)
          ])
        ]),
        d("div", fb, [
          u.value.available ? (x(), C("button", {
            key: 0,
            onClick: I,
            disabled: a.value,
            class: "button w-full px-4 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            style: {
              backgroundColor: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
              borderRadius: "var(--button-radius)"
            },
            onMouseenter: V[0] || (V[0] = (L) => L.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
            onMouseleave: V[1] || (V[1] = (L) => L.target.style.backgroundColor = "var(--button-primary-bg)")
          }, [
            a.value ? j("", !0) : (x(), C("svg", hb, V[10] || (V[10] = [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              }, null, -1)
            ]))),
            a.value ? (x(), C("svg", gb, V[11] || (V[11] = [
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
            ]))) : (x(), C("span", mb, "Add to Cart"))
          ], 40, pb)) : j("", !0)
        ])
      ])
    ], 36));
  }
}, yb = { class: "collection-filters" }, bb = { class: "lg:hidden mb-4" }, _b = { class: "space-y-6" }, wb = {
  key: 0,
  class: "filter-group"
}, Eb = { class: "filter-group" }, xb = { class: "flex items-center" }, Nb = { class: "filter-group" }, Sb = { class: "space-y-2" }, kb = { class: "flex items-center" }, Cb = { class: "flex items-center" }, Ob = { class: "flex items-center" }, $b = { class: "flex items-center" }, Db = {
  key: 1,
  class: "filter-group"
}, Tb = { class: "space-y-2" }, Ab = ["value"], Vb = { class: "ml-2 text-sm" }, Ib = {
  key: 2,
  class: "filter-group"
}, Mb = { class: "space-y-2" }, Pb = ["value"], Rb = { class: "ml-2 text-sm" }, Lb = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, Fb = { class: "h-full flex flex-col" }, Bb = { class: "flex items-center justify-between p-4 border-b" }, jb = { class: "flex-1 overflow-y-auto p-4" }, Hb = { class: "space-y-6" }, Ub = {
  key: 0,
  class: "filter-group"
}, qb = { class: "filter-group" }, zb = { class: "flex items-center" }, Wb = { class: "filter-group" }, Kb = { class: "space-y-2" }, Gb = { class: "flex items-center" }, Jb = { class: "flex items-center" }, Yb = { class: "flex items-center" }, Xb = { class: "flex items-center" }, Qb = {
  key: 1,
  class: "filter-group"
}, Zb = { class: "space-y-2" }, e_ = ["value"], t_ = { class: "ml-2 text-sm" }, n_ = {
  key: 2,
  class: "filter-group"
}, s_ = { class: "space-y-2" }, r_ = ["value"], o_ = { class: "ml-2 text-sm" }, i_ = {
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
    const n = e, s = t, r = ne("manual"), o = ne([]), i = ne([]), l = ne([]), a = ne(!1), f = ne(!1), c = () => {
      const M = new URLSearchParams(window.location.search);
      o.value = [], i.value = [], l.value = [], a.value = !1, r.value = M.get("sort_by") || "manual", M.get("filter.v.availability") === "1" && (a.value = !0);
      const N = M.getAll("filter.p.product_type");
      N.length > 0 && (i.value = N);
      const _ = M.getAll("filter.p.vendor");
      _.length > 0 && (l.value = _);
      const y = M.getAll("filter.price.range");
      y.length > 0 && (o.value = y);
    }, u = () => {
      c();
    }, p = te(() => {
      var N, _;
      const M = ((_ = (N = window.Shopline) == null ? void 0 : N.theme) == null ? void 0 : _.settings) || {};
      return {
        "--card-radius": M.card_border_radius ? `${M.card_border_radius}px` : "8px"
      };
    }), h = te(() => {
      const M = /* @__PURE__ */ new Set();
      return n.products.forEach((N) => {
        N.product_type && M.add(N.product_type);
      }), Array.from(M).sort();
    }), g = te(() => {
      const M = /* @__PURE__ */ new Set();
      return n.products.forEach((N) => {
        N.vendor && M.add(N.vendor);
      }), Array.from(M).sort();
    }), m = te(() => o.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), P = () => {
      const M = new URL(window.location.href);
      r.value === "manual" ? M.searchParams.delete("sort_by") : M.searchParams.set("sort_by", r.value), window.location.href = M.toString();
    }, D = () => {
      f.value || $(), w();
    }, $ = () => {
      const M = new URLSearchParams(window.location.search), N = [];
      for (const [y] of M)
        y.startsWith("filter.") && N.push(y);
      N.forEach((y) => {
        for (; M.has(y); )
          M.delete(y);
      }), a.value && M.set("filter.v.availability", "1"), o.value.length > 0 && o.value.forEach((y) => {
        M.append("filter.price.range", y);
      }), i.value.length > 0 && i.value.forEach((y) => {
        M.append("filter.p.product_type", y);
      }), l.value.length > 0 && l.value.forEach((y) => {
        M.append("filter.p.vendor", y);
      });
      const _ = `${window.location.pathname}${M.toString() ? "?" + M.toString() : ""}`;
      window.location.href = _;
    }, v = () => {
      o.value = [], i.value = [], l.value = [], a.value = !1;
      const M = new URLSearchParams(window.location.search), N = [];
      for (const [O] of M)
        O.startsWith("filter.") && N.push(O);
      N.forEach((O) => M.delete(O));
      const _ = M.get("sort_by"), y = `${window.location.pathname}${_ ? "?sort_by=" + _ : ""}`;
      window.location.href = y;
    }, k = () => {
      f.value = !1, $();
    }, w = () => {
      s("update-filters", {
        sort: r.value,
        priceRanges: o.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return it(() => {
      c(), window.addEventListener("popstate", u);
    }), Bs(() => {
      window.removeEventListener("popstate", u);
    }), (M, N) => (x(), C("div", yb, [
      d("div", bb, [
        d("button", {
          onClick: N[0] || (N[0] = (_) => f.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, N[20] || (N[20] = [
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
        style: je(p.value)
      }, [
        d("div", _b, [
          e.showSort ? (x(), C("div", wb, [
            N[22] || (N[22] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(d("select", {
              "onUpdate:modelValue": N[1] || (N[1] = (_) => r.value = _),
              onChange: P,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, N[21] || (N[21] = [
              Pn('<option value="manual" data-v-633cc769>Featured</option><option value="best-selling" data-v-633cc769>Best Selling</option><option value="title-ascending" data-v-633cc769>Alphabetically, A-Z</option><option value="title-descending" data-v-633cc769>Alphabetically, Z-A</option><option value="price-ascending" data-v-633cc769>Price, low to high</option><option value="price-descending" data-v-633cc769>Price, high to low</option><option value="created-ascending" data-v-633cc769>Date, old to new</option><option value="created-descending" data-v-633cc769>Date, new to old</option>', 8)
            ]), 544), [
              [Ts, r.value]
            ])
          ])) : j("", !0),
          d("div", Eb, [
            N[24] || (N[24] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            d("label", xb, [
              $e(d("input", {
                type: "checkbox",
                "onUpdate:modelValue": N[2] || (N[2] = (_) => a.value = _),
                onChange: D,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, a.value]
              ]),
              N[23] || (N[23] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          d("div", Nb, [
            N[29] || (N[29] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            d("div", Sb, [
              d("label", kb, [
                $e(d("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": N[3] || (N[3] = (_) => o.value = _),
                  onChange: D,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, o.value]
                ]),
                N[25] || (N[25] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              d("label", Cb, [
                $e(d("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": N[4] || (N[4] = (_) => o.value = _),
                  onChange: D,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, o.value]
                ]),
                N[26] || (N[26] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              d("label", Ob, [
                $e(d("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": N[5] || (N[5] = (_) => o.value = _),
                  onChange: D,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, o.value]
                ]),
                N[27] || (N[27] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              d("label", $b, [
                $e(d("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": N[6] || (N[6] = (_) => o.value = _),
                  onChange: D,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, o.value]
                ]),
                N[28] || (N[28] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          h.value.length > 0 ? (x(), C("div", Db, [
            N[30] || (N[30] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            d("div", Tb, [
              (x(!0), C(ie, null, _e(h.value, (_) => (x(), C("label", {
                key: _,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: _,
                  "onUpdate:modelValue": N[7] || (N[7] = (y) => i.value = y),
                  onChange: D,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, Ab), [
                  [Le, i.value]
                ]),
                d("span", Vb, J(_), 1)
              ]))), 128))
            ])
          ])) : j("", !0),
          g.value.length > 0 ? (x(), C("div", Ib, [
            N[31] || (N[31] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            d("div", Mb, [
              (x(!0), C(ie, null, _e(g.value, (_) => (x(), C("label", {
                key: _,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: _,
                  "onUpdate:modelValue": N[8] || (N[8] = (y) => l.value = y),
                  onChange: D,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, Pb), [
                  [Le, l.value]
                ]),
                d("span", Rb, J(_), 1)
              ]))), 128))
            ])
          ])) : j("", !0),
          m.value ? (x(), C("button", {
            key: 3,
            onClick: v,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : j("", !0)
        ])
      ], 4),
      (x(), wt(Fn, { to: "body" }, [
        f.value ? (x(), C("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: N[19] || (N[19] = qt((_) => f.value = !1, ["self"]))
        }, [
          d("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: N[9] || (N[9] = (_) => f.value = !1)
          }),
          d("div", Lb, [
            d("div", Fb, [
              d("div", Bb, [
                N[33] || (N[33] = d("h2", { class: "text-lg" }, "Filters", -1)),
                d("button", {
                  onClick: N[10] || (N[10] = (_) => f.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, N[32] || (N[32] = [
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
              d("div", jb, [
                d("div", Hb, [
                  e.showSort ? (x(), C("div", Ub, [
                    N[35] || (N[35] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(d("select", {
                      "onUpdate:modelValue": N[11] || (N[11] = (_) => r.value = _),
                      onChange: P,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, N[34] || (N[34] = [
                      d("option", { value: "manual" }, "Featured", -1),
                      d("option", { value: "best-selling" }, "Best Selling", -1),
                      d("option", { value: "title-ascending" }, "Alphabetically, A-Z", -1),
                      d("option", { value: "title-descending" }, "Alphabetically, Z-A", -1),
                      d("option", { value: "price-ascending" }, "Price, low to high", -1),
                      d("option", { value: "price-descending" }, "Price, high to low", -1),
                      d("option", { value: "created-ascending" }, "Date, old to new", -1),
                      d("option", { value: "created-descending" }, "Date, new to old", -1)
                    ]), 544), [
                      [Ts, r.value]
                    ])
                  ])) : j("", !0),
                  d("div", qb, [
                    N[37] || (N[37] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    d("label", zb, [
                      $e(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": N[12] || (N[12] = (_) => a.value = _),
                        onChange: D,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, a.value]
                      ]),
                      N[36] || (N[36] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  d("div", Wb, [
                    N[42] || (N[42] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    d("div", Kb, [
                      d("label", Gb, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": N[13] || (N[13] = (_) => o.value = _),
                          onChange: D,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, o.value]
                        ]),
                        N[38] || (N[38] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      d("label", Jb, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": N[14] || (N[14] = (_) => o.value = _),
                          onChange: D,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, o.value]
                        ]),
                        N[39] || (N[39] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      d("label", Yb, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": N[15] || (N[15] = (_) => o.value = _),
                          onChange: D,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, o.value]
                        ]),
                        N[40] || (N[40] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      d("label", Xb, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": N[16] || (N[16] = (_) => o.value = _),
                          onChange: D,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, o.value]
                        ]),
                        N[41] || (N[41] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  h.value.length > 0 ? (x(), C("div", Qb, [
                    N[43] || (N[43] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    d("div", Zb, [
                      (x(!0), C(ie, null, _e(h.value, (_) => (x(), C("label", {
                        key: _,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: _,
                          "onUpdate:modelValue": N[17] || (N[17] = (y) => i.value = y),
                          onChange: D,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, e_), [
                          [Le, i.value]
                        ]),
                        d("span", t_, J(_), 1)
                      ]))), 128))
                    ])
                  ])) : j("", !0),
                  g.value.length > 0 ? (x(), C("div", n_, [
                    N[44] || (N[44] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    d("div", s_, [
                      (x(!0), C(ie, null, _e(g.value, (_) => (x(), C("label", {
                        key: _,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: _,
                          "onUpdate:modelValue": N[18] || (N[18] = (y) => l.value = y),
                          onChange: D,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, r_), [
                          [Le, l.value]
                        ]),
                        d("span", o_, J(_), 1)
                      ]))), 128))
                    ])
                  ])) : j("", !0),
                  m.value ? (x(), C("button", {
                    key: 3,
                    onClick: v,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : j("", !0)
                ])
              ]),
              d("div", { class: "p-4 border-t" }, [
                d("button", {
                  onClick: k,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, Mf = /* @__PURE__ */ yn(i_, [["__scopeId", "data-v-633cc769"]]), l_ = { class: "collection-grid" }, a_ = {
  key: 0,
  class: "mb-8"
}, c_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, u_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, d_ = { class: "mt-4 flex items-center justify-between" }, f_ = { class: "text-sm text-secondary-600" }, p_ = {
  key: 0,
  class: "lg:hidden"
}, h_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, m_ = {
  key: 0,
  class: "lg:col-span-1"
}, g_ = ["products"], v_ = {
  key: 1,
  class: "text-center py-12"
}, y_ = ["product"], b_ = {
  key: 3,
  class: "mt-8"
}, __ = {
  key: 0,
  class: "inline-flex items-center"
}, w_ = {
  key: 1,
  class: "text-center"
}, E_ = ["disabled"], x_ = { key: 0 }, N_ = { key: 1 }, S_ = {
  key: 2,
  class: "flex items-center justify-between"
}, k_ = { class: "flex-1 flex justify-between sm:hidden" }, C_ = ["disabled"], O_ = ["disabled"], $_ = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, D_ = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, T_ = ["disabled"], A_ = ["onClick"], V_ = ["disabled"], I_ = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, M_ = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, P_ = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, R_ = { class: "text-lg font-medium text-secondary-900" }, L_ = {
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
    const t = e, n = ne(!1), s = ne(!1), r = ne(t.currentPage), o = ne(t.products.length), i = ne("manual"), l = ne({}), a = ne(null), f = ne(null), c = te(() => {
      const y = Number(t.columnsMobile), O = t.columnsDesktop, R = y === 1 ? "grid-cols-1" : "grid-cols-2", E = O <= 3 ? `md:grid-cols-${O}` : "md:grid-cols-3", I = `lg:grid-cols-${O}`;
      return `grid ${R} ${E} ${I} gap-4 lg:gap-6`;
    }), u = te(() => {
      var R, E, I;
      let y = [...t.products];
      switch (l.value.inStockOnly && (y = y.filter((A) => A.available)), ((R = l.value.priceRanges) == null ? void 0 : R.length) > 0 && (y = y.filter((A) => {
        const V = A.price / 100;
        return l.value.priceRanges.some((L) => L === "0-50" ? V < 50 : L === "50-100" ? V >= 50 && V < 100 : L === "100-200" ? V >= 100 && V < 200 : L === "200+" ? V >= 200 : !1);
      })), ((E = l.value.types) == null ? void 0 : E.length) > 0 && (y = y.filter((A) => l.value.types.includes(A.product_type))), ((I = l.value.vendors) == null ? void 0 : I.length) > 0 && (y = y.filter((A) => l.value.vendors.includes(A.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          y.sort((A, V) => A.price - V.price);
          break;
        case "price-descending":
          y.sort((A, V) => V.price - A.price);
          break;
        case "title-ascending":
          y.sort((A, V) => A.title.localeCompare(V.title));
          break;
        case "title-descending":
          y.sort((A, V) => V.title.localeCompare(A.title));
          break;
        case "created-ascending":
          y.sort((A, V) => new Date(A.created_at) - new Date(V.created_at));
          break;
        case "created-descending":
          y.sort((A, V) => new Date(V.created_at) - new Date(A.created_at));
          break;
      }
      return y;
    }), p = te(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, o.value);
      const y = (r.value - 1) * t.productsPerPage, O = y + t.productsPerPage;
      return u.value.slice(y, O);
    }), h = te(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), g = te(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : o.value < u.value.length), m = te(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - o.value)), P = te(() => {
      const y = [], O = h.value, R = r.value;
      if (O <= 7)
        for (let E = 1; E <= O; E++)
          y.push(E);
      else if (R <= 3) {
        for (let E = 1; E <= 5; E++)
          y.push(E);
        y.push("..."), y.push(O);
      } else if (R >= O - 2) {
        y.push(1), y.push("...");
        for (let E = O - 4; E <= O; E++)
          y.push(E);
      } else {
        y.push(1), y.push("...");
        for (let E = R - 1; E <= R + 1; E++)
          y.push(E);
        y.push("..."), y.push(O);
      }
      return y.filter((E) => E === "..." || E >= 1 && E <= O);
    }), D = (y) => {
      l.value = y, r.value = 1, o.value = t.productsPerPage;
    }, $ = () => {
      r.value = 1, o.value = t.productsPerPage;
    }, v = () => {
      s.value = !0, setTimeout(() => {
        o.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, k = async (y) => {
      var R;
      const O = new FormData();
      O.append("id", y.variants[0].id), O.append("quantity", "1"), await ((R = window.OrionCart) == null ? void 0 : R.addItem(O)), console.log("Added to cart:", y.title);
    }, w = (y) => {
      a.value = y;
    }, M = () => {
      a.value = null;
    };
    let N = null;
    const _ = () => {
      !t.enableInfiniteScroll || !f.value || (N = new IntersectionObserver(
        (y) => {
          y[0].isIntersecting && g.value && !s.value && v();
        },
        { threshold: 0.1 }
      ), N.observe(f.value));
    };
    return it(() => {
      _();
    }), vn(() => {
      N && N.disconnect();
    }), Ut(() => t.enableInfiniteScroll, () => {
      _();
    }), (y, O) => (x(), C("div", l_, [
      e.showHeader ? (x(), C("div", a_, [
        d("h1", c_, J(e.collectionTitle), 1),
        e.collectionDescription ? (x(), C("div", u_, J(e.collectionDescription), 1)) : j("", !0),
        d("div", d_, [
          d("p", f_, J(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (x(), C("div", p_, [
            $e(d("select", {
              "onUpdate:modelValue": O[0] || (O[0] = (R) => i.value = R),
              onChange: $,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, O[5] || (O[5] = [
              Pn('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ts, i.value]
            ])
          ])) : j("", !0)
        ])
      ])) : j("", !0),
      d("div", h_, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (x(), C("aside", m_, [
          d("collection-filters", {
            products: e.products,
            onUpdateFilters: D
          }, null, 40, g_)
        ])) : j("", !0),
        d("div", {
          class: we(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (x(), C("div", {
            key: 0,
            class: we(c.value)
          }, [
            (x(), C(ie, null, _e(6, (R) => d("div", {
              key: R,
              class: "animate-pulse"
            }, O[6] || (O[6] = [
              d("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              d("div", { class: "mt-4 space-y-2" }, [
                d("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                d("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (x(), C("div", v_, O[7] || (O[7] = [
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
          ]))) : (x(), C("div", {
            key: 2,
            class: we(c.value)
          }, [
            (x(!0), C(ie, null, _e(p.value, (R) => (x(), C("product-card", {
              key: R.id,
              product: R,
              onQuickAdd: k,
              onQuickView: w
            }, null, 40, y_))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (x(), C("div", b_, [
            e.enableInfiniteScroll ? (x(), C("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: f,
              class: "text-center py-4"
            }, [
              s.value ? (x(), C("div", __, O[8] || (O[8] = [
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
                Xe(" Loading more products... ", -1)
              ]))) : j("", !0)
            ], 512)) : g.value ? (x(), C("div", w_, [
              d("button", {
                onClick: v,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (x(), C("span", x_, "Loading...")) : (x(), C("span", N_, "Load More (" + J(m.value) + " remaining)", 1))
              ], 8, E_)
            ])) : j("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (x(), C("nav", S_, [
              d("div", k_, [
                d("button", {
                  onClick: O[1] || (O[1] = (R) => r.value--),
                  disabled: r.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, C_),
                d("button", {
                  onClick: O[2] || (O[2] = (R) => r.value++),
                  disabled: r.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, O_)
              ]),
              d("div", $_, [
                d("div", null, [
                  d("nav", D_, [
                    d("button", {
                      onClick: O[3] || (O[3] = (R) => r.value--),
                      disabled: r.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, O[9] || (O[9] = [
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
                    ]), 8, T_),
                    (x(!0), C(ie, null, _e(P.value, (R) => (x(), C("button", {
                      key: R,
                      onClick: (E) => r.value = R,
                      class: we([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        r.value === R ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, J(R), 11, A_))), 128)),
                    d("button", {
                      onClick: O[4] || (O[4] = (R) => r.value++),
                      disabled: r.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, O[10] || (O[10] = [
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
                    ]), 8, V_)
                  ])
                ])
              ])
            ])) : j("", !0)
          ])) : j("", !0)
        ], 2)
      ]),
      (x(), wt(Fn, { to: "body" }, [
        a.value ? (x(), C("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: qt(M, ["self"])
        }, [
          d("div", I_, [
            d("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: M
            }),
            d("div", M_, [
              d("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                d("button", {
                  onClick: M,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  style: { borderRadius: "var(--card-radius, 8px)" }
                }, O[11] || (O[11] = [
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
              d("div", P_, [
                d("h3", R_, J(a.value.title), 1),
                O[12] || (O[12] = d("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, F_ = { class: "collection-sort-wrapper" }, B_ = {
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
    return it(() => {
      const l = s().get("sort_by");
      l && (n.value = l);
    }), (i, l) => (x(), C("div", F_, [
      $e(d("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: o,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        Pn('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Ts, n.value]
      ])
    ]));
  }
}, j_ = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, H_ = { class: "absolute inset-0 overflow-hidden" }, U_ = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, q_ = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, z_ = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, W_ = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, K_ = { class: "h-12 flex flex-col justify-between" }, G_ = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, J_ = { class: "mb-6" }, Y_ = { class: "flex items-center cursor-pointer" }, X_ = { class: "mb-6" }, Q_ = { class: "space-y-2" }, Z_ = ["value"], ew = { class: "ml-2 text-sm" }, tw = {
  key: 0,
  class: "mb-6"
}, nw = { class: "space-y-2" }, sw = ["value"], rw = { class: "ml-2 text-sm" }, ow = {
  key: 1,
  class: "mb-6"
}, iw = { class: "space-y-2" }, lw = ["value"], aw = { class: "ml-2 text-sm" }, cw = {
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
    }, f = () => {
      n.value = !1, document.body.classList.remove("overflow-hidden");
    }, c = () => {
      const g = new URLSearchParams(window.location.search), m = [];
      for (const [D] of g)
        D.startsWith("filter.") && m.push(D);
      m.forEach((D) => {
        for (; g.has(D); )
          g.delete(D);
      }), s.value.inStock && g.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((D) => {
        g.append("filter.price.range", D);
      }), s.value.types.length > 0 && s.value.types.forEach((D) => {
        g.append("filter.p.product_type", D);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((D) => {
        g.append("filter.p.vendor", D);
      });
      const P = `${window.location.pathname}${g.toString() ? "?" + g.toString() : ""}`;
      window.location.href = P;
    }, u = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const g = new URLSearchParams(window.location.search), m = [];
      for (const [$] of g)
        $.startsWith("filter.") && m.push($);
      m.forEach(($) => g.delete($));
      const P = g.get("sort_by"), D = `${window.location.pathname}${P ? "?sort_by=" + P : ""}`;
      window.location.href = D;
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
      const P = g.getAll("filter.p.vendor");
      P.length > 0 && (s.value.vendors = P);
      const D = g.getAll("filter.price.range");
      D.length > 0 && (s.value.priceRanges = D);
    }, h = () => {
      p();
    };
    return it(() => {
      p(), window.addEventListener("popstate", h);
    }), Bs(() => {
      window.removeEventListener("popstate", h), document.body.classList.remove("overflow-hidden");
    }), (g, m) => (x(), C("div", null, [
      d("button", {
        onClick: a,
        class: "flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors",
        style: { borderRadius: "var(--button-radius)" }
      }, [
        m[4] || (m[4] = d("svg", {
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
        m[5] || (m[5] = d("span", null, "Filter", -1)),
        d("span", {
          class: we(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, J(l.value || "0"), 3)
      ]),
      (x(), wt(Fn, { to: "body" }, [
        ue(pt, { name: "drawer" }, {
          default: Pe(() => [
            n.value ? (x(), C("div", j_, [
              d("div", H_, [
                ue(pt, { name: "fade" }, {
                  default: Pe(() => [
                    n.value ? (x(), C("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: f
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                d("div", U_, [
                  ue(pt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      n.value ? (x(), C("div", q_, [
                        d("div", z_, [
                          d("div", W_, [
                            d("div", K_, [
                              m[6] || (m[6] = d("h2", { class: "text-xl" }, "Filters", -1)),
                              d("p", {
                                class: we(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, J(l.value || "0") + " " + J((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
                            ]),
                            d("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: f
                            }, m[7] || (m[7] = [
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
                          d("div", G_, [
                            d("div", J_, [
                              m[9] || (m[9] = d("h3", { class: "text-lg mb-3" }, "Availability", -1)),
                              d("label", Y_, [
                                $e(d("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": m[0] || (m[0] = (P) => s.value.inStock = P),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Le, s.value.inStock]
                                ]),
                                m[8] || (m[8] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            d("div", X_, [
                              m[10] || (m[10] = d("h3", { class: "text-lg mb-3" }, "Price", -1)),
                              d("div", Q_, [
                                (x(), C(ie, null, _e(r, (P) => d("label", {
                                  key: P.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: P.value,
                                    "onUpdate:modelValue": m[1] || (m[1] = (D) => s.value.priceRanges = D),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, Z_), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  d("span", ew, J(P.label), 1)
                                ])), 64))
                              ])
                            ]),
                            o.value.length > 0 ? (x(), C("div", tw, [
                              m[11] || (m[11] = d("h3", { class: "text-lg mb-3" }, "Product Type", -1)),
                              d("div", nw, [
                                (x(!0), C(ie, null, _e(o.value, (P) => (x(), C("label", {
                                  key: P,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: P,
                                    "onUpdate:modelValue": m[2] || (m[2] = (D) => s.value.types = D),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, sw), [
                                    [Le, s.value.types]
                                  ]),
                                  d("span", rw, J(P), 1)
                                ]))), 128))
                              ])
                            ])) : j("", !0),
                            i.value.length > 0 ? (x(), C("div", ow, [
                              m[12] || (m[12] = d("h3", { class: "text-lg mb-3" }, "Brand", -1)),
                              d("div", iw, [
                                (x(!0), C(ie, null, _e(i.value, (P) => (x(), C("label", {
                                  key: P,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: P,
                                    "onUpdate:modelValue": m[3] || (m[3] = (D) => s.value.vendors = D),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, lw), [
                                    [Le, s.value.vendors]
                                  ]),
                                  d("span", aw, J(P), 1)
                                ]))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          d("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            d("button", {
                              onClick: c,
                              class: "button w-full flex justify-center items-center px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            d("button", {
                              onClick: u,
                              class: "button w-full flex justify-center items-center px-6 py-3 text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200",
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
};
function uw(e) {
  return ll() ? (Lc(e), !0) : !1;
}
function Pf(e) {
  return typeof e == "function" ? e() : xr(e);
}
const dw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fw = Object.prototype.toString, pw = (e) => fw.call(e) === "[object Object]", el = () => {
};
function hw(e) {
  var t;
  const n = Pf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Rf = dw ? window : void 0;
function vi(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Rf) : [t, n, s, r] = e, !t)
    return el;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], i = () => {
    o.forEach((c) => c()), o.length = 0;
  }, l = (c, u, p, h) => (c.addEventListener(u, p, h), () => c.removeEventListener(u, p, h)), a = Ut(
    () => [hw(t), Pf(r)],
    ([c, u]) => {
      if (i(), !c)
        return;
      const p = pw(u) ? { ...u } : u;
      o.push(
        ...n.flatMap((h) => s.map((g) => l(c, h, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    a(), i();
  };
  return uw(f), f;
}
function mw(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: r,
    onSwipeStart: o,
    passive: i = !0,
    window: l = Rf
  } = t, a = Ns({ x: 0, y: 0 }), f = Ns({ x: 0, y: 0 }), c = te(() => a.x - f.x), u = te(() => a.y - f.y), { max: p, abs: h } = Math, g = te(() => p(h(c.value), h(u.value)) >= n), m = ne(!1), P = te(() => g.value ? h(c.value) > h(u.value) ? c.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), D = (y) => [y.touches[0].clientX, y.touches[0].clientY], $ = (y, O) => {
    a.x = y, a.y = O;
  }, v = (y, O) => {
    f.x = y, f.y = O;
  };
  let k;
  const w = gw(l == null ? void 0 : l.document);
  i ? k = w ? { passive: !0 } : { capture: !1 } : k = w ? { passive: !1, capture: !0 } : { capture: !0 };
  const M = (y) => {
    m.value && (r == null || r(y, P.value)), m.value = !1;
  }, N = [
    vi(e, "touchstart", (y) => {
      if (y.touches.length !== 1)
        return;
      k.capture && !k.passive && y.preventDefault();
      const [O, R] = D(y);
      $(O, R), v(O, R), o == null || o(y);
    }, k),
    vi(e, "touchmove", (y) => {
      if (y.touches.length !== 1)
        return;
      const [O, R] = D(y);
      v(O, R), !m.value && g.value && (m.value = !0), m.value && (s == null || s(y));
    }, k),
    vi(e, ["touchend", "touchcancel"], M, k)
  ];
  return {
    isPassiveEventSupported: w,
    isSwiping: m,
    direction: P,
    coordsStart: a,
    coordsEnd: f,
    lengthX: c,
    lengthY: u,
    stop: () => N.forEach((y) => y())
  };
}
function gw(e) {
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
const vw = { class: "product-gallery" }, yw = { class: "main-image-wrapper" }, bw = ["src", "alt"], _w = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, ww = {
  key: 0,
  class: "thumbnails-wrapper"
}, Ew = ["disabled"], xw = ["onClick", "aria-label"], Nw = ["src", "alt"], Sw = ["disabled"], kw = {
  key: 1,
  class: "swiper-dots"
}, Cw = ["onClick", "aria-label"], Ow = ["src", "alt"], $w = { class: "lightbox-counter" }, Dw = 80, Hr = 4, kc = 2, Tw = {
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
    const t = e, n = ne(0), s = ne(!1), r = ne(!1), o = ne(!1), i = ne(!1), l = ne(0), a = ne(null), f = ne(0), c = ne(0), u = ne({}), p = te(() => t.images.map((N) => {
      if (N.src)
        return N;
      const _ = N.url || N;
      return {
        src: `${_}?width=${t.imageTransformWidth}`,
        thumbnail: `${_}?width=${t.thumbnailWidth}`,
        alt: N.alt || t.productTitle
      };
    })), h = te(() => p.value[n.value] || { src: "", alt: "" }), g = te(() => ({
      width: "150px",
      height: "150px",
      left: `${f.value - 150 / 2}px`,
      top: `${c.value - 150 / 2}px`
    })), m = te(() => {
      const _ = f.value / u.value.width * 100, y = c.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${h.value.src})`,
        backgroundSize: `${u.value.width * kc}px ${u.value.height * kc}px`,
        backgroundPosition: `${_}% ${y}%`
      };
    }), P = (N) => {
      s.value = !0, n.value = N;
    }, D = (N) => {
      N === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Hr,
        l.value + 1
      );
    }, $ = (N) => {
      n.value = N, r.value = !0, document.body.classList.add("overflow-hidden");
    }, v = () => {
      r.value = !1, document.body.classList.remove("overflow-hidden");
    }, k = (N) => {
      N === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, w = (N) => {
      const _ = N.currentTarget.getBoundingClientRect();
      u.value = _, f.value = N.clientX - _.left, c.value = N.clientY - _.top;
    }, { lengthX: M } = mw(
      a,
      {
        onSwipeEnd() {
          M.value > 50 ? D("prev") : M.value < -50 && D("next");
        }
      }
    );
    return it(() => {
      i.value = window.innerWidth < 768;
      const N = () => {
        i.value = window.innerWidth < 768;
      }, _ = (y) => {
        r.value && (y.key === "Escape" && v(), y.key === "ArrowLeft" && k("prev"), y.key === "ArrowRight" && k("next"));
      };
      window.addEventListener("resize", N), window.addEventListener("keydown", _), vn(() => {
        window.removeEventListener("resize", N), window.removeEventListener("keydown", _);
      });
    }), (N, _) => (x(), C("div", vw, [
      d("div", yw, [
        d("div", {
          class: "main-image aspect-square bg-gray-100 overflow-hidden relative group cursor-zoom-in",
          style: { borderRadius: "var(--card-radius, 8px)" },
          onClick: _[1] || (_[1] = (y) => $(n.value)),
          onMouseenter: _[2] || (_[2] = (y) => o.value = !0),
          onMouseleave: _[3] || (_[3] = (y) => o.value = !1),
          onMousemove: w
        }, [
          d("img", {
            src: h.value.src,
            alt: h.value.alt,
            class: we(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: _[0] || (_[0] = (y) => s.value = !1)
          }, null, 42, bw),
          s.value ? (x(), C("div", _w, _[9] || (_[9] = [
            d("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : j("", !0),
          _[10] || (_[10] = d("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          o.value && !i.value ? (x(), C("div", {
            key: 1,
            class: "zoom-lens",
            style: je(g.value)
          }, null, 4)) : j("", !0)
        ], 32),
        o.value && !i.value ? (x(), C("div", {
          key: 0,
          class: "zoom-preview",
          style: je(m.value)
        }, null, 4)) : j("", !0)
      ]),
      p.value.length > 1 ? (x(), C("div", ww, [
        p.value.length > Hr ? (x(), C("button", {
          key: 0,
          onClick: _[4] || (_[4] = (y) => D("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, _[11] || (_[11] = [
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
        ]), 8, Ew)) : j("", !0),
        d("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          d("div", {
            class: "thumbnails-track",
            style: je({ transform: `translateX(-${l.value * (Dw + 8)}px)` })
          }, [
            (x(!0), C(ie, null, _e(p.value, (y, O) => (x(), C("button", {
              key: O,
              onClick: (R) => P(O),
              class: we(["thumbnail", { active: O === n.value }]),
              "aria-label": `View image ${O + 1}`
            }, [
              d("img", {
                src: y.thumbnail || y.src,
                alt: y.alt,
                class: "w-full h-full object-contain"
              }, null, 8, Nw)
            ], 10, xw))), 128))
          ], 4)
        ], 512),
        p.value.length > Hr ? (x(), C("button", {
          key: 1,
          onClick: _[5] || (_[5] = (y) => D("next")),
          disabled: l.value >= p.value.length - Hr,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, _[12] || (_[12] = [
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
        ]), 8, Sw)) : j("", !0)
      ])) : j("", !0),
      p.value.length > 1 && i.value ? (x(), C("div", kw, [
        (x(!0), C(ie, null, _e(p.value, (y, O) => (x(), C("button", {
          key: O,
          onClick: (R) => P(O),
          class: we(["swiper-dot", { active: O === n.value }]),
          "aria-label": `Go to image ${O + 1}`
        }, null, 10, Cw))), 128))
      ])) : j("", !0),
      (x(), wt(Fn, { to: "body" }, [
        r.value ? (x(), C("div", {
          key: 0,
          class: "lightbox",
          onClick: v
        }, [
          d("button", {
            onClick: v,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, _[13] || (_[13] = [
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
          p.value.length > 1 ? (x(), C("button", {
            key: 0,
            onClick: _[6] || (_[6] = qt((y) => k("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, _[14] || (_[14] = [
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
            onClick: _[7] || (_[7] = qt(() => {
            }, ["stop"]))
          }, [
            d("img", {
              src: h.value.src,
              alt: h.value.alt,
              class: "lightbox-image"
            }, null, 8, Ow)
          ]),
          p.value.length > 1 ? (x(), C("button", {
            key: 1,
            onClick: _[8] || (_[8] = qt((y) => k("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, _[15] || (_[15] = [
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
          d("div", $w, J(n.value + 1) + " / " + J(p.value.length), 1)
        ])) : j("", !0)
      ]))
    ]));
  }
}, Aw = /* @__PURE__ */ yn(Tw, [["__scopeId", "data-v-c20f6e1d"]]), Vw = { class: "product-info" }, Iw = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, Mw = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, Pw = { class: "price-wrapper mb-6" }, Rw = { class: "flex items-baseline gap-3" }, Lw = { class: "text-3xl font-semibold text-gray-900" }, Fw = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, Bw = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, jw = {
  key: 1,
  class: "mb-6"
}, Hw = ["product", "current-variant"], Uw = ["value"], qw = { class: "mb-4" }, zw = ["max"], Ww = { class: "mb-4" }, Kw = {
  key: 0,
  class: "text-red-600 font-medium"
}, Gw = {
  key: 1,
  class: "text-amber-600"
}, Jw = {
  key: 2,
  class: "text-green-600"
}, Yw = { class: "flex flex-col sm:flex-row gap-3" }, Xw = ["disabled"], Qw = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, Zw = { key: 1 }, e2 = { key: 2 }, t2 = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, n2 = ["innerHTML"], s2 = { class: "space-y-4" }, r2 = {
  key: 0,
  class: "group"
}, o2 = ["innerHTML"], i2 = {
  key: 1,
  class: "group"
}, l2 = { class: "mt-8 pt-8 border-t" }, a2 = { class: "flex gap-3" }, c2 = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, u2 = {
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
    var P;
    const n = e, s = t, r = ne(n.product.selected_or_first_available_variant || ((P = n.product.variants) == null ? void 0 : P[0]) || {}), o = ne(1), i = ne(!1), l = ne(!1), a = te(() => r.value.inventory_policy === "continue" ? 999 : Math.min(r.value.inventory_quantity || 10, 10)), f = te(() => {
      var D;
      return (D = n.product.options) == null ? void 0 : D.some(
        ($) => $.name.toLowerCase() === "size" || $.name.toLowerCase() === "taille"
      );
    }), c = (D) => `$${(D / 100).toFixed(2)}`, u = (D) => {
      r.value = D, s("variant-change", D);
      const $ = new URL(window.location);
      $.searchParams.set("variant", D.id), window.history.replaceState({}, "", $);
    }, p = async () => {
      var $;
      i.value = !0;
      const D = new FormData();
      D.append("id", r.value.id), D.append("quantity", o.value);
      try {
        await (($ = window.OrionCart) == null ? void 0 : $.addItem(D));
        const v = event.target, k = v.textContent;
        v.textContent = "✓ Added to Cart", setTimeout(() => {
          v.textContent = k;
        }, 2e3);
      } catch (v) {
        console.error("Failed to add to cart:", v), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, h = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (D) => {
      const $ = window.location.href, v = n.product.title, k = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent($)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent($)}&text=${encodeURIComponent(v)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent($)}&description=${encodeURIComponent(v)}`
      };
      k[D] && window.open(k[D], "_blank", "width=600,height=400");
    }, m = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (D) {
        console.error("Failed to copy link:", D);
      }
    };
    return Ut(() => n.product.selected_variant, (D) => {
      D && (r.value = D);
    }), (D, $) => (x(), C("div", Vw, [
      d("h1", Iw, J(e.product.title), 1),
      e.product.vendor ? (x(), C("p", Mw, " by " + J(e.product.vendor), 1)) : j("", !0),
      d("div", Pw, [
        d("div", Rw, [
          d("span", Lw, J(c(r.value.price)), 1),
          r.value.compare_at_price > r.value.price ? (x(), C("span", Fw, J(c(r.value.compare_at_price)), 1)) : j("", !0)
        ]),
        r.value.compare_at_price > r.value.price ? (x(), C("p", Bw, " Save " + J(c(r.value.compare_at_price - r.value.price)) + " (" + J(Math.round((1 - r.value.price / r.value.compare_at_price) * 100)) + "% off) ", 1)) : j("", !0)
      ]),
      e.product.has_only_default_variant ? j("", !0) : (x(), C("div", jw, [
        d("product-variant-picker", {
          product: e.product,
          "current-variant": r.value,
          onVariantChange: u
        }, null, 40, Hw)
      ])),
      d("form", {
        onSubmit: qt(p, ["prevent"]),
        class: "mb-8"
      }, [
        d("input", {
          type: "hidden",
          name: "id",
          value: r.value.id
        }, null, 8, Uw),
        d("div", qw, [
          $[4] || ($[4] = d("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(d("quantity-selector", {
            "onUpdate:modelValue": $[0] || ($[0] = (v) => o.value = v),
            min: 1,
            max: a.value
          }, null, 8, zw), [
            [ls, o.value]
          ])
        ]),
        d("div", Ww, [
          r.value.available ? r.value.inventory_quantity && r.value.inventory_quantity <= 10 ? (x(), C("p", Gw, " Only " + J(r.value.inventory_quantity) + " left in stock ", 1)) : (x(), C("p", Jw, " ✓ In Stock ")) : (x(), C("p", Kw, " Out of Stock "))
        ]),
        d("div", Yw, [
          d("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !r.value.available || i.value
          }, [
            i.value ? (x(), C("span", Qw, $[5] || ($[5] = [
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
              Xe(" Adding... ", -1)
            ]))) : r.value.available ? (x(), C("span", e2, " Add to Cart ")) : (x(), C("span", Zw, " Sold Out "))
          ], 8, Xw),
          e.showBuyNow ? (x(), wt(ts, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: h,
            class: "flex-1",
            disabled: !r.value.available
          }, {
            default: Pe(() => $[6] || ($[6] = [
              Xe(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : j("", !0)
        ])
      ], 32),
      e.product.description ? (x(), C("div", t2, [
        $[7] || ($[7] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        d("div", {
          innerHTML: e.product.description
        }, null, 8, n2)
      ])) : j("", !0),
      d("div", s2, [
        $[10] || ($[10] = Pn('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (x(), C("details", r2, [
          $[8] || ($[8] = d("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, o2)
        ])) : j("", !0),
        f.value ? (x(), C("details", i2, $[9] || ($[9] = [
          Pn('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : j("", !0)
      ]),
      d("div", l2, [
        $[15] || ($[15] = d("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        d("div", a2, [
          d("button", {
            onClick: $[1] || ($[1] = (v) => g("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, $[11] || ($[11] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          d("button", {
            onClick: $[2] || ($[2] = (v) => g("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, $[12] || ($[12] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          d("button", {
            onClick: $[3] || ($[3] = (v) => g("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, $[13] || ($[13] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          d("button", {
            onClick: m,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            $[14] || ($[14] = d("svg", {
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
            l.value ? (x(), C("span", c2, " Link copied! ")) : j("", !0)
          ])
        ])
      ])
    ]));
  }
}, d2 = /* @__PURE__ */ yn(u2, [["__scopeId", "data-v-9e2c3b5c"]]), f2 = { class: "summary-row" }, p2 = { class: "stars" }, h2 = { class: "average-score" }, m2 = {
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
        const f = l.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: f - 150,
          behavior: "smooth"
        });
      }
    };
    return it(o), (l, a) => !r.value && !s.value && n.value ? (x(), C("div", {
      key: 0,
      class: "review-summary",
      onClick: i
    }, [
      d("div", f2, [
        d("span", p2, [
          (x(), C(ie, null, _e(5, (f) => d("span", {
            key: f,
            class: we(["star", { filled: f <= Math.round(n.value.score) }])
          }, "★", 2)), 64))
        ]),
        d("span", h2, J(n.value.score.toFixed(1)), 1)
      ])
    ])) : j("", !0);
  }
}, g2 = {
  class: "cart-summary bg-gray-50 p-6 lg:sticky lg:top-24",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, v2 = { class: "space-y-3 mb-4" }, y2 = { class: "flex justify-between text-sm" }, b2 = { class: "text-gray-600" }, _2 = { class: "font-medium text-gray-900" }, w2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, E2 = {
  key: 1,
  class: "flex justify-between text-sm"
}, x2 = { class: "text-gray-900" }, N2 = {
  key: 2,
  class: "flex justify-between text-sm"
}, S2 = { class: "text-gray-900" }, k2 = { class: "border-t pt-4 mb-6" }, C2 = { class: "flex justify-between items-baseline" }, O2 = { class: "text-right" }, $2 = { class: "text-xl font-bold text-gray-900" }, D2 = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, T2 = { class: "mb-6" }, A2 = { class: "group" }, V2 = { class: "mt-3" }, I2 = ["disabled"], M2 = ["disabled"], P2 = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, R2 = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, L2 = ["disabled"], F2 = {
  key: 0,
  class: "flex items-center gap-2"
}, B2 = { key: 1 }, j2 = {
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
    const n = e, s = t, r = ne(""), o = ne(""), i = ne(""), l = ne(!1), a = ne(!1), f = ne(!1), c = te(() => n.cart.item_count || 0), u = te(() => n.cart.total_price || 0), p = te(() => n.cart.original_total_price || n.cart.total_price || 0), h = te(() => n.cart.total_discount || 0), g = te(() => u.value >= 5e3 ? 0 : 500), m = te(() => Math.round(u.value * 0.1)), P = (v) => `$${(v / 100).toFixed(2)}`, D = async () => {
      var v;
      if (!(!r.value.trim() || l.value)) {
        l.value = !0, o.value = "", i.value = "";
        try {
          const k = new FormData();
          k.append("discount_code", r.value);
          const w = await fetch("/discount/apply", {
            method: "POST",
            body: k
          });
          if (w.ok)
            i.value = "Promo code applied successfully!", r.value = "", await ((v = window.OrionCart) == null ? void 0 : v.fetchCart());
          else {
            const M = await w.json();
            o.value = M.message || "Invalid promo code";
          }
        } catch (k) {
          console.error("Failed to apply promo code:", k), o.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, $ = async () => {
      if (!(c.value === 0 || a.value)) {
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
    return (v, k) => (x(), C("div", g2, [
      k[10] || (k[10] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      d("div", v2, [
        d("div", y2, [
          d("span", b2, "Subtotal (" + J(c.value) + " " + J(c.value === 1 ? "item" : "items") + ")", 1),
          d("span", _2, J(P(p.value)), 1)
        ]),
        h.value > 0 ? (x(), C("div", w2, [
          k[3] || (k[3] = d("span", { class: "flex items-center gap-1" }, [
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
            Xe(" Discounts ")
          ], -1)),
          d("span", null, "-" + J(P(h.value)), 1)
        ])) : j("", !0),
        e.showShipping ? (x(), C("div", E2, [
          k[4] || (k[4] = d("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          d("span", x2, J(g.value === 0 ? "Free" : P(g.value)), 1)
        ])) : j("", !0),
        e.showTax ? (x(), C("div", N2, [
          k[5] || (k[5] = d("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          d("span", S2, J(P(m.value)), 1)
        ])) : j("", !0)
      ]),
      d("div", k2, [
        d("div", C2, [
          k[6] || (k[6] = d("span", { class: "text-lg font-semibold" }, "Total", -1)),
          d("div", O2, [
            d("span", $2, J(P(u.value)), 1),
            h.value > 0 ? (x(), C("p", D2, " You saved " + J(P(h.value)) + "! ", 1)) : j("", !0)
          ])
        ])
      ]),
      d("div", T2, [
        d("details", A2, [
          k[7] || (k[7] = d("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          d("div", V2, [
            d("form", {
              onSubmit: qt(D, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(d("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (w) => r.value = w),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, I2), [
                [ls, r.value]
              ]),
              d("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !r.value.trim() || l.value
              }, J(l.value ? "Applying..." : "Apply"), 9, M2)
            ], 32),
            o.value ? (x(), C("p", P2, J(o.value), 1)) : j("", !0),
            i.value ? (x(), C("p", R2, J(i.value), 1)) : j("", !0)
          ])
        ])
      ]),
      d("button", {
        onClick: $,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: je({
          backgroundColor: f.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: k[1] || (k[1] = (w) => f.value = !0),
        onMouseleave: k[2] || (k[2] = (w) => f.value = !1),
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (x(), C("span", F2, k[8] || (k[8] = [
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
          Xe(" Processing... ", -1)
        ]))) : (x(), C("span", B2, k[9] || (k[9] = [
          Xe(" Proceed to Checkout ", -1),
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
      ], 44, L2),
      k[11] || (k[11] = Pn('<div class="mt-6 space-y-2" data-v-daaa8299><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-daaa8299></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-daaa8299></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-daaa8299></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-daaa8299></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-daaa8299><p class="text-xs text-gray-600 mb-2" data-v-daaa8299>We accept</p><div class="flex gap-2" data-v-daaa8299><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-daaa8299></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#EB001B" data-v-daaa8299></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-daaa8299></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-daaa8299></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-daaa8299></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#253B80" data-v-daaa8299></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-daaa8299></path></svg></div></div>', 2))
    ]));
  }
}, H2 = /* @__PURE__ */ yn(j2, [["__scopeId", "data-v-daaa8299"]]), U2 = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, q2 = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, z2 = { class: "bg-white transition-all duration-300 border-b border-gray-200" }, W2 = { class: "max-w-6xl mx-auto" }, K2 = { class: "relative" }, G2 = { class: "px-4 py-8 sm:px-6 lg:px-8" }, J2 = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, Y2 = { class: "flex-1 relative group" }, X2 = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, Q2 = {
  key: 0,
  class: "relative"
}, Z2 = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, eE = { class: "flex flex-wrap gap-2" }, tE = ["onClick"], nE = {
  key: 0,
  class: "border-t border-gray-100"
}, sE = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, rE = {
  key: 0,
  class: "p-6"
}, oE = { class: "animate-pulse" }, iE = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, lE = {
  key: 1,
  class: "p-6"
}, aE = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, cE = ["href"], uE = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, dE = ["src", "alt"], fE = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, pE = { class: "flex-1 min-w-0" }, hE = { class: "text-lg font-heading text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 pt-2" }, mE = { class: "mt-2 flex items-center gap-2" }, gE = { class: "text-sm font-semibold text-gray-900" }, vE = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, yE = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, bE = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, _E = ["href"], wE = { class: "text-sm text-gray-700 group-hover:text-red-600 transition-colors" }, EE = {
  key: 3,
  class: "p-12 text-center"
}, xE = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, NE = ["href"], SE = {
  __name: "SearchOverlay",
  setup(e) {
    const t = ne(!1), n = ne(""), s = ne(null), r = ne(!1), o = ne({
      products: [],
      collections: []
    }), i = ne(null), l = te(() => {
      var k;
      return ((k = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : k.search) || "/search";
    }), a = te(() => n.value.length > 0), f = te(() => {
      var M, N;
      const k = [], w = ((N = (M = window.Shopline) == null ? void 0 : M.theme) == null ? void 0 : N.settings) || {};
      for (let _ = 1; _ <= 6; _++) {
        const y = w[`popular_search_${_}`];
        y && y.trim() && k.push(y.trim());
      }
      return k;
    }), c = te(() => f.value.length > 0), u = te(() => {
      var w, M, N;
      const k = ((N = (M = (w = window.Shopline) == null ? void 0 : w.theme) == null ? void 0 : M.settings) == null ? void 0 : N.button_primary_bg) || "#dc2626";
      if (k.startsWith("#")) {
        const _ = k.replace("#", ""), y = parseInt(_.substr(0, 2), 16), O = parseInt(_.substr(2, 2), 16), R = parseInt(_.substr(4, 2), 16);
        return `${y}, ${O}, ${R}`;
      }
      return k.replace("rgb(", "").replace(")", "");
    }), p = ne(!1), h = (k) => {
      var O, R;
      if (!k && k !== 0) return "$0.00";
      const w = k > 100 ? k / 100 : k, M = ((O = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : O.money_format) || "${{amount}}", N = ((R = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : R.current) || "en", y = new Intl.NumberFormat(N, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(w);
      return M.replace("{{amount}}", y);
    }, g = async () => {
      var k;
      t.value = !0, document.body.classList.add("overflow-hidden"), await ss(), (k = s.value) == null || k.focus();
    }, m = () => {
      t.value = !1, document.body.classList.remove("overflow-hidden"), n.value = "", o.value = { products: [], collections: [] };
    }, P = () => {
      if (clearTimeout(i.value), n.value.length < 2) {
        o.value = { products: [], collections: [] }, r.value = !1;
        return;
      }
      r.value = !0, i.value = setTimeout(() => {
        D();
      }, 300);
    }, D = async () => {
      var k;
      try {
        const w = n.value, N = `${((k = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : k.search) || "/search"}?keyword=${encodeURIComponent(w)}`, _ = await fetch(N, {
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        if (!_.ok)
          throw new Error("Search request failed");
        const y = _.headers.get("content-type");
        let O;
        if (y && y.includes("application/json"))
          O = await _.json();
        else {
          const I = await _.text(), L = new DOMParser().parseFromString(I, "text/html").querySelectorAll("product-card"), Q = [];
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
            he.title && he.id && Q.push(he);
          }), O = { products: Q };
        }
        const E = (O.products || O.results || []).map((I) => ({
          id: I.id,
          url: I.url || `/products/${I.handle}`,
          title: I.title,
          image: I.featured_image || I.image || I.images && I.images[0],
          price: I.price,
          compareAtPrice: I.compare_at_price || I.compareAtPrice,
          vendor: I.vendor,
          available: I.available !== !1
        })).slice(0, 8);
        o.value = {
          products: E,
          collections: []
        }, r.value = !1;
      } catch (w) {
        console.error("Search error:", w), o.value = { products: [], collections: [] }, r.value = !1;
      }
    }, $ = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(
        n.value
      )}`);
    }, v = (k) => {
      k.key === "Escape" && t.value && m();
    };
    return it(() => {
      document.addEventListener("search-overlay:open", g), document.addEventListener("search-overlay:close", m), document.addEventListener("keydown", v);
    }), vn(() => {
      document.removeEventListener("search-overlay:open", g), document.removeEventListener("search-overlay:close", m), document.removeEventListener("keydown", v);
    }), (k, w) => (x(), wt(Fn, { to: "body" }, [
      ue(pt, { name: "search-overlay" }, {
        default: Pe(() => [
          t.value ? (x(), C("div", U2, [
            ue(pt, { name: "fade" }, {
              default: Pe(() => [
                t.value ? (x(), C("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                  onClick: m
                })) : j("", !0)
              ]),
              _: 1
            }),
            ue(pt, {
              name: "slide-down",
              appear: ""
            }, {
              default: Pe(() => {
                var M, N;
                return [
                  t.value ? (x(), C("div", q2, [
                    d("div", z2, [
                      d("div", W2, [
                        d("div", K2, [
                          d("div", G2, [
                            d("div", J2, [
                              d("div", Y2, [
                                w[6] || (w[6] = d("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                  "onUpdate:modelValue": w[0] || (w[0] = (_) => n.value = _),
                                  type: "search",
                                  placeholder: "Search for products...",
                                  class: "w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: je({
                                    borderRadius: "var(--button-radius, 16px)",
                                    "--tw-ring-color": `rgb(${u.value})`,
                                    borderColor: p.value ? `rgb(${u.value})` : ""
                                  }),
                                  onInput: P,
                                  onKeydown: [
                                    Ui(m, ["escape"]),
                                    Ui($, ["enter"])
                                  ],
                                  onFocus: w[1] || (w[1] = (_) => p.value = !0),
                                  onBlur: w[2] || (w[2] = (_) => p.value = !1)
                                }, null, 36), [
                                  [ls, n.value]
                                ]),
                                d("div", X2, [
                                  r.value ? (x(), C("div", Q2, w[4] || (w[4] = [
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (x(), C("button", {
                                    key: 1,
                                    onClick: w[3] || (w[3] = (_) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, w[5] || (w[5] = [
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
                                onClick: m
                              }, w[7] || (w[7] = [
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
                            !n.value && !r.value && c.value ? (x(), C("div", Z2, [
                              w[8] || (w[8] = d("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              d("div", eE, [
                                (x(!0), C(ie, null, _e(f.value, (_) => (x(), C("button", {
                                  key: _,
                                  onClick: (y) => {
                                    n.value = _, $();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, J(_), 9, tE))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          a.value ? (x(), C("div", nE, [
                            d("div", sE, [
                              r.value ? (x(), C("div", rE, [
                                d("div", oE, [
                                  w[10] || (w[10] = d("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  d("div", iE, [
                                    (x(), C(ie, null, _e(4, (_) => d("div", {
                                      key: _,
                                      class: "flex items-start space-x-3"
                                    }, w[9] || (w[9] = [
                                      d("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      d("div", { class: "flex-1" }, [
                                        d("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        d("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : o.value.products && o.value.products.length > 0 ? (x(), C("div", lE, [
                                w[12] || (w[12] = d("h3", { class: "text-xl mb-4" }, "Products", -1)),
                                d("div", aE, [
                                  (x(!0), C(ie, null, _e(o.value.products, (_) => (x(), C("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: m
                                  }, [
                                    d("div", uE, [
                                      _.image ? (x(), C("img", {
                                        key: 0,
                                        src: _.image,
                                        alt: _.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, dE)) : (x(), C("div", fE, w[11] || (w[11] = [
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
                                    d("div", pE, [
                                      d("p", hE, J(_.title), 1),
                                      d("div", mE, [
                                        d("p", gE, J(h(_.price)), 1),
                                        _.compareAtPrice && _.compareAtPrice > _.price ? (x(), C("p", vE, J(h(_.compareAtPrice)), 1)) : j("", !0)
                                      ])
                                    ])
                                  ], 8, cE))), 128))
                                ])
                              ])) : j("", !0),
                              o.value.collections && o.value.collections.length > 0 ? (x(), C("div", yE, [
                                w[14] || (w[14] = d("h3", { class: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-4" }, " Collections ", -1)),
                                d("div", bE, [
                                  (x(!0), C(ie, null, _e(o.value.collections, (_) => (x(), C("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: m
                                  }, [
                                    d("span", wE, J(_.title), 1),
                                    w[13] || (w[13] = d("svg", {
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
                                  ], 8, _E))), 128))
                                ])
                              ])) : j("", !0),
                              n.value && !r.value && (!o.value.products || o.value.products.length === 0) && (!o.value.collections || o.value.collections.length === 0) ? (x(), C("div", EE, w[15] || (w[15] = [
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
                                d("p", { class: "text-gray-900 font-medium mb-2" }, " No results found ", -1),
                                d("p", { class: "text-sm text-gray-500" }, " Try searching for something else or check your spelling ", -1)
                              ]))) : j("", !0)
                            ]),
                            n.value && (((M = o.value.products) == null ? void 0 : M.length) > 0 || ((N = o.value.collections) == null ? void 0 : N.length) > 0) ? (x(), C("div", xE, [
                              d("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(
                                  n.value
                                )}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: m
                              }, [
                                Xe(' View all results for "' + J(n.value) + '" ', 1),
                                w[16] || (w[16] = d("svg", {
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
                              ], 8, NE)
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
}, kE = {
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
    const t = ne(!1), n = te(() => {
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
    })), r = te(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const a = JSON.parse(e.tags);
          return Array.isArray(a) ? a : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), o = te(() => {
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
      var f, c;
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
          u = new Date(
            g > 1e12 ? g : g * 1e3
          );
        } else if (typeof a == "string")
          u = new Date(a);
        else
          return "";
        if (isNaN(u.getTime()) || u.getFullYear() < 1900 || u.getFullYear() > 2100)
          return console.warn(
            "Invalid or unreasonable date:",
            a,
            "parsed as:",
            u
          ), "";
        const h = typeof window < "u" && typeof window.Shopline < "u" && ((c = (f = window.Shopline) == null ? void 0 : f.locale) == null ? void 0 : c.current) || "en";
        return new Intl.DateTimeFormat(h, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(u);
      } catch (u) {
        return console.warn("Error formatting date:", u, a), "";
      }
    }), l = te(() => {
      if (!e.content) return "";
      const a = e.content.replace(/<[^>]*>/g, "");
      return a.length <= 150 ? a : a.substring(0, 150).trim() + "...";
    });
    return {
      imageAspectClass: n,
      processedTags: r,
      processedImage: o,
      formattedDate: i,
      truncatedContent: l,
      cardStyles: s,
      isHovered: t
    };
  }
}, CE = ["href"], OE = ["src", "alt"], $E = { class: "relative p-6 flex-1 flex flex-col z-10" }, DE = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, TE = { class: "text-xl mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, AE = ["href"], VE = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, IE = { key: 0 }, ME = {
  key: 1,
  class: "text-gray-300"
}, PE = ["datetime"], RE = { class: "flex-1 mb-6" }, LE = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-2"
}, FE = ["innerHTML"], BE = { class: "mt-auto" }, jE = ["href"];
function HE(e, t, n, s, r, o) {
  return x(), C("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: je(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = d("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (x(), C("div", {
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
        }, null, 8, OE),
        t[2] || (t[2] = d("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, CE)
    ], 2)) : j("", !0),
    d("div", $E, [
      n.showTags && s.processedTags.length > 0 ? (x(), C("div", DE, [
        (x(!0), C(ie, null, _e(s.processedTags.slice(0, 3), (i) => (x(), C("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, J(i), 1))), 128))
      ])) : j("", !0),
      d("h3", TE, [
        d("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, J(n.title), 9, AE)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (x(), C("div", VE, [
        n.showAuthor && n.author ? (x(), C("span", IE, J(n.author), 1)) : j("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (x(), C("span", ME, "•")) : j("", !0),
        n.showDate && s.formattedDate ? (x(), C("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, J(s.formattedDate), 9, PE)) : j("", !0)
      ])) : j("", !0),
      d("div", RE, [
        n.excerpt ? (x(), C("p", LE, J(n.excerpt), 1)) : n.content ? (x(), C("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-2",
          innerHTML: s.truncatedContent
        }, null, 8, FE)) : j("", !0)
      ]),
      d("div", BE, [
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
        ]), 8, jE)
      ])
    ])
  ], 36);
}
const Lf = /* @__PURE__ */ yn(kE, [["render", HE]]), UE = {
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
    return it(() => {
      f();
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
}, qE = { class: "blog-articles-component" }, zE = {
  key: 0,
  class: "flex flex-wrap justify-center gap-6"
}, WE = { class: "p-6" }, KE = {
  key: 0,
  class: "flex gap-2 mb-4"
}, GE = {
  key: 1,
  class: "h-4 bg-gray-200 rounded w-1/2 mb-4"
}, JE = {
  key: 1,
  class: "text-center py-12"
}, YE = { class: "text-gray-600" }, XE = {
  key: 2,
  class: "flex flex-wrap justify-center gap-6"
}, QE = ["title", "url", "excerpt", "content", "author", "published-at", "raw-published-at", "image", "image-alt", "tags", "image-ratio", "show-image", "show-author", "show-date"], ZE = {
  key: 3,
  class: "text-center py-12"
};
function ex(e, t, n, s, r, o) {
  return x(), C("div", qE, [
    s.loading ? (x(), C("div", zE, [
      (x(!0), C(ie, null, _e(s.displayLimit, (i) => (x(), C("div", {
        key: `skeleton-${i}`,
        class: "article-skeleton flex-shrink-0 w-full sm:w-auto animate-pulse",
        style: je(s.skeletonStyles)
      }, [
        n.showImage ? (x(), C("div", {
          key: 0,
          class: we([s.imageAspectClass, "bg-gray-200"])
        }, null, 2)) : j("", !0),
        d("div", WE, [
          n.showTags ? (x(), C("div", KE, t[0] || (t[0] = [
            d("div", { class: "h-6 w-16 bg-gray-200 rounded-full" }, null, -1),
            d("div", { class: "h-6 w-20 bg-gray-200 rounded-full" }, null, -1)
          ]))) : j("", !0),
          t[1] || (t[1] = d("div", { class: "h-6 bg-gray-200 rounded mb-2" }, null, -1)),
          t[2] || (t[2] = d("div", { class: "h-6 bg-gray-200 rounded w-3/4 mb-4" }, null, -1)),
          n.showAuthor || n.showDate ? (x(), C("div", GE)) : j("", !0),
          t[3] || (t[3] = Pn('<div class="space-y-2 mb-6" data-v-d0155edf><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded w-2/3" data-v-d0155edf></div></div><div class="h-6 bg-gray-200 rounded w-24" data-v-d0155edf></div>', 2))
        ])
      ], 4))), 128))
    ])) : s.error ? (x(), C("div", JE, [
      t[4] || (t[4] = d("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "Unable to load articles", -1)),
      d("p", YE, J(s.error), 1)
    ])) : s.articles.length > 0 ? (x(), C("div", XE, [
      (x(!0), C(ie, null, _e(s.articles, (i) => {
        var l, a;
        return x(), C("div", {
          key: i.id,
          class: "article-card-wrapper flex-shrink-0 w-full sm:w-auto",
          style: je(s.cardWrapperStyles)
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
          }, null, 8, QE)
        ], 4);
      }), 128))
    ])) : (x(), C("div", ZE, t[5] || (t[5] = [
      d("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "No articles found", -1),
      d("p", { class: "text-gray-600" }, "This blog has no articles yet.", -1)
    ])))
  ]);
}
const tx = /* @__PURE__ */ yn(UE, [["render", ex], ["__scopeId", "data-v-d0155edf"]]);
({
  ...ts,
  props: {
    ...ts.props
  }
});
const nx = /* @__PURE__ */ Et(If), sx = /* @__PURE__ */ Et(N1), rx = /* @__PURE__ */ Et(W1, {
  shadowRoot: !1
}), ox = /* @__PURE__ */ Et(Af), ix = /* @__PURE__ */ Et(Mf), lx = /* @__PURE__ */ Et(L_), ax = /* @__PURE__ */ Et(Aw), cx = /* @__PURE__ */ Et(d2), ux = /* @__PURE__ */ Et(m2, {
  shadowRoot: !1
}), dx = /* @__PURE__ */ Et(Vf), fx = /* @__PURE__ */ Et(H2);
customElements.define("cart-drawer", nx);
customElements.define("mobile-menu", sx);
customElements.define("product-variant-picker", rx);
customElements.define("quantity-selector", ox);
customElements.define("collection-filters", ix);
customElements.define("collection-grid", lx);
customElements.define("product-gallery", ax);
customElements.define("product-info", cx);
customElements.define("reviews-summary", ux);
customElements.define("cart-item", dx);
customElements.define("cart-summary", fx);
function xs(e = document) {
  e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const u = Dt(If);
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
    }, p = Dt(vb, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, p = Dt(B_, u);
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
    }, p = Dt(
      {
        components: { Button: ts },
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
    }, p = Dt(cw, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll(
    "collection-filter-sidebar"
  ).forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, p = Dt(Mf, u);
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
    }, p = Dt(Lf, u);
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
    }, p = Dt(tx, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("search-overlay").forEach((c) => {
    if (c._vueApp) return;
    const u = Dt(SE);
    c._vueApp = u, u.mount(c);
  }), e === document && document.querySelectorAll(".header-group").forEach((u) => {
    const p = u.querySelector(".site-header");
    if (!p) return;
    const h = u.dataset.transparent === "true", g = document.body.classList.contains("template-index");
    if (h && g && window.scrollY === 0 && (p.style.backgroundColor = "transparent", p.style.borderBottomColor = "transparent", p.classList.add("transparent-not-scrolled")), u.dataset.sticky === "true" && !p._stickyInitialized) {
      let $ = function() {
        const v = window.scrollY, k = u.dataset.hideOnScroll === "true", w = u.dataset.transparent === "true", M = document.body.classList.contains("template-index");
        v > 0 ? u.classList.add("announcement-hidden") : u.classList.remove("announcement-hidden"), v > 0 ? (p.classList.add("scrolled"), p.classList.remove("transparent-not-scrolled")) : (p.classList.remove("scrolled"), w && M && p.classList.add("transparent-not-scrolled")), w && M && (v <= 50 ? (p.style.backgroundColor = "transparent", p.style.borderBottomColor = "transparent") : (p.style.backgroundColor = "", p.style.borderBottomColor = "")), k && (v > 300 && v > P ? (p.classList.add("hide-on-scroll"), p.classList.remove("show-on-scroll")) : (p.classList.remove("hide-on-scroll"), p.classList.add("show-on-scroll"))), P = v, D = !1;
      };
      var m = $;
      p._stickyInitialized = !0;
      let P = 0, D = !1;
      window.addEventListener("scroll", function() {
        D || (window.requestAnimationFrame($), D = !0);
      }), $();
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
    const l = new URL(e), a = l.pathname, f = a.lastIndexOf("/"), c = a.substring(0, f + 1), p = a.substring(f + 1).replace(/_\d+x\d*(?=\.[^.]*$)/, "").replace(/_\d+x(?=\.[^.]*$)/, ""), h = p.lastIndexOf("."), g = p.substring(0, h), m = p.substring(h);
    let P;
    s && r ? P = `${g}_${s}x${r}${m}` : s ? P = `${g}_${s}x${m}` : P = p;
    const D = `${l.protocol}//${l.host}${c}${P}`, $ = new URLSearchParams(l.search);
    o !== 80 && $.set("q", o), i && $.set("crop", i);
    const v = $.toString();
    return v ? `${D}?${v}` : D;
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
window.mountVueComponents = xs;
document.addEventListener("DOMContentLoaded", () => {
  xs();
});
document.readyState !== "loading" && xs();
var Cc;
((Cc = window.Shopline) != null && Cc.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(`[data-section-id="${e.detail.sectionId}"]`) || document;
  xs(t);
}), document.addEventListener("shopline:section:reorder", () => {
  xs();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(
    `[data-block-id="${e.detail.blockId}"]`
  );
  t && xs(t);
}));
