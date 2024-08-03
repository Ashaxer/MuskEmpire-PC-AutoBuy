const __vite__fileDeps = ["assets/Main-DEGC7KDe.js", "assets/Main-BZnovrqc.css", "assets/Mining-Cbz9SFEg.js", "assets/Mining-BcLbtI_k.css", "assets/Improve-CKOj4fzj.js", "assets/time-CfRNpiP4.js", "assets/Improve-NBEplhmy.css", "assets/Friends-ClH8At-8.js", "assets/Friends-D7DHxYy0.css", "assets/Communities-Np4DfjFE.js", "assets/Communities-LJH60GIv.css", "assets/RichList-B73jcPsI.js", "assets/BillingTopup-DvwR-eyg.js", "assets/RichList-B82slBKa.css", "assets/Negotiations-ByuAO1xE.js", "assets/Negotiations-DX1Jfrol.css", "assets/NegotiationsLeaderboards-qL8bGrkH.js", "assets/NegotiationsLeaderboards-Dxc0xX9_.css", "assets/Quests-DipN4kRL.js", "assets/function-call-DbG90GYv.js", "assets/Quests-r0HQNMw3.css", "assets/Rating-BJvT7rqr.js", "assets/Rating-mdxeMRrV.css", "assets/Hero-CumWY7Dw.js", "assets/TonWallet-vuDoabjp.js", "assets/Hero-Sk2_iuqw.css", "assets/Lottery-BZLXyQ5Z.js", "assets/Lottery-BYEFEAtN.css", "assets/Fund-CyWEtFA3.js", "assets/Fund-CJkJcf_J.css", "assets/City-DbcgiKWY.js", "assets/City-ChfG7f96.css", "assets/City2-quHXLZBO.js", "assets/City2-DIC0QrFa.css", "assets/Store-BSeaqR-9.js", "assets/Store-CZoCuOfo.css", "assets/Binar-D9lY-u21.js", "assets/Binar-B4Ba7fJV.css", "assets/Airdrop-CEGnxVsv.js", "assets/Airdrop-DjDPG93p.css"]
  , __vite__mapDeps = i=>i.map(i=>__vite__fileDeps[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        o(a);
    new MutationObserver(a=>{
        for (const r of a)
            if (r.type === "childList")
                for (const i of r.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && o(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(a) {
        const r = {};
        return a.integrity && (r.integrity = a.integrity),
        a.referrerPolicy && (r.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? r.credentials = "include" : a.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function o(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const r = n(a);
        fetch(a.href, r)
    }
}
)();
function as() {}
const be = Object.assign
  , Dt = typeof window < "u"
  , hn = e=>e !== null && typeof e == "object"
  , De = e=>e != null
  , ea = e=>typeof e == "function"
  , Ns = e=>hn(e) && ea(e.then) && ea(e.catch)
  , La = e=>Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());
function Ju(e) {
    return e = e.replace(/[^-|\d]/g, ""),
    /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}
const ed = e=>typeof e == "number" || /^\d+(\.\d+)?$/.test(e)
  , fg = ()=>Dt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Vl(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(a=>{
        var r;
        o = hn(o) && (r = o[a]) != null ? r : ""
    }
    ),
    o
}
function Le(e, t, n) {
    return t.reduce((o,a)=>((!n || e[a] !== void 0) && (o[a] = e[a]),
    o), {})
}
const fn = (e,t)=>JSON.stringify(e) === JSON.stringify(t)
  , Rr = e=>Array.isArray(e) ? e : [e]
  , hg = e=>e.reduce((t,n)=>t.concat(n), [])
  , Qe = null
  , q = [Number, String]
  , z = {
    type: Boolean,
    default: !0
}
  , ft = e=>({
    type: e,
    required: !0
})
  , qe = ()=>({
    type: Array,
    default: ()=>[]
})
  , nt = e=>({
    type: Number,
    default: e
})
  , ce = e=>({
    type: q,
    default: e
})
  , X = e=>({
    type: String,
    default: e
});
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Hs(e, t) {
    const n = new Set(e.split(","));
    return o=>n.has(o)
}
const Ye = {}
  , Yo = []
  , Vt = ()=>{}
  , gg = ()=>!1
  , Kr = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , zs = e=>e.startsWith("onUpdate:")
  , at = Object.assign
  , js = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , mg = Object.prototype.hasOwnProperty
  , Re = (e,t)=>mg.call(e, t)
  , we = Array.isArray
  , qo = e=>Gr(e) === "[object Map]"
  , td = e=>Gr(e) === "[object Set]"
  , Te = e=>typeof e == "function"
  , Ze = e=>typeof e == "string"
  , Po = e=>typeof e == "symbol"
  , Ke = e=>e !== null && typeof e == "object"
  , nd = e=>(Ke(e) || Te(e)) && Te(e.then) && Te(e.catch)
  , od = Object.prototype.toString
  , Gr = e=>od.call(e)
  , vg = e=>Gr(e).slice(8, -1)
  , ad = e=>Gr(e) === "[object Object]"
  , Us = e=>Ze(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ka = Hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Xr = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , bg = /-(\w)/g
  , gn = Xr(e=>e.replace(bg, (t,n)=>n ? n.toUpperCase() : ""))
  , yg = /\B([A-Z])/g
  , oo = Xr(e=>e.replace(yg, "-$1").toLowerCase())
  , Qr = Xr(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , xi = Xr(e=>e ? `on${Qr(e)}` : "")
  , to = (e,t)=>!Object.is(e, t)
  , ki = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , rd = (e,t,n,o=!1)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: o,
        value: n
    })
}
  , pg = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , wg = e=>{
    const t = Ze(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Nl;
const id = ()=>Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Tt(e) {
    if (we(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , a = Ze(o) ? xg(o) : Tt(o);
            if (a)
                for (const r in a)
                    t[r] = a[r]
        }
        return t
    } else if (Ze(e) || Ke(e))
        return e
}
const Sg = /;(?![^(]*\))/g
  , Cg = /:([^]+)/
  , _g = /\/\*[^]*?\*\//g;
function xg(e) {
    const t = {};
    return e.replace(_g, "").split(Sg).forEach(n=>{
        if (n) {
            const o = n.split(Cg);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }
    ),
    t
}
function kg(e) {
    let t = "";
    if (!e || Ze(e))
        return t;
    for (const n in e) {
        const o = e[n];
        if (Ze(o) || typeof o == "number") {
            const a = n.startsWith("--") ? n : oo(n);
            t += `${a}:${o};`
        }
    }
    return t
}
function Nt(e) {
    let t = "";
    if (Ze(e))
        t = e;
    else if (we(e))
        for (let n = 0; n < e.length; n++) {
            const o = Nt(e[n]);
            o && (t += o + " ")
        }
    else if (Ke(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Tg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Pg = Hs(Tg);
function sd(e) {
    return !!e || e === ""
}
const te = e=>Ze(e) ? e : e == null ? "" : we(e) || Ke(e) && (e.toString === od || !Te(e.toString)) ? JSON.stringify(e, ld, 2) : String(e)
  , ld = (e,t)=>t && t.__v_isRef ? ld(e, t.value) : qo(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[o,a],r)=>(n[Ti(o, r) + " =>"] = a,
    n), {})
} : td(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Ti(n))
} : Po(t) ? Ti(t) : Ke(t) && !we(t) && !ad(t) ? String(t) : t
  , Ti = (e,t="")=>{
    var n;
    return Po(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ot;
class cd {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Ot,
        !t && Ot && (this.index = (Ot.scopes || (Ot.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ot;
            try {
                return Ot = this,
                t()
            } finally {
                Ot = n
            }
        }
    }
    on() {
        Ot = this
    }
    off() {
        Ot = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, o;
            for (n = 0,
            o = this.effects.length; n < o; n++)
                this.effects[n].stop();
            for (n = 0,
            o = this.cleanups.length; n < o; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                o = this.scopes.length; n < o; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const a = this.parent.scopes.pop();
                a && a !== this && (this.parent.scopes[this.index] = a,
                a.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function ud(e) {
    return new cd(e)
}
function Eg(e, t=Ot) {
    t && t.active && t.effects.push(e)
}
function dd() {
    return Ot
}
function Ag(e) {
    Ot && Ot.cleanups.push(e)
}
let So;
class Ws {
    constructor(t, n, o, a) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = o,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Eg(this, a)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            ao();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Bg(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            ro()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = Jn
          , n = So;
        try {
            return Jn = !0,
            So = this,
            this._runnings++,
            Hl(this),
            this.fn()
        } finally {
            zl(this),
            this._runnings--,
            So = n,
            Jn = t
        }
    }
    stop() {
        this.active && (Hl(this),
        zl(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function Bg(e) {
    return e.value
}
function Hl(e) {
    e._trackId++,
    e._depsLength = 0
}
function zl(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            fd(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function fd(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let Jn = !0
  , rs = 0;
const hd = [];
function ao() {
    hd.push(Jn),
    Jn = !1
}
function ro() {
    const e = hd.pop();
    Jn = e === void 0 ? !0 : e
}
function Ys() {
    rs++
}
function qs() {
    for (rs--; !rs && is.length; )
        is.shift()()
}
function gd(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const o = e.deps[e._depsLength];
        o !== t ? (o && fd(o, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const is = [];
function md(e, t, n) {
    Ys();
    for (const o of e.keys()) {
        let a;
        o._dirtyLevel < t && (a ?? (a = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0),
        o._dirtyLevel = t),
        o._shouldSchedule && (a ?? (a = e.get(o) === o._trackId)) && (o.trigger(),
        (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1,
        o.scheduler && is.push(o.scheduler)))
    }
    qs()
}
const vd = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Lr = new WeakMap
  , Co = Symbol("")
  , ss = Symbol("");
function At(e, t, n) {
    if (Jn && So) {
        let o = Lr.get(e);
        o || Lr.set(e, o = new Map);
        let a = o.get(n);
        a || o.set(n, a = vd(()=>o.delete(n))),
        gd(So, a)
    }
}
function xn(e, t, n, o, a, r) {
    const i = Lr.get(e);
    if (!i)
        return;
    let s = [];
    if (t === "clear")
        s = [...i.values()];
    else if (n === "length" && we(e)) {
        const l = Number(o);
        i.forEach((c,u)=>{
            (u === "length" || !Po(u) && u >= l) && s.push(c)
        }
        )
    } else
        switch (n !== void 0 && s.push(i.get(n)),
        t) {
        case "add":
            we(e) ? Us(n) && s.push(i.get("length")) : (s.push(i.get(Co)),
            qo(e) && s.push(i.get(ss)));
            break;
        case "delete":
            we(e) || (s.push(i.get(Co)),
            qo(e) && s.push(i.get(ss)));
            break;
        case "set":
            qo(e) && s.push(i.get(Co));
            break
        }
    Ys();
    for (const l of s)
        l && md(l, 4);
    qs()
}
function Og(e, t) {
    const n = Lr.get(e);
    return n && n.get(t)
}
const Ig = Hs("__proto__,__v_isRef,__isVue")
  , bd = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Po))
  , jl = $g();
function $g() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const o = Me(this);
            for (let r = 0, i = this.length; r < i; r++)
                At(o, "get", r + "");
            const a = o[t](...n);
            return a === -1 || a === !1 ? o[t](...n.map(Me)) : a
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            ao(),
            Ys();
            const o = Me(this)[t].apply(this, n);
            return qs(),
            ro(),
            o
        }
    }
    ),
    e
}
function Dg(e) {
    Po(e) || (e = String(e));
    const t = Me(this);
    return At(t, "has", e),
    t.hasOwnProperty(e)
}
class yd {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, o) {
        const a = this._isReadonly
          , r = this._isShallow;
        if (n === "__v_isReactive")
            return !a;
        if (n === "__v_isReadonly")
            return a;
        if (n === "__v_isShallow")
            return r;
        if (n === "__v_raw")
            return o === (a ? r ? qg : Cd : r ? Sd : wd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
        const i = we(t);
        if (!a) {
            if (i && Re(jl, n))
                return Reflect.get(jl, n, o);
            if (n === "hasOwnProperty")
                return Dg
        }
        const s = Reflect.get(t, n, o);
        return (Po(n) ? bd.has(n) : Ig(n)) || (a || At(t, "get", n),
        r) ? s : rt(s) ? i && Us(n) ? s : s.value : Ke(s) ? a ? xd(s) : Ge(s) : s
    }
}
class pd extends yd {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, o, a) {
        let r = t[n];
        if (!this._isShallow) {
            const l = Ma(r);
            if (!Mr(o) && !Ma(o) && (r = Me(r),
            o = Me(o)),
            !we(t) && rt(r) && !rt(o))
                return l ? !1 : (r.value = o,
                !0)
        }
        const i = we(t) && Us(n) ? Number(n) < t.length : Re(t, n)
          , s = Reflect.set(t, n, o, a);
        return t === Me(a) && (i ? to(o, r) && xn(t, "set", n, o) : xn(t, "add", n, o)),
        s
    }
    deleteProperty(t, n) {
        const o = Re(t, n);
        t[n];
        const a = Reflect.deleteProperty(t, n);
        return a && o && xn(t, "delete", n, void 0),
        a
    }
    has(t, n) {
        const o = Reflect.has(t, n);
        return (!Po(n) || !bd.has(n)) && At(t, "has", n),
        o
    }
    ownKeys(t) {
        return At(t, "iterate", we(t) ? "length" : Co),
        Reflect.ownKeys(t)
    }
}
class Rg extends yd {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Lg = new pd
  , Mg = new Rg
  , Fg = new pd(!0);
const Ks = e=>e
  , Zr = e=>Reflect.getPrototypeOf(e);
function tr(e, t, n=!1, o=!1) {
    e = e.__v_raw;
    const a = Me(e)
      , r = Me(t);
    n || (to(t, r) && At(a, "get", t),
    At(a, "get", r));
    const {has: i} = Zr(a)
      , s = o ? Ks : n ? Zs : Fa;
    if (i.call(a, t))
        return s(e.get(t));
    if (i.call(a, r))
        return s(e.get(r));
    e !== a && e.get(t)
}
function nr(e, t=!1) {
    const n = this.__v_raw
      , o = Me(n)
      , a = Me(e);
    return t || (to(e, a) && At(o, "has", e),
    At(o, "has", a)),
    e === a ? n.has(e) : n.has(e) || n.has(a)
}
function or(e, t=!1) {
    return e = e.__v_raw,
    !t && At(Me(e), "iterate", Co),
    Reflect.get(e, "size", e)
}
function Ul(e) {
    e = Me(e);
    const t = Me(this);
    return Zr(t).has.call(t, e) || (t.add(e),
    xn(t, "add", e, e)),
    this
}
function Wl(e, t) {
    t = Me(t);
    const n = Me(this)
      , {has: o, get: a} = Zr(n);
    let r = o.call(n, e);
    r || (e = Me(e),
    r = o.call(n, e));
    const i = a.call(n, e);
    return n.set(e, t),
    r ? to(t, i) && xn(n, "set", e, t) : xn(n, "add", e, t),
    this
}
function Yl(e) {
    const t = Me(this)
      , {has: n, get: o} = Zr(t);
    let a = n.call(t, e);
    a || (e = Me(e),
    a = n.call(t, e)),
    o && o.call(t, e);
    const r = t.delete(e);
    return a && xn(t, "delete", e, void 0),
    r
}
function ql() {
    const e = Me(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && xn(e, "clear", void 0, void 0),
    n
}
function ar(e, t) {
    return function(o, a) {
        const r = this
          , i = r.__v_raw
          , s = Me(i)
          , l = t ? Ks : e ? Zs : Fa;
        return !e && At(s, "iterate", Co),
        i.forEach((c,u)=>o.call(a, l(c), l(u), r))
    }
}
function rr(e, t, n) {
    return function(...o) {
        const a = this.__v_raw
          , r = Me(a)
          , i = qo(r)
          , s = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , c = a[e](...o)
          , u = n ? Ks : t ? Zs : Fa;
        return !t && At(r, "iterate", l ? ss : Co),
        {
            next() {
                const {value: f, done: h} = c.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: s ? [u(f[0]), u(f[1])] : u(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Ln(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Vg() {
    const e = {
        get(r) {
            return tr(this, r)
        },
        get size() {
            return or(this)
        },
        has: nr,
        add: Ul,
        set: Wl,
        delete: Yl,
        clear: ql,
        forEach: ar(!1, !1)
    }
      , t = {
        get(r) {
            return tr(this, r, !1, !0)
        },
        get size() {
            return or(this)
        },
        has: nr,
        add: Ul,
        set: Wl,
        delete: Yl,
        clear: ql,
        forEach: ar(!1, !0)
    }
      , n = {
        get(r) {
            return tr(this, r, !0)
        },
        get size() {
            return or(this, !0)
        },
        has(r) {
            return nr.call(this, r, !0)
        },
        add: Ln("add"),
        set: Ln("set"),
        delete: Ln("delete"),
        clear: Ln("clear"),
        forEach: ar(!0, !1)
    }
      , o = {
        get(r) {
            return tr(this, r, !0, !0)
        },
        get size() {
            return or(this, !0)
        },
        has(r) {
            return nr.call(this, r, !0)
        },
        add: Ln("add"),
        set: Ln("set"),
        delete: Ln("delete"),
        clear: Ln("clear"),
        forEach: ar(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r=>{
        e[r] = rr(r, !1, !1),
        n[r] = rr(r, !0, !1),
        t[r] = rr(r, !1, !0),
        o[r] = rr(r, !0, !0)
    }
    ),
    [e, n, t, o]
}
const [Ng,Hg,zg,jg] = Vg();
function Gs(e, t) {
    const n = t ? e ? jg : zg : e ? Hg : Ng;
    return (o,a,r)=>a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? o : Reflect.get(Re(n, a) && a in o ? n : o, a, r)
}
const Ug = {
    get: Gs(!1, !1)
}
  , Wg = {
    get: Gs(!1, !0)
}
  , Yg = {
    get: Gs(!0, !1)
};
const wd = new WeakMap
  , Sd = new WeakMap
  , Cd = new WeakMap
  , qg = new WeakMap;
function Kg(e) {
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
        return 0
    }
}
function Gg(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Kg(vg(e))
}
function Ge(e) {
    return Ma(e) ? e : Xs(e, !1, Lg, Ug, wd)
}
function _d(e) {
    return Xs(e, !1, Fg, Wg, Sd)
}
function xd(e) {
    return Xs(e, !0, Mg, Yg, Cd)
}
function Xs(e, t, n, o, a) {
    if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const r = a.get(e);
    if (r)
        return r;
    const i = Gg(e);
    if (i === 0)
        return e;
    const s = new Proxy(e,i === 2 ? o : n);
    return a.set(e, s),
    s
}
function _o(e) {
    return Ma(e) ? _o(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ma(e) {
    return !!(e && e.__v_isReadonly)
}
function Mr(e) {
    return !!(e && e.__v_isShallow)
}
function kd(e) {
    return e ? !!e.__v_raw : !1
}
function Me(e) {
    const t = e && e.__v_raw;
    return t ? Me(t) : e
}
function Qs(e) {
    return Object.isExtensible(e) && rd(e, "__v_skip", !0),
    e
}
const Fa = e=>Ke(e) ? Ge(e) : e
  , Zs = e=>Ke(e) ? xd(e) : e;
class Td {
    constructor(t, n, o, a) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Ws(()=>t(this._value),()=>Ar(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !a,
        this.__v_isReadonly = o
    }
    get value() {
        const t = Me(this);
        return (!t._cacheable || t.effect.dirty) && to(t._value, t._value = t.effect.run()) && Ar(t, 4),
        Pd(t),
        t.effect._dirtyLevel >= 2 && Ar(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function Xg(e, t, n=!1) {
    let o, a;
    const r = Te(e);
    return r ? (o = e,
    a = Vt) : (o = e.get,
    a = e.set),
    new Td(o,a,r || !a,n)
}
function Pd(e) {
    var t;
    Jn && So && (e = Me(e),
    gd(So, (t = e.dep) != null ? t : e.dep = vd(()=>e.dep = void 0, e instanceof Td ? e : void 0)))
}
function Ar(e, t=4, n) {
    e = Me(e);
    const o = e.dep;
    o && md(o, t)
}
function rt(e) {
    return !!(e && e.__v_isRef === !0)
}
function R(e) {
    return Ed(e, !1)
}
function Qg(e) {
    return Ed(e, !0)
}
function Ed(e, t) {
    return rt(e) ? e : new Zg(e,t)
}
class Zg {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Me(t),
        this._value = n ? t : Fa(t)
    }
    get value() {
        return Pd(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Mr(t) || Ma(t);
        t = n ? t : Me(t),
        to(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : Fa(t),
        Ar(this, 4))
    }
}
function Xt(e) {
    return rt(e) ? e.value : e
}
const Jg = {
    get: (e,t,n)=>Xt(Reflect.get(e, t, n)),
    set: (e,t,n,o)=>{
        const a = e[t];
        return rt(a) && !rt(n) ? (a.value = n,
        !0) : Reflect.set(e, t, n, o)
    }
};
function Ad(e) {
    return _o(e) ? e : new Proxy(e,Jg)
}
function em(e) {
    const t = we(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = nm(e, n);
    return t
}
class tm {
    constructor(t, n, o) {
        this._object = t,
        this._key = n,
        this._defaultValue = o,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Og(Me(this._object), this._key)
    }
}
function nm(e, t, n) {
    const o = e[t];
    return rt(o) ? o : new tm(e,t,n)
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function eo(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (a) {
        Jr(a, t, n)
    }
}
function Ht(e, t, n, o) {
    if (Te(e)) {
        const a = eo(e, t, n, o);
        return a && nd(a) && a.catch(r=>{
            Jr(r, t, n)
        }
        ),
        a
    }
    if (we(e)) {
        const a = [];
        for (let r = 0; r < e.length; r++)
            a.push(Ht(e[r], t, n, o));
        return a
    }
}
function Jr(e, t, n, o=!0) {
    const a = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const i = t.proxy
          , s = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r; ) {
            const c = r.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, i, s) === !1)
                        return
            }
            r = r.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            ao(),
            eo(l, null, 10, [e, i, s]),
            ro();
            return
        }
    }
    om(e, n, a, o)
}
function om(e, t, n, o=!0) {
    console.error(e)
}
let Va = !1
  , ls = !1;
const bt = [];
let dn = 0;
const Ko = [];
let qn = null
  , yo = 0;
const Bd = Promise.resolve();
let Js = null;
function Pe(e) {
    const t = Js || Bd;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function am(e) {
    let t = dn + 1
      , n = bt.length;
    for (; t < n; ) {
        const o = t + n >>> 1
          , a = bt[o]
          , r = Na(a);
        r < e || r === e && a.pre ? t = o + 1 : n = o
    }
    return t
}
function el(e) {
    (!bt.length || !bt.includes(e, Va && e.allowRecurse ? dn + 1 : dn)) && (e.id == null ? bt.push(e) : bt.splice(am(e.id), 0, e),
    Od())
}
function Od() {
    !Va && !ls && (ls = !0,
    Js = Bd.then($d))
}
function rm(e) {
    const t = bt.indexOf(e);
    t > dn && bt.splice(t, 1)
}
function im(e) {
    we(e) ? Ko.push(...e) : (!qn || !qn.includes(e, e.allowRecurse ? yo + 1 : yo)) && Ko.push(e),
    Od()
}
function Kl(e, t, n=Va ? dn + 1 : 0) {
    for (; n < bt.length; n++) {
        const o = bt[n];
        if (o && o.pre) {
            if (e && o.id !== e.uid)
                continue;
            bt.splice(n, 1),
            n--,
            o()
        }
    }
}
function Id(e) {
    if (Ko.length) {
        const t = [...new Set(Ko)].sort((n,o)=>Na(n) - Na(o));
        if (Ko.length = 0,
        qn) {
            qn.push(...t);
            return
        }
        for (qn = t,
        yo = 0; yo < qn.length; yo++)
            qn[yo]();
        qn = null,
        yo = 0
    }
}
const Na = e=>e.id == null ? 1 / 0 : e.id
  , sm = (e,t)=>{
    const n = Na(e) - Na(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function $d(e) {
    ls = !1,
    Va = !0,
    bt.sort(sm);
    try {
        for (dn = 0; dn < bt.length; dn++) {
            const t = bt[dn];
            t && t.active !== !1 && eo(t, null, 14)
        }
    } finally {
        dn = 0,
        bt.length = 0,
        Id(),
        Va = !1,
        Js = null,
        (bt.length || Ko.length) && $d()
    }
}
function lm(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const o = e.vnode.props || Ye;
    let a = n;
    const r = t.startsWith("update:")
      , i = r && t.slice(7);
    if (i && i in o) {
        const u = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: f, trim: h} = o[u] || Ye;
        h && (a = n.map(g=>Ze(g) ? g.trim() : g)),
        f && (a = n.map(pg))
    }
    let s, l = o[s = xi(t)] || o[s = xi(gn(t))];
    !l && r && (l = o[s = xi(oo(t))]),
    l && Ht(l, e, 6, a);
    const c = o[s + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[s])
            return;
        e.emitted[s] = !0,
        Ht(c, e, 6, a)
    }
}
function Dd(e, t, n=!1) {
    const o = t.emitsCache
      , a = o.get(e);
    if (a !== void 0)
        return a;
    const r = e.emits;
    let i = {}
      , s = !1;
    if (!Te(e)) {
        const l = c=>{
            const u = Dd(c, t, !0);
            u && (s = !0,
            at(i, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !r && !s ? (Ke(e) && o.set(e, null),
    null) : (we(r) ? r.forEach(l=>i[l] = null) : at(i, r),
    Ke(e) && o.set(e, i),
    i)
}
function ei(e, t) {
    return !e || !Kr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Re(e, t[0].toLowerCase() + t.slice(1)) || Re(e, oo(t)) || Re(e, t))
}
let ot = null
  , ti = null;
function Fr(e) {
    const t = ot;
    return ot = e,
    ti = e && e.type.__scopeId || null,
    t
}
function Rd(e) {
    ti = e
}
function Ld() {
    ti = null
}
function ge(e, t=ot, n) {
    if (!t || e._n)
        return e;
    const o = (...a)=>{
        o._d && lc(-1);
        const r = Fr(t);
        let i;
        try {
            i = e(...a)
        } finally {
            Fr(r),
            o._d && lc(1)
        }
        return i
    }
    ;
    return o._n = !0,
    o._c = !0,
    o._d = !0,
    o
}
function Pi(e) {
    const {type: t, vnode: n, proxy: o, withProxy: a, propsOptions: [r], slots: i, attrs: s, emit: l, render: c, renderCache: u, props: f, data: h, setupState: g, ctx: S, inheritAttrs: p} = e
      , b = Fr(e);
    let v, m;
    try {
        if (n.shapeFlag & 4) {
            const w = a || o
              , C = w;
            v = un(c.call(C, w, u, f, g, h, S)),
            m = s
        } else {
            const w = t;
            v = un(w.length > 1 ? w(f, {
                attrs: s,
                slots: i,
                emit: l
            }) : w(f, null)),
            m = t.props ? s : cm(s)
        }
    } catch (w) {
        Aa.length = 0,
        Jr(w, e, 1),
        v = d(kt)
    }
    let y = v;
    if (m && p !== !1) {
        const w = Object.keys(m)
          , {shapeFlag: C} = y;
        w.length && C & 7 && (r && w.some(zs) && (m = um(m, r)),
        y = no(y, m, !1, !0))
    }
    return n.dirs && (y = no(y, null, !1, !0),
    y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs),
    n.transition && (y.transition = n.transition),
    v = y,
    Fr(b),
    v
}
const cm = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Kr(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , um = (e,t)=>{
    const n = {};
    for (const o in e)
        (!zs(o) || !(o.slice(9)in t)) && (n[o] = e[o]);
    return n
}
;
function dm(e, t, n) {
    const {props: o, children: a, component: r} = e
      , {props: i, children: s, patchFlag: l} = t
      , c = r.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return o ? Gl(o, i, c) : !!i;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const h = u[f];
                if (i[h] !== o[h] && !ei(c, h))
                    return !0
            }
        }
    } else
        return (a || s) && (!s || !s.$stable) ? !0 : o === i ? !1 : o ? i ? Gl(o, i, c) : !0 : !!i;
    return !1
}
function Gl(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length)
        return !0;
    for (let a = 0; a < o.length; a++) {
        const r = o[a];
        if (t[r] !== e[r] && !ei(n, r))
            return !0
    }
    return !1
}
function fm({vnode: e, parent: t}, n) {
    for (; t; ) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el),
        o === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Md = "components"
  , hm = "directives";
function Ne(e, t) {
    return Fd(Md, e, !0, t) || e
}
const gm = Symbol.for("v-ndc");
function mm(e) {
    return Fd(hm, e)
}
function Fd(e, t, n=!0, o=!1) {
    const a = ot || dt;
    if (a) {
        const r = a.type;
        if (e === Md) {
            const s = lv(r, !1);
            if (s && (s === t || s === gn(t) || s === Qr(gn(t))))
                return r
        }
        const i = Xl(a[e] || r[e], t) || Xl(a.appContext[e], t);
        return !i && o ? r : i
    }
}
function Xl(e, t) {
    return e && (e[t] || e[gn(t)] || e[Qr(gn(t))])
}
const vm = e=>e.__isSuspense;
function bm(e, t) {
    t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : im(e)
}
const ym = Symbol.for("v-scx")
  , pm = ()=>Pt(ym);
function ra(e, t) {
    return tl(e, null, t)
}
const ir = {};
function ae(e, t, n) {
    return tl(e, t, n)
}
function tl(e, t, {immediate: n, deep: o, flush: a, once: r, onTrack: i, onTrigger: s}=Ye) {
    if (t && r) {
        const x = t;
        t = (...B)=>{
            x(...B),
            C()
        }
    }
    const l = dt
      , c = x=>o === !0 ? x : wo(x, o === !1 ? 1 : void 0);
    let u, f = !1, h = !1;
    if (rt(e) ? (u = ()=>e.value,
    f = Mr(e)) : _o(e) ? (u = ()=>c(e),
    f = !0) : we(e) ? (h = !0,
    f = e.some(x=>_o(x) || Mr(x)),
    u = ()=>e.map(x=>{
        if (rt(x))
            return x.value;
        if (_o(x))
            return c(x);
        if (Te(x))
            return eo(x, l, 2)
    }
    )) : Te(e) ? t ? u = ()=>eo(e, l, 2) : u = ()=>(g && g(),
    Ht(e, l, 3, [S])) : u = Vt,
    t && o) {
        const x = u;
        u = ()=>wo(x())
    }
    let g, S = x=>{
        g = y.onStop = ()=>{
            eo(x, l, 4),
            g = y.onStop = void 0
        }
    }
    , p;
    if (ai)
        if (S = Vt,
        t ? n && Ht(t, l, 3, [u(), h ? [] : void 0, S]) : u(),
        a === "sync") {
            const x = pm();
            p = x.__watcherHandles || (x.__watcherHandles = [])
        } else
            return Vt;
    let b = h ? new Array(e.length).fill(ir) : ir;
    const v = ()=>{
        if (!(!y.active || !y.dirty))
            if (t) {
                const x = y.run();
                (o || f || (h ? x.some((B,_)=>to(B, b[_])) : to(x, b))) && (g && g(),
                Ht(t, l, 3, [x, b === ir ? void 0 : h && b[0] === ir ? [] : b, S]),
                b = x)
            } else
                y.run()
    }
    ;
    v.allowRecurse = !!t;
    let m;
    a === "sync" ? m = v : a === "post" ? m = ()=>Et(v, l && l.suspense) : (v.pre = !0,
    l && (v.id = l.uid),
    m = ()=>el(v));
    const y = new Ws(u,Vt,m)
      , w = dd()
      , C = ()=>{
        y.stop(),
        w && js(w.effects, y)
    }
    ;
    return t ? n ? v() : b = y.run() : a === "post" ? Et(y.run.bind(y), l && l.suspense) : y.run(),
    p && p.push(C),
    C
}
function wm(e, t, n) {
    const o = this.proxy
      , a = Ze(e) ? e.includes(".") ? Vd(o, e) : ()=>o[e] : e.bind(o, o);
    let r;
    Te(t) ? r = t : (r = t.handler,
    n = t);
    const i = Ja(this)
      , s = tl(a, r.bind(o), n);
    return i(),
    s
}
function Vd(e, t) {
    const n = t.split(".");
    return ()=>{
        let o = e;
        for (let a = 0; a < n.length && o; a++)
            o = o[n[a]];
        return o
    }
}
function wo(e, t=1 / 0, n) {
    if (t <= 0 || !Ke(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    rt(e))
        wo(e.value, t, n);
    else if (we(e))
        for (let o = 0; o < e.length; o++)
            wo(e[o], t, n);
    else if (td(e) || qo(e))
        e.forEach(o=>{
            wo(o, t, n)
        }
        );
    else if (ad(e))
        for (const o in e)
            wo(e[o], t, n);
    return e
}
function st(e, t) {
    if (ot === null)
        return e;
    const n = ri(ot) || ot.proxy
      , o = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let[r,i,s,l=Ye] = t[a];
        r && (Te(r) && (r = {
            mounted: r,
            updated: r
        }),
        r.deep && wo(i),
        o.push({
            dir: r,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: s,
            modifiers: l
        }))
    }
    return e
}
function fo(e, t, n, o) {
    const a = e.dirs
      , r = t && t.dirs;
    for (let i = 0; i < a.length; i++) {
        const s = a[i];
        r && (s.oldValue = r[i].value);
        let l = s.dir[o];
        l && (ao(),
        Ht(l, n, 8, [e.el, s, e, t]),
        ro())
    }
}
const Kn = Symbol("_leaveCb")
  , sr = Symbol("_enterCb");
function Sm() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return tt(()=>{
        e.isMounted = !0
    }
    ),
    bn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Lt = [Function, Array]
  , Nd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Lt,
    onEnter: Lt,
    onAfterEnter: Lt,
    onEnterCancelled: Lt,
    onBeforeLeave: Lt,
    onLeave: Lt,
    onAfterLeave: Lt,
    onLeaveCancelled: Lt,
    onBeforeAppear: Lt,
    onAppear: Lt,
    onAfterAppear: Lt,
    onAppearCancelled: Lt
}
  , Cm = {
    name: "BaseTransition",
    props: Nd,
    setup(e, {slots: t}) {
        const n = en()
          , o = Sm();
        return ()=>{
            const a = t.default && zd(t.default(), !0);
            if (!a || !a.length)
                return;
            let r = a[0];
            if (a.length > 1) {
                for (const h of a)
                    if (h.type !== kt) {
                        r = h;
                        break
                    }
            }
            const i = Me(e)
              , {mode: s} = i;
            if (o.isLeaving)
                return Ei(r);
            const l = Ql(r);
            if (!l)
                return Ei(r);
            const c = cs(l, i, o, n);
            us(l, c);
            const u = n.subTree
              , f = u && Ql(u);
            if (f && f.type !== kt && !po(l, f)) {
                const h = cs(f, i, o, n);
                if (us(f, h),
                s === "out-in" && l.type !== kt)
                    return o.isLeaving = !0,
                    h.afterLeave = ()=>{
                        o.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ei(r);
                s === "in-out" && l.type !== kt && (h.delayLeave = (g,S,p)=>{
                    const b = Hd(o, f);
                    b[String(f.key)] = f,
                    g[Kn] = ()=>{
                        S(),
                        g[Kn] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = p
                }
                )
            }
            return r
        }
    }
}
  , _m = Cm;
function Hd(e, t) {
    const {leavingVNodes: n} = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null),
    n.set(t.type, o)),
    o
}
function cs(e, t, n, o) {
    const {appear: a, mode: r, persisted: i=!1, onBeforeEnter: s, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: h, onAfterLeave: g, onLeaveCancelled: S, onBeforeAppear: p, onAppear: b, onAfterAppear: v, onAppearCancelled: m} = t
      , y = String(e.key)
      , w = Hd(n, e)
      , C = (_,O)=>{
        _ && Ht(_, o, 9, O)
    }
      , x = (_,O)=>{
        const I = O[1];
        C(_, O),
        we(_) ? _.every(k=>k.length <= 1) && I() : _.length <= 1 && I()
    }
      , B = {
        mode: r,
        persisted: i,
        beforeEnter(_) {
            let O = s;
            if (!n.isMounted)
                if (a)
                    O = p || s;
                else
                    return;
            _[Kn] && _[Kn](!0);
            const I = w[y];
            I && po(e, I) && I.el[Kn] && I.el[Kn](),
            C(O, [_])
        },
        enter(_) {
            let O = l
              , I = c
              , k = u;
            if (!n.isMounted)
                if (a)
                    O = b || l,
                    I = v || c,
                    k = m || u;
                else
                    return;
            let E = !1;
            const D = _[sr] = Q=>{
                E || (E = !0,
                Q ? C(k, [_]) : C(I, [_]),
                B.delayedLeave && B.delayedLeave(),
                _[sr] = void 0)
            }
            ;
            O ? x(O, [_, D]) : D()
        },
        leave(_, O) {
            const I = String(e.key);
            if (_[sr] && _[sr](!0),
            n.isUnmounting)
                return O();
            C(f, [_]);
            let k = !1;
            const E = _[Kn] = D=>{
                k || (k = !0,
                O(),
                D ? C(S, [_]) : C(g, [_]),
                _[Kn] = void 0,
                w[I] === e && delete w[I])
            }
            ;
            w[I] = e,
            h ? x(h, [_, E]) : E()
        },
        clone(_) {
            return cs(_, t, n, o)
        }
    };
    return B
}
function Ei(e) {
    if (ni(e))
        return e = no(e),
        e.children = null,
        e
}
function Ql(e) {
    if (!ni(e))
        return e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && Te(n.default))
            return n.default()
    }
}
function us(e, t) {
    e.shapeFlag & 6 && e.component ? us(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function zd(e, t=!1, n) {
    let o = []
      , a = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        const s = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
        i.type === Fe ? (i.patchFlag & 128 && a++,
        o = o.concat(zd(i.children, t, s))) : (t || i.type !== kt) && o.push(s != null ? no(i, {
            key: s
        }) : i)
    }
    if (a > 1)
        for (let r = 0; r < o.length; r++)
            o[r].patchFlag = -2;
    return o
}
/*! #__NO_SIDE_EFFECTS__ */
function j(e, t) {
    return Te(e) ? at({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Ta = e=>!!e.type.__asyncLoader
  , ni = e=>e.type.__isKeepAlive;
function mn(e, t) {
    jd(e, "a", t)
}
function vn(e, t) {
    jd(e, "da", t)
}
function jd(e, t, n=dt) {
    const o = e.__wdc || (e.__wdc = ()=>{
        let a = n;
        for (; a; ) {
            if (a.isDeactivated)
                return;
            a = a.parent
        }
        return e()
    }
    );
    if (oi(t, o, n),
    n) {
        let a = n.parent;
        for (; a && a.parent; )
            ni(a.parent.vnode) && xm(o, t, n, a),
            a = a.parent
    }
}
function xm(e, t, n, o) {
    const a = oi(t, e, o, !0);
    ia(()=>{
        js(o[t], a)
    }
    , n)
}
function oi(e, t, n=dt, o=!1) {
    if (n) {
        const a = n[e] || (n[e] = [])
          , r = t.__weh || (t.__weh = (...i)=>{
            if (n.isUnmounted)
                return;
            ao();
            const s = Ja(n)
              , l = Ht(t, n, e, i);
            return s(),
            ro(),
            l
        }
        );
        return o ? a.unshift(r) : a.push(r),
        r
    }
}
const On = e=>(t,n=dt)=>(!ai || e === "sp") && oi(e, (...o)=>t(...o), n)
  , km = On("bm")
  , tt = On("m")
  , Ud = On("bu")
  , Wd = On("u")
  , bn = On("bum")
  , ia = On("um")
  , Tm = On("sp")
  , Pm = On("rtg")
  , Em = On("rtc");
function Am(e, t=dt) {
    oi("ec", e, t)
}
function Ha(e, t, n, o) {
    let a;
    const r = n;
    if (we(e) || Ze(e)) {
        a = new Array(e.length);
        for (let i = 0, s = e.length; i < s; i++)
            a[i] = t(e[i], i, void 0, r)
    } else if (typeof e == "number") {
        a = new Array(e);
        for (let i = 0; i < e; i++)
            a[i] = t(i + 1, i, void 0, r)
    } else if (Ke(e))
        if (e[Symbol.iterator])
            a = Array.from(e, (i,s)=>t(i, s, void 0, r));
        else {
            const i = Object.keys(e);
            a = new Array(i.length);
            for (let s = 0, l = i.length; s < l; s++) {
                const c = i[s];
                a[s] = t(e[c], c, s, r)
            }
        }
    else
        a = [];
    return a
}
function Bm(e, t) {
    for (let n = 0; n < t.length; n++) {
        const o = t[n];
        if (we(o))
            for (let a = 0; a < o.length; a++)
                e[o[a].name] = o[a].fn;
        else
            o && (e[o.name] = o.key ? (...a)=>{
                const r = o.fn(...a);
                return r && (r.key = o.key),
                r
            }
            : o.fn)
    }
    return e
}
function GE(e, t, n={}, o, a) {
    if (ot.isCE || ot.parent && Ta(ot.parent) && ot.parent.isCE)
        return n.name = t,
        d("slot", n, o);
    let r = e[t];
    r && r._c && (r._d = !1),
    Se();
    const i = r && Yd(r(n))
      , s = vt(Fe, {
        key: n.key || i && i.key || `_${t}`
    }, i || [], i && e._ === 1 ? 64 : -2);
    return r && r._c && (r._d = !0),
    s
}
function Yd(e) {
    return e.some(t=>ja(t) ? !(t.type === kt || t.type === Fe && !Yd(t.children)) : !0) ? e : null
}
const ds = e=>e ? lf(e) ? ri(e) || e.proxy : ds(e.parent) : null
  , Pa = at(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>ds(e.parent),
    $root: e=>ds(e.root),
    $emit: e=>e.emit,
    $options: e=>nl(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        el(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Pe.bind(e.proxy)),
    $watch: e=>wm.bind(e)
})
  , Ai = (e,t)=>e !== Ye && !e.__isScriptSetup && Re(e, t)
  , Om = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: o, data: a, props: r, accessCache: i, type: s, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const g = i[t];
            if (g !== void 0)
                switch (g) {
                case 1:
                    return o[t];
                case 2:
                    return a[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
                }
            else {
                if (Ai(o, t))
                    return i[t] = 1,
                    o[t];
                if (a !== Ye && Re(a, t))
                    return i[t] = 2,
                    a[t];
                if ((c = e.propsOptions[0]) && Re(c, t))
                    return i[t] = 3,
                    r[t];
                if (n !== Ye && Re(n, t))
                    return i[t] = 4,
                    n[t];
                fs && (i[t] = 0)
            }
        }
        const u = Pa[t];
        let f, h;
        if (u)
            return t === "$attrs" && At(e.attrs, "get", ""),
            u(e);
        if ((f = s.__cssModules) && (f = f[t]))
            return f;
        if (n !== Ye && Re(n, t))
            return i[t] = 4,
            n[t];
        if (h = l.config.globalProperties,
        Re(h, t))
            return h[t]
    },
    set({_: e}, t, n) {
        const {data: o, setupState: a, ctx: r} = e;
        return Ai(a, t) ? (a[t] = n,
        !0) : o !== Ye && Re(o, t) ? (o[t] = n,
        !0) : Re(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (r[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: o, appContext: a, propsOptions: r}}, i) {
        let s;
        return !!n[i] || e !== Ye && Re(e, i) || Ai(t, i) || (s = r[0]) && Re(s, i) || Re(o, i) || Re(Pa, i) || Re(a.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Zl(e) {
    return we(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
let fs = !0;
function Im(e) {
    const t = nl(e)
      , n = e.proxy
      , o = e.ctx;
    fs = !1,
    t.beforeCreate && Jl(t.beforeCreate, e, "bc");
    const {data: a, computed: r, methods: i, watch: s, provide: l, inject: c, created: u, beforeMount: f, mounted: h, beforeUpdate: g, updated: S, activated: p, deactivated: b, beforeDestroy: v, beforeUnmount: m, destroyed: y, unmounted: w, render: C, renderTracked: x, renderTriggered: B, errorCaptured: _, serverPrefetch: O, expose: I, inheritAttrs: k, components: E, directives: D, filters: Q} = t;
    if (c && $m(c, o, null),
    i)
        for (const Z in i) {
            const se = i[Z];
            Te(se) && (o[Z] = se.bind(n))
        }
    if (a) {
        const Z = a.call(n, n);
        Ke(Z) && (e.data = Ge(Z))
    }
    if (fs = !0,
    r)
        for (const Z in r) {
            const se = r[Z]
              , Ee = Te(se) ? se.bind(n, n) : Te(se.get) ? se.get.bind(n, n) : Vt
              , $e = !Te(se) && Te(se.set) ? se.set.bind(n) : Vt
              , M = $({
                get: Ee,
                set: $e
            });
            Object.defineProperty(o, Z, {
                enumerable: !0,
                configurable: !0,
                get: ()=>M.value,
                set: K=>M.value = K
            })
        }
    if (s)
        for (const Z in s)
            qd(s[Z], o, n, Z);
    if (l) {
        const Z = Te(l) ? l.call(n) : l;
        Reflect.ownKeys(Z).forEach(se=>{
            kn(se, Z[se])
        }
        )
    }
    u && Jl(u, e, "c");
    function N(Z, se) {
        we(se) ? se.forEach(Ee=>Z(Ee.bind(n))) : se && Z(se.bind(n))
    }
    if (N(km, f),
    N(tt, h),
    N(Ud, g),
    N(Wd, S),
    N(mn, p),
    N(vn, b),
    N(Am, _),
    N(Em, x),
    N(Pm, B),
    N(bn, m),
    N(ia, w),
    N(Tm, O),
    we(I))
        if (I.length) {
            const Z = e.exposed || (e.exposed = {});
            I.forEach(se=>{
                Object.defineProperty(Z, se, {
                    get: ()=>n[se],
                    set: Ee=>n[se] = Ee
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    C && e.render === Vt && (e.render = C),
    k != null && (e.inheritAttrs = k),
    E && (e.components = E),
    D && (e.directives = D)
}
function $m(e, t, n=Vt) {
    we(e) && (e = hs(e));
    for (const o in e) {
        const a = e[o];
        let r;
        Ke(a) ? "default"in a ? r = Pt(a.from || o, a.default, !0) : r = Pt(a.from || o) : r = Pt(a),
        rt(r) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: ()=>r.value,
            set: i=>r.value = i
        }) : t[o] = r
    }
}
function Jl(e, t, n) {
    Ht(we(e) ? e.map(o=>o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function qd(e, t, n, o) {
    const a = o.includes(".") ? Vd(n, o) : ()=>n[o];
    if (Ze(e)) {
        const r = t[e];
        Te(r) && ae(a, r)
    } else if (Te(e))
        ae(a, e.bind(n));
    else if (Ke(e))
        if (we(e))
            e.forEach(r=>qd(r, t, n, o));
        else {
            const r = Te(e.handler) ? e.handler.bind(n) : t[e.handler];
            Te(r) && ae(a, r, e)
        }
}
function nl(e) {
    const t = e.type
      , {mixins: n, extends: o} = t
      , {mixins: a, optionsCache: r, config: {optionMergeStrategies: i}} = e.appContext
      , s = r.get(t);
    let l;
    return s ? l = s : !a.length && !n && !o ? l = t : (l = {},
    a.length && a.forEach(c=>Vr(l, c, i, !0)),
    Vr(l, t, i)),
    Ke(t) && r.set(t, l),
    l
}
function Vr(e, t, n, o=!1) {
    const {mixins: a, extends: r} = t;
    r && Vr(e, r, n, !0),
    a && a.forEach(i=>Vr(e, i, n, !0));
    for (const i in t)
        if (!(o && i === "expose")) {
            const s = Dm[i] || n && n[i];
            e[i] = s ? s(e[i], t[i]) : t[i]
        }
    return e
}
const Dm = {
    data: ec,
    props: tc,
    emits: tc,
    methods: xa,
    computed: xa,
    beforeCreate: xt,
    created: xt,
    beforeMount: xt,
    mounted: xt,
    beforeUpdate: xt,
    updated: xt,
    beforeDestroy: xt,
    beforeUnmount: xt,
    destroyed: xt,
    unmounted: xt,
    activated: xt,
    deactivated: xt,
    errorCaptured: xt,
    serverPrefetch: xt,
    components: xa,
    directives: xa,
    watch: Lm,
    provide: ec,
    inject: Rm
};
function ec(e, t) {
    return t ? e ? function() {
        return at(Te(e) ? e.call(this, this) : e, Te(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Rm(e, t) {
    return xa(hs(e), hs(t))
}
function hs(e) {
    if (we(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function xt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function xa(e, t) {
    return e ? at(Object.create(null), e, t) : t
}
function tc(e, t) {
    return e ? we(e) && we(t) ? [...new Set([...e, ...t])] : at(Object.create(null), Zl(e), Zl(t ?? {})) : t
}
function Lm(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = at(Object.create(null), e);
    for (const o in t)
        n[o] = xt(e[o], t[o]);
    return n
}
function Kd() {
    return {
        app: null,
        config: {
            isNativeTag: gg,
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
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Mm = 0;
function Fm(e, t) {
    return function(o, a=null) {
        Te(o) || (o = at({}, o)),
        a != null && !Ke(a) && (a = null);
        const r = Kd()
          , i = new WeakSet;
        let s = !1;
        const l = r.app = {
            _uid: Mm++,
            _component: o,
            _props: a,
            _container: null,
            _context: r,
            _instance: null,
            version: uv,
            get config() {
                return r.config
            },
            set config(c) {},
            use(c, ...u) {
                return i.has(c) || (c && Te(c.install) ? (i.add(c),
                c.install(l, ...u)) : Te(c) && (i.add(c),
                c(l, ...u))),
                l
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c),
                l
            },
            component(c, u) {
                return u ? (r.components[c] = u,
                l) : r.components[c]
            },
            directive(c, u) {
                return u ? (r.directives[c] = u,
                l) : r.directives[c]
            },
            mount(c, u, f) {
                if (!s) {
                    const h = d(o, a);
                    return h.appContext = r,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(h, c) : e(h, c, f),
                    s = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    ri(h.component) || h.component.proxy
                }
            },
            unmount() {
                s && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(c, u) {
                return r.provides[c] = u,
                l
            },
            runWithContext(c) {
                const u = Go;
                Go = l;
                try {
                    return c()
                } finally {
                    Go = u
                }
            }
        };
        return l
    }
}
let Go = null;
function kn(e, t) {
    if (dt) {
        let n = dt.provides;
        const o = dt.parent && dt.parent.provides;
        o === n && (n = dt.provides = Object.create(o)),
        n[e] = t
    }
}
function Pt(e, t, n=!1) {
    const o = dt || ot;
    if (o || Go) {
        const a = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Go._context.provides;
        if (a && e in a)
            return a[e];
        if (arguments.length > 1)
            return n && Te(t) ? t.call(o && o.proxy) : t
    }
}
function Vm() {
    return !!(dt || ot || Go)
}
const Gd = {}
  , Xd = ()=>Object.create(Gd)
  , Qd = e=>Object.getPrototypeOf(e) === Gd;
function Nm(e, t, n, o=!1) {
    const a = {}
      , r = Xd();
    e.propsDefaults = Object.create(null),
    Zd(e, t, a, r);
    for (const i in e.propsOptions[0])
        i in a || (a[i] = void 0);
    n ? e.props = o ? a : _d(a) : e.type.props ? e.props = a : e.props = r,
    e.attrs = r
}
function Hm(e, t, n, o) {
    const {props: a, attrs: r, vnode: {patchFlag: i}} = e
      , s = Me(a)
      , [l] = e.propsOptions;
    let c = !1;
    if ((o || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let h = u[f];
                if (ei(e.emitsOptions, h))
                    continue;
                const g = t[h];
                if (l)
                    if (Re(r, h))
                        g !== r[h] && (r[h] = g,
                        c = !0);
                    else {
                        const S = gn(h);
                        a[S] = gs(l, s, S, g, e, !1)
                    }
                else
                    g !== r[h] && (r[h] = g,
                    c = !0)
            }
        }
    } else {
        Zd(e, t, a, r) && (c = !0);
        let u;
        for (const f in s)
            (!t || !Re(t, f) && ((u = oo(f)) === f || !Re(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (a[f] = gs(l, s, f, void 0, e, !0)) : delete a[f]);
        if (r !== s)
            for (const f in r)
                (!t || !Re(t, f)) && (delete r[f],
                c = !0)
    }
    c && xn(e.attrs, "set", "")
}
function Zd(e, t, n, o) {
    const [a,r] = e.propsOptions;
    let i = !1, s;
    if (t)
        for (let l in t) {
            if (ka(l))
                continue;
            const c = t[l];
            let u;
            a && Re(a, u = gn(l)) ? !r || !r.includes(u) ? n[u] = c : (s || (s = {}))[u] = c : ei(e.emitsOptions, l) || (!(l in o) || c !== o[l]) && (o[l] = c,
            i = !0)
        }
    if (r) {
        const l = Me(n)
          , c = s || Ye;
        for (let u = 0; u < r.length; u++) {
            const f = r[u];
            n[f] = gs(a, l, f, c[f], e, !Re(c, f))
        }
    }
    return i
}
function gs(e, t, n, o, a, r) {
    const i = e[n];
    if (i != null) {
        const s = Re(i, "default");
        if (s && o === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && Te(l)) {
                const {propsDefaults: c} = a;
                if (n in c)
                    o = c[n];
                else {
                    const u = Ja(a);
                    o = c[n] = l.call(null, t),
                    u()
                }
            } else
                o = l
        }
        i[0] && (r && !s ? o = !1 : i[1] && (o === "" || o === oo(n)) && (o = !0))
    }
    return o
}
function Jd(e, t, n=!1) {
    const o = t.propsCache
      , a = o.get(e);
    if (a)
        return a;
    const r = e.props
      , i = {}
      , s = [];
    let l = !1;
    if (!Te(e)) {
        const u = f=>{
            l = !0;
            const [h,g] = Jd(f, t, !0);
            at(i, h),
            g && s.push(...g)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!r && !l)
        return Ke(e) && o.set(e, Yo),
        Yo;
    if (we(r))
        for (let u = 0; u < r.length; u++) {
            const f = gn(r[u]);
            nc(f) && (i[f] = Ye)
        }
    else if (r)
        for (const u in r) {
            const f = gn(u);
            if (nc(f)) {
                const h = r[u]
                  , g = i[f] = we(h) || Te(h) ? {
                    type: h
                } : at({}, h);
                if (g) {
                    const S = rc(Boolean, g.type)
                      , p = rc(String, g.type);
                    g[0] = S > -1,
                    g[1] = p < 0 || S < p,
                    (S > -1 || Re(g, "default")) && s.push(f)
                }
            }
        }
    const c = [i, s];
    return Ke(e) && o.set(e, c),
    c
}
function nc(e) {
    return e[0] !== "$" && !ka(e)
}
function oc(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function ac(e, t) {
    return oc(e) === oc(t)
}
function rc(e, t) {
    return we(t) ? t.findIndex(n=>ac(n, e)) : Te(t) && ac(t, e) ? 0 : -1
}
const ef = e=>e[0] === "_" || e === "$stable"
  , ol = e=>we(e) ? e.map(un) : [un(e)]
  , zm = (e,t,n)=>{
    if (t._n)
        return t;
    const o = ge((...a)=>ol(t(...a)), n);
    return o._c = !1,
    o
}
  , tf = (e,t,n)=>{
    const o = e._ctx;
    for (const a in e) {
        if (ef(a))
            continue;
        const r = e[a];
        if (Te(r))
            t[a] = zm(a, r, o);
        else if (r != null) {
            const i = ol(r);
            t[a] = ()=>i
        }
    }
}
  , nf = (e,t)=>{
    const n = ol(t);
    e.slots.default = ()=>n
}
  , jm = (e,t)=>{
    const n = e.slots = Xd();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (at(n, t),
        rd(n, "_", o, !0)) : tf(t, n)
    } else
        t && nf(e, t)
}
  , Um = (e,t,n)=>{
    const {vnode: o, slots: a} = e;
    let r = !0
      , i = Ye;
    if (o.shapeFlag & 32) {
        const s = t._;
        s ? n && s === 1 ? r = !1 : (at(a, t),
        !n && s === 1 && delete a._) : (r = !t.$stable,
        tf(t, a)),
        i = t
    } else
        t && (nf(e, t),
        i = {
            default: 1
        });
    if (r)
        for (const s in a)
            !ef(s) && i[s] == null && delete a[s]
}
;
function ms(e, t, n, o, a=!1) {
    if (we(e)) {
        e.forEach((h,g)=>ms(h, t && (we(t) ? t[g] : t), n, o, a));
        return
    }
    if (Ta(o) && !a)
        return;
    const r = o.shapeFlag & 4 ? ri(o.component) || o.component.proxy : o.el
      , i = a ? null : r
      , {i: s, r: l} = e
      , c = t && t.r
      , u = s.refs === Ye ? s.refs = {} : s.refs
      , f = s.setupState;
    if (c != null && c !== l && (Ze(c) ? (u[c] = null,
    Re(f, c) && (f[c] = null)) : rt(c) && (c.value = null)),
    Te(l))
        eo(l, s, 12, [i, u]);
    else {
        const h = Ze(l)
          , g = rt(l);
        if (h || g) {
            const S = ()=>{
                if (e.f) {
                    const p = h ? Re(f, l) ? f[l] : u[l] : l.value;
                    a ? we(p) && js(p, r) : we(p) ? p.includes(r) || p.push(r) : h ? (u[l] = [r],
                    Re(f, l) && (f[l] = u[l])) : (l.value = [r],
                    e.k && (u[e.k] = l.value))
                } else
                    h ? (u[l] = i,
                    Re(f, l) && (f[l] = i)) : g && (l.value = i,
                    e.k && (u[e.k] = i))
            }
            ;
            i ? (S.id = -1,
            Et(S, n)) : S()
        }
    }
}
const Et = bm;
function Wm(e) {
    return Ym(e)
}
function Ym(e, t) {
    const n = id();
    n.__VUE__ = !0;
    const {insert: o, remove: a, patchProp: r, createElement: i, createText: s, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: h, setScopeId: g=Vt, insertStaticContent: S} = e
      , p = (T,A,L,Y=null,U=null,ie=null,de=void 0,re=null,le=!!A.dynamicChildren)=>{
        if (T === A)
            return;
        T && !po(T, A) && (Y = P(T),
        K(T, U, ie, !0),
        T = null),
        A.patchFlag === -2 && (le = !1,
        A.dynamicChildren = null);
        const {type: ee, ref: he, shapeFlag: pe} = A;
        switch (ee) {
        case Za:
            b(T, A, L, Y);
            break;
        case kt:
            v(T, A, L, Y);
            break;
        case Oi:
            T == null && m(A, L, Y, de);
            break;
        case Fe:
            E(T, A, L, Y, U, ie, de, re, le);
            break;
        default:
            pe & 1 ? C(T, A, L, Y, U, ie, de, re, le) : pe & 6 ? D(T, A, L, Y, U, ie, de, re, le) : (pe & 64 || pe & 128) && ee.process(T, A, L, Y, U, ie, de, re, le, J)
        }
        he != null && U && ms(he, T && T.ref, ie, A || T, !A)
    }
      , b = (T,A,L,Y)=>{
        if (T == null)
            o(A.el = s(A.children), L, Y);
        else {
            const U = A.el = T.el;
            A.children !== T.children && c(U, A.children)
        }
    }
      , v = (T,A,L,Y)=>{
        T == null ? o(A.el = l(A.children || ""), L, Y) : A.el = T.el
    }
      , m = (T,A,L,Y)=>{
        [T.el,T.anchor] = S(T.children, A, L, Y, T.el, T.anchor)
    }
      , y = ({el: T, anchor: A},L,Y)=>{
        let U;
        for (; T && T !== A; )
            U = h(T),
            o(T, L, Y),
            T = U;
        o(A, L, Y)
    }
      , w = ({el: T, anchor: A})=>{
        let L;
        for (; T && T !== A; )
            L = h(T),
            a(T),
            T = L;
        a(A)
    }
      , C = (T,A,L,Y,U,ie,de,re,le)=>{
        A.type === "svg" ? de = "svg" : A.type === "math" && (de = "mathml"),
        T == null ? x(A, L, Y, U, ie, de, re, le) : O(T, A, U, ie, de, re, le)
    }
      , x = (T,A,L,Y,U,ie,de,re)=>{
        let le, ee;
        const {props: he, shapeFlag: pe, transition: ye, dirs: Ce} = T;
        if (le = T.el = i(T.type, ie, he && he.is, he),
        pe & 8 ? u(le, T.children) : pe & 16 && _(T.children, le, null, Y, U, Bi(T, ie), de, re),
        Ce && fo(T, null, Y, "created"),
        B(le, T, T.scopeId, de, Y),
        he) {
            for (const je in he)
                je !== "value" && !ka(je) && r(le, je, null, he[je], ie, T.children, Y, U, ue);
            "value"in he && r(le, "value", null, he.value, ie),
            (ee = he.onVnodeBeforeMount) && rn(ee, Y, T)
        }
        Ce && fo(T, null, Y, "beforeMount");
        const Ie = qm(U, ye);
        Ie && ye.beforeEnter(le),
        o(le, A, L),
        ((ee = he && he.onVnodeMounted) || Ie || Ce) && Et(()=>{
            ee && rn(ee, Y, T),
            Ie && ye.enter(le),
            Ce && fo(T, null, Y, "mounted")
        }
        , U)
    }
      , B = (T,A,L,Y,U)=>{
        if (L && g(T, L),
        Y)
            for (let ie = 0; ie < Y.length; ie++)
                g(T, Y[ie]);
        if (U) {
            let ie = U.subTree;
            if (A === ie) {
                const de = U.vnode;
                B(T, de, de.scopeId, de.slotScopeIds, U.parent)
            }
        }
    }
      , _ = (T,A,L,Y,U,ie,de,re,le=0)=>{
        for (let ee = le; ee < T.length; ee++) {
            const he = T[ee] = re ? Gn(T[ee]) : un(T[ee]);
            p(null, he, A, L, Y, U, ie, de, re)
        }
    }
      , O = (T,A,L,Y,U,ie,de)=>{
        const re = A.el = T.el;
        let {patchFlag: le, dynamicChildren: ee, dirs: he} = A;
        le |= T.patchFlag & 16;
        const pe = T.props || Ye
          , ye = A.props || Ye;
        let Ce;
        if (L && ho(L, !1),
        (Ce = ye.onVnodeBeforeUpdate) && rn(Ce, L, A, T),
        he && fo(A, T, L, "beforeUpdate"),
        L && ho(L, !0),
        ee ? I(T.dynamicChildren, ee, re, L, Y, Bi(A, U), ie) : de || se(T, A, re, null, L, Y, Bi(A, U), ie, !1),
        le > 0) {
            if (le & 16)
                k(re, A, pe, ye, L, Y, U);
            else if (le & 2 && pe.class !== ye.class && r(re, "class", null, ye.class, U),
            le & 4 && r(re, "style", pe.style, ye.style, U),
            le & 8) {
                const Ie = A.dynamicProps;
                for (let je = 0; je < Ie.length; je++) {
                    const Xe = Ie[je]
                      , ct = pe[Xe]
                      , Ut = ye[Xe];
                    (Ut !== ct || Xe === "value") && r(re, Xe, ct, Ut, U, T.children, L, Y, ue)
                }
            }
            le & 1 && T.children !== A.children && u(re, A.children)
        } else
            !de && ee == null && k(re, A, pe, ye, L, Y, U);
        ((Ce = ye.onVnodeUpdated) || he) && Et(()=>{
            Ce && rn(Ce, L, A, T),
            he && fo(A, T, L, "updated")
        }
        , Y)
    }
      , I = (T,A,L,Y,U,ie,de)=>{
        for (let re = 0; re < A.length; re++) {
            const le = T[re]
              , ee = A[re]
              , he = le.el && (le.type === Fe || !po(le, ee) || le.shapeFlag & 70) ? f(le.el) : L;
            p(le, ee, he, null, Y, U, ie, de, !0)
        }
    }
      , k = (T,A,L,Y,U,ie,de)=>{
        if (L !== Y) {
            if (L !== Ye)
                for (const re in L)
                    !ka(re) && !(re in Y) && r(T, re, L[re], null, de, A.children, U, ie, ue);
            for (const re in Y) {
                if (ka(re))
                    continue;
                const le = Y[re]
                  , ee = L[re];
                le !== ee && re !== "value" && r(T, re, ee, le, de, A.children, U, ie, ue)
            }
            "value"in Y && r(T, "value", L.value, Y.value, de)
        }
    }
      , E = (T,A,L,Y,U,ie,de,re,le)=>{
        const ee = A.el = T ? T.el : s("")
          , he = A.anchor = T ? T.anchor : s("");
        let {patchFlag: pe, dynamicChildren: ye, slotScopeIds: Ce} = A;
        Ce && (re = re ? re.concat(Ce) : Ce),
        T == null ? (o(ee, L, Y),
        o(he, L, Y),
        _(A.children || [], L, he, U, ie, de, re, le)) : pe > 0 && pe & 64 && ye && T.dynamicChildren ? (I(T.dynamicChildren, ye, L, U, ie, de, re),
        (A.key != null || U && A === U.subTree) && al(T, A, !0)) : se(T, A, L, he, U, ie, de, re, le)
    }
      , D = (T,A,L,Y,U,ie,de,re,le)=>{
        A.slotScopeIds = re,
        T == null ? A.shapeFlag & 512 ? U.ctx.activate(A, L, Y, de, le) : Q(A, L, Y, U, ie, de, le) : oe(T, A, le)
    }
      , Q = (T,A,L,Y,U,ie,de)=>{
        const re = T.component = ov(T, Y, U);
        if (ni(T) && (re.ctx.renderer = J),
        av(re),
        re.asyncDep) {
            if (U && U.registerDep(re, N),
            !T.el) {
                const le = re.subTree = d(kt);
                v(null, le, A, L)
            }
        } else
            N(re, T, A, L, U, ie, de)
    }
      , oe = (T,A,L)=>{
        const Y = A.component = T.component;
        if (dm(T, A, L))
            if (Y.asyncDep && !Y.asyncResolved) {
                Z(Y, A, L);
                return
            } else
                Y.next = A,
                rm(Y.update),
                Y.effect.dirty = !0,
                Y.update();
        else
            A.el = T.el,
            Y.vnode = A
    }
      , N = (T,A,L,Y,U,ie,de)=>{
        const re = ()=>{
            if (T.isMounted) {
                let {next: he, bu: pe, u: ye, parent: Ce, vnode: Ie} = T;
                {
                    const Oo = of(T);
                    if (Oo) {
                        he && (he.el = Ie.el,
                        Z(T, he, de)),
                        Oo.asyncDep.then(()=>{
                            T.isUnmounted || re()
                        }
                        );
                        return
                    }
                }
                let je = he, Xe;
                ho(T, !1),
                he ? (he.el = Ie.el,
                Z(T, he, de)) : he = Ie,
                pe && ki(pe),
                (Xe = he.props && he.props.onVnodeBeforeUpdate) && rn(Xe, Ce, he, Ie),
                ho(T, !0);
                const ct = Pi(T)
                  , Ut = T.subTree;
                T.subTree = ct,
                p(Ut, ct, f(Ut.el), P(Ut), T, U, ie),
                he.el = ct.el,
                je === null && fm(T, ct.el),
                ye && Et(ye, U),
                (Xe = he.props && he.props.onVnodeUpdated) && Et(()=>rn(Xe, Ce, he, Ie), U)
            } else {
                let he;
                const {el: pe, props: ye} = A
                  , {bm: Ce, m: Ie, parent: je} = T
                  , Xe = Ta(A);
                if (ho(T, !1),
                Ce && ki(Ce),
                !Xe && (he = ye && ye.onVnodeBeforeMount) && rn(he, je, A),
                ho(T, !0),
                pe && ke) {
                    const ct = ()=>{
                        T.subTree = Pi(T),
                        ke(pe, T.subTree, T, U, null)
                    }
                    ;
                    Xe ? A.type.__asyncLoader().then(()=>!T.isUnmounted && ct()) : ct()
                } else {
                    const ct = T.subTree = Pi(T);
                    p(null, ct, L, Y, T, U, ie),
                    A.el = ct.el
                }
                if (Ie && Et(Ie, U),
                !Xe && (he = ye && ye.onVnodeMounted)) {
                    const ct = A;
                    Et(()=>rn(he, je, ct), U)
                }
                (A.shapeFlag & 256 || je && Ta(je.vnode) && je.vnode.shapeFlag & 256) && T.a && Et(T.a, U),
                T.isMounted = !0,
                A = L = Y = null
            }
        }
          , le = T.effect = new Ws(re,Vt,()=>el(ee),T.scope)
          , ee = T.update = ()=>{
            le.dirty && le.run()
        }
        ;
        ee.id = T.uid,
        ho(T, !0),
        ee()
    }
      , Z = (T,A,L)=>{
        A.component = T;
        const Y = T.vnode.props;
        T.vnode = A,
        T.next = null,
        Hm(T, A.props, Y, L),
        Um(T, A.children, L),
        ao(),
        Kl(T),
        ro()
    }
      , se = (T,A,L,Y,U,ie,de,re,le=!1)=>{
        const ee = T && T.children
          , he = T ? T.shapeFlag : 0
          , pe = A.children
          , {patchFlag: ye, shapeFlag: Ce} = A;
        if (ye > 0) {
            if (ye & 128) {
                $e(ee, pe, L, Y, U, ie, de, re, le);
                return
            } else if (ye & 256) {
                Ee(ee, pe, L, Y, U, ie, de, re, le);
                return
            }
        }
        Ce & 8 ? (he & 16 && ue(ee, U, ie),
        pe !== ee && u(L, pe)) : he & 16 ? Ce & 16 ? $e(ee, pe, L, Y, U, ie, de, re, le) : ue(ee, U, ie, !0) : (he & 8 && u(L, ""),
        Ce & 16 && _(pe, L, Y, U, ie, de, re, le))
    }
      , Ee = (T,A,L,Y,U,ie,de,re,le)=>{
        T = T || Yo,
        A = A || Yo;
        const ee = T.length
          , he = A.length
          , pe = Math.min(ee, he);
        let ye;
        for (ye = 0; ye < pe; ye++) {
            const Ce = A[ye] = le ? Gn(A[ye]) : un(A[ye]);
            p(T[ye], Ce, L, null, U, ie, de, re, le)
        }
        ee > he ? ue(T, U, ie, !0, !1, pe) : _(A, L, Y, U, ie, de, re, le, pe)
    }
      , $e = (T,A,L,Y,U,ie,de,re,le)=>{
        let ee = 0;
        const he = A.length;
        let pe = T.length - 1
          , ye = he - 1;
        for (; ee <= pe && ee <= ye; ) {
            const Ce = T[ee]
              , Ie = A[ee] = le ? Gn(A[ee]) : un(A[ee]);
            if (po(Ce, Ie))
                p(Ce, Ie, L, null, U, ie, de, re, le);
            else
                break;
            ee++
        }
        for (; ee <= pe && ee <= ye; ) {
            const Ce = T[pe]
              , Ie = A[ye] = le ? Gn(A[ye]) : un(A[ye]);
            if (po(Ce, Ie))
                p(Ce, Ie, L, null, U, ie, de, re, le);
            else
                break;
            pe--,
            ye--
        }
        if (ee > pe) {
            if (ee <= ye) {
                const Ce = ye + 1
                  , Ie = Ce < he ? A[Ce].el : Y;
                for (; ee <= ye; )
                    p(null, A[ee] = le ? Gn(A[ee]) : un(A[ee]), L, Ie, U, ie, de, re, le),
                    ee++
            }
        } else if (ee > ye)
            for (; ee <= pe; )
                K(T[ee], U, ie, !0),
                ee++;
        else {
            const Ce = ee
              , Ie = ee
              , je = new Map;
            for (ee = Ie; ee <= ye; ee++) {
                const Bt = A[ee] = le ? Gn(A[ee]) : un(A[ee]);
                Bt.key != null && je.set(Bt.key, ee)
            }
            let Xe, ct = 0;
            const Ut = ye - Ie + 1;
            let Oo = !1
              , Ll = 0;
            const ha = new Array(Ut);
            for (ee = 0; ee < Ut; ee++)
                ha[ee] = 0;
            for (ee = Ce; ee <= pe; ee++) {
                const Bt = T[ee];
                if (ct >= Ut) {
                    K(Bt, U, ie, !0);
                    continue
                }
                let an;
                if (Bt.key != null)
                    an = je.get(Bt.key);
                else
                    for (Xe = Ie; Xe <= ye; Xe++)
                        if (ha[Xe - Ie] === 0 && po(Bt, A[Xe])) {
                            an = Xe;
                            break
                        }
                an === void 0 ? K(Bt, U, ie, !0) : (ha[an - Ie] = ee + 1,
                an >= Ll ? Ll = an : Oo = !0,
                p(Bt, A[an], L, null, U, ie, de, re, le),
                ct++)
            }
            const Ml = Oo ? Km(ha) : Yo;
            for (Xe = Ml.length - 1,
            ee = Ut - 1; ee >= 0; ee--) {
                const Bt = Ie + ee
                  , an = A[Bt]
                  , Fl = Bt + 1 < he ? A[Bt + 1].el : Y;
                ha[ee] === 0 ? p(null, an, L, Fl, U, ie, de, re, le) : Oo && (Xe < 0 || ee !== Ml[Xe] ? M(an, L, Fl, 2) : Xe--)
            }
        }
    }
      , M = (T,A,L,Y,U=null)=>{
        const {el: ie, type: de, transition: re, children: le, shapeFlag: ee} = T;
        if (ee & 6) {
            M(T.component.subTree, A, L, Y);
            return
        }
        if (ee & 128) {
            T.suspense.move(A, L, Y);
            return
        }
        if (ee & 64) {
            de.move(T, A, L, J);
            return
        }
        if (de === Fe) {
            o(ie, A, L);
            for (let pe = 0; pe < le.length; pe++)
                M(le[pe], A, L, Y);
            o(T.anchor, A, L);
            return
        }
        if (de === Oi) {
            y(T, A, L);
            return
        }
        if (Y !== 2 && ee & 1 && re)
            if (Y === 0)
                re.beforeEnter(ie),
                o(ie, A, L),
                Et(()=>re.enter(ie), U);
            else {
                const {leave: pe, delayLeave: ye, afterLeave: Ce} = re
                  , Ie = ()=>o(ie, A, L)
                  , je = ()=>{
                    pe(ie, ()=>{
                        Ie(),
                        Ce && Ce()
                    }
                    )
                }
                ;
                ye ? ye(ie, Ie, je) : je()
            }
        else
            o(ie, A, L)
    }
      , K = (T,A,L,Y=!1,U=!1)=>{
        const {type: ie, props: de, ref: re, children: le, dynamicChildren: ee, shapeFlag: he, patchFlag: pe, dirs: ye} = T;
        if (re != null && ms(re, null, L, T, !0),
        he & 256) {
            A.ctx.deactivate(T);
            return
        }
        const Ce = he & 1 && ye
          , Ie = !Ta(T);
        let je;
        if (Ie && (je = de && de.onVnodeBeforeUnmount) && rn(je, A, T),
        he & 6)
            ne(T.component, L, Y);
        else {
            if (he & 128) {
                T.suspense.unmount(L, Y);
                return
            }
            Ce && fo(T, null, A, "beforeUnmount"),
            he & 64 ? T.type.remove(T, A, L, U, J, Y) : ee && (ie !== Fe || pe > 0 && pe & 64) ? ue(ee, A, L, !1, !0) : (ie === Fe && pe & 384 || !U && he & 16) && ue(le, A, L),
            Y && fe(T)
        }
        (Ie && (je = de && de.onVnodeUnmounted) || Ce) && Et(()=>{
            je && rn(je, A, T),
            Ce && fo(T, null, A, "unmounted")
        }
        , L)
    }
      , fe = T=>{
        const {type: A, el: L, anchor: Y, transition: U} = T;
        if (A === Fe) {
            me(L, Y);
            return
        }
        if (A === Oi) {
            w(T);
            return
        }
        const ie = ()=>{
            a(L),
            U && !U.persisted && U.afterLeave && U.afterLeave()
        }
        ;
        if (T.shapeFlag & 1 && U && !U.persisted) {
            const {leave: de, delayLeave: re} = U
              , le = ()=>de(L, ie);
            re ? re(T.el, ie, le) : le()
        } else
            ie()
    }
      , me = (T,A)=>{
        let L;
        for (; T !== A; )
            L = h(T),
            a(T),
            T = L;
        a(A)
    }
      , ne = (T,A,L)=>{
        const {bum: Y, scope: U, update: ie, subTree: de, um: re} = T;
        Y && ki(Y),
        U.stop(),
        ie && (ie.active = !1,
        K(de, T, A, L)),
        re && Et(re, A),
        Et(()=>{
            T.isUnmounted = !0
        }
        , A),
        A && A.pendingBranch && !A.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === A.pendingId && (A.deps--,
        A.deps === 0 && A.resolve())
    }
      , ue = (T,A,L,Y=!1,U=!1,ie=0)=>{
        for (let de = ie; de < T.length; de++)
            K(T[de], A, L, Y, U)
    }
      , P = T=>T.shapeFlag & 6 ? P(T.component.subTree) : T.shapeFlag & 128 ? T.suspense.next() : h(T.anchor || T.el);
    let F = !1;
    const V = (T,A,L)=>{
        T == null ? A._vnode && K(A._vnode, null, null, !0) : p(A._vnode || null, T, A, null, null, null, L),
        F || (F = !0,
        Kl(),
        Id(),
        F = !1),
        A._vnode = T
    }
      , J = {
        p,
        um: K,
        m: M,
        r: fe,
        mt: Q,
        mc: _,
        pc: se,
        pbc: I,
        n: P,
        o: e
    };
    let ve, ke;
    return {
        render: V,
        hydrate: ve,
        createApp: Fm(V, ve)
    }
}
function Bi({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function ho({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function qm(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function al(e, t, n=!1) {
    const o = e.children
      , a = t.children;
    if (we(o) && we(a))
        for (let r = 0; r < o.length; r++) {
            const i = o[r];
            let s = a[r];
            s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = a[r] = Gn(a[r]),
            s.el = i.el),
            n || al(i, s)),
            s.type === Za && (s.el = i.el)
        }
}
function Km(e) {
    const t = e.slice()
      , n = [0];
    let o, a, r, i, s;
    const l = e.length;
    for (o = 0; o < l; o++) {
        const c = e[o];
        if (c !== 0) {
            if (a = n[n.length - 1],
            e[a] < c) {
                t[o] = a,
                n.push(o);
                continue
            }
            for (r = 0,
            i = n.length - 1; r < i; )
                s = r + i >> 1,
                e[n[s]] < c ? r = s + 1 : i = s;
            c < e[n[r]] && (r > 0 && (t[o] = n[r - 1]),
            n[r] = o)
        }
    }
    for (r = n.length,
    i = n[r - 1]; r-- > 0; )
        n[r] = i,
        i = t[i];
    return n
}
function of(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : of(t)
}
const Gm = e=>e.__isTeleport
  , Ea = e=>e && (e.disabled || e.disabled === "")
  , ic = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , sc = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , vs = (e,t)=>{
    const n = e && e.to;
    return Ze(n) ? t ? t(n) : null : n
}
  , Xm = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, a, r, i, s, l, c) {
        const {mc: u, pc: f, pbc: h, o: {insert: g, querySelector: S, createText: p, createComment: b}} = c
          , v = Ea(t.props);
        let {shapeFlag: m, children: y, dynamicChildren: w} = t;
        if (e == null) {
            const C = t.el = p("")
              , x = t.anchor = p("");
            g(C, n, o),
            g(x, n, o);
            const B = t.target = vs(t.props, S)
              , _ = t.targetAnchor = p("");
            B && (g(_, B),
            i === "svg" || ic(B) ? i = "svg" : (i === "mathml" || sc(B)) && (i = "mathml"));
            const O = (I,k)=>{
                m & 16 && u(y, I, k, a, r, i, s, l)
            }
            ;
            v ? O(n, x) : B && O(B, _)
        } else {
            t.el = e.el;
            const C = t.anchor = e.anchor
              , x = t.target = e.target
              , B = t.targetAnchor = e.targetAnchor
              , _ = Ea(e.props)
              , O = _ ? n : x
              , I = _ ? C : B;
            if (i === "svg" || ic(x) ? i = "svg" : (i === "mathml" || sc(x)) && (i = "mathml"),
            w ? (h(e.dynamicChildren, w, O, a, r, i, s),
            al(e, t, !0)) : l || f(e, t, O, I, a, r, i, s, !1),
            v)
                _ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : lr(t, n, C, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const k = t.target = vs(t.props, S);
                k && lr(t, k, null, c, 0)
            } else
                _ && lr(t, x, B, c, 1)
        }
        af(t)
    },
    remove(e, t, n, o, {um: a, o: {remove: r}}, i) {
        const {shapeFlag: s, children: l, anchor: c, targetAnchor: u, target: f, props: h} = e;
        if (f && r(u),
        i && r(c),
        s & 16) {
            const g = i || !Ea(h);
            for (let S = 0; S < l.length; S++) {
                const p = l[S];
                a(p, t, n, g, !!p.dynamicChildren)
            }
        }
    },
    move: lr,
    hydrate: Qm
};
function lr(e, t, n, {o: {insert: o}, m: a}, r=2) {
    r === 0 && o(e.targetAnchor, t, n);
    const {el: i, anchor: s, shapeFlag: l, children: c, props: u} = e
      , f = r === 2;
    if (f && o(i, t, n),
    (!f || Ea(u)) && l & 16)
        for (let h = 0; h < c.length; h++)
            a(c[h], t, n, 2);
    f && o(s, t, n)
}
function Qm(e, t, n, o, a, r, {o: {nextSibling: i, parentNode: s, querySelector: l}}, c) {
    const u = t.target = vs(t.props, l);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (Ea(t.props))
                t.anchor = c(i(e), t, s(e), n, o, a, r),
                t.targetAnchor = f;
            else {
                t.anchor = i(e);
                let h = f;
                for (; h; )
                    if (h = i(h),
                    h && h.nodeType === 8 && h.data === "teleport anchor") {
                        t.targetAnchor = h,
                        u._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                c(f, t, u, n, o, a, r)
            }
        af(t)
    }
    return t.anchor && i(t.anchor)
}
const sa = Xm;
function af(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const Fe = Symbol.for("v-fgt")
  , Za = Symbol.for("v-txt")
  , kt = Symbol.for("v-cmt")
  , Oi = Symbol.for("v-stc")
  , Aa = [];
let Gt = null;
function Se(e=!1) {
    Aa.push(Gt = e ? null : [])
}
function Zm() {
    Aa.pop(),
    Gt = Aa[Aa.length - 1] || null
}
let za = 1;
function lc(e) {
    za += e
}
function rf(e) {
    return e.dynamicChildren = za > 0 ? Gt || Yo : null,
    Zm(),
    za > 0 && Gt && Gt.push(e),
    e
}
function He(e, t, n, o, a, r) {
    return rf(H(e, t, n, o, a, r, !0))
}
function vt(e, t, n, o, a) {
    return rf(d(e, t, n, o, a, !0))
}
function ja(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function po(e, t) {
    return e.type === t.type && e.key === t.key
}
const sf = ({key: e})=>e ?? null
  , Br = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? Ze(e) || rt(e) || Te(e) ? {
    i: ot,
    r: e,
    k: t,
    f: !!n
} : e : null);
function H(e, t=null, n=null, o=0, a=null, r=e === Fe ? 0 : 1, i=!1, s=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && sf(t),
        ref: t && Br(t),
        scopeId: ti,
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
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: o,
        dynamicProps: a,
        dynamicChildren: null,
        appContext: null,
        ctx: ot
    };
    return s ? (rl(l, n),
    r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ze(n) ? 8 : 16),
    za > 0 && !i && Gt && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && Gt.push(l),
    l
}
const d = Jm;
function Jm(e, t=null, n=null, o=0, a=null, r=!1) {
    if ((!e || e === gm) && (e = kt),
    ja(e)) {
        const s = no(e, t, !0);
        return n && rl(s, n),
        za > 0 && !r && Gt && (s.shapeFlag & 6 ? Gt[Gt.indexOf(e)] = s : Gt.push(s)),
        s.patchFlag |= -2,
        s
    }
    if (cv(e) && (e = e.__vccOpts),
    t) {
        t = ev(t);
        let {class: s, style: l} = t;
        s && !Ze(s) && (t.class = Nt(s)),
        Ke(l) && (kd(l) && !we(l) && (l = at({}, l)),
        t.style = Tt(l))
    }
    const i = Ze(e) ? 1 : vm(e) ? 128 : Gm(e) ? 64 : Ke(e) ? 4 : Te(e) ? 2 : 0;
    return H(e, t, n, o, a, i, r, !0)
}
function ev(e) {
    return e ? kd(e) || Qd(e) ? at({}, e) : e : null
}
function no(e, t, n=!1, o=!1) {
    const {props: a, ref: r, patchFlag: i, children: s, transition: l} = e
      , c = t ? Be(a || {}, t) : a
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && sf(c),
        ref: t && t.ref ? n && r ? we(r) ? r.concat(Br(t)) : [r, Br(t)] : Br(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Fe ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && no(e.ssContent),
        ssFallback: e.ssFallback && no(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && o && (u.transition = l.clone(u)),
    u
}
function Ae(e=" ", t=0) {
    return d(Za, null, e, t)
}
function ut(e="", t=!1) {
    return t ? (Se(),
    vt(kt, null, e)) : d(kt, null, e)
}
function un(e) {
    return e == null || typeof e == "boolean" ? d(kt) : we(e) ? d(Fe, null, e.slice()) : typeof e == "object" ? Gn(e) : d(Za, null, String(e))
}
function Gn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : no(e)
}
function rl(e, t) {
    let n = 0;
    const {shapeFlag: o} = e;
    if (t == null)
        t = null;
    else if (we(t))
        n = 16;
    else if (typeof t == "object")
        if (o & 65) {
            const a = t.default;
            a && (a._c && (a._d = !1),
            rl(e, a()),
            a._c && (a._d = !0));
            return
        } else {
            n = 32;
            const a = t._;
            !a && !Qd(t) ? t._ctx = ot : a === 3 && ot && (ot.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        Te(t) ? (t = {
            default: t,
            _ctx: ot
        },
        n = 32) : (t = String(t),
        o & 64 ? (n = 16,
        t = [Ae(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Be(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const a in o)
            if (a === "class")
                t.class !== o.class && (t.class = Nt([t.class, o.class]));
            else if (a === "style")
                t.style = Tt([t.style, o.style]);
            else if (Kr(a)) {
                const r = t[a]
                  , i = o[a];
                i && r !== i && !(we(r) && r.includes(i)) && (t[a] = r ? [].concat(r, i) : i)
            } else
                a !== "" && (t[a] = o[a])
    }
    return t
}
function rn(e, t, n, o=null) {
    Ht(e, t, 7, [n, o])
}
const tv = Kd();
let nv = 0;
function ov(e, t, n) {
    const o = e.type
      , a = (t ? t.appContext : e.appContext) || tv
      , r = {
        uid: nv++,
        vnode: e,
        type: o,
        parent: t,
        appContext: a,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new cd(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(a.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Jd(o, a),
        emitsOptions: Dd(o, a),
        emit: null,
        emitted: null,
        propsDefaults: Ye,
        inheritAttrs: o.inheritAttrs,
        ctx: Ye,
        data: Ye,
        props: Ye,
        attrs: Ye,
        slots: Ye,
        refs: Ye,
        setupState: Ye,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
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
    return r.ctx = {
        _: r
    },
    r.root = t ? t.root : r,
    r.emit = lm.bind(null, r),
    e.ce && e.ce(r),
    r
}
let dt = null;
const en = ()=>dt || ot;
let Nr, bs;
{
    const e = id()
      , t = (n,o)=>{
        let a;
        return (a = e[n]) || (a = e[n] = []),
        a.push(o),
        r=>{
            a.length > 1 ? a.forEach(i=>i(r)) : a[0](r)
        }
    }
    ;
    Nr = t("__VUE_INSTANCE_SETTERS__", n=>dt = n),
    bs = t("__VUE_SSR_SETTERS__", n=>ai = n)
}
const Ja = e=>{
    const t = dt;
    return Nr(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Nr(t)
    }
}
  , cc = ()=>{
    dt && dt.scope.off(),
    Nr(null)
}
;
function lf(e) {
    return e.vnode.shapeFlag & 4
}
let ai = !1;
function av(e, t=!1) {
    t && bs(t);
    const {props: n, children: o} = e.vnode
      , a = lf(e);
    Nm(e, n, a, t),
    jm(e, o);
    const r = a ? rv(e, t) : void 0;
    return t && bs(!1),
    r
}
function rv(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Om);
    const {setup: o} = n;
    if (o) {
        const a = e.setupContext = o.length > 1 ? sv(e) : null
          , r = Ja(e);
        ao();
        const i = eo(o, e, 0, [e.props, a]);
        if (ro(),
        r(),
        nd(i)) {
            if (i.then(cc, cc),
            t)
                return i.then(s=>{
                    uc(e, s, t)
                }
                ).catch(s=>{
                    Jr(s, e, 0)
                }
                );
            e.asyncDep = i
        } else
            uc(e, i, t)
    } else
        cf(e, t)
}
function uc(e, t, n) {
    Te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = Ad(t)),
    cf(e, n)
}
let dc;
function cf(e, t, n) {
    const o = e.type;
    if (!e.render) {
        if (!t && dc && !o.render) {
            const a = o.template || nl(e).template;
            if (a) {
                const {isCustomElement: r, compilerOptions: i} = e.appContext.config
                  , {delimiters: s, compilerOptions: l} = o
                  , c = at(at({
                    isCustomElement: r,
                    delimiters: s
                }, i), l);
                o.render = dc(a, c)
            }
        }
        e.render = o.render || Vt
    }
    {
        const a = Ja(e);
        ao();
        try {
            Im(e)
        } finally {
            ro(),
            a()
        }
    }
}
const iv = {
    get(e, t) {
        return At(e, "get", ""),
        e[t]
    }
};
function sv(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,iv),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ri(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Ad(Qs(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Pa)
                    return Pa[n](e)
            },
            has(t, n) {
                return n in t || n in Pa
            }
        }))
}
function lv(e, t=!0) {
    return Te(e) ? e.displayName || e.name : e.name || t && e.__name
}
function cv(e) {
    return Te(e) && "__vccOpts"in e
}
const $ = (e,t)=>Xg(e, t, ai);
function il(e, t, n) {
    const o = arguments.length;
    return o === 2 ? Ke(t) && !we(t) ? ja(t) ? d(e, null, [t]) : d(e, t) : d(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && ja(n) && (n = [n]),
    d(e, t, n))
}
const uv = "3.4.27";
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const dv = "http://www.w3.org/2000/svg"
  , fv = "http://www.w3.org/1998/Math/MathML"
  , Xn = typeof document < "u" ? document : null
  , fc = Xn && Xn.createElement("template")
  , hv = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,o)=>{
        const a = t === "svg" ? Xn.createElementNS(dv, e) : t === "mathml" ? Xn.createElementNS(fv, e) : Xn.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && o && o.multiple != null && a.setAttribute("multiple", o.multiple),
        a
    }
    ,
    createText: e=>Xn.createTextNode(e),
    createComment: e=>Xn.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>Xn.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, o, a, r) {
        const i = n ? n.previousSibling : t.lastChild;
        if (a && (a === r || a.nextSibling))
            for (; t.insertBefore(a.cloneNode(!0), n),
            !(a === r || !(a = a.nextSibling)); )
                ;
        else {
            fc.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
            const s = fc.content;
            if (o === "svg" || o === "mathml") {
                const l = s.firstChild;
                for (; l.firstChild; )
                    s.appendChild(l.firstChild);
                s.removeChild(l)
            }
            t.insertBefore(s, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Mn = "transition"
  , ga = "animation"
  , Ua = Symbol("_vtc")
  , la = (e,{slots: t})=>il(_m, gv(e), t);
la.displayName = "Transition";
const uf = {
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
};
la.props = at({}, Nd, uf);
const go = (e,t=[])=>{
    we(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , hc = e=>e ? we(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function gv(e) {
    const t = {};
    for (const E in e)
        E in uf || (t[E] = e[E]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: o, duration: a, enterFromClass: r=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: s=`${n}-enter-to`, appearFromClass: l=r, appearActiveClass: c=i, appearToClass: u=s, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: h=`${n}-leave-active`, leaveToClass: g=`${n}-leave-to`} = e
      , S = mv(a)
      , p = S && S[0]
      , b = S && S[1]
      , {onBeforeEnter: v, onEnter: m, onEnterCancelled: y, onLeave: w, onLeaveCancelled: C, onBeforeAppear: x=v, onAppear: B=m, onAppearCancelled: _=y} = t
      , O = (E,D,Q)=>{
        mo(E, D ? u : s),
        mo(E, D ? c : i),
        Q && Q()
    }
      , I = (E,D)=>{
        E._isLeaving = !1,
        mo(E, f),
        mo(E, g),
        mo(E, h),
        D && D()
    }
      , k = E=>(D,Q)=>{
        const oe = E ? B : m
          , N = ()=>O(D, E, Q);
        go(oe, [D, N]),
        gc(()=>{
            mo(D, E ? l : r),
            Fn(D, E ? u : s),
            hc(oe) || mc(D, o, p, N)
        }
        )
    }
    ;
    return at(t, {
        onBeforeEnter(E) {
            go(v, [E]),
            Fn(E, r),
            Fn(E, i)
        },
        onBeforeAppear(E) {
            go(x, [E]),
            Fn(E, l),
            Fn(E, c)
        },
        onEnter: k(!1),
        onAppear: k(!0),
        onLeave(E, D) {
            E._isLeaving = !0;
            const Q = ()=>I(E, D);
            Fn(E, f),
            Fn(E, h),
            yv(),
            gc(()=>{
                E._isLeaving && (mo(E, f),
                Fn(E, g),
                hc(w) || mc(E, o, b, Q))
            }
            ),
            go(w, [E, Q])
        },
        onEnterCancelled(E) {
            O(E, !1),
            go(y, [E])
        },
        onAppearCancelled(E) {
            O(E, !0),
            go(_, [E])
        },
        onLeaveCancelled(E) {
            I(E),
            go(C, [E])
        }
    })
}
function mv(e) {
    if (e == null)
        return null;
    if (Ke(e))
        return [Ii(e.enter), Ii(e.leave)];
    {
        const t = Ii(e);
        return [t, t]
    }
}
function Ii(e) {
    return wg(e)
}
function Fn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[Ua] || (e[Ua] = new Set)).add(t)
}
function mo(e, t) {
    t.split(/\s+/).forEach(o=>o && e.classList.remove(o));
    const n = e[Ua];
    n && (n.delete(t),
    n.size || (e[Ua] = void 0))
}
function gc(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let vv = 0;
function mc(e, t, n, o) {
    const a = e._endId = ++vv
      , r = ()=>{
        a === e._endId && o()
    }
    ;
    if (n)
        return setTimeout(r, n);
    const {type: i, timeout: s, propCount: l} = bv(e, t);
    if (!i)
        return o();
    const c = i + "end";
    let u = 0;
    const f = ()=>{
        e.removeEventListener(c, h),
        r()
    }
      , h = g=>{
        g.target === e && ++u >= l && f()
    }
    ;
    setTimeout(()=>{
        u < l && f()
    }
    , s + 1),
    e.addEventListener(c, h)
}
function bv(e, t) {
    const n = window.getComputedStyle(e)
      , o = S=>(n[S] || "").split(", ")
      , a = o(`${Mn}Delay`)
      , r = o(`${Mn}Duration`)
      , i = vc(a, r)
      , s = o(`${ga}Delay`)
      , l = o(`${ga}Duration`)
      , c = vc(s, l);
    let u = null
      , f = 0
      , h = 0;
    t === Mn ? i > 0 && (u = Mn,
    f = i,
    h = r.length) : t === ga ? c > 0 && (u = ga,
    f = c,
    h = l.length) : (f = Math.max(i, c),
    u = f > 0 ? i > c ? Mn : ga : null,
    h = u ? u === Mn ? r.length : l.length : 0);
    const g = u === Mn && /\b(transform|all)(,|$)/.test(o(`${Mn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: h,
        hasTransform: g
    }
}
function vc(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,o)=>bc(n) + bc(e[o])))
}
function bc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function yv() {
    return document.body.offsetHeight
}
function pv(e, t, n) {
    const o = e[Ua];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Hr = Symbol("_vod")
  , df = Symbol("_vsh")
  , ht = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Hr] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : ma(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: o}) {
        !t != !n && (o ? t ? (o.beforeEnter(e),
        ma(e, !0),
        o.enter(e)) : o.leave(e, ()=>{
            ma(e, !1)
        }
        ) : ma(e, t))
    },
    beforeUnmount(e, {value: t}) {
        ma(e, t)
    }
};
function ma(e, t) {
    e.style.display = t ? e[Hr] : "none",
    e[df] = !t
}
const wv = Symbol("")
  , Sv = /(^|;)\s*display\s*:/;
function Cv(e, t, n) {
    const o = e.style
      , a = Ze(n);
    let r = !1;
    if (n && !a) {
        if (t)
            if (Ze(t))
                for (const i of t.split(";")) {
                    const s = i.slice(0, i.indexOf(":")).trim();
                    n[s] == null && Or(o, s, "")
                }
            else
                for (const i in t)
                    n[i] == null && Or(o, i, "");
        for (const i in n)
            i === "display" && (r = !0),
            Or(o, i, n[i])
    } else if (a) {
        if (t !== n) {
            const i = o[wv];
            i && (n += ";" + i),
            o.cssText = n,
            r = Sv.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Hr in e && (e[Hr] = r ? o.display : "",
    e[df] && (o.display = "none"))
}
const yc = /\s*!important$/;
function Or(e, t, n) {
    if (we(n))
        n.forEach(o=>Or(e, t, o));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const o = _v(e, t);
        yc.test(n) ? e.setProperty(oo(o), n.replace(yc, ""), "important") : e[o] = n
    }
}
const pc = ["Webkit", "Moz", "ms"]
  , $i = {};
function _v(e, t) {
    const n = $i[t];
    if (n)
        return n;
    let o = gn(t);
    if (o !== "filter" && o in e)
        return $i[t] = o;
    o = Qr(o);
    for (let a = 0; a < pc.length; a++) {
        const r = pc[a] + o;
        if (r in e)
            return $i[t] = r
    }
    return t
}
const wc = "http://www.w3.org/1999/xlink";
function xv(e, t, n, o, a) {
    if (o && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(wc, t.slice(6, t.length)) : e.setAttributeNS(wc, t, n);
    else {
        const r = Pg(t);
        n == null || r && !sd(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
    }
}
function kv(e, t, n, o, a, r, i) {
    if (t === "innerHTML" || t === "textContent") {
        o && i(o, a, r),
        e[t] = n ?? "";
        return
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value
          , u = n ?? "";
        (c !== u || !("_value"in e)) && (e.value = u),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = sd(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function Tv(e, t, n, o) {
    e.addEventListener(t, n, o)
}
function Pv(e, t, n, o) {
    e.removeEventListener(t, n, o)
}
const Sc = Symbol("_vei");
function Ev(e, t, n, o, a=null) {
    const r = e[Sc] || (e[Sc] = {})
      , i = r[t];
    if (o && i)
        i.value = o;
    else {
        const [s,l] = Av(t);
        if (o) {
            const c = r[t] = Iv(o, a);
            Tv(e, s, c, l)
        } else
            i && (Pv(e, s, i, l),
            r[t] = void 0)
    }
}
const Cc = /(?:Once|Passive|Capture)$/;
function Av(e) {
    let t;
    if (Cc.test(e)) {
        t = {};
        let o;
        for (; o = e.match(Cc); )
            e = e.slice(0, e.length - o[0].length),
            t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : oo(e.slice(2)), t]
}
let Di = 0;
const Bv = Promise.resolve()
  , Ov = ()=>Di || (Bv.then(()=>Di = 0),
Di = Date.now());
function Iv(e, t) {
    const n = o=>{
        if (!o._vts)
            o._vts = Date.now();
        else if (o._vts <= n.attached)
            return;
        Ht($v(o, n.value), t, 5, [o])
    }
    ;
    return n.value = e,
    n.attached = Ov(),
    n
}
function $v(e, t) {
    if (we(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(o=>a=>!a._stopped && o && o(a))
    } else
        return t
}
const _c = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Dv = (e,t,n,o,a,r,i,s,l)=>{
    const c = a === "svg";
    t === "class" ? pv(e, o, c) : t === "style" ? Cv(e, n, o) : Kr(t) ? zs(t) || Ev(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Rv(e, t, o, c)) ? kv(e, t, o, r, i, s, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o),
    xv(e, t, o, c))
}
;
function Rv(e, t, n, o) {
    if (o)
        return !!(t === "innerHTML" || t === "textContent" || t in e && _c(t) && Te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const a = e.tagName;
        if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
            return !1
    }
    return _c(t) && Ze(n) ? !1 : t in e
}
const Lv = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Mv = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , o = t.join(".");
    return n[o] || (n[o] = a=>{
        if (!("key"in a))
            return;
        const r = oo(a.key);
        if (t.some(i=>i === r || Lv[i] === r))
            return e(a)
    }
    )
}
  , Fv = at({
    patchProp: Dv
}, hv);
let xc;
function Vv() {
    return xc || (xc = Wm(Fv))
}
const ff = (...e)=>{
    const t = Vv().createApp(...e)
      , {mount: n} = t;
    return t.mount = o=>{
        const a = Hv(o);
        if (!a)
            return;
        const r = t._component;
        !Te(r) && !r.render && !r.template && (r.template = a.innerHTML),
        a.innerHTML = "";
        const i = n(a, !1, Nv(a));
        return a instanceof Element && (a.removeAttribute("v-cloak"),
        a.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function Nv(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Hv(e) {
    return Ze(e) ? document.querySelector(e) : e
}
var io = typeof window < "u";
function yt(e) {
    return io ? requestAnimationFrame(e) : -1
}
function ii(e) {
    io && cancelAnimationFrame(e)
}
function Zn(e) {
    yt(()=>yt(e))
}
var zv = e=>e === window
  , kc = (e,t)=>({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
})
  , Ve = e=>{
    const t = Xt(e);
    if (zv(t)) {
        const n = t.innerWidth
          , o = t.innerHeight;
        return kc(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : kc(0, 0)
}
;
function jv(e=!1) {
    const t = R(e);
    return [t, (o=!t.value)=>{
        t.value = o
    }
    ]
}
function mt(e) {
    const t = Pt(e, null);
    if (t) {
        const n = en()
          , {link: o, unlink: a, internalChildren: r} = t;
        o(n),
        ia(()=>a(n));
        const i = $(()=>r.indexOf(n));
        return {
            parent: t,
            index: i
        }
    }
    return {
        parent: null,
        index: R(-1)
    }
}
function Uv(e) {
    const t = []
      , n = o=>{
        Array.isArray(o) && o.forEach(a=>{
            var r;
            ja(a) && (t.push(a),
            (r = a.component) != null && r.subTree && (t.push(a.component.subTree),
            n(a.component.subTree.children)),
            a.children && n(a.children))
        }
        )
    }
    ;
    return n(e),
    t
}
var Tc = (e,t)=>{
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o=>t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
}
;
function Wv(e, t, n) {
    const o = Uv(e.subTree.children);
    n.sort((r,i)=>Tc(o, r.vnode) - Tc(o, i.vnode));
    const a = n.map(r=>r.proxy);
    t.sort((r,i)=>{
        const s = a.indexOf(r)
          , l = a.indexOf(i);
        return s - l
    }
    )
}
function St(e) {
    const t = Ge([])
      , n = Ge([])
      , o = en();
    return {
        children: t,
        linkChildren: r=>{
            kn(e, Object.assign({
                link: l=>{
                    l.proxy && (n.push(l),
                    t.push(l.proxy),
                    Wv(o, t, n))
                }
                ,
                unlink: l=>{
                    const c = n.indexOf(l);
                    t.splice(c, 1),
                    n.splice(c, 1)
                }
                ,
                children: t,
                internalChildren: n
            }, r))
        }
    }
}
var ys = 1e3
  , ps = 60 * ys
  , ws = 60 * ps
  , Pc = 24 * ws;
function Yv(e) {
    const t = Math.floor(e / Pc)
      , n = Math.floor(e % Pc / ws)
      , o = Math.floor(e % ws / ps)
      , a = Math.floor(e % ps / ys)
      , r = Math.floor(e % ys);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: o,
        seconds: a,
        milliseconds: r
    }
}
function qv(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}
function Kv(e) {
    let t, n, o, a;
    const r = R(e.time)
      , i = $(()=>Yv(r.value))
      , s = ()=>{
        o = !1,
        ii(t)
    }
      , l = ()=>Math.max(n - Date.now(), 0)
      , c = p=>{
        var b, v;
        r.value = p,
        (b = e.onChange) == null || b.call(e, i.value),
        p === 0 && (s(),
        (v = e.onFinish) == null || v.call(e))
    }
      , u = ()=>{
        t = yt(()=>{
            o && (c(l()),
            r.value > 0 && u())
        }
        )
    }
      , f = ()=>{
        t = yt(()=>{
            if (o) {
                const p = l();
                (!qv(p, r.value) || p === 0) && c(p),
                r.value > 0 && f()
            }
        }
        )
    }
      , h = ()=>{
        io && (e.millisecond ? u() : f())
    }
      , g = ()=>{
        o || (n = Date.now() + r.value,
        o = !0,
        h())
    }
      , S = (p=e.time)=>{
        s(),
        r.value = p
    }
    ;
    return bn(s),
    mn(()=>{
        a && (o = !0,
        a = !1,
        h())
    }
    ),
    vn(()=>{
        o && (s(),
        a = !0)
    }
    ),
    {
        start: g,
        pause: s,
        reset: S,
        current: i
    }
}
function ca(e) {
    let t;
    tt(()=>{
        e(),
        Pe(()=>{
            t = !0
        }
        )
    }
    ),
    mn(()=>{
        t && e()
    }
    )
}
function et(e, t, n={}) {
    if (!io)
        return;
    const {target: o=window, passive: a=!1, capture: r=!1} = n;
    let i = !1, s;
    const l = f=>{
        if (i)
            return;
        const h = Xt(f);
        h && !s && (h.addEventListener(e, t, {
            capture: r,
            passive: a
        }),
        s = !0)
    }
      , c = f=>{
        if (i)
            return;
        const h = Xt(f);
        h && s && (h.removeEventListener(e, t, r),
        s = !1)
    }
    ;
    ia(()=>c(o)),
    vn(()=>c(o)),
    ca(()=>l(o));
    let u;
    return rt(o) && (u = ae(o, (f,h)=>{
        c(h),
        l(f)
    }
    )),
    ()=>{
        u == null || u(),
        c(o),
        i = !0
    }
}
function si(e, t, n={}) {
    if (!io)
        return;
    const {eventName: o="click"} = n;
    et(o, r=>{
        (Array.isArray(e) ? e : [e]).every(l=>{
            const c = Xt(l);
            return c && !c.contains(r.target)
        }
        ) && t(r)
    }
    , {
        target: document
    })
}
var cr, Ri;
function Gv() {
    if (!cr && (cr = R(0),
    Ri = R(0),
    io)) {
        const e = ()=>{
            cr.value = window.innerWidth,
            Ri.value = window.innerHeight
        }
        ;
        e(),
        window.addEventListener("resize", e, {
            passive: !0
        }),
        window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: cr,
        height: Ri
    }
}
var Xv = /scroll|auto|overlay/i
  , hf = io ? window : void 0;
function Qv(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}
function sl(e, t=hf) {
    let n = e;
    for (; n && n !== t && Qv(n); ) {
        const {overflowY: o} = window.getComputedStyle(n);
        if (Xv.test(o))
            return n;
        n = n.parentNode
    }
    return t
}
function ua(e, t=hf) {
    const n = R();
    return tt(()=>{
        e.value && (n.value = sl(e.value, t))
    }
    ),
    n
}
var ur;
function Zv() {
    if (!ur && (ur = R("visible"),
    io)) {
        const e = ()=>{
            ur.value = document.hidden ? "hidden" : "visible"
        }
        ;
        e(),
        window.addEventListener("visibilitychange", e)
    }
    return ur
}
var gf = Symbol("van-field");
function so(e) {
    const t = Pt(gf, null);
    t && !t.customValue.value && (t.customValue.value = e,
    ae(e, ()=>{
        t.resetValidation(),
        t.validateWithTrigger("onChange")
    }
    ))
}
function En(e) {
    const t = "scrollTop"in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}
function zr(e, t) {
    "scrollTop"in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}
function xo() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
function Wa(e) {
    zr(window, e),
    zr(document.body, e)
}
function Ec(e, t) {
    if (e === window)
        return 0;
    const n = t ? En(t) : xo();
    return Ve(e).top + n
}
const Jv = fg();
function mf() {
    Jv && Wa(xo())
}
const ll = e=>e.stopPropagation();
function We(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    t && ll(e)
}
function To(e) {
    const t = Xt(e);
    if (!t)
        return !1;
    const n = window.getComputedStyle(t)
      , o = n.display === "none"
      , a = t.offsetParent === null && n.position !== "fixed";
    return o || a
}
const {width: Qt, height: zt} = Gv();
function eb(e) {
    const t = window.getComputedStyle(e);
    return t.transform !== "none" || t.perspective !== "none" || ["transform", "perspective", "filter"].some(n=>(t.willChange || "").includes(n))
}
function tb(e) {
    let t = e.parentElement;
    for (; t; ) {
        if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && eb(t))
            return t;
        t = t.parentElement
    }
    return null
}
function _e(e) {
    if (De(e))
        return ed(e) ? `${e}px` : String(e)
}
function In(e) {
    if (De(e)) {
        if (Array.isArray(e))
            return {
                width: _e(e[0]),
                height: _e(e[1])
            };
        const t = _e(e);
        return {
            width: t,
            height: t
        }
    }
}
function $n(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e),
    t
}
let Li;
function nb() {
    if (!Li) {
        const e = document.documentElement
          , t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        Li = parseFloat(t)
    }
    return Li
}
function ob(e) {
    return e = e.replace(/rem/g, ""),
    +e * nb()
}
function ab(e) {
    return e = e.replace(/vw/g, ""),
    +e * Qt.value / 100
}
function rb(e) {
    return e = e.replace(/vh/g, ""),
    +e * zt.value / 100
}
function cl(e) {
    if (typeof e == "number")
        return e;
    if (Dt) {
        if (e.includes("rem"))
            return ob(e);
        if (e.includes("vw"))
            return ab(e);
        if (e.includes("vh"))
            return rb(e)
    }
    return parseFloat(e)
}
const ib = /-(\w)/g
  , vf = e=>e.replace(ib, (t,n)=>n.toUpperCase())
  , sb = e=>e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function Kt(e, t=2) {
    let n = e + "";
    for (; n.length < t; )
        n = "0" + n;
    return n
}
const gt = (e,t,n)=>Math.min(Math.max(e, t), n);
function Ac(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}
function Ss(e, t=!0, n=!0) {
    t ? e = Ac(e, ".", /\./g) : e = e.split(".")[0],
    n ? e = Ac(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}
function bf(e, t) {
    return Math.round((e + t) * 1e10) / 1e10
}
const {hasOwnProperty: lb} = Object.prototype;
function cb(e, t, n) {
    const o = t[n];
    De(o) && (!lb.call(e, n) || !hn(o) ? e[n] = o : e[n] = yf(Object(e[n]), o))
}
function yf(e, t) {
    return Object.keys(t).forEach(n=>{
        cb(e, t, n)
    }
    ),
    e
}
var ub = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
        end: "结束",
        start: "开始",
        title: "日期选择",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        monthTitle: (e,t)=>`${e}年${t}月`,
        rangePrompt: e=>`最多选择 ${e} 天`
    },
    vanCascader: {
        select: "请选择"
    },
    vanPagination: {
        prev: "上一页",
        next: "下一页"
    },
    vanPullRefresh: {
        pulling: "下拉即可刷新...",
        loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
        label: "合计:"
    },
    vanCoupon: {
        unlimited: "无门槛",
        discount: e=>`${e}折`,
        condition: e=>`满${e}元可用`
    },
    vanCouponCell: {
        title: "优惠券",
        count: e=>`${e}张可用`
    },
    vanCouponList: {
        exchange: "兑换",
        close: "不使用",
        enable: "可用",
        disabled: "不可用",
        placeholder: "输入优惠码"
    },
    vanAddressEdit: {
        area: "地区",
        areaEmpty: "请选择地区",
        addressEmpty: "请填写详细地址",
        addressDetail: "详细地址",
        defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
        add: "新增地址"
    }
};
const Bc = R("zh-CN")
  , Oc = Ge({
    "zh-CN": ub
})
  , pf = {
    messages() {
        return Oc[Bc.value]
    },
    use(e, t) {
        Bc.value = e,
        this.add({
            [e]: t
        })
    },
    add(e={}) {
        yf(Oc, e)
    }
};
var db = pf;
function fb(e) {
    const t = vf(e) + ".";
    return (n,...o)=>{
        const a = db.messages()
          , r = Vl(a, t + n) || Vl(a, n);
        return ea(r) ? r(...o) : r
    }
}
function Cs(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n,o)=>n + Cs(e, o), "") : Object.keys(t).reduce((n,o)=>n + (t[o] ? Cs(e, o) : ""), "") : ""
}
function hb(e) {
    return (t,n)=>(t && typeof t != "string" && (n = t,
    t = ""),
    t = t ? `${e}__${t}` : e,
    `${t}${Cs(t, n)}`)
}
function W(e) {
    const t = `van-${e}`;
    return [t, hb(t), fb(t)]
}
const Dn = "van-hairline"
  , wf = `${Dn}--top`
  , Sf = `${Dn}--left`
  , gb = `${Dn}--right`
  , ul = `${Dn}--bottom`
  , Ba = `${Dn}--surround`
  , li = `${Dn}--top-bottom`
  , mb = `${Dn}-unset--top-bottom`
  , pt = "van-haptics-feedback"
  , Cf = Symbol("van-form")
  , _f = 500
  , Ic = 5;
function lo(e, {args: t=[], done: n, canceled: o, error: a}) {
    if (e) {
        const r = e.apply(null, t);
        Ns(r) ? r.then(i=>{
            i ? n() : o && o()
        }
        ).catch(a || as) : r ? n() : o && o()
    } else
        n()
}
function G(e) {
    return e.install = t=>{
        const {name: n} = e;
        n && (t.component(n, e),
        t.component(vf(`-${n}`), e))
    }
    ,
    e
}
function jr(e, t) {
    return e.reduce((n,o)=>Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const xf = Symbol();
function ci(e) {
    const t = Pt(xf, null);
    t && ae(t, n=>{
        n && e()
    }
    )
}
const kf = (e,t)=>{
    const n = R()
      , o = ()=>{
        n.value = Ve(e).height
    }
    ;
    return tt(()=>{
        if (Pe(o),
        t)
            for (let a = 1; a <= 3; a++)
                setTimeout(o, 100 * a)
    }
    ),
    ci(()=>Pe(o)),
    ae([Qt, zt], o),
    n
}
;
function ui(e, t) {
    const n = kf(e, !0);
    return o=>d("div", {
        class: t("placeholder"),
        style: {
            height: n.value ? `${n.value}px` : void 0
        }
    }, [o()])
}
const [Tf,$c] = W("action-bar")
  , dl = Symbol(Tf)
  , vb = {
    placeholder: Boolean,
    safeAreaInsetBottom: z
};
var bb = j({
    name: Tf,
    props: vb,
    setup(e, {slots: t}) {
        const n = R()
          , o = ui(n, $c)
          , {linkChildren: a} = St(dl);
        a();
        const r = ()=>{
            var i;
            return d("div", {
                ref: n,
                class: [$c(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(i = t.default) == null ? void 0 : i.call(t)])
        }
        ;
        return ()=>e.placeholder ? o(r) : r()
    }
});
const Pf = G(bb);
function Oe(e) {
    const t = en();
    t && be(t.proxy, e)
}
const co = {
    to: [String, Object],
    url: String,
    replace: Boolean
};
function Ef({to: e, url: t, replace: n, $router: o}) {
    e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}
function Eo() {
    const e = en().proxy;
    return ()=>Ef(e)
}
const [yb,Dc] = W("badge")
  , pb = {
    dot: Boolean,
    max: q,
    tag: X("div"),
    color: String,
    offset: Array,
    content: q,
    showZero: z,
    position: X("top-right")
};
var wb = j({
    name: yb,
    props: pb,
    setup(e, {slots: t}) {
        const n = ()=>{
            if (t.content)
                return !0;
            const {content: s, showZero: l} = e;
            return De(s) && s !== "" && (l || s !== 0 && s !== "0")
        }
          , o = ()=>{
            const {dot: s, max: l, content: c} = e;
            if (!s && n())
                return t.content ? t.content() : De(l) && ed(c) && +c > +l ? `${l}+` : c
        }
          , a = s=>s.startsWith("-") ? s.replace("-", "") : `-${s}`
          , r = $(()=>{
            const s = {
                background: e.color
            };
            if (e.offset) {
                const [l,c] = e.offset
                  , {position: u} = e
                  , [f,h] = u.split("-");
                t.default ? (typeof c == "number" ? s[f] = _e(f === "top" ? c : -c) : s[f] = f === "top" ? _e(c) : a(c),
                typeof l == "number" ? s[h] = _e(h === "left" ? l : -l) : s[h] = h === "left" ? _e(l) : a(l)) : (s.marginTop = _e(c),
                s.marginLeft = _e(l))
            }
            return s
        }
        )
          , i = ()=>{
            if (n() || e.dot)
                return d("div", {
                    class: Dc([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: r.value
                }, [o()])
        }
        ;
        return ()=>{
            if (t.default) {
                const {tag: s} = e;
                return d(s, {
                    class: Dc("wrapper")
                }, {
                    default: ()=>[t.default(), i()]
                })
            }
            return i()
        }
    }
});
const Ao = G(wb);
let Af = 2e3;
const Sb = ()=>++Af
  , Cb = e=>{
    Af = e
}
  , [Bf,_b] = W("config-provider")
  , Of = Symbol(Bf)
  , xb = {
    tag: X("div"),
    theme: X("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: X("local"),
    iconPrefix: String
};
function kb(e) {
    return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}
function Tb(e) {
    const t = {};
    return Object.keys(e).forEach(n=>{
        const o = kb(sb(n));
        t[`--van-${o}`] = e[n]
    }
    ),
    t
}
function dr(e={}, t={}) {
    Object.keys(e).forEach(n=>{
        e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
    }
    ),
    Object.keys(t).forEach(n=>{
        e[n] || document.documentElement.style.removeProperty(n)
    }
    )
}
var Pb = j({
    name: Bf,
    props: xb,
    setup(e, {slots: t}) {
        const n = $(()=>Tb(be({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (Dt) {
            const o = ()=>{
                document.documentElement.classList.add(`van-theme-${e.theme}`)
            }
              , a = (r=e.theme)=>{
                document.documentElement.classList.remove(`van-theme-${r}`)
            }
            ;
            ae(()=>e.theme, (r,i)=>{
                i && a(i),
                o()
            }
            , {
                immediate: !0
            }),
            mn(o),
            vn(a),
            bn(a),
            ae(n, (r,i)=>{
                e.themeVarsScope === "global" && dr(r, i)
            }
            ),
            ae(()=>e.themeVarsScope, (r,i)=>{
                i === "global" && dr({}, n.value),
                r === "global" && dr(n.value, {})
            }
            ),
            e.themeVarsScope === "global" && dr(n.value, {})
        }
        return kn(Of, e),
        ra(()=>{
            e.zIndex !== void 0 && Cb(e.zIndex)
        }
        ),
        ()=>d(e.tag, {
            class: _b(),
            style: e.themeVarsScope === "local" ? n.value : void 0
        }, {
            default: ()=>{
                var o;
                return [(o = t.default) == null ? void 0 : o.call(t)]
            }
        })
    }
});
const [Eb,Rc] = W("icon")
  , Ab = e=>e == null ? void 0 : e.includes("/")
  , Bb = {
    dot: Boolean,
    tag: X("i"),
    name: String,
    size: q,
    badge: q,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var Ob = j({
    name: Eb,
    props: Bb,
    setup(e, {slots: t}) {
        const n = Pt(Of, null)
          , o = $(()=>e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Rc());
        return ()=>{
            const {tag: a, dot: r, name: i, size: s, badge: l, color: c} = e
              , u = Ab(i);
            return d(Ao, Be({
                dot: r,
                tag: a,
                class: [o.value, u ? "" : `${o.value}-${i}`],
                style: {
                    color: c,
                    fontSize: _e(s)
                },
                content: l
            }, e.badgeProps), {
                default: ()=>{
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t), u && d("img", {
                        class: Rc("image"),
                        src: i
                    }, null)]
                }
            })
        }
    }
});
const xe = G(Ob);
var Ib = xe;
const [$b,Oa] = W("loading")
  , Db = Array(12).fill(null).map((e,t)=>d("i", {
    class: Oa("line", String(t + 1))
}, null))
  , Rb = d("svg", {
    class: Oa("circular"),
    viewBox: "25 25 50 50"
}, [d("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)])
  , Lb = {
    size: q,
    type: X("circular"),
    color: String,
    vertical: Boolean,
    textSize: q,
    textColor: String
};
var Mb = j({
    name: $b,
    props: Lb,
    setup(e, {slots: t}) {
        const n = $(()=>be({
            color: e.color
        }, In(e.size)))
          , o = ()=>{
            const r = e.type === "spinner" ? Db : Rb;
            return d("span", {
                class: Oa("spinner", e.type),
                style: n.value
            }, [t.icon ? t.icon() : r])
        }
          , a = ()=>{
            var r;
            if (t.default)
                return d("span", {
                    class: Oa("text"),
                    style: {
                        fontSize: _e(e.textSize),
                        color: (r = e.textColor) != null ? r : e.color
                    }
                }, [t.default()])
        }
        ;
        return ()=>{
            const {type: r, vertical: i} = e;
            return d("div", {
                class: Oa([r, {
                    vertical: i
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [o(), a()])
        }
    }
});
const tn = G(Mb)
  , [Fb,Io] = W("button")
  , Vb = be({}, co, {
    tag: X("button"),
    text: String,
    icon: String,
    type: X("default"),
    size: X("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: X("button"),
    loadingSize: q,
    loadingText: String,
    loadingType: String,
    iconPosition: X("left")
});
var Nb = j({
    name: Fb,
    props: Vb,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Eo()
          , a = ()=>n.loading ? n.loading() : d(tn, {
            size: e.loadingSize,
            type: e.loadingType,
            class: Io("loading")
        }, null)
          , r = ()=>{
            if (e.loading)
                return a();
            if (n.icon)
                return d("div", {
                    class: Io("icon")
                }, [n.icon()]);
            if (e.icon)
                return d(xe, {
                    name: e.icon,
                    class: Io("icon"),
                    classPrefix: e.iconPrefix
                }, null)
        }
          , i = ()=>{
            let c;
            if (e.loading ? c = e.loadingText : c = n.default ? n.default() : e.text,
            c)
                return d("span", {
                    class: Io("text")
                }, [c])
        }
          , s = ()=>{
            const {color: c, plain: u} = e;
            if (c) {
                const f = {
                    color: u ? c : "white"
                };
                return u || (f.background = c),
                c.includes("gradient") ? f.border = 0 : f.borderColor = c,
                f
            }
        }
          , l = c=>{
            e.loading ? We(c) : e.disabled || (t("click", c),
            o())
        }
        ;
        return ()=>{
            const {tag: c, type: u, size: f, block: h, round: g, plain: S, square: p, loading: b, disabled: v, hairline: m, nativeType: y, iconPosition: w} = e
              , C = [Io([u, f, {
                plain: S,
                block: h,
                round: g,
                square: p,
                loading: b,
                disabled: v,
                hairline: m
            }]), {
                [Ba]: m
            }];
            return d(c, {
                type: y,
                class: C,
                style: s(),
                disabled: v,
                onClick: l
            }, {
                default: ()=>[d("div", {
                    class: Io("content")
                }, [w === "left" && r(), i(), w === "right" && r()])]
            })
        }
    }
});
const wt = G(Nb)
  , [Hb,zb] = W("action-bar-button")
  , jb = be({}, co, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
});
var Ub = j({
    name: Hb,
    props: jb,
    setup(e, {slots: t}) {
        const n = Eo()
          , {parent: o, index: a} = mt(dl)
          , r = $(()=>{
            if (o) {
                const s = o.children[a.value - 1];
                return !(s && "isButton"in s)
            }
        }
        )
          , i = $(()=>{
            if (o) {
                const s = o.children[a.value + 1];
                return !(s && "isButton"in s)
            }
        }
        );
        return Oe({
            isButton: !0
        }),
        ()=>{
            const {type: s, icon: l, text: c, color: u, loading: f, disabled: h} = e;
            return d(wt, {
                class: zb([s, {
                    last: i.value,
                    first: r.value
                }]),
                size: "large",
                type: s,
                icon: l,
                color: u,
                loading: f,
                disabled: h,
                onClick: n
            }, {
                default: ()=>[t.default ? t.default() : c]
            })
        }
    }
});
const _s = G(Ub)
  , [Wb,Mi] = W("action-bar-icon")
  , Yb = be({}, co, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: q,
    iconClass: Qe,
    badgeProps: Object,
    iconPrefix: String
});
var qb = j({
    name: Wb,
    props: Yb,
    setup(e, {slots: t}) {
        const n = Eo();
        mt(dl);
        const o = ()=>{
            const {dot: a, badge: r, icon: i, color: s, iconClass: l, badgeProps: c, iconPrefix: u} = e;
            return t.icon ? d(Ao, Be({
                dot: a,
                class: Mi("icon"),
                content: r
            }, c), {
                default: t.icon
            }) : d(xe, {
                tag: "div",
                dot: a,
                name: i,
                badge: r,
                color: s,
                class: [Mi("icon"), l],
                badgeProps: c,
                classPrefix: u
            }, null)
        }
        ;
        return ()=>d("div", {
            role: "button",
            class: Mi(),
            tabindex: 0,
            onClick: n
        }, [o(), t.default ? t.default() : e.text])
    }
});
const Kb = G(qb)
  , da = {
    show: Boolean,
    zIndex: q,
    overlay: z,
    duration: q,
    teleport: [String, Object],
    lockScroll: z,
    lazyRender: z,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: Qe,
    transitionAppear: Boolean,
    closeOnClickOverlay: z
}
  , fl = Object.keys(da);
function Gb(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}
function jt() {
    const e = R(0)
      , t = R(0)
      , n = R(0)
      , o = R(0)
      , a = R(0)
      , r = R(0)
      , i = R("")
      , s = R(!0)
      , l = ()=>i.value === "vertical"
      , c = ()=>i.value === "horizontal"
      , u = ()=>{
        n.value = 0,
        o.value = 0,
        a.value = 0,
        r.value = 0,
        i.value = "",
        s.value = !0
    }
    ;
    return {
        move: g=>{
            const S = g.touches[0];
            n.value = (S.clientX < 0 ? 0 : S.clientX) - e.value,
            o.value = S.clientY - t.value,
            a.value = Math.abs(n.value),
            r.value = Math.abs(o.value);
            const p = 10;
            (!i.value || a.value < p && r.value < p) && (i.value = Gb(a.value, r.value)),
            s.value && (a.value > Ic || r.value > Ic) && (s.value = !1)
        }
        ,
        start: g=>{
            u(),
            e.value = g.touches[0].clientX,
            t.value = g.touches[0].clientY
        }
        ,
        reset: u,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: o,
        offsetX: a,
        offsetY: r,
        direction: i,
        isVertical: l,
        isHorizontal: c,
        isTap: s
    }
}
let va = 0;
const Lc = "van-overflow-hidden";
function If(e, t) {
    const n = jt()
      , o = "01"
      , a = "10"
      , r = u=>{
        n.move(u);
        const f = n.deltaY.value > 0 ? a : o
          , h = sl(u.target, e.value)
          , {scrollHeight: g, offsetHeight: S, scrollTop: p} = h;
        let b = "11";
        p === 0 ? b = S >= g ? "00" : "01" : p + S >= g && (b = "10"),
        b !== "11" && n.isVertical() && !(parseInt(b, 2) & parseInt(f, 2)) && We(u, !0)
    }
      , i = ()=>{
        document.addEventListener("touchstart", n.start),
        document.addEventListener("touchmove", r, {
            passive: !1
        }),
        va || document.body.classList.add(Lc),
        va++
    }
      , s = ()=>{
        va && (document.removeEventListener("touchstart", n.start),
        document.removeEventListener("touchmove", r),
        va--,
        va || document.body.classList.remove(Lc))
    }
      , l = ()=>t() && i()
      , c = ()=>t() && s();
    ca(l),
    vn(c),
    bn(c),
    ae(t, u=>{
        u ? i() : s()
    }
    )
}
function hl(e) {
    const t = R(!1);
    return ae(e, n=>{
        n && (t.value = n)
    }
    , {
        immediate: !0
    }),
    n=>()=>t.value ? n() : null
}
const Ur = ()=>{
    var e;
    const {scopeId: t} = ((e = en()) == null ? void 0 : e.vnode) || {};
    return t ? {
        [t]: ""
    } : null
}
  , [Xb,Qb] = W("overlay")
  , Zb = {
    show: Boolean,
    zIndex: q,
    duration: q,
    className: Qe,
    lockScroll: z,
    lazyRender: z,
    customStyle: Object
};
var Jb = j({
    name: Xb,
    props: Zb,
    setup(e, {slots: t}) {
        const n = R()
          , o = hl(()=>e.show || !e.lazyRender)
          , a = i=>{
            e.lockScroll && We(i, !0)
        }
          , r = o(()=>{
            var i;
            const s = be($n(e.zIndex), e.customStyle);
            return De(e.duration) && (s.animationDuration = `${e.duration}s`),
            st(d("div", {
                ref: n,
                style: s,
                class: [Qb(), e.className]
            }, [(i = t.default) == null ? void 0 : i.call(t)]), [[ht, e.show]])
        }
        );
        return et("touchmove", a, {
            target: n
        }),
        ()=>d(la, {
            name: "van-fade",
            appear: !0
        }, {
            default: r
        })
    }
});
const $f = G(Jb)
  , ey = be({}, da, {
    round: Boolean,
    position: X("center"),
    closeIcon: X("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: X("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
})
  , [ty,Mc] = W("popup");
var ny = j({
    name: ty,
    inheritAttrs: !1,
    props: ey,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {emit: t, attrs: n, slots: o}) {
        let a, r;
        const i = R()
          , s = R()
          , l = hl(()=>e.show || !e.lazyRender)
          , c = $(()=>{
            const x = {
                zIndex: i.value
            };
            if (De(e.duration)) {
                const B = e.position === "center" ? "animationDuration" : "transitionDuration";
                x[B] = `${e.duration}s`
            }
            return x
        }
        )
          , u = ()=>{
            a || (a = !0,
            i.value = e.zIndex !== void 0 ? +e.zIndex : Sb(),
            t("open"))
        }
          , f = ()=>{
            a && lo(e.beforeClose, {
                done() {
                    a = !1,
                    t("close"),
                    t("update:show", !1)
                }
            })
        }
          , h = x=>{
            t("clickOverlay", x),
            e.closeOnClickOverlay && f()
        }
          , g = ()=>{
            if (e.overlay)
                return d($f, Be({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: i.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, Ur(), {
                    onClick: h
                }), {
                    default: o["overlay-content"]
                })
        }
          , S = x=>{
            t("clickCloseIcon", x),
            f()
        }
          , p = ()=>{
            if (e.closeable)
                return d(xe, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [Mc("close-icon", e.closeIconPosition), pt],
                    classPrefix: e.iconPrefix,
                    onClick: S
                }, null)
        }
        ;
        let b;
        const v = ()=>{
            b && clearTimeout(b),
            b = setTimeout(()=>{
                t("opened")
            }
            )
        }
          , m = ()=>t("closed")
          , y = x=>t("keydown", x)
          , w = l(()=>{
            var x;
            const {round: B, position: _, safeAreaInsetTop: O, safeAreaInsetBottom: I} = e;
            return st(d("div", Be({
                ref: s,
                style: c.value,
                role: "dialog",
                tabindex: 0,
                class: [Mc({
                    round: B,
                    [_]: _
                }), {
                    "van-safe-area-top": O,
                    "van-safe-area-bottom": I
                }],
                onKeydown: y
            }, n, Ur()), [(x = o.default) == null ? void 0 : x.call(o), p()]), [[ht, e.show]])
        }
        )
          , C = ()=>{
            const {position: x, transition: B, transitionAppear: _} = e
              , O = x === "center" ? "van-fade" : `van-popup-slide-${x}`;
            return d(la, {
                name: B || O,
                appear: _,
                onAfterEnter: v,
                onAfterLeave: m
            }, {
                default: w
            })
        }
        ;
        return ae(()=>e.show, x=>{
            x && !a && (u(),
            n.tabindex === 0 && Pe(()=>{
                var B;
                (B = s.value) == null || B.focus()
            }
            )),
            !x && a && (a = !1,
            t("close"))
        }
        ),
        Oe({
            popupRef: s
        }),
        If(s, ()=>e.show && e.lockScroll),
        et("popstate", ()=>{
            e.closeOnPopstate && (f(),
            r = !1)
        }
        ),
        tt(()=>{
            e.show && u()
        }
        ),
        mn(()=>{
            r && (t("update:show", !0),
            r = !1)
        }
        ),
        vn(()=>{
            e.show && e.teleport && (f(),
            r = !0)
        }
        ),
        kn(xf, ()=>e.show),
        ()=>e.teleport ? d(sa, {
            to: e.teleport
        }, {
            default: ()=>[g(), C()]
        }) : d(Fe, null, [g(), C()])
    }
});
const Rt = G(ny)
  , [oy,Mt] = W("action-sheet")
  , ay = be({}, da, {
    title: String,
    round: z,
    actions: qe(),
    closeIcon: X("cross"),
    closeable: z,
    cancelText: String,
    description: String,
    closeOnPopstate: z,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: z
})
  , ry = [...fl, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var iy = j({
    name: oy,
    props: ay,
    emits: ["select", "cancel", "update:show"],
    setup(e, {slots: t, emit: n}) {
        const o = f=>n("update:show", f)
          , a = ()=>{
            o(!1),
            n("cancel")
        }
          , r = ()=>{
            if (e.title)
                return d("div", {
                    class: Mt("header")
                }, [e.title, e.closeable && d(xe, {
                    name: e.closeIcon,
                    class: [Mt("close"), pt],
                    onClick: a
                }, null)])
        }
          , i = ()=>{
            if (t.cancel || e.cancelText)
                return [d("div", {
                    class: Mt("gap")
                }, null), d("button", {
                    type: "button",
                    class: Mt("cancel"),
                    onClick: a
                }, [t.cancel ? t.cancel() : e.cancelText])]
        }
          , s = f=>{
            if (f.icon)
                return d(xe, {
                    class: Mt("item-icon"),
                    name: f.icon
                }, null)
        }
          , l = (f,h)=>f.loading ? d(tn, {
            class: Mt("loading-icon")
        }, null) : t.action ? t.action({
            action: f,
            index: h
        }) : [d("span", {
            class: Mt("name")
        }, [f.name]), f.subname && d("div", {
            class: Mt("subname")
        }, [f.subname])]
          , c = (f,h)=>{
            const {color: g, loading: S, callback: p, disabled: b, className: v} = f
              , m = ()=>{
                b || S || (p && p(f),
                e.closeOnClickAction && o(!1),
                Pe(()=>n("select", f, h)))
            }
            ;
            return d("button", {
                type: "button",
                style: {
                    color: g
                },
                class: [Mt("item", {
                    loading: S,
                    disabled: b
                }), v],
                onClick: m
            }, [s(f), l(f, h)])
        }
          , u = ()=>{
            if (e.description || t.description) {
                const f = t.description ? t.description() : e.description;
                return d("div", {
                    class: Mt("description")
                }, [f])
            }
        }
        ;
        return ()=>d(Rt, Be({
            class: Mt(),
            position: "bottom",
            "onUpdate:show": o
        }, Le(e, ry)), {
            default: ()=>{
                var f;
                return [r(), u(), d("div", {
                    class: Mt("content")
                }, [e.actions.map(c), (f = t.default) == null ? void 0 : f.call(t)]), i()]
            }
        })
    }
});
const sy = G(iy)
  , [ly,_n,Fc] = W("picker")
  , Df = e=>e.find(t=>!t.disabled) || e[0];
function cy(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n))
            return "multiple";
        if (t.children in n)
            return "cascade"
    }
    return "default"
}
function Ir(e, t) {
    t = gt(t, 0, e.length);
    for (let n = t; n < e.length; n++)
        if (!e[n].disabled)
            return n;
    for (let n = t - 1; n >= 0; n--)
        if (!e[n].disabled)
            return n;
    return 0
}
const Vc = (e,t,n)=>t !== void 0 && !!e.find(o=>o[n.value] === t);
function xs(e, t, n) {
    const o = e.findIndex(r=>r[n.value] === t)
      , a = Ir(e, o);
    return e[a]
}
function uy(e, t, n) {
    const o = [];
    let a = {
        [t.children]: e
    }
      , r = 0;
    for (; a && a[t.children]; ) {
        const i = a[t.children]
          , s = n.value[r];
        if (a = De(s) ? xs(i, s, t) : void 0,
        !a && i.length) {
            const l = Df(i)[t.value];
            a = xs(i, l, t)
        }
        r++,
        o.push(i)
    }
    return o
}
function dy(e) {
    const {transform: t} = window.getComputedStyle(e)
      , n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}
function fy(e) {
    return be({
        text: "text",
        value: "value",
        children: "children"
    }, e)
}
const Nc = 200
  , Hc = 300
  , hy = 15
  , [Rf,Fi] = W("picker-column")
  , Lf = Symbol(Rf);
var gy = j({
    name: Rf,
    props: {
        value: q,
        fields: ft(Object),
        options: qe(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: ft(Number),
        swipeDuration: ft(q),
        visibleOptionNum: ft(q)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {emit: t, slots: n}) {
        let o, a, r, i, s;
        const l = R()
          , c = R()
          , u = R(0)
          , f = R(0)
          , h = jt()
          , g = ()=>e.options.length
          , S = ()=>e.optionHeight * (+e.visibleOptionNum - 1) / 2
          , p = I=>{
            let k = Ir(e.options, I);
            const E = -k * e.optionHeight
              , D = ()=>{
                k > g() - 1 && (k = Ir(e.options, I));
                const Q = e.options[k][e.fields.value];
                Q !== e.value && t("change", Q)
            }
            ;
            o && E !== u.value ? s = D : D(),
            u.value = E
        }
          , b = ()=>e.readonly || !e.options.length
          , v = I=>{
            o || b() || (s = null,
            f.value = Nc,
            p(I),
            t("clickOption", e.options[I]))
        }
          , m = I=>gt(Math.round(-I / e.optionHeight), 0, g() - 1)
          , y = $(()=>m(u.value))
          , w = (I,k)=>{
            const E = Math.abs(I / k);
            I = u.value + E / .003 * (I < 0 ? -1 : 1);
            const D = m(I);
            f.value = +e.swipeDuration,
            p(D)
        }
          , C = ()=>{
            o = !1,
            f.value = 0,
            s && (s(),
            s = null)
        }
          , x = I=>{
            if (!b()) {
                if (h.start(I),
                o) {
                    const k = dy(c.value);
                    u.value = Math.min(0, k - S())
                }
                f.value = 0,
                a = u.value,
                r = Date.now(),
                i = a,
                s = null
            }
        }
          , B = I=>{
            if (b())
                return;
            h.move(I),
            h.isVertical() && (o = !0,
            We(I, !0));
            const k = gt(a + h.deltaY.value, -(g() * e.optionHeight), e.optionHeight)
              , E = m(k);
            E !== y.value && t("scrollInto", e.options[E]),
            u.value = k;
            const D = Date.now();
            D - r > Hc && (r = D,
            i = k)
        }
          , _ = ()=>{
            if (b())
                return;
            const I = u.value - i
              , k = Date.now() - r;
            if (k < Hc && Math.abs(I) > hy) {
                w(I, k);
                return
            }
            const D = m(u.value);
            f.value = Nc,
            p(D),
            setTimeout(()=>{
                o = !1
            }
            , 0)
        }
          , O = ()=>{
            const I = {
                height: `${e.optionHeight}px`
            };
            return e.options.map((k,E)=>{
                const D = k[e.fields.text]
                  , {disabled: Q} = k
                  , oe = k[e.fields.value]
                  , N = {
                    role: "button",
                    style: I,
                    tabindex: Q ? -1 : 0,
                    class: [Fi("item", {
                        disabled: Q,
                        selected: oe === e.value
                    }), k.className],
                    onClick: ()=>v(E)
                }
                  , Z = {
                    class: "van-ellipsis",
                    [e.allowHtml ? "innerHTML" : "textContent"]: D
                };
                return d("li", N, [n.option ? n.option(k, E) : d("div", Z, null)])
            }
            )
        }
        ;
        return mt(Lf),
        Oe({
            stopMomentum: C
        }),
        ra(()=>{
            const I = o ? Math.floor(-u.value / e.optionHeight) : e.options.findIndex(D=>D[e.fields.value] === e.value)
              , k = Ir(e.options, I)
              , E = -k * e.optionHeight;
            o && k < I && C(),
            u.value = E
        }
        ),
        et("touchmove", B, {
            target: l
        }),
        ()=>d("div", {
            ref: l,
            class: Fi(),
            onTouchstartPassive: x,
            onTouchend: _,
            onTouchcancel: _
        }, [d("ul", {
            ref: c,
            style: {
                transform: `translate3d(0, ${u.value + S()}px, 0)`,
                transitionDuration: `${f.value}ms`,
                transitionProperty: f.value ? "all" : "none"
            },
            class: Fi("wrapper"),
            onTransitionend: C
        }, [O()])])
    }
});
const [my] = W("picker-toolbar")
  , di = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
}
  , Mf = ["cancel", "confirm", "title", "toolbar"]
  , vy = Object.keys(di);
var Ff = j({
    name: my,
    props: di,
    emits: ["confirm", "cancel"],
    setup(e, {emit: t, slots: n}) {
        const o = ()=>{
            if (n.title)
                return n.title();
            if (e.title)
                return d("div", {
                    class: [_n("title"), "van-ellipsis"]
                }, [e.title])
        }
          , a = ()=>t("cancel")
          , r = ()=>t("confirm")
          , i = ()=>{
            var l;
            const c = (l = e.cancelButtonText) != null ? l : Fc("cancel");
            if (!(!n.cancel && !c))
                return d("button", {
                    type: "button",
                    class: [_n("cancel"), pt],
                    onClick: a
                }, [n.cancel ? n.cancel() : c])
        }
          , s = ()=>{
            var l;
            const c = (l = e.confirmButtonText) != null ? l : Fc("confirm");
            if (!(!n.confirm && !c))
                return d("button", {
                    type: "button",
                    class: [_n("confirm"), pt],
                    onClick: r
                }, [n.confirm ? n.confirm() : c])
        }
        ;
        return ()=>d("div", {
            class: _n("toolbar")
        }, [n.toolbar ? n.toolbar() : [i(), o(), s()]])
    }
});
const gl = (e,t)=>{
    const n = R(e());
    return ae(e, o=>{
        o !== n.value && (n.value = o)
    }
    ),
    ae(n, o=>{
        o !== e() && t(o)
    }
    ),
    n
}
;
function by(e, t, n) {
    let o, a = 0;
    const r = e.scrollLeft
      , i = n === 0 ? 1 : Math.round(n * 1e3 / 16);
    function s() {
        ii(o)
    }
    function l() {
        e.scrollLeft += (t - r) / i,
        ++a < i && (o = yt(l))
    }
    return l(),
    s
}
function yy(e, t, n, o) {
    let a, r = En(e);
    const i = r < t
      , s = n === 0 ? 1 : Math.round(n * 1e3 / 16)
      , l = (t - r) / s;
    function c() {
        ii(a)
    }
    function u() {
        r += l,
        (i && r > t || !i && r < t) && (r = t),
        zr(e, r),
        i && r < t || !i && r > t ? a = yt(u) : o && (a = yt(o))
    }
    return u(),
    c
}
let py = 0;
function fa() {
    const e = en()
      , {name: t="unknown"} = (e == null ? void 0 : e.type) || {};
    return `${t}-${++py}`
}
function er() {
    const e = R([])
      , t = [];
    return Ud(()=>{
        e.value = []
    }
    ),
    [e, o=>(t[o] || (t[o] = a=>{
        e.value[o] = a
    }
    ),
    t[o])]
}
function Vf(e, t) {
    if (!Dt || !window.IntersectionObserver)
        return;
    const n = new IntersectionObserver(r=>{
        t(r[0].intersectionRatio > 0)
    }
    ,{
        root: document.body
    })
      , o = ()=>{
        e.value && n.observe(e.value)
    }
      , a = ()=>{
        e.value && n.unobserve(e.value)
    }
    ;
    vn(a),
    bn(a),
    ca(o)
}
const [wy,Sy] = W("sticky")
  , Cy = {
    zIndex: q,
    position: X("top"),
    container: Object,
    offsetTop: ce(0),
    offsetBottom: ce(0)
};
var _y = j({
    name: wy,
    props: Cy,
    emits: ["scroll", "change"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = ua(o)
          , r = Ge({
            fixed: !1,
            width: 0,
            height: 0,
            transform: 0
        })
          , i = R(!1)
          , s = $(()=>cl(e.position === "top" ? e.offsetTop : e.offsetBottom))
          , l = $(()=>{
            if (i.value)
                return;
            const {fixed: h, height: g, width: S} = r;
            if (h)
                return {
                    width: `${S}px`,
                    height: `${g}px`
                }
        }
        )
          , c = $(()=>{
            if (!r.fixed || i.value)
                return;
            const h = be($n(e.zIndex), {
                width: `${r.width}px`,
                height: `${r.height}px`,
                [e.position]: `${s.value}px`
            });
            return r.transform && (h.transform = `translate3d(0, ${r.transform}px, 0)`),
            h
        }
        )
          , u = h=>t("scroll", {
            scrollTop: h,
            isFixed: r.fixed
        })
          , f = ()=>{
            if (!o.value || To(o))
                return;
            const {container: h, position: g} = e
              , S = Ve(o)
              , p = En(window);
            if (r.width = S.width,
            r.height = S.height,
            g === "top")
                if (h) {
                    const b = Ve(h)
                      , v = b.bottom - s.value - r.height;
                    r.fixed = s.value > S.top && b.bottom > 0,
                    r.transform = v < 0 ? v : 0
                } else
                    r.fixed = s.value > S.top;
            else {
                const {clientHeight: b} = document.documentElement;
                if (h) {
                    const v = Ve(h)
                      , m = b - v.top - s.value - r.height;
                    r.fixed = b - s.value < S.bottom && b > v.top,
                    r.transform = m < 0 ? -m : 0
                } else
                    r.fixed = b - s.value < S.bottom
            }
            u(p)
        }
        ;
        return ae(()=>r.fixed, h=>t("change", h)),
        et("scroll", f, {
            target: a,
            passive: !0
        }),
        Vf(o, f),
        ae([Qt, zt], ()=>{
            !o.value || To(o) || !r.fixed || (i.value = !0,
            Pe(()=>{
                const h = Ve(o);
                r.width = h.width,
                r.height = h.height,
                i.value = !1
            }
            ))
        }
        ),
        ()=>{
            var h;
            return d("div", {
                ref: o,
                style: l.value
            }, [d("div", {
                class: Sy({
                    fixed: r.fixed && !i.value
                }),
                style: c.value
            }, [(h = n.default) == null ? void 0 : h.call(n)])])
        }
    }
});
const Nf = G(_y)
  , [Hf,fr] = W("swipe")
  , xy = {
    loop: z,
    width: q,
    height: q,
    vertical: Boolean,
    autoplay: ce(0),
    duration: ce(500),
    touchable: z,
    lazyRender: Boolean,
    initialSwipe: ce(0),
    indicatorColor: String,
    showIndicators: z,
    stopPropagation: z
}
  , zf = Symbol(Hf);
var ky = j({
    name: Hf,
    props: xy,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = R()
          , r = Ge({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
        });
        let i = !1;
        const s = jt()
          , {children: l, linkChildren: c} = St(zf)
          , u = $(()=>l.length)
          , f = $(()=>r[e.vertical ? "height" : "width"])
          , h = $(()=>e.vertical ? s.deltaY.value : s.deltaX.value)
          , g = $(()=>r.rect ? (e.vertical ? r.rect.height : r.rect.width) - f.value * u.value : 0)
          , S = $(()=>f.value ? Math.ceil(Math.abs(g.value) / f.value) : u.value)
          , p = $(()=>u.value * f.value)
          , b = $(()=>(r.active + u.value) % u.value)
          , v = $(()=>{
            const M = e.vertical ? "vertical" : "horizontal";
            return s.direction.value === M
        }
        )
          , m = $(()=>{
            const M = {
                transitionDuration: `${r.swiping ? 0 : e.duration}ms`,
                transform: `translate${e.vertical ? "Y" : "X"}(${+r.offset.toFixed(2)}px)`
            };
            if (f.value) {
                const K = e.vertical ? "height" : "width"
                  , fe = e.vertical ? "width" : "height";
                M[K] = `${p.value}px`,
                M[fe] = e[fe] ? `${e[fe]}px` : ""
            }
            return M
        }
        )
          , y = M=>{
            const {active: K} = r;
            return M ? e.loop ? gt(K + M, -1, u.value) : gt(K + M, 0, S.value) : K
        }
          , w = (M,K=0)=>{
            let fe = M * f.value;
            e.loop || (fe = Math.min(fe, -g.value));
            let me = K - fe;
            return e.loop || (me = gt(me, g.value, 0)),
            me
        }
          , C = ({pace: M=0, offset: K=0, emitChange: fe})=>{
            if (u.value <= 1)
                return;
            const {active: me} = r
              , ne = y(M)
              , ue = w(ne, K);
            if (e.loop) {
                if (l[0] && ue !== g.value) {
                    const P = ue < g.value;
                    l[0].setOffset(P ? p.value : 0)
                }
                if (l[u.value - 1] && ue !== 0) {
                    const P = ue > 0;
                    l[u.value - 1].setOffset(P ? -p.value : 0)
                }
            }
            r.active = ne,
            r.offset = ue,
            fe && ne !== me && t("change", b.value)
        }
          , x = ()=>{
            r.swiping = !0,
            r.active <= -1 ? C({
                pace: u.value
            }) : r.active >= u.value && C({
                pace: -u.value
            })
        }
          , B = ()=>{
            x(),
            s.reset(),
            Zn(()=>{
                r.swiping = !1,
                C({
                    pace: -1,
                    emitChange: !0
                })
            }
            )
        }
          , _ = ()=>{
            x(),
            s.reset(),
            Zn(()=>{
                r.swiping = !1,
                C({
                    pace: 1,
                    emitChange: !0
                })
            }
            )
        }
        ;
        let O;
        const I = ()=>clearTimeout(O)
          , k = ()=>{
            I(),
            +e.autoplay > 0 && u.value > 1 && (O = setTimeout(()=>{
                _(),
                k()
            }
            , +e.autoplay))
        }
          , E = (M=+e.initialSwipe)=>{
            if (!o.value)
                return;
            const K = ()=>{
                var fe, me;
                if (!To(o)) {
                    const ne = {
                        width: o.value.offsetWidth,
                        height: o.value.offsetHeight
                    };
                    r.rect = ne,
                    r.width = +((fe = e.width) != null ? fe : ne.width),
                    r.height = +((me = e.height) != null ? me : ne.height)
                }
                u.value && (M = Math.min(u.value - 1, M),
                M === -1 && (M = u.value - 1)),
                r.active = M,
                r.swiping = !0,
                r.offset = w(M),
                l.forEach(ne=>{
                    ne.setOffset(0)
                }
                ),
                k()
            }
            ;
            To(o) ? Pe().then(K) : K()
        }
          , D = ()=>E(r.active);
        let Q;
        const oe = M=>{
            !e.touchable || M.touches.length > 1 || (s.start(M),
            i = !1,
            Q = Date.now(),
            I(),
            x())
        }
          , N = M=>{
            e.touchable && r.swiping && (s.move(M),
            v.value && (!e.loop && (r.active === 0 && h.value > 0 || r.active === u.value - 1 && h.value < 0) || (We(M, e.stopPropagation),
            C({
                offset: h.value
            }),
            i || (t("dragStart", {
                index: b.value
            }),
            i = !0))))
        }
          , Z = ()=>{
            if (!e.touchable || !r.swiping)
                return;
            const M = Date.now() - Q
              , K = h.value / M;
            if ((Math.abs(K) > .25 || Math.abs(h.value) > f.value / 2) && v.value) {
                const me = e.vertical ? s.offsetY.value : s.offsetX.value;
                let ne = 0;
                e.loop ? ne = me > 0 ? h.value > 0 ? -1 : 1 : 0 : ne = -Math[h.value > 0 ? "ceil" : "floor"](h.value / f.value),
                C({
                    pace: ne,
                    emitChange: !0
                })
            } else
                h.value && C({
                    pace: 0
                });
            i = !1,
            r.swiping = !1,
            t("dragEnd", {
                index: b.value
            }),
            k()
        }
          , se = (M,K={})=>{
            x(),
            s.reset(),
            Zn(()=>{
                let fe;
                e.loop && M === u.value ? fe = r.active === 0 ? 0 : M : fe = M % u.value,
                K.immediate ? Zn(()=>{
                    r.swiping = !1
                }
                ) : r.swiping = !1,
                C({
                    pace: fe - r.active,
                    emitChange: !0
                })
            }
            )
        }
          , Ee = (M,K)=>{
            const fe = K === b.value
              , me = fe ? {
                backgroundColor: e.indicatorColor
            } : void 0;
            return d("i", {
                style: me,
                class: fr("indicator", {
                    active: fe
                })
            }, null)
        }
          , $e = ()=>{
            if (n.indicator)
                return n.indicator({
                    active: b.value,
                    total: u.value
                });
            if (e.showIndicators && u.value > 1)
                return d("div", {
                    class: fr("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(u.value).fill("").map(Ee)])
        }
        ;
        return Oe({
            prev: B,
            next: _,
            state: r,
            resize: D,
            swipeTo: se
        }),
        c({
            size: f,
            props: e,
            count: u,
            activeIndicator: b
        }),
        ae(()=>e.initialSwipe, M=>E(+M)),
        ae(u, ()=>E(r.active)),
        ae(()=>e.autoplay, k),
        ae([Qt, zt, ()=>e.width, ()=>e.height], D),
        ae(Zv(), M=>{
            M === "visible" ? k() : I()
        }
        ),
        tt(E),
        mn(()=>E(r.active)),
        ci(()=>E(r.active)),
        vn(I),
        bn(I),
        et("touchmove", N, {
            target: a
        }),
        ()=>{
            var M;
            return d("div", {
                ref: o,
                class: fr()
            }, [d("div", {
                ref: a,
                style: m.value,
                class: fr("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: oe,
                onTouchend: Z,
                onTouchcancel: Z
            }, [(M = n.default) == null ? void 0 : M.call(n)]), $e()])
        }
    }
});
const ml = G(ky)
  , [Ty,zc] = W("tabs");
var Py = j({
    name: Ty,
    props: {
        count: ft(Number),
        inited: Boolean,
        animated: Boolean,
        duration: ft(q),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: ft(Number)
    },
    emits: ["change"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = s=>t("change", s)
          , r = ()=>{
            var s;
            const l = (s = n.default) == null ? void 0 : s.call(n);
            return e.animated || e.swipeable ? d(ml, {
                ref: o,
                loop: !1,
                class: zc("track"),
                duration: +e.duration * 1e3,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: a
            }, {
                default: ()=>[l]
            }) : l
        }
          , i = s=>{
            const l = o.value;
            l && l.state.active !== s && l.swipeTo(s, {
                immediate: !e.inited
            })
        }
        ;
        return ae(()=>e.currentIndex, i),
        tt(()=>{
            i(e.currentIndex)
        }
        ),
        Oe({
            swipeRef: o
        }),
        ()=>d("div", {
            class: zc("content", {
                animated: e.animated || e.swipeable
            })
        }, [r()])
    }
});
const [jf,hr] = W("tabs")
  , Ey = {
    type: X("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: ce(0),
    duration: ce(.3),
    animated: Boolean,
    ellipsis: z,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: ce(0),
    background: String,
    lazyRender: z,
    showHeader: z,
    lineWidth: q,
    lineHeight: q,
    beforeChange: Function,
    swipeThreshold: ce(5),
    titleActiveColor: String,
    titleInactiveColor: String
}
  , Uf = Symbol(jf);
var Ay = j({
    name: jf,
    props: Ey,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {emit: t, slots: n}) {
        let o, a, r, i, s;
        const l = R()
          , c = R()
          , u = R()
          , f = R()
          , h = fa()
          , g = ua(l)
          , [S,p] = er()
          , {children: b, linkChildren: v} = St(Uf)
          , m = Ge({
            inited: !1,
            position: "",
            lineStyle: {},
            currentIndex: -1
        })
          , y = $(()=>b.length > +e.swipeThreshold || !e.ellipsis || e.shrink)
          , w = $(()=>({
            borderColor: e.color,
            background: e.background
        }))
          , C = (ne,ue)=>{
            var P;
            return (P = ne.name) != null ? P : ue
        }
          , x = $(()=>{
            const ne = b[m.currentIndex];
            if (ne)
                return C(ne, m.currentIndex)
        }
        )
          , B = $(()=>cl(e.offsetTop))
          , _ = $(()=>e.sticky ? B.value + o : 0)
          , O = ne=>{
            const ue = c.value
              , P = S.value;
            if (!y.value || !ue || !P || !P[m.currentIndex])
                return;
            const F = P[m.currentIndex].$el
              , V = F.offsetLeft - (ue.offsetWidth - F.offsetWidth) / 2;
            i && i(),
            i = by(ue, V, ne ? 0 : +e.duration)
        }
          , I = ()=>{
            const ne = m.inited;
            Pe(()=>{
                const ue = S.value;
                if (!ue || !ue[m.currentIndex] || e.type !== "line" || To(l.value))
                    return;
                const P = ue[m.currentIndex].$el
                  , {lineWidth: F, lineHeight: V} = e
                  , J = P.offsetLeft + P.offsetWidth / 2
                  , ve = {
                    width: _e(F),
                    backgroundColor: e.color,
                    transform: `translateX(${J}px) translateX(-50%)`
                };
                if (ne && (ve.transitionDuration = `${e.duration}s`),
                De(V)) {
                    const ke = _e(V);
                    ve.height = ke,
                    ve.borderRadius = ke
                }
                m.lineStyle = ve
            }
            )
        }
          , k = ne=>{
            const ue = ne < m.currentIndex ? -1 : 1;
            for (; ne >= 0 && ne < b.length; ) {
                if (!b[ne].disabled)
                    return ne;
                ne += ue
            }
        }
          , E = (ne,ue)=>{
            const P = k(ne);
            if (!De(P))
                return;
            const F = b[P]
              , V = C(F, P)
              , J = m.currentIndex !== null;
            m.currentIndex !== P && (m.currentIndex = P,
            ue || O(),
            I()),
            V !== e.active && (t("update:active", V),
            J && t("change", V, F.title)),
            r && !e.scrollspy && Wa(Math.ceil(Ec(l.value) - B.value))
        }
          , D = (ne,ue)=>{
            const P = b.find((V,J)=>C(V, J) === ne)
              , F = P ? b.indexOf(P) : 0;
            E(F, ue)
        }
          , Q = (ne=!1)=>{
            if (e.scrollspy) {
                const ue = b[m.currentIndex].$el;
                if (ue && g.value) {
                    const P = Ec(ue, g.value) - _.value;
                    a = !0,
                    s && s(),
                    s = yy(g.value, P, ne ? 0 : +e.duration, ()=>{
                        a = !1
                    }
                    )
                }
            }
        }
          , oe = (ne,ue,P)=>{
            const {title: F, disabled: V} = b[ue]
              , J = C(b[ue], ue);
            V || (lo(e.beforeChange, {
                args: [J],
                done: ()=>{
                    E(ue),
                    Q()
                }
            }),
            Ef(ne)),
            t("clickTab", {
                name: J,
                title: F,
                event: P,
                disabled: V
            })
        }
          , N = ne=>{
            r = ne.isFixed,
            t("scroll", ne)
        }
          , Z = ne=>{
            Pe(()=>{
                D(ne),
                Q(!0)
            }
            )
        }
          , se = ()=>{
            for (let ne = 0; ne < b.length; ne++) {
                const {top: ue} = Ve(b[ne].$el);
                if (ue > _.value)
                    return ne === 0 ? 0 : ne - 1
            }
            return b.length - 1
        }
          , Ee = ()=>{
            if (e.scrollspy && !a) {
                const ne = se();
                E(ne)
            }
        }
          , $e = ()=>{
            if (e.type === "line" && b.length)
                return d("div", {
                    class: hr("line"),
                    style: m.lineStyle
                }, null)
        }
          , M = ()=>{
            var ne, ue, P;
            const {type: F, border: V, sticky: J} = e
              , ve = [d("div", {
                ref: J ? void 0 : u,
                class: [hr("wrap"), {
                    [li]: F === "line" && V
                }]
            }, [d("div", {
                ref: c,
                role: "tablist",
                class: hr("nav", [F, {
                    shrink: e.shrink,
                    complete: y.value
                }]),
                style: w.value,
                "aria-orientation": "horizontal"
            }, [(ne = n["nav-left"]) == null ? void 0 : ne.call(n), b.map(ke=>ke.renderTitle(oe)), $e(), (ue = n["nav-right"]) == null ? void 0 : ue.call(n)])]), (P = n["nav-bottom"]) == null ? void 0 : P.call(n)];
            return J ? d("div", {
                ref: u
            }, [ve]) : ve
        }
          , K = ()=>{
            I(),
            Pe(()=>{
                var ne, ue;
                O(!0),
                (ue = (ne = f.value) == null ? void 0 : ne.swipeRef.value) == null || ue.resize()
            }
            )
        }
        ;
        ae(()=>[e.color, e.duration, e.lineWidth, e.lineHeight], I),
        ae(Qt, K),
        ae(()=>e.active, ne=>{
            ne !== x.value && D(ne)
        }
        ),
        ae(()=>b.length, ()=>{
            m.inited && (D(e.active),
            I(),
            Pe(()=>{
                O(!0)
            }
            ))
        }
        );
        const fe = ()=>{
            D(e.active, !0),
            Pe(()=>{
                m.inited = !0,
                u.value && (o = Ve(u.value).height),
                O(!0)
            }
            )
        }
          , me = (ne,ue)=>t("rendered", ne, ue);
        return Oe({
            resize: K,
            scrollTo: Z
        }),
        mn(I),
        ci(I),
        ca(fe),
        Vf(l, I),
        et("scroll", Ee, {
            target: g,
            passive: !0
        }),
        v({
            id: h,
            props: e,
            setLine: I,
            scrollable: y,
            onRendered: me,
            currentName: x,
            setTitleRefs: p,
            scrollIntoView: O
        }),
        ()=>d("div", {
            ref: l,
            class: hr([e.type])
        }, [e.showHeader ? e.sticky ? d(Nf, {
            container: l.value,
            offsetTop: B.value,
            onScroll: N
        }, {
            default: ()=>[M()]
        }) : M() : null, d(Py, {
            ref: f,
            count: b.length,
            inited: m.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: m.currentIndex,
            onChange: E
        }, {
            default: ()=>{
                var ne;
                return [(ne = n.default) == null ? void 0 : ne.call(n)]
            }
        })])
    }
});
const Wf = Symbol()
  , By = ()=>Pt(Wf, null)
  , [Oy,jc] = W("tab")
  , Iy = j({
    name: Oy,
    props: {
        id: String,
        dot: Boolean,
        type: String,
        color: String,
        title: String,
        badge: q,
        shrink: Boolean,
        isActive: Boolean,
        disabled: Boolean,
        controls: String,
        scrollable: Boolean,
        activeColor: String,
        inactiveColor: String,
        showZeroBadge: z
    },
    setup(e, {slots: t}) {
        const n = $(()=>{
            const a = {}
              , {type: r, color: i, disabled: s, isActive: l, activeColor: c, inactiveColor: u} = e;
            i && r === "card" && (a.borderColor = i,
            s || (l ? a.backgroundColor = i : a.color = i));
            const h = l ? c : u;
            return h && (a.color = h),
            a
        }
        )
          , o = ()=>{
            const a = d("span", {
                class: jc("text", {
                    ellipsis: !e.scrollable
                })
            }, [t.title ? t.title() : e.title]);
            return e.dot || De(e.badge) && e.badge !== "" ? d(Ao, {
                dot: e.dot,
                content: e.badge,
                showZero: e.showZeroBadge
            }, {
                default: ()=>[a]
            }) : a
        }
        ;
        return ()=>d("div", {
            id: e.id,
            role: "tab",
            class: [jc([e.type, {
                grow: e.scrollable && !e.shrink,
                shrink: e.shrink,
                active: e.isActive,
                disabled: e.disabled
            }])],
            style: n.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            "aria-selected": e.isActive,
            "aria-disabled": e.disabled || void 0,
            "aria-controls": e.controls
        }, [o()])
    }
})
  , [$y,Dy] = W("swipe-item");
var Ry = j({
    name: $y,
    setup(e, {slots: t}) {
        let n;
        const o = Ge({
            offset: 0,
            inited: !1,
            mounted: !1
        })
          , {parent: a, index: r} = mt(zf);
        if (!a)
            return;
        const i = $(()=>{
            const c = {}
              , {vertical: u} = a.props;
            return a.size.value && (c[u ? "height" : "width"] = `${a.size.value}px`),
            o.offset && (c.transform = `translate${u ? "Y" : "X"}(${o.offset}px)`),
            c
        }
        )
          , s = $(()=>{
            const {loop: c, lazyRender: u} = a.props;
            if (!u || n)
                return !0;
            if (!o.mounted)
                return !1;
            const f = a.activeIndicator.value
              , h = a.count.value - 1
              , g = f === 0 && c ? h : f - 1
              , S = f === h && c ? 0 : f + 1;
            return n = r.value === f || r.value === g || r.value === S,
            n
        }
        )
          , l = c=>{
            o.offset = c
        }
        ;
        return tt(()=>{
            Pe(()=>{
                o.mounted = !0
            }
            )
        }
        ),
        Oe({
            setOffset: l
        }),
        ()=>{
            var c;
            return d("div", {
                class: Dy(),
                style: i.value
            }, [s.value ? (c = t.default) == null ? void 0 : c.call(t) : null])
        }
    }
});
const vl = G(Ry)
  , [Ly,Vi] = W("tab")
  , My = be({}, co, {
    dot: Boolean,
    name: q,
    badge: q,
    title: String,
    disabled: Boolean,
    titleClass: Qe,
    titleStyle: [String, Object],
    showZeroBadge: z
});
var Fy = j({
    name: Ly,
    props: My,
    setup(e, {slots: t}) {
        const n = fa()
          , o = R(!1)
          , a = en()
          , {parent: r, index: i} = mt(Uf);
        if (!r)
            return;
        const s = ()=>{
            var S;
            return (S = e.name) != null ? S : i.value
        }
          , l = ()=>{
            o.value = !0,
            r.props.lazyRender && Pe(()=>{
                r.onRendered(s(), e.title)
            }
            )
        }
          , c = $(()=>{
            const S = s() === r.currentName.value;
            return S && !o.value && l(),
            S
        }
        )
          , u = R("")
          , f = R("");
        ra(()=>{
            const {titleClass: S, titleStyle: p} = e;
            u.value = S ? Nt(S) : "",
            f.value = p && typeof p != "string" ? kg(Tt(p)) : p
        }
        );
        const h = S=>d(Iy, Be({
            key: n,
            id: `${r.id}-${i.value}`,
            ref: r.setTitleRefs(i.value),
            style: f.value,
            class: u.value,
            isActive: c.value,
            controls: n,
            scrollable: r.scrollable.value,
            activeColor: r.props.titleActiveColor,
            inactiveColor: r.props.titleInactiveColor,
            onClick: p=>S(a.proxy, i.value, p)
        }, Le(r.props, ["type", "color", "shrink"]), Le(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
            title: t.title
        })
          , g = R(!c.value);
        return ae(c, S=>{
            S ? g.value = !1 : Zn(()=>{
                g.value = !0
            }
            )
        }
        ),
        ae(()=>e.title, ()=>{
            r.setLine(),
            r.scrollIntoView()
        }
        ),
        kn(Wf, c),
        Oe({
            id: n,
            renderTitle: h
        }),
        ()=>{
            var S;
            const p = `${r.id}-${i.value}`
              , {animated: b, swipeable: v, scrollspy: m, lazyRender: y} = r.props;
            if (!t.default && !b)
                return;
            const w = m || c.value;
            if (b || v)
                return d(vl, {
                    id: n,
                    role: "tabpanel",
                    class: Vi("panel-wrapper", {
                        inactive: g.value
                    }),
                    tabindex: c.value ? 0 : -1,
                    "aria-hidden": !c.value,
                    "aria-labelledby": p
                }, {
                    default: ()=>{
                        var B;
                        return [d("div", {
                            class: Vi("panel")
                        }, [(B = t.default) == null ? void 0 : B.call(t)])]
                    }
                });
            const x = o.value || m || !y ? (S = t.default) == null ? void 0 : S.call(t) : null;
            return st(d("div", {
                id: n,
                role: "tabpanel",
                class: Vi("panel"),
                tabindex: w ? 0 : -1,
                "aria-labelledby": p
            }, [x]), [[ht, w]])
        }
    }
});
const Ya = G(Fy)
  , fi = G(Ay)
  , [Yf,Ni] = W("picker-group")
  , qf = Symbol(Yf)
  , Vy = be({
    tabs: qe(),
    activeTab: ce(0),
    nextStepText: String,
    showToolbar: z
}, di);
var Ny = j({
    name: Yf,
    props: Vy,
    emits: ["confirm", "cancel", "update:activeTab"],
    setup(e, {emit: t, slots: n}) {
        const o = gl(()=>e.activeTab, c=>t("update:activeTab", c))
          , {children: a, linkChildren: r} = St(qf);
        r();
        const i = ()=>+o.value < e.tabs.length - 1 && e.nextStepText
          , s = ()=>{
            i() ? o.value = +o.value + 1 : t("confirm", a.map(c=>c.confirm()))
        }
          , l = ()=>t("cancel");
        return ()=>{
            var c, u;
            let f = (u = (c = n.default) == null ? void 0 : c.call(n)) == null ? void 0 : u.filter(g=>g.type !== kt).map(g=>g.type === Fe ? g.children : g);
            f && (f = hg(f));
            const h = i() ? e.nextStepText : e.confirmButtonText;
            return d("div", {
                class: Ni()
            }, [e.showToolbar ? d(Ff, {
                title: e.title,
                cancelButtonText: e.cancelButtonText,
                confirmButtonText: h,
                onConfirm: s,
                onCancel: l
            }, Le(n, Mf)) : null, d(fi, {
                active: o.value,
                "onUpdate:active": g=>o.value = g,
                class: Ni("tabs"),
                shrink: !0,
                animated: !0,
                lazyRender: !1
            }, {
                default: ()=>[e.tabs.map((g,S)=>d(Ya, {
                    title: g,
                    titleClass: Ni("tab-title")
                }, {
                    default: ()=>[f == null ? void 0 : f[S]]
                }))]
            })])
        }
    }
});
const hi = be({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: ce(44),
    showToolbar: z,
    swipeDuration: ce(1e3),
    visibleOptionNum: ce(6)
}, di)
  , Hy = be({}, hi, {
    columns: qe(),
    modelValue: qe(),
    toolbarPosition: X("top"),
    columnsFieldNames: Object
});
var zy = j({
    name: ly,
    props: Hy,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = R(e.modelValue.slice(0))
          , {parent: r} = mt(qf)
          , {children: i, linkChildren: s} = St(Lf);
        s();
        const l = $(()=>fy(e.columnsFieldNames))
          , c = $(()=>cl(e.optionHeight))
          , u = $(()=>cy(e.columns, l.value))
          , f = $(()=>{
            const {columns: k} = e;
            switch (u.value) {
            case "multiple":
                return k;
            case "cascade":
                return uy(k, l.value, a);
            default:
                return [k]
            }
        }
        )
          , h = $(()=>f.value.some(k=>k.length))
          , g = $(()=>f.value.map((k,E)=>xs(k, a.value[E], l.value)))
          , S = $(()=>f.value.map((k,E)=>k.findIndex(D=>D[l.value.value] === a.value[E])))
          , p = (k,E)=>{
            if (a.value[k] !== E) {
                const D = a.value.slice(0);
                D[k] = E,
                a.value = D
            }
        }
          , b = ()=>({
            selectedValues: a.value.slice(0),
            selectedOptions: g.value,
            selectedIndexes: S.value
        })
          , v = (k,E)=>{
            p(E, k),
            u.value === "cascade" && a.value.forEach((D,Q)=>{
                const oe = f.value[Q];
                Vc(oe, D, l.value) || p(Q, oe.length ? oe[0][l.value.value] : void 0)
            }
            ),
            Pe(()=>{
                t("change", be({
                    columnIndex: E
                }, b()))
            }
            )
        }
          , m = (k,E)=>{
            const D = {
                columnIndex: E,
                currentOption: k
            };
            t("clickOption", be(b(), D)),
            t("scrollInto", D)
        }
          , y = ()=>{
            i.forEach(E=>E.stopMomentum());
            const k = b();
            return Pe(()=>{
                t("confirm", k)
            }
            ),
            k
        }
          , w = ()=>t("cancel", b())
          , C = ()=>f.value.map((k,E)=>d(gy, {
            value: a.value[E],
            fields: l.value,
            options: k,
            readonly: e.readonly,
            allowHtml: e.allowHtml,
            optionHeight: c.value,
            swipeDuration: e.swipeDuration,
            visibleOptionNum: e.visibleOptionNum,
            onChange: D=>v(D, E),
            onClickOption: D=>m(D, E),
            onScrollInto: D=>{
                t("scrollInto", {
                    currentOption: D,
                    columnIndex: E
                })
            }
        }, {
            option: n.option
        }))
          , x = k=>{
            if (h.value) {
                const E = {
                    height: `${c.value}px`
                }
                  , D = {
                    backgroundSize: `100% ${(k - c.value) / 2}px`
                };
                return [d("div", {
                    class: _n("mask"),
                    style: D
                }, null), d("div", {
                    class: [mb, _n("frame")],
                    style: E
                }, null)]
            }
        }
          , B = ()=>{
            const k = c.value * +e.visibleOptionNum
              , E = {
                height: `${k}px`
            };
            return d("div", {
                ref: o,
                class: _n("columns"),
                style: E
            }, [C(), x(k)])
        }
          , _ = ()=>{
            if (e.showToolbar && !r)
                return d(Ff, Be(Le(e, vy), {
                    onConfirm: y,
                    onCancel: w
                }), Le(n, Mf))
        }
        ;
        ae(f, k=>{
            k.forEach((E,D)=>{
                E.length && !Vc(E, a.value[D], l.value) && p(D, Df(E)[l.value.value])
            }
            )
        }
        , {
            immediate: !0
        });
        let O;
        return ae(()=>e.modelValue, k=>{
            !fn(k, a.value) && !fn(k, O) && (a.value = k.slice(0),
            O = k.slice(0))
        }
        , {
            deep: !0
        }),
        ae(a, k=>{
            fn(k, e.modelValue) || (O = k.slice(0),
            t("update:modelValue", O))
        }
        , {
            immediate: !0
        }),
        et("touchmove", We, {
            target: o
        }),
        Oe({
            confirm: y,
            getSelectedOptions: ()=>g.value
        }),
        ()=>{
            var k, E;
            return d("div", {
                class: _n()
            }, [e.toolbarPosition === "top" ? _() : null, e.loading ? d(tn, {
                class: _n("loading")
            }, null) : null, (k = n["columns-top"]) == null ? void 0 : k.call(n), B(), (E = n["columns-bottom"]) == null ? void 0 : E.call(n), e.toolbarPosition === "bottom" ? _() : null])
        }
    }
});
const Xo = "000000"
  , jy = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"]
  , Kf = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"]
  , Vn = (e="",t=Xo,n=void 0)=>({
    text: e,
    value: t,
    children: n
});
function Uy({areaList: e, columnsNum: t, columnsPlaceholder: n}) {
    const {city_list: o={}, county_list: a={}, province_list: r={}} = e
      , i = +t > 1
      , s = +t > 2
      , l = ()=>{
        if (i)
            return n.length > 1 ? [Vn(n[1], Xo, s ? [] : void 0)] : []
    }
      , c = new Map;
    Object.keys(r).forEach(h=>{
        c.set(h.slice(0, 2), Vn(r[h], h, l()))
    }
    );
    const u = new Map;
    if (i) {
        const h = ()=>{
            if (s)
                return n.length > 2 ? [Vn(n[2])] : []
        }
        ;
        Object.keys(o).forEach(g=>{
            const S = Vn(o[g], g, h());
            u.set(g.slice(0, 4), S);
            const p = c.get(g.slice(0, 2));
            p && p.children.push(S)
        }
        )
    }
    s && Object.keys(a).forEach(h=>{
        const g = u.get(h.slice(0, 4));
        g && g.children.push(Vn(a[h], h))
    }
    );
    const f = Array.from(c.values());
    if (n.length) {
        const h = s ? [Vn(n[2])] : void 0
          , g = i ? [Vn(n[1], Xo, h)] : void 0;
        f.unshift(Vn(n[0], Xo, g))
    }
    return f
}
const gi = G(zy)
  , [Wy,Yy] = W("area")
  , qy = be({}, Le(hi, Kf), {
    modelValue: String,
    columnsNum: ce(3),
    columnsPlaceholder: qe(),
    areaList: {
        type: Object,
        default: ()=>({})
    }
});
var Ky = j({
    name: Wy,
    props: qy,
    emits: ["change", "confirm", "cancel", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R([])
          , a = R()
          , r = $(()=>Uy(e))
          , i = (...c)=>t("change", ...c)
          , s = (...c)=>t("cancel", ...c)
          , l = (...c)=>t("confirm", ...c);
        return ae(o, c=>{
            const u = c.length ? c[c.length - 1] : "";
            u && u !== e.modelValue && t("update:modelValue", u)
        }
        , {
            deep: !0
        }),
        ae(()=>e.modelValue, c=>{
            if (c) {
                const u = o.value.length ? o.value[o.value.length - 1] : "";
                c !== u && (o.value = [`${c.slice(0, 2)}0000`, `${c.slice(0, 4)}00`, c].slice(0, +e.columnsNum))
            } else
                o.value = []
        }
        , {
            immediate: !0
        }),
        Oe({
            confirm: ()=>{
                var c;
                return (c = a.value) == null ? void 0 : c.confirm()
            }
            ,
            getSelectedOptions: ()=>{
                var c;
                return ((c = a.value) == null ? void 0 : c.getSelectedOptions()) || []
            }
        }),
        ()=>d(gi, Be({
            ref: a,
            modelValue: o.value,
            "onUpdate:modelValue": c=>o.value = c,
            class: Yy(),
            columns: r.value,
            onChange: i,
            onCancel: s,
            onConfirm: l
        }, Le(e, Kf)), Le(n, jy))
    }
});
const Gf = G(Ky)
  , [Gy,$o] = W("cell")
  , mi = {
    tag: X("div"),
    icon: String,
    size: String,
    title: q,
    value: q,
    label: q,
    center: Boolean,
    isLink: Boolean,
    border: z,
    iconPrefix: String,
    valueClass: Qe,
    labelClass: Qe,
    titleClass: Qe,
    titleStyle: null,
    arrowDirection: String,
    required: {
        type: [Boolean, String],
        default: null
    },
    clickable: {
        type: Boolean,
        default: null
    }
}
  , Xy = be({}, mi, co);
var Qy = j({
    name: Gy,
    props: Xy,
    setup(e, {slots: t}) {
        const n = Eo()
          , o = ()=>{
            if (t.label || De(e.label))
                return d("div", {
                    class: [$o("label"), e.labelClass]
                }, [t.label ? t.label() : e.label])
        }
          , a = ()=>{
            var l;
            if (t.title || De(e.title)) {
                const c = (l = t.title) == null ? void 0 : l.call(t);
                return Array.isArray(c) && c.length === 0 ? void 0 : d("div", {
                    class: [$o("title"), e.titleClass],
                    style: e.titleStyle
                }, [c || d("span", null, [e.title]), o()])
            }
        }
          , r = ()=>{
            const l = t.value || t.default;
            if (l || De(e.value))
                return d("div", {
                    class: [$o("value"), e.valueClass]
                }, [l ? l() : d("span", null, [e.value])])
        }
          , i = ()=>{
            if (t.icon)
                return t.icon();
            if (e.icon)
                return d(xe, {
                    name: e.icon,
                    class: $o("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
        }
          , s = ()=>{
            if (t["right-icon"])
                return t["right-icon"]();
            if (e.isLink) {
                const l = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                return d(xe, {
                    name: l,
                    class: $o("right-icon")
                }, null)
            }
        }
        ;
        return ()=>{
            var l;
            const {tag: c, size: u, center: f, border: h, isLink: g, required: S} = e
              , p = (l = e.clickable) != null ? l : g
              , b = {
                center: f,
                required: !!S,
                clickable: p,
                borderless: !h
            };
            return u && (b[u] = !!u),
            d(c, {
                class: $o(b),
                role: p ? "button" : void 0,
                tabindex: p ? 0 : void 0,
                onClick: n
            }, {
                default: ()=>{
                    var v;
                    return [i(), a(), r(), s(), (v = t.extra) == null ? void 0 : v.call(t)]
                }
            })
        }
    }
});
const nn = G(Qy)
  , [Zy,Jy] = W("form")
  , ep = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: q,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: z,
    showErrorMessage: z,
    errorMessageAlign: String,
    validateTrigger: {
        type: [String, Array],
        default: "onBlur"
    }
};
var tp = j({
    name: Zy,
    props: ep,
    emits: ["submit", "failed"],
    setup(e, {emit: t, slots: n}) {
        const {children: o, linkChildren: a} = St(Cf)
          , r = b=>b ? o.filter(v=>b.includes(v.name)) : o
          , i = b=>new Promise((v,m)=>{
            const y = [];
            r(b).reduce((C,x)=>C.then(()=>{
                if (!y.length)
                    return x.validate().then(B=>{
                        B && y.push(B)
                    }
                    )
            }
            ), Promise.resolve()).then(()=>{
                y.length ? m(y) : v()
            }
            )
        }
        )
          , s = b=>new Promise((v,m)=>{
            const y = r(b);
            Promise.all(y.map(w=>w.validate())).then(w=>{
                w = w.filter(Boolean),
                w.length ? m(w) : v()
            }
            )
        }
        )
          , l = b=>{
            const v = o.find(m=>m.name === b);
            return v ? new Promise((m,y)=>{
                v.validate().then(w=>{
                    w ? y(w) : m()
                }
                )
            }
            ) : Promise.reject()
        }
          , c = b=>typeof b == "string" ? l(b) : e.validateFirst ? i(b) : s(b)
          , u = b=>{
            typeof b == "string" && (b = [b]),
            r(b).forEach(m=>{
                m.resetValidation()
            }
            )
        }
          , f = ()=>o.reduce((b,v)=>(b[v.name] = v.getValidationStatus(),
        b), {})
          , h = (b,v)=>{
            o.some(m=>m.name === b ? (m.$el.scrollIntoView(v),
            !0) : !1)
        }
          , g = ()=>o.reduce((b,v)=>(v.name !== void 0 && (b[v.name] = v.formValue.value),
        b), {})
          , S = ()=>{
            const b = g();
            c().then(()=>t("submit", b)).catch(v=>{
                t("failed", {
                    values: b,
                    errors: v
                }),
                e.scrollToError && v[0].name && h(v[0].name)
            }
            )
        }
          , p = b=>{
            We(b),
            S()
        }
        ;
        return a({
            props: e
        }),
        Oe({
            submit: S,
            validate: c,
            getValues: g,
            scrollToField: h,
            resetValidation: u,
            getValidationStatus: f
        }),
        ()=>{
            var b;
            return d("form", {
                class: Jy(),
                onSubmit: p
            }, [(b = n.default) == null ? void 0 : b.call(n)])
        }
    }
});
const bl = G(tp);
function Xf(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}
function np(e, t) {
    if (Xf(e)) {
        if (t.required)
            return !1;
        if (t.validateEmpty === !1)
            return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}
function op(e, t) {
    return new Promise(n=>{
        const o = t.validator(e, t);
        if (Ns(o)) {
            o.then(n);
            return
        }
        n(o)
    }
    )
}
function Uc(e, t) {
    const {message: n} = t;
    return ea(n) ? n(e, t) : n || ""
}
function ap({target: e}) {
    e.composing = !0
}
function Wc({target: e}) {
    e.composing && (e.composing = !1,
    e.dispatchEvent(new Event("input")))
}
function rp(e, t) {
    const n = xo();
    e.style.height = "auto";
    let o = e.scrollHeight;
    if (hn(t)) {
        const {maxHeight: a, minHeight: r} = t;
        a !== void 0 && (o = Math.min(o, a)),
        r !== void 0 && (o = Math.max(o, r))
    }
    o && (e.style.height = `${o}px`,
    Wa(n))
}
function ip(e) {
    return e === "number" ? {
        type: "text",
        inputmode: "decimal"
    } : e === "digit" ? {
        type: "tel",
        inputmode: "numeric"
    } : {
        type: e
    }
}
function yn(e) {
    return [...e].length
}
function Hi(e, t) {
    return [...e].slice(0, t).join("")
}
const [sp,Ft] = W("field")
  , yl = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: q,
    formatter: Function,
    clearIcon: X("clear"),
    modelValue: ce(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: X("focus"),
    formatTrigger: X("onChange"),
    spellcheck: {
        type: Boolean,
        default: null
    },
    error: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    }
}
  , lp = be({}, mi, yl, {
    rows: q,
    type: X("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: q,
    labelClass: Qe,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
        type: Boolean,
        default: null
    }
});
var cp = j({
    name: sp,
    props: lp,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = fa()
          , a = Ge({
            status: "unvalidated",
            focused: !1,
            validateMessage: ""
        })
          , r = R()
          , i = R()
          , s = R()
          , {parent: l} = mt(Cf)
          , c = ()=>{
            var P;
            return String((P = e.modelValue) != null ? P : "")
        }
          , u = P=>{
            if (De(e[P]))
                return e[P];
            if (l && De(l.props[P]))
                return l.props[P]
        }
          , f = $(()=>{
            const P = u("readonly");
            if (e.clearable && !P) {
                const F = c() !== ""
                  , V = e.clearTrigger === "always" || e.clearTrigger === "focus" && a.focused;
                return F && V
            }
            return !1
        }
        )
          , h = $(()=>s.value && n.input ? s.value() : e.modelValue)
          , g = $(()=>{
            var P;
            const F = u("required");
            return F === "auto" ? (P = e.rules) == null ? void 0 : P.some(V=>V.required) : F
        }
        )
          , S = P=>P.reduce((F,V)=>F.then(()=>{
            if (a.status === "failed")
                return;
            let {value: J} = h;
            if (V.formatter && (J = V.formatter(J, V)),
            !np(J, V)) {
                a.status = "failed",
                a.validateMessage = Uc(J, V);
                return
            }
            if (V.validator)
                return Xf(J) && V.validateEmpty === !1 ? void 0 : op(J, V).then(ve=>{
                    ve && typeof ve == "string" ? (a.status = "failed",
                    a.validateMessage = ve) : ve === !1 && (a.status = "failed",
                    a.validateMessage = Uc(J, V))
                }
                )
        }
        ), Promise.resolve())
          , p = ()=>{
            a.status = "unvalidated",
            a.validateMessage = ""
        }
          , b = ()=>t("endValidate", {
            status: a.status,
            message: a.validateMessage
        })
          , v = (P=e.rules)=>new Promise(F=>{
            p(),
            P ? (t("startValidate"),
            S(P).then(()=>{
                a.status === "failed" ? (F({
                    name: e.name,
                    message: a.validateMessage
                }),
                b()) : (a.status = "passed",
                F(),
                b())
            }
            )) : F()
        }
        )
          , m = P=>{
            if (l && e.rules) {
                const {validateTrigger: F} = l.props
                  , V = Rr(F).includes(P)
                  , J = e.rules.filter(ve=>ve.trigger ? Rr(ve.trigger).includes(P) : V);
                J.length && v(J)
            }
        }
          , y = P=>{
            var F;
            const {maxlength: V} = e;
            if (De(V) && yn(P) > +V) {
                const J = c();
                if (J && yn(J) === +V)
                    return J;
                const ve = (F = r.value) == null ? void 0 : F.selectionEnd;
                if (a.focused && ve) {
                    const ke = [...P]
                      , T = ke.length - +V;
                    return ke.splice(ve - T, T),
                    ke.join("")
                }
                return Hi(P, +V)
            }
            return P
        }
          , w = (P,F="onChange")=>{
            const V = P;
            P = y(P);
            const J = yn(V) - yn(P);
            if (e.type === "number" || e.type === "digit") {
                const ke = e.type === "number";
                P = Ss(P, ke, ke)
            }
            let ve = 0;
            if (e.formatter && F === e.formatTrigger) {
                const {formatter: ke, maxlength: T} = e;
                if (P = ke(P),
                De(T) && yn(P) > +T && (P = Hi(P, +T)),
                r.value && a.focused) {
                    const {selectionEnd: A} = r.value
                      , L = Hi(V, A);
                    ve = yn(ke(L)) - yn(L)
                }
            }
            if (r.value && r.value.value !== P)
                if (a.focused) {
                    let {selectionStart: ke, selectionEnd: T} = r.value;
                    if (r.value.value = P,
                    De(ke) && De(T)) {
                        const A = yn(P);
                        J ? (ke -= J,
                        T -= J) : ve && (ke += ve,
                        T += ve),
                        r.value.setSelectionRange(Math.min(ke, A), Math.min(T, A))
                    }
                } else
                    r.value.value = P;
            P !== e.modelValue && t("update:modelValue", P)
        }
          , C = P=>{
            P.target.composing || w(P.target.value)
        }
          , x = ()=>{
            var P;
            return (P = r.value) == null ? void 0 : P.blur()
        }
          , B = ()=>{
            var P;
            return (P = r.value) == null ? void 0 : P.focus()
        }
          , _ = ()=>{
            const P = r.value;
            e.type === "textarea" && e.autosize && P && rp(P, e.autosize)
        }
          , O = P=>{
            a.focused = !0,
            t("focus", P),
            Pe(_),
            u("readonly") && x()
        }
          , I = P=>{
            a.focused = !1,
            w(c(), "onBlur"),
            t("blur", P),
            !u("readonly") && (m("onBlur"),
            Pe(_),
            mf())
        }
          , k = P=>t("clickInput", P)
          , E = P=>t("clickLeftIcon", P)
          , D = P=>t("clickRightIcon", P)
          , Q = P=>{
            We(P),
            t("update:modelValue", ""),
            t("clear", P)
        }
          , oe = $(()=>{
            if (typeof e.error == "boolean")
                return e.error;
            if (l && l.props.showError && a.status === "failed")
                return !0
        }
        )
          , N = $(()=>{
            const P = u("labelWidth")
              , F = u("labelAlign");
            if (P && F !== "top")
                return {
                    width: _e(P)
                }
        }
        )
          , Z = P=>{
            P.keyCode === 13 && (!(l && l.props.submitOnEnter) && e.type !== "textarea" && We(P),
            e.type === "search" && x()),
            t("keypress", P)
        }
          , se = ()=>e.id || `${o}-input`
          , Ee = ()=>a.status
          , $e = ()=>{
            const P = Ft("control", [u("inputAlign"), {
                error: oe.value,
                custom: !!n.input,
                "min-height": e.type === "textarea" && !e.autosize
            }]);
            if (n.input)
                return d("div", {
                    class: P,
                    onClick: k
                }, [n.input()]);
            const F = {
                id: se(),
                ref: r,
                name: e.name,
                rows: e.rows !== void 0 ? +e.rows : void 0,
                class: P,
                disabled: u("disabled"),
                readonly: u("readonly"),
                autofocus: e.autofocus,
                placeholder: e.placeholder,
                autocomplete: e.autocomplete,
                autocapitalize: e.autocapitalize,
                autocorrect: e.autocorrect,
                enterkeyhint: e.enterkeyhint,
                spellcheck: e.spellcheck,
                "aria-labelledby": e.label ? `${o}-label` : void 0,
                onBlur: I,
                onFocus: O,
                onInput: C,
                onClick: k,
                onChange: Wc,
                onKeypress: Z,
                onCompositionend: Wc,
                onCompositionstart: ap
            };
            return e.type === "textarea" ? d("textarea", F, null) : d("input", Be(ip(e.type), F), null)
        }
          , M = ()=>{
            const P = n["left-icon"];
            if (e.leftIcon || P)
                return d("div", {
                    class: Ft("left-icon"),
                    onClick: E
                }, [P ? P() : d(xe, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
        }
          , K = ()=>{
            const P = n["right-icon"];
            if (e.rightIcon || P)
                return d("div", {
                    class: Ft("right-icon"),
                    onClick: D
                }, [P ? P() : d(xe, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
        }
          , fe = ()=>{
            if (e.showWordLimit && e.maxlength) {
                const P = yn(c());
                return d("div", {
                    class: Ft("word-limit")
                }, [d("span", {
                    class: Ft("word-num")
                }, [P]), Ae("/"), e.maxlength])
            }
        }
          , me = ()=>{
            if (l && l.props.showErrorMessage === !1)
                return;
            const P = e.errorMessage || a.validateMessage;
            if (P) {
                const F = n["error-message"]
                  , V = u("errorMessageAlign");
                return d("div", {
                    class: Ft("error-message", V)
                }, [F ? F({
                    message: P
                }) : P])
            }
        }
          , ne = ()=>{
            const P = u("labelWidth")
              , F = u("labelAlign")
              , V = u("colon") ? ":" : "";
            if (n.label)
                return [n.label(), V];
            if (e.label)
                return d("label", {
                    id: `${o}-label`,
                    for: n.input ? void 0 : se(),
                    onClick: J=>{
                        We(J),
                        B()
                    }
                    ,
                    style: F === "top" && P ? {
                        width: _e(P)
                    } : void 0
                }, [e.label + V])
        }
          , ue = ()=>[d("div", {
            class: Ft("body")
        }, [$e(), f.value && d(xe, {
            ref: i,
            name: e.clearIcon,
            class: Ft("clear")
        }, null), K(), n.button && d("div", {
            class: Ft("button")
        }, [n.button()])]), fe(), me()];
        return Oe({
            blur: x,
            focus: B,
            validate: v,
            formValue: h,
            resetValidation: p,
            getValidationStatus: Ee
        }),
        kn(gf, {
            customValue: s,
            resetValidation: p,
            validateWithTrigger: m
        }),
        ae(()=>e.modelValue, ()=>{
            w(c()),
            p(),
            m("onChange"),
            Pe(_)
        }
        ),
        tt(()=>{
            w(c(), e.formatTrigger),
            Pe(_)
        }
        ),
        et("touchstart", Q, {
            target: $(()=>{
                var P;
                return (P = i.value) == null ? void 0 : P.$el
            }
            )
        }),
        ()=>{
            const P = u("disabled")
              , F = u("labelAlign")
              , V = M()
              , J = ()=>{
                const ve = ne();
                return F === "top" ? [V, ve].filter(Boolean) : ve || []
            }
            ;
            return d(nn, {
                size: e.size,
                class: Ft({
                    error: oe.value,
                    disabled: P,
                    [`label-${F}`]: F
                }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: N.value,
                valueClass: Ft("value"),
                titleClass: [Ft("label", [F, {
                    required: g.value
                }]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: V && F !== "top" ? ()=>V : null,
                title: J,
                value: ue,
                extra: n.extra
            })
        }
    }
});
const Tn = G(cp);
let ba = 0;
function up(e) {
    e ? (ba || document.body.classList.add("van-toast--unclickable"),
    ba++) : ba && (ba--,
    ba || document.body.classList.remove("van-toast--unclickable"))
}
const [dp,Do] = W("toast")
  , fp = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"]
  , hp = {
    icon: String,
    show: Boolean,
    type: X("text"),
    overlay: Boolean,
    message: q,
    iconSize: q,
    duration: nt(2e3),
    position: X("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: Qe,
    iconPrefix: String,
    transition: X("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: Qe,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: q
};
var Qf = j({
    name: dp,
    props: hp,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        let o, a = !1;
        const r = ()=>{
            const f = e.show && e.forbidClick;
            a !== f && (a = f,
            up(a))
        }
          , i = f=>t("update:show", f)
          , s = ()=>{
            e.closeOnClick && i(!1)
        }
          , l = ()=>clearTimeout(o)
          , c = ()=>{
            const {icon: f, type: h, iconSize: g, iconPrefix: S, loadingType: p} = e;
            if (f || h === "success" || h === "fail")
                return d(xe, {
                    name: f || h,
                    size: g,
                    class: Do("icon"),
                    classPrefix: S
                }, null);
            if (h === "loading")
                return d(tn, {
                    class: Do("loading"),
                    size: g,
                    type: p
                }, null)
        }
          , u = ()=>{
            const {type: f, message: h} = e;
            if (n.message)
                return d("div", {
                    class: Do("text")
                }, [n.message()]);
            if (De(h) && h !== "")
                return f === "html" ? d("div", {
                    key: 0,
                    class: Do("text"),
                    innerHTML: String(h)
                }, null) : d("div", {
                    class: Do("text")
                }, [h])
        }
        ;
        return ae(()=>[e.show, e.forbidClick], r),
        ae(()=>[e.show, e.type, e.message, e.duration], ()=>{
            l(),
            e.show && e.duration > 0 && (o = setTimeout(()=>{
                i(!1)
            }
            , e.duration))
        }
        ),
        tt(r),
        ia(r),
        ()=>d(Rt, Be({
            class: [Do([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: s,
            onClosed: l,
            "onUpdate:show": i
        }, Le(e, fp)), {
            default: ()=>[c(), u()]
        })
    }
});
function pl() {
    const e = Ge({
        show: !1
    })
      , t = a=>{
        e.show = a
    }
      , n = a=>{
        be(e, a, {
            transitionAppear: !0
        }),
        t(!0)
    }
      , o = ()=>t(!1);
    return Oe({
        open: n,
        close: o,
        toggle: t
    }),
    {
        open: n,
        close: o,
        state: e,
        toggle: t
    }
}
function wl(e) {
    const t = ff(e)
      , n = document.createElement("div");
    return document.body.appendChild(n),
    {
        instance: t.mount(n),
        unmount() {
            t.unmount(),
            document.body.removeChild(n)
        }
    }
}
const gp = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let gr = []
  , mp = !1
  , Yc = be({}, gp);
const vp = new Map;
function bp(e) {
    return hn(e) ? e : {
        message: e
    }
}
function yp() {
    const {instance: e, unmount: t} = wl({
        setup() {
            const n = R("")
              , {open: o, state: a, close: r, toggle: i} = pl()
              , s = ()=>{}
              , l = ()=>d(Qf, Be(a, {
                onClosed: s,
                "onUpdate:show": i
            }), null);
            return ae(n, c=>{
                a.message = c
            }
            ),
            en().render = l,
            {
                open: o,
                close: r,
                message: n
            }
        }
    });
    return e
}
function pp() {
    if (!gr.length || mp) {
        const e = yp();
        gr.push(e)
    }
    return gr[gr.length - 1]
}
function ks(e={}) {
    if (!Dt)
        return {};
    const t = pp()
      , n = bp(e);
    return t.open(be({}, Yc, vp.get(n.type || Yc.type), n)),
    t
}
const wp = G(Qf)
  , [Sp,zi] = W("switch")
  , Cp = {
    size: q,
    loading: Boolean,
    disabled: Boolean,
    modelValue: Qe,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
        type: Qe,
        default: !0
    },
    inactiveValue: {
        type: Qe,
        default: !1
    }
};
var _p = j({
    name: Sp,
    props: Cp,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = ()=>e.modelValue === e.activeValue
          , a = ()=>{
            if (!e.disabled && !e.loading) {
                const i = o() ? e.inactiveValue : e.activeValue;
                t("update:modelValue", i),
                t("change", i)
            }
        }
          , r = ()=>{
            if (e.loading) {
                const i = o() ? e.activeColor : e.inactiveColor;
                return d(tn, {
                    class: zi("loading"),
                    color: i
                }, null)
            }
            if (n.node)
                return n.node()
        }
        ;
        return so(()=>e.modelValue),
        ()=>{
            var i;
            const {size: s, loading: l, disabled: c, activeColor: u, inactiveColor: f} = e
              , h = o()
              , g = {
                fontSize: _e(s),
                backgroundColor: h ? u : f
            };
            return d("div", {
                role: "switch",
                class: zi({
                    on: h,
                    loading: l,
                    disabled: c
                }),
                style: g,
                tabindex: c ? void 0 : 0,
                "aria-checked": h,
                onClick: a
            }, [d("div", {
                class: zi("node")
            }, [r()]), (i = n.background) == null ? void 0 : i.call(n)])
        }
    }
});
const Sl = G(_p)
  , [xp,qc] = W("address-edit-detail")
  , Kc = W("address-edit")[2];
var kp = j({
    name: xp,
    props: {
        show: Boolean,
        rows: q,
        value: String,
        rules: Array,
        focused: Boolean,
        maxlength: q,
        searchResult: Array,
        showSearchResult: Boolean
    },
    emits: ["blur", "focus", "input", "selectSearch"],
    setup(e, {emit: t}) {
        const n = R()
          , o = ()=>e.focused && e.searchResult && e.showSearchResult
          , a = c=>{
            t("selectSearch", c),
            t("input", `${c.address || ""} ${c.name || ""}`.trim())
        }
          , r = ()=>{
            if (!o())
                return;
            const {searchResult: c} = e;
            return c.map(u=>d(nn, {
                clickable: !0,
                key: (u.name || "") + (u.address || ""),
                icon: "location-o",
                title: u.name,
                label: u.address,
                class: qc("search-item"),
                border: !1,
                onClick: ()=>a(u)
            }, null))
        }
          , i = c=>t("blur", c)
          , s = c=>t("focus", c)
          , l = c=>t("input", c);
        return ()=>{
            if (e.show)
                return d(Fe, null, [d(Tn, {
                    autosize: !0,
                    clearable: !0,
                    ref: n,
                    class: qc(),
                    rows: e.rows,
                    type: "textarea",
                    rules: e.rules,
                    label: Kc("addressDetail"),
                    border: !o(),
                    maxlength: e.maxlength,
                    modelValue: e.value,
                    placeholder: Kc("addressDetail"),
                    onBlur: i,
                    onFocus: s,
                    "onUpdate:modelValue": l
                }, null), r()])
        }
    }
});
const [Tp,Ro,Ct] = W("address-edit")
  , Zf = {
    name: "",
    tel: "",
    city: "",
    county: "",
    country: "",
    province: "",
    areaCode: "",
    isDefault: !1,
    addressDetail: ""
}
  , Pp = {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showArea: z,
    showDetail: z,
    showDelete: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: q,
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    detailRows: ce(1),
    detailMaxlength: ce(200),
    areaColumnsPlaceholder: qe(),
    addressInfo: {
        type: Object,
        default: ()=>be({}, Zf)
    },
    telValidator: {
        type: Function,
        default: Ju
    }
};
var Ep = j({
    name: Tp,
    props: Pp,
    emits: ["save", "focus", "change", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = Ge({})
          , r = R(!1)
          , i = R(!1)
          , s = $(()=>hn(e.areaList) && Object.keys(e.areaList).length)
          , l = $(()=>{
            const {province: x, city: B, county: _, areaCode: O} = a;
            if (O) {
                const I = [x, B, _];
                return x && x === B && I.splice(1, 1),
                I.filter(Boolean).join("/")
            }
            return ""
        }
        )
          , c = $(()=>{
            var x;
            return ((x = e.searchResult) == null ? void 0 : x.length) && i.value
        }
        )
          , u = x=>{
            i.value = x === "addressDetail",
            t("focus", x)
        }
          , f = (x,B)=>{
            t("change", {
                key: x,
                value: B
            })
        }
          , h = $(()=>{
            const {validator: x, telValidator: B} = e
              , _ = (O,I)=>({
                validator: k=>{
                    if (x) {
                        const E = x(O, k);
                        if (E)
                            return E
                    }
                    return k ? !0 : I
                }
            });
            return {
                name: [_("name", Ct("nameEmpty"))],
                tel: [_("tel", Ct("telInvalid")), {
                    validator: B,
                    message: Ct("telInvalid")
                }],
                areaCode: [_("areaCode", Ct("areaEmpty"))],
                addressDetail: [_("addressDetail", Ct("addressEmpty"))]
            }
        }
        )
          , g = ()=>t("save", a)
          , S = x=>{
            a.addressDetail = x,
            t("changeDetail", x)
        }
          , p = x=>{
            a.province = x[0].text,
            a.city = x[1].text,
            a.county = x[2].text
        }
          , b = ({selectedValues: x, selectedOptions: B})=>{
            x.some(_=>_ === Xo) ? ks(Ct("areaEmpty")) : (r.value = !1,
            p(B),
            t("changeArea", B))
        }
          , v = ()=>t("delete", a)
          , m = x=>{
            a.areaCode = x || ""
        }
          , y = ()=>{
            setTimeout(()=>{
                i.value = !1
            }
            )
        }
          , w = x=>{
            a.addressDetail = x
        }
          , C = ()=>{
            if (e.showSetDefault) {
                const x = {
                    "right-icon": ()=>d(Sl, {
                        modelValue: a.isDefault,
                        "onUpdate:modelValue": B=>a.isDefault = B,
                        onChange: B=>t("changeDefault", B)
                    }, null)
                };
                return st(d(nn, {
                    center: !0,
                    border: !1,
                    title: Ct("defaultAddress"),
                    class: Ro("default")
                }, x), [[ht, !c.value]])
            }
        }
        ;
        return Oe({
            setAreaCode: m,
            setAddressDetail: w
        }),
        ae(()=>e.addressInfo, x=>{
            be(a, Zf, x),
            Pe(()=>{
                var B;
                const _ = (B = o.value) == null ? void 0 : B.getSelectedOptions();
                _ && _.every(O=>O && O.value !== Xo) && p(_)
            }
            )
        }
        , {
            deep: !0,
            immediate: !0
        }),
        ()=>{
            const {disableArea: x} = e;
            return d(bl, {
                class: Ro(),
                onSubmit: g
            }, {
                default: ()=>{
                    var B;
                    return [d("div", {
                        class: Ro("fields")
                    }, [d(Tn, {
                        modelValue: a.name,
                        "onUpdate:modelValue": [_=>a.name = _, _=>f("name", _)],
                        clearable: !0,
                        label: Ct("name"),
                        rules: h.value.name,
                        placeholder: Ct("name"),
                        onFocus: ()=>u("name")
                    }, null), d(Tn, {
                        modelValue: a.tel,
                        "onUpdate:modelValue": [_=>a.tel = _, _=>f("tel", _)],
                        clearable: !0,
                        type: "tel",
                        label: Ct("tel"),
                        rules: h.value.tel,
                        maxlength: e.telMaxlength,
                        placeholder: Ct("tel"),
                        onFocus: ()=>u("tel")
                    }, null), st(d(Tn, {
                        readonly: !0,
                        label: Ct("area"),
                        "is-link": !x,
                        modelValue: l.value,
                        rules: e.showArea ? h.value.areaCode : void 0,
                        placeholder: e.areaPlaceholder || Ct("area"),
                        onFocus: ()=>u("areaCode"),
                        onClick: ()=>{
                            t("clickArea"),
                            r.value = !x
                        }
                    }, null), [[ht, e.showArea]]), d(kp, {
                        show: e.showDetail,
                        rows: e.detailRows,
                        rules: h.value.addressDetail,
                        value: a.addressDetail,
                        focused: i.value,
                        maxlength: e.detailMaxlength,
                        searchResult: e.searchResult,
                        showSearchResult: e.showSearchResult,
                        onBlur: y,
                        onFocus: ()=>u("addressDetail"),
                        onInput: S,
                        onSelectSearch: _=>t("selectSearch", _)
                    }, null), (B = n.default) == null ? void 0 : B.call(n)]), C(), st(d("div", {
                        class: Ro("buttons")
                    }, [d(wt, {
                        block: !0,
                        round: !0,
                        type: "primary",
                        text: e.saveButtonText || Ct("save"),
                        class: Ro("button"),
                        loading: e.isSaving,
                        nativeType: "submit"
                    }, null), e.showDelete && d(wt, {
                        block: !0,
                        round: !0,
                        class: Ro("button"),
                        loading: e.isDeleting,
                        text: e.deleteButtonText || Ct("delete"),
                        onClick: v
                    }, null)]), [[ht, !c.value]]), d(Rt, {
                        show: r.value,
                        "onUpdate:show": _=>r.value = _,
                        round: !0,
                        teleport: "body",
                        position: "bottom",
                        lazyRender: !1
                    }, {
                        default: ()=>[d(Gf, {
                            modelValue: a.areaCode,
                            "onUpdate:modelValue": _=>a.areaCode = _,
                            ref: o,
                            loading: !s.value,
                            areaList: e.areaList,
                            columnsPlaceholder: e.areaColumnsPlaceholder,
                            onConfirm: b,
                            onCancel: ()=>{
                                r.value = !1
                            }
                        }, null)]
                    })]
                }
            })
        }
    }
});
const Ap = G(Ep)
  , [Jf,Bp] = W("radio-group")
  , Op = {
    shape: String,
    disabled: Boolean,
    iconSize: q,
    direction: String,
    modelValue: Qe,
    checkedColor: String
}
  , eh = Symbol(Jf);
var Ip = j({
    name: Jf,
    props: Op,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = St(eh)
          , a = r=>t("update:modelValue", r);
        return ae(()=>e.modelValue, r=>t("change", r)),
        o({
            props: e,
            updateValue: a
        }),
        so(()=>e.modelValue),
        ()=>{
            var r;
            return d("div", {
                class: Bp([e.direction]),
                role: "radiogroup"
            }, [(r = n.default) == null ? void 0 : r.call(n)])
        }
    }
});
const Cl = G(Ip)
  , [th,$p] = W("checkbox-group")
  , Dp = {
    max: q,
    shape: X("round"),
    disabled: Boolean,
    iconSize: q,
    direction: String,
    modelValue: qe(),
    checkedColor: String
}
  , nh = Symbol(th);
var Rp = j({
    name: th,
    props: Dp,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {children: o, linkChildren: a} = St(nh)
          , r = s=>t("update:modelValue", s)
          , i = (s={})=>{
            typeof s == "boolean" && (s = {
                checked: s
            });
            const {checked: l, skipDisabled: c} = s
              , f = o.filter(h=>h.props.bindGroup ? h.props.disabled && c ? h.checked.value : l ?? !h.checked.value : !1).map(h=>h.name);
            r(f)
        }
        ;
        return ae(()=>e.modelValue, s=>t("change", s)),
        Oe({
            toggleAll: i
        }),
        so(()=>e.modelValue),
        a({
            props: e,
            updateValue: r
        }),
        ()=>{
            var s;
            return d("div", {
                class: $p([e.direction])
            }, [(s = n.default) == null ? void 0 : s.call(n)])
        }
    }
});
const oh = G(Rp)
  , [Lp,Gc] = W("tag")
  , Mp = {
    size: String,
    mark: Boolean,
    show: z,
    type: X("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
};
var Fp = j({
    name: Lp,
    props: Mp,
    emits: ["close"],
    setup(e, {slots: t, emit: n}) {
        const o = i=>{
            i.stopPropagation(),
            n("close", i)
        }
          , a = ()=>e.plain ? {
            color: e.textColor || e.color,
            borderColor: e.color
        } : {
            color: e.textColor,
            background: e.color
        }
          , r = ()=>{
            var i;
            const {type: s, mark: l, plain: c, round: u, size: f, closeable: h} = e
              , g = {
                mark: l,
                plain: c,
                round: u
            };
            f && (g[f] = f);
            const S = h && d(xe, {
                name: "cross",
                class: [Gc("close"), pt],
                onClick: o
            }, null);
            return d("span", {
                style: a(),
                class: Gc([g, s])
            }, [(i = t.default) == null ? void 0 : i.call(t), S])
        }
        ;
        return ()=>d(la, {
            name: e.closeable ? "van-fade" : void 0
        }, {
            default: ()=>[e.show ? r() : null]
        })
    }
});
const vi = G(Fp)
  , _l = {
    name: Qe,
    disabled: Boolean,
    iconSize: q,
    modelValue: Qe,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
};
var ah = j({
    props: be({}, _l, {
        bem: ft(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: z,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = h=>{
            if (e.parent && e.bindGroup)
                return e.parent.props[h]
        }
          , r = $(()=>{
            if (e.parent && e.bindGroup) {
                const h = a("disabled") || e.disabled;
                if (e.role === "checkbox") {
                    const g = a("modelValue").length
                      , S = a("max")
                      , p = S && g >= +S;
                    return h || p && !e.checked
                }
                return h
            }
            return e.disabled
        }
        )
          , i = $(()=>a("direction"))
          , s = $(()=>{
            const h = e.checkedColor || a("checkedColor");
            if (h && e.checked && !r.value)
                return {
                    borderColor: h,
                    backgroundColor: h
                }
        }
        )
          , l = $(()=>e.shape || a("shape") || "round")
          , c = h=>{
            const {target: g} = h
              , S = o.value
              , p = S === g || (S == null ? void 0 : S.contains(g));
            !r.value && (p || !e.labelDisabled) && t("toggle"),
            t("click", h)
        }
          , u = ()=>{
            var h, g;
            const {bem: S, checked: p, indeterminate: b} = e
              , v = e.iconSize || a("iconSize");
            return d("div", {
                ref: o,
                class: S("icon", [l.value, {
                    disabled: r.value,
                    checked: p,
                    indeterminate: b
                }]),
                style: l.value !== "dot" ? {
                    fontSize: _e(v)
                } : {
                    width: _e(v),
                    height: _e(v),
                    borderColor: (h = s.value) == null ? void 0 : h.borderColor
                }
            }, [n.icon ? n.icon({
                checked: p,
                disabled: r.value
            }) : l.value !== "dot" ? d(xe, {
                name: b ? "minus" : "success",
                style: s.value
            }, null) : d("div", {
                class: S("icon--dot__icon"),
                style: {
                    backgroundColor: (g = s.value) == null ? void 0 : g.backgroundColor
                }
            }, null)])
        }
          , f = ()=>{
            const {checked: h} = e;
            if (n.default)
                return d("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: r.value
                    }])
                }, [n.default({
                    checked: h,
                    disabled: r.value
                })])
        }
        ;
        return ()=>{
            const h = e.labelPosition === "left" ? [f(), u()] : [u(), f()];
            return d("div", {
                role: e.role,
                class: e.bem([{
                    disabled: r.value,
                    "label-disabled": e.labelDisabled
                }, i.value]),
                tabindex: r.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: c
            }, [h])
        }
    }
});
const Vp = be({}, _l, {
    shape: String
})
  , [Np,Hp] = W("radio");
var zp = j({
    name: Np,
    props: Vp,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: o} = mt(eh)
          , a = ()=>(o ? o.props.modelValue : e.modelValue) === e.name
          , r = ()=>{
            o ? o.updateValue(e.name) : t("update:modelValue", e.name)
        }
        ;
        return ()=>d(ah, Be({
            bem: Hp,
            role: "radio",
            parent: o,
            checked: a(),
            onToggle: r
        }, e), Le(n, ["default", "icon"]))
    }
});
const xl = G(zp)
  , [jp,Up] = W("checkbox")
  , Wp = be({}, _l, {
    shape: String,
    bindGroup: z,
    indeterminate: {
        type: Boolean,
        default: null
    }
});
var Yp = j({
    name: jp,
    props: Wp,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: o} = mt(nh)
          , a = s=>{
            const {name: l} = e
              , {max: c, modelValue: u} = o.props
              , f = u.slice();
            if (s)
                !(c && f.length >= +c) && !f.includes(l) && (f.push(l),
                e.bindGroup && o.updateValue(f));
            else {
                const h = f.indexOf(l);
                h !== -1 && (f.splice(h, 1),
                e.bindGroup && o.updateValue(f))
            }
        }
          , r = $(()=>o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue)
          , i = (s=!r.value)=>{
            o && e.bindGroup ? a(s) : t("update:modelValue", s),
            e.indeterminate !== null && t("change", s)
        }
        ;
        return ae(()=>e.modelValue, s=>{
            e.indeterminate === null && t("change", s)
        }
        ),
        Oe({
            toggle: i,
            props: e,
            checked: r
        }),
        so(()=>e.modelValue),
        ()=>d(ah, Be({
            bem: Up,
            role: "checkbox",
            parent: o,
            checked: r.value,
            onToggle: i
        }, e), Le(n, ["default", "icon"]))
    }
});
const kl = G(Yp)
  , [qp,Lo] = W("address-item");
var Kp = j({
    name: qp,
    props: {
        address: ft(Object),
        disabled: Boolean,
        switchable: Boolean,
        singleChoice: Boolean,
        defaultTagText: String,
        rightIcon: X("edit")
    },
    emits: ["edit", "click", "select"],
    setup(e, {slots: t, emit: n}) {
        const o = s=>{
            e.switchable && n("select"),
            n("click", s)
        }
          , a = ()=>d(xe, {
            name: e.rightIcon,
            class: Lo("edit"),
            onClick: s=>{
                s.stopPropagation(),
                n("edit"),
                n("click", s)
            }
        }, null)
          , r = ()=>{
            if (t.tag)
                return t.tag(e.address);
            if (e.address.isDefault && e.defaultTagText)
                return d(vi, {
                    type: "primary",
                    round: !0,
                    class: Lo("tag")
                }, {
                    default: ()=>[e.defaultTagText]
                })
        }
          , i = ()=>{
            const {address: s, disabled: l, switchable: c, singleChoice: u} = e
              , f = [d("div", {
                class: Lo("name")
            }, [`${s.name} ${s.tel}`, r()]), d("div", {
                class: Lo("address")
            }, [s.address])];
            return c && !l ? u ? d(xl, {
                name: s.id,
                iconSize: 18
            }, {
                default: ()=>[f]
            }) : d(kl, {
                name: s.id,
                iconSize: 18
            }, {
                default: ()=>[f]
            }) : f
        }
        ;
        return ()=>{
            var s;
            const {disabled: l} = e;
            return d("div", {
                class: Lo({
                    disabled: l
                }),
                onClick: o
            }, [d(nn, {
                border: !1,
                titleClass: Lo("title")
            }, {
                title: i,
                "right-icon": a
            }), (s = t.bottom) == null ? void 0 : s.call(t, be({}, e.address, {
                disabled: l
            }))])
        }
    }
});
const [Gp,mr,Xp] = W("address-list")
  , Qp = {
    list: qe(),
    modelValue: [...q, Array],
    switchable: z,
    disabledText: String,
    disabledList: qe(),
    showAddButton: z,
    addButtonText: String,
    defaultTagText: String,
    rightIcon: X("edit")
};
var Zp = j({
    name: Gp,
    props: Qp,
    emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const o = $(()=>!Array.isArray(e.modelValue))
          , a = (s,l,c)=>{
            const u = ()=>n(c ? "editDisabled" : "edit", s, l)
              , f = g=>n("clickItem", s, l, {
                event: g
            })
              , h = ()=>{
                if (n(c ? "selectDisabled" : "select", s, l),
                !c)
                    if (o.value)
                        n("update:modelValue", s.id);
                    else {
                        const g = e.modelValue;
                        g.includes(s.id) ? n("update:modelValue", g.filter(S=>S !== s.id)) : n("update:modelValue", [...g, s.id])
                    }
            }
            ;
            return d(Kp, {
                key: s.id,
                address: s,
                disabled: c,
                switchable: e.switchable,
                singleChoice: o.value,
                defaultTagText: e.defaultTagText,
                rightIcon: e.rightIcon,
                onEdit: u,
                onClick: f,
                onSelect: h
            }, {
                bottom: t["item-bottom"],
                tag: t.tag
            })
        }
          , r = (s,l)=>{
            if (s)
                return s.map((c,u)=>a(c, u, l))
        }
          , i = ()=>e.showAddButton ? d("div", {
            class: [mr("bottom"), "van-safe-area-bottom"]
        }, [d(wt, {
            round: !0,
            block: !0,
            type: "primary",
            text: e.addButtonText || Xp("add"),
            class: mr("add"),
            onClick: ()=>n("add")
        }, null)]) : void 0;
        return ()=>{
            var s, l;
            const c = r(e.list)
              , u = r(e.disabledList, !0)
              , f = e.disabledText && d("div", {
                class: mr("disabled-text")
            }, [e.disabledText]);
            return d("div", {
                class: mr()
            }, [(s = t.top) == null ? void 0 : s.call(t), !o.value && Array.isArray(e.modelValue) ? d(oh, {
                modelValue: e.modelValue
            }, {
                default: ()=>[c]
            }) : d(Cl, {
                modelValue: e.modelValue
            }, {
                default: ()=>[c]
            }), f, u, (l = t.default) == null ? void 0 : l.call(t), i()])
        }
    }
});
const Jp = G(Zp);
function e0(e, t) {
    let n = null
      , o = 0;
    return function(...a) {
        if (n)
            return;
        const r = Date.now() - o
          , i = ()=>{
            o = Date.now(),
            n = !1,
            e.apply(this, a)
        }
        ;
        r >= t ? i() : n = setTimeout(i, t)
    }
}
const [t0,ji] = W("back-top")
  , n0 = {
    right: q,
    bottom: q,
    zIndex: q,
    target: [String, Object],
    offset: ce(200),
    immediate: Boolean,
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var o0 = j({
    name: t0,
    inheritAttrs: !1,
    props: n0,
    emits: ["click"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        let a = !1;
        const r = R(!1)
          , i = R()
          , s = R()
          , l = $(()=>be($n(e.zIndex), {
            right: _e(e.right),
            bottom: _e(e.bottom)
        }))
          , c = g=>{
            var S;
            t("click", g),
            (S = s.value) == null || S.scrollTo({
                top: 0,
                behavior: e.immediate ? "auto" : "smooth"
            })
        }
          , u = ()=>{
            r.value = s.value ? En(s.value) >= +e.offset : !1
        }
          , f = ()=>{
            const {target: g} = e;
            if (typeof g == "string") {
                const S = document.querySelector(g);
                if (S)
                    return S
            } else
                return g
        }
          , h = ()=>{
            Dt && Pe(()=>{
                s.value = e.target ? f() : sl(i.value),
                u()
            }
            )
        }
        ;
        return et("scroll", e0(u, 100), {
            target: s
        }),
        tt(h),
        mn(()=>{
            a && (r.value = !0,
            a = !1)
        }
        ),
        vn(()=>{
            r.value && e.teleport && (r.value = !1,
            a = !0)
        }
        ),
        ae(()=>e.target, h),
        ()=>{
            const g = d("div", Be({
                ref: e.teleport ? void 0 : i,
                class: ji({
                    active: r.value
                }),
                style: l.value,
                onClick: c
            }, o), [n.default ? n.default() : d(xe, {
                name: "back-top",
                class: ji("icon")
            }, null)]);
            return e.teleport ? [d("div", {
                ref: i,
                class: ji("placeholder")
            }, null), d(sa, {
                to: e.teleport
            }, {
                default: ()=>[g]
            })] : g
        }
    }
});
const a0 = G(o0);
var r0 = (e,t,n)=>new Promise((o,a)=>{
    var r = l=>{
        try {
            s(n.next(l))
        } catch (c) {
            a(c)
        }
    }
      , i = l=>{
        try {
            s(n.throw(l))
        } catch (c) {
            a(c)
        }
    }
      , s = l=>l.done ? o(l.value) : Promise.resolve(l.value).then(r, i);
    s((n = n.apply(e, t)).next())
}
);
const i0 = {
    top: ce(10),
    rows: ce(4),
    duration: ce(4e3),
    autoPlay: z,
    delay: nt(300),
    modelValue: qe()
}
  , [s0,Xc] = W("barrage");
var l0 = j({
    name: s0,
    props: i0,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = Xc("item")
          , r = R(0)
          , i = []
          , s = (p,b=e.delay)=>{
            const v = document.createElement("span");
            return v.className = a,
            v.innerText = String(p),
            v.style.animationDuration = `${e.duration}ms`,
            v.style.animationDelay = `${b}ms`,
            v.style.animationName = "van-barrage",
            v.style.animationTimingFunction = "linear",
            v
        }
          , l = R(!0)
          , c = R(e.autoPlay)
          , u = ({id: p, text: b},v)=>{
            var m;
            const y = s(b, l.value ? v * e.delay : void 0);
            !e.autoPlay && c.value === !1 && (y.style.animationPlayState = "paused"),
            (m = o.value) == null || m.append(y),
            r.value++;
            const w = (r.value - 1) % +e.rows * y.offsetHeight + +e.top;
            y.style.top = `${w}px`,
            y.dataset.id = String(p),
            i.push(y),
            y.addEventListener("animationend", ()=>{
                t("update:modelValue", [...e.modelValue].filter(C=>String(C.id) !== y.dataset.id))
            }
            )
        }
          , f = (p,b)=>{
            const v = new Map(b.map(m=>[m.id, m]));
            p.forEach((m,y)=>{
                v.has(m.id) ? v.delete(m.id) : u(m, y)
            }
            ),
            v.forEach(m=>{
                const y = i.findIndex(w=>w.dataset.id === String(m.id));
                y > -1 && (i[y].remove(),
                i.splice(y, 1))
            }
            ),
            l.value = !1
        }
        ;
        ae(()=>e.modelValue.slice(), (p,b)=>f(p ?? [], b ?? []), {
            deep: !0
        });
        const h = R({});
        return tt(()=>r0(this, null, function*() {
            var p;
            h.value["--move-distance"] = `-${(p = o.value) == null ? void 0 : p.offsetWidth}px`,
            yield Pe(),
            f(e.modelValue, [])
        })),
        Oe({
            play: ()=>{
                c.value = !0,
                i.forEach(p=>{
                    p.style.animationPlayState = "running"
                }
                )
            }
            ,
            pause: ()=>{
                c.value = !1,
                i.forEach(p=>{
                    p.style.animationPlayState = "paused"
                }
                )
            }
        }),
        ()=>{
            var p;
            return d("div", {
                class: Xc(),
                ref: o,
                style: h.value
            }, [(p = n.default) == null ? void 0 : p.call(n)])
        }
    }
});
const c0 = G(l0)
  , [u0,Je,Pn] = W("calendar")
  , d0 = e=>Pn("monthTitle", e.getFullYear(), e.getMonth() + 1);
function Ts(e, t) {
    const n = e.getFullYear()
      , o = t.getFullYear();
    if (n === o) {
        const a = e.getMonth()
          , r = t.getMonth();
        return a === r ? 0 : a > r ? 1 : -1
    }
    return n > o ? 1 : -1
}
function $t(e, t) {
    const n = Ts(e, t);
    if (n === 0) {
        const o = e.getDate()
          , a = t.getDate();
        return o === a ? 0 : o > a ? 1 : -1
    }
    return n
}
const ta = e=>new Date(e)
  , Qc = e=>Array.isArray(e) ? e.map(ta) : ta(e);
function Tl(e, t) {
    const n = ta(e);
    return n.setDate(n.getDate() + t),
    n
}
function Pl(e, t) {
    const n = ta(e);
    return n.setMonth(n.getMonth() + t),
    n
}
function rh(e, t) {
    const n = ta(e);
    return n.setFullYear(n.getFullYear() + t),
    n
}
const Ps = e=>Tl(e, -1)
  , Es = e=>Tl(e, 1)
  , Zc = e=>Pl(e, -1)
  , Jc = e=>Pl(e, 1)
  , eu = e=>rh(e, -1)
  , tu = e=>rh(e, 1)
  , vr = ()=>{
    const e = new Date;
    return e.setHours(0, 0, 0, 0),
    e
}
;
function f0(e) {
    const t = e[0].getTime();
    return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
const ih = be({}, hi, {
    modelValue: qe(),
    filter: Function,
    formatter: {
        type: Function,
        default: (e,t)=>t
    }
})
  , sh = Object.keys(hi);
function h0(e, t) {
    if (e < 0)
        return [];
    const n = Array(e);
    let o = -1;
    for (; ++o < e; )
        n[o] = t(o);
    return n
}
const lh = (e,t)=>32 - new Date(e,t - 1,32).getDate()
  , Qo = (e,t,n,o,a,r)=>{
    const i = h0(t - e + 1, s=>{
        const l = Kt(e + s);
        return o(n, {
            text: l,
            value: l
        })
    }
    );
    return a ? a(n, i, r) : i
}
  , ch = (e,t)=>e.map((n,o)=>{
    const a = t[o];
    if (a.length) {
        const r = +a[0].value
          , i = +a[a.length - 1].value;
        return Kt(gt(+n, r, i))
    }
    return n
}
)
  , [g0] = W("calendar-day");
var m0 = j({
    name: g0,
    props: {
        item: ft(Object),
        color: String,
        index: Number,
        offset: nt(0),
        rowHeight: String
    },
    emits: ["click", "clickDisabledDate"],
    setup(e, {emit: t, slots: n}) {
        const o = $(()=>{
            var l;
            const {item: c, index: u, color: f, offset: h, rowHeight: g} = e
              , S = {
                height: g
            };
            if (c.type === "placeholder")
                return S.width = "100%",
                S;
            if (u === 0 && (S.marginLeft = `${100 * h / 7}%`),
            f)
                switch (c.type) {
                case "end":
                case "start":
                case "start-end":
                case "multiple-middle":
                case "multiple-selected":
                    S.background = f;
                    break;
                case "middle":
                    S.color = f;
                    break
                }
            return h + (((l = c.date) == null ? void 0 : l.getDate()) || 1) > 28 && (S.marginBottom = 0),
            S
        }
        )
          , a = ()=>{
            e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
        }
          , r = ()=>{
            const {topInfo: l} = e.item;
            if (l || n["top-info"])
                return d("div", {
                    class: Je("top-info")
                }, [n["top-info"] ? n["top-info"](e.item) : l])
        }
          , i = ()=>{
            const {bottomInfo: l} = e.item;
            if (l || n["bottom-info"])
                return d("div", {
                    class: Je("bottom-info")
                }, [n["bottom-info"] ? n["bottom-info"](e.item) : l])
        }
          , s = ()=>{
            const {item: l, color: c, rowHeight: u} = e
              , {type: f, text: h} = l
              , g = [r(), h, i()];
            return f === "selected" ? d("div", {
                class: Je("selected-day"),
                style: {
                    width: u,
                    height: u,
                    background: c
                }
            }, [g]) : g
        }
        ;
        return ()=>{
            const {type: l, className: c} = e.item;
            return l === "placeholder" ? d("div", {
                class: Je("day"),
                style: o.value
            }, null) : d("div", {
                role: "gridcell",
                style: o.value,
                class: [Je("day", l), c],
                tabindex: l === "disabled" ? void 0 : -1,
                onClick: a
            }, [s()])
        }
    }
});
const [v0] = W("calendar-month")
  , b0 = {
    date: ft(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: q,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
};
var y0 = j({
    name: v0,
    props: b0,
    emits: ["click", "clickDisabledDate"],
    setup(e, {emit: t, slots: n}) {
        const [o,a] = jv()
          , r = R()
          , i = R()
          , s = kf(i)
          , l = $(()=>d0(e.date))
          , c = $(()=>_e(e.rowHeight))
          , u = $(()=>{
            const I = e.date.getDate()
              , E = (e.date.getDay() - I % 7 + 8) % 7;
            return e.firstDayOfWeek ? (E + 7 - e.firstDayOfWeek) % 7 : E
        }
        )
          , f = $(()=>lh(e.date.getFullYear(), e.date.getMonth() + 1))
          , h = $(()=>o.value || !e.lazyRender)
          , g = ()=>l.value
          , S = I=>{
            const k = E=>e.currentDate.some(D=>$t(D, E) === 0);
            if (k(I)) {
                const E = Ps(I)
                  , D = Es(I)
                  , Q = k(E)
                  , oe = k(D);
                return Q && oe ? "multiple-middle" : Q ? "end" : oe ? "start" : "multiple-selected"
            }
            return ""
        }
          , p = I=>{
            const [k,E] = e.currentDate;
            if (!k)
                return "";
            const D = $t(I, k);
            if (!E)
                return D === 0 ? "start" : "";
            const Q = $t(I, E);
            return e.allowSameDay && D === 0 && Q === 0 ? "start-end" : D === 0 ? "start" : Q === 0 ? "end" : D > 0 && Q < 0 ? "middle" : ""
        }
          , b = I=>{
            const {type: k, minDate: E, maxDate: D, currentDate: Q} = e;
            if (E && $t(I, E) < 0 || D && $t(I, D) > 0)
                return "disabled";
            if (Q === null)
                return "";
            if (Array.isArray(Q)) {
                if (k === "multiple")
                    return S(I);
                if (k === "range")
                    return p(I)
            } else if (k === "single")
                return $t(I, Q) === 0 ? "selected" : "";
            return ""
        }
          , v = I=>{
            if (e.type === "range") {
                if (I === "start" || I === "end")
                    return Pn(I);
                if (I === "start-end")
                    return `${Pn("start")}/${Pn("end")}`
            }
        }
          , m = ()=>{
            if (e.showMonthTitle)
                return d("div", {
                    class: Je("month-title")
                }, [n["month-title"] ? n["month-title"]({
                    date: e.date,
                    text: l.value
                }) : l.value])
        }
          , y = ()=>{
            if (e.showMark && h.value)
                return d("div", {
                    class: Je("month-mark")
                }, [e.date.getMonth() + 1])
        }
          , w = $(()=>{
            const I = Math.ceil((f.value + u.value) / 7);
            return Array(I).fill({
                type: "placeholder"
            })
        }
        )
          , C = $(()=>{
            const I = []
              , k = e.date.getFullYear()
              , E = e.date.getMonth();
            for (let D = 1; D <= f.value; D++) {
                const Q = new Date(k,E,D)
                  , oe = b(Q);
                let N = {
                    date: Q,
                    type: oe,
                    text: D,
                    bottomInfo: v(oe)
                };
                e.formatter && (N = e.formatter(N)),
                I.push(N)
            }
            return I
        }
        )
          , x = $(()=>C.value.filter(I=>I.type === "disabled"))
          , B = (I,k)=>{
            if (r.value) {
                const E = Ve(r.value)
                  , D = w.value.length
                  , oe = (Math.ceil((k.getDate() + u.value) / 7) - 1) * E.height / D;
                zr(I, E.top + oe + I.scrollTop - Ve(I).top)
            }
        }
          , _ = (I,k)=>d(m0, {
            item: I,
            index: k,
            color: e.color,
            offset: u.value,
            rowHeight: c.value,
            onClick: E=>t("click", E),
            onClickDisabledDate: E=>t("clickDisabledDate", E)
        }, Le(n, ["top-info", "bottom-info"]))
          , O = ()=>d("div", {
            ref: r,
            role: "grid",
            class: Je("days")
        }, [y(), (h.value ? C : w).value.map(_)]);
        return Oe({
            getTitle: g,
            getHeight: ()=>s.value,
            setVisible: a,
            scrollToDate: B,
            disabledDays: x
        }),
        ()=>d("div", {
            class: Je("month"),
            ref: i
        }, [m(), O()])
    }
});
const [p0] = W("calendar-header");
var w0 = j({
    name: p0,
    props: {
        date: Date,
        minDate: Date,
        maxDate: Date,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number,
        switchMode: X("none")
    },
    emits: ["clickSubtitle", "panelChange"],
    setup(e, {slots: t, emit: n}) {
        const o = $(()=>{
            const g = Zc(e.date);
            return e.minDate && g < e.minDate
        }
        )
          , a = $(()=>{
            const g = eu(e.date);
            return e.minDate && g < e.minDate
        }
        )
          , r = $(()=>{
            const g = Jc(e.date);
            return e.maxDate && g > e.maxDate
        }
        )
          , i = $(()=>{
            const g = tu(e.date);
            return e.maxDate && g > e.maxDate
        }
        )
          , s = ()=>{
            if (e.showTitle) {
                const g = e.title || Pn("title")
                  , S = t.title ? t.title() : g;
                return d("div", {
                    class: Je("header-title")
                }, [S])
            }
        }
          , l = g=>n("clickSubtitle", g)
          , c = g=>n("panelChange", g)
          , u = g=>{
            const S = e.switchMode === "year-month"
              , p = t[g ? "next-month" : "prev-month"]
              , b = t[g ? "next-year" : "prev-year"]
              , v = g ? r.value : o.value
              , m = g ? i.value : a.value
              , y = g ? "arrow" : "arrow-left"
              , w = g ? "arrow-double-right" : "arrow-double-left"
              , C = ()=>c((g ? Jc : Zc)(e.date))
              , x = ()=>c((g ? tu : eu)(e.date))
              , B = d("view", {
                class: Je("header-action", {
                    disabled: v
                }),
                onClick: v ? void 0 : C
            }, [p ? p({
                disabled: v
            }) : d(xe, {
                class: {
                    [pt]: !v
                },
                name: y
            }, null)])
              , _ = S && d("view", {
                class: Je("header-action", {
                    disabled: m
                }),
                onClick: m ? void 0 : x
            }, [b ? b({
                disabled: m
            }) : d(xe, {
                class: {
                    [pt]: !m
                },
                name: w
            }, null)]);
            return g ? [B, _] : [_, B]
        }
          , f = ()=>{
            if (e.showSubtitle) {
                const g = t.subtitle ? t.subtitle({
                    date: e.date,
                    text: e.subtitle
                }) : e.subtitle
                  , S = e.switchMode !== "none";
                return d("div", {
                    class: Je("header-subtitle", {
                        "with-swicth": S
                    }),
                    onClick: l
                }, [S ? [u(), d("div", {
                    class: Je("header-subtitle-text")
                }, [g]), u(!0)] : g])
            }
        }
          , h = ()=>{
            const {firstDayOfWeek: g} = e
              , S = Pn("weekdays")
              , p = [...S.slice(g, 7), ...S.slice(0, g)];
            return d("div", {
                class: Je("weekdays")
            }, [p.map(b=>d("span", {
                class: Je("weekday")
            }, [b]))])
        }
        ;
        return ()=>d("div", {
            class: Je("header")
        }, [s(), f(), h()])
    }
});
const S0 = {
    show: Boolean,
    type: X("single"),
    switchMode: X("none"),
    title: String,
    color: String,
    round: z,
    readonly: Boolean,
    poppable: z,
    maxRange: ce(null),
    position: X("bottom"),
    teleport: [String, Object],
    showMark: z,
    showTitle: z,
    formatter: Function,
    rowHeight: q,
    confirmText: String,
    rangePrompt: String,
    lazyRender: z,
    showConfirm: z,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: z,
    closeOnPopstate: z,
    showRangePrompt: z,
    confirmDisabledText: String,
    closeOnClickOverlay: z,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: z,
    minDate: {
        type: Date,
        validator: La
    },
    maxDate: {
        type: Date,
        validator: La
    },
    firstDayOfWeek: {
        type: q,
        default: 0,
        validator: e=>e >= 0 && e <= 6
    }
};
var C0 = j({
    name: u0,
    props: S0,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
    setup(e, {emit: t, slots: n}) {
        const o = $(()=>e.switchMode !== "none")
          , a = $(()=>!e.minDate && !o.value ? vr() : e.minDate)
          , r = $(()=>!e.maxDate && !o.value ? Pl(vr(), 6) : e.maxDate)
          , i = (M,K=a.value,fe=r.value)=>K && $t(M, K) === -1 ? K : fe && $t(M, fe) === 1 ? fe : M
          , s = (M=e.defaultDate)=>{
            const {type: K, allowSameDay: fe} = e;
            if (M === null)
                return M;
            const me = vr();
            if (K === "range") {
                Array.isArray(M) || (M = []);
                const ne = a.value
                  , ue = r.value
                  , P = i(M[0] || me, ne, ue ? fe ? ue : Ps(ue) : void 0)
                  , F = i(M[1] || (fe ? me : Es(me)), ne ? fe ? ne : Es(ne) : void 0);
                return [P, F]
            }
            return K === "multiple" ? Array.isArray(M) ? M.map(ne=>i(ne)) : [i(me)] : ((!M || Array.isArray(M)) && (M = me),
            i(M))
        }
          , l = ()=>{
            const M = Array.isArray(f.value) ? f.value[0] : f.value;
            return M || i(vr())
        }
        ;
        let c;
        const u = R()
          , f = R(s())
          , h = R(l())
          , g = R()
          , [S,p] = er()
          , b = $(()=>e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)
          , v = $(()=>{
            const M = [];
            if (!a.value || !r.value)
                return M;
            const K = new Date(a.value);
            K.setDate(1);
            do
                M.push(new Date(K)),
                K.setMonth(K.getMonth() + 1);
            while (Ts(K, r.value) !== 1);
            return M
        }
        )
          , m = $(()=>{
            if (f.value) {
                if (e.type === "range")
                    return !f.value[0] || !f.value[1];
                if (e.type === "multiple")
                    return !f.value.length
            }
            return !f.value
        }
        )
          , y = ()=>f.value
          , w = ()=>{
            const M = En(u.value)
              , K = M + c
              , fe = v.value.map((F,V)=>S.value[V].getHeight())
              , me = fe.reduce((F,V)=>F + V, 0);
            if (K > me && M > 0)
                return;
            let ne = 0, ue;
            const P = [-1, -1];
            for (let F = 0; F < v.value.length; F++) {
                const V = S.value[F];
                ne <= K && ne + fe[F] >= M && (P[1] = F,
                ue || (ue = V,
                P[0] = F),
                S.value[F].showed || (S.value[F].showed = !0,
                t("monthShow", {
                    date: V.date,
                    title: V.getTitle()
                }))),
                ne += fe[F]
            }
            v.value.forEach((F,V)=>{
                const J = V >= P[0] - 1 && V <= P[1] + 1;
                S.value[V].setVisible(J)
            }
            ),
            ue && (g.value = ue)
        }
          , C = M=>{
            o.value ? h.value = M : yt(()=>{
                v.value.some((K,fe)=>Ts(K, M) === 0 ? (u.value && S.value[fe].scrollToDate(u.value, M),
                !0) : !1),
                w()
            }
            )
        }
          , x = ()=>{
            if (!(e.poppable && !e.show))
                if (f.value) {
                    const M = e.type === "single" ? f.value : f.value[0];
                    La(M) && C(M)
                } else
                    o.value || yt(w)
        }
          , B = ()=>{
            e.poppable && !e.show || (o.value || yt(()=>{
                c = Math.floor(Ve(u).height)
            }
            ),
            x())
        }
          , _ = (M=s())=>{
            f.value = M,
            x()
        }
          , O = M=>{
            const {maxRange: K, rangePrompt: fe, showRangePrompt: me} = e;
            return K && f0(M) > +K ? (me && ks(fe || Pn("rangePrompt", K)),
            t("overRange"),
            !1) : !0
        }
          , I = M=>{
            h.value = M,
            t("panelChange", {
                date: M
            })
        }
          , k = ()=>{
            var M;
            return t("confirm", (M = f.value) != null ? M : Qc(f.value))
        }
          , E = (M,K)=>{
            const fe = me=>{
                f.value = me,
                t("select", Qc(me))
            }
            ;
            if (K && e.type === "range" && !O(M)) {
                fe([M[0], Tl(M[0], +e.maxRange - 1)]);
                return
            }
            fe(M),
            K && !e.showConfirm && k()
        }
          , D = (M,K,fe)=>{
            var me;
            return (me = M.find(ne=>$t(K, ne.date) === -1 && $t(ne.date, fe) === -1)) == null ? void 0 : me.date
        }
          , Q = $(()=>S.value.reduce((M,K)=>{
            var fe, me;
            return M.push(...(me = (fe = K.disabledDays) == null ? void 0 : fe.value) != null ? me : []),
            M
        }
        , []))
          , oe = M=>{
            if (e.readonly || !M.date)
                return;
            const {date: K} = M
              , {type: fe} = e;
            if (fe === "range") {
                if (!f.value) {
                    E([K]);
                    return
                }
                const [me,ne] = f.value;
                if (me && !ne) {
                    const ue = $t(K, me);
                    if (ue === 1) {
                        const P = D(Q.value, me, K);
                        if (P) {
                            const F = Ps(P);
                            $t(me, F) === -1 ? E([me, F]) : E([K])
                        } else
                            E([me, K], !0)
                    } else
                        ue === -1 ? E([K]) : e.allowSameDay && E([K, K], !0)
                } else
                    E([K])
            } else if (fe === "multiple") {
                if (!f.value) {
                    E([K]);
                    return
                }
                const me = f.value
                  , ne = me.findIndex(ue=>$t(ue, K) === 0);
                if (ne !== -1) {
                    const [ue] = me.splice(ne, 1);
                    t("unselect", ta(ue))
                } else
                    e.maxRange && me.length >= +e.maxRange ? ks(e.rangePrompt || Pn("rangePrompt", e.maxRange)) : E([...me, K])
            } else
                E(K, !0)
        }
          , N = M=>t("update:show", M)
          , Z = (M,K)=>{
            const fe = K !== 0 || !e.showSubtitle;
            return d(y0, Be({
                ref: o.value ? g : p(K),
                date: M,
                currentDate: f.value,
                showMonthTitle: fe,
                firstDayOfWeek: b.value,
                lazyRender: o.value ? !1 : e.lazyRender,
                maxDate: r.value,
                minDate: a.value
            }, Le(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
                onClick: oe,
                onClickDisabledDate: me=>t("clickDisabledDate", me)
            }), Le(n, ["top-info", "bottom-info", "month-title"]))
        }
          , se = ()=>{
            if (n.footer)
                return n.footer();
            if (e.showConfirm) {
                const M = n["confirm-text"]
                  , K = m.value
                  , fe = K ? e.confirmDisabledText : e.confirmText;
                return d(wt, {
                    round: !0,
                    block: !0,
                    type: "primary",
                    color: e.color,
                    class: Je("confirm"),
                    disabled: K,
                    nativeType: "button",
                    onClick: k
                }, {
                    default: ()=>[M ? M({
                        disabled: K
                    }) : fe || Pn("confirm")]
                })
            }
        }
          , Ee = ()=>d("div", {
            class: [Je("footer"), {
                "van-safe-area-bottom": e.safeAreaInsetBottom
            }]
        }, [se()])
          , $e = ()=>{
            var M, K;
            return d("div", {
                class: Je()
            }, [d(w0, {
                date: (M = g.value) == null ? void 0 : M.date,
                maxDate: r.value,
                minDate: a.value,
                title: e.title,
                subtitle: (K = g.value) == null ? void 0 : K.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: b.value,
                onClickSubtitle: fe=>t("clickSubtitle", fe),
                onPanelChange: I
            }, Le(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), d("div", {
                ref: u,
                class: Je("body"),
                onScroll: o.value ? void 0 : w
            }, [o.value ? Z(h.value, 0) : v.value.map(Z)]), Ee()])
        }
        ;
        return ae(()=>e.show, B),
        ae(()=>[e.type, e.minDate, e.maxDate, e.switchMode], ()=>_(s(f.value))),
        ae(()=>e.defaultDate, (M=null)=>{
            f.value = M,
            x()
        }
        ),
        Oe({
            reset: _,
            scrollToDate: C,
            getSelectedDate: y
        }),
        ca(B),
        ()=>e.poppable ? d(Rt, {
            show: e.show,
            class: Je("popup"),
            round: e.round,
            position: e.position,
            closeable: e.showTitle || e.showSubtitle,
            teleport: e.teleport,
            closeOnPopstate: e.closeOnPopstate,
            safeAreaInsetTop: e.safeAreaInsetTop,
            closeOnClickOverlay: e.closeOnClickOverlay,
            "onUpdate:show": N
        }, {
            default: $e
        }) : $e()
    }
});
const _0 = G(C0)
  , [x0,Mo] = W("image")
  , k0 = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: q,
    height: q,
    radius: q,
    lazyLoad: Boolean,
    iconSize: q,
    showError: z,
    errorIcon: X("photo-fail"),
    iconPrefix: String,
    showLoading: z,
    loadingIcon: X("photo"),
    crossorigin: String,
    referrerpolicy: String
};
var T0 = j({
    name: x0,
    props: k0,
    emits: ["load", "error"],
    setup(e, {emit: t, slots: n}) {
        const o = R(!1)
          , a = R(!0)
          , r = R()
          , {$Lazyload: i} = en().proxy
          , s = $(()=>{
            const b = {
                width: _e(e.width),
                height: _e(e.height)
            };
            return De(e.radius) && (b.overflow = "hidden",
            b.borderRadius = _e(e.radius)),
            b
        }
        );
        ae(()=>e.src, ()=>{
            o.value = !1,
            a.value = !0
        }
        );
        const l = b=>{
            a.value && (a.value = !1,
            t("load", b))
        }
          , c = ()=>{
            const b = new Event("load");
            Object.defineProperty(b, "target", {
                value: r.value,
                enumerable: !0
            }),
            l(b)
        }
          , u = b=>{
            o.value = !0,
            a.value = !1,
            t("error", b)
        }
          , f = (b,v,m)=>m ? m() : d(xe, {
            name: b,
            size: e.iconSize,
            class: v,
            classPrefix: e.iconPrefix
        }, null)
          , h = ()=>{
            if (a.value && e.showLoading)
                return d("div", {
                    class: Mo("loading")
                }, [f(e.loadingIcon, Mo("loading-icon"), n.loading)]);
            if (o.value && e.showError)
                return d("div", {
                    class: Mo("error")
                }, [f(e.errorIcon, Mo("error-icon"), n.error)])
        }
          , g = ()=>{
            if (o.value || !e.src)
                return;
            const b = {
                alt: e.alt,
                class: Mo("img"),
                style: {
                    objectFit: e.fit,
                    objectPosition: e.position
                },
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy
            };
            return e.lazyLoad ? st(d("img", Be({
                ref: r
            }, b), null), [[mm("lazy"), e.src]]) : d("img", Be({
                ref: r,
                src: e.src,
                onLoad: l,
                onError: u
            }, b), null)
        }
          , S = ({el: b})=>{
            const v = ()=>{
                b === r.value && a.value && c()
            }
            ;
            r.value ? v() : Pe(v)
        }
          , p = ({el: b})=>{
            b === r.value && !o.value && u()
        }
        ;
        return i && Dt && (i.$on("loaded", S),
        i.$on("error", p),
        bn(()=>{
            i.$off("loaded", S),
            i.$off("error", p)
        }
        )),
        tt(()=>{
            Pe(()=>{
                var b;
                (b = r.value) != null && b.complete && !e.lazyLoad && c()
            }
            )
        }
        ),
        ()=>{
            var b;
            return d("div", {
                class: Mo({
                    round: e.round,
                    block: e.block
                }),
                style: s.value
            }, [g(), h(), (b = n.default) == null ? void 0 : b.call(n)])
        }
    }
});
const bi = G(T0)
  , [P0,_t] = W("card")
  , E0 = {
    tag: String,
    num: q,
    desc: String,
    thumb: String,
    title: String,
    price: q,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: X("¥"),
    thumbLink: String,
    originPrice: q
};
var A0 = j({
    name: P0,
    props: E0,
    emits: ["clickThumb"],
    setup(e, {slots: t, emit: n}) {
        const o = ()=>{
            if (t.title)
                return t.title();
            if (e.title)
                return d("div", {
                    class: [_t("title"), "van-multi-ellipsis--l2"]
                }, [e.title])
        }
          , a = ()=>{
            if (t.tag || e.tag)
                return d("div", {
                    class: _t("tag")
                }, [t.tag ? t.tag() : d(vi, {
                    mark: !0,
                    type: "primary"
                }, {
                    default: ()=>[e.tag]
                })])
        }
          , r = ()=>t.thumb ? t.thumb() : d(bi, {
            src: e.thumb,
            fit: "cover",
            width: "100%",
            height: "100%",
            lazyLoad: e.lazyLoad
        }, null)
          , i = ()=>{
            if (t.thumb || e.thumb)
                return d("a", {
                    href: e.thumbLink,
                    class: _t("thumb"),
                    onClick: c=>n("clickThumb", c)
                }, [r(), a()])
        }
          , s = ()=>{
            if (t.desc)
                return t.desc();
            if (e.desc)
                return d("div", {
                    class: [_t("desc"), "van-ellipsis"]
                }, [e.desc])
        }
          , l = ()=>{
            const c = e.price.toString().split(".");
            return d("div", null, [d("span", {
                class: _t("price-currency")
            }, [e.currency]), d("span", {
                class: _t("price-integer")
            }, [c[0]]), Ae("."), d("span", {
                class: _t("price-decimal")
            }, [c[1]])])
        }
        ;
        return ()=>{
            var c, u, f;
            const h = t.num || De(e.num)
              , g = t.price || De(e.price)
              , S = t["origin-price"] || De(e.originPrice)
              , p = h || g || S || t.bottom
              , b = g && d("div", {
                class: _t("price")
            }, [t.price ? t.price() : l()])
              , v = S && d("div", {
                class: _t("origin-price")
            }, [t["origin-price"] ? t["origin-price"]() : `${e.currency} ${e.originPrice}`])
              , m = h && d("div", {
                class: _t("num")
            }, [t.num ? t.num() : `x${e.num}`])
              , y = t.footer && d("div", {
                class: _t("footer")
            }, [t.footer()])
              , w = p && d("div", {
                class: _t("bottom")
            }, [(c = t["price-top"]) == null ? void 0 : c.call(t), b, v, m, (u = t.bottom) == null ? void 0 : u.call(t)]);
            return d("div", {
                class: _t()
            }, [d("div", {
                class: _t("header")
            }, [i(), d("div", {
                class: _t("content", {
                    centered: e.centered
                })
            }, [d("div", null, [o(), s(), (f = t.tags) == null ? void 0 : f.call(t)]), w])]), y])
        }
    }
});
const B0 = G(A0)
  , [O0,pn,I0] = W("cascader")
  , $0 = {
    title: String,
    options: qe(),
    closeable: z,
    swipeable: z,
    closeIcon: X("cross"),
    showHeader: z,
    modelValue: q,
    fieldNames: Object,
    placeholder: String,
    activeColor: String
};
var D0 = j({
    name: O0,
    props: $0,
    emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const o = R([])
          , a = R(0)
          , [r,i] = er()
          , {text: s, value: l, children: c} = be({
            text: "text",
            value: "value",
            children: "children"
        }, e.fieldNames)
          , u = (C,x)=>{
            for (const B of C) {
                if (B[l] === x)
                    return [B];
                if (B[c]) {
                    const _ = u(B[c], x);
                    if (_)
                        return [B, ..._]
                }
            }
        }
          , f = ()=>{
            const {options: C, modelValue: x} = e;
            if (x !== void 0) {
                const B = u(C, x);
                if (B) {
                    let _ = C;
                    o.value = B.map(O=>{
                        const I = {
                            options: _,
                            selected: O
                        }
                          , k = _.find(E=>E[l] === O[l]);
                        return k && (_ = k[c]),
                        I
                    }
                    ),
                    _ && o.value.push({
                        options: _,
                        selected: null
                    }),
                    Pe(()=>{
                        a.value = o.value.length - 1
                    }
                    );
                    return
                }
            }
            o.value = [{
                options: C,
                selected: null
            }]
        }
          , h = (C,x)=>{
            if (C.disabled)
                return;
            if (o.value[x].selected = C,
            o.value.length > x + 1 && (o.value = o.value.slice(0, x + 1)),
            C[c]) {
                const O = {
                    options: C[c],
                    selected: null
                };
                o.value[x + 1] ? o.value[x + 1] = O : o.value.push(O),
                Pe(()=>{
                    a.value++
                }
                )
            }
            const B = o.value.map(O=>O.selected).filter(Boolean);
            n("update:modelValue", C[l]);
            const _ = {
                value: C[l],
                tabIndex: x,
                selectedOptions: B
            };
            n("change", _),
            C[c] || n("finish", _)
        }
          , g = ()=>n("close")
          , S = ({name: C, title: x})=>n("clickTab", C, x)
          , p = ()=>e.showHeader ? d("div", {
            class: pn("header")
        }, [d("h2", {
            class: pn("title")
        }, [t.title ? t.title() : e.title]), e.closeable ? d(xe, {
            name: e.closeIcon,
            class: [pn("close-icon"), pt],
            onClick: g
        }, null) : null]) : null
          , b = (C,x,B)=>{
            const {disabled: _} = C
              , O = !!(x && C[l] === x[l])
              , I = C.color || (O ? e.activeColor : void 0)
              , k = t.option ? t.option({
                option: C,
                selected: O
            }) : d("span", null, [C[s]]);
            return d("li", {
                ref: O ? i(B) : void 0,
                role: "menuitemradio",
                class: [pn("option", {
                    selected: O,
                    disabled: _
                }), C.className],
                style: {
                    color: I
                },
                tabindex: _ ? void 0 : O ? 0 : -1,
                "aria-checked": O,
                "aria-disabled": _ || void 0,
                onClick: ()=>h(C, B)
            }, [k, O ? d(xe, {
                name: "success",
                class: pn("selected-icon")
            }, null) : null])
        }
          , v = (C,x,B)=>d("ul", {
            role: "menu",
            class: pn("options")
        }, [C.map(_=>b(_, x, B))])
          , m = (C,x)=>{
            const {options: B, selected: _} = C
              , O = e.placeholder || I0("select")
              , I = _ ? _[s] : O;
            return d(Ya, {
                title: I,
                titleClass: pn("tab", {
                    unselected: !_
                })
            }, {
                default: ()=>{
                    var k, E;
                    return [(k = t["options-top"]) == null ? void 0 : k.call(t, {
                        tabIndex: x
                    }), v(B, _, x), (E = t["options-bottom"]) == null ? void 0 : E.call(t, {
                        tabIndex: x
                    })]
                }
            })
        }
          , y = ()=>d(fi, {
            active: a.value,
            "onUpdate:active": C=>a.value = C,
            shrink: !0,
            animated: !0,
            class: pn("tabs"),
            color: e.activeColor,
            swipeable: e.swipeable,
            onClickTab: S
        }, {
            default: ()=>[o.value.map(m)]
        })
          , w = C=>{
            const x = C.parentElement;
            x && (x.scrollTop = C.offsetTop - (x.offsetHeight - C.offsetHeight) / 2)
        }
        ;
        return f(),
        ae(a, C=>{
            const x = r.value[C];
            x && w(x)
        }
        ),
        ae(()=>e.options, f, {
            deep: !0
        }),
        ae(()=>e.modelValue, C=>{
            C !== void 0 && o.value.map(B=>{
                var _;
                return (_ = B.selected) == null ? void 0 : _[l]
            }
            ).includes(C) || f()
        }
        ),
        ()=>d("div", {
            class: pn()
        }, [p(), y()])
    }
});
const R0 = G(D0)
  , [L0,nu] = W("cell-group")
  , M0 = {
    title: String,
    inset: Boolean,
    border: z
};
var F0 = j({
    name: L0,
    inheritAttrs: !1,
    props: M0,
    setup(e, {slots: t, attrs: n}) {
        const o = ()=>{
            var r;
            return d("div", Be({
                class: [nu({
                    inset: e.inset
                }), {
                    [li]: e.border && !e.inset
                }]
            }, n, Ur()), [(r = t.default) == null ? void 0 : r.call(t)])
        }
          , a = ()=>d("div", {
            class: nu("title", {
                inset: e.inset
            })
        }, [t.title ? t.title() : e.title]);
        return ()=>e.title || t.title ? d(Fe, null, [a(), o()]) : o()
    }
});
const V0 = G(F0)
  , [N0,br] = W("circle");
let H0 = 0;
const ou = e=>Math.min(Math.max(+e, 0), 100);
function z0(e, t) {
    const n = e ? 1 : 0;
    return `M ${t / 2} ${t / 2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const j0 = {
    text: String,
    size: q,
    fill: X("none"),
    rate: ce(100),
    speed: ce(0),
    color: [String, Object],
    clockwise: z,
    layerColor: String,
    currentRate: nt(0),
    strokeWidth: ce(40),
    strokeLinecap: String,
    startPosition: X("top")
};
var U0 = j({
    name: N0,
    props: j0,
    emits: ["update:currentRate"],
    setup(e, {emit: t, slots: n}) {
        const o = `van-circle-${H0++}`
          , a = $(()=>+e.strokeWidth + 1e3)
          , r = $(()=>z0(e.clockwise, a.value))
          , i = $(()=>{
            const h = {
                top: 0,
                right: 90,
                bottom: 180,
                left: 270
            }[e.startPosition];
            if (h)
                return {
                    transform: `rotate(${h}deg)`
                }
        }
        );
        ae(()=>e.rate, f=>{
            let h;
            const g = Date.now()
              , S = e.currentRate
              , p = ou(f)
              , b = Math.abs((S - p) * 1e3 / +e.speed)
              , v = ()=>{
                const m = Date.now()
                  , w = Math.min((m - g) / b, 1) * (p - S) + S;
                t("update:currentRate", ou(parseFloat(w.toFixed(1)))),
                (p > S ? w < p : w > p) && (h = yt(v))
            }
            ;
            e.speed ? (h && ii(h),
            h = yt(v)) : t("update:currentRate", p)
        }
        , {
            immediate: !0
        });
        const s = ()=>{
            const {strokeWidth: h, currentRate: g, strokeLinecap: S} = e
              , p = 3140 * g / 100
              , b = hn(e.color) ? `url(#${o})` : e.color
              , v = {
                stroke: b,
                strokeWidth: `${+h + 1}px`,
                strokeLinecap: S,
                strokeDasharray: `${p}px 3140px`
            };
            return d("path", {
                d: r.value,
                style: v,
                class: br("hover"),
                stroke: b
            }, null)
        }
          , l = ()=>{
            const f = {
                fill: e.fill,
                stroke: e.layerColor,
                strokeWidth: `${e.strokeWidth}px`
            };
            return d("path", {
                class: br("layer"),
                style: f,
                d: r.value
            }, null)
        }
          , c = ()=>{
            const {color: f} = e;
            if (!hn(f))
                return;
            const h = Object.keys(f).sort((g,S)=>parseFloat(g) - parseFloat(S)).map((g,S)=>d("stop", {
                key: S,
                offset: g,
                "stop-color": f[g]
            }, null));
            return d("defs", null, [d("linearGradient", {
                id: o,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
            }, [h])])
        }
          , u = ()=>{
            if (n.default)
                return n.default();
            if (e.text)
                return d("div", {
                    class: br("text")
                }, [e.text])
        }
        ;
        return ()=>d("div", {
            class: br(),
            style: In(e.size)
        }, [d("svg", {
            viewBox: `0 0 ${a.value} ${a.value}`,
            style: i.value
        }, [c(), l(), s()]), u()])
    }
});
const W0 = G(U0)
  , [uh,Y0] = W("row")
  , dh = Symbol(uh)
  , q0 = {
    tag: X("div"),
    wrap: z,
    align: String,
    gutter: {
        type: [String, Number, Array],
        default: 0
    },
    justify: String
};
var K0 = j({
    name: uh,
    props: q0,
    setup(e, {slots: t}) {
        const {children: n, linkChildren: o} = St(dh)
          , a = $(()=>{
            const s = [[]];
            let l = 0;
            return n.forEach((c,u)=>{
                l += Number(c.span),
                l > 24 ? (s.push([u]),
                l -= 24) : s[s.length - 1].push(u)
            }
            ),
            s
        }
        )
          , r = $(()=>{
            let s = 0;
            Array.isArray(e.gutter) ? s = Number(e.gutter[0]) || 0 : s = Number(e.gutter);
            const l = [];
            return s && a.value.forEach(c=>{
                const u = s * (c.length - 1) / c.length;
                c.forEach((f,h)=>{
                    if (h === 0)
                        l.push({
                            right: u
                        });
                    else {
                        const g = s - l[f - 1].right
                          , S = u - g;
                        l.push({
                            left: g,
                            right: S
                        })
                    }
                }
                )
            }
            ),
            l
        }
        )
          , i = $(()=>{
            const {gutter: s} = e
              , l = [];
            if (Array.isArray(s) && s.length > 1) {
                const c = Number(s[1]) || 0;
                if (c <= 0)
                    return l;
                a.value.forEach((u,f)=>{
                    f !== a.value.length - 1 && u.forEach(()=>{
                        l.push({
                            bottom: c
                        })
                    }
                    )
                }
                )
            }
            return l
        }
        );
        return o({
            spaces: r,
            verticalSpaces: i
        }),
        ()=>{
            const {tag: s, wrap: l, align: c, justify: u} = e;
            return d(s, {
                class: Y0({
                    [`align-${c}`]: c,
                    [`justify-${u}`]: u,
                    nowrap: !l
                })
            }, {
                default: ()=>{
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t)]
                }
            })
        }
    }
});
const [G0,X0] = W("col")
  , Q0 = {
    tag: X("div"),
    span: ce(0),
    offset: q
};
var Z0 = j({
    name: G0,
    props: Q0,
    setup(e, {slots: t}) {
        const {parent: n, index: o} = mt(dh)
          , a = $(()=>{
            if (!n)
                return;
            const {spaces: r, verticalSpaces: i} = n;
            let s = {};
            if (r && r.value && r.value[o.value]) {
                const {left: c, right: u} = r.value[o.value];
                s = {
                    paddingLeft: c ? `${c}px` : null,
                    paddingRight: u ? `${u}px` : null
                }
            }
            const {bottom: l} = i.value[o.value] || {};
            return be(s, {
                marginBottom: l ? `${l}px` : null
            })
        }
        );
        return ()=>{
            const {tag: r, span: i, offset: s} = e;
            return d(r, {
                style: a.value,
                class: X0({
                    [i]: i,
                    [`offset-${s}`]: s
                })
            }, {
                default: ()=>{
                    var l;
                    return [(l = t.default) == null ? void 0 : l.call(t)]
                }
            })
        }
    }
});
const J0 = G(Z0)
  , [fh,ew] = W("collapse")
  , hh = Symbol(fh)
  , tw = {
    border: z,
    accordion: Boolean,
    modelValue: {
        type: [String, Number, Array],
        default: ""
    }
};
var nw = j({
    name: fh,
    props: tw,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o, children: a} = St(hh)
          , r = c=>{
            t("change", c),
            t("update:modelValue", c)
        }
          , i = (c,u)=>{
            const {accordion: f, modelValue: h} = e;
            r(f ? c === h ? "" : c : u ? h.concat(c) : h.filter(g=>g !== c))
        }
          , s = (c={})=>{
            if (e.accordion)
                return;
            typeof c == "boolean" && (c = {
                expanded: c
            });
            const {expanded: u, skipDisabled: f} = c
              , g = a.filter(S=>S.disabled && f ? S.expanded.value : u ?? !S.expanded.value).map(S=>S.itemName.value);
            r(g)
        }
          , l = c=>{
            const {accordion: u, modelValue: f} = e;
            return u ? f === c : f.includes(c)
        }
        ;
        return Oe({
            toggleAll: s
        }),
        o({
            toggle: i,
            isExpanded: l
        }),
        ()=>{
            var c;
            return d("div", {
                class: [ew(), {
                    [li]: e.border
                }]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        }
    }
});
const ow = G(nw)
  , [aw,yr] = W("collapse-item")
  , rw = ["icon", "title", "value", "label", "right-icon"]
  , iw = be({}, mi, {
    name: q,
    isLink: z,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: z
});
var sw = j({
    name: aw,
    props: iw,
    setup(e, {slots: t}) {
        const n = R()
          , o = R()
          , {parent: a, index: r} = mt(hh);
        if (!a)
            return;
        const i = $(()=>{
            var p;
            return (p = e.name) != null ? p : r.value
        }
        )
          , s = $(()=>a.isExpanded(i.value))
          , l = R(s.value)
          , c = hl(()=>l.value || !e.lazyRender)
          , u = ()=>{
            s.value ? n.value && (n.value.style.height = "") : l.value = !1
        }
        ;
        ae(s, (p,b)=>{
            if (b === null)
                return;
            p && (l.value = !0),
            (p ? Pe : yt)(()=>{
                if (!o.value || !n.value)
                    return;
                const {offsetHeight: m} = o.value;
                if (m) {
                    const y = `${m}px`;
                    n.value.style.height = p ? "0" : y,
                    Zn(()=>{
                        n.value && (n.value.style.height = p ? y : "0")
                    }
                    )
                } else
                    u()
            }
            )
        }
        );
        const f = (p=!s.value)=>{
            a.toggle(i.value, p)
        }
          , h = ()=>{
            !e.disabled && !e.readonly && f()
        }
          , g = ()=>{
            const {border: p, disabled: b, readonly: v} = e
              , m = Le(e, Object.keys(mi));
            return v && (m.isLink = !1),
            (b || v) && (m.clickable = !1),
            d(nn, Be({
                role: "button",
                class: yr("title", {
                    disabled: b,
                    expanded: s.value,
                    borderless: !p
                }),
                "aria-expanded": String(s.value),
                onClick: h
            }, m), Le(t, rw))
        }
          , S = c(()=>{
            var p;
            return st(d("div", {
                ref: n,
                class: yr("wrapper"),
                onTransitionend: u
            }, [d("div", {
                ref: o,
                class: yr("content")
            }, [(p = t.default) == null ? void 0 : p.call(t)])]), [[ht, l.value]])
        }
        );
        return Oe({
            toggle: f,
            expanded: s,
            itemName: i
        }),
        ()=>d("div", {
            class: [yr({
                border: r.value && e.border
            })]
        }, [g(), S()])
    }
});
const lw = G(sw)
  , cw = G(Pb)
  , [uw,au,Ui] = W("contact-card")
  , dw = {
    tel: String,
    name: String,
    type: X("add"),
    addText: String,
    editable: z
};
var fw = j({
    name: uw,
    props: dw,
    emits: ["click"],
    setup(e, {emit: t}) {
        const n = a=>{
            e.editable && t("click", a)
        }
          , o = ()=>e.type === "add" ? e.addText || Ui("addContact") : [d("div", null, [`${Ui("name")}：${e.name}`]), d("div", null, [`${Ui("tel")}：${e.tel}`])];
        return ()=>d(nn, {
            center: !0,
            icon: e.type === "edit" ? "contact" : "add-square",
            class: au([e.type]),
            border: !1,
            isLink: e.editable,
            titleClass: au("title"),
            onClick: n
        }, {
            title: o
        })
    }
});
const hw = G(fw)
  , [gw,Fo,Nn] = W("contact-edit")
  , As = {
    tel: "",
    name: ""
}
  , mw = {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
        type: Object,
        default: ()=>be({}, As)
    },
    telValidator: {
        type: Function,
        default: Ju
    }
};
var vw = j({
    name: gw,
    props: mw,
    emits: ["save", "delete", "changeDefault"],
    setup(e, {emit: t}) {
        const n = Ge(be({}, As, e.contactInfo))
          , o = ()=>{
            e.isSaving || t("save", n)
        }
          , a = ()=>t("delete", n)
          , r = ()=>d("div", {
            class: Fo("buttons")
        }, [d(wt, {
            block: !0,
            round: !0,
            type: "primary",
            text: Nn("save"),
            class: Fo("button"),
            loading: e.isSaving,
            nativeType: "submit"
        }, null), e.isEdit && d(wt, {
            block: !0,
            round: !0,
            text: Nn("delete"),
            class: Fo("button"),
            loading: e.isDeleting,
            onClick: a
        }, null)])
          , i = ()=>d(Sl, {
            modelValue: n.isDefault,
            "onUpdate:modelValue": l=>n.isDefault = l,
            onChange: l=>t("changeDefault", l)
        }, null)
          , s = ()=>{
            if (e.showSetDefault)
                return d(nn, {
                    title: e.setDefaultLabel,
                    class: Fo("switch-cell"),
                    border: !1
                }, {
                    "right-icon": i
                })
        }
        ;
        return ae(()=>e.contactInfo, l=>be(n, As, l)),
        ()=>d(bl, {
            class: Fo(),
            onSubmit: o
        }, {
            default: ()=>[d("div", {
                class: Fo("fields")
            }, [d(Tn, {
                modelValue: n.name,
                "onUpdate:modelValue": l=>n.name = l,
                clearable: !0,
                label: Nn("name"),
                rules: [{
                    required: !0,
                    message: Nn("nameEmpty")
                }],
                maxlength: "30",
                placeholder: Nn("name")
            }, null), d(Tn, {
                modelValue: n.tel,
                "onUpdate:modelValue": l=>n.tel = l,
                clearable: !0,
                type: "tel",
                label: Nn("tel"),
                rules: [{
                    validator: e.telValidator,
                    message: Nn("telInvalid")
                }],
                placeholder: Nn("tel")
            }, null)]), s(), r()]
        })
    }
});
const bw = G(vw)
  , [yw,wn,pw] = W("contact-list")
  , ww = {
    list: Array,
    addText: String,
    modelValue: Qe,
    defaultTagText: String
};
var Sw = j({
    name: yw,
    props: ww,
    emits: ["add", "edit", "select", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = (o,a)=>{
            const r = ()=>{
                t("update:modelValue", o.id),
                t("select", o, a)
            }
              , i = ()=>d(xl, {
                class: wn("radio"),
                name: o.id,
                iconSize: 18
            }, null)
              , s = ()=>d(xe, {
                name: "edit",
                class: wn("edit"),
                onClick: c=>{
                    c.stopPropagation(),
                    t("edit", o, a)
                }
            }, null)
              , l = ()=>{
                const c = [`${o.name}，${o.tel}`];
                return o.isDefault && e.defaultTagText && c.push(d(vi, {
                    type: "primary",
                    round: !0,
                    class: wn("item-tag")
                }, {
                    default: ()=>[e.defaultTagText]
                })),
                c
            }
            ;
            return d(nn, {
                key: o.id,
                isLink: !0,
                center: !0,
                class: wn("item"),
                titleClass: wn("item-title"),
                onClick: r
            }, {
                icon: s,
                title: l,
                "right-icon": i
            })
        }
        ;
        return ()=>d("div", {
            class: wn()
        }, [d(Cl, {
            modelValue: e.modelValue,
            class: wn("group")
        }, {
            default: ()=>[e.list && e.list.map(n)]
        }), d("div", {
            class: [wn("bottom"), "van-safe-area-bottom"]
        }, [d(wt, {
            round: !0,
            block: !0,
            type: "primary",
            class: wn("add"),
            text: e.addText || pw("addContact"),
            onClick: ()=>t("add")
        }, null)])])
    }
});
const Cw = G(Sw);
function _w(e, t) {
    const {days: n} = t;
    let {hours: o, minutes: a, seconds: r, milliseconds: i} = t;
    if (e.includes("DD") ? e = e.replace("DD", Kt(n)) : o += n * 24,
    e.includes("HH") ? e = e.replace("HH", Kt(o)) : a += o * 60,
    e.includes("mm") ? e = e.replace("mm", Kt(a)) : r += a * 60,
    e.includes("ss") ? e = e.replace("ss", Kt(r)) : i += r * 1e3,
    e.includes("S")) {
        const s = Kt(i, 3);
        e.includes("SSS") ? e = e.replace("SSS", s) : e.includes("SS") ? e = e.replace("SS", s.slice(0, 2)) : e = e.replace("S", s.charAt(0))
    }
    return e
}
const [xw,kw] = W("count-down")
  , Tw = {
    time: ce(0),
    format: X("HH:mm:ss"),
    autoStart: z,
    millisecond: Boolean
};
var Pw = j({
    name: xw,
    props: Tw,
    emits: ["change", "finish"],
    setup(e, {emit: t, slots: n}) {
        const {start: o, pause: a, reset: r, current: i} = Kv({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: c=>t("change", c),
            onFinish: ()=>t("finish")
        })
          , s = $(()=>_w(e.format, i.value))
          , l = ()=>{
            r(+e.time),
            e.autoStart && o()
        }
        ;
        return ae(()=>e.time, l, {
            immediate: !0
        }),
        Oe({
            start: o,
            pause: a,
            reset: l
        }),
        ()=>d("div", {
            role: "timer",
            class: kw()
        }, [n.default ? n.default(i.value) : s.value])
    }
});
const Ew = G(Pw);
function ru(e) {
    const t = new Date(e * 1e3);
    return `${t.getFullYear()}.${Kt(t.getMonth() + 1)}.${Kt(t.getDate())}`
}
const Aw = e=>(e / 10).toFixed(e % 10 === 0 ? 0 : 1)
  , iu = e=>(e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2)
  , [Bw,sn,Wi] = W("coupon");
var Ow = j({
    name: Bw,
    props: {
        chosen: Boolean,
        coupon: ft(Object),
        disabled: Boolean,
        currency: X("¥")
    },
    setup(e) {
        const t = $(()=>{
            const {startAt: a, endAt: r} = e.coupon;
            return `${ru(a)} - ${ru(r)}`
        }
        )
          , n = $(()=>{
            const {coupon: a, currency: r} = e;
            if (a.valueDesc)
                return [a.valueDesc, d("span", null, [a.unitDesc || ""])];
            if (a.denominations) {
                const i = iu(a.denominations);
                return [d("span", null, [r]), ` ${i}`]
            }
            return a.discount ? Wi("discount", Aw(a.discount)) : ""
        }
        )
          , o = $(()=>{
            const a = iu(e.coupon.originCondition || 0);
            return a === "0" ? Wi("unlimited") : Wi("condition", a)
        }
        );
        return ()=>{
            const {chosen: a, coupon: r, disabled: i} = e
              , s = i && r.reason || r.description;
            return d("div", {
                class: sn({
                    disabled: i
                })
            }, [d("div", {
                class: sn("content")
            }, [d("div", {
                class: sn("head")
            }, [d("h2", {
                class: sn("amount")
            }, [n.value]), d("p", {
                class: sn("condition")
            }, [r.condition || o.value])]), d("div", {
                class: sn("body")
            }, [d("p", {
                class: sn("name")
            }, [r.name]), d("p", {
                class: sn("valid")
            }, [t.value]), !i && d(kl, {
                class: sn("corner"),
                modelValue: a
            }, null)])]), s && d("p", {
                class: sn("description")
            }, [s])])
        }
    }
});
const Bs = G(Ow)
  , [Iw,su,Os] = W("coupon-cell")
  , $w = {
    title: String,
    border: z,
    editable: z,
    coupons: qe(),
    currency: X("¥"),
    chosenCoupon: {
        type: [Number, Array],
        default: -1
    }
}
  , Dw = e=>{
    const {value: t, denominations: n} = e;
    return De(t) ? t : De(n) ? n : 0
}
;
function Rw({coupons: e, chosenCoupon: t, currency: n}) {
    let o = 0
      , a = !1;
    return (Array.isArray(t) ? t : [t]).forEach(r=>{
        const i = e[+r];
        i && (a = !0,
        o += Dw(i))
    }
    ),
    a ? `-${n} ${(o / 100).toFixed(2)}` : e.length === 0 ? Os("noCoupon") : Os("count", e.length)
}
var Lw = j({
    name: Iw,
    props: $w,
    setup(e) {
        return ()=>{
            const t = Array.isArray(e.chosenCoupon) ? e.chosenCoupon.length : e.coupons[+e.chosenCoupon];
            return d(nn, {
                class: su(),
                value: Rw(e),
                title: e.title || Os("title"),
                border: e.border,
                isLink: e.editable,
                valueClass: su("value", {
                    selected: t
                })
            }, null)
        }
    }
});
const Mw = G(Lw)
  , [Fw,pr] = W("empty")
  , Vw = {
    image: X("default"),
    imageSize: [Number, String, Array],
    description: String
};
var Nw = j({
    name: Fw,
    props: Vw,
    setup(e, {slots: t}) {
        const n = ()=>{
            const v = t.description ? t.description() : e.description;
            if (v)
                return d("p", {
                    class: pr("description")
                }, [v])
        }
          , o = ()=>{
            if (t.default)
                return d("div", {
                    class: pr("bottom")
                }, [t.default()])
        }
          , a = fa()
          , r = v=>`${a}-${v}`
          , i = v=>`url(#${r(v)})`
          , s = (v,m,y)=>d("stop", {
            "stop-color": v,
            offset: `${m}%`,
            "stop-opacity": y
        }, null)
          , l = (v,m)=>[s(v, 0), s(m, 100)]
          , c = v=>[d("defs", null, [d("radialGradient", {
            id: r(v),
            cx: "50%",
            cy: "54%",
            fx: "50%",
            fy: "54%",
            r: "297%",
            gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)"
        }, [s("#EBEDF0", 0), s("#F2F3F5", 100, .3)])]), d("ellipse", {
            fill: i(v),
            opacity: ".8",
            cx: "80",
            cy: "140",
            rx: "46",
            ry: "8"
        }, null)]
          , u = ()=>[d("defs", null, [d("linearGradient", {
            id: r("a"),
            x1: "64%",
            y1: "100%",
            x2: "64%"
        }, [s("#FFF", 0, .5), s("#F2F3F5", 100)])]), d("g", {
            opacity: ".8"
        }, [d("path", {
            d: "M36 131V53H16v20H2v58h34z",
            fill: i("a")
        }, null), d("path", {
            d: "M123 15h22v14h9v77h-31V15z",
            fill: i("a")
        }, null)])]
          , f = ()=>[d("defs", null, [d("linearGradient", {
            id: r("b"),
            x1: "64%",
            y1: "97%",
            x2: "64%",
            y2: "0%"
        }, [s("#F2F3F5", 0, .3), s("#F2F3F5", 100)])]), d("g", {
            opacity: ".8"
        }, [d("path", {
            d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
            fill: i("b")
        }, null), d("path", {
            d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
            fill: i("b")
        }, null)])]
          , h = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            id: r(1),
            x1: "64%",
            y1: "100%",
            x2: "64%"
        }, [s("#FFF", 0, .5), s("#F2F3F5", 100)]), d("linearGradient", {
            id: r(2),
            x1: "50%",
            x2: "50%",
            y2: "84%"
        }, [s("#EBEDF0", 0), s("#DCDEE0", 100, 0)]), d("linearGradient", {
            id: r(3),
            x1: "100%",
            x2: "100%",
            y2: "100%"
        }, [l("#EAEDF0", "#DCDEE0")]), d("radialGradient", {
            id: r(4),
            cx: "50%",
            cy: "0%",
            fx: "50%",
            fy: "0%",
            r: "100%",
            gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
        }, [s("#EBEDF0", 0), s("#FFF", 100, 0)])]), d("g", {
            fill: "none"
        }, [u(), d("path", {
            fill: i(4),
            d: "M0 139h160v21H0z"
        }, null), d("path", {
            d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
            fill: i(2)
        }, null), d("g", {
            opacity: ".6",
            "stroke-linecap": "round",
            "stroke-width": "7"
        }, [d("path", {
            d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
            stroke: i(3)
        }, null), d("path", {
            d: "M53 36a34 34 0 0 0 0 48",
            stroke: i(3)
        }, null), d("path", {
            d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
            stroke: i(3)
        }, null), d("path", {
            d: "M106 84a34 34 0 0 0 0-48",
            stroke: i(3)
        }, null)]), d("g", {
            transform: "translate(31 105)"
        }, [d("rect", {
            fill: "#EBEDF0",
            width: "98",
            height: "34",
            rx: "2"
        }, null), d("rect", {
            fill: "#FFF",
            x: "9",
            y: "8",
            width: "80",
            height: "18",
            rx: "1.1"
        }, null), d("rect", {
            fill: "#EBEDF0",
            x: "15",
            y: "12",
            width: "18",
            height: "6",
            rx: "1.1"
        }, null)])])])
          , g = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: r(5)
        }, [l("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
            x1: "95%",
            y1: "48%",
            x2: "5.5%",
            y2: "51%",
            id: r(6)
        }, [l("#EAEDF1", "#DCDEE0")]), d("linearGradient", {
            y1: "45%",
            x2: "100%",
            y2: "54%",
            id: r(7)
        }, [l("#EAEDF1", "#DCDEE0")])]), u(), f(), d("g", {
            transform: "translate(36 50)",
            fill: "none"
        }, [d("g", {
            transform: "translate(8)"
        }, [d("rect", {
            fill: "#EBEDF0",
            opacity: ".6",
            x: "38",
            y: "13",
            width: "36",
            height: "53",
            rx: "2"
        }, null), d("rect", {
            fill: i(5),
            width: "64",
            height: "66",
            rx: "2"
        }, null), d("rect", {
            fill: "#FFF",
            x: "6",
            y: "6",
            width: "52",
            height: "55",
            rx: "1"
        }, null), d("g", {
            transform: "translate(15 17)",
            fill: i(6)
        }, [d("rect", {
            width: "34",
            height: "6",
            rx: "1"
        }, null), d("path", {
            d: "M0 14h34v6H0z"
        }, null), d("rect", {
            y: "28",
            width: "34",
            height: "6",
            rx: "1"
        }, null)])]), d("rect", {
            fill: i(7),
            y: "61",
            width: "88",
            height: "28",
            rx: "1"
        }, null), d("rect", {
            fill: "#F7F8FA",
            x: "29",
            y: "72",
            width: "30",
            height: "6",
            rx: "1"
        }, null)])])
          , S = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: r(8)
        }, [l("#EAEDF1", "#DCDEE0")])]), u(), f(), c("c"), d("path", {
            d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
            fill: i(8)
        }, null)])
          , p = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            x1: "50%",
            y1: "100%",
            x2: "50%",
            id: r(9)
        }, [l("#EEE", "#D8D8D8")]), d("linearGradient", {
            x1: "100%",
            y1: "50%",
            y2: "50%",
            id: r(10)
        }, [l("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: r(11)
        }, [l("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: r(12)
        }, [l("#FFF", "#F7F8FA")])]), u(), f(), c("d"), d("g", {
            transform: "rotate(-45 113 -4)",
            fill: "none"
        }, [d("rect", {
            fill: i(9),
            x: "24",
            y: "52.8",
            width: "5.8",
            height: "19",
            rx: "1"
        }, null), d("rect", {
            fill: i(10),
            x: "22.1",
            y: "67.3",
            width: "9.9",
            height: "28",
            rx: "1"
        }, null), d("circle", {
            stroke: i(11),
            "stroke-width": "8",
            cx: "27",
            cy: "27",
            r: "27"
        }, null), d("circle", {
            fill: i(12),
            cx: "27",
            cy: "27",
            r: "16"
        }, null), d("path", {
            d: "M37 7c-8 0-15 5-16 12",
            stroke: i(11),
            "stroke-width": "3",
            opacity: ".5",
            "stroke-linecap": "round",
            transform: "rotate(45 29 13)"
        }, null)])])
          , b = ()=>{
            var v;
            if (t.image)
                return t.image();
            const m = {
                error: S,
                search: p,
                network: h,
                default: g
            };
            return ((v = m[e.image]) == null ? void 0 : v.call(m)) || d("img", {
                src: e.image
            }, null)
        }
        ;
        return ()=>d("div", {
            class: pr()
        }, [d("div", {
            class: pr("image"),
            style: In(e.imageSize)
        }, [b()]), n(), o()])
    }
});
const gh = G(Nw)
  , [Hw,ln,Vo] = W("coupon-list")
  , zw = {
    code: X(""),
    coupons: qe(),
    currency: X("¥"),
    showCount: z,
    emptyImage: String,
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: qe(),
    showExchangeBar: z,
    showCloseButton: z,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: nt(1),
    exchangeButtonText: String,
    displayedCouponIndex: nt(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    chosenCoupon: {
        type: [Number, Array],
        default: -1
    }
};
var jw = j({
    name: Hw,
    props: zw,
    emits: ["change", "exchange", "update:code"],
    setup(e, {emit: t, slots: n}) {
        const [o,a] = er()
          , r = R()
          , i = R()
          , s = R(0)
          , l = R(0)
          , c = R(e.code)
          , u = $(()=>!e.exchangeButtonLoading && (e.exchangeButtonDisabled || !c.value || c.value.length < e.exchangeMinLength))
          , f = ()=>{
            const y = Ve(r).height
              , w = Ve(i).height + 44;
            l.value = (y > w ? y : zt.value) - w
        }
          , h = ()=>{
            t("exchange", c.value),
            e.code || (c.value = "")
        }
          , g = m=>{
            Pe(()=>{
                var y;
                return (y = o.value[m]) == null ? void 0 : y.scrollIntoView()
            }
            )
        }
          , S = ()=>d(gh, {
            image: e.emptyImage
        }, {
            default: ()=>[d("p", {
                class: ln("empty-tip")
            }, [Vo("noCoupon")])]
        })
          , p = ()=>{
            if (e.showExchangeBar)
                return d("div", {
                    ref: i,
                    class: ln("exchange-bar")
                }, [d(Tn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": m=>c.value = m,
                    clearable: !0,
                    border: !1,
                    class: ln("field"),
                    placeholder: e.inputPlaceholder || Vo("placeholder"),
                    maxlength: "20"
                }, null), d(wt, {
                    plain: !0,
                    type: "primary",
                    class: ln("exchange"),
                    text: e.exchangeButtonText || Vo("exchange"),
                    loading: e.exchangeButtonLoading,
                    disabled: u.value,
                    onClick: h
                }, null)])
        }
          , b = ()=>{
            const {coupons: m, chosenCoupon: y} = e
              , w = e.showCount ? ` (${m.length})` : ""
              , C = (e.enabledTitle || Vo("enable")) + w
              , x = (B=[],_=0)=>B.includes(_) ? B.filter(O=>O !== _) : [...B, _];
            return d(Ya, {
                title: C
            }, {
                default: ()=>{
                    var B;
                    return [d("div", {
                        class: ln("list", {
                            "with-bottom": e.showCloseButton
                        }),
                        style: {
                            height: `${l.value}px`
                        }
                    }, [m.map((_,O)=>d(Bs, {
                        key: _.id,
                        ref: a(O),
                        coupon: _,
                        chosen: Array.isArray(y) ? y.includes(O) : O === y,
                        currency: e.currency,
                        onClick: ()=>t("change", Array.isArray(y) ? x(y, O) : O)
                    }, null)), !m.length && S(), (B = n["list-footer"]) == null ? void 0 : B.call(n)])]
                }
            })
        }
          , v = ()=>{
            const {disabledCoupons: m} = e
              , y = e.showCount ? ` (${m.length})` : ""
              , w = (e.disabledTitle || Vo("disabled")) + y;
            return d(Ya, {
                title: w
            }, {
                default: ()=>{
                    var C;
                    return [d("div", {
                        class: ln("list", {
                            "with-bottom": e.showCloseButton
                        }),
                        style: {
                            height: `${l.value}px`
                        }
                    }, [m.map(x=>d(Bs, {
                        disabled: !0,
                        key: x.id,
                        coupon: x,
                        currency: e.currency
                    }, null)), !m.length && S(), (C = n["disabled-list-footer"]) == null ? void 0 : C.call(n)])]
                }
            })
        }
        ;
        return ae(()=>e.code, m=>{
            c.value = m
        }
        ),
        ae(zt, f),
        ae(c, m=>t("update:code", m)),
        ae(()=>e.displayedCouponIndex, g),
        tt(()=>{
            f(),
            g(e.displayedCouponIndex)
        }
        ),
        ()=>d("div", {
            ref: r,
            class: ln()
        }, [p(), d(fi, {
            active: s.value,
            "onUpdate:active": m=>s.value = m,
            class: ln("tab")
        }, {
            default: ()=>[b(), v()]
        }), d("div", {
            class: ln("bottom")
        }, [n["list-button"] ? n["list-button"]() : st(d(wt, {
            round: !0,
            block: !0,
            type: "primary",
            class: ln("close"),
            text: e.closeButtonText || Vo("close"),
            onClick: ()=>t("change", Array.isArray(e.chosenCoupon) ? [] : -1)
        }, null), [[ht, e.showCloseButton]])])])
    }
});
const Uw = G(jw)
  , lu = new Date().getFullYear()
  , [Ww] = W("date-picker")
  , Yw = be({}, ih, {
    columnsType: {
        type: Array,
        default: ()=>["year", "month", "day"]
    },
    minDate: {
        type: Date,
        default: ()=>new Date(lu - 10,0,1),
        validator: La
    },
    maxDate: {
        type: Date,
        default: ()=>new Date(lu + 10,11,31),
        validator: La
    }
});
var qw = j({
    name: Ww,
    props: Yw,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R(e.modelValue)
          , a = R(!1)
          , r = R()
          , i = ()=>{
            const w = e.minDate.getFullYear()
              , C = e.maxDate.getFullYear();
            return Qo(w, C, "year", e.formatter, e.filter)
        }
          , s = w=>w === e.minDate.getFullYear()
          , l = w=>w === e.maxDate.getFullYear()
          , c = w=>w === e.minDate.getMonth() + 1
          , u = w=>w === e.maxDate.getMonth() + 1
          , f = w=>{
            const {minDate: C, columnsType: x} = e
              , B = x.indexOf(w)
              , _ = a.value ? e.modelValue[B] : o.value[B];
            if (_)
                return +_;
            switch (w) {
            case "year":
                return C.getFullYear();
            case "month":
                return C.getMonth() + 1;
            case "day":
                return C.getDate()
            }
        }
          , h = ()=>{
            const w = f("year")
              , C = s(w) ? e.minDate.getMonth() + 1 : 1
              , x = l(w) ? e.maxDate.getMonth() + 1 : 12;
            return Qo(C, x, "month", e.formatter, e.filter)
        }
          , g = ()=>{
            const w = f("year")
              , C = f("month")
              , x = s(w) && c(C) ? e.minDate.getDate() : 1
              , B = l(w) && u(C) ? e.maxDate.getDate() : lh(w, C);
            return Qo(x, B, "day", e.formatter, e.filter)
        }
          , S = ()=>{
            var w;
            return (w = r.value) == null ? void 0 : w.confirm()
        }
          , p = ()=>o.value
          , b = $(()=>e.columnsType.map(w=>{
            switch (w) {
            case "year":
                return i();
            case "month":
                return h();
            case "day":
                return g();
            default:
                return []
            }
        }
        ));
        ae(o, w=>{
            fn(w, e.modelValue) || t("update:modelValue", w)
        }
        ),
        ae(()=>e.modelValue, (w,C)=>{
            a.value = fn(C, o.value),
            w = ch(w, b.value),
            fn(w, o.value) || (o.value = w),
            a.value = !1
        }
        , {
            immediate: !0
        });
        const v = (...w)=>t("change", ...w)
          , m = (...w)=>t("cancel", ...w)
          , y = (...w)=>t("confirm", ...w);
        return Oe({
            confirm: S,
            getSelectedDate: p
        }),
        ()=>d(gi, Be({
            ref: r,
            modelValue: o.value,
            "onUpdate:modelValue": w=>o.value = w,
            columns: b.value,
            onChange: v,
            onCancel: m,
            onConfirm: y
        }, Le(e, sh)), n)
    }
});
const Kw = G(qw)
  , [Gw,Wt,wr] = W("dialog")
  , Xw = be({}, da, {
    title: String,
    theme: String,
    width: q,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: Qe,
    transition: X("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: z,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: z,
    closeOnClickOverlay: Boolean
})
  , Qw = [...fl, "transition", "closeOnPopstate"];
var Zw = j({
    name: Gw,
    props: Xw,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = Ge({
            confirm: !1,
            cancel: !1
        })
          , r = v=>t("update:show", v)
          , i = v=>{
            var m;
            r(!1),
            (m = e.callback) == null || m.call(e, v)
        }
          , s = v=>()=>{
            e.show && (t(v),
            e.beforeClose ? (a[v] = !0,
            lo(e.beforeClose, {
                args: [v],
                done() {
                    i(v),
                    a[v] = !1
                },
                canceled() {
                    a[v] = !1
                }
            })) : i(v))
        }
          , l = s("cancel")
          , c = s("confirm")
          , u = Mv(v=>{
            var m, y;
            if (v.target !== ((y = (m = o.value) == null ? void 0 : m.popupRef) == null ? void 0 : y.value))
                return;
            ({
                Enter: e.showConfirmButton ? c : as,
                Escape: e.showCancelButton ? l : as
            })[v.key](),
            t("keydown", v)
        }
        , ["enter", "esc"])
          , f = ()=>{
            const v = n.title ? n.title() : e.title;
            if (v)
                return d("div", {
                    class: Wt("header", {
                        isolated: !e.message && !n.default
                    })
                }, [v])
        }
          , h = v=>{
            const {message: m, allowHtml: y, messageAlign: w} = e
              , C = Wt("message", {
                "has-title": v,
                [w]: w
            })
              , x = ea(m) ? m() : m;
            return y && typeof x == "string" ? d("div", {
                class: C,
                innerHTML: x
            }, null) : d("div", {
                class: C
            }, [x])
        }
          , g = ()=>{
            if (n.default)
                return d("div", {
                    class: Wt("content")
                }, [n.default()]);
            const {title: v, message: m, allowHtml: y} = e;
            if (m) {
                const w = !!(v || n.title);
                return d("div", {
                    key: y ? 1 : 0,
                    class: Wt("content", {
                        isolated: !w
                    })
                }, [h(w)])
            }
        }
          , S = ()=>d("div", {
            class: [wf, Wt("footer")]
        }, [e.showCancelButton && d(wt, {
            size: "large",
            text: e.cancelButtonText || wr("cancel"),
            class: Wt("cancel"),
            style: {
                color: e.cancelButtonColor
            },
            loading: a.cancel,
            disabled: e.cancelButtonDisabled,
            onClick: l
        }, null), e.showConfirmButton && d(wt, {
            size: "large",
            text: e.confirmButtonText || wr("confirm"),
            class: [Wt("confirm"), {
                [Sf]: e.showCancelButton
            }],
            style: {
                color: e.confirmButtonColor
            },
            loading: a.confirm,
            disabled: e.confirmButtonDisabled,
            onClick: c
        }, null)])
          , p = ()=>d(Pf, {
            class: Wt("footer")
        }, {
            default: ()=>[e.showCancelButton && d(_s, {
                type: "warning",
                text: e.cancelButtonText || wr("cancel"),
                class: Wt("cancel"),
                color: e.cancelButtonColor,
                loading: a.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: l
            }, null), e.showConfirmButton && d(_s, {
                type: "danger",
                text: e.confirmButtonText || wr("confirm"),
                class: Wt("confirm"),
                color: e.confirmButtonColor,
                loading: a.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: c
            }, null)]
        })
          , b = ()=>n.footer ? n.footer() : e.theme === "round-button" ? p() : S();
        return ()=>{
            const {width: v, title: m, theme: y, message: w, className: C} = e;
            return d(Rt, Be({
                ref: o,
                role: "dialog",
                class: [Wt([y]), C],
                style: {
                    width: _e(v)
                },
                tabindex: 0,
                "aria-labelledby": m || w,
                onKeydown: u,
                "onUpdate:show": r
            }, Le(e, Qw)), {
                default: ()=>[f(), g(), b()]
            })
        }
    }
});
const Jw = G(Zw)
  , [e1,t1] = W("divider")
  , n1 = {
    dashed: Boolean,
    hairline: z,
    vertical: Boolean,
    contentPosition: X("center")
};
var o1 = j({
    name: e1,
    props: n1,
    setup(e, {slots: t}) {
        return ()=>{
            var n;
            return d("div", {
                role: "separator",
                class: t1({
                    dashed: e.dashed,
                    hairline: e.hairline,
                    vertical: e.vertical,
                    [`content-${e.contentPosition}`]: !!t.default && !e.vertical
                })
            }, [!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))])
        }
    }
});
const a1 = G(o1)
  , [mh,Sr] = W("dropdown-menu")
  , r1 = {
    overlay: z,
    zIndex: q,
    duration: ce(.2),
    direction: X("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: z,
    closeOnClickOverlay: z,
    swipeThreshold: q
}
  , vh = Symbol(mh);
var i1 = j({
    name: mh,
    props: r1,
    setup(e, {slots: t}) {
        const n = fa()
          , o = R()
          , a = R()
          , r = R(0)
          , {children: i, linkChildren: s} = St(vh)
          , l = ua(o)
          , c = $(()=>i.some(m=>m.state.showWrapper))
          , u = $(()=>e.swipeThreshold && i.length > +e.swipeThreshold)
          , f = $(()=>{
            if (c.value && De(e.zIndex))
                return {
                    zIndex: +e.zIndex + 1
                }
        }
        )
          , h = ()=>{
            i.forEach(m=>{
                m.toggle(!1)
            }
            )
        }
          , g = ()=>{
            e.closeOnClickOutside && h()
        }
          , S = ()=>{
            if (a.value) {
                const m = Ve(a);
                e.direction === "down" ? r.value = m.bottom : r.value = zt.value - m.top
            }
        }
          , p = ()=>{
            c.value && S()
        }
          , b = m=>{
            i.forEach((y,w)=>{
                w === m ? y.toggle() : y.state.showPopup && y.toggle(!1, {
                    immediate: !0
                })
            }
            )
        }
          , v = (m,y)=>{
            const {showPopup: w} = m.state
              , {disabled: C, titleClass: x} = m;
            return d("div", {
                id: `${n}-${y}`,
                role: "button",
                tabindex: C ? void 0 : 0,
                class: [Sr("item", {
                    disabled: C,
                    grow: u.value
                }), {
                    [pt]: !C
                }],
                onClick: ()=>{
                    C || b(y)
                }
            }, [d("span", {
                class: [Sr("title", {
                    down: w === (e.direction === "down"),
                    active: w
                }), x],
                style: {
                    color: w ? e.activeColor : ""
                }
            }, [d("div", {
                class: "van-ellipsis"
            }, [m.renderTitle()])])])
        }
        ;
        return Oe({
            close: h
        }),
        s({
            id: n,
            props: e,
            offset: r,
            updateOffset: S
        }),
        si(o, g),
        et("scroll", p, {
            target: l,
            passive: !0
        }),
        ()=>{
            var m;
            return d("div", {
                ref: o,
                class: Sr()
            }, [d("div", {
                ref: a,
                style: f.value,
                class: Sr("bar", {
                    opened: c.value,
                    scrollable: u.value
                })
            }, [i.map(v)]), (m = t.default) == null ? void 0 : m.call(t)])
        }
    }
});
const [s1,Cr] = W("dropdown-item")
  , l1 = {
    title: String,
    options: qe(),
    disabled: Boolean,
    teleport: [String, Object],
    lazyRender: z,
    modelValue: Qe,
    titleClass: Qe
};
var c1 = j({
    name: s1,
    inheritAttrs: !1,
    props: l1,
    emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const a = Ge({
            showPopup: !1,
            transition: !0,
            showWrapper: !1
        })
          , r = R()
          , {parent: i, index: s} = mt(vh);
        if (!i)
            return;
        const l = m=>()=>t(m)
          , c = l("open")
          , u = l("close")
          , f = l("opened")
          , h = ()=>{
            a.showWrapper = !1,
            t("closed")
        }
          , g = m=>{
            e.teleport && m.stopPropagation()
        }
          , S = (m=!a.showPopup,y={})=>{
            m !== a.showPopup && (a.showPopup = m,
            a.transition = !y.immediate,
            m && (i.updateOffset(),
            a.showWrapper = !0))
        }
          , p = ()=>{
            if (n.title)
                return n.title();
            if (e.title)
                return e.title;
            const m = e.options.find(y=>y.value === e.modelValue);
            return m ? m.text : ""
        }
          , b = m=>{
            const {activeColor: y} = i.props
              , {disabled: w} = m
              , C = m.value === e.modelValue
              , x = ()=>{
                w || (a.showPopup = !1,
                m.value !== e.modelValue && (t("update:modelValue", m.value),
                t("change", m.value)))
            }
              , B = ()=>{
                if (C)
                    return d(xe, {
                        class: Cr("icon"),
                        color: w ? void 0 : y,
                        name: "success"
                    }, null)
            }
            ;
            return d(nn, {
                role: "menuitem",
                key: String(m.value),
                icon: m.icon,
                title: m.text,
                class: Cr("option", {
                    active: C,
                    disabled: w
                }),
                style: {
                    color: C ? y : ""
                },
                tabindex: C ? 0 : -1,
                clickable: !w,
                onClick: x
            }, {
                value: B
            })
        }
          , v = ()=>{
            const {offset: m} = i
              , {autoLocate: y, zIndex: w, overlay: C, duration: x, direction: B, closeOnClickOverlay: _} = i.props
              , O = $n(w);
            let I = m.value;
            if (y && r.value) {
                const k = tb(r.value);
                k && (I -= Ve(k).top)
            }
            return B === "down" ? O.top = `${I}px` : O.bottom = `${I}px`,
            st(d("div", Be({
                ref: r,
                style: O,
                class: Cr([B]),
                onClick: g
            }, o), [d(Rt, {
                show: a.showPopup,
                "onUpdate:show": k=>a.showPopup = k,
                role: "menu",
                class: Cr("content"),
                overlay: C,
                position: B === "down" ? "top" : "bottom",
                duration: a.transition ? x : 0,
                lazyRender: e.lazyRender,
                overlayStyle: {
                    position: "absolute"
                },
                "aria-labelledby": `${i.id}-${s.value}`,
                closeOnClickOverlay: _,
                onOpen: c,
                onClose: u,
                onOpened: f,
                onClosed: h
            }, {
                default: ()=>{
                    var k;
                    return [e.options.map(b), (k = n.default) == null ? void 0 : k.call(n)]
                }
            })]), [[ht, a.showWrapper]])
        }
        ;
        return Oe({
            state: a,
            toggle: S,
            renderTitle: p
        }),
        ()=>e.teleport ? d(sa, {
            to: e.teleport
        }, {
            default: ()=>[v()]
        }) : v()
    }
});
const u1 = G(c1)
  , d1 = G(i1)
  , f1 = {
    gap: nt(24),
    icon: String,
    axis: X("y"),
    magnetic: String,
    offset: {
        type: Object,
        default: ()=>({
            x: -1,
            y: -1
        })
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
}
  , [h1,cu] = W("floating-bubble");
var g1 = j({
    name: h1,
    inheritAttrs: !1,
    props: f1,
    emits: ["click", "update:offset", "offsetChange"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const a = R()
          , r = R({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        })
          , i = $(()=>({
            top: e.gap,
            right: Qt.value - r.value.width - e.gap,
            bottom: zt.value - r.value.height - e.gap,
            left: e.gap
        }))
          , s = R(!1);
        let l = !1;
        const c = $(()=>{
            const y = {}
              , w = _e(r.value.x)
              , C = _e(r.value.y);
            return y.transform = `translate3d(${w}, ${C}, 0)`,
            (s.value || !l) && (y.transition = "none"),
            y
        }
        )
          , u = ()=>{
            if (!m.value)
                return;
            const {width: y, height: w} = Ve(a.value)
              , {offset: C} = e;
            r.value = {
                x: C.x > -1 ? C.x : Qt.value - y - e.gap,
                y: C.y > -1 ? C.y : zt.value - w - e.gap,
                width: y,
                height: w
            }
        }
          , f = jt();
        let h = 0
          , g = 0;
        const S = y=>{
            f.start(y),
            s.value = !0,
            h = r.value.x,
            g = r.value.y
        }
        ;
        et("touchmove", y=>{
            if (y.preventDefault(),
            f.move(y),
            e.axis !== "lock" && !f.isTap.value) {
                if (e.axis === "x" || e.axis === "xy") {
                    let C = h + f.deltaX.value;
                    C < i.value.left && (C = i.value.left),
                    C > i.value.right && (C = i.value.right),
                    r.value.x = C
                }
                if (e.axis === "y" || e.axis === "xy") {
                    let C = g + f.deltaY.value;
                    C < i.value.top && (C = i.value.top),
                    C > i.value.bottom && (C = i.value.bottom),
                    r.value.y = C
                }
                const w = Le(r.value, ["x", "y"]);
                n("update:offset", w)
            }
        }
        , {
            target: a
        });
        const b = ()=>{
            s.value = !1,
            Pe(()=>{
                if (e.magnetic === "x") {
                    const y = jr([i.value.left, i.value.right], r.value.x);
                    r.value.x = y
                }
                if (e.magnetic === "y") {
                    const y = jr([i.value.top, i.value.bottom], r.value.y);
                    r.value.y = y
                }
                if (!f.isTap.value) {
                    const y = Le(r.value, ["x", "y"]);
                    n("update:offset", y),
                    (h !== y.x || g !== y.y) && n("offsetChange", y)
                }
            }
            )
        }
          , v = y=>{
            f.isTap.value ? n("click", y) : y.stopPropagation()
        }
        ;
        tt(()=>{
            u(),
            Pe(()=>{
                l = !0
            }
            )
        }
        ),
        ae([Qt, zt, ()=>e.gap, ()=>e.offset], u, {
            deep: !0
        });
        const m = R(!0);
        return mn(()=>{
            m.value = !0
        }
        ),
        vn(()=>{
            e.teleport && (m.value = !1)
        }
        ),
        ()=>{
            const y = st(d("div", Be({
                class: cu(),
                ref: a,
                onTouchstartPassive: S,
                onTouchend: b,
                onTouchcancel: b,
                onClickCapture: v,
                style: c.value
            }, o), [t.default ? t.default() : d(Ib, {
                name: e.icon,
                class: cu("icon")
            }, null)]), [[ht, m.value]]);
            return e.teleport ? d(sa, {
                to: e.teleport
            }, {
                default: ()=>[y]
            }) : y
        }
    }
});
const m1 = G(g1)
  , v1 = {
    height: ce(0),
    anchors: qe(),
    duration: ce(.3),
    contentDraggable: z,
    lockScroll: Boolean,
    safeAreaInsetBottom: z
}
  , [b1,_r] = W("floating-panel");
var y1 = j({
    name: b1,
    props: v1,
    emits: ["heightChange", "update:height"],
    setup(e, {emit: t, slots: n}) {
        const a = R()
          , r = R()
          , i = gl(()=>+e.height, y=>t("update:height", y))
          , s = $(()=>{
            var y, w;
            return {
                min: (y = e.anchors[0]) != null ? y : 100,
                max: (w = e.anchors[e.anchors.length - 1]) != null ? w : Math.round(zt.value * .6)
            }
        }
        )
          , l = $(()=>e.anchors.length >= 2 ? e.anchors : [s.value.min, s.value.max])
          , c = R(!1)
          , u = $(()=>({
            height: _e(s.value.max),
            transform: `translateY(calc(100% + ${_e(-i.value)}))`,
            transition: c.value ? "none" : `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
        }))
          , f = y=>{
            const w = Math.abs(y)
              , {min: C, max: x} = s.value;
            return w > x ? -(x + (w - x) * .2) : w < C ? -(C - (C - w) * .2) : y
        }
        ;
        let h, g = -1;
        const S = jt()
          , p = y=>{
            S.start(y),
            c.value = !0,
            h = -i.value,
            g = -1
        }
          , b = y=>{
            var w;
            S.move(y);
            const C = y.target;
            if (r.value === C || (w = r.value) != null && w.contains(C)) {
                const {scrollTop: B} = r.value;
                if (g = Math.max(g, B),
                !e.contentDraggable)
                    return;
                if (-h < s.value.max)
                    We(y, !0);
                else if (!(B <= 0 && S.deltaY.value > 0) || g > 0)
                    return
            }
            const x = S.deltaY.value + h;
            i.value = -f(x)
        }
          , v = ()=>{
            g = -1,
            c.value = !1,
            i.value = jr(l.value, i.value),
            i.value !== -h && t("heightChange", {
                height: i.value
            })
        }
        ;
        ae(s, ()=>{
            i.value = jr(l.value, i.value)
        }
        , {
            immediate: !0
        }),
        If(a, ()=>e.lockScroll || c.value),
        et("touchmove", b, {
            target: a
        });
        const m = ()=>n.header ? n.header() : d("div", {
            class: _r("header")
        }, [d("div", {
            class: _r("header-bar")
        }, null)]);
        return ()=>{
            var y;
            return d("div", {
                class: [_r(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }],
                ref: a,
                style: u.value,
                onTouchstartPassive: p,
                onTouchend: v,
                onTouchcancel: v
            }, [m(), d("div", {
                class: _r("content"),
                ref: r
            }, [(y = n.default) == null ? void 0 : y.call(n)])])
        }
    }
});
const p1 = G(y1)
  , [bh,w1] = W("grid")
  , S1 = {
    square: Boolean,
    center: z,
    border: z,
    gutter: q,
    reverse: Boolean,
    iconSize: q,
    direction: String,
    clickable: Boolean,
    columnNum: ce(4)
}
  , yh = Symbol(bh);
var C1 = j({
    name: bh,
    props: S1,
    setup(e, {slots: t}) {
        const {linkChildren: n} = St(yh);
        return n({
            props: e
        }),
        ()=>{
            var o;
            return d("div", {
                style: {
                    paddingLeft: _e(e.gutter)
                },
                class: [w1(), {
                    [wf]: e.border && !e.gutter
                }]
            }, [(o = t.default) == null ? void 0 : o.call(t)])
        }
    }
});
const _1 = G(C1)
  , [x1,xr] = W("grid-item")
  , k1 = be({}, co, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: q,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
});
var T1 = j({
    name: x1,
    props: k1,
    setup(e, {slots: t}) {
        const {parent: n, index: o} = mt(yh)
          , a = Eo();
        if (!n)
            return;
        const r = $(()=>{
            const {square: u, gutter: f, columnNum: h} = n.props
              , g = `${100 / +h}%`
              , S = {
                flexBasis: g
            };
            if (u)
                S.paddingTop = g;
            else if (f) {
                const p = _e(f);
                S.paddingRight = p,
                o.value >= +h && (S.marginTop = p)
            }
            return S
        }
        )
          , i = $(()=>{
            const {square: u, gutter: f} = n.props;
            if (u && f) {
                const h = _e(f);
                return {
                    right: h,
                    bottom: h,
                    height: "auto"
                }
            }
        }
        )
          , s = ()=>{
            if (t.icon)
                return d(Ao, Be({
                    dot: e.dot,
                    content: e.badge
                }, e.badgeProps), {
                    default: t.icon
                });
            if (e.icon)
                return d(xe, {
                    dot: e.dot,
                    name: e.icon,
                    size: n.props.iconSize,
                    badge: e.badge,
                    class: xr("icon"),
                    color: e.iconColor,
                    badgeProps: e.badgeProps,
                    classPrefix: e.iconPrefix
                }, null)
        }
          , l = ()=>{
            if (t.text)
                return t.text();
            if (e.text)
                return d("span", {
                    class: xr("text")
                }, [e.text])
        }
          , c = ()=>t.default ? t.default() : [s(), l()];
        return ()=>{
            const {center: u, border: f, square: h, gutter: g, reverse: S, direction: p, clickable: b} = n.props
              , v = [xr("content", [p, {
                center: u,
                square: h,
                reverse: S,
                clickable: b,
                surround: f && g
            }]), {
                [Dn]: f
            }];
            return d("div", {
                class: [xr({
                    square: h
                })],
                style: r.value
            }, [d("div", {
                role: b ? "button" : void 0,
                class: v,
                style: i.value,
                tabindex: b ? 0 : void 0,
                onClick: a
            }, [c()])])
        }
    }
});
const P1 = G(T1)
  , [E1,uu] = W("highlight")
  , A1 = {
    autoEscape: z,
    caseSensitive: Boolean,
    highlightClass: String,
    highlightTag: X("span"),
    keywords: ft([String, Array]),
    sourceString: X(""),
    tag: X("div"),
    unhighlightClass: String,
    unhighlightTag: X("span")
};
var B1 = j({
    name: E1,
    props: A1,
    setup(e) {
        const t = $(()=>{
            const {autoEscape: o, caseSensitive: a, keywords: r, sourceString: i} = e
              , s = a ? "g" : "gi";
            let c = (Array.isArray(r) ? r : [r]).filter(f=>f).reduce((f,h)=>{
                o && (h = h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                const g = new RegExp(h,s);
                let S;
                for (; S = g.exec(i); ) {
                    const p = S.index
                      , b = g.lastIndex;
                    if (p >= b) {
                        g.lastIndex++;
                        continue
                    }
                    f.push({
                        start: p,
                        end: b,
                        highlight: !0
                    })
                }
                return f
            }
            , []);
            c = c.sort((f,h)=>f.start - h.start).reduce((f,h)=>{
                const g = f[f.length - 1];
                if (!g || h.start > g.end) {
                    const S = g ? g.end : 0
                      , p = h.start;
                    S !== p && f.push({
                        start: S,
                        end: p,
                        highlight: !1
                    }),
                    f.push(h)
                } else
                    g.end = Math.max(g.end, h.end);
                return f
            }
            , []);
            const u = c[c.length - 1];
            return u || c.push({
                start: 0,
                end: i.length,
                highlight: !1
            }),
            u && u.end < i.length && c.push({
                start: u.end,
                end: i.length,
                highlight: !1
            }),
            c
        }
        )
          , n = ()=>{
            const {sourceString: o, highlightClass: a, unhighlightClass: r, highlightTag: i, unhighlightTag: s} = e;
            return t.value.map(l=>{
                const {start: c, end: u, highlight: f} = l
                  , h = o.slice(c, u);
                return f ? d(i, {
                    class: [uu("tag"), a]
                }, {
                    default: ()=>[h]
                }) : d(s, {
                    class: r
                }, {
                    default: ()=>[h]
                })
            }
            )
        }
        ;
        return ()=>{
            const {tag: o} = e;
            return d(o, {
                class: uu()
            }, {
                default: ()=>[n()]
            })
        }
    }
});
const O1 = G(B1)
  , du = e=>Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2)
  , I1 = e=>({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2
})
  , Yi = W("image-preview")[1]
  , fu = 2.6
  , $1 = {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: ft(q),
    maxZoom: ft(q),
    rootWidth: ft(Number),
    rootHeight: ft(Number),
    disableZoom: Boolean,
    doubleScale: Boolean,
    closeOnClickImage: Boolean,
    closeOnClickOverlay: Boolean,
    vertical: Boolean
};
var D1 = j({
    props: $1,
    emits: ["scale", "close", "longPress"],
    setup(e, {emit: t, slots: n}) {
        const o = Ge({
            scale: 1,
            moveX: 0,
            moveY: 0,
            moving: !1,
            zooming: !1,
            initializing: !1,
            imageRatio: 0
        })
          , a = jt()
          , r = R()
          , i = R()
          , s = R(!1)
          , l = R(!1);
        let c = 0;
        const u = $(()=>{
            const {scale: N, moveX: Z, moveY: se, moving: Ee, zooming: $e, initializing: M} = o
              , K = {
                transitionDuration: $e || Ee || M ? "0s" : ".3s"
            };
            return (N !== 1 || l.value) && (K.transform = `matrix(${N}, 0, 0, ${N}, ${Z}, ${se})`),
            K
        }
        )
          , f = $(()=>{
            if (o.imageRatio) {
                const {rootWidth: N, rootHeight: Z} = e
                  , se = s.value ? Z / o.imageRatio : N;
                return Math.max(0, (o.scale * se - N) / 2)
            }
            return 0
        }
        )
          , h = $(()=>{
            if (o.imageRatio) {
                const {rootWidth: N, rootHeight: Z} = e
                  , se = s.value ? Z : N * o.imageRatio;
                return Math.max(0, (o.scale * se - Z) / 2)
            }
            return 0
        }
        )
          , g = (N,Z)=>{
            var se;
            if (N = gt(N, +e.minZoom, +e.maxZoom + 1),
            N !== o.scale) {
                const Ee = N / o.scale;
                if (o.scale = N,
                Z) {
                    const $e = Ve((se = r.value) == null ? void 0 : se.$el)
                      , M = {
                        x: $e.width * .5,
                        y: $e.height * .5
                    }
                      , K = o.moveX - (Z.x - $e.left - M.x) * (Ee - 1)
                      , fe = o.moveY - (Z.y - $e.top - M.y) * (Ee - 1);
                    o.moveX = gt(K, -f.value, f.value),
                    o.moveY = gt(fe, -h.value, h.value)
                } else
                    o.moveX = 0,
                    o.moveY = l.value ? c : 0;
                t("scale", {
                    scale: N,
                    index: e.active
                })
            }
        }
          , S = ()=>{
            g(1)
        }
          , p = ()=>{
            const N = o.scale > 1 ? 1 : 2;
            g(N, N === 2 || l.value ? {
                x: a.startX.value,
                y: a.startY.value
            } : void 0)
        }
        ;
        let b, v, m, y, w, C, x, B, _ = !1;
        const O = N=>{
            const {touches: Z} = N;
            if (b = Z.length,
            b === 2 && e.disableZoom)
                return;
            const {offsetX: se} = a;
            a.start(N),
            v = o.moveX,
            m = o.moveY,
            B = Date.now(),
            _ = !1,
            o.moving = b === 1 && (o.scale !== 1 || l.value),
            o.zooming = b === 2 && !se.value,
            o.zooming && (y = o.scale,
            w = du(Z))
        }
          , I = N=>{
            const {touches: Z} = N;
            if (a.move(N),
            o.moving) {
                const {deltaX: se, deltaY: Ee} = a
                  , $e = se.value + v
                  , M = Ee.value + m;
                if ((e.vertical ? a.isVertical() && Math.abs(M) > h.value : a.isHorizontal() && Math.abs($e) > f.value) && !_) {
                    o.moving = !1;
                    return
                }
                _ = !0,
                We(N, !0),
                o.moveX = gt($e, -f.value, f.value),
                o.moveY = gt(M, -h.value, h.value)
            }
            if (o.zooming && (We(N, !0),
            Z.length === 2)) {
                const se = du(Z)
                  , Ee = y * se / w;
                C = I1(Z),
                g(Ee, C)
            }
        }
          , k = N=>{
            var Z;
            const se = (Z = i.value) == null ? void 0 : Z.$el;
            if (!se)
                return;
            const Ee = se.firstElementChild
              , $e = N.target === se
              , M = Ee == null ? void 0 : Ee.contains(N.target);
            !e.closeOnClickImage && M || !e.closeOnClickOverlay && $e || t("close")
        }
          , E = N=>{
            if (b > 1)
                return;
            const Z = Date.now() - B
              , se = 250;
            a.isTap.value && (Z < se ? e.doubleScale ? x ? (clearTimeout(x),
            x = null,
            p()) : x = setTimeout(()=>{
                k(N),
                x = null
            }
            , se) : k(N) : Z > _f && t("longPress"))
        }
          , D = N=>{
            let Z = !1;
            if ((o.moving || o.zooming) && (Z = !0,
            o.moving && v === o.moveX && m === o.moveY && (Z = !1),
            !N.touches.length)) {
                o.zooming && (o.moveX = gt(o.moveX, -f.value, f.value),
                o.moveY = gt(o.moveY, -h.value, h.value),
                o.zooming = !1),
                o.moving = !1,
                v = 0,
                m = 0,
                y = 1,
                o.scale < 1 && S();
                const se = +e.maxZoom;
                o.scale > se && g(se, C)
            }
            We(N, Z),
            E(N),
            a.reset()
        }
          , Q = ()=>{
            const {rootWidth: N, rootHeight: Z} = e
              , se = Z / N
              , {imageRatio: Ee} = o;
            s.value = o.imageRatio > se && Ee < fu,
            l.value = o.imageRatio > se && Ee >= fu,
            l.value && (c = (Ee * N - Z) / 2,
            o.moveY = c,
            o.initializing = !0,
            yt(()=>{
                o.initializing = !1
            }
            )),
            S()
        }
          , oe = N=>{
            const {naturalWidth: Z, naturalHeight: se} = N.target;
            o.imageRatio = se / Z,
            Q()
        }
        ;
        return ae(()=>e.active, S),
        ae(()=>e.show, N=>{
            N || S()
        }
        ),
        ae(()=>[e.rootWidth, e.rootHeight], Q),
        et("touchmove", I, {
            target: $(()=>{
                var N;
                return (N = i.value) == null ? void 0 : N.$el
            }
            )
        }),
        Oe({
            resetScale: S
        }),
        ()=>{
            const N = {
                loading: ()=>d(tn, {
                    type: "spinner"
                }, null)
            };
            return d(vl, {
                ref: i,
                class: Yi("swipe-item"),
                onTouchstartPassive: O,
                onTouchend: D,
                onTouchcancel: D
            }, {
                default: ()=>[n.image ? d("div", {
                    class: Yi("image-wrap")
                }, [n.image({
                    src: e.src,
                    onLoad: oe,
                    style: u.value
                })]) : d(bi, {
                    ref: r,
                    src: e.src,
                    fit: "contain",
                    class: Yi("image", {
                        vertical: s.value
                    }),
                    style: u.value,
                    onLoad: oe
                }, N)]
            })
        }
    }
});
const [R1,No] = W("image-preview")
  , L1 = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"]
  , M1 = {
    show: Boolean,
    loop: z,
    images: qe(),
    minZoom: ce(1 / 3),
    maxZoom: ce(3),
    overlay: z,
    vertical: Boolean,
    closeable: Boolean,
    showIndex: z,
    className: Qe,
    closeIcon: X("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: z,
    overlayClass: Qe,
    overlayStyle: Object,
    swipeDuration: ce(300),
    startPosition: ce(0),
    showIndicators: Boolean,
    closeOnPopstate: z,
    closeOnClickImage: z,
    closeOnClickOverlay: z,
    closeIconPosition: X("top-right"),
    teleport: [String, Object]
};
var ph = j({
    name: R1,
    props: M1,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = R()
          , r = Ge({
            active: 0,
            rootWidth: 0,
            rootHeight: 0,
            disableZoom: !1
        })
          , i = ()=>{
            if (o.value) {
                const y = Ve(o.value.$el);
                r.rootWidth = y.width,
                r.rootHeight = y.height,
                o.value.resize()
            }
        }
          , s = y=>t("scale", y)
          , l = y=>t("update:show", y)
          , c = ()=>{
            lo(e.beforeClose, {
                args: [r.active],
                done: ()=>l(!1)
            })
        }
          , u = y=>{
            y !== r.active && (r.active = y,
            t("change", y))
        }
          , f = ()=>{
            if (e.showIndex)
                return d("div", {
                    class: No("index")
                }, [n.index ? n.index({
                    index: r.active
                }) : `${r.active + 1} / ${e.images.length}`])
        }
          , h = ()=>{
            if (n.cover)
                return d("div", {
                    class: No("cover")
                }, [n.cover()])
        }
          , g = ()=>{
            r.disableZoom = !0
        }
          , S = ()=>{
            r.disableZoom = !1
        }
          , p = ()=>d(ml, {
            ref: o,
            lazyRender: !0,
            loop: e.loop,
            class: No("swipe"),
            vertical: e.vertical,
            duration: e.swipeDuration,
            initialSwipe: e.startPosition,
            showIndicators: e.showIndicators,
            indicatorColor: "white",
            onChange: u,
            onDragEnd: S,
            onDragStart: g
        }, {
            default: ()=>[e.images.map((y,w)=>d(D1, {
                ref: C=>{
                    w === r.active && (a.value = C)
                }
                ,
                src: y,
                show: e.show,
                active: r.active,
                maxZoom: e.maxZoom,
                minZoom: e.minZoom,
                rootWidth: r.rootWidth,
                rootHeight: r.rootHeight,
                disableZoom: r.disableZoom,
                doubleScale: e.doubleScale,
                closeOnClickImage: e.closeOnClickImage,
                closeOnClickOverlay: e.closeOnClickOverlay,
                vertical: e.vertical,
                onScale: s,
                onClose: c,
                onLongPress: ()=>t("longPress", {
                    index: w
                })
            }, {
                image: n.image
            }))]
        })
          , b = ()=>{
            if (e.closeable)
                return d(xe, {
                    role: "button",
                    name: e.closeIcon,
                    class: [No("close-icon", e.closeIconPosition), pt],
                    onClick: c
                }, null)
        }
          , v = ()=>t("closed")
          , m = (y,w)=>{
            var C;
            return (C = o.value) == null ? void 0 : C.swipeTo(y, w)
        }
        ;
        return Oe({
            resetScale: ()=>{
                var y;
                (y = a.value) == null || y.resetScale()
            }
            ,
            swipeTo: m
        }),
        tt(i),
        ae([Qt, zt], i),
        ae(()=>e.startPosition, y=>u(+y)),
        ae(()=>e.show, y=>{
            const {images: w, startPosition: C} = e;
            y ? (u(+C),
            Pe(()=>{
                i(),
                m(+C, {
                    immediate: !0
                })
            }
            )) : t("close", {
                index: r.active,
                url: w[r.active]
            })
        }
        ),
        ()=>d(Rt, Be({
            class: [No(), e.className],
            overlayClass: [No("overlay"), e.overlayClass],
            onClosed: v,
            "onUpdate:show": l
        }, Le(e, L1)), {
            default: ()=>[b(), p(), f(), h()]
        })
    }
});
let $r;
const F1 = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    vertical: !1,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    doubleScale: !0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !0,
    closeIconPosition: "top-right"
};
function V1() {
    ({instance: $r} = wl({
        setup() {
            const {state: e, toggle: t} = pl()
              , n = ()=>{
                e.images = []
            }
            ;
            return ()=>d(ph, Be(e, {
                onClosed: n,
                "onUpdate:show": t
            }), null)
        }
    }))
}
const N1 = (e,t=0)=>{
    if (Dt)
        return $r || V1(),
        e = Array.isArray(e) ? {
            images: e,
            startPosition: t
        } : e,
        $r.open(be({}, F1, e)),
        $r
}
  , H1 = G(ph);
function z1() {
    return Array(26).fill("").map((n,o)=>String.fromCharCode(65 + o))
}
const [wh,qi] = W("index-bar")
  , j1 = {
    sticky: z,
    zIndex: q,
    teleport: [String, Object],
    highlightColor: String,
    stickyOffsetTop: nt(0),
    indexList: {
        type: Array,
        default: z1
    }
}
  , Sh = Symbol(wh);
var U1 = j({
    name: wh,
    props: j1,
    emits: ["select", "change"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = R()
          , r = R("")
          , i = jt()
          , s = ua(o)
          , {children: l, linkChildren: c} = St(Sh);
        let u;
        c({
            props: e
        });
        const f = $(()=>{
            if (De(e.zIndex))
                return {
                    zIndex: +e.zIndex + 1
                }
        }
        )
          , h = $(()=>{
            if (e.highlightColor)
                return {
                    color: e.highlightColor
                }
        }
        )
          , g = (_,O)=>{
            for (let I = l.length - 1; I >= 0; I--) {
                const k = I > 0 ? O[I - 1].height : 0
                  , E = e.sticky ? k + e.stickyOffsetTop : 0;
                if (_ + E >= O[I].top)
                    return I
            }
            return -1
        }
          , S = _=>l.find(O=>String(O.index) === _)
          , p = ()=>{
            if (To(o))
                return;
            const {sticky: _, indexList: O} = e
              , I = En(s.value)
              , k = Ve(s)
              , E = l.map(Q=>Q.getRect(s.value, k));
            let D = -1;
            if (u) {
                const Q = S(u);
                if (Q) {
                    const oe = Q.getRect(s.value, k);
                    e.sticky && e.stickyOffsetTop ? D = g(oe.top - e.stickyOffsetTop, E) : D = g(oe.top, E)
                }
            } else
                D = g(I, E);
            r.value = O[D],
            _ && l.forEach((Q,oe)=>{
                const {state: N, $el: Z} = Q;
                if (oe === D || oe === D - 1) {
                    const se = Z.getBoundingClientRect();
                    N.left = se.left,
                    N.width = se.width
                } else
                    N.left = null,
                    N.width = null;
                if (oe === D)
                    N.active = !0,
                    N.top = Math.max(e.stickyOffsetTop, E[oe].top - I) + k.top;
                else if (oe === D - 1 && u === "") {
                    const se = E[D].top - I;
                    N.active = se > 0,
                    N.top = se + k.top - E[oe].height
                } else
                    N.active = !1
            }
            ),
            u = ""
        }
          , b = ()=>{
            Pe(p)
        }
        ;
        et("scroll", p, {
            target: s,
            passive: !0
        }),
        tt(b),
        ae(()=>e.indexList, b),
        ae(r, _=>{
            _ && t("change", _)
        }
        );
        const v = ()=>e.indexList.map(_=>{
            const O = _ === r.value;
            return d("span", {
                class: qi("index", {
                    active: O
                }),
                style: O ? h.value : void 0,
                "data-index": _
            }, [_])
        }
        )
          , m = _=>{
            u = String(_);
            const O = S(u);
            if (O) {
                const I = En(s.value)
                  , k = Ve(s)
                  , {offsetHeight: E} = document.documentElement;
                if (O.$el.scrollIntoView(),
                I === E - k.height) {
                    p();
                    return
                }
                e.sticky && e.stickyOffsetTop && (xo() === E - k.height ? Wa(xo()) : Wa(xo() - e.stickyOffsetTop)),
                t("select", O.index)
            }
        }
          , y = _=>{
            const {index: O} = _.dataset;
            O && m(O)
        }
          , w = _=>{
            y(_.target)
        }
        ;
        let C;
        const x = _=>{
            if (i.move(_),
            i.isVertical()) {
                We(_);
                const {clientX: O, clientY: I} = _.touches[0]
                  , k = document.elementFromPoint(O, I);
                if (k) {
                    const {index: E} = k.dataset;
                    E && C !== E && (C = E,
                    y(k))
                }
            }
        }
          , B = ()=>d("div", {
            ref: a,
            class: qi("sidebar"),
            style: f.value,
            onClick: w,
            onTouchstartPassive: i.start
        }, [v()]);
        return Oe({
            scrollTo: m
        }),
        et("touchmove", x, {
            target: a
        }),
        ()=>{
            var _;
            return d("div", {
                ref: o,
                class: qi()
            }, [e.teleport ? d(sa, {
                to: e.teleport
            }, {
                default: ()=>[B()]
            }) : B(), (_ = n.default) == null ? void 0 : _.call(n)])
        }
    }
});
const [W1,Y1] = W("index-anchor")
  , q1 = {
    index: q
};
var K1 = j({
    name: W1,
    props: q1,
    setup(e, {slots: t}) {
        const n = Ge({
            top: 0,
            left: null,
            rect: {
                top: 0,
                height: 0
            },
            width: null,
            active: !1
        })
          , o = R()
          , {parent: a} = mt(Sh);
        if (!a)
            return;
        const r = ()=>n.active && a.props.sticky
          , i = $(()=>{
            const {zIndex: l, highlightColor: c} = a.props;
            if (r())
                return be($n(l), {
                    left: n.left ? `${n.left}px` : void 0,
                    width: n.width ? `${n.width}px` : void 0,
                    transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
                    color: c
                })
        }
        );
        return Oe({
            state: n,
            getRect: (l,c)=>{
                const u = Ve(o);
                return n.rect.height = u.height,
                l === window || l === document.body ? n.rect.top = u.top + xo() : n.rect.top = u.top + En(l) - c.top,
                n.rect
            }
        }),
        ()=>{
            const l = r();
            return d("div", {
                ref: o,
                style: {
                    height: l ? `${n.rect.height}px` : void 0
                }
            }, [d("div", {
                style: i.value,
                class: [Y1({
                    sticky: l
                }), {
                    [ul]: l
                }]
            }, [t.default ? t.default() : e.index])])
        }
    }
});
const G1 = G(K1)
  , X1 = G(U1)
  , [Q1,Ho,Z1] = W("list")
  , J1 = {
    error: Boolean,
    offset: ce(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: X("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: z
};
var eS = j({
    name: Q1,
    props: J1,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {emit: t, slots: n}) {
        const o = R(e.loading)
          , a = R()
          , r = R()
          , i = By()
          , s = ua(a)
          , l = $(()=>e.scroller || s.value)
          , c = ()=>{
            Pe(()=>{
                if (o.value || e.finished || e.disabled || e.error || (i == null ? void 0 : i.value) === !1)
                    return;
                const {direction: S} = e
                  , p = +e.offset
                  , b = Ve(l);
                if (!b.height || To(a))
                    return;
                let v = !1;
                const m = Ve(r);
                S === "up" ? v = b.top - m.top <= p : v = m.bottom - b.bottom <= p,
                v && (o.value = !0,
                t("update:loading", !0),
                t("load"))
            }
            )
        }
          , u = ()=>{
            if (e.finished) {
                const S = n.finished ? n.finished() : e.finishedText;
                if (S)
                    return d("div", {
                        class: Ho("finished-text")
                    }, [S])
            }
        }
          , f = ()=>{
            t("update:error", !1),
            c()
        }
          , h = ()=>{
            if (e.error) {
                const S = n.error ? n.error() : e.errorText;
                if (S)
                    return d("div", {
                        role: "button",
                        class: Ho("error-text"),
                        tabindex: 0,
                        onClick: f
                    }, [S])
            }
        }
          , g = ()=>{
            if (o.value && !e.finished && !e.disabled)
                return d("div", {
                    class: Ho("loading")
                }, [n.loading ? n.loading() : d(tn, {
                    class: Ho("loading-icon")
                }, {
                    default: ()=>[e.loadingText || Z1("loading")]
                })])
        }
        ;
        return ae(()=>[e.loading, e.finished, e.error], c),
        i && ae(i, S=>{
            S && c()
        }
        ),
        Wd(()=>{
            o.value = e.loading
        }
        ),
        tt(()=>{
            e.immediateCheck && c()
        }
        ),
        Oe({
            check: c
        }),
        et("scroll", c, {
            target: l,
            passive: !0
        }),
        ()=>{
            var S;
            const p = (S = n.default) == null ? void 0 : S.call(n)
              , b = d("div", {
                ref: r,
                class: Ho("placeholder")
            }, null);
            return d("div", {
                ref: a,
                role: "feed",
                class: Ho(),
                "aria-busy": o.value
            }, [e.direction === "down" ? p : b, g(), u(), h(), e.direction === "up" ? p : b])
        }
    }
});
const tS = G(eS)
  , [nS,Sn] = W("nav-bar")
  , oS = {
    title: String,
    fixed: Boolean,
    zIndex: q,
    border: z,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: z
};
var aS = j({
    name: nS,
    props: oS,
    emits: ["clickLeft", "clickRight"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = ui(o, Sn)
          , r = u=>{
            e.leftDisabled || t("clickLeft", u)
        }
          , i = u=>{
            e.rightDisabled || t("clickRight", u)
        }
          , s = ()=>n.left ? n.left() : [e.leftArrow && d(xe, {
            class: Sn("arrow"),
            name: "arrow-left"
        }, null), e.leftText && d("span", {
            class: Sn("text")
        }, [e.leftText])]
          , l = ()=>n.right ? n.right() : d("span", {
            class: Sn("text")
        }, [e.rightText])
          , c = ()=>{
            const {title: u, fixed: f, border: h, zIndex: g} = e
              , S = $n(g)
              , p = e.leftArrow || e.leftText || n.left
              , b = e.rightText || n.right;
            return d("div", {
                ref: o,
                style: S,
                class: [Sn({
                    fixed: f
                }), {
                    [ul]: h,
                    "van-safe-area-top": e.safeAreaInsetTop
                }]
            }, [d("div", {
                class: Sn("content")
            }, [p && d("div", {
                class: [Sn("left", {
                    disabled: e.leftDisabled
                }), e.clickable && !e.leftDisabled ? pt : ""],
                onClick: r
            }, [s()]), d("div", {
                class: [Sn("title"), "van-ellipsis"]
            }, [n.title ? n.title() : u]), b && d("div", {
                class: [Sn("right", {
                    disabled: e.rightDisabled
                }), e.clickable && !e.rightDisabled ? pt : ""],
                onClick: i
            }, [l()])])])
        }
        ;
        return ()=>e.fixed && e.placeholder ? a(c) : c()
    }
});
const rS = G(aS)
  , [iS,ya] = W("notice-bar")
  , sS = {
    text: String,
    mode: String,
    color: String,
    delay: ce(1),
    speed: ce(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
        type: Boolean,
        default: null
    }
};
var lS = j({
    name: iS,
    props: sS,
    emits: ["close", "replay"],
    setup(e, {emit: t, slots: n}) {
        let o = 0, a = 0, r;
        const i = R()
          , s = R()
          , l = Ge({
            show: !0,
            offset: 0,
            duration: 0
        })
          , c = ()=>{
            if (n["left-icon"])
                return n["left-icon"]();
            if (e.leftIcon)
                return d(xe, {
                    class: ya("left-icon"),
                    name: e.leftIcon
                }, null)
        }
          , u = ()=>{
            if (e.mode === "closeable")
                return "cross";
            if (e.mode === "link")
                return "arrow"
        }
          , f = b=>{
            e.mode === "closeable" && (l.show = !1,
            t("close", b))
        }
          , h = ()=>{
            if (n["right-icon"])
                return n["right-icon"]();
            const b = u();
            if (b)
                return d(xe, {
                    name: b,
                    class: ya("right-icon"),
                    onClick: f
                }, null)
        }
          , g = ()=>{
            l.offset = o,
            l.duration = 0,
            yt(()=>{
                Zn(()=>{
                    l.offset = -a,
                    l.duration = (a + o) / +e.speed,
                    t("replay")
                }
                )
            }
            )
        }
          , S = ()=>{
            const b = e.scrollable === !1 && !e.wrapable
              , v = {
                transform: l.offset ? `translateX(${l.offset}px)` : "",
                transitionDuration: `${l.duration}s`
            };
            return d("div", {
                ref: i,
                role: "marquee",
                class: ya("wrap")
            }, [d("div", {
                ref: s,
                style: v,
                class: [ya("content"), {
                    "van-ellipsis": b
                }],
                onTransitionend: g
            }, [n.default ? n.default() : e.text])])
        }
          , p = ()=>{
            const {delay: b, speed: v, scrollable: m} = e
              , y = De(b) ? +b * 1e3 : 0;
            o = 0,
            a = 0,
            l.offset = 0,
            l.duration = 0,
            clearTimeout(r),
            r = setTimeout(()=>{
                if (!i.value || !s.value || m === !1)
                    return;
                const w = Ve(i).width
                  , C = Ve(s).width;
                (m || C > w) && Zn(()=>{
                    o = w,
                    a = C,
                    l.offset = -a,
                    l.duration = a / +v
                }
                )
            }
            , y)
        }
        ;
        return ci(p),
        ca(p),
        et("pageshow", p),
        Oe({
            reset: p
        }),
        ae(()=>[e.text, e.scrollable], p),
        ()=>{
            const {color: b, wrapable: v, background: m} = e;
            return st(d("div", {
                role: "alert",
                class: ya({
                    wrapable: v
                }),
                style: {
                    color: b,
                    background: m
                }
            }, [c(), S(), h()]), [[ht, l.show]])
        }
    }
});
const cS = G(lS)
  , [uS,dS] = W("notify")
  , fS = ["lockScroll", "position", "show", "teleport", "zIndex"]
  , hS = be({}, da, {
    type: X("danger"),
    color: String,
    message: q,
    position: X("top"),
    className: Qe,
    background: String,
    lockScroll: Boolean
});
var Ch = j({
    name: uS,
    props: hS,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = a=>t("update:show", a);
        return ()=>d(Rt, Be({
            class: [dS([e.type]), e.className],
            style: {
                color: e.color,
                background: e.background
            },
            overlay: !1,
            duration: .2,
            "onUpdate:show": o
        }, Le(e, fS)), {
            default: ()=>[n.default ? n.default() : e.message]
        })
    }
});
let hu, Zo;
const gS = e=>hn(e) ? e : {
    message: e
};
function mS() {
    ({instance: Zo} = wl({
        setup() {
            const {state: e, toggle: t} = pl();
            return ()=>d(Ch, Be(e, {
                "onUpdate:show": t
            }), null)
        }
    }))
}
const vS = ()=>({
    type: "danger",
    color: void 0,
    message: "",
    onClose: void 0,
    onClick: void 0,
    onOpened: void 0,
    duration: 3e3,
    position: void 0,
    className: "",
    lockScroll: !1,
    background: void 0
});
let bS = vS();
const yS = ()=>{
    Zo && Zo.toggle(!1)
}
;
function qa(e) {
    if (Dt)
        return Zo || mS(),
        e = be({}, bS, gS(e)),
        Zo.open(e),
        clearTimeout(hu),
        e.duration > 0 && (hu = setTimeout(yS, e.duration)),
        Zo
}
const pS = G(Ch)
  , [wS,Ia] = W("key")
  , SS = d("svg", {
    class: Ia("collapse-icon"),
    viewBox: "0 0 30 24"
}, [d("path", {
    d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
    fill: "currentColor"
}, null)])
  , CS = d("svg", {
    class: Ia("delete-icon"),
    viewBox: "0 0 32 22"
}, [d("path", {
    d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
    fill: "currentColor"
}, null)]);
var Ki = j({
    name: wS,
    props: {
        type: String,
        text: q,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
    },
    emits: ["press"],
    setup(e, {emit: t, slots: n}) {
        const o = R(!1)
          , a = jt()
          , r = c=>{
            a.start(c),
            o.value = !0
        }
          , i = c=>{
            a.move(c),
            a.direction.value && (o.value = !1)
        }
          , s = c=>{
            o.value && (n.default || We(c),
            o.value = !1,
            t("press", e.text, e.type))
        }
          , l = ()=>{
            if (e.loading)
                return d(tn, {
                    class: Ia("loading-icon")
                }, null);
            const c = n.default ? n.default() : e.text;
            switch (e.type) {
            case "delete":
                return c || CS;
            case "extra":
                return c || SS;
            default:
                return c
            }
        }
        ;
        return ()=>d("div", {
            class: Ia("wrapper", {
                wider: e.wider
            }),
            onTouchstartPassive: r,
            onTouchmovePassive: i,
            onTouchend: s,
            onTouchcancel: s
        }, [d("div", {
            role: "button",
            tabindex: 0,
            class: Ia([e.color, {
                large: e.large,
                active: o.value,
                delete: e.type === "delete"
            }])
        }, [l()])])
    }
});
const [_S,Hn] = W("number-keyboard")
  , xS = {
    show: Boolean,
    title: String,
    theme: X("default"),
    zIndex: q,
    teleport: [String, Object],
    maxlength: ce(1 / 0),
    modelValue: X(""),
    transition: z,
    blurOnClose: z,
    showDeleteKey: z,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: z,
    safeAreaInsetBottom: z,
    extraKey: {
        type: [String, Array],
        default: ""
    }
};
function kS(e) {
    for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1))
          , o = e[t];
        e[t] = e[n],
        e[n] = o
    }
    return e
}
var TS = j({
    name: _S,
    inheritAttrs: !1,
    props: xS,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const a = R()
          , r = ()=>{
            const b = Array(9).fill("").map((v,m)=>({
                text: m + 1
            }));
            return e.randomKeyOrder && kS(b),
            b
        }
          , i = ()=>[...r(), {
            text: e.extraKey,
            type: "extra"
        }, {
            text: 0
        }, {
            text: e.showDeleteKey ? e.deleteButtonText : "",
            type: e.showDeleteKey ? "delete" : ""
        }]
          , s = ()=>{
            const b = r()
              , {extraKey: v} = e
              , m = Array.isArray(v) ? v : [v];
            return m.length === 1 ? b.push({
                text: 0,
                wider: !0
            }, {
                text: m[0],
                type: "extra"
            }) : m.length === 2 && b.push({
                text: m[0],
                type: "extra"
            }, {
                text: 0
            }, {
                text: m[1],
                type: "extra"
            }),
            b
        }
          , l = $(()=>e.theme === "custom" ? s() : i())
          , c = ()=>{
            e.show && t("blur")
        }
          , u = ()=>{
            t("close"),
            e.blurOnClose && c()
        }
          , f = ()=>t(e.show ? "show" : "hide")
          , h = (b,v)=>{
            if (b === "") {
                v === "extra" && c();
                return
            }
            const m = e.modelValue;
            v === "delete" ? (t("delete"),
            t("update:modelValue", m.slice(0, m.length - 1))) : v === "close" ? u() : m.length < +e.maxlength && (t("input", b),
            t("update:modelValue", m + b))
        }
          , g = ()=>{
            const {title: b, theme: v, closeButtonText: m} = e
              , y = n["title-left"]
              , w = m && v === "default";
            if (b || w || y)
                return d("div", {
                    class: Hn("header")
                }, [y && d("span", {
                    class: Hn("title-left")
                }, [y()]), b && d("h2", {
                    class: Hn("title")
                }, [b]), w && d("button", {
                    type: "button",
                    class: [Hn("close"), pt],
                    onClick: u
                }, [m])])
        }
          , S = ()=>l.value.map(b=>{
            const v = {};
            return b.type === "delete" && (v.default = n.delete),
            b.type === "extra" && (v.default = n["extra-key"]),
            d(Ki, {
                key: b.text,
                text: b.text,
                type: b.type,
                wider: b.wider,
                color: b.color,
                onPress: h
            }, v)
        }
        )
          , p = ()=>{
            if (e.theme === "custom")
                return d("div", {
                    class: Hn("sidebar")
                }, [e.showDeleteKey && d(Ki, {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: h
                }, {
                    default: n.delete
                }), d(Ki, {
                    large: !0,
                    text: e.closeButtonText,
                    type: "close",
                    color: "blue",
                    loading: e.closeButtonLoading,
                    onPress: h
                }, null)])
        }
        ;
        return ae(()=>e.show, b=>{
            e.transition || t(b ? "show" : "hide")
        }
        ),
        e.hideOnClickOutside && si(a, c, {
            eventName: "touchstart"
        }),
        ()=>{
            const b = g()
              , v = d(la, {
                name: e.transition ? "van-slide-up" : ""
            }, {
                default: ()=>[st(d("div", Be({
                    ref: a,
                    style: $n(e.zIndex),
                    class: Hn({
                        unfit: !e.safeAreaInsetBottom,
                        "with-title": !!b
                    }),
                    onAnimationend: f,
                    onTouchstartPassive: ll
                }, o), [b, d("div", {
                    class: Hn("body")
                }, [d("div", {
                    class: Hn("keys")
                }, [S()]), p()])]), [[ht, e.show]])]
            });
            return e.teleport ? d(sa, {
                to: e.teleport
            }, {
                default: ()=>[v]
            }) : v
        }
    }
});
const PS = G(TS)
  , [ES,zo,gu] = W("pagination")
  , Gi = (e,t,n)=>({
    number: e,
    text: t,
    active: n
})
  , AS = {
    mode: X("multi"),
    prevText: String,
    nextText: String,
    pageCount: ce(0),
    modelValue: nt(0),
    totalItems: ce(0),
    showPageSize: ce(5),
    itemsPerPage: ce(10),
    forceEllipses: Boolean,
    showPrevButton: z,
    showNextButton: z
};
var BS = j({
    name: ES,
    props: AS,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = $(()=>{
            const {pageCount: u, totalItems: f, itemsPerPage: h} = e
              , g = +u || Math.ceil(+f / +h);
            return Math.max(1, g)
        }
        )
          , a = $(()=>{
            const u = []
              , f = o.value
              , h = +e.showPageSize
              , {modelValue: g, forceEllipses: S} = e;
            let p = 1
              , b = f;
            const v = h < f;
            v && (p = Math.max(g - Math.floor(h / 2), 1),
            b = p + h - 1,
            b > f && (b = f,
            p = b - h + 1));
            for (let m = p; m <= b; m++) {
                const y = Gi(m, m, m === g);
                u.push(y)
            }
            if (v && h > 0 && S) {
                if (p > 1) {
                    const m = Gi(p - 1, "...");
                    u.unshift(m)
                }
                if (b < f) {
                    const m = Gi(b + 1, "...");
                    u.push(m)
                }
            }
            return u
        }
        )
          , r = (u,f)=>{
            u = gt(u, 1, o.value),
            e.modelValue !== u && (t("update:modelValue", u),
            f && t("change", u))
        }
        ;
        ra(()=>r(e.modelValue));
        const i = ()=>d("li", {
            class: zo("page-desc")
        }, [n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`])
          , s = ()=>{
            const {mode: u, modelValue: f, showPrevButton: h} = e;
            if (!h)
                return;
            const g = n["prev-text"]
              , S = f === 1;
            return d("li", {
                class: [zo("item", {
                    disabled: S,
                    border: u === "simple",
                    prev: !0
                }), Ba]
            }, [d("button", {
                type: "button",
                disabled: S,
                onClick: ()=>r(f - 1, !0)
            }, [g ? g() : e.prevText || gu("prev")])])
        }
          , l = ()=>{
            const {mode: u, modelValue: f, showNextButton: h} = e;
            if (!h)
                return;
            const g = n["next-text"]
              , S = f === o.value;
            return d("li", {
                class: [zo("item", {
                    disabled: S,
                    border: u === "simple",
                    next: !0
                }), Ba]
            }, [d("button", {
                type: "button",
                disabled: S,
                onClick: ()=>r(f + 1, !0)
            }, [g ? g() : e.nextText || gu("next")])])
        }
          , c = ()=>a.value.map(u=>d("li", {
            class: [zo("item", {
                active: u.active,
                page: !0
            }), Ba]
        }, [d("button", {
            type: "button",
            "aria-current": u.active || void 0,
            onClick: ()=>r(u.number, !0)
        }, [n.page ? n.page(u) : u.text])]));
        return ()=>d("nav", {
            role: "navigation",
            class: zo()
        }, [d("ul", {
            class: zo("items")
        }, [s(), e.mode === "simple" ? i() : c(), l()])])
    }
});
const OS = G(BS)
  , [IS,pa] = W("password-input")
  , $S = {
    info: String,
    mask: z,
    value: X(""),
    gutter: q,
    length: ce(6),
    focused: Boolean,
    errorInfo: String
};
var DS = j({
    name: IS,
    props: $S,
    emits: ["focus"],
    setup(e, {emit: t}) {
        const n = a=>{
            a.stopPropagation(),
            t("focus", a)
        }
          , o = ()=>{
            const a = []
              , {mask: r, value: i, gutter: s, focused: l} = e
              , c = +e.length;
            for (let u = 0; u < c; u++) {
                const f = i[u]
                  , h = u !== 0 && !s
                  , g = l && u === i.length;
                let S;
                u !== 0 && s && (S = {
                    marginLeft: _e(s)
                }),
                a.push(d("li", {
                    class: [{
                        [Sf]: h
                    }, pa("item", {
                        focus: g
                    })],
                    style: S
                }, [r ? d("i", {
                    style: {
                        visibility: f ? "visible" : "hidden"
                    }
                }, null) : f, g && d("div", {
                    class: pa("cursor")
                }, null)]))
            }
            return a
        }
        ;
        return ()=>{
            const a = e.errorInfo || e.info;
            return d("div", {
                class: pa()
            }, [d("ul", {
                class: [pa("security"), {
                    [Ba]: !e.gutter
                }],
                onTouchstartPassive: n
            }, [o()]), a && d("div", {
                class: pa(e.errorInfo ? "error-info" : "info")
            }, [a])])
        }
    }
});
const RS = G(DS)
  , LS = G(Ny);
function on(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function El(e) {
    var t = on(e).Element;
    return e instanceof t || e instanceof Element
}
function Zt(e) {
    var t = on(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function _h(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = on(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var na = Math.round;
function Is() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function MS() {
    return !/^((?!chrome|android).)*safari/i.test(Is())
}
function Wr(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    var o = e.getBoundingClientRect()
      , a = 1
      , r = 1;
    t && Zt(e) && (a = e.offsetWidth > 0 && na(o.width) / e.offsetWidth || 1,
    r = e.offsetHeight > 0 && na(o.height) / e.offsetHeight || 1);
    var i = El(e) ? on(e) : window
      , s = i.visualViewport
      , l = !MS() && n
      , c = (o.left + (l && s ? s.offsetLeft : 0)) / a
      , u = (o.top + (l && s ? s.offsetTop : 0)) / r
      , f = o.width / a
      , h = o.height / r;
    return {
        width: f,
        height: h,
        top: u,
        right: c + f,
        bottom: u + h,
        left: c,
        x: c,
        y: u
    }
}
function xh(e) {
    var t = on(e)
      , n = t.pageXOffset
      , o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}
function FS(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function VS(e) {
    return e === on(e) || !Zt(e) ? xh(e) : FS(e)
}
function An(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function yi(e) {
    return ((El(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function NS(e) {
    return Wr(yi(e)).left + xh(e).scrollLeft
}
function Bn(e) {
    return on(e).getComputedStyle(e)
}
function Al(e) {
    var t = Bn(e)
      , n = t.overflow
      , o = t.overflowX
      , a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + o)
}
function HS(e) {
    var t = e.getBoundingClientRect()
      , n = na(t.width) / e.offsetWidth || 1
      , o = na(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}
function zS(e, t, n) {
    n === void 0 && (n = !1);
    var o = Zt(t)
      , a = Zt(t) && HS(t)
      , r = yi(t)
      , i = Wr(e, a, n)
      , s = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = {
        x: 0,
        y: 0
    };
    return (o || !o && !n) && ((An(t) !== "body" || Al(r)) && (s = VS(t)),
    Zt(t) ? (l = Wr(t, !0),
    l.x += t.clientLeft,
    l.y += t.clientTop) : r && (l.x = NS(r))),
    {
        x: i.left + s.scrollLeft - l.x,
        y: i.top + s.scrollTop - l.y,
        width: i.width,
        height: i.height
    }
}
function jS(e) {
    var t = Wr(e)
      , n = e.offsetWidth
      , o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}
function Bl(e) {
    return An(e) === "html" ? e : e.assignedSlot || e.parentNode || (_h(e) ? e.host : null) || yi(e)
}
function kh(e) {
    return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : Zt(e) && Al(e) ? e : kh(Bl(e))
}
function Dr(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = kh(e)
      , a = o === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , r = on(o)
      , i = a ? [r].concat(r.visualViewport || [], Al(o) ? o : []) : o
      , s = t.concat(i);
    return a ? s : s.concat(Dr(Bl(i)))
}
function US(e) {
    return ["table", "td", "th"].indexOf(An(e)) >= 0
}
function mu(e) {
    return !Zt(e) || Bn(e).position === "fixed" ? null : e.offsetParent
}
function WS(e) {
    var t = /firefox/i.test(Is())
      , n = /Trident/i.test(Is());
    if (n && Zt(e)) {
        var o = Bn(e);
        if (o.position === "fixed")
            return null
    }
    var a = Bl(e);
    for (_h(a) && (a = a.host); Zt(a) && ["html", "body"].indexOf(An(a)) < 0; ) {
        var r = Bn(a);
        if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
            return a;
        a = a.parentNode
    }
    return null
}
function Th(e) {
    for (var t = on(e), n = mu(e); n && US(n) && Bn(n).position === "static"; )
        n = mu(n);
    return n && (An(n) === "html" || An(n) === "body" && Bn(n).position === "static") ? t : n || WS(e) || t
}
var Jo = "top"
  , Yr = "bottom"
  , Ka = "right"
  , ko = "left"
  , Ph = "auto"
  , YS = [Jo, Yr, Ka, ko]
  , Eh = "start"
  , qr = "end"
  , qS = [].concat(YS, [Ph]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Eh, t + "-" + qr])
}, [])
  , KS = "beforeRead"
  , GS = "read"
  , XS = "afterRead"
  , QS = "beforeMain"
  , ZS = "main"
  , JS = "afterMain"
  , eC = "beforeWrite"
  , tC = "write"
  , nC = "afterWrite"
  , $s = [KS, GS, XS, QS, ZS, JS, eC, tC, nC];
function oC(e) {
    var t = new Map
      , n = new Set
      , o = [];
    e.forEach(function(r) {
        t.set(r.name, r)
    });
    function a(r) {
        n.add(r.name);
        var i = [].concat(r.requires || [], r.requiresIfExists || []);
        i.forEach(function(s) {
            if (!n.has(s)) {
                var l = t.get(s);
                l && a(l)
            }
        }),
        o.push(r)
    }
    return e.forEach(function(r) {
        n.has(r.name) || a(r)
    }),
    o
}
function aC(e) {
    var t = oC(e);
    return $s.reduce(function(n, o) {
        return n.concat(t.filter(function(a) {
            return a.phase === o
        }))
    }, [])
}
function rC(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0,
                n(e())
            })
        }
        )),
        t
    }
}
function zn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
        n[o - 1] = arguments[o];
    return [].concat(n).reduce(function(a, r) {
        return a.replace(/%s/, r)
    }, e)
}
var vo = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
  , iC = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
  , vu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function sC(e) {
    e.forEach(function(t) {
        [].concat(Object.keys(t), vu).filter(function(n, o, a) {
            return a.indexOf(n) === o
        }).forEach(function(n) {
            switch (n) {
            case "name":
                typeof t.name != "string" && console.error(zn(vo, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                break;
            case "enabled":
                typeof t.enabled != "boolean" && console.error(zn(vo, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                break;
            case "phase":
                $s.indexOf(t.phase) < 0 && console.error(zn(vo, t.name, '"phase"', "either " + $s.join(", "), '"' + String(t.phase) + '"'));
                break;
            case "fn":
                typeof t.fn != "function" && console.error(zn(vo, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                break;
            case "effect":
                t.effect != null && typeof t.effect != "function" && console.error(zn(vo, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                break;
            case "requires":
                t.requires != null && !Array.isArray(t.requires) && console.error(zn(vo, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                break;
            case "requiresIfExists":
                Array.isArray(t.requiresIfExists) || console.error(zn(vo, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                break;
            case "options":
            case "data":
                break;
            default:
                console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + vu.map(function(o) {
                    return '"' + o + '"'
                }).join(", ") + '; but "' + n + '" was provided.')
            }
            t.requires && t.requires.forEach(function(o) {
                e.find(function(a) {
                    return a.name === o
                }) == null && console.error(zn(iC, String(t.name), o, o))
            })
        })
    })
}
function lC(e, t) {
    var n = new Set;
    return e.filter(function(o) {
        var a = t(o);
        if (!n.has(a))
            return n.add(a),
            !0
    })
}
function pi(e) {
    return e.split("-")[0]
}
function cC(e) {
    var t = e.reduce(function(n, o) {
        var a = n[o.name];
        return n[o.name] = a ? Object.assign({}, a, o, {
            options: Object.assign({}, a.options, o.options),
            data: Object.assign({}, a.data, o.data)
        }) : o,
        n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
function Ah(e) {
    return e.split("-")[1]
}
function uC(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function dC(e) {
    var t = e.reference, n = e.element, o = e.placement, a = o ? pi(o) : null, r = o ? Ah(o) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
    switch (a) {
    case Jo:
        l = {
            x: i,
            y: t.y - n.height
        };
        break;
    case Yr:
        l = {
            x: i,
            y: t.y + t.height
        };
        break;
    case Ka:
        l = {
            x: t.x + t.width,
            y: s
        };
        break;
    case ko:
        l = {
            x: t.x - n.width,
            y: s
        };
        break;
    default:
        l = {
            x: t.x,
            y: t.y
        }
    }
    var c = a ? uC(a) : null;
    if (c != null) {
        var u = c === "y" ? "height" : "width";
        switch (r) {
        case Eh:
            l[c] = l[c] - (t[u] / 2 - n[u] / 2);
            break;
        case qr:
            l[c] = l[c] + (t[u] / 2 - n[u] / 2);
            break
        }
    }
    return l
}
var bu = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element."
  , fC = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash."
  , yu = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function pu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return !t.some(function(o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}
function hC(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.defaultModifiers
      , o = n === void 0 ? [] : n
      , a = t.defaultOptions
      , r = a === void 0 ? yu : a;
    return function(s, l, c) {
        c === void 0 && (c = r);
        var u = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, yu, r),
            modifiersData: {},
            elements: {
                reference: s,
                popper: l
            },
            attributes: {},
            styles: {}
        }
          , f = []
          , h = !1
          , g = {
            state: u,
            setOptions: function(v) {
                var m = typeof v == "function" ? v(u.options) : v;
                p(),
                u.options = Object.assign({}, r, u.options, m),
                u.scrollParents = {
                    reference: El(s) ? Dr(s) : s.contextElement ? Dr(s.contextElement) : [],
                    popper: Dr(l)
                };
                var y = aC(cC([].concat(o, u.options.modifiers)));
                u.orderedModifiers = y.filter(function(k) {
                    return k.enabled
                });
                {
                    var w = lC([].concat(y, u.options.modifiers), function(k) {
                        var E = k.name;
                        return E
                    });
                    if (sC(w),
                    pi(u.options.placement) === Ph) {
                        var C = u.orderedModifiers.find(function(k) {
                            var E = k.name;
                            return E === "flip"
                        });
                        C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                    }
                    var x = Bn(l)
                      , B = x.marginTop
                      , _ = x.marginRight
                      , O = x.marginBottom
                      , I = x.marginLeft;
                    [B, _, O, I].some(function(k) {
                        return parseFloat(k)
                    }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                }
                return S(),
                g.update()
            },
            forceUpdate: function() {
                if (!h) {
                    var v = u.elements
                      , m = v.reference
                      , y = v.popper;
                    if (!pu(m, y)) {
                        console.error(bu);
                        return
                    }
                    u.rects = {
                        reference: zS(m, Th(y), u.options.strategy === "fixed"),
                        popper: jS(y)
                    },
                    u.reset = !1,
                    u.placement = u.options.placement,
                    u.orderedModifiers.forEach(function(k) {
                        return u.modifiersData[k.name] = Object.assign({}, k.data)
                    });
                    for (var w = 0, C = 0; C < u.orderedModifiers.length; C++) {
                        if (w += 1,
                        w > 100) {
                            console.error(fC);
                            break
                        }
                        if (u.reset === !0) {
                            u.reset = !1,
                            C = -1;
                            continue
                        }
                        var x = u.orderedModifiers[C]
                          , B = x.fn
                          , _ = x.options
                          , O = _ === void 0 ? {} : _
                          , I = x.name;
                        typeof B == "function" && (u = B({
                            state: u,
                            options: O,
                            name: I,
                            instance: g
                        }) || u)
                    }
                }
            },
            update: rC(function() {
                return new Promise(function(b) {
                    g.forceUpdate(),
                    b(u)
                }
                )
            }),
            destroy: function() {
                p(),
                h = !0
            }
        };
        if (!pu(s, l))
            return console.error(bu),
            g;
        g.setOptions(c).then(function(b) {
            !h && c.onFirstUpdate && c.onFirstUpdate(b)
        });
        function S() {
            u.orderedModifiers.forEach(function(b) {
                var v = b.name
                  , m = b.options
                  , y = m === void 0 ? {} : m
                  , w = b.effect;
                if (typeof w == "function") {
                    var C = w({
                        state: u,
                        name: v,
                        instance: g,
                        options: y
                    })
                      , x = function() {};
                    f.push(C || x)
                }
            })
        }
        function p() {
            f.forEach(function(b) {
                return b()
            }),
            f = []
        }
        return g
    }
}
var kr = {
    passive: !0
};
function gC(e) {
    var t = e.state
      , n = e.instance
      , o = e.options
      , a = o.scroll
      , r = a === void 0 ? !0 : a
      , i = o.resize
      , s = i === void 0 ? !0 : i
      , l = on(t.elements.popper)
      , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && c.forEach(function(u) {
        u.addEventListener("scroll", n.update, kr)
    }),
    s && l.addEventListener("resize", n.update, kr),
    function() {
        r && c.forEach(function(u) {
            u.removeEventListener("scroll", n.update, kr)
        }),
        s && l.removeEventListener("resize", n.update, kr)
    }
}
var mC = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: gC,
    data: {}
};
function vC(e) {
    var t = e.state
      , n = e.name;
    t.modifiersData[n] = dC({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var bC = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: vC,
    data: {}
}
  , yC = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function pC(e) {
    var t = e.x
      , n = e.y
      , o = window
      , a = o.devicePixelRatio || 1;
    return {
        x: na(t * a) / a || 0,
        y: na(n * a) / a || 0
    }
}
function wu(e) {
    var t, n = e.popper, o = e.popperRect, a = e.placement, r = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, h = i.x, g = h === void 0 ? 0 : h, S = i.y, p = S === void 0 ? 0 : S, b = typeof u == "function" ? u({
        x: g,
        y: p
    }) : {
        x: g,
        y: p
    };
    g = b.x,
    p = b.y;
    var v = i.hasOwnProperty("x")
      , m = i.hasOwnProperty("y")
      , y = ko
      , w = Jo
      , C = window;
    if (c) {
        var x = Th(n)
          , B = "clientHeight"
          , _ = "clientWidth";
        if (x === on(n) && (x = yi(n),
        Bn(x).position !== "static" && s === "absolute" && (B = "scrollHeight",
        _ = "scrollWidth")),
        x = x,
        a === Jo || (a === ko || a === Ka) && r === qr) {
            w = Yr;
            var O = f && x === C && C.visualViewport ? C.visualViewport.height : x[B];
            p -= O - o.height,
            p *= l ? 1 : -1
        }
        if (a === ko || (a === Jo || a === Yr) && r === qr) {
            y = Ka;
            var I = f && x === C && C.visualViewport ? C.visualViewport.width : x[_];
            g -= I - o.width,
            g *= l ? 1 : -1
        }
    }
    var k = Object.assign({
        position: s
    }, c && yC)
      , E = u === !0 ? pC({
        x: g,
        y: p
    }) : {
        x: g,
        y: p
    };
    if (g = E.x,
    p = E.y,
    l) {
        var D;
        return Object.assign({}, k, (D = {},
        D[w] = m ? "0" : "",
        D[y] = v ? "0" : "",
        D.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + p + "px)" : "translate3d(" + g + "px, " + p + "px, 0)",
        D))
    }
    return Object.assign({}, k, (t = {},
    t[w] = m ? p + "px" : "",
    t[y] = v ? g + "px" : "",
    t.transform = "",
    t))
}
function wC(e) {
    var t = e.state
      , n = e.options
      , o = n.gpuAcceleration
      , a = o === void 0 ? !0 : o
      , r = n.adaptive
      , i = r === void 0 ? !0 : r
      , s = n.roundOffsets
      , l = s === void 0 ? !0 : s;
    {
        var c = Bn(t.elements.popper).transitionProperty || "";
        i && ["transform", "top", "right", "bottom", "left"].some(function(f) {
            return c.indexOf(f) >= 0
        }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
    }
    var u = {
        placement: pi(t.placement),
        variation: Ah(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: a,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wu(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: i,
        roundOffsets: l
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wu(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var SC = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: wC,
    data: {}
};
function CC(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var o = t.styles[n] || {}
          , a = t.attributes[n] || {}
          , r = t.elements[n];
        !Zt(r) || !An(r) || (Object.assign(r.style, o),
        Object.keys(a).forEach(function(i) {
            var s = a[i];
            s === !1 ? r.removeAttribute(i) : r.setAttribute(i, s === !0 ? "" : s)
        }))
    })
}
function _C(e) {
    var t = e.state
      , n = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper),
    t.styles = n,
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
        Object.keys(t.elements).forEach(function(o) {
            var a = t.elements[o]
              , r = t.attributes[o] || {}
              , i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o])
              , s = i.reduce(function(l, c) {
                return l[c] = "",
                l
            }, {});
            !Zt(a) || !An(a) || (Object.assign(a.style, s),
            Object.keys(r).forEach(function(l) {
                a.removeAttribute(l)
            }))
        })
    }
}
var xC = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: CC,
    effect: _C,
    requires: ["computeStyles"]
}
  , kC = [mC, bC, SC, xC]
  , TC = hC({
    defaultModifiers: kC
});
function PC(e, t, n) {
    var o = pi(e)
      , a = [ko, Jo].indexOf(o) >= 0 ? -1 : 1
      , r = typeof n == "function" ? n(Object.assign({}, t, {
        placement: e
    })) : n
      , i = r[0]
      , s = r[1];
    return i = i || 0,
    s = (s || 0) * a,
    [ko, Ka].indexOf(o) >= 0 ? {
        x: s,
        y: i
    } : {
        x: i,
        y: s
    }
}
function EC(e) {
    var t = e.state
      , n = e.options
      , o = e.name
      , a = n.offset
      , r = a === void 0 ? [0, 0] : a
      , i = qS.reduce(function(u, f) {
        return u[f] = PC(f, t.rects, r),
        u
    }, {})
      , s = i[t.placement]
      , l = s.x
      , c = s.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l,
    t.modifiersData.popperOffsets.y += c),
    t.modifiersData[o] = i
}
var AC = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: EC
};
const [BC,bo] = W("popover")
  , OC = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"]
  , IC = {
    show: Boolean,
    theme: X("light"),
    overlay: Boolean,
    actions: qe(),
    actionsDirection: X("vertical"),
    trigger: X("click"),
    duration: q,
    showArrow: z,
    placement: X("bottom"),
    iconPrefix: String,
    overlayClass: Qe,
    overlayStyle: Object,
    closeOnClickAction: z,
    closeOnClickOverlay: z,
    closeOnClickOutside: z,
    offset: {
        type: Array,
        default: ()=>[0, 8]
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var $C = j({
    name: BC,
    props: IC,
    emits: ["select", "touchstart", "update:show"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        let a;
        const r = R()
          , i = R()
          , s = R()
          , l = gl(()=>e.show, m=>t("update:show", m))
          , c = ()=>({
            placement: e.placement,
            modifiers: [{
                name: "computeStyles",
                options: {
                    adaptive: !1,
                    gpuAcceleration: !1
                }
            }, be({}, AC, {
                options: {
                    offset: e.offset
                }
            })]
        })
          , u = ()=>i.value && s.value ? TC(i.value, s.value.popupRef.value, c()) : null
          , f = ()=>{
            Pe(()=>{
                l.value && (a ? a.setOptions(c()) : (a = u(),
                Dt && (window.addEventListener("animationend", f),
                window.addEventListener("transitionend", f))))
            }
            )
        }
          , h = m=>{
            l.value = m
        }
          , g = ()=>{
            e.trigger === "click" && (l.value = !l.value)
        }
          , S = (m,y)=>{
            m.disabled || (t("select", m, y),
            e.closeOnClickAction && (l.value = !1))
        }
          , p = ()=>{
            l.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (l.value = !1)
        }
          , b = (m,y)=>n.action ? n.action({
            action: m,
            index: y
        }) : [m.icon && d(xe, {
            name: m.icon,
            classPrefix: e.iconPrefix,
            class: bo("action-icon")
        }, null), d("div", {
            class: [bo("action-text"), {
                [ul]: e.actionsDirection === "vertical"
            }]
        }, [m.text])]
          , v = (m,y)=>{
            const {icon: w, color: C, disabled: x, className: B} = m;
            return d("div", {
                role: "menuitem",
                class: [bo("action", {
                    disabled: x,
                    "with-icon": w
                }), {
                    [gb]: e.actionsDirection === "horizontal"
                }, B],
                style: {
                    color: C
                },
                tabindex: x ? void 0 : 0,
                "aria-disabled": x || void 0,
                onClick: ()=>S(m, y)
            }, [b(m, y)])
        }
        ;
        return tt(()=>{
            f(),
            ra(()=>{
                var m;
                r.value = (m = s.value) == null ? void 0 : m.popupRef.value
            }
            )
        }
        ),
        bn(()=>{
            a && (Dt && (window.removeEventListener("animationend", f),
            window.removeEventListener("transitionend", f)),
            a.destroy(),
            a = null)
        }
        ),
        ae(()=>[l.value, e.offset, e.placement], f),
        si([i, r], p, {
            eventName: "touchstart"
        }),
        ()=>{
            var m;
            return d(Fe, null, [d("span", {
                ref: i,
                class: bo("wrapper"),
                onClick: g
            }, [(m = n.reference) == null ? void 0 : m.call(n)]), d(Rt, Be({
                ref: s,
                show: l.value,
                class: bo([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": h
            }, o, Ur(), Le(e, OC)), {
                default: ()=>[e.showArrow && d("div", {
                    class: bo("arrow")
                }, null), d("div", {
                    role: "menu",
                    class: bo("content", e.actionsDirection)
                }, [n.default ? n.default() : e.actions.map(v)])]
            })])
        }
    }
});
const DC = G($C)
  , [RC,Xi] = W("progress")
  , LC = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: z,
    pivotColor: String,
    trackColor: String,
    strokeWidth: q,
    percentage: {
        type: q,
        default: 0,
        validator: e=>+e >= 0 && +e <= 100
    }
};
var MC = j({
    name: RC,
    props: LC,
    setup(e) {
        const t = $(()=>e.inactive ? void 0 : e.color)
          , n = ()=>{
            const {textColor: o, pivotText: a, pivotColor: r, percentage: i} = e
              , s = a ?? `${i}%`;
            if (e.showPivot && s) {
                const l = {
                    color: o,
                    left: `${+i}%`,
                    transform: `translate(-${+i}%,-50%)`,
                    background: r || t.value
                };
                return d("span", {
                    style: l,
                    class: Xi("pivot", {
                        inactive: e.inactive
                    })
                }, [s])
            }
        }
        ;
        return ()=>{
            const {trackColor: o, percentage: a, strokeWidth: r} = e
              , i = {
                background: o,
                height: _e(r)
            }
              , s = {
                width: `${a}%`,
                background: t.value
            };
            return d("div", {
                class: Xi(),
                style: i
            }, [d("span", {
                class: Xi("portion", {
                    inactive: e.inactive
                }),
                style: s
            }, null), n()])
        }
    }
});
const FC = G(MC)
  , [VC,wa,NC] = W("pull-refresh")
  , Bh = 50
  , HC = ["pulling", "loosing", "success"]
  , zC = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: ce(Bh),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: q,
    successDuration: ce(500),
    animationDuration: ce(300)
};
var jC = j({
    name: VC,
    props: zC,
    emits: ["change", "refresh", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        let o;
        const a = R()
          , r = R()
          , i = ua(a)
          , s = Ge({
            status: "normal",
            distance: 0,
            duration: 0
        })
          , l = jt()
          , c = ()=>{
            if (e.headHeight !== Bh)
                return {
                    height: `${e.headHeight}px`
                }
        }
          , u = ()=>s.status !== "loading" && s.status !== "success" && !e.disabled
          , f = w=>{
            const C = +(e.pullDistance || e.headHeight);
            return w > C && (w < C * 2 ? w = C + (w - C) / 2 : w = C * 1.5 + (w - C * 2) / 4),
            Math.round(w)
        }
          , h = (w,C)=>{
            const x = +(e.pullDistance || e.headHeight);
            s.distance = w,
            C ? s.status = "loading" : w === 0 ? s.status = "normal" : w < x ? s.status = "pulling" : s.status = "loosing",
            t("change", {
                status: s.status,
                distance: w
            })
        }
          , g = ()=>{
            const {status: w} = s;
            return w === "normal" ? "" : e[`${w}Text`] || NC(w)
        }
          , S = ()=>{
            const {status: w, distance: C} = s;
            if (n[w])
                return n[w]({
                    distance: C
                });
            const x = [];
            return HC.includes(w) && x.push(d("div", {
                class: wa("text")
            }, [g()])),
            w === "loading" && x.push(d(tn, {
                class: wa("loading")
            }, {
                default: g
            })),
            x
        }
          , p = ()=>{
            s.status = "success",
            setTimeout(()=>{
                h(0)
            }
            , +e.successDuration)
        }
          , b = w=>{
            o = En(i.value) === 0,
            o && (s.duration = 0,
            l.start(w))
        }
          , v = w=>{
            u() && b(w)
        }
          , m = w=>{
            if (u()) {
                o || b(w);
                const {deltaY: C} = l;
                l.move(w),
                o && C.value >= 0 && l.isVertical() && (We(w),
                h(f(C.value)))
            }
        }
          , y = ()=>{
            o && l.deltaY.value && u() && (s.duration = +e.animationDuration,
            s.status === "loosing" ? (h(+e.headHeight, !0),
            t("update:modelValue", !0),
            Pe(()=>t("refresh"))) : h(0))
        }
        ;
        return ae(()=>e.modelValue, w=>{
            s.duration = +e.animationDuration,
            w ? h(+e.headHeight, !0) : n.success || e.successText ? p() : h(0, !1)
        }
        ),
        et("touchmove", m, {
            target: r
        }),
        ()=>{
            var w;
            const C = {
                transitionDuration: `${s.duration}ms`,
                transform: s.distance ? `translate3d(0,${s.distance}px, 0)` : ""
            };
            return d("div", {
                ref: a,
                class: wa()
            }, [d("div", {
                ref: r,
                class: wa("track"),
                style: C,
                onTouchstartPassive: v,
                onTouchend: y,
                onTouchcancel: y
            }, [d("div", {
                class: wa("head"),
                style: c()
            }, [S()]), (w = n.default) == null ? void 0 : w.call(n)])])
        }
    }
});
const UC = G(jC)
  , [WC,Tr] = W("rate");
function YC(e, t, n, o) {
    return e >= t ? {
        status: "full",
        value: 1
    } : e + .5 >= t && n && !o ? {
        status: "half",
        value: .5
    } : e + 1 >= t && n && o ? {
        status: "half",
        value: Math.round((e - t + 1) * 1e10) / 1e10
    } : {
        status: "void",
        value: 0
    }
}
const qC = {
    size: q,
    icon: X("star"),
    color: String,
    count: ce(5),
    gutter: q,
    clearable: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: X("star-o"),
    allowHalf: Boolean,
    voidColor: String,
    touchable: z,
    iconPrefix: String,
    modelValue: nt(0),
    disabledColor: String
};
var KC = j({
    name: WC,
    props: qC,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = jt()
          , [o,a] = er()
          , r = R()
          , i = $(()=>e.readonly || e.disabled)
          , s = $(()=>i.value || !e.touchable)
          , l = $(()=>Array(+e.count).fill("").map((y,w)=>YC(e.modelValue, w + 1, e.allowHalf, e.readonly)));
        let c, u, f = Number.MAX_SAFE_INTEGER, h = Number.MIN_SAFE_INTEGER;
        const g = ()=>{
            u = Ve(r);
            const y = o.value.map(Ve);
            c = [],
            y.forEach((w,C)=>{
                f = Math.min(w.top, f),
                h = Math.max(w.top, h),
                e.allowHalf ? c.push({
                    score: C + .5,
                    left: w.left,
                    top: w.top,
                    height: w.height
                }, {
                    score: C + 1,
                    left: w.left + w.width / 2,
                    top: w.top,
                    height: w.height
                }) : c.push({
                    score: C + 1,
                    left: w.left,
                    top: w.top,
                    height: w.height
                })
            }
            )
        }
          , S = (y,w)=>{
            for (let C = c.length - 1; C > 0; C--)
                if (w >= u.top && w <= u.bottom) {
                    if (y > c[C].left && w >= c[C].top && w <= c[C].top + c[C].height)
                        return c[C].score
                } else {
                    const x = w < u.top ? f : h;
                    if (y > c[C].left && c[C].top === x)
                        return c[C].score
                }
            return e.allowHalf ? .5 : 1
        }
          , p = y=>{
            i.value || y === e.modelValue || (t("update:modelValue", y),
            t("change", y))
        }
          , b = y=>{
            s.value || (n.start(y),
            g())
        }
          , v = y=>{
            if (!s.value && (n.move(y),
            n.isHorizontal() && !n.isTap.value)) {
                const {clientX: w, clientY: C} = y.touches[0];
                We(y),
                p(S(w, C))
            }
        }
          , m = (y,w)=>{
            const {icon: C, size: x, color: B, count: _, gutter: O, voidIcon: I, disabled: k, voidColor: E, allowHalf: D, iconPrefix: Q, disabledColor: oe} = e
              , N = w + 1
              , Z = y.status === "full"
              , se = y.status === "void"
              , Ee = D && y.value > 0 && y.value < 1;
            let $e;
            O && N !== +_ && ($e = {
                paddingRight: _e(O)
            });
            const M = K=>{
                g();
                let fe = D ? S(K.clientX, K.clientY) : N;
                e.clearable && n.isTap.value && fe === e.modelValue && (fe = 0),
                p(fe)
            }
            ;
            return d("div", {
                key: w,
                ref: a(w),
                role: "radio",
                style: $e,
                class: Tr("item"),
                tabindex: k ? void 0 : 0,
                "aria-setsize": _,
                "aria-posinset": N,
                "aria-checked": !se,
                onClick: M
            }, [d(xe, {
                size: x,
                name: Z ? C : I,
                class: Tr("icon", {
                    disabled: k,
                    full: Z
                }),
                color: k ? oe : Z ? B : E,
                classPrefix: Q
            }, null), Ee && d(xe, {
                size: x,
                style: {
                    width: y.value + "em"
                },
                name: se ? I : C,
                class: Tr("icon", ["half", {
                    disabled: k,
                    full: !se
                }]),
                color: k ? oe : se ? E : B,
                classPrefix: Q
            }, null)])
        }
        ;
        return so(()=>e.modelValue),
        et("touchmove", v, {
            target: r
        }),
        ()=>d("div", {
            ref: r,
            role: "radiogroup",
            class: Tr({
                readonly: e.readonly,
                disabled: e.disabled
            }),
            tabindex: e.disabled ? void 0 : 0,
            "aria-disabled": e.disabled,
            "aria-readonly": e.readonly,
            onTouchstartPassive: b
        }, [l.value.map(m)])
    }
});
const GC = G(KC)
  , XC = {
    figureArr: qe(),
    delay: Number,
    duration: nt(2),
    isStart: Boolean,
    direction: X("down"),
    height: nt(40)
}
  , [QC,Qi] = W("rolling-text-item");
var ZC = j({
    name: QC,
    props: XC,
    setup(e) {
        const t = $(()=>e.direction === "down" ? e.figureArr.slice().reverse() : e.figureArr)
          , n = $(()=>`-${e.height * (e.figureArr.length - 1)}px`)
          , o = $(()=>({
            lineHeight: _e(e.height)
        }))
          , a = $(()=>({
            height: _e(e.height),
            "--van-translate": n.value,
            "--van-duration": e.duration + "s",
            "--van-delay": e.delay + "s"
        }));
        return ()=>d("div", {
            class: Qi([e.direction]),
            style: a.value
        }, [d("div", {
            class: Qi("box", {
                animate: e.isStart
            })
        }, [Array.isArray(t.value) && t.value.map(r=>d("div", {
            class: Qi("item"),
            style: o.value
        }, [r]))])])
    }
});
const [JC,e_] = W("rolling-text")
  , t_ = {
    startNum: nt(0),
    targetNum: Number,
    textList: qe(),
    duration: nt(2),
    autoStart: z,
    direction: X("down"),
    stopOrder: X("ltr"),
    height: nt(40)
}
  , n_ = 2;
var o_ = j({
    name: JC,
    props: t_,
    setup(e) {
        const t = $(()=>Array.isArray(e.textList) && e.textList.length)
          , n = $(()=>t.value ? e.textList[0].length : `${Math.max(e.startNum, e.targetNum)}`.length)
          , o = f=>{
            const h = [];
            for (let g = 0; g < e.textList.length; g++)
                h.push(e.textList[g][f]);
            return h
        }
          , a = $(()=>t.value ? new Array(n.value).fill("") : Kt(e.targetNum, n.value).split(""))
          , r = $(()=>Kt(e.startNum, n.value).split(""))
          , i = f=>{
            const h = +r.value[f]
              , g = +a.value[f]
              , S = [];
            for (let p = h; p <= 9; p++)
                S.push(p);
            for (let p = 0; p <= n_; p++)
                for (let b = 0; b <= 9; b++)
                    S.push(b);
            for (let p = 0; p <= g; p++)
                S.push(p);
            return S
        }
          , s = (f,h)=>e.stopOrder === "ltr" ? .2 * f : .2 * (h - 1 - f)
          , l = R(e.autoStart)
          , c = ()=>{
            l.value = !0
        }
          , u = ()=>{
            l.value = !1,
            e.autoStart && yt(()=>c())
        }
        ;
        return ae(()=>e.autoStart, f=>{
            f && c()
        }
        ),
        Oe({
            start: c,
            reset: u
        }),
        ()=>d("div", {
            class: e_()
        }, [a.value.map((f,h)=>d(ZC, {
            figureArr: t.value ? o(h) : i(h),
            duration: e.duration,
            direction: e.direction,
            isStart: l.value,
            height: e.height,
            delay: s(h, n.value)
        }, null))])
    }
});
const a_ = G(o_)
  , r_ = G(K0)
  , [i_,Sa,s_] = W("search")
  , l_ = be({}, yl, {
    label: String,
    shape: X("square"),
    leftIcon: X("search"),
    clearable: z,
    actionText: String,
    background: String,
    showAction: Boolean
});
var c_ = j({
    name: i_,
    props: l_,
    emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const a = fa()
          , r = R()
          , i = ()=>{
            n.action || (t("update:modelValue", ""),
            t("cancel"))
        }
          , s = C=>{
            C.keyCode === 13 && (We(C),
            t("search", e.modelValue))
        }
          , l = ()=>e.id || `${a}-input`
          , c = ()=>{
            if (n.label || e.label)
                return d("label", {
                    class: Sa("label"),
                    for: l()
                }, [n.label ? n.label() : e.label])
        }
          , u = ()=>{
            if (e.showAction) {
                const C = e.actionText || s_("cancel");
                return d("div", {
                    class: Sa("action"),
                    role: "button",
                    tabindex: 0,
                    onClick: i
                }, [n.action ? n.action() : C])
            }
        }
          , f = ()=>{
            var C;
            return (C = r.value) == null ? void 0 : C.blur()
        }
          , h = ()=>{
            var C;
            return (C = r.value) == null ? void 0 : C.focus()
        }
          , g = C=>t("blur", C)
          , S = C=>t("focus", C)
          , p = C=>t("clear", C)
          , b = C=>t("clickInput", C)
          , v = C=>t("clickLeftIcon", C)
          , m = C=>t("clickRightIcon", C)
          , y = Object.keys(yl)
          , w = ()=>{
            const C = be({}, o, Le(e, y), {
                id: l()
            })
              , x = B=>t("update:modelValue", B);
            return d(Tn, Be({
                ref: r,
                type: "search",
                class: Sa("field", {
                    "with-message": C.errorMessage
                }),
                border: !1,
                onBlur: g,
                onFocus: S,
                onClear: p,
                onKeypress: s,
                onClickInput: b,
                onClickLeftIcon: v,
                onClickRightIcon: m,
                "onUpdate:modelValue": x
            }, C), Le(n, ["left-icon", "right-icon"]))
        }
        ;
        return Oe({
            focus: h,
            blur: f
        }),
        ()=>{
            var C;
            return d("div", {
                class: Sa({
                    "show-action": e.showAction
                }),
                style: {
                    background: e.background
                }
            }, [(C = n.left) == null ? void 0 : C.call(n), d("div", {
                class: Sa("content", e.shape)
            }, [c(), w()]), u()])
        }
    }
});
const u_ = G(c_)
  , d_ = e=>e == null ? void 0 : e.includes("/")
  , f_ = [...fl, "round", "closeOnPopstate", "safeAreaInsetBottom"]
  , h_ = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments"
}
  , [g_,Yt,m_] = W("share-sheet")
  , v_ = be({}, da, {
    title: String,
    round: z,
    options: qe(),
    cancelText: String,
    description: String,
    closeOnPopstate: z,
    safeAreaInsetBottom: z
});
var b_ = j({
    name: g_,
    props: v_,
    emits: ["cancel", "select", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = h=>t("update:show", h)
          , a = ()=>{
            o(!1),
            t("cancel")
        }
          , r = (h,g)=>t("select", h, g)
          , i = ()=>{
            const h = n.title ? n.title() : e.title
              , g = n.description ? n.description() : e.description;
            if (h || g)
                return d("div", {
                    class: Yt("header")
                }, [h && d("h2", {
                    class: Yt("title")
                }, [h]), g && d("span", {
                    class: Yt("description")
                }, [g])])
        }
          , s = h=>d_(h) ? d("img", {
            src: h,
            class: Yt("image-icon")
        }, null) : d("div", {
            class: Yt("icon", [h])
        }, [d(xe, {
            name: h_[h] || h
        }, null)])
          , l = (h,g)=>{
            const {name: S, icon: p, className: b, description: v} = h;
            return d("div", {
                role: "button",
                tabindex: 0,
                class: [Yt("option"), b, pt],
                onClick: ()=>r(h, g)
            }, [s(p), S && d("span", {
                class: Yt("name")
            }, [S]), v && d("span", {
                class: Yt("option-description")
            }, [v])])
        }
          , c = (h,g)=>d("div", {
            class: Yt("options", {
                border: g
            })
        }, [h.map(l)])
          , u = ()=>{
            const {options: h} = e;
            return Array.isArray(h[0]) ? h.map((g,S)=>c(g, S !== 0)) : c(h)
        }
          , f = ()=>{
            var h;
            const g = (h = e.cancelText) != null ? h : m_("cancel");
            if (n.cancel || g)
                return d("button", {
                    type: "button",
                    class: Yt("cancel"),
                    onClick: a
                }, [n.cancel ? n.cancel() : g])
        }
        ;
        return ()=>d(Rt, Be({
            class: Yt(),
            position: "bottom",
            "onUpdate:show": o
        }, Le(e, f_)), {
            default: ()=>[i(), u(), f()]
        })
    }
});
const y_ = G(b_)
  , [Oh,p_] = W("sidebar")
  , Ih = Symbol(Oh)
  , w_ = {
    modelValue: ce(0)
};
var S_ = j({
    name: Oh,
    props: w_,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = St(Ih)
          , a = ()=>+e.modelValue;
        return o({
            getActive: a,
            setActive: i=>{
                i !== a() && (t("update:modelValue", i),
                t("change", i))
            }
        }),
        ()=>{
            var i;
            return d("div", {
                role: "tablist",
                class: p_()
            }, [(i = n.default) == null ? void 0 : i.call(n)])
        }
    }
});
const $h = G(S_)
  , [C_,Su] = W("sidebar-item")
  , __ = be({}, co, {
    dot: Boolean,
    title: String,
    badge: q,
    disabled: Boolean,
    badgeProps: Object
});
var x_ = j({
    name: C_,
    props: __,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Eo()
          , {parent: a, index: r} = mt(Ih);
        if (!a)
            return;
        const i = ()=>{
            e.disabled || (t("click", r.value),
            a.setActive(r.value),
            o())
        }
        ;
        return ()=>{
            const {dot: s, badge: l, title: c, disabled: u} = e
              , f = r.value === a.getActive();
            return d("div", {
                role: "tab",
                class: Su({
                    select: f,
                    disabled: u
                }),
                tabindex: u ? void 0 : 0,
                "aria-selected": f,
                onClick: i
            }, [d(Ao, Be({
                dot: s,
                class: Su("text"),
                content: l
            }, e.badgeProps), {
                default: ()=>[n.title ? n.title() : c]
            })])
        }
    }
});
const Dh = G(x_)
  , [k_,Zi,Cu] = W("signature")
  , T_ = {
    tips: String,
    type: X("png"),
    penColor: X("#000"),
    lineWidth: nt(3),
    clearButtonText: String,
    backgroundColor: X(""),
    confirmButtonText: String
}
  , P_ = ()=>{
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"))
}
;
var E_ = j({
    name: k_,
    props: T_,
    emits: ["submit", "clear", "start", "end", "signing"],
    setup(e, {emit: t}) {
        const n = R()
          , o = R()
          , a = $(()=>n.value ? n.value.getContext("2d") : null)
          , r = Dt ? P_() : !0;
        let i = 0, s = 0, l;
        const c = ()=>{
            if (!a.value)
                return !1;
            a.value.beginPath(),
            a.value.lineWidth = e.lineWidth,
            a.value.strokeStyle = e.penColor,
            l = Ve(n),
            t("start")
        }
          , u = m=>{
            if (!a.value)
                return !1;
            We(m);
            const y = m.touches[0]
              , w = y.clientX - ((l == null ? void 0 : l.left) || 0)
              , C = y.clientY - ((l == null ? void 0 : l.top) || 0);
            a.value.lineCap = "round",
            a.value.lineJoin = "round",
            a.value.lineTo(w, C),
            a.value.stroke(),
            t("signing", m)
        }
          , f = m=>{
            We(m),
            t("end")
        }
          , h = m=>{
            const y = document.createElement("canvas");
            if (y.width = m.width,
            y.height = m.height,
            e.backgroundColor) {
                const w = y.getContext("2d");
                g(w)
            }
            return m.toDataURL() === y.toDataURL()
        }
          , g = m=>{
            m && e.backgroundColor && (m.fillStyle = e.backgroundColor,
            m.fillRect(0, 0, i, s))
        }
          , S = ()=>{
            var m, y;
            const w = n.value;
            if (!w)
                return;
            const x = h(w) ? "" : ((y = (m = {
                jpg: ()=>w.toDataURL("image/jpeg", .8),
                jpeg: ()=>w.toDataURL("image/jpeg", .8)
            })[e.type]) == null ? void 0 : y.call(m)) || w.toDataURL(`image/${e.type}`);
            t("submit", {
                image: x,
                canvas: w
            })
        }
          , p = ()=>{
            a.value && (a.value.clearRect(0, 0, i, s),
            a.value.closePath(),
            g(a.value)),
            t("clear")
        }
          , b = ()=>{
            var m, y, w;
            if (r && n.value) {
                const C = n.value
                  , x = Dt ? window.devicePixelRatio : 1;
                i = C.width = (((m = o.value) == null ? void 0 : m.offsetWidth) || 0) * x,
                s = C.height = (((y = o.value) == null ? void 0 : y.offsetHeight) || 0) * x,
                (w = a.value) == null || w.scale(x, x),
                g(a.value)
            }
        }
          , v = ()=>{
            if (a.value) {
                const m = a.value.getImageData(0, 0, i, s);
                b(),
                a.value.putImageData(m, 0, 0)
            }
        }
        ;
        return ae(Qt, v),
        tt(b),
        Oe({
            resize: v,
            clear: p,
            submit: S
        }),
        ()=>d("div", {
            class: Zi()
        }, [d("div", {
            class: Zi("content"),
            ref: o
        }, [r ? d("canvas", {
            ref: n,
            onTouchstartPassive: c,
            onTouchmove: u,
            onTouchend: f
        }, null) : d("p", null, [e.tips])]), d("div", {
            class: Zi("footer")
        }, [d(wt, {
            size: "small",
            onClick: p
        }, {
            default: ()=>[e.clearButtonText || Cu("clear")]
        }), d(wt, {
            type: "primary",
            size: "small",
            onClick: S
        }, {
            default: ()=>[e.confirmButtonText || Cu("confirm")]
        })])])
    }
});
const A_ = G(E_)
  , [B_,O_] = W("skeleton-title")
  , I_ = {
    round: Boolean,
    titleWidth: q
};
var $_ = j({
    name: B_,
    props: I_,
    setup(e) {
        return ()=>d("h3", {
            class: O_([{
                round: e.round
            }]),
            style: {
                width: _e(e.titleWidth)
            }
        }, null)
    }
});
const Rh = G($_);
var D_ = Rh;
const [R_,L_] = W("skeleton-avatar")
  , M_ = {
    avatarSize: q,
    avatarShape: X("round")
};
var F_ = j({
    name: R_,
    props: M_,
    setup(e) {
        return ()=>d("div", {
            class: L_([e.avatarShape]),
            style: In(e.avatarSize)
        }, null)
    }
});
const Lh = G(F_);
var V_ = Lh;
const Ol = "100%"
  , N_ = {
    round: Boolean,
    rowWidth: {
        type: q,
        default: Ol
    }
}
  , [H_,z_] = W("skeleton-paragraph");
var j_ = j({
    name: H_,
    props: N_,
    setup(e) {
        return ()=>d("div", {
            class: z_([{
                round: e.round
            }]),
            style: {
                width: e.rowWidth
            }
        }, null)
    }
});
const Mh = G(j_);
var U_ = Mh;
const [W_,_u] = W("skeleton")
  , Y_ = "60%"
  , q_ = {
    row: ce(0),
    round: Boolean,
    title: Boolean,
    titleWidth: q,
    avatar: Boolean,
    avatarSize: q,
    avatarShape: X("round"),
    loading: z,
    animate: z,
    rowWidth: {
        type: [Number, String, Array],
        default: Ol
    }
};
var K_ = j({
    name: W_,
    inheritAttrs: !1,
    props: q_,
    setup(e, {slots: t, attrs: n}) {
        const o = ()=>{
            if (e.avatar)
                return d(V_, {
                    avatarShape: e.avatarShape,
                    avatarSize: e.avatarSize
                }, null)
        }
          , a = ()=>{
            if (e.title)
                return d(D_, {
                    round: e.round,
                    titleWidth: e.titleWidth
                }, null)
        }
          , r = l=>{
            const {rowWidth: c} = e;
            return c === Ol && l === +e.row - 1 ? Y_ : Array.isArray(c) ? c[l] : c
        }
          , i = ()=>Array(+e.row).fill("").map((l,c)=>d(U_, {
            key: c,
            round: e.round,
            rowWidth: _e(r(c))
        }, null))
          , s = ()=>t.template ? t.template() : d(Fe, null, [o(), d("div", {
            class: _u("content")
        }, [a(), i()])]);
        return ()=>{
            var l;
            return e.loading ? d("div", Be({
                class: _u({
                    animate: e.animate,
                    round: e.round
                })
            }, n), [s()]) : (l = t.default) == null ? void 0 : l.call(t)
        }
    }
});
const G_ = G(K_)
  , [X_,xu] = W("skeleton-image")
  , Q_ = {
    imageSize: q,
    imageShape: X("square")
};
var Z_ = j({
    name: X_,
    props: Q_,
    setup(e) {
        return ()=>d("div", {
            class: xu([e.imageShape]),
            style: In(e.imageSize)
        }, [d(xe, {
            name: "photo",
            class: xu("icon")
        }, null)])
    }
});
const J_ = G(Z_)
  , [ex,Ca] = W("slider")
  , tx = {
    min: ce(0),
    max: ce(100),
    step: ce(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: q,
    buttonSize: q,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
        type: [Number, Array],
        default: 0
    }
};
var nx = j({
    name: ex,
    props: tx,
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        let o, a, r;
        const i = R()
          , s = [R(), R()]
          , l = R()
          , c = jt()
          , u = $(()=>Number(e.max) - Number(e.min))
          , f = $(()=>{
            const k = e.vertical ? "width" : "height";
            return {
                background: e.inactiveColor,
                [k]: _e(e.barHeight)
            }
        }
        )
          , h = k=>e.range && Array.isArray(k)
          , g = ()=>{
            const {modelValue: k, min: E} = e;
            return h(k) ? `${(k[1] - k[0]) * 100 / u.value}%` : `${(k - Number(E)) * 100 / u.value}%`
        }
          , S = ()=>{
            const {modelValue: k, min: E} = e;
            return h(k) ? `${(k[0] - Number(E)) * 100 / u.value}%` : "0%"
        }
          , p = $(()=>{
            const E = {
                [e.vertical ? "height" : "width"]: g(),
                background: e.activeColor
            };
            l.value && (E.transition = "none");
            const D = ()=>e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
            return E[D()] = S(),
            E
        }
        )
          , b = k=>{
            const E = +e.min
              , D = +e.max
              , Q = +e.step;
            k = gt(k, E, D);
            const oe = Math.round((k - E) / Q) * Q;
            return bf(E, oe)
        }
          , v = ()=>{
            const k = e.modelValue;
            h(k) ? r = k.map(b) : r = b(k)
        }
          , m = k=>{
            var E, D;
            const Q = (E = k[0]) != null ? E : Number(e.min)
              , oe = (D = k[1]) != null ? D : Number(e.max);
            return Q > oe ? [oe, Q] : [Q, oe]
        }
          , y = (k,E)=>{
            h(k) ? k = m(k).map(b) : k = b(k),
            fn(k, e.modelValue) || t("update:modelValue", k),
            E && !fn(k, r) && t("change", k)
        }
          , w = k=>{
            if (k.stopPropagation(),
            e.disabled || e.readonly)
                return;
            v();
            const {min: E, reverse: D, vertical: Q, modelValue: oe} = e
              , N = Ve(i)
              , Z = ()=>Q ? D ? N.bottom - k.clientY : k.clientY - N.top : D ? N.right - k.clientX : k.clientX - N.left
              , se = Q ? N.height : N.width
              , Ee = Number(E) + Z() / se * u.value;
            if (h(oe)) {
                const [$e,M] = oe
                  , K = ($e + M) / 2;
                Ee <= K ? y([Ee, M], !0) : y([$e, Ee], !0)
            } else
                y(Ee, !0)
        }
          , C = k=>{
            e.disabled || e.readonly || (c.start(k),
            a = e.modelValue,
            v(),
            l.value = "start")
        }
          , x = k=>{
            if (e.disabled || e.readonly)
                return;
            l.value === "start" && t("dragStart", k),
            We(k, !0),
            c.move(k),
            l.value = "dragging";
            const E = Ve(i)
              , D = e.vertical ? c.deltaY.value : c.deltaX.value
              , Q = e.vertical ? E.height : E.width;
            let oe = D / Q * u.value;
            if (e.reverse && (oe = -oe),
            h(r)) {
                const N = e.reverse ? 1 - o : o;
                a[N] = r[N] + oe
            } else
                a = r + oe;
            y(a)
        }
          , B = k=>{
            e.disabled || e.readonly || (l.value === "dragging" && (y(a, !0),
            t("dragEnd", k)),
            l.value = "")
        }
          , _ = k=>typeof k == "number" ? Ca("button-wrapper", ["left", "right"][k]) : Ca("button-wrapper", e.reverse ? "left" : "right")
          , O = (k,E)=>{
            const D = l.value === "dragging";
            if (typeof E == "number") {
                const Q = n[E === 0 ? "left-button" : "right-button"];
                let oe;
                if (D && Array.isArray(a) && (oe = a[0] > a[1] ? o ^ 1 : o),
                Q)
                    return Q({
                        value: k,
                        dragging: D,
                        dragIndex: oe
                    })
            }
            return n.button ? n.button({
                value: k,
                dragging: D
            }) : d("div", {
                class: Ca("button"),
                style: In(e.buttonSize)
            }, null)
        }
          , I = k=>{
            const E = typeof k == "number" ? e.modelValue[k] : e.modelValue;
            return d("div", {
                ref: s[k ?? 0],
                role: "slider",
                class: _(k),
                tabindex: e.disabled ? void 0 : 0,
                "aria-valuemin": e.min,
                "aria-valuenow": E,
                "aria-valuemax": e.max,
                "aria-disabled": e.disabled || void 0,
                "aria-readonly": e.readonly || void 0,
                "aria-orientation": e.vertical ? "vertical" : "horizontal",
                onTouchstartPassive: D=>{
                    typeof k == "number" && (o = k),
                    C(D)
                }
                ,
                onTouchend: B,
                onTouchcancel: B,
                onClick: ll
            }, [O(E, k)])
        }
        ;
        return y(e.modelValue),
        so(()=>e.modelValue),
        s.forEach(k=>{
            et("touchmove", x, {
                target: k
            })
        }
        ),
        ()=>d("div", {
            ref: i,
            style: f.value,
            class: Ca({
                vertical: e.vertical,
                disabled: e.disabled
            }),
            onClick: w
        }, [d("div", {
            class: Ca("bar"),
            style: p.value
        }, [e.range ? [I(0), I(1)] : I()])])
    }
});
const ox = G(nx)
  , [ku,ax] = W("space")
  , rx = {
    align: String,
    direction: {
        type: String,
        default: "horizontal"
    },
    size: {
        type: [Number, String, Array],
        default: 8
    },
    wrap: Boolean,
    fill: Boolean
};
function Fh(e=[]) {
    const t = [];
    return e.forEach(n=>{
        Array.isArray(n) ? t.push(...n) : n.type === Fe ? t.push(...Fh(n.children)) : t.push(n)
    }
    ),
    t.filter(n=>{
        var o;
        return !(n && (n.type === kt || n.type === Fe && ((o = n.children) == null ? void 0 : o.length) === 0 || n.type === Za && n.children.trim() === ""))
    }
    )
}
var ix = j({
    name: ku,
    props: rx,
    setup(e, {slots: t}) {
        const n = $(()=>{
            var r;
            return (r = e.align) != null ? r : e.direction === "horizontal" ? "center" : ""
        }
        )
          , o = r=>typeof r == "number" ? r + "px" : r
          , a = r=>{
            const i = {}
              , s = `${o(Array.isArray(e.size) ? e.size[0] : e.size)}`
              , l = `${o(Array.isArray(e.size) ? e.size[1] : e.size)}`;
            return r ? e.wrap ? {
                marginBottom: l
            } : {} : (e.direction === "horizontal" && (i.marginRight = s),
            (e.direction === "vertical" || e.wrap) && (i.marginBottom = l),
            i)
        }
        ;
        return ()=>{
            var r;
            const i = Fh((r = t.default) == null ? void 0 : r.call(t));
            return d("div", {
                class: [ax({
                    [e.direction]: e.direction,
                    [`align-${n.value}`]: n.value,
                    wrap: e.wrap,
                    fill: e.fill
                })]
            }, [i.map((s,l)=>d("div", {
                key: `item-${l}`,
                class: `${ku}-item`,
                style: a(l === i.length - 1)
            }, [s]))])
        }
    }
});
const sx = G(ix)
  , [Vh,Tu] = W("steps")
  , lx = {
    active: ce(0),
    direction: X("horizontal"),
    activeIcon: X("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
}
  , Nh = Symbol(Vh);
var cx = j({
    name: Vh,
    props: lx,
    emits: ["clickStep"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = St(Nh);
        return o({
            props: e,
            onClickStep: r=>t("clickStep", r)
        }),
        ()=>{
            var r;
            return d("div", {
                class: Tu([e.direction])
            }, [d("div", {
                class: Tu("items")
            }, [(r = n.default) == null ? void 0 : r.call(n)])])
        }
    }
});
const [ux,jn] = W("step");
var dx = j({
    name: ux,
    setup(e, {slots: t}) {
        const {parent: n, index: o} = mt(Nh);
        if (!n)
            return;
        const a = n.props
          , r = ()=>{
            const f = +a.active;
            return o.value < f ? "finish" : o.value === f ? "process" : "waiting"
        }
          , i = ()=>r() === "process"
          , s = $(()=>({
            background: r() === "finish" ? a.activeColor : a.inactiveColor
        }))
          , l = $(()=>{
            if (i())
                return {
                    color: a.activeColor
                };
            if (r() === "waiting")
                return {
                    color: a.inactiveColor
                }
        }
        )
          , c = ()=>n.onClickStep(o.value)
          , u = ()=>{
            const {iconPrefix: f, finishIcon: h, activeIcon: g, activeColor: S, inactiveIcon: p} = a;
            return i() ? t["active-icon"] ? t["active-icon"]() : d(xe, {
                class: jn("icon", "active"),
                name: g,
                color: S,
                classPrefix: f
            }, null) : r() === "finish" && (h || t["finish-icon"]) ? t["finish-icon"] ? t["finish-icon"]() : d(xe, {
                class: jn("icon", "finish"),
                name: h,
                color: S,
                classPrefix: f
            }, null) : t["inactive-icon"] ? t["inactive-icon"]() : p ? d(xe, {
                class: jn("icon"),
                name: p,
                classPrefix: f
            }, null) : d("i", {
                class: jn("circle"),
                style: s.value
            }, null)
        }
        ;
        return ()=>{
            var f;
            const h = r();
            return d("div", {
                class: [Dn, jn([a.direction, {
                    [h]: h
                }])]
            }, [d("div", {
                class: jn("title", {
                    active: i()
                }),
                style: l.value,
                onClick: c
            }, [(f = t.default) == null ? void 0 : f.call(t)]), d("div", {
                class: jn("circle-container"),
                onClick: c
            }, [u()]), d("div", {
                class: jn("line"),
                style: s.value
            }, null)])
        }
    }
});
const fx = G(dx)
  , [hx,Pr] = W("stepper")
  , gx = 200
  , Er = (e,t)=>String(e) === String(t)
  , mx = {
    min: ce(1),
    max: ce(1 / 0),
    name: ce(""),
    step: ce(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: z,
    showMinus: z,
    showInput: z,
    longPress: z,
    autoFixed: z,
    allowEmpty: Boolean,
    modelValue: q,
    inputWidth: q,
    buttonSize: q,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: ce(1),
    decimalLength: q
};
var vx = j({
    name: hx,
    props: mx,
    emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = (_,O=!0)=>{
            const {min: I, max: k, allowEmpty: E, decimalLength: D} = e;
            return E && _ === "" || (_ = Ss(String(_), !e.integer),
            _ = _ === "" ? 0 : +_,
            _ = Number.isNaN(_) ? +I : _,
            _ = O ? Math.max(Math.min(+k, _), +I) : _,
            De(D) && (_ = _.toFixed(+D))),
            _
        }
          , o = ()=>{
            var _;
            const O = (_ = e.modelValue) != null ? _ : e.defaultValue
              , I = n(O);
            return Er(I, e.modelValue) || t("update:modelValue", I),
            I
        }
        ;
        let a;
        const r = R()
          , i = R(o())
          , s = $(()=>e.disabled || e.disableMinus || +i.value <= +e.min)
          , l = $(()=>e.disabled || e.disablePlus || +i.value >= +e.max)
          , c = $(()=>({
            width: _e(e.inputWidth),
            height: _e(e.buttonSize)
        }))
          , u = $(()=>In(e.buttonSize))
          , f = ()=>{
            const _ = n(i.value);
            Er(_, i.value) || (i.value = _)
        }
          , h = _=>{
            e.beforeChange ? lo(e.beforeChange, {
                args: [_],
                done() {
                    i.value = _
                }
            }) : i.value = _
        }
          , g = ()=>{
            if (a === "plus" && l.value || a === "minus" && s.value) {
                t("overlimit", a);
                return
            }
            const _ = a === "minus" ? -e.step : +e.step
              , O = n(bf(+i.value, _));
            h(O),
            t(a)
        }
          , S = _=>{
            const O = _.target
              , {value: I} = O
              , {decimalLength: k} = e;
            let E = Ss(String(I), !e.integer);
            if (De(k) && E.includes(".")) {
                const Q = E.split(".");
                E = `${Q[0]}.${Q[1].slice(0, +k)}`
            }
            e.beforeChange ? O.value = String(i.value) : Er(I, E) || (O.value = E);
            const D = E === String(+E);
            h(D ? +E : E)
        }
          , p = _=>{
            var O;
            e.disableInput ? (O = r.value) == null || O.blur() : t("focus", _)
        }
          , b = _=>{
            const O = _.target
              , I = n(O.value, e.autoFixed);
            O.value = String(I),
            i.value = I,
            Pe(()=>{
                t("blur", _),
                mf()
            }
            )
        }
        ;
        let v, m;
        const y = ()=>{
            m = setTimeout(()=>{
                g(),
                y()
            }
            , gx)
        }
          , w = ()=>{
            e.longPress && (v = !1,
            clearTimeout(m),
            m = setTimeout(()=>{
                v = !0,
                g(),
                y()
            }
            , _f))
        }
          , C = _=>{
            e.longPress && (clearTimeout(m),
            v && We(_))
        }
          , x = _=>{
            e.disableInput && We(_)
        }
          , B = _=>({
            onClick: O=>{
                We(O),
                a = _,
                g()
            }
            ,
            onTouchstartPassive: ()=>{
                a = _,
                w()
            }
            ,
            onTouchend: C,
            onTouchcancel: C
        });
        return ae(()=>[e.max, e.min, e.integer, e.decimalLength], f),
        ae(()=>e.modelValue, _=>{
            Er(_, i.value) || (i.value = n(_))
        }
        ),
        ae(i, _=>{
            t("update:modelValue", _),
            t("change", _, {
                name: e.name
            })
        }
        ),
        so(()=>e.modelValue),
        ()=>d("div", {
            role: "group",
            class: Pr([e.theme])
        }, [st(d("button", Be({
            type: "button",
            style: u.value,
            class: [Pr("minus", {
                disabled: s.value
            }), {
                [pt]: !s.value
            }],
            "aria-disabled": s.value || void 0
        }, B("minus")), null), [[ht, e.showMinus]]), st(d("input", {
            ref: r,
            type: e.integer ? "tel" : "text",
            role: "spinbutton",
            class: Pr("input"),
            value: i.value,
            style: c.value,
            disabled: e.disabled,
            readonly: e.disableInput,
            inputmode: e.integer ? "numeric" : "decimal",
            placeholder: e.placeholder,
            autocomplete: "off",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": i.value,
            onBlur: b,
            onInput: S,
            onFocus: p,
            onMousedown: x
        }, null), [[ht, e.showInput]]), st(d("button", Be({
            type: "button",
            style: u.value,
            class: [Pr("plus", {
                disabled: l.value
            }), {
                [pt]: !l.value
            }],
            "aria-disabled": l.value || void 0
        }, B("plus")), null), [[ht, e.showPlus]])])
    }
});
const bx = G(vx)
  , yx = G(cx)
  , [px,qt,wx] = W("submit-bar")
  , Sx = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: X("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: X("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: ce(2),
    safeAreaInsetBottom: z
};
var Cx = j({
    name: px,
    props: Sx,
    emits: ["submit"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = ui(o, qt)
          , r = ()=>{
            const {price: u, label: f, currency: h, textAlign: g, suffixLabel: S, decimalLength: p} = e;
            if (typeof u == "number") {
                const b = (u / 100).toFixed(+p).split(".")
                  , v = p ? `.${b[1]}` : "";
                return d("div", {
                    class: qt("text"),
                    style: {
                        textAlign: g
                    }
                }, [d("span", null, [f || wx("label")]), d("span", {
                    class: qt("price")
                }, [h, d("span", {
                    class: qt("price-integer")
                }, [b[0]]), v]), S && d("span", {
                    class: qt("suffix-label")
                }, [S])])
            }
        }
          , i = ()=>{
            var u;
            const {tip: f, tipIcon: h} = e;
            if (n.tip || f)
                return d("div", {
                    class: qt("tip")
                }, [h && d(xe, {
                    class: qt("tip-icon"),
                    name: h
                }, null), f && d("span", {
                    class: qt("tip-text")
                }, [f]), (u = n.tip) == null ? void 0 : u.call(n)])
        }
          , s = ()=>t("submit")
          , l = ()=>n.button ? n.button() : d(wt, {
            round: !0,
            type: e.buttonType,
            text: e.buttonText,
            class: qt("button", e.buttonType),
            color: e.buttonColor,
            loading: e.loading,
            disabled: e.disabled,
            onClick: s
        }, null)
          , c = ()=>{
            var u, f;
            return d("div", {
                ref: o,
                class: [qt(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(u = n.top) == null ? void 0 : u.call(n), i(), d("div", {
                class: qt("bar")
            }, [(f = n.default) == null ? void 0 : f.call(n), r(), l()])])
        }
        ;
        return ()=>e.placeholder ? a(c) : c()
    }
});
const _x = G(Cx)
  , [xx,Ji] = W("swipe-cell")
  , kx = {
    name: ce(""),
    disabled: Boolean,
    leftWidth: q,
    rightWidth: q,
    beforeClose: Function,
    stopPropagation: Boolean
};
var Tx = j({
    name: xx,
    props: kx,
    emits: ["open", "close", "click"],
    setup(e, {emit: t, slots: n}) {
        let o, a, r, i;
        const s = R()
          , l = R()
          , c = R()
          , u = Ge({
            offset: 0,
            dragging: !1
        })
          , f = jt()
          , h = _=>_.value ? Ve(_).width : 0
          , g = $(()=>De(e.leftWidth) ? +e.leftWidth : h(l))
          , S = $(()=>De(e.rightWidth) ? +e.rightWidth : h(c))
          , p = _=>{
            u.offset = _ === "left" ? g.value : -S.value,
            o || (o = !0,
            t("open", {
                name: e.name,
                position: _
            }))
        }
          , b = _=>{
            u.offset = 0,
            o && (o = !1,
            t("close", {
                name: e.name,
                position: _
            }))
        }
          , v = _=>{
            const O = Math.abs(u.offset)
              , I = .15
              , k = o ? 1 - I : I
              , E = _ === "left" ? g.value : S.value;
            E && O > E * k ? p(_) : b(_)
        }
          , m = _=>{
            e.disabled || (r = u.offset,
            f.start(_))
        }
          , y = _=>{
            if (e.disabled)
                return;
            const {deltaX: O} = f;
            f.move(_),
            f.isHorizontal() && (a = !0,
            u.dragging = !0,
            (!o || O.value * r < 0) && We(_, e.stopPropagation),
            u.offset = gt(O.value + r, -S.value, g.value))
        }
          , w = ()=>{
            u.dragging && (u.dragging = !1,
            v(u.offset > 0 ? "left" : "right"),
            setTimeout(()=>{
                a = !1
            }
            , 0))
        }
          , C = (_="outside")=>{
            i || (t("click", _),
            o && !a && (i = !0,
            lo(e.beforeClose, {
                args: [{
                    name: e.name,
                    position: _
                }],
                done: ()=>{
                    i = !1,
                    b(_)
                }
                ,
                canceled: ()=>i = !1,
                error: ()=>i = !1
            })))
        }
          , x = (_,O)=>I=>{
            O && I.stopPropagation(),
            C(_)
        }
          , B = (_,O)=>{
            const I = n[_];
            if (I)
                return d("div", {
                    ref: O,
                    class: Ji(_),
                    onClick: x(_, !0)
                }, [I()])
        }
        ;
        return Oe({
            open: p,
            close: b
        }),
        si(s, ()=>C("outside"), {
            eventName: "touchstart"
        }),
        et("touchmove", y, {
            target: s
        }),
        ()=>{
            var _;
            const O = {
                transform: `translate3d(${u.offset}px, 0, 0)`,
                transitionDuration: u.dragging ? "0s" : ".6s"
            };
            return d("div", {
                ref: s,
                class: Ji(),
                onClick: x("cell", a),
                onTouchstartPassive: m,
                onTouchend: w,
                onTouchcancel: w
            }, [d("div", {
                class: Ji("wrapper"),
                style: O
            }, [B("left", l), (_ = n.default) == null ? void 0 : _.call(n), B("right", c)])])
        }
    }
});
const Px = G(Tx)
  , [Hh,Pu] = W("tabbar")
  , Ex = {
    route: Boolean,
    fixed: z,
    border: z,
    zIndex: q,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: ce(0),
    safeAreaInsetBottom: {
        type: Boolean,
        default: null
    }
}
  , zh = Symbol(Hh);
var Ax = j({
    name: Hh,
    props: Ex,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , {linkChildren: a} = St(zh)
          , r = ui(o, Pu)
          , i = ()=>{
            var c;
            return (c = e.safeAreaInsetBottom) != null ? c : e.fixed
        }
          , s = ()=>{
            var c;
            const {fixed: u, zIndex: f, border: h} = e;
            return d("div", {
                ref: o,
                role: "tablist",
                style: $n(f),
                class: [Pu({
                    fixed: u
                }), {
                    [li]: h,
                    "van-safe-area-bottom": i()
                }]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        }
        ;
        return a({
            props: e,
            setActive: (c,u)=>{
                lo(e.beforeChange, {
                    args: [c],
                    done() {
                        t("update:modelValue", c),
                        t("change", c),
                        u()
                    }
                })
            }
        }),
        ()=>e.fixed && e.placeholder ? r(s) : s()
    }
});
const Bx = G(Ax)
  , [Ox,es] = W("tabbar-item")
  , Ix = be({}, co, {
    dot: Boolean,
    icon: String,
    name: q,
    badge: q,
    badgeProps: Object,
    iconPrefix: String
});
var $x = j({
    name: Ox,
    props: Ix,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Eo()
          , a = en().proxy
          , {parent: r, index: i} = mt(zh);
        if (!r)
            return;
        const s = $(()=>{
            var u;
            const {route: f, modelValue: h} = r.props;
            if (f && "$route"in a) {
                const {$route: g} = a
                  , {to: S} = e
                  , p = hn(S) ? S : {
                    path: S
                };
                return !!g.matched.find(b=>{
                    const v = "path"in p && p.path === b.path
                      , m = "name"in p && p.name === b.name;
                    return v || m
                }
                )
            }
            return ((u = e.name) != null ? u : i.value) === h
        }
        )
          , l = u=>{
            var f;
            s.value || r.setActive((f = e.name) != null ? f : i.value, o),
            t("click", u)
        }
          , c = ()=>{
            if (n.icon)
                return n.icon({
                    active: s.value
                });
            if (e.icon)
                return d(xe, {
                    name: e.icon,
                    classPrefix: e.iconPrefix
                }, null)
        }
        ;
        return ()=>{
            var u;
            const {dot: f, badge: h} = e
              , {activeColor: g, inactiveColor: S} = r.props
              , p = s.value ? g : S;
            return d("div", {
                role: "tab",
                class: es({
                    active: s.value
                }),
                style: {
                    color: p
                },
                tabindex: 0,
                "aria-selected": s.value,
                onClick: l
            }, [d(Ao, Be({
                dot: f,
                class: es("icon"),
                content: h
            }, e.badgeProps), {
                default: c
            }), d("div", {
                class: es("text")
            }, [(u = n.default) == null ? void 0 : u.call(n, {
                active: s.value
            })])])
        }
    }
});
const Dx = G($x)
  , [Rx,Eu] = W("text-ellipsis")
  , Lx = {
    rows: ce(1),
    dots: X("..."),
    content: X(""),
    expandText: X(""),
    collapseText: X(""),
    position: X("end")
};
var Mx = j({
    name: Rx,
    props: Lx,
    emits: ["clickAction"],
    setup(e, {emit: t, slots: n}) {
        const o = R("")
          , a = R(!1)
          , r = R(!1)
          , i = R();
        let s = !1;
        const l = $(()=>a.value ? e.collapseText : e.expandText)
          , c = p=>{
            if (!p)
                return 0;
            const b = p.match(/^\d*(\.\d*)?/);
            return b ? Number(b[0]) : 0
        }
          , u = ()=>{
            if (!i.value || !i.value.isConnected)
                return;
            const p = window.getComputedStyle(i.value)
              , b = document.createElement("div");
            return Array.prototype.slice.apply(p).forEach(m=>{
                b.style.setProperty(m, p.getPropertyValue(m))
            }
            ),
            b.style.position = "fixed",
            b.style.zIndex = "-9999",
            b.style.top = "-9999px",
            b.style.height = "auto",
            b.style.minHeight = "auto",
            b.style.maxHeight = "auto",
            b.innerText = e.content,
            document.body.appendChild(b),
            b
        }
          , f = ()=>{
            const p = (C,x)=>{
                const {content: B, position: _, dots: O} = e
                  , I = B.length
                  , k = ()=>{
                    const Q = (oe,N)=>{
                        if (N - oe <= 1)
                            return _ === "end" ? B.slice(0, oe) + O : O + B.slice(N, I);
                        const Z = Math.round((oe + N) / 2);
                        return _ === "end" ? C.innerText = B.slice(0, Z) + O + l.value : C.innerText = O + B.slice(Z, I) + l.value,
                        C.offsetHeight > x ? _ === "end" ? Q(oe, Z) : Q(Z, N) : _ === "end" ? Q(Z, N) : Q(oe, Z)
                    }
                    ;
                    C.innerText = Q(0, I)
                }
                  , E = (Q,oe)=>{
                    if (Q[1] - Q[0] <= 1 && oe[1] - oe[0] <= 1)
                        return B.slice(0, Q[0]) + O + B.slice(oe[1], I);
                    const N = Math.floor((Q[0] + Q[1]) / 2)
                      , Z = Math.ceil((oe[0] + oe[1]) / 2);
                    return C.innerText = e.content.slice(0, N) + e.dots + e.content.slice(Z, I) + e.expandText,
                    C.offsetHeight >= x ? E([Q[0], N], [Z, oe[1]]) : E([N, Q[1]], [oe[0], Z])
                }
                  , D = 0 + I >> 1;
                return e.position === "middle" ? C.innerText = E([0, D], [D, I]) : k(),
                C.innerText
            }
              , b = u();
            if (!b) {
                s = !0;
                return
            }
            const {paddingBottom: v, paddingTop: m, lineHeight: y} = b.style
              , w = Math.ceil((Number(e.rows) + .5) * c(y) + c(m) + c(v));
            w < b.offsetHeight ? (r.value = !0,
            o.value = p(b, w)) : (r.value = !1,
            o.value = e.content),
            document.body.removeChild(b)
        }
          , h = (p=!a.value)=>{
            a.value = p
        }
          , g = p=>{
            h(),
            t("clickAction", p)
        }
          , S = ()=>{
            const p = n.action ? n.action({
                expanded: a.value
            }) : l.value;
            return d("span", {
                class: Eu("action"),
                onClick: g
            }, [p])
        }
        ;
        return tt(f),
        mn(()=>{
            s && (s = !1,
            f())
        }
        ),
        ae([Qt, ()=>[e.content, e.rows, e.position]], f),
        Oe({
            toggle: h
        }),
        ()=>d("div", {
            ref: i,
            class: Eu()
        }, [a.value ? e.content : o.value, r.value ? S() : null])
    }
});
const Fx = G(Mx)
  , [Vx] = W("time-picker")
  , Au = e=>/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e)
  , Nx = ["hour", "minute", "second"]
  , Hx = be({}, ih, {
    minHour: ce(0),
    maxHour: ce(23),
    minMinute: ce(0),
    maxMinute: ce(59),
    minSecond: ce(0),
    maxSecond: ce(59),
    minTime: {
        type: String,
        validator: Au
    },
    maxTime: {
        type: String,
        validator: Au
    },
    columnsType: {
        type: Array,
        default: ()=>["hour", "minute"]
    },
    filter: Function
});
var zx = j({
    name: Vx,
    props: Hx,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R(e.modelValue)
          , a = R()
          , r = h=>{
            const g = h.split(":");
            return Nx.map((S,p)=>e.columnsType.includes(S) ? g[p] : "00")
        }
          , i = ()=>{
            var h;
            return (h = a.value) == null ? void 0 : h.confirm()
        }
          , s = ()=>o.value
          , l = $(()=>{
            let {minHour: h, maxHour: g, minMinute: S, maxMinute: p, minSecond: b, maxSecond: v} = e;
            if (e.minTime || e.maxTime) {
                const m = {
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                e.columnsType.forEach((C,x)=>{
                    var B;
                    m[C] = (B = o.value[x]) != null ? B : 0
                }
                );
                const {hour: y, minute: w} = m;
                if (e.minTime) {
                    const [C,x,B] = r(e.minTime);
                    h = C,
                    S = +y <= +h ? x : "00",
                    b = +y <= +h && +w <= +S ? B : "00"
                }
                if (e.maxTime) {
                    const [C,x,B] = r(e.maxTime);
                    g = C,
                    p = +y >= +g ? x : "59",
                    v = +y >= +g && +w >= +p ? B : "59"
                }
            }
            return e.columnsType.map(m=>{
                const {filter: y, formatter: w} = e;
                switch (m) {
                case "hour":
                    return Qo(+h, +g, m, w, y, o.value);
                case "minute":
                    return Qo(+S, +p, m, w, y, o.value);
                case "second":
                    return Qo(+b, +v, m, w, y, o.value);
                default:
                    return []
                }
            }
            )
        }
        );
        ae(o, h=>{
            fn(h, e.modelValue) || t("update:modelValue", h)
        }
        ),
        ae(()=>e.modelValue, h=>{
            h = ch(h, l.value),
            fn(h, o.value) || (o.value = h)
        }
        , {
            immediate: !0
        });
        const c = (...h)=>t("change", ...h)
          , u = (...h)=>t("cancel", ...h)
          , f = (...h)=>t("confirm", ...h);
        return Oe({
            confirm: i,
            getSelectedTime: s
        }),
        ()=>d(gi, Be({
            ref: a,
            modelValue: o.value,
            "onUpdate:modelValue": h=>o.value = h,
            columns: l.value,
            onChange: c,
            onCancel: u,
            onConfirm: f
        }, Le(e, sh)), n)
    }
});
const jx = G(zx)
  , [Ux,jo] = W("tree-select")
  , Wx = {
    max: ce(1 / 0),
    items: qe(),
    height: ce(300),
    selectedIcon: X("success"),
    mainActiveIndex: ce(0),
    activeId: {
        type: [Number, String, Array],
        default: 0
    }
};
var Yx = j({
    name: Ux,
    props: Wx,
    emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
    setup(e, {emit: t, slots: n}) {
        const o = c=>Array.isArray(e.activeId) ? e.activeId.includes(c) : e.activeId === c
          , a = c=>{
            const u = ()=>{
                if (c.disabled)
                    return;
                let f;
                if (Array.isArray(e.activeId)) {
                    f = e.activeId.slice();
                    const h = f.indexOf(c.id);
                    h !== -1 ? f.splice(h, 1) : f.length < +e.max && f.push(c.id)
                } else
                    f = c.id;
                t("update:activeId", f),
                t("clickItem", c)
            }
            ;
            return d("div", {
                key: c.id,
                class: ["van-ellipsis", jo("item", {
                    active: o(c.id),
                    disabled: c.disabled
                })],
                onClick: u
            }, [c.text, o(c.id) && d(xe, {
                name: e.selectedIcon,
                class: jo("selected")
            }, null)])
        }
          , r = c=>{
            t("update:mainActiveIndex", c)
        }
          , i = c=>t("clickNav", c)
          , s = ()=>{
            const c = e.items.map(u=>d(Dh, {
                dot: u.dot,
                badge: u.badge,
                class: [jo("nav-item"), u.className],
                disabled: u.disabled,
                onClick: i
            }, {
                title: ()=>n["nav-text"] ? n["nav-text"](u) : u.text
            }));
            return d($h, {
                class: jo("nav"),
                modelValue: e.mainActiveIndex,
                onChange: r
            }, {
                default: ()=>[c]
            })
        }
          , l = ()=>{
            if (n.content)
                return n.content();
            const c = e.items[+e.mainActiveIndex] || {};
            if (c.children)
                return c.children.map(a)
        }
        ;
        return ()=>d("div", {
            class: jo(),
            style: {
                height: _e(e.height)
            }
        }, [s(), d("div", {
            class: jo("content")
        }, [l()])])
    }
});
const qx = G(Yx)
  , [Kx,it,Gx] = W("uploader");
function Bu(e, t) {
    return new Promise(n=>{
        if (t === "file") {
            n();
            return
        }
        const o = new FileReader;
        o.onload = a=>{
            n(a.target.result)
        }
        ,
        t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e)
    }
    )
}
function jh(e, t) {
    return Rr(e).some(n=>n.file ? ea(t) ? t(n.file) : n.file.size > +t : !1)
}
function Xx(e, t) {
    const n = []
      , o = [];
    return e.forEach(a=>{
        jh(a, t) ? o.push(a) : n.push(a)
    }
    ),
    {
        valid: n,
        invalid: o
    }
}
const Qx = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i
  , Zx = e=>Qx.test(e);
function Uh(e) {
    return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? Zx(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var Jx = j({
    props: {
        name: q,
        item: ft(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function
    },
    emits: ["delete", "preview", "reupload"],
    setup(e, {emit: t, slots: n}) {
        const o = ()=>{
            const {status: u, message: f} = e.item;
            if (u === "uploading" || u === "failed") {
                const h = u === "failed" ? d(xe, {
                    name: "close",
                    class: it("mask-icon")
                }, null) : d(tn, {
                    class: it("loading")
                }, null)
                  , g = De(f) && f !== "";
                return d("div", {
                    class: it("mask")
                }, [h, g && d("div", {
                    class: it("mask-message")
                }, [f])])
            }
        }
          , a = u=>{
            const {name: f, item: h, index: g, beforeDelete: S} = e;
            u.stopPropagation(),
            lo(S, {
                args: [h, {
                    name: f,
                    index: g
                }],
                done: ()=>t("delete")
            })
        }
          , r = ()=>t("preview")
          , i = ()=>t("reupload")
          , s = ()=>{
            if (e.deletable && e.item.status !== "uploading") {
                const u = n["preview-delete"];
                return d("div", {
                    role: "button",
                    class: it("preview-delete", {
                        shadow: !u
                    }),
                    tabindex: 0,
                    "aria-label": Gx("delete"),
                    onClick: a
                }, [u ? u() : d(xe, {
                    name: "cross",
                    class: it("preview-delete-icon")
                }, null)])
            }
        }
          , l = ()=>{
            if (n["preview-cover"]) {
                const {index: u, item: f} = e;
                return d("div", {
                    class: it("preview-cover")
                }, [n["preview-cover"](be({
                    index: u
                }, f))])
            }
        }
          , c = ()=>{
            const {item: u, lazyLoad: f, imageFit: h, previewSize: g, reupload: S} = e;
            return Uh(u) ? d(bi, {
                fit: h,
                src: u.objectUrl || u.content || u.url,
                class: it("preview-image"),
                width: Array.isArray(g) ? g[0] : g,
                height: Array.isArray(g) ? g[1] : g,
                lazyLoad: f,
                onClick: S ? i : r
            }, {
                default: l
            }) : d("div", {
                class: it("file"),
                style: In(e.previewSize)
            }, [d(xe, {
                class: it("file-icon"),
                name: "description"
            }, null), d("div", {
                class: [it("file-name"), "van-ellipsis"]
            }, [u.file ? u.file.name : u.url]), l()])
        }
        ;
        return ()=>d("div", {
            class: it("preview")
        }, [c(), o(), s()])
    }
});
const ek = {
    name: ce(""),
    accept: X("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: ce(1 / 0),
    imageFit: X("cover"),
    resultType: X("dataUrl"),
    uploadIcon: X("photograph"),
    uploadText: String,
    deletable: z,
    reupload: Boolean,
    afterRead: Function,
    showUpload: z,
    modelValue: qe(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: z,
    previewOptions: Object,
    previewFullImage: z,
    maxSize: {
        type: [Number, String, Function],
        default: 1 / 0
    }
};
var tk = j({
    name: Kx,
    props: ek,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , a = []
          , r = R(-1)
          , i = R(!1)
          , s = (_=e.modelValue.length)=>({
            name: e.name,
            index: _
        })
          , l = ()=>{
            o.value && (o.value.value = "")
        }
          , c = _=>{
            if (l(),
            jh(_, e.maxSize))
                if (Array.isArray(_)) {
                    const O = Xx(_, e.maxSize);
                    if (_ = O.valid,
                    t("oversize", O.invalid, s()),
                    !_.length)
                        return
                } else {
                    t("oversize", _, s());
                    return
                }
            if (_ = Ge(_),
            r.value > -1) {
                const O = [...e.modelValue];
                O.splice(r.value, 1, _),
                t("update:modelValue", O),
                r.value = -1
            } else
                t("update:modelValue", [...e.modelValue, ...Rr(_)]);
            e.afterRead && e.afterRead(_, s())
        }
          , u = _=>{
            const {maxCount: O, modelValue: I, resultType: k} = e;
            if (Array.isArray(_)) {
                const E = +O - I.length;
                _.length > E && (_ = _.slice(0, E)),
                Promise.all(_.map(D=>Bu(D, k))).then(D=>{
                    const Q = _.map((oe,N)=>{
                        const Z = {
                            file: oe,
                            status: "",
                            message: "",
                            objectUrl: URL.createObjectURL(oe)
                        };
                        return D[N] && (Z.content = D[N]),
                        Z
                    }
                    );
                    c(Q)
                }
                )
            } else
                Bu(_, k).then(E=>{
                    const D = {
                        file: _,
                        status: "",
                        message: "",
                        objectUrl: URL.createObjectURL(_)
                    };
                    E && (D.content = E),
                    c(D)
                }
                )
        }
          , f = _=>{
            const {files: O} = _.target;
            if (e.disabled || !O || !O.length)
                return;
            const I = O.length === 1 ? O[0] : [].slice.call(O);
            if (e.beforeRead) {
                const k = e.beforeRead(I, s());
                if (!k) {
                    l();
                    return
                }
                if (Ns(k)) {
                    k.then(E=>{
                        u(E || I)
                    }
                    ).catch(l);
                    return
                }
            }
            u(I)
        }
        ;
        let h;
        const g = ()=>t("closePreview")
          , S = _=>{
            if (e.previewFullImage) {
                const O = e.modelValue.filter(Uh)
                  , I = O.map(k=>(k.objectUrl && !k.url && k.status !== "failed" && (k.url = k.objectUrl,
                a.push(k.url)),
                k.url)).filter(Boolean);
                h = N1(be({
                    images: I,
                    startPosition: O.indexOf(_),
                    onClose: g
                }, e.previewOptions))
            }
        }
          , p = ()=>{
            h && h.close()
        }
          , b = (_,O)=>{
            const I = e.modelValue.slice(0);
            I.splice(O, 1),
            t("update:modelValue", I),
            t("delete", _, s(O))
        }
          , v = _=>{
            i.value = !0,
            r.value = _,
            Pe(()=>B())
        }
          , m = ()=>{
            i.value || (r.value = -1),
            i.value = !1
        }
          , y = (_,O)=>{
            const I = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"]
              , k = be(Le(e, I), Le(_, I, !0));
            return d(Jx, Be({
                item: _,
                index: O,
                onClick: ()=>t(e.reupload ? "clickReupload" : "clickPreview", _, s(O)),
                onDelete: ()=>b(_, O),
                onPreview: ()=>S(_),
                onReupload: ()=>v(O)
            }, Le(e, ["name", "lazyLoad"]), k), Le(n, ["preview-cover", "preview-delete"]))
        }
          , w = ()=>{
            if (e.previewImage)
                return e.modelValue.map(y)
        }
          , C = _=>t("clickUpload", _)
          , x = ()=>{
            if (e.modelValue.length >= +e.maxCount && !e.reupload)
                return;
            const _ = e.modelValue.length >= +e.maxCount && e.reupload
              , O = e.readonly ? null : d("input", {
                ref: o,
                type: "file",
                class: it("input"),
                accept: e.accept,
                capture: e.capture,
                multiple: e.multiple && r.value === -1,
                disabled: e.disabled,
                onChange: f,
                onClick: m
            }, null);
            return n.default ? st(d("div", {
                class: it("input-wrapper"),
                onClick: C
            }, [n.default(), O]), [[ht, !_]]) : st(d("div", {
                class: it("upload", {
                    readonly: e.readonly
                }),
                style: In(e.previewSize),
                onClick: C
            }, [d(xe, {
                name: e.uploadIcon,
                class: it("upload-icon")
            }, null), e.uploadText && d("span", {
                class: it("upload-text")
            }, [e.uploadText]), O]), [[ht, e.showUpload && !_]])
        }
          , B = ()=>{
            o.value && !e.disabled && o.value.click()
        }
        ;
        return bn(()=>{
            a.forEach(_=>URL.revokeObjectURL(_))
        }
        ),
        Oe({
            chooseFile: B,
            closeImagePreview: p
        }),
        so(()=>e.modelValue),
        ()=>d("div", {
            class: it()
        }, [d("div", {
            class: it("wrapper", {
                disabled: e.disabled
            })
        }, [w(), x()])])
    }
});
const nk = G(tk)
  , [ok,Ou] = W("watermark")
  , ak = {
    gapX: nt(0),
    gapY: nt(0),
    image: String,
    width: nt(100),
    height: nt(100),
    rotate: ce(-22),
    zIndex: q,
    content: String,
    opacity: q,
    fullPage: z,
    textColor: X("#dcdee0")
};
var rk = j({
    name: ok,
    props: ak,
    setup(e, {slots: t}) {
        const n = R()
          , o = R("")
          , a = R("")
          , r = ()=>{
            const l = {
                transformOrigin: "center",
                transform: `rotate(${e.rotate}deg)`
            }
              , c = ()=>e.image && !t.content ? d("image", {
                href: a.value,
                "xlink:href": a.value,
                x: "0",
                y: "0",
                width: e.width,
                height: e.height,
                style: l
            }, null) : d("foreignObject", {
                x: "0",
                y: "0",
                width: e.width,
                height: e.height
            }, [d("div", {
                xmlns: "http://www.w3.org/1999/xhtml",
                style: l
            }, [t.content ? t.content() : d("span", {
                style: {
                    color: e.textColor
                }
            }, [e.content])])])
              , u = e.width + e.gapX
              , f = e.height + e.gapY;
            return d("svg", {
                viewBox: `0 0 ${u} ${f}`,
                width: u,
                height: f,
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                style: {
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                }
            }, [c()])
        }
          , i = l=>{
            const c = document.createElement("canvas")
              , u = new Image;
            u.crossOrigin = "anonymous",
            u.referrerPolicy = "no-referrer",
            u.onload = ()=>{
                c.width = u.naturalWidth,
                c.height = u.naturalHeight;
                const f = c.getContext("2d");
                f == null || f.drawImage(u, 0, 0),
                a.value = c.toDataURL()
            }
            ,
            u.src = l
        }
          , s = l=>{
            const c = new Blob([l],{
                type: "image/svg+xml"
            });
            return URL.createObjectURL(c)
        }
        ;
        return ra(()=>{
            e.image && i(e.image)
        }
        ),
        ae(()=>[a.value, e.content, e.textColor, e.height, e.width, e.rotate, e.gapX, e.gapY], ()=>{
            Pe(()=>{
                n.value && (o.value && URL.revokeObjectURL(o.value),
                o.value = s(n.value.innerHTML))
            }
            )
        }
        , {
            immediate: !0
        }),
        ia(()=>{
            o.value && URL.revokeObjectURL(o.value)
        }
        ),
        ()=>{
            const l = be({
                backgroundImage: `url(${o.value})`
            }, $n(e.zIndex));
            return d("div", {
                class: Ou({
                    full: e.fullPage
                }),
                style: l
            }, [d("div", {
                class: Ou("wrapper"),
                ref: n
            }, [r()])])
        }
    }
});
const ik = G(rk)
  , sk = "4.9.1";
function lk(e) {
    [Pf, _s, Kb, sy, Ap, Jp, Gf, a0, Ao, c0, wt, _0, B0, R0, nn, V0, kl, oh, W0, J0, ow, lw, cw, hw, bw, Cw, Ew, Bs, Mw, Uw, Kw, Jw, a1, u1, d1, gh, Tn, m1, p1, bl, _1, P1, O1, xe, bi, H1, G1, X1, tS, tn, pf, rS, cS, pS, PS, $f, OS, RS, gi, LS, DC, Rt, FC, UC, xl, Cl, GC, a_, r_, u_, y_, $h, Dh, A_, G_, Lh, J_, Mh, Rh, ox, sx, fx, bx, yx, Nf, _x, ml, Px, vl, Sl, Ya, Bx, Dx, fi, vi, Fx, jx, wp, qx, nk, ik].forEach(n=>{
        n.install ? e.use(n) : n.name && e.component(n.name, n)
    }
    )
}
var ck = {
    install: lk,
    version: sk
};
function uk(e) {
    Rt.props.teleport = {
        default() {
            return document.body
        }
    },
    e.component("van-popup", Rt)
}
const Bo = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [o,a] of t)
        n[o] = a;
    return n
}
  , dk = {
    components: {},
    mounted() {
        this.setCurrentMenuItem()
    },
    watch: {
        $route() {
            this.setCurrentMenuItem()
        }
    },
    data: function() {
        return {
            currentItem: ""
        }
    },
    methods: {
        setCurrentMenuItem() {
            this.currentItem = "",
            this.menuItems.map(e=>{
                this.$route.path === "/" ? this.currentItem = "main" : e.route !== "/" && this.$route.path.includes(e.route) && (this.currentItem = e.key)
            }
            )
        }
    },
    computed: {
        isCanTakeQuestRewards() {
            return Object.values(this.uDailyRewards).some(e=>e === "canTake") || Object.values(this.uQuests).some(e=>e.isRewarded === !1)
        },
        isCanTakeFriendsRewards() {
            return Object.values(this.uFriends).some(e=>e.bonusToTake > 0)
        },
        menuItems() {
            return [{
                route: "/airdrop",
                key: "airdrop",
                title: this.t("Airdrop"),
                icon: "gem",
                isDot: !1
            }, {
                route: "/city2",
                key: "city2",
                title: this.t("City"),
                icon: "shop",
                isDot: !1
            }, {
                route: "/main",
                key: "main",
                title: this.t("Home"),
                icon: "wap-home",
                isDot: !1
            }, {
                route: "/friends",
                key: "friends",
                title: this.t("Friends"),
                icon: "friends",
                isDot: this.isCanTakeFriendsRewards
            }, {
                route: "/quests",
                key: "quests",
                title: this.t("Quests"),
                icon: "completed",
                isDot: this.isCanTakeQuestRewards
            }]
        }
    }
}
  , fk = {
    class: "BottomBar"
};
function hk(e, t, n, o, a, r) {
    const i = Ne("van-tabbar-item")
      , s = Ne("van-tabbar");
    return Se(),
    He("div", fk, [d(s, {
        modelValue: e.currentItem,
        "onUpdate:modelValue": t[0] || (t[0] = l=>e.currentItem = l),
        onChange: t[1] || (t[1] = l=>e._vibrate()),
        class: "mainTabBar"
    }, {
        default: ge(()=>[(Se(!0),
        He(Fe, null, Ha(r.menuItems, l=>(Se(),
        vt(i, {
            key: l.key,
            to: l.route,
            name: l.key,
            icon: l.icon,
            dot: l.isDot,
            class: "mainTabBarItem"
        }, Bm({
            default: ge(()=>[Ae(te(l.title) + " ", 1)]),
            _: 2
        }, [l.key === "main" ? {
            name: "icon",
            fn: ge(()=>[H("div", {
                class: Nt(["avatar", {
                    active: e.currentItem === l.key
                }]),
                style: Tt(e._getSkinStyle(e.uProfile.skin, e.uHero.level))
            }, null, 6)]),
            key: "0"
        } : void 0]), 1032, ["to", "name", "icon", "dot"]))), 128))]),
        _: 1
    }, 8, ["modelValue"])])
}
const gk = Bo(dk, [["render", hk], ["__scopeId", "data-v-7771aa21"]])
  , wi = new (window.AudioContext || window.webkitAudioContext)
  , Il = wi.createGain();
Il.gain.value = .3;
Il.connect(wi.destination);
const Wh = {};
async function Un(e, t) {
    Wh[e] = await mk(t)
}
async function mk(e) {
    const n = await (await fetch(e)).arrayBuffer();
    return wi.decodeAudioData(n)
}
function vk(e) {
    bk(Wh[e])
}
function bk(e) {
    const t = wi.createBufferSource();
    t.buffer = e,
    t.connect(Il),
    t.start()
}
const yk = {
    name: "Progressbar-g",
    props: {
        height: {
            type: Number,
            default: 15
        },
        percent: {
            type: Number,
            default: 1
        },
        textColor: {
            type: String,
            default() {
                return "#000"
            }
        },
        text: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "#008C00FF"
        },
        bgColor: {
            type: String,
            default: "#b6b6b6"
        }
    },
    data() {
        return {}
    },
    methods: {
        toggleTooltip() {}
    }
};
function pk(e, t, n, o, a, r) {
    return Se(),
    He("div", {
        class: "progressBar txtShd",
        style: Tt({
            height: n.height + "px",
            background: n.bgColor
        })
    }, [H("div", {
        class: "text",
        style: Tt({
            lineHeight: Math.round(n.height * 1) + "px",
            fontSize: Math.round(n.height * .8) + "px",
            color: n.textColor,
            textShadow: "0 0px 2px #fff"
        })
    }, te(n.text), 5), H("div", {
        class: "bar",
        style: Tt({
            width: `${n.percent}%`,
            height: n.height + "px",
            background: n.color
        })
    }, null, 4)], 4)
}
const wk = Bo(yk, [["render", pk], ["__scopeId", "data-v-8e20d87d"]]);
var Sk = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Yh;
const Si = e=>Yh = e
  , qh = Symbol();
function Ds(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var $a;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)($a || ($a = {}));
function Ck() {
    const e = ud(!0)
      , t = e.run(()=>R({}));
    let n = []
      , o = [];
    const a = Qs({
        install(r) {
            Si(a),
            a._a = r,
            r.provide(qh, a),
            r.config.globalProperties.$pinia = a,
            o.forEach(i=>n.push(i)),
            o = []
        },
        use(r) {
            return !this._a && !Sk ? o.push(r) : n.push(r),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return a
}
const Kh = ()=>{}
;
function Iu(e, t, n, o=Kh) {
    e.push(t);
    const a = ()=>{
        const r = e.indexOf(t);
        r > -1 && (e.splice(r, 1),
        o())
    }
    ;
    return !n && dd() && Ag(a),
    a
}
function Uo(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const _k = e=>e();
function Rs(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,o)=>e.set(o, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const o = t[n]
          , a = e[n];
        Ds(a) && Ds(o) && e.hasOwnProperty(n) && !rt(o) && !_o(o) ? e[n] = Rs(a, o) : e[n] = o
    }
    return e
}
const xk = Symbol();
function kk(e) {
    return !Ds(e) || !e.hasOwnProperty(xk)
}
const {assign: Yn} = Object;
function Tk(e) {
    return !!(rt(e) && e.effect)
}
function Pk(e, t, n, o) {
    const {state: a, actions: r, getters: i} = t
      , s = n.state.value[e];
    let l;
    function c() {
        s || (n.state.value[e] = a ? a() : {});
        const u = em(n.state.value[e]);
        return Yn(u, r, Object.keys(i || {}).reduce((f,h)=>(f[h] = Qs($(()=>{
            Si(n);
            const g = n._s.get(e);
            return i[h].call(g, g)
        }
        )),
        f), {}))
    }
    return l = Gh(e, c, t, n, o, !0),
    l
}
function Gh(e, t, n={}, o, a, r) {
    let i;
    const s = Yn({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, u, f = [], h = [], g;
    const S = o.state.value[e];
    !r && !S && (o.state.value[e] = {}),
    R({});
    let p;
    function b(_) {
        let O;
        c = u = !1,
        typeof _ == "function" ? (_(o.state.value[e]),
        O = {
            type: $a.patchFunction,
            storeId: e,
            events: g
        }) : (Rs(o.state.value[e], _),
        O = {
            type: $a.patchObject,
            payload: _,
            storeId: e,
            events: g
        });
        const I = p = Symbol();
        Pe().then(()=>{
            p === I && (c = !0)
        }
        ),
        u = !0,
        Uo(f, O, o.state.value[e])
    }
    const v = r ? function() {
        const {state: O} = n
          , I = O ? O() : {};
        this.$patch(k=>{
            Yn(k, I)
        }
        )
    }
    : Kh;
    function m() {
        i.stop(),
        f = [],
        h = [],
        o._s.delete(e)
    }
    function y(_, O) {
        return function() {
            Si(o);
            const I = Array.from(arguments)
              , k = []
              , E = [];
            function D(N) {
                k.push(N)
            }
            function Q(N) {
                E.push(N)
            }
            Uo(h, {
                args: I,
                name: _,
                store: C,
                after: D,
                onError: Q
            });
            let oe;
            try {
                oe = O.apply(this && this.$id === e ? this : C, I)
            } catch (N) {
                throw Uo(E, N),
                N
            }
            return oe instanceof Promise ? oe.then(N=>(Uo(k, N),
            N)).catch(N=>(Uo(E, N),
            Promise.reject(N))) : (Uo(k, oe),
            oe)
        }
    }
    const w = {
        _p: o,
        $id: e,
        $onAction: Iu.bind(null, h),
        $patch: b,
        $reset: v,
        $subscribe(_, O={}) {
            const I = Iu(f, _, O.detached, ()=>k())
              , k = i.run(()=>ae(()=>o.state.value[e], E=>{
                (O.flush === "sync" ? u : c) && _({
                    storeId: e,
                    type: $a.direct,
                    events: g
                }, E)
            }
            , Yn({}, l, O)));
            return I
        },
        $dispose: m
    }
      , C = Ge(w);
    o._s.set(e, C);
    const B = (o._a && o._a.runWithContext || _k)(()=>o._e.run(()=>(i = ud()).run(t)));
    for (const _ in B) {
        const O = B[_];
        if (rt(O) && !Tk(O) || _o(O))
            r || (S && kk(O) && (rt(O) ? O.value = S[_] : Rs(O, S[_])),
            o.state.value[e][_] = O);
        else if (typeof O == "function") {
            const I = y(_, O);
            B[_] = I,
            s.actions[_] = O
        }
    }
    return Yn(C, B),
    Yn(Me(C), B),
    Object.defineProperty(C, "$state", {
        get: ()=>o.state.value[e],
        set: _=>{
            b(O=>{
                Yn(O, _)
            }
            )
        }
    }),
    o._p.forEach(_=>{
        Yn(C, i.run(()=>_({
            store: C,
            app: o._a,
            pinia: o,
            options: s
        })))
    }
    ),
    S && r && n.hydrate && n.hydrate(C.$state, S),
    c = !0,
    u = !0,
    C
}
function $l(e, t, n) {
    let o, a;
    const r = typeof t == "function";
    typeof e == "string" ? (o = e,
    a = r ? n : t) : (a = e,
    o = e.id);
    function i(s, l) {
        const c = Vm();
        return s = s || (c ? Pt(qh, null) : null),
        s && Si(s),
        s = Yh,
        s._s.has(o) || (r ? Gh(o, t, a, s) : Pk(o, a, s)),
        s._s.get(o)
    }
    return i.$id = o,
    i
}
const It = $l("user", {
    state: ()=>({
        authHash: null,
        profile: null,
        purchase: {},
        hero: {},
        skills: {},
        quests: [],
        questsContent: [],
        friends: [],
        settings: {},
        dailyRewards: {},
        tappedData: {},
        lastSendTappedDate: null
    }),
    actions: {
        setAuthHash(e) {
            this.authHash = e
        },
        setProfile(e) {
            this.profile = e
        },
        setPurchase(e) {
            this.purchase = e
        },
        setHero(e) {
            e && (this.hero = e)
        },
        setSkills(e) {
            this.skills = e
        },
        setQuests(e) {
            this.quests = e
        },
        setQuestsContent(e) {
            this.questsContent = e
        },
        setFriends(e) {
            this.friends = e.sort((t,n)=>n.bonusToTake === t.bonusToTake ? n.level - t.level : n.bonusToTake - t.bonusToTake)
        },
        setSettings(e) {
            this.settings = e
        },
        setDailyRewards(e) {
            this.dailyRewards = e
        },
        addTappedData(e, t) {
            this.lastSendTappedDate || this.setLastSendTappedDate(new Date),
            e in this.tappedData ? this.tappedData[e] = {
                amount: this.tappedData[e].amount + t,
                currentEnergy: this.hero.earns[e].energy
            } : this.tappedData[e] = {
                amount: t,
                currentEnergy: this.hero.earns[e].energy
            }
        },
        clearTappedData() {
            this.tappedData = {}
        },
        setLastSendTappedDate(e) {
            this.lastSendTappedDate = e
        },
        addMoney(e) {
            this.hero.money += e
        },
        energyAdd(e="") {
            this._energyChange(!1, e)
        },
        energyRemove(e, t) {
            e in this.hero.earns && this._energyChange(!0, e, t)
        },
        _energyChange(e, t="", n=null) {
            function o(r, i) {
                const s = r.energy + i;
                return s < 0 ? 0 : s > r.limit ? r.limit : s
            }
            (t ? [t] : Object.keys(this.hero.earns)).forEach(r=>{
                e ? n = -1 * (n || this.hero.earns[r].moneyPerTap) : n = n || this.hero.earns[r].recoveryPerSecond,
                this.hero.earns[r].energy = o(this.hero.earns[r], n)
            }
            )
        }
    },
    getters: {
        getTappedAllMoney() {
            let e = 0;
            for (const t in this.tappedData)
                "amount"in this.tappedData[t] && (e += this.tappedData[t].amount);
            return e
        }
    }
})
  , Ci = $l("state", {
    state: ()=>({
        topBar: {
            isNoBg: !1,
            isNeedBg: !1,
            isShowPph: !0,
            isShowMoney: !0,
            isShowLottery: !1,
            isShowAvatar: !0
        },
        lastPingDate: new Date,
        config: {
            isPvpOn: !1
        }
    }),
    actions: {
        setTopBarDefault() {
            this.topBar = {
                isNoBg: !1,
                isNeedBg: !1,
                isShowPph: !0,
                isShowMoney: !0,
                isShowLottery: !1,
                isShowAvatar: !0
            }
        },
        setTopBarIsNoBg(e) {
            this.topBar.isNoBg = e
        },
        setTopBarIsNeedBg(e) {
            this.topBar.isNeedBg = e
        },
        setTopBarIsShowAvatar(e) {
            this.topBar.isShowAvatar = e
        },
        setTopBarIsShowPph(e) {
            this.topBar.isShowPph = e
        },
        setTopBarIsShowMoney(e) {
            this.topBar.isShowMoney = e
        },
        setTopBarIsShowLottery(e) {
            this.topBar.isShowLottery = e
        },
        updateLastPingDate() {
            this.lastPingDate = new Date
        }
    },
    getters: {}
})
  , Xh = $l("db", {
    state: ()=>({
        skills: [],
        levels: [],
        earnJob: [],
        skillCategory: [],
        skillSubcategory: [],
        negotiationsLeague: [],
        negotiationsStrategy: [],
        dailyRewards: [],
        translation: [],
        quests: [],
        langs: [],
        funds: [],
        fundsRisk: [],
        contentPrice: [],
        onboarding: [],
        purchases: []
    }),
    actions: {
        setSkills(e) {
            this.skills = e
        },
        setLevels(e) {
            this.levels = e
        },
        setEarnJob(e) {
            this.earnJob = e
        },
        setSkillCategory(e) {
            this.skillCategory = e
        },
        setSkillSubcategory(e) {
            this.skillSubcategory = e
        },
        setNegotiationsLeague(e) {
            this.negotiationsLeague = e
        },
        setNegotiationsStrategy(e) {
            this.negotiationsStrategy = e
        },
        setDailyRewards(e) {
            this.dailyRewards = e
        },
        setTranslation(e) {
            this.translation = e
        },
        setQuests(e) {
            this.quests = e
        },
        setLangs(e) {
            this.langs = e
        },
        setFunds(e) {
            this.funds = e
        },
        setFundsRisk(e) {
            this.fundsRisk = e
        },
        setContentPrice(e) {
            this.contentPrice = e
        },
        setOnboarding(e) {
            this.onboarding = e
        },
        setPurchases(e) {
            this.purchases = e
        }
    }
});
var Qh = {}
  , Ek = e=>encodeURIComponent(e).replace(/[!'()*]/g, t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)
  , Zh = "%[a-f0-9]{2}"
  , $u = new RegExp("(" + Zh + ")|([^%]+?)","gi")
  , Du = new RegExp("(" + Zh + ")+","gi");
function Ls(e, t) {
    try {
        return [decodeURIComponent(e.join(""))]
    } catch {}
    if (e.length === 1)
        return e;
    t = t || 1;
    var n = e.slice(0, t)
      , o = e.slice(t);
    return Array.prototype.concat.call([], Ls(n), Ls(o))
}
function Ak(e) {
    try {
        return decodeURIComponent(e)
    } catch {
        for (var t = e.match($u) || [], n = 1; n < t.length; n++)
            e = Ls(t, n).join(""),
            t = e.match($u) || [];
        return e
    }
}
function Bk(e) {
    for (var t = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    }, n = Du.exec(e); n; ) {
        try {
            t[n[0]] = decodeURIComponent(n[0])
        } catch {
            var o = Ak(n[0]);
            o !== n[0] && (t[n[0]] = o)
        }
        n = Du.exec(e)
    }
    t["%C2"] = "�";
    for (var a = Object.keys(t), r = 0; r < a.length; r++) {
        var i = a[r];
        e = e.replace(new RegExp(i,"g"), t[i])
    }
    return e
}
var Ok = function(e) {
    if (typeof e != "string")
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    try {
        return e = e.replace(/\+/g, " "),
        decodeURIComponent(e)
    } catch {
        return Bk(e)
    }
}
  , Ik = (e,t)=>{
    if (!(typeof e == "string" && typeof t == "string"))
        throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "")
        return [e];
    const n = e.indexOf(t);
    return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)]
}
  , $k = function(e, t) {
    for (var n = {}, o = Object.keys(e), a = Array.isArray(t), r = 0; r < o.length; r++) {
        var i = o[r]
          , s = e[i];
        (a ? t.indexOf(i) !== -1 : t(i, s, e)) && (n[i] = s)
    }
    return n
};
(function(e) {
    const t = Ek
      , n = Ok
      , o = Ik
      , a = $k
      , r = v=>v == null;
    function i(v) {
        switch (v.arrayFormat) {
        case "index":
            return m=>(y,w)=>{
                const C = y.length;
                return w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, [c(m, v), "[", C, "]"].join("")] : [...y, [c(m, v), "[", c(C, v), "]=", c(w, v)].join("")]
            }
            ;
        case "bracket":
            return m=>(y,w)=>w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, [c(m, v), "[]"].join("")] : [...y, [c(m, v), "[]=", c(w, v)].join("")];
        case "comma":
        case "separator":
            return m=>(y,w)=>w == null || w.length === 0 ? y : y.length === 0 ? [[c(m, v), "=", c(w, v)].join("")] : [[y, c(w, v)].join(v.arrayFormatSeparator)];
        default:
            return m=>(y,w)=>w === void 0 || v.skipNull && w === null || v.skipEmptyString && w === "" ? y : w === null ? [...y, c(m, v)] : [...y, [c(m, v), "=", c(w, v)].join("")]
        }
    }
    function s(v) {
        let m;
        switch (v.arrayFormat) {
        case "index":
            return (y,w,C)=>{
                if (m = /\[(\d*)\]$/.exec(y),
                y = y.replace(/\[\d*\]$/, ""),
                !m) {
                    C[y] = w;
                    return
                }
                C[y] === void 0 && (C[y] = {}),
                C[y][m[1]] = w
            }
            ;
        case "bracket":
            return (y,w,C)=>{
                if (m = /(\[\])$/.exec(y),
                y = y.replace(/\[\]$/, ""),
                !m) {
                    C[y] = w;
                    return
                }
                if (C[y] === void 0) {
                    C[y] = [w];
                    return
                }
                C[y] = [].concat(C[y], w)
            }
            ;
        case "comma":
        case "separator":
            return (y,w,C)=>{
                const x = typeof w == "string" && w.includes(v.arrayFormatSeparator)
                  , B = typeof w == "string" && !x && u(w, v).includes(v.arrayFormatSeparator);
                w = B ? u(w, v) : w;
                const _ = x || B ? w.split(v.arrayFormatSeparator).map(O=>u(O, v)) : w === null ? w : u(w, v);
                C[y] = _
            }
            ;
        default:
            return (y,w,C)=>{
                if (C[y] === void 0) {
                    C[y] = w;
                    return
                }
                C[y] = [].concat(C[y], w)
            }
        }
    }
    function l(v) {
        if (typeof v != "string" || v.length !== 1)
            throw new TypeError("arrayFormatSeparator must be single character string")
    }
    function c(v, m) {
        return m.encode ? m.strict ? t(v) : encodeURIComponent(v) : v
    }
    function u(v, m) {
        return m.decode ? n(v) : v
    }
    function f(v) {
        return Array.isArray(v) ? v.sort() : typeof v == "object" ? f(Object.keys(v)).sort((m,y)=>Number(m) - Number(y)).map(m=>v[m]) : v
    }
    function h(v) {
        const m = v.indexOf("#");
        return m !== -1 && (v = v.slice(0, m)),
        v
    }
    function g(v) {
        let m = "";
        const y = v.indexOf("#");
        return y !== -1 && (m = v.slice(y)),
        m
    }
    function S(v) {
        v = h(v);
        const m = v.indexOf("?");
        return m === -1 ? "" : v.slice(m + 1)
    }
    function p(v, m) {
        return m.parseNumbers && !Number.isNaN(Number(v)) && typeof v == "string" && v.trim() !== "" ? v = Number(v) : m.parseBooleans && v !== null && (v.toLowerCase() === "true" || v.toLowerCase() === "false") && (v = v.toLowerCase() === "true"),
        v
    }
    function b(v, m) {
        m = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, m),
        l(m.arrayFormatSeparator);
        const y = s(m)
          , w = Object.create(null);
        if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""),
        !v))
            return w;
        for (const C of v.split("&")) {
            if (C === "")
                continue;
            let[x,B] = o(m.decode ? C.replace(/\+/g, " ") : C, "=");
            B = B === void 0 ? null : ["comma", "separator"].includes(m.arrayFormat) ? B : u(B, m),
            y(u(x, m), B, w)
        }
        for (const C of Object.keys(w)) {
            const x = w[C];
            if (typeof x == "object" && x !== null)
                for (const B of Object.keys(x))
                    x[B] = p(x[B], m);
            else
                w[C] = p(x, m)
        }
        return m.sort === !1 ? w : (m.sort === !0 ? Object.keys(w).sort() : Object.keys(w).sort(m.sort)).reduce((C,x)=>{
            const B = w[x];
            return B && typeof B == "object" && !Array.isArray(B) ? C[x] = f(B) : C[x] = B,
            C
        }
        , Object.create(null))
    }
    e.extract = S,
    e.parse = b,
    e.stringify = (v,m)=>{
        if (!v)
            return "";
        m = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, m),
        l(m.arrayFormatSeparator);
        const y = B=>m.skipNull && r(v[B]) || m.skipEmptyString && v[B] === ""
          , w = i(m)
          , C = {};
        for (const B of Object.keys(v))
            y(B) || (C[B] = v[B]);
        const x = Object.keys(C);
        return m.sort !== !1 && x.sort(m.sort),
        x.map(B=>{
            const _ = v[B];
            return _ === void 0 ? "" : _ === null ? c(B, m) : Array.isArray(_) ? _.reduce(w(B), []).join("&") : c(B, m) + "=" + c(_, m)
        }
        ).filter(B=>B.length > 0).join("&")
    }
    ,
    e.parseUrl = (v,m)=>{
        m = Object.assign({
            decode: !0
        }, m);
        const [y,w] = o(v, "#");
        return Object.assign({
            url: y.split("?")[0] || "",
            query: b(S(v), m)
        }, m && m.parseFragmentIdentifier && w ? {
            fragmentIdentifier: u(w, m)
        } : {})
    }
    ,
    e.stringifyUrl = (v,m)=>{
        m = Object.assign({
            encode: !0,
            strict: !0
        }, m);
        const y = h(v.url).split("?")[0] || ""
          , w = e.extract(v.url)
          , C = e.parse(w, {
            sort: !1
        })
          , x = Object.assign(C, v.query);
        let B = e.stringify(x, m);
        B && (B = `?${B}`);
        let _ = g(v.url);
        return v.fragmentIdentifier && (_ = `#${c(v.fragmentIdentifier, m)}`),
        `${y}${B}${_}`
    }
    ,
    e.pick = (v,m,y)=>{
        y = Object.assign({
            parseFragmentIdentifier: !0
        }, y);
        const {url: w, query: C, fragmentIdentifier: x} = e.parseUrl(v, y);
        return e.stringifyUrl({
            url: w,
            query: a(C, m),
            fragmentIdentifier: x
        }, y)
    }
    ,
    e.exclude = (v,m,y)=>{
        const w = Array.isArray(m) ? C=>!m.includes(C) : (C,x)=>!m(C, x);
        return e.pick(v, w, y)
    }
}
)(Qh);
const Jh = "api.xempire.io"
  , Dk = "game.xempire.io"
  , XE = Object.freeze(Object.defineProperty({
    __proto__: null,
    API_DOMAIN: Jh,
    GAME_DOMAIN: Dk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , eg = function(e) {
    let t = document.cookie.split(";");
    for (let n = 0; n < t.length; n++) {
        let o = t[n].split("=");
        if (e === o[0].trim())
            return decodeURIComponent(o[1])
    }
    return null
}
  , Rk = function(e) {
    const t = function(g) {
        var S = n(a(r(o(g), 8 * g.length)));
        return S.toLowerCase()
    };
    function n(g) {
        for (var S, p = "0123456789ABCDEF", b = "", v = 0; v < g.length; v++)
            S = g.charCodeAt(v),
            b += p.charAt(S >>> 4 & 15) + p.charAt(15 & S);
        return b
    }
    function o(g) {
        for (var S = Array(g.length >> 2), p = 0; p < S.length; p++)
            S[p] = 0;
        for (p = 0; p < 8 * g.length; p += 8)
            S[p >> 5] |= (255 & g.charCodeAt(p / 8)) << p % 32;
        return S
    }
    function a(g) {
        for (var S = "", p = 0; p < 32 * g.length; p += 8)
            S += String.fromCharCode(g[p >> 5] >>> p % 32 & 255);
        return S
    }
    function r(g, S) {
        g[S >> 5] |= 128 << S % 32,
        g[14 + (S + 64 >>> 9 << 4)] = S;
        for (var p = 1732584193, b = -271733879, v = -1732584194, m = 271733878, y = 0; y < g.length; y += 16) {
            var w = p
              , C = b
              , x = v
              , B = m;
            b = u(b = u(b = u(b = u(b = c(b = c(b = c(b = c(b = l(b = l(b = l(b = l(b = s(b = s(b = s(b = s(b, v = s(v, m = s(m, p = s(p, b, v, m, g[y + 0], 7, -680876936), b, v, g[y + 1], 12, -389564586), p, b, g[y + 2], 17, 606105819), m, p, g[y + 3], 22, -1044525330), v = s(v, m = s(m, p = s(p, b, v, m, g[y + 4], 7, -176418897), b, v, g[y + 5], 12, 1200080426), p, b, g[y + 6], 17, -1473231341), m, p, g[y + 7], 22, -45705983), v = s(v, m = s(m, p = s(p, b, v, m, g[y + 8], 7, 1770035416), b, v, g[y + 9], 12, -1958414417), p, b, g[y + 10], 17, -42063), m, p, g[y + 11], 22, -1990404162), v = s(v, m = s(m, p = s(p, b, v, m, g[y + 12], 7, 1804603682), b, v, g[y + 13], 12, -40341101), p, b, g[y + 14], 17, -1502002290), m, p, g[y + 15], 22, 1236535329), v = l(v, m = l(m, p = l(p, b, v, m, g[y + 1], 5, -165796510), b, v, g[y + 6], 9, -1069501632), p, b, g[y + 11], 14, 643717713), m, p, g[y + 0], 20, -373897302), v = l(v, m = l(m, p = l(p, b, v, m, g[y + 5], 5, -701558691), b, v, g[y + 10], 9, 38016083), p, b, g[y + 15], 14, -660478335), m, p, g[y + 4], 20, -405537848), v = l(v, m = l(m, p = l(p, b, v, m, g[y + 9], 5, 568446438), b, v, g[y + 14], 9, -1019803690), p, b, g[y + 3], 14, -187363961), m, p, g[y + 8], 20, 1163531501), v = l(v, m = l(m, p = l(p, b, v, m, g[y + 13], 5, -1444681467), b, v, g[y + 2], 9, -51403784), p, b, g[y + 7], 14, 1735328473), m, p, g[y + 12], 20, -1926607734), v = c(v, m = c(m, p = c(p, b, v, m, g[y + 5], 4, -378558), b, v, g[y + 8], 11, -2022574463), p, b, g[y + 11], 16, 1839030562), m, p, g[y + 14], 23, -35309556), v = c(v, m = c(m, p = c(p, b, v, m, g[y + 1], 4, -1530992060), b, v, g[y + 4], 11, 1272893353), p, b, g[y + 7], 16, -155497632), m, p, g[y + 10], 23, -1094730640), v = c(v, m = c(m, p = c(p, b, v, m, g[y + 13], 4, 681279174), b, v, g[y + 0], 11, -358537222), p, b, g[y + 3], 16, -722521979), m, p, g[y + 6], 23, 76029189), v = c(v, m = c(m, p = c(p, b, v, m, g[y + 9], 4, -640364487), b, v, g[y + 12], 11, -421815835), p, b, g[y + 15], 16, 530742520), m, p, g[y + 2], 23, -995338651), v = u(v, m = u(m, p = u(p, b, v, m, g[y + 0], 6, -198630844), b, v, g[y + 7], 10, 1126891415), p, b, g[y + 14], 15, -1416354905), m, p, g[y + 5], 21, -57434055), v = u(v, m = u(m, p = u(p, b, v, m, g[y + 12], 6, 1700485571), b, v, g[y + 3], 10, -1894986606), p, b, g[y + 10], 15, -1051523), m, p, g[y + 1], 21, -2054922799), v = u(v, m = u(m, p = u(p, b, v, m, g[y + 8], 6, 1873313359), b, v, g[y + 15], 10, -30611744), p, b, g[y + 6], 15, -1560198380), m, p, g[y + 13], 21, 1309151649), v = u(v, m = u(m, p = u(p, b, v, m, g[y + 4], 6, -145523070), b, v, g[y + 11], 10, -1120210379), p, b, g[y + 2], 15, 718787259), m, p, g[y + 9], 21, -343485551),
            p = f(p, w),
            b = f(b, C),
            v = f(v, x),
            m = f(m, B)
        }
        return Array(p, b, v, m)
    }
    function i(g, S, p, b, v, m) {
        return f(h(f(f(S, g), f(b, m)), v), p)
    }
    function s(g, S, p, b, v, m, y) {
        return i(S & p | ~S & b, g, S, v, m, y)
    }
    function l(g, S, p, b, v, m, y) {
        return i(S & b | p & ~b, g, S, v, m, y)
    }
    function c(g, S, p, b, v, m, y) {
        return i(S ^ p ^ b, g, S, v, m, y)
    }
    function u(g, S, p, b, v, m, y) {
        return i(p ^ (S | ~b), g, S, v, m, y)
    }
    function f(g, S) {
        var p = (65535 & g) + (65535 & S);
        return (g >> 16) + (S >> 16) + (p >> 16) << 16 | 65535 & p
    }
    function h(g, S) {
        return g << S | g >>> 32 - S
    }
    return t(e)
}
  , Ru = function(e, t) {
    return Object.keys(t).length === 0 ? e : e + "?" + Qh.stringify(t, {
        arrayFormat: "bracket"
    })
}
  , Lk = function() {
    return Date.now()
}
  , Mk = function() {
    return 1e3
}
  , Fk = function() {
    return Math.floor(Lk() / Mk())
}
  , Vk = function(e, t) {
    return Rk(`${e}_${t}`)
}
  , Nk = function(e, t) {
    console.log("[DEBUG] e ->", e)
    console.log("[DEBUG] t ->", t)
    const n = It()
      , o = !!e;
    e instanceof Object && (e = JSON.stringify(e));
    const a = Fk()
      , r = Vk(a, o ? e : "");
    console.log("[DEBUG] a (Api-Time) ->", a)
    return {
        method: o ? "post" : "get",
        credentials: "include",
        ...t,
        headers: {
            "Content-Type": "application/json",
            "Api-Key": n.authHash ?? "empty",
            "Api-Time": a,
            "Api-Hash": r,
            "Is-Beta-Server": eg("is_beta_server")
        },
        body: o ? e : null
    }
}
  , Hk = async function(e, t, n) {
    const o = `https://${Jh}${e}`;
    let a = null
      , r = 1e3
      , i = null;
    for (let s = 1; s < 5; s++)
        try {
            a = await (await fetch(Ru(o, t), Nk(n))).json();
            break
        } catch (l) {
            await new Promise(c=>setTimeout(c, r * Math.pow(1.8, s))),
            console.error(l + ": " + Ru(o, t)),
            i = l
        }
    if (!a && i)
        throw i;
    return a
}
  , cn = async function(e, t) {
    console.log(`>>> api: ${e} request: %o`, t),
    ["ping", "sync", "questContentClaim", "fundInvest", "sendTappedData", "claimOfflineBonus", "improveSkill", "claimFriendReward", "claimQuest", "claimDailyReward", "getHero", "allUserData", "onboardingComplete"].includes(e) && Ci().updateLastPingDate();
    const a = {
        auth: "/telegram/auth",
        getProfile: "/profile/info",
        profileSkinSelect: "/profile/skin/select",
        allUserData: "/user/data/all",
        onboardingComplete: "/hero/onboarding/finish",
        resetOnboarding: "/hero/onboarding/reset",
        getHero: "/hero/info",
        sendTappedData: "/hero/action/tap",
        claimOfflineBonus: "/hero/bonus/offline/claim",
        sync: "/hero/balance/sync",
        ping: "/system/ping",
        getSkills: "/skills",
        improveSkill: "/skills/improve",
        getSettings: "/settings",
        setSettings: "/settings/save",
        getFriends: "/friends",
        claimFriendReward: "/friends/claim",
        claimBatchFriendReward: "/friends/claim/batch",
        connectFriend: "/friends/referrer/set",
        getQuests: "/quests/progress",
        claimQuest: "/quests/claim",
        checkQuest: "/quests/check",
        getDailyRewards: "/quests/daily",
        claimDailyReward: "/quests/daily/claim",
        questContentInfo: "/quests/content",
        questContentSubmit: "/quests/content/submit",
        questContentClaim: "/quests/content/claim",
        questContentRemove: "/quests/content/remove",
        allProgressDailyQuests: "/quests/daily/progress/all",
        claimProgressDailyQuest: "/quests/daily/progress/claim",
        pvpGetInfo: "/pvp/info",
        pvpClaim: "/pvp/claim",
        pvpFind: "/pvp/fight",
        pvpCancelFight: "/pvp/fight/cancel",
        pvpLeaderboard: "/pvp/leaderboard",
        communityLeaderboard: "/community/leaderboard",
        communityCreate: "/community/create",
        translationsGet: "/translations/info",
        translationsSubmit: "/translations/submit",
        fundInfo: "/fund/info",
        fundInvest: "/fund/invest",
        loadDb: "/dbs",
        assets: "/assets",
        getRatings: "/ratings",
        adminReset: "/admin/reset",
        walletTopup: "/billing/invoice/create",
        richList: "/billing/rich/list",
        purchaseBuy: "/purchase/buy",
        purchaseList: "/purchase/list"
    }[e]
      , r = await Hk(a, {}, {
        data: t
    });
    if (r.success)
        console.log(`>>> api: ${e} response: %o`, r.data);
    else
        throw It().authHash && qa({
            type: "danger",
            message: r.error ? r.error : "Some problem... please repeat"
        }),
        r.error;
    return r.data
}
  , zk = {
    data() {
        return {
            stores: {
                user: It(),
                state: Ci(),
                db: Xh()
            }
        }
    },
    methods: {
        apiCall: cn
    }
}
  , jk = {
    components: {},
    async created() {},
    async mounted() {
        this.updateState(),
        await this.render()
    },
    data() {
        return {
            title: "",
            isShowButtonNext: !1,
            isTypeProcess: !1
        }
    },
    computed: {
        dbOnboardingByKey() {
            return this._arrayByKey(this.dbOnboarding, "key")
        },
        currentOnboarding() {
            if (this.isAbTestOnboardingHide)
                return this.$emit("onboarding", !1),
                null;
            let t = this.dbOnboarding.filter(n=>this.uHero.level >= n.minHeroLevel && this.uHero.level <= n.maxHeroLevel).sort((n,o)=>n.key - o.key).find(n=>!this._isOnboardingComplete([n.key]) && this.checkShow(n));
            return t ? t.action === "/improve" && this.$route.path === "/improve" ? (this.$emit("onboarding", !1),
            null) : (t.title = t.title.replace("{discipline}", this.dbSkillsByKey.discipline.title).replace("{taskManager}", this.dbSkillsByKey.task_manager.title).replace("{mining}", this.t("Mining")).replace("{quests}", this.t("Quests")).replace("{incomes}", this.t("Incomes")).replace("{home}", this.t("Home")),
            t.actionTitle = t.actionTitle.replace("{mining}", this.t("Mining")).replace("{quests}", this.t("Quests")).replace("{incomes}", this.t("Incomes")).replace("{home}", this.t("Home")),
            t) : (this.$emit("onboarding", !1),
            null)
        }
    },
    watch: {
        async currentOnboarding(e, t) {
            this.updateState(),
            e && e.title !== (t == null ? void 0 : t.title) && (this.isTypeProcess || await this.render())
        }
    },
    methods: {
        async render() {
            if (this.title = "",
            this.isShowButtonNext = !1,
            this.currentOnboarding) {
                let e = 0
                  , t = this.currentOnboarding.title;
                for (this.isTypeProcess = !0; e !== t.length; )
                    this.title += t[e++],
                    await this._delay(25);
                await this._delay(150),
                this.isShowButtonNext = !0,
                this.isTypeProcess = !1
            }
        },
        updateState() {
            this.$emit("onboarding", !!this.currentOnboarding)
        },
        async onboardClick() {
            this.currentOnboarding.action && (this.$router.push("/empty"),
            await this._delay(20),
            this.$router.push(this.currentOnboarding.action)),
            this.currentOnboarding.isCompleteAfterClick && this._completeOnboarding([this.currentOnboarding.key])
        },
        checkShow(e) {
            var t, n, o, a;
            switch (e.needToShowMethodCheck) {
            case "":
                return !0;
            case "notImproveDiscipline":
                return !("discipline"in this.uSkills);
            case "notImproveTaskManager":
                return !("task_manager"in this.uSkills);
            case "notClaimQuestImproveDiscipline":
                return !((t = this.uQuests.filter(r=>r.key === "improve_discipline")[0]) != null && t.isRewarded);
            case "notClaimQuestImproveTaskManager":
                return !((n = this.uQuests.filter(r=>r.key === "improve_task_manager")[0]) != null && n.isRewarded);
            case "notClaimQuestTg":
                return !((o = this.uQuests.filter(r=>r.key === "join_tg")[0]) != null && o.isRewarded);
            case "notClaimQuestYt":
                return !((a = this.uQuests.filter(r=>r.key === "join_yt")[0]) != null && a.isRewarded);
            case "notClaimDailyReward1":
                return this.uDailyRewards[1] === "canTake";
            case "notClaimDailyReward":
                return Object.values(this.uDailyRewards).includes("canTake")
            }
            return !0
        }
    }
}
  , Uk = {
    key: 0,
    class: "right",
    style: {
        "margin-top": "5px"
    }
};
function Wk(e, t, n, o, a, r) {
    const i = Ne("van-icon")
      , s = Ne("van-button");
    return r.currentOnboarding && a.title.length > 0 ? (Se(),
    He("div", {
        key: 0,
        class: "onboarding",
        onClick: t[0] || (t[0] = l=>a.isShowButtonNext ? r.onboardClick() : !1)
    }, [d(i, {
        name: "info",
        color: "#fbcc54"
    }), Ae(" " + te(a.title) + " ", 1), a.isShowButtonNext && r.currentOnboarding.actionTitle ? (Se(),
    He("div", Uk, [d(s, {
        size: "mini",
        type: "primary",
        icon: "arrow",
        "icon-position": "right"
    }, {
        default: ge(()=>[Ae(te(r.currentOnboarding.actionTitle), 1)]),
        _: 1
    })])) : ut("", !0)])) : ut("", !0)
}
const Yk = Bo(jk, [["render", Wk], ["__scopeId", "data-v-e2c53440"]])
  , qk = {
    components: {
        Onboarding: Yk,
        Progressbar: wk
    },
    async created() {
        this.localSettings = this.uSettings
    },
    mounted() {},
    props: {
        isNoBg: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isNeedBg: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isShowPph: {
            type: Boolean,
            required: !1,
            default: !0
        },
        isShowMoney: {
            type: Boolean,
            required: !1,
            default: !0
        },
        isShowLottery: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    data: function() {
        return {
            isMenuOpen: !1,
            isShowPphPopup: !1,
            isShowMoneyPopup: !1,
            localSettings: {},
            isShowLangPicker: !1,
            isConnectFriendPopup: !1,
            connectFriendLink: "",
            isConnectFriendProgress: !1,
            isShowOnboardingState: !1,
            isSupportPopupShow: !1,
            supportFaqValue: []
        }
    },
    computed: {
        isShowAvatar() {
            return this.stores.state.topBar.isShowAvatar
        },
        isShowOnboarding() {
            return this.isShowOnboardingState
        },
        isCanConnectFriend() {
            return "isCanConnectFriend"in this.uProfile && this.uProfile.isCanConnectFriend
        },
        firstLang() {
            return this.dbLangByKey.en
        },
        userLang() {
            var e, t;
            if (((e = window.Telegram.WebApp.WebAppUser) == null ? void 0 : e.language_code.length) > 0) {
                const n = (t = window.Telegram.WebApp.WebAppUser) == null ? void 0 : t.language_code.substring(0, 2);
                if (n in this.dbLangByKey)
                    return this.dbLangByKey[n]
            }
            return null
        },
        langByFirstLetter() {
            let e = this.dbLang;
            return e.sort((t,n)=>t.key.localeCompare(n.key)),
            e.reduce((t,n)=>{
                const o = n.key[0];
                return t[o] || (t[o] = []),
                t[o].push(n),
                t
            }
            , {})
        }
    },
    watch: {},
    methods: {
        setOnboardingState(e) {
            this.isShowOnboardingState = e
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        showPphPopup() {
            this.isShowPphPopup = !0,
            this._completeOnboarding(this.onBoard.pph)
        },
        showMoneyPopup() {
            this.isShowMoneyPopup = !0,
            this._completeOnboarding(this.onBoard.money)
        },
        async onLangSelect(e) {
            this.localSettings.lang = e,
            this.isShowLangPicker = !1,
            e === "en" && (this.dbTranslation = []);
            try {
                await this.saveSetting();
                try {
                    await this.dbLoadDbData(["dbTranslation"])
                } catch (t) {
                    console.log("Error: %o", t)
                }
            } catch (t) {
                console.log("Error: %o", t)
            }
        },
        async saveSetting(e="") {
            this.stores.user.setSettings(this.localSettings),
            await this.apiCall("setSettings", this.localSettings)
        },
        improveAction() {
            this.isShowPphPopup = !1,
            this.isShowMoneyPopup = !1,
            this.$router.push("/improve")
        },
        storeCardsAction() {
            this.isShowPphPopup = !1,
            this.isShowMoneyPopup = !1,
            this.$router.push("/store/cards")
        },
        async connectFriend() {
            if (this.connectFriendLink.length < 5)
                return !1;
            this.isConnectFriendProgress = !0;
            try {
                const e = await cn("connectFriend", this.connectFriendLink);
                this.stores.user.setHero(e.hero),
                this.stores.user.setProfile(e.profile)
            } catch (e) {
                this._catchError(e)
            }
            this.isConnectFriendProgress = !1
        }
    }
}
  , lt = e=>(Rd("data-v-579471a3"),
e = e(),
Ld(),
e)
  , Kk = {
    style: {
        padding: "15px 15px 0 15px"
    }
}
  , Gk = {
    width: "100%"
}
  , Xk = {
    style: {
        position: "absolute",
        bottom: "7px",
        left: "-3px"
    }
}
  , Qk = {
    style: {
        color: "#fff",
        "font-weight": "bold",
        "font-size": "17px",
        "text-shadow": "0 0 2px #000"
    }
}
  , Zk = {
    style: {
        position: "absolute",
        bottom: "-2px",
        left: "-2px",
        width: "62px",
        border: "1px solid #000"
    }
}
  , Jk = {
    style: {
        padding: "0 10px"
    }
}
  , eT = {
    style: {
        "font-size": "18px",
        display: "flex",
        "justify-content": "space-between"
    }
}
  , tT = {
    class: "nowrap value"
}
  , nT = lt(()=>H("span", {
    class: "pph16"
}, null, -1))
  , oT = {
    style: {
        color: "#fff",
        "font-size": "1.3em",
        "font-weight": "bold"
    }
}
  , aT = lt(()=>H("span", {
    class: "pph24"
}, null, -1))
  , rT = lt(()=>H("br", null, null, -1))
  , iT = lt(()=>H("br", null, null, -1))
  , sT = lt(()=>H("br", null, null, -1))
  , lT = {
    key: 0,
    class: "improvesLines goldLines"
}
  , cT = {
    class: "goldText",
    style: {
        margin: "0"
    }
}
  , uT = {
    key: 1
}
  , dT = lt(()=>H("br", null, null, -1))
  , fT = {
    class: "nowrap"
}
  , hT = {
    class: "nowrap value"
}
  , gT = lt(()=>H("span", {
    class: "money18"
}, null, -1))
  , mT = {
    style: {
        color: "#fff",
        "font-size": "1.3em",
        "font-weight": "bold"
    }
}
  , vT = lt(()=>H("span", {
    class: "money22"
}, null, -1))
  , bT = lt(()=>H("br", null, null, -1))
  , yT = lt(()=>H("br", null, null, -1))
  , pT = lt(()=>H("br", null, null, -1))
  , wT = lt(()=>H("br", null, null, -1))
  , ST = lt(()=>H("br", null, null, -1))
  , CT = lt(()=>H("br", null, null, -1))
  , _T = lt(()=>H("div", {
    class: "lottery"
}, null, -1))
  , xT = [_T]
  , kT = lt(()=>H("br", null, null, -1))
  , TT = lt(()=>H("br", null, null, -1))
  , PT = {
    class: "center"
}
  , ET = {
    style: {
        "font-size": "2em"
    }
}
  , AT = {
    style: {
        "font-size": "2em"
    }
}
  , BT = {
    style: {
        "font-size": "2em"
    }
}
  , OT = {
    class: "container center"
}
  , IT = {
    class: "center"
}
  , $T = {
    class: "container faq"
}
  , DT = lt(()=>H("h2", {
    class: "center"
}, "FAQ", -1))
  , RT = {
    class: "faqItemContent"
}
  , LT = {
    class: "faqItemContent"
}
  , MT = {
    class: "faqItemContent"
}
  , FT = {
    class: "faqItemContent"
}
  , VT = {
    class: "faqItemContent"
}
  , NT = {
    class: "faqItemContent"
}
  , HT = {
    class: "faqItemContent"
}
  , zT = lt(()=>H("a", {
    href: "https://t.me/muskempire",
    target: "_blank"
}, "https://t.me/muskempire", -1))
  , jT = {
    class: "faqItemContent"
}
  , UT = {
    class: "faqItemContent"
};
function WT(e, t, n, o, a, r) {
    const i = Ne("Progressbar")
      , s = Ne("onboarding")
      , l = Ne("van-icon")
      , c = Ne("van-button")
      , u = Ne("van-count-down")
      , f = Ne("van-popup")
      , h = Ne("van-switch")
      , g = Ne("van-cell")
      , S = Ne("van-cell-group")
      , p = Ne("van-index-anchor")
      , b = Ne("van-index-bar")
      , v = Ne("van-field")
      , m = Ne("van-collapse-item")
      , y = Ne("van-collapse");
    return Se(),
    He("div", {
        class: Nt(["topBar", {
            needBg: n.isNeedBg,
            noBg: n.isNoBg && !n.isNeedBg
        }])
    }, [H("div", Kk, [H("table", Gk, [H("tr", null, [r.isShowAvatar ? (Se(),
    He("td", {
        key: 0,
        style: {
            width: "60px"
        },
        onClick: t[0] || (t[0] = w=>e.$router.push("/hero"))
    }, [H("div", {
        class: "clicked avatarBox",
        style: Tt(e._getSkinStyle(e.uProfile.skin, e.uHero.level))
    }, [H("div", Xk, [H("div", Qk, te(e.t("Lv.")) + " " + te(e.uHero.level), 1)]), H("div", Zk, [d(i, {
        height: 10,
        color: "linear-gradient( 135deg, #FFB320 10%, #FFF6A8 100%)",
        "bg-color": "#000",
        percent: e.uLevelPercent,
        text: e.uLevelPercent + "%"
    }, null, 8, ["percent", "text"])])], 4)])) : ut("", !0), H("td", Jk, [H("div", eT, [st(d(s, {
        onOnboarding: r.setOnboardingState
    }, null, 8, ["onOnboarding"]), [[ht, r.isShowOnboarding]]), n.isShowPph && !r.isShowOnboarding ? (Se(),
    He("div", {
        key: 0,
        class: "metric",
        onClick: t[1] || (t[1] = (...w)=>r.showPphPopup && r.showPphPopup(...w)),
        id: "profit"
    }, [H("div", {
        class: Nt(["nowrap", {
            goldLightText: e.uPurchase.extendedOfflineTimeLeft > 0
        }])
    }, [e.uPurchase.extendedOfflineTimeLeft ? (Se(),
    vt(l, {
        key: 0,
        name: "star"
    })) : ut("", !0), Ae(" " + te(e.t("Profit per Hour")) + " ", 1), e._isOnboardingComplete(e.onBoard.pph) ? ut("", !0) : (Se(),
    vt(l, {
        key: 1,
        name: "question"
    }))], 2), H("div", tT, [nT, Ae(), H("span", {
        class: Nt({
            goldText: e.uPurchase.extendedOfflineTimeLeft > 0
        })
    }, "+" + te(e._numberShort(e.uHero.moneyPerHour)), 3)])])) : ut("", !0), d(f, {
        show: e.isShowPphPopup,
        "onUpdate:show": t[2] || (t[2] = w=>e.isShowPphPopup = w),
        round: "",
        position: "top",
        class: "center metricPopUp"
    }, {
        default: ge(()=>[H("div", oT, te(e.t("Profit per Hour")), 1), H("div", null, [aT, Ae(" +" + te(e._number(e.uHero.moneyPerHour)), 1)]), H("p", null, te(e.t("To increase your Profit Per Hour, buy new improvements.")), 1), d(c, {
            type: "primary",
            onClick: r.improveAction,
            round: "",
            size: "small"
        }, {
            default: ge(()=>[Ae(te(e.t("Go to the Improvement menu")), 1)]),
            _: 1
        }, 8, ["onClick"]), rT, iT, sT, e.uPurchase.extendedOfflineTimeLeft && e.uPurchase.extendedOfflineTimeLeft > 0 ? (Se(),
        He("div", lT, [H("h3", cT, te(e.t("You have an Offline Boost active")), 1), H("p", null, [Ae(te(e.t("There's a offline boost")) + " ", 1), d(u, {
            time: e.uPurchase.extendedOfflineTimeLeft * 1e3
        }, null, 8, ["time"])]), d(c, {
            type: "warning",
            onClick: r.storeCardsAction,
            round: "",
            size: "small",
            icon: "star"
        }, {
            default: ge(()=>[Ae(te(e.t("Go to Store")), 1)]),
            _: 1
        }, 8, ["onClick"])])) : (Se(),
        He("div", uT, [H("p", null, te(e.t("You will make a profit even when you are offline for up to 3 hours.")) + " " + te(e.t("Log in more often to collect more profits.")), 1), H("p", null, te(e.t("You can increase the offline time you are credited for by purchasing an Offline Boost from the Premium Store")), 1), d(c, {
            type: "warning",
            onClick: r.storeCardsAction,
            round: "",
            size: "small",
            icon: "star"
        }, {
            default: ge(()=>[Ae(te(e.t("Go to Store")), 1)]),
            _: 1
        }, 8, ["onClick"])])), dT]),
        _: 1
    }, 8, ["show"]), n.isShowMoney && !r.isShowOnboarding ? (Se(),
    He("div", {
        key: 1,
        class: "metric",
        id: "money",
        onClick: t[3] || (t[3] = (...w)=>r.showMoneyPopup && r.showMoneyPopup(...w))
    }, [H("div", fT, [Ae(te(e.t("Money")) + " ", 1), e._isOnboardingComplete(e.onBoard.money) ? ut("", !0) : (Se(),
    vt(l, {
        key: 0,
        name: "question"
    }))]), H("div", hT, [gT, Ae(" " + te(e._numberShort(e.uHero.money)), 1)])])) : ut("", !0), d(f, {
        show: e.isShowMoneyPopup,
        "onUpdate:show": t[4] || (t[4] = w=>e.isShowMoneyPopup = w),
        round: "",
        position: "top",
        class: "center metricPopUp"
    }, {
        default: ge(()=>[H("div", mT, te(e.t("Money")), 1), H("div", null, [vT, Ae(" " + te(e._number(e.uHero.money)), 1)]), H("p", null, [Ae(te(e.t("How to get more money:")), 1), bT, H("span", null, "- " + te(e.t("Complete Quests")), 1), yT, H("span", null, "- " + te(e.t("Invite more friends")), 1), pT, H("span", null, "- " + te(e.t("Participate in Negotiations")), 1), wT, H("span", null, "- " + te(e.t("Tap")), 1), ST, H("span", null, "- " + te(e.t("Invest in the Stock Exchange")), 1), CT]), H("p", null, te(e.t("By buying improvements, you increase your experience and level.")), 1)]),
        _: 1
    }, 8, ["show"]), n.isShowLottery && !r.isShowOnboarding && e.uHero.level > 2 ? (Se(),
    He("div", {
        key: 2,
        class: "metric clicked",
        onClick: t[5] || (t[5] = w=>e.$router.push("/quests/content"))
    }, xT)) : ut("", !0)])]), H("td", {
        style: {
            width: "40px",
            position: "relative"
        },
        class: Nt({
            menuOpen: e.isMenuOpen
        })
    }, [d(l, {
        name: "wap-nav",
        onClick: r.toggleMenu,
        class: "menuBtn"
    }, null, 8, ["onClick"]), d(f, {
        show: e.isMenuOpen,
        "onUpdate:show": t[25] || (t[25] = w=>e.isMenuOpen = w),
        round: "",
        position: "top",
        "overlay-class": "overlayClass",
        class: "settingPopup",
        transition: e.isRtl ? "van-slide-left" : "van-slide-right"
    }, {
        default: ge(()=>[d(S, null, {
            default: ge(()=>[e.uProfile.isBetaTester ? (Se(),
            vt(g, {
                key: 0,
                center: "",
                title: e.t("Sound"),
                icon: "volume-o"
            }, {
                "right-icon": ge(()=>[d(h, {
                    modelValue: e.localSettings.sound,
                    "onUpdate:modelValue": t[6] || (t[6] = w=>e.localSettings.sound = w),
                    onClick: r.saveSetting
                }, null, 8, ["modelValue", "onClick"])]),
                _: 1
            }, 8, ["title"])) : ut("", !0), e.uProfile.isBetaTester ? (Se(),
            vt(g, {
                key: 1,
                center: "",
                title: e.t("Animations"),
                icon: "play-circle-o"
            }, {
                "right-icon": ge(()=>[d(h, {
                    modelValue: e.localSettings.animations,
                    "onUpdate:modelValue": t[7] || (t[7] = w=>e.localSettings.animations = w),
                    onClick: r.saveSetting
                }, null, 8, ["modelValue", "onClick"])]),
                _: 1
            }, 8, ["title"])) : ut("", !0), d(g, {
                center: "",
                title: e.t("Vibrate"),
                icon: "bulb-o"
            }, {
                "right-icon": ge(()=>[d(h, {
                    modelValue: e.localSettings.vibrate,
                    "onUpdate:modelValue": t[8] || (t[8] = w=>e.localSettings.vibrate = w),
                    onClick: r.saveSetting
                }, null, 8, ["modelValue", "onClick"])]),
                _: 1
            }, 8, ["title"]), d(g, {
                center: "",
                title: e.t("Language"),
                value: e.dbLangByKey[e.localSettings.lang].title,
                icon: "chat",
                "is-link": "",
                "arrow-direction": "down",
                onClick: t[9] || (t[9] = w=>e.isShowLangPicker = !0)
            }, null, 8, ["title", "value"]), d(g, {
                center: "",
                title: e.t("Rating"),
                "is-link": "",
                to: "/rating",
                onClick: t[10] || (t[10] = w=>{
                    e.isMenuOpen = !1
                }
                ),
                icon: "award"
            }, null, 8, ["title"]), d(g, {
                center: "",
                title: e.t("Tutorial"),
                "is-link": "",
                onClick: t[11] || (t[11] = w=>e._resetOnboarding()),
                icon: "question"
            }, null, 8, ["title"]), this.localSettings.lang === "ru" ? (Se(),
            vt(g, {
                key: 2,
                center: "",
                title: e.t("Video tutorials"),
                "is-link": "",
                onClick: t[12] || (t[12] = w=>e._openUrl("https://www.youtube.com/watch?v=TUBWm1TjRNE")),
                icon: "tv-o"
            }, null, 8, ["title"])) : (Se(),
            vt(g, {
                key: 3,
                center: "",
                title: e.t("Video tutorials"),
                "is-link": "",
                onClick: t[13] || (t[13] = w=>e._openUrl("https://www.youtube.com/watch?v=rxltFZiroR8")),
                icon: "tv-o"
            }, null, 8, ["title"]))]),
            _: 1
        }), kT, d(S, null, {
            default: ge(()=>[d(g, {
                center: "",
                title: e.t("Our Telegram channel"),
                "is-link": "",
                onClick: e._ourTgClick,
                icon: "like"
            }, null, 8, ["title", "onClick"]), d(g, {
                center: "",
                title: e.t("Support"),
                "is-link": "",
                onClick: t[14] || (t[14] = w=>e.isSupportPopupShow = !0),
                icon: "service"
            }, null, 8, ["title"]), this.localSettings.lang !== "en" ? (Se(),
            vt(g, {
                key: 0,
                center: "",
                title: e.t("Tell about the mistranslation"),
                "is-link": "",
                to: "/translations",
                onClick: t[15] || (t[15] = w=>{
                    e.isMenuOpen = !1
                }
                ),
                icon: "wechat"
            }, null, 8, ["title"])) : ut("", !0)]),
            _: 1
        }), r.isCanConnectFriend ? (Se(),
        He(Fe, {
            key: 0
        }, [TT, d(S, null, {
            default: ge(()=>[d(g, {
                center: "",
                title: e.t("Indicate the friend who invited me"),
                "is-link": "",
                onClick: t[16] || (t[16] = w=>e.isConnectFriendPopup = !0),
                icon: "friends"
            }, null, 8, ["title"])]),
            _: 1
        })], 64)) : ut("", !0), d(f, {
            show: e.isShowLangPicker,
            "onUpdate:show": t[19] || (t[19] = w=>e.isShowLangPicker = w),
            position: "bottom",
            style: {
                height: "80%"
            },
            closeable: ""
        }, {
            default: ge(()=>[H("h2", PT, te(e.t("Select language")), 1), d(b, null, {
                default: ge(()=>[d(S, {
                    inset: ""
                }, {
                    default: ge(()=>[d(g, {
                        title: r.firstLang.title,
                        "is-link": "",
                        value: r.firstLang.key,
                        center: "",
                        onClick: t[17] || (t[17] = w=>r.onLangSelect(r.firstLang.key))
                    }, {
                        icon: ge(()=>[H("span", ET, te(r.firstLang.icon) + " ", 1)]),
                        _: 1
                    }, 8, ["title", "value"]), r.userLang ? (Se(),
                    vt(g, {
                        key: 0,
                        title: r.userLang.title,
                        "is-link": "",
                        value: r.userLang.key,
                        center: "",
                        onClick: t[18] || (t[18] = w=>r.onLangSelect(r.userLang.key))
                    }, {
                        icon: ge(()=>[H("span", AT, te(r.userLang.icon) + " ", 1)]),
                        _: 1
                    }, 8, ["title", "value"])) : ut("", !0)]),
                    _: 1
                }), (Se(!0),
                He(Fe, null, Ha(r.langByFirstLetter, (w,C)=>(Se(),
                He(Fe, {
                    key: C
                }, [d(p, {
                    index: C
                }, null, 8, ["index"]), d(S, {
                    inset: ""
                }, {
                    default: ge(()=>[(Se(!0),
                    He(Fe, null, Ha(w, x=>(Se(),
                    vt(g, {
                        key: x.key,
                        title: x.title,
                        label: x.titleEn,
                        "is-link": "",
                        value: x.key,
                        center: "",
                        onClick: B=>r.onLangSelect(x.key)
                    }, {
                        icon: ge(()=>[H("span", BT, te(x.icon) + " ", 1)]),
                        _: 2
                    }, 1032, ["title", "label", "value", "onClick"]))), 128))]),
                    _: 2
                }, 1024)], 64))), 128))]),
                _: 1
            })]),
            _: 1
        }, 8, ["show"]), r.isCanConnectFriend ? (Se(),
        vt(f, {
            key: 1,
            show: e.isConnectFriendPopup,
            "onUpdate:show": t[21] || (t[21] = w=>e.isConnectFriendPopup = w),
            style: {
                "max-height": "80%",
                width: "100%"
            },
            position: "top"
        }, {
            default: ge(()=>[H("div", OT, [H("h2", IT, te(e.t("Connect with Friend")), 1), H("p", null, te(e.t("If you were invited by a friend, but for some reason you didn't connect with it and didn't receive bonuses, you can join this friend manually.")), 1), H("p", null, te(e.t("This option is available for the first 24 hours after register")), 1), H("p", null, te(e.t("Enter your friend's invite link or referral code:")), 1), d(S, null, {
                default: ge(()=>[d(v, {
                    modelValue: e.connectFriendLink,
                    "onUpdate:modelValue": t[20] || (t[20] = w=>e.connectFriendLink = w),
                    center: "",
                    autofocus: !0,
                    clearable: "",
                    class: "refCodeInput",
                    placeholder: this.uProfile.refCode,
                    style: {
                        color: "#fff",
                        "font-size": "1.1em"
                    },
                    border: !1
                }, null, 8, ["modelValue", "placeholder"])]),
                _: 1
            }), d(c, {
                type: "primary",
                style: {
                    "margin-top": "10px"
                },
                loading: e.isConnectFriendProgress,
                "loading-text": e.t("Connecting a friend..."),
                onClick: r.connectFriend
            }, {
                default: ge(()=>[Ae(te(e.t("Connect a friend ")), 1)]),
                _: 1
            }, 8, ["loading", "loading-text", "onClick"])])]),
            _: 1
        }, 8, ["show"])) : ut("", !0), d(f, {
            show: e.isSupportPopupShow,
            "onUpdate:show": t[24] || (t[24] = w=>e.isSupportPopupShow = w),
            position: "bottom",
            closeable: ""
        }, {
            default: ge(()=>[H("div", $T, [DT, H("p", null, te(e.t("Before contacting support, please check the FAQ section for your question.")), 1), H("p", null, te(e.t("Here, you’ll find answers to the most frequently asked questions from users.")), 1), d(y, {
                modelValue: e.supportFaqValue,
                "onUpdate:modelValue": t[23] || (t[23] = w=>e.supportFaqValue = w)
            }, {
                default: ge(()=>[d(m, {
                    name: "1",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("My friend doesn't show up in the list")), 1)]),
                    default: ge(()=>[H("div", RT, [H("p", null, te(e.t("If the invited friend does not appear in your friends list, please ask them to enter your referral code in the [Indicate the friend who invited me] section. This section is located in the menu in the top right corner of the screen.")), 1), H("p", null, te(e.t("This option is available within 3 days after registration. If too much time has passed, it will not be possible to add a friend to the list.")), 1), H("p", null, te(e.t("If three days have passed, your friend can delete the account and try using the link again.")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "2",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("I already have an account on Bybit. What should I do?")), 1)]),
                    default: ge(()=>[H("div", LT, [H("p", null, te(e.t("You can complete our tasks only if you register a NEW account using the button in our task.")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "3",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("I can't receive the prize for subscribing to the channel.")), 1)]),
                    default: ge(()=>[H("div", MT, [H("p", null, te(e.t("You need to claim your reward in the [Quests] section.")), 1), H("p", null, te(e.t("Click “Join @muskempire” and then claim a reward.")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "4",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("How do I delete my account?")), 1)]),
                    default: ge(()=>[H("div", FT, [H("p", null, te(e.t("To delete the account, you need to go to the section with account information. There, you will find the ”Delete account” button.")), 1), H("p", null, te(e.t("Please note that once deleted, you will not be able to recover your data!")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "5",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("Why doesn't the daily reward carry over to the next day?")), 1)]),
                    default: ge(()=>[H("div", VT, [H("p", null, te(e.t("If you can't receive the daily reward for the next day, it means you haven't met the condition of inviting friends. In the top right corner of the specific day's card, it indicates how many more friends you need to invite to receive the reward.")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "6",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("What are stars and how can you earn them?")), 1)]),
                    default: ge(()=>[H("div", NT, [H("p", null, te(e.t("Telegram Stars are an internal currency of Telegram. You can purchase them via the link and use them in our Premium Store")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "7",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("When is the Airdrop?")), 1)]),
                    default: ge(()=>[H("div", HT, [H("p", null, [Ae(te(e.t("Soon. Stay updated by following the latest information in our community:")) + " ", 1), zT])])]),
                    _: 1
                }), d(m, {
                    name: "8",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("What is most important in negotiations?")), 1)]),
                    default: ge(()=>[H("div", jT, [H("p", null, te(e.t("In the ”Negotiations” section, there is a detailed guide on how to participate in this activity. If players choose the same cards, the winner is determined by the level of development of certain skills. The first skill for comparison is ”Negotiations”.")), 1)])]),
                    _: 1
                }), d(m, {
                    name: "11",
                    border: !1
                }, {
                    title: ge(()=>[Ae(te(e.t("I have another question")), 1)]),
                    default: ge(()=>[H("div", UT, [d(c, {
                        onClick: t[22] || (t[22] = w=>e._openUrl("https://t.me/x_assistance")),
                        type: "primary",
                        round: ""
                    }, {
                        default: ge(()=>[Ae(te(e.t("Write to support")), 1)]),
                        _: 1
                    })])]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"])])]),
            _: 1
        }, 8, ["show"])]),
        _: 1
    }, 8, ["show", "transition"])], 2)])])])], 2)
}
const YT = Bo(qk, [["render", WT], ["__scopeId", "data-v-579471a3"]])
  , qT = {
    components: {},
    async created() {},
    props: {},
    data: function() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {
        next() {
            this.$refs.swipeOnboardingStart.next()
        }
    }
}
  , KT = {
    class: "onboardingStart center",
    style: {
        direction: "ltr"
    }
}
  , GT = {
    class: "container"
}
  , XT = {
    class: "goldText title"
}
  , QT = {
    class: "center buttonNextContainer"
}
  , ZT = {
    class: "container"
}
  , JT = {
    class: "goldText title"
}
  , eP = {
    class: ""
}
  , tP = {
    class: "center buttonNextContainer"
}
  , nP = {
    class: "container"
}
  , oP = {
    class: "",
    style: {
        "margin-bottom": "0",
        "font-size": "1.5em"
    }
}
  , aP = {
    class: "goldText title"
}
  , rP = {
    class: "center buttonNextContainer"
};
function iP(e, t, n, o, a, r) {
    const i = Ne("van-button")
      , s = Ne("van-swipe-item")
      , l = Ne("van-swipe");
    return Se(),
    He("div", KT, [d(l, {
        class: "onboardingSwipe",
        autoplay: 0,
        loop: !1,
        ref: "swipeOnboardingStart",
        style: {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0"
        },
        duration: e.isRtl ? 0 : 500,
        touchable: !e.isRtl
    }, {
        default: ge(()=>[d(s, {
            class: Nt(["item", {
                rtl: e.isRtl
            }])
        }, {
            default: ge(()=>[H("div", GT, [H("div", XT, te(e.t("Let's get rich together")), 1), H("div", {
                class: "maskot",
                style: Tt({
                    backgroundImage: `url(${e._getAvatarByLevel(3)})`
                })
            }, null, 4), H("div", QT, [d(i, {
                class: "buttonNext",
                icon: "arrow",
                "icon-position": "right",
                onClick: r.next,
                type: "primary",
                round: ""
            }, {
                default: ge(()=>[Ae(te(e.t("Next")), 1)]),
                _: 1
            }, 8, ["onClick"])])])]),
            _: 1
        }, 8, ["class"]), d(s, {
            class: Nt(["item", {
                rtl: e.isRtl
            }])
        }, {
            default: ge(()=>[H("div", ZT, [H("div", JT, te(e.t("Take real tokens")), 1), H("p", eP, te(e.t("Improve your character, earn coins and exchange them for real tokens")), 1), H("div", {
                class: "maskot",
                style: Tt({
                    backgroundImage: `url(${e._getAvatarByLevel(12)})`
                })
            }, null, 4), H("div", tP, [d(i, {
                class: "buttonNext",
                icon: "arrow",
                "icon-position": "right",
                onClick: r.next,
                type: "primary",
                round: ""
            }, {
                default: ge(()=>[Ae(te(e.t("Next")), 1)]),
                _: 1
            }, 8, ["onClick"])])])]),
            _: 1
        }, 8, ["class"]), d(s, {
            class: Nt(["item", {
                rtl: e.isRtl
            }])
        }, {
            default: ge(()=>[H("div", nP, [H("p", oP, te(e.t("Invite friends and get up to")), 1), H("div", aP, te(e.t("100,000,000 coins!")), 1), H("div", {
                class: "maskot",
                style: Tt({
                    backgroundImage: `url(${e._getAvatarByLevel(19)})`
                })
            }, null, 4), H("div", rP, [d(i, {
                type: "warning",
                round: "",
                class: "btnShadow",
                icon: "arrow",
                "icon-position": "right",
                onClick: t[0] || (t[0] = c=>e._completeOnboarding(e.onBoard.start))
            }, {
                default: ge(()=>[Ae(te(e.t("Start earn")), 1)]),
                _: 1
            })])])]),
            _: 1
        }, 8, ["class"])]),
        _: 1
    }, 8, ["duration", "touchable"])])
}
const sP = Bo(qT, [["render", iP], ["__scopeId", "data-v-4ebf6322"]])
  , lP = {
    components: {},
    async created() {},
    props: {
        level: {
            type: Number,
            required: !0
        }
    },
    data: function() {
        return {}
    },
    computed: {
        skills() {
            return this._getAvailableSkillsForLevel(this.level) ?? []
        }
    },
    watch: {},
    methods: {
        next() {},
        async completeOnboarding() {}
    }
}
  , cP = {
    class: "skillsByLevel"
}
  , uP = {
    class: "title"
}
  , dP = {
    class: "level"
};
function fP(e, t, n, o, a, r) {
    return Se(),
    He("div", cP, [(Se(!0),
    He(Fe, null, Ha(r.skills, i=>(Se(),
    He("div", {
        key: i.key,
        class: "skillItem",
        style: Tt({
            backgroundImage: `url(${e._getSkillImg(i.key)})`
        })
    }, [H("div", uP, te(i.title), 1), H("div", dP, te(i.level), 1)], 4))), 128))])
}
const hP = Bo(lP, [["render", fP], ["__scopeId", "data-v-30aa9df3"]])
  , gP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH1AQMAAAA6RJ5sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF+/v7BgYGDwXe/gAAAv9JREFUeJzt3TF2gzAMBmDnZWDMETgKRzNH4ygcIWMGHmps2UIiLpBmCfWvIY2LPl4nPUsOqSMbveviz8k9g391d0344WK0Nv3u4OHh4bf89R2vchjcn6/XDT+4HJcj/iHpzz8VHh7+W32v/LzhGUzsO10f+pjXcDnyMfXB5YhT4eHh4ZUPcXsupeBQJPOHnuDh4WvxcbF4CXh4ePjDvqM0TNnwOcz+Z+b5yxiLGen6JQEPD38yP629iX1voujHpf74uDD7H3h4ePjkC9Hq23HI/PdIwMPDV+JDTpvrSCCD4/5Hrkn/5OO1Rl/L/RP7y5u+g4eHP7nvpakSLwc+xud7P/LNOtm/8B4njnzD/kcdOAvge6v+zRPBw8P/G09H/N163uNwTqw/OdT8RUa2Q4SF+S08PHxtvjVe1Z9bnvL6mCklq4tLORsKof0MDw9fnX/pf265/6G4mUmJ4bUldZy8Pz8xvl/7/f4NHh7+232Xsv7mOacheqlfy7Vp6Z/Eh+oEDw//X/y6fzniQ4Rfpm0Nh3pkUJ0N9fxmmc108PDwlfsuzVhMyIxFlrkdkkKXAx4evlZP+hyYh7opeNmSOn8ed+cni58LfrC+0L/Bw8OfzHc5Y7t+0Lp+6P2LecpHPf8jZ0NLSG9F8PDwJ/f+Ix9exyWnT2T1/M9k57eXPKqBh4ev1ed9j8xYXFqmWJ0/e7md6b/e9C/9Gzw8/Fk9ZwYv01uuEaTPf14jVK/B+Kv185738PDwFfvRFYLbMTlMYj9x/Rpihvn8Ljw8fL2ebPTRq1B7I58+amvOn+Hh4eHFc5jz5yvJ5994mT5oR5Sf/xFU9E3R+xd/gYeHP51vY658/yMPbNM4N19bF5rc/xR8mxd7foCHh6/Wb9QPNeNV33/A7ZQa1HzmN/5+eHj47/Qyjh1LPs9fnD5/jtHH2zX53p6K+x94ePiqfA7pn25LMeqISH3/rCRms+XD2xYeHv6LvYnPvRQMW3KUV/9MsDj/DWXpkP9lfgwPD1+Bf9aPH6RrIHCorCwbAAAAAElFTkSuQmCC"
  , mP = {
    components: {
        NewSkillsByLevel: hP,
        OnboardingStart: sP,
        TopBar: YT,
        BottomBar: gk
    },
    async created() {
        this.startTime = new Date;
        try {
            await this.loadWithMinTime(2e3, async()=>{
                await this.auth(),
                await this.dbLoadDbData(),
                await this.loadPageData(),
                await this.preloadSounds()
            }
            ),
            this.$router.beforeEach(()=>{
                this._sound("page_change")
            }
            ),
            this.dbLoaded = !0
        } catch (e) {
            e === "platform" && (this.isPlatformOk = !1)
        }
    },
    async mounted() {
        this.$nextTick(function() {
            this.onLoaded(),
            this.updateTheme(),
            setInterval((function() {
                "money"in this.stores.user.hero && (this.stores.user.addMoney(this.uHero.moneyPerHour / 3600),
                this.stores.user.energyAdd())
            }
            ).bind(this), 1e3),
            setInterval((async function() {
                await this._sendTappedData();
                const e = (new Date - this.stores.state.lastPingDate) / 1e3
                  , n = (new Date - this.startTime) / 1e3 > 300 ? 120 : 30;
                if (e > n && this.uProfile.id)
                    if (this.$route.name !== "negotiations") {
                        if (!this.isPingInProcess) {
                            this.isPingInProcess = !0;
                            try {
                                const o = await this.apiCall("sync");
                                this.stores.user.setHero(o.hero)
                            } catch (o) {
                                throw this.isPingInProcess = !1,
                                o
                            }
                            this.isPingInProcess = !1
                        }
                    } else
                        try {
                            await this.apiCall("ping")
                        } catch (o) {
                            console.error(o)
                        }
            }
            ).bind(this), 5e3)
        })
    },
    data() {
        return {
            isPlatformOk: !0,
            isPingInProcess: !1,
            dbLoaded: !1,
            isOfflineBonusShow: !1,
            isLevelChange: !1,
            debugData: null,
            offlineBonusLocalVar: 0,
            startTime: null
        }
    },
    computed: {},
    watch: {
        uHero(e, t) {
            "level"in t && e.level !== t.level && (this.isLevelChange = !0,
            this._vibrate("success"),
            this._sound("level_up"));
            const n = e.moneyPerHour / 60 * 1;
            "offlineBonus"in e && e.offlineBonus > n && (this.offlineBonusLocalVar = e.offlineBonus,
            this.isOfflineBonusShow = !0,
            this._vibrate("success"),
            this._sound("offline_bonus"))
        },
        dbLoaded(e) {},
        uProfile: {
            immediate: !0,
            handler() {
                this._isViewportEventAssigned || (this._isViewportEventAssigned = !0,
                window.Telegram.WebApp.onEvent("viewportChanged", e=>{
                    e && setTimeout(()=>{
                        const t = window.Telegram.WebApp.viewportStableHeight
                          , n = window.innerHeight - t;
                        Array.from(document.getElementsByClassName("van-popup--bottom")).forEach(a=>a.style.bottom = n + "px"),
                        window.scrollTo(document.documentElement)
                    }
                    , 800)
                }
                ))
            }
        }
    },
    methods: {
        async preloadSounds() {
            return await Promise.all([Un("level_up", "/assets/sound/level_up.mp3"), Un("offline_bonus", "/assets/sound/offline_bonus.mp3"), Un("page_change", "/assets/sound/page_change.mp3"), Un("soft_tap", "/assets/sound/soft_tap.mp3"), Un("take_money", "/assets/sound/take_money.mp3"), Un("take_pph", "/assets/sound/take_pph.mp3"), Un("tap", "/assets/sound/tap.wav"), Un("tap2", "/assets/sound/tap2.wav")])
        },
        async loadWithMinTime(e, t) {
            const n = Date.now();
            await t();
            const o = Date.now() - n;
            o < e && await this._delay(e - o)
        },
        onLoaded() {
            this._isIphone() ? document.documentElement.classList.add("isIphone") : (document.documentElement.classList.add("isNotIphone"),
            this.onScroll(),
            document.documentElement.addEventListener("touchstart", this.onScroll, {
                passive: !1
            }),
            document.documentElement.addEventListener("touchmove", this.onScroll, {
                passive: !1
            }),
            document.documentElement.addEventListener("scroll", this.onScroll, {
                passive: !1
            }))
        },
        onScroll() {
            window.scrollY <= 1 && window.scrollTo(0, 1)
        },
        updateTheme() {
            const e = "#1F3152";
            window.Telegram.WebApp.setHeaderColor(e),
            window.Telegram.WebApp.setBackgroundColor(e)
        },
        play() {},
        pause() {
            this.$refs.bgmusic.pause()
        },
        async claimOfflineBonus() {
            this.isOfflineBonusShow = !1;
            try {
                const e = await this.apiCall("claimOfflineBonus");
                this._animateMoneyFromBottom(this.offlineBonusLocalVar),
                this.stores.user.setHero(e.hero),
                this.offlineBonusLocalVar = 0
            } catch (e) {
                this._catchError(e)
            }
        }
    }
}
  , uo = e=>(Rd("data-v-7df5765a"),
e = e(),
Ld(),
e)
  , vP = {
    key: 0,
    style: {
        "align-content": "center",
        position: "fixed",
        top: "10%",
        left: "0"
    },
    class: "center"
}
  , bP = {
    class: "goldText"
}
  , yP = uo(()=>H("img", {
    src: gP,
    alt: "",
    style: {
        "max-width": "80%",
        background: "#fff",
        padding: "10px"
    }
}, null, -1))
  , pP = uo(()=>H("a", {
    href: "https://t.me/muskempire_bot",
    style: {
        color: "#fff",
        "font-size": "1.5em"
    }
}, "https://t.me/muskempire_bot", -1))
  , wP = uo(()=>H("audio", {
    id: "sound",
    src: ""
}, null, -1))
  , SP = {
    key: 0,
    class: "loadingScreen"
}
  , CP = uo(()=>H("div", {
    class: "tokenWillBe"
}, [H("div", null, "A financial strategy game with a real token economy inside")], -1))
  , _P = {
    class: "leSnake"
}
  , xP = uo(()=>H("div", {
    class: "progressBar"
}, [H("div", {
    class: "progressResult"
})], -1))
  , kP = {
    id: "scrollable",
    class: "scrollable"
}
  , TP = {
    class: "container center"
}
  , PP = {
    class: "goldText"
}
  , EP = uo(()=>H("span", {
    class: "money26"
}, null, -1))
  , AP = {
    class: "container center",
    style: {
        "padding-bottom": "40px"
    }
}
  , BP = {
    class: "goldText"
}
  , OP = uo(()=>H("br", null, null, -1))
  , IP = {
    class: "improvesLines goldLines",
    style: {
        margin: "20px 0"
    }
}
  , $P = {
    style: {
        "margin-bottom": "10px"
    }
}
  , DP = {
    key: 0
}
  , RP = uo(()=>H("br", null, null, -1))
  , LP = {
    key: 3,
    style: {
        width: "100%",
        padding: "5px",
        background: "#bbb",
        position: "fixed",
        top: "150px",
        left: "0"
    }
};
function MP(e, t, n, o, a, r) {
    const i = Ne("van-config-provider")
      , s = Ne("OnboardingStart")
      , l = Ne("TopBar")
      , c = Ne("RouterView")
      , u = Ne("van-button")
      , f = Ne("van-count-down")
      , h = Ne("van-popup")
      , g = Ne("new-skills-by-level")
      , S = Ne("BottomBar");
    return Se(),
    He("div", null, [a.isPlatformOk ? (Se(),
    He(Fe, {
        key: 1
    }, [d(i, {
        theme: "dark"
    }), wP, a.dbLoaded ? e._isOnboardingComplete(e.onBoard.start) ? (Se(),
    He(Fe, {
        key: 2
    }, [d(l, {
        "is-show-pph": this.stores.state.topBar.isShowPph,
        "is-show-money": this.stores.state.topBar.isShowMoney,
        "is-need-bg": this.stores.state.topBar.isNeedBg,
        "is-no-bg": this.stores.state.topBar.isNoBg,
        "is-show-lottery": this.stores.state.topBar.isShowLottery
    }, null, 8, ["is-show-pph", "is-show-money", "is-need-bg", "is-no-bg", "is-show-lottery"]), H("div", kP, [d(c)]), d(h, {
        show: a.isOfflineBonusShow,
        "onUpdate:show": t[1] || (t[1] = p=>a.isOfflineBonusShow = p),
        round: "",
        position: "bottom"
    }, {
        default: ge(()=>[H("div", TP, [e.uPurchase.extendedOfflineTimeLeft ? (Se(),
        He(Fe, {
            key: 1
        }, [H("h1", PP, te(e.t("Offline bonus")), 1), H("p", null, [Ae(te(e.t("You have an Offline Boost active.")) + " ", 1), d(f, {
            time: e.uPurchase.extendedOfflineTimeLeft * 1e3,
            style: {
                color: "#fff"
            }
        }, null, 8, ["time"])]), H("p", null, te(e.t("Your company keeps earning while you're offline.")), 1)], 64)) : (Se(),
        He(Fe, {
            key: 0
        }, [H("h1", null, te(e.t("Offline bonus")), 1), H("p", null, te(e.t("Your company keeps earning 3 hours while you're offline.")), 1), H("p", null, te(e.t("You can purchase a Boost increasing the offline bonus period.")), 1), d(u, {
            type: "primary",
            onClick: t[0] || (t[0] = p=>e.$router.push("/store/cards")),
            round: "",
            size: "small",
            icon: "star"
        }, {
            default: ge(()=>[Ae(te(e.t("Go to Store")), 1)]),
            _: 1
        }), H("p", null, te(e.t("Come back more often, employees miss you.")), 1)], 64)), H("h2", null, [EP, Ae(" +" + te(e._number(a.offlineBonusLocalVar)), 1)]), d(u, {
            type: "warning",
            class: "btnShadow",
            round: "",
            size: "large",
            onClick: r.claimOfflineBonus
        }, {
            default: ge(()=>[Ae(te(e.t("Claim")), 1)]),
            _: 1
        }, 8, ["onClick"])])]),
        _: 1
    }, 8, ["show"]), a.isLevelChange ? (Se(),
    vt(h, {
        key: 0,
        show: a.isLevelChange,
        "onUpdate:show": t[3] || (t[3] = p=>a.isLevelChange = p),
        round: "",
        class: "levelUp",
        position: "bottom"
    }, {
        default: ge(()=>[H("div", AP, [H("div", {
            class: "avatar aniBounceZoomIn",
            style: Tt({
                backgroundImage: `url(${e._getAvatarByLevel(e.uHero.level)})`
            })
        }, null, 4), H("h1", BP, te(e.t("Level UP!")), 1), H("div", null, [Ae(te(e.t("Congratulations, you got")) + " ", 1), OP, Ae(te(e.t("Lv.")) + " " + te(e.uHero.level) + " — " + te(e.t(e.dbLevelsByLevel[e.uHero.level].title)), 1)]), H("div", IP, [H("div", $P, te(e.t("Profit Per Tap increased.")), 1), e._getAvailableSkillsForLevel(e.uHero.level).length > 0 ? (Se(),
        He("div", DP, [Ae(te(e.t("New improves:")) + " ", 1), RP, d(g, {
            level: e.uHero.level,
            style: {
                "overflow-y": "scroll",
                "max-height": "170px"
            }
        }, null, 8, ["level"])])) : ut("", !0)]), d(u, {
            type: "success",
            size: "large",
            round: "",
            onClick: t[2] || (t[2] = p=>{
                a.isLevelChange = !1
            }
            )
        }, {
            default: ge(()=>[Ae(te(e.t("I'm good!")), 1)]),
            _: 1
        })])]),
        _: 1
    }, 8, ["show"])) : ut("", !0), d(S)], 64)) : (Se(),
    vt(s, {
        key: 1
    })) : (Se(),
    He("div", SP, [CP, H("div", _P, [(Se(),
    He(Fe, null, Ha("Loading...", (p,b)=>H("span", {
        key: p,
        style: Tt({
            animationDelay: b * .2 + "s"
        })
    }, te(p), 5)), 64))]), xP])), a.debugData ? (Se(),
    He("div", LP, te(a.debugData), 1)) : ut("", !0)], 64)) : (Se(),
    He("div", vP, [H("h1", bP, te(e.t("Use Telegram on your mobile!")), 1), yP, pP]))])
}
const FP = Bo(mP, [["render", MP], ["__scopeId", "data-v-7df5765a"]])
  , VP = "modulepreload"
  , NP = function(e) {
    return "/" + e
}
  , Lu = {}
  , Ue = function(t, n, o) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const r = document.querySelector("meta[property=csp-nonce]")
          , i = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
        a = Promise.all(n.map(s=>{
            if (s = NP(s),
            s in Lu)
                return;
            Lu[s] = !0;
            const l = s.endsWith(".css")
              , c = l ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${s}"]${c}`))
                return;
            const u = document.createElement("link");
            if (u.rel = l ? "stylesheet" : VP,
            l || (u.as = "script",
            u.crossOrigin = ""),
            u.href = s,
            i && u.setAttribute("nonce", i),
            document.head.appendChild(u),
            l)
                return new Promise((f,h)=>{
                    u.addEventListener("load", f),
                    u.addEventListener("error", ()=>h(new Error(`Unable to preload CSS for ${s}`)))
                }
                )
        }
        ))
    }
    return a.then(()=>t()).catch(r=>{
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = r,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw r
    }
    )
};
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Wo = typeof document < "u";
function HP(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ze = Object.assign;
function ts(e, t) {
    const n = {};
    for (const o in t) {
        const a = t[o];
        n[o] = Jt(a) ? a.map(e) : e(a)
    }
    return n
}
const Da = ()=>{}
  , Jt = Array.isArray
  , tg = /#/g
  , zP = /&/g
  , jP = /\//g
  , UP = /=/g
  , WP = /\?/g
  , ng = /\+/g
  , YP = /%5B/g
  , qP = /%5D/g
  , og = /%5E/g
  , KP = /%60/g
  , ag = /%7B/g
  , GP = /%7C/g
  , rg = /%7D/g
  , XP = /%20/g;
function Dl(e) {
    return encodeURI("" + e).replace(GP, "|").replace(YP, "[").replace(qP, "]")
}
function QP(e) {
    return Dl(e).replace(ag, "{").replace(rg, "}").replace(og, "^")
}
function Ms(e) {
    return Dl(e).replace(ng, "%2B").replace(XP, "+").replace(tg, "%23").replace(zP, "%26").replace(KP, "`").replace(ag, "{").replace(rg, "}").replace(og, "^")
}
function ZP(e) {
    return Ms(e).replace(UP, "%3D")
}
function JP(e) {
    return Dl(e).replace(tg, "%23").replace(WP, "%3F")
}
function eE(e) {
    return e == null ? "" : JP(e).replace(jP, "%2F")
}
function Ga(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const tE = /\/$/
  , nE = e=>e.replace(tE, "");
function ns(e, t, n="/") {
    let o, a = {}, r = "", i = "";
    const s = t.indexOf("#");
    let l = t.indexOf("?");
    return s < l && s >= 0 && (l = -1),
    l > -1 && (o = t.slice(0, l),
    r = t.slice(l + 1, s > -1 ? s : t.length),
    a = e(r)),
    s > -1 && (o = o || t.slice(0, s),
    i = t.slice(s, t.length)),
    o = iE(o ?? t, n),
    {
        fullPath: o + (r && "?") + r + i,
        path: o,
        query: a,
        hash: Ga(i)
    }
}
function oE(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Mu(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function aE(e, t, n) {
    const o = t.matched.length - 1
      , a = n.matched.length - 1;
    return o > -1 && o === a && oa(t.matched[o], n.matched[a]) && ig(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function oa(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function ig(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!rE(e[n], t[n]))
            return !1;
    return !0
}
function rE(e, t) {
    return Jt(e) ? Fu(e, t) : Jt(t) ? Fu(t, e) : e === t
}
function Fu(e, t) {
    return Jt(t) ? e.length === t.length && e.every((n,o)=>n === t[o]) : e.length === 1 && e[0] === t
}
function iE(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , o = e.split("/")
      , a = o[o.length - 1];
    (a === ".." || a === ".") && o.push("");
    let r = n.length - 1, i, s;
    for (i = 0; i < o.length; i++)
        if (s = o[i],
        s !== ".")
            if (s === "..")
                r > 1 && r--;
            else
                break;
    return n.slice(0, r).join("/") + "/" + o.slice(i).join("/")
}
var Xa;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Xa || (Xa = {}));
var Ra;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Ra || (Ra = {}));
function sE(e) {
    if (!e)
        if (Wo) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    nE(e)
}
const lE = /^[^#]+#/;
function cE(e, t) {
    return e.replace(lE, "#") + t
}
function uE(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , o = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0)
    }
}
const _i = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function dE(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , o = typeof n == "string" && n.startsWith("#")
          , a = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!a)
            return;
        t = uE(a, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Vu(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Fs = new Map;
function fE(e, t) {
    Fs.set(e, t)
}
function hE(e) {
    const t = Fs.get(e);
    return Fs.delete(e),
    t
}
let gE = ()=>location.protocol + "//" + location.host;
function sg(e, t) {
    const {pathname: n, search: o, hash: a} = t
      , r = e.indexOf("#");
    if (r > -1) {
        let s = a.includes(e.slice(r)) ? e.slice(r).length : 1
          , l = a.slice(s);
        return l[0] !== "/" && (l = "/" + l),
        Mu(l, "")
    }
    return Mu(n, e) + o + a
}
function mE(e, t, n, o) {
    let a = []
      , r = []
      , i = null;
    const s = ({state: h})=>{
        const g = sg(e, location)
          , S = n.value
          , p = t.value;
        let b = 0;
        if (h) {
            if (n.value = g,
            t.value = h,
            i && i === S) {
                i = null;
                return
            }
            b = p ? h.position - p.position : 0
        } else
            o(g);
        a.forEach(v=>{
            v(n.value, S, {
                delta: b,
                type: Xa.pop,
                direction: b ? b > 0 ? Ra.forward : Ra.back : Ra.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = n.value
    }
    function c(h) {
        a.push(h);
        const g = ()=>{
            const S = a.indexOf(h);
            S > -1 && a.splice(S, 1)
        }
        ;
        return r.push(g),
        g
    }
    function u() {
        const {history: h} = window;
        h.state && h.replaceState(ze({}, h.state, {
            scroll: _i()
        }), "")
    }
    function f() {
        for (const h of r)
            h();
        r = [],
        window.removeEventListener("popstate", s),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", s),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}
function Nu(e, t, n, o=!1, a=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: o,
        position: window.history.length,
        scroll: a ? _i() : null
    }
}
function vE(e) {
    const {history: t, location: n} = window
      , o = {
        value: sg(e, n)
    }
      , a = {
        value: t.state
    };
    a.value || r(o.value, {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function r(l, c, u) {
        const f = e.indexOf("#")
          , h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : gE() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", h),
            a.value = c
        } catch (g) {
            console.error(g),
            n[u ? "replace" : "assign"](h)
        }
    }
    function i(l, c) {
        const u = ze({}, t.state, Nu(a.value.back, l, a.value.forward, !0), c, {
            position: a.value.position
        });
        r(l, u, !0),
        o.value = l
    }
    function s(l, c) {
        const u = ze({}, a.value, t.state, {
            forward: l,
            scroll: _i()
        });
        r(u.current, u, !0);
        const f = ze({}, Nu(o.value, l, null), {
            position: u.position + 1
        }, c);
        r(l, f, !1),
        o.value = l
    }
    return {
        location: o,
        state: a,
        push: s,
        replace: i
    }
}
function bE(e) {
    e = sE(e);
    const t = vE(e)
      , n = mE(e, t.state, t.location, t.replace);
    function o(r, i=!0) {
        i || n.pauseListeners(),
        history.go(r)
    }
    const a = ze({
        location: "",
        base: e,
        go: o,
        createHref: cE.bind(null, e)
    }, t, n);
    return Object.defineProperty(a, "location", {
        enumerable: !0,
        get: ()=>t.location.value
    }),
    Object.defineProperty(a, "state", {
        enumerable: !0,
        get: ()=>t.state.value
    }),
    a
}
function yE(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function lg(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Wn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , cg = Symbol("");
var Hu;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Hu || (Hu = {}));
function aa(e, t) {
    return ze(new Error, {
        type: e,
        [cg]: !0
    }, t)
}
function Cn(e, t) {
    return e instanceof Error && cg in e && (t == null || !!(e.type & t))
}
const zu = "[^/]+?"
  , pE = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , wE = /[.+*?^${}()[\]/\\]/g;
function SE(e, t) {
    const n = ze({}, pE, t)
      , o = [];
    let a = n.start ? "^" : "";
    const r = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (a += "/");
        for (let f = 0; f < c.length; f++) {
            const h = c[f];
            let g = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0)
                f || (a += "/"),
                a += h.value.replace(wE, "\\$&"),
                g += 40;
            else if (h.type === 1) {
                const {value: S, repeatable: p, optional: b, regexp: v} = h;
                r.push({
                    name: S,
                    repeatable: p,
                    optional: b
                });
                const m = v || zu;
                if (m !== zu) {
                    g += 10;
                    try {
                        new RegExp(`(${m})`)
                    } catch (w) {
                        throw new Error(`Invalid custom RegExp for param "${S}" (${m}): ` + w.message)
                    }
                }
                let y = p ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
                f || (y = b && c.length < 2 ? `(?:/${y})` : "/" + y),
                b && (y += "?"),
                a += y,
                g += 20,
                b && (g += -8),
                p && (g += -20),
                m === ".*" && (g += -50)
            }
            u.push(g)
        }
        o.push(u)
    }
    if (n.strict && n.end) {
        const c = o.length - 1;
        o[c][o[c].length - 1] += .7000000000000001
    }
    n.strict || (a += "/?"),
    n.end ? a += "$" : n.strict && (a += "(?:/|$)");
    const i = new RegExp(a,n.sensitive ? "" : "i");
    function s(c) {
        const u = c.match(i)
          , f = {};
        if (!u)
            return null;
        for (let h = 1; h < u.length; h++) {
            const g = u[h] || ""
              , S = r[h - 1];
            f[S.name] = g && S.repeatable ? g.split("/") : g
        }
        return f
    }
    function l(c) {
        let u = ""
          , f = !1;
        for (const h of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const g of h)
                if (g.type === 0)
                    u += g.value;
                else if (g.type === 1) {
                    const {value: S, repeatable: p, optional: b} = g
                      , v = S in c ? c[S] : "";
                    if (Jt(v) && !p)
                        throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);
                    const m = Jt(v) ? v.join("/") : v;
                    if (!m)
                        if (b)
                            h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${S}"`);
                    u += m
                }
        }
        return u || "/"
    }
    return {
        re: i,
        score: o,
        keys: r,
        parse: s,
        stringify: l
    }
}
function CE(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const o = t[n] - e[n];
        if (o)
            return o;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function _E(e, t) {
    let n = 0;
    const o = e.score
      , a = t.score;
    for (; n < o.length && n < a.length; ) {
        const r = CE(o[n], a[n]);
        if (r)
            return r;
        n++
    }
    if (Math.abs(a.length - o.length) === 1) {
        if (ju(o))
            return 1;
        if (ju(a))
            return -1
    }
    return a.length - o.length
}
function ju(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const xE = {
    type: 0,
    value: ""
}
  , kE = /[a-zA-Z0-9_]/;
function TE(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[xE]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(g) {
        throw new Error(`ERR (${n})/"${c}": ${g}`)
    }
    let n = 0
      , o = n;
    const a = [];
    let r;
    function i() {
        r && a.push(r),
        r = []
    }
    let s = 0, l, c = "", u = "";
    function f() {
        c && (n === 0 ? r.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function h() {
        c += l
    }
    for (; s < e.length; ) {
        if (l = e[s++],
        l === "\\" && n !== 2) {
            o = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (c && f(),
            i()) : l === ":" ? (f(),
            n = 1) : h();
            break;
        case 4:
            h(),
            n = o;
            break;
        case 1:
            l === "(" ? n = 2 : kE.test(l) ? h() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && s--);
            break;
        case 2:
            l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && s--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    i(),
    a
}
function PE(e, t, n) {
    const o = SE(TE(e.path), n)
      , a = ze(o, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a),
    a
}
function EE(e, t) {
    const n = []
      , o = new Map;
    t = Yu({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function a(u) {
        return o.get(u)
    }
    function r(u, f, h) {
        const g = !h
          , S = AE(u);
        S.aliasOf = h && h.record;
        const p = Yu(t, u)
          , b = [S];
        if ("alias"in u) {
            const y = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const w of y)
                b.push(ze({}, S, {
                    components: h ? h.record.components : S.components,
                    path: w,
                    aliasOf: h ? h.record : S
                }))
        }
        let v, m;
        for (const y of b) {
            const {path: w} = y;
            if (f && w[0] !== "/") {
                const C = f.record.path
                  , x = C[C.length - 1] === "/" ? "" : "/";
                y.path = f.record.path + (w && x + w)
            }
            if (v = PE(y, f, p),
            h ? h.alias.push(v) : (m = m || v,
            m !== v && m.alias.push(v),
            g && u.name && !Wu(v) && i(u.name)),
            S.children) {
                const C = S.children;
                for (let x = 0; x < C.length; x++)
                    r(C[x], v, h && h.children[x])
            }
            h = h || v,
            (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && l(v)
        }
        return m ? ()=>{
            i(m)
        }
        : Da
    }
    function i(u) {
        if (lg(u)) {
            const f = o.get(u);
            f && (o.delete(u),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(i),
            f.alias.forEach(i))
        } else {
            const f = n.indexOf(u);
            f > -1 && (n.splice(f, 1),
            u.record.name && o.delete(u.record.name),
            u.children.forEach(i),
            u.alias.forEach(i))
        }
    }
    function s() {
        return n
    }
    function l(u) {
        let f = 0;
        for (; f < n.length && _E(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !ug(u, n[f])); )
            f++;
        n.splice(f, 0, u),
        u.record.name && !Wu(u) && o.set(u.record.name, u)
    }
    function c(u, f) {
        let h, g = {}, S, p;
        if ("name"in u && u.name) {
            if (h = o.get(u.name),
            !h)
                throw aa(1, {
                    location: u
                });
            p = h.record.name,
            g = ze(Uu(f.params, h.keys.filter(m=>!m.optional).concat(h.parent ? h.parent.keys.filter(m=>m.optional) : []).map(m=>m.name)), u.params && Uu(u.params, h.keys.map(m=>m.name))),
            S = h.stringify(g)
        } else if (u.path != null)
            S = u.path,
            h = n.find(m=>m.re.test(S)),
            h && (g = h.parse(S),
            p = h.record.name);
        else {
            if (h = f.name ? o.get(f.name) : n.find(m=>m.re.test(f.path)),
            !h)
                throw aa(1, {
                    location: u,
                    currentLocation: f
                });
            p = h.record.name,
            g = ze({}, f.params, u.params),
            S = h.stringify(g)
        }
        const b = [];
        let v = h;
        for (; v; )
            b.unshift(v.record),
            v = v.parent;
        return {
            name: p,
            path: S,
            params: g,
            matched: b,
            meta: OE(b)
        }
    }
    return e.forEach(u=>r(u)),
    {
        addRoute: r,
        resolve: c,
        removeRoute: i,
        getRoutes: s,
        getRecordMatcher: a
    }
}
function Uu(e, t) {
    const n = {};
    for (const o of t)
        o in e && (n[o] = e[o]);
    return n
}
function AE(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: BE(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function BE(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const o in e.components)
            t[o] = typeof n == "object" ? n[o] : n;
    return t
}
function Wu(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function OE(e) {
    return e.reduce((t,n)=>ze(t, n.meta), {})
}
function Yu(e, t) {
    const n = {};
    for (const o in e)
        n[o] = o in t ? t[o] : e[o];
    return n
}
function ug(e, t) {
    return t.children.some(n=>n === e || ug(e, n))
}
function IE(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const o = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let a = 0; a < o.length; ++a) {
        const r = o[a].replace(ng, " ")
          , i = r.indexOf("=")
          , s = Ga(i < 0 ? r : r.slice(0, i))
          , l = i < 0 ? null : Ga(r.slice(i + 1));
        if (s in t) {
            let c = t[s];
            Jt(c) || (c = t[s] = [c]),
            c.push(l)
        } else
            t[s] = l
    }
    return t
}
function qu(e) {
    let t = "";
    for (let n in e) {
        const o = e[n];
        if (n = ZP(n),
        o == null) {
            o !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Jt(o) ? o.map(r=>r && Ms(r)) : [o && Ms(o)]).forEach(r=>{
            r !== void 0 && (t += (t.length ? "&" : "") + n,
            r != null && (t += "=" + r))
        }
        )
    }
    return t
}
function $E(e) {
    const t = {};
    for (const n in e) {
        const o = e[n];
        o !== void 0 && (t[n] = Jt(o) ? o.map(a=>a == null ? null : "" + a) : o == null ? o : "" + o)
    }
    return t
}
const DE = Symbol("")
  , Ku = Symbol("")
  , Rl = Symbol("")
  , dg = Symbol("")
  , Vs = Symbol("");
function _a() {
    let e = [];
    function t(o) {
        return e.push(o),
        ()=>{
            const a = e.indexOf(o);
            a > -1 && e.splice(a, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e.slice(),
        reset: n
    }
}
function Qn(e, t, n, o, a, r=i=>i()) {
    const i = o && (o.enterCallbacks[a] = o.enterCallbacks[a] || []);
    return ()=>new Promise((s,l)=>{
        const c = h=>{
            h === !1 ? l(aa(4, {
                from: n,
                to: t
            })) : h instanceof Error ? l(h) : yE(h) ? l(aa(2, {
                from: t,
                to: h
            })) : (i && o.enterCallbacks[a] === i && typeof h == "function" && i.push(h),
            s())
        }
          , u = r(()=>e.call(o && o.instances[a], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)),
        f.catch(h=>l(h))
    }
    )
}
function os(e, t, n, o, a=r=>r()) {
    const r = [];
    for (const i of e)
        for (const s in i.components) {
            let l = i.components[s];
            if (!(t !== "beforeRouteEnter" && !i.instances[s]))
                if (RE(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && r.push(Qn(u, n, o, i, s, a))
                } else {
                    let c = l();
                    r.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));
                        const f = HP(u) ? u.default : u;
                        i.components[s] = f;
                        const g = (f.__vccOpts || f)[t];
                        return g && Qn(g, n, o, i, s, a)()
                    }
                    ))
                }
        }
    return r
}
function RE(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Gu(e) {
    const t = Pt(Rl)
      , n = Pt(dg)
      , o = $(()=>{
        const l = Xt(e.to);
        return t.resolve(l)
    }
    )
      , a = $(()=>{
        const {matched: l} = o.value
          , {length: c} = l
          , u = l[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const h = f.findIndex(oa.bind(null, u));
        if (h > -1)
            return h;
        const g = Xu(l[c - 2]);
        return c > 1 && Xu(u) === g && f[f.length - 1].path !== g ? f.findIndex(oa.bind(null, l[c - 2])) : h
    }
    )
      , r = $(()=>a.value > -1 && VE(n.params, o.value.params))
      , i = $(()=>a.value > -1 && a.value === n.matched.length - 1 && ig(n.params, o.value.params));
    function s(l={}) {
        return FE(l) ? t[Xt(e.replace) ? "replace" : "push"](Xt(e.to)).catch(Da) : Promise.resolve()
    }
    return {
        route: o,
        href: $(()=>o.value.href),
        isActive: r,
        isExactActive: i,
        navigate: s
    }
}
const LE = j({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Gu,
    setup(e, {slots: t}) {
        const n = Ge(Gu(e))
          , {options: o} = Pt(Rl)
          , a = $(()=>({
            [Qu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
            [Qu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const r = t.default && t.default(n);
            return e.custom ? r : il("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: a.value
            }, r)
        }
    }
})
  , ME = LE;
function FE(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function VE(e, t) {
    for (const n in t) {
        const o = t[n]
          , a = e[n];
        if (typeof o == "string") {
            if (o !== a)
                return !1
        } else if (!Jt(a) || a.length !== o.length || o.some((r,i)=>r !== a[i]))
            return !1
    }
    return !0
}
function Xu(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Qu = (e,t,n)=>e ?? t ?? n
  , NE = j({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const o = Pt(Vs)
          , a = $(()=>e.route || o.value)
          , r = Pt(Ku, 0)
          , i = $(()=>{
            let c = Xt(r);
            const {matched: u} = a.value;
            let f;
            for (; (f = u[c]) && !f.components; )
                c++;
            return c
        }
        )
          , s = $(()=>a.value.matched[i.value]);
        kn(Ku, $(()=>i.value + 1)),
        kn(DE, s),
        kn(Vs, a);
        const l = R();
        return ae(()=>[l.value, s.value, e.name], ([c,u,f],[h,g,S])=>{
            u && (u.instances[f] = c,
            g && g !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
            u.updateGuards.size || (u.updateGuards = g.updateGuards))),
            c && u && (!g || !oa(u, g) || !h) && (u.enterCallbacks[f] || []).forEach(p=>p(c))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const c = a.value
              , u = e.name
              , f = s.value
              , h = f && f.components[u];
            if (!h)
                return Zu(n.default, {
                    Component: h,
                    route: c
                });
            const g = f.props[u]
              , S = g ? g === !0 ? c.params : typeof g == "function" ? g(c) : g : null
              , b = il(h, ze({}, S, t, {
                onVnodeUnmounted: v=>{
                    v.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: l
            }));
            return Zu(n.default, {
                Component: b,
                route: c
            }) || b
        }
    }
});
function Zu(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const HE = NE;
function zE(e) {
    const t = EE(e.routes, e)
      , n = e.parseQuery || IE
      , o = e.stringifyQuery || qu
      , a = e.history
      , r = _a()
      , i = _a()
      , s = _a()
      , l = Qg(Wn);
    let c = Wn;
    Wo && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = ts.bind(null, P=>"" + P)
      , f = ts.bind(null, eE)
      , h = ts.bind(null, Ga);
    function g(P, F) {
        let V, J;
        return lg(P) ? (V = t.getRecordMatcher(P),
        J = F) : J = P,
        t.addRoute(J, V)
    }
    function S(P) {
        const F = t.getRecordMatcher(P);
        F && t.removeRoute(F)
    }
    function p() {
        return t.getRoutes().map(P=>P.record)
    }
    function b(P) {
        return !!t.getRecordMatcher(P)
    }
    function v(P, F) {
        if (F = ze({}, F || l.value),
        typeof P == "string") {
            const A = ns(n, P, F.path)
              , L = t.resolve({
                path: A.path
            }, F)
              , Y = a.createHref(A.fullPath);
            return ze(A, L, {
                params: h(L.params),
                hash: Ga(A.hash),
                redirectedFrom: void 0,
                href: Y
            })
        }
        let V;
        if (P.path != null)
            V = ze({}, P, {
                path: ns(n, P.path, F.path).path
            });
        else {
            const A = ze({}, P.params);
            for (const L in A)
                A[L] == null && delete A[L];
            V = ze({}, P, {
                params: f(A)
            }),
            F.params = f(F.params)
        }
        const J = t.resolve(V, F)
          , ve = P.hash || "";
        J.params = u(h(J.params));
        const ke = oE(o, ze({}, P, {
            hash: QP(ve),
            path: J.path
        }))
          , T = a.createHref(ke);
        return ze({
            fullPath: ke,
            hash: ve,
            query: o === qu ? $E(P.query) : P.query || {}
        }, J, {
            redirectedFrom: void 0,
            href: T
        })
    }
    function m(P) {
        return typeof P == "string" ? ns(n, P, l.value.path) : ze({}, P)
    }
    function y(P, F) {
        if (c !== P)
            return aa(8, {
                from: F,
                to: P
            })
    }
    function w(P) {
        return B(P)
    }
    function C(P) {
        return w(ze(m(P), {
            replace: !0
        }))
    }
    function x(P) {
        const F = P.matched[P.matched.length - 1];
        if (F && F.redirect) {
            const {redirect: V} = F;
            let J = typeof V == "function" ? V(P) : V;
            return typeof J == "string" && (J = J.includes("?") || J.includes("#") ? J = m(J) : {
                path: J
            },
            J.params = {}),
            ze({
                query: P.query,
                hash: P.hash,
                params: J.path != null ? {} : P.params
            }, J)
        }
    }
    function B(P, F) {
        const V = c = v(P)
          , J = l.value
          , ve = P.state
          , ke = P.force
          , T = P.replace === !0
          , A = x(V);
        if (A)
            return B(ze(m(A), {
                state: typeof A == "object" ? ze({}, ve, A.state) : ve,
                force: ke,
                replace: T
            }), F || V);
        const L = V;
        L.redirectedFrom = F;
        let Y;
        return !ke && aE(o, J, V) && (Y = aa(16, {
            to: L,
            from: J
        }),
        M(J, J, !0, !1)),
        (Y ? Promise.resolve(Y) : I(L, J)).catch(U=>Cn(U) ? Cn(U, 2) ? U : $e(U) : se(U, L, J)).then(U=>{
            if (U) {
                if (Cn(U, 2))
                    return B(ze({
                        replace: T
                    }, m(U.to), {
                        state: typeof U.to == "object" ? ze({}, ve, U.to.state) : ve,
                        force: ke
                    }), F || L)
            } else
                U = E(L, J, !0, T, ve);
            return k(L, J, U),
            U
        }
        )
    }
    function _(P, F) {
        const V = y(P, F);
        return V ? Promise.reject(V) : Promise.resolve()
    }
    function O(P) {
        const F = me.values().next().value;
        return F && typeof F.runWithContext == "function" ? F.runWithContext(P) : P()
    }
    function I(P, F) {
        let V;
        const [J,ve,ke] = jE(P, F);
        V = os(J.reverse(), "beforeRouteLeave", P, F);
        for (const A of J)
            A.leaveGuards.forEach(L=>{
                V.push(Qn(L, P, F))
            }
            );
        const T = _.bind(null, P, F);
        return V.push(T),
        ue(V).then(()=>{
            V = [];
            for (const A of r.list())
                V.push(Qn(A, P, F));
            return V.push(T),
            ue(V)
        }
        ).then(()=>{
            V = os(ve, "beforeRouteUpdate", P, F);
            for (const A of ve)
                A.updateGuards.forEach(L=>{
                    V.push(Qn(L, P, F))
                }
                );
            return V.push(T),
            ue(V)
        }
        ).then(()=>{
            V = [];
            for (const A of ke)
                if (A.beforeEnter)
                    if (Jt(A.beforeEnter))
                        for (const L of A.beforeEnter)
                            V.push(Qn(L, P, F));
                    else
                        V.push(Qn(A.beforeEnter, P, F));
            return V.push(T),
            ue(V)
        }
        ).then(()=>(P.matched.forEach(A=>A.enterCallbacks = {}),
        V = os(ke, "beforeRouteEnter", P, F, O),
        V.push(T),
        ue(V))).then(()=>{
            V = [];
            for (const A of i.list())
                V.push(Qn(A, P, F));
            return V.push(T),
            ue(V)
        }
        ).catch(A=>Cn(A, 8) ? A : Promise.reject(A))
    }
    function k(P, F, V) {
        s.list().forEach(J=>O(()=>J(P, F, V)))
    }
    function E(P, F, V, J, ve) {
        const ke = y(P, F);
        if (ke)
            return ke;
        const T = F === Wn
          , A = Wo ? history.state : {};
        V && (J || T ? a.replace(P.fullPath, ze({
            scroll: T && A && A.scroll
        }, ve)) : a.push(P.fullPath, ve)),
        l.value = P,
        M(P, F, V, T),
        $e()
    }
    let D;
    function Q() {
        D || (D = a.listen((P,F,V)=>{
            if (!ne.listening)
                return;
            const J = v(P)
              , ve = x(J);
            if (ve) {
                B(ze(ve, {
                    replace: !0
                }), J).catch(Da);
                return
            }
            c = J;
            const ke = l.value;
            Wo && fE(Vu(ke.fullPath, V.delta), _i()),
            I(J, ke).catch(T=>Cn(T, 12) ? T : Cn(T, 2) ? (B(T.to, J).then(A=>{
                Cn(A, 20) && !V.delta && V.type === Xa.pop && a.go(-1, !1)
            }
            ).catch(Da),
            Promise.reject()) : (V.delta && a.go(-V.delta, !1),
            se(T, J, ke))).then(T=>{
                T = T || E(J, ke, !1),
                T && (V.delta && !Cn(T, 8) ? a.go(-V.delta, !1) : V.type === Xa.pop && Cn(T, 20) && a.go(-1, !1)),
                k(J, ke, T)
            }
            ).catch(Da)
        }
        ))
    }
    let oe = _a(), N = _a(), Z;
    function se(P, F, V) {
        $e(P);
        const J = N.list();
        return J.length ? J.forEach(ve=>ve(P, F, V)) : console.error(P),
        Promise.reject(P)
    }
    function Ee() {
        return Z && l.value !== Wn ? Promise.resolve() : new Promise((P,F)=>{
            oe.add([P, F])
        }
        )
    }
    function $e(P) {
        return Z || (Z = !P,
        Q(),
        oe.list().forEach(([F,V])=>P ? V(P) : F()),
        oe.reset()),
        P
    }
    function M(P, F, V, J) {
        const {scrollBehavior: ve} = e;
        if (!Wo || !ve)
            return Promise.resolve();
        const ke = !V && hE(Vu(P.fullPath, 0)) || (J || !V) && history.state && history.state.scroll || null;
        return Pe().then(()=>ve(P, F, ke)).then(T=>T && dE(T)).catch(T=>se(T, P, F))
    }
    const K = P=>a.go(P);
    let fe;
    const me = new Set
      , ne = {
        currentRoute: l,
        listening: !0,
        addRoute: g,
        removeRoute: S,
        hasRoute: b,
        getRoutes: p,
        resolve: v,
        options: e,
        push: w,
        replace: C,
        go: K,
        back: ()=>K(-1),
        forward: ()=>K(1),
        beforeEach: r.add,
        beforeResolve: i.add,
        afterEach: s.add,
        onError: N.add,
        isReady: Ee,
        install(P) {
            const F = this;
            P.component("RouterLink", ME),
            P.component("RouterView", HE),
            P.config.globalProperties.$router = F,
            Object.defineProperty(P.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>Xt(l)
            }),
            Wo && !fe && l.value === Wn && (fe = !0,
            w(a.location).catch(ve=>{}
            ));
            const V = {};
            for (const ve in Wn)
                Object.defineProperty(V, ve, {
                    get: ()=>l.value[ve],
                    enumerable: !0
                });
            P.provide(Rl, F),
            P.provide(dg, _d(V)),
            P.provide(Vs, l);
            const J = P.unmount;
            me.add(P),
            P.unmount = function() {
                me.delete(P),
                me.size < 1 && (c = Wn,
                D && D(),
                D = null,
                l.value = Wn,
                fe = !1,
                Z = !1),
                J()
            }
        }
    };
    function ue(P) {
        return P.reduce((F,V)=>F.then(()=>O(V)), Promise.resolve())
    }
    return ne
}
function jE(e, t) {
    const n = []
      , o = []
      , a = []
      , r = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < r; i++) {
        const s = t.matched[i];
        s && (e.matched.find(c=>oa(c, s)) ? o.push(s) : n.push(s));
        const l = e.matched[i];
        l && (t.matched.find(c=>oa(c, l)) || a.push(l))
    }
    return [n, o, a]
}
const Qa = zE({
    history: bE("/"),
    routes: [{
        path: "/",
        component: ()=>Ue(()=>import("./Main-DEGC7KDe.js"), __vite__mapDeps([0, 1]))
    }, {
        path: "/main",
        name: "main",
        component: ()=>Ue(()=>import("./Main-DEGC7KDe.js"), __vite__mapDeps([0, 1]))
    }, {
        path: "/mining",
        name: "mining",
        component: ()=>Ue(()=>import("./Mining-Cbz9SFEg.js"), __vite__mapDeps([2, 3]))
    }, {
        path: "/improve",
        component: ()=>Ue(()=>import("./Improve-CKOj4fzj.js"), __vite__mapDeps([4, 5, 6]))
    }, {
        path: "/improve/:routeCategory",
        component: ()=>Ue(()=>import("./Improve-CKOj4fzj.js"), __vite__mapDeps([4, 5, 6]))
    }, {
        path: "/improve/:routeCategory/:routeKey",
        component: ()=>Ue(()=>import("./Improve-CKOj4fzj.js"), __vite__mapDeps([4, 5, 6]))
    }, {
        path: "/friends",
        name: "Friends",
        component: ()=>Ue(()=>import("./Friends-ClH8At-8.js"), __vite__mapDeps([7, 8]))
    }, {
        path: "/communities",
        name: "communities",
        component: ()=>Ue(()=>import("./Communities-Np4DfjFE.js"), __vite__mapDeps([9, 10]))
    }, {
        path: "/rich/list",
        name: "rich_list",
        component: ()=>Ue(()=>import("./RichList-B73jcPsI.js"), __vite__mapDeps([11, 12, 13]))
    }, {
        path: "/negotiations",
        name: "negotiations",
        component: ()=>Ue(()=>import("./Negotiations-ByuAO1xE.js"), __vite__mapDeps([14, 15]))
    }, {
        path: "/negotiations/leaderboards",
        name: "negotiations_leaderboards",
        component: ()=>Ue(()=>import("./NegotiationsLeaderboards-qL8bGrkH.js"), __vite__mapDeps([16, 17]))
    }, {
        path: "/quests",
        name: "quests",
        component: ()=>Ue(()=>import("./Quests-DipN4kRL.js"), __vite__mapDeps([18, 19, 20]))
    }, {
        path: "/quests/:routeCategory",
        component: ()=>Ue(()=>import("./Quests-DipN4kRL.js"), __vite__mapDeps([18, 19, 20]))
    }, {
        path: "/quests/:routeCategory/:routeKey",
        component: ()=>Ue(()=>import("./Quests-DipN4kRL.js"), __vite__mapDeps([18, 19, 20]))
    }, {
        path: "/rating",
        name: "rating",
        component: ()=>Ue(()=>import("./Rating-BJvT7rqr.js"), __vite__mapDeps([21, 22]))
    }, {
        path: "/hero",
        name: "hero",
        component: ()=>Ue(()=>import("./Hero-CumWY7Dw.js"), __vite__mapDeps([23, 12, 24, 25]))
    }, {
        path: "/tg",
        name: "tg",
        component: ()=>Ue(()=>import("./Tg-CSFGpx3l.js"), [])
    }, {
        path: "/balance",
        name: "balance",
        component: ()=>Ue(()=>import("./Balance-FlDwMYnp.js"), [])
    }, {
        path: "/lottery",
        name: "lottery",
        component: ()=>Ue(()=>import("./Lottery-BZLXyQ5Z.js"), __vite__mapDeps([26, 27]))
    }, {
        path: "/fund",
        name: "fund",
        component: ()=>Ue(()=>import("./Fund-CyWEtFA3.js"), __vite__mapDeps([28, 29]))
    }, {
        path: "/city",
        name: "city",
        component: ()=>Ue(()=>import("./City-DbcgiKWY.js"), __vite__mapDeps([30, 31]))
    }, {
        path: "/city2",
        name: "city2",
        component: ()=>Ue(()=>import("./City2-quHXLZBO.js"), __vite__mapDeps([32, 33]))
    }, {
        path: "/translations",
        name: "translations",
        component: ()=>Ue(()=>import("./Translations-BWVWrlbi.js"), [])
    }, {
        path: "/store",
        name: "store",
        component: ()=>Ue(()=>import("./Store-BSeaqR-9.js"), __vite__mapDeps([34, 5, 19, 35]))
    }, {
        path: "/store/:routeCategory",
        component: ()=>Ue(()=>import("./Store-BSeaqR-9.js"), __vite__mapDeps([34, 5, 19, 35]))
    }, {
        path: "/binar",
        component: ()=>Ue(()=>import("./Binar-D9lY-u21.js"), __vite__mapDeps([36, 37]))
    }, {
        path: "/airdrop",
        component: ()=>Ue(()=>import("./Airdrop-CEGnxVsv.js"), __vite__mapDeps([38, 24, 39]))
    }, {
        path: "/empty",
        component: ()=>Ue(()=>import("./Empty-Bzi_I9Hh.js"), [])
    }]
})
  , UE = {
    methods: {
        async dbLoadDbData(e=["all"]) {
            try {
                let t, n;
                [t,n] = await Promise.all([this.apiCall("loadDb", {
                    dbs: e,
                    lang: this.stores.user.settings.lang
                }), this.apiCall("assets")]),
                Object.keys(t).forEach(o=>{
                    if (o === "dbSkills") {
                        const a = t[o].map(r=>(r.title = r.title.replaceAll("{", "").replaceAll("}", ""),
                        r.desc = r.desc.replaceAll("{", "").replaceAll("}", ""),
                        r));
                        this.stores.db.setSkills(a)
                    }
                    if (o === "dbLevels" && this.stores.db.setLevels(t[o]),
                    o === "dbEarnJob" && this.stores.db.setEarnJob(t[o]),
                    o === "dbSkillCategory" && this.stores.db.setSkillCategory(t[o]),
                    o === "dbSkillSubcategory" && this.stores.db.setSkillSubcategory(t[o]),
                    o === "dbNegotiationsLeague" && this.stores.db.setNegotiationsLeague(t[o]),
                    o === "dbNegotiationsStrategy" && this.stores.db.setNegotiationsStrategy(t[o]),
                    o === "dbDailyRewards" && this.stores.db.setDailyRewards(t[o]),
                    o === "dbTranslation" && this.stores.db.setTranslation(t[o]),
                    o === "dbQuests") {
                        const a = t[o].map(r=>{
                            var i, s;
                            return r.checkType === "improve" && r.checkData in this.dbSkillsByKey && (r.title = r.title.replace("{skillName}", (i = this.dbSkillsByKey[r.checkData]) == null ? void 0 : i.title),
                            r.desc = r.desc.replace("{skillName}", (s = this.dbSkillsByKey[r.checkData]) == null ? void 0 : s.title)),
                            r.title = r.title.replaceAll("{", "").replaceAll("}", ""),
                            r.desc = r.desc.replaceAll("{", "").replaceAll("}", ""),
                            r
                        }
                        );
                        this.stores.db.setQuests(a)
                    }
                    if (o === "dbLang" && this.stores.db.setLangs(t[o]),
                    o === "dbFunds") {
                        const a = t[o].map(r=>(r.title = r.title.replaceAll("{", "").replaceAll("}", ""),
                        r.desc = r.desc.replaceAll("{", "").replaceAll("}", ""),
                        r));
                        this.stores.db.setFunds(a)
                    }
                    o === "dbFundsRisk" && this.stores.db.setFundsRisk(t[o]),
                    o === "dbContentPrice" && this.stores.db.setContentPrice(t[o]),
                    o === "dbOnboarding" && this.stores.db.setOnboarding(t[o]),
                    o === "gameConfig" && (window.gameConfig = t[o])
                }
                ),
                Object.keys(n).forEach(o=>{
                    if (o === "dbPurchase") {
                        const a = n[o].map(r=>(r.title = r.title.replaceAll("{", "").replaceAll("}", ""),
                        r.desc = r.desc.replaceAll("{", "").replaceAll("}", ""),
                        r));
                        this.stores.db.setPurchases(a)
                    }
                }
                )
            } catch {
                qa({
                    type: "danger",
                    message: this.t("Problem with load data. Please Reload Page")
                })
            }
        }
    },
    computed: {
        dbSkinsByKey() {
            return this._arrayByKey(this.dbPurchase.filter(e=>e.type === "skin"), "key")
        },
        dbLevelsByLevel() {
            return this._arrayByKey(this.dbLevels, "level")
        },
        dbLangByKey() {
            return this._arrayByKey(this.dbLang, "key")
        },
        dbSkillsByKey() {
            return this._arrayByKey(this.dbSkills, "key")
        },
        dbEarnJobByKey() {
            return this._arrayByKey(this.dbEarnJob, "key")
        },
        dbSkillNeedToUpdateQuest() {
            return this.dbQuests.filter(e=>e.checkType === "improve").map(e=>e.checkData)
        },
        dbSkillSubcategoryByKey() {
            return this._arrayByKey(this.dbSkillSubcategory, "key")
        },
        dbNegotiationsLeagueByKey() {
            return this._arrayByKey(this.dbNegotiationsLeague, "key")
        },
        dbNegotiationsStrategyByKey() {
            return this._arrayByKey(this.dbNegotiationsStrategy, "key")
        },
        dbSkills() {
            return this.stores.db.skills || []
        },
        dbLevels() {
            return this.stores.db.levels || []
        },
        dbEarnJob() {
            return this.stores.db.earnJob || []
        },
        dbSkillCategory() {
            return this.stores.db.skillCategory || []
        },
        dbSkillSubcategory() {
            return this.stores.db.skillSubcategory || []
        },
        dbNegotiationsLeague() {
            return this.stores.db.negotiationsLeague || []
        },
        dbNegotiationsStrategy() {
            return this.stores.db.negotiationsStrategy || []
        },
        dbDailyRewards() {
            return this.stores.db.dailyRewards || []
        },
        dbTranslation() {
            return this.stores.db.translation || []
        },
        dbQuests() {
            return this.stores.db.quests || []
        },
        dbLang() {
            return this.stores.db.langs || []
        },
        dbFunds() {
            return this.stores.db.funds || []
        },
        dbFundsRisk() {
            return this.stores.db.fundsRisk || []
        },
        dbContentPrice() {
            return this.stores.db.contentPrice || []
        },
        dbOnboarding() {
            return this.stores.db.onboarding || []
        },
        dbPurchase() {
            return this.stores.db.purchases || []
        },
        gameConfig() {
            return window.gameConfig || {}
        }
    },
    data() {
        return {}
    }
}
  , WE = {
    methods: {
        async auth() {
            const e = It();
            try {
                const t = eg("user_auth_hash");
                t && e.setAuthHash(t);
                const n = window.Telegram.WebApp.initData
                  , o = window.Telegram.WebApp.initDataUnsafe.hash
                  , a = window.Telegram.WebApp.initDataUnsafe.start_param
                  , r = window.Telegram.WebApp.initDataUnsafe.chat ? window.Telegram.WebApp.initDataUnsafe.chat.id : ""
                  , i = window.Telegram.WebApp.initDataUnsafe.chat_type
                  , s = window.Telegram.WebApp.initDataUnsafe.chat_instance
                  , l = window.Telegram.WebApp.initDataUnsafe.user ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ""
                  , c = window.Telegram.WebApp.platform;
                await cn("auth", {
                    initData: n,
                    startParam: a,
                    photoUrl: l,
                    platform: c,
                    chatId: r,
                    chatType: i,
                    chatInstance: s
                }),
                t || e.setAuthHash(o)
            } catch (t) {
                if (t === "platform")
                    throw t;
                console.log("Error auth: %o", t),
                qa({
                    type: "danger",
                    message: this.t("Auth error") + ": " + t
                })
            }
        },
        async loadHero() {
            const e = It()
              , t = await cn("getHero", "");
            t && e.setHero(t)
        },
        async loadProfile() {
            const e = It()
              , t = await cn("getProfile", "");
            t && e.setProfile(t)
        },
        async loadFriends() {
            const e = It()
              , t = await cn("getFriends", "");
            t && e.setFriends(t)
        },
        async loadQuests() {
            const e = It()
              , t = await cn("getQuests", "");
            t && e.setQuests(t)
        },
        async loadDailyRewards() {
            const e = It()
              , t = await cn("getDailyRewards", "");
            t && e.setDailyRewards(t)
        },
        async loadSkills() {
            const e = It()
              , t = await cn("getSkills", "");
            t && e.setSkills(t)
        },
        async loadSettings() {
            const e = It()
              , t = await cn("getSettings", "");
            t && e.setSettings(t)
        },
        async loadPageData() {
            const e = It()
              , t = await this.apiCall("allUserData", {
                lang: e.settings.lang
            });
            e.setProfile(t.profile),
            e.setPurchase(t.purchase),
            e.setHero(t.hero),
            e.setSkills(t.skills),
            e.setQuests(t.quests),
            e.setQuestsContent(t.questsContent),
            e.setFriends(t.friends),
            e.setSettings(t.settings),
            e.setDailyRewards(t.dailyRewards)
        }
    },
    watch: {
        isRtl(e) {
            e ? window.document.body.classList.add("rtl") : window.document.body.classList.remove("rtl")
        }
    },
    computed: {
        uSkills() {
            return this.stores.user.skills || {}
        },
        uQuests() {
            return this.stores.user.quests || []
        },
        uQuestsContent() {
            return this.stores.user.questsContent || []
        },
        uFriends() {
            return this.stores.user.friends || []
        },
        uHero() {
            return this.stores.user.hero || {}
        },
        uProfile() {
            return this.stores.user.profile || {}
        },
        uPurchase() {
            return this.stores.user.purchase || {}
        },
        uDailyRewards() {
            return this.stores.user.dailyRewards || {}
        },
        uSettings() {
            return this.stores.user.settings || {}
        },
        uLevelPercent() {
            return this._getLevelPercent(this.uHero.level, this.uHero.exp)
        },
        uRefLink() {
            return `https://t.me/muskempire_bot/game?startapp=${this.uProfile.refCode}`
        },
        isRtl() {
            return "lang"in this.uSettings && this.uSettings.lang in this.dbLangByKey ? this.dbLangByKey[this.uSettings.lang].isRtl : !1
        },
        isAbTestOnboardingHide() {
            return !!(this.uProfile.id % 2)
        }
    }
}
  , YE = {
    data: function() {
        return {
            onBoard: {
                start: ["1"],
                pph: ["20", "21"],
                money: ["30", "31"],
                perTap: ["40", "41"],
                energy: ["50", "51"],
                pvp: ["60"],
                pvpLeague: ["70"],
                pvpStrategy: ["80"],
                fund: ["90"],
                questsContent: ["100"]
            }
        }
    },
    methods: {
        _stickyChange(e) {
            this.stores.state.setTopBarIsNeedBg(!!e.isFixed)
        },
        _catchError(e) {
            console.log("Error: %o", e),
            qa({
                type: "danger",
                message: typeof e == "string" ? e : this.t("Some problem... please repeat")
            })
        },
        async _delay(e) {
            await new Promise(t=>setTimeout(t, e))
        },
        t(e, t) {
            const n = function(o, a) {
                let r = o;
                return a && typeof a == "object" && Object.keys(a).forEach(function(i) {
                    r = r.replace(`{${i}}`, a[i])
                }),
                r = r.replaceAll("{", "").replaceAll("}", ""),
                r
            };
            if (this.uSettings.lang !== "en") {
                const o = this.dbTranslation.find(a=>a.key === e);
                if (o)
                    return n(o.title || e, t)
            }
            return n(e, t)
        },
        async _sendTappedData() {
            if (Object.keys(this.stores.user.tappedData).length) {
                const e = new Date
                  , t = this.stores.user.lastSendTappedDate;
                this.stores.user.setLastSendTappedDate(e);
                const n = this._cloneObject(this.stores.user.tappedData);
                this.stores.user.clearTappedData();
                let o = await this.apiCall("sendTappedData", {
                    data: n,
                    seconds: Math.ceil((e - t) / 1e3)
                });
                o.hero.money += this.stores.user.getTappedAllMoney,
                o.hero.earns = this._cloneObject(this.stores.user.hero.earns),
                this.stores.user.setHero(o.hero)
            } else
                this.stores.user.lastSendTappedDate && this.stores.user.setLastSendTappedDate(null)
        },
        async _completeOnboarding(e) {
            let t = this.uHero;
            "onboarding"in t || (t.onboarding = []);
            const n = e.filter(a=>!t.onboarding.includes(a));
            if (n.length === 0)
                return;
            const o = n[0];
            t.onboarding.push(o);
            try {
                const a = await this.apiCall("onboardingComplete", parseInt(o));
                this.stores.user.setHero(a)
            } catch (a) {
                console.log("Error: %o", a)
            }
        },
        _isOnboardingComplete(...e) {
            return "onboarding"in this.uHero ? !e.some(t=>t.filter(o=>!this.uHero.onboarding.includes(o)).length > 0) : !1
        },
        async _resetOnboarding(e=[]) {
            const t = await this.apiCall("resetOnboarding", e);
            this.stores.user.setHero(t.hero)
        },
        _cloneObject(e) {
            return JSON.parse(JSON.stringify(e))
        },
        _number(e) {
            return new Intl.NumberFormat().format(Math.round(e))
        },
        _numberShort(e, t=!1) {
            const n = e >= 0 ? 1 : -1;
            if (e * n < 1e3)
                return Math.round(e);
            if (e * n >= 1e3 && e * n < 1e6) {
                const o = e / 1e3;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "K"
            }
            if (e * n >= 1e6 && e * n < 1e9) {
                const o = e / 1e6;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "M"
            }
            if (e * n >= 1e9 && e * n < 1e12) {
                const o = e / 1e9;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "B"
            }
            if (e * n >= 1e12) {
                const o = e / 1e12;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "T"
            }
        },
        _getRandomArrayElement(e) {
            const t = Math.floor(Math.random() * e.length);
            return e[t]
        },
        _isEmptyObject(e) {
            return Object.keys(e).length === 0
        },
        _rand(e, t=0) {
            return t ? Math.floor(Math.random() * (t - e + 1)) + e : Math.floor(Math.random() * e)
        },
        _vibrate(e="light") {
            this.uSettings.vibrate && (e in ["light", "medium", "heavy", "rigid", "soft"] ? window.Telegram.WebApp.HapticFeedback.impactOccurred(e) : e in ["error", "success", "warning"] ? window.Telegram.WebApp.HapticFeedback.notificationOccurred(e) : window.Telegram.WebApp.HapticFeedback.selectionChanged())
        },
        _isIphone() {
            return navigator.userAgent.includes("iPhone")
        },
        _shareBtnClick() {
            const e = encodeURIComponent(this.t(`🔥Play with me, grow your startup. 

💸 +5k coins as your first gift
💵 +25k coins if you have Telegram Premium`));
            window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=t.me/muskempire_bot/game?startapp=${this.uProfile.refCode}&text=${e}`)
        },
        _ourTgClick() {
            window.Telegram.WebApp.openTelegramLink("https://t.me/muskempire")
        },
        _openUrl(e) {
            e.includes("t.me/") ? window.Telegram.WebApp.openTelegramLink(e) : window.Telegram.WebApp.openLink(e)
        },
        _sound(e) {
            this.uSettings.sound && this.uProfile.isBetaTester && vk(e)
        },
        _copyToClipboard(e) {
            qa({
                type: "primary",
                message: this.t("Copied to clipboard"),
                duration: 1e3,
                position: "bottom"
            }),
            navigator.clipboard.writeText(e)
        },
        _animateMoneyFromBottom(e=1e4, t="money") {
            if (this._sound(t === "money" ? "take_money" : "take_pph"),
            !this.uSettings.animations)
                return;
            let n = Math.round(1.98 * Math.pow(e, .4) + 16.85);
            n > 400 ? n = 300 : n < 10 && (n = 10),
            console.log("_animateMoneyFromBottom:", e, n);
            const o = t === "money" ? "money16" : "pph16"
              , a = t === "money" ? "fromBottomToRight" : "fromBottomToLeft";
            let r = t === "money" ? document.getElementById("money") : document.getElementById("profit");
            r && r.classList.add("aniVibration");
            const i = 1e3
              , s = 800;
            for (let l = 0; l < n; l++) {
                const c = document.createElement("div");
                c.classList.add("moneyFromBottom", o),
                c.style.top = "100%",
                c.style.left = this._rand(10, 90) + "%";
                const u = this._rand(500, i)
                  , f = this._rand(0, s);
                c.style.animation = `${a} ${u}ms ease ${f}ms 1 normal none`,
                document.body.appendChild(c),
                this.$nextTick(()=>{
                    setTimeout(()=>{
                        c.remove()
                    }
                    , u + s)
                }
                ),
                l % 30 === 0 && this._vibrate("soft")
            }
            setTimeout(()=>{
                r && r.classList.remove("aniVibration")
            }
            , i + Math.round(s / 2))
        },
        _millisecondsUntilNextDayUTC() {
            const e = new Date
              , t = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
            return Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + 1) - t
        },
        _millisecondsUntilNextUTCHour(e) {
            const t = new Date
              , n = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
            let o;
            return t.getUTCHours() < e ? o = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), e) : o = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1, e),
            o - n
        },
        _getLevelPercent(e, t) {
            const n = this.dbLevels;
            if (e >= n.length - 1)
                return 0;
            const o = e + 1;
            if (e && o) {
                const a = this.dbLevelsByLevel[o].exp - this.dbLevelsByLevel[e].exp
                  , r = t - this.dbLevelsByLevel[e].exp;
                return Math.floor(r / a * 100)
            }
            return 0
        },
        _getAvailableSkillsForLevel(e) {
            let t = []
              , n = [];
            return this.dbSkills.forEach(o=>{
                o.levels && o.levels.length > 0 && o.levels.forEach(a=>{
                    a.requiredHeroLevel === e && !n.includes(o.key) && (n.push(o.key),
                    t.push({
                        key: o.key,
                        title: o.title,
                        level: a.level
                    }))
                }
                )
            }
            ),
            t
        },
        _getMyAvatar() {
            return this.uProfile.skin ? this._getSkinImg(this.uProfile.skin) : this._getAvatarByLevel(this.uHero.level)
        },
        _getSkinImg(e) {
            return "/assets/img/store/skin/" + e + ".png?v=1"
        },
        _getAvatarByLevel(e) {
            return "/assets/img/heroes/" + e + "_not.png?v=5"
        },
        _getOfficeByLevel(e) {
            return "/assets/img/office/" + e + ".jpg?v=2"
        },
        _getSkillImg(e) {
            return "/assets/img/skills/" + e + ".jpg?v=2"
        },
        _getQuestImg(e) {
            return e.includes("rebus_") ? "/assets/img/quests/rebus.jpg?v=2" : "/assets/img/quests/" + e + ".jpg?v=2"
        },
        _getSkinStyle(e, t=null) {
            return e ? e in this.dbSkinsByKey ? {
                backgroundImage: `url(${this._getSkinImg(e)})`,
                backgroundColor: this.dbSkinsByKey[e].data ? this.dbSkinsByKey[e].data : "#b7b7b7"
            } : {} : t ? {
                backgroundImage: `url(${this._getAvatarByLevel(t)})`
            } : {}
        },
        _groupBy(e, t) {
            return e.reduce((n,o)=>((n[o[t]] = n[o[t]] || []).push(o),
            n), {})
        },
        _arrayByKey(e, t) {
            return e.reduce((n,o)=>(n[o[t]] = o,
            n), {})
        },
        _filterByKey(e, t, n) {
            return e.filter(o=>o[t] === n)
        },
        _getFirstFilteredByKey(e, t, n) {
            return e.filter(o=>o[t] === n)[0]
        },
        _getValueFirstFilteredByKey(e, t, n, o) {
            return e.filter(r=>`${r[t]}` == `${n}`)[0][o]
        }
    }
};
async function qE(e) {
    Ci().setTopBarDefault(),
    e.name
}
const Rn = ff(FP)
  , KE = Ck();
Qa.beforeEach(qE);
Qa.afterEach(function() {
    Qa.options.history.state.current !== "/main" ? window.Telegram.WebApp.BackButton.isVisible || window.Telegram.WebApp.BackButton.show() : window.Telegram.WebApp.BackButton.isVisible && window.Telegram.WebApp.BackButton.hide()
});
window.Telegram.WebApp.onEvent("backButtonClicked", function() {
    Qa.push("/main")
});
Rn.use(KE);
Rn.use(Qa);
Rn.use(ck);
uk(Rn);
Rn.mixin(UE);
Rn.mixin(WE);
Rn.mixin(YE);
Rn.mixin(zk);
Rn.mount("#app");
window.userStore = It();
window.stateStore = Ci();
window.dbStore = Xh();
export {j as A, Qg as B, il as C, uv as D, R as E, Fe as F, Dk as G, tt as H, ia as I, ae as J, Me as K, Pe as L, kd as M, hP as N, wk as P, la as T, Bo as _, H as a, d as b, He as c, Ne as d, Ae as e, Nt as f, ut as g, Ld as h, vt as i, XE as j, cn as k, GE as l, Bm as m, Tt as n, Se as o, Rd as p, be as q, Ha as r, qa as s, te as t, Dt as u, wl as v, ge as w, pl as x, Be as y, Zw as z};
