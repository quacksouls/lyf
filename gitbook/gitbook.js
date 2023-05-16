!(function r(o, i, s) {
    function a(t, e) {
        if (!i[t]) {
            if (!o[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (u) return u(t, !0);
                throw (
                    (((e = new Error("Cannot find module '" + t + "'")).code =
                        "MODULE_NOT_FOUND"),
                    e)
                );
            }
            (n = i[t] = { exports: {} }),
                o[t][0].call(
                    n.exports,
                    function (e) {
                        return a(o[t][1][e] || e);
                    },
                    n,
                    n.exports,
                    r,
                    o,
                    i,
                    s
                );
        }
        return i[t].exports;
    }
    for (
        var u = "function" == typeof require && require, e = 0;
        e < s.length;
        e++
    )
        a(s[e]);
    return a;
})(
    {
        1: [
            function (e, S, N) {
                !function (E) {
                    !function () {
                        var e = this,
                            t = "object" == typeof N && N && !N.nodeType && N,
                            n = "object" == typeof S && S && !S.nodeType && S,
                            r = "object" == typeof E && E;
                        (r.global !== r && r.window !== r && r.self !== r) ||
                            (e = r);
                        var o,
                            i,
                            m = 2147483647,
                            v = 36,
                            y = 26,
                            s = 38,
                            a = 700,
                            u = /^xn--/,
                            l = /[^\x20-\x7E]/,
                            c = /[\x2E\u3002\uFF0E\uFF61]/g,
                            f = {
                                overflow:
                                    "Overflow: input needs wider integers to process",
                                "not-basic":
                                    "Illegal input >= 0x80 (not a basic code point)",
                                "invalid-input": "Invalid input",
                            },
                            p = v - 1,
                            x = Math.floor,
                            b = String.fromCharCode;
                        function w(e) {
                            throw new RangeError(f[e]);
                        }
                        function h(e, t) {
                            for (var n = e.length, r = []; n--; )
                                r[n] = t(e[n]);
                            return r;
                        }
                        function d(e, t) {
                            var n = e.split("@"),
                                r = "",
                                n =
                                    (1 < n.length &&
                                        ((r = n[0] + "@"), (e = n[1])),
                                    (e = e.replace(c, ".")).split("."));
                            return r + h(n, t).join(".");
                        }
                        function C(e) {
                            for (var t, n, r = [], o = 0, i = e.length; o < i; )
                                55296 <= (t = e.charCodeAt(o++)) &&
                                t <= 56319 &&
                                o < i
                                    ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                                        ? r.push(
                                              ((1023 & t) << 10) +
                                                  (1023 & n) +
                                                  65536
                                          )
                                        : (r.push(t), o--)
                                    : r.push(t);
                            return r;
                        }
                        function g(e) {
                            return h(e, function (e) {
                                var t = "";
                                return (
                                    65535 < e &&
                                        ((t += b(
                                            (((e -= 65536) >>> 10) & 1023) |
                                                55296
                                        )),
                                        (e = 56320 | (1023 & e))),
                                    (t += b(e))
                                );
                            }).join("");
                        }
                        function T(e, t) {
                            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                        }
                        function A(e, t, n) {
                            var r = 0;
                            for (
                                e = n ? x(e / a) : e >> 1, e += x(e / t);
                                (p * y) >> 1 < e;
                                r += v
                            )
                                e = x(e / p);
                            return x(r + ((p + 1) * e) / (e + s));
                        }
                        function j(e) {
                            var t,
                                n,
                                r,
                                o,
                                i,
                                s,
                                a,
                                u = [],
                                l = e.length,
                                c = 0,
                                f = 128,
                                p = 72,
                                h = e.lastIndexOf("-");
                            for (h < 0 && (h = 0), n = 0; n < h; ++n)
                                128 <= e.charCodeAt(n) && w("not-basic"),
                                    u.push(e.charCodeAt(n));
                            for (r = 0 < h ? h + 1 : 0; r < l; ) {
                                for (
                                    o = c, i = 1, s = v;
                                    l <= r && w("invalid-input"),
                                        (a = e.charCodeAt(r++)),
                                        (v <=
                                            (a =
                                                a - 48 < 10
                                                    ? a - 22
                                                    : a - 65 < 26
                                                    ? a - 65
                                                    : a - 97 < 26
                                                    ? a - 97
                                                    : v) ||
                                            a > x((m - c) / i)) &&
                                            w("overflow"),
                                        (c += a * i),
                                        !(
                                            a <
                                            (a =
                                                s <= p
                                                    ? 1
                                                    : p + y <= s
                                                    ? y
                                                    : s - p)
                                        );
                                    s += v
                                )
                                    i > x(m / (a = v - a)) && w("overflow"),
                                        (i *= a);
                                (p = A(c - o, (t = u.length + 1), 0 == o)),
                                    x(c / t) > m - f && w("overflow"),
                                    (f += x(c / t)),
                                    (c %= t),
                                    u.splice(c++, 0, f);
                            }
                            return g(u);
                        }
                        function k(e) {
                            for (
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    s,
                                    a,
                                    u,
                                    l,
                                    c,
                                    f = [],
                                    p = (e = C(e)).length,
                                    h = 128,
                                    d = 72,
                                    g = (t = 0);
                                g < p;
                                ++g
                            )
                                (a = e[g]) < 128 && f.push(b(a));
                            for (n = r = f.length, r && f.push("-"); n < p; ) {
                                for (o = m, g = 0; g < p; ++g)
                                    h <= (a = e[g]) && a < o && (o = a);
                                for (
                                    o - h > x((m - t) / (u = n + 1)) &&
                                        w("overflow"),
                                        t += (o - h) * u,
                                        h = o,
                                        g = 0;
                                    g < p;
                                    ++g
                                )
                                    if (
                                        ((a = e[g]) < h &&
                                            ++t > m &&
                                            w("overflow"),
                                        a == h)
                                    ) {
                                        for (
                                            i = t, s = v;
                                            !(
                                                i <
                                                (l =
                                                    s <= d
                                                        ? 1
                                                        : d + y <= s
                                                        ? y
                                                        : s - d)
                                            );
                                            s += v
                                        )
                                            f.push(
                                                b(
                                                    T(
                                                        l +
                                                            ((c = i - l) %
                                                                (l = v - l)),
                                                        0
                                                    )
                                                )
                                            ),
                                                (i = x(c / l));
                                        f.push(b(T(i, 0))),
                                            (d = A(t, u, n == r)),
                                            (t = 0),
                                            ++n;
                                    }
                                ++t, ++h;
                            }
                            return f.join("");
                        }
                        if (
                            ((o = {
                                version: "1.4.1",
                                ucs2: { decode: C, encode: g },
                                decode: j,
                                encode: k,
                                toASCII: function (e) {
                                    return d(e, function (e) {
                                        return l.test(e) ? "xn--" + k(e) : e;
                                    });
                                },
                                toUnicode: function (e) {
                                    return d(e, function (e) {
                                        return u.test(e)
                                            ? j(e.slice(4).toLowerCase())
                                            : e;
                                    });
                                },
                            }),
                            "function" == typeof define &&
                                "object" == typeof define.amd &&
                                define.amd)
                        )
                            define("punycode", function () {
                                return o;
                            });
                        else if (t && n)
                            if (S.exports == t) n.exports = o;
                            else
                                for (i in o)
                                    o.hasOwnProperty(i) && (t[i] = o[i]);
                        else e.punycode = o;
                    }.call(this);
                }.call(
                    this,
                    "undefined" != typeof global
                        ? global
                        : "undefined" != typeof self
                        ? self
                        : "undefined" != typeof window
                        ? window
                        : {}
                );
            },
            {},
        ],
        2: [
            function (e, n, t) {
                !(function (e, t) {
                    "use strict";
                    "object" == typeof n && "object" == typeof n.exports
                        ? (n.exports = e.document
                              ? t(e, !0)
                              : function (e) {
                                    if (e.document) return t(e);
                                    throw new Error(
                                        "jQuery requires a window with a document"
                                    );
                                })
                        : t(e);
                })(
                    "undefined" != typeof window ? window : this,
                    function (w, I) {
                        "use strict";
                        function y(e) {
                            return (
                                "function" == typeof e &&
                                "number" != typeof e.nodeType
                            );
                        }
                        function g(e) {
                            return null != e && e === e.window;
                        }
                        var t = [],
                            P = Object.getPrototypeOf,
                            a = t.slice,
                            M = t.flat
                                ? function (e) {
                                      return t.flat.call(e);
                                  }
                                : function (e) {
                                      return t.concat.apply([], e);
                                  },
                            F = t.push,
                            $ = t.indexOf,
                            W = {},
                            B = W.toString,
                            _ = W.hasOwnProperty,
                            U = _.toString,
                            z = U.call(Object),
                            m = {},
                            C = w.document,
                            X = { type: !0, src: !0, nonce: !0, noModule: !0 };
                        function V(e, t, n) {
                            var r,
                                o,
                                i = (n = n || C).createElement("script");
                            if (((i.text = e), t))
                                for (r in X)
                                    (o =
                                        t[r] ||
                                        (t.getAttribute &&
                                            t.getAttribute(r))) &&
                                        i.setAttribute(r, o);
                            n.head.appendChild(i).parentNode.removeChild(i);
                        }
                        function d(e) {
                            return null == e
                                ? e + ""
                                : "object" == typeof e || "function" == typeof e
                                ? W[B.call(e)] || "object"
                                : typeof e;
                        }
                        var T = function (e, t) {
                            return new T.fn.init(e, t);
                        };
                        function G(e) {
                            var t = !!e && "length" in e && e.length,
                                n = d(e);
                            return (
                                !y(e) &&
                                !g(e) &&
                                ("array" === n ||
                                    0 === t ||
                                    ("number" == typeof t &&
                                        0 < t &&
                                        t - 1 in e))
                            );
                        }
                        (T.fn = T.prototype =
                            {
                                jquery: "3.5.1",
                                constructor: T,
                                length: 0,
                                toArray: function () {
                                    return a.call(this);
                                },
                                get: function (e) {
                                    return null == e
                                        ? a.call(this)
                                        : e < 0
                                        ? this[e + this.length]
                                        : this[e];
                                },
                                pushStack: function (e) {
                                    e = T.merge(this.constructor(), e);
                                    return (e.prevObject = this), e;
                                },
                                each: function (e) {
                                    return T.each(this, e);
                                },
                                map: function (n) {
                                    return this.pushStack(
                                        T.map(this, function (e, t) {
                                            return n.call(e, t, e);
                                        })
                                    );
                                },
                                slice: function () {
                                    return this.pushStack(
                                        a.apply(this, arguments)
                                    );
                                },
                                first: function () {
                                    return this.eq(0);
                                },
                                last: function () {
                                    return this.eq(-1);
                                },
                                even: function () {
                                    return this.pushStack(
                                        T.grep(this, function (e, t) {
                                            return (t + 1) % 2;
                                        })
                                    );
                                },
                                odd: function () {
                                    return this.pushStack(
                                        T.grep(this, function (e, t) {
                                            return t % 2;
                                        })
                                    );
                                },
                                eq: function (e) {
                                    var t = this.length,
                                        e = +e + (e < 0 ? t : 0);
                                    return this.pushStack(
                                        0 <= e && e < t ? [this[e]] : []
                                    );
                                },
                                end: function () {
                                    return (
                                        this.prevObject || this.constructor()
                                    );
                                },
                                push: F,
                                sort: t.sort,
                                splice: t.splice,
                            }),
                            (T.extend = T.fn.extend =
                                function () {
                                    var e,
                                        t,
                                        n,
                                        r,
                                        o,
                                        i = arguments[0] || {},
                                        s = 1,
                                        a = arguments.length,
                                        u = !1;
                                    for (
                                        "boolean" == typeof i &&
                                            ((u = i),
                                            (i = arguments[s] || {}),
                                            s++),
                                            "object" == typeof i ||
                                                y(i) ||
                                                (i = {}),
                                            s === a && ((i = this), s--);
                                        s < a;
                                        s++
                                    )
                                        if (null != (e = arguments[s]))
                                            for (t in e)
                                                (n = e[t]),
                                                    "__proto__" !== t &&
                                                        i !== n &&
                                                        (u &&
                                                        n &&
                                                        (T.isPlainObject(n) ||
                                                            (r =
                                                                Array.isArray(
                                                                    n
                                                                )))
                                                            ? ((o = i[t]),
                                                              (o =
                                                                  r &&
                                                                  !Array.isArray(
                                                                      o
                                                                  )
                                                                      ? []
                                                                      : r ||
                                                                        T.isPlainObject(
                                                                            o
                                                                        )
                                                                      ? o
                                                                      : {}),
                                                              (r = !1),
                                                              (i[t] = T.extend(
                                                                  u,
                                                                  o,
                                                                  n
                                                              )))
                                                            : void 0 !== n &&
                                                              (i[t] = n));
                                    return i;
                                }),
                            T.extend({
                                expando:
                                    "jQuery" +
                                    ("3.5.1" + Math.random()).replace(
                                        /\D/g,
                                        ""
                                    ),
                                isReady: !0,
                                error: function (e) {
                                    throw new Error(e);
                                },
                                noop: function () {},
                                isPlainObject: function (e) {
                                    return (
                                        !(
                                            !e ||
                                            "[object Object]" !== B.call(e)
                                        ) &&
                                        (!(e = P(e)) ||
                                            ("function" ==
                                                typeof (e =
                                                    _.call(e, "constructor") &&
                                                    e.constructor) &&
                                                U.call(e) === z))
                                    );
                                },
                                isEmptyObject: function (e) {
                                    for (var t in e) return !1;
                                    return !0;
                                },
                                globalEval: function (e, t, n) {
                                    V(e, { nonce: t && t.nonce }, n);
                                },
                                each: function (e, t) {
                                    var n,
                                        r = 0;
                                    if (G(e))
                                        for (
                                            n = e.length;
                                            r < n &&
                                            !1 !== t.call(e[r], r, e[r]);
                                            r++
                                        );
                                    else
                                        for (r in e)
                                            if (!1 === t.call(e[r], r, e[r]))
                                                break;
                                    return e;
                                },
                                makeArray: function (e, t) {
                                    t = t || [];
                                    return (
                                        null != e &&
                                            (G(Object(e))
                                                ? T.merge(
                                                      t,
                                                      "string" == typeof e
                                                          ? [e]
                                                          : e
                                                  )
                                                : F.call(t, e)),
                                        t
                                    );
                                },
                                inArray: function (e, t, n) {
                                    return null == t ? -1 : $.call(t, e, n);
                                },
                                merge: function (e, t) {
                                    for (
                                        var n = +t.length, r = 0, o = e.length;
                                        r < n;
                                        r++
                                    )
                                        e[o++] = t[r];
                                    return (e.length = o), e;
                                },
                                grep: function (e, t, n) {
                                    for (
                                        var r = [], o = 0, i = e.length, s = !n;
                                        o < i;
                                        o++
                                    )
                                        !t(e[o], o) != s && r.push(e[o]);
                                    return r;
                                },
                                map: function (e, t, n) {
                                    var r,
                                        o,
                                        i = 0,
                                        s = [];
                                    if (G(e))
                                        for (r = e.length; i < r; i++)
                                            null != (o = t(e[i], i, n)) &&
                                                s.push(o);
                                    else
                                        for (i in e)
                                            null != (o = t(e[i], i, n)) &&
                                                s.push(o);
                                    return M(s);
                                },
                                guid: 1,
                                support: m,
                            }),
                            "function" == typeof Symbol &&
                                (T.fn[Symbol.iterator] = t[Symbol.iterator]),
                            T.each(
                                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                                    " "
                                ),
                                function (e, t) {
                                    W["[object " + t + "]"] = t.toLowerCase();
                                }
                            );
                        function r(e, t, n) {
                            for (
                                var r = [], o = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;

                            )
                                if (1 === e.nodeType) {
                                    if (o && T(e).is(n)) break;
                                    r.push(e);
                                }
                            return r;
                        }
                        function Y(e, t) {
                            for (var n = []; e; e = e.nextSibling)
                                1 === e.nodeType && e !== t && n.push(e);
                            return n;
                        }
                        var e = (function (I) {
                                function f(e, t) {
                                    return (
                                        (e = "0x" + e.slice(1) - 65536),
                                        t ||
                                            (e < 0
                                                ? String.fromCharCode(65536 + e)
                                                : String.fromCharCode(
                                                      (e >> 10) | 55296,
                                                      (1023 & e) | 56320
                                                  ))
                                    );
                                }
                                function P(e, t) {
                                    return t
                                        ? "\0" === e
                                            ? "�"
                                            : e.slice(0, -1) +
                                              "\\" +
                                              e
                                                  .charCodeAt(e.length - 1)
                                                  .toString(16) +
                                              " "
                                        : "\\" + e;
                                }
                                function M() {
                                    C();
                                }
                                var e,
                                    p,
                                    b,
                                    i,
                                    F,
                                    h,
                                    $,
                                    W,
                                    w,
                                    u,
                                    l,
                                    C,
                                    T,
                                    n,
                                    A,
                                    d,
                                    r,
                                    o,
                                    g,
                                    j = "sizzle" + +new Date(),
                                    c = I.document,
                                    k = 0,
                                    B = 0,
                                    _ = q(),
                                    U = q(),
                                    z = q(),
                                    m = q(),
                                    X = function (e, t) {
                                        return e === t && (l = !0), 0;
                                    },
                                    V = {}.hasOwnProperty,
                                    t = [],
                                    G = t.pop,
                                    Y = t.push,
                                    E = t.push,
                                    J = t.slice,
                                    y = function (e, t) {
                                        for (
                                            var n = 0, r = e.length;
                                            n < r;
                                            n++
                                        )
                                            if (e[n] === t) return n;
                                        return -1;
                                    },
                                    Q =
                                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                    s = "[\\x20\\t\\r\\n\\f]",
                                    a =
                                        "(?:\\\\[\\da-fA-F]{1,6}" +
                                        s +
                                        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                    K =
                                        "\\[" +
                                        s +
                                        "*(" +
                                        a +
                                        ")(?:" +
                                        s +
                                        "*([*^$|!~]?=)" +
                                        s +
                                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                                        a +
                                        "))|)" +
                                        s +
                                        "*\\]",
                                    Z =
                                        ":(" +
                                        a +
                                        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                                        K +
                                        ")*)|.*)\\)|)",
                                    ee = new RegExp(s + "+", "g"),
                                    v = new RegExp(
                                        "^" +
                                            s +
                                            "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                                            s +
                                            "+$",
                                        "g"
                                    ),
                                    te = new RegExp("^" + s + "*," + s + "*"),
                                    ne = new RegExp(
                                        "^" + s + "*([>+~]|" + s + ")" + s + "*"
                                    ),
                                    re = new RegExp(s + "|>"),
                                    oe = new RegExp(Z),
                                    ie = new RegExp("^" + a + "$"),
                                    x = {
                                        ID: new RegExp("^#(" + a + ")"),
                                        CLASS: new RegExp("^\\.(" + a + ")"),
                                        TAG: new RegExp("^(" + a + "|[*])"),
                                        ATTR: new RegExp("^" + K),
                                        PSEUDO: new RegExp("^" + Z),
                                        CHILD: new RegExp(
                                            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                                s +
                                                "*(even|odd|(([+-]|)(\\d*)n|)" +
                                                s +
                                                "*(?:([+-]|)" +
                                                s +
                                                "*(\\d+)|))" +
                                                s +
                                                "*\\)|)",
                                            "i"
                                        ),
                                        bool: new RegExp(
                                            "^(?:" + Q + ")$",
                                            "i"
                                        ),
                                        needsContext: new RegExp(
                                            "^" +
                                                s +
                                                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                                s +
                                                "*((?:-\\d)?\\d*)" +
                                                s +
                                                "*\\)|)(?=[^-]|$)",
                                            "i"
                                        ),
                                    },
                                    se = /HTML$/i,
                                    ae = /^(?:input|select|textarea|button)$/i,
                                    ue = /^h\d$/i,
                                    S = /^[^{]+\{\s*\[native \w/,
                                    le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                    ce = /[+~]/,
                                    N = new RegExp(
                                        "\\\\[\\da-fA-F]{1,6}" +
                                            s +
                                            "?|\\\\([^\\r\\n\\f])",
                                        "g"
                                    ),
                                    fe =
                                        /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                    pe = ye(
                                        function (e) {
                                            return (
                                                !0 === e.disabled &&
                                                "fieldset" ===
                                                    e.nodeName.toLowerCase()
                                            );
                                        },
                                        { dir: "parentNode", next: "legend" }
                                    );
                                try {
                                    E.apply(
                                        (t = J.call(c.childNodes)),
                                        c.childNodes
                                    ),
                                        t[c.childNodes.length].nodeType;
                                } catch (e) {
                                    E = {
                                        apply: t.length
                                            ? function (e, t) {
                                                  Y.apply(e, J.call(t));
                                              }
                                            : function (e, t) {
                                                  for (
                                                      var n = e.length, r = 0;
                                                      (e[n++] = t[r++]);

                                                  );
                                                  e.length = n - 1;
                                              },
                                    };
                                }
                                function D(t, e, n, r) {
                                    var o,
                                        i,
                                        s,
                                        a,
                                        u,
                                        l,
                                        c = e && e.ownerDocument,
                                        f = e ? e.nodeType : 9;
                                    if (
                                        ((n = n || []),
                                        "string" != typeof t ||
                                            !t ||
                                            (1 !== f && 9 !== f && 11 !== f))
                                    )
                                        return n;
                                    if (!r && (C(e), (e = e || T), A)) {
                                        if (11 !== f && (a = le.exec(t)))
                                            if ((o = a[1])) {
                                                if (9 === f) {
                                                    if (
                                                        !(l =
                                                            e.getElementById(o))
                                                    )
                                                        return n;
                                                    if (l.id === o)
                                                        return n.push(l), n;
                                                } else if (
                                                    c &&
                                                    (l = c.getElementById(o)) &&
                                                    g(e, l) &&
                                                    l.id === o
                                                )
                                                    return n.push(l), n;
                                            } else {
                                                if (a[2])
                                                    return (
                                                        E.apply(
                                                            n,
                                                            e.getElementsByTagName(
                                                                t
                                                            )
                                                        ),
                                                        n
                                                    );
                                                if (
                                                    (o = a[3]) &&
                                                    p.getElementsByClassName &&
                                                    e.getElementsByClassName
                                                )
                                                    return (
                                                        E.apply(
                                                            n,
                                                            e.getElementsByClassName(
                                                                o
                                                            )
                                                        ),
                                                        n
                                                    );
                                            }
                                        if (
                                            p.qsa &&
                                            !m[t + " "] &&
                                            (!d || !d.test(t)) &&
                                            (1 !== f ||
                                                "object" !==
                                                    e.nodeName.toLowerCase())
                                        ) {
                                            if (
                                                ((l = t),
                                                (c = e),
                                                1 === f &&
                                                    (re.test(t) || ne.test(t)))
                                            ) {
                                                for (
                                                    ((c =
                                                        (ce.test(t) &&
                                                            me(e.parentNode)) ||
                                                        e) === e &&
                                                        p.scope) ||
                                                        ((s =
                                                            e.getAttribute(
                                                                "id"
                                                            ))
                                                            ? (s = s.replace(
                                                                  fe,
                                                                  P
                                                              ))
                                                            : e.setAttribute(
                                                                  "id",
                                                                  (s = j)
                                                              )),
                                                        i = (u = h(t)).length;
                                                    i--;

                                                )
                                                    u[i] =
                                                        (s
                                                            ? "#" + s
                                                            : ":scope") +
                                                        " " +
                                                        R(u[i]);
                                                l = u.join(",");
                                            }
                                            try {
                                                return (
                                                    E.apply(
                                                        n,
                                                        c.querySelectorAll(l)
                                                    ),
                                                    n
                                                );
                                            } catch (e) {
                                                m(t, !0);
                                            } finally {
                                                s === j &&
                                                    e.removeAttribute("id");
                                            }
                                        }
                                    }
                                    return W(t.replace(v, "$1"), e, n, r);
                                }
                                function q() {
                                    var n = [];
                                    function r(e, t) {
                                        return (
                                            n.push(e + " ") > b.cacheLength &&
                                                delete r[n.shift()],
                                            (r[e + " "] = t)
                                        );
                                    }
                                    return r;
                                }
                                function O(e) {
                                    return (e[j] = !0), e;
                                }
                                function L(e) {
                                    var t = T.createElement("fieldset");
                                    try {
                                        return !!e(t);
                                    } catch (e) {
                                        return !1;
                                    } finally {
                                        t.parentNode &&
                                            t.parentNode.removeChild(t);
                                    }
                                }
                                function he(e, t) {
                                    for (
                                        var n = e.split("|"), r = n.length;
                                        r--;

                                    )
                                        b.attrHandle[n[r]] = t;
                                }
                                function de(e, t) {
                                    var n = t && e,
                                        r =
                                            n &&
                                            1 === e.nodeType &&
                                            1 === t.nodeType &&
                                            e.sourceIndex - t.sourceIndex;
                                    if (r) return r;
                                    if (n)
                                        for (; (n = n.nextSibling); )
                                            if (n === t) return -1;
                                    return e ? 1 : -1;
                                }
                                function ge(t) {
                                    return function (e) {
                                        return "form" in e
                                            ? e.parentNode && !1 === e.disabled
                                                ? "label" in e
                                                    ? "label" in e.parentNode
                                                        ? e.parentNode
                                                              .disabled === t
                                                        : e.disabled === t
                                                    : e.isDisabled === t ||
                                                      (e.isDisabled !== !t &&
                                                          pe(e) === t)
                                                : e.disabled === t
                                            : "label" in e && e.disabled === t;
                                    };
                                }
                                function H(s) {
                                    return O(function (i) {
                                        return (
                                            (i = +i),
                                            O(function (e, t) {
                                                for (
                                                    var n,
                                                        r = s([], e.length, i),
                                                        o = r.length;
                                                    o--;

                                                )
                                                    e[(n = r[o])] &&
                                                        (e[n] = !(t[n] = e[n]));
                                            })
                                        );
                                    });
                                }
                                function me(e) {
                                    return (
                                        e &&
                                        void 0 !== e.getElementsByTagName &&
                                        e
                                    );
                                }
                                for (e in ((p = D.support = {}),
                                (F = D.isXML =
                                    function (e) {
                                        var t = e.namespaceURI,
                                            e = (e.ownerDocument || e)
                                                .documentElement;
                                        return !se.test(
                                            t || (e && e.nodeName) || "HTML"
                                        );
                                    }),
                                (C = D.setDocument =
                                    function (e) {
                                        var e = e ? e.ownerDocument || e : c;
                                        return (
                                            e != T &&
                                                9 === e.nodeType &&
                                                e.documentElement &&
                                                ((n = (T = e).documentElement),
                                                (A = !F(T)),
                                                c != T &&
                                                    (e = T.defaultView) &&
                                                    e.top !== e &&
                                                    (e.addEventListener
                                                        ? e.addEventListener(
                                                              "unload",
                                                              M,
                                                              !1
                                                          )
                                                        : e.attachEvent &&
                                                          e.attachEvent(
                                                              "onunload",
                                                              M
                                                          )),
                                                (p.scope = L(function (e) {
                                                    return (
                                                        n
                                                            .appendChild(e)
                                                            .appendChild(
                                                                T.createElement(
                                                                    "div"
                                                                )
                                                            ),
                                                        void 0 !==
                                                            e.querySelectorAll &&
                                                            !e.querySelectorAll(
                                                                ":scope fieldset div"
                                                            ).length
                                                    );
                                                })),
                                                (p.attributes = L(function (e) {
                                                    return (
                                                        (e.className = "i"),
                                                        !e.getAttribute(
                                                            "className"
                                                        )
                                                    );
                                                })),
                                                (p.getElementsByTagName = L(
                                                    function (e) {
                                                        return (
                                                            e.appendChild(
                                                                T.createComment(
                                                                    ""
                                                                )
                                                            ),
                                                            !e.getElementsByTagName(
                                                                "*"
                                                            ).length
                                                        );
                                                    }
                                                )),
                                                (p.getElementsByClassName =
                                                    S.test(
                                                        T.getElementsByClassName
                                                    )),
                                                (p.getById = L(function (e) {
                                                    return (
                                                        (n.appendChild(e).id =
                                                            j),
                                                        !T.getElementsByName ||
                                                            !T.getElementsByName(
                                                                j
                                                            ).length
                                                    );
                                                })),
                                                p.getById
                                                    ? ((b.filter.ID = function (
                                                          e
                                                      ) {
                                                          var t = e.replace(
                                                              N,
                                                              f
                                                          );
                                                          return function (e) {
                                                              return (
                                                                  e.getAttribute(
                                                                      "id"
                                                                  ) === t
                                                              );
                                                          };
                                                      }),
                                                      (b.find.ID = function (
                                                          e,
                                                          t
                                                      ) {
                                                          if (
                                                              void 0 !==
                                                                  t.getElementById &&
                                                              A
                                                          )
                                                              return (t =
                                                                  t.getElementById(
                                                                      e
                                                                  ))
                                                                  ? [t]
                                                                  : [];
                                                      }))
                                                    : ((b.filter.ID = function (
                                                          e
                                                      ) {
                                                          var t = e.replace(
                                                              N,
                                                              f
                                                          );
                                                          return function (e) {
                                                              e =
                                                                  void 0 !==
                                                                      e.getAttributeNode &&
                                                                  e.getAttributeNode(
                                                                      "id"
                                                                  );
                                                              return (
                                                                  e &&
                                                                  e.value === t
                                                              );
                                                          };
                                                      }),
                                                      (b.find.ID = function (
                                                          e,
                                                          t
                                                      ) {
                                                          if (
                                                              void 0 !==
                                                                  t.getElementById &&
                                                              A
                                                          ) {
                                                              var n,
                                                                  r,
                                                                  o,
                                                                  i =
                                                                      t.getElementById(
                                                                          e
                                                                      );
                                                              if (i) {
                                                                  if (
                                                                      (n =
                                                                          i.getAttributeNode(
                                                                              "id"
                                                                          )) &&
                                                                      n.value ===
                                                                          e
                                                                  )
                                                                      return [
                                                                          i,
                                                                      ];
                                                                  for (
                                                                      o =
                                                                          t.getElementsByName(
                                                                              e
                                                                          ),
                                                                          r = 0;
                                                                      (i =
                                                                          o[
                                                                              r++
                                                                          ]);

                                                                  )
                                                                      if (
                                                                          (n =
                                                                              i.getAttributeNode(
                                                                                  "id"
                                                                              )) &&
                                                                          n.value ===
                                                                              e
                                                                      )
                                                                          return [
                                                                              i,
                                                                          ];
                                                              }
                                                              return [];
                                                          }
                                                      })),
                                                (b.find.TAG =
                                                    p.getElementsByTagName
                                                        ? function (e, t) {
                                                              return void 0 !==
                                                                  t.getElementsByTagName
                                                                  ? t.getElementsByTagName(
                                                                        e
                                                                    )
                                                                  : p.qsa
                                                                  ? t.querySelectorAll(
                                                                        e
                                                                    )
                                                                  : void 0;
                                                          }
                                                        : function (e, t) {
                                                              var n,
                                                                  r = [],
                                                                  o = 0,
                                                                  i =
                                                                      t.getElementsByTagName(
                                                                          e
                                                                      );
                                                              if ("*" !== e)
                                                                  return i;
                                                              for (
                                                                  ;
                                                                  (n = i[o++]);

                                                              )
                                                                  1 ===
                                                                      n.nodeType &&
                                                                      r.push(n);
                                                              return r;
                                                          }),
                                                (b.find.CLASS =
                                                    p.getElementsByClassName &&
                                                    function (e, t) {
                                                        if (
                                                            void 0 !==
                                                                t.getElementsByClassName &&
                                                            A
                                                        )
                                                            return t.getElementsByClassName(
                                                                e
                                                            );
                                                    }),
                                                (r = []),
                                                (d = []),
                                                (p.qsa = S.test(
                                                    T.querySelectorAll
                                                )) &&
                                                    (L(function (e) {
                                                        var t;
                                                        (n.appendChild(
                                                            e
                                                        ).innerHTML =
                                                            "<a id='" +
                                                            j +
                                                            "'></a><select id='" +
                                                            j +
                                                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                            e.querySelectorAll(
                                                                "[msallowcapture^='']"
                                                            ).length &&
                                                                d.push(
                                                                    "[*^$]=" +
                                                                        s +
                                                                        "*(?:''|\"\")"
                                                                ),
                                                            e.querySelectorAll(
                                                                "[selected]"
                                                            ).length ||
                                                                d.push(
                                                                    "\\[" +
                                                                        s +
                                                                        "*(?:value|" +
                                                                        Q +
                                                                        ")"
                                                                ),
                                                            e.querySelectorAll(
                                                                "[id~=" +
                                                                    j +
                                                                    "-]"
                                                            ).length ||
                                                                d.push("~="),
                                                            (t =
                                                                T.createElement(
                                                                    "input"
                                                                )).setAttribute(
                                                                "name",
                                                                ""
                                                            ),
                                                            e.appendChild(t),
                                                            e.querySelectorAll(
                                                                "[name='']"
                                                            ).length ||
                                                                d.push(
                                                                    "\\[" +
                                                                        s +
                                                                        "*name" +
                                                                        s +
                                                                        "*=" +
                                                                        s +
                                                                        "*(?:''|\"\")"
                                                                ),
                                                            e.querySelectorAll(
                                                                ":checked"
                                                            ).length ||
                                                                d.push(
                                                                    ":checked"
                                                                ),
                                                            e.querySelectorAll(
                                                                "a#" + j + "+*"
                                                            ).length ||
                                                                d.push(
                                                                    ".#.+[+~]"
                                                                ),
                                                            e.querySelectorAll(
                                                                "\\\f"
                                                            ),
                                                            d.push(
                                                                "[\\r\\n\\f]"
                                                            );
                                                    }),
                                                    L(function (e) {
                                                        e.innerHTML =
                                                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                        var t =
                                                            T.createElement(
                                                                "input"
                                                            );
                                                        t.setAttribute(
                                                            "type",
                                                            "hidden"
                                                        ),
                                                            e
                                                                .appendChild(t)
                                                                .setAttribute(
                                                                    "name",
                                                                    "D"
                                                                ),
                                                            e.querySelectorAll(
                                                                "[name=d]"
                                                            ).length &&
                                                                d.push(
                                                                    "name" +
                                                                        s +
                                                                        "*[*^$|!~]?="
                                                                ),
                                                            2 !==
                                                                e.querySelectorAll(
                                                                    ":enabled"
                                                                ).length &&
                                                                d.push(
                                                                    ":enabled",
                                                                    ":disabled"
                                                                ),
                                                            (n.appendChild(
                                                                e
                                                            ).disabled = !0),
                                                            2 !==
                                                                e.querySelectorAll(
                                                                    ":disabled"
                                                                ).length &&
                                                                d.push(
                                                                    ":enabled",
                                                                    ":disabled"
                                                                ),
                                                            e.querySelectorAll(
                                                                "*,:x"
                                                            ),
                                                            d.push(",.*:");
                                                    })),
                                                (p.matchesSelector = S.test(
                                                    (o =
                                                        n.matches ||
                                                        n.webkitMatchesSelector ||
                                                        n.mozMatchesSelector ||
                                                        n.oMatchesSelector ||
                                                        n.msMatchesSelector)
                                                )) &&
                                                    L(function (e) {
                                                        (p.disconnectedMatch =
                                                            o.call(e, "*")),
                                                            o.call(
                                                                e,
                                                                "[s!='']:x"
                                                            ),
                                                            r.push("!=", Z);
                                                    }),
                                                (d =
                                                    d.length &&
                                                    new RegExp(d.join("|"))),
                                                (r =
                                                    r.length &&
                                                    new RegExp(r.join("|"))),
                                                (e = S.test(
                                                    n.compareDocumentPosition
                                                )),
                                                (g =
                                                    e || S.test(n.contains)
                                                        ? function (e, t) {
                                                              var n =
                                                                      9 ===
                                                                      e.nodeType
                                                                          ? e.documentElement
                                                                          : e,
                                                                  t =
                                                                      t &&
                                                                      t.parentNode;
                                                              return (
                                                                  e === t ||
                                                                  !(
                                                                      !t ||
                                                                      1 !==
                                                                          t.nodeType ||
                                                                      !(n.contains
                                                                          ? n.contains(
                                                                                t
                                                                            )
                                                                          : e.compareDocumentPosition &&
                                                                            16 &
                                                                                e.compareDocumentPosition(
                                                                                    t
                                                                                ))
                                                                  )
                                                              );
                                                          }
                                                        : function (e, t) {
                                                              if (t)
                                                                  for (
                                                                      ;
                                                                      (t =
                                                                          t.parentNode);

                                                                  )
                                                                      if (
                                                                          t ===
                                                                          e
                                                                      )
                                                                          return !0;
                                                              return !1;
                                                          }),
                                                (X = e
                                                    ? function (e, t) {
                                                          var n;
                                                          return e === t
                                                              ? ((l = !0), 0)
                                                              : (n =
                                                                    !e.compareDocumentPosition -
                                                                    !t.compareDocumentPosition) ||
                                                                    (1 &
                                                                        (n =
                                                                            (e.ownerDocument ||
                                                                                e) ==
                                                                            (t.ownerDocument ||
                                                                                t)
                                                                                ? e.compareDocumentPosition(
                                                                                      t
                                                                                  )
                                                                                : 1) ||
                                                                    (!p.sortDetached &&
                                                                        t.compareDocumentPosition(
                                                                            e
                                                                        ) === n)
                                                                        ? e ==
                                                                              T ||
                                                                          (e.ownerDocument ==
                                                                              c &&
                                                                              g(
                                                                                  c,
                                                                                  e
                                                                              ))
                                                                            ? -1
                                                                            : t ==
                                                                                  T ||
                                                                              (t.ownerDocument ==
                                                                                  c &&
                                                                                  g(
                                                                                      c,
                                                                                      t
                                                                                  ))
                                                                            ? 1
                                                                            : u
                                                                            ? y(
                                                                                  u,
                                                                                  e
                                                                              ) -
                                                                              y(
                                                                                  u,
                                                                                  t
                                                                              )
                                                                            : 0
                                                                        : 4 & n
                                                                        ? -1
                                                                        : 1);
                                                      }
                                                    : function (e, t) {
                                                          if (e === t)
                                                              return (
                                                                  (l = !0), 0
                                                              );
                                                          var n,
                                                              r = 0,
                                                              o = e.parentNode,
                                                              i = t.parentNode,
                                                              s = [e],
                                                              a = [t];
                                                          if (!o || !i)
                                                              return e == T
                                                                  ? -1
                                                                  : t == T
                                                                  ? 1
                                                                  : o
                                                                  ? -1
                                                                  : i
                                                                  ? 1
                                                                  : u
                                                                  ? y(u, e) -
                                                                    y(u, t)
                                                                  : 0;
                                                          if (o === i)
                                                              return de(e, t);
                                                          for (
                                                              n = e;
                                                              (n =
                                                                  n.parentNode);

                                                          )
                                                              s.unshift(n);
                                                          for (
                                                              n = t;
                                                              (n =
                                                                  n.parentNode);

                                                          )
                                                              a.unshift(n);
                                                          for (
                                                              ;
                                                              s[r] === a[r];

                                                          )
                                                              r++;
                                                          return r
                                                              ? de(s[r], a[r])
                                                              : s[r] == c
                                                              ? -1
                                                              : a[r] == c
                                                              ? 1
                                                              : 0;
                                                      })),
                                            T
                                        );
                                    }),
                                (D.matches = function (e, t) {
                                    return D(e, null, null, t);
                                }),
                                (D.matchesSelector = function (e, t) {
                                    if (
                                        (C(e),
                                        p.matchesSelector &&
                                            A &&
                                            !m[t + " "] &&
                                            (!r || !r.test(t)) &&
                                            (!d || !d.test(t)))
                                    )
                                        try {
                                            var n = o.call(e, t);
                                            if (
                                                n ||
                                                p.disconnectedMatch ||
                                                (e.document &&
                                                    11 !== e.document.nodeType)
                                            )
                                                return n;
                                        } catch (e) {
                                            m(t, !0);
                                        }
                                    return 0 < D(t, T, null, [e]).length;
                                }),
                                (D.contains = function (e, t) {
                                    return (
                                        (e.ownerDocument || e) != T && C(e),
                                        g(e, t)
                                    );
                                }),
                                (D.attr = function (e, t) {
                                    (e.ownerDocument || e) != T && C(e);
                                    var n = b.attrHandle[t.toLowerCase()],
                                        n =
                                            n &&
                                            V.call(
                                                b.attrHandle,
                                                t.toLowerCase()
                                            )
                                                ? n(e, t, !A)
                                                : void 0;
                                    return void 0 !== n
                                        ? n
                                        : p.attributes || !A
                                        ? e.getAttribute(t)
                                        : (n = e.getAttributeNode(t)) &&
                                          n.specified
                                        ? n.value
                                        : null;
                                }),
                                (D.escape = function (e) {
                                    return (e + "").replace(fe, P);
                                }),
                                (D.error = function (e) {
                                    throw new Error(
                                        "Syntax error, unrecognized expression: " +
                                            e
                                    );
                                }),
                                (D.uniqueSort = function (e) {
                                    var t,
                                        n = [],
                                        r = 0,
                                        o = 0;
                                    if (
                                        ((l = !p.detectDuplicates),
                                        (u = !p.sortStable && e.slice(0)),
                                        e.sort(X),
                                        l)
                                    ) {
                                        for (; (t = e[o++]); )
                                            t === e[o] && (r = n.push(o));
                                        for (; r--; ) e.splice(n[r], 1);
                                    }
                                    return (u = null), e;
                                }),
                                (i = D.getText =
                                    function (e) {
                                        var t,
                                            n = "",
                                            r = 0,
                                            o = e.nodeType;
                                        if (o) {
                                            if (
                                                1 === o ||
                                                9 === o ||
                                                11 === o
                                            ) {
                                                if (
                                                    "string" ==
                                                    typeof e.textContent
                                                )
                                                    return e.textContent;
                                                for (
                                                    e = e.firstChild;
                                                    e;
                                                    e = e.nextSibling
                                                )
                                                    n += i(e);
                                            } else if (3 === o || 4 === o)
                                                return e.nodeValue;
                                        } else for (; (t = e[r++]); ) n += i(t);
                                        return n;
                                    }),
                                ((b = D.selectors =
                                    {
                                        cacheLength: 50,
                                        createPseudo: O,
                                        match: x,
                                        attrHandle: {},
                                        find: {},
                                        relative: {
                                            ">": {
                                                dir: "parentNode",
                                                first: !0,
                                            },
                                            " ": { dir: "parentNode" },
                                            "+": {
                                                dir: "previousSibling",
                                                first: !0,
                                            },
                                            "~": { dir: "previousSibling" },
                                        },
                                        preFilter: {
                                            ATTR: function (e) {
                                                return (
                                                    (e[1] = e[1].replace(N, f)),
                                                    (e[3] = (
                                                        e[3] ||
                                                        e[4] ||
                                                        e[5] ||
                                                        ""
                                                    ).replace(N, f)),
                                                    "~=" === e[2] &&
                                                        (e[3] =
                                                            " " + e[3] + " "),
                                                    e.slice(0, 4)
                                                );
                                            },
                                            CHILD: function (e) {
                                                return (
                                                    (e[1] = e[1].toLowerCase()),
                                                    "nth" === e[1].slice(0, 3)
                                                        ? (e[3] ||
                                                              D.error(e[0]),
                                                          (e[4] = +(e[4]
                                                              ? e[5] +
                                                                (e[6] || 1)
                                                              : 2 *
                                                                ("even" ===
                                                                    e[3] ||
                                                                    "odd" ===
                                                                        e[3]))),
                                                          (e[5] = +(
                                                              e[7] + e[8] ||
                                                              "odd" === e[3]
                                                          )))
                                                        : e[3] && D.error(e[0]),
                                                    e
                                                );
                                            },
                                            PSEUDO: function (e) {
                                                var t,
                                                    n = !e[6] && e[2];
                                                return x.CHILD.test(e[0])
                                                    ? null
                                                    : (e[3]
                                                          ? (e[2] =
                                                                e[4] ||
                                                                e[5] ||
                                                                "")
                                                          : n &&
                                                            oe.test(n) &&
                                                            (t = h(n, !0)) &&
                                                            (t =
                                                                n.indexOf(
                                                                    ")",
                                                                    n.length - t
                                                                ) - n.length) &&
                                                            ((e[0] = e[0].slice(
                                                                0,
                                                                t
                                                            )),
                                                            (e[2] = n.slice(
                                                                0,
                                                                t
                                                            ))),
                                                      e.slice(0, 3));
                                            },
                                        },
                                        filter: {
                                            TAG: function (e) {
                                                var t = e
                                                    .replace(N, f)
                                                    .toLowerCase();
                                                return "*" === e
                                                    ? function () {
                                                          return !0;
                                                      }
                                                    : function (e) {
                                                          return (
                                                              e.nodeName &&
                                                              e.nodeName.toLowerCase() ===
                                                                  t
                                                          );
                                                      };
                                            },
                                            CLASS: function (e) {
                                                var t = _[e + " "];
                                                return (
                                                    t ||
                                                    ((t = new RegExp(
                                                        "(^|" +
                                                            s +
                                                            ")" +
                                                            e +
                                                            "(" +
                                                            s +
                                                            "|$)"
                                                    )) &&
                                                        _(e, function (e) {
                                                            return t.test(
                                                                ("string" ==
                                                                    typeof e.className &&
                                                                    e.className) ||
                                                                    (void 0 !==
                                                                        e.getAttribute &&
                                                                        e.getAttribute(
                                                                            "class"
                                                                        )) ||
                                                                    ""
                                                            );
                                                        }))
                                                );
                                            },
                                            ATTR: function (t, n, r) {
                                                return function (e) {
                                                    e = D.attr(e, t);
                                                    return null == e
                                                        ? "!=" === n
                                                        : !n ||
                                                              ((e += ""),
                                                              "=" === n
                                                                  ? e === r
                                                                  : "!=" === n
                                                                  ? e !== r
                                                                  : "^=" === n
                                                                  ? r &&
                                                                    0 ===
                                                                        e.indexOf(
                                                                            r
                                                                        )
                                                                  : "*=" === n
                                                                  ? r &&
                                                                    -1 <
                                                                        e.indexOf(
                                                                            r
                                                                        )
                                                                  : "$=" === n
                                                                  ? r &&
                                                                    e.slice(
                                                                        -r.length
                                                                    ) === r
                                                                  : "~=" === n
                                                                  ? -1 <
                                                                    (
                                                                        " " +
                                                                        e.replace(
                                                                            ee,
                                                                            " "
                                                                        ) +
                                                                        " "
                                                                    ).indexOf(r)
                                                                  : "|=" ===
                                                                        n &&
                                                                    (e === r ||
                                                                        e.slice(
                                                                            0,
                                                                            r.length +
                                                                                1
                                                                        ) ===
                                                                            r +
                                                                                "-"));
                                                };
                                            },
                                            CHILD: function (d, e, t, g, m) {
                                                var v = "nth" !== d.slice(0, 3),
                                                    y = "last" !== d.slice(-4),
                                                    x = "of-type" === e;
                                                return 1 === g && 0 === m
                                                    ? function (e) {
                                                          return !!e.parentNode;
                                                      }
                                                    : function (e, t, n) {
                                                          var r,
                                                              o,
                                                              i,
                                                              s,
                                                              a,
                                                              u,
                                                              l =
                                                                  v != y
                                                                      ? "nextSibling"
                                                                      : "previousSibling",
                                                              c = e.parentNode,
                                                              f =
                                                                  x &&
                                                                  e.nodeName.toLowerCase(),
                                                              p = !n && !x,
                                                              h = !1;
                                                          if (c) {
                                                              if (v) {
                                                                  for (; l; ) {
                                                                      for (
                                                                          s = e;
                                                                          (s =
                                                                              s[
                                                                                  l
                                                                              ]);

                                                                      )
                                                                          if (
                                                                              x
                                                                                  ? s.nodeName.toLowerCase() ===
                                                                                    f
                                                                                  : 1 ===
                                                                                    s.nodeType
                                                                          )
                                                                              return !1;
                                                                      u = l =
                                                                          "only" ===
                                                                              d &&
                                                                          !u &&
                                                                          "nextSibling";
                                                                  }
                                                                  return !0;
                                                              }
                                                              if (
                                                                  ((u = [
                                                                      y
                                                                          ? c.firstChild
                                                                          : c.lastChild,
                                                                  ]),
                                                                  y && p)
                                                              ) {
                                                                  for (
                                                                      h =
                                                                          (a =
                                                                              (r =
                                                                                  (o =
                                                                                      (i =
                                                                                          (s =
                                                                                              c)[
                                                                                              j
                                                                                          ] ||
                                                                                          (s[
                                                                                              j
                                                                                          ] =
                                                                                              {}))[
                                                                                          s
                                                                                              .uniqueID
                                                                                      ] ||
                                                                                      (i[
                                                                                          s.uniqueID
                                                                                      ] =
                                                                                          {}))[
                                                                                      d
                                                                                  ] ||
                                                                                  [])[0] ===
                                                                                  k &&
                                                                              r[1]) &&
                                                                          r[2],
                                                                          s =
                                                                              a &&
                                                                              c
                                                                                  .childNodes[
                                                                                  a
                                                                              ];
                                                                      (s =
                                                                          (++a &&
                                                                              s &&
                                                                              s[
                                                                                  l
                                                                              ]) ||
                                                                          (h =
                                                                              a =
                                                                                  0) ||
                                                                          u.pop());

                                                                  )
                                                                      if (
                                                                          1 ===
                                                                              s.nodeType &&
                                                                          ++h &&
                                                                          s ===
                                                                              e
                                                                      ) {
                                                                          o[d] =
                                                                              [
                                                                                  k,
                                                                                  a,
                                                                                  h,
                                                                              ];
                                                                          break;
                                                                      }
                                                              } else if (
                                                                  !1 ===
                                                                  (h = p
                                                                      ? (a =
                                                                            (r =
                                                                                (o =
                                                                                    (i =
                                                                                        (s =
                                                                                            e)[
                                                                                            j
                                                                                        ] ||
                                                                                        (s[
                                                                                            j
                                                                                        ] =
                                                                                            {}))[
                                                                                        s
                                                                                            .uniqueID
                                                                                    ] ||
                                                                                    (i[
                                                                                        s.uniqueID
                                                                                    ] =
                                                                                        {}))[
                                                                                    d
                                                                                ] ||
                                                                                [])[0] ===
                                                                                k &&
                                                                            r[1])
                                                                      : h)
                                                              )
                                                                  for (
                                                                      ;
                                                                      (s =
                                                                          (++a &&
                                                                              s &&
                                                                              s[
                                                                                  l
                                                                              ]) ||
                                                                          (h =
                                                                              a =
                                                                                  0) ||
                                                                          u.pop()) &&
                                                                      ((x
                                                                          ? s.nodeName.toLowerCase() !==
                                                                            f
                                                                          : 1 !==
                                                                            s.nodeType) ||
                                                                          !++h ||
                                                                          (p &&
                                                                              ((o =
                                                                                  (i =
                                                                                      s[
                                                                                          j
                                                                                      ] ||
                                                                                      (s[
                                                                                          j
                                                                                      ] =
                                                                                          {}))[
                                                                                      s
                                                                                          .uniqueID
                                                                                  ] ||
                                                                                  (i[
                                                                                      s.uniqueID
                                                                                  ] =
                                                                                      {}))[
                                                                                  d
                                                                              ] =
                                                                                  [
                                                                                      k,
                                                                                      h,
                                                                                  ]),
                                                                          s !==
                                                                              e));

                                                                  );
                                                              return (
                                                                  (h -= m) ===
                                                                      g ||
                                                                  (h % g == 0 &&
                                                                      0 <=
                                                                          h / g)
                                                              );
                                                          }
                                                      };
                                            },
                                            PSEUDO: function (e, i) {
                                                var t,
                                                    s =
                                                        b.pseudos[e] ||
                                                        b.setFilters[
                                                            e.toLowerCase()
                                                        ] ||
                                                        D.error(
                                                            "unsupported pseudo: " +
                                                                e
                                                        );
                                                return s[j]
                                                    ? s(i)
                                                    : 1 < s.length
                                                    ? ((t = [e, e, "", i]),
                                                      b.setFilters.hasOwnProperty(
                                                          e.toLowerCase()
                                                      )
                                                          ? O(function (e, t) {
                                                                for (
                                                                    var n,
                                                                        r = s(
                                                                            e,
                                                                            i
                                                                        ),
                                                                        o =
                                                                            r.length;
                                                                    o--;

                                                                )
                                                                    e[
                                                                        (n = y(
                                                                            e,
                                                                            r[o]
                                                                        ))
                                                                    ] = !(t[n] =
                                                                        r[o]);
                                                            })
                                                          : function (e) {
                                                                return s(
                                                                    e,
                                                                    0,
                                                                    t
                                                                );
                                                            })
                                                    : s;
                                            },
                                        },
                                        pseudos: {
                                            not: O(function (e) {
                                                var r = [],
                                                    o = [],
                                                    a = $(e.replace(v, "$1"));
                                                return a[j]
                                                    ? O(function (e, t, n, r) {
                                                          for (
                                                              var o,
                                                                  i = a(
                                                                      e,
                                                                      null,
                                                                      r,
                                                                      []
                                                                  ),
                                                                  s = e.length;
                                                              s--;

                                                          )
                                                              (o = i[s]) &&
                                                                  (e[s] = !(t[
                                                                      s
                                                                  ] = o));
                                                      })
                                                    : function (e, t, n) {
                                                          return (
                                                              (r[0] = e),
                                                              a(r, null, n, o),
                                                              (r[0] = null),
                                                              !o.pop()
                                                          );
                                                      };
                                            }),
                                            has: O(function (t) {
                                                return function (e) {
                                                    return 0 < D(t, e).length;
                                                };
                                            }),
                                            contains: O(function (t) {
                                                return (
                                                    (t = t.replace(N, f)),
                                                    function (e) {
                                                        return (
                                                            -1 <
                                                            (
                                                                e.textContent ||
                                                                i(e)
                                                            ).indexOf(t)
                                                        );
                                                    }
                                                );
                                            }),
                                            lang: O(function (n) {
                                                return (
                                                    ie.test(n || "") ||
                                                        D.error(
                                                            "unsupported lang: " +
                                                                n
                                                        ),
                                                    (n = n
                                                        .replace(N, f)
                                                        .toLowerCase()),
                                                    function (e) {
                                                        var t;
                                                        do {
                                                            if (
                                                                (t = A
                                                                    ? e.lang
                                                                    : e.getAttribute(
                                                                          "xml:lang"
                                                                      ) ||
                                                                      e.getAttribute(
                                                                          "lang"
                                                                      ))
                                                            )
                                                                return (
                                                                    (t =
                                                                        t.toLowerCase()) ===
                                                                        n ||
                                                                    0 ===
                                                                        t.indexOf(
                                                                            n +
                                                                                "-"
                                                                        )
                                                                );
                                                        } while (
                                                            (e =
                                                                e.parentNode) &&
                                                            1 === e.nodeType
                                                        );
                                                        return !1;
                                                    }
                                                );
                                            }),
                                            target: function (e) {
                                                var t =
                                                    I.location &&
                                                    I.location.hash;
                                                return t && t.slice(1) === e.id;
                                            },
                                            root: function (e) {
                                                return e === n;
                                            },
                                            focus: function (e) {
                                                return (
                                                    e === T.activeElement &&
                                                    (!T.hasFocus ||
                                                        T.hasFocus()) &&
                                                    !!(
                                                        e.type ||
                                                        e.href ||
                                                        ~e.tabIndex
                                                    )
                                                );
                                            },
                                            enabled: ge(!1),
                                            disabled: ge(!0),
                                            checked: function (e) {
                                                var t =
                                                    e.nodeName.toLowerCase();
                                                return (
                                                    ("input" === t &&
                                                        !!e.checked) ||
                                                    ("option" === t &&
                                                        !!e.selected)
                                                );
                                            },
                                            selected: function (e) {
                                                return (
                                                    e.parentNode &&
                                                        e.parentNode
                                                            .selectedIndex,
                                                    !0 === e.selected
                                                );
                                            },
                                            empty: function (e) {
                                                for (
                                                    e = e.firstChild;
                                                    e;
                                                    e = e.nextSibling
                                                )
                                                    if (e.nodeType < 6)
                                                        return !1;
                                                return !0;
                                            },
                                            parent: function (e) {
                                                return !b.pseudos.empty(e);
                                            },
                                            header: function (e) {
                                                return ue.test(e.nodeName);
                                            },
                                            input: function (e) {
                                                return ae.test(e.nodeName);
                                            },
                                            button: function (e) {
                                                var t =
                                                    e.nodeName.toLowerCase();
                                                return (
                                                    ("input" === t &&
                                                        "button" === e.type) ||
                                                    "button" === t
                                                );
                                            },
                                            text: function (e) {
                                                return (
                                                    "input" ===
                                                        e.nodeName.toLowerCase() &&
                                                    "text" === e.type &&
                                                    (null ==
                                                        (e =
                                                            e.getAttribute(
                                                                "type"
                                                            )) ||
                                                        "text" ===
                                                            e.toLowerCase())
                                                );
                                            },
                                            first: H(function () {
                                                return [0];
                                            }),
                                            last: H(function (e, t) {
                                                return [t - 1];
                                            }),
                                            eq: H(function (e, t, n) {
                                                return [n < 0 ? n + t : n];
                                            }),
                                            even: H(function (e, t) {
                                                for (var n = 0; n < t; n += 2)
                                                    e.push(n);
                                                return e;
                                            }),
                                            odd: H(function (e, t) {
                                                for (var n = 1; n < t; n += 2)
                                                    e.push(n);
                                                return e;
                                            }),
                                            lt: H(function (e, t, n) {
                                                for (
                                                    var r =
                                                        n < 0
                                                            ? n + t
                                                            : t < n
                                                            ? t
                                                            : n;
                                                    0 <= --r;

                                                )
                                                    e.push(r);
                                                return e;
                                            }),
                                            gt: H(function (e, t, n) {
                                                for (
                                                    var r = n < 0 ? n + t : n;
                                                    ++r < t;

                                                )
                                                    e.push(r);
                                                return e;
                                            }),
                                        },
                                    }).pseudos.nth = b.pseudos.eq),
                                {
                                    radio: !0,
                                    checkbox: !0,
                                    file: !0,
                                    password: !0,
                                    image: !0,
                                }))
                                    b.pseudos[e] = (function (t) {
                                        return function (e) {
                                            return (
                                                "input" ===
                                                    e.nodeName.toLowerCase() &&
                                                e.type === t
                                            );
                                        };
                                    })(e);
                                for (e in { submit: !0, reset: !0 })
                                    b.pseudos[e] = (function (n) {
                                        return function (e) {
                                            var t = e.nodeName.toLowerCase();
                                            return (
                                                ("input" === t ||
                                                    "button" === t) &&
                                                e.type === n
                                            );
                                        };
                                    })(e);
                                function ve() {}
                                function R(e) {
                                    for (
                                        var t = 0, n = e.length, r = "";
                                        t < n;
                                        t++
                                    )
                                        r += e[t].value;
                                    return r;
                                }
                                function ye(s, e, t) {
                                    var a = e.dir,
                                        u = e.next,
                                        l = u || a,
                                        c = t && "parentNode" === l,
                                        f = B++;
                                    return e.first
                                        ? function (e, t, n) {
                                              for (; (e = e[a]); )
                                                  if (1 === e.nodeType || c)
                                                      return s(e, t, n);
                                              return !1;
                                          }
                                        : function (e, t, n) {
                                              var r,
                                                  o,
                                                  i = [k, f];
                                              if (n) {
                                                  for (; (e = e[a]); )
                                                      if (
                                                          (1 === e.nodeType ||
                                                              c) &&
                                                          s(e, t, n)
                                                      )
                                                          return !0;
                                              } else
                                                  for (; (e = e[a]); )
                                                      if (1 === e.nodeType || c)
                                                          if (
                                                              ((o =
                                                                  (o =
                                                                      e[j] ||
                                                                      (e[j] =
                                                                          {}))[
                                                                      e.uniqueID
                                                                  ] ||
                                                                  (o[
                                                                      e.uniqueID
                                                                  ] = {})),
                                                              u &&
                                                                  u ===
                                                                      e.nodeName.toLowerCase())
                                                          )
                                                              e = e[a] || e;
                                                          else {
                                                              if (
                                                                  (r = o[l]) &&
                                                                  r[0] === k &&
                                                                  r[1] === f
                                                              )
                                                                  return (i[2] =
                                                                      r[2]);
                                                              if (
                                                                  ((o[l] =
                                                                      i)[2] = s(
                                                                      e,
                                                                      t,
                                                                      n
                                                                  ))
                                                              )
                                                                  return !0;
                                                          }
                                              return !1;
                                          };
                                }
                                function xe(o) {
                                    return 1 < o.length
                                        ? function (e, t, n) {
                                              for (var r = o.length; r--; )
                                                  if (!o[r](e, t, n)) return !1;
                                              return !0;
                                          }
                                        : o[0];
                                }
                                function be(e, t, n, r, o) {
                                    for (
                                        var i,
                                            s = [],
                                            a = 0,
                                            u = e.length,
                                            l = null != t;
                                        a < u;
                                        a++
                                    )
                                        !(i = e[a]) ||
                                            (n && !n(i, r, o)) ||
                                            (s.push(i), l && t.push(a));
                                    return s;
                                }
                                function we(h, d, g, m, v, e) {
                                    return (
                                        m && !m[j] && (m = we(m)),
                                        v && !v[j] && (v = we(v, e)),
                                        O(function (e, t, n, r) {
                                            var o,
                                                i,
                                                s,
                                                a = [],
                                                u = [],
                                                l = t.length,
                                                c =
                                                    e ||
                                                    (function (e, t, n) {
                                                        for (
                                                            var r = 0,
                                                                o = t.length;
                                                            r < o;
                                                            r++
                                                        )
                                                            D(e, t[r], n);
                                                        return n;
                                                    })(
                                                        d || "*",
                                                        n.nodeType ? [n] : n,
                                                        []
                                                    ),
                                                f =
                                                    !h || (!e && d)
                                                        ? c
                                                        : be(c, a, h, n, r),
                                                p = g
                                                    ? v || (e ? h : l || m)
                                                        ? []
                                                        : t
                                                    : f;
                                            if ((g && g(f, p, n, r), m))
                                                for (
                                                    o = be(p, u),
                                                        m(o, [], n, r),
                                                        i = o.length;
                                                    i--;

                                                )
                                                    (s = o[i]) &&
                                                        (p[u[i]] = !(f[u[i]] =
                                                            s));
                                            if (e) {
                                                if (v || h) {
                                                    if (v) {
                                                        for (
                                                            o = [],
                                                                i = p.length;
                                                            i--;

                                                        )
                                                            (s = p[i]) &&
                                                                o.push(
                                                                    (f[i] = s)
                                                                );
                                                        v(null, (p = []), o, r);
                                                    }
                                                    for (i = p.length; i--; )
                                                        (s = p[i]) &&
                                                            -1 <
                                                                (o = v
                                                                    ? y(e, s)
                                                                    : a[i]) &&
                                                            (e[o] = !(t[o] =
                                                                s));
                                                }
                                            } else (p = be(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : E.apply(t, p);
                                        })
                                    );
                                }
                                function Ce(m, v) {
                                    function e(e, t, n, r, o) {
                                        var i,
                                            s,
                                            a,
                                            u = 0,
                                            l = "0",
                                            c = e && [],
                                            f = [],
                                            p = w,
                                            h = e || (x && b.find.TAG("*", o)),
                                            d = (k +=
                                                null == p
                                                    ? 1
                                                    : Math.random() || 0.1),
                                            g = h.length;
                                        for (
                                            o && (w = t == T || t || o);
                                            l !== g && null != (i = h[l]);
                                            l++
                                        ) {
                                            if (x && i) {
                                                for (
                                                    s = 0,
                                                        t ||
                                                            i.ownerDocument ==
                                                                T ||
                                                            (C(i), (n = !A));
                                                    (a = m[s++]);

                                                )
                                                    if (a(i, t || T, n)) {
                                                        r.push(i);
                                                        break;
                                                    }
                                                o && (k = d);
                                            }
                                            y &&
                                                ((i = !a && i) && u--,
                                                e && c.push(i));
                                        }
                                        if (((u += l), y && l !== u)) {
                                            for (s = 0; (a = v[s++]); )
                                                a(c, f, t, n);
                                            if (e) {
                                                if (0 < u)
                                                    for (; l--; )
                                                        c[l] ||
                                                            f[l] ||
                                                            (f[l] = G.call(r));
                                                f = be(f);
                                            }
                                            E.apply(r, f),
                                                o &&
                                                    !e &&
                                                    0 < f.length &&
                                                    1 < u + v.length &&
                                                    D.uniqueSort(r);
                                        }
                                        return o && ((k = d), (w = p)), c;
                                    }
                                    var y = 0 < v.length,
                                        x = 0 < m.length;
                                    return y ? O(e) : e;
                                }
                                return (
                                    (ve.prototype = b.filters = b.pseudos),
                                    (b.setFilters = new ve()),
                                    (h = D.tokenize =
                                        function (e, t) {
                                            var n,
                                                r,
                                                o,
                                                i,
                                                s,
                                                a,
                                                u,
                                                l = U[e + " "];
                                            if (l) return t ? 0 : l.slice(0);
                                            for (
                                                s = e, a = [], u = b.preFilter;
                                                s;

                                            ) {
                                                for (i in ((n &&
                                                    !(r = te.exec(s))) ||
                                                    (r &&
                                                        (s =
                                                            s.slice(
                                                                r[0].length
                                                            ) || s),
                                                    a.push((o = []))),
                                                (n = !1),
                                                (r = ne.exec(s)) &&
                                                    ((n = r.shift()),
                                                    o.push({
                                                        value: n,
                                                        type: r[0].replace(
                                                            v,
                                                            " "
                                                        ),
                                                    }),
                                                    (s = s.slice(n.length))),
                                                b.filter))
                                                    !(r = x[i].exec(s)) ||
                                                        (u[i] &&
                                                            !(r = u[i](r))) ||
                                                        ((n = r.shift()),
                                                        o.push({
                                                            value: n,
                                                            type: i,
                                                            matches: r,
                                                        }),
                                                        (s = s.slice(
                                                            n.length
                                                        )));
                                                if (!n) break;
                                            }
                                            return t
                                                ? s.length
                                                : s
                                                ? D.error(e)
                                                : U(e, a).slice(0);
                                        }),
                                    ($ = D.compile =
                                        function (e, t) {
                                            var n,
                                                r = [],
                                                o = [],
                                                i = z[e + " "];
                                            if (!i) {
                                                for (
                                                    n = (t = t || h(e)).length;
                                                    n--;

                                                )
                                                    ((i = (function e(t) {
                                                        for (
                                                            var r,
                                                                n,
                                                                o,
                                                                i = t.length,
                                                                s =
                                                                    b.relative[
                                                                        t[0]
                                                                            .type
                                                                    ],
                                                                a =
                                                                    s ||
                                                                    b.relative[
                                                                        " "
                                                                    ],
                                                                u = s ? 1 : 0,
                                                                l = ye(
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            e ===
                                                                            r
                                                                        );
                                                                    },
                                                                    a,
                                                                    !0
                                                                ),
                                                                c = ye(
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            -1 <
                                                                            y(
                                                                                r,
                                                                                e
                                                                            )
                                                                        );
                                                                    },
                                                                    a,
                                                                    !0
                                                                ),
                                                                f = [
                                                                    function (
                                                                        e,
                                                                        t,
                                                                        n
                                                                    ) {
                                                                        return (
                                                                            (e =
                                                                                (!s &&
                                                                                    (n ||
                                                                                        t !==
                                                                                            w)) ||
                                                                                ((r =
                                                                                    t)
                                                                                    .nodeType
                                                                                    ? l
                                                                                    : c)(
                                                                                    e,
                                                                                    t,
                                                                                    n
                                                                                )),
                                                                            (r =
                                                                                null),
                                                                            e
                                                                        );
                                                                    },
                                                                ];
                                                            u < i;
                                                            u++
                                                        )
                                                            if (
                                                                (n =
                                                                    b.relative[
                                                                        t[u]
                                                                            .type
                                                                    ])
                                                            )
                                                                f = [
                                                                    ye(
                                                                        xe(f),
                                                                        n
                                                                    ),
                                                                ];
                                                            else {
                                                                if (
                                                                    (n =
                                                                        b.filter[
                                                                            t[u]
                                                                                .type
                                                                        ].apply(
                                                                            null,
                                                                            t[u]
                                                                                .matches
                                                                        ))[j]
                                                                ) {
                                                                    for (
                                                                        o = ++u;
                                                                        o < i &&
                                                                        !b
                                                                            .relative[
                                                                            t[o]
                                                                                .type
                                                                        ];
                                                                        o++
                                                                    );
                                                                    return we(
                                                                        1 < u &&
                                                                            xe(
                                                                                f
                                                                            ),
                                                                        1 < u &&
                                                                            R(
                                                                                t
                                                                                    .slice(
                                                                                        0,
                                                                                        u -
                                                                                            1
                                                                                    )
                                                                                    .concat(
                                                                                        {
                                                                                            value:
                                                                                                " " ===
                                                                                                t[
                                                                                                    u -
                                                                                                        2
                                                                                                ]
                                                                                                    .type
                                                                                                    ? "*"
                                                                                                    : "",
                                                                                        }
                                                                                    )
                                                                            ).replace(
                                                                                v,
                                                                                "$1"
                                                                            ),
                                                                        n,
                                                                        u < o &&
                                                                            e(
                                                                                t.slice(
                                                                                    u,
                                                                                    o
                                                                                )
                                                                            ),
                                                                        o < i &&
                                                                            e(
                                                                                (t =
                                                                                    t.slice(
                                                                                        o
                                                                                    ))
                                                                            ),
                                                                        o < i &&
                                                                            R(t)
                                                                    );
                                                                }
                                                                f.push(n);
                                                            }
                                                        return xe(f);
                                                    })(t[n]))[j]
                                                        ? r
                                                        : o
                                                    ).push(i);
                                                (i = z(e, Ce(o, r))).selector =
                                                    e;
                                            }
                                            return i;
                                        }),
                                    (W = D.select =
                                        function (e, t, n, r) {
                                            var o,
                                                i,
                                                s,
                                                a,
                                                u,
                                                l = "function" == typeof e && e,
                                                c =
                                                    !r &&
                                                    h((e = l.selector || e));
                                            if (
                                                ((n = n || []), 1 === c.length)
                                            ) {
                                                if (
                                                    2 <
                                                        (i = c[0] =
                                                            c[0].slice(0))
                                                            .length &&
                                                    "ID" === (s = i[0]).type &&
                                                    9 === t.nodeType &&
                                                    A &&
                                                    b.relative[i[1].type]
                                                ) {
                                                    if (
                                                        !(t = (b.find.ID(
                                                            s.matches[0].replace(
                                                                N,
                                                                f
                                                            ),
                                                            t
                                                        ) || [])[0])
                                                    )
                                                        return n;
                                                    l && (t = t.parentNode),
                                                        (e = e.slice(
                                                            i.shift().value
                                                                .length
                                                        ));
                                                }
                                                for (
                                                    o = x.needsContext.test(e)
                                                        ? 0
                                                        : i.length;
                                                    o-- &&
                                                    ((s = i[o]),
                                                    !b.relative[(a = s.type)]);

                                                )
                                                    if (
                                                        (u = b.find[a]) &&
                                                        (r = u(
                                                            s.matches[0].replace(
                                                                N,
                                                                f
                                                            ),
                                                            (ce.test(
                                                                i[0].type
                                                            ) &&
                                                                me(
                                                                    t.parentNode
                                                                )) ||
                                                                t
                                                        ))
                                                    ) {
                                                        if (
                                                            (i.splice(o, 1),
                                                            (e =
                                                                r.length &&
                                                                R(i)))
                                                        )
                                                            break;
                                                        return E.apply(n, r), n;
                                                    }
                                            }
                                            return (
                                                (l || $(e, c))(
                                                    r,
                                                    t,
                                                    !A,
                                                    n,
                                                    !t ||
                                                        (ce.test(e) &&
                                                            me(t.parentNode)) ||
                                                        t
                                                ),
                                                n
                                            );
                                        }),
                                    (p.sortStable =
                                        j.split("").sort(X).join("") === j),
                                    (p.detectDuplicates = !!l),
                                    C(),
                                    (p.sortDetached = L(function (e) {
                                        return (
                                            1 &
                                            e.compareDocumentPosition(
                                                T.createElement("fieldset")
                                            )
                                        );
                                    })),
                                    L(function (e) {
                                        return (
                                            (e.innerHTML = "<a href='#'></a>"),
                                            "#" ===
                                                e.firstChild.getAttribute(
                                                    "href"
                                                )
                                        );
                                    }) ||
                                        he(
                                            "type|href|height|width",
                                            function (e, t, n) {
                                                if (!n)
                                                    return e.getAttribute(
                                                        t,
                                                        "type" ===
                                                            t.toLowerCase()
                                                            ? 1
                                                            : 2
                                                    );
                                            }
                                        ),
                                    (p.attributes &&
                                        L(function (e) {
                                            return (
                                                (e.innerHTML = "<input/>"),
                                                e.firstChild.setAttribute(
                                                    "value",
                                                    ""
                                                ),
                                                "" ===
                                                    e.firstChild.getAttribute(
                                                        "value"
                                                    )
                                            );
                                        })) ||
                                        he("value", function (e, t, n) {
                                            if (
                                                !n &&
                                                "input" ===
                                                    e.nodeName.toLowerCase()
                                            )
                                                return e.defaultValue;
                                        }),
                                    L(function (e) {
                                        return (
                                            null == e.getAttribute("disabled")
                                        );
                                    }) ||
                                        he(Q, function (e, t, n) {
                                            if (!n)
                                                return !0 === e[t]
                                                    ? t.toLowerCase()
                                                    : (n =
                                                          e.getAttributeNode(
                                                              t
                                                          )) && n.specified
                                                    ? n.value
                                                    : null;
                                        }),
                                    D
                                );
                            })(w),
                            J =
                                ((T.find = e),
                                (T.expr = e.selectors),
                                (T.expr[":"] = T.expr.pseudos),
                                (T.uniqueSort = T.unique = e.uniqueSort),
                                (T.text = e.getText),
                                (T.isXMLDoc = e.isXML),
                                (T.contains = e.contains),
                                (T.escapeSelector = e.escape),
                                T.expr.match.needsContext);
                        function u(e, t) {
                            return (
                                e.nodeName &&
                                e.nodeName.toLowerCase() === t.toLowerCase()
                            );
                        }
                        var Q =
                            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                        function K(e, n, r) {
                            return y(n)
                                ? T.grep(e, function (e, t) {
                                      return !!n.call(e, t, e) !== r;
                                  })
                                : n.nodeType
                                ? T.grep(e, function (e) {
                                      return (e === n) !== r;
                                  })
                                : "string" != typeof n
                                ? T.grep(e, function (e) {
                                      return -1 < $.call(n, e) !== r;
                                  })
                                : T.filter(n, e, r);
                        }
                        (T.filter = function (e, t, n) {
                            var r = t[0];
                            return (
                                n && (e = ":not(" + e + ")"),
                                1 === t.length && 1 === r.nodeType
                                    ? T.find.matchesSelector(r, e)
                                        ? [r]
                                        : []
                                    : T.find.matches(
                                          e,
                                          T.grep(t, function (e) {
                                              return 1 === e.nodeType;
                                          })
                                      )
                            );
                        }),
                            T.fn.extend({
                                find: function (e) {
                                    var t,
                                        n,
                                        r = this.length,
                                        o = this;
                                    if ("string" != typeof e)
                                        return this.pushStack(
                                            T(e).filter(function () {
                                                for (t = 0; t < r; t++)
                                                    if (T.contains(o[t], this))
                                                        return !0;
                                            })
                                        );
                                    for (
                                        n = this.pushStack([]), t = 0;
                                        t < r;
                                        t++
                                    )
                                        T.find(e, o[t], n);
                                    return 1 < r ? T.uniqueSort(n) : n;
                                },
                                filter: function (e) {
                                    return this.pushStack(K(this, e || [], !1));
                                },
                                not: function (e) {
                                    return this.pushStack(K(this, e || [], !0));
                                },
                                is: function (e) {
                                    return !!K(
                                        this,
                                        "string" == typeof e && J.test(e)
                                            ? T(e)
                                            : e || [],
                                        !1
                                    ).length;
                                },
                            });
                        var Z,
                            ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                            te =
                                (((T.fn.init = function (e, t, n) {
                                    if (e) {
                                        if (
                                            ((n = n || Z), "string" != typeof e)
                                        )
                                            return e.nodeType
                                                ? ((this[0] = e),
                                                  (this.length = 1),
                                                  this)
                                                : y(e)
                                                ? void 0 !== n.ready
                                                    ? n.ready(e)
                                                    : e(T)
                                                : T.makeArray(e, this);
                                        if (
                                            !(r =
                                                "<" === e[0] &&
                                                ">" === e[e.length - 1] &&
                                                3 <= e.length
                                                    ? [null, e, null]
                                                    : ee.exec(e)) ||
                                            (!r[1] && t)
                                        )
                                            return (
                                                !t || t.jquery
                                                    ? t || n
                                                    : this.constructor(t)
                                            ).find(e);
                                        if (r[1]) {
                                            if (
                                                ((t =
                                                    t instanceof T ? t[0] : t),
                                                T.merge(
                                                    this,
                                                    T.parseHTML(
                                                        r[1],
                                                        t && t.nodeType
                                                            ? t.ownerDocument ||
                                                                  t
                                                            : C,
                                                        !0
                                                    )
                                                ),
                                                Q.test(r[1]) &&
                                                    T.isPlainObject(t))
                                            )
                                                for (var r in t)
                                                    y(this[r])
                                                        ? this[r](t[r])
                                                        : this.attr(r, t[r]);
                                        } else
                                            (n = C.getElementById(r[2])) &&
                                                ((this[0] = n),
                                                (this.length = 1));
                                    }
                                    return this;
                                }).prototype = T.fn),
                                (Z = T(C)),
                                /^(?:parents|prev(?:Until|All))/),
                            ne = {
                                children: !0,
                                contents: !0,
                                next: !0,
                                prev: !0,
                            };
                        function re(e, t) {
                            for (; (e = e[t]) && 1 !== e.nodeType; );
                            return e;
                        }
                        T.fn.extend({
                            has: function (e) {
                                var t = T(e, this),
                                    n = t.length;
                                return this.filter(function () {
                                    for (var e = 0; e < n; e++)
                                        if (T.contains(this, t[e])) return !0;
                                });
                            },
                            closest: function (e, t) {
                                var n,
                                    r = 0,
                                    o = this.length,
                                    i = [],
                                    s = "string" != typeof e && T(e);
                                if (!J.test(e))
                                    for (; r < o; r++)
                                        for (
                                            n = this[r];
                                            n && n !== t;
                                            n = n.parentNode
                                        )
                                            if (
                                                n.nodeType < 11 &&
                                                (s
                                                    ? -1 < s.index(n)
                                                    : 1 === n.nodeType &&
                                                      T.find.matchesSelector(
                                                          n,
                                                          e
                                                      ))
                                            ) {
                                                i.push(n);
                                                break;
                                            }
                                return this.pushStack(
                                    1 < i.length ? T.uniqueSort(i) : i
                                );
                            },
                            index: function (e) {
                                return e
                                    ? "string" == typeof e
                                        ? $.call(T(e), this[0])
                                        : $.call(this, e.jquery ? e[0] : e)
                                    : this[0] && this[0].parentNode
                                    ? this.first().prevAll().length
                                    : -1;
                            },
                            add: function (e, t) {
                                return this.pushStack(
                                    T.uniqueSort(T.merge(this.get(), T(e, t)))
                                );
                            },
                            addBack: function (e) {
                                return this.add(
                                    null == e
                                        ? this.prevObject
                                        : this.prevObject.filter(e)
                                );
                            },
                        }),
                            T.each(
                                {
                                    parent: function (e) {
                                        e = e.parentNode;
                                        return e && 11 !== e.nodeType
                                            ? e
                                            : null;
                                    },
                                    parents: function (e) {
                                        return r(e, "parentNode");
                                    },
                                    parentsUntil: function (e, t, n) {
                                        return r(e, "parentNode", n);
                                    },
                                    next: function (e) {
                                        return re(e, "nextSibling");
                                    },
                                    prev: function (e) {
                                        return re(e, "previousSibling");
                                    },
                                    nextAll: function (e) {
                                        return r(e, "nextSibling");
                                    },
                                    prevAll: function (e) {
                                        return r(e, "previousSibling");
                                    },
                                    nextUntil: function (e, t, n) {
                                        return r(e, "nextSibling", n);
                                    },
                                    prevUntil: function (e, t, n) {
                                        return r(e, "previousSibling", n);
                                    },
                                    siblings: function (e) {
                                        return Y(
                                            (e.parentNode || {}).firstChild,
                                            e
                                        );
                                    },
                                    children: function (e) {
                                        return Y(e.firstChild);
                                    },
                                    contents: function (e) {
                                        return null != e.contentDocument &&
                                            P(e.contentDocument)
                                            ? e.contentDocument
                                            : (u(e, "template") &&
                                                  (e = e.content || e),
                                              T.merge([], e.childNodes));
                                    },
                                },
                                function (r, o) {
                                    T.fn[r] = function (e, t) {
                                        var n = T.map(this, o, e);
                                        return (
                                            (t =
                                                "Until" !== r.slice(-5)
                                                    ? e
                                                    : t) &&
                                                "string" == typeof t &&
                                                (n = T.filter(t, n)),
                                            1 < this.length &&
                                                (ne[r] || T.uniqueSort(n),
                                                te.test(r) && n.reverse()),
                                            this.pushStack(n)
                                        );
                                    };
                                }
                            );
                        var A = /[^\x20\t\r\n\f]+/g;
                        function c(e) {
                            return e;
                        }
                        function oe(e) {
                            throw e;
                        }
                        function ie(e, t, n, r) {
                            var o;
                            try {
                                e && y((o = e.promise))
                                    ? o.call(e).done(t).fail(n)
                                    : e && y((o = e.then))
                                    ? o.call(e, t, n)
                                    : t.apply(void 0, [e].slice(r));
                            } catch (e) {
                                n.apply(void 0, [e]);
                            }
                        }
                        (T.Callbacks = function (r) {
                            var e, n;
                            r =
                                "string" == typeof r
                                    ? ((e = r),
                                      (n = {}),
                                      T.each(e.match(A) || [], function (e, t) {
                                          n[t] = !0;
                                      }),
                                      n)
                                    : T.extend({}, r);
                            function o() {
                                for (
                                    a = a || r.once, s = i = !0;
                                    l.length;
                                    c = -1
                                )
                                    for (t = l.shift(); ++c < u.length; )
                                        !1 === u[c].apply(t[0], t[1]) &&
                                            r.stopOnFalse &&
                                            ((c = u.length), (t = !1));
                                r.memory || (t = !1),
                                    (i = !1),
                                    a && (u = t ? [] : "");
                            }
                            var i,
                                t,
                                s,
                                a,
                                u = [],
                                l = [],
                                c = -1,
                                f = {
                                    add: function () {
                                        return (
                                            u &&
                                                (t &&
                                                    !i &&
                                                    ((c = u.length - 1),
                                                    l.push(t)),
                                                (function n(e) {
                                                    T.each(e, function (e, t) {
                                                        y(t)
                                                            ? (r.unique &&
                                                                  f.has(t)) ||
                                                              u.push(t)
                                                            : t &&
                                                              t.length &&
                                                              "string" !==
                                                                  d(t) &&
                                                              n(t);
                                                    });
                                                })(arguments),
                                                t && !i && o()),
                                            this
                                        );
                                    },
                                    remove: function () {
                                        return (
                                            T.each(arguments, function (e, t) {
                                                for (
                                                    var n;
                                                    -1 <
                                                    (n = T.inArray(t, u, n));

                                                )
                                                    u.splice(n, 1),
                                                        n <= c && c--;
                                            }),
                                            this
                                        );
                                    },
                                    has: function (e) {
                                        return e
                                            ? -1 < T.inArray(e, u)
                                            : 0 < u.length;
                                    },
                                    empty: function () {
                                        return (u = u && []), this;
                                    },
                                    disable: function () {
                                        return (a = l = []), (u = t = ""), this;
                                    },
                                    disabled: function () {
                                        return !u;
                                    },
                                    lock: function () {
                                        return (
                                            (a = l = []),
                                            t || i || (u = t = ""),
                                            this
                                        );
                                    },
                                    locked: function () {
                                        return !!a;
                                    },
                                    fireWith: function (e, t) {
                                        return (
                                            a ||
                                                ((t = [
                                                    e,
                                                    (t = t || []).slice
                                                        ? t.slice()
                                                        : t,
                                                ]),
                                                l.push(t),
                                                i || o()),
                                            this
                                        );
                                    },
                                    fire: function () {
                                        return (
                                            f.fireWith(this, arguments), this
                                        );
                                    },
                                    fired: function () {
                                        return !!s;
                                    },
                                };
                            return f;
                        }),
                            T.extend({
                                Deferred: function (e) {
                                    var i = [
                                            [
                                                "notify",
                                                "progress",
                                                T.Callbacks("memory"),
                                                T.Callbacks("memory"),
                                                2,
                                            ],
                                            [
                                                "resolve",
                                                "done",
                                                T.Callbacks("once memory"),
                                                T.Callbacks("once memory"),
                                                0,
                                                "resolved",
                                            ],
                                            [
                                                "reject",
                                                "fail",
                                                T.Callbacks("once memory"),
                                                T.Callbacks("once memory"),
                                                1,
                                                "rejected",
                                            ],
                                        ],
                                        o = "pending",
                                        s = {
                                            state: function () {
                                                return o;
                                            },
                                            always: function () {
                                                return (
                                                    a
                                                        .done(arguments)
                                                        .fail(arguments),
                                                    this
                                                );
                                            },
                                            catch: function (e) {
                                                return s.then(null, e);
                                            },
                                            pipe: function () {
                                                var o = arguments;
                                                return T.Deferred(function (r) {
                                                    T.each(i, function (e, t) {
                                                        var n =
                                                            y(o[t[4]]) &&
                                                            o[t[4]];
                                                        a[t[1]](function () {
                                                            var e =
                                                                n &&
                                                                n.apply(
                                                                    this,
                                                                    arguments
                                                                );
                                                            e && y(e.promise)
                                                                ? e
                                                                      .promise()
                                                                      .progress(
                                                                          r.notify
                                                                      )
                                                                      .done(
                                                                          r.resolve
                                                                      )
                                                                      .fail(
                                                                          r.reject
                                                                      )
                                                                : r[
                                                                      t[0] +
                                                                          "With"
                                                                  ](
                                                                      this,
                                                                      n
                                                                          ? [e]
                                                                          : arguments
                                                                  );
                                                        });
                                                    }),
                                                        (o = null);
                                                }).promise();
                                            },
                                            then: function (t, n, r) {
                                                var u = 0;
                                                function l(o, i, s, a) {
                                                    return function () {
                                                        function e() {
                                                            var e, t;
                                                            if (!(o < u)) {
                                                                if (
                                                                    (e =
                                                                        s.apply(
                                                                            n,
                                                                            r
                                                                        )) ===
                                                                    i.promise()
                                                                )
                                                                    throw new TypeError(
                                                                        "Thenable self-resolution"
                                                                    );
                                                                (t =
                                                                    e &&
                                                                    ("object" ==
                                                                        typeof e ||
                                                                        "function" ==
                                                                            typeof e) &&
                                                                    e.then),
                                                                    y(t)
                                                                        ? a
                                                                            ? t.call(
                                                                                  e,
                                                                                  l(
                                                                                      u,
                                                                                      i,
                                                                                      c,
                                                                                      a
                                                                                  ),
                                                                                  l(
                                                                                      u,
                                                                                      i,
                                                                                      oe,
                                                                                      a
                                                                                  )
                                                                              )
                                                                            : (u++,
                                                                              t.call(
                                                                                  e,
                                                                                  l(
                                                                                      u,
                                                                                      i,
                                                                                      c,
                                                                                      a
                                                                                  ),
                                                                                  l(
                                                                                      u,
                                                                                      i,
                                                                                      oe,
                                                                                      a
                                                                                  ),
                                                                                  l(
                                                                                      u,
                                                                                      i,
                                                                                      c,
                                                                                      i.notifyWith
                                                                                  )
                                                                              ))
                                                                        : (s !==
                                                                              c &&
                                                                              ((n =
                                                                                  void 0),
                                                                              (r =
                                                                                  [
                                                                                      e,
                                                                                  ])),
                                                                          (
                                                                              a ||
                                                                              i.resolveWith
                                                                          )(
                                                                              n,
                                                                              r
                                                                          ));
                                                            }
                                                        }
                                                        var n = this,
                                                            r = arguments,
                                                            t = a
                                                                ? e
                                                                : function () {
                                                                      try {
                                                                          e();
                                                                      } catch (e) {
                                                                          T
                                                                              .Deferred
                                                                              .exceptionHook &&
                                                                              T.Deferred.exceptionHook(
                                                                                  e,
                                                                                  t.stackTrace
                                                                              ),
                                                                              u <=
                                                                                  o +
                                                                                      1 &&
                                                                                  (s !==
                                                                                      oe &&
                                                                                      ((n =
                                                                                          void 0),
                                                                                      (r =
                                                                                          [
                                                                                              e,
                                                                                          ])),
                                                                                  i.rejectWith(
                                                                                      n,
                                                                                      r
                                                                                  ));
                                                                      }
                                                                  };
                                                        o
                                                            ? t()
                                                            : (T.Deferred
                                                                  .getStackHook &&
                                                                  (t.stackTrace =
                                                                      T.Deferred.getStackHook()),
                                                              w.setTimeout(t));
                                                    };
                                                }
                                                return T.Deferred(function (e) {
                                                    i[0][3].add(
                                                        l(
                                                            0,
                                                            e,
                                                            y(r) ? r : c,
                                                            e.notifyWith
                                                        )
                                                    ),
                                                        i[1][3].add(
                                                            l(
                                                                0,
                                                                e,
                                                                y(t) ? t : c
                                                            )
                                                        ),
                                                        i[2][3].add(
                                                            l(
                                                                0,
                                                                e,
                                                                y(n) ? n : oe
                                                            )
                                                        );
                                                }).promise();
                                            },
                                            promise: function (e) {
                                                return null != e
                                                    ? T.extend(e, s)
                                                    : s;
                                            },
                                        },
                                        a = {};
                                    return (
                                        T.each(i, function (e, t) {
                                            var n = t[2],
                                                r = t[5];
                                            (s[t[1]] = n.add),
                                                r &&
                                                    n.add(
                                                        function () {
                                                            o = r;
                                                        },
                                                        i[3 - e][2].disable,
                                                        i[3 - e][3].disable,
                                                        i[0][2].lock,
                                                        i[0][3].lock
                                                    ),
                                                n.add(t[3].fire),
                                                (a[t[0]] = function () {
                                                    return (
                                                        a[t[0] + "With"](
                                                            this === a
                                                                ? void 0
                                                                : this,
                                                            arguments
                                                        ),
                                                        this
                                                    );
                                                }),
                                                (a[t[0] + "With"] = n.fireWith);
                                        }),
                                        s.promise(a),
                                        e && e.call(a, a),
                                        a
                                    );
                                },
                                when: function (e) {
                                    function t(t) {
                                        return function (e) {
                                            (o[t] = this),
                                                (i[t] =
                                                    1 < arguments.length
                                                        ? a.call(arguments)
                                                        : e),
                                                --n || s.resolveWith(o, i);
                                        };
                                    }
                                    var n = arguments.length,
                                        r = n,
                                        o = Array(r),
                                        i = a.call(arguments),
                                        s = T.Deferred();
                                    if (
                                        n <= 1 &&
                                        (ie(
                                            e,
                                            s.done(t(r)).resolve,
                                            s.reject,
                                            !n
                                        ),
                                        "pending" === s.state() ||
                                            y(i[r] && i[r].then))
                                    )
                                        return s.then();
                                    for (; r--; ) ie(i[r], t(r), s.reject);
                                    return s.promise();
                                },
                            });
                        var se =
                                /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
                            ae =
                                ((T.Deferred.exceptionHook = function (e, t) {
                                    w.console &&
                                        w.console.warn &&
                                        e &&
                                        se.test(e.name) &&
                                        w.console.warn(
                                            "jQuery.Deferred exception: " +
                                                e.message,
                                            e.stack,
                                            t
                                        );
                                }),
                                (T.readyException = function (e) {
                                    w.setTimeout(function () {
                                        throw e;
                                    });
                                }),
                                T.Deferred());
                        function ue() {
                            C.removeEventListener("DOMContentLoaded", ue),
                                w.removeEventListener("load", ue),
                                T.ready();
                        }
                        (T.fn.ready = function (e) {
                            return (
                                ae.then(e).catch(function (e) {
                                    T.readyException(e);
                                }),
                                this
                            );
                        }),
                            T.extend({
                                isReady: !1,
                                readyWait: 1,
                                ready: function (e) {
                                    (!0 === e ? --T.readyWait : T.isReady) ||
                                        ((T.isReady = !0) !== e &&
                                            0 < --T.readyWait) ||
                                        ae.resolveWith(C, [T]);
                                },
                            }),
                            (T.ready.then = ae.then),
                            "complete" === C.readyState ||
                            ("loading" !== C.readyState &&
                                !C.documentElement.doScroll)
                                ? w.setTimeout(T.ready)
                                : (C.addEventListener("DOMContentLoaded", ue),
                                  w.addEventListener("load", ue));
                        function f(e, t, n, r, o, i, s) {
                            var a = 0,
                                u = e.length,
                                l = null == n;
                            if ("object" === d(n))
                                for (a in ((o = !0), n))
                                    f(e, t, a, n[a], !0, i, s);
                            else if (
                                void 0 !== r &&
                                ((o = !0),
                                y(r) || (s = !0),
                                (t = l
                                    ? s
                                        ? (t.call(e, r), null)
                                        : ((l = t),
                                          function (e, t, n) {
                                              return l.call(T(e), n);
                                          })
                                    : t))
                            )
                                for (; a < u; a++)
                                    t(
                                        e[a],
                                        n,
                                        s ? r : r.call(e[a], a, t(e[a], n))
                                    );
                            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
                        }
                        var le = /^-ms-/,
                            ce = /-([a-z])/g;
                        function fe(e, t) {
                            return t.toUpperCase();
                        }
                        function x(e) {
                            return e.replace(le, "ms-").replace(ce, fe);
                        }
                        function v(e) {
                            return (
                                1 === e.nodeType ||
                                9 === e.nodeType ||
                                !+e.nodeType
                            );
                        }
                        function pe() {
                            this.expando = T.expando + pe.uid++;
                        }
                        (pe.uid = 1),
                            (pe.prototype = {
                                cache: function (e) {
                                    var t = e[this.expando];
                                    return (
                                        t ||
                                            ((t = {}),
                                            v(e) &&
                                                (e.nodeType
                                                    ? (e[this.expando] = t)
                                                    : Object.defineProperty(
                                                          e,
                                                          this.expando,
                                                          {
                                                              value: t,
                                                              configurable: !0,
                                                          }
                                                      ))),
                                        t
                                    );
                                },
                                set: function (e, t, n) {
                                    var r,
                                        o = this.cache(e);
                                    if ("string" == typeof t) o[x(t)] = n;
                                    else for (r in t) o[x(r)] = t[r];
                                    return o;
                                },
                                get: function (e, t) {
                                    return void 0 === t
                                        ? this.cache(e)
                                        : e[this.expando] &&
                                              e[this.expando][x(t)];
                                },
                                access: function (e, t, n) {
                                    return void 0 === t ||
                                        (t &&
                                            "string" == typeof t &&
                                            void 0 === n)
                                        ? this.get(e, t)
                                        : (this.set(e, t, n),
                                          void 0 !== n ? n : t);
                                },
                                remove: function (e, t) {
                                    var n,
                                        r = e[this.expando];
                                    if (void 0 !== r) {
                                        if (void 0 !== t) {
                                            n = (t = Array.isArray(t)
                                                ? t.map(x)
                                                : (t = x(t)) in r
                                                ? [t]
                                                : t.match(A) || []).length;
                                            for (; n--; ) delete r[t[n]];
                                        }
                                        (void 0 !== t && !T.isEmptyObject(r)) ||
                                            (e.nodeType
                                                ? (e[this.expando] = void 0)
                                                : delete e[this.expando]);
                                    }
                                },
                                hasData: function (e) {
                                    e = e[this.expando];
                                    return void 0 !== e && !T.isEmptyObject(e);
                                },
                            });
                        var b = new pe(),
                            l = new pe(),
                            he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            de = /[A-Z]/g;
                        function ge(e, t, n) {
                            var r, o;
                            if (void 0 === n && 1 === e.nodeType)
                                if (
                                    ((r =
                                        "data-" +
                                        t.replace(de, "-$&").toLowerCase()),
                                    "string" == typeof (n = e.getAttribute(r)))
                                ) {
                                    try {
                                        n =
                                            "true" === (o = n) ||
                                            ("false" !== o &&
                                                ("null" === o
                                                    ? null
                                                    : o === +o + ""
                                                    ? +o
                                                    : he.test(o)
                                                    ? JSON.parse(o)
                                                    : o));
                                    } catch (e) {}
                                    l.set(e, t, n);
                                } else n = void 0;
                            return n;
                        }
                        T.extend({
                            hasData: function (e) {
                                return l.hasData(e) || b.hasData(e);
                            },
                            data: function (e, t, n) {
                                return l.access(e, t, n);
                            },
                            removeData: function (e, t) {
                                l.remove(e, t);
                            },
                            _data: function (e, t, n) {
                                return b.access(e, t, n);
                            },
                            _removeData: function (e, t) {
                                b.remove(e, t);
                            },
                        }),
                            T.fn.extend({
                                data: function (n, e) {
                                    var t,
                                        r,
                                        o,
                                        i = this[0],
                                        s = i && i.attributes;
                                    if (void 0 !== n)
                                        return "object" == typeof n
                                            ? this.each(function () {
                                                  l.set(this, n);
                                              })
                                            : f(
                                                  this,
                                                  function (e) {
                                                      var t;
                                                      if (i && void 0 === e)
                                                          return void 0 !==
                                                              (t = l.get(
                                                                  i,
                                                                  n
                                                              )) ||
                                                              void 0 !==
                                                                  (t = ge(i, n))
                                                              ? t
                                                              : void 0;
                                                      this.each(function () {
                                                          l.set(this, n, e);
                                                      });
                                                  },
                                                  null,
                                                  e,
                                                  1 < arguments.length,
                                                  null,
                                                  !0
                                              );
                                    if (
                                        this.length &&
                                        ((o = l.get(i)),
                                        1 === i.nodeType &&
                                            !b.get(i, "hasDataAttrs"))
                                    ) {
                                        for (t = s.length; t--; )
                                            s[t] &&
                                                0 ===
                                                    (r = s[t].name).indexOf(
                                                        "data-"
                                                    ) &&
                                                ((r = x(r.slice(5))),
                                                ge(i, r, o[r]));
                                        b.set(i, "hasDataAttrs", !0);
                                    }
                                    return o;
                                },
                                removeData: function (e) {
                                    return this.each(function () {
                                        l.remove(this, e);
                                    });
                                },
                            }),
                            T.extend({
                                queue: function (e, t, n) {
                                    var r;
                                    if (e)
                                        return (
                                            (r = b.get(
                                                e,
                                                (t = (t || "fx") + "queue")
                                            )),
                                            n &&
                                                (!r || Array.isArray(n)
                                                    ? (r = b.access(
                                                          e,
                                                          t,
                                                          T.makeArray(n)
                                                      ))
                                                    : r.push(n)),
                                            r || []
                                        );
                                },
                                dequeue: function (e, t) {
                                    t = t || "fx";
                                    var n = T.queue(e, t),
                                        r = n.length,
                                        o = n.shift(),
                                        i = T._queueHooks(e, t);
                                    "inprogress" === o &&
                                        ((o = n.shift()), r--),
                                        o &&
                                            ("fx" === t &&
                                                n.unshift("inprogress"),
                                            delete i.stop,
                                            o.call(
                                                e,
                                                function () {
                                                    T.dequeue(e, t);
                                                },
                                                i
                                            )),
                                        !r && i && i.empty.fire();
                                },
                                _queueHooks: function (e, t) {
                                    var n = t + "queueHooks";
                                    return (
                                        b.get(e, n) ||
                                        b.access(e, n, {
                                            empty: T.Callbacks(
                                                "once memory"
                                            ).add(function () {
                                                b.remove(e, [t + "queue", n]);
                                            }),
                                        })
                                    );
                                },
                            }),
                            T.fn.extend({
                                queue: function (t, n) {
                                    var e = 2;
                                    return (
                                        "string" != typeof t &&
                                            ((n = t), (t = "fx"), e--),
                                        arguments.length < e
                                            ? T.queue(this[0], t)
                                            : void 0 === n
                                            ? this
                                            : this.each(function () {
                                                  var e = T.queue(this, t, n);
                                                  T._queueHooks(this, t),
                                                      "fx" === t &&
                                                          "inprogress" !==
                                                              e[0] &&
                                                          T.dequeue(this, t);
                                              })
                                    );
                                },
                                dequeue: function (e) {
                                    return this.each(function () {
                                        T.dequeue(this, e);
                                    });
                                },
                                clearQueue: function (e) {
                                    return this.queue(e || "fx", []);
                                },
                                promise: function (e, t) {
                                    function n() {
                                        --o || i.resolveWith(s, [s]);
                                    }
                                    var r,
                                        o = 1,
                                        i = T.Deferred(),
                                        s = this,
                                        a = this.length;
                                    for (
                                        "string" != typeof e &&
                                            ((t = e), (e = void 0)),
                                            e = e || "fx";
                                        a--;

                                    )
                                        (r = b.get(s[a], e + "queueHooks")) &&
                                            r.empty &&
                                            (o++, r.empty.add(n));
                                    return n(), i.promise(t);
                                },
                            });
                        function me(e, t) {
                            return (
                                "none" === (e = t || e).style.display ||
                                ("" === e.style.display &&
                                    k(e) &&
                                    "none" === T.css(e, "display"))
                            );
                        }
                        var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            ve = new RegExp(
                                "^(?:([+-])=|)(" + e + ")([a-z%]*)$",
                                "i"
                            ),
                            p = ["Top", "Right", "Bottom", "Left"],
                            j = C.documentElement,
                            k = function (e) {
                                return T.contains(e.ownerDocument, e);
                            },
                            ye = { composed: !0 };
                        j.getRootNode &&
                            (k = function (e) {
                                return (
                                    T.contains(e.ownerDocument, e) ||
                                    e.getRootNode(ye) === e.ownerDocument
                                );
                            });
                        function xe(e, t, n, r) {
                            var o,
                                i,
                                s = 20,
                                a = r
                                    ? function () {
                                          return r.cur();
                                      }
                                    : function () {
                                          return T.css(e, t, "");
                                      },
                                u = a(),
                                l = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
                                c =
                                    e.nodeType &&
                                    (T.cssNumber[t] || ("px" !== l && +u)) &&
                                    ve.exec(T.css(e, t));
                            if (c && c[3] !== l) {
                                for (l = l || c[3], c = +(u /= 2) || 1; s--; )
                                    T.style(e, t, c + l),
                                        (1 - i) * (1 - (i = a() / u || 0.5)) <=
                                            0 && (s = 0),
                                        (c /= i);
                                T.style(e, t, (c *= 2) + l), (n = n || []);
                            }
                            return (
                                n &&
                                    ((c = +c || +u || 0),
                                    (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                                    r &&
                                        ((r.unit = l),
                                        (r.start = c),
                                        (r.end = o))),
                                o
                            );
                        }
                        var be = {};
                        function E(e, t) {
                            for (
                                var n, r, o, i, s, a = [], u = 0, l = e.length;
                                u < l;
                                u++
                            )
                                (r = e[u]).style &&
                                    ((n = r.style.display),
                                    t
                                        ? ("none" === n &&
                                              ((a[u] =
                                                  b.get(r, "display") || null),
                                              a[u] || (r.style.display = "")),
                                          "" === r.style.display &&
                                              me(r) &&
                                              (a[u] =
                                                  ((s = i = void 0),
                                                  (i = (o = r).ownerDocument),
                                                  (o = o.nodeName),
                                                  (s = be[o]) ||
                                                      ((i = i.body.appendChild(
                                                          i.createElement(o)
                                                      )),
                                                      (s = T.css(i, "display")),
                                                      i.parentNode.removeChild(
                                                          i
                                                      ),
                                                      (be[o] = s =
                                                          "none" === s
                                                              ? "block"
                                                              : s)),
                                                  s)))
                                        : "none" !== n &&
                                          ((a[u] = "none"),
                                          b.set(r, "display", n)));
                            for (u = 0; u < l; u++)
                                null != a[u] && (e[u].style.display = a[u]);
                            return e;
                        }
                        T.fn.extend({
                            show: function () {
                                return E(this, !0);
                            },
                            hide: function () {
                                return E(this);
                            },
                            toggle: function (e) {
                                return "boolean" == typeof e
                                    ? e
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                          me(this)
                                              ? T(this).show()
                                              : T(this).hide();
                                      });
                            },
                        });
                        var we = /^(?:checkbox|radio)$/i,
                            Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                            Te = /^$|^module$|\/(?:java|ecma)script/i,
                            S =
                                ((O = C.createDocumentFragment().appendChild(
                                    C.createElement("div")
                                )),
                                (s = C.createElement("input")).setAttribute(
                                    "type",
                                    "radio"
                                ),
                                s.setAttribute("checked", "checked"),
                                s.setAttribute("name", "t"),
                                O.appendChild(s),
                                (m.checkClone = O.cloneNode(!0).cloneNode(
                                    !0
                                ).lastChild.checked),
                                (O.innerHTML = "<textarea>x</textarea>"),
                                (m.noCloneChecked = !!O.cloneNode(!0).lastChild
                                    .defaultValue),
                                (O.innerHTML = "<option></option>"),
                                (m.option = !!O.lastChild),
                                {
                                    thead: [1, "<table>", "</table>"],
                                    col: [
                                        2,
                                        "<table><colgroup>",
                                        "</colgroup></table>",
                                    ],
                                    tr: [
                                        2,
                                        "<table><tbody>",
                                        "</tbody></table>",
                                    ],
                                    td: [
                                        3,
                                        "<table><tbody><tr>",
                                        "</tr></tbody></table>",
                                    ],
                                    _default: [0, "", ""],
                                });
                        function N(e, t) {
                            var n =
                                void 0 !== e.getElementsByTagName
                                    ? e.getElementsByTagName(t || "*")
                                    : void 0 !== e.querySelectorAll
                                    ? e.querySelectorAll(t || "*")
                                    : [];
                            return void 0 === t || (t && u(e, t))
                                ? T.merge([e], n)
                                : n;
                        }
                        function Ae(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                b.set(
                                    e[n],
                                    "globalEval",
                                    !t || b.get(t[n], "globalEval")
                                );
                        }
                        (S.tbody = S.tfoot = S.colgroup = S.caption = S.thead),
                            (S.th = S.td),
                            m.option ||
                                (S.optgroup = S.option =
                                    [
                                        1,
                                        "<select multiple='multiple'>",
                                        "</select>",
                                    ]);
                        var je = /<|&#?\w+;/;
                        function ke(e, t, n, r, o) {
                            for (
                                var i,
                                    s,
                                    a,
                                    u,
                                    l,
                                    c = t.createDocumentFragment(),
                                    f = [],
                                    p = 0,
                                    h = e.length;
                                p < h;
                                p++
                            )
                                if ((i = e[p]) || 0 === i)
                                    if ("object" === d(i))
                                        T.merge(f, i.nodeType ? [i] : i);
                                    else if (je.test(i)) {
                                        for (
                                            s =
                                                s ||
                                                c.appendChild(
                                                    t.createElement("div")
                                                ),
                                                a = (Ce.exec(i) || [
                                                    "",
                                                    "",
                                                ])[1].toLowerCase(),
                                                a = S[a] || S._default,
                                                s.innerHTML =
                                                    a[1] +
                                                    T.htmlPrefilter(i) +
                                                    a[2],
                                                l = a[0];
                                            l--;

                                        )
                                            s = s.lastChild;
                                        T.merge(f, s.childNodes),
                                            ((s = c.firstChild).textContent =
                                                "");
                                    } else f.push(t.createTextNode(i));
                            for (c.textContent = "", p = 0; (i = f[p++]); )
                                if (r && -1 < T.inArray(i, r)) o && o.push(i);
                                else if (
                                    ((u = k(i)),
                                    (s = N(c.appendChild(i), "script")),
                                    u && Ae(s),
                                    n)
                                )
                                    for (l = 0; (i = s[l++]); )
                                        Te.test(i.type || "") && n.push(i);
                            return c;
                        }
                        var Ee = /^key/,
                            Se =
                                /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                            Ne = /^([^.]*)(?:\.(.+)|)/;
                        function n() {
                            return !0;
                        }
                        function h() {
                            return !1;
                        }
                        function De(e, t) {
                            return (
                                (e ===
                                    (function () {
                                        try {
                                            return C.activeElement;
                                        } catch (e) {}
                                    })()) ==
                                ("focus" === t)
                            );
                        }
                        function qe(e, t, n, r, o, i) {
                            var s, a;
                            if ("object" == typeof t) {
                                for (a in ("string" != typeof n &&
                                    ((r = r || n), (n = void 0)),
                                t))
                                    qe(e, a, n, r, t[a], i);
                                return e;
                            }
                            if (
                                (null == r && null == o
                                    ? ((o = n), (r = n = void 0))
                                    : null == o &&
                                      ("string" == typeof n
                                          ? ((o = r), (r = void 0))
                                          : ((o = r), (r = n), (n = void 0))),
                                !1 === o)
                            )
                                o = h;
                            else if (!o) return e;
                            return (
                                1 === i &&
                                    ((s = o),
                                    ((o = function (e) {
                                        return (
                                            T().off(e), s.apply(this, arguments)
                                        );
                                    }).guid = s.guid || (s.guid = T.guid++))),
                                e.each(function () {
                                    T.event.add(this, t, o, r, n);
                                })
                            );
                        }
                        function Oe(e, o, i) {
                            i
                                ? (b.set(e, o, !1),
                                  T.event.add(e, o, {
                                      namespace: !1,
                                      handler: function (e) {
                                          var t,
                                              n,
                                              r = b.get(this, o);
                                          if (1 & e.isTrigger && this[o]) {
                                              if (r.length)
                                                  (T.event.special[o] || {})
                                                      .delegateType &&
                                                      e.stopPropagation();
                                              else if (
                                                  ((r = a.call(arguments)),
                                                  b.set(this, o, r),
                                                  (t = i(this, o)),
                                                  this[o](),
                                                  r !== (n = b.get(this, o)) ||
                                                  t
                                                      ? b.set(this, o, !1)
                                                      : (n = {}),
                                                  r !== n)
                                              )
                                                  return (
                                                      e.stopImmediatePropagation(),
                                                      e.preventDefault(),
                                                      n.value
                                                  );
                                          } else
                                              r.length &&
                                                  (b.set(this, o, {
                                                      value: T.event.trigger(
                                                          T.extend(
                                                              r[0],
                                                              T.Event.prototype
                                                          ),
                                                          r.slice(1),
                                                          this
                                                      ),
                                                  }),
                                                  e.stopImmediatePropagation());
                                      },
                                  }))
                                : void 0 === b.get(e, o) &&
                                  T.event.add(e, o, n);
                        }
                        (T.event = {
                            global: {},
                            add: function (t, e, n, r, o) {
                                var i,
                                    s,
                                    a,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p,
                                    h,
                                    d = b.get(t);
                                if (v(t))
                                    for (
                                        n.handler &&
                                            ((n = (i = n).handler),
                                            (o = i.selector)),
                                            o && T.find.matchesSelector(j, o),
                                            n.guid || (n.guid = T.guid++),
                                            (a = d.events) ||
                                                (a = d.events =
                                                    Object.create(null)),
                                            (s = d.handle) ||
                                                (s = d.handle =
                                                    function (e) {
                                                        return void 0 !== T &&
                                                            T.event
                                                                .triggered !==
                                                                e.type
                                                            ? T.event.dispatch.apply(
                                                                  t,
                                                                  arguments
                                                              )
                                                            : void 0;
                                                    }),
                                            u = (e = (e || "").match(A) || [""])
                                                .length;
                                        u--;

                                    )
                                        (f = h = (p = Ne.exec(e[u]) || [])[1]),
                                            (p = (p[2] || "")
                                                .split(".")
                                                .sort()),
                                            f &&
                                                ((l = T.event.special[f] || {}),
                                                (f =
                                                    (o
                                                        ? l.delegateType
                                                        : l.bindType) || f),
                                                (l = T.event.special[f] || {}),
                                                (h = T.extend(
                                                    {
                                                        type: f,
                                                        origType: h,
                                                        data: r,
                                                        handler: n,
                                                        guid: n.guid,
                                                        selector: o,
                                                        needsContext:
                                                            o &&
                                                            T.expr.match.needsContext.test(
                                                                o
                                                            ),
                                                        namespace: p.join("."),
                                                    },
                                                    i
                                                )),
                                                (c = a[f]) ||
                                                    (((c = a[f] =
                                                        []).delegateCount = 0),
                                                    (l.setup &&
                                                        !1 !==
                                                            l.setup.call(
                                                                t,
                                                                r,
                                                                p,
                                                                s
                                                            )) ||
                                                        (t.addEventListener &&
                                                            t.addEventListener(
                                                                f,
                                                                s
                                                            ))),
                                                l.add &&
                                                    (l.add.call(t, h),
                                                    h.handler.guid ||
                                                        (h.handler.guid =
                                                            n.guid)),
                                                o
                                                    ? c.splice(
                                                          c.delegateCount++,
                                                          0,
                                                          h
                                                      )
                                                    : c.push(h),
                                                (T.event.global[f] = !0));
                            },
                            remove: function (e, t, n, r, o) {
                                var i,
                                    s,
                                    a,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p,
                                    h,
                                    d,
                                    g,
                                    m = b.hasData(e) && b.get(e);
                                if (m && (u = m.events)) {
                                    for (
                                        l = (t = (t || "").match(A) || [""])
                                            .length;
                                        l--;

                                    )
                                        if (
                                            ((h = g =
                                                (a = Ne.exec(t[l]) || [])[1]),
                                            (d = (a[2] || "")
                                                .split(".")
                                                .sort()),
                                            h)
                                        ) {
                                            for (
                                                f = T.event.special[h] || {},
                                                    p =
                                                        u[
                                                            (h =
                                                                (r
                                                                    ? f.delegateType
                                                                    : f.bindType) ||
                                                                h)
                                                        ] || [],
                                                    a =
                                                        a[2] &&
                                                        new RegExp(
                                                            "(^|\\.)" +
                                                                d.join(
                                                                    "\\.(?:.*\\.|)"
                                                                ) +
                                                                "(\\.|$)"
                                                        ),
                                                    s = i = p.length;
                                                i--;

                                            )
                                                (c = p[i]),
                                                    (!o && g !== c.origType) ||
                                                        (n &&
                                                            n.guid !==
                                                                c.guid) ||
                                                        (a &&
                                                            !a.test(
                                                                c.namespace
                                                            )) ||
                                                        (r &&
                                                            r !== c.selector &&
                                                            ("**" !== r ||
                                                                !c.selector)) ||
                                                        (p.splice(i, 1),
                                                        c.selector &&
                                                            p.delegateCount--,
                                                        f.remove &&
                                                            f.remove.call(
                                                                e,
                                                                c
                                                            ));
                                            s &&
                                                !p.length &&
                                                ((f.teardown &&
                                                    !1 !==
                                                        f.teardown.call(
                                                            e,
                                                            d,
                                                            m.handle
                                                        )) ||
                                                    T.removeEvent(
                                                        e,
                                                        h,
                                                        m.handle
                                                    ),
                                                delete u[h]);
                                        } else
                                            for (h in u)
                                                T.event.remove(
                                                    e,
                                                    h + t[l],
                                                    n,
                                                    r,
                                                    !0
                                                );
                                    T.isEmptyObject(u) &&
                                        b.remove(e, "handle events");
                                }
                            },
                            dispatch: function (e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    s = new Array(arguments.length),
                                    a = T.event.fix(e),
                                    e =
                                        (b.get(this, "events") ||
                                            Object.create(null))[a.type] || [],
                                    u = T.event.special[a.type] || {};
                                for (s[0] = a, t = 1; t < arguments.length; t++)
                                    s[t] = arguments[t];
                                if (
                                    ((a.delegateTarget = this),
                                    !u.preDispatch ||
                                        !1 !== u.preDispatch.call(this, a))
                                ) {
                                    for (
                                        i = T.event.handlers.call(this, a, e),
                                            t = 0;
                                        (r = i[t++]) &&
                                        !a.isPropagationStopped();

                                    )
                                        for (
                                            a.currentTarget = r.elem, n = 0;
                                            (o = r.handlers[n++]) &&
                                            !a.isImmediatePropagationStopped();

                                        )
                                            (a.rnamespace &&
                                                !1 !== o.namespace &&
                                                !a.rnamespace.test(
                                                    o.namespace
                                                )) ||
                                                ((a.handleObj = o),
                                                (a.data = o.data),
                                                void 0 !==
                                                    (o = (
                                                        (
                                                            T.event.special[
                                                                o.origType
                                                            ] || {}
                                                        ).handle || o.handler
                                                    ).apply(r.elem, s)) &&
                                                    !1 === (a.result = o) &&
                                                    (a.preventDefault(),
                                                    a.stopPropagation()));
                                    return (
                                        u.postDispatch &&
                                            u.postDispatch.call(this, a),
                                        a.result
                                    );
                                }
                            },
                            handlers: function (e, t) {
                                var n,
                                    r,
                                    o,
                                    i,
                                    s,
                                    a = [],
                                    u = t.delegateCount,
                                    l = e.target;
                                if (
                                    u &&
                                    l.nodeType &&
                                    !("click" === e.type && 1 <= e.button)
                                )
                                    for (; l !== this; l = l.parentNode || this)
                                        if (
                                            1 === l.nodeType &&
                                            ("click" !== e.type ||
                                                !0 !== l.disabled)
                                        ) {
                                            for (
                                                i = [], s = {}, n = 0;
                                                n < u;
                                                n++
                                            )
                                                void 0 ===
                                                    s[
                                                        (o =
                                                            (r = t[n])
                                                                .selector + " ")
                                                    ] &&
                                                    (s[o] = r.needsContext
                                                        ? -1 <
                                                          T(o, this).index(l)
                                                        : T.find(
                                                              o,
                                                              this,
                                                              null,
                                                              [l]
                                                          ).length),
                                                    s[o] && i.push(r);
                                            i.length &&
                                                a.push({
                                                    elem: l,
                                                    handlers: i,
                                                });
                                        }
                                return (
                                    (l = this),
                                    u < t.length &&
                                        a.push({
                                            elem: l,
                                            handlers: t.slice(u),
                                        }),
                                    a
                                );
                            },
                            addProp: function (t, e) {
                                Object.defineProperty(T.Event.prototype, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: y(e)
                                        ? function () {
                                              if (this.originalEvent)
                                                  return e(this.originalEvent);
                                          }
                                        : function () {
                                              if (this.originalEvent)
                                                  return this.originalEvent[t];
                                          },
                                    set: function (e) {
                                        Object.defineProperty(this, t, {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: e,
                                        });
                                    },
                                });
                            },
                            fix: function (e) {
                                return e[T.expando] ? e : new T.Event(e);
                            },
                            special: {
                                load: { noBubble: !0 },
                                click: {
                                    setup: function (e) {
                                        e = this || e;
                                        return (
                                            we.test(e.type) &&
                                                e.click &&
                                                u(e, "input") &&
                                                Oe(e, "click", n),
                                            !1
                                        );
                                    },
                                    trigger: function (e) {
                                        e = this || e;
                                        return (
                                            we.test(e.type) &&
                                                e.click &&
                                                u(e, "input") &&
                                                Oe(e, "click"),
                                            !0
                                        );
                                    },
                                    _default: function (e) {
                                        e = e.target;
                                        return (
                                            (we.test(e.type) &&
                                                e.click &&
                                                u(e, "input") &&
                                                b.get(e, "click")) ||
                                            u(e, "a")
                                        );
                                    },
                                },
                                beforeunload: {
                                    postDispatch: function (e) {
                                        void 0 !== e.result &&
                                            e.originalEvent &&
                                            (e.originalEvent.returnValue =
                                                e.result);
                                    },
                                },
                            },
                        }),
                            (T.removeEvent = function (e, t, n) {
                                e.removeEventListener &&
                                    e.removeEventListener(t, n);
                            }),
                            (T.Event = function (e, t) {
                                if (!(this instanceof T.Event))
                                    return new T.Event(e, t);
                                e && e.type
                                    ? ((this.originalEvent = e),
                                      (this.type = e.type),
                                      (this.isDefaultPrevented =
                                          e.defaultPrevented ||
                                          (void 0 === e.defaultPrevented &&
                                              !1 === e.returnValue)
                                              ? n
                                              : h),
                                      (this.target =
                                          e.target && 3 === e.target.nodeType
                                              ? e.target.parentNode
                                              : e.target),
                                      (this.currentTarget = e.currentTarget),
                                      (this.relatedTarget = e.relatedTarget))
                                    : (this.type = e),
                                    t && T.extend(this, t),
                                    (this.timeStamp =
                                        (e && e.timeStamp) || Date.now()),
                                    (this[T.expando] = !0);
                            }),
                            (T.Event.prototype = {
                                constructor: T.Event,
                                isDefaultPrevented: h,
                                isPropagationStopped: h,
                                isImmediatePropagationStopped: h,
                                isSimulated: !1,
                                preventDefault: function () {
                                    var e = this.originalEvent;
                                    (this.isDefaultPrevented = n),
                                        e &&
                                            !this.isSimulated &&
                                            e.preventDefault();
                                },
                                stopPropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isPropagationStopped = n),
                                        e &&
                                            !this.isSimulated &&
                                            e.stopPropagation();
                                },
                                stopImmediatePropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isImmediatePropagationStopped = n),
                                        e &&
                                            !this.isSimulated &&
                                            e.stopImmediatePropagation(),
                                        this.stopPropagation();
                                },
                            }),
                            T.each(
                                {
                                    altKey: !0,
                                    bubbles: !0,
                                    cancelable: !0,
                                    changedTouches: !0,
                                    ctrlKey: !0,
                                    detail: !0,
                                    eventPhase: !0,
                                    metaKey: !0,
                                    pageX: !0,
                                    pageY: !0,
                                    shiftKey: !0,
                                    view: !0,
                                    char: !0,
                                    code: !0,
                                    charCode: !0,
                                    key: !0,
                                    keyCode: !0,
                                    button: !0,
                                    buttons: !0,
                                    clientX: !0,
                                    clientY: !0,
                                    offsetX: !0,
                                    offsetY: !0,
                                    pointerId: !0,
                                    pointerType: !0,
                                    screenX: !0,
                                    screenY: !0,
                                    targetTouches: !0,
                                    toElement: !0,
                                    touches: !0,
                                    which: function (e) {
                                        var t = e.button;
                                        return null == e.which &&
                                            Ee.test(e.type)
                                            ? null != e.charCode
                                                ? e.charCode
                                                : e.keyCode
                                            : !e.which &&
                                              void 0 !== t &&
                                              Se.test(e.type)
                                            ? 1 & t
                                                ? 1
                                                : 2 & t
                                                ? 3
                                                : 4 & t
                                                ? 2
                                                : 0
                                            : e.which;
                                    },
                                },
                                T.event.addProp
                            ),
                            T.each(
                                { focus: "focusin", blur: "focusout" },
                                function (e, t) {
                                    T.event.special[e] = {
                                        setup: function () {
                                            return Oe(this, e, De), !1;
                                        },
                                        trigger: function () {
                                            return Oe(this, e), !0;
                                        },
                                        delegateType: t,
                                    };
                                }
                            ),
                            T.each(
                                {
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout",
                                },
                                function (e, o) {
                                    T.event.special[e] = {
                                        delegateType: o,
                                        bindType: o,
                                        handle: function (e) {
                                            var t,
                                                n = e.relatedTarget,
                                                r = e.handleObj;
                                            return (
                                                (n &&
                                                    (n === this ||
                                                        T.contains(this, n))) ||
                                                    ((e.type = r.origType),
                                                    (t = r.handler.apply(
                                                        this,
                                                        arguments
                                                    )),
                                                    (e.type = o)),
                                                t
                                            );
                                        },
                                    };
                                }
                            ),
                            T.fn.extend({
                                on: function (e, t, n, r) {
                                    return qe(this, e, t, n, r);
                                },
                                one: function (e, t, n, r) {
                                    return qe(this, e, t, n, r, 1);
                                },
                                off: function (e, t, n) {
                                    var r, o;
                                    if (e && e.preventDefault && e.handleObj)
                                        (r = e.handleObj),
                                            T(e.delegateTarget).off(
                                                r.namespace
                                                    ? r.origType +
                                                          "." +
                                                          r.namespace
                                                    : r.origType,
                                                r.selector,
                                                r.handler
                                            );
                                    else {
                                        if ("object" != typeof e)
                                            return (
                                                (!1 !== t &&
                                                    "function" != typeof t) ||
                                                    ((n = t), (t = void 0)),
                                                !1 === n && (n = h),
                                                this.each(function () {
                                                    T.event.remove(
                                                        this,
                                                        e,
                                                        n,
                                                        t
                                                    );
                                                })
                                            );
                                        for (o in e) this.off(o, t, e[o]);
                                    }
                                    return this;
                                },
                            });
                        var Le = /<script|<style|<link/i,
                            He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                        function Ie(e, t) {
                            return (
                                (u(e, "table") &&
                                    u(
                                        11 !== t.nodeType ? t : t.firstChild,
                                        "tr"
                                    ) &&
                                    T(e).children("tbody")[0]) ||
                                e
                            );
                        }
                        function Pe(e) {
                            return (
                                (e.type =
                                    (null !== e.getAttribute("type")) +
                                    "/" +
                                    e.type),
                                e
                            );
                        }
                        function Me(e) {
                            return (
                                "true/" === (e.type || "").slice(0, 5)
                                    ? (e.type = e.type.slice(5))
                                    : e.removeAttribute("type"),
                                e
                            );
                        }
                        function Fe(e, t) {
                            var n, r, o, i;
                            if (1 === t.nodeType) {
                                if (b.hasData(e) && (i = b.get(e).events))
                                    for (o in (b.remove(t, "handle events"), i))
                                        for (n = 0, r = i[o].length; n < r; n++)
                                            T.event.add(t, o, i[o][n]);
                                l.hasData(e) &&
                                    ((e = l.access(e)),
                                    (e = T.extend({}, e)),
                                    l.set(t, e));
                            }
                        }
                        function D(n, r, o, i) {
                            r = M(r);
                            var e,
                                t,
                                s,
                                a,
                                u,
                                l,
                                c = 0,
                                f = n.length,
                                p = f - 1,
                                h = r[0],
                                d = y(h);
                            if (
                                d ||
                                (1 < f &&
                                    "string" == typeof h &&
                                    !m.checkClone &&
                                    He.test(h))
                            )
                                return n.each(function (e) {
                                    var t = n.eq(e);
                                    d && (r[0] = h.call(this, e, t.html())),
                                        D(t, r, o, i);
                                });
                            if (
                                f &&
                                ((t = (e = ke(r, n[0].ownerDocument, !1, n, i))
                                    .firstChild),
                                1 === e.childNodes.length && (e = t),
                                t || i)
                            ) {
                                for (
                                    a = (s = T.map(N(e, "script"), Pe)).length;
                                    c < f;
                                    c++
                                )
                                    (u = e),
                                        c !== p &&
                                            ((u = T.clone(u, !0, !0)),
                                            a && T.merge(s, N(u, "script"))),
                                        o.call(n[c], u, c);
                                if (a)
                                    for (
                                        l = s[s.length - 1].ownerDocument,
                                            T.map(s, Me),
                                            c = 0;
                                        c < a;
                                        c++
                                    )
                                        (u = s[c]),
                                            Te.test(u.type || "") &&
                                                !b.access(u, "globalEval") &&
                                                T.contains(l, u) &&
                                                (u.src &&
                                                "module" !==
                                                    (u.type || "").toLowerCase()
                                                    ? T._evalUrl &&
                                                      !u.noModule &&
                                                      T._evalUrl(
                                                          u.src,
                                                          {
                                                              nonce:
                                                                  u.nonce ||
                                                                  u.getAttribute(
                                                                      "nonce"
                                                                  ),
                                                          },
                                                          l
                                                      )
                                                    : V(
                                                          u.textContent.replace(
                                                              Re,
                                                              ""
                                                          ),
                                                          u,
                                                          l
                                                      ));
                            }
                            return n;
                        }
                        function $e(e, t, n) {
                            for (
                                var r, o = t ? T.filter(t, e) : e, i = 0;
                                null != (r = o[i]);
                                i++
                            )
                                n || 1 !== r.nodeType || T.cleanData(N(r)),
                                    r.parentNode &&
                                        (n && k(r) && Ae(N(r, "script")),
                                        r.parentNode.removeChild(r));
                            return e;
                        }
                        T.extend({
                            htmlPrefilter: function (e) {
                                return e;
                            },
                            clone: function (e, t, n) {
                                var r,
                                    o,
                                    i,
                                    s,
                                    a,
                                    u,
                                    l,
                                    c = e.cloneNode(!0),
                                    f = k(e);
                                if (
                                    !(
                                        m.noCloneChecked ||
                                        (1 !== e.nodeType &&
                                            11 !== e.nodeType) ||
                                        T.isXMLDoc(e)
                                    )
                                )
                                    for (
                                        s = N(c), r = 0, o = (i = N(e)).length;
                                        r < o;
                                        r++
                                    )
                                        (a = i[r]),
                                            (u = s[r]),
                                            (l = void 0),
                                            "input" ===
                                                (l =
                                                    u.nodeName.toLowerCase()) &&
                                            we.test(a.type)
                                                ? (u.checked = a.checked)
                                                : ("input" !== l &&
                                                      "textarea" !== l) ||
                                                  (u.defaultValue =
                                                      a.defaultValue);
                                if (t)
                                    if (n)
                                        for (
                                            i = i || N(e),
                                                s = s || N(c),
                                                r = 0,
                                                o = i.length;
                                            r < o;
                                            r++
                                        )
                                            Fe(i[r], s[r]);
                                    else Fe(e, c);
                                return (
                                    0 < (s = N(c, "script")).length &&
                                        Ae(s, !f && N(e, "script")),
                                    c
                                );
                            },
                            cleanData: function (e) {
                                for (
                                    var t, n, r, o = T.event.special, i = 0;
                                    void 0 !== (n = e[i]);
                                    i++
                                )
                                    if (v(n)) {
                                        if ((t = n[b.expando])) {
                                            if (t.events)
                                                for (r in t.events)
                                                    o[r]
                                                        ? T.event.remove(n, r)
                                                        : T.removeEvent(
                                                              n,
                                                              r,
                                                              t.handle
                                                          );
                                            n[b.expando] = void 0;
                                        }
                                        n[l.expando] && (n[l.expando] = void 0);
                                    }
                            },
                        }),
                            T.fn.extend({
                                detach: function (e) {
                                    return $e(this, e, !0);
                                },
                                remove: function (e) {
                                    return $e(this, e);
                                },
                                text: function (e) {
                                    return f(
                                        this,
                                        function (e) {
                                            return void 0 === e
                                                ? T.text(this)
                                                : this.empty().each(
                                                      function () {
                                                          (1 !==
                                                              this.nodeType &&
                                                              11 !==
                                                                  this
                                                                      .nodeType &&
                                                              9 !==
                                                                  this
                                                                      .nodeType) ||
                                                              (this.textContent =
                                                                  e);
                                                      }
                                                  );
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                append: function () {
                                    return D(this, arguments, function (e) {
                                        (1 !== this.nodeType &&
                                            11 !== this.nodeType &&
                                            9 !== this.nodeType) ||
                                            Ie(this, e).appendChild(e);
                                    });
                                },
                                prepend: function () {
                                    return D(this, arguments, function (e) {
                                        var t;
                                        (1 !== this.nodeType &&
                                            11 !== this.nodeType &&
                                            9 !== this.nodeType) ||
                                            (t = Ie(this, e)).insertBefore(
                                                e,
                                                t.firstChild
                                            );
                                    });
                                },
                                before: function () {
                                    return D(this, arguments, function (e) {
                                        this.parentNode &&
                                            this.parentNode.insertBefore(
                                                e,
                                                this
                                            );
                                    });
                                },
                                after: function () {
                                    return D(this, arguments, function (e) {
                                        this.parentNode &&
                                            this.parentNode.insertBefore(
                                                e,
                                                this.nextSibling
                                            );
                                    });
                                },
                                empty: function () {
                                    for (
                                        var e, t = 0;
                                        null != (e = this[t]);
                                        t++
                                    )
                                        1 === e.nodeType &&
                                            (T.cleanData(N(e, !1)),
                                            (e.textContent = ""));
                                    return this;
                                },
                                clone: function (e, t) {
                                    return (
                                        (e = null != e && e),
                                        (t = null == t ? e : t),
                                        this.map(function () {
                                            return T.clone(this, e, t);
                                        })
                                    );
                                },
                                html: function (e) {
                                    return f(
                                        this,
                                        function (e) {
                                            var t = this[0] || {},
                                                n = 0,
                                                r = this.length;
                                            if (
                                                void 0 === e &&
                                                1 === t.nodeType
                                            )
                                                return t.innerHTML;
                                            if (
                                                "string" == typeof e &&
                                                !Le.test(e) &&
                                                !S[
                                                    (Ce.exec(e) || [
                                                        "",
                                                        "",
                                                    ])[1].toLowerCase()
                                                ]
                                            ) {
                                                e = T.htmlPrefilter(e);
                                                try {
                                                    for (; n < r; n++)
                                                        1 ===
                                                            (t = this[n] || {})
                                                                .nodeType &&
                                                            (T.cleanData(
                                                                N(t, !1)
                                                            ),
                                                            (t.innerHTML = e));
                                                    t = 0;
                                                } catch (e) {}
                                            }
                                            t && this.empty().append(e);
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                replaceWith: function () {
                                    var n = [];
                                    return D(
                                        this,
                                        arguments,
                                        function (e) {
                                            var t = this.parentNode;
                                            T.inArray(this, n) < 0 &&
                                                (T.cleanData(N(this)),
                                                t && t.replaceChild(e, this));
                                        },
                                        n
                                    );
                                },
                            }),
                            T.each(
                                {
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith",
                                },
                                function (e, s) {
                                    T.fn[e] = function (e) {
                                        for (
                                            var t,
                                                n = [],
                                                r = T(e),
                                                o = r.length - 1,
                                                i = 0;
                                            i <= o;
                                            i++
                                        )
                                            (t =
                                                i === o
                                                    ? this
                                                    : this.clone(!0)),
                                                T(r[i])[s](t),
                                                F.apply(n, t.get());
                                        return this.pushStack(n);
                                    };
                                }
                            );
                        function We(e) {
                            var t = e.ownerDocument.defaultView;
                            return (t = t && t.opener ? t : w).getComputedStyle(
                                e
                            );
                        }
                        function Be(e, t, n) {
                            var r,
                                o = {};
                            for (r in t)
                                (o[r] = e.style[r]), (e.style[r] = t[r]);
                            for (r in ((n = n.call(e)), t)) e.style[r] = o[r];
                            return n;
                        }
                        var _e,
                            Ue,
                            ze,
                            Xe,
                            Ve,
                            Ge,
                            Ye,
                            o,
                            Je = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
                            Qe = new RegExp(p.join("|"), "i");
                        function Ke() {
                            var e;
                            o &&
                                ((Ye.style.cssText =
                                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                (o.style.cssText =
                                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                j.appendChild(Ye).appendChild(o),
                                (e = w.getComputedStyle(o)),
                                (_e = "1%" !== e.top),
                                (Ge = 12 === Ze(e.marginLeft)),
                                (o.style.right = "60%"),
                                (Xe = 36 === Ze(e.right)),
                                (Ue = 36 === Ze(e.width)),
                                (o.style.position = "absolute"),
                                (ze = 12 === Ze(o.offsetWidth / 3)),
                                j.removeChild(Ye),
                                (o = null));
                        }
                        function Ze(e) {
                            return Math.round(parseFloat(e));
                        }
                        function et(e, t, n) {
                            var r,
                                o,
                                i = e.style;
                            return (
                                (n = n || We(e)) &&
                                    ("" !==
                                        (o = n.getPropertyValue(t) || n[t]) ||
                                        k(e) ||
                                        (o = T.style(e, t)),
                                    !m.pixelBoxStyles() &&
                                        Je.test(o) &&
                                        Qe.test(t) &&
                                        ((e = i.width),
                                        (t = i.minWidth),
                                        (r = i.maxWidth),
                                        (i.minWidth = i.maxWidth = i.width = o),
                                        (o = n.width),
                                        (i.width = e),
                                        (i.minWidth = t),
                                        (i.maxWidth = r))),
                                void 0 !== o ? o + "" : o
                            );
                        }
                        function tt(e, t) {
                            return {
                                get: function () {
                                    if (!e())
                                        return (this.get = t).apply(
                                            this,
                                            arguments
                                        );
                                    delete this.get;
                                },
                            };
                        }
                        (Ye = C.createElement("div")),
                            (o = C.createElement("div")).style &&
                                ((o.style.backgroundClip = "content-box"),
                                (o.cloneNode(!0).style.backgroundClip = ""),
                                (m.clearCloneStyle =
                                    "content-box" === o.style.backgroundClip),
                                T.extend(m, {
                                    boxSizingReliable: function () {
                                        return Ke(), Ue;
                                    },
                                    pixelBoxStyles: function () {
                                        return Ke(), Xe;
                                    },
                                    pixelPosition: function () {
                                        return Ke(), _e;
                                    },
                                    reliableMarginLeft: function () {
                                        return Ke(), Ge;
                                    },
                                    scrollboxSize: function () {
                                        return Ke(), ze;
                                    },
                                    reliableTrDimensions: function () {
                                        var e, t, n;
                                        return (
                                            null == Ve &&
                                                ((e = C.createElement("table")),
                                                (t = C.createElement("tr")),
                                                (n = C.createElement("div")),
                                                (e.style.cssText =
                                                    "position:absolute;left:-11111px"),
                                                (t.style.height = "1px"),
                                                (n.style.height = "9px"),
                                                j
                                                    .appendChild(e)
                                                    .appendChild(t)
                                                    .appendChild(n),
                                                (n = w.getComputedStyle(t)),
                                                (Ve = 3 < parseInt(n.height)),
                                                j.removeChild(e)),
                                            Ve
                                        );
                                    },
                                }));
                        var nt = ["Webkit", "Moz", "ms"],
                            rt = C.createElement("div").style,
                            ot = {};
                        function it(e) {
                            var t = T.cssProps[e] || ot[e];
                            return (
                                t ||
                                (e in rt
                                    ? e
                                    : (ot[e] =
                                          (function (e) {
                                              for (
                                                  var t =
                                                          e[0].toUpperCase() +
                                                          e.slice(1),
                                                      n = nt.length;
                                                  n--;

                                              )
                                                  if ((e = nt[n] + t) in rt)
                                                      return e;
                                          })(e) || e))
                            );
                        }
                        var st = /^(none|table(?!-c[ea]).+)/,
                            at = /^--/,
                            ut = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block",
                            },
                            lt = { letterSpacing: "0", fontWeight: "400" };
                        function ct(e, t, n) {
                            var r = ve.exec(t);
                            return r
                                ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px")
                                : t;
                        }
                        function ft(e, t, n, r, o, i) {
                            var s = "width" === t ? 1 : 0,
                                a = 0,
                                u = 0;
                            if (n === (r ? "border" : "content")) return 0;
                            for (; s < 4; s += 2)
                                "margin" === n &&
                                    (u += T.css(e, n + p[s], !0, o)),
                                    r
                                        ? ("content" === n &&
                                              (u -= T.css(
                                                  e,
                                                  "padding" + p[s],
                                                  !0,
                                                  o
                                              )),
                                          "margin" !== n &&
                                              (u -= T.css(
                                                  e,
                                                  "border" + p[s] + "Width",
                                                  !0,
                                                  o
                                              )))
                                        : ((u += T.css(
                                              e,
                                              "padding" + p[s],
                                              !0,
                                              o
                                          )),
                                          "padding" !== n
                                              ? (u += T.css(
                                                    e,
                                                    "border" + p[s] + "Width",
                                                    !0,
                                                    o
                                                ))
                                              : (a += T.css(
                                                    e,
                                                    "border" + p[s] + "Width",
                                                    !0,
                                                    o
                                                )));
                            return (
                                !r &&
                                    0 <= i &&
                                    (u +=
                                        Math.max(
                                            0,
                                            Math.ceil(
                                                e[
                                                    "offset" +
                                                        t[0].toUpperCase() +
                                                        t.slice(1)
                                                ] -
                                                    i -
                                                    u -
                                                    a -
                                                    0.5
                                            )
                                        ) || 0),
                                u
                            );
                        }
                        function pt(e, t, n) {
                            var r = We(e),
                                o =
                                    (!m.boxSizingReliable() || n) &&
                                    "border-box" ===
                                        T.css(e, "boxSizing", !1, r),
                                i = o,
                                s = et(e, t, r),
                                a = "offset" + t[0].toUpperCase() + t.slice(1);
                            if (Je.test(s)) {
                                if (!n) return s;
                                s = "auto";
                            }
                            return (
                                ((!m.boxSizingReliable() && o) ||
                                    (!m.reliableTrDimensions() && u(e, "tr")) ||
                                    "auto" === s ||
                                    (!parseFloat(s) &&
                                        "inline" ===
                                            T.css(e, "display", !1, r))) &&
                                    e.getClientRects().length &&
                                    ((o =
                                        "border-box" ===
                                        T.css(e, "boxSizing", !1, r)),
                                    (i = a in e) && (s = e[a])),
                                (s = parseFloat(s) || 0) +
                                    ft(
                                        e,
                                        t,
                                        n || (o ? "border" : "content"),
                                        i,
                                        r,
                                        s
                                    ) +
                                    "px"
                            );
                        }
                        function i(e, t, n, r, o) {
                            return new i.prototype.init(e, t, n, r, o);
                        }
                        T.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (e, t) {
                                        if (t)
                                            return "" === (t = et(e, "opacity"))
                                                ? "1"
                                                : t;
                                    },
                                },
                            },
                            cssNumber: {
                                animationIterationCount: !0,
                                columnCount: !0,
                                fillOpacity: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                gridArea: !0,
                                gridColumn: !0,
                                gridColumnEnd: !0,
                                gridColumnStart: !0,
                                gridRow: !0,
                                gridRowEnd: !0,
                                gridRowStart: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0,
                            },
                            cssProps: {},
                            style: function (e, t, n, r) {
                                if (
                                    e &&
                                    3 !== e.nodeType &&
                                    8 !== e.nodeType &&
                                    e.style
                                ) {
                                    var o,
                                        i,
                                        s,
                                        a = x(t),
                                        u = at.test(t),
                                        l = e.style;
                                    if (
                                        (u || (t = it(a)),
                                        (s = T.cssHooks[t] || T.cssHooks[a]),
                                        void 0 === n)
                                    )
                                        return s &&
                                            "get" in s &&
                                            void 0 !== (o = s.get(e, !1, r))
                                            ? o
                                            : l[t];
                                    "string" === (i = typeof n) &&
                                        (o = ve.exec(n)) &&
                                        o[1] &&
                                        ((n = xe(e, t, o)), (i = "number")),
                                        null != n &&
                                            n == n &&
                                            ("number" !== i ||
                                                u ||
                                                (n +=
                                                    (o && o[3]) ||
                                                    (T.cssNumber[a]
                                                        ? ""
                                                        : "px")),
                                            m.clearCloneStyle ||
                                                "" !== n ||
                                                0 !== t.indexOf("background") ||
                                                (l[t] = "inherit"),
                                            (s &&
                                                "set" in s &&
                                                void 0 ===
                                                    (n = s.set(e, n, r))) ||
                                                (u
                                                    ? l.setProperty(t, n)
                                                    : (l[t] = n)));
                                }
                            },
                            css: function (e, t, n, r) {
                                var o,
                                    i = x(t);
                                return (
                                    at.test(t) || (t = it(i)),
                                    "normal" ===
                                        (o =
                                            void 0 ===
                                            (o =
                                                (i =
                                                    T.cssHooks[t] ||
                                                    T.cssHooks[i]) && "get" in i
                                                    ? i.get(e, !0, n)
                                                    : o)
                                                ? et(e, t, r)
                                                : o) &&
                                        t in lt &&
                                        (o = lt[t]),
                                    ("" === n || n) &&
                                    ((i = parseFloat(o)),
                                    !0 === n || isFinite(i))
                                        ? i || 0
                                        : o
                                );
                            },
                        }),
                            T.each(["height", "width"], function (e, s) {
                                T.cssHooks[s] = {
                                    get: function (e, t, n) {
                                        if (t)
                                            return !st.test(
                                                T.css(e, "display")
                                            ) ||
                                                (e.getClientRects().length &&
                                                    e.getBoundingClientRect()
                                                        .width)
                                                ? pt(e, s, n)
                                                : Be(e, ut, function () {
                                                      return pt(e, s, n);
                                                  });
                                    },
                                    set: function (e, t, n) {
                                        var r = We(e),
                                            o =
                                                !m.scrollboxSize() &&
                                                "absolute" === r.position,
                                            i =
                                                (o || n) &&
                                                "border-box" ===
                                                    T.css(
                                                        e,
                                                        "boxSizing",
                                                        !1,
                                                        r
                                                    ),
                                            n = n ? ft(e, s, n, i, r) : 0;
                                        return (
                                            i &&
                                                o &&
                                                (n -= Math.ceil(
                                                    e[
                                                        "offset" +
                                                            s[0].toUpperCase() +
                                                            s.slice(1)
                                                    ] -
                                                        parseFloat(r[s]) -
                                                        ft(
                                                            e,
                                                            s,
                                                            "border",
                                                            !1,
                                                            r
                                                        ) -
                                                        0.5
                                                )),
                                            n &&
                                                (i = ve.exec(t)) &&
                                                "px" !== (i[3] || "px") &&
                                                ((e.style[s] = t),
                                                (t = T.css(e, s))),
                                            ct(0, t, n)
                                        );
                                    },
                                };
                            }),
                            (T.cssHooks.marginLeft = tt(
                                m.reliableMarginLeft,
                                function (e, t) {
                                    if (t)
                                        return (
                                            (parseFloat(et(e, "marginLeft")) ||
                                                e.getBoundingClientRect().left -
                                                    Be(
                                                        e,
                                                        { marginLeft: 0 },
                                                        function () {
                                                            return e.getBoundingClientRect()
                                                                .left;
                                                        }
                                                    )) + "px"
                                        );
                                }
                            )),
                            T.each(
                                { margin: "", padding: "", border: "Width" },
                                function (o, i) {
                                    (T.cssHooks[o + i] = {
                                        expand: function (e) {
                                            for (
                                                var t = 0,
                                                    n = {},
                                                    r =
                                                        "string" == typeof e
                                                            ? e.split(" ")
                                                            : [e];
                                                t < 4;
                                                t++
                                            )
                                                n[o + p[t] + i] =
                                                    r[t] || r[t - 2] || r[0];
                                            return n;
                                        },
                                    }),
                                        "margin" !== o &&
                                            (T.cssHooks[o + i].set = ct);
                                }
                            ),
                            T.fn.extend({
                                css: function (e, t) {
                                    return f(
                                        this,
                                        function (e, t, n) {
                                            var r,
                                                o,
                                                i = {},
                                                s = 0;
                                            if (Array.isArray(t)) {
                                                for (
                                                    r = We(e), o = t.length;
                                                    s < o;
                                                    s++
                                                )
                                                    i[t[s]] = T.css(
                                                        e,
                                                        t[s],
                                                        !1,
                                                        r
                                                    );
                                                return i;
                                            }
                                            return void 0 !== n
                                                ? T.style(e, t, n)
                                                : T.css(e, t);
                                        },
                                        e,
                                        t,
                                        1 < arguments.length
                                    );
                                },
                            }),
                            (((T.Tween = i).prototype = {
                                constructor: i,
                                init: function (e, t, n, r, o, i) {
                                    (this.elem = e),
                                        (this.prop = n),
                                        (this.easing = o || T.easing._default),
                                        (this.options = t),
                                        (this.start = this.now = this.cur()),
                                        (this.end = r),
                                        (this.unit =
                                            i || (T.cssNumber[n] ? "" : "px"));
                                },
                                cur: function () {
                                    var e = i.propHooks[this.prop];
                                    return (
                                        e && e.get ? e : i.propHooks._default
                                    ).get(this);
                                },
                                run: function (e) {
                                    var t,
                                        n = i.propHooks[this.prop];
                                    return (
                                        this.options.duration
                                            ? (this.pos = t =
                                                  T.easing[this.easing](
                                                      e,
                                                      this.options.duration * e,
                                                      0,
                                                      1,
                                                      this.options.duration
                                                  ))
                                            : (this.pos = t = e),
                                        (this.now =
                                            (this.end - this.start) * t +
                                            this.start),
                                        this.options.step &&
                                            this.options.step.call(
                                                this.elem,
                                                this.now,
                                                this
                                            ),
                                        (n && n.set
                                            ? n
                                            : i.propHooks._default
                                        ).set(this),
                                        this
                                    );
                                },
                            }).init.prototype = i.prototype),
                            ((i.propHooks = {
                                _default: {
                                    get: function (e) {
                                        return 1 !== e.elem.nodeType ||
                                            (null != e.elem[e.prop] &&
                                                null == e.elem.style[e.prop])
                                            ? e.elem[e.prop]
                                            : (e = T.css(e.elem, e.prop, "")) &&
                                              "auto" !== e
                                            ? e
                                            : 0;
                                    },
                                    set: function (e) {
                                        T.fx.step[e.prop]
                                            ? T.fx.step[e.prop](e)
                                            : 1 !== e.elem.nodeType ||
                                              (!T.cssHooks[e.prop] &&
                                                  null ==
                                                      e.elem.style[it(e.prop)])
                                            ? (e.elem[e.prop] = e.now)
                                            : T.style(
                                                  e.elem,
                                                  e.prop,
                                                  e.now + e.unit
                                              );
                                    },
                                },
                            }).scrollTop = i.propHooks.scrollLeft =
                                {
                                    set: function (e) {
                                        e.elem.nodeType &&
                                            e.elem.parentNode &&
                                            (e.elem[e.prop] = e.now);
                                    },
                                }),
                            (T.easing = {
                                linear: function (e) {
                                    return e;
                                },
                                swing: function (e) {
                                    return 0.5 - Math.cos(e * Math.PI) / 2;
                                },
                                _default: "swing",
                            }),
                            (T.fx = i.prototype.init),
                            (T.fx.step = {});
                        var q,
                            ht,
                            s,
                            O,
                            dt = /^(?:toggle|show|hide)$/,
                            gt = /queueHooks$/;
                        function mt() {
                            ht &&
                                (!1 === C.hidden && w.requestAnimationFrame
                                    ? w.requestAnimationFrame(mt)
                                    : w.setTimeout(mt, T.fx.interval),
                                T.fx.tick());
                        }
                        function vt() {
                            return (
                                w.setTimeout(function () {
                                    q = void 0;
                                }),
                                (q = Date.now())
                            );
                        }
                        function yt(e, t) {
                            var n,
                                r = 0,
                                o = { height: e };
                            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                                o["margin" + (n = p[r])] = o["padding" + n] = e;
                            return t && (o.opacity = o.width = e), o;
                        }
                        function xt(e, t, n) {
                            for (
                                var r,
                                    o = (L.tweeners[t] || []).concat(
                                        L.tweeners["*"]
                                    ),
                                    i = 0,
                                    s = o.length;
                                i < s;
                                i++
                            )
                                if ((r = o[i].call(n, t, e))) return r;
                        }
                        function L(o, e, t) {
                            var n,
                                i,
                                r,
                                s,
                                a,
                                u,
                                l,
                                c = 0,
                                f = L.prefilters.length,
                                p = T.Deferred().always(function () {
                                    delete h.elem;
                                }),
                                h = function () {
                                    if (!i) {
                                        for (
                                            var e = q || vt(),
                                                e = Math.max(
                                                    0,
                                                    d.startTime + d.duration - e
                                                ),
                                                t = 1 - (e / d.duration || 0),
                                                n = 0,
                                                r = d.tweens.length;
                                            n < r;
                                            n++
                                        )
                                            d.tweens[n].run(t);
                                        if (
                                            (p.notifyWith(o, [d, t, e]),
                                            t < 1 && r)
                                        )
                                            return e;
                                        r || p.notifyWith(o, [d, 1, 0]),
                                            p.resolveWith(o, [d]);
                                    }
                                    return !1;
                                },
                                d = p.promise({
                                    elem: o,
                                    props: T.extend({}, e),
                                    opts: T.extend(
                                        !0,
                                        {
                                            specialEasing: {},
                                            easing: T.easing._default,
                                        },
                                        t
                                    ),
                                    originalProperties: e,
                                    originalOptions: t,
                                    startTime: q || vt(),
                                    duration: t.duration,
                                    tweens: [],
                                    createTween: function (e, t) {
                                        t = T.Tween(
                                            o,
                                            d.opts,
                                            e,
                                            t,
                                            d.opts.specialEasing[e] ||
                                                d.opts.easing
                                        );
                                        return d.tweens.push(t), t;
                                    },
                                    stop: function (e) {
                                        var t = 0,
                                            n = e ? d.tweens.length : 0;
                                        if (!i) {
                                            for (i = !0; t < n; t++)
                                                d.tweens[t].run(1);
                                            e
                                                ? (p.notifyWith(o, [d, 1, 0]),
                                                  p.resolveWith(o, [d, e]))
                                                : p.rejectWith(o, [d, e]);
                                        }
                                        return this;
                                    },
                                }),
                                g = d.props,
                                m = g,
                                v = d.opts.specialEasing;
                            for (r in m)
                                if (
                                    ((a = v[(s = x(r))]),
                                    (u = m[r]),
                                    Array.isArray(u) &&
                                        ((a = u[1]), (u = m[r] = u[0])),
                                    r !== s && ((m[s] = u), delete m[r]),
                                    (l = T.cssHooks[s]) && "expand" in l)
                                )
                                    for (r in ((u = l.expand(u)),
                                    delete m[s],
                                    u))
                                        r in m || ((m[r] = u[r]), (v[r] = a));
                                else v[s] = a;
                            for (; c < f; c++)
                                if ((n = L.prefilters[c].call(d, o, g, d.opts)))
                                    return (
                                        y(n.stop) &&
                                            (T._queueHooks(
                                                d.elem,
                                                d.opts.queue
                                            ).stop = n.stop.bind(n)),
                                        n
                                    );
                            return (
                                T.map(g, xt, d),
                                y(d.opts.start) && d.opts.start.call(o, d),
                                d
                                    .progress(d.opts.progress)
                                    .done(d.opts.done, d.opts.complete)
                                    .fail(d.opts.fail)
                                    .always(d.opts.always),
                                T.fx.timer(
                                    T.extend(h, {
                                        elem: o,
                                        anim: d,
                                        queue: d.opts.queue,
                                    })
                                ),
                                d
                            );
                        }
                        (T.Animation = T.extend(L, {
                            tweeners: {
                                "*": [
                                    function (e, t) {
                                        var n = this.createTween(e, t);
                                        return xe(n.elem, e, ve.exec(t), n), n;
                                    },
                                ],
                            },
                            tweener: function (e, t) {
                                for (
                                    var n,
                                        r = 0,
                                        o = (e = y(e)
                                            ? ((t = e), ["*"])
                                            : e.match(A)).length;
                                    r < o;
                                    r++
                                )
                                    (n = e[r]),
                                        (L.tweeners[n] = L.tweeners[n] || []),
                                        L.tweeners[n].unshift(t);
                            },
                            prefilters: [
                                function (e, t, n) {
                                    var r,
                                        o,
                                        i,
                                        s,
                                        a,
                                        u,
                                        l,
                                        c = "width" in t || "height" in t,
                                        f = this,
                                        p = {},
                                        h = e.style,
                                        d = e.nodeType && me(e),
                                        g = b.get(e, "fxshow");
                                    for (r in (n.queue ||
                                        (null ==
                                            (s = T._queueHooks(e, "fx"))
                                                .unqueued &&
                                            ((s.unqueued = 0),
                                            (a = s.empty.fire),
                                            (s.empty.fire = function () {
                                                s.unqueued || a();
                                            })),
                                        s.unqueued++,
                                        f.always(function () {
                                            f.always(function () {
                                                s.unqueued--,
                                                    T.queue(e, "fx").length ||
                                                        s.empty.fire();
                                            });
                                        })),
                                    t))
                                        if (((o = t[r]), dt.test(o))) {
                                            if (
                                                (delete t[r],
                                                (i = i || "toggle" === o),
                                                o === (d ? "hide" : "show"))
                                            ) {
                                                if (
                                                    "show" !== o ||
                                                    !g ||
                                                    void 0 === g[r]
                                                )
                                                    continue;
                                                d = !0;
                                            }
                                            p[r] = (g && g[r]) || T.style(e, r);
                                        }
                                    if (
                                        (u = !T.isEmptyObject(t)) ||
                                        !T.isEmptyObject(p)
                                    )
                                        for (r in (c &&
                                            1 === e.nodeType &&
                                            ((n.overflow = [
                                                h.overflow,
                                                h.overflowX,
                                                h.overflowY,
                                            ]),
                                            null == (l = g && g.display) &&
                                                (l = b.get(e, "display")),
                                            "none" ===
                                                (c = T.css(e, "display")) &&
                                                (l
                                                    ? (c = l)
                                                    : (E([e], !0),
                                                      (l =
                                                          e.style.display || l),
                                                      (c = T.css(e, "display")),
                                                      E([e]))),
                                            ("inline" === c ||
                                                ("inline-block" === c &&
                                                    null != l)) &&
                                                "none" === T.css(e, "float") &&
                                                (u ||
                                                    (f.done(function () {
                                                        h.display = l;
                                                    }),
                                                    null == l &&
                                                        ((c = h.display),
                                                        (l =
                                                            "none" === c
                                                                ? ""
                                                                : c))),
                                                (h.display = "inline-block"))),
                                        n.overflow &&
                                            ((h.overflow = "hidden"),
                                            f.always(function () {
                                                (h.overflow = n.overflow[0]),
                                                    (h.overflowX =
                                                        n.overflow[1]),
                                                    (h.overflowY =
                                                        n.overflow[2]);
                                            })),
                                        (u = !1),
                                        p))
                                            u ||
                                                (g
                                                    ? "hidden" in g &&
                                                      (d = g.hidden)
                                                    : (g = b.access(
                                                          e,
                                                          "fxshow",
                                                          { display: l }
                                                      )),
                                                i && (g.hidden = !d),
                                                d && E([e], !0),
                                                f.done(function () {
                                                    for (r in (d || E([e]),
                                                    b.remove(e, "fxshow"),
                                                    p))
                                                        T.style(e, r, p[r]);
                                                })),
                                                (u = xt(d ? g[r] : 0, r, f)),
                                                r in g ||
                                                    ((g[r] = u.start),
                                                    d &&
                                                        ((u.end = u.start),
                                                        (u.start = 0)));
                                },
                            ],
                            prefilter: function (e, t) {
                                t
                                    ? L.prefilters.unshift(e)
                                    : L.prefilters.push(e);
                            },
                        })),
                            (T.speed = function (e, t, n) {
                                var r =
                                    e && "object" == typeof e
                                        ? T.extend({}, e)
                                        : {
                                              complete:
                                                  n || (!n && t) || (y(e) && e),
                                              duration: e,
                                              easing:
                                                  (n && t) || (t && !y(t) && t),
                                          };
                                return (
                                    T.fx.off
                                        ? (r.duration = 0)
                                        : "number" != typeof r.duration &&
                                          (r.duration in T.fx.speeds
                                              ? (r.duration =
                                                    T.fx.speeds[r.duration])
                                              : (r.duration =
                                                    T.fx.speeds._default)),
                                    (null != r.queue && !0 !== r.queue) ||
                                        (r.queue = "fx"),
                                    (r.old = r.complete),
                                    (r.complete = function () {
                                        y(r.old) && r.old.call(this),
                                            r.queue && T.dequeue(this, r.queue);
                                    }),
                                    r
                                );
                            }),
                            T.fn.extend({
                                fadeTo: function (e, t, n, r) {
                                    return this.filter(me)
                                        .css("opacity", 0)
                                        .show()
                                        .end()
                                        .animate({ opacity: t }, e, n, r);
                                },
                                animate: function (t, e, n, r) {
                                    function o() {
                                        var e = L(this, T.extend({}, t), s);
                                        (i || b.get(this, "finish")) &&
                                            e.stop(!0);
                                    }
                                    var i = T.isEmptyObject(t),
                                        s = T.speed(e, n, r);
                                    return (
                                        (o.finish = o),
                                        i || !1 === s.queue
                                            ? this.each(o)
                                            : this.queue(s.queue, o)
                                    );
                                },
                                stop: function (o, e, i) {
                                    function s(e) {
                                        var t = e.stop;
                                        delete e.stop, t(i);
                                    }
                                    return (
                                        "string" != typeof o &&
                                            ((i = e), (e = o), (o = void 0)),
                                        e && this.queue(o || "fx", []),
                                        this.each(function () {
                                            var e = !0,
                                                t =
                                                    null != o &&
                                                    o + "queueHooks",
                                                n = T.timers,
                                                r = b.get(this);
                                            if (t) r[t] && r[t].stop && s(r[t]);
                                            else
                                                for (t in r)
                                                    r[t] &&
                                                        r[t].stop &&
                                                        gt.test(t) &&
                                                        s(r[t]);
                                            for (t = n.length; t--; )
                                                n[t].elem !== this ||
                                                    (null != o &&
                                                        n[t].queue !== o) ||
                                                    (n[t].anim.stop(i),
                                                    (e = !1),
                                                    n.splice(t, 1));
                                            (!e && i) || T.dequeue(this, o);
                                        })
                                    );
                                },
                                finish: function (s) {
                                    return (
                                        !1 !== s && (s = s || "fx"),
                                        this.each(function () {
                                            var e,
                                                t = b.get(this),
                                                n = t[s + "queue"],
                                                r = t[s + "queueHooks"],
                                                o = T.timers,
                                                i = n ? n.length : 0;
                                            for (
                                                t.finish = !0,
                                                    T.queue(this, s, []),
                                                    r &&
                                                        r.stop &&
                                                        r.stop.call(this, !0),
                                                    e = o.length;
                                                e--;

                                            )
                                                o[e].elem === this &&
                                                    o[e].queue === s &&
                                                    (o[e].anim.stop(!0),
                                                    o.splice(e, 1));
                                            for (e = 0; e < i; e++)
                                                n[e] &&
                                                    n[e].finish &&
                                                    n[e].finish.call(this);
                                            delete t.finish;
                                        })
                                    );
                                },
                            }),
                            T.each(["toggle", "show", "hide"], function (e, r) {
                                var o = T.fn[r];
                                T.fn[r] = function (e, t, n) {
                                    return null == e || "boolean" == typeof e
                                        ? o.apply(this, arguments)
                                        : this.animate(yt(r, !0), e, t, n);
                                };
                            }),
                            T.each(
                                {
                                    slideDown: yt("show"),
                                    slideUp: yt("hide"),
                                    slideToggle: yt("toggle"),
                                    fadeIn: { opacity: "show" },
                                    fadeOut: { opacity: "hide" },
                                    fadeToggle: { opacity: "toggle" },
                                },
                                function (e, r) {
                                    T.fn[e] = function (e, t, n) {
                                        return this.animate(r, e, t, n);
                                    };
                                }
                            ),
                            (T.timers = []),
                            (T.fx.tick = function () {
                                var e,
                                    t = 0,
                                    n = T.timers;
                                for (q = Date.now(); t < n.length; t++)
                                    (e = n[t])() ||
                                        n[t] !== e ||
                                        n.splice(t--, 1);
                                n.length || T.fx.stop(), (q = void 0);
                            }),
                            (T.fx.timer = function (e) {
                                T.timers.push(e), T.fx.start();
                            }),
                            (T.fx.interval = 13),
                            (T.fx.start = function () {
                                ht || ((ht = !0), mt());
                            }),
                            (T.fx.stop = function () {
                                ht = null;
                            }),
                            (T.fx.speeds = {
                                slow: 600,
                                fast: 200,
                                _default: 400,
                            }),
                            (T.fn.delay = function (r, e) {
                                return (
                                    (r = (T.fx && T.fx.speeds[r]) || r),
                                    this.queue(
                                        (e = e || "fx"),
                                        function (e, t) {
                                            var n = w.setTimeout(e, r);
                                            t.stop = function () {
                                                w.clearTimeout(n);
                                            };
                                        }
                                    )
                                );
                            }),
                            (s = C.createElement("input")),
                            (O = C.createElement("select").appendChild(
                                C.createElement("option")
                            )),
                            (s.type = "checkbox"),
                            (m.checkOn = "" !== s.value),
                            (m.optSelected = O.selected),
                            ((s = C.createElement("input")).value = "t"),
                            (s.type = "radio"),
                            (m.radioValue = "t" === s.value);
                        var bt,
                            wt = T.expr.attrHandle,
                            Ct =
                                (T.fn.extend({
                                    attr: function (e, t) {
                                        return f(
                                            this,
                                            T.attr,
                                            e,
                                            t,
                                            1 < arguments.length
                                        );
                                    },
                                    removeAttr: function (e) {
                                        return this.each(function () {
                                            T.removeAttr(this, e);
                                        });
                                    },
                                }),
                                T.extend({
                                    attr: function (e, t, n) {
                                        var r,
                                            o,
                                            i = e.nodeType;
                                        if (3 !== i && 8 !== i && 2 !== i)
                                            return void 0 === e.getAttribute
                                                ? T.prop(e, t, n)
                                                : ((1 === i && T.isXMLDoc(e)) ||
                                                      (o =
                                                          T.attrHooks[
                                                              t.toLowerCase()
                                                          ] ||
                                                          (T.expr.match.bool.test(
                                                              t
                                                          )
                                                              ? bt
                                                              : void 0)),
                                                  void 0 !== n
                                                      ? null === n
                                                          ? void T.removeAttr(
                                                                e,
                                                                t
                                                            )
                                                          : o &&
                                                            "set" in o &&
                                                            void 0 !==
                                                                (r = o.set(
                                                                    e,
                                                                    n,
                                                                    t
                                                                ))
                                                          ? r
                                                          : (e.setAttribute(
                                                                t,
                                                                n + ""
                                                            ),
                                                            n)
                                                      : !(
                                                            o &&
                                                            "get" in o &&
                                                            null !==
                                                                (r = o.get(
                                                                    e,
                                                                    t
                                                                ))
                                                        ) &&
                                                        null ==
                                                            (r = T.find.attr(
                                                                e,
                                                                t
                                                            ))
                                                      ? void 0
                                                      : r);
                                    },
                                    attrHooks: {
                                        type: {
                                            set: function (e, t) {
                                                var n;
                                                if (
                                                    !m.radioValue &&
                                                    "radio" === t &&
                                                    u(e, "input")
                                                )
                                                    return (
                                                        (n = e.value),
                                                        e.setAttribute(
                                                            "type",
                                                            t
                                                        ),
                                                        n && (e.value = n),
                                                        t
                                                    );
                                            },
                                        },
                                    },
                                    removeAttr: function (e, t) {
                                        var n,
                                            r = 0,
                                            o = t && t.match(A);
                                        if (o && 1 === e.nodeType)
                                            for (; (n = o[r++]); )
                                                e.removeAttribute(n);
                                    },
                                }),
                                (bt = {
                                    set: function (e, t, n) {
                                        return (
                                            !1 === t
                                                ? T.removeAttr(e, n)
                                                : e.setAttribute(n, n),
                                            n
                                        );
                                    },
                                }),
                                T.each(
                                    T.expr.match.bool.source.match(/\w+/g),
                                    function (e, t) {
                                        var s = wt[t] || T.find.attr;
                                        wt[t] = function (e, t, n) {
                                            var r,
                                                o,
                                                i = t.toLowerCase();
                                            return (
                                                n ||
                                                    ((o = wt[i]),
                                                    (wt[i] = r),
                                                    (r =
                                                        null != s(e, t, n)
                                                            ? i
                                                            : null),
                                                    (wt[i] = o)),
                                                r
                                            );
                                        };
                                    }
                                ),
                                /^(?:input|select|textarea|button)$/i),
                            Tt = /^(?:a|area)$/i;
                        function H(e) {
                            return (e.match(A) || []).join(" ");
                        }
                        function R(e) {
                            return (
                                (e.getAttribute && e.getAttribute("class")) ||
                                ""
                            );
                        }
                        function At(e) {
                            return Array.isArray(e)
                                ? e
                                : ("string" == typeof e && e.match(A)) || [];
                        }
                        T.fn.extend({
                            prop: function (e, t) {
                                return f(
                                    this,
                                    T.prop,
                                    e,
                                    t,
                                    1 < arguments.length
                                );
                            },
                            removeProp: function (e) {
                                return this.each(function () {
                                    delete this[T.propFix[e] || e];
                                });
                            },
                        }),
                            T.extend({
                                prop: function (e, t, n) {
                                    var r,
                                        o,
                                        i = e.nodeType;
                                    if (3 !== i && 8 !== i && 2 !== i)
                                        return (
                                            (1 === i && T.isXMLDoc(e)) ||
                                                ((t = T.propFix[t] || t),
                                                (o = T.propHooks[t])),
                                            void 0 !== n
                                                ? o &&
                                                  "set" in o &&
                                                  void 0 !==
                                                      (r = o.set(e, n, t))
                                                    ? r
                                                    : (e[t] = n)
                                                : o &&
                                                  "get" in o &&
                                                  null !== (r = o.get(e, t))
                                                ? r
                                                : e[t]
                                        );
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function (e) {
                                            var t = T.find.attr(e, "tabindex");
                                            return t
                                                ? parseInt(t, 10)
                                                : Ct.test(e.nodeName) ||
                                                  (Tt.test(e.nodeName) &&
                                                      e.href)
                                                ? 0
                                                : -1;
                                        },
                                    },
                                },
                                propFix: { for: "htmlFor", class: "className" },
                            }),
                            m.optSelected ||
                                (T.propHooks.selected = {
                                    get: function (e) {
                                        e = e.parentNode;
                                        return (
                                            e &&
                                                e.parentNode &&
                                                e.parentNode.selectedIndex,
                                            null
                                        );
                                    },
                                    set: function (e) {
                                        e = e.parentNode;
                                        e &&
                                            (e.selectedIndex,
                                            e.parentNode &&
                                                e.parentNode.selectedIndex);
                                    },
                                }),
                            T.each(
                                [
                                    "tabIndex",
                                    "readOnly",
                                    "maxLength",
                                    "cellSpacing",
                                    "cellPadding",
                                    "rowSpan",
                                    "colSpan",
                                    "useMap",
                                    "frameBorder",
                                    "contentEditable",
                                ],
                                function () {
                                    T.propFix[this.toLowerCase()] = this;
                                }
                            ),
                            T.fn.extend({
                                addClass: function (t) {
                                    var e,
                                        n,
                                        r,
                                        o,
                                        i,
                                        s,
                                        a = 0;
                                    if (y(t))
                                        return this.each(function (e) {
                                            T(this).addClass(
                                                t.call(this, e, R(this))
                                            );
                                        });
                                    if ((e = At(t)).length)
                                        for (; (n = this[a++]); )
                                            if (
                                                ((s = R(n)),
                                                (r =
                                                    1 === n.nodeType &&
                                                    " " + H(s) + " "))
                                            ) {
                                                for (i = 0; (o = e[i++]); )
                                                    r.indexOf(" " + o + " ") <
                                                        0 && (r += o + " ");
                                                s !== (s = H(r)) &&
                                                    n.setAttribute("class", s);
                                            }
                                    return this;
                                },
                                removeClass: function (t) {
                                    var e,
                                        n,
                                        r,
                                        o,
                                        i,
                                        s,
                                        a = 0;
                                    if (y(t))
                                        return this.each(function (e) {
                                            T(this).removeClass(
                                                t.call(this, e, R(this))
                                            );
                                        });
                                    if (!arguments.length)
                                        return this.attr("class", "");
                                    if ((e = At(t)).length)
                                        for (; (n = this[a++]); )
                                            if (
                                                ((s = R(n)),
                                                (r =
                                                    1 === n.nodeType &&
                                                    " " + H(s) + " "))
                                            ) {
                                                for (i = 0; (o = e[i++]); )
                                                    for (
                                                        ;
                                                        -1 <
                                                        r.indexOf(
                                                            " " + o + " "
                                                        );

                                                    )
                                                        r = r.replace(
                                                            " " + o + " ",
                                                            " "
                                                        );
                                                s !== (s = H(r)) &&
                                                    n.setAttribute("class", s);
                                            }
                                    return this;
                                },
                                toggleClass: function (o, t) {
                                    var i = typeof o,
                                        s = "string" == i || Array.isArray(o);
                                    return "boolean" == typeof t && s
                                        ? t
                                            ? this.addClass(o)
                                            : this.removeClass(o)
                                        : y(o)
                                        ? this.each(function (e) {
                                              T(this).toggleClass(
                                                  o.call(this, e, R(this), t),
                                                  t
                                              );
                                          })
                                        : this.each(function () {
                                              var e, t, n, r;
                                              if (s)
                                                  for (
                                                      t = 0,
                                                          n = T(this),
                                                          r = At(o);
                                                      (e = r[t++]);

                                                  )
                                                      n.hasClass(e)
                                                          ? n.removeClass(e)
                                                          : n.addClass(e);
                                              else
                                                  (void 0 !== o &&
                                                      "boolean" != i) ||
                                                      ((e = R(this)) &&
                                                          b.set(
                                                              this,
                                                              "__className__",
                                                              e
                                                          ),
                                                      this.setAttribute &&
                                                          this.setAttribute(
                                                              "class",
                                                              (!e &&
                                                                  !1 !== o &&
                                                                  b.get(
                                                                      this,
                                                                      "__className__"
                                                                  )) ||
                                                                  ""
                                                          ));
                                          });
                                },
                                hasClass: function (e) {
                                    for (
                                        var t, n = 0, r = " " + e + " ";
                                        (t = this[n++]);

                                    )
                                        if (
                                            1 === t.nodeType &&
                                            -1 <
                                                (" " + H(R(t)) + " ").indexOf(r)
                                        )
                                            return !0;
                                    return !1;
                                },
                            });
                        function jt(e) {
                            e.stopPropagation();
                        }
                        var kt = /\r/g,
                            Et =
                                (T.fn.extend({
                                    val: function (t) {
                                        var n,
                                            e,
                                            r,
                                            o = this[0];
                                        return arguments.length
                                            ? ((r = y(t)),
                                              this.each(function (e) {
                                                  1 === this.nodeType &&
                                                      (null ==
                                                      (e = r
                                                          ? t.call(
                                                                this,
                                                                e,
                                                                T(this).val()
                                                            )
                                                          : t)
                                                          ? (e = "")
                                                          : "number" == typeof e
                                                          ? (e += "")
                                                          : Array.isArray(e) &&
                                                            (e = T.map(
                                                                e,
                                                                function (e) {
                                                                    return null ==
                                                                        e
                                                                        ? ""
                                                                        : e +
                                                                              "";
                                                                }
                                                            )),
                                                      ((n =
                                                          T.valHooks[
                                                              this.type
                                                          ] ||
                                                          T.valHooks[
                                                              this.nodeName.toLowerCase()
                                                          ]) &&
                                                          "set" in n &&
                                                          void 0 !==
                                                              n.set(
                                                                  this,
                                                                  e,
                                                                  "value"
                                                              )) ||
                                                          (this.value = e));
                                              }))
                                            : o
                                            ? (n =
                                                  T.valHooks[o.type] ||
                                                  T.valHooks[
                                                      o.nodeName.toLowerCase()
                                                  ]) &&
                                              "get" in n &&
                                              void 0 !== (e = n.get(o, "value"))
                                                ? e
                                                : "string" ==
                                                  typeof (e = o.value)
                                                ? e.replace(kt, "")
                                                : null == e
                                                ? ""
                                                : e
                                            : void 0;
                                    },
                                }),
                                T.extend({
                                    valHooks: {
                                        option: {
                                            get: function (e) {
                                                var t = T.find.attr(e, "value");
                                                return null != t
                                                    ? t
                                                    : H(T.text(e));
                                            },
                                        },
                                        select: {
                                            get: function (e) {
                                                for (
                                                    var t,
                                                        n = e.options,
                                                        r = e.selectedIndex,
                                                        o =
                                                            "select-one" ===
                                                            e.type,
                                                        i = o ? null : [],
                                                        s = o
                                                            ? r + 1
                                                            : n.length,
                                                        a =
                                                            r < 0
                                                                ? s
                                                                : o
                                                                ? r
                                                                : 0;
                                                    a < s;
                                                    a++
                                                )
                                                    if (
                                                        ((t = n[a]).selected ||
                                                            a === r) &&
                                                        !t.disabled &&
                                                        (!t.parentNode
                                                            .disabled ||
                                                            !u(
                                                                t.parentNode,
                                                                "optgroup"
                                                            ))
                                                    ) {
                                                        if (
                                                            ((t = T(t).val()),
                                                            o)
                                                        )
                                                            return t;
                                                        i.push(t);
                                                    }
                                                return i;
                                            },
                                            set: function (e, t) {
                                                for (
                                                    var n,
                                                        r,
                                                        o = e.options,
                                                        i = T.makeArray(t),
                                                        s = o.length;
                                                    s--;

                                                )
                                                    ((r = o[s]).selected =
                                                        -1 <
                                                        T.inArray(
                                                            T.valHooks.option.get(
                                                                r
                                                            ),
                                                            i
                                                        )) && (n = !0);
                                                return (
                                                    n || (e.selectedIndex = -1),
                                                    i
                                                );
                                            },
                                        },
                                    },
                                }),
                                T.each(["radio", "checkbox"], function () {
                                    (T.valHooks[this] = {
                                        set: function (e, t) {
                                            if (Array.isArray(t))
                                                return (e.checked =
                                                    -1 <
                                                    T.inArray(T(e).val(), t));
                                        },
                                    }),
                                        m.checkOn ||
                                            (T.valHooks[this].get = function (
                                                e
                                            ) {
                                                return null ===
                                                    e.getAttribute("value")
                                                    ? "on"
                                                    : e.value;
                                            });
                                }),
                                (m.focusin = "onfocusin" in w),
                                /^(?:focusinfocus|focusoutblur)$/),
                            St =
                                (T.extend(T.event, {
                                    trigger: function (e, t, n, r) {
                                        var o,
                                            i,
                                            s,
                                            a,
                                            u,
                                            l,
                                            c,
                                            f = [n || C],
                                            p = _.call(e, "type") ? e.type : e,
                                            h = _.call(e, "namespace")
                                                ? e.namespace.split(".")
                                                : [],
                                            d = (c = i = n = n || C);
                                        if (
                                            3 !== n.nodeType &&
                                            8 !== n.nodeType &&
                                            !Et.test(p + T.event.triggered) &&
                                            (-1 < p.indexOf(".") &&
                                                ((p = (h =
                                                    p.split(".")).shift()),
                                                h.sort()),
                                            (a =
                                                p.indexOf(":") < 0 && "on" + p),
                                            ((e = e[T.expando]
                                                ? e
                                                : new T.Event(
                                                      p,
                                                      "object" == typeof e && e
                                                  )).isTrigger = r ? 2 : 3),
                                            (e.namespace = h.join(".")),
                                            (e.rnamespace = e.namespace
                                                ? new RegExp(
                                                      "(^|\\.)" +
                                                          h.join(
                                                              "\\.(?:.*\\.|)"
                                                          ) +
                                                          "(\\.|$)"
                                                  )
                                                : null),
                                            (e.result = void 0),
                                            e.target || (e.target = n),
                                            (t =
                                                null == t
                                                    ? [e]
                                                    : T.makeArray(t, [e])),
                                            (l = T.event.special[p] || {}),
                                            r ||
                                                !l.trigger ||
                                                !1 !== l.trigger.apply(n, t))
                                        ) {
                                            if (!r && !l.noBubble && !g(n)) {
                                                for (
                                                    s = l.delegateType || p,
                                                        Et.test(s + p) ||
                                                            (d = d.parentNode);
                                                    d;
                                                    d = d.parentNode
                                                )
                                                    f.push(d), (i = d);
                                                i === (n.ownerDocument || C) &&
                                                    f.push(
                                                        i.defaultView ||
                                                            i.parentWindow ||
                                                            w
                                                    );
                                            }
                                            for (
                                                o = 0;
                                                (d = f[o++]) &&
                                                !e.isPropagationStopped();

                                            )
                                                (c = d),
                                                    (e.type =
                                                        1 < o
                                                            ? s
                                                            : l.bindType || p),
                                                    (u =
                                                        (b.get(d, "events") ||
                                                            Object.create(
                                                                null
                                                            ))[e.type] &&
                                                        b.get(d, "handle")) &&
                                                        u.apply(d, t),
                                                    (u = a && d[a]) &&
                                                        u.apply &&
                                                        v(d) &&
                                                        ((e.result = u.apply(
                                                            d,
                                                            t
                                                        )),
                                                        !1 === e.result &&
                                                            e.preventDefault());
                                            return (
                                                (e.type = p),
                                                r ||
                                                    e.isDefaultPrevented() ||
                                                    (l._default &&
                                                        !1 !==
                                                            l._default.apply(
                                                                f.pop(),
                                                                t
                                                            )) ||
                                                    !v(n) ||
                                                    (a &&
                                                        y(n[p]) &&
                                                        !g(n) &&
                                                        ((i = n[a]) &&
                                                            (n[a] = null),
                                                        (T.event.triggered = p),
                                                        e.isPropagationStopped() &&
                                                            c.addEventListener(
                                                                p,
                                                                jt
                                                            ),
                                                        n[p](),
                                                        e.isPropagationStopped() &&
                                                            c.removeEventListener(
                                                                p,
                                                                jt
                                                            ),
                                                        (T.event.triggered =
                                                            void 0),
                                                        i && (n[a] = i))),
                                                e.result
                                            );
                                        }
                                    },
                                    simulate: function (e, t, n) {
                                        n = T.extend(new T.Event(), n, {
                                            type: e,
                                            isSimulated: !0,
                                        });
                                        T.event.trigger(n, null, t);
                                    },
                                }),
                                T.fn.extend({
                                    trigger: function (e, t) {
                                        return this.each(function () {
                                            T.event.trigger(e, t, this);
                                        });
                                    },
                                    triggerHandler: function (e, t) {
                                        var n = this[0];
                                        if (n)
                                            return T.event.trigger(e, t, n, !0);
                                    },
                                }),
                                m.focusin ||
                                    T.each(
                                        { focus: "focusin", blur: "focusout" },
                                        function (n, r) {
                                            function o(e) {
                                                T.event.simulate(
                                                    r,
                                                    e.target,
                                                    T.event.fix(e)
                                                );
                                            }
                                            T.event.special[r] = {
                                                setup: function () {
                                                    var e =
                                                            this
                                                                .ownerDocument ||
                                                            this.document ||
                                                            this,
                                                        t = b.access(e, r);
                                                    t ||
                                                        e.addEventListener(
                                                            n,
                                                            o,
                                                            !0
                                                        ),
                                                        b.access(
                                                            e,
                                                            r,
                                                            (t || 0) + 1
                                                        );
                                                },
                                                teardown: function () {
                                                    var e =
                                                            this
                                                                .ownerDocument ||
                                                            this.document ||
                                                            this,
                                                        t = b.access(e, r) - 1;
                                                    t
                                                        ? b.access(e, r, t)
                                                        : (e.removeEventListener(
                                                              n,
                                                              o,
                                                              !0
                                                          ),
                                                          b.remove(e, r));
                                                },
                                            };
                                        }
                                    ),
                                w.location),
                            Nt = { guid: Date.now() },
                            Dt = /\?/,
                            qt =
                                ((T.parseXML = function (e) {
                                    var t;
                                    if (!e || "string" != typeof e) return null;
                                    try {
                                        t = new w.DOMParser().parseFromString(
                                            e,
                                            "text/xml"
                                        );
                                    } catch (e) {
                                        t = void 0;
                                    }
                                    return (
                                        (t &&
                                            !t.getElementsByTagName(
                                                "parsererror"
                                            ).length) ||
                                            T.error("Invalid XML: " + e),
                                        t
                                    );
                                }),
                                /\[\]$/),
                            Ot = /\r?\n/g,
                            Lt = /^(?:submit|button|image|reset|file)$/i,
                            Ht = /^(?:input|select|textarea|keygen)/i;
                        (T.param = function (e, t) {
                            function n(e, t) {
                                (t = y(t) ? t() : t),
                                    (o[o.length] =
                                        encodeURIComponent(e) +
                                        "=" +
                                        encodeURIComponent(null == t ? "" : t));
                            }
                            var r,
                                o = [];
                            if (null == e) return "";
                            if (
                                Array.isArray(e) ||
                                (e.jquery && !T.isPlainObject(e))
                            )
                                T.each(e, function () {
                                    n(this.name, this.value);
                                });
                            else
                                for (r in e)
                                    !(function n(r, e, o, i) {
                                        if (Array.isArray(e))
                                            T.each(e, function (e, t) {
                                                o || qt.test(r)
                                                    ? i(r, t)
                                                    : n(
                                                          r +
                                                              "[" +
                                                              ("object" ==
                                                                  typeof t &&
                                                              null != t
                                                                  ? e
                                                                  : "") +
                                                              "]",
                                                          t,
                                                          o,
                                                          i
                                                      );
                                            });
                                        else if (o || "object" !== d(e))
                                            i(r, e);
                                        else
                                            for (var t in e)
                                                n(
                                                    r + "[" + t + "]",
                                                    e[t],
                                                    o,
                                                    i
                                                );
                                    })(r, e[r], t, n);
                            return o.join("&");
                        }),
                            T.fn.extend({
                                serialize: function () {
                                    return T.param(this.serializeArray());
                                },
                                serializeArray: function () {
                                    return this.map(function () {
                                        var e = T.prop(this, "elements");
                                        return e ? T.makeArray(e) : this;
                                    })
                                        .filter(function () {
                                            var e = this.type;
                                            return (
                                                this.name &&
                                                !T(this).is(":disabled") &&
                                                Ht.test(this.nodeName) &&
                                                !Lt.test(e) &&
                                                (this.checked || !we.test(e))
                                            );
                                        })
                                        .map(function (e, t) {
                                            var n = T(this).val();
                                            return null == n
                                                ? null
                                                : Array.isArray(n)
                                                ? T.map(n, function (e) {
                                                      return {
                                                          name: t.name,
                                                          value: e.replace(
                                                              Ot,
                                                              "\r\n"
                                                          ),
                                                      };
                                                  })
                                                : {
                                                      name: t.name,
                                                      value: n.replace(
                                                          Ot,
                                                          "\r\n"
                                                      ),
                                                  };
                                        })
                                        .get();
                                },
                            });
                        var Rt = /%20/g,
                            It = /#.*$/,
                            Pt = /([?&])_=[^&]*/,
                            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            Ft = /^(?:GET|HEAD)$/,
                            $t = /^\/\//,
                            Wt = {},
                            Bt = {},
                            _t = "*/".concat("*"),
                            Ut = C.createElement("a");
                        function zt(i) {
                            return function (e, t) {
                                "string" != typeof e && ((t = e), (e = "*"));
                                var n,
                                    r = 0,
                                    o = e.toLowerCase().match(A) || [];
                                if (y(t))
                                    for (; (n = o[r++]); )
                                        "+" === n[0]
                                            ? ((n = n.slice(1) || "*"),
                                              (i[n] = i[n] || []).unshift(t))
                                            : (i[n] = i[n] || []).push(t);
                            };
                        }
                        function Xt(t, r, o, i) {
                            var s = {},
                                a = t === Bt;
                            function u(e) {
                                var n;
                                return (
                                    (s[e] = !0),
                                    T.each(t[e] || [], function (e, t) {
                                        t = t(r, o, i);
                                        return "string" != typeof t || a || s[t]
                                            ? a
                                                ? !(n = t)
                                                : void 0
                                            : (r.dataTypes.unshift(t),
                                              u(t),
                                              !1);
                                    }),
                                    n
                                );
                            }
                            return u(r.dataTypes[0]) || (!s["*"] && u("*"));
                        }
                        function Vt(e, t) {
                            var n,
                                r,
                                o = T.ajaxSettings.flatOptions || {};
                            for (n in t)
                                void 0 !== t[n] &&
                                    ((o[n] ? e : (r = r || {}))[n] = t[n]);
                            return r && T.extend(!0, e, r), e;
                        }
                        (Ut.href = St.href),
                            T.extend({
                                active: 0,
                                lastModified: {},
                                etag: {},
                                ajaxSettings: {
                                    url: St.href,
                                    type: "GET",
                                    isLocal:
                                        /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                            St.protocol
                                        ),
                                    global: !0,
                                    processData: !0,
                                    async: !0,
                                    contentType:
                                        "application/x-www-form-urlencoded; charset=UTF-8",
                                    accepts: {
                                        "*": _t,
                                        text: "text/plain",
                                        html: "text/html",
                                        xml: "application/xml, text/xml",
                                        json: "application/json, text/javascript",
                                    },
                                    contents: {
                                        xml: /\bxml\b/,
                                        html: /\bhtml/,
                                        json: /\bjson\b/,
                                    },
                                    responseFields: {
                                        xml: "responseXML",
                                        text: "responseText",
                                        json: "responseJSON",
                                    },
                                    converters: {
                                        "* text": String,
                                        "text html": !0,
                                        "text json": JSON.parse,
                                        "text xml": T.parseXML,
                                    },
                                    flatOptions: { url: !0, context: !0 },
                                },
                                ajaxSetup: function (e, t) {
                                    return t
                                        ? Vt(Vt(e, T.ajaxSettings), t)
                                        : Vt(T.ajaxSettings, e);
                                },
                                ajaxPrefilter: zt(Wt),
                                ajaxTransport: zt(Bt),
                                ajax: function (e, t) {
                                    "object" == typeof e &&
                                        ((t = e), (e = void 0));
                                    var u,
                                        l,
                                        c,
                                        n,
                                        f,
                                        p,
                                        h,
                                        r,
                                        d = T.ajaxSetup({}, (t = t || {})),
                                        g = d.context || d,
                                        m =
                                            d.context &&
                                            (g.nodeType || g.jquery)
                                                ? T(g)
                                                : T.event,
                                        v = T.Deferred(),
                                        y = T.Callbacks("once memory"),
                                        x = d.statusCode || {},
                                        o = {},
                                        i = {},
                                        s = "canceled",
                                        b = {
                                            readyState: 0,
                                            getResponseHeader: function (e) {
                                                var t;
                                                if (p) {
                                                    if (!n)
                                                        for (
                                                            n = {};
                                                            (t = Mt.exec(c));

                                                        )
                                                            n[
                                                                t[1].toLowerCase() +
                                                                    " "
                                                            ] = (
                                                                n[
                                                                    t[1].toLowerCase() +
                                                                        " "
                                                                ] || []
                                                            ).concat(t[2]);
                                                    t =
                                                        n[
                                                            e.toLowerCase() +
                                                                " "
                                                        ];
                                                }
                                                return null == t
                                                    ? null
                                                    : t.join(", ");
                                            },
                                            getAllResponseHeaders: function () {
                                                return p ? c : null;
                                            },
                                            setRequestHeader: function (e, t) {
                                                return (
                                                    null == p &&
                                                        ((e = i[
                                                            e.toLowerCase()
                                                        ] =
                                                            i[
                                                                e.toLowerCase()
                                                            ] || e),
                                                        (o[e] = t)),
                                                    this
                                                );
                                            },
                                            overrideMimeType: function (e) {
                                                return (
                                                    null == p &&
                                                        (d.mimeType = e),
                                                    this
                                                );
                                            },
                                            statusCode: function (e) {
                                                if (e)
                                                    if (p)
                                                        b.always(e[b.status]);
                                                    else
                                                        for (var t in e)
                                                            x[t] = [x[t], e[t]];
                                                return this;
                                            },
                                            abort: function (e) {
                                                e = e || s;
                                                return (
                                                    u && u.abort(e),
                                                    a(0, e),
                                                    this
                                                );
                                            },
                                        };
                                    if (
                                        (v.promise(b),
                                        (d.url = (
                                            (e || d.url || St.href) + ""
                                        ).replace($t, St.protocol + "//")),
                                        (d.type =
                                            t.method ||
                                            t.type ||
                                            d.method ||
                                            d.type),
                                        (d.dataTypes = (d.dataType || "*")
                                            .toLowerCase()
                                            .match(A) || [""]),
                                        null == d.crossDomain)
                                    ) {
                                        e = C.createElement("a");
                                        try {
                                            (e.href = d.url),
                                                (e.href = e.href),
                                                (d.crossDomain =
                                                    Ut.protocol +
                                                        "//" +
                                                        Ut.host !=
                                                    e.protocol + "//" + e.host);
                                        } catch (e) {
                                            d.crossDomain = !0;
                                        }
                                    }
                                    if (
                                        (d.data &&
                                            d.processData &&
                                            "string" != typeof d.data &&
                                            (d.data = T.param(
                                                d.data,
                                                d.traditional
                                            )),
                                        Xt(Wt, d, t, b),
                                        !p)
                                    ) {
                                        for (r in ((h = T.event && d.global) &&
                                            0 == T.active++ &&
                                            T.event.trigger("ajaxStart"),
                                        (d.type = d.type.toUpperCase()),
                                        (d.hasContent = !Ft.test(d.type)),
                                        (l = d.url.replace(It, "")),
                                        d.hasContent
                                            ? d.data &&
                                              d.processData &&
                                              0 ===
                                                  (d.contentType || "").indexOf(
                                                      "application/x-www-form-urlencoded"
                                                  ) &&
                                              (d.data = d.data.replace(Rt, "+"))
                                            : ((e = d.url.slice(l.length)),
                                              d.data &&
                                                  (d.processData ||
                                                      "string" ==
                                                          typeof d.data) &&
                                                  ((l +=
                                                      (Dt.test(l) ? "&" : "?") +
                                                      d.data),
                                                  delete d.data),
                                              !1 === d.cache &&
                                                  ((l = l.replace(Pt, "$1")),
                                                  (e =
                                                      (Dt.test(l) ? "&" : "?") +
                                                      "_=" +
                                                      Nt.guid++ +
                                                      e)),
                                              (d.url = l + e)),
                                        d.ifModified &&
                                            (T.lastModified[l] &&
                                                b.setRequestHeader(
                                                    "If-Modified-Since",
                                                    T.lastModified[l]
                                                ),
                                            T.etag[l] &&
                                                b.setRequestHeader(
                                                    "If-None-Match",
                                                    T.etag[l]
                                                )),
                                        ((d.data &&
                                            d.hasContent &&
                                            !1 !== d.contentType) ||
                                            t.contentType) &&
                                            b.setRequestHeader(
                                                "Content-Type",
                                                d.contentType
                                            ),
                                        b.setRequestHeader(
                                            "Accept",
                                            d.dataTypes[0] &&
                                                d.accepts[d.dataTypes[0]]
                                                ? d.accepts[d.dataTypes[0]] +
                                                      ("*" !== d.dataTypes[0]
                                                          ? ", " +
                                                            _t +
                                                            "; q=0.01"
                                                          : "")
                                                : d.accepts["*"]
                                        ),
                                        d.headers))
                                            b.setRequestHeader(r, d.headers[r]);
                                        if (
                                            d.beforeSend &&
                                            (!1 ===
                                                d.beforeSend.call(g, b, d) ||
                                                p)
                                        )
                                            return b.abort();
                                        if (
                                            ((s = "abort"),
                                            y.add(d.complete),
                                            b.done(d.success),
                                            b.fail(d.error),
                                            (u = Xt(Bt, d, t, b)))
                                        ) {
                                            if (
                                                ((b.readyState = 1),
                                                h &&
                                                    m.trigger("ajaxSend", [
                                                        b,
                                                        d,
                                                    ]),
                                                p)
                                            )
                                                return b;
                                            d.async &&
                                                0 < d.timeout &&
                                                (f = w.setTimeout(function () {
                                                    b.abort("timeout");
                                                }, d.timeout));
                                            try {
                                                (p = !1), u.send(o, a);
                                            } catch (e) {
                                                if (p) throw e;
                                                a(-1, e);
                                            }
                                        } else a(-1, "No Transport");
                                    }
                                    return b;
                                    function a(e, t, n, r) {
                                        var o,
                                            i,
                                            s,
                                            a = t;
                                        p ||
                                            ((p = !0),
                                            f && w.clearTimeout(f),
                                            (u = void 0),
                                            (c = r || ""),
                                            (b.readyState = 0 < e ? 4 : 0),
                                            (r =
                                                (200 <= e && e < 300) ||
                                                304 === e),
                                            n &&
                                                (s = (function (e, t, n) {
                                                    for (
                                                        var r,
                                                            o,
                                                            i,
                                                            s,
                                                            a = e.contents,
                                                            u = e.dataTypes;
                                                        "*" === u[0];

                                                    )
                                                        u.shift(),
                                                            void 0 === r &&
                                                                (r =
                                                                    e.mimeType ||
                                                                    t.getResponseHeader(
                                                                        "Content-Type"
                                                                    ));
                                                    if (r)
                                                        for (o in a)
                                                            if (
                                                                a[o] &&
                                                                a[o].test(r)
                                                            ) {
                                                                u.unshift(o);
                                                                break;
                                                            }
                                                    if (u[0] in n) i = u[0];
                                                    else {
                                                        for (o in n) {
                                                            if (
                                                                !u[0] ||
                                                                e.converters[
                                                                    o +
                                                                        " " +
                                                                        u[0]
                                                                ]
                                                            ) {
                                                                i = o;
                                                                break;
                                                            }
                                                            s = s || o;
                                                        }
                                                        i = i || s;
                                                    }
                                                    if (i)
                                                        return (
                                                            i !== u[0] &&
                                                                u.unshift(i),
                                                            n[i]
                                                        );
                                                })(d, b, n)),
                                            !r &&
                                                -1 <
                                                    T.inArray(
                                                        "script",
                                                        d.dataTypes
                                                    ) &&
                                                (d.converters["text script"] =
                                                    function () {}),
                                            (s = (function (e, t, n, r) {
                                                var o,
                                                    i,
                                                    s,
                                                    a,
                                                    u,
                                                    l = {},
                                                    c = e.dataTypes.slice();
                                                if (c[1])
                                                    for (s in e.converters)
                                                        l[s.toLowerCase()] =
                                                            e.converters[s];
                                                for (i = c.shift(); i; )
                                                    if (
                                                        (e.responseFields[i] &&
                                                            (n[
                                                                e.responseFields[
                                                                    i
                                                                ]
                                                            ] = t),
                                                        !u &&
                                                            r &&
                                                            e.dataFilter &&
                                                            (t = e.dataFilter(
                                                                t,
                                                                e.dataType
                                                            )),
                                                        (u = i),
                                                        (i = c.shift()))
                                                    )
                                                        if ("*" === i) i = u;
                                                        else if (
                                                            "*" !== u &&
                                                            u !== i
                                                        ) {
                                                            if (
                                                                !(s =
                                                                    l[
                                                                        u +
                                                                            " " +
                                                                            i
                                                                    ] ||
                                                                    l["* " + i])
                                                            )
                                                                for (o in l)
                                                                    if (
                                                                        (a =
                                                                            o.split(
                                                                                " "
                                                                            ))[1] ===
                                                                            i &&
                                                                        (s =
                                                                            l[
                                                                                u +
                                                                                    " " +
                                                                                    a[0]
                                                                            ] ||
                                                                            l[
                                                                                "* " +
                                                                                    a[0]
                                                                            ])
                                                                    ) {
                                                                        !0 === s
                                                                            ? (s =
                                                                                  l[
                                                                                      o
                                                                                  ])
                                                                            : !0 !==
                                                                                  l[
                                                                                      o
                                                                                  ] &&
                                                                              ((i =
                                                                                  a[0]),
                                                                              c.unshift(
                                                                                  a[1]
                                                                              ));
                                                                        break;
                                                                    }
                                                            if (!0 !== s)
                                                                if (
                                                                    s &&
                                                                    e.throws
                                                                )
                                                                    t = s(t);
                                                                else
                                                                    try {
                                                                        t =
                                                                            s(
                                                                                t
                                                                            );
                                                                    } catch (e) {
                                                                        return {
                                                                            state: "parsererror",
                                                                            error: s
                                                                                ? e
                                                                                : "No conversion from " +
                                                                                  u +
                                                                                  " to " +
                                                                                  i,
                                                                        };
                                                                    }
                                                        }
                                                return {
                                                    state: "success",
                                                    data: t,
                                                };
                                            })(d, s, b, r)),
                                            r
                                                ? (d.ifModified &&
                                                      ((n =
                                                          b.getResponseHeader(
                                                              "Last-Modified"
                                                          )) &&
                                                          (T.lastModified[l] =
                                                              n),
                                                      (n =
                                                          b.getResponseHeader(
                                                              "etag"
                                                          )) &&
                                                          (T.etag[l] = n)),
                                                  204 === e || "HEAD" === d.type
                                                      ? (a = "nocontent")
                                                      : 304 === e
                                                      ? (a = "notmodified")
                                                      : ((a = s.state),
                                                        (o = s.data),
                                                        (r = !(i = s.error))))
                                                : ((i = a),
                                                  (!e && a) ||
                                                      ((a = "error"),
                                                      e < 0 && (e = 0))),
                                            (b.status = e),
                                            (b.statusText = (t || a) + ""),
                                            r
                                                ? v.resolveWith(g, [o, a, b])
                                                : v.rejectWith(g, [b, a, i]),
                                            b.statusCode(x),
                                            (x = void 0),
                                            h &&
                                                m.trigger(
                                                    r
                                                        ? "ajaxSuccess"
                                                        : "ajaxError",
                                                    [b, d, r ? o : i]
                                                ),
                                            y.fireWith(g, [b, a]),
                                            h &&
                                                (m.trigger("ajaxComplete", [
                                                    b,
                                                    d,
                                                ]),
                                                --T.active ||
                                                    T.event.trigger(
                                                        "ajaxStop"
                                                    )));
                                    }
                                },
                                getJSON: function (e, t, n) {
                                    return T.get(e, t, n, "json");
                                },
                                getScript: function (e, t) {
                                    return T.get(e, void 0, t, "script");
                                },
                            }),
                            T.each(["get", "post"], function (e, o) {
                                T[o] = function (e, t, n, r) {
                                    return (
                                        y(t) &&
                                            ((r = r || n),
                                            (n = t),
                                            (t = void 0)),
                                        T.ajax(
                                            T.extend(
                                                {
                                                    url: e,
                                                    type: o,
                                                    dataType: r,
                                                    data: t,
                                                    success: n,
                                                },
                                                T.isPlainObject(e) && e
                                            )
                                        )
                                    );
                                };
                            }),
                            T.ajaxPrefilter(function (e) {
                                for (var t in e.headers)
                                    "content-type" === t.toLowerCase() &&
                                        (e.contentType = e.headers[t] || "");
                            }),
                            (T._evalUrl = function (e, t, n) {
                                return T.ajax({
                                    url: e,
                                    type: "GET",
                                    dataType: "script",
                                    cache: !0,
                                    async: !1,
                                    global: !1,
                                    converters: {
                                        "text script": function () {},
                                    },
                                    dataFilter: function (e) {
                                        T.globalEval(e, t, n);
                                    },
                                });
                            }),
                            T.fn.extend({
                                wrapAll: function (e) {
                                    return (
                                        this[0] &&
                                            (y(e) && (e = e.call(this[0])),
                                            (e = T(e, this[0].ownerDocument)
                                                .eq(0)
                                                .clone(!0)),
                                            this[0].parentNode &&
                                                e.insertBefore(this[0]),
                                            e
                                                .map(function () {
                                                    for (
                                                        var e = this;
                                                        e.firstElementChild;

                                                    )
                                                        e = e.firstElementChild;
                                                    return e;
                                                })
                                                .append(this)),
                                        this
                                    );
                                },
                                wrapInner: function (n) {
                                    return y(n)
                                        ? this.each(function (e) {
                                              T(this).wrapInner(
                                                  n.call(this, e)
                                              );
                                          })
                                        : this.each(function () {
                                              var e = T(this),
                                                  t = e.contents();
                                              t.length
                                                  ? t.wrapAll(n)
                                                  : e.append(n);
                                          });
                                },
                                wrap: function (t) {
                                    var n = y(t);
                                    return this.each(function (e) {
                                        T(this).wrapAll(
                                            n ? t.call(this, e) : t
                                        );
                                    });
                                },
                                unwrap: function (e) {
                                    return (
                                        this.parent(e)
                                            .not("body")
                                            .each(function () {
                                                T(this).replaceWith(
                                                    this.childNodes
                                                );
                                            }),
                                        this
                                    );
                                },
                            }),
                            (T.expr.pseudos.hidden = function (e) {
                                return !T.expr.pseudos.visible(e);
                            }),
                            (T.expr.pseudos.visible = function (e) {
                                return !!(
                                    e.offsetWidth ||
                                    e.offsetHeight ||
                                    e.getClientRects().length
                                );
                            }),
                            (T.ajaxSettings.xhr = function () {
                                try {
                                    return new w.XMLHttpRequest();
                                } catch (e) {}
                            });
                        var Gt = { 0: 200, 1223: 204 },
                            Yt = T.ajaxSettings.xhr(),
                            Jt =
                                ((m.cors = !!Yt && "withCredentials" in Yt),
                                (m.ajax = Yt = !!Yt),
                                T.ajaxTransport(function (o) {
                                    var i, s;
                                    if (m.cors || (Yt && !o.crossDomain))
                                        return {
                                            send: function (e, t) {
                                                var n,
                                                    r = o.xhr();
                                                if (
                                                    (r.open(
                                                        o.type,
                                                        o.url,
                                                        o.async,
                                                        o.username,
                                                        o.password
                                                    ),
                                                    o.xhrFields)
                                                )
                                                    for (n in o.xhrFields)
                                                        r[n] = o.xhrFields[n];
                                                for (n in (o.mimeType &&
                                                    r.overrideMimeType &&
                                                    r.overrideMimeType(
                                                        o.mimeType
                                                    ),
                                                o.crossDomain ||
                                                    e["X-Requested-With"] ||
                                                    (e["X-Requested-With"] =
                                                        "XMLHttpRequest"),
                                                e))
                                                    r.setRequestHeader(n, e[n]);
                                                (i = function (e) {
                                                    return function () {
                                                        i &&
                                                            ((i =
                                                                s =
                                                                r.onload =
                                                                r.onerror =
                                                                r.onabort =
                                                                r.ontimeout =
                                                                r.onreadystatechange =
                                                                    null),
                                                            "abort" === e
                                                                ? r.abort()
                                                                : "error" === e
                                                                ? "number" !=
                                                                  typeof r.status
                                                                    ? t(
                                                                          0,
                                                                          "error"
                                                                      )
                                                                    : t(
                                                                          r.status,
                                                                          r.statusText
                                                                      )
                                                                : t(
                                                                      Gt[
                                                                          r
                                                                              .status
                                                                      ] ||
                                                                          r.status,
                                                                      r.statusText,
                                                                      "text" !==
                                                                          (r.responseType ||
                                                                              "text") ||
                                                                          "string" !=
                                                                              typeof r.responseText
                                                                          ? {
                                                                                binary: r.response,
                                                                            }
                                                                          : {
                                                                                text: r.responseText,
                                                                            },
                                                                      r.getAllResponseHeaders()
                                                                  ));
                                                    };
                                                }),
                                                    (r.onload = i()),
                                                    (s =
                                                        r.onerror =
                                                        r.ontimeout =
                                                            i("error")),
                                                    void 0 !== r.onabort
                                                        ? (r.onabort = s)
                                                        : (r.onreadystatechange =
                                                              function () {
                                                                  4 ===
                                                                      r.readyState &&
                                                                      w.setTimeout(
                                                                          function () {
                                                                              i &&
                                                                                  s();
                                                                          }
                                                                      );
                                                              }),
                                                    (i = i("abort"));
                                                try {
                                                    r.send(
                                                        (o.hasContent &&
                                                            o.data) ||
                                                            null
                                                    );
                                                } catch (e) {
                                                    if (i) throw e;
                                                }
                                            },
                                            abort: function () {
                                                i && i();
                                            },
                                        };
                                }),
                                T.ajaxPrefilter(function (e) {
                                    e.crossDomain && (e.contents.script = !1);
                                }),
                                T.ajaxSetup({
                                    accepts: {
                                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                                    },
                                    contents: {
                                        script: /\b(?:java|ecma)script\b/,
                                    },
                                    converters: {
                                        "text script": function (e) {
                                            return T.globalEval(e), e;
                                        },
                                    },
                                }),
                                T.ajaxPrefilter("script", function (e) {
                                    void 0 === e.cache && (e.cache = !1),
                                        e.crossDomain && (e.type = "GET");
                                }),
                                T.ajaxTransport("script", function (n) {
                                    var r, o;
                                    if (n.crossDomain || n.scriptAttrs)
                                        return {
                                            send: function (e, t) {
                                                (r = T("<script>")
                                                    .attr(n.scriptAttrs || {})
                                                    .prop({
                                                        charset:
                                                            n.scriptCharset,
                                                        src: n.url,
                                                    })
                                                    .on(
                                                        "load error",
                                                        (o = function (e) {
                                                            r.remove(),
                                                                (o = null),
                                                                e &&
                                                                    t(
                                                                        "error" ===
                                                                            e.type
                                                                            ? 404
                                                                            : 200,
                                                                        e.type
                                                                    );
                                                        })
                                                    )),
                                                    C.head.appendChild(r[0]);
                                            },
                                            abort: function () {
                                                o && o();
                                            },
                                        };
                                }),
                                []),
                            Qt = /(=)\?(?=&|$)|\?\?/,
                            Kt =
                                (T.ajaxSetup({
                                    jsonp: "callback",
                                    jsonpCallback: function () {
                                        var e =
                                            Jt.pop() ||
                                            T.expando + "_" + Nt.guid++;
                                        return (this[e] = !0), e;
                                    },
                                }),
                                T.ajaxPrefilter(
                                    "json jsonp",
                                    function (e, t, n) {
                                        var r,
                                            o,
                                            i,
                                            s =
                                                !1 !== e.jsonp &&
                                                (Qt.test(e.url)
                                                    ? "url"
                                                    : "string" ==
                                                          typeof e.data &&
                                                      0 ===
                                                          (
                                                              e.contentType ||
                                                              ""
                                                          ).indexOf(
                                                              "application/x-www-form-urlencoded"
                                                          ) &&
                                                      Qt.test(e.data) &&
                                                      "data");
                                        if (s || "jsonp" === e.dataTypes[0])
                                            return (
                                                (r = e.jsonpCallback =
                                                    y(e.jsonpCallback)
                                                        ? e.jsonpCallback()
                                                        : e.jsonpCallback),
                                                s
                                                    ? (e[s] = e[s].replace(
                                                          Qt,
                                                          "$1" + r
                                                      ))
                                                    : !1 !== e.jsonp &&
                                                      (e.url +=
                                                          (Dt.test(e.url)
                                                              ? "&"
                                                              : "?") +
                                                          e.jsonp +
                                                          "=" +
                                                          r),
                                                (e.converters["script json"] =
                                                    function () {
                                                        return (
                                                            i ||
                                                                T.error(
                                                                    r +
                                                                        " was not called"
                                                                ),
                                                            i[0]
                                                        );
                                                    }),
                                                (e.dataTypes[0] = "json"),
                                                (o = w[r]),
                                                (w[r] = function () {
                                                    i = arguments;
                                                }),
                                                n.always(function () {
                                                    void 0 === o
                                                        ? T(w).removeProp(r)
                                                        : (w[r] = o),
                                                        e[r] &&
                                                            ((e.jsonpCallback =
                                                                t.jsonpCallback),
                                                            Jt.push(r)),
                                                        i && y(o) && o(i[0]),
                                                        (i = o = void 0);
                                                }),
                                                "script"
                                            );
                                    }
                                ),
                                (m.createHTMLDocument =
                                    (((e =
                                        C.implementation.createHTMLDocument(
                                            ""
                                        ).body).innerHTML =
                                        "<form></form><form></form>"),
                                    2 === e.childNodes.length)),
                                (T.parseHTML = function (e, t, n) {
                                    var r;
                                    return "string" != typeof e
                                        ? []
                                        : ("boolean" == typeof t &&
                                              ((n = t), (t = !1)),
                                          t ||
                                              (m.createHTMLDocument
                                                  ? (((r = (t =
                                                        C.implementation.createHTMLDocument(
                                                            ""
                                                        )).createElement(
                                                        "base"
                                                    )).href = C.location.href),
                                                    t.head.appendChild(r))
                                                  : (t = C)),
                                          (r = !n && []),
                                          (n = Q.exec(e))
                                              ? [t.createElement(n[1])]
                                              : ((n = ke([e], t, r)),
                                                r && r.length && T(r).remove(),
                                                T.merge([], n.childNodes)));
                                }),
                                (T.fn.load = function (e, t, n) {
                                    var r,
                                        o,
                                        i,
                                        s = this,
                                        a = e.indexOf(" ");
                                    return (
                                        -1 < a &&
                                            ((r = H(e.slice(a))),
                                            (e = e.slice(0, a))),
                                        y(t)
                                            ? ((n = t), (t = void 0))
                                            : t &&
                                              "object" == typeof t &&
                                              (o = "POST"),
                                        0 < s.length &&
                                            T.ajax({
                                                url: e,
                                                type: o || "GET",
                                                dataType: "html",
                                                data: t,
                                            })
                                                .done(function (e) {
                                                    (i = arguments),
                                                        s.html(
                                                            r
                                                                ? T("<div>")
                                                                      .append(
                                                                          T.parseHTML(
                                                                              e
                                                                          )
                                                                      )
                                                                      .find(r)
                                                                : e
                                                        );
                                                })
                                                .always(
                                                    n &&
                                                        function (e, t) {
                                                            s.each(function () {
                                                                n.apply(
                                                                    this,
                                                                    i || [
                                                                        e.responseText,
                                                                        t,
                                                                        e,
                                                                    ]
                                                                );
                                                            });
                                                        }
                                                ),
                                        this
                                    );
                                }),
                                (T.expr.pseudos.animated = function (t) {
                                    return T.grep(T.timers, function (e) {
                                        return t === e.elem;
                                    }).length;
                                }),
                                (T.offset = {
                                    setOffset: function (e, t, n) {
                                        var r,
                                            o,
                                            i,
                                            s,
                                            a = T.css(e, "position"),
                                            u = T(e),
                                            l = {};
                                        "static" === a &&
                                            (e.style.position = "relative"),
                                            (i = u.offset()),
                                            (r = T.css(e, "top")),
                                            (s = T.css(e, "left")),
                                            (a =
                                                ("absolute" === a ||
                                                    "fixed" === a) &&
                                                -1 < (r + s).indexOf("auto")
                                                    ? ((o = (a = u.position())
                                                          .top),
                                                      a.left)
                                                    : ((o = parseFloat(r) || 0),
                                                      parseFloat(s) || 0)),
                                            null !=
                                                (t = y(t)
                                                    ? t.call(
                                                          e,
                                                          n,
                                                          T.extend({}, i)
                                                      )
                                                    : t).top &&
                                                (l.top = t.top - i.top + o),
                                            null != t.left &&
                                                (l.left = t.left - i.left + a),
                                            "using" in t
                                                ? t.using.call(e, l)
                                                : ("number" == typeof l.top &&
                                                      (l.top += "px"),
                                                  "number" == typeof l.left &&
                                                      (l.left += "px"),
                                                  u.css(l));
                                    },
                                }),
                                T.fn.extend({
                                    offset: function (t) {
                                        var e, n;
                                        return arguments.length
                                            ? void 0 === t
                                                ? this
                                                : this.each(function (e) {
                                                      T.offset.setOffset(
                                                          this,
                                                          t,
                                                          e
                                                      );
                                                  })
                                            : (n = this[0])
                                            ? n.getClientRects().length
                                                ? ((e =
                                                      n.getBoundingClientRect()),
                                                  (n =
                                                      n.ownerDocument
                                                          .defaultView),
                                                  {
                                                      top:
                                                          e.top + n.pageYOffset,
                                                      left:
                                                          e.left +
                                                          n.pageXOffset,
                                                  })
                                                : { top: 0, left: 0 }
                                            : void 0;
                                    },
                                    position: function () {
                                        if (this[0]) {
                                            var e,
                                                t,
                                                n,
                                                r = this[0],
                                                o = { top: 0, left: 0 };
                                            if (
                                                "fixed" === T.css(r, "position")
                                            )
                                                t = r.getBoundingClientRect();
                                            else {
                                                for (
                                                    t = this.offset(),
                                                        n = r.ownerDocument,
                                                        e =
                                                            r.offsetParent ||
                                                            n.documentElement;
                                                    e &&
                                                    (e === n.body ||
                                                        e ===
                                                            n.documentElement) &&
                                                    "static" ===
                                                        T.css(e, "position");

                                                )
                                                    e = e.parentNode;
                                                e &&
                                                    e !== r &&
                                                    1 === e.nodeType &&
                                                    (((o = T(e).offset()).top +=
                                                        T.css(
                                                            e,
                                                            "borderTopWidth",
                                                            !0
                                                        )),
                                                    (o.left += T.css(
                                                        e,
                                                        "borderLeftWidth",
                                                        !0
                                                    )));
                                            }
                                            return {
                                                top:
                                                    t.top -
                                                    o.top -
                                                    T.css(r, "marginTop", !0),
                                                left:
                                                    t.left -
                                                    o.left -
                                                    T.css(r, "marginLeft", !0),
                                            };
                                        }
                                    },
                                    offsetParent: function () {
                                        return this.map(function () {
                                            for (
                                                var e = this.offsetParent;
                                                e &&
                                                "static" ===
                                                    T.css(e, "position");

                                            )
                                                e = e.offsetParent;
                                            return e || j;
                                        });
                                    },
                                }),
                                T.each(
                                    {
                                        scrollLeft: "pageXOffset",
                                        scrollTop: "pageYOffset",
                                    },
                                    function (t, o) {
                                        var i = "pageYOffset" === o;
                                        T.fn[t] = function (e) {
                                            return f(
                                                this,
                                                function (e, t, n) {
                                                    var r;
                                                    if (
                                                        (g(e)
                                                            ? (r = e)
                                                            : 9 ===
                                                                  e.nodeType &&
                                                              (r =
                                                                  e.defaultView),
                                                        void 0 === n)
                                                    )
                                                        return r ? r[o] : e[t];
                                                    r
                                                        ? r.scrollTo(
                                                              i
                                                                  ? r.pageXOffset
                                                                  : n,
                                                              i
                                                                  ? n
                                                                  : r.pageYOffset
                                                          )
                                                        : (e[t] = n);
                                                },
                                                t,
                                                e,
                                                arguments.length
                                            );
                                        };
                                    }
                                ),
                                T.each(["top", "left"], function (e, n) {
                                    T.cssHooks[n] = tt(
                                        m.pixelPosition,
                                        function (e, t) {
                                            if (t)
                                                return (
                                                    (t = et(e, n)),
                                                    Je.test(t)
                                                        ? T(e).position()[n] +
                                                          "px"
                                                        : t
                                                );
                                        }
                                    );
                                }),
                                T.each(
                                    { Height: "height", Width: "width" },
                                    function (s, a) {
                                        T.each(
                                            {
                                                padding: "inner" + s,
                                                content: a,
                                                "": "outer" + s,
                                            },
                                            function (r, i) {
                                                T.fn[i] = function (e, t) {
                                                    var n =
                                                            arguments.length &&
                                                            (r ||
                                                                "boolean" !=
                                                                    typeof e),
                                                        o =
                                                            r ||
                                                            (!0 === e ||
                                                            !0 === t
                                                                ? "margin"
                                                                : "border");
                                                    return f(
                                                        this,
                                                        function (e, t, n) {
                                                            var r;
                                                            return g(e)
                                                                ? 0 ===
                                                                  i.indexOf(
                                                                      "outer"
                                                                  )
                                                                    ? e[
                                                                          "inner" +
                                                                              s
                                                                      ]
                                                                    : e.document
                                                                          .documentElement[
                                                                          "client" +
                                                                              s
                                                                      ]
                                                                : 9 ===
                                                                  e.nodeType
                                                                ? ((r =
                                                                      e.documentElement),
                                                                  Math.max(
                                                                      e.body[
                                                                          "scroll" +
                                                                              s
                                                                      ],
                                                                      r[
                                                                          "scroll" +
                                                                              s
                                                                      ],
                                                                      e.body[
                                                                          "offset" +
                                                                              s
                                                                      ],
                                                                      r[
                                                                          "offset" +
                                                                              s
                                                                      ],
                                                                      r[
                                                                          "client" +
                                                                              s
                                                                      ]
                                                                  ))
                                                                : void 0 === n
                                                                ? T.css(e, t, o)
                                                                : T.style(
                                                                      e,
                                                                      t,
                                                                      n,
                                                                      o
                                                                  );
                                                        },
                                                        a,
                                                        n ? e : void 0,
                                                        n
                                                    );
                                                };
                                            }
                                        );
                                    }
                                ),
                                T.each(
                                    [
                                        "ajaxStart",
                                        "ajaxStop",
                                        "ajaxComplete",
                                        "ajaxError",
                                        "ajaxSuccess",
                                        "ajaxSend",
                                    ],
                                    function (e, t) {
                                        T.fn[t] = function (e) {
                                            return this.on(t, e);
                                        };
                                    }
                                ),
                                T.fn.extend({
                                    bind: function (e, t, n) {
                                        return this.on(e, null, t, n);
                                    },
                                    unbind: function (e, t) {
                                        return this.off(e, null, t);
                                    },
                                    delegate: function (e, t, n, r) {
                                        return this.on(t, e, n, r);
                                    },
                                    undelegate: function (e, t, n) {
                                        return 1 === arguments.length
                                            ? this.off(e, "**")
                                            : this.off(t, e || "**", n);
                                    },
                                    hover: function (e, t) {
                                        return this.mouseenter(e).mouseleave(
                                            t || e
                                        );
                                    },
                                }),
                                T.each(
                                    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                                        " "
                                    ),
                                    function (e, n) {
                                        T.fn[n] = function (e, t) {
                                            return 0 < arguments.length
                                                ? this.on(n, null, e, t)
                                                : this.trigger(n);
                                        };
                                    }
                                ),
                                /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
                            Zt =
                                ((T.proxy = function (e, t) {
                                    var n, r;
                                    if (
                                        ("string" == typeof t &&
                                            ((r = e[t]), (t = e), (e = r)),
                                        y(e))
                                    )
                                        return (
                                            (n = a.call(arguments, 2)),
                                            ((r = function () {
                                                return e.apply(
                                                    t || this,
                                                    n.concat(a.call(arguments))
                                                );
                                            }).guid = e.guid =
                                                e.guid || T.guid++),
                                            r
                                        );
                                }),
                                (T.holdReady = function (e) {
                                    e ? T.readyWait++ : T.ready(!0);
                                }),
                                (T.isArray = Array.isArray),
                                (T.parseJSON = JSON.parse),
                                (T.nodeName = u),
                                (T.isFunction = y),
                                (T.isWindow = g),
                                (T.camelCase = x),
                                (T.type = d),
                                (T.now = Date.now),
                                (T.isNumeric = function (e) {
                                    var t = T.type(e);
                                    return (
                                        ("number" === t || "string" === t) &&
                                        !isNaN(e - parseFloat(e))
                                    );
                                }),
                                (T.trim = function (e) {
                                    return null == e
                                        ? ""
                                        : (e + "").replace(Kt, "");
                                }),
                                "function" == typeof define &&
                                    define.amd &&
                                    define("jquery", [], function () {
                                        return T;
                                    }),
                                w.jQuery),
                            en = w.$;
                        return (
                            (T.noConflict = function (e) {
                                return (
                                    w.$ === T && (w.$ = en),
                                    e && w.jQuery === T && (w.jQuery = Zt),
                                    T
                                );
                            }),
                            void 0 === I && (w.jQuery = w.$ = T),
                            T
                        );
                    }
                );
            },
            {},
        ],
        3: [
            function (e, t, n) {
                !function (s) {
                    !function () {
                        "use strict";
                        function p(e) {
                            if ("string" != typeof e)
                                throw new TypeError(
                                    "Path must be a string. Received " +
                                        JSON.stringify(e)
                                );
                        }
                        function i(e, t) {
                            for (
                                var n, r = "", o = 0, i = -1, s = 0, a = 0;
                                a <= e.length;
                                ++a
                            ) {
                                if (a < e.length) n = e.charCodeAt(a);
                                else {
                                    if (47 === n) break;
                                    n = 47;
                                }
                                if (47 === n) {
                                    if (i !== a - 1 && 1 !== s)
                                        if (i !== a - 1 && 2 === s) {
                                            if (
                                                r.length < 2 ||
                                                2 !== o ||
                                                46 !==
                                                    r.charCodeAt(
                                                        r.length - 1
                                                    ) ||
                                                46 !==
                                                    r.charCodeAt(r.length - 2)
                                            )
                                                if (2 < r.length) {
                                                    var u = r.lastIndexOf("/");
                                                    if (u !== r.length - 1) {
                                                        (o =
                                                            -1 === u
                                                                ? ((r = ""), 0)
                                                                : (r = r.slice(
                                                                      0,
                                                                      u
                                                                  )).length -
                                                                  1 -
                                                                  r.lastIndexOf(
                                                                      "/"
                                                                  )),
                                                            (i = a),
                                                            (s = 0);
                                                        continue;
                                                    }
                                                } else if (
                                                    2 === r.length ||
                                                    1 === r.length
                                                ) {
                                                    (r = ""),
                                                        (i = a),
                                                        (s = o = 0);
                                                    continue;
                                                }
                                            t &&
                                                (0 < r.length
                                                    ? (r += "/..")
                                                    : (r = ".."),
                                                (o = 2));
                                        } else
                                            0 < r.length
                                                ? (r += "/" + e.slice(i + 1, a))
                                                : (r = e.slice(i + 1, a)),
                                                (o = a - i - 1);
                                    (i = a), (s = 0);
                                } else 46 === n && -1 !== s ? ++s : (s = -1);
                            }
                            return r;
                        }
                        var h = {
                            resolve: function () {
                                for (
                                    var e,
                                        t = "",
                                        n = !1,
                                        r = arguments.length - 1;
                                    -1 <= r && !n;
                                    r--
                                ) {
                                    var o =
                                        0 <= r
                                            ? arguments[r]
                                            : (e = void 0 === e ? s.cwd() : e);
                                    p(o),
                                        0 !== o.length &&
                                            ((t = o + "/" + t),
                                            (n = 47 === o.charCodeAt(0)));
                                }
                                return (
                                    (t = i(t, !n)),
                                    n
                                        ? 0 < t.length
                                            ? "/" + t
                                            : "/"
                                        : 0 < t.length
                                        ? t
                                        : "."
                                );
                            },
                            normalize: function (e) {
                                var t, n;
                                return (
                                    p(e),
                                    0 === e.length
                                        ? "."
                                        : ((t = 47 === e.charCodeAt(0)),
                                          (n =
                                              47 ===
                                              e.charCodeAt(e.length - 1)),
                                          0 <
                                              (e =
                                                  0 !== (e = i(e, !t)).length ||
                                                  t
                                                      ? e
                                                      : ".").length &&
                                              n &&
                                              (e += "/"),
                                          t ? "/" + e : e)
                                );
                            },
                            isAbsolute: function (e) {
                                return (
                                    p(e), 0 < e.length && 47 === e.charCodeAt(0)
                                );
                            },
                            join: function () {
                                if (0 === arguments.length) return ".";
                                for (var e, t = 0; t < arguments.length; ++t) {
                                    var n = arguments[t];
                                    p(n),
                                        0 < n.length &&
                                            (void 0 === e
                                                ? (e = n)
                                                : (e += "/" + n));
                                }
                                return void 0 === e ? "." : h.normalize(e);
                            },
                            relative: function (e, t) {
                                if ((p(e), p(t), e === t)) return "";
                                if ((e = h.resolve(e)) === (t = h.resolve(t)))
                                    return "";
                                for (
                                    var n = 1;
                                    n < e.length && 47 === e.charCodeAt(n);
                                    ++n
                                );
                                for (
                                    var r = e.length, o = r - n, i = 1;
                                    i < t.length && 47 === t.charCodeAt(i);
                                    ++i
                                );
                                for (
                                    var s = t.length - i,
                                        a = o < s ? o : s,
                                        u = -1,
                                        l = 0;
                                    l <= a;
                                    ++l
                                ) {
                                    if (l === a) {
                                        if (a < s) {
                                            if (47 === t.charCodeAt(i + l))
                                                return t.slice(i + l + 1);
                                            if (0 === l) return t.slice(i + l);
                                        } else
                                            a < o &&
                                                (47 === e.charCodeAt(n + l)
                                                    ? (u = l)
                                                    : 0 === l && (u = 0));
                                        break;
                                    }
                                    var c = e.charCodeAt(n + l);
                                    if (c !== t.charCodeAt(i + l)) break;
                                    47 === c && (u = l);
                                }
                                for (var f = "", l = n + u + 1; l <= r; ++l)
                                    (l !== r && 47 !== e.charCodeAt(l)) ||
                                        (0 === f.length
                                            ? (f += "..")
                                            : (f += "/.."));
                                return 0 < f.length
                                    ? f + t.slice(i + u)
                                    : (47 === t.charCodeAt((i += u)) && ++i,
                                      t.slice(i));
                            },
                            _makeLong: function (e) {
                                return e;
                            },
                            dirname: function (e) {
                                if ((p(e), 0 === e.length)) return ".";
                                for (
                                    var t = 47 === e.charCodeAt(0),
                                        n = -1,
                                        r = !0,
                                        o = e.length - 1;
                                    1 <= o;
                                    --o
                                )
                                    if (47 === e.charCodeAt(o)) {
                                        if (!r) {
                                            n = o;
                                            break;
                                        }
                                    } else r = !1;
                                return -1 === n
                                    ? t
                                        ? "/"
                                        : "."
                                    : t && 1 === n
                                    ? "//"
                                    : e.slice(0, n);
                            },
                            basename: function (e, t) {
                                if (void 0 !== t && "string" != typeof t)
                                    throw new TypeError(
                                        '"ext" argument must be a string'
                                    );
                                p(e);
                                var n = 0,
                                    r = -1,
                                    o = !0;
                                if (
                                    void 0 !== t &&
                                    0 < t.length &&
                                    t.length <= e.length
                                ) {
                                    if (t.length === e.length && t === e)
                                        return "";
                                    for (
                                        var i = t.length - 1,
                                            s = -1,
                                            a = e.length - 1;
                                        0 <= a;
                                        --a
                                    ) {
                                        var u = e.charCodeAt(a);
                                        if (47 === u) {
                                            if (!o) {
                                                n = a + 1;
                                                break;
                                            }
                                        } else
                                            -1 === s && ((o = !1), (s = a + 1)),
                                                0 <= i &&
                                                    (u === t.charCodeAt(i)
                                                        ? -1 == --i && (r = a)
                                                        : ((i = -1), (r = s)));
                                    }
                                    return (
                                        n === r
                                            ? (r = s)
                                            : -1 === r && (r = e.length),
                                        e.slice(n, r)
                                    );
                                }
                                for (a = e.length - 1; 0 <= a; --a)
                                    if (47 === e.charCodeAt(a)) {
                                        if (!o) {
                                            n = a + 1;
                                            break;
                                        }
                                    } else -1 === r && ((o = !1), (r = a + 1));
                                return -1 === r ? "" : e.slice(n, r);
                            },
                            extname: function (e) {
                                p(e);
                                for (
                                    var t = -1,
                                        n = 0,
                                        r = -1,
                                        o = !0,
                                        i = 0,
                                        s = e.length - 1;
                                    0 <= s;
                                    --s
                                ) {
                                    var a = e.charCodeAt(s);
                                    if (47 === a) {
                                        if (o) continue;
                                        n = s + 1;
                                        break;
                                    }
                                    -1 === r && ((o = !1), (r = s + 1)),
                                        46 === a
                                            ? -1 === t
                                                ? (t = s)
                                                : 1 !== i && (i = 1)
                                            : -1 !== t && (i = -1);
                                }
                                return -1 === t ||
                                    -1 === r ||
                                    0 === i ||
                                    (1 === i && t === r - 1 && t === n + 1)
                                    ? ""
                                    : e.slice(t, r);
                            },
                            format: function (e) {
                                if (null === e || "object" != typeof e)
                                    throw new TypeError(
                                        'The "pathObject" argument must be of type Object. Received type ' +
                                            typeof e
                                    );
                                return (
                                    (t = "/"),
                                    (n = (e = e).dir || e.root),
                                    (r =
                                        e.base ||
                                        (e.name || "") + (e.ext || "")),
                                    n ? (n === e.root ? n + r : n + t + r) : r
                                );
                                var t, n, r;
                            },
                            parse: function (e) {
                                p(e);
                                var t = {
                                    root: "",
                                    dir: "",
                                    base: "",
                                    ext: "",
                                    name: "",
                                };
                                if (0 !== e.length) {
                                    for (
                                        var n,
                                            r = 47 === e.charCodeAt(0),
                                            o = r ? ((t.root = "/"), 1) : 0,
                                            i = -1,
                                            s = 0,
                                            a = -1,
                                            u = !0,
                                            l = e.length - 1,
                                            c = 0;
                                        o <= l;
                                        --l
                                    ) {
                                        if (47 === (n = e.charCodeAt(l))) {
                                            if (u) continue;
                                            s = l + 1;
                                            break;
                                        }
                                        -1 === a && ((u = !1), (a = l + 1)),
                                            46 === n
                                                ? -1 === i
                                                    ? (i = l)
                                                    : 1 !== c && (c = 1)
                                                : -1 !== i && (c = -1);
                                    }
                                    -1 === i ||
                                    -1 === a ||
                                    0 === c ||
                                    (1 === c && i === a - 1 && i === s + 1)
                                        ? -1 !== a &&
                                          (t.base = t.name =
                                              0 === s && r
                                                  ? e.slice(1, a)
                                                  : e.slice(s, a))
                                        : (0 === s && r
                                              ? ((t.name = e.slice(1, i)),
                                                (t.base = e.slice(1, a)))
                                              : ((t.name = e.slice(s, i)),
                                                (t.base = e.slice(s, a))),
                                          (t.ext = e.slice(i, a))),
                                        0 < s
                                            ? (t.dir = e.slice(0, s - 1))
                                            : r && (t.dir = "/");
                                }
                                return t;
                            },
                            sep: "/",
                            delimiter: ":",
                            win32: null,
                            posix: null,
                        };
                        (h.posix = h), (t.exports = h);
                    }.call(this);
                }.call(this, e("_process"));
            },
            { _process: 4 },
        ],
        4: [
            function (e, t, n) {
                var r,
                    o,
                    t = (t.exports = {});
                function i() {
                    throw new Error("setTimeout has not been defined");
                }
                function s() {
                    throw new Error("clearTimeout has not been defined");
                }
                try {
                    r = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                    r = i;
                }
                try {
                    o = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                    o = s;
                }
                function a(t) {
                    if (r === setTimeout) return setTimeout(t, 0);
                    if ((r === i || !r) && setTimeout)
                        return (r = setTimeout)(t, 0);
                    try {
                        return r(t, 0);
                    } catch (e) {
                        try {
                            return r.call(null, t, 0);
                        } catch (e) {
                            return r.call(this, t, 0);
                        }
                    }
                }
                var u,
                    l = [],
                    c = !1,
                    f = -1;
                function p() {
                    c &&
                        u &&
                        ((c = !1),
                        u.length ? (l = u.concat(l)) : (f = -1),
                        l.length && h());
                }
                function h() {
                    if (!c) {
                        for (var e = a(p), t = ((c = !0), l.length); t; ) {
                            for (u = l, l = []; ++f < t; ) u && u[f].run();
                            (f = -1), (t = l.length);
                        }
                        (u = null),
                            (c = !1),
                            !(function (t) {
                                if (o === clearTimeout) return clearTimeout(t);
                                if ((o === s || !o) && clearTimeout)
                                    return (o = clearTimeout)(t);
                                try {
                                    o(t);
                                } catch (e) {
                                    try {
                                        return o.call(null, t);
                                    } catch (e) {
                                        return o.call(this, t);
                                    }
                                }
                            })(e);
                    }
                }
                function d(e, t) {
                    (this.fun = e), (this.array = t);
                }
                function g() {}
                (t.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (1 < arguments.length)
                        for (var n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                    l.push(new d(e, t)), 1 !== l.length || c || a(h);
                }),
                    (d.prototype.run = function () {
                        this.fun.apply(null, this.array);
                    }),
                    (t.title = "browser"),
                    (t.browser = !0),
                    (t.env = {}),
                    (t.argv = []),
                    (t.version = ""),
                    (t.versions = {}),
                    (t.on = g),
                    (t.addListener = g),
                    (t.once = g),
                    (t.off = g),
                    (t.removeListener = g),
                    (t.removeAllListeners = g),
                    (t.emit = g),
                    (t.prependListener = g),
                    (t.prependOnceListener = g),
                    (t.listeners = function (e) {
                        return [];
                    }),
                    (t.binding = function (e) {
                        throw new Error("process.binding is not supported");
                    }),
                    (t.cwd = function () {
                        return "/";
                    }),
                    (t.chdir = function (e) {
                        throw new Error("process.chdir is not supported");
                    }),
                    (t.umask = function () {
                        return 0;
                    });
            },
            {},
        ],
        5: [
            function (e, t, n) {
                "use strict";
                t.exports = function (e, t, n, r) {
                    (t = t || "&"), (n = n || "=");
                    var o = {};
                    if ("string" == typeof e && 0 !== e.length) {
                        var i = /\+/g,
                            t = ((e = e.split(t)), 1e3),
                            s =
                                (r &&
                                    "number" == typeof r.maxKeys &&
                                    (t = r.maxKeys),
                                e.length);
                        0 < t && t < s && (s = t);
                        for (var a = 0; a < s; ++a) {
                            var u,
                                l = e[a].replace(i, "%20"),
                                c = l.indexOf(n),
                                c =
                                    0 <= c
                                        ? ((u = l.substr(0, c)),
                                          l.substr(c + 1))
                                        : ((u = l), ""),
                                l = decodeURIComponent(u),
                                c = decodeURIComponent(c);
                            Object.prototype.hasOwnProperty.call(o, l)
                                ? f(o[l])
                                    ? o[l].push(c)
                                    : (o[l] = [o[l], c])
                                : (o[l] = c);
                        }
                    }
                    return o;
                };
                var f =
                    Array.isArray ||
                    function (e) {
                        return (
                            "[object Array]" ===
                            Object.prototype.toString.call(e)
                        );
                    };
            },
            {},
        ],
        6: [
            function (e, t, n) {
                "use strict";
                function i(e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return "";
                    }
                }
                t.exports = function (n, r, o, e) {
                    return (
                        (r = r || "&"),
                        (o = o || "="),
                        "object" == typeof (n = null === n ? void 0 : n)
                            ? a(u(n), function (e) {
                                  var t = encodeURIComponent(i(e)) + o;
                                  return s(n[e])
                                      ? a(n[e], function (e) {
                                            return t + encodeURIComponent(i(e));
                                        }).join(r)
                                      : t + encodeURIComponent(i(n[e]));
                              }).join(r)
                            : e
                            ? encodeURIComponent(i(e)) +
                              o +
                              encodeURIComponent(i(n))
                            : ""
                    );
                };
                var s =
                    Array.isArray ||
                    function (e) {
                        return (
                            "[object Array]" ===
                            Object.prototype.toString.call(e)
                        );
                    };
                function a(e, t) {
                    if (e.map) return e.map(t);
                    for (var n = [], r = 0; r < e.length; r++)
                        n.push(t(e[r], r));
                    return n;
                }
                var u =
                    Object.keys ||
                    function (e) {
                        var t,
                            n = [];
                        for (t in e)
                            Object.prototype.hasOwnProperty.call(e, t) &&
                                n.push(t);
                        return n;
                    };
            },
            {},
        ],
        7: [
            function (e, t, n) {
                "use strict";
                (n.decode = n.parse = e("./decode")),
                    (n.encode = n.stringify = e("./encode"));
            },
            { "./decode": 5, "./encode": 6 },
        ],
        8: [
            function (e, t, n) {
                "use strict";
                var T = e("punycode"),
                    A = e("./util");
                function w() {
                    (this.protocol = null),
                        (this.slashes = null),
                        (this.auth = null),
                        (this.host = null),
                        (this.port = null),
                        (this.hostname = null),
                        (this.hash = null),
                        (this.search = null),
                        (this.query = null),
                        (this.pathname = null),
                        (this.path = null),
                        (this.href = null);
                }
                (n.parse = o),
                    (n.resolve = function (e, t) {
                        return o(e, !1, !0).resolve(t);
                    }),
                    (n.resolveObject = function (e, t) {
                        return e ? o(e, !1, !0).resolveObject(t) : t;
                    }),
                    (n.format = function (e) {
                        A.isString(e) && (e = o(e));
                        return e instanceof w
                            ? e.format()
                            : w.prototype.format.call(e);
                    }),
                    (n.Url = w);
                var j = /^([a-z0-9.+-]+:)/i,
                    r = /:[0-9]*$/,
                    k = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                    n = ["{", "}", "|", "\\", "^", "`"].concat([
                        "<",
                        ">",
                        '"',
                        "`",
                        " ",
                        "\r",
                        "\n",
                        "\t",
                    ]),
                    E = ["'"].concat(n),
                    S = ["%", "/", "?", ";", "#"].concat(E),
                    N = ["/", "?", "#"],
                    D = /^[+a-z0-9A-Z_-]{0,63}$/,
                    q = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                    O = { javascript: !0, "javascript:": !0 },
                    L = { javascript: !0, "javascript:": !0 },
                    H = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0,
                    },
                    R = e("querystring");
                function o(e, t, n) {
                    var r;
                    return e && A.isObject(e) && e instanceof w
                        ? e
                        : ((r = new w()).parse(e, t, n), r);
                }
                (w.prototype.parse = function (e, t, n) {
                    if (!A.isString(e))
                        throw new TypeError(
                            "Parameter 'url' must be a string, not " + typeof e
                        );
                    var r = e.indexOf("?"),
                        r = -1 !== r && r < e.indexOf("#") ? "?" : "#",
                        o = e.split(r);
                    o[0] = o[0].replace(/\\/g, "/");
                    var i = (i = e = o.join(r)).trim();
                    if (!n && 1 === e.split("#").length) {
                        o = k.exec(i);
                        if (o)
                            return (
                                (this.path = i),
                                (this.href = i),
                                (this.pathname = o[1]),
                                o[2]
                                    ? ((this.search = o[2]),
                                      (this.query = t
                                          ? R.parse(this.search.substr(1))
                                          : this.search.substr(1)))
                                    : t &&
                                      ((this.search = ""), (this.query = {})),
                                this
                            );
                    }
                    var s,
                        r = j.exec(i);
                    if (
                        (r &&
                            ((s = (r = r[0]).toLowerCase()),
                            (this.protocol = s),
                            (i = i.substr(r.length))),
                        !(n || r || i.match(/^\/\/[^@\/]+@[^@\/]+/)) ||
                            !(b = "//" === i.substr(0, 2)) ||
                            (r && L[r]) ||
                            ((i = i.substr(2)), (this.slashes = !0)),
                        !L[r] && (b || (r && !H[r])))
                    ) {
                        for (var a = -1, u = 0; u < N.length; u++)
                            -1 !== (l = i.indexOf(N[u])) &&
                                (-1 === a || l < a) &&
                                (a = l);
                        -1 !==
                            (e =
                                -1 === a
                                    ? i.lastIndexOf("@")
                                    : i.lastIndexOf("@", a)) &&
                            ((o = i.slice(0, e)),
                            (i = i.slice(e + 1)),
                            (this.auth = decodeURIComponent(o)));
                        for (var l, a = -1, u = 0; u < S.length; u++)
                            -1 !== (l = i.indexOf(S[u])) &&
                                (-1 === a || l < a) &&
                                (a = l);
                        -1 === a && (a = i.length),
                            (this.host = i.slice(0, a)),
                            (i = i.slice(a)),
                            this.parseHost(),
                            (this.hostname = this.hostname || "");
                        n =
                            "[" === this.hostname[0] &&
                            "]" === this.hostname[this.hostname.length - 1];
                        if (!n)
                            for (
                                var c = this.hostname.split(/\./),
                                    u = 0,
                                    f = c.length;
                                u < f;
                                u++
                            ) {
                                var p = c[u];
                                if (p && !p.match(D)) {
                                    for (
                                        var h = "", d = 0, g = p.length;
                                        d < g;
                                        d++
                                    )
                                        127 < p.charCodeAt(d)
                                            ? (h += "x")
                                            : (h += p[d]);
                                    if (!h.match(D)) {
                                        var m = c.slice(0, u),
                                            v = c.slice(u + 1),
                                            y = p.match(q);
                                        y && (m.push(y[1]), v.unshift(y[2])),
                                            v.length &&
                                                (i = "/" + v.join(".") + i),
                                            (this.hostname = m.join("."));
                                        break;
                                    }
                                }
                            }
                        255 < this.hostname.length
                            ? (this.hostname = "")
                            : (this.hostname = this.hostname.toLowerCase()),
                            n || (this.hostname = T.toASCII(this.hostname));
                        var x = this.port ? ":" + this.port : "",
                            b = this.hostname || "";
                        (this.host = b + x),
                            (this.href += this.host),
                            n &&
                                ((this.hostname = this.hostname.substr(
                                    1,
                                    this.hostname.length - 2
                                )),
                                "/" !== i[0] && (i = "/" + i));
                    }
                    if (!O[s])
                        for (u = 0, f = E.length; u < f; u++) {
                            var w,
                                C = E[u];
                            -1 !== i.indexOf(C) &&
                                ((w = encodeURIComponent(C)) === C &&
                                    (w = escape(C)),
                                (i = i.split(C).join(w)));
                        }
                    (r = i.indexOf("#")),
                        -1 !== r &&
                            ((this.hash = i.substr(r)), (i = i.slice(0, r))),
                        (e = i.indexOf("?"));
                    return (
                        -1 !== e
                            ? ((this.search = i.substr(e)),
                              (this.query = i.substr(e + 1)),
                              t && (this.query = R.parse(this.query)),
                              (i = i.slice(0, e)))
                            : t && ((this.search = ""), (this.query = {})),
                        i && (this.pathname = i),
                        H[s] &&
                            this.hostname &&
                            !this.pathname &&
                            (this.pathname = "/"),
                        (this.pathname || this.search) &&
                            ((x = this.pathname || ""),
                            (o = this.search || ""),
                            (this.path = x + o)),
                        (this.href = this.format()),
                        this
                    );
                }),
                    (w.prototype.format = function () {
                        var e = this.auth || "",
                            t =
                                (e &&
                                    ((e = (e = encodeURIComponent(e)).replace(
                                        /%3A/i,
                                        ":"
                                    )),
                                    (e += "@")),
                                this.protocol || ""),
                            n = this.pathname || "",
                            r = this.hash || "",
                            o = !1,
                            i = "",
                            e =
                                (this.host
                                    ? (o = e + this.host)
                                    : this.hostname &&
                                      ((o =
                                          e +
                                          (-1 === this.hostname.indexOf(":")
                                              ? this.hostname
                                              : "[" + this.hostname + "]")),
                                      this.port && (o += ":" + this.port)),
                                this.query &&
                                    A.isObject(this.query) &&
                                    Object.keys(this.query).length &&
                                    (i = R.stringify(this.query)),
                                this.search || (i && "?" + i) || "");
                        return (
                            t && ":" !== t.substr(-1) && (t += ":"),
                            this.slashes || ((!t || H[t]) && !1 !== o)
                                ? ((o = "//" + (o || "")),
                                  n && "/" !== n.charAt(0) && (n = "/" + n))
                                : (o = o || ""),
                            r && "#" !== r.charAt(0) && (r = "#" + r),
                            e && "?" !== e.charAt(0) && (e = "?" + e),
                            t +
                                o +
                                (n = n.replace(/[?#]/g, function (e) {
                                    return encodeURIComponent(e);
                                })) +
                                (e = e.replace("#", "%23")) +
                                r
                        );
                    }),
                    (w.prototype.resolve = function (e) {
                        return this.resolveObject(o(e, !1, !0)).format();
                    }),
                    (w.prototype.resolveObject = function (e) {
                        A.isString(e) &&
                            ((p = new w()).parse(e, !1, !0), (e = p));
                        for (
                            var t = new w(), n = Object.keys(this), r = 0;
                            r < n.length;
                            r++
                        ) {
                            var o = n[r];
                            t[o] = this[o];
                        }
                        if (((t.hash = e.hash), "" !== e.href))
                            if (e.slashes && !e.protocol) {
                                for (
                                    var i = Object.keys(e), s = 0;
                                    s < i.length;
                                    s++
                                ) {
                                    var a = i[s];
                                    "protocol" !== a && (t[a] = e[a]);
                                }
                                H[t.protocol] &&
                                    t.hostname &&
                                    !t.pathname &&
                                    (t.path = t.pathname = "/");
                            } else if (e.protocol && e.protocol !== t.protocol)
                                if (H[e.protocol]) {
                                    if (
                                        ((t.protocol = e.protocol),
                                        e.host || L[e.protocol])
                                    )
                                        t.pathname = e.pathname;
                                    else {
                                        for (
                                            var u = (e.pathname || "").split(
                                                "/"
                                            );
                                            u.length && !(e.host = u.shift());

                                        );
                                        e.host || (e.host = ""),
                                            e.hostname || (e.hostname = ""),
                                            "" !== u[0] && u.unshift(""),
                                            u.length < 2 && u.unshift(""),
                                            (t.pathname = u.join("/"));
                                    }
                                    (t.search = e.search),
                                        (t.query = e.query),
                                        (t.host = e.host || ""),
                                        (t.auth = e.auth),
                                        (t.hostname = e.hostname || e.host),
                                        (t.port = e.port),
                                        (t.pathname || t.search) &&
                                            ((p = t.pathname || ""),
                                            (h = t.search || ""),
                                            (t.path = p + h)),
                                        (t.slashes = t.slashes || e.slashes);
                                } else
                                    for (
                                        var l = Object.keys(e), c = 0;
                                        c < l.length;
                                        c++
                                    ) {
                                        var f = l[c];
                                        t[f] = e[f];
                                    }
                            else {
                                var p =
                                        t.pathname &&
                                        "/" === t.pathname.charAt(0),
                                    h =
                                        e.host ||
                                        (e.pathname &&
                                            "/" === e.pathname.charAt(0)),
                                    p = h || p || (t.host && e.pathname),
                                    d = p,
                                    g =
                                        (t.pathname && t.pathname.split("/")) ||
                                        [],
                                    u =
                                        (e.pathname && e.pathname.split("/")) ||
                                        [],
                                    m = t.protocol && !H[t.protocol];
                                if (
                                    (m &&
                                        ((t.hostname = ""),
                                        (t.port = null),
                                        t.host &&
                                            ("" === g[0]
                                                ? (g[0] = t.host)
                                                : g.unshift(t.host)),
                                        (t.host = ""),
                                        e.protocol &&
                                            ((e.hostname = null),
                                            (e.port = null),
                                            e.host &&
                                                ("" === u[0]
                                                    ? (u[0] = e.host)
                                                    : u.unshift(e.host)),
                                            (e.host = null)),
                                        (p =
                                            p && ("" === u[0] || "" === g[0]))),
                                    h)
                                )
                                    (t.host = (
                                        e.host || "" === e.host ? e : t
                                    ).host),
                                        (t.hostname = (
                                            e.hostname || "" === e.hostname
                                                ? e
                                                : t
                                        ).hostname),
                                        (t.search = e.search),
                                        (t.query = e.query),
                                        (g = u);
                                else if (u.length)
                                    (g = g || []).pop(),
                                        (g = g.concat(u)),
                                        (t.search = e.search),
                                        (t.query = e.query);
                                else if (!A.isNullOrUndefined(e.search))
                                    return (
                                        m &&
                                            ((t.hostname = t.host = g.shift()),
                                            (b =
                                                !!(
                                                    t.host &&
                                                    0 < t.host.indexOf("@")
                                                ) && t.host.split("@")) &&
                                                ((t.auth = b.shift()),
                                                (t.host = t.hostname =
                                                    b.shift()))),
                                        (t.search = e.search),
                                        (t.query = e.query),
                                        (A.isNull(t.pathname) &&
                                            A.isNull(t.search)) ||
                                            (t.path =
                                                (t.pathname || "") +
                                                (t.search || "")),
                                        (t.href = t.format()),
                                        t
                                    );
                                if (g.length) {
                                    for (
                                        var v = g.slice(-1)[0],
                                            h =
                                                ((t.host ||
                                                    e.host ||
                                                    1 < g.length) &&
                                                    ("." === v ||
                                                        ".." === v)) ||
                                                "" === v,
                                            y = 0,
                                            x = g.length;
                                        0 <= x;
                                        x--
                                    )
                                        "." === (v = g[x])
                                            ? g.splice(x, 1)
                                            : ".." === v
                                            ? (g.splice(x, 1), y++)
                                            : y && (g.splice(x, 1), y--);
                                    if (!p && !d) for (; y--; ) g.unshift("..");
                                    !p ||
                                        "" === g[0] ||
                                        (g[0] && "/" === g[0].charAt(0)) ||
                                        g.unshift(""),
                                        h &&
                                            "/" !== g.join("/").substr(-1) &&
                                            g.push("");
                                    var b,
                                        d =
                                            "" === g[0] ||
                                            (g[0] && "/" === g[0].charAt(0));
                                    m &&
                                        ((t.hostname = t.host =
                                            !d && g.length ? g.shift() : ""),
                                        (b =
                                            !!(
                                                t.host &&
                                                0 < t.host.indexOf("@")
                                            ) && t.host.split("@")) &&
                                            ((t.auth = b.shift()),
                                            (t.host = t.hostname = b.shift()))),
                                        (p = p || (t.host && g.length)) &&
                                            !d &&
                                            g.unshift(""),
                                        g.length
                                            ? (t.pathname = g.join("/"))
                                            : ((t.pathname = null),
                                              (t.path = null)),
                                        (A.isNull(t.pathname) &&
                                            A.isNull(t.search)) ||
                                            (t.path =
                                                (t.pathname || "") +
                                                (t.search || "")),
                                        (t.auth = e.auth || t.auth),
                                        (t.slashes = t.slashes || e.slashes);
                                } else
                                    (t.pathname = null),
                                        t.search
                                            ? (t.path = "/" + t.search)
                                            : (t.path = null);
                            }
                        return (t.href = t.format()), t;
                    }),
                    (w.prototype.parseHost = function () {
                        var e = this.host,
                            t = r.exec(e);
                        t &&
                            (":" !== (t = t[0]) && (this.port = t.substr(1)),
                            (e = e.substr(0, e.length - t.length))),
                            e && (this.hostname = e);
                    });
            },
            { "./util": 9, punycode: 1, querystring: 7 },
        ],
        9: [
            function (e, t, n) {
                "use strict";
                t.exports = {
                    isString: function (e) {
                        return "string" == typeof e;
                    },
                    isObject: function (e) {
                        return "object" == typeof e && null !== e;
                    },
                    isNull: function (e) {
                        return null === e;
                    },
                    isNullOrUndefined: function (e) {
                        return null == e;
                    },
                };
            },
            {},
        ],
        10: [
            function (e, t, n) {
                e = e("jquery");
                t.exports = e({});
            },
            { jquery: 2 },
        ],
        11: [
            function (e, t, n) {
                var r = e("jquery"),
                    o = e("./events"),
                    i = e("./storage"),
                    e = e("./page"),
                    s = !1,
                    a = window.gitbook || [],
                    o = {
                        events: o,
                        page: e,
                        state: e.getState(),
                        storage: i,
                        push: function (e) {
                            s ? e() : a.push(e);
                        },
                    },
                    u = { gitbook: o, honkit: o, jquery: r };
                (window.gitbook = o),
                    (window.honkit = o),
                    (window.$ = r),
                    (window.jQuery = r),
                    (window.require = function (e, t) {
                        (e = e.map(function (e) {
                            if (((e = e.toLowerCase()), u[e])) return u[e];
                            throw new Error(
                                "HonKit module " + e + " doesn't exist"
                            );
                        })),
                            t.apply(null, e);
                    }),
                    r(document).ready(function () {
                        (s = !0),
                            r.each(a, function (e, t) {
                                t();
                            });
                    });
            },
            { "./events": 10, "./page": 12, "./storage": 13, jquery: 2 },
        ],
        12: [
            function (e, t, n) {
                var r = e("jquery"),
                    o = e("url"),
                    i = e("path"),
                    s = e("./events"),
                    a = !1,
                    u = {};
                function l(e) {
                    (u.page = e.page),
                        (u.file = e.file),
                        (u.gitbook = e.gitbook),
                        (u.config = e.config),
                        (u.basePath = e.basePath),
                        (u.book = e.book),
                        (u.$book = r(".book")),
                        (u.revision = u.gitbook.time),
                        (u.level = u.page.level),
                        (u.filepath = u.file.path),
                        (u.chapterTitle = u.page.title),
                        (u.innerLanguage = u.book.language || ""),
                        (u.root = o
                            .resolve(
                                location.protocol + "//" + location.host,
                                i.dirname(
                                    i.resolve(
                                        location.pathname.replace(
                                            /\/$/,
                                            "/index.html"
                                        ),
                                        u.basePath
                                    )
                                )
                            )
                            .replace(/\/?$/, "/")),
                        (u.bookRoot = u.innerLanguage
                            ? o.resolve(u.root, "..")
                            : u.root);
                }
                t.exports = {
                    hasChanged: function (e) {
                        l(e),
                            a ||
                                ((a = !0),
                                s.trigger("start", e.config.pluginsConfig)),
                            s.trigger("page.change");
                    },
                    setState: l,
                    getState: function () {
                        return u;
                    },
                };
            },
            { "./events": 10, jquery: 2, path: 3, url: 8 },
        ],
        13: [
            function (e, t, n) {
                var o = "";
                t.exports = {
                    setBaseKey: function (e) {
                        o = e;
                    },
                    set: function (e, t) {
                        e = o + ":" + e;
                        try {
                            localStorage[e] = JSON.stringify(t);
                        } catch (e) {}
                    },
                    get: function (e, t) {
                        var n;
                        e = o + ":" + e;
                        try {
                            n = localStorage[e];
                        } catch (e) {}
                        if (void 0 === n) return t;
                        try {
                            var r = JSON.parse(n);
                            return null == r ? t : r;
                        } catch (e) {
                            return n || t;
                        }
                    },
                    remove: function (e) {
                        e = o + ":" + e;
                        try {
                            localStorage.removeItem(e);
                        } catch (e) {}
                    },
                };
            },
            {},
        ],
    },
    {},
    [11]
);
