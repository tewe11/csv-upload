parcelRequire = (function (e, r, t, n) {
    var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;
    function f(t, n) {
      if (!r[t]) {
        if (!e[t]) {
          var i = "function" == typeof parcelRequire && parcelRequire;
          if (!n && i) return i(t, !0);
          if (o) return o(t, !0);
          if (u && "string" == typeof t) return u(t);
          var c = new Error("Cannot find module '" + t + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        (p.resolve = function (r) {
          return e[t][1][r] || r;
        }),
          (p.cache = {});
        var l = (r[t] = new f.Module(t));
        e[t][0].call(l.exports, p, l, l.exports, this);
      }
      return r[t].exports;
      function p(e) {
        return f(p.resolve(e));
      }
    }
    (f.isParcelRequire = !0),
      (f.Module = function (e) {
        (this.id = e), (this.bundle = f), (this.exports = {});
      }),
      (f.modules = e),
      (f.cache = r),
      (f.parent = o),
      (f.register = function (r, t) {
        e[r] = [
          function (e, r) {
            r.exports = t;
          },
          {},
        ];
      });
    for (var c = 0; c < t.length; c++)
      try {
        f(t[c]);
      } catch (e) {
        i || (i = e);
      }
    if (t.length) {
      var l = f(t[t.length - 1]);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = l)
        : "function" == typeof define && define.amd
        ? define(function () {
            return l;
          })
        : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
  })(
    {
      Le6V: [
        function (require, module, exports) {
          var define;
          var r;
          !(function (t) {
            "function" == typeof r && r.amd ? r(t) : t();
          })(function () {
            "use strict";
            var r, t, e, n;
            Array.prototype.find ||
              Object.defineProperty(Array.prototype, "find", {
                value: function (r) {
                  if (null == this)
                    throw new TypeError('"this" is null or not defined');
                  var t = Object(this),
                    e = t.length >>> 0;
                  if ("function" != typeof r)
                    throw new TypeError("predicate must be a function");
                  for (var n = arguments[1], o = 0; o < e; ) {
                    var i = t[o];
                    if (r.call(n, i, o, t)) return i;
                    o++;
                  }
                },
              }),
              Array.prototype.findIndex ||
                Object.defineProperty(Array.prototype, "findIndex", {
                  value: function (r) {
                    if (null == this)
                      throw new TypeError('"this" is null or not defined');
                    var t = Object(this),
                      e = t.length >>> 0;
                    if ("function" != typeof r)
                      throw new TypeError("predicate must be a function");
                    for (var n = arguments[1], o = 0; o < e; ) {
                      var i = t[o];
                      if (r.call(n, i, o, t)) return o;
                      o++;
                    }
                    return -1;
                  },
                }),
              Array.from ||
                (Array.from =
                  ((r = Object.prototype.toString),
                  (t = function (t) {
                    return (
                      "function" == typeof t || "[object Function]" === r.call(t)
                    );
                  }),
                  (e = Math.pow(2, 53) - 1),
                  (n = function (r) {
                    var t = (function (r) {
                      var t = Number(r);
                      return isNaN(t)
                        ? 0
                        : 0 !== t && isFinite(t)
                        ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
                        : t;
                    })(r);
                    return Math.min(Math.max(t, 0), e);
                  }),
                  function (r) {
                    var e = Object(r);
                    if (null == r)
                      throw new TypeError(
                        "Array.from requires an array-like object - not null or undefined"
                      );
                    var o,
                      i = arguments.length > 1 ? arguments[1] : void 0;
                    if (void 0 !== i) {
                      if (!t(i))
                        throw new TypeError(
                          "Array.from: when provided, the second argument must be a function"
                        );
                      arguments.length > 2 && (o = arguments[2]);
                    }
                    for (
                      var a,
                        f = n(e.length),
                        u = t(this) ? Object(new this(f)) : new Array(f),
                        l = 0;
                      l < f;
  
                    )
                      (a = e[l]),
                        (u[l] = i
                          ? void 0 === o
                            ? i(a, l)
                            : i.call(o, a, l)
                          : a),
                        (l += 1);
                    return (u.length = f), u;
                  })),
              Array.prototype.includes ||
                Object.defineProperty(Array.prototype, "includes", {
                  value: function (r, t) {
                    if (null == this)
                      throw new TypeError('"this" is null or not defined');
                    var e = Object(this),
                      n = e.length >>> 0;
                    if (0 === n) return !1;
                    var o,
                      i,
                      a = 0 | t,
                      f = Math.max(a >= 0 ? a : n - Math.abs(a), 0);
                    for (; f < n; ) {
                      if (
                        (o = e[f]) === (i = r) ||
                        ("number" == typeof o &&
                          "number" == typeof i &&
                          isNaN(o) &&
                          isNaN(i))
                      )
                        return !0;
                      f++;
                    }
                    return !1;
                  },
                }),
              Array.prototype.some ||
                (Array.prototype.some = function (r) {
                  if (null == this)
                    throw new TypeError(
                      "Array.prototype.some called on null or undefined"
                    );
                  if ("function" != typeof r) throw new TypeError();
                  for (
                    var t = Object(this),
                      e = t.length >>> 0,
                      n = arguments.length >= 2 ? arguments[1] : void 0,
                      o = 0;
                    o < e;
                    o++
                  )
                    if (o in t && r.call(n, t[o], o, t)) return !0;
                  return !1;
                }),
              Array.prototype.every ||
                (Array.prototype.every = function (r, t) {
                  var e, n;
                  if (null == this)
                    throw new TypeError("this is null or not defined");
                  var o = Object(this),
                    i = o.length >>> 0;
                  if ("function" != typeof r) throw new TypeError();
                  for (arguments.length > 1 && (e = t), n = 0; n < i; ) {
                    var a;
                    if (n in o) if (((a = o[n]), !r.call(e, a, n, o))) return !1;
                    n++;
                  }
                  return !0;
                }),
              "function" != typeof Object.assign &&
                Object.defineProperty(Object, "assign", {
                  value: function (r, t) {
                    if (null == r)
                      throw new TypeError(
                        "Cannot convert undefined or null to object"
                      );
                    for (var e = Object(r), n = 1; n < arguments.length; n++) {
                      var o = arguments[n];
                      if (null != o)
                        for (var i in o)
                          Object.prototype.hasOwnProperty.call(o, i) &&
                            (e[i] = o[i]);
                    }
                    return e;
                  },
                  writable: !0,
                  configurable: !0,
                }),
              (function () {
                if (
                  "undefined" == typeof window ||
                  "function" == typeof window.CustomEvent
                )
                  return !1;
                function r(r, t) {
                  t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                  var e = document.createEvent("CustomEvent");
                  return (
                    e.initCustomEvent(r, t.bubbles, t.cancelable, t.detail), e
                  );
                }
                (r.prototype = window.Event.prototype), (window.CustomEvent = r);
              })();
          });
        },
        {},
      ],
      zY0S: [
        function (require, module, exports) {
          "use strict";
          function e(t) {
            return (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(t);
          }
          function t(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          function n(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
          }
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var r = (function () {
              function o() {
                t(this, o);
              }
              return (
                n(o, null, [
                  {
                    key: "extend",
                    value: function () {
                      for (
                        var e = {},
                          t = function (t) {
                            for (var n in t)
                              t.hasOwnProperty(n) &&
                                ("[object Object]" ===
                                Object.prototype.toString.call(t[n])
                                  ? (e[n] = o.extend(e[n], t[n]))
                                  : void 0 !== t[n] && (e[n] = t[n]));
                          },
                          n = 0;
                        n < arguments.length;
                        n++
                      ) {
                        t(arguments[n]);
                      }
                      return e;
                    },
                  },
                  {
                    key: "isElement",
                    value: function (t) {
                      return "object" === e(t) && void 0 !== t.nodeType;
                    },
                  },
                  {
                    key: "isNodeList",
                    value: function (t) {
                      var n = Object.prototype.toString.call(t),
                        r =
                          "object" === e(t) &&
                          /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                            n
                          ) &&
                          "number" == typeof t.length &&
                          (0 === t.length ||
                            ("object" === e(t[0]) && t[0].nodeType > 0));
                      return !r && Array.isArray(t) && t.length > 0
                        ? o.isElement(t[0])
                        : r;
                    },
                  },
                  {
                    key: "matches",
                    value: function (e, t) {
                      return (
                        Element.prototype.matches ||
                          (Element.prototype.matches =
                            Element.prototype.matchesSelector ||
                            Element.prototype.mozMatchesSelector ||
                            Element.prototype.msMatchesSelector ||
                            Element.prototype.oMatchesSelector ||
                            Element.prototype.webkitMatchesSelector ||
                            function (e) {
                              for (
                                var t = (
                                    this.document || this.ownerDocument
                                  ).querySelectorAll(e),
                                  o = t.length;
                                --o >= 0 && t.item(o) !== this;
  
                              );
                              return o > -1;
                            }),
                        e.matches(t)
                      );
                    },
                  },
                  {
                    key: "findParent",
                    value: function (e, t) {
                      if ("function" == typeof e.closest)
                        return e.closest(t) || null;
                      for (
                        Element.prototype.matches ||
                        (Element.prototype.matches =
                          Element.prototype.matchesSelector ||
                          Element.prototype.mozMatchesSelector ||
                          Element.prototype.msMatchesSelector ||
                          Element.prototype.oMatchesSelector ||
                          Element.prototype.webkitMatchesSelector ||
                          function (e) {
                            for (
                              var t = (
                                  this.document || this.ownerDocument
                                ).querySelectorAll(e),
                                o = t.length;
                              --o >= 0 && t.item(o) !== this;
  
                            );
                            return o > -1;
                          });
                        e;
  
                      ) {
                        if (e.matches(t)) return e;
                        e = e.parentElement;
                      }
                      return null;
                    },
                  },
                  {
                    key: "readCookie",
                    value: function (e) {
                      e += "=";
                      for (
                        var t = document.cookie.split(/;\s*/), o = t.length - 1;
                        o >= 0;
                        o--
                      )
                        if (!t[o].indexOf(e)) return t[o].replace(e, "");
                    },
                  },
                  {
                    key: "writeCookie",
                    value: function (e, t, o) {
                      var n =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : "/",
                        r = new Date();
                      r.setDate(r.getDate() + o);
                      var c = null == o ? "" : "; expires=" + r.toUTCString();
                      document.cookie =
                        encodeURIComponent(e) +
                        "=" +
                        encodeURIComponent(t) +
                        c +
                        (n ? "; path=" + n : "") +
                        ";";
                    },
                  },
                  {
                    key: "removeCookie",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "/";
                      document.cookie =
                        e +
                        "=; Path=" +
                        t +
                        "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                    },
                  },
                  {
                    key: "addStyleElement",
                    value: function (e, t) {
                      (t && "head" != t) ||
                        (t =
                          document.head ||
                          document.getElementsByTagName("head")[0]);
                      var o = document.createElement("style");
                      return (
                        o.appendChild(document.createTextNode(e)),
                        t.appendChild(o),
                        o
                      );
                    },
                  },
                  {
                    key: "objectKeys",
                    value: function (e) {
                      if (!Object.keys) {
                        var t,
                          o = [];
                        for (t in e)
                          Object.prototype.hasOwnProperty.call(e, t) && o.push(t);
                        return o;
                      }
                      return Object.keys(e);
                    },
                  },
                  {
                    key: "debounced",
                    value: function (e, t) {
                      var o;
                      return function () {
                        for (
                          var n = arguments.length, r = new Array(n), c = 0;
                          c < n;
                          c++
                        )
                          r[c] = arguments[c];
                        o && clearTimeout(o),
                          (o = setTimeout(function () {
                            t.apply(void 0, r), (o = null);
                          }, e));
                      };
                    },
                  },
                ]),
                o
              );
            })(),
            c = r;
          exports.default = c;
        },
        {},
      ],
      mx8w: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var t = e(require("./util"));
          function e(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function s(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function r(t, e) {
            for (var s = 0; s < e.length; s++) {
              var r = e[s];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function n(t, e, s) {
            return e && r(t.prototype, e), s && r(t, s), t;
          }
          var o = (function () {
              function e(r, n) {
                s(this, e);
                if (!this.supports()) throw "This browser is not supported";
                return (
                  (this.settings = t.default.extend(
                    {
                      method: "GET",
                      username: null,
                      password: null,
                      data: {},
                      queryParams: {},
                      headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                      },
                      responseType: "text",
                      timeout: null,
                      withCredentials: !1,
                      onProgress: null,
                    },
                    n || {}
                  )),
                  this.xhr(r)
                );
              }
              return (
                n(e, [
                  {
                    key: "supports",
                    value: function () {
                      return (
                        "XMLHttpRequest" in window &&
                        "JSON" in window &&
                        "Promise" in window
                      );
                    },
                  },
                  {
                    key: "parse",
                    value: function (t) {
                      var e;
                      if (
                        "text" !== this.settings.responseType &&
                        "" !== this.settings.responseType
                      ) {
                        var s = t.response;
                        if (
                          "json" === this.settings.responseType &&
                          "string" == typeof s
                        )
                          try {
                            s = JSON.parse(s);
                          } catch (r) {}
                        return { data: s, xhr: t };
                      }
                      try {
                        e = JSON.parse(t.responseText);
                      } catch (r) {
                        e = t.responseText;
                      }
                      return { data: e, xhr: t };
                    },
                  },
                  {
                    key: "param",
                    value: function (t) {
                      if (
                        "string" == typeof t ||
                        "[object FormData]" ===
                          Object.prototype.toString.call(t) ||
                        "[object File]" === Object.prototype.toString.call(t) ||
                        "[object Blob]" === Object.prototype.toString.call(t)
                      )
                        return t;
                      if (
                        /application\/json/i.test(
                          this.settings.headers["Content-type"]
                        ) ||
                        "[object Array]" === Object.prototype.toString.call(t)
                      )
                        return JSON.stringify(t);
                      var e = [];
                      for (var s in t)
                        t.hasOwnProperty(s) &&
                          e.push(
                            encodeURIComponent(s) + "=" + encodeURIComponent(t[s])
                          );
                      return e.join("&");
                    },
                  },
                  {
                    key: "addQueryParams",
                    value: function (t) {
                      if (this.settings.queryParams) {
                        var e = [];
                        for (var s in this.settings.queryParams)
                          this.settings.queryParams.hasOwnProperty(s) &&
                            e.push(s + "=" + this.settings.queryParams[s]);
                        if (e.length > 0) {
                          var r = e.join("&");
                          return -1 === t.indexOf("?")
                            ? t + "?" + r
                            : t + "&" + r;
                        }
                      }
                      return t;
                    },
                  },
                  {
                    key: "xhr",
                    value: function (t) {
                      var e = this,
                        s = new XMLHttpRequest(),
                        r = new Promise(function (r, n) {
                          for (var o in ((s.onreadystatechange = function () {
                            if (4 === s.readyState) {
                              var t = e.parse(s);
                              s.status >= 200 && s.status < 300 ? r(t) : n(t);
                            }
                          }),
                          (t = e.addQueryParams(t)),
                          s.open(
                            e.settings.method,
                            t,
                            !0,
                            e.settings.username,
                            e.settings.password
                          ),
                          (s.responseType = e.settings.responseType),
                          e.settings.headers))
                            e.settings.headers.hasOwnProperty(o) &&
                              s.setRequestHeader(o, e.settings.headers[o]);
                          e.settings.timeout &&
                            ((s.timeout = e.settings.timeout),
                            (s.ontimeout = function (t) {
                              n({ status: 408, statusText: "Request timeout" });
                            })),
                            e.settings.withCredentials &&
                              (s.withCredentials = !0),
                            e.settings.onProgress &&
                              (s.upload.onprogress = e.settings.onProgress),
                            s.send(e.param(e.settings.data));
                        });
                      return (
                        (r.cancel = function () {
                          s.abort();
                        }),
                        r
                      );
                    },
                  },
                ]),
                e
              );
            })(),
            i = o;
          exports.default = i;
        },
        { "./util": "zY0S" },
      ],
      UfwE: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var t = n(require("./request")),
            e = n(require("./util"));
          function n(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function a(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function s(t, e) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(t, a.key, a);
            }
          }
          function i(t, e, n) {
            return e && s(t.prototype, e), n && s(t, n), t;
          }
          var r = (function () {
              function n(t) {
                a(this, n);
                (this.settings = e.default.extend(
                  { api: "", path: "/api/upload", queryParams: {} },
                  t || {}
                )),
                  this.findToken();
              }
              return (
                i(n, [
                  {
                    key: "findToken",
                    value: function () {
                      var t = e.default.readCookie("token");
                      t && (this.settings.queryParams.token = t);
                    },
                  },
                  {
                    key: "fromNative",
                    value: function (t) {
                      return {
                        name: t.name ? t.name : "",
                        size: t.size,
                        mimeType: t.type,
                        meta: {},
                        _file: t,
                      };
                    },
                  },
                  {
                    key: "saveFile",
                    value: function (n) {
                      var a = this;
                      return (
                        this.settings.queryParams.token || this.findToken(),
                        new t.default(this.settings.api + this.settings.path, {
                          method: "POST",
                          responseType: "json",
                          headers: { "Content-type": "application/json" },
                          withCredentials: !0,
                          data: n,
                          queryParams: this.settings.queryParams,
                        })
                          .then(function (t) {
                            if (!a.settings.queryParams.token && t.data.token) {
                              var n = t.data.token;
                              e.default.writeCookie("token", n, 10, "/"),
                                (a.settings.queryParams.token = n);
                            }
                            return t.data;
                          })
                          .catch(function (t) {
                            throw t;
                          })
                      );
                    },
                  },
                  {
                    key: "removeFile",
                    value: function (e) {
                      return new t.default(
                        this.settings.api + this.settings.path + "/" + e.uuid,
                        {
                          method: "DELETE",
                          responseType: "json",
                          withCredentials: !0,
                          queryParams: this.settings.queryParams,
                        }
                      )
                        .then(function (t) {
                          return t.data;
                        })
                        .catch(function (t) {
                          throw t;
                        });
                    },
                  },
                  {
                    key: "fetchFiles",
                    value: function () {
                      return new t.default(
                        this.settings.api + this.settings.path,
                        {
                          method: "GET",
                          responseType: "json",
                          withCredentials: !0,
                          queryParams: this.settings.queryParams,
                        }
                      )
                        .then(function (t) {
                          return t.data;
                        })
                        .catch(function (t) {
                          throw t;
                        });
                    },
                  },
                  {
                    key: "restoreFiles",
                    value: function (e) {
                      return new t.default(
                        this.settings.api + this.settings.path + "/restore",
                        {
                          method: "POST",
                          responseType: "json",
                          headers: { "Content-type": "application/json" },
                          withCredentials: !0,
                          data: e,
                          queryParams: this.settings.queryParams,
                        }
                      )
                        .then(function (t) {
                          return t.data;
                        })
                        .catch(function (t) {
                          throw t;
                        });
                    },
                  },
                  {
                    key: "sendTemplate",
                    value: function (e, n) {
                      return new t.default(
                        this.settings.api +
                          this.settings.path +
                          "/" +
                          e +
                          "/send",
                        {
                          method: "POST",
                          responseType: "json",
                          headers: { "Content-type": "application/json" },
                          withCredentials: !0,
                          data: n,
                          queryParams: this.settings.queryParams,
                        }
                      )
                        .then(function (t) {
                          return t.data;
                        })
                        .catch(function (t) {
                          throw t;
                        });
                    },
                  },
                  {
                    key: "tagOrder",
                    value: function (e, n) {
                      return new t.default(
                        this.settings.api + this.settings.path + "/" + e + "/tag",
                        {
                          method: "POST",
                          responseType: "json",
                          headers: { "Content-type": "application/json" },
                          withCredentials: !0,
                          data: n,
                          queryParams: this.settings.queryParams,
                        }
                      )
                        .then(function (t) {
                          return t.data;
                        })
                        .catch(function (t) {
                          throw t;
                        });
                    },
                  },
                  {
                    key: "inAppFailed",
                    value: function (e) {
                      return new t.default(
                        this.settings.api +
                          this.settings.path +
                          "/inapp" +
                          (e ? "?reload=1" : ""),
                        {
                          method: "POST",
                          responseType: "text",
                          headers: { "Content-type": "application/json" },
                          withCredentials: !0,
                          queryParams: this.settings.queryParams,
                        }
                      )
                        .then(function (t) {
                          return t.data;
                        })
                        .catch(function (t) {
                          throw t;
                        });
                    },
                  },
                ]),
                n
              );
            })(),
            o = r;
          exports.default = o;
        },
        { "./request": "mx8w", "./util": "zY0S" },
      ],
      ohSP: [
        function (require, module, exports) {
          var define;
          var e;
          !(function (o, n) {
            "use strict";
            "function" == typeof e && e.amd
              ? e(n)
              : "object" == typeof module && module.exports
              ? (module.exports = n())
              : (o.log = n());
          })(this, function () {
            "use strict";
            var e = function () {},
              o = "undefined",
              n =
                typeof window !== o &&
                typeof window.navigator !== o &&
                /Trident\/|MSIE /.test(window.navigator.userAgent),
              t = ["trace", "debug", "info", "warn", "error"];
            function l(e, o) {
              var n = e[o];
              if ("function" == typeof n.bind) return n.bind(e);
              try {
                return Function.prototype.bind.call(n, e);
              } catch (t) {
                return function () {
                  return Function.prototype.apply.apply(n, [e, arguments]);
                };
              }
            }
            function i() {
              console.log &&
                (console.log.apply
                  ? console.log.apply(console, arguments)
                  : Function.prototype.apply.apply(console.log, [
                      console,
                      arguments,
                    ])),
                console.trace && console.trace();
            }
            function r(o, n) {
              for (var l = 0; l < t.length; l++) {
                var i = t[l];
                this[i] = l < o ? e : this.methodFactory(i, o, n);
              }
              this.log = this.debug;
            }
            function c(t, c, a) {
              return (
                (function (t) {
                  return (
                    "debug" === t && (t = "log"),
                    typeof console !== o &&
                      ("trace" === t && n
                        ? i
                        : void 0 !== console[t]
                        ? l(console, t)
                        : void 0 !== console.log
                        ? l(console, "log")
                        : e)
                  );
                })(t) ||
                function (e, n, t) {
                  return function () {
                    typeof console !== o &&
                      (r.call(this, n, t), this[e].apply(this, arguments));
                  };
                }.apply(this, arguments)
              );
            }
            function a(e, n, l) {
              var i,
                a = this,
                u = "loglevel";
              function s() {
                var e;
                if (typeof window !== o) {
                  try {
                    e = window.localStorage[u];
                  } catch (l) {}
                  if (typeof e === o)
                    try {
                      var n = window.document.cookie,
                        t = n.indexOf(encodeURIComponent(u) + "=");
                      -1 !== t && (e = /^([^;]+)/.exec(n.slice(t))[1]);
                    } catch (l) {}
                  return void 0 === a.levels[e] && (e = void 0), e;
                }
              }
              e && (u += ":" + e),
                (a.name = e),
                (a.levels = {
                  TRACE: 0,
                  DEBUG: 1,
                  INFO: 2,
                  WARN: 3,
                  ERROR: 4,
                  SILENT: 5,
                }),
                (a.methodFactory = l || c),
                (a.getLevel = function () {
                  return i;
                }),
                (a.setLevel = function (n, l) {
                  if (
                    ("string" == typeof n &&
                      void 0 !== a.levels[n.toUpperCase()] &&
                      (n = a.levels[n.toUpperCase()]),
                    !("number" == typeof n && n >= 0 && n <= a.levels.SILENT))
                  )
                    throw "log.setLevel() called with invalid level: " + n;
                  if (
                    ((i = n),
                    !1 !== l &&
                      (function (e) {
                        var n = (t[e] || "silent").toUpperCase();
                        if (typeof window !== o) {
                          try {
                            return void (window.localStorage[u] = n);
                          } catch (l) {}
                          try {
                            window.document.cookie =
                              encodeURIComponent(u) + "=" + n + ";";
                          } catch (l) {}
                        }
                      })(n),
                    r.call(a, n, e),
                    typeof console === o && n < a.levels.SILENT)
                  )
                    return "No console available for logging";
                }),
                (a.setDefaultLevel = function (e) {
                  s() || a.setLevel(e, !1);
                }),
                (a.enableAll = function (e) {
                  a.setLevel(a.levels.TRACE, e);
                }),
                (a.disableAll = function (e) {
                  a.setLevel(a.levels.SILENT, e);
                });
              var f = s();
              null == f && (f = null == n ? "WARN" : n), a.setLevel(f, !1);
            }
            var u = new a(),
              s = {};
            u.getLogger = function (e) {
              if ("string" != typeof e || "" === e)
                throw new TypeError(
                  "You must supply a name when creating a logger."
                );
              var o = s[e];
              return o || (o = s[e] = new a(e, u.getLevel(), u.methodFactory)), o;
            };
            var f = typeof window !== o ? window.log : void 0;
            return (
              (u.noConflict = function () {
                return (
                  typeof window !== o && window.log === u && (window.log = f), u
                );
              }),
              (u.getLoggers = function () {
                return s;
              }),
              u
            );
          });
        },
        {},
      ],
      IkY8: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = o(require("./request")),
            t = a(require("loglevel")),
            n = o(require("./util"));
          function r(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              n = new WeakMap();
            return (r = function (e) {
              return e ? n : t;
            })(e);
          }
          function a(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(t);
            if (n && n.has(e)) return n.get(e);
            var a = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
              if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(a, u, i)
                  : (a[u] = e[u]);
              }
            return (a.default = e), n && n.set(e, a), a;
          }
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function u(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function l(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
          }
          var f = (function () {
            function r() {
              u(this, r);
            }
            return (
              l(r, null, [
                {
                  key: "get",
                  value: function (e, t) {
                    var n = r.translations[e] || e;
                    if (t)
                      for (var a in t)
                        t.hasOwnProperty(a) &&
                          (n = n.replace(new RegExp("{" + a + "}", "g"), t[a]));
                    return n;
                  },
                },
                {
                  key: "translate",
                  value: function (e, t) {
                    if (e && "string" == typeof e) {
                      if ("#" === e.charAt(0))
                        return r.get(e.substr(1).trim(), t);
                      if (-1 !== e.indexOf("#{")) {
                        for (var n = e; -1 !== n.indexOf("#{"); ) {
                          var a = n.indexOf("#{"),
                            o = n.indexOf("}"),
                            u = n.substring(a + 2, o),
                            i = r.get(u, t);
                          n = n.replace("#{" + u + "}", i);
                        }
                        return n;
                      }
                    }
                    return e;
                  },
                },
                {
                  key: "fetch",
                  value: function (n) {
                    var a = r.api.replace("{locale}", n),
                      o = new e.default(a, { method: "GET" });
                    return (
                      (r.ready = o
                        .then(function (e) {
                          return (
                            t.debug("[translate] " + a + " response", e.data),
                            r.update(e.data),
                            r.translations
                          );
                        })
                        .catch(function (e) {
                          return (
                            t.error("[translate] " + a + " error", e),
                            r.translations
                          );
                        })),
                      r.ready
                    );
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    (r.translations = n.default.extend(r.translations, e)),
                      r.updated();
                  },
                },
                {
                  key: "updated",
                  value: function () {
                    var e = new CustomEvent(r.event, {
                      detail: {},
                      cancelable: !0,
                      bubbles: !0,
                    });
                    window.dispatchEvent(e);
                  },
                },
                {
                  key: "onUpdated",
                  value: function (e) {
                    window.addEventListener(r.event, e);
                  },
                },
              ]),
              r
            );
          })();
          (f.locale =
            window.Shopify && window.Shopify.locale
              ? window.Shopify.locale
              : document.documentElement.lang),
            (f.translations = {}),
            (f.ready = Promise.resolve(!0)),
            (f.event = "cloudlift.translate"),
            (f.api = "");
          var c = f;
          exports.default = c;
        },
        { "./request": "mx8w", loglevel: "ohSP", "./util": "zY0S" },
      ],
      g5IB: [
        function (require, module, exports) {
          var t,
            e,
            n = (module.exports = {});
          function r() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function i(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === r || !t) && setTimeout)
              return (t = setTimeout), setTimeout(e, 0);
            try {
              return t(e, 0);
            } catch (n) {
              try {
                return t.call(null, e, 0);
              } catch (n) {
                return t.call(this, e, 0);
              }
            }
          }
          function u(t) {
            if (e === clearTimeout) return clearTimeout(t);
            if ((e === o || !e) && clearTimeout)
              return (e = clearTimeout), clearTimeout(t);
            try {
              return e(t);
            } catch (n) {
              try {
                return e.call(null, t);
              } catch (n) {
                return e.call(this, t);
              }
            }
          }
          !(function () {
            try {
              t = "function" == typeof setTimeout ? setTimeout : r;
            } catch (n) {
              t = r;
            }
            try {
              e = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (n) {
              e = o;
            }
          })();
          var c,
            s = [],
            l = !1,
            a = -1;
          function f() {
            l &&
              c &&
              ((l = !1),
              c.length ? (s = c.concat(s)) : (a = -1),
              s.length && h());
          }
          function h() {
            if (!l) {
              var t = i(f);
              l = !0;
              for (var e = s.length; e; ) {
                for (c = s, s = []; ++a < e; ) c && c[a].run();
                (a = -1), (e = s.length);
              }
              (c = null), (l = !1), u(t);
            }
          }
          function m(t, e) {
            (this.fun = t), (this.array = e);
          }
          function p() {}
          (n.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            s.push(new m(t, e)), 1 !== s.length || l || i(h);
          }),
            (m.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (n.title = "browser"),
            (n.env = {}),
            (n.argv = []),
            (n.version = ""),
            (n.versions = {}),
            (n.on = p),
            (n.addListener = p),
            (n.once = p),
            (n.off = p),
            (n.removeListener = p),
            (n.removeAllListeners = p),
            (n.emit = p),
            (n.prependListener = p),
            (n.prependOnceListener = p),
            (n.listeners = function (t) {
              return [];
            }),
            (n.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (n.cwd = function () {
              return "/";
            }),
            (n.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (n.umask = function () {
              return 0;
            });
        },
        {},
      ],
      uX4S: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var process = require("process");
          var e,
            t = arguments[3],
            n = require("process");
          !(function (t, n) {
            "object" == typeof exports && "undefined" != typeof module
              ? n(exports)
              : "function" == typeof e && e.amd
              ? e(["exports"], n)
              : n(((t = t || self).FilePond = {}));
          })(this, function (e) {
            "use strict";
            var t = function (e, t) {
                for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
              },
              n = function (e) {
                var n = {};
                return (
                  t(e, function (t) {
                    !(function (e, t, n) {
                      "function" != typeof n
                        ? Object.defineProperty(e, t, Object.assign({}, n))
                        : (e[t] = n);
                    })(n, t, e[t]);
                  }),
                  n
                );
              },
              r = function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                if (null === n) return e.getAttribute(t) || e.hasAttribute(t);
                e.setAttribute(t, n);
              },
              o = ["svg", "path"],
              i = function (e) {
                return o.includes(e);
              },
              a = function (e, n) {
                var o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                "object" == typeof n && ((o = n), (n = null));
                var a = i(e)
                  ? document.createElementNS("http://www.w3.org/2000/svg", e)
                  : document.createElement(e);
                return (
                  n && (i(e) ? r(a, "class", n) : (a.className = n)),
                  t(o, function (e, t) {
                    r(a, e, t);
                  }),
                  a
                );
              },
              u = function (e, t) {
                return function (e, n) {
                  return void 0 !== n ? t.splice(n, 0, e) : t.push(e), e;
                };
              },
              s = function (e, t) {
                return function (n) {
                  return (
                    t.splice(t.indexOf(n), 1),
                    n.element.parentNode && e.removeChild(n.element),
                    n
                  );
                };
              },
              l = "undefined" != typeof window && void 0 !== window.document,
              c = function () {
                return l;
              },
              f =
                "children" in (c() ? a("svg") : {})
                  ? function (e) {
                      return e.children.length;
                    }
                  : function (e) {
                      return e.childNodes.length;
                    },
              d = function (e, t, n, r) {
                var o = n[0] || e.left,
                  i = n[1] || e.top,
                  a = o + e.width,
                  u = i + e.height * (r[1] || 1),
                  s = {
                    element: Object.assign({}, e),
                    inner: {
                      left: e.left,
                      top: e.top,
                      right: e.right,
                      bottom: e.bottom,
                    },
                    outer: { left: o, top: i, right: a, bottom: u },
                  };
                return (
                  t
                    .filter(function (e) {
                      return !e.isRectIgnored();
                    })
                    .map(function (e) {
                      return e.rect;
                    })
                    .forEach(function (e) {
                      p(s.inner, Object.assign({}, e.inner)),
                        p(s.outer, Object.assign({}, e.outer));
                    }),
                  E(s.inner),
                  (s.outer.bottom += s.element.marginBottom),
                  (s.outer.right += s.element.marginRight),
                  E(s.outer),
                  s
                );
              },
              p = function (e, t) {
                (t.top += e.top),
                  (t.right += e.left),
                  (t.bottom += e.top),
                  (t.left += e.left),
                  t.bottom > e.bottom && (e.bottom = t.bottom),
                  t.right > e.right && (e.right = t.right);
              },
              E = function (e) {
                (e.width = e.right - e.left), (e.height = e.bottom - e.top);
              },
              _ = function (e) {
                return "number" == typeof e;
              },
              T = function (e) {
                return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
              },
              I = {
                spring: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.stiffness,
                    r = void 0 === t ? 0.5 : t,
                    o = e.damping,
                    i = void 0 === o ? 0.75 : o,
                    a = e.mass,
                    u = void 0 === a ? 10 : a,
                    s = null,
                    l = null,
                    c = 0,
                    f = !1,
                    d = n({
                      interpolate: function (e, t) {
                        if (!f) {
                          if (!_(s) || !_(l)) return (f = !0), void (c = 0);
                          (function (e, t, n) {
                            var r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : 0.001;
                            return Math.abs(e - t) < r && Math.abs(n) < r;
                          })((l += c += (-(l - s) * r) / u), s, (c *= i)) || t
                            ? ((l = s),
                              (c = 0),
                              (f = !0),
                              d.onupdate(l),
                              d.oncomplete(l))
                            : d.onupdate(l);
                        }
                      },
                      target: {
                        set: function (e) {
                          if (
                            (_(e) && !_(l) && (l = e),
                            null === s && ((s = e), (l = e)),
                            l === (s = e) || void 0 === s)
                          )
                            return (
                              (f = !0),
                              (c = 0),
                              d.onupdate(l),
                              void d.oncomplete(l)
                            );
                          f = !1;
                        },
                        get: function () {
                          return s;
                        },
                      },
                      resting: {
                        get: function () {
                          return f;
                        },
                      },
                      onupdate: function (e) {},
                      oncomplete: function (e) {},
                    });
                  return d;
                },
                tween: function () {
                  var e,
                    t,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    o = r.duration,
                    i = void 0 === o ? 500 : o,
                    a = r.easing,
                    u = void 0 === a ? T : a,
                    s = r.delay,
                    l = void 0 === s ? 0 : s,
                    c = null,
                    f = !0,
                    d = !1,
                    p = null,
                    E = n({
                      interpolate: function (n, r) {
                        f ||
                          null === p ||
                          (null === c && (c = n),
                          n - c < l ||
                            ((e = n - c - l) >= i || r
                              ? ((e = 1),
                                (t = d ? 0 : 1),
                                E.onupdate(t * p),
                                E.oncomplete(t * p),
                                (f = !0))
                              : ((t = e / i),
                                E.onupdate(
                                  (e >= 0 ? u(d ? 1 - t : t) : 0) * p
                                ))));
                      },
                      target: {
                        get: function () {
                          return d ? 0 : p;
                        },
                        set: function (e) {
                          if (null === p)
                            return (p = e), E.onupdate(e), void E.oncomplete(e);
                          e < p ? ((p = 1), (d = !0)) : ((d = !1), (p = e)),
                            (f = !1),
                            (c = null);
                        },
                      },
                      resting: {
                        get: function () {
                          return f;
                        },
                      },
                      onupdate: function (e) {},
                      oncomplete: function (e) {},
                    });
                  return E;
                },
              },
              v = function (e, t, n) {
                var r = e[t] && "object" == typeof e[t][n] ? e[t][n] : e[t] || e,
                  o = "string" == typeof r ? r : r.type,
                  i = "object" == typeof r ? Object.assign({}, r) : {};
                return I[o] ? I[o](i) : null;
              },
              m = function (e, t, n) {
                var r =
                  arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                (t = Array.isArray(t) ? t : [t]).forEach(function (t) {
                  e.forEach(function (e) {
                    var o = e,
                      i = function () {
                        return n[e];
                      },
                      a = function (t) {
                        return (n[e] = t);
                      };
                    "object" == typeof e &&
                      ((o = e.key), (i = e.getter || i), (a = e.setter || a)),
                      (t[o] && !r) || (t[o] = { get: i, set: a });
                  });
                });
              },
              g = function (e) {
                return null != e;
              },
              h = {
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                translateX: 0,
                translateY: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                originX: 0,
                originY: 0,
              },
              R = function (e, t) {
                if (Object.keys(e).length !== Object.keys(t).length) return !0;
                for (var n in t) if (t[n] !== e[n]) return !0;
                return !1;
              },
              O = function (e, t) {
                var n = t.opacity,
                  r = t.perspective,
                  o = t.translateX,
                  i = t.translateY,
                  a = t.scaleX,
                  u = t.scaleY,
                  s = t.rotateX,
                  l = t.rotateY,
                  c = t.rotateZ,
                  f = t.originX,
                  d = t.originY,
                  p = t.width,
                  E = t.height,
                  _ = "",
                  T = "";
                (g(f) || g(d)) &&
                  (T +=
                    "transform-origin: " + (f || 0) + "px " + (d || 0) + "px;"),
                  g(r) && (_ += "perspective(" + r + "px) "),
                  (g(o) || g(i)) &&
                    (_ +=
                      "translate3d(" + (o || 0) + "px, " + (i || 0) + "px, 0) "),
                  (g(a) || g(u)) &&
                    (_ +=
                      "scale3d(" +
                      (g(a) ? a : 1) +
                      ", " +
                      (g(u) ? u : 1) +
                      ", 1) "),
                  g(c) && (_ += "rotateZ(" + c + "rad) "),
                  g(s) && (_ += "rotateX(" + s + "rad) "),
                  g(l) && (_ += "rotateY(" + l + "rad) "),
                  _.length && (T += "transform:" + _ + ";"),
                  g(n) &&
                    ((T += "opacity:" + n + ";"),
                    0 === n && (T += "visibility:hidden;"),
                    n < 1 && (T += "pointer-events:none;")),
                  g(E) && (T += "height:" + E + "px;"),
                  g(p) && (T += "width:" + p + "px;");
                var I = e.elementCurrentStyle || "";
                (T.length === I.length && T === I) ||
                  ((e.style.cssText = T), (e.elementCurrentStyle = T));
              },
              y = {
                styles: function (e) {
                  var t = e.mixinConfig,
                    n = e.viewProps,
                    r = e.viewInternalAPI,
                    o = e.viewExternalAPI,
                    i = e.view,
                    a = Object.assign({}, n),
                    u = {};
                  m(t, [r, o], n);
                  var s = function () {
                    return i.rect
                      ? d(
                          i.rect,
                          i.childViews,
                          [n.translateX || 0, n.translateY || 0],
                          [n.scaleX || 0, n.scaleY || 0]
                        )
                      : null;
                  };
                  return (
                    (r.rect = { get: s }),
                    (o.rect = { get: s }),
                    t.forEach(function (e) {
                      n[e] = void 0 === a[e] ? h[e] : a[e];
                    }),
                    {
                      write: function () {
                        if (R(u, n))
                          return (
                            O(i.element, n),
                            Object.assign(u, Object.assign({}, n)),
                            !0
                          );
                      },
                      destroy: function () {},
                    }
                  );
                },
                listeners: function (e) {
                  e.mixinConfig, e.viewProps, e.viewInternalAPI;
                  var t,
                    n = e.viewExternalAPI,
                    r = (e.viewState, e.view),
                    o = [],
                    i =
                      ((t = r.element),
                      function (e, n) {
                        t.addEventListener(e, n);
                      }),
                    a = (function (e) {
                      return function (t, n) {
                        e.removeEventListener(t, n);
                      };
                    })(r.element);
                  return (
                    (n.on = function (e, t) {
                      o.push({ type: e, fn: t }), i(e, t);
                    }),
                    (n.off = function (e, t) {
                      o.splice(
                        o.findIndex(function (n) {
                          return n.type === e && n.fn === t;
                        }),
                        1
                      ),
                        a(e, t);
                    }),
                    {
                      write: function () {
                        return !0;
                      },
                      destroy: function () {
                        o.forEach(function (e) {
                          a(e.type, e.fn);
                        });
                      },
                    }
                  );
                },
                animations: function (e) {
                  var n = e.mixinConfig,
                    r = e.viewProps,
                    o = e.viewInternalAPI,
                    i = e.viewExternalAPI,
                    a = Object.assign({}, r),
                    u = [];
                  return (
                    t(n, function (e, t) {
                      var n = v(t);
                      n &&
                        ((n.onupdate = function (t) {
                          r[e] = t;
                        }),
                        (n.target = a[e]),
                        m(
                          [
                            {
                              key: e,
                              setter: function (e) {
                                n.target !== e && (n.target = e);
                              },
                              getter: function () {
                                return r[e];
                              },
                            },
                          ],
                          [o, i],
                          r,
                          !0
                        ),
                        u.push(n));
                    }),
                    {
                      write: function (e) {
                        var t = document.hidden,
                          n = !0;
                        return (
                          u.forEach(function (r) {
                            r.resting || (n = !1), r.interpolate(e, t);
                          }),
                          n
                        );
                      },
                      destroy: function () {},
                    }
                  );
                },
                apis: function (e) {
                  var t = e.mixinConfig,
                    n = e.viewProps,
                    r = e.viewExternalAPI;
                  m(t, r, n);
                },
              },
              D = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return (
                  t.layoutCalculated ||
                    ((e.paddingTop = parseInt(n.paddingTop, 10) || 0),
                    (e.marginTop = parseInt(n.marginTop, 10) || 0),
                    (e.marginRight = parseInt(n.marginRight, 10) || 0),
                    (e.marginBottom = parseInt(n.marginBottom, 10) || 0),
                    (e.marginLeft = parseInt(n.marginLeft, 10) || 0),
                    (t.layoutCalculated = !0)),
                  (e.left = t.offsetLeft || 0),
                  (e.top = t.offsetTop || 0),
                  (e.width = t.offsetWidth || 0),
                  (e.height = t.offsetHeight || 0),
                  (e.right = e.left + e.width),
                  (e.bottom = e.top + e.height),
                  (e.scrollTop = t.scrollTop),
                  (e.hidden = null === t.offsetParent),
                  e
                );
              },
              S = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.tag,
                  r = void 0 === t ? "div" : t,
                  o = e.name,
                  i = void 0 === o ? null : o,
                  l = e.attributes,
                  c = void 0 === l ? {} : l,
                  p = e.read,
                  E = void 0 === p ? function () {} : p,
                  _ = e.write,
                  T = void 0 === _ ? function () {} : _,
                  I = e.create,
                  v = void 0 === I ? function () {} : I,
                  m = e.destroy,
                  g = void 0 === m ? function () {} : m,
                  h = e.filterFrameActionsForChild,
                  R =
                    void 0 === h
                      ? function (e, t) {
                          return t;
                        }
                      : h,
                  O = e.didCreateView,
                  S = void 0 === O ? function () {} : O,
                  A = e.didWriteView,
                  P = void 0 === A ? function () {} : A,
                  b = e.ignoreRect,
                  L = void 0 !== b && b,
                  M = e.ignoreRectUpdate,
                  w = void 0 !== M && M,
                  C = e.mixins,
                  N = void 0 === C ? [] : C;
                return function (e) {
                  var t,
                    o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    l = a(r, "filepond--" + i, c),
                    p = window.getComputedStyle(l, null),
                    _ = D(),
                    I = null,
                    m = !1,
                    h = [],
                    O = [],
                    A = {},
                    b = {},
                    M = [T],
                    C = [E],
                    G = [g],
                    U = function () {
                      return l;
                    },
                    B = function () {
                      return h.concat();
                    },
                    q = function () {
                      return I || (I = d(_, h, [0, 0], [1, 1]));
                    },
                    V = {
                      element: { get: U },
                      style: {
                        get: function () {
                          return p;
                        },
                      },
                      childViews: { get: B },
                    },
                    F = Object.assign({}, V, {
                      rect: { get: q },
                      ref: {
                        get: function () {
                          return A;
                        },
                      },
                      is: function (e) {
                        return i === e;
                      },
                      appendChild:
                        ((t = l),
                        function (e, n) {
                          void 0 !== n && t.children[n]
                            ? t.insertBefore(e, t.children[n])
                            : t.appendChild(e);
                        }),
                      createChildView: (function (e) {
                        return function (t, n) {
                          return t(e, n);
                        };
                      })(e),
                      linkView: function (e) {
                        return h.push(e), e;
                      },
                      unlinkView: function (e) {
                        h.splice(h.indexOf(e), 1);
                      },
                      appendChildView: u(0, h),
                      removeChildView: s(l, h),
                      registerWriter: function (e) {
                        return M.push(e);
                      },
                      registerReader: function (e) {
                        return C.push(e);
                      },
                      registerDestroyer: function (e) {
                        return G.push(e);
                      },
                      invalidateLayout: function () {
                        return (l.layoutCalculated = !1);
                      },
                      dispatch: e.dispatch,
                      query: e.query,
                    }),
                    x = {
                      element: { get: U },
                      childViews: { get: B },
                      rect: { get: q },
                      resting: {
                        get: function () {
                          return m;
                        },
                      },
                      isRectIgnored: function () {
                        return L;
                      },
                      _read: function () {
                        (I = null),
                          h.forEach(function (e) {
                            return e._read();
                          }),
                          !(w && _.width && _.height) && D(_, l, p);
                        var e = { root: j, props: o, rect: _ };
                        C.forEach(function (t) {
                          return t(e);
                        });
                      },
                      _write: function (e, t, n) {
                        var r = 0 === t.length;
                        return (
                          M.forEach(function (i) {
                            !1 ===
                              i({
                                props: o,
                                root: j,
                                actions: t,
                                timestamp: e,
                                shouldOptimize: n,
                              }) && (r = !1);
                          }),
                          O.forEach(function (t) {
                            !1 === t.write(e) && (r = !1);
                          }),
                          h
                            .filter(function (e) {
                              return !!e.element.parentNode;
                            })
                            .forEach(function (o) {
                              o._write(e, R(o, t), n) || (r = !1);
                            }),
                          h.forEach(function (o, i) {
                            o.element.parentNode ||
                              (j.appendChild(o.element, i),
                              o._read(),
                              o._write(e, R(o, t), n),
                              (r = !1));
                          }),
                          (m = r),
                          P({ props: o, root: j, actions: t, timestamp: e }),
                          r
                        );
                      },
                      _destroy: function () {
                        O.forEach(function (e) {
                          return e.destroy();
                        }),
                          G.forEach(function (e) {
                            e({ root: j, props: o });
                          }),
                          h.forEach(function (e) {
                            return e._destroy();
                          });
                      },
                    },
                    Y = Object.assign({}, V, {
                      rect: {
                        get: function () {
                          return _;
                        },
                      },
                    });
                  Object.keys(N)
                    .sort(function (e, t) {
                      return "styles" === e ? 1 : "styles" === t ? -1 : 0;
                    })
                    .forEach(function (e) {
                      var t = y[e]({
                        mixinConfig: N[e],
                        viewProps: o,
                        viewState: b,
                        viewInternalAPI: F,
                        viewExternalAPI: x,
                        view: n(Y),
                      });
                      t && O.push(t);
                    });
                  var j = n(F);
                  v({ root: j, props: o });
                  var k = f(l);
                  return (
                    h.forEach(function (e, t) {
                      j.appendChild(e.element, k + t);
                    }),
                    S(j),
                    n(x)
                  );
                };
              },
              A = function (e, t) {
                return function (n) {
                  var r = n.root,
                    o = n.props,
                    i = n.actions,
                    a = void 0 === i ? [] : i,
                    u = n.timestamp,
                    s = n.shouldOptimize;
                  a
                    .filter(function (t) {
                      return e[t.type];
                    })
                    .forEach(function (t) {
                      return e[t.type]({
                        root: r,
                        props: o,
                        action: t.data,
                        timestamp: u,
                        shouldOptimize: s,
                      });
                    }),
                    t &&
                      t({
                        root: r,
                        props: o,
                        actions: a,
                        timestamp: u,
                        shouldOptimize: s,
                      });
                };
              },
              P = function (e, t) {
                return t.parentNode.insertBefore(e, t);
              },
              b = function (e, t) {
                return t.parentNode.insertBefore(e, t.nextSibling);
              },
              L = function (e) {
                return Array.isArray(e);
              },
              M = function (e) {
                return null == e;
              },
              w = function (e) {
                return e.trim();
              },
              C = function (e) {
                return "" + e;
              },
              N = function (e) {
                return "boolean" == typeof e;
              },
              G = function (e) {
                return N(e) ? e : "true" === e;
              },
              U = function (e) {
                return "string" == typeof e;
              },
              B = function (e) {
                return _(e) ? e : U(e) ? C(e).replace(/[a-z]+/gi, "") : 0;
              },
              q = function (e) {
                return parseInt(B(e), 10);
              },
              V = function (e) {
                return parseFloat(B(e));
              },
              F = function (e) {
                return _(e) && isFinite(e) && Math.floor(e) === e;
              },
              x = function (e) {
                if (F(e)) return e;
                var t = C(e).trim();
                return /MB$/i.test(t)
                  ? ((t = t.replace(/MB$i/, "").trim()), 1e3 * q(t) * 1e3)
                  : /KB/i.test(t)
                  ? ((t = t.replace(/KB$i/, "").trim()), 1e3 * q(t))
                  : q(t);
              },
              Y = function (e) {
                return "function" == typeof e;
              },
              j = {
                process: "POST",
                patch: "PATCH",
                revert: "DELETE",
                fetch: "GET",
                restore: "GET",
                load: "GET",
              },
              k = function (e, t, n, r, o) {
                if (null === t) return null;
                if ("function" == typeof t) return t;
                var i = {
                  url: "GET" === n || "PATCH" === n ? "?" + e + "=" : "",
                  method: n,
                  headers: o,
                  withCredentials: !1,
                  timeout: r,
                  onload: null,
                  ondata: null,
                  onerror: null,
                };
                if (U(t)) return (i.url = t), i;
                if ((Object.assign(i, t), U(i.headers))) {
                  var a = i.headers.split(/:(.+)/);
                  i.headers = { header: a[0], value: a[1] };
                }
                return (i.withCredentials = G(i.withCredentials)), i;
              },
              H = function (e) {
                return "object" == typeof e && null !== e;
              },
              X = function (e) {
                return L(e)
                  ? "array"
                  : (function (e) {
                      return null === e;
                    })(e)
                  ? "null"
                  : F(e)
                  ? "int"
                  : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)
                  ? "bytes"
                  : (function (e) {
                      return (
                        H(e) &&
                        U(e.url) &&
                        H(e.process) &&
                        H(e.revert) &&
                        H(e.restore) &&
                        H(e.fetch)
                      );
                    })(e)
                  ? "api"
                  : typeof e;
              },
              W = {
                array: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ",";
                  return M(e)
                    ? []
                    : L(e)
                    ? e
                    : C(e)
                        .split(t)
                        .map(w)
                        .filter(function (e) {
                          return e.length;
                        });
                },
                boolean: G,
                int: function (e) {
                  return "bytes" === X(e) ? x(e) : q(e);
                },
                number: V,
                float: V,
                bytes: x,
                string: function (e) {
                  return Y(e) ? e : C(e);
                },
                function: function (e) {
                  return (function (e) {
                    for (
                      var t = self, n = e.split("."), r = null;
                      (r = n.shift());
  
                    )
                      if (!(t = t[r])) return null;
                    return t;
                  })(e);
                },
                serverapi: function (e) {
                  return (
                    ((r = {}).url = U((n = e)) ? n : n.url || ""),
                    (r.timeout = n.timeout ? parseInt(n.timeout, 10) : 0),
                    (r.headers = n.headers ? n.headers : {}),
                    t(j, function (e) {
                      r[e] = k(e, n[e], j[e], r.timeout, r.headers);
                    }),
                    (r.remove = n.remove || null),
                    delete r.headers,
                    r
                  );
                  var n, r;
                },
                object: function (e) {
                  try {
                    return JSON.parse(
                      e
                        .replace(/{\s*'/g, '{"')
                        .replace(/'\s*}/g, '"}')
                        .replace(/'\s*:/g, '":')
                        .replace(/:\s*'/g, ':"')
                        .replace(/,\s*'/g, ',"')
                        .replace(/'\s*,/g, '",')
                    );
                  } catch (t) {
                    return null;
                  }
                },
              },
              z = function (e, t, n) {
                if (e === t) return e;
                var r,
                  o = X(e);
                if (o !== n) {
                  var i = ((r = e), W[n](r));
                  if (((o = X(i)), null === i))
                    throw (
                      'Trying to assign value with incorrect type to "' +
                      option +
                      '", allowed type: "' +
                      n +
                      '"'
                    );
                  e = i;
                }
                return e;
              },
              Q = function (e) {
                var r = {};
                return (
                  t(e, function (t) {
                    var n,
                      o,
                      i,
                      a = e[t];
                    r[t] =
                      ((n = a[0]),
                      (o = a[1]),
                      (i = n),
                      {
                        enumerable: !0,
                        get: function () {
                          return i;
                        },
                        set: function (e) {
                          i = z(e, n, o);
                        },
                      });
                  }),
                  n(r)
                );
              },
              $ = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-";
                return e
                  .split(/(?=[A-Z])/)
                  .map(function (e) {
                    return e.toLowerCase();
                  })
                  .join(t);
              },
              Z = function (e) {
                return function (n, r, o) {
                  var i = {};
                  return (
                    t(e, function (e) {
                      var t = $(e, "_").toUpperCase();
                      i["SET_" + t] = function (r) {
                        try {
                          o.options[e] = r.value;
                        } catch (i) {}
                        n("DID_SET_" + t, { value: o.options[e] });
                      };
                    }),
                    i
                  );
                };
              },
              K = function (e) {
                return function (n) {
                  var r = {};
                  return (
                    t(e, function (e) {
                      r["GET_" + $(e, "_").toUpperCase()] = function (t) {
                        return n.options[e];
                      };
                    }),
                    r
                  );
                };
              },
              J = 1,
              ee = 2,
              te = 3,
              ne = 4,
              re = 5,
              oe = function () {
                return Math.random().toString(36).substr(2, 9);
              };
            function ie(e) {
              this.wrapped = e;
            }
            function ae(e) {
              var t, n;
              function r(t, n) {
                try {
                  var i = e[t](n),
                    a = i.value,
                    u = a instanceof ie;
                  Promise.resolve(u ? a.wrapped : a).then(
                    function (e) {
                      u ? r("next", e) : o(i.done ? "return" : "normal", e);
                    },
                    function (e) {
                      r("throw", e);
                    }
                  );
                } catch (s) {
                  o("throw", s);
                }
              }
              function o(e, o) {
                switch (e) {
                  case "return":
                    t.resolve({ value: o, done: !0 });
                    break;
                  case "throw":
                    t.reject(o);
                    break;
                  default:
                    t.resolve({ value: o, done: !1 });
                }
                (t = t.next) ? r(t.key, t.arg) : (n = null);
              }
              (this._invoke = function (e, o) {
                return new Promise(function (i, a) {
                  var u = { key: e, arg: o, resolve: i, reject: a, next: null };
                  n ? (n = n.next = u) : ((t = n = u), r(e, o));
                });
              }),
                "function" != typeof e.return && (this.return = void 0);
            }
            function ue(e, t) {
              if (null == e) return {};
              var n,
                r,
                o = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (o[n] = e[n]));
              }
              return o;
            }
            "function" == typeof Symbol &&
              Symbol.asyncIterator &&
              (ae.prototype[Symbol.asyncIterator] = function () {
                return this;
              }),
              (ae.prototype.next = function (e) {
                return this._invoke("next", e);
              }),
              (ae.prototype.throw = function (e) {
                return this._invoke("throw", e);
              }),
              (ae.prototype.return = function (e) {
                return this._invoke("return", e);
              });
            function se(e) {
              return (
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                      n[t] = e[t];
                    return n;
                  }
                })(e) ||
                le(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance"
                  );
                })()
              );
            }
            function le(e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            }
            var ce,
              fe,
              de = function (e, t) {
                return e.splice(t, 1);
              },
              pe = function () {
                var e = [],
                  t = function (t, n) {
                    de(
                      e,
                      e.findIndex(function (e) {
                        return e.event === t && (e.cb === n || !n);
                      })
                    );
                  },
                  n = function (t, n, r) {
                    e.filter(function (e) {
                      return e.event === t;
                    })
                      .map(function (e) {
                        return e.cb;
                      })
                      .forEach(function (e) {
                        return (function (e, t) {
                          t
                            ? e()
                            : document.hidden
                            ? Promise.resolve(1).then(e)
                            : setTimeout(e, 0);
                        })(function () {
                          return e.apply(void 0, se(n));
                        }, r);
                      });
                  };
                return {
                  fireSync: function (e) {
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    n(e, r, !0);
                  },
                  fire: function (e) {
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    n(e, r, !1);
                  },
                  on: function (t, n) {
                    e.push({ event: t, cb: n });
                  },
                  onOnce: function (n, r) {
                    e.push({
                      event: n,
                      cb: function () {
                        t(n, r), r.apply(void 0, arguments);
                      },
                    });
                  },
                  off: t,
                };
              },
              Ee = function (e, t, n) {
                Object.getOwnPropertyNames(e)
                  .filter(function (e) {
                    return !n.includes(e);
                  })
                  .forEach(function (n) {
                    return Object.defineProperty(
                      t,
                      n,
                      Object.getOwnPropertyDescriptor(e, n)
                    );
                  });
              },
              _e = [
                "fire",
                "process",
                "revert",
                "load",
                "on",
                "off",
                "onOnce",
                "retryLoad",
                "extend",
                "archive",
                "archived",
                "release",
                "released",
                "requestProcessing",
                "freeze",
              ],
              Te = function (e) {
                var t = {};
                return Ee(e, t, _e), t;
              },
              Ie = {
                INIT: 1,
                IDLE: 2,
                PROCESSING_QUEUED: 9,
                PROCESSING: 3,
                PROCESSING_COMPLETE: 5,
                PROCESSING_ERROR: 6,
                PROCESSING_REVERT_ERROR: 10,
                LOADING: 7,
                LOAD_ERROR: 8,
              },
              ve = { INPUT: 1, LIMBO: 2, LOCAL: 3 },
              me = function (e) {
                return /[^0-9]+/.exec(e);
              },
              ge = function () {
                return me((1.1).toLocaleString())[0];
              },
              he = {
                BOOLEAN: "boolean",
                INT: "int",
                NUMBER: "number",
                STRING: "string",
                ARRAY: "array",
                OBJECT: "object",
                FUNCTION: "function",
                ACTION: "action",
                SERVER_API: "serverapi",
                REGEX: "regex",
              },
              Re = [],
              Oe = function (e, t, n) {
                return new Promise(function (r, o) {
                  var i = Re.filter(function (t) {
                    return t.key === e;
                  }).map(function (e) {
                    return e.cb;
                  });
                  if (0 !== i.length) {
                    var a = i.shift();
                    i.reduce(function (e, t) {
                      return e.then(function (e) {
                        return t(e, n);
                      });
                    }, a(t, n))
                      .then(function (e) {
                        return r(e);
                      })
                      .catch(function (e) {
                        return o(e);
                      });
                  } else r(t);
                });
              },
              ye = function (e, t, n) {
                return Re.filter(function (t) {
                  return t.key === e;
                }).map(function (e) {
                  return e.cb(t, n);
                });
              },
              De = function (e, t) {
                return Re.push({ key: e, cb: t });
              },
              Se = function () {
                return Object.assign({}, Ae);
              },
              Ae = {
                id: [null, he.STRING],
                name: ["filepond", he.STRING],
                disabled: [!1, he.BOOLEAN],
                className: [null, he.STRING],
                required: [!1, he.BOOLEAN],
                captureMethod: [null, he.STRING],
                allowSyncAcceptAttribute: [!0, he.BOOLEAN],
                allowDrop: [!0, he.BOOLEAN],
                allowBrowse: [!0, he.BOOLEAN],
                allowPaste: [!0, he.BOOLEAN],
                allowMultiple: [!1, he.BOOLEAN],
                allowReplace: [!0, he.BOOLEAN],
                allowRevert: [!0, he.BOOLEAN],
                allowProcess: [!0, he.BOOLEAN],
                allowReorder: [!1, he.BOOLEAN],
                allowDirectoriesOnly: [!1, he.BOOLEAN],
                forceRevert: [!1, he.BOOLEAN],
                maxFiles: [null, he.INT],
                checkValidity: [!1, he.BOOLEAN],
                itemInsertLocationFreedom: [!0, he.BOOLEAN],
                itemInsertLocation: ["before", he.STRING],
                itemInsertInterval: [75, he.INT],
                dropOnPage: [!1, he.BOOLEAN],
                dropOnElement: [!0, he.BOOLEAN],
                dropValidation: [!1, he.BOOLEAN],
                ignoredFiles: [
                  [".ds_store", "thumbs.db", "desktop.ini"],
                  he.ARRAY,
                ],
                instantUpload: [!0, he.BOOLEAN],
                maxParallelUploads: [2, he.INT],
                chunkUploads: [!1, he.BOOLEAN],
                chunkForce: [!1, he.BOOLEAN],
                chunkSize: [5e6, he.INT],
                chunkRetryDelays: [[500, 1e3, 3e3], he.Array],
                server: [null, he.SERVER_API],
                labelDecimalSeparator: [ge(), he.STRING],
                labelThousandsSeparator: [
                  ((ce = ge()),
                  (fe = (1e3).toLocaleString()),
                  fe !== (1e3).toString() ? me(fe)[0] : "." === ce ? "," : "."),
                  he.STRING,
                ],
                labelIdle: [
                  'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
                  he.STRING,
                ],
                labelInvalidField: ["Field contains invalid files", he.STRING],
                labelFileWaitingForSize: ["Waiting for size", he.STRING],
                labelFileSizeNotAvailable: ["Size not available", he.STRING],
                labelFileCountSingular: ["file in list", he.STRING],
                labelFileCountPlural: ["files in list", he.STRING],
                labelFileLoading: ["Loading", he.STRING],
                labelFileAdded: ["Added", he.STRING],
                labelFileLoadError: ["Error during load", he.STRING],
                labelFileRemoved: ["Removed", he.STRING],
                labelFileRemoveError: ["Error during remove", he.STRING],
                labelFileProcessing: ["Uploading", he.STRING],
                labelFileProcessingComplete: ["Upload complete", he.STRING],
                labelFileProcessingAborted: ["Upload cancelled", he.STRING],
                labelFileProcessingError: ["Error during upload", he.STRING],
                labelFileProcessingRevertError: [
                  "Error during revert",
                  he.STRING,
                ],
                labelTapToCancel: ["tap to cancel", he.STRING],
                labelTapToRetry: ["tap to retry", he.STRING],
                labelTapToUndo: ["tap to undo", he.STRING],
                labelButtonRemoveItem: ["Remove", he.STRING],
                labelButtonAbortItemLoad: ["Abort", he.STRING],
                labelButtonRetryItemLoad: ["Retry", he.STRING],
                labelButtonAbortItemProcessing: ["Cancel", he.STRING],
                labelButtonUndoItemProcessing: ["Undo", he.STRING],
                labelButtonRetryItemProcessing: ["Retry", he.STRING],
                labelButtonProcessItem: ["Upload", he.STRING],
                iconRemove: [
                  '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
                  he.STRING,
                ],
                iconProcess: [
                  '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
                  he.STRING,
                ],
                iconRetry: [
                  '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
                  he.STRING,
                ],
                iconUndo: [
                  '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
                  he.STRING,
                ],
                iconDone: [
                  '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
                  he.STRING,
                ],
                oninit: [null, he.FUNCTION],
                onwarning: [null, he.FUNCTION],
                onerror: [null, he.FUNCTION],
                onactivatefile: [null, he.FUNCTION],
                oninitfile: [null, he.FUNCTION],
                onaddfilestart: [null, he.FUNCTION],
                onaddfileprogress: [null, he.FUNCTION],
                onaddfile: [null, he.FUNCTION],
                onprocessfilestart: [null, he.FUNCTION],
                onprocessfileprogress: [null, he.FUNCTION],
                onprocessfileabort: [null, he.FUNCTION],
                onprocessfilerevert: [null, he.FUNCTION],
                onprocessfile: [null, he.FUNCTION],
                onprocessfiles: [null, he.FUNCTION],
                onremovefile: [null, he.FUNCTION],
                onpreparefile: [null, he.FUNCTION],
                onupdatefiles: [null, he.FUNCTION],
                onreorderfiles: [null, he.FUNCTION],
                beforeDropFile: [null, he.FUNCTION],
                beforeAddFile: [null, he.FUNCTION],
                beforeRemoveFile: [null, he.FUNCTION],
                stylePanelLayout: [null, he.STRING],
                stylePanelAspectRatio: [null, he.STRING],
                styleItemPanelAspectRatio: [null, he.STRING],
                styleButtonRemoveItemPosition: ["left", he.STRING],
                styleButtonProcessItemPosition: ["right", he.STRING],
                styleLoadIndicatorPosition: ["right", he.STRING],
                styleProgressIndicatorPosition: ["right", he.STRING],
                styleButtonRemoveItemAlign: [!1, he.BOOLEAN],
                files: [[], he.ARRAY],
              },
              Pe = function (e, t) {
                return M(t)
                  ? e[0] || null
                  : F(t)
                  ? e[t] || null
                  : ("object" == typeof t && (t = t.id),
                    e.find(function (e) {
                      return e.id === t;
                    }) || null);
              },
              be = function (e) {
                if (M(e)) return e;
                if (/:/.test(e)) {
                  var t = e.split(":");
                  return t[1] / t[0];
                }
                return parseFloat(e);
              },
              Le = function (e) {
                return e.filter(function (e) {
                  return !e.archived;
                });
              },
              Me = { EMPTY: 0, IDLE: 1, ERROR: 2, BUSY: 3, READY: 4 },
              we = [
                Ie.LOAD_ERROR,
                Ie.PROCESSING_ERROR,
                Ie.PROCESSING_REVERT_ERROR,
              ],
              Ce = [Ie.LOADING, Ie.PROCESSING, Ie.PROCESSING_QUEUED, Ie.INIT],
              Ne = [Ie.PROCESSING_COMPLETE],
              Ge = function (e) {
                return we.includes(e.status);
              },
              Ue = function (e) {
                return Ce.includes(e.status);
              },
              Be = function (e) {
                return Ne.includes(e.status);
              },
              qe = function (e) {
                return {
                  GET_STATUS: function () {
                    var t = Le(e.items),
                      n = Me.EMPTY,
                      r = Me.ERROR,
                      o = Me.BUSY,
                      i = Me.IDLE,
                      a = Me.READY;
                    return 0 === t.length
                      ? n
                      : t.some(Ge)
                      ? r
                      : t.some(Ue)
                      ? o
                      : t.some(Be)
                      ? a
                      : i;
                  },
                  GET_ITEM: function (t) {
                    return Pe(e.items, t);
                  },
                  GET_ACTIVE_ITEM: function (t) {
                    return Pe(Le(e.items), t);
                  },
                  GET_ACTIVE_ITEMS: function () {
                    return Le(e.items);
                  },
                  GET_ITEMS: function () {
                    return e.items;
                  },
                  GET_ITEM_NAME: function (t) {
                    var n = Pe(e.items, t);
                    return n ? n.filename : null;
                  },
                  GET_ITEM_SIZE: function (t) {
                    var n = Pe(e.items, t);
                    return n ? n.fileSize : null;
                  },
                  GET_STYLES: function () {
                    return Object.keys(e.options)
                      .filter(function (e) {
                        return /^style/.test(e);
                      })
                      .map(function (t) {
                        return { name: t, value: e.options[t] };
                      });
                  },
                  GET_PANEL_ASPECT_RATIO: function () {
                    return /circle/.test(e.options.stylePanelLayout)
                      ? 1
                      : be(e.options.stylePanelAspectRatio);
                  },
                  GET_ITEM_PANEL_ASPECT_RATIO: function () {
                    return e.options.styleItemPanelAspectRatio;
                  },
                  GET_ITEMS_BY_STATUS: function (t) {
                    return Le(e.items).filter(function (e) {
                      return e.status === t;
                    });
                  },
                  GET_TOTAL_ITEMS: function () {
                    return Le(e.items).length;
                  },
                  IS_ASYNC: function () {
                    return (
                      H(e.options.server) &&
                      (H(e.options.server.process) || Y(e.options.server.process))
                    );
                  },
                };
              },
              Ve = function (e, t, n) {
                return Math.max(Math.min(n, e), t);
              },
              Fe = function (e) {
                return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
                  e
                );
              },
              xe = function (e) {
                return e.split("/").pop().split("?").shift();
              },
              Ye = function (e) {
                return e.split(".").pop();
              },
              je = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
                return (t + e).slice(-t.length);
              },
              ke = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : new Date();
                return (
                  e.getFullYear() +
                  "-" +
                  je(e.getMonth() + 1, "00") +
                  "-" +
                  je(e.getDate(), "00") +
                  "_" +
                  je(e.getHours(), "00") +
                  "-" +
                  je(e.getMinutes(), "00") +
                  "-" +
                  je(e.getSeconds(), "00")
                );
              },
              He = function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null,
                  o =
                    "string" == typeof n
                      ? e.slice(0, e.size, n)
                      : e.slice(0, e.size, e.type);
                return (
                  (o.lastModifiedDate = new Date()),
                  e._relativePath && (o._relativePath = e._relativePath),
                  U(t) || (t = ke()),
                  t && null === r && Ye(t)
                    ? (o.name = t)
                    : ((r =
                        r ||
                        (function (e) {
                          if ("string" != typeof e) return "";
                          var t = e.split("/").pop();
                          return /svg/.test(t)
                            ? "svg"
                            : /zip|compressed/.test(t)
                            ? "zip"
                            : /plain/.test(t)
                            ? "txt"
                            : /msword/.test(t)
                            ? "doc"
                            : /[a-z]+/.test(t)
                            ? "jpeg" === t
                              ? "jpg"
                              : t
                            : "";
                        })(o.type)),
                      (o.name = t + (r ? "." + r : ""))),
                  o
                );
              },
              Xe = function (e, t) {
                var n = (window.BlobBuilder =
                  window.BlobBuilder ||
                  window.WebKitBlobBuilder ||
                  window.MozBlobBuilder ||
                  window.MSBlobBuilder);
                if (n) {
                  var r = new n();
                  return r.append(e), r.getBlob(t);
                }
                return new Blob([e], { type: t });
              },
              We = function (e) {
                return (/^data:(.+);/.exec(e) || [])[1] || null;
              },
              ze = function (e) {
                var t = We(e);
                return (function (e, t) {
                  for (
                    var n = new ArrayBuffer(e.length),
                      r = new Uint8Array(n),
                      o = 0;
                    o < e.length;
                    o++
                  )
                    r[o] = e.charCodeAt(o);
                  return Xe(n, t);
                })(
                  (function (e) {
                    return atob(
                      (function (e) {
                        return e.split(",")[1].replace(/\s/g, "");
                      })(e)
                    );
                  })(e),
                  t
                );
              },
              Qe = function (e) {
                if (!/^content-disposition:/i.test(e)) return null;
                var t = e
                  .split(/filename=|filename\*=.+''/)
                  .splice(1)
                  .map(function (e) {
                    return e.trim().replace(/^["']|[;"']{0,2}$/g, "");
                  })
                  .filter(function (e) {
                    return e.length;
                  });
                return t.length ? decodeURI(t[t.length - 1]) : null;
              },
              $e = function (e) {
                if (/content-length:/i.test(e)) {
                  var t = e.match(/[0-9]+/)[0];
                  return t ? parseInt(t, 10) : null;
                }
                return null;
              },
              Ze = function (e) {
                return (
                  (/x-content-transfer-id:/i.test(e) &&
                    (e.split(":")[1] || "").trim()) ||
                  null
                );
              },
              Ke = function (e) {
                var t = { source: null, name: null, size: null },
                  n = e.split("\n"),
                  r = !0,
                  o = !1,
                  i = void 0;
                try {
                  for (
                    var a, u = n[Symbol.iterator]();
                    !(r = (a = u.next()).done);
                    r = !0
                  ) {
                    var s = a.value,
                      l = Qe(s);
                    if (l) t.name = l;
                    else {
                      var c = $e(s);
                      if (c) t.size = c;
                      else {
                        var f = Ze(s);
                        f && (t.source = f);
                      }
                    }
                  }
                } catch (d) {
                  (o = !0), (i = d);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (o) throw i;
                  }
                }
                return t;
              },
              Je = function (e) {
                var t = {
                    source: null,
                    complete: !1,
                    progress: 0,
                    size: null,
                    timestamp: null,
                    duration: 0,
                    request: null,
                  },
                  n = function (n) {
                    e
                      ? ((t.timestamp = Date.now()),
                        (t.request = e(
                          n,
                          function (e) {
                            (t.duration = Date.now() - t.timestamp),
                              (t.complete = !0),
                              e instanceof Blob && (e = He(e, e.name || xe(n))),
                              r.fire(
                                "load",
                                e instanceof Blob ? e : e ? e.body : null
                              );
                          },
                          function (e) {
                            r.fire(
                              "error",
                              "string" == typeof e
                                ? { type: "error", code: 0, body: e }
                                : e
                            );
                          },
                          function (e, n, o) {
                            o && (t.size = o),
                              (t.duration = Date.now() - t.timestamp),
                              e
                                ? ((t.progress = n / o),
                                  r.fire("progress", t.progress))
                                : (t.progress = null);
                          },
                          function () {
                            r.fire("abort");
                          },
                          function (e) {
                            var n = Ke("string" == typeof e ? e : e.headers);
                            r.fire("meta", {
                              size: t.size || n.size,
                              filename: n.name,
                              source: n.source,
                            });
                          }
                        )))
                      : r.fire("error", {
                          type: "error",
                          body: "Can't load URL",
                          code: 400,
                        });
                  },
                  r = Object.assign({}, pe(), {
                    setSource: function (e) {
                      return (t.source = e);
                    },
                    getProgress: function () {
                      return t.progress;
                    },
                    abort: function () {
                      t.request && t.request.abort && t.request.abort();
                    },
                    load: function () {
                      var e,
                        o,
                        i = t.source;
                      r.fire("init", i),
                        i instanceof File
                          ? r.fire("load", i)
                          : i instanceof Blob
                          ? r.fire("load", He(i, i.name))
                          : Fe(i)
                          ? r.fire("load", He(ze(i), e, null, o))
                          : n(i);
                    },
                  });
                return r;
              },
              et = function (e) {
                return /GET|HEAD/.test(e);
              },
              tt = function (e, t, n) {
                var r = {
                    onheaders: function () {},
                    onprogress: function () {},
                    onload: function () {},
                    ontimeout: function () {},
                    onerror: function () {},
                    onabort: function () {},
                    abort: function () {
                      (o = !0), a.abort();
                    },
                  },
                  o = !1,
                  i = !1;
                (n = Object.assign(
                  { method: "POST", headers: {}, withCredentials: !1 },
                  n
                )),
                  (t = encodeURI(t)),
                  et(n.method) &&
                    e &&
                    (t =
                      "" +
                      t +
                      encodeURIComponent(
                        "string" == typeof e ? e : JSON.stringify(e)
                      ));
                var a = new XMLHttpRequest();
                return (
                  ((et(n.method) ? a : a.upload).onprogress = function (e) {
                    o || r.onprogress(e.lengthComputable, e.loaded, e.total);
                  }),
                  (a.onreadystatechange = function () {
                    a.readyState < 2 ||
                      (4 === a.readyState && 0 === a.status) ||
                      i ||
                      ((i = !0), r.onheaders(a));
                  }),
                  (a.onload = function () {
                    a.status >= 200 && a.status < 300
                      ? r.onload(a)
                      : r.onerror(a);
                  }),
                  (a.onerror = function () {
                    return r.onerror(a);
                  }),
                  (a.onabort = function () {
                    (o = !0), r.onabort();
                  }),
                  (a.ontimeout = function () {
                    return r.ontimeout(a);
                  }),
                  a.open(n.method, t, !0),
                  F(n.timeout) && (a.timeout = n.timeout),
                  Object.keys(n.headers).forEach(function (e) {
                    var t = unescape(encodeURIComponent(n.headers[e]));
                    a.setRequestHeader(e, t);
                  }),
                  n.responseType && (a.responseType = n.responseType),
                  n.withCredentials && (a.withCredentials = !0),
                  a.send(e),
                  r
                );
              },
              nt = function (e, t, n, r) {
                return { type: e, code: t, body: n, headers: r };
              },
              rt = function (e) {
                return function (t) {
                  e(nt("error", 0, "Timeout", t.getAllResponseHeaders()));
                };
              },
              ot = function (e) {
                return /\?/.test(e);
              },
              it = function () {
                for (
                  var e = "", t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return (
                  n.forEach(function (t) {
                    e += ot(e) && ot(t) ? t.replace(/\?/, "&") : t;
                  }),
                  e
                );
              },
              at = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = arguments.length > 1 ? arguments[1] : void 0;
                if ("function" == typeof t) return t;
                if (!t || !U(t.url)) return null;
                var n =
                    t.onload ||
                    function (e) {
                      return e;
                    },
                  r =
                    t.onerror ||
                    function (e) {
                      return null;
                    };
                return function (o, i, a, u, s, l) {
                  var c = tt(
                    o,
                    it(e, t.url),
                    Object.assign({}, t, { responseType: "blob" })
                  );
                  return (
                    (c.onload = function (e) {
                      var r = e.getAllResponseHeaders(),
                        a = Ke(r).name || xe(o);
                      i(
                        nt(
                          "load",
                          e.status,
                          "HEAD" === t.method ? null : He(n(e.response), a),
                          r
                        )
                      );
                    }),
                    (c.onerror = function (e) {
                      a(
                        nt(
                          "error",
                          e.status,
                          r(e.response) || e.statusText,
                          e.getAllResponseHeaders()
                        )
                      );
                    }),
                    (c.onheaders = function (e) {
                      l(nt("headers", e.status, null, e.getAllResponseHeaders()));
                    }),
                    (c.ontimeout = rt(a)),
                    (c.onprogress = u),
                    (c.onabort = s),
                    c
                  );
                };
              },
              ut = 0,
              st = 1,
              lt = 2,
              ct = 3,
              ft = 4,
              dt = function (e, t, n, r, o, i, a, u, s, l, c) {
                for (
                  var f = [],
                    d = c.chunkTransferId,
                    p = c.chunkServer,
                    E = c.chunkSize,
                    _ = c.chunkRetryDelays,
                    T = { serverId: d, aborted: !1 },
                    I =
                      t.ondata ||
                      function (e) {
                        return e;
                      },
                    v =
                      t.onload ||
                      function (e, t) {
                        return "HEAD" === t
                          ? e.getResponseHeader("Upload-Offset")
                          : e.response;
                      },
                    m =
                      t.onerror ||
                      function (e) {
                        return null;
                      },
                    g = Math.floor(r.size / E),
                    h = 0;
                  h <= g;
                  h++
                ) {
                  var R = h * E,
                    O = r.slice(R, R + E, "application/offset+octet-stream");
                  f[h] = {
                    index: h,
                    size: O.size,
                    offset: R,
                    data: O,
                    file: r,
                    progress: 0,
                    retries: se(_),
                    status: ut,
                    error: null,
                    request: null,
                    timeout: null,
                  };
                }
                var y,
                  D,
                  S,
                  A,
                  P = function (e) {
                    return e.status === ut || e.status === ct;
                  },
                  b = function (t) {
                    if (!T.aborted)
                      if ((t = t || f.find(P))) {
                        (t.status = lt), (t.progress = null);
                        var n =
                            p.ondata ||
                            function (e) {
                              return e;
                            },
                          o =
                            p.onerror ||
                            function (e) {
                              return null;
                            },
                          u = it(e, p.url, T.serverId),
                          l =
                            "function" == typeof p.headers
                              ? p.headers(t)
                              : Object.assign({}, p.headers, {
                                  "Content-Type":
                                    "application/offset+octet-stream",
                                  "Upload-Offset": t.offset,
                                  "Upload-Length": r.size,
                                  "Upload-Name": r.name,
                                }),
                          c = (t.request = tt(
                            n(t.data),
                            u,
                            Object.assign({}, p, { headers: l })
                          ));
                        (c.onload = function () {
                          (t.status = st), (t.request = null), w();
                        }),
                          (c.onprogress = function (e, n, r) {
                            (t.progress = e ? n : null), M();
                          }),
                          (c.onerror = function (e) {
                            (t.status = ct),
                              (t.request = null),
                              (t.error = o(e.response) || e.statusText),
                              L(t) ||
                                a(
                                  nt(
                                    "error",
                                    e.status,
                                    o(e.response) || e.statusText,
                                    e.getAllResponseHeaders()
                                  )
                                );
                          }),
                          (c.ontimeout = function (e) {
                            (t.status = ct), (t.request = null), L(t) || rt(a)(e);
                          }),
                          (c.onabort = function () {
                            (t.status = ut), (t.request = null), s();
                          });
                      } else
                        f.every(function (e) {
                          return e.status === st;
                        }) && i(T.serverId);
                  },
                  L = function (e) {
                    return (
                      0 !== e.retries.length &&
                      ((e.status = ft),
                      clearTimeout(e.timeout),
                      (e.timeout = setTimeout(function () {
                        b(e);
                      }, e.retries.shift())),
                      !0)
                    );
                  },
                  M = function () {
                    var e = f.reduce(function (e, t) {
                      return null === e || null === t.progress
                        ? null
                        : e + t.progress;
                    }, 0);
                    if (null === e) return u(!1, 0, 0);
                    var t = f.reduce(function (e, t) {
                      return e + t.size;
                    }, 0);
                    u(!0, e, t);
                  },
                  w = function () {
                    f.filter(function (e) {
                      return e.status === lt;
                    }).length >= 1 || b();
                  };
                return (
                  T.serverId
                    ? ((y = function (e) {
                        T.aborted ||
                          (f
                            .filter(function (t) {
                              return t.offset < e;
                            })
                            .forEach(function (e) {
                              (e.status = st), (e.progress = e.size);
                            }),
                          w());
                      }),
                      (D = it(e, p.url, T.serverId)),
                      (S = {
                        headers:
                          "function" == typeof t.headers
                            ? t.headers(T.serverId)
                            : Object.assign({}, t.headers),
                        method: "HEAD",
                      }),
                      ((A = tt(null, D, S)).onload = function (e) {
                        return y(v(e, S.method));
                      }),
                      (A.onerror = function (e) {
                        return a(
                          nt(
                            "error",
                            e.status,
                            m(e.response) || e.statusText,
                            e.getAllResponseHeaders()
                          )
                        );
                      }),
                      (A.ontimeout = rt(a)))
                    : (function (i) {
                        var u = new FormData();
                        H(o) && u.append(n, JSON.stringify(o));
                        var s =
                            "function" == typeof t.headers
                              ? t.headers(r, o)
                              : Object.assign({}, t.headers, {
                                  "Upload-Length": r.size,
                                }),
                          l = Object.assign({}, t, { headers: s }),
                          c = tt(I(u), it(e, t.url), l);
                        (c.onload = function (e) {
                          return i(v(e, l.method));
                        }),
                          (c.onerror = function (e) {
                            return a(
                              nt(
                                "error",
                                e.status,
                                m(e.response) || e.statusText,
                                e.getAllResponseHeaders()
                              )
                            );
                          }),
                          (c.ontimeout = rt(a));
                      })(function (e) {
                        T.aborted || (l(e), (T.serverId = e), w());
                      }),
                  {
                    abort: function () {
                      (T.aborted = !0),
                        f.forEach(function (e) {
                          clearTimeout(e.timeout), e.request && e.request.abort();
                        });
                    },
                  }
                );
              },
              pt = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0;
                return "function" == typeof t
                  ? function () {
                      for (
                        var e = arguments.length, o = new Array(e), i = 0;
                        i < e;
                        i++
                      )
                        o[i] = arguments[i];
                      return t.apply(void 0, [n].concat(o, [r]));
                    }
                  : t && U(t.url)
                  ? (function (e, t, n, r) {
                      return function (o, i, a, u, s, l, c) {
                        if (o) {
                          var f = r.chunkUploads,
                            d = f && o.size > r.chunkSize,
                            p = f && (d || r.chunkForce);
                          if (o instanceof Blob && p)
                            return dt(e, t, n, o, i, a, u, s, l, c, r);
                          var E =
                              t.ondata ||
                              function (e) {
                                return e;
                              },
                            _ =
                              t.onload ||
                              function (e) {
                                return e;
                              },
                            T =
                              t.onerror ||
                              function (e) {
                                return null;
                              },
                            I = new FormData();
                          H(i) && I.append(n, JSON.stringify(i)),
                            (o instanceof Blob
                              ? [{ name: null, file: o }]
                              : o
                            ).forEach(function (e) {
                              I.append(
                                n,
                                e.file,
                                null === e.name
                                  ? e.file.name
                                  : "" + e.name + e.file.name
                              );
                            });
                          var v = tt(E(I), it(e, t.url), t);
                          return (
                            (v.onload = function (e) {
                              a(
                                nt(
                                  "load",
                                  e.status,
                                  _(e.response),
                                  e.getAllResponseHeaders()
                                )
                              );
                            }),
                            (v.onerror = function (e) {
                              u(
                                nt(
                                  "error",
                                  e.status,
                                  T(e.response) || e.statusText,
                                  e.getAllResponseHeaders()
                                )
                              );
                            }),
                            (v.ontimeout = rt(u)),
                            (v.onprogress = s),
                            (v.onabort = l),
                            v
                          );
                        }
                      };
                    })(e, t, n, r)
                  : null;
              },
              Et = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = arguments.length > 1 ? arguments[1] : void 0;
                if ("function" == typeof t) return t;
                if (!t || !U(t.url))
                  return function (e, t) {
                    return t();
                  };
                var n =
                    t.onload ||
                    function (e) {
                      return e;
                    },
                  r =
                    t.onerror ||
                    function (e) {
                      return null;
                    };
                return function (o, i, a) {
                  var u = tt(o, e + t.url, t);
                  return (
                    (u.onload = function (e) {
                      i(
                        nt(
                          "load",
                          e.status,
                          n(e.response),
                          e.getAllResponseHeaders()
                        )
                      );
                    }),
                    (u.onerror = function (e) {
                      a(
                        nt(
                          "error",
                          e.status,
                          r(e.response) || e.statusText,
                          e.getAllResponseHeaders()
                        )
                      );
                    }),
                    (u.ontimeout = rt(a)),
                    u
                  );
                };
              },
              _t = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                return e + Math.random() * (t - e);
              },
              Tt = function (e) {
                var t = {
                    complete: !1,
                    perceivedProgress: 0,
                    perceivedPerformanceUpdater: null,
                    progress: null,
                    timestamp: null,
                    perceivedDuration: 0,
                    duration: 0,
                    request: null,
                    response: null,
                  },
                  n = function () {
                    t.request &&
                      (t.perceivedPerformanceUpdater.clear(),
                      t.request.abort && t.request.abort(),
                      (t.complete = !0));
                  },
                  r = Object.assign({}, pe(), {
                    process: function (n, o) {
                      var i = function () {
                          0 !== t.duration &&
                            null !== t.progress &&
                            r.fire("progress", r.getProgress());
                        },
                        a = function () {
                          (t.complete = !0),
                            r.fire("load-perceived", t.response.body);
                        };
                      r.fire("start"),
                        (t.timestamp = Date.now()),
                        (t.perceivedPerformanceUpdater = (function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1e3,
                            n =
                              (arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : 25),
                            r =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : 250,
                            o = null,
                            i = Date.now();
                          return (
                            (function a() {
                              var u = Date.now() - i,
                                s = _t(n, r);
                              u + s > t && (s = u + s - t);
                              var l = u / t;
                              l >= 1 || document.hidden
                                ? e(1)
                                : (e(l), (o = setTimeout(a, s)));
                            })(),
                            {
                              clear: function () {
                                clearTimeout(o);
                              },
                            }
                          );
                        })(function (e) {
                          (t.perceivedProgress = e),
                            (t.perceivedDuration = Date.now() - t.timestamp),
                            i(),
                            t.response &&
                              1 === t.perceivedProgress &&
                              !t.complete &&
                              a();
                        }, _t(750, 1500))),
                        (t.request = e(
                          n,
                          o,
                          function (e) {
                            (t.response = H(e)
                              ? e
                              : {
                                  type: "load",
                                  code: 200,
                                  body: "" + e,
                                  headers: {},
                                }),
                              (t.duration = Date.now() - t.timestamp),
                              (t.progress = 1),
                              r.fire("load", t.response.body),
                              1 === t.perceivedProgress && a();
                          },
                          function (e) {
                            t.perceivedPerformanceUpdater.clear(),
                              r.fire(
                                "error",
                                H(e)
                                  ? e
                                  : { type: "error", code: 0, body: "" + e }
                              );
                          },
                          function (e, n, r) {
                            (t.duration = Date.now() - t.timestamp),
                              (t.progress = e ? n / r : null),
                              i();
                          },
                          function () {
                            t.perceivedPerformanceUpdater.clear(),
                              r.fire(
                                "abort",
                                t.response ? t.response.body : null
                              );
                          },
                          function (e) {
                            r.fire("transfer", e);
                          }
                        ));
                    },
                    abort: n,
                    getProgress: function () {
                      return t.progress
                        ? Math.min(t.progress, t.perceivedProgress)
                        : null;
                    },
                    getDuration: function () {
                      return Math.min(t.duration, t.perceivedDuration);
                    },
                    reset: function () {
                      n(),
                        (t.complete = !1),
                        (t.perceivedProgress = 0),
                        (t.progress = 0),
                        (t.timestamp = null),
                        (t.perceivedDuration = 0),
                        (t.duration = 0),
                        (t.request = null),
                        (t.response = null);
                    },
                  });
                return r;
              },
              It = function (e) {
                return e.substr(0, e.lastIndexOf(".")) || e;
              },
              vt = function (e) {
                return !!(e instanceof File || (e instanceof Blob && e.name));
              },
              mt = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  o = oe(),
                  i = {
                    archived: !1,
                    frozen: !1,
                    released: !1,
                    source: null,
                    file: r,
                    serverFileReference: t,
                    transferId: null,
                    processingAborted: !1,
                    status: t ? Ie.PROCESSING_COMPLETE : Ie.INIT,
                    activeLoader: null,
                    activeProcessor: null,
                  },
                  a = null,
                  u = {},
                  s = function (e) {
                    return (i.status = e);
                  },
                  l = function (e) {
                    if (!i.released && !i.frozen) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          r = 1;
                        r < t;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      f.fire.apply(f, [e].concat(n));
                    }
                  },
                  c = function (e, t, n) {
                    var r = e.split("."),
                      o = r[0],
                      i = r.pop(),
                      a = u;
                    r.forEach(function (e) {
                      return (a = a[e]);
                    }),
                      JSON.stringify(a[i]) !== JSON.stringify(t) &&
                        ((a[i] = t),
                        n || l("metadata-update", { key: o, value: u[o] }));
                  },
                  f = Object.assign(
                    {
                      id: {
                        get: function () {
                          return o;
                        },
                      },
                      origin: {
                        get: function () {
                          return e;
                        },
                      },
                      serverId: {
                        get: function () {
                          return i.serverFileReference;
                        },
                      },
                      transferId: {
                        get: function () {
                          return i.transferId;
                        },
                      },
                      status: {
                        get: function () {
                          return i.status;
                        },
                      },
                      filename: {
                        get: function () {
                          return i.file.name;
                        },
                      },
                      filenameWithoutExtension: {
                        get: function () {
                          return It(i.file.name);
                        },
                      },
                      fileExtension: {
                        get: function () {
                          return Ye(i.file.name);
                        },
                      },
                      fileType: {
                        get: function () {
                          return i.file.type;
                        },
                      },
                      fileSize: {
                        get: function () {
                          return i.file.size;
                        },
                      },
                      file: {
                        get: function () {
                          return i.file;
                        },
                      },
                      relativePath: {
                        get: function () {
                          return i.file._relativePath;
                        },
                      },
                      source: {
                        get: function () {
                          return i.source;
                        },
                      },
                      getMetadata: function (e) {
                        return (function e(t) {
                          if (!H(t)) return t;
                          var n = L(t) ? [] : {};
                          for (var r in t)
                            if (t.hasOwnProperty(r)) {
                              var o = t[r];
                              n[r] = o && H(o) ? e(o) : o;
                            }
                          return n;
                        })(e ? u[e] : u);
                      },
                      setMetadata: function (e, t, n) {
                        if (H(e)) {
                          var r = e;
                          return (
                            Object.keys(r).forEach(function (e) {
                              c(e, r[e], t);
                            }),
                            e
                          );
                        }
                        return c(e, t, n), t;
                      },
                      extend: function (e, t) {
                        return (d[e] = t);
                      },
                      abortLoad: function () {
                        i.activeLoader
                          ? i.activeLoader.abort()
                          : (s(Ie.INIT), l("load-abort"));
                      },
                      retryLoad: function () {
                        i.activeLoader && i.activeLoader.load();
                      },
                      requestProcessing: function () {
                        (i.processingAborted = !1), s(Ie.PROCESSING_QUEUED);
                      },
                      abortProcessing: function () {
                        return new Promise(function (e) {
                          if (!i.activeProcessor)
                            return (
                              (i.processingAborted = !0),
                              s(Ie.IDLE),
                              l("process-abort"),
                              void e()
                            );
                          (a = function () {
                            e();
                          }),
                            i.activeProcessor.abort();
                        });
                      },
                      load: function (t, n, r) {
                        (i.source = t),
                          f.fireSync("init"),
                          i.file
                            ? f.fireSync("load-skip")
                            : ((i.file = (function (e) {
                                var t = [e.name, e.size, e.type];
                                return (
                                  e instanceof Blob || Fe(e)
                                    ? (t[0] = e.name || ke())
                                    : Fe(e)
                                    ? ((t[1] = e.length), (t[2] = We(e)))
                                    : U(e) &&
                                      ((t[0] = xe(e)),
                                      (t[1] = 0),
                                      (t[2] = "application/octet-stream")),
                                  { name: t[0], size: t[1], type: t[2] }
                                );
                              })(t)),
                              n.on("init", function () {
                                l("load-init");
                              }),
                              n.on("meta", function (t) {
                                (i.file.size = t.size),
                                  (i.file.filename = t.filename),
                                  t.source &&
                                    ((e = ve.LIMBO),
                                    (i.serverFileReference = t.source),
                                    (i.status = Ie.PROCESSING_COMPLETE)),
                                  l("load-meta");
                              }),
                              n.on("progress", function (e) {
                                s(Ie.LOADING), l("load-progress", e);
                              }),
                              n.on("error", function (e) {
                                s(Ie.LOAD_ERROR), l("load-request-error", e);
                              }),
                              n.on("abort", function () {
                                s(Ie.INIT), l("load-abort");
                              }),
                              n.on("load", function (t) {
                                i.activeLoader = null;
                                var n = function (t) {
                                  (i.file = vt(t) ? t : i.file),
                                    e === ve.LIMBO && i.serverFileReference
                                      ? s(Ie.PROCESSING_COMPLETE)
                                      : s(Ie.IDLE),
                                    l("load");
                                };
                                i.serverFileReference
                                  ? n(t)
                                  : r(t, n, function (e) {
                                      (i.file = t),
                                        l("load-meta"),
                                        s(Ie.LOAD_ERROR),
                                        l("load-file-error", e);
                                    });
                              }),
                              n.setSource(t),
                              (i.activeLoader = n),
                              n.load());
                      },
                      process: function e(t, n) {
                        if (i.processingAborted) i.processingAborted = !1;
                        else if (
                          (s(Ie.PROCESSING), (a = null), i.file instanceof Blob)
                        ) {
                          t.on("load", function (e) {
                            (i.transferId = null), (i.serverFileReference = e);
                          }),
                            t.on("transfer", function (e) {
                              i.transferId = e;
                            }),
                            t.on("load-perceived", function (e) {
                              (i.activeProcessor = null),
                                (i.transferId = null),
                                (i.serverFileReference = e),
                                s(Ie.PROCESSING_COMPLETE),
                                l("process-complete", e);
                            }),
                            t.on("start", function () {
                              l("process-start");
                            }),
                            t.on("error", function (e) {
                              (i.activeProcessor = null),
                                s(Ie.PROCESSING_ERROR),
                                l("process-error", e);
                            }),
                            t.on("abort", function (e) {
                              (i.activeProcessor = null),
                                (i.transferId = null),
                                (i.serverFileReference = e),
                                s(Ie.IDLE),
                                l("process-abort"),
                                a && a();
                            }),
                            t.on("progress", function (e) {
                              l("process-progress", e);
                            });
                          var r = console.error;
                          n(
                            i.file,
                            function (e) {
                              i.archived || t.process(e, Object.assign({}, u));
                            },
                            r
                          ),
                            (i.activeProcessor = t);
                        } else
                          f.on("load", function () {
                            e(t, n);
                          });
                      },
                      revert: function (e, t) {
                        return new Promise(function (n, r) {
                          null !== i.serverFileReference
                            ? (e(
                                i.serverFileReference,
                                function () {
                                  (i.serverFileReference = null), n();
                                },
                                function (e) {
                                  t
                                    ? (s(Ie.PROCESSING_REVERT_ERROR),
                                      l("process-revert-error"),
                                      r(e))
                                    : n();
                                }
                              ),
                              s(Ie.IDLE),
                              l("process-revert"))
                            : n();
                        });
                      },
                    },
                    pe(),
                    {
                      freeze: function () {
                        return (i.frozen = !0);
                      },
                      release: function () {
                        return (i.released = !0);
                      },
                      released: {
                        get: function () {
                          return i.released;
                        },
                      },
                      archive: function () {
                        return (i.archived = !0);
                      },
                      archived: {
                        get: function () {
                          return i.archived;
                        },
                      },
                    }
                  ),
                  d = n(f);
                return d;
              },
              gt = function (e, t) {
                var n = (function (e, t) {
                  return M(t)
                    ? 0
                    : U(t)
                    ? e.findIndex(function (e) {
                        return e.id === t;
                      })
                    : -1;
                })(e, t);
                if (!(n < 0)) return e[n] || null;
              },
              ht = function (e, t, n, r, o, i) {
                var a = tt(null, e, { method: "GET", responseType: "blob" });
                return (
                  (a.onload = function (n) {
                    var r = n.getAllResponseHeaders(),
                      o = Ke(r).name || xe(e);
                    t(nt("load", n.status, He(n.response, o), r));
                  }),
                  (a.onerror = function (e) {
                    n(
                      nt(
                        "error",
                        e.status,
                        e.statusText,
                        e.getAllResponseHeaders()
                      )
                    );
                  }),
                  (a.onheaders = function (e) {
                    i(nt("headers", e.status, null, e.getAllResponseHeaders()));
                  }),
                  (a.ontimeout = rt(n)),
                  (a.onprogress = r),
                  (a.onabort = o),
                  a
                );
              },
              Rt = function (e) {
                return (
                  0 === e.indexOf("//") && (e = location.protocol + e),
                  e
                    .toLowerCase()
                    .replace("blob:", "")
                    .replace(/([a-z])?:\/\//, "$1")
                    .split("/")[0]
                );
              },
              Ot = function (e) {
                return function () {
                  return Y(e) ? e.apply(void 0, arguments) : e;
                };
              },
              yt = function (e, t) {
                clearTimeout(t.listUpdateTimeout),
                  (t.listUpdateTimeout = setTimeout(function () {
                    e("DID_UPDATE_ITEMS", { items: Le(t.items) });
                  }, 0));
              },
              Dt = function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                return new Promise(function (t) {
                  if (!e) return t(!0);
                  var r = e.apply(void 0, n);
                  return null == r
                    ? t(!0)
                    : "boolean" == typeof r
                    ? t(r)
                    : void ("function" == typeof r.then && r.then(t));
                });
              },
              St = function (e, t) {
                e.items.sort(function (e, n) {
                  return t(Te(e), Te(n));
                });
              },
              At = function (e, t) {
                return function () {
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = n.query,
                    o = n.success,
                    i = void 0 === o ? function () {} : o,
                    a = n.failure,
                    u = void 0 === a ? function () {} : a,
                    s = ue(n, ["query", "success", "failure"]),
                    l = Pe(e.items, r);
                  l
                    ? t(l, i, u, s || {})
                    : u({ error: nt("error", 0, "Item not found"), file: null });
                };
              },
              Pt = function (e, n, r) {
                return {
                  ABORT_ALL: function () {
                    Le(r.items).forEach(function (e) {
                      e.freeze(), e.abortLoad(), e.abortProcessing();
                    });
                  },
                  DID_SET_FILES: function (t) {
                    var n = t.value,
                      o = (void 0 === n ? [] : n).map(function (e) {
                        return {
                          source: e.source ? e.source : e,
                          options: e.options,
                        };
                      }),
                      i = Le(r.items);
                    i.forEach(function (t) {
                      o.find(function (e) {
                        return e.source === t.source || e.source === t.file;
                      }) || e("REMOVE_ITEM", { query: t });
                    }),
                      (i = Le(r.items)),
                      o.forEach(function (t, n) {
                        i.find(function (e) {
                          return e.source === t.source || e.file === t.source;
                        }) ||
                          e(
                            "ADD_ITEM",
                            Object.assign({}, t, {
                              interactionMethod: re,
                              index: n,
                            })
                          );
                      });
                  },
                  DID_UPDATE_ITEM_METADATA: function (t) {
                    var o = t.id;
                    clearTimeout(r.itemUpdateTimeout),
                      (r.itemUpdateTimeout = setTimeout(function () {
                        var t = gt(r.items, o);
                        if (n("IS_ASYNC")) {
                          var i,
                            a = function () {
                              setTimeout(function () {
                                e("REQUEST_ITEM_PROCESSING", { query: o });
                              }, 32);
                            };
                          return t.status === Ie.PROCESSING_COMPLETE
                            ? ((i = r.options.instantUpload),
                              void t
                                .revert(
                                  Et(
                                    r.options.server.url,
                                    r.options.server.revert
                                  ),
                                  n("GET_FORCE_REVERT")
                                )
                                .then(i ? a : function () {})
                                .catch(function () {}))
                            : t.status === Ie.PROCESSING
                            ? (function (e) {
                                t.abortProcessing().then(e ? a : function () {});
                              })(r.options.instantUpload)
                            : void (r.options.instantUpload && a());
                        }
                        Oe("SHOULD_PREPARE_OUTPUT", !1, {
                          item: t,
                          query: n,
                        }).then(function (n) {
                          n &&
                            e(
                              "REQUEST_PREPARE_OUTPUT",
                              {
                                query: o,
                                item: t,
                                success: function (t) {
                                  e("DID_PREPARE_OUTPUT", { id: o, file: t });
                                },
                              },
                              !0
                            );
                        });
                      }, 0));
                  },
                  MOVE_ITEM: function (e) {
                    var t = e.query,
                      n = e.index,
                      o = Pe(r.items, t);
                    if (o) {
                      var i = r.items.indexOf(o);
                      i !== (n = Ve(n, 0, r.items.length - 1)) &&
                        r.items.splice(n, 0, r.items.splice(i, 1)[0]);
                    }
                  },
                  SORT: function (t) {
                    var o = t.compare;
                    St(r, o),
                      e("DID_SORT_ITEMS", { items: n("GET_ACTIVE_ITEMS") });
                  },
                  ADD_ITEMS: function (t) {
                    var r = t.items,
                      o = t.index,
                      i = t.interactionMethod,
                      a = t.success,
                      u = void 0 === a ? function () {} : a,
                      s = t.failure,
                      l = void 0 === s ? function () {} : s,
                      c = o;
                    if (-1 === o || void 0 === o) {
                      var f = n("GET_ITEM_INSERT_LOCATION"),
                        d = n("GET_TOTAL_ITEMS");
                      c = "before" === f ? 0 : d;
                    }
                    var p = n("GET_IGNORED_FILES"),
                      E = r
                        .filter(function (e) {
                          return vt(e)
                            ? !p.includes(e.name.toLowerCase())
                            : !M(e);
                        })
                        .map(function (t) {
                          return new Promise(function (n, r) {
                            e("ADD_ITEM", {
                              interactionMethod: i,
                              source: t.source || t,
                              success: n,
                              failure: r,
                              index: c++,
                              options: t.options || {},
                            });
                          });
                        });
                    Promise.all(E).then(u).catch(l);
                  },
                  ADD_ITEM: function (t) {
                    var o = t.source,
                      i = t.index,
                      a = void 0 === i ? -1 : i,
                      u = t.interactionMethod,
                      s = t.success,
                      l = void 0 === s ? function () {} : s,
                      c = t.failure,
                      f = void 0 === c ? function () {} : c,
                      d = t.options,
                      p = void 0 === d ? {} : d;
                    if (M(o))
                      f({ error: nt("error", 0, "No source"), file: null });
                    else if (
                      !vt(o) ||
                      !r.options.ignoredFiles.includes(o.name.toLowerCase())
                    ) {
                      if (
                        !(function (e) {
                          var t = Le(e.items).length;
                          if (!e.options.allowMultiple) return 0 === t;
                          var n = e.options.maxFiles;
                          return null === n || t < n;
                        })(r)
                      ) {
                        if (
                          r.options.allowMultiple ||
                          (!r.options.allowMultiple && !r.options.allowReplace)
                        ) {
                          var E = nt("warning", 0, "Max files");
                          return (
                            e("DID_THROW_MAX_FILES", { source: o, error: E }),
                            void f({ error: E, file: null })
                          );
                        }
                        var _ = Le(r.items)[0];
                        if (
                          _.status === Ie.PROCESSING_COMPLETE ||
                          _.status === Ie.PROCESSING_REVERT_ERROR
                        ) {
                          var T = n("GET_FORCE_REVERT");
                          if (
                            (_.revert(
                              Et(r.options.server.url, r.options.server.revert),
                              T
                            )
                              .then(function () {
                                T &&
                                  e("ADD_ITEM", {
                                    source: o,
                                    index: a,
                                    interactionMethod: u,
                                    success: l,
                                    failure: f,
                                    options: p,
                                  });
                              })
                              .catch(function () {}),
                            T)
                          )
                            return;
                        }
                        e("REMOVE_ITEM", { query: _.id });
                      }
                      var I =
                          "local" === p.type
                            ? ve.LOCAL
                            : "limbo" === p.type
                            ? ve.LIMBO
                            : ve.INPUT,
                        v = mt(I, I === ve.INPUT ? null : o, p.file);
                      Object.keys(p.metadata || {}).forEach(function (e) {
                        v.setMetadata(e, p.metadata[e]);
                      }),
                        ye("DID_CREATE_ITEM", v, { query: n, dispatch: e });
                      var m = n("GET_ITEM_INSERT_LOCATION");
                      r.options.itemInsertLocationFreedom ||
                        (a = "before" === m ? -1 : r.items.length),
                        (function (e, t, n) {
                          M(t) ||
                            (void 0 === n
                              ? e.push(t)
                              : (function (e, t, n) {
                                  e.splice(t, 0, n);
                                })(e, (n = Ve(n, 0, e.length)), t));
                        })(r.items, v, a),
                        Y(m) && o && St(r, m);
                      var g = v.id;
                      v.on("init", function () {
                        e("DID_INIT_ITEM", { id: g });
                      }),
                        v.on("load-init", function () {
                          e("DID_START_ITEM_LOAD", { id: g });
                        }),
                        v.on("load-meta", function () {
                          e("DID_UPDATE_ITEM_META", { id: g });
                        }),
                        v.on("load-progress", function (t) {
                          e("DID_UPDATE_ITEM_LOAD_PROGRESS", {
                            id: g,
                            progress: t,
                          });
                        }),
                        v.on("load-request-error", function (t) {
                          var n = Ot(r.options.labelFileLoadError)(t);
                          if (t.code >= 400 && t.code < 500)
                            return (
                              e("DID_THROW_ITEM_INVALID", {
                                id: g,
                                error: t,
                                status: {
                                  main: n,
                                  sub: t.code + " (" + t.body + ")",
                                },
                              }),
                              void f({ error: t, file: Te(v) })
                            );
                          e("DID_THROW_ITEM_LOAD_ERROR", {
                            id: g,
                            error: t,
                            status: { main: n, sub: r.options.labelTapToRetry },
                          });
                        }),
                        v.on("load-file-error", function (t) {
                          e("DID_THROW_ITEM_INVALID", {
                            id: g,
                            error: t.status,
                            status: t.status,
                          }),
                            f({ error: t.status, file: Te(v) });
                        }),
                        v.on("load-abort", function () {
                          e("REMOVE_ITEM", { query: g });
                        }),
                        v.on("load-skip", function () {
                          e("COMPLETE_LOAD_ITEM", {
                            query: g,
                            item: v,
                            data: { source: o, success: l },
                          });
                        }),
                        v.on("load", function () {
                          var t = function (t) {
                            t
                              ? (v.on("metadata-update", function (t) {
                                  e("DID_UPDATE_ITEM_METADATA", {
                                    id: g,
                                    change: t,
                                  });
                                }),
                                Oe("SHOULD_PREPARE_OUTPUT", !1, {
                                  item: v,
                                  query: n,
                                }).then(function (t) {
                                  var n = function () {
                                    e("COMPLETE_LOAD_ITEM", {
                                      query: g,
                                      item: v,
                                      data: { source: o, success: l },
                                    }),
                                      yt(e, r);
                                  };
                                  t
                                    ? e(
                                        "REQUEST_PREPARE_OUTPUT",
                                        {
                                          query: g,
                                          item: v,
                                          success: function (t) {
                                            e("DID_PREPARE_OUTPUT", {
                                              id: g,
                                              file: t,
                                            }),
                                              n();
                                          },
                                        },
                                        !0
                                      )
                                    : n();
                                }))
                              : e("REMOVE_ITEM", { query: g });
                          };
                          Oe("DID_LOAD_ITEM", v, { query: n, dispatch: e })
                            .then(function () {
                              Dt(n("GET_BEFORE_ADD_FILE"), Te(v)).then(t);
                            })
                            .catch(function () {
                              t(!1);
                            });
                        }),
                        v.on("process-start", function () {
                          e("DID_START_ITEM_PROCESSING", { id: g });
                        }),
                        v.on("process-progress", function (t) {
                          e("DID_UPDATE_ITEM_PROCESS_PROGRESS", {
                            id: g,
                            progress: t,
                          });
                        }),
                        v.on("process-error", function (t) {
                          e("DID_THROW_ITEM_PROCESSING_ERROR", {
                            id: g,
                            error: t,
                            status: {
                              main: Ot(r.options.labelFileProcessingError)(t),
                              sub: r.options.labelTapToRetry,
                            },
                          });
                        }),
                        v.on("process-revert-error", function (t) {
                          e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
                            id: g,
                            error: t,
                            status: {
                              main: Ot(r.options.labelFileProcessingRevertError)(
                                t
                              ),
                              sub: r.options.labelTapToRetry,
                            },
                          });
                        }),
                        v.on("process-complete", function (t) {
                          e("DID_COMPLETE_ITEM_PROCESSING", {
                            id: g,
                            error: null,
                            serverFileReference: t,
                          }),
                            e("DID_DEFINE_VALUE", { id: g, value: t });
                        }),
                        v.on("process-abort", function () {
                          e("DID_ABORT_ITEM_PROCESSING", { id: g });
                        }),
                        v.on("process-revert", function () {
                          e("DID_REVERT_ITEM_PROCESSING", { id: g }),
                            e("DID_DEFINE_VALUE", { id: g, value: null });
                        }),
                        e("DID_ADD_ITEM", {
                          id: g,
                          index: a,
                          interactionMethod: u,
                        }),
                        yt(e, r);
                      var h = r.options.server || {},
                        R = h.url,
                        O = h.load,
                        y = h.restore,
                        D = h.fetch;
                      v.load(
                        o,
                        Je(
                          I === ve.INPUT
                            ? U(o) &&
                              (function (e) {
                                return (
                                  (e.indexOf(":") > -1 || e.indexOf("//") > -1) &&
                                  Rt(location.href) !== Rt(e)
                                );
                              })(o) &&
                              D
                              ? at(R, D)
                              : ht
                            : at(R, I === ve.LIMBO ? y : O)
                        ),
                        function (e, t, r) {
                          Oe("LOAD_FILE", e, { query: n }).then(t).catch(r);
                        }
                      );
                    }
                  },
                  REQUEST_PREPARE_OUTPUT: function (e) {
                    var t = e.item,
                      r = e.success,
                      o = e.failure,
                      i = void 0 === o ? function () {} : o,
                      a = { error: nt("error", 0, "Item not found"), file: null };
                    if (t.archived) return i(a);
                    Oe("PREPARE_OUTPUT", t.file, { query: n, item: t }).then(
                      function (e) {
                        Oe("COMPLETE_PREPARE_OUTPUT", e, {
                          query: n,
                          item: t,
                        }).then(function (e) {
                          if (t.archived) return i(a);
                          r(e);
                        });
                      }
                    );
                  },
                  COMPLETE_LOAD_ITEM: function (t) {
                    var o = t.item,
                      i = t.data,
                      a = i.success,
                      u = i.source,
                      s = n("GET_ITEM_INSERT_LOCATION");
                    if (
                      (Y(s) && u && St(r, s),
                      e("DID_LOAD_ITEM", {
                        id: o.id,
                        error: null,
                        serverFileReference: o.origin === ve.INPUT ? null : u,
                      }),
                      a(Te(o)),
                      o.origin !== ve.LOCAL)
                    )
                      return o.origin === ve.LIMBO
                        ? (e("DID_COMPLETE_ITEM_PROCESSING", {
                            id: o.id,
                            error: null,
                            serverFileReference: u,
                          }),
                          void e("DID_DEFINE_VALUE", { id: o.id, value: u }))
                        : void (
                            n("IS_ASYNC") &&
                            r.options.instantUpload &&
                            e("REQUEST_ITEM_PROCESSING", { query: o.id })
                          );
                    e("DID_LOAD_LOCAL_ITEM", { id: o.id });
                  },
                  RETRY_ITEM_LOAD: At(r, function (e) {
                    e.retryLoad();
                  }),
                  REQUEST_ITEM_PREPARE: At(r, function (t, n, r) {
                    e(
                      "REQUEST_PREPARE_OUTPUT",
                      {
                        query: t.id,
                        item: t,
                        success: function (r) {
                          e("DID_PREPARE_OUTPUT", { id: t.id, file: r }),
                            n({ file: t, output: r });
                        },
                        failure: r,
                      },
                      !0
                    );
                  }),
                  REQUEST_ITEM_PROCESSING: At(r, function (t, o, i) {
                    if (t.status === Ie.IDLE || t.status === Ie.PROCESSING_ERROR)
                      t.status !== Ie.PROCESSING_QUEUED &&
                        (t.requestProcessing(),
                        e("DID_REQUEST_ITEM_PROCESSING", { id: t.id }),
                        e(
                          "PROCESS_ITEM",
                          { query: t, success: o, failure: i },
                          !0
                        ));
                    else {
                      var a = function () {
                          return e("REQUEST_ITEM_PROCESSING", {
                            query: t,
                            success: o,
                            failure: i,
                          });
                        },
                        u = function () {
                          return document.hidden ? a() : setTimeout(a, 32);
                        };
                      t.status === Ie.PROCESSING_COMPLETE ||
                      t.status === Ie.PROCESSING_REVERT_ERROR
                        ? t
                            .revert(
                              Et(r.options.server.url, r.options.server.revert),
                              n("GET_FORCE_REVERT")
                            )
                            .then(u)
                            .catch(function () {})
                        : t.status === Ie.PROCESSING &&
                          t.abortProcessing().then(u);
                    }
                  }),
                  PROCESS_ITEM: At(r, function (t, o, i) {
                    var a = n("GET_MAX_PARALLEL_UPLOADS");
                    if (n("GET_ITEMS_BY_STATUS", Ie.PROCESSING).length !== a) {
                      if (t.status !== Ie.PROCESSING) {
                        var u = function t() {
                          var n = r.processingQueue.shift();
                          if (n) {
                            var o = n.id,
                              i = n.success,
                              a = n.failure,
                              u = Pe(r.items, o);
                            u && !u.archived
                              ? e(
                                  "PROCESS_ITEM",
                                  { query: o, success: i, failure: a },
                                  !0
                                )
                              : t();
                          }
                        };
                        t.onOnce("process-complete", function () {
                          o(Te(t)),
                            u(),
                            n("GET_ITEMS_BY_STATUS", Ie.PROCESSING_COMPLETE)
                              .length === r.items.length &&
                              e("DID_COMPLETE_ITEM_PROCESSING_ALL");
                        }),
                          t.onOnce("process-error", function (e) {
                            i({ error: e, file: Te(t) }), u();
                          });
                        var s = r.options;
                        t.process(
                          Tt(
                            pt(s.server.url, s.server.process, s.name, {
                              chunkTransferId: t.transferId,
                              chunkServer: s.server.patch,
                              chunkUploads: s.chunkUploads,
                              chunkForce: s.chunkForce,
                              chunkSize: s.chunkSize,
                              chunkRetryDelays: s.chunkRetryDelays,
                            })
                          ),
                          function (r, o, i) {
                            Oe("PREPARE_OUTPUT", r, { query: n, item: t })
                              .then(function (n) {
                                e("DID_PREPARE_OUTPUT", { id: t.id, file: n }),
                                  o(n);
                              })
                              .catch(i);
                          }
                        );
                      }
                    } else r.processingQueue.push({ id: t.id, success: o, failure: i });
                  }),
                  RETRY_ITEM_PROCESSING: At(r, function (t) {
                    e("REQUEST_ITEM_PROCESSING", { query: t });
                  }),
                  REQUEST_REMOVE_ITEM: At(r, function (t) {
                    Dt(n("GET_BEFORE_REMOVE_FILE"), Te(t)).then(function (n) {
                      n && e("REMOVE_ITEM", { query: t });
                    });
                  }),
                  RELEASE_ITEM: At(r, function (e) {
                    e.release();
                  }),
                  REMOVE_ITEM: At(r, function (t, o, i, a) {
                    var u = function () {
                        var n = t.id;
                        gt(r.items, n).archive(),
                          e("DID_REMOVE_ITEM", { error: null, id: n, item: t }),
                          yt(e, r),
                          o(Te(t));
                      },
                      s = r.options.server;
                    t.origin === ve.LOCAL && s && Y(s.remove)
                      ? (e("DID_START_ITEM_REMOVE", { id: t.id }),
                        s.remove(
                          t.source,
                          function () {
                            return u();
                          },
                          function (n) {
                            e("DID_THROW_ITEM_REMOVE_ERROR", {
                              id: t.id,
                              error: nt("error", 0, n, null),
                              status: {
                                main: Ot(r.options.labelFileRemoveError)(n),
                                sub: r.options.labelTapToRetry,
                              },
                            });
                          }
                        ))
                      : (a.revert &&
                          t.origin !== ve.LOCAL &&
                          null !== t.serverId &&
                          t.revert(
                            Et(r.options.server.url, r.options.server.revert),
                            n("GET_FORCE_REVERT")
                          ),
                        u());
                  }),
                  ABORT_ITEM_LOAD: At(r, function (e) {
                    e.abortLoad();
                  }),
                  ABORT_ITEM_PROCESSING: At(r, function (t) {
                    t.serverId
                      ? e("REVERT_ITEM_PROCESSING", { id: t.id })
                      : t.abortProcessing().then(function () {
                          r.options.instantUpload &&
                            e("REMOVE_ITEM", { query: t.id });
                        });
                  }),
                  REQUEST_REVERT_ITEM_PROCESSING: At(r, function (t) {
                    if (r.options.instantUpload) {
                      var o = function (n) {
                          n && e("REVERT_ITEM_PROCESSING", { query: t });
                        },
                        i = n("GET_BEFORE_REMOVE_FILE");
                      if (!i) return o(!0);
                      var a = i(Te(t));
                      return null == a
                        ? o(!0)
                        : "boolean" == typeof a
                        ? o(a)
                        : void ("function" == typeof a.then && a.then(o));
                    }
                    e("REVERT_ITEM_PROCESSING", { query: t });
                  }),
                  REVERT_ITEM_PROCESSING: At(r, function (t) {
                    t.revert(
                      Et(r.options.server.url, r.options.server.revert),
                      n("GET_FORCE_REVERT")
                    )
                      .then(function () {
                        (r.options.instantUpload ||
                          (function (e) {
                            return !vt(e.file);
                          })(t)) &&
                          e("REMOVE_ITEM", { query: t.id });
                      })
                      .catch(function () {});
                  }),
                  SET_OPTIONS: function (n) {
                    var r = n.options;
                    t(r, function (t, n) {
                      e("SET_" + $(t, "_").toUpperCase(), { value: n });
                    });
                  },
                };
              },
              bt = function (e) {
                return e;
              },
              Lt = function (e) {
                return document.createElement(e);
              },
              Mt = function (e, t) {
                var n = e.childNodes[0];
                n
                  ? t !== n.nodeValue && (n.nodeValue = t)
                  : ((n = document.createTextNode(t)), e.appendChild(n));
              },
              wt = function (e, t, n, r) {
                var o = (((r % 360) - 90) * Math.PI) / 180;
                return { x: e + n * Math.cos(o), y: t + n * Math.sin(o) };
              },
              Ct = function (e, t, n, r, o) {
                var i = 1;
                return (
                  o > r && o - r <= 0.5 && (i = 0),
                  r > o && r - o >= 0.5 && (i = 0),
                  (function (e, t, n, r, o, i) {
                    var a = wt(e, t, n, o),
                      u = wt(e, t, n, r);
                    return ["M", a.x, a.y, "A", n, n, 0, i, 0, u.x, u.y].join(
                      " "
                    );
                  })(
                    e,
                    t,
                    n,
                    360 * Math.min(0.9999, r),
                    360 * Math.min(0.9999, o),
                    i
                  )
                );
              },
              Nt = S({
                tag: "div",
                name: "progress-indicator",
                ignoreRectUpdate: !0,
                ignoreRect: !0,
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (n.spin = !1), (n.progress = 0), (n.opacity = 0);
                  var r = a("svg");
                  (t.ref.path = a("path", {
                    "stroke-width": 2,
                    "stroke-linecap": "round",
                  })),
                    r.appendChild(t.ref.path),
                    (t.ref.svg = r),
                    t.appendChild(r);
                },
                write: function (e) {
                  var t = e.root,
                    n = e.props;
                  if (0 !== n.opacity) {
                    n.align && (t.element.dataset.align = n.align);
                    var o = parseInt(r(t.ref.path, "stroke-width"), 10),
                      i = 0.5 * t.rect.element.width,
                      a = 0,
                      u = 0;
                    n.spin ? ((a = 0), (u = 0.5)) : ((a = 0), (u = n.progress));
                    var s = Ct(i, i, i - o, a, u);
                    r(t.ref.path, "d", s),
                      r(
                        t.ref.path,
                        "stroke-opacity",
                        n.spin || n.progress > 0 ? 1 : 0
                      );
                  }
                },
                mixins: {
                  apis: ["progress", "spin", "align"],
                  styles: ["opacity"],
                  animations: {
                    opacity: { type: "tween", duration: 500 },
                    progress: {
                      type: "spring",
                      stiffness: 0.95,
                      damping: 0.65,
                      mass: 10,
                    },
                  },
                },
              }),
              Gt = S({
                tag: "button",
                attributes: { type: "button" },
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                name: "file-action-button",
                mixins: {
                  apis: ["label"],
                  styles: [
                    "translateX",
                    "translateY",
                    "scaleX",
                    "scaleY",
                    "opacity",
                  ],
                  animations: {
                    scaleX: "spring",
                    scaleY: "spring",
                    translateX: "spring",
                    translateY: "spring",
                    opacity: { type: "tween", duration: 250 },
                  },
                  listeners: !0,
                },
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (t.element.innerHTML =
                    (n.icon || "") + "<span>" + n.label + "</span>"),
                    (n.isDisabled = !1);
                },
                write: function (e) {
                  var t = e.root,
                    n = e.props,
                    o = n.isDisabled,
                    i = t.query("GET_DISABLED") || 0 === n.opacity;
                  i && !o
                    ? ((n.isDisabled = !0), r(t.element, "disabled", "disabled"))
                    : !i &&
                      o &&
                      ((n.isDisabled = !1),
                      t.element.removeAttribute("disabled"));
                },
              }),
              Ut = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : ".";
                return (e = Math.round(Math.abs(e))) < 1e3
                  ? e + " bytes"
                  : e < qt
                  ? Math.floor(e / Bt) + " KB"
                  : e < Vt
                  ? Ft(e / qt, 1, t) + " MB"
                  : Ft(e / Vt, 2, t) + " GB";
              },
              Bt = 1e3,
              qt = 1e6,
              Vt = 1e9,
              Ft = function (e, t, n) {
                return e
                  .toFixed(t)
                  .split(".")
                  .filter(function (e) {
                    return "0" !== e;
                  })
                  .join(n);
              },
              xt = function (e) {
                var t = e.root,
                  n = e.props;
                Mt(t.ref.fileSize, Ut(t.query("GET_ITEM_SIZE", n.id))),
                  Mt(t.ref.fileName, bt(t.query("GET_ITEM_NAME", n.id)));
              },
              Yt = function (e) {
                var t = e.root,
                  n = e.props;
                F(t.query("GET_ITEM_SIZE", n.id)) ||
                  Mt(
                    t.ref.fileSize,
                    t.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE")
                  );
              },
              jt = S({
                name: "file-info",
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                write: A({
                  DID_LOAD_ITEM: xt,
                  DID_UPDATE_ITEM_META: xt,
                  DID_THROW_ITEM_LOAD_ERROR: Yt,
                  DID_THROW_ITEM_INVALID: Yt,
                }),
                didCreateView: function (e) {
                  ye("CREATE_VIEW", Object.assign({}, e, { view: e }));
                },
                create: function (e) {
                  var t = e.root,
                    n = e.props,
                    o = Lt("span");
                  (o.className = "filepond--file-info-main"),
                    r(o, "aria-hidden", "true"),
                    t.appendChild(o),
                    (t.ref.fileName = o);
                  var i = Lt("span");
                  (i.className = "filepond--file-info-sub"),
                    t.appendChild(i),
                    (t.ref.fileSize = i),
                    Mt(i, t.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),
                    Mt(o, bt(t.query("GET_ITEM_NAME", n.id)));
                },
                mixins: {
                  styles: ["translateX", "translateY"],
                  animations: { translateX: "spring", translateY: "spring" },
                },
              }),
              kt = function (e) {
                return Math.round(100 * e);
              },
              Ht = function (e) {
                var t = e.root,
                  n = e.action,
                  r =
                    null === n.progress
                      ? t.query("GET_LABEL_FILE_LOADING")
                      : t.query("GET_LABEL_FILE_LOADING") +
                        " " +
                        kt(n.progress) +
                        "%";
                Mt(t.ref.main, r),
                  Mt(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
              },
              Xt = function (e) {
                var t = e.root;
                Mt(t.ref.main, ""), Mt(t.ref.sub, "");
              },
              Wt = function (e) {
                var t = e.root,
                  n = e.action;
                Mt(t.ref.main, n.status.main), Mt(t.ref.sub, n.status.sub);
              },
              zt = S({
                name: "file-status",
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                write: A({
                  DID_LOAD_ITEM: Xt,
                  DID_REVERT_ITEM_PROCESSING: Xt,
                  DID_REQUEST_ITEM_PROCESSING: function (e) {
                    var t = e.root;
                    Mt(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING")),
                      Mt(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
                  },
                  DID_ABORT_ITEM_PROCESSING: function (e) {
                    var t = e.root;
                    Mt(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING_ABORTED")),
                      Mt(t.ref.sub, t.query("GET_LABEL_TAP_TO_RETRY"));
                  },
                  DID_COMPLETE_ITEM_PROCESSING: function (e) {
                    var t = e.root;
                    Mt(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),
                      Mt(t.ref.sub, t.query("GET_LABEL_TAP_TO_UNDO"));
                  },
                  DID_UPDATE_ITEM_PROCESS_PROGRESS: function (e) {
                    var t = e.root,
                      n = e.action,
                      r =
                        null === n.progress
                          ? t.query("GET_LABEL_FILE_PROCESSING")
                          : t.query("GET_LABEL_FILE_PROCESSING") +
                            " " +
                            kt(n.progress) +
                            "%";
                    Mt(t.ref.main, r),
                      Mt(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
                  },
                  DID_UPDATE_ITEM_LOAD_PROGRESS: Ht,
                  DID_THROW_ITEM_LOAD_ERROR: Wt,
                  DID_THROW_ITEM_INVALID: Wt,
                  DID_THROW_ITEM_PROCESSING_ERROR: Wt,
                  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: Wt,
                  DID_THROW_ITEM_REMOVE_ERROR: Wt,
                }),
                didCreateView: function (e) {
                  ye("CREATE_VIEW", Object.assign({}, e, { view: e }));
                },
                create: function (e) {
                  var t = e.root,
                    n = Lt("span");
                  (n.className = "filepond--file-status-main"),
                    t.appendChild(n),
                    (t.ref.main = n);
                  var r = Lt("span");
                  (r.className = "filepond--file-status-sub"),
                    t.appendChild(r),
                    (t.ref.sub = r),
                    Ht({ root: t, action: { progress: null } });
                },
                mixins: {
                  styles: ["translateX", "translateY", "opacity"],
                  animations: {
                    opacity: { type: "tween", duration: 250 },
                    translateX: "spring",
                    translateY: "spring",
                  },
                },
              }),
              Qt = {
                AbortItemLoad: {
                  label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
                  action: "ABORT_ITEM_LOAD",
                  className: "filepond--action-abort-item-load",
                  align: "LOAD_INDICATOR_POSITION",
                },
                RetryItemLoad: {
                  label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
                  action: "RETRY_ITEM_LOAD",
                  icon: "GET_ICON_RETRY",
                  className: "filepond--action-retry-item-load",
                  align: "BUTTON_PROCESS_ITEM_POSITION",
                },
                RemoveItem: {
                  label: "GET_LABEL_BUTTON_REMOVE_ITEM",
                  action: "REQUEST_REMOVE_ITEM",
                  icon: "GET_ICON_REMOVE",
                  className: "filepond--action-remove-item",
                  align: "BUTTON_REMOVE_ITEM_POSITION",
                },
                ProcessItem: {
                  label: "GET_LABEL_BUTTON_PROCESS_ITEM",
                  action: "REQUEST_ITEM_PROCESSING",
                  icon: "GET_ICON_PROCESS",
                  className: "filepond--action-process-item",
                  align: "BUTTON_PROCESS_ITEM_POSITION",
                },
                AbortItemProcessing: {
                  label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
                  action: "ABORT_ITEM_PROCESSING",
                  className: "filepond--action-abort-item-processing",
                  align: "BUTTON_PROCESS_ITEM_POSITION",
                },
                RetryItemProcessing: {
                  label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
                  action: "RETRY_ITEM_PROCESSING",
                  icon: "GET_ICON_RETRY",
                  className: "filepond--action-retry-item-processing",
                  align: "BUTTON_PROCESS_ITEM_POSITION",
                },
                RevertItemProcessing: {
                  label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
                  action: "REQUEST_REVERT_ITEM_PROCESSING",
                  icon: "GET_ICON_UNDO",
                  className: "filepond--action-revert-item-processing",
                  align: "BUTTON_PROCESS_ITEM_POSITION",
                },
              },
              $t = [];
            t(Qt, function (e) {
              $t.push(e);
            });
            var Zt,
              Kt = function (e) {
                var t = e.ref.buttonRemoveItem.rect.element;
                return t.hidden ? null : t.width + t.left;
              },
              Jt = function (e) {
                return e.ref.buttonAbortItemLoad.rect.element.width;
              },
              en = function (e) {
                return Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4);
              },
              tn = function (e) {
                return Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2);
              },
              nn = function (e) {
                return e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION");
              },
              rn = {
                buttonAbortItemLoad: { opacity: 0 },
                buttonRetryItemLoad: { opacity: 0 },
                buttonRemoveItem: { opacity: 0 },
                buttonProcessItem: { opacity: 0 },
                buttonAbortItemProcessing: { opacity: 0 },
                buttonRetryItemProcessing: { opacity: 0 },
                buttonRevertItemProcessing: { opacity: 0 },
                loadProgressIndicator: {
                  opacity: 0,
                  align: function (e) {
                    return e.query("GET_STYLE_LOAD_INDICATOR_POSITION");
                  },
                },
                processProgressIndicator: {
                  opacity: 0,
                  align: function (e) {
                    return e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION");
                  },
                },
                processingCompleteIndicator: {
                  opacity: 0,
                  scaleX: 0.75,
                  scaleY: 0.75,
                },
                info: { translateX: 0, translateY: 0, opacity: 0 },
                status: { translateX: 0, translateY: 0, opacity: 0 },
              },
              on = {
                buttonRemoveItem: { opacity: 1 },
                buttonProcessItem: { opacity: 1 },
                info: { translateX: Kt },
                status: { translateX: Kt },
              },
              an = {
                buttonAbortItemProcessing: { opacity: 1 },
                processProgressIndicator: { opacity: 1 },
                status: { opacity: 1 },
              },
              un = {
                DID_THROW_ITEM_INVALID: {
                  buttonRemoveItem: { opacity: 1 },
                  info: { translateX: Kt },
                  status: { translateX: Kt, opacity: 1 },
                },
                DID_START_ITEM_LOAD: {
                  buttonAbortItemLoad: { opacity: 1 },
                  loadProgressIndicator: { opacity: 1 },
                  status: { opacity: 1 },
                },
                DID_THROW_ITEM_LOAD_ERROR: {
                  buttonRetryItemLoad: { opacity: 1 },
                  buttonRemoveItem: { opacity: 1 },
                  info: { translateX: Kt },
                  status: { opacity: 1 },
                },
                DID_START_ITEM_REMOVE: {
                  processProgressIndicator: { opacity: 1, align: nn },
                  info: { translateX: Kt },
                  status: { opacity: 0 },
                },
                DID_THROW_ITEM_REMOVE_ERROR: {
                  processProgressIndicator: { opacity: 0, align: nn },
                  buttonRemoveItem: { opacity: 1 },
                  info: { translateX: Kt },
                  status: { opacity: 1, translateX: Kt },
                },
                DID_LOAD_ITEM: on,
                DID_LOAD_LOCAL_ITEM: {
                  buttonRemoveItem: { opacity: 1 },
                  info: { translateX: Kt },
                  status: { translateX: Kt },
                },
                DID_START_ITEM_PROCESSING: an,
                DID_REQUEST_ITEM_PROCESSING: an,
                DID_UPDATE_ITEM_PROCESS_PROGRESS: an,
                DID_COMPLETE_ITEM_PROCESSING: {
                  buttonRevertItemProcessing: { opacity: 1 },
                  info: { opacity: 1 },
                  status: { opacity: 1 },
                },
                DID_THROW_ITEM_PROCESSING_ERROR: {
                  buttonRemoveItem: { opacity: 1 },
                  buttonRetryItemProcessing: { opacity: 1 },
                  status: { opacity: 1 },
                  info: { translateX: Kt },
                },
                DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
                  buttonRevertItemProcessing: { opacity: 1 },
                  status: { opacity: 1 },
                  info: { opacity: 1 },
                },
                DID_ABORT_ITEM_PROCESSING: {
                  buttonRemoveItem: { opacity: 1 },
                  buttonProcessItem: { opacity: 1 },
                  info: { translateX: Kt },
                  status: { opacity: 1 },
                },
                DID_REVERT_ITEM_PROCESSING: on,
              },
              sn = S({
                create: function (e) {
                  var t = e.root;
                  t.element.innerHTML = t.query("GET_ICON_DONE");
                },
                name: "processing-complete-indicator",
                ignoreRect: !0,
                mixins: {
                  styles: ["scaleX", "scaleY", "opacity"],
                  animations: {
                    scaleX: "spring",
                    scaleY: "spring",
                    opacity: { type: "tween", duration: 250 },
                  },
                },
              }),
              ln = A({
                DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function (e) {
                  var t = e.root,
                    n = e.action;
                  t.ref.buttonAbortItemProcessing.label = n.value;
                },
                DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function (e) {
                  var t = e.root,
                    n = e.action;
                  t.ref.buttonAbortItemLoad.label = n.value;
                },
                DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: function (e) {
                  var t = e.root,
                    n = e.action;
                  t.ref.buttonAbortItemRemoval.label = n.value;
                },
                DID_REQUEST_ITEM_PROCESSING: function (e) {
                  var t = e.root;
                  (t.ref.processProgressIndicator.spin = !0),
                    (t.ref.processProgressIndicator.progress = 0);
                },
                DID_START_ITEM_LOAD: function (e) {
                  var t = e.root;
                  (t.ref.loadProgressIndicator.spin = !0),
                    (t.ref.loadProgressIndicator.progress = 0);
                },
                DID_START_ITEM_REMOVE: function (e) {
                  var t = e.root;
                  (t.ref.processProgressIndicator.spin = !0),
                    (t.ref.processProgressIndicator.progress = 0);
                },
                DID_UPDATE_ITEM_LOAD_PROGRESS: function (e) {
                  var t = e.root,
                    n = e.action;
                  (t.ref.loadProgressIndicator.spin = !1),
                    (t.ref.loadProgressIndicator.progress = n.progress);
                },
                DID_UPDATE_ITEM_PROCESS_PROGRESS: function (e) {
                  var t = e.root,
                    n = e.action;
                  (t.ref.processProgressIndicator.spin = !1),
                    (t.ref.processProgressIndicator.progress = n.progress);
                },
              }),
              cn = S({
                create: function (e) {
                  var n,
                    r = e.root,
                    o = e.props.id,
                    i = r.query("GET_ALLOW_REVERT"),
                    a = r.query("GET_ALLOW_PROCESS"),
                    u = r.query("GET_INSTANT_UPLOAD"),
                    s = r.query("IS_ASYNC"),
                    l = r.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
                  s
                    ? a && !i
                      ? (n = function (e) {
                          return !/RevertItemProcessing/.test(e);
                        })
                      : !a && i
                      ? (n = function (e) {
                          return !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(
                            e
                          );
                        })
                      : a ||
                        i ||
                        (n = function (e) {
                          return !/Process/.test(e);
                        })
                    : (n = function (e) {
                        return !/Process/.test(e);
                      });
                  var c = n ? $t.filter(n) : $t.concat();
                  if (
                    (u &&
                      i &&
                      ((Qt.RevertItemProcessing.label =
                        "GET_LABEL_BUTTON_REMOVE_ITEM"),
                      (Qt.RevertItemProcessing.icon = "GET_ICON_REMOVE")),
                    s && !i)
                  ) {
                    var f = un.DID_COMPLETE_ITEM_PROCESSING;
                    (f.info.translateX = tn),
                      (f.info.translateY = en),
                      (f.status.translateY = en),
                      (f.processingCompleteIndicator = {
                        opacity: 1,
                        scaleX: 1,
                        scaleY: 1,
                      });
                  }
                  if (
                    (s &&
                      !a &&
                      ([
                        "DID_START_ITEM_PROCESSING",
                        "DID_REQUEST_ITEM_PROCESSING",
                        "DID_UPDATE_ITEM_PROCESS_PROGRESS",
                        "DID_THROW_ITEM_PROCESSING_ERROR",
                      ].forEach(function (e) {
                        un[e].status.translateY = en;
                      }),
                      (un.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX =
                        Jt)),
                    l && i)
                  ) {
                    Qt.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
                    var d = un.DID_COMPLETE_ITEM_PROCESSING;
                    (d.info.translateX = Kt),
                      (d.status.translateY = en),
                      (d.processingCompleteIndicator = {
                        opacity: 1,
                        scaleX: 1,
                        scaleY: 1,
                      });
                  }
                  t(Qt, function (e, t) {
                    var n = r.createChildView(Gt, {
                      label: r.query(t.label),
                      icon: r.query(t.icon),
                      opacity: 0,
                    });
                    c.includes(e) && r.appendChildView(n),
                      (n.element.dataset.align = r.query("GET_STYLE_" + t.align)),
                      n.element.classList.add(t.className),
                      n.on("click", function (e) {
                        e.stopPropagation(), r.dispatch(t.action, { query: o });
                      }),
                      (r.ref["button" + e] = n);
                  }),
                    (r.ref.processingCompleteIndicator = r.appendChildView(
                      r.createChildView(sn)
                    )),
                    (r.ref.processingCompleteIndicator.element.dataset.align =
                      r.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION")),
                    (r.ref.info = r.appendChildView(
                      r.createChildView(jt, { id: o })
                    )),
                    (r.ref.status = r.appendChildView(
                      r.createChildView(zt, { id: o })
                    ));
                  var p = r.appendChildView(
                    r.createChildView(Nt, {
                      opacity: 0,
                      align: r.query("GET_STYLE_LOAD_INDICATOR_POSITION"),
                    })
                  );
                  p.element.classList.add("filepond--load-indicator"),
                    (r.ref.loadProgressIndicator = p);
                  var E = r.appendChildView(
                    r.createChildView(Nt, {
                      opacity: 0,
                      align: r.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"),
                    })
                  );
                  E.element.classList.add("filepond--process-indicator"),
                    (r.ref.processProgressIndicator = E),
                    (r.ref.activeStyles = []);
                },
                write: function (e) {
                  var n = e.root,
                    r = e.actions,
                    o = e.props;
                  ln({ root: n, actions: r, props: o });
                  var i = r
                    .concat()
                    .filter(function (e) {
                      return /^DID_/.test(e.type);
                    })
                    .reverse()
                    .find(function (e) {
                      return un[e.type];
                    });
                  if (i) {
                    n.ref.activeStyles = [];
                    var a = un[i.type];
                    t(rn, function (e, r) {
                      var o = n.ref[e];
                      t(r, function (t, r) {
                        var i = a[e] && void 0 !== a[e][t] ? a[e][t] : r;
                        n.ref.activeStyles.push({ control: o, key: t, value: i });
                      });
                    });
                  }
                  n.ref.activeStyles.forEach(function (e) {
                    var t = e.control,
                      r = e.key,
                      o = e.value;
                    t[r] = "function" == typeof o ? o(n) : o;
                  });
                },
                didCreateView: function (e) {
                  ye("CREATE_VIEW", Object.assign({}, e, { view: e }));
                },
                name: "file",
              }),
              fn = S({
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (t.ref.fileName = Lt("legend")),
                    t.appendChild(t.ref.fileName),
                    (t.ref.file = t.appendChildView(
                      t.createChildView(cn, { id: n.id })
                    )),
                    (t.ref.data = !1);
                },
                ignoreRect: !0,
                write: A({
                  DID_LOAD_ITEM: function (e) {
                    var t = e.root,
                      n = e.props;
                    Mt(t.ref.fileName, bt(t.query("GET_ITEM_NAME", n.id)));
                  },
                }),
                didCreateView: function (e) {
                  ye("CREATE_VIEW", Object.assign({}, e, { view: e }));
                },
                tag: "fieldset",
                name: "file-wrapper",
              }),
              dn = { type: "spring", damping: 0.6, mass: 7 },
              pn = function (e, t, n) {
                var r = S({
                    name: "panel-" + t.name + " filepond--" + n,
                    mixins: t.mixins,
                    ignoreRectUpdate: !0,
                  }),
                  o = e.createChildView(r, t.props);
                e.ref[t.name] = e.appendChildView(o);
              },
              En = S({
                name: "panel",
                write: function (e) {
                  var t = e.root,
                    n = e.props;
                  if (
                    ((null !== t.ref.scalable && n.scalable === t.ref.scalable) ||
                      ((t.ref.scalable = !N(n.scalable) || n.scalable),
                      (t.element.dataset.scalable = t.ref.scalable)),
                    n.height)
                  ) {
                    var r = t.ref.top.rect.element,
                      o = t.ref.bottom.rect.element,
                      i = Math.max(r.height + o.height, n.height);
                    (t.ref.center.translateY = r.height),
                      (t.ref.center.scaleY = (i - r.height - o.height) / 100),
                      (t.ref.bottom.translateY = i - o.height);
                  }
                },
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  [
                    { name: "top" },
                    {
                      name: "center",
                      props: { translateY: null, scaleY: null },
                      mixins: {
                        animations: { scaleY: dn },
                        styles: ["translateY", "scaleY"],
                      },
                    },
                    {
                      name: "bottom",
                      props: { translateY: null },
                      mixins: {
                        animations: { translateY: dn },
                        styles: ["translateY"],
                      },
                    },
                  ].forEach(function (e) {
                    pn(t, e, n.name);
                  }),
                    t.element.classList.add("filepond--" + n.name),
                    (t.ref.scalable = null);
                },
                ignoreRect: !0,
                mixins: { apis: ["height", "scalable"] },
              }),
              _n = { type: "spring", stiffness: 0.75, damping: 0.45, mass: 10 },
              Tn = {
                DID_START_ITEM_LOAD: "busy",
                DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
                DID_THROW_ITEM_INVALID: "load-invalid",
                DID_THROW_ITEM_LOAD_ERROR: "load-error",
                DID_LOAD_ITEM: "idle",
                DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
                DID_START_ITEM_REMOVE: "busy",
                DID_START_ITEM_PROCESSING: "busy processing",
                DID_REQUEST_ITEM_PROCESSING: "busy processing",
                DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
                DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
                DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
                DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
                DID_ABORT_ITEM_PROCESSING: "cancelled",
                DID_REVERT_ITEM_PROCESSING: "idle",
              },
              In = A({
                DID_UPDATE_PANEL_HEIGHT: function (e) {
                  var t = e.root,
                    n = e.action;
                  t.height = n.height;
                },
              }),
              vn = A(
                {
                  DID_GRAB_ITEM: function (e) {
                    var t = e.root;
                    e.props.dragOrigin = { x: t.translateX, y: t.translateY };
                  },
                  DID_DRAG_ITEM: function (e) {
                    e.root.element.dataset.dragState = "drag";
                  },
                  DID_DROP_ITEM: function (e) {
                    var t = e.root,
                      n = e.props;
                    (n.dragOffset = null),
                      (n.dragOrigin = null),
                      (t.element.dataset.dragState = "drop");
                  },
                },
                function (e) {
                  var t = e.root,
                    n = e.actions,
                    r = e.props,
                    o = e.shouldOptimize;
                  "drop" === t.element.dataset.dragState &&
                    t.scaleX <= 1 &&
                    (t.element.dataset.dragState = "idle");
                  var i = n
                    .concat()
                    .filter(function (e) {
                      return /^DID_/.test(e.type);
                    })
                    .reverse()
                    .find(function (e) {
                      return Tn[e.type];
                    });
                  i &&
                    i.type !== r.currentState &&
                    ((r.currentState = i.type),
                    (t.element.dataset.filepondItemState =
                      Tn[r.currentState] || ""));
                  var a =
                    t.query("GET_ITEM_PANEL_ASPECT_RATIO") ||
                    t.query("GET_PANEL_ASPECT_RATIO");
                  a
                    ? o || (t.height = t.rect.element.width * a)
                    : (In({ root: t, actions: n, props: r }),
                      !t.height &&
                        t.ref.container.rect.element.height > 0 &&
                        (t.height = t.ref.container.rect.element.height)),
                    o && (t.ref.panel.height = null),
                    (t.ref.panel.height = t.height);
                }
              ),
              mn = S({
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (t.ref.handleClick = function (e) {
                    return t.dispatch("DID_ACTIVATE_ITEM", { id: n.id });
                  }),
                    (t.element.id = "filepond--item-" + n.id),
                    t.element.addEventListener("click", t.ref.handleClick),
                    (t.ref.container = t.appendChildView(
                      t.createChildView(fn, { id: n.id })
                    )),
                    (t.ref.panel = t.appendChildView(
                      t.createChildView(En, { name: "item-panel" })
                    )),
                    (t.ref.panel.height = null),
                    (n.markedForRemoval = !1),
                    t.query("GET_ALLOW_REORDER") &&
                      ((t.element.dataset.dragState = "idle"),
                      t.element.addEventListener("pointerdown", function (e) {
                        if (e.isPrimary) {
                          var r = !1,
                            o = e.pageX,
                            i = e.pageY;
                          (n.dragOrigin = { x: t.translateX, y: t.translateY }),
                            (n.dragCenter = { x: e.offsetX, y: e.offsetY });
                          var a,
                            u,
                            s,
                            l =
                              ((a = t.query("GET_ACTIVE_ITEMS")),
                              (u = a.map(function (e) {
                                return e.id;
                              })),
                              (s = void 0),
                              {
                                setIndex: function (e) {
                                  s = e;
                                },
                                getIndex: function () {
                                  return s;
                                },
                                getItemIndex: function (e) {
                                  return u.indexOf(e.id);
                                },
                              });
                          t.dispatch("DID_GRAB_ITEM", { id: n.id, dragState: l });
                          var c = function (e) {
                            e.isPrimary &&
                              (e.stopPropagation(),
                              e.preventDefault(),
                              (n.dragOffset = { x: e.pageX - o, y: e.pageY - i }),
                              n.dragOffset.x * n.dragOffset.x +
                                n.dragOffset.y * n.dragOffset.y >
                                16 &&
                                !r &&
                                ((r = !0),
                                t.element.removeEventListener(
                                  "click",
                                  t.ref.handleClick
                                )),
                              t.dispatch("DID_DRAG_ITEM", {
                                id: n.id,
                                dragState: l,
                              }));
                          };
                          document.addEventListener("pointermove", c),
                            document.addEventListener("pointerup", function e(a) {
                              a.isPrimary &&
                                (document.removeEventListener("pointermove", c),
                                document.removeEventListener("pointerup", e),
                                (n.dragOffset = {
                                  x: a.pageX - o,
                                  y: a.pageY - i,
                                }),
                                t.dispatch("DID_DROP_ITEM", {
                                  id: n.id,
                                  dragState: l,
                                }),
                                r &&
                                  setTimeout(function () {
                                    return t.element.addEventListener(
                                      "click",
                                      t.ref.handleClick
                                    );
                                  }, 0));
                            });
                        }
                      }));
                },
                write: vn,
                destroy: function (e) {
                  var t = e.root,
                    n = e.props;
                  t.element.removeEventListener("click", t.ref.handleClick),
                    t.dispatch("RELEASE_ITEM", { query: n.id });
                },
                tag: "li",
                name: "item",
                mixins: {
                  apis: [
                    "id",
                    "interactionMethod",
                    "markedForRemoval",
                    "spawnDate",
                    "dragCenter",
                    "dragOrigin",
                    "dragOffset",
                  ],
                  styles: [
                    "translateX",
                    "translateY",
                    "scaleX",
                    "scaleY",
                    "opacity",
                    "height",
                  ],
                  animations: {
                    scaleX: "spring",
                    scaleY: "spring",
                    translateX: _n,
                    translateY: _n,
                    opacity: { type: "tween", duration: 150 },
                  },
                },
              }),
              gn = function (e, t, n) {
                if (n) {
                  var r = e.rect.element.width,
                    o = t.length,
                    i = null;
                  if (0 === o || n.top < t[0].rect.element.top) return -1;
                  var a = t[0].rect.element,
                    u = a.marginLeft + a.marginRight,
                    s = a.width + u,
                    l = Math.round(r / s);
                  if (1 === l) {
                    for (var c = 0; c < o; c++) {
                      var f = t[c],
                        d = f.rect.outer.top + 0.5 * f.rect.element.height;
                      if (n.top < d) return c;
                    }
                    return o;
                  }
                  for (
                    var p = a.marginTop + a.marginBottom, E = a.height + p, _ = 0;
                    _ < o;
                    _++
                  ) {
                    var T = (_ % l) * s,
                      I = Math.floor(_ / l) * E,
                      v = I - a.marginTop,
                      m = T + s,
                      g = I + E + a.marginBottom;
                    if (n.top < g && n.top > v) {
                      if (n.left < m) return _;
                      i = _ !== o - 1 ? _ : null;
                    }
                  }
                  return null !== i ? i : o;
                }
              },
              hn = {
                height: 0,
                width: 0,
                get getHeight() {
                  return this.height;
                },
                set setHeight(e) {
                  (0 !== this.height && 0 !== e) || (this.height = e);
                },
                get getWidth() {
                  return this.width;
                },
                set setWidth(e) {
                  (0 !== this.width && 0 !== e) || (this.width = e);
                },
                setDimensions: function (e, t) {
                  (0 !== this.height && 0 !== e) || (this.height = e),
                    (0 !== this.width && 0 !== t) || (this.width = t);
                },
              },
              Rn = function (e, t, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 1;
                e.dragOffset
                  ? ((e.translateX = null),
                    (e.translateY = null),
                    (e.translateX = e.dragOrigin.x + e.dragOffset.x),
                    (e.translateY = e.dragOrigin.y + e.dragOffset.y),
                    (e.scaleX = 1.025),
                    (e.scaleY = 1.025))
                  : ((e.translateX = t),
                    (e.translateY = n),
                    Date.now() > e.spawnDate &&
                      (0 === e.opacity && On(e, t, n, r, o),
                      (e.scaleX = 1),
                      (e.scaleY = 1),
                      (e.opacity = 1)));
              },
              On = function (e, t, n, r, o) {
                e.interactionMethod === re
                  ? ((e.translateX = null),
                    (e.translateX = t),
                    (e.translateY = null),
                    (e.translateY = n))
                  : e.interactionMethod === ee
                  ? ((e.translateX = null),
                    (e.translateX = t - 20 * r),
                    (e.translateY = null),
                    (e.translateY = n - 10 * o),
                    (e.scaleX = 0.8),
                    (e.scaleY = 0.8))
                  : e.interactionMethod === te
                  ? ((e.translateY = null), (e.translateY = n - 30))
                  : e.interactionMethod === J &&
                    ((e.translateX = null),
                    (e.translateX = t - 30),
                    (e.translateY = null));
              },
              yn = function (e) {
                return (
                  e.rect.element.height +
                  0.5 * e.rect.element.marginBottom +
                  0.5 * e.rect.element.marginTop
                );
              },
              Dn = A({
                DID_ADD_ITEM: function (e) {
                  var t = e.root,
                    n = e.action,
                    r = n.id,
                    o = n.index,
                    i = n.interactionMethod;
                  t.ref.addIndex = o;
                  var a = Date.now(),
                    u = a,
                    s = 1;
                  if (i !== re) {
                    s = 0;
                    var l = t.query("GET_ITEM_INSERT_INTERVAL"),
                      c = a - t.ref.lastItemSpanwDate;
                    u = c < l ? a + (l - c) : a;
                  }
                  (t.ref.lastItemSpanwDate = u),
                    t.appendChildView(
                      t.createChildView(mn, {
                        spawnDate: u,
                        id: r,
                        opacity: s,
                        interactionMethod: i,
                      }),
                      o
                    );
                },
                DID_REMOVE_ITEM: function (e) {
                  var t = e.root,
                    n = e.action.id,
                    r = t.childViews.find(function (e) {
                      return e.id === n;
                    });
                  r &&
                    ((r.scaleX = 0.9),
                    (r.scaleY = 0.9),
                    (r.opacity = 0),
                    (r.markedForRemoval = !0));
                },
                DID_DRAG_ITEM: function (e) {
                  var t = e.root,
                    n = e.action,
                    r = n.id,
                    o = n.dragState,
                    i = t.query("GET_ITEM", { id: r }),
                    a = t.childViews.find(function (e) {
                      return e.id === r;
                    }),
                    u = t.childViews.length,
                    s = o.getItemIndex(i);
                  if (a) {
                    var l,
                      c = a.dragOrigin.x + a.dragOffset.x + a.dragCenter.x,
                      f = a.dragOrigin.y + a.dragOffset.y + a.dragCenter.y,
                      d = yn(a),
                      p =
                        (l = a).rect.element.width +
                        0.5 * l.rect.element.marginLeft +
                        0.5 * l.rect.element.marginRight,
                      E = Math.floor(t.rect.outer.width / p);
                    E > u && (E = u);
                    var _ = Math.floor(u / E + 1);
                    (hn.setHeight = d * _), (hn.setWidth = p * E);
                    var T = {
                        y: Math.floor(f / d),
                        x: Math.floor(c / p),
                        getGridIndex: function () {
                          return f > hn.getHeight ||
                            f < 0 ||
                            c > hn.getWidth ||
                            c < 0
                            ? s
                            : this.y * E + this.x;
                        },
                        getColIndex: function () {
                          for (
                            var e = t.query("GET_ACTIVE_ITEMS"),
                              n = t.childViews.filter(function (e) {
                                return e.rect.element.height;
                              }),
                              r = e.map(function (e) {
                                return n.find(function (t) {
                                  return t.id === e.id;
                                });
                              }),
                              o = r.findIndex(function (e) {
                                return e === a;
                              }),
                              i = yn(a),
                              u = r.length,
                              s = u,
                              l = 0,
                              c = 0,
                              d = 0,
                              p = 0;
                            p < u;
                            p++
                          )
                            if (((l = yn(r[p])), f < (c = (d = c) + l))) {
                              if (o > p) {
                                if (f < d + i) {
                                  s = p;
                                  break;
                                }
                                continue;
                              }
                              s = p;
                              break;
                            }
                          return s;
                        },
                      },
                      I = E > 1 ? T.getGridIndex() : T.getColIndex();
                    t.dispatch("MOVE_ITEM", { query: a, index: I });
                    var v = o.getIndex();
                    if (void 0 === v || v !== I) {
                      if ((o.setIndex(I), void 0 === v)) return;
                      t.dispatch("DID_REORDER_ITEMS", {
                        items: t.query("GET_ACTIVE_ITEMS"),
                        origin: s,
                        target: I,
                      });
                    }
                  }
                },
              }),
              Sn = S({
                create: function (e) {
                  var t = e.root;
                  r(t.element, "role", "list"),
                    (t.ref.lastItemSpanwDate = Date.now());
                },
                write: function (e) {
                  var t = e.root,
                    n = e.props,
                    r = e.actions,
                    o = e.shouldOptimize;
                  Dn({ root: t, props: n, actions: r });
                  var i = n.dragCoordinates,
                    a = t.rect.element.width,
                    u = t.childViews.filter(function (e) {
                      return e.rect.element.height;
                    }),
                    s = t
                      .query("GET_ACTIVE_ITEMS")
                      .map(function (e) {
                        return u.find(function (t) {
                          return t.id === e.id;
                        });
                      })
                      .filter(function (e) {
                        return e;
                      }),
                    l = i ? gn(t, s, i) : null,
                    c = t.ref.addIndex || null;
                  t.ref.addIndex = null;
                  var f = 0,
                    d = 0,
                    p = 0;
                  if (0 !== s.length) {
                    var E = s[0].rect.element,
                      _ = E.marginTop + E.marginBottom,
                      T = E.marginLeft + E.marginRight,
                      I = E.width + T,
                      v = E.height + _,
                      m = Math.round(a / I);
                    if (1 === m) {
                      var g = 0,
                        h = 0;
                      s.forEach(function (e, t) {
                        if (l) {
                          var n = t - l;
                          h =
                            -2 === n
                              ? 0.25 * -_
                              : -1 === n
                              ? 0.75 * -_
                              : 0 === n
                              ? 0.75 * _
                              : 1 === n
                              ? 0.25 * _
                              : 0;
                        }
                        o && ((e.translateX = null), (e.translateY = null)),
                          e.markedForRemoval || Rn(e, 0, g + h);
                        var r =
                          (e.rect.element.height + _) *
                          (e.markedForRemoval ? e.opacity : 1);
                        g += r;
                      });
                    } else {
                      var R = 0,
                        O = 0;
                      s.forEach(function (e, t) {
                        t === l && (f = 1),
                          t === c && (p += 1),
                          e.markedForRemoval && e.opacity < 0.5 && (d -= 1);
                        var n = t + p + f + d,
                          r = n % m,
                          i = Math.floor(n / m),
                          a = r * I,
                          u = i * v,
                          s = Math.sign(a - R),
                          E = Math.sign(u - O);
                        (R = a),
                          (O = u),
                          e.markedForRemoval ||
                            (o && ((e.translateX = null), (e.translateY = null)),
                            Rn(e, a, u, s, E));
                      });
                    }
                  }
                },
                tag: "ul",
                name: "list",
                didWriteView: function (e) {
                  var t = e.root;
                  t.childViews
                    .filter(function (e) {
                      return e.markedForRemoval && 0 === e.opacity && e.resting;
                    })
                    .forEach(function (e) {
                      e._destroy(), t.removeChildView(e);
                    });
                },
                filterFrameActionsForChild: function (e, t) {
                  return t.filter(function (t) {
                    return !t.data || !t.data.id || e.id === t.data.id;
                  });
                },
                mixins: { apis: ["dragCoordinates"] },
              }),
              An = A({
                DID_DRAG: function (e) {
                  var t = e.root,
                    n = e.props,
                    r = e.action;
                  t.query("GET_ITEM_INSERT_LOCATION_FREEDOM") &&
                    (n.dragCoordinates = {
                      left: r.position.scopeLeft - t.ref.list.rect.element.left,
                      top:
                        r.position.scopeTop -
                        (t.rect.outer.top +
                          t.rect.element.marginTop +
                          t.rect.element.scrollTop),
                    });
                },
                DID_END_DRAG: function (e) {
                  e.props.dragCoordinates = null;
                },
              }),
              Pn = S({
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (t.ref.list = t.appendChildView(t.createChildView(Sn))),
                    (n.dragCoordinates = null),
                    (n.overflowing = !1);
                },
                write: function (e) {
                  var t = e.root,
                    n = e.props,
                    r = e.actions;
                  if (
                    (An({ root: t, props: n, actions: r }),
                    (t.ref.list.dragCoordinates = n.dragCoordinates),
                    n.overflowing &&
                      !n.overflow &&
                      ((n.overflowing = !1),
                      (t.element.dataset.state = ""),
                      (t.height = null)),
                    n.overflow)
                  ) {
                    var o = Math.round(n.overflow);
                    o !== t.height &&
                      ((n.overflowing = !0),
                      (t.element.dataset.state = "overflow"),
                      (t.height = o));
                  }
                },
                name: "list-scroller",
                mixins: {
                  apis: ["overflow", "dragCoordinates"],
                  styles: ["height", "translateY"],
                  animations: { translateY: "spring" },
                },
              }),
              bn = function (e, t, n) {
                var o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "";
                n ? r(e, t, o) : e.removeAttribute(t);
              },
              Ln = function (e) {
                var t = e.root,
                  n = e.action;
                t.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") &&
                  bn(
                    t.element,
                    "accept",
                    !!n.value,
                    n.value ? n.value.join(",") : ""
                  );
              },
              Mn = function (e) {
                var t = e.root,
                  n = e.action;
                bn(t.element, "multiple", n.value);
              },
              wn = function (e) {
                var t = e.root,
                  n = e.action;
                bn(t.element, "webkitdirectory", n.value);
              },
              Cn = function (e) {
                var t = e.root,
                  n = t.query("GET_DISABLED"),
                  r = t.query("GET_ALLOW_BROWSE"),
                  o = n || !r;
                bn(t.element, "disabled", o);
              },
              Nn = function (e) {
                var t = e.root;
                e.action.value
                  ? 0 === t.query("GET_TOTAL_ITEMS") &&
                    bn(t.element, "required", !0)
                  : bn(t.element, "required", !1);
              },
              Gn = function (e) {
                var t = e.root,
                  n = e.action;
                bn(
                  t.element,
                  "capture",
                  !!n.value,
                  !0 === n.value ? "" : n.value
                );
              },
              Un = function (e) {
                var t = e.root,
                  n = t.element;
                t.query("GET_TOTAL_ITEMS") > 0
                  ? (bn(n, "required", !1), bn(n, "name", !1))
                  : (bn(n, "name", !0, t.query("GET_NAME")),
                    t.query("GET_CHECK_VALIDITY") && n.setCustomValidity(""),
                    t.query("GET_REQUIRED") && bn(n, "required", !0));
              },
              Bn = S({
                tag: "input",
                name: "browser",
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                attributes: { type: "file" },
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (t.element.id = "filepond--browser-" + n.id),
                    r(t.element, "name", t.query("GET_NAME")),
                    r(t.element, "aria-controls", "filepond--assistant-" + n.id),
                    r(
                      t.element,
                      "aria-labelledby",
                      "filepond--drop-label-" + n.id
                    ),
                    Ln({
                      root: t,
                      action: { value: t.query("GET_ACCEPTED_FILE_TYPES") },
                    }),
                    Mn({
                      root: t,
                      action: { value: t.query("GET_ALLOW_MULTIPLE") },
                    }),
                    wn({
                      root: t,
                      action: { value: t.query("GET_ALLOW_DIRECTORIES_ONLY") },
                    }),
                    Cn({ root: t }),
                    Nn({ root: t, action: { value: t.query("GET_REQUIRED") } }),
                    Gn({
                      root: t,
                      action: { value: t.query("GET_CAPTURE_METHOD") },
                    }),
                    (t.ref.handleChange = function (e) {
                      if (t.element.value) {
                        var r = Array.from(t.element.files).map(function (e) {
                          return (e._relativePath = e.webkitRelativePath), e;
                        });
                        setTimeout(function () {
                          n.onload(r),
                            (function (e) {
                              if (e && "" !== e.value) {
                                try {
                                  e.value = "";
                                } catch (o) {}
                                if (e.value) {
                                  var t = Lt("form"),
                                    n = e.parentNode,
                                    r = e.nextSibling;
                                  t.appendChild(e),
                                    t.reset(),
                                    r ? n.insertBefore(e, r) : n.appendChild(e);
                                }
                              }
                            })(t.element);
                        }, 250);
                      }
                    }),
                    t.element.addEventListener("change", t.ref.handleChange);
                },
                destroy: function (e) {
                  var t = e.root;
                  t.element.removeEventListener("change", t.ref.handleChange);
                },
                write: A({
                  DID_LOAD_ITEM: Un,
                  DID_REMOVE_ITEM: Un,
                  DID_THROW_ITEM_INVALID: function (e) {
                    var t = e.root;
                    t.query("GET_CHECK_VALIDITY") &&
                      t.element.setCustomValidity(
                        t.query("GET_LABEL_INVALID_FIELD")
                      );
                  },
                  DID_SET_DISABLED: Cn,
                  DID_SET_ALLOW_BROWSE: Cn,
                  DID_SET_ALLOW_DIRECTORIES_ONLY: wn,
                  DID_SET_ALLOW_MULTIPLE: Mn,
                  DID_SET_ACCEPTED_FILE_TYPES: Ln,
                  DID_SET_CAPTURE_METHOD: Gn,
                  DID_SET_REQUIRED: Nn,
                }),
              }),
              qn = 13,
              Vn = 32,
              Fn = function (e, t) {
                e.innerHTML = t;
                var n = e.querySelector(".filepond--label-action");
                return n && r(n, "tabindex", "0"), t;
              },
              xn = S({
                name: "drop-label",
                ignoreRect: !0,
                create: function (e) {
                  var t = e.root,
                    n = e.props,
                    o = Lt("label");
                  r(o, "for", "filepond--browser-" + n.id),
                    r(o, "id", "filepond--drop-label-" + n.id),
                    r(o, "aria-hidden", "true"),
                    (t.ref.handleKeyDown = function (e) {
                      (e.keyCode === qn || e.keyCode === Vn) &&
                        (e.preventDefault(), t.ref.label.click());
                    }),
                    (t.ref.handleClick = function (e) {
                      e.target === o ||
                        o.contains(e.target) ||
                        t.ref.label.click();
                    }),
                    o.addEventListener("keydown", t.ref.handleKeyDown),
                    t.element.addEventListener("click", t.ref.handleClick),
                    Fn(o, n.caption),
                    t.appendChild(o),
                    (t.ref.label = o);
                },
                destroy: function (e) {
                  var t = e.root;
                  t.ref.label.addEventListener("keydown", t.ref.handleKeyDown),
                    t.element.removeEventListener("click", t.ref.handleClick);
                },
                write: A({
                  DID_SET_LABEL_IDLE: function (e) {
                    var t = e.root,
                      n = e.action;
                    Fn(t.ref.label, n.value);
                  },
                }),
                mixins: {
                  styles: ["opacity", "translateX", "translateY"],
                  animations: {
                    opacity: { type: "tween", duration: 150 },
                    translateX: "spring",
                    translateY: "spring",
                  },
                },
              }),
              Yn = S({
                name: "drip-blob",
                ignoreRect: !0,
                mixins: {
                  styles: [
                    "translateX",
                    "translateY",
                    "scaleX",
                    "scaleY",
                    "opacity",
                  ],
                  animations: {
                    scaleX: "spring",
                    scaleY: "spring",
                    translateX: "spring",
                    translateY: "spring",
                    opacity: { type: "tween", duration: 250 },
                  },
                },
              }),
              jn = A({
                DID_DRAG: function (e) {
                  var t = e.root,
                    n = e.action;
                  t.ref.blob
                    ? ((t.ref.blob.translateX = n.position.scopeLeft),
                      (t.ref.blob.translateY = n.position.scopeTop),
                      (t.ref.blob.scaleX = 1),
                      (t.ref.blob.scaleY = 1),
                      (t.ref.blob.opacity = 1))
                    : (function (e) {
                        var t = e.root,
                          n = 0.5 * t.rect.element.width,
                          r = 0.5 * t.rect.element.height;
                        t.ref.blob = t.appendChildView(
                          t.createChildView(Yn, {
                            opacity: 0,
                            scaleX: 2.5,
                            scaleY: 2.5,
                            translateX: n,
                            translateY: r,
                          })
                        );
                      })({ root: t });
                },
                DID_DROP: function (e) {
                  var t = e.root;
                  t.ref.blob &&
                    ((t.ref.blob.scaleX = 2.5),
                    (t.ref.blob.scaleY = 2.5),
                    (t.ref.blob.opacity = 0));
                },
                DID_END_DRAG: function (e) {
                  var t = e.root;
                  t.ref.blob && (t.ref.blob.opacity = 0);
                },
              }),
              kn = S({
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                name: "drip",
                write: function (e) {
                  var t = e.root,
                    n = e.props,
                    r = e.actions;
                  jn({ root: t, props: n, actions: r });
                  var o = t.ref.blob;
                  0 === r.length &&
                    o &&
                    0 === o.opacity &&
                    (t.removeChildView(o), (t.ref.blob = null));
                },
              }),
              Hn = function (e, t) {
                return e.ref.fields[t];
              },
              Xn = function (e) {
                e.query("GET_ACTIVE_ITEMS").forEach(function (t) {
                  e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id]);
                });
              },
              Wn = function (e) {
                var t = e.root;
                return Xn(t);
              },
              zn = A({
                DID_SET_DISABLED: function (e) {
                  var t = e.root;
                  t.element.disabled = t.query("GET_DISABLED");
                },
                DID_ADD_ITEM: function (e) {
                  var t = e.root,
                    n = e.action,
                    r = Lt("input");
                  (r.type = "hidden"),
                    (r.name = t.query("GET_NAME")),
                    (r.disabled = t.query("GET_DISABLED")),
                    (t.ref.fields[n.id] = r),
                    Xn(t);
                },
                DID_LOAD_ITEM: function (e) {
                  var t = e.root,
                    n = e.action,
                    r = Hn(t, n.id);
                  r &&
                    null !== n.serverFileReference &&
                    (r.value = n.serverFileReference);
                },
                DID_REMOVE_ITEM: function (e) {
                  var t = e.root,
                    n = e.action,
                    r = Hn(t, n.id);
                  r && (r.parentNode.removeChild(r), delete t.ref.fields[n.id]);
                },
                DID_DEFINE_VALUE: function (e) {
                  var t = e.root,
                    n = e.action,
                    r = Hn(t, n.id);
                  r &&
                    (null === n.value
                      ? r.removeAttribute("value")
                      : (r.value = n.value),
                    Xn(t));
                },
                DID_REORDER_ITEMS: Wn,
                DID_SORT_ITEMS: Wn,
              }),
              Qn = S({
                tag: "fieldset",
                name: "data",
                create: function (e) {
                  return (e.root.ref.fields = {});
                },
                write: zn,
                ignoreRect: !0,
              }),
              $n = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"],
              Zn = ["css", "csv", "html", "txt"],
              Kn = { zip: "zip|compressed", epub: "application/epub+zip" },
              Jn = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                return (
                  (e = e.toLowerCase()),
                  $n.includes(e)
                    ? "image/" +
                      ("jpg" === e ? "jpeg" : "svg" === e ? "svg+xml" : e)
                    : Zn.includes(e)
                    ? "text/" + e
                    : Kn[e] || ""
                );
              },
              er = function (e) {
                return new Promise(function (t, n) {
                  var r = cr(e);
                  if (r.length && !tr(e)) return t(r);
                  nr(e).then(t);
                });
              },
              tr = function (e) {
                return !!e.files && e.files.length > 0;
              },
              nr = function (e) {
                return new Promise(function (t, n) {
                  var r = (e.items ? Array.from(e.items) : [])
                    .filter(function (e) {
                      return rr(e);
                    })
                    .map(function (e) {
                      return or(e);
                    });
                  r.length
                    ? Promise.all(r)
                        .then(function (e) {
                          var n = [];
                          e.forEach(function (e) {
                            n.push.apply(n, e);
                          }),
                            t(
                              n
                                .filter(function (e) {
                                  return e;
                                })
                                .map(function (e) {
                                  return (
                                    e._relativePath ||
                                      (e._relativePath = e.webkitRelativePath),
                                    e
                                  );
                                })
                            );
                        })
                        .catch(console.error)
                    : t(e.files ? Array.from(e.files) : []);
                });
              },
              rr = function (e) {
                if (sr(e)) {
                  var t = lr(e);
                  if (t) return t.isFile || t.isDirectory;
                }
                return "file" === e.kind;
              },
              or = function (e) {
                return new Promise(function (t, n) {
                  ur(e) ? ir(lr(e)).then(t).catch(n) : t([e.getAsFile()]);
                });
              },
              ir = function (e) {
                return new Promise(function (t, n) {
                  var r = [],
                    o = 0,
                    i = 0,
                    a = function () {
                      0 === i && 0 === o && t(r);
                    };
                  !(function e(t) {
                    o++;
                    var u = t.createReader();
                    !(function t() {
                      u.readEntries(function (n) {
                        if (0 === n.length) return o--, void a();
                        n.forEach(function (t) {
                          t.isDirectory
                            ? e(t)
                            : (i++,
                              t.file(function (e) {
                                var n = ar(e);
                                t.fullPath && (n._relativePath = t.fullPath),
                                  r.push(n),
                                  i--,
                                  a();
                              }));
                        }),
                          t();
                      }, n);
                    })();
                  })(e);
                });
              },
              ar = function (e) {
                if (e.type.length) return e;
                var t = e.lastModifiedDate,
                  n = e.name;
                return (
                  ((e = e.slice(0, e.size, Jn(Ye(e.name)))).name = n),
                  (e.lastModifiedDate = t),
                  e
                );
              },
              ur = function (e) {
                return sr(e) && (lr(e) || {}).isDirectory;
              },
              sr = function (e) {
                return "webkitGetAsEntry" in e;
              },
              lr = function (e) {
                return e.webkitGetAsEntry();
              },
              cr = function (e) {
                var t = [];
                try {
                  if ((t = dr(e)).length) return t;
                  t = fr(e);
                } catch (n) {}
                return t;
              },
              fr = function (e) {
                var t = e.getData("url");
                return "string" == typeof t && t.length ? [t] : [];
              },
              dr = function (e) {
                var t = e.getData("text/html");
                if ("string" == typeof t && t.length) {
                  var n = t.match(/src\s*=\s*"(.+?)"/);
                  if (n) return [n[1]];
                }
                return [];
              },
              pr = [],
              Er = function (e) {
                return {
                  pageLeft: e.pageX,
                  pageTop: e.pageY,
                  scopeLeft: e.offsetX || e.layerX,
                  scopeTop: e.offsetY || e.layerY,
                };
              },
              _r = function (e) {
                var t = pr.find(function (t) {
                  return t.element === e;
                });
                if (t) return t;
                var n = Tr(e);
                return pr.push(n), n;
              },
              Tr = function (e) {
                var n = [],
                  r = { dragenter: gr, dragover: hr, dragleave: Or, drop: Rr },
                  o = {};
                t(r, function (t, r) {
                  (o[t] = r(e, n)), e.addEventListener(t, o[t], !1);
                });
                var i = {
                  element: e,
                  addListener: function (a) {
                    return (
                      n.push(a),
                      function () {
                        n.splice(n.indexOf(a), 1),
                          0 === n.length &&
                            (pr.splice(pr.indexOf(i), 1),
                            t(r, function (t) {
                              e.removeEventListener(t, o[t], !1);
                            }));
                      }
                    );
                  },
                };
                return i;
              },
              Ir = function (e, t) {
                var n,
                  r = (function (e, t) {
                    return (
                      "elementFromPoint" in e || (e = document),
                      e.elementFromPoint(t.x, t.y)
                    );
                  })("getRootNode" in (n = t) ? n.getRootNode() : document, {
                    x: e.pageX - window.pageXOffset,
                    y: e.pageY - window.pageYOffset,
                  });
                return r === t || t.contains(r);
              },
              vr = null,
              mr = function (e, t) {
                try {
                  e.dropEffect = t;
                } catch (n) {}
              },
              gr = function (e, t) {
                return function (e) {
                  e.preventDefault(),
                    (vr = e.target),
                    t.forEach(function (t) {
                      var n = t.element,
                        r = t.onenter;
                      Ir(e, n) && ((t.state = "enter"), r(Er(e)));
                    });
                };
              },
              hr = function (e, t) {
                return function (e) {
                  e.preventDefault();
                  var n = e.dataTransfer;
                  er(n).then(function (r) {
                    var o = !1;
                    t.some(function (t) {
                      var i = t.filterElement,
                        a = t.element,
                        u = t.onenter,
                        s = t.onexit,
                        l = t.ondrag,
                        c = t.allowdrop;
                      mr(n, "copy");
                      var f = c(r);
                      if (f)
                        if (Ir(e, a)) {
                          if (((o = !0), null === t.state))
                            return (t.state = "enter"), void u(Er(e));
                          if (((t.state = "over"), i && !f))
                            return void mr(n, "none");
                          l(Er(e));
                        } else
                          i && !o && mr(n, "none"),
                            t.state && ((t.state = null), s(Er(e)));
                      else mr(n, "none");
                    });
                  });
                };
              },
              Rr = function (e, t) {
                return function (e) {
                  e.preventDefault();
                  var n = e.dataTransfer;
                  er(n).then(function (n) {
                    t.forEach(function (t) {
                      var r = t.filterElement,
                        o = t.element,
                        i = t.ondrop,
                        a = t.onexit,
                        u = t.allowdrop;
                      if (((t.state = null), !r || Ir(e, o)))
                        return u(n) ? void i(Er(e), n) : a(Er(e));
                    });
                  });
                };
              },
              Or = function (e, t) {
                return function (e) {
                  vr === e.target &&
                    t.forEach(function (t) {
                      var n = t.onexit;
                      (t.state = null), n(Er(e));
                    });
                };
              },
              yr = function (e, t, n) {
                e.classList.add("filepond--hopper");
                var r = n.catchesDropsOnPage,
                  o = n.requiresDropOnElement,
                  i = n.filterItems,
                  a =
                    void 0 === i
                      ? function (e) {
                          return e;
                        }
                      : i,
                  u = (function (e, t, n) {
                    var r = _r(t),
                      o = {
                        element: e,
                        filterElement: n,
                        state: null,
                        ondrop: function () {},
                        onenter: function () {},
                        ondrag: function () {},
                        onexit: function () {},
                        onload: function () {},
                        allowdrop: function () {},
                      };
                    return (o.destroy = r.addListener(o)), o;
                  })(e, r ? document.documentElement : e, o),
                  s = "",
                  l = "";
                (u.allowdrop = function (e) {
                  return t(a(e));
                }),
                  (u.ondrop = function (e, n) {
                    var r = a(n);
                    t(r) ? ((l = "drag-drop"), c.onload(r, e)) : c.ondragend(e);
                  }),
                  (u.ondrag = function (e) {
                    c.ondrag(e);
                  }),
                  (u.onenter = function (e) {
                    (l = "drag-over"), c.ondragstart(e);
                  }),
                  (u.onexit = function (e) {
                    (l = "drag-exit"), c.ondragend(e);
                  });
                var c = {
                  updateHopperState: function () {
                    s !== l && ((e.dataset.hopperState = l), (s = l));
                  },
                  onload: function () {},
                  ondragstart: function () {},
                  ondrag: function () {},
                  ondragend: function () {},
                  destroy: function () {
                    u.destroy();
                  },
                };
                return c;
              },
              Dr = !1,
              Sr = [],
              Ar = function (e) {
                er(e.clipboardData).then(function (e) {
                  e.length &&
                    Sr.forEach(function (t) {
                      return t(e);
                    });
                });
              },
              Pr = function () {
                var e = function (e) {
                    t.onload(e);
                  },
                  t = {
                    destroy: function () {
                      var t;
                      (t = e),
                        de(Sr, Sr.indexOf(t)),
                        0 === Sr.length &&
                          (document.removeEventListener("paste", Ar), (Dr = !1));
                    },
                    onload: function () {},
                  };
                return (
                  (function (e) {
                    Sr.includes(e) ||
                      (Sr.push(e),
                      Dr || ((Dr = !0), document.addEventListener("paste", Ar)));
                  })(e),
                  t
                );
              },
              br = null,
              Lr = null,
              Mr = [],
              wr = function (e, t) {
                e.element.textContent = t;
              },
              Cr = function (e, t, n) {
                var r = e.query("GET_TOTAL_ITEMS");
                wr(
                  e,
                  n +
                    " " +
                    t +
                    ", " +
                    r +
                    " " +
                    (1 === r
                      ? e.query("GET_LABEL_FILE_COUNT_SINGULAR")
                      : e.query("GET_LABEL_FILE_COUNT_PLURAL"))
                ),
                  clearTimeout(Lr),
                  (Lr = setTimeout(function () {
                    !(function (e) {
                      e.element.textContent = "";
                    })(e);
                  }, 1500));
              },
              Nr = function (e) {
                return e.element.parentNode.contains(document.activeElement);
              },
              Gr = function (e) {
                var t = e.root,
                  n = e.action,
                  r = t.query("GET_ITEM", n.id).filename,
                  o = t.query("GET_LABEL_FILE_PROCESSING_ABORTED");
                wr(t, r + " " + o);
              },
              Ur = function (e) {
                var t = e.root,
                  n = e.action,
                  r = t.query("GET_ITEM", n.id).filename;
                wr(t, n.status.main + " " + r + " " + n.status.sub);
              },
              Br = S({
                create: function (e) {
                  var t = e.root,
                    n = e.props;
                  (t.element.id = "filepond--assistant-" + n.id),
                    r(t.element, "role", "status"),
                    r(t.element, "aria-live", "polite"),
                    r(t.element, "aria-relevant", "additions");
                },
                ignoreRect: !0,
                ignoreRectUpdate: !0,
                write: A({
                  DID_LOAD_ITEM: function (e) {
                    var t = e.root,
                      n = e.action;
                    if (Nr(t)) {
                      t.element.textContent = "";
                      var r = t.query("GET_ITEM", n.id);
                      Mr.push(r.filename),
                        clearTimeout(br),
                        (br = setTimeout(function () {
                          Cr(t, Mr.join(", "), t.query("GET_LABEL_FILE_ADDED")),
                            (Mr.length = 0);
                        }, 750));
                    }
                  },
                  DID_REMOVE_ITEM: function (e) {
                    var t = e.root,
                      n = e.action;
                    if (Nr(t)) {
                      var r = n.item;
                      Cr(t, r.filename, t.query("GET_LABEL_FILE_REMOVED"));
                    }
                  },
                  DID_COMPLETE_ITEM_PROCESSING: function (e) {
                    var t = e.root,
                      n = e.action,
                      r = t.query("GET_ITEM", n.id).filename,
                      o = t.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
                    wr(t, r + " " + o);
                  },
                  DID_ABORT_ITEM_PROCESSING: Gr,
                  DID_REVERT_ITEM_PROCESSING: Gr,
                  DID_THROW_ITEM_REMOVE_ERROR: Ur,
                  DID_THROW_ITEM_LOAD_ERROR: Ur,
                  DID_THROW_ITEM_INVALID: Ur,
                  DID_THROW_ITEM_PROCESSING_ERROR: Ur,
                }),
                tag: "span",
                name: "assistant",
              }),
              qr = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-";
                return e.replace(new RegExp(t + ".", "g"), function (e) {
                  return e.charAt(1).toUpperCase();
                });
              },
              Vr = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 16,
                  n =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2],
                  r = Date.now(),
                  o = null;
                return function () {
                  for (
                    var i = arguments.length, a = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    a[u] = arguments[u];
                  clearTimeout(o);
                  var s = Date.now() - r,
                    l = function () {
                      (r = Date.now()), e.apply(void 0, a);
                    };
                  s < t ? n || (o = setTimeout(l, t - s)) : l();
                };
              },
              Fr = function (e) {
                return e.preventDefault();
              },
              xr = function (e) {
                var t = e.ref.list.childViews[0].childViews[0];
                return t
                  ? {
                      top: t.rect.element.marginTop,
                      bottom: t.rect.element.marginBottom,
                    }
                  : { top: 0, bottom: 0 };
              },
              Yr = function (e) {
                var t = 0,
                  n = 0,
                  r = e.ref.list,
                  o = r.childViews[0],
                  i = o.childViews.filter(function (e) {
                    return e.rect.element.height;
                  }),
                  a = e
                    .query("GET_ACTIVE_ITEMS")
                    .map(function (e) {
                      return i.find(function (t) {
                        return t.id === e.id;
                      });
                    })
                    .filter(function (e) {
                      return e;
                    });
                if (0 === a.length) return { visual: t, bounds: n };
                var u = o.rect.element.width,
                  s = gn(o, a, r.dragCoordinates),
                  l = a[0].rect.element,
                  c = l.marginTop + l.marginBottom,
                  f = l.marginLeft + l.marginRight,
                  d = l.width + f,
                  p = l.height + c,
                  E = void 0 !== s && s >= 0 ? 1 : 0,
                  _ = a.find(function (e) {
                    return e.markedForRemoval && e.opacity < 0.45;
                  })
                    ? -1
                    : 0,
                  T = a.length + E + _,
                  I = Math.round(u / d);
                return (
                  1 === I
                    ? a.forEach(function (e) {
                        var r = e.rect.element.height + c;
                        (n += r), (t += r * e.opacity);
                      })
                    : ((n = Math.ceil(T / I) * p), (t = n)),
                  { visual: t, bounds: n }
                );
              },
              jr = function (e) {
                var t = e.ref.measureHeight || null;
                return {
                  cappedHeight: parseInt(e.style.maxHeight, 10) || null,
                  fixedHeight: 0 === t ? null : t,
                };
              },
              kr = function (e, t) {
                var n = e.query("GET_ALLOW_REPLACE"),
                  r = e.query("GET_ALLOW_MULTIPLE"),
                  o = e.query("GET_TOTAL_ITEMS"),
                  i = e.query("GET_MAX_FILES"),
                  a = t.length;
                return (
                  (!r && a > 1) ||
                  (!!(F((i = r ? i : n ? i : 1)) && o + a > i) &&
                    (e.dispatch("DID_THROW_MAX_FILES", {
                      source: t,
                      error: nt("warning", 0, "Max files"),
                    }),
                    !0))
                );
              },
              Hr = function (e, t, n) {
                var r = e.childViews[0];
                return gn(r, t, {
                  left: n.scopeLeft - r.rect.element.left,
                  top:
                    n.scopeTop -
                    (e.rect.outer.top +
                      e.rect.element.marginTop +
                      e.rect.element.scrollTop),
                });
              },
              Xr = function (e) {
                var t = e.query("GET_ALLOW_DROP"),
                  n = e.query("GET_DISABLED"),
                  r = t && !n;
                if (r && !e.ref.hopper) {
                  var o = yr(
                    e.element,
                    function (t) {
                      if (kr(e, t)) return !1;
                      var n =
                        e.query("GET_BEFORE_DROP_FILE") ||
                        function () {
                          return !0;
                        };
                      return (
                        !e.query("GET_DROP_VALIDATION") ||
                        t.every(function (t) {
                          return (
                            ye("ALLOW_HOPPER_ITEM", t, { query: e.query }).every(
                              function (e) {
                                return !0 === e;
                              }
                            ) && n(t)
                          );
                        })
                      );
                    },
                    {
                      filterItems: function (t) {
                        var n = e.query("GET_IGNORED_FILES");
                        return t.filter(function (e) {
                          return !vt(e) || !n.includes(e.name.toLowerCase());
                        });
                      },
                      catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
                      requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT"),
                    }
                  );
                  (o.onload = function (t, n) {
                    var r = e.ref.list.childViews[0].childViews.filter(function (
                        e
                      ) {
                        return e.rect.element.height;
                      }),
                      o = e
                        .query("GET_ACTIVE_ITEMS")
                        .map(function (e) {
                          return r.find(function (t) {
                            return t.id === e.id;
                          });
                        })
                        .filter(function (e) {
                          return e;
                        });
                    e.dispatch("ADD_ITEMS", {
                      items: t,
                      index: Hr(e.ref.list, o, n),
                      interactionMethod: ee,
                    }),
                      e.dispatch("DID_DROP", { position: n }),
                      e.dispatch("DID_END_DRAG", { position: n });
                  }),
                    (o.ondragstart = function (t) {
                      e.dispatch("DID_START_DRAG", { position: t });
                    }),
                    (o.ondrag = Vr(function (t) {
                      e.dispatch("DID_DRAG", { position: t });
                    })),
                    (o.ondragend = function (t) {
                      e.dispatch("DID_END_DRAG", { position: t });
                    }),
                    (e.ref.hopper = o),
                    (e.ref.drip = e.appendChildView(e.createChildView(kn)));
                } else
                  !r &&
                    e.ref.hopper &&
                    (e.ref.hopper.destroy(),
                    (e.ref.hopper = null),
                    e.removeChildView(e.ref.drip));
              },
              Wr = function (e, t) {
                var n = e.query("GET_ALLOW_BROWSE"),
                  r = e.query("GET_DISABLED"),
                  o = n && !r;
                o && !e.ref.browser
                  ? (e.ref.browser = e.appendChildView(
                      e.createChildView(
                        Bn,
                        Object.assign({}, t, {
                          onload: function (t) {
                            if (kr(e, t)) return !1;
                            e.dispatch("ADD_ITEMS", {
                              items: t,
                              index: -1,
                              interactionMethod: te,
                            });
                          },
                        })
                      ),
                      0
                    ))
                  : !o &&
                    e.ref.browser &&
                    (e.removeChildView(e.ref.browser), (e.ref.browser = null));
              },
              zr = function (e) {
                var t = e.query("GET_ALLOW_PASTE"),
                  n = e.query("GET_DISABLED"),
                  r = t && !n;
                r && !e.ref.paster
                  ? ((e.ref.paster = Pr()),
                    (e.ref.paster.onload = function (t) {
                      e.dispatch("ADD_ITEMS", {
                        items: t,
                        index: -1,
                        interactionMethod: ne,
                      });
                    }))
                  : !r &&
                    e.ref.paster &&
                    (e.ref.paster.destroy(), (e.ref.paster = null));
              },
              Qr = A({
                DID_SET_ALLOW_BROWSE: function (e) {
                  var t = e.root,
                    n = e.props;
                  Wr(t, n);
                },
                DID_SET_ALLOW_DROP: function (e) {
                  var t = e.root;
                  Xr(t);
                },
                DID_SET_ALLOW_PASTE: function (e) {
                  var t = e.root;
                  zr(t);
                },
                DID_SET_DISABLED: function (e) {
                  var t = e.root,
                    n = e.props;
                  Xr(t),
                    zr(t),
                    Wr(t, n),
                    t.query("GET_DISABLED")
                      ? (t.element.dataset.disabled = "disabled")
                      : t.element.removeAttribute("data-disabled");
                },
              }),
              $r = S({
                name: "root",
                read: function (e) {
                  var t = e.root;
                  t.ref.measure &&
                    (t.ref.measureHeight = t.ref.measure.offsetHeight);
                },
                create: function (e) {
                  var t = e.root,
                    n = e.props,
                    r = t.query("GET_ID");
                  r && (t.element.id = r);
                  var o = t.query("GET_CLASS_NAME");
                  o &&
                    o
                      .split(" ")
                      .filter(function (e) {
                        return e.length;
                      })
                      .forEach(function (e) {
                        t.element.classList.add(e);
                      }),
                    (t.ref.label = t.appendChildView(
                      t.createChildView(
                        xn,
                        Object.assign({}, n, {
                          translateY: null,
                          caption: t.query("GET_LABEL_IDLE"),
                        })
                      )
                    )),
                    (t.ref.list = t.appendChildView(
                      t.createChildView(Pn, { translateY: null })
                    )),
                    (t.ref.panel = t.appendChildView(
                      t.createChildView(En, { name: "panel-root" })
                    )),
                    (t.ref.assistant = t.appendChildView(
                      t.createChildView(Br, Object.assign({}, n))
                    )),
                    (t.ref.data = t.appendChildView(
                      t.createChildView(Qn, Object.assign({}, n))
                    )),
                    (t.ref.measure = Lt("div")),
                    (t.ref.measure.style.height = "100%"),
                    t.element.appendChild(t.ref.measure),
                    (t.ref.bounds = null),
                    t
                      .query("GET_STYLES")
                      .filter(function (e) {
                        return !M(e.value);
                      })
                      .map(function (e) {
                        var n = e.name,
                          r = e.value;
                        t.element.dataset[n] = r;
                      }),
                    (t.ref.widthPrevious = null),
                    (t.ref.widthUpdated = Vr(function () {
                      (t.ref.updateHistory = []), t.dispatch("DID_RESIZE_ROOT");
                    }, 250)),
                    (t.ref.previousAspectRatio = null),
                    (t.ref.updateHistory = []);
                  var i = window.matchMedia(
                      "(pointer: fine) and (hover: hover)"
                    ).matches,
                    a = "PointerEvent" in window;
                  t.query("GET_ALLOW_REORDER") &&
                    a &&
                    !i &&
                    (t.element.addEventListener("touchmove", Fr, { passive: !1 }),
                    t.element.addEventListener("gesturestart", Fr));
                },
                write: function (e) {
                  var t = e.root,
                    n = e.props,
                    r = e.actions;
                  if (
                    (Qr({ root: t, props: n, actions: r }),
                    r
                      .filter(function (e) {
                        return /^DID_SET_STYLE_/.test(e.type);
                      })
                      .filter(function (e) {
                        return !M(e.data.value);
                      })
                      .map(function (e) {
                        var n = e.type,
                          r = e.data,
                          o = qr(n.substr(8).toLowerCase(), "_");
                        (t.element.dataset[o] = r.value), t.invalidateLayout();
                      }),
                    !t.rect.element.hidden)
                  ) {
                    t.rect.element.width !== t.ref.widthPrevious &&
                      ((t.ref.widthPrevious = t.rect.element.width),
                      t.ref.widthUpdated());
                    var o = t.ref.bounds;
                    o ||
                      ((o = t.ref.bounds = jr(t)),
                      t.element.removeChild(t.ref.measure),
                      (t.ref.measure = null));
                    var i = t.ref,
                      a = i.hopper,
                      u = i.label,
                      s = i.list,
                      l = i.panel;
                    a && a.updateHopperState();
                    var c = t.query("GET_PANEL_ASPECT_RATIO"),
                      f = t.query("GET_ALLOW_MULTIPLE"),
                      d = t.query("GET_TOTAL_ITEMS"),
                      p = d === (f ? t.query("GET_MAX_FILES") || 1e6 : 1),
                      E = r.find(function (e) {
                        return "DID_ADD_ITEM" === e.type;
                      });
                    if (p && E) {
                      var _ = E.data.interactionMethod;
                      (u.opacity = 0),
                        f
                          ? (u.translateY = -40)
                          : _ === J
                          ? (u.translateX = 40)
                          : (u.translateY = _ === te ? 40 : 30);
                    } else
                      p ||
                        ((u.opacity = 1), (u.translateX = 0), (u.translateY = 0));
                    var T = xr(t),
                      I = Yr(t),
                      v = u.rect.element.height,
                      m = !f || p ? 0 : v,
                      g = p ? s.rect.element.marginTop : 0,
                      h = 0 === d ? 0 : s.rect.element.marginBottom,
                      R = m + g + I.visual + h,
                      O = m + g + I.bounds + h;
                    if (
                      ((s.translateY =
                        Math.max(0, m - s.rect.element.marginTop) - T.top),
                      c)
                    ) {
                      var y = t.rect.element.width,
                        D = y * c;
                      c !== t.ref.previousAspectRatio &&
                        ((t.ref.previousAspectRatio = c),
                        (t.ref.updateHistory = []));
                      var S = t.ref.updateHistory;
                      if ((S.push(y), S.length > 4))
                        for (
                          var A = S.length, P = A - 10, b = 0, L = A;
                          L >= P;
                          L--
                        )
                          if ((S[L] === S[L - 2] && b++, b >= 2)) return;
                      (l.scalable = !1), (l.height = D);
                      var w = D - m - (h - T.bottom) - (p ? g : 0);
                      I.visual > w ? (s.overflow = w) : (s.overflow = null),
                        (t.height = D);
                    } else if (o.fixedHeight) {
                      l.scalable = !1;
                      var C = o.fixedHeight - m - (h - T.bottom) - (p ? g : 0);
                      I.visual > C ? (s.overflow = C) : (s.overflow = null);
                    } else if (o.cappedHeight) {
                      var N = R >= o.cappedHeight,
                        G = Math.min(o.cappedHeight, R);
                      (l.scalable = !0),
                        (l.height = N ? G : G - T.top - T.bottom);
                      var U = G - m - (h - T.bottom) - (p ? g : 0);
                      R > o.cappedHeight && I.visual > U
                        ? (s.overflow = U)
                        : (s.overflow = null),
                        (t.height = Math.min(
                          o.cappedHeight,
                          O - T.top - T.bottom
                        ));
                    } else {
                      var B = d > 0 ? T.top + T.bottom : 0;
                      (l.scalable = !0),
                        (l.height = Math.max(v, R - B)),
                        (t.height = Math.max(v, O - B));
                    }
                  }
                },
                destroy: function (e) {
                  var t = e.root;
                  t.ref.paster && t.ref.paster.destroy(),
                    t.ref.hopper && t.ref.hopper.destroy(),
                    t.element.removeEventListener("touchmove", Fr),
                    t.element.removeEventListener("gesturestart", Fr);
                },
                mixins: { styles: ["height"] },
              }),
              Zr = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r = null,
                  o = Se(),
                  i = (function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : [],
                      r = Object.assign({}, e),
                      o = [],
                      i = [],
                      a = function (e, t, n) {
                        !n || document.hidden
                          ? (c[e] && c[e](t), o.push({ type: e, data: t }))
                          : i.push({ type: e, data: t });
                      },
                      u = function (e) {
                        for (
                          var t,
                            n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            o = 1;
                          o < n;
                          o++
                        )
                          r[o - 1] = arguments[o];
                        return l[e] ? (t = l)[e].apply(t, r) : null;
                      },
                      s = {
                        getState: function () {
                          return Object.assign({}, r);
                        },
                        processActionQueue: function () {
                          var e = [].concat(o);
                          return (o.length = 0), e;
                        },
                        processDispatchQueue: function () {
                          var e = [].concat(i);
                          (i.length = 0),
                            e.forEach(function (e) {
                              var t = e.type,
                                n = e.data;
                              a(t, n);
                            });
                        },
                        dispatch: a,
                        query: u,
                      },
                      l = {};
                    t.forEach(function (e) {
                      l = Object.assign({}, e(r), {}, l);
                    });
                    var c = {};
                    return (
                      n.forEach(function (e) {
                        c = Object.assign({}, e(a, u, r), {}, c);
                      }),
                      s
                    );
                  })(
                    {
                      items: [],
                      listUpdateTimeout: null,
                      itemUpdateTimeout: null,
                      processingQueue: [],
                      options: Q(o),
                    },
                    [qe, K(o)],
                    [Pt, Z(o)]
                  );
                i.dispatch("SET_OPTIONS", { options: e });
                var a = function () {
                  document.hidden || i.dispatch("KICK");
                };
                document.addEventListener("visibilitychange", a);
                var u = null,
                  s = !1,
                  l = !1,
                  c = null,
                  f = null,
                  d = function () {
                    s || (s = !0),
                      clearTimeout(u),
                      (u = setTimeout(function () {
                        (s = !1),
                          (c = null),
                          (f = null),
                          l && ((l = !1), i.dispatch("DID_STOP_RESIZE"));
                      }, 500));
                  };
                window.addEventListener("resize", d);
                var p = $r(i, { id: oe() }),
                  E = !1,
                  T = !1,
                  I = {
                    _read: function () {
                      s &&
                        ((f = window.innerWidth),
                        c || (c = f),
                        l ||
                          f === c ||
                          (i.dispatch("DID_START_RESIZE"), (l = !0))),
                        T && E && (E = null === p.element.offsetParent),
                        E || (p._read(), (T = p.rect.element.hidden));
                    },
                    _write: function (e) {
                      var t,
                        n = i.processActionQueue().filter(function (e) {
                          return !/^SET_/.test(e.type);
                        });
                      (E && !n.length) ||
                        (h(n),
                        (E = p._write(e, n, l)),
                        (t = i.query("GET_ITEMS")).forEach(function (e, n) {
                          e.released && de(t, n);
                        }),
                        E && i.processDispatchQueue());
                    },
                  },
                  v = function (e) {
                    return function (t) {
                      var n = { type: e };
                      if (!t) return n;
                      if (
                        (t.hasOwnProperty("error") &&
                          (n.error = t.error ? Object.assign({}, t.error) : null),
                        t.status && (n.status = Object.assign({}, t.status)),
                        t.file && (n.output = t.file),
                        t.source)
                      )
                        n.file = t.source;
                      else if (t.item || t.id) {
                        var r = t.item ? t.item : i.query("GET_ITEM", t.id);
                        n.file = r ? Te(r) : null;
                      }
                      return (
                        t.items && (n.items = t.items.map(Te)),
                        /progress/.test(e) && (n.progress = t.progress),
                        t.hasOwnProperty("origin") &&
                          t.hasOwnProperty("target") &&
                          ((n.origin = t.origin), (n.target = t.target)),
                        n
                      );
                    };
                  },
                  m = {
                    DID_DESTROY: v("destroy"),
                    DID_INIT: v("init"),
                    DID_THROW_MAX_FILES: v("warning"),
                    DID_INIT_ITEM: v("initfile"),
                    DID_START_ITEM_LOAD: v("addfilestart"),
                    DID_UPDATE_ITEM_LOAD_PROGRESS: v("addfileprogress"),
                    DID_LOAD_ITEM: v("addfile"),
                    DID_THROW_ITEM_INVALID: [v("error"), v("addfile")],
                    DID_THROW_ITEM_LOAD_ERROR: [v("error"), v("addfile")],
                    DID_THROW_ITEM_REMOVE_ERROR: [v("error"), v("removefile")],
                    DID_PREPARE_OUTPUT: v("preparefile"),
                    DID_START_ITEM_PROCESSING: v("processfilestart"),
                    DID_UPDATE_ITEM_PROCESS_PROGRESS: v("processfileprogress"),
                    DID_ABORT_ITEM_PROCESSING: v("processfileabort"),
                    DID_COMPLETE_ITEM_PROCESSING: v("processfile"),
                    DID_COMPLETE_ITEM_PROCESSING_ALL: v("processfiles"),
                    DID_REVERT_ITEM_PROCESSING: v("processfilerevert"),
                    DID_THROW_ITEM_PROCESSING_ERROR: [
                      v("error"),
                      v("processfile"),
                    ],
                    DID_REMOVE_ITEM: v("removefile"),
                    DID_UPDATE_ITEMS: v("updatefiles"),
                    DID_ACTIVATE_ITEM: v("activatefile"),
                    DID_REORDER_ITEMS: v("reorderfiles"),
                  },
                  g = function (e) {
                    var t = Object.assign({ pond: A }, e);
                    delete t.type,
                      p.element.dispatchEvent(
                        new CustomEvent("FilePond:" + e.type, {
                          detail: t,
                          bubbles: !0,
                          cancelable: !0,
                          composed: !0,
                        })
                      );
                    var n = [];
                    e.hasOwnProperty("error") && n.push(e.error),
                      e.hasOwnProperty("file") && n.push(e.file);
                    var r = ["type", "error", "file"];
                    Object.keys(e)
                      .filter(function (e) {
                        return !r.includes(e);
                      })
                      .forEach(function (t) {
                        return n.push(e[t]);
                      }),
                      A.fire.apply(A, [e.type].concat(n));
                    var o = i.query("GET_ON" + e.type.toUpperCase());
                    o && o.apply(void 0, n);
                  },
                  h = function (e) {
                    e.length &&
                      e
                        .filter(function (e) {
                          return m[e.type];
                        })
                        .forEach(function (e) {
                          var t = m[e.type];
                          (Array.isArray(t) ? t : [t]).forEach(function (t) {
                            "DID_INIT_ITEM" === e.type
                              ? g(t(e.data))
                              : setTimeout(function () {
                                  g(t(e.data));
                                }, 0);
                          });
                        });
                  },
                  R = function (e) {
                    return new Promise(function (t, n) {
                      i.dispatch("REQUEST_ITEM_PREPARE", {
                        query: e,
                        success: function (e) {
                          t(e);
                        },
                        failure: function (e) {
                          n(e);
                        },
                      });
                    });
                  },
                  O = function (e, t) {
                    return (
                      "object" != typeof e || t || ((t = e), (e = void 0)),
                      i.dispatch(
                        "REMOVE_ITEM",
                        Object.assign({}, t, { query: e })
                      ),
                      null === i.query("GET_ACTIVE_ITEM", e)
                    );
                  },
                  y = function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    return new Promise(function (e, n) {
                      var r = [],
                        o = {};
                      if (L(t[0]))
                        r.push.apply(r, t[0]), Object.assign(o, t[1] || {});
                      else {
                        var a = t[t.length - 1];
                        "object" != typeof a ||
                          a instanceof Blob ||
                          Object.assign(o, t.pop()),
                          r.push.apply(r, t);
                      }
                      i.dispatch("ADD_ITEMS", {
                        items: r,
                        index: o.index,
                        interactionMethod: J,
                        success: e,
                        failure: n,
                      });
                    });
                  },
                  D = function () {
                    return i.query("GET_ACTIVE_ITEMS");
                  },
                  S = function (e) {
                    return new Promise(function (t, n) {
                      i.dispatch("REQUEST_ITEM_PROCESSING", {
                        query: e,
                        success: function (e) {
                          t(e);
                        },
                        failure: function (e) {
                          n(e);
                        },
                      });
                    });
                  },
                  A = Object.assign(
                    {},
                    pe(),
                    {},
                    I,
                    {},
                    (function (e, n) {
                      var r = {};
                      return (
                        t(n, function (t) {
                          r[t] = {
                            get: function () {
                              return e.getState().options[t];
                            },
                            set: function (n) {
                              e.dispatch("SET_" + $(t, "_").toUpperCase(), {
                                value: n,
                              });
                            },
                          };
                        }),
                        r
                      );
                    })(i, o),
                    {
                      setOptions: function (e) {
                        return i.dispatch("SET_OPTIONS", { options: e });
                      },
                      addFile: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        return new Promise(function (n, r) {
                          y([{ source: e, options: t }], { index: t.index })
                            .then(function (e) {
                              return n(e && e[0]);
                            })
                            .catch(r);
                        });
                      },
                      addFiles: y,
                      getFile: function (e) {
                        return i.query("GET_ACTIVE_ITEM", e);
                      },
                      processFile: S,
                      prepareFile: R,
                      removeFile: O,
                      moveFile: function (e, t) {
                        return i.dispatch("MOVE_ITEM", { query: e, index: t });
                      },
                      getFiles: D,
                      processFiles: function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        var r = Array.isArray(t[0]) ? t[0] : t;
                        if (!r.length) {
                          var o = D().filter(function (e) {
                            return (
                              !(e.status === Ie.IDLE && e.origin === ve.LOCAL) &&
                              e.status !== Ie.PROCESSING &&
                              e.status !== Ie.PROCESSING_COMPLETE &&
                              e.status !== Ie.PROCESSING_REVERT_ERROR
                            );
                          });
                          return Promise.all(o.map(S));
                        }
                        return Promise.all(r.map(S));
                      },
                      removeFiles: function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        var r,
                          o = Array.isArray(t[0]) ? t[0] : t;
                        "object" == typeof o[o.length - 1]
                          ? (r = o.pop())
                          : Array.isArray(t[0]) && (r = t[1]);
                        var i = D();
                        return o.length
                          ? o
                              .map(function (e) {
                                return _(e) ? (i[e] ? i[e].id : null) : e;
                              })
                              .filter(function (e) {
                                return e;
                              })
                              .map(function (e) {
                                return O(e, r);
                              })
                          : Promise.all(i.map(O));
                      },
                      prepareFiles: function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        var r = Array.isArray(t[0]) ? t[0] : t,
                          o = r.length ? r : D();
                        return Promise.all(o.map(R));
                      },
                      sort: function (e) {
                        return i.dispatch("SORT", { compare: e });
                      },
                      browse: function () {
                        var e = p.element.querySelector("input[type=file]");
                        e && e.click();
                      },
                      destroy: function () {
                        A.fire("destroy", p.element),
                          i.dispatch("ABORT_ALL"),
                          p._destroy(),
                          window.removeEventListener("resize", d),
                          document.removeEventListener("visibilitychange", a),
                          i.dispatch("DID_DESTROY");
                      },
                      insertBefore: function (e) {
                        return P(p.element, e);
                      },
                      insertAfter: function (e) {
                        return b(p.element, e);
                      },
                      appendTo: function (e) {
                        return e.appendChild(p.element);
                      },
                      replaceElement: function (e) {
                        P(p.element, e), e.parentNode.removeChild(e), (r = e);
                      },
                      restoreElement: function () {
                        r &&
                          (b(r, p.element),
                          p.element.parentNode.removeChild(p.element),
                          (r = null));
                      },
                      isAttachedTo: function (e) {
                        return p.element === e || r === e;
                      },
                      element: {
                        get: function () {
                          return p.element;
                        },
                      },
                      status: {
                        get: function () {
                          return i.query("GET_STATUS");
                        },
                      },
                    }
                  );
                return i.dispatch("DID_INIT"), n(A);
              },
              Kr = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = {};
                return (
                  t(Se(), function (e, t) {
                    n[e] = t[0];
                  }),
                  Zr(Object.assign({}, n, {}, e))
                );
              },
              Jr = function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = [];
                t(e.attributes, function (t) {
                  o.push(e.attributes[t]);
                });
                var i = o
                  .filter(function (e) {
                    return e.name;
                  })
                  .reduce(function (t, n) {
                    var o,
                      i = r(e, n.name);
                    return (
                      (t[((o = n.name), qr(o.replace(/^data-/, "")))] =
                        i === n.name || i),
                      t
                    );
                  }, {});
                return (
                  (function e(n, r) {
                    t(r, function (r, o) {
                      t(n, function (e, t) {
                        var i = new RegExp(r);
                        if (i.test(e) && (delete n[e], !1 !== o))
                          if (U(o)) n[o] = t;
                          else {
                            var a,
                              u = o.group;
                            H(o) && !n[u] && (n[u] = {}),
                              (n[u][
                                ((a = e.replace(i, "")),
                                a.charAt(0).toLowerCase() + a.slice(1))
                              ] = t);
                          }
                      }),
                        o.mapping && e(n[o.group], o.mapping);
                    });
                  })(i, n),
                  i
                );
              },
              eo = function () {
                return (arguments.length <= 0 ? void 0 : arguments[0]) instanceof
                  HTMLElement
                  ? function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = {
                          "^class$": "className",
                          "^multiple$": "allowMultiple",
                          "^capture$": "captureMethod",
                          "^webkitdirectory$": "allowDirectoriesOnly",
                          "^server": {
                            group: "server",
                            mapping: {
                              "^process": { group: "process" },
                              "^revert": { group: "revert" },
                              "^fetch": { group: "fetch" },
                              "^restore": { group: "restore" },
                              "^load": { group: "load" },
                            },
                          },
                          "^type$": !1,
                          "^files$": !1,
                        };
                      ye("SET_ATTRIBUTE_TO_OPTION_MAP", n);
                      var r = Object.assign({}, t),
                        o = Jr(
                          "FIELDSET" === e.nodeName
                            ? e.querySelector("input[type=file]")
                            : e,
                          n
                        );
                      Object.keys(o).forEach(function (e) {
                        H(o[e])
                          ? (H(r[e]) || (r[e] = {}), Object.assign(r[e], o[e]))
                          : (r[e] = o[e]);
                      }),
                        (r.files = (t.files || []).concat(
                          Array.from(
                            e.querySelectorAll("input:not([type=file])")
                          ).map(function (e) {
                            return {
                              source: e.value,
                              options: { type: e.dataset.type },
                            };
                          })
                        ));
                      var i = Kr(r);
                      return (
                        e.files &&
                          Array.from(e.files).forEach(function (e) {
                            i.addFile(e);
                          }),
                        i.replaceElement(e),
                        i
                      );
                    }.apply(void 0, arguments)
                  : Kr.apply(void 0, arguments);
              },
              to = ["fire", "_read", "_write"],
              no = function (e) {
                var t = {};
                return Ee(e, t, to), t;
              },
              ro = function (e, t) {
                return e.replace(/(?:{([a-zA-Z]+)})/g, function (e, n) {
                  return t[n];
                });
              },
              oo = function (e) {
                var t = new Blob(["(", e.toString(), ")()"], {
                    type: "application/javascript",
                  }),
                  n = URL.createObjectURL(t),
                  r = new Worker(n);
                return {
                  transfer: function (e, t) {},
                  post: function (e, t, n) {
                    var o = oe();
                    (r.onmessage = function (e) {
                      e.data.id === o && t(e.data.message);
                    }),
                      r.postMessage({ id: o, message: e }, n);
                  },
                  terminate: function () {
                    r.terminate(), URL.revokeObjectURL(n);
                  },
                };
              },
              io = function (e) {
                return new Promise(function (t, n) {
                  var r = new Image();
                  (r.onload = function () {
                    t(r);
                  }),
                    (r.onerror = function (e) {
                      n(e);
                    }),
                    (r.src = e);
                });
              },
              ao = function (e, t) {
                var n = e.slice(0, e.size, e.type);
                return (n.lastModifiedDate = e.lastModifiedDate), (n.name = t), n;
              },
              uo = function (e) {
                return ao(e, e.name);
              },
              so = [],
              lo = function (e) {
                if (!so.includes(e)) {
                  so.push(e);
                  var n,
                    r = e({
                      addFilter: De,
                      utils: {
                        Type: he,
                        forin: t,
                        isString: U,
                        isFile: vt,
                        toNaturalFileSize: Ut,
                        replaceInString: ro,
                        getExtensionFromFilename: Ye,
                        getFilenameWithoutExtension: It,
                        guesstimateMimeType: Jn,
                        getFileFromBlob: He,
                        getFilenameFromURL: xe,
                        createRoute: A,
                        createWorker: oo,
                        createView: S,
                        createItemAPI: Te,
                        loadImage: io,
                        copyFile: uo,
                        renameFile: ao,
                        createBlob: Xe,
                        applyFilterChain: Oe,
                        text: Mt,
                        getNumericAspectRatioFromString: be,
                      },
                      views: { fileActionButton: Gt },
                    });
                  (n = r.options), Object.assign(Ae, n);
                }
              },
              co =
                ((Zt =
                  c() &&
                  !(
                    "[object OperaMini]" ===
                    Object.prototype.toString.call(window.operamini)
                  ) &&
                  "visibilityState" in document &&
                  "Promise" in window &&
                  "slice" in Blob.prototype &&
                  "URL" in window &&
                  "createObjectURL" in window.URL &&
                  "performance" in window),
                function () {
                  return Zt;
                }),
              fo = { apps: [] },
              po = function () {};
            if (
              ((e.Status = {}),
              (e.FileStatus = {}),
              (e.FileOrigin = {}),
              (e.OptionTypes = {}),
              (e.create = po),
              (e.destroy = po),
              (e.parse = po),
              (e.find = po),
              (e.registerPlugin = po),
              (e.getOptions = po),
              (e.setOptions = po),
              co())
            ) {
              !(function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 60,
                  r = "__framePainter";
                if (window[r])
                  return (
                    window[r].readers.push(e), void window[r].writers.push(t)
                  );
                window[r] = { readers: [e], writers: [t] };
                var o = window[r],
                  i = 1e3 / n,
                  a = null,
                  u = null,
                  s = null,
                  l = null,
                  c = function () {
                    document.hidden
                      ? ((s = function () {
                          return window.setTimeout(function () {
                            return f(performance.now());
                          }, i);
                        }),
                        (l = function () {
                          return window.clearTimeout(u);
                        }))
                      : ((s = function () {
                          return window.requestAnimationFrame(f);
                        }),
                        (l = function () {
                          return window.cancelAnimationFrame(u);
                        }));
                  };
                document.addEventListener("visibilitychange", function () {
                  l && l(), c(), f(performance.now());
                });
                var f = function e(t) {
                  (u = s(e)), a || (a = t);
                  var n = t - a;
                  n <= i ||
                    ((a = t - (n % i)),
                    o.readers.forEach(function (e) {
                      return e();
                    }),
                    o.writers.forEach(function (e) {
                      return e(t);
                    }));
                };
                c(), f(performance.now());
              })(
                function () {
                  fo.apps.forEach(function (e) {
                    return e._read();
                  });
                },
                function (e) {
                  fo.apps.forEach(function (t) {
                    return t._write(e);
                  });
                }
              );
              var Eo = function t() {
                document.dispatchEvent(
                  new CustomEvent("FilePond:loaded", {
                    detail: {
                      supported: co,
                      create: e.create,
                      destroy: e.destroy,
                      parse: e.parse,
                      find: e.find,
                      registerPlugin: e.registerPlugin,
                      setOptions: e.setOptions,
                    },
                  })
                ),
                  document.removeEventListener("DOMContentLoaded", t);
              };
              "loading" !== document.readyState
                ? setTimeout(function () {
                    return Eo();
                  }, 0)
                : document.addEventListener("DOMContentLoaded", Eo);
              var _o = function () {
                return t(Se(), function (t, n) {
                  e.OptionTypes[t] = n[1];
                });
              };
              (e.Status = Object.assign({}, Me)),
                (e.FileOrigin = Object.assign({}, ve)),
                (e.FileStatus = Object.assign({}, Ie)),
                (e.OptionTypes = {}),
                _o(),
                (e.create = function () {
                  var t = eo.apply(void 0, arguments);
                  return t.on("destroy", e.destroy), fo.apps.push(t), no(t);
                }),
                (e.destroy = function (e) {
                  var t = fo.apps.findIndex(function (t) {
                    return t.isAttachedTo(e);
                  });
                  return t >= 0 && (fo.apps.splice(t, 1)[0].restoreElement(), !0);
                }),
                (e.parse = function (t) {
                  return Array.from(t.querySelectorAll(".filepond"))
                    .filter(function (e) {
                      return !fo.apps.find(function (t) {
                        return t.isAttachedTo(e);
                      });
                    })
                    .map(function (t) {
                      return e.create(t);
                    });
                }),
                (e.find = function (e) {
                  var t = fo.apps.find(function (t) {
                    return t.isAttachedTo(e);
                  });
                  return t ? no(t) : null;
                }),
                (e.registerPlugin = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  t.forEach(lo), _o();
                }),
                (e.getOptions = function () {
                  var e = {};
                  return (
                    t(Se(), function (t, n) {
                      e[t] = n[0];
                    }),
                    e
                  );
                }),
                (e.setOptions = function (n) {
                  return (
                    H(n) &&
                      (fo.apps.forEach(function (e) {
                        e.setOptions(n);
                      }),
                      (function (e) {
                        t(e, function (e, t) {
                          Ae[e] && (Ae[e][0] = z(t, Ae[e][0], Ae[e][1]));
                        });
                      })(n)),
                    e.getOptions()
                  );
                });
            }
            (e.supported = co),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        },
        { process: "g5IB" },
      ],
      DAr1: [function (require, module, exports) {}, {}],
      wHKG: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var e,
            t = arguments[3];
          !(function (t, n) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = n())
              : "function" == typeof e && e.amd
              ? e(n)
              : ((t = t || self).FilePondPluginFileValidateType = n());
          })(this, function () {
            "use strict";
            var e = function (e) {
              var t = e.addFilter,
                n = e.utils,
                i = n.Type,
                T = n.isString,
                E = n.replaceInString,
                l = n.guesstimateMimeType,
                o = n.getExtensionFromFilename,
                a = n.getFilenameFromURL,
                r = function (e, t) {
                  return e.some(function (e) {
                    return /\*$/.test(e)
                      ? ((n = e),
                        (/^[^/]+/.exec(t) || []).pop() === n.slice(0, -2))
                      : e === t;
                    var n;
                  });
                },
                u = function (e, t, n) {
                  if (0 === t.length) return !0;
                  var i = (function (e) {
                    var t = "";
                    if (T(e)) {
                      var n = a(e),
                        i = o(n);
                      i && (t = l(i));
                    } else t = e.type;
                    return t;
                  })(e);
                  return n
                    ? new Promise(function (T, E) {
                        n(e, i)
                          .then(function (e) {
                            r(t, e) ? T() : E();
                          })
                          .catch(E);
                      })
                    : r(t, i);
                };
              return (
                t("SET_ATTRIBUTE_TO_OPTION_MAP", function (e) {
                  return Object.assign(e, { accept: "acceptedFileTypes" });
                }),
                t("ALLOW_HOPPER_ITEM", function (e, t) {
                  var n = t.query;
                  return (
                    !n("GET_ALLOW_FILE_TYPE_VALIDATION") ||
                    u(e, n("GET_ACCEPTED_FILE_TYPES"))
                  );
                }),
                t("LOAD_FILE", function (e, t) {
                  var n = t.query;
                  return new Promise(function (t, i) {
                    if (n("GET_ALLOW_FILE_TYPE_VALIDATION")) {
                      var T = n("GET_ACCEPTED_FILE_TYPES"),
                        l = n("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),
                        o = u(e, T, l),
                        a = function () {
                          var e,
                            t = T.map(
                              ((e = n(
                                "GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"
                              )),
                              function (t) {
                                return null !== e[t] && (e[t] || t);
                              })
                            ).filter(function (e) {
                              return !1 !== e;
                            });
                          i({
                            status: {
                              main: n("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
                              sub: E(
                                n("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),
                                {
                                  allTypes: t.join(", "),
                                  allButLastType: t.slice(0, -1).join(", "),
                                  lastType: t[t.length - 1],
                                }
                              ),
                            },
                          });
                        };
                      if ("boolean" == typeof o) return o ? t(e) : a();
                      o.then(function () {
                        t(e);
                      }).catch(a);
                    } else t(e);
                  });
                }),
                {
                  options: {
                    allowFileTypeValidation: [!0, i.BOOLEAN],
                    acceptedFileTypes: [[], i.ARRAY],
                    labelFileTypeNotAllowed: [
                      "File is of invalid type",
                      i.STRING,
                    ],
                    fileValidateTypeLabelExpectedTypes: [
                      "Expects {allButLastType} or {lastType}",
                      i.STRING,
                    ],
                    fileValidateTypeLabelExpectedTypesMap: [{}, i.OBJECT],
                    fileValidateTypeDetectType: [null, i.FUNCTION],
                  },
                }
              );
            };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: e })
                ),
              e
            );
          });
        },
        {},
      ],
      P0Pt: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var e,
            i = arguments[3];
          !(function (i, l) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = l())
              : "function" == typeof e && e.amd
              ? e(l)
              : ((i = i || self).FilePondPluginFileValidateSize = l());
          })(this, function () {
            "use strict";
            var e = function (e) {
              var i = e.addFilter,
                l = e.utils,
                E = l.Type,
                n = l.replaceInString,
                _ = l.toNaturalFileSize;
              return (
                i("ALLOW_HOPPER_ITEM", function (e, i) {
                  var l = i.query;
                  if (!l("GET_ALLOW_FILE_SIZE_VALIDATION")) return !0;
                  var E = l("GET_MAX_FILE_SIZE");
                  if (null !== E && e.size >= E) return !1;
                  var n = l("GET_MIN_FILE_SIZE");
                  return !(null !== n && e.size <= n);
                }),
                i("LOAD_FILE", function (e, i) {
                  var l = i.query;
                  return new Promise(function (i, E) {
                    if (!l("GET_ALLOW_FILE_SIZE_VALIDATION")) return i(e);
                    var t = l("GET_FILE_VALIDATE_SIZE_FILTER");
                    if (t && !t(e)) return i(e);
                    var a = l("GET_MAX_FILE_SIZE");
                    if (null !== a && e.size >= a)
                      E({
                        status: {
                          main: l("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),
                          sub: n(l("GET_LABEL_MAX_FILE_SIZE"), {
                            filesize: _(a),
                          }),
                        },
                      });
                    else {
                      var u = l("GET_MIN_FILE_SIZE");
                      if (null !== u && e.size <= u)
                        E({
                          status: {
                            main: l("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),
                            sub: n(l("GET_LABEL_MIN_FILE_SIZE"), {
                              filesize: _(u),
                            }),
                          },
                        });
                      else {
                        var I = l("GET_MAX_TOTAL_FILE_SIZE");
                        if (null !== I)
                          if (
                            l("GET_ACTIVE_ITEMS").reduce(function (e, i) {
                              return e + i.fileSize;
                            }, 0) > I
                          )
                            return void E({
                              status: {
                                main: l("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),
                                sub: n(l("GET_LABEL_MAX_TOTAL_FILE_SIZE"), {
                                  filesize: _(I),
                                }),
                              },
                            });
                        i(e);
                      }
                    }
                  });
                }),
                {
                  options: {
                    allowFileSizeValidation: [!0, E.BOOLEAN],
                    maxFileSize: [null, E.INT],
                    minFileSize: [null, E.INT],
                    maxTotalFileSize: [null, E.INT],
                    fileValidateSizeFilter: [null, E.FUNCTION],
                    labelMinFileSizeExceeded: ["File is too small", E.STRING],
                    labelMinFileSize: [
                      "Minimum file size is {filesize}",
                      E.STRING,
                    ],
                    labelMaxFileSizeExceeded: ["File is too large", E.STRING],
                    labelMaxFileSize: [
                      "Maximum file size is {filesize}",
                      E.STRING,
                    ],
                    labelMaxTotalFileSizeExceeded: [
                      "Maximum total size exceeded",
                      E.STRING,
                    ],
                    labelMaxTotalFileSize: [
                      "Maximum total file size is {filesize}",
                      E.STRING,
                    ],
                  },
                }
              );
            };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: e })
                ),
              e
            );
          });
        },
        {},
      ],
      iSD1: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var A,
            e = arguments[3];
          !(function (e, n) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = n())
              : "function" == typeof A && A.amd
              ? A(n)
              : ((e = e || self).FilePondPluginImageExifOrientation = n());
          })(this, function () {
            "use strict";
            var A = 65496,
              e = 65505,
              n = 1165519206,
              t = 18761,
              i = 274,
              r = 65280,
              o = function (A, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return A.getUint16(e, n);
              },
              a = function (A, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return A.getUint32(e, n);
              },
              u = "undefined" != typeof window && void 0 !== window.document,
              d = void 0,
              f = u ? new Image() : {};
            (f.onload = function () {
              return (d = f.naturalWidth > f.naturalHeight);
            }),
              (f.src =
                "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=");
            var l = function (u) {
              var f = u.addFilter,
                l = u.utils,
                g = l.Type,
                s = l.isFile;
              return (
                f("DID_LOAD_ITEM", function (u, f) {
                  var l = f.query;
                  return new Promise(function (f, g) {
                    var v = u.file;
                    if (
                      !(
                        s(v) &&
                        (function (A) {
                          return /^image\/jpeg/.test(A.type);
                        })(v) &&
                        l("GET_ALLOW_IMAGE_EXIF_ORIENTATION") &&
                        d
                      )
                    )
                      return f(u);
                    (function (u) {
                      return new Promise(function (d, f) {
                        var l = new FileReader();
                        (l.onload = function (u) {
                          var f = new DataView(u.target.result);
                          if (o(f, 0) === A) {
                            for (var l = f.byteLength, g = 2; g < l; ) {
                              var s = o(f, g);
                              if (((g += 2), s === e)) {
                                if (a(f, (g += 2)) !== n) break;
                                var v = o(f, (g += 6)) === t;
                                g += a(f, g + 4, v);
                                var c = o(f, g, v);
                                g += 2;
                                for (var w = 0; w < c; w++)
                                  if (o(f, g + 12 * w, v) === i)
                                    return void d(o(f, g + 12 * w + 8, v));
                              } else {
                                if ((s & r) !== r) break;
                                g += o(f, g);
                              }
                            }
                            d(-1);
                          } else d(-1);
                        }),
                          l.readAsArrayBuffer(u.slice(0, 65536));
                      });
                    })(v).then(function (A) {
                      u.setMetadata("exif", { orientation: A }), f(u);
                    });
                  });
                }),
                { options: { allowImageExifOrientation: [!0, g.BOOLEAN] } }
              );
            };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: l })
                ),
              l
            );
          });
        },
        {},
      ],
      qxYJ: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var e,
            t = arguments[3];
          !(function (t, i) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = i())
              : "function" == typeof e && e.amd
              ? e(i)
              : ((t = t || self).FilePondPluginImagePreview = i());
          })(this, function () {
            "use strict";
            function e(e) {
              this.wrapped = e;
            }
            function t(t) {
              var i, r;
              function a(i, r) {
                try {
                  var o = t[i](r),
                    c = o.value,
                    s = c instanceof e;
                  Promise.resolve(s ? c.wrapped : c).then(
                    function (e) {
                      s ? a("next", e) : n(o.done ? "return" : "normal", e);
                    },
                    function (e) {
                      a("throw", e);
                    }
                  );
                } catch (h) {
                  n("throw", h);
                }
              }
              function n(e, t) {
                switch (e) {
                  case "return":
                    i.resolve({ value: t, done: !0 });
                    break;
                  case "throw":
                    i.reject(t);
                    break;
                  default:
                    i.resolve({ value: t, done: !1 });
                }
                (i = i.next) ? a(i.key, i.arg) : (r = null);
              }
              (this._invoke = function (e, t) {
                return new Promise(function (n, o) {
                  var c = { key: e, arg: t, resolve: n, reject: o, next: null };
                  r ? (r = r.next = c) : ((i = r = c), a(e, t));
                });
              }),
                "function" != typeof t.return && (this.return = void 0);
            }
            "function" == typeof Symbol &&
              Symbol.asyncIterator &&
              (t.prototype[Symbol.asyncIterator] = function () {
                return this;
              }),
              (t.prototype.next = function (e) {
                return this._invoke("next", e);
              }),
              (t.prototype.throw = function (e) {
                return this._invoke("throw", e);
              }),
              (t.prototype.return = function (e) {
                return this._invoke("return", e);
              });
            function i(e, t) {
              return (
                r(e) ||
                (function (e, t) {
                  var i = [],
                    r = !0,
                    a = !1,
                    n = void 0;
                  try {
                    for (
                      var o, c = e[Symbol.iterator]();
                      !(r = (o = c.next()).done) &&
                      (i.push(o.value), !t || i.length !== t);
                      r = !0
                    );
                  } catch (s) {
                    (a = !0), (n = s);
                  } finally {
                    try {
                      r || null == c.return || c.return();
                    } finally {
                      if (a) throw n;
                    }
                  }
                  return i;
                })(e, t) ||
                a()
              );
            }
            function r(e) {
              if (Array.isArray(e)) return e;
            }
            function a() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            }
            var n = function (e, t) {
                return s(e.x * t, e.y * t);
              },
              o = function (e, t) {
                return s(e.x + t.x, e.y + t.y);
              },
              c = function (e, t, i) {
                var r = Math.cos(t),
                  a = Math.sin(t),
                  n = s(e.x - i.x, e.y - i.y);
                return s(i.x + r * n.x - a * n.y, i.y + a * n.x + r * n.y);
              },
              s = function () {
                return {
                  x:
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  y:
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                };
              },
              h = function (e, t) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r = arguments.length > 3 ? arguments[3] : void 0;
                return "string" == typeof e
                  ? parseFloat(e) * i
                  : "number" == typeof e
                  ? e * (r ? t[r] : Math.min(t.width, t.height))
                  : void 0;
              },
              u = function (e) {
                return null != e;
              },
              l = function (e, t) {
                return Object.keys(t).forEach(function (i) {
                  return e.setAttribute(i, t[i]);
                });
              },
              d = function (e, t) {
                var i = document.createElementNS("http://www.w3.org/2000/svg", e);
                return t && l(i, t), i;
              },
              f = { contain: "xMidYMid meet", cover: "xMidYMid slice" },
              g = { left: "start", center: "middle", right: "end" },
              p = function (e) {
                return function (t) {
                  return d(e, { id: t.id });
                };
              },
              m = {
                image: function (e) {
                  var t = d("image", {
                    id: e.id,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    opacity: "0",
                  });
                  return (
                    (t.onload = function () {
                      t.setAttribute("opacity", e.opacity || 1);
                    }),
                    t.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "xlink:href",
                      e.src
                    ),
                    t
                  );
                },
                rect: p("rect"),
                ellipse: p("ellipse"),
                text: p("text"),
                path: p("path"),
                line: function (e) {
                  var t = d("g", {
                      id: e.id,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                    i = d("line");
                  t.appendChild(i);
                  var r = d("path");
                  t.appendChild(r);
                  var a = d("path");
                  return t.appendChild(a), t;
                },
              },
              y = {
                rect: function (e) {
                  return l(e, Object.assign({}, e.rect, e.styles));
                },
                ellipse: function (e) {
                  var t = e.rect.x + 0.5 * e.rect.width,
                    i = e.rect.y + 0.5 * e.rect.height,
                    r = 0.5 * e.rect.width,
                    a = 0.5 * e.rect.height;
                  return l(
                    e,
                    Object.assign({ cx: t, cy: i, rx: r, ry: a }, e.styles)
                  );
                },
                image: function (e, t) {
                  l(
                    e,
                    Object.assign({}, e.rect, e.styles, {
                      preserveAspectRatio: f[t.fit] || "none",
                    })
                  );
                },
                text: function (e, t, i, r) {
                  var a = h(t.fontSize, i, r),
                    n = t.fontFamily || "sans-serif",
                    o = t.fontWeight || "normal",
                    c = g[t.textAlign] || "start";
                  l(
                    e,
                    Object.assign({}, e.rect, e.styles, {
                      "stroke-width": 0,
                      "font-weight": o,
                      "font-size": a,
                      "font-family": n,
                      "text-anchor": c,
                    })
                  ),
                    e.text !== t.text &&
                      ((e.text = t.text),
                      (e.textContent = t.text.length ? t.text : " "));
                },
                path: function (e, t, i, r) {
                  var a;
                  l(
                    e,
                    Object.assign({}, e.styles, {
                      fill: "none",
                      d:
                        ((a = t.points.map(function (e) {
                          return {
                            x: h(e.x, i, r, "width"),
                            y: h(e.y, i, r, "height"),
                          };
                        })),
                        a
                          .map(function (e, t) {
                            return ""
                              .concat(0 === t ? "M" : "L", " ")
                              .concat(e.x, " ")
                              .concat(e.y);
                          })
                          .join(" ")),
                    })
                  );
                },
                line: function (e, t, i, r) {
                  l(e, Object.assign({}, e.rect, e.styles, { fill: "none" }));
                  var a = e.childNodes[0],
                    u = e.childNodes[1],
                    d = e.childNodes[2],
                    f = e.rect,
                    g = {
                      x: e.rect.x + e.rect.width,
                      y: e.rect.y + e.rect.height,
                    };
                  if (
                    (l(a, { x1: f.x, y1: f.y, x2: g.x, y2: g.y }),
                    t.lineDecoration)
                  ) {
                    (u.style.display = "none"), (d.style.display = "none");
                    var p = (function (e) {
                        var t = Math.sqrt(e.x * e.x + e.y * e.y);
                        return 0 === t ? { x: 0, y: 0 } : s(e.x / t, e.y / t);
                      })({ x: g.x - f.x, y: g.y - f.y }),
                      m = h(0.05, i, r);
                    if (-1 !== t.lineDecoration.indexOf("arrow-begin")) {
                      var y = n(p, m),
                        E = o(f, y),
                        v = c(f, 2, E),
                        w = c(f, -2, E);
                      l(u, {
                        style: "display:block;",
                        d: "M"
                          .concat(v.x, ",")
                          .concat(v.y, " L")
                          .concat(f.x, ",")
                          .concat(f.y, " L")
                          .concat(w.x, ",")
                          .concat(w.y),
                      });
                    }
                    if (-1 !== t.lineDecoration.indexOf("arrow-end")) {
                      var _ = n(p, -m),
                        I = o(g, _),
                        M = c(g, 2, I),
                        x = c(g, -2, I);
                      l(d, {
                        style: "display:block;",
                        d: "M"
                          .concat(M.x, ",")
                          .concat(M.y, " L")
                          .concat(g.x, ",")
                          .concat(g.y, " L")
                          .concat(x.x, ",")
                          .concat(x.y),
                      });
                    }
                  }
                },
              },
              E = function (e, t, i, r, a) {
                "path" !== t &&
                  (e.rect = (function (e, t) {
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      r = h(e.x, t, i, "width") || h(e.left, t, i, "width"),
                      a = h(e.y, t, i, "height") || h(e.top, t, i, "height"),
                      n = h(e.width, t, i, "width"),
                      o = h(e.height, t, i, "height"),
                      c = h(e.right, t, i, "width"),
                      s = h(e.bottom, t, i, "height");
                    return (
                      u(a) || (a = u(o) && u(s) ? t.height - o - s : s),
                      u(r) || (r = u(n) && u(c) ? t.width - n - c : c),
                      u(n) || (n = u(r) && u(c) ? t.width - r - c : 0),
                      u(o) || (o = u(a) && u(s) ? t.height - a - s : 0),
                      { x: r || 0, y: a || 0, width: n || 0, height: o || 0 }
                    );
                  })(i, r, a)),
                  (e.styles = (function (e, t, i) {
                    var r = e.borderStyle || e.lineStyle || "solid",
                      a = e.backgroundColor || e.fontColor || "transparent",
                      n = e.borderColor || e.lineColor || "transparent",
                      o = h(e.borderWidth || e.lineWidth, t, i);
                    return {
                      "stroke-linecap": e.lineCap || "round",
                      "stroke-linejoin": e.lineJoin || "round",
                      "stroke-width": o || 0,
                      "stroke-dasharray":
                        "string" == typeof r
                          ? ""
                          : r
                              .map(function (e) {
                                return h(e, t, i);
                              })
                              .join(","),
                      stroke: n,
                      fill: a,
                      opacity: e.opacity || 1,
                    };
                  })(i, r, a)),
                  y[t](e, i, r, a);
              },
              v = ["x", "y", "left", "top", "right", "bottom", "width", "height"],
              w = function (e) {
                var t = i(e, 2),
                  r = t[0],
                  a = t[1],
                  n = a.points
                    ? {}
                    : v.reduce(function (e, t) {
                        var i;
                        return (
                          (e[t] =
                            "string" == typeof (i = a[t]) && /%/.test(i)
                              ? parseFloat(i) / 100
                              : i),
                          e
                        );
                      }, {});
                return [r, Object.assign({ zIndex: 0 }, a, n)];
              },
              _ = function (e, t) {
                return e[1].zIndex > t[1].zIndex
                  ? 1
                  : e[1].zIndex < t[1].zIndex
                  ? -1
                  : 0;
              },
              I = function (e) {
                return e.utils.createView({
                  name: "image-preview-markup",
                  tag: "svg",
                  ignoreRect: !0,
                  mixins: {
                    apis: [
                      "width",
                      "height",
                      "crop",
                      "markup",
                      "resize",
                      "dirty",
                    ],
                  },
                  write: function (e) {
                    var t = e.root,
                      r = e.props;
                    if (r.dirty) {
                      var a = r.crop,
                        n = r.resize,
                        o = r.markup,
                        c = r.width,
                        s = r.height,
                        h = a.width,
                        u = a.height;
                      if (n) {
                        var l = n.size,
                          d = l && l.width,
                          f = l && l.height,
                          g = n.mode,
                          p = n.upscale;
                        d && !f && (f = d), f && !d && (d = f);
                        var y = h < d && u < f;
                        if (!y || (y && p)) {
                          var v,
                            I = d / h,
                            M = f / u;
                          if ("force" === g) (h = d), (u = f);
                          else
                            "cover" === g
                              ? (v = Math.max(I, M))
                              : "contain" === g && (v = Math.min(I, M)),
                              (h *= v),
                              (u *= v);
                        }
                      }
                      var x = { width: c, height: s };
                      t.element.setAttribute("width", x.width),
                        t.element.setAttribute("height", x.height);
                      var T = Math.min(c / h, s / u);
                      t.element.innerHTML = "";
                      var A = t.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");
                      o.filter(A)
                        .map(w)
                        .sort(_)
                        .forEach(function (e) {
                          var r = i(e, 2),
                            a = r[0],
                            n = r[1],
                            o = (function (e, t) {
                              return m[e](t);
                            })(a, n);
                          E(o, a, n, x, T), t.element.appendChild(o);
                        });
                    }
                  },
                });
              },
              M = function (e, t) {
                return { x: e, y: t };
              },
              x = function (e, t) {
                return M(e.x - t.x, e.y - t.y);
              },
              T = function (e, t) {
                return Math.sqrt(
                  (function (e, t) {
                    return (function (e, t) {
                      return e.x * t.x + e.y * t.y;
                    })(x(e, t), x(e, t));
                  })(e, t)
                );
              },
              A = function (e, t) {
                var i = e,
                  r = t,
                  a = 1.5707963267948966 - t,
                  n = Math.sin(1.5707963267948966),
                  o = Math.sin(r),
                  c = Math.sin(a),
                  s = Math.cos(a),
                  h = i / n;
                return M(s * (h * o), s * (h * c));
              },
              R = function (e, t, i, r) {
                var a = r.x > 0.5 ? 1 - r.x : r.x,
                  n = r.y > 0.5 ? 1 - r.y : r.y,
                  o = 2 * a * e.width,
                  c = 2 * n * e.height,
                  s = (function (e, t) {
                    var i = e.width,
                      r = e.height,
                      a = A(i, t),
                      n = A(r, t),
                      o = M(e.x + Math.abs(a.x), e.y - Math.abs(a.y)),
                      c = M(e.x + e.width + Math.abs(n.y), e.y + Math.abs(n.x)),
                      s = M(e.x - Math.abs(n.y), e.y + e.height - Math.abs(n.x));
                    return { width: T(o, c), height: T(o, s) };
                  })(t, i);
                return Math.max(s.width / o, s.height / c);
              },
              P = function (e, t) {
                var i = e.width,
                  r = i * t;
                return (
                  r > e.height && (i = (r = e.height) / t),
                  {
                    x: 0.5 * (e.width - i),
                    y: 0.5 * (e.height - r),
                    width: i,
                    height: r,
                  }
                );
              },
              C = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = t.zoom,
                  r = t.rotation,
                  a = t.center,
                  n = t.aspectRatio;
                n || (n = e.height / e.width);
                var o = (function (e, t) {
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      r = e.height / e.width,
                      a = t,
                      n = 1,
                      o = r;
                    o > a && (n = (o = a) / r);
                    var c = Math.max(1 / n, a / o),
                      s = e.width / (i * c * n);
                    return { width: s, height: s * t };
                  })(e, n, i),
                  c = { x: 0.5 * o.width, y: 0.5 * o.height },
                  s = { x: 0, y: 0, width: o.width, height: o.height, center: c },
                  h = void 0 === t.scaleToFit || t.scaleToFit,
                  u = i * R(e, P(s, n), r, h ? a : { x: 0.5, y: 0.5 });
                return {
                  widthFloat: o.width / u,
                  heightFloat: o.height / u,
                  width: Math.round(o.width / u),
                  height: Math.round(o.height / u),
                };
              },
              k = { type: "spring", stiffness: 0.5, damping: 0.45, mass: 10 },
              D = function (e) {
                return e.utils.createView({
                  name: "image-clip",
                  tag: "div",
                  ignoreRect: !0,
                  mixins: {
                    apis: [
                      "crop",
                      "markup",
                      "resize",
                      "width",
                      "height",
                      "dirty",
                      "background",
                    ],
                    styles: ["width", "height", "opacity"],
                    animations: { opacity: { type: "tween", duration: 250 } },
                  },
                  didWriteView: function (e) {
                    var t = e.root,
                      i = e.props;
                    i.background &&
                      (t.element.style.backgroundColor = i.background);
                  },
                  create: function (t) {
                    var i = t.root,
                      r = t.props;
                    (i.ref.image = i.appendChildView(
                      i.createChildView(
                        (function (e) {
                          return e.utils.createView({
                            name: "image-canvas-wrapper",
                            tag: "div",
                            ignoreRect: !0,
                            mixins: {
                              apis: ["crop", "width", "height"],
                              styles: [
                                "originX",
                                "originY",
                                "translateX",
                                "translateY",
                                "scaleX",
                                "scaleY",
                                "rotateZ",
                              ],
                              animations: {
                                originX: k,
                                originY: k,
                                scaleX: k,
                                scaleY: k,
                                translateX: k,
                                translateY: k,
                                rotateZ: k,
                              },
                            },
                            create: function (t) {
                              var i = t.root,
                                r = t.props;
                              (r.width = r.image.width),
                                (r.height = r.image.height),
                                (i.ref.bitmap = i.appendChildView(
                                  i.createChildView(
                                    (function (e) {
                                      return e.utils.createView({
                                        name: "image-bitmap",
                                        ignoreRect: !0,
                                        mixins: { styles: ["scaleX", "scaleY"] },
                                        create: function (e) {
                                          var t = e.root,
                                            i = e.props;
                                          t.appendChild(i.image);
                                        },
                                      });
                                    })(e),
                                    { image: r.image }
                                  )
                                ));
                            },
                            write: function (e) {
                              var t = e.root,
                                i = e.props.crop.flip,
                                r = t.ref.bitmap;
                              (r.scaleX = i.horizontal ? -1 : 1),
                                (r.scaleY = i.vertical ? -1 : 1);
                            },
                          });
                        })(e),
                        Object.assign({}, r)
                      )
                    )),
                      (i.ref.createMarkup = function () {
                        i.ref.markup ||
                          (i.ref.markup = i.appendChildView(
                            i.createChildView(I(e), Object.assign({}, r))
                          ));
                      }),
                      (i.ref.destroyMarkup = function () {
                        i.ref.markup &&
                          (i.removeChildView(i.ref.markup),
                          (i.ref.markup = null));
                      });
                    var a = i.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");
                    null !== a &&
                      (i.element.dataset.transparencyIndicator =
                        "grid" === a ? a : "color");
                  },
                  write: function (e) {
                    var t = e.root,
                      i = e.props,
                      r = e.shouldOptimize,
                      a = i.crop,
                      n = i.markup,
                      o = i.resize,
                      c = i.dirty,
                      s = i.width,
                      h = i.height;
                    t.ref.image.crop = a;
                    var u = {
                        x: 0,
                        y: 0,
                        width: s,
                        height: h,
                        center: { x: 0.5 * s, y: 0.5 * h },
                      },
                      l = {
                        width: t.ref.image.width,
                        height: t.ref.image.height,
                      },
                      d = { x: a.center.x * l.width, y: a.center.y * l.height },
                      f = {
                        x: u.center.x - l.width * a.center.x,
                        y: u.center.y - l.height * a.center.y,
                      },
                      g = 2 * Math.PI + (a.rotation % (2 * Math.PI)),
                      p = a.aspectRatio || l.height / l.width,
                      m = void 0 === a.scaleToFit || a.scaleToFit,
                      y = R(l, P(u, p), g, m ? a.center : { x: 0.5, y: 0.5 }),
                      E = a.zoom * y;
                    n && n.length
                      ? (t.ref.createMarkup(),
                        (t.ref.markup.width = s),
                        (t.ref.markup.height = h),
                        (t.ref.markup.resize = o),
                        (t.ref.markup.dirty = c),
                        (t.ref.markup.markup = n),
                        (t.ref.markup.crop = C(l, a)))
                      : t.ref.markup && t.ref.destroyMarkup();
                    var v = t.ref.image;
                    if (r)
                      return (
                        (v.originX = null),
                        (v.originY = null),
                        (v.translateX = null),
                        (v.translateY = null),
                        (v.rotateZ = null),
                        (v.scaleX = null),
                        void (v.scaleY = null)
                      );
                    (v.originX = d.x),
                      (v.originY = d.y),
                      (v.translateX = f.x),
                      (v.translateY = f.y),
                      (v.rotateZ = g),
                      (v.scaleX = E),
                      (v.scaleY = E);
                  },
                });
              },
              G =
                '<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">\n    <defs>\n        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">\n            <stop offset=\'50%\' stop-color=\'#000000\'/>\n            <stop offset=\'56%\' stop-color=\'#0a0a0a\'/>\n            <stop offset=\'63%\' stop-color=\'#262626\'/>\n            <stop offset=\'69%\' stop-color=\'#4f4f4f\'/>\n            <stop offset=\'75%\' stop-color=\'#808080\'/>\n            <stop offset=\'81%\' stop-color=\'#b1b1b1\'/>\n            <stop offset=\'88%\' stop-color=\'#dadada\'/>\n            <stop offset=\'94%\' stop-color=\'#f6f6f6\'/>\n            <stop offset=\'100%\' stop-color=\'#ffffff\'/>\n        </radialGradient>\n        <mask id="mask-__UID__">\n            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>\n        </mask>\n    </defs>\n    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>\n</svg>',
              V = !1,
              O = 0,
              b = function () {
                self.onmessage = function (e) {
                  createImageBitmap(e.data.message.file).then(function (t) {
                    self.postMessage({ id: e.data.id, message: t }, [t]);
                  });
                };
              },
              S = function () {
                self.onmessage = function (e) {
                  for (
                    var t = e.data.message.imageData,
                      i = e.data.message.colorMatrix,
                      r = t.data,
                      a = r.length,
                      n = i[0],
                      o = i[1],
                      c = i[2],
                      s = i[3],
                      h = i[4],
                      u = i[5],
                      l = i[6],
                      d = i[7],
                      f = i[8],
                      g = i[9],
                      p = i[10],
                      m = i[11],
                      y = i[12],
                      E = i[13],
                      v = i[14],
                      w = i[15],
                      _ = i[16],
                      I = i[17],
                      M = i[18],
                      x = i[19],
                      T = 0,
                      A = 0,
                      R = 0,
                      P = 0,
                      C = 0;
                    T < a;
                    T += 4
                  )
                    (A = r[T] / 255),
                      (R = r[T + 1] / 255),
                      (P = r[T + 2] / 255),
                      (C = r[T + 3] / 255),
                      (r[T] = Math.max(
                        0,
                        Math.min(255 * (A * n + R * o + P * c + C * s + h), 255)
                      )),
                      (r[T + 1] = Math.max(
                        0,
                        Math.min(255 * (A * u + R * l + P * d + C * f + g), 255)
                      )),
                      (r[T + 2] = Math.max(
                        0,
                        Math.min(255 * (A * p + R * m + P * y + C * E + v), 255)
                      )),
                      (r[T + 3] = Math.max(
                        0,
                        Math.min(255 * (A * w + R * _ + P * I + C * M + x), 255)
                      ));
                  self.postMessage({ id: e.data.id, message: t }, [
                    t.data.buffer,
                  ]);
                };
              },
              L = {
                1: function () {
                  return [1, 0, 0, 1, 0, 0];
                },
                2: function (e) {
                  return [-1, 0, 0, 1, e, 0];
                },
                3: function (e, t) {
                  return [-1, 0, 0, -1, e, t];
                },
                4: function (e, t) {
                  return [1, 0, 0, -1, 0, t];
                },
                5: function () {
                  return [0, 1, 1, 0, 0, 0];
                },
                6: function (e, t) {
                  return [0, 1, -1, 0, t, 0];
                },
                7: function (e, t) {
                  return [0, -1, -1, 0, t, e];
                },
                8: function (e) {
                  return [0, -1, 1, 0, 0, e];
                },
              },
              N = function (e, t, i, r) {
                (t = Math.round(t)), (i = Math.round(i));
                var a = document.createElement("canvas");
                (a.width = t), (a.height = i);
                var n = a.getContext("2d");
                if (r >= 5 && r <= 8) {
                  var o = [i, t];
                  (t = o[0]), (i = o[1]);
                }
                return (
                  (function (e, t, i, r) {
                    -1 !== r && e.transform.apply(e, L[r](t, i));
                  })(n, t, i, r),
                  n.drawImage(e, 0, 0, t, i),
                  a
                );
              },
              W = function (e) {
                return /^image/.test(e.type) && !/svg/.test(e.type);
              },
              z = function (e) {
                var t = Math.min(10 / e.width, 10 / e.height),
                  i = document.createElement("canvas"),
                  r = i.getContext("2d"),
                  a = (i.width = Math.ceil(e.width * t)),
                  n = (i.height = Math.ceil(e.height * t));
                r.drawImage(e, 0, 0, a, n);
                var o = null;
                try {
                  o = r.getImageData(0, 0, a, n).data;
                } catch (d) {
                  return null;
                }
                for (var c = o.length, s = 0, h = 0, u = 0, l = 0; l < c; l += 4)
                  (s += o[l] * o[l]),
                    (h += o[l + 1] * o[l + 1]),
                    (u += o[l + 2] * o[l + 2]);
                return { r: (s = H(s, c)), g: (h = H(h, c)), b: (u = H(u, c)) };
              },
              H = function (e, t) {
                return Math.floor(Math.sqrt(e / (t / 4)));
              },
              q = function (e) {
                var t = e.utils.createView({
                    name: "image-preview-overlay",
                    tag: "div",
                    ignoreRect: !0,
                    create: function (e) {
                      var t = e.root,
                        i = e.props;
                      !V &&
                        document.querySelector("base") &&
                        ((G = G.replace(
                          /url\(\#/g,
                          "url(" +
                            window.location.href.replace(
                              window.location.hash,
                              ""
                            ) +
                            "#"
                        )),
                        (V = !0)),
                        O++,
                        t.element.classList.add(
                          "filepond--image-preview-overlay-".concat(i.status)
                        ),
                        (t.element.innerHTML = G.replace(/__UID__/g, O));
                    },
                    mixins: {
                      styles: ["opacity"],
                      animations: { opacity: { type: "spring", mass: 25 } },
                    },
                  }),
                  i = (function (e) {
                    return e.utils.createView({
                      name: "image-preview",
                      tag: "div",
                      ignoreRect: !0,
                      mixins: {
                        apis: [
                          "image",
                          "crop",
                          "markup",
                          "resize",
                          "dirty",
                          "background",
                        ],
                        styles: ["translateY", "scaleX", "scaleY", "opacity"],
                        animations: {
                          scaleX: k,
                          scaleY: k,
                          translateY: k,
                          opacity: { type: "tween", duration: 400 },
                        },
                      },
                      create: function (t) {
                        var i = t.root,
                          r = t.props;
                        i.ref.clip = i.appendChildView(
                          i.createChildView(D(e), {
                            id: r.id,
                            image: r.image,
                            crop: r.crop,
                            markup: r.markup,
                            resize: r.resize,
                            dirty: r.dirty,
                            background: r.background,
                          })
                        );
                      },
                      write: function (e) {
                        var t = e.root,
                          i = e.props,
                          r = e.shouldOptimize,
                          a = t.ref.clip,
                          n = i.image,
                          o = i.crop,
                          c = i.markup,
                          s = i.resize,
                          h = i.dirty;
                        if (
                          ((a.crop = o),
                          (a.markup = c),
                          (a.resize = s),
                          (a.dirty = h),
                          (a.opacity = r ? 0 : 1),
                          !r && !t.rect.element.hidden)
                        ) {
                          var u = n.height / n.width,
                            l = o.aspectRatio || u,
                            d = t.rect.inner.width,
                            f = t.rect.inner.height,
                            g = t.query("GET_IMAGE_PREVIEW_HEIGHT"),
                            p = t.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),
                            m = t.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),
                            y = t.query("GET_PANEL_ASPECT_RATIO"),
                            E = t.query("GET_ALLOW_MULTIPLE");
                          y && !E && ((g = d * y), (l = y));
                          var v =
                              null !== g ? g : Math.max(p, Math.min(d * l, m)),
                            w = v / l;
                          w > d && (v = (w = d) * l),
                            v > f && ((v = f), (w = f / l)),
                            (a.width = w),
                            (a.height = v);
                        }
                      },
                    });
                  })(e),
                  r = e.utils.createWorker,
                  a = function (e, t, i) {
                    return new Promise(function (a) {
                      e.ref.imageData ||
                        (e.ref.imageData = i
                          .getContext("2d")
                          .getImageData(0, 0, i.width, i.height));
                      var n = (function (e) {
                        var t;
                        try {
                          t = new ImageData(e.width, e.height);
                        } catch (i) {
                          t = document
                            .createElement("canvas")
                            .getContext("2d")
                            .createImageData(e.width, e.height);
                        }
                        return t.data.set(new Uint8ClampedArray(e.data)), t;
                      })(e.ref.imageData);
                      if (!t || 20 !== t.length)
                        return i.getContext("2d").putImageData(n, 0, 0), a();
                      var o = r(S);
                      o.post(
                        { imageData: n, colorMatrix: t },
                        function (e) {
                          i.getContext("2d").putImageData(e, 0, 0),
                            o.terminate(),
                            a();
                        },
                        [n.data.buffer]
                      );
                    });
                  },
                  n = function (e) {
                    var t = e.root,
                      r = e.props,
                      a = e.image,
                      n = r.id,
                      o = t.query("GET_ITEM", { id: n });
                    if (o) {
                      var c,
                        s,
                        h = o.getMetadata("crop") || {
                          center: { x: 0.5, y: 0.5 },
                          flip: { horizontal: !1, vertical: !1 },
                          zoom: 1,
                          rotation: 0,
                          aspectRatio: null,
                        },
                        u = t.query(
                          "GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"
                        ),
                        l = !1;
                      t.query("GET_IMAGE_PREVIEW_MARKUP_SHOW") &&
                        ((c = o.getMetadata("markup") || []),
                        (s = o.getMetadata("resize")),
                        (l = !0));
                      var d = t.appendChildView(
                        t.createChildView(i, {
                          id: n,
                          image: a,
                          crop: h,
                          resize: s,
                          markup: c,
                          dirty: l,
                          background: u,
                          opacity: 0,
                          scaleX: 1.15,
                          scaleY: 1.15,
                          translateY: 15,
                        }),
                        t.childViews.length
                      );
                      t.ref.images.push(d),
                        (d.opacity = 1),
                        (d.scaleX = 1),
                        (d.scaleY = 1),
                        (d.translateY = 0),
                        setTimeout(function () {
                          t.dispatch("DID_IMAGE_PREVIEW_SHOW", { id: n });
                        }, 250);
                    }
                  },
                  o = function (e) {
                    var t = e.root;
                    (t.ref.overlayShadow.opacity = 1),
                      (t.ref.overlayError.opacity = 0),
                      (t.ref.overlaySuccess.opacity = 0);
                  },
                  c = function (e) {
                    var t = e.root;
                    (t.ref.overlayShadow.opacity = 0.25),
                      (t.ref.overlayError.opacity = 1);
                  };
                return e.utils.createView({
                  name: "image-preview-wrapper",
                  create: function (e) {
                    var i = e.root;
                    (i.ref.images = []),
                      (i.ref.imageData = null),
                      (i.ref.imageViewBin = []),
                      (i.ref.overlayShadow = i.appendChildView(
                        i.createChildView(t, { opacity: 0, status: "idle" })
                      )),
                      (i.ref.overlaySuccess = i.appendChildView(
                        i.createChildView(t, { opacity: 0, status: "success" })
                      )),
                      (i.ref.overlayError = i.appendChildView(
                        i.createChildView(t, { opacity: 0, status: "failure" })
                      ));
                  },
                  styles: ["height"],
                  apis: ["height"],
                  destroy: function (e) {
                    e.root.ref.images.forEach(function (e) {
                      (e.image.width = 1), (e.image.height = 1);
                    });
                  },
                  didWriteView: function (e) {
                    e.root.ref.images.forEach(function (e) {
                      e.dirty = !1;
                    });
                  },
                  write: e.utils.createRoute(
                    {
                      DID_IMAGE_PREVIEW_DRAW: function (e) {
                        var t = e.root,
                          i = t.ref.images[t.ref.images.length - 1];
                        (i.translateY = 0),
                          (i.scaleX = 1),
                          (i.scaleY = 1),
                          (i.opacity = 1);
                      },
                      DID_IMAGE_PREVIEW_CONTAINER_CREATE: function (e) {
                        var t = e.root,
                          i = e.props.id,
                          r = t.query("GET_ITEM", i);
                        if (r) {
                          var a,
                            n,
                            o,
                            c = URL.createObjectURL(r.file);
                          (a = c),
                            (n = function (e, r) {
                              t.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE", {
                                id: i,
                                width: e,
                                height: r,
                              });
                            }),
                            ((o = new Image()).onload = function () {
                              var e = o.naturalWidth,
                                t = o.naturalHeight;
                              (o = null), n(e, t);
                            }),
                            (o.src = a);
                        }
                      },
                      DID_FINISH_CALCULATE_PREVIEWSIZE: function (e) {
                        var t = e.root,
                          i = e.props,
                          o = i.id,
                          c = t.query("GET_ITEM", o);
                        if (c) {
                          var s,
                            h,
                            u = URL.createObjectURL(c.file),
                            l = function () {
                              var e;
                              ((e = u),
                              new Promise(function (t, i) {
                                var r = new Image();
                                (r.crossOrigin = "Anonymous"),
                                  (r.onload = function () {
                                    t(r);
                                  }),
                                  (r.onerror = function (e) {
                                    i(e);
                                  }),
                                  (r.src = e);
                              })).then(d);
                            },
                            d = function (e) {
                              URL.revokeObjectURL(u);
                              var r =
                                  (c.getMetadata("exif") || {}).orientation || -1,
                                o = e.width,
                                s = e.height;
                              if (r >= 5 && r <= 8) {
                                var h = [s, o];
                                (o = h[0]), (s = h[1]);
                              }
                              var l = Math.max(1, 0.75 * window.devicePixelRatio),
                                d = t.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR") * l,
                                f = s / o,
                                g = t.rect.element.width,
                                p = t.rect.element.height,
                                m = g,
                                y = m * f;
                              f > 1
                                ? (y = (m = Math.min(o, g * d)) * f)
                                : (m = (y = Math.min(s, p * d)) / f);
                              var E = N(e, m, y, r),
                                v = function () {
                                  var r = t.query(
                                    "GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR"
                                  )
                                    ? z(data)
                                    : null;
                                  c.setMetadata("color", r, !0),
                                    "close" in e && e.close(),
                                    (t.ref.overlayShadow.opacity = 1),
                                    n({ root: t, props: i, image: E });
                                },
                                w = c.getMetadata("filter");
                              w ? a(t, w, E).then(v) : v();
                            };
                          if (
                            ((s = c.file),
                            !(
                              ((h =
                                window.navigator.userAgent.match(
                                  /Firefox\/([0-9]+)\./
                                ))
                                ? parseInt(h[1])
                                : null) <= 58
                            ) &&
                              "createImageBitmap" in window &&
                              W(s))
                          ) {
                            var f = r(b);
                            f.post({ file: c.file }, function (e) {
                              f.terminate(), e ? d(e) : l();
                            });
                          } else l();
                        }
                      },
                      DID_UPDATE_ITEM_METADATA: function (e) {
                        var t = e.root,
                          i = e.props,
                          r = e.action;
                        if (
                          /crop|filter|markup|resize/.test(r.change.key) &&
                          t.ref.images.length
                        ) {
                          var o = t.query("GET_ITEM", { id: i.id });
                          if (o)
                            if (/filter/.test(r.change.key)) {
                              var c = t.ref.images[t.ref.images.length - 1];
                              a(t, r.change.value, c.image);
                            } else {
                              if (/crop|markup|resize/.test(r.change.key)) {
                                var s = o.getMetadata("crop"),
                                  h = t.ref.images[t.ref.images.length - 1];
                                if (
                                  Math.abs(s.aspectRatio - h.crop.aspectRatio) >
                                  1e-5
                                ) {
                                  var u = (function (e) {
                                    var t = e.root,
                                      i = t.ref.images.shift();
                                    return (
                                      (i.opacity = 0),
                                      (i.translateY = -15),
                                      t.ref.imageViewBin.push(i),
                                      i
                                    );
                                  })({ root: t });
                                  n({
                                    root: t,
                                    props: i,
                                    image:
                                      ((l = u.image),
                                      ((d =
                                        d ||
                                        document.createElement("canvas")).width =
                                        l.width),
                                      (d.height = l.height),
                                      d.getContext("2d").drawImage(l, 0, 0),
                                      d),
                                  });
                                } else
                                  !(function (e) {
                                    var t = e.root,
                                      i = e.props,
                                      r = t.query("GET_ITEM", { id: i.id });
                                    if (r) {
                                      var a =
                                        t.ref.images[t.ref.images.length - 1];
                                      (a.crop = r.getMetadata("crop")),
                                        (a.background = t.query(
                                          "GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"
                                        )),
                                        t.query(
                                          "GET_IMAGE_PREVIEW_MARKUP_SHOW"
                                        ) &&
                                          ((a.dirty = !0),
                                          (a.resize = r.getMetadata("resize")),
                                          (a.markup = r.getMetadata("markup")));
                                    }
                                  })({ root: t, props: i });
                              }
                              var l, d;
                            }
                        }
                      },
                      DID_THROW_ITEM_LOAD_ERROR: c,
                      DID_THROW_ITEM_PROCESSING_ERROR: c,
                      DID_THROW_ITEM_INVALID: c,
                      DID_COMPLETE_ITEM_PROCESSING: function (e) {
                        var t = e.root;
                        (t.ref.overlayShadow.opacity = 0.25),
                          (t.ref.overlaySuccess.opacity = 1);
                      },
                      DID_START_ITEM_PROCESSING: o,
                      DID_REVERT_ITEM_PROCESSING: o,
                    },
                    function (e) {
                      var t = e.root,
                        i = t.ref.imageViewBin.filter(function (e) {
                          return 0 === e.opacity;
                        });
                      (t.ref.imageViewBin = t.ref.imageViewBin.filter(function (
                        e
                      ) {
                        return e.opacity > 0;
                      })),
                        i.forEach(function (e) {
                          return (function (e, t) {
                            e.removeChildView(t),
                              (t.image.width = 1),
                              (t.image.height = 1),
                              t._destroy();
                          })(t, e);
                        }),
                        (i.length = 0);
                    }
                  ),
                });
              },
              F = function (e) {
                var t = e.addFilter,
                  i = e.utils,
                  r = i.Type,
                  a = i.createRoute,
                  n = i.isFile,
                  o = q(e);
                return (
                  t("CREATE_VIEW", function (e) {
                    var t = e.is,
                      i = e.view,
                      r = e.query;
                    if (t("file") && r("GET_ALLOW_IMAGE_PREVIEW")) {
                      var c = function (e) {
                        e.root.ref.shouldRescale = !0;
                      };
                      i.registerWriter(
                        a(
                          {
                            DID_RESIZE_ROOT: c,
                            DID_STOP_RESIZE: c,
                            DID_LOAD_ITEM: function (e) {
                              var t = e.root,
                                a = e.props.id,
                                c = r("GET_ITEM", a);
                              if (c && n(c.file) && !c.archived) {
                                var s = c.file;
                                if (
                                  (function (e) {
                                    return /^image/.test(e.type);
                                  })(s) &&
                                  r("GET_IMAGE_PREVIEW_FILTER_ITEM")(c)
                                ) {
                                  var h = "createImageBitmap" in (window || {}),
                                    u = r("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");
                                  if (!(!h && u && s.size > u)) {
                                    t.ref.imagePreview = i.appendChildView(
                                      i.createChildView(o, { id: a })
                                    );
                                    var l = t.query("GET_IMAGE_PREVIEW_HEIGHT");
                                    l &&
                                      t.dispatch("DID_UPDATE_PANEL_HEIGHT", {
                                        id: c.id,
                                        height: l,
                                      });
                                    var d =
                                      !h &&
                                      s.size >
                                        r(
                                          "GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE"
                                        );
                                    t.dispatch(
                                      "DID_IMAGE_PREVIEW_CONTAINER_CREATE",
                                      { id: a },
                                      d
                                    );
                                  }
                                }
                              }
                            },
                            DID_IMAGE_PREVIEW_CALCULATE_SIZE: function (e) {
                              var t = e.root,
                                i = e.action;
                              (t.ref.imageWidth = i.width),
                                (t.ref.imageHeight = i.height),
                                (t.ref.shouldRescale = !0),
                                (t.ref.shouldDrawPreview = !0),
                                t.dispatch("KICK");
                            },
                            DID_UPDATE_ITEM_METADATA: function (e) {
                              var t = e.root;
                              "crop" === e.action.change.key &&
                                (t.ref.shouldRescale = !0);
                            },
                          },
                          function (e) {
                            var t = e.root,
                              i = e.props;
                            t.ref.imagePreview &&
                              (t.rect.element.hidden ||
                                (t.ref.shouldRescale &&
                                  (!(function (e, t) {
                                    if (e.ref.imagePreview) {
                                      var i = t.id,
                                        r = e.query("GET_ITEM", { id: i });
                                      if (r) {
                                        var a = e.query("GET_PANEL_ASPECT_RATIO"),
                                          n = e.query(
                                            "GET_ITEM_PANEL_ASPECT_RATIO"
                                          ),
                                          o = e.query("GET_IMAGE_PREVIEW_HEIGHT");
                                        if (!(a || n || o)) {
                                          var c = e.ref,
                                            s = c.imageWidth,
                                            h = c.imageHeight;
                                          if (s && h) {
                                            var u = e.query(
                                                "GET_IMAGE_PREVIEW_MIN_HEIGHT"
                                              ),
                                              l = e.query(
                                                "GET_IMAGE_PREVIEW_MAX_HEIGHT"
                                              ),
                                              d =
                                                (r.getMetadata("exif") || {})
                                                  .orientation || -1;
                                            if (d >= 5 && d <= 8) {
                                              var f = [h, s];
                                              (s = f[0]), (h = f[1]);
                                            }
                                            if (
                                              !W(r.file) ||
                                              e.query("GET_IMAGE_PREVIEW_UPSCALE")
                                            ) {
                                              var g = 2048 / s;
                                              (s *= g), (h *= g);
                                            }
                                            var p = h / s,
                                              m =
                                                (r.getMetadata("crop") || {})
                                                  .aspectRatio || p,
                                              y = Math.max(u, Math.min(h, l)),
                                              E = e.rect.element.width,
                                              v = Math.min(E * m, y);
                                            e.dispatch(
                                              "DID_UPDATE_PANEL_HEIGHT",
                                              { id: r.id, height: v }
                                            );
                                          }
                                        }
                                      }
                                    }
                                  })(t, i),
                                  (t.ref.shouldRescale = !1)),
                                t.ref.shouldDrawPreview &&
                                  (requestAnimationFrame(function () {
                                    t.dispatch(
                                      "DID_FINISH_CALCULATE_PREVIEWSIZE",
                                      { id: i.id }
                                    );
                                  }),
                                  (t.ref.shouldDrawPreview = !1))));
                          }
                        )
                      );
                    }
                  }),
                  {
                    options: {
                      allowImagePreview: [!0, r.BOOLEAN],
                      imagePreviewFilterItem: [
                        function () {
                          return !0;
                        },
                        r.FUNCTION,
                      ],
                      imagePreviewHeight: [null, r.INT],
                      imagePreviewMinHeight: [44, r.INT],
                      imagePreviewMaxHeight: [256, r.INT],
                      imagePreviewMaxFileSize: [null, r.INT],
                      imagePreviewZoomFactor: [2, r.INT],
                      imagePreviewUpscale: [!1, r.BOOLEAN],
                      imagePreviewMaxInstantPreviewFileSize: [1e6, r.INT],
                      imagePreviewTransparencyIndicator: [null, r.STRING],
                      imagePreviewCalculateAverageImageColor: [!1, r.BOOLEAN],
                      imagePreviewMarkupShow: [!0, r.BOOLEAN],
                      imagePreviewMarkupFilter: [
                        function () {
                          return !0;
                        },
                        r.FUNCTION,
                      ],
                    },
                  }
                );
              };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: F })
                ),
              F
            );
          });
        },
        {},
      ],
      FBSD: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var e,
            t = arguments[3];
          !(function (t, i) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = i())
              : "function" == typeof e && e.amd
              ? e(i)
              : ((t = t || self).FilePondPluginImageEdit = i());
          })(this, function () {
            "use strict";
            var e = function (e) {
                return /^image/.test(e.type);
              },
              t = function (t) {
                var i = t.addFilter,
                  n = t.utils,
                  o = t.views,
                  r = n.Type,
                  a = n.createRoute,
                  l = n.createItemAPI,
                  d =
                    void 0 === l
                      ? function (e) {
                          return e;
                        }
                      : l,
                  E = o.fileActionButton;
                i("SHOULD_REMOVE_ON_REVERT", function (t, i) {
                  var n = i.item,
                    o = i.query;
                  return new Promise(function (t) {
                    var i = n.file;
                    t(
                      !(
                        o("GET_ALLOW_IMAGE_EDIT") &&
                        o("GET_IMAGE_EDIT_ALLOW_EDIT") &&
                        e(i)
                      )
                    );
                  });
                }),
                  i("DID_LOAD_ITEM", function (t, i) {
                    var n = i.query,
                      o = i.dispatch;
                    return new Promise(function (i, r) {
                      if (t.origin > 1) i(t);
                      else {
                        var a = t.file;
                        if (
                          n("GET_ALLOW_IMAGE_EDIT") &&
                          n("GET_IMAGE_EDIT_INSTANT_EDIT")
                        )
                          if (e(a)) {
                            var l = function (e, t, i) {
                                return function (n) {
                                  c.shift(), n ? t(e) : i(e), o("KICK"), d();
                                };
                              },
                              d = function () {
                                if (c.length) {
                                  var e = c[0],
                                    t = e.item,
                                    i = e.resolve,
                                    n = e.reject;
                                  o("EDIT_ITEM", {
                                    id: t.id,
                                    handleEditorResponse: l(t, i, n),
                                  });
                                }
                              };
                            u({ item: t, resolve: i, reject: r }),
                              1 === c.length && d();
                          } else i(t);
                        else i(t);
                      }
                    });
                  }),
                  i("DID_CREATE_ITEM", function (e, t) {
                    t.query;
                    var i = t.dispatch;
                    e.extend("edit", function () {
                      i("EDIT_ITEM", { id: e.id });
                    });
                  });
                var c = [],
                  u = function (e) {
                    return c.push(e), e;
                  };
                return (
                  i("CREATE_VIEW", function (t) {
                    var i = t.is,
                      n = t.view,
                      o = t.query;
                    if (o("GET_ALLOW_IMAGE_EDIT")) {
                      var r = o("GET_ALLOW_IMAGE_PREVIEW");
                      if ((i("file-info") && !r) || (i("file") && r)) {
                        var l = o("GET_IMAGE_EDIT_EDITOR");
                        if (l) {
                          l.filepondCallbackBridge ||
                            ((l.outputData = !0),
                            (l.outputFile = !1),
                            (l.filepondCallbackBridge = {
                              onconfirm: l.onconfirm || function () {},
                              oncancel: l.oncancel || function () {},
                            }));
                          n.registerDestroyer(function (e) {
                            var t = e.root;
                            t.ref.buttonEditItem &&
                              t.ref.buttonEditItem.off("click", t.ref.handleEdit),
                              t.ref.editButton &&
                                t.ref.editButton.removeEventListener(
                                  "click",
                                  t.ref.handleEdit
                                );
                          });
                          var c = {
                            EDIT_ITEM: function (e) {
                              var t = e.root,
                                i = e.props,
                                n = e.action,
                                o = i.id,
                                r = n.handleEditorResponse;
                              (l.cropAspectRatio =
                                t.query("GET_IMAGE_CROP_ASPECT_RATIO") ||
                                l.cropAspectRatio),
                                (l.outputCanvasBackgroundColor =
                                  t.query(
                                    "GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"
                                  ) || l.outputCanvasBackgroundColor);
                              var a = t.query("GET_ITEM", o);
                              if (a) {
                                var E = a.file,
                                  c = a.getMetadata("crop"),
                                  u = a.getMetadata("resize"),
                                  f = a.getMetadata("filter") || null,
                                  s = a.getMetadata("filters") || null,
                                  I = a.getMetadata("colors") || null,
                                  _ = a.getMetadata("markup") || null,
                                  p = {
                                    crop: c || {
                                      center: { x: 0.5, y: 0.5 },
                                      flip: { horizontal: !1, vertical: !1 },
                                      zoom: 1,
                                      rotation: 0,
                                      aspectRatio: null,
                                    },
                                    size: u
                                      ? {
                                          upscale: u.upscale,
                                          mode: u.mode,
                                          width: u.size.width,
                                          height: u.size.height,
                                        }
                                      : null,
                                    filter: s ? s.id || s.matrix : f,
                                    color: I,
                                    markup: _,
                                  };
                                (l.onconfirm = function (e) {
                                  var t = e.data,
                                    i = t.crop,
                                    n = t.size,
                                    o = t.filter,
                                    E = t.color,
                                    c = t.colorMatrix,
                                    u = t.markup,
                                    f = {};
                                  if ((i && (f.crop = i), n)) {
                                    var s = (a.getMetadata("resize") || {}).size,
                                      I = { width: n.width, height: n.height };
                                    (I.width && I.height) ||
                                      !s ||
                                      ((I.width = s.width),
                                      (I.height = s.height)),
                                      (I.width || I.height) &&
                                        (f.resize = {
                                          upscale: n.upscale,
                                          mode: n.mode,
                                          size: I,
                                        });
                                  }
                                  u && (f.markup = u),
                                    (f.colors = E),
                                    (f.filters = o),
                                    (f.filter = c),
                                    a.setMetadata(f),
                                    l.filepondCallbackBridge.onconfirm(t, d(a)),
                                    r &&
                                      (l.onclose = function () {
                                        r(!0), (l.onclose = null);
                                      });
                                }),
                                  (l.oncancel = function () {
                                    l.filepondCallbackBridge.oncancel(d(a)),
                                      r &&
                                        (l.onclose = function () {
                                          r(!1), (l.onclose = null);
                                        });
                                  }),
                                  l.open(E, p);
                              }
                            },
                            DID_LOAD_ITEM: function (t) {
                              var i = t.root,
                                a = t.props;
                              if (o("GET_IMAGE_EDIT_ALLOW_EDIT")) {
                                var l = a.id,
                                  d = o("GET_ITEM", l);
                                if (d) {
                                  var c = d.file;
                                  if (e(c))
                                    if (
                                      ((i.ref.handleEdit = function (e) {
                                        e.stopPropagation(),
                                          i.dispatch("EDIT_ITEM", { id: l });
                                      }),
                                      r)
                                    ) {
                                      var u = n.createChildView(E, {
                                        label: "edit",
                                        icon: o("GET_IMAGE_EDIT_ICON_EDIT"),
                                        opacity: 0,
                                      });
                                      u.element.classList.add(
                                        "filepond--action-edit-item"
                                      ),
                                        (u.element.dataset.align = o(
                                          "GET_STYLE_IMAGE_EDIT_BUTTON_EDIT_ITEM_POSITION"
                                        )),
                                        u.on("click", i.ref.handleEdit),
                                        (i.ref.buttonEditItem =
                                          n.appendChildView(u));
                                    } else {
                                      var f = n.element.querySelector(
                                          ".filepond--file-info-main"
                                        ),
                                        s = document.createElement("button");
                                      (s.className =
                                        "filepond--action-edit-item-alt"),
                                        (s.innerHTML =
                                          o("GET_IMAGE_EDIT_ICON_EDIT") +
                                          "<span>edit</span>"),
                                        s.addEventListener(
                                          "click",
                                          i.ref.handleEdit
                                        ),
                                        f.appendChild(s),
                                        (i.ref.editButton = s);
                                    }
                                }
                              }
                            },
                          };
                          if (r) {
                            c.DID_IMAGE_PREVIEW_SHOW = function (e) {
                              var t = e.root;
                              t.ref.buttonEditItem &&
                                (t.ref.buttonEditItem.opacity = 1);
                            };
                          }
                          n.registerWriter(a(c));
                        }
                      }
                    }
                  }),
                  {
                    options: {
                      allowImageEdit: [!0, r.BOOLEAN],
                      styleImageEditButtonEditItemPosition: [
                        "bottom center",
                        r.STRING,
                      ],
                      imageEditInstantEdit: [!1, r.BOOLEAN],
                      imageEditAllowEdit: [!0, r.BOOLEAN],
                      imageEditIconEdit: [
                        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M8.5 17h1.586l7-7L15.5 8.414l-7 7V17zm-1.707-2.707l8-8a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 10.5 19h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707z" fill="currentColor" fill-rule="nonzero"/></svg>',
                        r.STRING,
                      ],
                      imageEditEditor: [null, r.OBJECT],
                    },
                  }
                );
              };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: t })
                ),
              t
            );
          });
        },
        {},
      ],
      CW1o: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var t,
            e = arguments[3];
          !(function (e, n) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = n())
              : "function" == typeof t && t.amd
              ? t(n)
              : ((e = e || self).FilePondPluginImageCrop = n());
          })(this, function () {
            "use strict";
            var t = function (t) {
                return /^image/.test(t.type);
              },
              e = function (e) {
                var n = e.addFilter,
                  o = e.utils,
                  r = o.Type,
                  i = o.isFile,
                  a = o.getNumericAspectRatioFromString,
                  u = function (e, n) {
                    return !(!t(e.file) || !n("GET_ALLOW_IMAGE_CROP"));
                  },
                  c = function (t) {
                    return "object" == typeof t;
                  },
                  f = function (t) {
                    return "number" == typeof t;
                  },
                  p = function (t, e) {
                    return t.setMetadata(
                      "crop",
                      Object.assign({}, t.getMetadata("crop"), e)
                    );
                  };
                return (
                  n("DID_CREATE_ITEM", function (t, e) {
                    var n = e.query;
                    t.extend("setImageCrop", function (e) {
                      if (u(t, n) && c(center))
                        return t.setMetadata("crop", e), e;
                    }),
                      t.extend("setImageCropCenter", function (e) {
                        if (u(t, n) && c(e)) return p(t, { center: e });
                      }),
                      t.extend("setImageCropZoom", function (e) {
                        if (u(t, n) && f(e))
                          return p(t, { zoom: Math.max(1, e) });
                      }),
                      t.extend("setImageCropRotation", function (e) {
                        if (u(t, n) && f(e)) return p(t, { rotation: e });
                      }),
                      t.extend("setImageCropFlip", function (e) {
                        if (u(t, n) && c(e)) return p(t, { flip: e });
                      }),
                      t.extend("setImageCropAspectRatio", function (e) {
                        if (u(t, n) && void 0 !== e) {
                          var o = t.getMetadata("crop"),
                            r = a(e),
                            i = {
                              center: { x: 0.5, y: 0.5 },
                              flip: o
                                ? Object.assign({}, o.flip)
                                : { horizontal: !1, vertical: !1 },
                              rotation: 0,
                              zoom: 1,
                              aspectRatio: r,
                            };
                          return t.setMetadata("crop", i), i;
                        }
                      });
                  }),
                  n("DID_LOAD_ITEM", function (e, n) {
                    var o = n.query;
                    return new Promise(function (n, r) {
                      var u = e.file;
                      if (!i(u) || !t(u) || !o("GET_ALLOW_IMAGE_CROP"))
                        return n(e);
                      if (e.getMetadata("crop")) return n(e);
                      var c = o("GET_IMAGE_CROP_ASPECT_RATIO");
                      e.setMetadata("crop", {
                        center: { x: 0.5, y: 0.5 },
                        flip: { horizontal: !1, vertical: !1 },
                        rotation: 0,
                        zoom: 1,
                        aspectRatio: c ? a(c) : null,
                      }),
                        n(e);
                    });
                  }),
                  {
                    options: {
                      allowImageCrop: [!0, r.BOOLEAN],
                      imageCropAspectRatio: [null, r.STRING],
                    },
                  }
                );
              };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: e })
                ),
              e
            );
          });
        },
        {},
      ],
      GTwC: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var e,
            t = arguments[3];
          !(function (t, n) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = n())
              : "function" == typeof e && e.amd
              ? e(n)
              : ((t = t || self).FilePondPluginImageResize = n());
          })(this, function () {
            "use strict";
            var e = function (e) {
              var t = e.addFilter,
                n = e.utils.Type;
              return (
                t("DID_LOAD_ITEM", function (e, t) {
                  var n = t.query;
                  return new Promise(function (t, i) {
                    var r = e.file;
                    if (
                      !(function (e) {
                        return /^image/.test(e.type);
                      })(r) ||
                      !n("GET_ALLOW_IMAGE_RESIZE")
                    )
                      return t(e);
                    var o = n("GET_IMAGE_RESIZE_MODE"),
                      u = n("GET_IMAGE_RESIZE_TARGET_WIDTH"),
                      a = n("GET_IMAGE_RESIZE_TARGET_HEIGHT"),
                      l = n("GET_IMAGE_RESIZE_UPSCALE");
                    if (null === u && null === a) return t(e);
                    var d,
                      E,
                      s,
                      f = null === u ? a : u,
                      c = null === a ? f : a,
                      I = URL.createObjectURL(r);
                    (d = I),
                      (E = function (n) {
                        if ((URL.revokeObjectURL(I), !n)) return t(e);
                        var i = n.width,
                          r = n.height,
                          u = (e.getMetadata("exif") || {}).orientation || -1;
                        if (u >= 5 && u <= 8) {
                          var a = [r, i];
                          (i = a[0]), (r = a[1]);
                        }
                        return i === f && r === c
                          ? t(e)
                          : i <= f && r <= c && !l
                          ? t(e)
                          : (e.setMetadata("resize", {
                              mode: o,
                              upscale: l,
                              size: { width: f, height: c },
                            }),
                            void t(e));
                      }),
                      ((s = new Image()).onload = function () {
                        var e = s.naturalWidth,
                          t = s.naturalHeight;
                        (s = null), E({ width: e, height: t });
                      }),
                      (s.onerror = function () {
                        return E(null);
                      }),
                      (s.src = d);
                  });
                }),
                {
                  options: {
                    allowImageResize: [!0, n.BOOLEAN],
                    imageResizeMode: ["cover", n.STRING],
                    imageResizeUpscale: [!0, n.BOOLEAN],
                    imageResizeTargetWidth: [null, n.INT],
                    imageResizeTargetHeight: [null, n.INT],
                  },
                }
              );
            };
            return (
              "undefined" != typeof window &&
                void 0 !== window.document &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: e })
                ),
              e
            );
          });
        },
        {},
      ],
      wsUY: [
        function (require, module, exports) {
          var define;
          var global = arguments[3];
          var t,
            e = arguments[3];
          !(function (e, n) {
            "object" == typeof exports && "undefined" != typeof module
              ? (module.exports = n())
              : "function" == typeof t && t.amd
              ? t(n)
              : ((e = e || self).FilePondPluginImageTransform = n());
          })(this, function () {
            "use strict";
            var t = { jpeg: "jpg", "svg+xml": "svg" },
              e = {
                1: function () {
                  return [1, 0, 0, 1, 0, 0];
                },
                2: function (t) {
                  return [-1, 0, 0, 1, t, 0];
                },
                3: function (t, e) {
                  return [-1, 0, 0, -1, t, e];
                },
                4: function (t, e) {
                  return [1, 0, 0, -1, 0, e];
                },
                5: function () {
                  return [0, 1, 1, 0, 0, 0];
                },
                6: function (t, e) {
                  return [0, 1, -1, 0, e, 0];
                },
                7: function (t, e) {
                  return [0, -1, -1, 0, e, t];
                },
                8: function (t) {
                  return [0, -1, 1, 0, 0, t];
                },
              },
              n = function (t, e) {
                return { x: t, y: e };
              },
              r = function (t, e) {
                return n(t.x - e.x, t.y - e.y);
              },
              i = function (t, e) {
                return Math.sqrt(
                  (function (t, e) {
                    return (function (t, e) {
                      return t.x * e.x + t.y * e.y;
                    })(r(t, e), r(t, e));
                  })(t, e)
                );
              },
              a = function (t, e) {
                var r = t,
                  i = e,
                  a = 1.5707963267948966 - e,
                  o = Math.sin(1.5707963267948966),
                  u = Math.sin(i),
                  c = Math.sin(a),
                  l = Math.cos(a),
                  h = r / o;
                return n(l * (h * u), l * (h * c));
              },
              o = function (t, e) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { x: 0.5, y: 0.5 },
                  u = o.x > 0.5 ? 1 - o.x : o.x,
                  c = o.y > 0.5 ? 1 - o.y : o.y,
                  l = 2 * u * t.width,
                  h = 2 * c * t.height,
                  f = (function (t, e) {
                    var r = t.width,
                      o = t.height,
                      u = a(r, e),
                      c = a(o, e),
                      l = n(t.x + Math.abs(u.x), t.y - Math.abs(u.y)),
                      h = n(t.x + t.width + Math.abs(c.y), t.y + Math.abs(c.x)),
                      f = n(t.x - Math.abs(c.y), t.y + t.height - Math.abs(c.x));
                    return { width: i(l, h), height: i(l, f) };
                  })(e, r);
                return Math.max(f.width / l, f.height / h);
              },
              u = function (t, e) {
                var n = t.width,
                  r = n * e;
                return (
                  r > t.height && (n = (r = t.height) / e),
                  {
                    x: 0.5 * (t.width - n),
                    y: 0.5 * (t.height - r),
                    width: n,
                    height: r,
                  }
                );
              },
              c = function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r = t.height / t.width,
                  i = e,
                  a = 1,
                  o = r;
                o > i && (a = (o = i) / r);
                var u = Math.max(1 / a, i / o),
                  c = t.width / (n * u * a);
                return { width: c, height: c * e };
              },
              l = function (t) {
                (t.width = 1),
                  (t.height = 1),
                  t.getContext("2d").clearRect(0, 0, 1, 1);
              },
              h = function (t) {
                return t && (t.horizontal || t.vertical);
              },
              f = function (t, n, r) {
                if (n <= 1 && !h(r))
                  return (
                    (t.width = t.naturalWidth), (t.height = t.naturalHeight), t
                  );
                var i = document.createElement("canvas"),
                  a = t.naturalWidth,
                  o = t.naturalHeight,
                  u = n >= 5 && n <= 8;
                u
                  ? ((i.width = o), (i.height = a))
                  : ((i.width = a), (i.height = o));
                var c = i.getContext("2d");
                if (
                  (n &&
                    c.transform.apply(
                      c,
                      (function (t, n, r) {
                        return -1 === r && (r = 1), e[r](t, n);
                      })(a, o, n)
                    ),
                  h(r))
                ) {
                  var l = [1, 0, 0, 1, 0, 0];
                  ((!u && r.horizontal) || u & r.vertical) &&
                    ((l[0] = -1), (l[4] = a)),
                    ((!u && r.vertical) || (u && r.horizontal)) &&
                      ((l[3] = -1), (l[5] = o)),
                    c.transform.apply(c, l);
                }
                return c.drawImage(t, 0, 0, a, o), i;
              };
            "undefined" != typeof window &&
              void 0 !== window.document &&
              (HTMLCanvasElement.prototype.toBlob ||
                Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
                  value: function (t, e, n) {
                    var r = this.toDataURL(e, n).split(",")[1];
                    setTimeout(function () {
                      for (
                        var n = atob(r),
                          i = n.length,
                          a = new Uint8Array(i),
                          o = 0;
                        o < i;
                        o++
                      )
                        a[o] = n.charCodeAt(o);
                      t(new Blob([a], { type: e || "image/png" }));
                    });
                  },
                }));
            var s = function (t, e) {
                return y(t.x * e, t.y * e);
              },
              d = function (t, e) {
                return y(t.x + e.x, t.y + e.y);
              },
              g = function (t) {
                var e = Math.sqrt(t.x * t.x + t.y * t.y);
                return 0 === e ? { x: 0, y: 0 } : y(t.x / e, t.y / e);
              },
              v = function (t, e, n) {
                var r = Math.cos(e),
                  i = Math.sin(e),
                  a = y(t.x - n.x, t.y - n.y);
                return y(n.x + r * a.x - i * a.y, n.y + i * a.x + r * a.y);
              },
              y = function () {
                return {
                  x:
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  y:
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                };
              },
              m = function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r = arguments.length > 3 ? arguments[3] : void 0;
                return "string" == typeof t
                  ? parseFloat(t) * n
                  : "number" == typeof t
                  ? t * (r ? e[r] : Math.min(e.width, e.height))
                  : void 0;
              },
              p = function (t, e, n) {
                var r = t.borderStyle || t.lineStyle || "solid",
                  i = t.backgroundColor || t.fontColor || "transparent",
                  a = t.borderColor || t.lineColor || "transparent",
                  o = m(t.borderWidth || t.lineWidth, e, n);
                return {
                  "stroke-linecap": t.lineCap || "round",
                  "stroke-linejoin": t.lineJoin || "round",
                  "stroke-width": o || 0,
                  "stroke-dasharray":
                    "string" == typeof r
                      ? ""
                      : r
                          .map(function (t) {
                            return m(t, e, n);
                          })
                          .join(","),
                  stroke: a,
                  fill: i,
                  opacity: t.opacity || 1,
                };
              },
              w = function (t) {
                return null != t;
              },
              x = function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r = m(t.x, e, n, "width") || m(t.left, e, n, "width"),
                  i = m(t.y, e, n, "height") || m(t.top, e, n, "height"),
                  a = m(t.width, e, n, "width"),
                  o = m(t.height, e, n, "height"),
                  u = m(t.right, e, n, "width"),
                  c = m(t.bottom, e, n, "height");
                return (
                  w(i) || (i = w(o) && w(c) ? e.height - o - c : c),
                  w(r) || (r = w(a) && w(u) ? e.width - a - u : u),
                  w(a) || (a = w(r) && w(u) ? e.width - r - u : 0),
                  w(o) || (o = w(i) && w(c) ? e.height - i - c : 0),
                  { x: r || 0, y: i || 0, width: a || 0, height: o || 0 }
                );
              },
              M = function (t, e) {
                return Object.keys(e).forEach(function (n) {
                  return t.setAttribute(n, e[n]);
                });
              },
              T = function (t, e) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", t);
                return e && M(n, e), n;
              },
              b = { contain: "xMidYMid meet", cover: "xMidYMid slice" },
              A = { left: "start", center: "middle", right: "end" },
              R = function (t) {
                return function (e) {
                  return T(t, { id: e.id });
                };
              },
              O = {
                image: function (t) {
                  var e = T("image", {
                    id: t.id,
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    opacity: "0",
                  });
                  return (
                    (e.onload = function () {
                      e.setAttribute("opacity", t.opacity || 1);
                    }),
                    e.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "xlink:href",
                      t.src
                    ),
                    e
                  );
                },
                rect: R("rect"),
                ellipse: R("ellipse"),
                text: R("text"),
                path: R("path"),
                line: function (t) {
                  var e = T("g", {
                      id: t.id,
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                    n = T("line");
                  e.appendChild(n);
                  var r = T("path");
                  e.appendChild(r);
                  var i = T("path");
                  return e.appendChild(i), e;
                },
              },
              _ = {
                rect: function (t) {
                  return M(t, Object.assign({}, t.rect, t.styles));
                },
                ellipse: function (t) {
                  var e = t.rect.x + 0.5 * t.rect.width,
                    n = t.rect.y + 0.5 * t.rect.height,
                    r = 0.5 * t.rect.width,
                    i = 0.5 * t.rect.height;
                  return M(
                    t,
                    Object.assign({ cx: e, cy: n, rx: r, ry: i }, t.styles)
                  );
                },
                image: function (t, e) {
                  M(
                    t,
                    Object.assign({}, t.rect, t.styles, {
                      preserveAspectRatio: b[e.fit] || "none",
                    })
                  );
                },
                text: function (t, e, n, r) {
                  var i = m(e.fontSize, n, r),
                    a = e.fontFamily || "sans-serif",
                    o = e.fontWeight || "normal",
                    u = A[e.textAlign] || "start";
                  M(
                    t,
                    Object.assign({}, t.rect, t.styles, {
                      "stroke-width": 0,
                      "font-weight": o,
                      "font-size": i,
                      "font-family": a,
                      "text-anchor": u,
                    })
                  ),
                    t.text !== e.text &&
                      ((t.text = e.text),
                      (t.textContent = e.text.length ? e.text : " "));
                },
                path: function (t, e, n, r) {
                  var i;
                  M(
                    t,
                    Object.assign({}, t.styles, {
                      fill: "none",
                      d:
                        ((i = e.points.map(function (t) {
                          return {
                            x: m(t.x, n, r, "width"),
                            y: m(t.y, n, r, "height"),
                          };
                        })),
                        i
                          .map(function (t, e) {
                            return ""
                              .concat(0 === e ? "M" : "L", " ")
                              .concat(t.x, " ")
                              .concat(t.y);
                          })
                          .join(" ")),
                    })
                  );
                },
                line: function (t, e, n, r) {
                  M(t, Object.assign({}, t.rect, t.styles, { fill: "none" }));
                  var i = t.childNodes[0],
                    a = t.childNodes[1],
                    o = t.childNodes[2],
                    u = t.rect,
                    c = {
                      x: t.rect.x + t.rect.width,
                      y: t.rect.y + t.rect.height,
                    };
                  if (
                    (M(i, { x1: u.x, y1: u.y, x2: c.x, y2: c.y }),
                    e.lineDecoration)
                  ) {
                    (a.style.display = "none"), (o.style.display = "none");
                    var l = g({ x: c.x - u.x, y: c.y - u.y }),
                      h = m(0.05, n, r);
                    if (-1 !== e.lineDecoration.indexOf("arrow-begin")) {
                      var f = s(l, h),
                        y = d(u, f),
                        p = v(u, 2, y),
                        w = v(u, -2, y);
                      M(a, {
                        style: "display:block;",
                        d: "M"
                          .concat(p.x, ",")
                          .concat(p.y, " L")
                          .concat(u.x, ",")
                          .concat(u.y, " L")
                          .concat(w.x, ",")
                          .concat(w.y),
                      });
                    }
                    if (-1 !== e.lineDecoration.indexOf("arrow-end")) {
                      var x = s(l, -h),
                        T = d(c, x),
                        b = v(c, 2, T),
                        A = v(c, -2, T);
                      M(o, {
                        style: "display:block;",
                        d: "M"
                          .concat(b.x, ",")
                          .concat(b.y, " L")
                          .concat(c.x, ",")
                          .concat(c.y, " L")
                          .concat(A.x, ",")
                          .concat(A.y),
                      });
                    }
                  }
                },
              },
              I = function (t, e) {
                return t[1].zIndex > e[1].zIndex
                  ? 1
                  : t[1].zIndex < e[1].zIndex
                  ? -1
                  : 0;
              },
              E = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0;
                return new Promise(function (i) {
                  var a = r.background,
                    c = void 0 === a ? null : a,
                    l = new FileReader();
                  (l.onloadend = function () {
                    var t = l.result,
                      r = document.createElement("div");
                    (r.style.cssText =
                      "position:absolute;pointer-events:none;width:0;height:0;visibility:hidden;"),
                      (r.innerHTML = t);
                    var a = r.querySelector("svg");
                    document.body.appendChild(r);
                    var h = a.getBBox();
                    r.parentNode.removeChild(r);
                    var f = r.querySelector("title"),
                      s = a.getAttribute("viewBox") || "",
                      d = a.getAttribute("width") || "",
                      g = a.getAttribute("height") || "",
                      v = parseFloat(d) || null,
                      y = parseFloat(g) || null,
                      m = (d.match(/[a-z]+/) || [])[0] || "",
                      w = (g.match(/[a-z]+/) || [])[0] || "",
                      M = s.split(" ").map(parseFloat),
                      T = M.length
                        ? { x: M[0], y: M[1], width: M[2], height: M[3] }
                        : h,
                      b = null != v ? v : T.width,
                      A = null != y ? y : T.height;
                    (a.style.overflow = "visible"),
                      a.setAttribute("width", b),
                      a.setAttribute("height", A);
                    var R = "";
                    if (n && n.length) {
                      var E = { width: b, height: A };
                      (R = n.sort(I).reduce(function (t, e) {
                        var n,
                          r,
                          i = ((n = e[0]), (r = e[1]), O[n](r));
                        return (
                          (function (t, e, n, r, i) {
                            "path" !== e && (t.rect = x(n, r, i)),
                              (t.styles = p(n, r, i)),
                              _[e](t, n, r, i);
                          })(i, e[0], e[1], E),
                          i.removeAttribute("id"),
                          1 === i.getAttribute("opacity") &&
                            i.removeAttribute("opacity"),
                          t + "\n" + i.outerHTML + "\n"
                        );
                      }, "")),
                        (R = "\n\n<g>".concat(
                          R.replace(/&nbsp;/g, " "),
                          "</g>\n\n"
                        ));
                    }
                    var N = e.aspectRatio || A / b,
                      L = b,
                      S = L * N,
                      C = void 0 === e.scaleToFit || e.scaleToFit,
                      k = e.center ? e.center.x : 0.5,
                      U = e.center ? e.center.y : 0.5,
                      P = o(
                        { width: b, height: A },
                        u({ width: L, height: S }, N),
                        e.rotation,
                        C ? { x: k, y: U } : { x: 0.5, y: 0.5 }
                      ),
                      B = e.zoom * P,
                      F = e.rotation * (180 / Math.PI),
                      G = { x: 0.5 * L, y: 0.5 * S },
                      j = { x: G.x - b * k, y: G.y - A * U },
                      z = [
                        "rotate("
                          .concat(F, " ")
                          .concat(G.x, " ")
                          .concat(G.y, ")"),
                        "translate(".concat(G.x, " ").concat(G.y, ")"),
                        "scale(".concat(B, ")"),
                        "translate(".concat(-G.x, " ").concat(-G.y, ")"),
                        "translate(".concat(j.x, " ").concat(j.y, ")"),
                      ],
                      D = e.flip && e.flip.horizontal,
                      q = e.flip && e.flip.vertical,
                      H = [
                        "scale(".concat(D ? -1 : 1, " ").concat(q ? -1 : 1, ")"),
                        "translate("
                          .concat(D ? -b : 0, " ")
                          .concat(q ? -A : 0, ")"),
                      ],
                      V = '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="'
                        .concat(L)
                        .concat(m, '" height="')
                        .concat(S)
                        .concat(w, '" \nviewBox="0 0 ')
                        .concat(L, " ")
                        .concat(S, '" ')
                        .concat(
                          c ? 'style="background:' + c + '" ' : "",
                          '\npreserveAspectRatio="xMinYMin"\nxmlns:xlink="http://www.w3.org/1999/xlink"\nxmlns="http://www.w3.org/2000/svg">\n\x3c!-- Generated by PQINA - https://pqina.nl/ --\x3e\n<title>'
                        )
                        .concat(
                          f ? f.textContent : "",
                          '</title>\n<g transform="'
                        )
                        .concat(z.join(" "), '">\n<g transform="')
                        .concat(H.join(" "), '">\n')
                        .concat(a.outerHTML)
                        .concat(R, "\n</g>\n</g>\n</svg>");
                    i(V);
                  }),
                    l.readAsText(t);
                });
              },
              N = function () {
                var t = {
                    resize: function (t, e) {
                      var n = e.mode,
                        r = void 0 === n ? "contain" : n,
                        i = e.upscale,
                        o = void 0 !== i && i,
                        l = e.width,
                        h = e.height,
                        f = e.matrix;
                      if (((f = !f || u(f) ? null : f), !l && !h)) return c(t, f);
                      null === l ? (l = h) : null === h && (h = l);
                      if ("force" !== r) {
                        var s = l / t.width,
                          d = h / t.height,
                          g = 1;
                        if (
                          ("cover" === r
                            ? (g = Math.max(s, d))
                            : "contain" === r && (g = Math.min(s, d)),
                          g > 1 && !1 === o)
                        )
                          return c(t, f);
                        (l = t.width * g), (h = t.height * g);
                      }
                      for (
                        var v = t.width,
                          y = t.height,
                          m = Math.round(l),
                          p = Math.round(h),
                          w = t.data,
                          x = new Uint8ClampedArray(m * p * 4),
                          M = v / m,
                          T = y / p,
                          b = Math.ceil(0.5 * M),
                          A = Math.ceil(0.5 * T),
                          R = 0;
                        R < p;
                        R++
                      )
                        for (var O = 0; O < m; O++) {
                          for (
                            var _ = 4 * (O + R * m),
                              I = 0,
                              E = 0,
                              N = 0,
                              L = 0,
                              S = 0,
                              C = 0,
                              k = 0,
                              U = (R + 0.5) * T,
                              P = Math.floor(R * T);
                            P < (R + 1) * T;
                            P++
                          )
                            for (
                              var B = Math.abs(U - (P + 0.5)) / A,
                                F = (O + 0.5) * M,
                                G = B * B,
                                j = Math.floor(O * M);
                              j < (O + 1) * M;
                              j++
                            ) {
                              var z = Math.abs(F - (j + 0.5)) / b,
                                D = Math.sqrt(G + z * z);
                              if (
                                D >= -1 &&
                                D <= 1 &&
                                (I = 2 * D * D * D - 3 * D * D + 1) > 0
                              ) {
                                var q = w[(z = 4 * (j + P * v)) + 3];
                                (k += I * q),
                                  (N += I),
                                  q < 255 && (I = (I * q) / 250),
                                  (L += I * w[z]),
                                  (S += I * w[z + 1]),
                                  (C += I * w[z + 2]),
                                  (E += I);
                              }
                            }
                          (x[_] = L / E),
                            (x[_ + 1] = S / E),
                            (x[_ + 2] = C / E),
                            (x[_ + 3] = k / N),
                            f && a(_, x, f);
                        }
                      return { data: x, width: m, height: p };
                    },
                    filter: c,
                  },
                  e = function (e, n) {
                    var r = e.transforms,
                      i = null;
                    if (
                      (r.forEach(function (t) {
                        "filter" === t.type && (i = t);
                      }),
                      i)
                    ) {
                      var a = null;
                      r.forEach(function (t) {
                        "resize" === t.type && (a = t);
                      }),
                        a &&
                          ((a.data.matrix = i.data),
                          (r = r.filter(function (t) {
                            return "filter" !== t.type;
                          })));
                    }
                    n(
                      (function (e, n) {
                        return (
                          e.forEach(function (e) {
                            n = t[e.type](n, e.data);
                          }),
                          n
                        );
                      })(r, e.imageData)
                    );
                  };
                self.onmessage = function (t) {
                  e(t.data.message, function (e) {
                    self.postMessage({ id: t.data.id, message: e }, [
                      e.data.buffer,
                    ]);
                  });
                };
                var n = 1,
                  r = 1,
                  i = 1;
                function a(t, e, a) {
                  var o = e[t] / 255,
                    u = e[t + 1] / 255,
                    c = e[t + 2] / 255,
                    l = e[t + 3] / 255,
                    h = o * a[0] + u * a[1] + c * a[2] + l * a[3] + a[4],
                    f = o * a[5] + u * a[6] + c * a[7] + l * a[8] + a[9],
                    s = o * a[10] + u * a[11] + c * a[12] + l * a[13] + a[14],
                    d = o * a[15] + u * a[16] + c * a[17] + l * a[18] + a[19],
                    g = Math.max(0, h * d) + n * (1 - d),
                    v = Math.max(0, f * d) + r * (1 - d),
                    y = Math.max(0, s * d) + i * (1 - d);
                  (e[t] = 255 * Math.max(0, Math.min(1, g))),
                    (e[t + 1] = 255 * Math.max(0, Math.min(1, v))),
                    (e[t + 2] = 255 * Math.max(0, Math.min(1, y)));
                }
                var o = self.JSON.stringify([
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                ]);
                function u(t) {
                  return self.JSON.stringify(t || []) === o;
                }
                function c(t, e) {
                  if (!e || u(e)) return t;
                  for (
                    var a = t.data,
                      o = a.length,
                      c = e[0],
                      l = e[1],
                      h = e[2],
                      f = e[3],
                      s = e[4],
                      d = e[5],
                      g = e[6],
                      v = e[7],
                      y = e[8],
                      m = e[9],
                      p = e[10],
                      w = e[11],
                      x = e[12],
                      M = e[13],
                      T = e[14],
                      b = e[15],
                      A = e[16],
                      R = e[17],
                      O = e[18],
                      _ = e[19],
                      I = 0,
                      E = 0,
                      N = 0,
                      L = 0,
                      S = 0,
                      C = 0,
                      k = 0,
                      U = 0,
                      P = 0,
                      B = 0,
                      F = 0,
                      G = 0;
                    I < o;
                    I += 4
                  )
                    (C =
                      (E = a[I] / 255) * c +
                      (N = a[I + 1] / 255) * l +
                      (L = a[I + 2] / 255) * h +
                      (S = a[I + 3] / 255) * f +
                      s),
                      (k = E * d + N * g + L * v + S * y + m),
                      (U = E * p + N * w + L * x + S * M + T),
                      (P = E * b + N * A + L * R + S * O + _),
                      (B = Math.max(0, C * P) + n * (1 - P)),
                      (F = Math.max(0, k * P) + r * (1 - P)),
                      (G = Math.max(0, U * P) + i * (1 - P)),
                      (a[I] = 255 * Math.max(0, Math.min(1, B))),
                      (a[I + 1] = 255 * Math.max(0, Math.min(1, F))),
                      (a[I + 2] = 255 * Math.max(0, Math.min(1, G)));
                  return t;
                }
              },
              L = function (t, e) {
                if (1165519206 === t.getUint32(e + 4, !1)) {
                  e += 4;
                  var n = 18761 === t.getUint16((e += 6), !1);
                  e += t.getUint32(e + 4, n);
                  var r = t.getUint16(e, n);
                  e += 2;
                  for (var i = 0; i < r; i++)
                    if (274 === t.getUint16(e + 12 * i, n))
                      return t.setUint16(e + 12 * i + 8, 1, n), !0;
                  return !1;
                }
              },
              S = function (t) {
                return new Promise(function (e) {
                  var n = new FileReader();
                  (n.onload = function () {
                    return e(
                      (function (t) {
                        var e = new DataView(t);
                        if (65496 !== e.getUint16(0)) return null;
                        for (
                          var n, r, i = 2, a = !1;
                          i < e.byteLength &&
                          ((n = e.getUint16(i, !1)),
                          (r = e.getUint16(i + 2, !1) + 2),
                          (n >= 65504 && n <= 65519) || 65534 === n) &&
                          (a || (a = L(e, i)), !(i + r > e.byteLength));
  
                        )
                          i += r;
                        return t.slice(0, i);
                      })(n.result) || null
                    );
                  }),
                    n.readAsArrayBuffer(t.slice(0, 262144));
                });
              },
              C = function (t, e) {
                var n = (window.BlobBuilder =
                  window.BlobBuilder ||
                  window.WebKitBlobBuilder ||
                  window.MozBlobBuilder ||
                  window.MSBlobBuilder);
                if (n) {
                  var r = new n();
                  return r.append(t), r.getBlob(e);
                }
                return new Blob([t], { type: e });
              },
              k = function (t) {
                var e = new Blob(["(", t.toString(), ")()"], {
                    type: "application/javascript",
                  }),
                  n = URL.createObjectURL(e),
                  r = new Worker(n),
                  i = [];
                return {
                  transfer: function () {},
                  post: function (t, e, n) {
                    var a = Math.random().toString(36).substr(2, 9);
                    (i[a] = e),
                      (r.onmessage = function (t) {
                        var e = i[t.data.id];
                        e && (e(t.data.message), delete i[t.data.id]);
                      }),
                      r.postMessage({ id: a, message: t }, n);
                  },
                  terminate: function () {
                    r.terminate(), URL.revokeObjectURL(n);
                  },
                };
              },
              U = function (t, e) {
                return new Promise(function (n) {
                  var r,
                    i = { width: t.width, height: t.height },
                    a = t.getContext("2d"),
                    o = e.sort(I).map(function (t) {
                      return function () {
                        return new Promise(function (e) {
                          F[t[0]](a, i, t[1], e) && e();
                        });
                      };
                    });
                  ((r = o),
                  r.reduce(function (t, e) {
                    return t.then(function (t) {
                      return e().then(Array.prototype.concat.bind(t));
                    });
                  }, Promise.resolve([]))).then(function () {
                    return n(t);
                  });
                });
              },
              P = function (t, e) {
                t.beginPath(),
                  (t.lineCap = e["stroke-linecap"]),
                  (t.lineJoin = e["stroke-linejoin"]),
                  (t.lineWidth = e["stroke-width"]),
                  e["stroke-dasharray"].length &&
                    t.setLineDash(e["stroke-dasharray"].split(",")),
                  (t.fillStyle = e.fill),
                  (t.strokeStyle = e.stroke),
                  (t.globalAlpha = e.opacity || 1);
              },
              B = function (t) {
                t.fill(), t.stroke(), (t.globalAlpha = 1);
              },
              F = {
                rect: function (t, e, n) {
                  var r = x(n, e),
                    i = p(n, e);
                  return P(t, i), t.rect(r.x, r.y, r.width, r.height), B(t), !0;
                },
                ellipse: function (t, e, n) {
                  var r = x(n, e),
                    i = p(n, e);
                  P(t, i);
                  var a = r.x,
                    o = r.y,
                    u = r.width,
                    c = r.height,
                    l = (u / 2) * 0.5522848,
                    h = (c / 2) * 0.5522848,
                    f = a + u,
                    s = o + c,
                    d = a + u / 2,
                    g = o + c / 2;
                  return (
                    t.moveTo(a, g),
                    t.bezierCurveTo(a, g - h, d - l, o, d, o),
                    t.bezierCurveTo(d + l, o, f, g - h, f, g),
                    t.bezierCurveTo(f, g + h, d + l, s, d, s),
                    t.bezierCurveTo(d - l, s, a, g + h, a, g),
                    B(t),
                    !0
                  );
                },
                image: function (t, e, n, r) {
                  var i = x(n, e),
                    a = p(n, e);
                  P(t, a);
                  var o = new Image();
                  new URL(n.src, window.location.href).origin !==
                    window.location.origin && (o.crossOrigin = ""),
                    (o.onload = function () {
                      if ("cover" === n.fit) {
                        var e = i.width / i.height,
                          a = e > 1 ? o.width : o.height * e,
                          u = e > 1 ? o.width / e : o.height,
                          c = 0.5 * o.width - 0.5 * a,
                          l = 0.5 * o.height - 0.5 * u;
                        t.drawImage(o, c, l, a, u, i.x, i.y, i.width, i.height);
                      } else if ("contain" === n.fit) {
                        var h = Math.min(i.width / o.width, i.height / o.height),
                          f = h * o.width,
                          s = h * o.height,
                          d = i.x + 0.5 * i.width - 0.5 * f,
                          g = i.y + 0.5 * i.height - 0.5 * s;
                        t.drawImage(o, 0, 0, o.width, o.height, d, g, f, s);
                      } else
                        t.drawImage(
                          o,
                          0,
                          0,
                          o.width,
                          o.height,
                          i.x,
                          i.y,
                          i.width,
                          i.height
                        );
                      B(t), r();
                    }),
                    (o.src = n.src);
                },
                text: function (t, e, n) {
                  var r = x(n, e),
                    i = p(n, e);
                  P(t, i);
                  var a = m(n.fontSize, e),
                    o = n.fontFamily || "sans-serif",
                    u = n.fontWeight || "normal",
                    c = n.textAlign || "left";
                  return (
                    (t.font = "".concat(u, " ").concat(a, "px ").concat(o)),
                    (t.textAlign = c),
                    t.fillText(n.text, r.x, r.y),
                    B(t),
                    !0
                  );
                },
                line: function (t, e, n) {
                  var r = x(n, e),
                    i = p(n, e);
                  P(t, i), t.beginPath();
                  var a = { x: r.x, y: r.y },
                    o = { x: r.x + r.width, y: r.y + r.height };
                  t.moveTo(a.x, a.y), t.lineTo(o.x, o.y);
                  var u = g({ x: o.x - a.x, y: o.y - a.y }),
                    c = 0.04 * Math.min(e.width, e.height);
                  if (-1 !== n.lineDecoration.indexOf("arrow-begin")) {
                    var l = s(u, c),
                      h = d(a, l),
                      f = v(a, 2, h),
                      y = v(a, -2, h);
                    t.moveTo(f.x, f.y), t.lineTo(a.x, a.y), t.lineTo(y.x, y.y);
                  }
                  if (-1 !== n.lineDecoration.indexOf("arrow-end")) {
                    var m = s(u, -c),
                      w = d(o, m),
                      M = v(o, 2, w),
                      T = v(o, -2, w);
                    t.moveTo(M.x, M.y), t.lineTo(o.x, o.y), t.lineTo(T.x, T.y);
                  }
                  return B(t), !0;
                },
                path: function (t, e, n) {
                  var r = p(n, e);
                  P(t, r), t.beginPath();
                  var i = n.points.map(function (t) {
                    return {
                      x: m(t.x, e, 1, "width"),
                      y: m(t.y, e, 1, "height"),
                    };
                  });
                  t.moveTo(i[0].x, i[0].y);
                  for (var a = i.length, o = 1; o < a; o++)
                    t.lineTo(i[o].x, i[o].y);
                  return B(t), !0;
                },
              },
              G = function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return new Promise(function (r, i) {
                  if (
                    !t ||
                    !(function (t) {
                      return /^image/.test(t.type);
                    })(t)
                  )
                    return i({ status: "not an image file", file: t });
                  var a = n.stripImageHead,
                    h = n.beforeCreateBlob,
                    s = n.afterCreateBlob,
                    d = n.canvasMemoryLimit,
                    g = e.crop,
                    v = e.size,
                    y = e.filter,
                    m = e.markup,
                    p = e.output,
                    w =
                      e.image && e.image.orientation
                        ? Math.max(1, Math.min(8, e.image.orientation))
                        : null,
                    x = p && p.quality,
                    M = null === x ? null : x / 100,
                    T = (p && p.type) || null,
                    b = (p && p.background) || null,
                    A = [];
                  !v ||
                    ("number" != typeof v.width && "number" != typeof v.height) ||
                    A.push({ type: "resize", data: v }),
                    y && 20 === y.length && A.push({ type: "filter", data: y });
                  var R = function (t) {
                      var e = s ? s(t) : t;
                      Promise.resolve(e).then(r);
                    },
                    O = function (e, n) {
                      var r = (function (t) {
                          var e = document.createElement("canvas");
                          return (
                            (e.width = t.width),
                            (e.height = t.height),
                            e.getContext("2d").putImageData(t, 0, 0),
                            e
                          );
                        })(e),
                        o = m.length ? U(r, m) : r;
                      Promise.resolve(o).then(function (e) {
                        (function (t, e) {
                          var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : null;
                          return new Promise(function (r) {
                            var i = n ? n(t) : t;
                            Promise.resolve(i).then(function (t) {
                              t.toBlob(r, e.type, e.quality);
                            });
                          });
                        })(e, n, h)
                          .then(function (n) {
                            if ((l(e), a)) return R(n);
                            S(t).then(function (t) {
                              null !== t &&
                                (n = new Blob([t, n.slice(20)], {
                                  type: n.type,
                                })),
                                R(n);
                            });
                          })
                          .catch(i);
                      });
                    };
                  if (/svg/.test(t.type) && null === T)
                    return E(t, g, m, { background: b }).then(function (t) {
                      r(C(t, "image/svg+xml"));
                    });
                  var _ = URL.createObjectURL(t);
                  (function (t) {
                    return new Promise(function (e, n) {
                      var r = new Image();
                      (r.onload = function () {
                        e(r);
                      }),
                        (r.onerror = function (t) {
                          n(t);
                        }),
                        (r.src = t);
                    });
                  })(_)
                    .then(function (e) {
                      URL.revokeObjectURL(_);
                      var n = (function (t, e) {
                          var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : {},
                            i = r.canvasMemoryLimit,
                            a = r.background,
                            h = void 0 === a ? null : a,
                            s = n.zoom || 1,
                            d = f(t, e, n.flip),
                            g = { width: d.width, height: d.height },
                            v = n.aspectRatio || g.height / g.width,
                            y = c(g, v, s);
                          if (i) {
                            var m = y.width * y.height;
                            if (m > i) {
                              var p = Math.sqrt(i) / Math.sqrt(m);
                              (g.width = Math.floor(g.width * p)),
                                (g.height = Math.floor(g.height * p)),
                                (y = c(g, v, s));
                            }
                          }
                          var w = document.createElement("canvas"),
                            x = { x: 0.5 * y.width, y: 0.5 * y.height },
                            M = {
                              x: 0,
                              y: 0,
                              width: y.width,
                              height: y.height,
                              center: x,
                            },
                            T = void 0 === n.scaleToFit || n.scaleToFit,
                            b =
                              s *
                              o(
                                g,
                                u(M, v),
                                n.rotation,
                                T ? n.center : { x: 0.5, y: 0.5 }
                              );
                          (w.width = Math.round(y.width / b)),
                            (w.height = Math.round(y.height / b)),
                            (x.x /= b),
                            (x.y /= b);
                          var A = x.x - g.width * (n.center ? n.center.x : 0.5),
                            R = x.y - g.height * (n.center ? n.center.y : 0.5),
                            O = w.getContext("2d");
                          h &&
                            ((O.fillStyle = h),
                            O.fillRect(0, 0, w.width, w.height)),
                            O.translate(x.x, x.y),
                            O.rotate(n.rotation || 0),
                            O.drawImage(d, A - x.x, R - x.y, g.width, g.height);
                          var _ = O.getImageData(0, 0, w.width, w.height);
                          return l(w), _;
                        })(e, w, g, { canvasMemoryLimit: d, background: b }),
                        r = { quality: M, type: T || t.type };
                      if (!A.length) return O(n, r);
                      var i = k(N);
                      i.post(
                        { transforms: A, imageData: n },
                        function (t) {
                          O(
                            (function (t) {
                              var e;
                              try {
                                e = new ImageData(t.width, t.height);
                              } catch (n) {
                                e = document
                                  .createElement("canvas")
                                  .getContext("2d")
                                  .createImageData(t.width, t.height);
                              }
                              return e.data.set(t.data), e;
                            })(t),
                            r
                          ),
                            i.terminate();
                        },
                        [n.data.buffer]
                      );
                    })
                    .catch(i);
                });
              };
            function j(t) {
              this.wrapped = t;
            }
            function z(t) {
              var e, n;
              function r(e, n) {
                try {
                  var a = t[e](n),
                    o = a.value,
                    u = o instanceof j;
                  Promise.resolve(u ? o.wrapped : o).then(
                    function (t) {
                      u ? r("next", t) : i(a.done ? "return" : "normal", t);
                    },
                    function (t) {
                      r("throw", t);
                    }
                  );
                } catch (c) {
                  i("throw", c);
                }
              }
              function i(t, i) {
                switch (t) {
                  case "return":
                    e.resolve({ value: i, done: !0 });
                    break;
                  case "throw":
                    e.reject(i);
                    break;
                  default:
                    e.resolve({ value: i, done: !1 });
                }
                (e = e.next) ? r(e.key, e.arg) : (n = null);
              }
              (this._invoke = function (t, i) {
                return new Promise(function (a, o) {
                  var u = { key: t, arg: i, resolve: a, reject: o, next: null };
                  n ? (n = n.next = u) : ((e = n = u), r(t, i));
                });
              }),
                "function" != typeof t.return && (this.return = void 0);
            }
            "function" == typeof Symbol &&
              Symbol.asyncIterator &&
              (z.prototype[Symbol.asyncIterator] = function () {
                return this;
              }),
              (z.prototype.next = function (t) {
                return this._invoke("next", t);
              }),
              (z.prototype.throw = function (t) {
                return this._invoke("throw", t);
              }),
              (z.prototype.return = function (t) {
                return this._invoke("return", t);
              });
            function D(t, e) {
              return (
                q(t) ||
                (function (t, e) {
                  var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                  try {
                    for (
                      var o, u = t[Symbol.iterator]();
                      !(r = (o = u.next()).done) &&
                      (n.push(o.value), !e || n.length !== e);
                      r = !0
                    );
                  } catch (c) {
                    (i = !0), (a = c);
                  } finally {
                    try {
                      r || null == u.return || u.return();
                    } finally {
                      if (i) throw a;
                    }
                  }
                  return n;
                })(t, e) ||
                H()
              );
            }
            function q(t) {
              if (Array.isArray(t)) return t;
            }
            function H() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            }
            var V = [
                "x",
                "y",
                "left",
                "top",
                "right",
                "bottom",
                "width",
                "height",
              ],
              W = function (t) {
                var e = D(t, 2),
                  n = e[0],
                  r = e[1],
                  i = r.points
                    ? {}
                    : V.reduce(function (t, e) {
                        var n;
                        return (
                          (t[e] =
                            "string" == typeof (n = r[e]) && /%/.test(n)
                              ? parseFloat(n) / 100
                              : n),
                          t
                        );
                      }, {});
                return [n, Object.assign({ zIndex: 0 }, r, i)];
              };
            "undefined" != typeof window &&
              void 0 !== window.document &&
              (HTMLCanvasElement.prototype.toBlob ||
                Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
                  value: function (t, e, n) {
                    var r = this;
                    setTimeout(function () {
                      for (
                        var i = r.toDataURL(e, n).split(",")[1],
                          a = atob(i),
                          o = a.length,
                          u = new Uint8Array(o);
                        o--;
  
                      )
                        u[o] = a.charCodeAt(o);
                      t(new Blob([u], { type: e || "image/png" }));
                    });
                  },
                }));
            var Y = "undefined" != typeof window && void 0 !== window.document,
              J =
                Y &&
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !window.MSStream,
              Q = function (e) {
                var n = e.addFilter,
                  r = e.utils,
                  i = r.Type,
                  a = r.forin,
                  o = r.getFileFromBlob,
                  u = r.isFile,
                  c = ["crop", "resize", "filter", "markup", "output"],
                  l = function (t) {
                    return (
                      null === t.aspectRatio &&
                      0 === t.rotation &&
                      1 === t.zoom &&
                      t.center &&
                      0.5 === t.center.x &&
                      0.5 === t.center.y &&
                      t.flip &&
                      !1 === t.flip.horizontal &&
                      !1 === t.flip.vertical
                    );
                  };
                n("SHOULD_PREPARE_OUTPUT", function (t, e) {
                  var n = e.query;
                  return new Promise(function (t) {
                    t(!n("IS_ASYNC"));
                  });
                });
                var h = function (t, e, n) {
                  return new Promise(function (r) {
                    if (
                      !t("GET_ALLOW_IMAGE_TRANSFORM") ||
                      n.archived ||
                      !u(e) ||
                      !(function (t) {
                        return /^image/.test(t.type);
                      })(e)
                    )
                      return r(!1);
                    (function (t) {
                      return new Promise(function (e, n) {
                        var r = new Image();
                        r.src = URL.createObjectURL(t);
                        var i = function () {
                          var t = r.naturalWidth,
                            n = r.naturalHeight;
                          t &&
                            n &&
                            (URL.revokeObjectURL(r.src),
                            clearInterval(a),
                            e({ width: t, height: n }));
                        };
                        r.onerror = function (t) {
                          URL.revokeObjectURL(r.src), clearInterval(a), n(t);
                        };
                        var a = setInterval(i, 1);
                        i();
                      });
                    })(e)
                      .then(function () {
                        var n = t("GET_IMAGE_TRANSFORM_IMAGE_FILTER");
                        if (n) {
                          var i = n(e);
                          if (null == i) return handleRevert(!0);
                          if ("boolean" == typeof i) return r(i);
                          if ("function" == typeof i.then) return i.then(r);
                        }
                        r(!0);
                      })
                      .catch(function (t) {
                        r(!1);
                      });
                  });
                };
                return (
                  n("PREPARE_OUTPUT", function (e, n) {
                    var r = n.query,
                      i = n.item;
                    return new Promise(function (n) {
                      h(r, e, i).then(function (u) {
                        if (!u) return n(e);
                        var h = [];
                        r("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_ORIGINAL") &&
                          h.push(function () {
                            return new Promise(function (t) {
                              t({
                                name: r(
                                  "GET_IMAGE_TRANSFORM_VARIANTS_ORIGINAL_NAME"
                                ),
                                file: e,
                              });
                            });
                          }),
                          r("GET_IMAGE_TRANSFORM_VARIANTS_INCLUDE_DEFAULT") &&
                            h.push(function (t, e, n) {
                              return new Promise(function (i) {
                                t(e, n).then(function (t) {
                                  return i({
                                    name: r(
                                      "GET_IMAGE_TRANSFORM_VARIANTS_DEFAULT_NAME"
                                    ),
                                    file: t,
                                  });
                                });
                              });
                            });
                        var f = r("GET_IMAGE_TRANSFORM_VARIANTS") || {};
                        a(f, function (t, e) {
                          var n,
                            r =
                              ((n = e),
                              function (t, e, r) {
                                return t(e, n ? n(r) : r);
                              });
                          h.push(function (e, n, i) {
                            return new Promise(function (a) {
                              r(e, n, i).then(function (e) {
                                return a({ name: t, file: e });
                              });
                            });
                          });
                        });
                        var s = r("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY"),
                          d = r("GET_IMAGE_TRANSFORM_OUTPUT_QUALITY_MODE"),
                          g = null === s ? null : s / 100,
                          v = r("GET_IMAGE_TRANSFORM_OUTPUT_MIME_TYPE"),
                          y = r("GET_IMAGE_TRANSFORM_CLIENT_TRANSFORMS") || c;
                        i.setMetadata(
                          "output",
                          { type: v, quality: g, client: y },
                          !0
                        );
                        var m = function (e, n) {
                            return new Promise(function (i, a) {
                              var u = Object.assign({}, n);
                              Object.keys(u)
                                .filter(function (t) {
                                  return "exif" !== t;
                                })
                                .forEach(function (t) {
                                  -1 === y.indexOf(t) && delete u[t];
                                });
                              var c = u.resize,
                                h = u.exif,
                                f = u.output,
                                s = u.crop,
                                g = u.filter,
                                v = u.markup,
                                m = {
                                  image: {
                                    orientation: h ? h.orientation : null,
                                  },
                                  output:
                                    f &&
                                    (f.type ||
                                      "number" == typeof f.quality ||
                                      f.background)
                                      ? {
                                          type: f.type,
                                          quality:
                                            "number" == typeof f.quality
                                              ? 100 * f.quality
                                              : null,
                                          background:
                                            f.background ||
                                            r(
                                              "GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"
                                            ) ||
                                            null,
                                        }
                                      : void 0,
                                  size:
                                    c && (c.size.width || c.size.height)
                                      ? Object.assign(
                                          { mode: c.mode, upscale: c.upscale },
                                          c.size
                                        )
                                      : void 0,
                                  crop:
                                    s && !l(s) ? Object.assign({}, s) : void 0,
                                  markup: v && v.length ? v.map(W) : [],
                                  filter: g,
                                };
                              if (m.output) {
                                var p = !!f.type && f.type !== e.type,
                                  w = /\/jpe?g$/.test(e.type),
                                  x = null !== f.quality && w && "always" === d;
                                if (!!!(m.size || m.crop || m.filter || p || x))
                                  return i(e);
                              }
                              var M = {
                                beforeCreateBlob: r(
                                  "GET_IMAGE_TRANSFORM_BEFORE_CREATE_BLOB"
                                ),
                                afterCreateBlob: r(
                                  "GET_IMAGE_TRANSFORM_AFTER_CREATE_BLOB"
                                ),
                                canvasMemoryLimit: r(
                                  "GET_IMAGE_TRANSFORM_CANVAS_MEMORY_LIMIT"
                                ),
                                stripImageHead: r(
                                  "GET_IMAGE_TRANSFORM_OUTPUT_STRIP_IMAGE_HEAD"
                                ),
                              };
                              G(e, m, M)
                                .then(function (n) {
                                  var r,
                                    a = o(
                                      n,
                                      (function (e, n) {
                                        var r = (function (t) {
                                            return (
                                              t.substr(0, t.lastIndexOf(".")) || t
                                            );
                                          })(e),
                                          i = n.split("/")[1],
                                          a = t[i] || i;
                                        return "".concat(r, ".").concat(a);
                                      })(
                                        e.name,
                                        ((r = n.type),
                                        /jpeg|png|svg\+xml/.test(r)
                                          ? r
                                          : "image/jpeg")
                                      )
                                    );
                                  i(a);
                                })
                                .catch(a);
                            });
                          },
                          p = h.map(function (t) {
                            return t(m, e, i.getMetadata());
                          });
                        Promise.all(p).then(function (t) {
                          n(1 === t.length && null === t[0].name ? t[0].file : t);
                        });
                      });
                    });
                  }),
                  {
                    options: {
                      allowImageTransform: [!0, i.BOOLEAN],
                      imageTransformImageFilter: [null, i.FUNCTION],
                      imageTransformOutputMimeType: [null, i.STRING],
                      imageTransformOutputQuality: [null, i.INT],
                      imageTransformOutputStripImageHead: [!0, i.BOOLEAN],
                      imageTransformClientTransforms: [null, i.ARRAY],
                      imageTransformOutputQualityMode: ["always", i.STRING],
                      imageTransformVariants: [null, i.OBJECT],
                      imageTransformVariantsIncludeDefault: [!0, i.BOOLEAN],
                      imageTransformVariantsDefaultName: [null, i.STRING],
                      imageTransformVariantsIncludeOriginal: [!1, i.BOOLEAN],
                      imageTransformVariantsOriginalName: ["original_", i.STRING],
                      imageTransformBeforeCreateBlob: [null, i.FUNCTION],
                      imageTransformAfterCreateBlob: [null, i.FUNCTION],
                      imageTransformCanvasMemoryLimit: [
                        Y && J ? 16777216 : null,
                        i.INT,
                      ],
                      imageTransformCanvasBackgroundColor: [null, i.STRING],
                    },
                  }
                );
              };
            return (
              Y &&
                document.dispatchEvent(
                  new CustomEvent("FilePond:pluginloaded", { detail: Q })
                ),
              Q
            );
          });
        },
        {},
      ],
      R4qC: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = function (e) {
              return new Promise(function (i, a) {
                var t = document.createElement("img");
                (t.src = URL.createObjectURL(e)),
                  (t.onerror = function (e) {
                    clearInterval(n), a(e);
                  });
                var n = setInterval(function () {
                  t.naturalWidth &&
                    t.naturalHeight &&
                    (clearInterval(n),
                    URL.revokeObjectURL(t.src),
                    i({ width: t.naturalWidth, height: t.naturalHeight }));
                }, 1);
              });
            },
            i = function (e) {
              return /^image/.test(e.type);
            },
            a = function (a) {
              var t = a.addFilter,
                n = a.utils,
                E = n.Type,
                l = n.replaceInString,
                _ = n.isFile,
                r = n.createRoute,
                I = function (i, a, t) {
                  var n = {
                    minWidth: a("GET_IMAGE_VALIDATE_SIZE_MIN_WIDTH"),
                    minHeight: a("GET_IMAGE_VALIDATE_SIZE_MIN_HEIGHT"),
                    maxWidth: a("GET_IMAGE_VALIDATE_SIZE_MAX_WIDTH"),
                    maxHeight: a("GET_IMAGE_VALIDATE_SIZE_MAX_HEIGHT"),
                    minResolution: a("GET_IMAGE_VALIDATE_SIZE_MIN_RESOLUTION"),
                    maxResolution: a("GET_IMAGE_VALIDATE_SIZE_MAX_RESOLUTION"),
                  };
                  return (function (i, a, t) {
                    return new Promise(function (n, E) {
                      var l = function (e) {
                        var i = e.width,
                          t = e.height,
                          l = a.minWidth,
                          _ = a.minHeight,
                          r = a.maxWidth,
                          I = a.maxHeight,
                          o = a.minResolution,
                          T = a.maxResolution,
                          u = i * t;
                        i < l || t < _
                          ? E("TOO_SMALL")
                          : i > r || t > I
                          ? E("TOO_BIG")
                          : null !== o && u < o
                          ? E("TOO_LOW_RES")
                          : null !== T && u > T && E("TOO_HIGH_RES"),
                          n();
                      };
                      t && t.width && t.height
                        ? l(t)
                        : e(i)
                            .then(l)
                            .catch(function () {
                              E();
                            });
                    });
                  })(i, n, t).catch(function (e) {
                    var t = e
                      ? {
                          TOO_SMALL: {
                            label: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_SIZE_TOO_SMALL"
                            ),
                            details: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MIN_SIZE"
                            ),
                          },
                          TOO_BIG: {
                            label: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_SIZE_TOO_BIG"
                            ),
                            details: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MAX_SIZE"
                            ),
                          },
                          TOO_LOW_RES: {
                            label: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_RESOLUTION_TOO_LOW"
                            ),
                            details: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MIN_RESOLUTION"
                            ),
                          },
                          TOO_HIGH_RES: {
                            label: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_RESOLUTION_TOO_HIGH"
                            ),
                            details: a(
                              "GET_IMAGE_VALIDATE_SIZE_LABEL_EXPECTED_MAX_RESOLUTION"
                            ),
                          },
                        }[e]
                      : {
                          label: a("GET_IMAGE_VALIDATE_SIZE_LABEL_FORMAT_ERROR"),
                          details: i.type,
                        };
                    throw {
                      status: {
                        main: t.label,
                        sub: e ? l(t.details, n) : t.details,
                      },
                    };
                  });
                },
                o = function (e) {
                  if (null == e || "" === e) return null;
                  if ("number" == typeof e) return e;
                  if (-1 !== e.indexOf(":")) {
                    var i = e.split(":");
                    if (i.length > 1) return parseFloat(i[0]) / parseFloat(i[1]);
                  } else {
                    var a = parseFloat(e);
                    if (!isNaN(a)) return a;
                  }
                  return null;
                },
                T = !1;
              return (
                t("CREATE_VIEW", function (e) {
                  e.is;
                  var a = e.view,
                    t = e.query,
                    n = function (e) {
                      var a = e.root,
                        n = e.props.id,
                        E = t("GET_ITEM", n);
                      if (E && !E.archived && E.getMetadata("imageValidate")) {
                        E.setMetadata("imageValidate", !1, !0);
                        var r = E.file;
                        if (!i(r)) return;
                        var u = E.serverId,
                          A = E.getMetadata("imageSize"),
                          d = t("GET_IMAGE_VALIDATE_COMPLETE_RESULT");
                        if (!_(r) && !A)
                          return void a.dispatch("REMOVE_ITEM", { id: E.id });
                        var s = function () {
                            var e = a.element.querySelector(
                              ".filepond--image-preview-overlay-failure"
                            );
                            null != e && (e.style.opacity = "0"), d(u, !0);
                          },
                          m = function (e) {
                            a.dispatch("DID_THROW_ITEM_INVALID", {
                              id: n,
                              error: e.status,
                              status: e.status,
                            }),
                              d(u, !1);
                          };
                        I(r, t, A)
                          .then(function () {
                            var e = t("GET_IMAGE_VALIDATE_CROP_RATIOS");
                            if (null != e && Array.isArray(e) && e.length > 0) {
                              var i = A.width / A.height;
                              i = Math.round(1e3 * i) / 1e3;
                              for (var n = !1, I = "", u = 0; u < e.length; u++) {
                                var d = e[u];
                                if (!d.value) {
                                  n = !0;
                                  break;
                                }
                                var L = o(d.value);
                                if (i === (L = Math.round(1e3 * L) / 1e3)) {
                                  n = !0;
                                  break;
                                }
                                I = d.label;
                              }
                              if (!n) {
                                var S = {
                                    label: t(
                                      "GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_RATIO_INVALID"
                                    ),
                                    details: t(
                                      "GET_IMAGE_VALIDATE_SIZE_LABEL_IMAGE_RATIO_EXPECTED"
                                    ),
                                  },
                                  M = {
                                    status: {
                                      main: S.label,
                                      sub:
                                        S && I ? l(S.details, { ratio: I }) : "",
                                    },
                                  },
                                  G = t("GET_IMAGE_EDIT_EDITOR");
                                if (!T && _(r) && G)
                                  return (
                                    (T = !0),
                                    void a.dispatch("EDIT_ITEM", {
                                      id: E.id,
                                      handleEditorResponse: function (e) {
                                        (T = !1), e ? s() : m(M);
                                      },
                                    })
                                  );
                                throw M;
                              }
                            }
                            s();
                          })
                          .catch(function (e) {
                            m(e);
                          });
                      }
                    };
                  a.registerWriter(
                    r(
                      { DID_COMPLETE_ITEM_PROCESSING: n, DID_LOAD_ITEM: n },
                      function (e) {
                        e.root, e.props;
                      }
                    )
                  );
                }),
                t("DID_CREATE_ITEM", function (e, i) {
                  var a = i.query,
                    t = i.dispatch;
                  e.extend("validate", function () {
                    var i = a("GET_ALLOW_IMAGE_VALIDATE_SIZE");
                    e.setMetadata("imageValidate", i, !0),
                      t("DID_COMPLETE_ITEM_PROCESSING", {
                        id: e.id,
                        error: null,
                        serverFileReference: e.serverId,
                      });
                  });
                }),
                t("PREPARE_OUTPUT", function (a, t) {
                  var n = t.query,
                    E = t.item;
                  return new Promise(function (t, l) {
                    (a && Array.isArray(a) && 0 !== a.length) || t(a);
                    for (
                      var r = n("GET_IMAGE_VALIDATE_COMPLETE_OUTPUT_NAME"),
                        I = null,
                        o = 0;
                      o < a.length;
                      o++
                    ) {
                      var T = a[o];
                      if (T.name && T.name === r) {
                        I = T.file;
                        break;
                      }
                    }
                    if (!I || !_(I) || !i(I)) return t(a);
                    e(I)
                      .then(function (e) {
                        E.setMetadata(
                          "imageSize",
                          { width: e.width, height: e.height },
                          !0
                        ),
                          t(a);
                      })
                      .catch(function () {
                        t(a);
                      });
                  });
                }),
                t("LOAD_FILE", function (e, a) {
                  var t = a.query;
                  return new Promise(function (a, n) {
                    _(e) && i(e) && t("GET_ALLOW_IMAGE_VALIDATE_SIZE")
                      ? I(e, t)
                          .then(function () {
                            a(e);
                          })
                          .catch(function (e) {
                            n(e);
                          })
                      : a(e);
                  });
                }),
                {
                  options: {
                    allowImageValidateComplete: [!1, E.BOOLEAN],
                    imageValidateCompleteResult: [
                      function (e, i) {
                        return null;
                      },
                      E.FUNCTION,
                    ],
                    imageValidateCompleteOutputName: ["original", E.STRING],
                    imageValidateCropRatios: [null, E.ARRAY],
                    allowImageValidateSize: [!0, E.BOOLEAN],
                    imageValidateSizeLabelFormatError: [
                      "Image type not supported",
                      E.STRING,
                    ],
                    imageValidateSizeMeasure: [null, E.FUNCTION],
                    imageValidateSizeMinResolution: [null, E.INT],
                    imageValidateSizeMaxResolution: [null, E.INT],
                    imageValidateSizeLabelImageResolutionTooLow: [
                      "Resolution is too low",
                      E.STRING,
                    ],
                    imageValidateSizeLabelImageResolutionTooHigh: [
                      "Resolution is too high",
                      E.STRING,
                    ],
                    imageValidateSizeLabelExpectedMinResolution: [
                      "Minimum resolution is {minResolution}",
                      E.STRING,
                    ],
                    imageValidateSizeLabelExpectedMaxResolution: [
                      "Maximum resolution is {maxResolution}",
                      E.STRING,
                    ],
                    imageValidateSizeMinWidth: [1, E.INT],
                    imageValidateSizeMinHeight: [1, E.INT],
                    imageValidateSizeMaxWidth: [65535, E.INT],
                    imageValidateSizeMaxHeight: [65535, E.INT],
                    imageValidateSizeLabelImageSizeTooSmall: [
                      "Image is too small",
                      E.STRING,
                    ],
                    imageValidateSizeLabelImageSizeTooBig: [
                      "Image is too big",
                      E.STRING,
                    ],
                    imageValidateSizeLabelExpectedMinSize: [
                      "Minimum size is {minWidth} × {minHeight}",
                      E.STRING,
                    ],
                    imageValidateSizeLabelExpectedMaxSize: [
                      "Maximum size is {maxWidth} × {maxHeight}",
                      E.STRING,
                    ],
                    imageValidateSizeLabelImageRatioInvalid: [
                      "Image ratio does not match",
                      E.STRING,
                    ],
                    imageValidateSizeLabelImageRatioExpected: [
                      "Expected image ratio {ratio}",
                      E.STRING,
                    ],
                  },
                }
              );
            },
            t = "undefined" != typeof window && void 0 !== window.document;
          t &&
            document.dispatchEvent(
              new CustomEvent("FilePond:pluginloaded", { detail: a })
            );
          var n = a;
          exports.default = n;
        },
        {},
      ],
      wcJT: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.createPosterView = void 0);
          var I = require("filepond"),
            g = { type: "spring", stiffness: 0.5, damping: 0.45, mass: 10 },
            C = function (C) {
              return C.utils.createView({
                name: "file-poster appcloud",
                tag: "div",
                ignoreRect: !0,
                create: function (I) {
                  var g = I.root;
                  (g.ref.image = document.createElement("img")),
                    g.element.appendChild(g.ref.image);
                },
                write: C.utils.createRoute({
                  DID_FILE_POSTER_LOAD: function (g) {
                    var C = g.root,
                      A = g.props,
                      i = A.id,
                      e = C.query("GET_ITEM", { id: A.id });
                    if (e)
                      if (C.query("GET_ALLOW_FILE_POSTER_PREVIEW")) {
                        var t = e.getMetadata("poster");
                        t
                          ? (C.ref.image.src = t)
                          : e.status !== I.FileStatus.PROCESSING_COMPLETE &&
                            e.status !== I.FileStatus.PROCESSING_ERROR
                          ? (C.ref.image.src =
                              "data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj4KICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIKICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxLjhzIgogICAgICAgICAgICAgICAgdmFsdWVzPSIxOyAyMCIKICAgICAgICAgICAgICAgIGNhbGNNb2RlPSJzcGxpbmUiCiAgICAgICAgICAgICAgICBrZXlUaW1lcz0iMDsgMSIKICAgICAgICAgICAgICAgIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIgogICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IgogICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjEuOHMiCiAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7IDAiCiAgICAgICAgICAgICAgICBjYWxjTW9kZT0ic3BsaW5lIgogICAgICAgICAgICAgICAga2V5VGltZXM9IjA7IDEiCiAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIgogICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgPC9jaXJjbGU+CiAgICAgICAgPGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iMSI+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiCiAgICAgICAgICAgICAgICBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIKICAgICAgICAgICAgICAgIHZhbHVlcz0iMTsgMjAiCiAgICAgICAgICAgICAgICBjYWxjTW9kZT0ic3BsaW5lIgogICAgICAgICAgICAgICAga2V5VGltZXM9IjA7IDEiCiAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIwLjE2NSwgMC44NCwgMC40NCwgMSIKICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utb3BhY2l0eSIKICAgICAgICAgICAgICAgIGJlZ2luPSItMC45cyIgZHVyPSIxLjhzIgogICAgICAgICAgICAgICAgdmFsdWVzPSIxOyAwIgogICAgICAgICAgICAgICAgY2FsY01vZGU9InNwbGluZSIKICAgICAgICAgICAgICAgIGtleVRpbWVzPSIwOyAxIgogICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIKICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=")
                          : (C.ref.image.src = ""),
                          C.dispatch("DID_FILE_POSTER_DRAW", { id: i }),
                          t && C.dispatch("DID_IMAGE_PREVIEW_SHOW", { id: i });
                      } else
                        e.status === I.FileStatus.PROCESSING_COMPLETE &&
                          C.dispatch("DID_IMAGE_PREVIEW_SHOW", { id: i });
                  },
                }),
                mixins: {
                  styles: ["scaleX", "scaleY", "opacity"],
                  animations: {
                    scaleX: g,
                    scaleY: g,
                    opacity: { type: "tween", duration: 750 },
                  },
                },
              });
            };
          exports.createPosterView = C;
        },
        { filepond: "uX4S" },
      ],
      gUFJ: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.createPosterOverlayView = void 0);
          var e = function (e, t) {
              (t.width = e.width),
                (t.height = e.height),
                t.getContext("2d").drawImage(e, 0, 0);
            },
            t = function (t) {
              return t.utils.createView({
                name: "file-poster-overlay",
                tag: "canvas",
                ignoreRect: !0,
                create: function (t) {
                  var r = t.root,
                    i = t.props;
                  e(i.template, r.element);
                },
                mixins: {
                  styles: ["opacity"],
                  animations: { opacity: { type: "spring", mass: 25 } },
                },
              });
            };
          exports.createPosterOverlayView = t;
        },
        {},
      ],
      v0NX: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.createPosterWrapperView = exports.getImageSize = void 0);
          var e = require("./createPosterView"),
            t = require("./createPosterOverlayView"),
            r = require("filepond"),
            i = function (e, t) {
              var r = new Image();
              (r.onload = function () {
                var e = r.naturalWidth,
                  i = r.naturalHeight;
                (r = null), t(e, i);
              }),
                (r.src = e);
            };
          exports.getImageSize = i;
          var o = function (e) {
              return -0.5 * (Math.cos(Math.PI * e) - 1);
            },
            a = function (e, t) {
              for (
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : o,
                  a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 10,
                  n =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : 0,
                  c = 1 - n,
                  _ = t.join(","),
                  E = 0;
                E <= a;
                E++
              ) {
                var I = E / a,
                  s = n + c * I;
                e.addColorStop(s, "rgba(".concat(_, ", ").concat(i(I) * r, ")"));
              }
            },
            n = function (e, t, r, i, o) {
              (e.width = t), (e.height = r);
              var n = e.getContext("2d"),
                c = 0.5 * t,
                _ = n.createRadialGradient(
                  c,
                  r + 110,
                  r - 100,
                  c,
                  r + 110,
                  r + 100
                );
              a(_, i, o, void 0, 8, 0.4),
                n.save(),
                n.translate(0.5 * -t, 0),
                n.scale(2, 1),
                (n.fillStyle = _),
                n.fillRect(0, 0, t, r),
                n.restore();
            },
            c = "undefined" != typeof navigator,
            _ = 500,
            E = 200,
            I = c && document.createElement("canvas"),
            s = c && document.createElement("canvas"),
            d = c && document.createElement("canvas");
          c &&
            (n(I, _, E, [40, 40, 40], 0.85),
            n(s, _, E, [196, 78, 71], 1),
            n(d, _, E, [54, 151, 99], 0));
          var l = function (e, t) {
              return new Promise(function (r, i) {
                var o = new Image();
                "string" == typeof crossOrigin && (o.crossOrigin = t),
                  (o.onload = function () {
                    r(o);
                  }),
                  (o.onerror = function (e) {
                    i(e);
                  }),
                  (o.src = e);
              });
            },
            u = function (o) {
              var a = (0, t.createPosterOverlayView)(o),
                n = function (e) {
                  e.root.ref.overlayError.opacity = 0;
                },
                c = function (e) {
                  e.root.ref.overlayError.opacity = 1;
                };
              return o.utils.createView({
                name: "file-poster-wrapper",
                create: function (t) {
                  var r = t.root,
                    i = t.props,
                    n = (0, e.createPosterView)(o);
                  (r.ref.image = r.appendChildView(
                    r.createChildView(n, {
                      id: i.id,
                      scaleX: 1.25,
                      scaleY: 1.25,
                      opacity: 0,
                    })
                  )),
                    (r.ref.overlayError = r.appendChildView(
                      r.createChildView(a, { template: s, opacity: 0 })
                    ));
                },
                write: o.utils.createRoute({
                  DID_FILE_POSTER_LOAD: function (e) {
                    e.root;
                  },
                  DID_FILE_POSTER_DRAW: function (e) {
                    var t = e.root.ref.image;
                    (t.scaleX = 1), (t.scaleY = 1), (t.opacity = 1);
                  },
                  DID_FILE_POSTER_CONTAINER_CREATE: function (e) {
                    var t = e.root,
                      o = e.props.id,
                      a = t.query("GET_ITEM", o);
                    if (a) {
                      var n = a.getMetadata("poster"),
                        c = function (e) {
                          t.dispatch("DID_FILE_POSTER_LOAD", { id: o, data: e });
                        };
                      n
                        ? (i(n, function (e, r) {
                            l(
                              n,
                              t.query(
                                "GET_FILE_POSTER_CROSS_ORIGIN_ATTRIBUTE_VALUE"
                              )
                            ).then(c);
                          }),
                          t.dispatch("DID_FILE_POSTER_CALCULATE_SIZE", {
                            id: o,
                            width: _,
                            height: E,
                          }))
                        : (t.dispatch("DID_FILE_POSTER_CALCULATE_SIZE", {
                            id: o,
                          }),
                          a.origin === r.FileOrigin.INPUT &&
                            t.dispatch("DID_FILE_POSTER_LOAD", { id: o }));
                    }
                  },
                  DID_THROW_ITEM_LOAD_ERROR: c,
                  DID_THROW_ITEM_PROCESSING_ERROR: c,
                  DID_THROW_ITEM_INVALID: c,
                  DID_COMPLETE_ITEM_PROCESSING: function (e) {
                    e.root;
                  },
                  DID_START_ITEM_PROCESSING: n,
                  DID_REVERT_ITEM_PROCESSING: n,
                }),
              });
            };
          exports.createPosterWrapperView = u;
        },
        {
          "./createPosterView": "wcJT",
          "./createPosterOverlayView": "gUFJ",
          filepond: "uX4S",
        },
      ],
      PWTW: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = require("./view/createPosterWrapperView"),
            i = require("filepond"),
            r = function (r) {
              var t = r.addFilter,
                o = r.utils,
                a = o.Type,
                n = o.createRoute,
                E = (0, e.createPosterWrapperView)(r);
              return (
                t("CREATE_VIEW", function (e) {
                  var r = e.is,
                    t = e.view,
                    o = e.query;
                  if (r("file") && o("GET_ALLOW_FILE_POSTER")) {
                    var a = function (e) {
                        var i = e.serverId,
                          r = o("GET_FILE_POSTER_FILE_VARIANT")(i, "thumbnail");
                        null != r && e.setMetadata("poster", r.url, !0);
                      },
                      l = function (e) {
                        var i = e.root,
                          r = i.query("GET_FILE_POSTER_HEIGHT");
                        if (r) return r;
                        var t = i.query("GET_FILE_POSTER_MIN_HEIGHT"),
                          o = i.query("GET_FILE_POSTER_MAX_HEIGHT");
                        if (t && i.ref.imageHeight < t) return t;
                        var a =
                          i.rect.element.width *
                          (i.ref.imageHeight / i.ref.imageWidth);
                        return t && a < t ? t : o && a > o ? o : a;
                      };
                    t.registerWriter(
                      n(
                        {
                          DID_THROW_ITEM_INVALID: function (e) {
                            var i = e.root,
                              r = e.props;
                            i.dispatch("DID_UPDATE_PANEL_HEIGHT", {
                              id: r.id,
                              height: l({ root: i }),
                            });
                          },
                          DID_THROW_ITEM_PROCESSING_ERROR: function (e) {
                            var i = e.root,
                              r = e.props.id;
                            i.dispatch("DID_FILE_POSTER_LOAD", { id: r });
                          },
                          DID_COMPLETE_ITEM_PROCESSING: function (e) {
                            var i = e.root,
                              r = e.props.id,
                              t = o("GET_ITEM", r);
                            t &&
                              !t.archived &&
                              (a(t),
                              i.dispatch("DID_FILE_POSTER_LOAD", { id: r }));
                          },
                          DID_LOAD_ITEM: function (e) {
                            var r = e.root,
                              n = e.props.id,
                              l = o("GET_ITEM", n);
                            l &&
                              !l.archived &&
                              o("GET_FILE_POSTER_FILTER_ITEM")(l) &&
                              (a(l),
                              l.origin === i.FileOrigin.LOCAL &&
                                r.element.classList.add("server"),
                              (r.ref.filePoster = t.appendChildView(
                                t.createChildView(E, { id: n })
                              )),
                              r.dispatch("DID_FILE_POSTER_CONTAINER_CREATE", {
                                id: n,
                              }));
                          },
                          DID_FILE_POSTER_CALCULATE_SIZE: function (e) {
                            var i = e.root,
                              r = e.action;
                            i.ref.filePoster &&
                              ((i.ref.imageWidth = r.width),
                              (i.ref.imageHeight = r.height),
                              (i.ref.shouldUpdatePanelHeight = !0),
                              i.dispatch("KICK"));
                          },
                        },
                        function (e) {
                          var i = e.root,
                            r = e.props;
                          i.ref.filePoster &&
                            (i.rect.element.hidden ||
                              (i.ref.shouldUpdatePanelHeight &&
                                (i.dispatch("DID_UPDATE_PANEL_HEIGHT", {
                                  id: r.id,
                                  height: l({ root: i }),
                                }),
                                (i.ref.shouldUpdatePanelHeight = !1))));
                        }
                      )
                    );
                  }
                }),
                {
                  options: {
                    allowImagePreview: [!0, a.BOOLEAN],
                    allowFilePoster: [!0, a.BOOLEAN],
                    allowFilePosterPreview: [!0, a.BOOLEAN],
                    filePosterFileVariant: [
                      function () {
                        return null;
                      },
                      a.FUNCTION,
                    ],
                    filePosterHeight: [null, a.INT],
                    filePosterMinHeight: [null, a.INT],
                    filePosterMaxHeight: [null, a.INT],
                    filePosterFilterItem: [
                      function () {
                        return !0;
                      },
                      a.FUNCTION,
                    ],
                    filePosterCalculateAverageImageColor: [!1, a.BOOLEAN],
                    filePosterCrossOriginAttributeValue: ["Anonymous", a.STRING],
                  },
                }
              );
            },
            t = "undefined" != typeof window && void 0 !== window.document;
          t &&
            document.dispatchEvent(
              new CustomEvent("FilePond:pluginloaded", { detail: r })
            );
          var o = r;
          exports.default = o;
        },
        { "./view/createPosterWrapperView": "v0NX", filepond: "uX4S" },
      ],
      Qlw6: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = b(require("./request")),
            t = b(require("./util")),
            i = b(require("./file-meta")),
            a = b(require("./translate")),
            l = v(require("filepond"));
          require("filepond/dist/filepond.css"),
            require("filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"),
            require("filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css"),
            require("filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css");
          var o = b(require("filepond-plugin-file-validate-type")),
            r = b(require("filepond-plugin-file-validate-size")),
            n = b(require("filepond-plugin-image-exif-orientation")),
            s = b(require("filepond-plugin-image-preview")),
            u = b(require("filepond-plugin-image-edit")),
            g = b(require("filepond-plugin-image-crop")),
            d = b(require("filepond-plugin-image-resize")),
            f = b(require("filepond-plugin-image-transform")),
            p = b(require("./filepond-plugin-image-validate-complete")),
            m = b(require("./filepond-plugin-appcloud")),
            c = v(require("loglevel"));
          function h(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              i = new WeakMap();
            return (h = function (e) {
              return e ? i : t;
            })(e);
          }
          function v(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var i = h(t);
            if (i && i.has(e)) return i.get(e);
            var a = {},
              l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                var r = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                r && (r.get || r.set)
                  ? Object.defineProperty(a, o, r)
                  : (a[o] = e[o]);
              }
            return (a.default = e), i && i.set(e, a), a;
          }
          function b(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function w(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function _(e, t) {
            for (var i = 0; i < t.length; i++) {
              var a = t[i];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          function y(e, t, i) {
            return t && _(e.prototype, t), i && _(e, i), e;
          }
          var M = (function () {
            function h(e) {
              w(this, h);
              var i = {
                api: "http://api.cloudlift.local:8080",
                queryParams: {},
                selector: ".cl-upload--files",
                provider: "google",
                field: "upload",
                text: void 0,
                required: !1,
                metaData: {},
                fileMimeTypes: [],
                fileMimeTypesValidate: !0,
                fileSizeValidate: !0,
                fileSizeMax: null,
                fileMultiple: !0,
                fileCountMin: null,
                fileCountMax: null,
                fileFetch: !0,
                fileFetchConfig: void 0,
                imagePreview: !1,
                imagePreviewAppCloud: !1,
                imagePreviewHeight: 100,
                imageOriginal: !0,
                imageTransforms: {},
                imageTransformFormat: null,
                imageResize: !1,
                imageSizeValidate: !0,
                imageSizeValidateComplete: !1,
                imageWidthMin: 1,
                imageWidthMax: 65535,
                imageHeightMin: 1,
                imageHeightMax: 65535,
                imageResolutionMin: null,
                imageResolutionMax: null,
                pdfConvert: !1,
                imageCrop: !1,
                imageEditor: !1,
                imageEditorOpen: !0,
                imageEditorUtils: ["crop"],
                imageEditorCropRatio: null,
                imageEditorCropRatios: [
                  { label: "Free", value: null },
                  { label: "Portrait", value: 1.25 },
                  { label: "Square", value: 1 },
                  { label: "Landscape", value: 0.75 },
                ],
                imageProcessCanvas: null,
                imageProcessBlob: null,
                translatePrefix: "upload.",
              };
              (this.files = {}),
                (this.settings = t.default.extend(i, e || {})),
                t.default.isElement(this.settings.selector)
                  ? (this.element = this.settings.selector)
                  : (this.element = document.querySelector(
                      this.settings.selector
                    )),
                null != this.element
                  ? this._init()
                  : c.warn(
                      "no elements with selector found: ",
                      this.settings.selector
                    );
            }
            return (
              y(h, [
                {
                  key: "destroy",
                  value: function () {
                    this._pond.destroy();
                  },
                },
                {
                  key: "getElement",
                  value: function () {
                    return this._pond.element;
                  },
                },
                {
                  key: "getStatus",
                  value: function () {
                    return this._pond.status;
                  },
                },
                {
                  key: "isReady",
                  value: function () {
                    var e = this.getStatus();
                    return 0 === e || 4 === e;
                  },
                },
                {
                  key: "updateOptions",
                  value: function (e) {
                    for (var i in ((this.settings = t.default.extend(
                      this.settings,
                      e
                    )),
                    e))
                      e.hasOwnProperty(i) &&
                        "[object Object]" ===
                          Object.prototype.toString.call(e[i]) &&
                        (this.settings[i] = e[i]);
                    var a = this._mapOptions();
                    this._pond.setOptions(a);
                  },
                },
                {
                  key: "upload",
                  value: function (e) {
                    var t = this;
                    return (
                      this._pond.setOptions({ instantUpload: !1 }),
                      this._pond
                        .addFile(e)
                        .then(function (e) {
                          return t._pond.processFile(e).then(function (e) {
                            return (
                              t.updateOptions({ instantUpload: !1 }),
                              t.files[e.serverId]
                            );
                          });
                        })
                        .catch(function (e) {
                          throw (
                            (c.error("failed to upload file", e),
                            t._pond.setOptions({ instantUpload: !0 }),
                            e)
                          );
                        })
                    );
                  },
                },
                {
                  key: "validateFiles",
                  value: function () {
                    for (
                      var e = this._pond.getFiles(), t = 0;
                      t < e.length;
                      t++
                    ) {
                      var i = e[t];
                      i.validate && i.validate();
                    }
                  },
                },
                {
                  key: "countFiles",
                  value: function () {
                    var e = 0;
                    for (var t in this.files)
                      if (this.files.hasOwnProperty(t)) {
                        var i = this.files[t];
                        i.parent || i.error || e++;
                      }
                    return e;
                  },
                },
                {
                  key: "restoreFiles",
                  value: function (e) {
                    var t = this;
                    this._fileMeta.restoreFiles(e).then(function (e) {
                      t._storeFiles(e), t._addStoreFiles();
                    });
                  },
                },
                {
                  key: "removeFiles",
                  value: function () {
                    this._pond.removeFiles();
                  },
                },
                {
                  key: "_init",
                  value: function () {
                    var e = this,
                      a = t.default.extend(this.settings.queryParams, {
                        config: this.settings.fileFetchConfig,
                      });
                    if (
                      ((this._fileMeta = new i.default({
                        api: this.settings.api,
                        queryParams: a,
                      })),
                      (this._provider = h.providers[this.settings.provider]),
                      !this._provider)
                    )
                      throw (
                        "upload plugin " + this.settings.provider + " not found"
                      );
                    l.registerPlugin(r.default, o.default, f.default, n.default),
                      this.settings.imagePreviewAppCloud
                        ? l.registerPlugin(m.default)
                        : this.settings.imagePreview &&
                          l.registerPlugin(s.default),
                      this.settings.imageSizeValidate &&
                        l.registerPlugin(p.default),
                      this.settings.imageResize && l.registerPlugin(d.default),
                      (this.settings.imageCrop || this.settings.imageEditor) &&
                        l.registerPlugin(g.default),
                      this.settings.imageEditor && l.registerPlugin(u.default);
                    var v = this._mapOptions();
                    (this._pond = l.create(this.element, v)),
                      this._pond
                        ? (this._pond.setOptions({
                            server: this._getFilePondServerImpl(),
                          }),
                          this._pond.on("addfilestart", function (t) {
                            t.file &&
                              e._triggerEvent(
                                "upload:select",
                                e._fileMeta.fromNative(t.file)
                              );
                          }),
                          this._pond.on("addfile", function (t, i) {
                            null == t &&
                              i.file &&
                              e._triggerEvent(
                                "upload:add",
                                e._fileMeta.fromNative(i.file)
                              );
                          }),
                          this._pond.on("error", function (t, i) {
                            if (i.file) {
                              var a = e._fileMeta.fromNative(i.file);
                              t.main
                                ? ((a.meta.error = t.main),
                                  (a.meta.msg = t.sub),
                                  e._triggerEvent("upload:invalid", a))
                                : e._triggerEvent("upload:error", a);
                            }
                          }),
                          this._pond.on("warning", function (t, i) {
                            t.body &&
                              "Max files" === t.body &&
                              (e._triggerEvent("upload:select", {}),
                              e._triggerEvent("upload:maxFiles"));
                          }),
                          this._pond.on("reorderfiles", function (t, i, a) {
                            var l = t.map(function (e) {
                              return e.serverId;
                            });
                            e._triggerEvent("upload:sort", {
                              fileIds: l,
                              origin: i,
                              target: a,
                            });
                          }),
                          this.settings.fileFetch &&
                            (this._fileMeta.settings.queryParams.token ||
                              this._fileMeta.settings.queryParams.orderId) &&
                            this._fileMeta.fetchFiles().then(function (t) {
                              e._storeFiles(t), e._addStoreFiles();
                            }))
                        : (c.error(
                            'Upload-Lift not supported - condition:\n\n !("[object OperaMini]" === Object.prototype.toString.call(window.operamini)) && "visibilityState" in document && "Promise" in window && "slice" in Blob.prototype && "URL" in window && "createObjectURL" in window.URL'
                          ),
                          alert("Upload-Lift not supported"));
                  },
                },
                {
                  key: "_mapOptions",
                  value: function () {
                    var e = this,
                      t = this.settings.translatePrefix;
                    if (
                      this.settings.imageEditorCropRatios &&
                      this.settings.imageEditorCropRatios.length > 0
                    )
                      for (
                        var i = 0;
                        i < this.settings.imageEditorCropRatios.length;
                        i++
                      ) {
                        var l = this.settings.imageEditorCropRatios[i];
                        "" === l.value && (l.value = null);
                      }
                    if (this.settings.imageEditor) {
                      var o = {
                        utils: ["crop"],
                        cropMinImageWidth: this.settings.imageSizeValidate
                          ? this.settings.imageWidthMin
                          : 50,
                        cropMinImageHeight: this.settings.imageSizeValidate
                          ? this.settings.imageHeightMin
                          : 50,
                        cropShowSize: !1,
                        cropAllowInstructionZoom: !1,
                        cropAllowResizeRect: !0,
                        cropAspectRatio: null,
                        cropAspectRatioOptions:
                          this.settings.imageEditorCropRatios,
                        outputCorrectImageExifOrientation: !0,
                        onload: function (t) {
                          if (
                            (c.debug("doka image loaded:", t),
                            e.settings.imageEditorCropRatios &&
                              e.settings.imageEditorCropRatios.length > 0 &&
                              t.width &&
                              t.height)
                          ) {
                            for (
                              var i = t.height / t.width, a = null, l = -1, o = 0;
                              o < e.settings.imageEditorCropRatios.length;
                              o++
                            ) {
                              var r = e.settings.imageEditorCropRatios[o];
                              if (null == r.value) break;
                              if (-1 !== r.value.indexOf(":")) {
                                var n = r.value.split(":");
                                if (n.length > 1) {
                                  var s = parseFloat(n[1]) / parseFloat(n[0]),
                                    u = Math.abs(s - i);
                                  c.debug(
                                    "aspect ratio check : " +
                                      r.value +
                                      " diff: " +
                                      u
                                  ),
                                    (-1 === l || u < l) && ((l = u), (a = s));
                                }
                              }
                            }
                            if (null != a) {
                              if (
                                e.settings.imageSizeValidate &&
                                e.settings.imageResolutionMin
                              ) {
                                var g = Math.sqrt(e.settings.imageResolutionMin),
                                  d = g / a,
                                  f = g * a;
                                c.debug(
                                  "min resolution crop box in ratio width: " +
                                    d +
                                    " height: " +
                                    f
                                ),
                                  e._doka.setOptions({
                                    cropMinImageWidth: d,
                                    cropMinImageHeight: f,
                                  });
                              }
                              c.debug("aspect ratio select : " + a),
                                e._doka.setData({ crop: { aspectRatio: a } });
                            }
                          }
                        },
                        oncancel: function () {
                          e.settings.imageSizeValidate &&
                            e.settings.imageResolutionMin &&
                            e._doka.setOptions({
                              cropMinImageWidth: e.settings.imageWidthMin || 1,
                              cropMinImageHeight: e.settings.imageHeightMin || 1,
                            });
                        },
                        onconfirm: function () {
                          e._doka.setOptions({
                            cropMinImageWidth: e.settings.imageWidthMin || 1,
                            cropMinImageHeight: e.settings.imageHeightMin || 1,
                          });
                        },
                        onloaderror: function (e) {},
                        labelButtonReset: a.default.get(
                          t + "image.editor.button.reset"
                        ),
                        labelButtonCancel: a.default.get(
                          t + "image.editor.button.cancel"
                        ),
                        labelButtonConfirm: a.default.get(
                          t + "image.editor.button.confirm"
                        ),
                        labelStatusAwaitingImage: a.default.get(
                          t + "image.editor.status.waiting"
                        ),
                        labelStatusLoadingImage: a.default.get(
                          t + "image.editor.status.loading"
                        ),
                        labelStatusLoadImageError: a.default.get(
                          t + "image.editor.status.error"
                        ),
                        labelStatusProcessingImage: a.default.get(
                          t + "image.editor.status.processing"
                        ),
                        labelColorBrightness: a.default.get(
                          t + "image.editor.color.brightness"
                        ),
                        labelColorContrast: a.default.get(
                          t + "image.editor.color.contrast"
                        ),
                        labelColorExposure: a.default.get(
                          t + "image.editor.color.exposure"
                        ),
                        labelColorSaturation: a.default.get(
                          t + "image.editor.color.saturation"
                        ),
                        labelResizeWidth: a.default.get(
                          t + "image.editor.resize.width"
                        ),
                        labelResizeHeight: a.default.get(
                          t + "image.editor.resize.height"
                        ),
                        labelResizeApplyChanges: a.default.get(
                          t + "image.editor.resize.apply"
                        ),
                        labelButtonCropZoom: a.default.get(
                          t + "image.editor.crop.zoom"
                        ),
                        labelButtonCropRotateLeft: a.default.get(
                          t + "image.editor.crop.rotate.left"
                        ),
                        labelButtonCropRotateRight: a.default.get(
                          t + "image.editor.crop.rotate.right"
                        ),
                        labelButtonCropFlipHorizontal: a.default.get(
                          t + "image.editor.crop.flip.horizontal"
                        ),
                        labelButtonCropFlipVertical: a.default.get(
                          t + "image.editor.crop.flip.vertical"
                        ),
                        labelButtonCropAspectRatio: a.default.get(
                          t + "image.editor.crop.aspect.ratio"
                        ),
                        labelButtonUtilCrop: a.default.get(
                          t + "image.editor.util.crop"
                        ),
                        labelButtonUtilFilter: a.default.get(
                          t + "image.editor.util.filter"
                        ),
                        labelButtonUtilColor: a.default.get(
                          t + "image.editor.util.color"
                        ),
                        labelButtonUtilResize: a.default.get(
                          t + "image.editor.util.resize"
                        ),
                        labelButtonUtilMarkup: a.default.get(
                          t + "image.editor.util.markup"
                        ),
                        labelMarkupTypeEllipse: a.default.get(
                          t + "image.editor.util.markup.circle"
                        ),
                        labelMarkupTypeText: a.default.get(
                          t + "image.editor.util.markup.text"
                        ),
                        labelMarkupTypeLine: a.default.get(
                          t + "image.editor.util.markup.arrow"
                        ),
                        labelMarkupRemoveShape: a.default.get(
                          t + "image.editor.util.markup.remove"
                        ),
                        labelMarkupToolSelect: a.default.get(
                          t + "image.editor.util.markup.select"
                        ),
                        labelMarkupToolDraw: a.default.get(
                          t + "image.editor.util.markup.draw"
                        ),
                        labelMarkupToolLine: a.default.get(
                          t + "image.editor.util.markup.arrow"
                        ),
                        labelMarkupToolRect: a.default.get(
                          t + "image.editor.util.markup.square"
                        ),
                        labelMarkupToolEllipse: a.default.get(
                          t + "image.editor.util.markup.circle"
                        ),
                        labelMarkupSelectFontSize: a.default.get(
                          t + "image.editor.util.markup.size"
                        ),
                      };
                      this._doka
                        ? this._doka.setOptions(o)
                        : (this._doka = Doka.create(o));
                    } else
                      this._doka && (this._doka.destroy(), delete this._doka);
                    debugger;  
                    return {
                      checkValidity: !1,
                      instantUpload: !0,
                      name: this.settings.field,
                      required: this.settings.required,
                      allowFileTypeValidation:
                        this.settings.fileMimeTypesValidate,
                      acceptedFileTypes: this.settings.fileMimeTypesValidate
                        ? this.settings.fileMimeTypes
                        : [],
                      fileValidateTypeDetectType: function (e, t) {
                        return new Promise(function (i, a) {
                          if ("" === t && e && e.name) {
                            var l = e.name.split(".").pop();
                            "aml" === l
                              ? (t = "application/aml")
                              : "ampkg" === l
                              ? (t = "application/ampkg")
                              : "cdr" === l
                              ? (t = "application/x-cdr")
                              : "stl" === l && (t = "application/sla");
                          }
                          i(t);
                        });
                      },
                      allowFileSizeValidation: this.settings.fileSizeValidate,
                      maxFileSize: this.settings.fileSizeMax,
                      allowMultiple: this.settings.fileMultiple,
                      allowBrowse: !0,
                      allowDrop: !0,
                      allowReorder: !0 === window.clUploadReorder,
                      allowPaste: !1,
                      maxFiles: this.settings.fileCountMax,
                      allowFilePoster: this.settings.imagePreviewAppCloud,
                      allowFilePosterPreview: this.settings.imagePreview,
                      filePosterHeight: this.settings.imagePreview
                        ? this.settings.imagePreviewHeight + 42
                        : 85,
                      filePosterFileVariant: function (t, i) {
                        if (e.files.hasOwnProperty(t)) {
                          var a = e.files[t];
                          if (a.meta && a.meta.variant === i) return a;
                          if (a.childs)
                            for (var l in a.childs) {
                              var o = a.childs[l];
                              if (o.meta && o.meta.variant === i) return o;
                            }
                        }
                        return null;
                      },
                      allowImageValidateSize: this.settings.imageSizeValidate,
                      allowImageValidateComplete:
                        this.settings.imageSizeValidateComplete,
                      imageValidateCompleteResult: function (t, i) {
                        if (e.files.hasOwnProperty(t)) {
                          var a = e.files[t];
                          i
                            ? a.error && (delete a.error, e._storeFile(a))
                            : ((a.error = !0),
                              e._removeFile(a),
                              (e.files[t] = a));
                        }
                      },
                      imageValidateCropRatios:
                        this.settings.imageEditorCropRatios,
                      imageValidateSizeMinWidth: this.settings.imageWidthMin,
                      imageValidateSizeMaxWidth: this.settings.imageWidthMax,
                      imageValidateSizeMinHeight: this.settings.imageHeightMin,
                      imageValidateSizeMaxHeight: this.settings.imageHeightMax,
                      imageValidateSizeMinResolution: this.settings
                        .imageResolutionMin
                        ? this.settings.imageResolutionMin
                        : null,
                      imageValidateSizeMaxResolution: this.settings
                        .imageResolutionMax
                        ? this.settings.imageResolutionMax
                        : null,
                      allowImageExifOrientation: !0,
                      allowImagePreview:
                        this.settings.imagePreview ||
                        (this.settings.imageEditor &&
                          this.settings.imagePreviewAppCloud),
                      allowImageResize: this.settings.imageResize,
                      allowImageTransform: !0,
                      allowImageEdit: this.settings.imageEditor,
                      imageEditIconEdit:
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="padding:5px;" viewBox="0 0 24 24" focusable="false"><path d="M24 18h-4v-14h-14v-4h-2v4h-4v2h4v14h14v4h2v-4h4v-2zm-18 0v-12h12v12h-12z" fill="currentColor" fill-rule="nonzero"/></svg>',
                      allowImageCrop: this.settings.imageCrop,
                      imageTransformBeforeCreateBlob:
                        this.settings.imageProcessCanvas,
                      imageTransformAfterCreateBlob:
                        this.settings.imageProcessBlob,
                      imageResizeMode: "cover",
                      imagePreviewMaxHeight:
                        window.clUploadImagePreviewMax || 265,
                      imagePreviewMaxFileSize: "20MB",
                      imageCropAspectRatio: this.settings.imageEditorCropRatio,
                      imageTransformVariantsIncludeOriginal:
                        this.settings.imageOriginal,
                      imageTransformVariantsOriginalName:
                        this.settings.imageEditor && this.settings.imageOriginal
                          ? "_original"
                          : "original",
                      imageTransformVariantsIncludeDefault: !1,
                      imageTransformOutputMimeType:
                        null == this.settings.imageTransformFormat
                          ? null
                          : "png" === this.settings.imageTransformFormat
                          ? "image/png"
                          : "image/jpeg",
                      imageTransformOutputStripImageHead: !1,
                      imageTransformOutputQuality: 90,
                      imageTransformVariants: this.settings.imageTransforms,
                      imageEditInstantEdit: this.settings.imageEditorOpen,
                      imageEditAllowEdit: !this.settings.imageEditorOpen,
                      imageEditEditor: this._doka,
                      labelIdle: this.settings.text
                        ? this.settings.text
                        : a.default.get(t + "dragdrop"),
                      labelFileWaitingForSize: a.default.get(
                        t + "file.size.waiting"
                      ),
                      labelFileSizeNotAvailable: a.default.get(
                        t + "file.size.notavailable"
                      ),
                      labelFileLoading: a.default.get(t + "file.loading"),
                      labelFileLoadError: a.default.get(t + "file.load.error"),
                      labelFileProcessing: a.default.get(t + "file.uploading"),
                      labelFileProcessingComplete: a.default.get(
                        t + "file.upload.complete"
                      ),
                      labelFileProcessingAborted: a.default.get(
                        t + "file.upload.canceled"
                      ),
                      labelFileProcessingError: a.default.get(
                        t + "file.upload.error"
                      ),
                      labelFileProcessingRevertError: a.default.get(
                        t + "file.upload.error.revert"
                      ),
                      labelFileRemoveError: a.default.get(
                        t + "file.upload.error.remove"
                      ),
                      labelTapToCancel: a.default.get(t + "file.upload.cancel"),
                      labelTapToRetry: a.default.get(t + "file.upload.retry"),
                      labelTapToUndo: a.default.get(t + "file.upload.undo"),
                      labelButtonRemoveItem: a.default.get(
                        t + "file.button.remove"
                      ),
                      labelButtonAbortItemLoad: a.default.get(
                        t + "file.button.remove"
                      ),
                      labelButtonRetryItemLoad: a.default.get(
                        t + "file.button.retry"
                      ),
                      labelButtonAbortItemProcessing: a.default.get(
                        t + "file.button.cancel"
                      ),
                      labelButtonUndoItemProcessing: a.default.get(
                        t + "file.button.undo"
                      ),
                      labelButtonRetryItemProcessing: a.default.get(
                        t + "file.button.retry"
                      ),
                      labelButtonProcessItem: a.default.get(
                        t + "file.button.upload"
                      ),
                      labelMaxFileSizeExceeded: a.default.get(
                        t + "file.size.tobig"
                      ),
                      labelMaxFileSize: a.default.get(t + "file.size.max"),
                      labelFileTypeNotAllowed: a.default.get(
                        t + "file.type.notallowed"
                      ),
                      fileValidateTypeLabelExpectedTypes: a.default.get(
                        t + "file.type.expected"
                      ),
                      imageValidateSizeLabelFormatError: a.default.get(
                        t + "image.type.notsupported"
                      ),
                      imageValidateSizeLabelImageSizeTooSmall: a.default.get(
                        t + "image.size.tosmall"
                      ),
                      imageValidateSizeLabelExpectedMinSize: a.default.get(
                        t + "image.size.expected.min"
                      ),
                      imageValidateSizeLabelExpectedMaxSize: a.default.get(
                        t + "image.size.expected.max"
                      ),
                      imageValidateSizeLabelImageResolutionTooLow: a.default.get(
                        t + "image.resolution.min"
                      ),
                      imageValidateSizeLabelImageResolutionTooHigh: a.default.get(
                        t + "image.resolution.max"
                      ),
                      imageValidateSizeLabelExpectedMinResolution: a.default.get(
                        t + "image.resolution.expected.min"
                      ),
                      imageValidateSizeLabelExpectedMaxResolution: a.default.get(
                        t + "image.resolution.expected.max"
                      ),
                      imageValidateSizeLabelImageRatioInvalid: a.default.get(
                        t + "image.ratio.invalid"
                      ),
                      imageValidateSizeLabelImageRatioExpected: a.default.get(
                        t + "image.ratio.expected"
                      ),
                    };
                  },
                },
                {
                  key: "_triggerEvent",
                  value: function (e, t) {
                    var i = new CustomEvent(e, {
                      detail: t,
                      cancelable: !0,
                      bubbles: !0,
                    });
                    this._pond.element.dispatchEvent(i);
                  },
                },
                {
                  key: "_storeFile",
                  value: function (e) {
                    (this.files[e.uuid] = e),
                      e.parent &&
                        this.files.hasOwnProperty(e.parent) &&
                        (this.files[e.parent].childs ||
                          (this.files[e.parent].childs = {}),
                        (this.files[e.parent].childs[e.uuid] = e)),
                      this._triggerEvent("upload:added", e),
                      e.childs && this._storeFiles(e.childs);
                  },
                },
                {
                  key: "_storeFiles",
                  value: function (e) {
                    for (var t in e)
                      if (e.hasOwnProperty(t)) {
                        var i = e[t];
                        this._storeFile(i);
                      }
                  },
                },
                {
                  key: "_removeFile",
                  value: function (e) {
                    if (
                      (delete this.files[e.uuid],
                      this._triggerEvent("upload:removed", e),
                      e.childs)
                    )
                      for (var t in e.childs) {
                        var i = this.files[t];
                        delete this.files[t],
                          this._triggerEvent("upload:removed", i);
                      }
                  },
                },
                {
                  key: "_addStoreFiles",
                  value: function () {
                    for (var e in this.files)
                      if (this.files.hasOwnProperty(e)) {
                        var t = this.files[e];
                        if (!t.parent) {
                          var i = {
                            type: "local",
                            file: {
                              serverId: e,
                              name: t.name,
                              size: t.size,
                              type: t.mimeType,
                            },
                            metadata: {
                              imageSize: t.meta.width
                                ? { height: t.meta.height, width: t.meta.width }
                                : void 0,
                              imageValidate: this.settings.imageSizeValidate,
                            },
                          };
                          this._pond.addFile(e, i);
                        }
                      }
                  },
                },
                {
                  key: "_download",
                  value: function (t, i) {
                    var a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "upload.jpg";
                    return new e.default(t, {
                      method: "GET",
                      responseType: "blob",
                      onProgress: i,
                    }).then(function (e) {
                      return new File([e.data], a, { type: e.data.type });
                    });
                  },
                },
                {
                  key: "_upload",
                  value: function (e, t) {
                    var i = this;
                    try {
                      var a = this._provider.upload(e, t),
                        l = new Promise(function (e, t) {
                          a.then(function (a) {
                            for (var l = 0; l < a.length; l++) delete a[l]._file;
                            var o = a[0];
                            i._fileMeta
                              .saveFile(o)
                              .then(function (t) {
                                var l = [],
                                  o = i._editAsync(t);
                                if (o) l.push(o);
                                else {
                                  i._storeFile(t), i._storeAsyncFile(t);
                                  for (var r = 1; r < a.length; r++) {
                                    var n = a[r];
                                    (n.parent = t.uuid),
                                      l.push(
                                        i._fileMeta
                                          .saveFile(n)
                                          .then(function (e) {
                                            return i._storeFile(e), e;
                                          })
                                      );
                                  }
                                }
                                Promise.all(l).then(function (i) {
                                  i.unshift(t), e(i);
                                });
                              })
                              .catch(function (e) {
                                t(e);
                              });
                          }),
                            a.catch(function (e) {
                              t(e);
                            });
                        });
                      return (
                        (l.cancel = function () {
                          a.cancel();
                        }),
                        l
                      );
                    } catch (o) {
                      return Promise.reject(o);
                    }
                  },
                },
                {
                  key: "_remove",
                  value: function (e) {
                    var t = this;
                    return this._fileMeta
                      .removeFile(e)
                      .then(function () {
                        t._removeFile(e);
                      })
                      .catch(function (e) {
                        throw e;
                      });
                  },
                },
                {
                  key: "_editAsync",
                  value: function (e) {
                    var t = this;
                    if (
                      this.settings.pdfConvert &&
                      this.settings.imageEditor &&
                      "application/pdf" === e.mimeType &&
                      e.childs
                    )
                      for (var i in e.childs) {
                        var a = e.childs[i],
                          l = a.url;
                        return (
                          (l = (l = l.replace(
                            "https://upload.dev.cloudlift.app/s/dev",
                            "https://storage.googleapis.com/cloudlift-app-cloud-dev-upload"
                          )).replace(
                            "https://upload.cloudlift.app/s",
                            "https://storage.googleapis.com/cloudlift-app-cloud-prod-upload"
                          )),
                          this._download(l, null, a.name).then(function (i) {
                            return (
                              t._pond.removeFile(),
                              t._pond.addFile(i).then(function (i) {
                                t._asyncOriginal = e;
                              }),
                              {}
                            );
                          })
                        );
                      }
                    return !1;
                  },
                },
                {
                  key: "_storeAsyncFile",
                  value: function (e) {
                    this._asyncOriginal &&
                      (delete this._asyncOriginal.childs,
                      (this._asyncOriginal.parent = e.uuid),
                      this._storeFile(this._asyncOriginal),
                      delete this._asyncOriginal);
                  },
                },
                {
                  key: "_getFilePondServerImpl",
                  value: function () {
                    var e = this;
                    return {
                      process: function (i, a, l, o, r, n, s) {
                        Array.isArray(a) || (a = [{ file: a }]);
                        for (var u = [], g = 0; g < a.length; g++)
                          if (a[g].file) {
                            var d = e._fileMeta.fromNative(a[g].file),
                              f = a[g].name;
                            if (
                              (f || (f = "original"),
                              (d.meta.variant = f),
                              "original" === d.meta.variant &&
                                l.imageSize &&
                                ((d.meta.width = l.imageSize.width),
                                (d.meta.height = l.imageSize.height)),
                              "original" !== d.meta.variant)
                            ) {
                              var p = d.name.lastIndexOf("."),
                                m = "";
                              -1 !== p && (m = d.name.substring(p)),
                                (d.name =
                                  d.name.replace(m, "") +
                                  ("_" === d.meta.variant.charAt(0) ? "" : "_") +
                                  d.meta.variant +
                                  m);
                            }
                            (d.meta = t.default.extend(
                              d.meta,
                              e.settings.metaData
                            )),
                              "original" === d.meta.variant
                                ? u.unshift(d)
                                : u.push(d);
                          }
                        var c = e._upload(u, function (e) {
                          n(e.lengthComputable, e.loaded, e.total);
                        });
                        return (
                          c.then(function (e) {
                            o(e[0].uuid);
                          }),
                          c.catch(function (e) {
                            r(e);
                          }),
                          {
                            abort: function () {
                              c.cancel(), s();
                            },
                          }
                        );
                      },
                      revert: function (t, i, a) {
                        var l = e.files[t];
                        l
                          ? e
                              ._remove(l)
                              .then(function () {
                                return i();
                              })
                              .catch(function (e) {
                                return a(e);
                              })
                          : (c.warn("no file found for: " + t), i());
                      },
                      remove: function (t, i, a) {
                        var l = e.files[t];
                        l
                          ? e
                              ._remove(l)
                              .then(function () {
                                return i();
                              })
                              .catch(function (e) {
                                return a(e);
                              })
                          : (c.warn("no file found for source: " + t), i());
                      },
                      restore: function (t, i, a, l, o, r) {
                        var n = e.files[t];
                        if (n) {
                          var s = n.url,
                            u = e._download(s, function (e) {
                              l(e.lengthComputable, e.loaded, e.total);
                            });
                          return (
                            u
                              .then(function (e) {
                                i(e);
                              })
                              .catch(function (e) {
                                a(e);
                              }),
                            {
                              abort: function () {
                                u.cancel(), o();
                              },
                            }
                          );
                        }
                        a("no file found for source: " + t);
                      },
                      load: function (t, i, a, l, o, r) {
                        var n = e.files[t];
                        if (n) {
                          var s = n.url,
                            u = e._download(s, function (e) {
                              l(e.lengthComputable, e.loaded, e.total);
                            });
                          return (
                            u
                              .then(function (e) {
                                i(e);
                              })
                              .catch(function (e) {
                                a(e);
                              }),
                            {
                              abort: function () {
                                u.cancel(), o();
                              },
                            }
                          );
                        }
                        a("no file found for source: " + t);
                      },
                      fetch: function (t, i, a, l, o, r) {
                        var n = e._download(t, function (e) {
                          l(e.lengthComputable, e.loaded, e.total);
                        });
                        return (
                          n
                            .then(function (e) {
                              i(e);
                            })
                            .catch(function (e) {
                              a(e);
                            }),
                          {
                            abort: function () {
                              n.cancel(), o();
                            },
                          }
                        );
                      },
                    };
                  },
                },
              ]),
              h
            );
          })();
          M.providers = [];
          var z = M;
          exports.default = z;
        },
        {
          "./request": "mx8w",
          "./util": "zY0S",
          "./file-meta": "UfwE",
          "./translate": "IkY8",
          filepond: "uX4S",
          "filepond/dist/filepond.css": "DAr1",
          "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css":
            "DAr1",
          "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css":
            "DAr1",
          "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css":
            "DAr1",
          "filepond-plugin-file-validate-type": "wHKG",
          "filepond-plugin-file-validate-size": "P0Pt",
          "filepond-plugin-image-exif-orientation": "iSD1",
          "filepond-plugin-image-preview": "qxYJ",
          "filepond-plugin-image-edit": "FBSD",
          "filepond-plugin-image-crop": "CW1o",
          "filepond-plugin-image-resize": "GTwC",
          "filepond-plugin-image-transform": "wsUY",
          "./filepond-plugin-image-validate-complete": "R4qC",
          "./filepond-plugin-appcloud": "PWTW",
          loglevel: "ohSP",
        },
      ],
      xAgl: [
        function (require, module, exports) {
          var define;
          var e;
          !(function (n, t) {
            "function" == typeof e && e.amd
              ? e([], t)
              : "object" == typeof exports
              ? (module.exports = t())
              : (n.loadjs = t());
          })(this, function () {
            var e = function () {},
              n = {},
              t = {},
              r = {};
            function s(e, n) {
              if (e) {
                var s = r[e];
                if (((t[e] = n), s))
                  for (; s.length; ) s[0](e, n), s.splice(0, 1);
              }
            }
            function i(n, t) {
              n.call && (n = { success: n }),
                t.length ? (n.error || e)(t) : (n.success || e)(n);
            }
            function o(n, t, r, s) {
              var i,
                c,
                f = document,
                u = r.async,
                l = (r.numRetries || 0) + 1,
                a = r.before || e,
                h = n.replace(/[\?|#].*$/, ""),
                p = n.replace(/^(css|img)!/, "");
              (s = s || 0),
                /(^css!|\.css$)/.test(h)
                  ? (((c = f.createElement("link")).rel = "stylesheet"),
                    (c.href = p),
                    (i = "hideFocus" in c) &&
                      c.relList &&
                      ((i = 0), (c.rel = "preload"), (c.as = "style")))
                  : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)
                  ? ((c = f.createElement("img")).src = p)
                  : (((c = f.createElement("script")).src = n),
                    (c.async = void 0 === u || u)),
                (c.onload =
                  c.onerror =
                  c.onbeforeload =
                    function (e) {
                      var f = e.type[0];
                      if (i)
                        try {
                          c.sheet.cssText.length || (f = "e");
                        } catch (u) {
                          18 != u.code && (f = "e");
                        }
                      if ("e" == f) {
                        if ((s += 1) < l) return o(n, t, r, s);
                      } else if ("preload" == c.rel && "style" == c.as)
                        return (c.rel = "stylesheet");
                      t(n, f, e.defaultPrevented);
                    }),
                !1 !== a(n, c) && f.head.appendChild(c);
            }
            function c(e, t, r) {
              var c, f;
              if ((t && t.trim && (c = t), (f = (c ? r : t) || {}), c)) {
                if (c in n) throw "LoadJS";
                n[c] = !0;
              }
              function u(n, t) {
                !(function (e, n, t) {
                  var r,
                    s,
                    i = (e = e.push ? e : [e]).length,
                    c = i,
                    f = [];
                  for (
                    r = function (e, t, r) {
                      if (("e" == t && f.push(e), "b" == t)) {
                        if (!r) return;
                        f.push(e);
                      }
                      --i || n(f);
                    },
                      s = 0;
                    s < c;
                    s++
                  )
                    o(e[s], r, t);
                })(
                  e,
                  function (e) {
                    i(f, e), n && i({ success: n, error: t }, e), s(c, e);
                  },
                  f
                );
              }
              if (f.returnPromise) return new Promise(u);
              u();
            }
            return (
              (c.ready = function (e, n) {
                return (
                  (function (e, n) {
                    e = e.push ? e : [e];
                    var s,
                      i,
                      o,
                      c = [],
                      f = e.length,
                      u = f;
                    for (
                      s = function (e, t) {
                        t.length && c.push(e), --u || n(c);
                      };
                      f--;
  
                    )
                      (i = e[f]),
                        (o = t[i]) ? s(i, o) : (r[i] = r[i] || []).push(s);
                  })(e, function (e) {
                    i(n, e);
                  }),
                  c
                );
              }),
              (c.done = function (e) {
                s(e, []);
              }),
              (c.reset = function () {
                (n = {}), (t = {}), (r = {});
              }),
              (c.isDefined = function (e) {
                return e in n;
              }),
              c
            );
          });
        },
        {},
      ],
      U86w: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = n(require("loadjs"));
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function r(e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(e, n) {
            for (var r = 0; r < n.length; r++) {
              var t = n[r];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
            }
          }
          function u(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          }
          var a = (function () {
              function n() {
                r(this, n);
              }
              return (
                u(n, null, [
                  {
                    key: "load",
                    value: function (n, r) {
                      var t =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { async: !0 };
                      return (t.returnPromise = !0), (0, e.default)(n, r, t);
                    },
                  },
                  {
                    key: "isReady",
                    value: function (n) {
                      return (
                        Array.isArray(n) || (n = [n]),
                        new Promise(function (r, t) {
                          e.default.ready(n, function () {
                            r(n);
                          });
                        })
                      );
                    },
                  },
                  {
                    key: "isDefined",
                    value: function (n) {
                      return e.default.isDefined(n);
                    },
                  },
                ]),
                n
              );
            })(),
            o = a;
          exports.default = o;
        },
        { loadjs: "xAgl" },
      ],
      cEki: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = u(require("./request")),
            t = u(require("./util")),
            n = o(require("loglevel"));
          function r(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              n = new WeakMap();
            return (r = function (e) {
              return e ? n : t;
            })(e);
          }
          function o(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(t);
            if (n && n.has(e)) return n.get(e);
            var o = {},
              u = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                var c = u ? Object.getOwnPropertyDescriptor(e, i) : null;
                c && (c.get || c.set)
                  ? Object.defineProperty(o, i, c)
                  : (o[i] = e[i]);
              }
            return (o.default = e), n && n.set(e, o), o;
          }
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i(e) {
            return (i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function c(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function l(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e;
          }
          var d = (function () {
            function r(e) {
              c(this, r);
              this.settings = t.default.extend(
                { api: "", path: { products: "/products/{handle}.{view}" } },
                e || {}
              );
            }
            return (
              l(
                r,
                [
                  {
                    key: "fakeProduct",
                    value: function (e) {
                      (this.isProduct = function () {
                        return !0;
                      }),
                        (this.getHandleFromUrl = function () {
                          return e;
                        });
                    },
                  },
                  {
                    key: "isAdmin",
                    value: function () {
                      return null != document.getElementById("admin_bar_iframe");
                    },
                  },
                  {
                    key: "isProduct",
                    value: function () {
                      return (
                        -1 !== window.location.pathname.indexOf("/products/") ||
                        this.isProductPreview()
                      );
                    },
                  },
                  {
                    key: "isProductPreview",
                    value: function () {
                      return (
                        -1 !==
                        window.location.pathname.indexOf("/products_preview")
                      );
                    },
                  },
                  {
                    key: "getHandleFromUrl",
                    value: function () {
                      var e = (
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : location.pathname
                        )
                          .replace(/\/$/, "")
                          .split("/"),
                        t =
                          ("products" == e[e.length - 2] ||
                            "products_preview" === e.pop()) &&
                          e[e.length - 1].replace(/(.*)?\?.*$/, "$1");
                      return decodeURIComponent(t);
                    },
                  },
                  {
                    key: "tryGetProduct",
                    value: function () {
                      return this.isProduct()
                        ? this.getProduct()
                        : new Promise(function (e, t) {
                            e(null);
                          });
                    },
                  },
                  {
                    key: "tryGetProductMap",
                    value: function () {
                      return this.isProduct()
                        ? this.getProduct().then(function (e) {
                            return r.products;
                          })
                        : new Promise(function (e, t) {
                            e(r.products);
                          });
                    },
                  },
                  {
                    key: "parseProductJsonElements",
                    value: function () {
                      var e = document.querySelectorAll('[id^="ProductJson-"]');
                      if (
                        (0 === e.length &&
                          (e = document.querySelectorAll(
                            '[data-product-json], [data-section-type="dynamic-featured-product"]'
                          )),
                        e.length > 0)
                      )
                        for (var t = 0; t < e.length; t++) {
                          var o = e[t];
                          try {
                            var u = JSON.parse(o.innerHTML);
                            "object" === i(u.product) && (u = u.product),
                              u.handle && (r.products[u.handle + ".js"] = u);
                          } catch (c) {
                            n.debug("error parsing ProductJson: ", o, c);
                          }
                        }
                    },
                  },
                  {
                    key: "getProduct",
                    value: function (t) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "js";
                      if (
                        !t &&
                        !(t = this.getHandleFromUrl()) &&
                        this.isProductPreview()
                      ) {
                        var o = function (e) {
                          if (r.products.hasOwnProperty(e))
                            return {
                              v: new Promise(function (t, n) {
                                t(r.products[e]);
                              }),
                            };
                        };
                        for (var u in r.products) {
                          var c = o(u);
                          if ("object" === i(c)) return c.v;
                        }
                      }
                      var a,
                        l = t + "." + n;
                      return r.products[l]
                        ? new Promise(function (e, t) {
                            e(r.products[l]);
                          })
                        : (t
                            ? (a =
                                this.settings.api +
                                this.settings.path.products
                                  .replace("{handle}", t)
                                  .replace("{view}", n))
                            : this.isProductPreview() &&
                              (a = window.location.href.replace(
                                "products_preview",
                                "products_preview." + n
                              )),
                          new e.default(a, {
                            method: "GET",
                            responseType: "json",
                          })
                            .then(function (e) {
                              var t = e.data;
                              return (
                                "json" === n && (t = e.data.product),
                                (r.products[l] = t),
                                t
                              );
                            })
                            .catch(function (e) {
                              throw e;
                            }));
                    },
                  },
                  {
                    key: "isTheme",
                    value: function (e) {
                      if (window.Shopify && window.Shopify.theme) {
                        if (
                          "Dawn" === e &&
                          887 === window.Shopify.theme.theme_store_id
                        )
                          return !0;
                        if (
                          window.Shopify.theme.name &&
                          -1 !==
                            window.Shopify.theme.name
                              .toLowerCase()
                              .indexOf(e.toLowerCase())
                        )
                          return !0;
                      }
                      return !1;
                    },
                  },
                  {
                    key: "onThemeSectionEvent",
                    value: function (e, t) {
                      return document.addEventListener("shopify:section:" + e, t);
                    },
                  },
                  {
                    key: "findProductForms",
                    value: function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : document
                      ).querySelectorAll('form[action*="/cart/add"]');
                    },
                  },
                  {
                    key: "findProductFormBestMatch",
                    value: function (e, t) {
                      var n = "#product_form_" + e,
                        r = document.querySelector(n);
                      if (!r) {
                        var o = null;
                        if (t && t.srcEl)
                          for (var u = t.srcEl.parentNode; u; ) {
                            if ((o = this.findProductForms(u)).length) {
                              t.parentEl = u;
                              break;
                            }
                            u = u.parentNode;
                          }
                        if (
                          ((null != o && 0 !== o.length) ||
                            (o = this.findProductForms()),
                          1 === o.length)
                        )
                          return o[0];
                        if (o.length > 1)
                          for (var i = 0; i < o.length; i++) {
                            var c = (r = o[i]).getAttribute("id");
                            if (!c || -1 === c.indexOf("installment")) return r;
                          }
                      }
                      return r;
                    },
                  },
                  {
                    key: "findProductFormVariantId",
                    value: function (e) {
                      if (null != e) {
                        var t = e.querySelector("[name=id]");
                        if (null != t && t.value) return t.value;
                      }
                      return null;
                    },
                  },
                  {
                    key: "findProductFormQuantity",
                    value: function (e) {
                      if (null != e) {
                        var t = e.querySelector("[name=quantity]");
                        if (null != t && t.value) return parseInt(t.value);
                      }
                      return 1;
                    },
                  },
                  {
                    key: "findExpressPaymentButtons",
                    value: function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : document
                      ).querySelectorAll(
                        '.shopify-payment-button, [data-shopify="payment-button"]'
                      );
                    },
                  },
                  {
                    key: "findExpressDynamicCheckoutCart",
                    value: function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : document
                      ).querySelectorAll(
                        '#dynamic-checkout-cart, [data-shopify="dynamic-checkout-cart"]'
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getInstance",
                    value: function (e) {
                      return r._instance
                        ? r._instance
                        : ((r._instance = new r(e)), r._instance);
                    },
                  },
                ]
              ),
              r
            );
          })();
          (d.products = {}), (d.collections = {});
          var f = d;
          exports.default = f;
        },
        { "./request": "mx8w", "./util": "zY0S", loglevel: "ohSP" },
      ],
      RRxM: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = l(require("./upload")),
            i = l(require("./util")),
            t = l(require("./translate")),
            n = o(require("loglevel")),
            a = l(require("./resource-loader")),
            s = l(require("./shopify-store"));
          function r(e) {
            if ("function" != typeof WeakMap) return null;
            var i = new WeakMap(),
              t = new WeakMap();
            return (r = function (e) {
              return e ? t : i;
            })(e);
          }
          function o(e, i) {
            if (!i && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var t = r(i);
            if (t && t.has(e)) return t.get(e);
            var n = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e)
              if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(n, s, o)
                  : (n[s] = e[s]);
              }
            return (n.default = e), t && t.set(e, n), n;
          }
          function l(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function d(e, i) {
            if (!(e instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(e, i) {
            for (var t = 0; t < i.length; t++) {
              var n = i[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          function c(e, i, t) {
            return i && u(e.prototype, i), t && u(e, t), e;
          }
          var f = (function () {
              function r(e, t) {
                d(this, r);
                (this.config = e),
                  (this.settings = i.default.extend(
                    {
                      api: "https://api.cloudlift.app",
                      assets: "https://assets.cloudlift.app",
                      queryParams: {},
                      provider: "google",
                      selector: ".upload-container",
                      selectorForm: 'form[action*="/cart/add"]',
                      classNamePrefix: "cl-upload",
                      product: {},
                      link: !0,
                    },
                    t || {}
                  )),
                  (this.shopifyStore = s.default.getInstance()),
                  i.default.isElement(this.settings.selector)
                    ? (this.element = this.settings.selector)
                    : (this.element = document.querySelector(
                        this.settings.selector
                      )),
                  n.info("--\x3e new upload-field: ", this.element),
                  null != this.element
                    ? this._init()
                    : n.warn(
                        "no elements with selector found: ",
                        this.settings.selector
                      );
              }
              return (
                c(r, [
                  {
                    key: "uploadFile",
                    value: function (e) {
                      return this._upload
                        ? this._upload.upload(e)
                        : Promise.reject("upload not ready");
                    },
                  },
                  {
                    key: "fileCount",
                    value: function () {
                      return this._upload.countFiles();
                    },
                  },
                  {
                    key: "updateConfig",
                    value: function (e) {
                      n.debug("uploadField.updateConfig: ", e);
                      var t = this.config.fileMultiple,
                        a = this.config.hidden,
                        s = this.config.imageSizeValidate;
                      this.config = i.default.extend(this.config, e);
                      var r = this._mapOptions();
                      this._upload.updateOptions(r),
                        this._displayUpload(),
                        this._displayCounter(),
                        this._removeErrors(),
                        (t === this.config.fileMultiple &&
                          a == this.config.hidden) ||
                          this._rebuildInputs(),
                        (s || e.imageSizeValidate) &&
                          this._upload.validateFiles();
                    },
                  },
                  {
                    key: "updateText",
                    value: function (e) {
                      this._upload &&
                        ((e = t.default.translate(e)),
                        this.updateConfig({ text: e }));
                    },
                  },
                  {
                    key: "updateLabel",
                    value: function (e) {
                      (e = t.default.translate(e)),
                        this._label
                          ? e
                            ? (this._label.innerHTML = e)
                            : (this._label.parentNode.removeChild(this._label),
                              delete this._label)
                          : e &&
                            ((this._label = document.createElement("label")),
                            (this._label.className =
                              this.settings.classNamePrefix + "--label"),
                            (this._label.innerHTML = e),
                            this._wrapper.insertBefore(
                              this._label,
                              this._uploadDiv
                            ));
                    },
                  },
                  {
                    key: "updateCss",
                    value: function (e) {
                      this.removeCss(),
                        (this._style = i.default.addStyleElement(
                          e,
                          this.settings.styleSelector
                        ));
                    },
                  },
                  {
                    key: "updateInputFields",
                    value: function (e) {
                      var i = this;
                      if (
                        (!this._inputFields ||
                          (e && 0 !== e.length) ||
                          (this._inputFields.parentNode.removeChild(
                            this._inputFields
                          ),
                          delete this._inputFields),
                        e && e.length > 0)
                      ) {
                        if (this._inputFields)
                          for (; this._inputFields.firstChild; )
                            this._inputFields.removeChild(
                              this._inputFields.lastChild
                            );
                        else
                          (this._inputFields = document.createElement("div")),
                            (this._inputFields.className =
                              this.settings.classNamePrefix + "--input-fields"),
                            this._wrapper.insertBefore(
                              this._inputFields,
                              this._wrapper.firstChild
                            );
                        for (
                          var n = function (n) {
                              var a = e[n];
                              a.field || (a.field = "input_" + n);
                              var s = document.createElement("div");
                              s.className =
                                i.settings.classNamePrefix + "--input-field";
                              var r = i.config.uuid + "-field-" + n;
                              if (a.label) {
                                var o = document.createElement("label");
                                (o.className =
                                  i.settings.classNamePrefix + "--label"),
                                  o.setAttribute("for", r),
                                  (o.innerHTML = t.default.translate(a.label)),
                                  s.appendChild(o);
                              }
                              var l = function () {
                                var e = document.createElement("input");
                                return (
                                  (e.type = a.type),
                                  (e.required = !0 === a.required),
                                  a.className
                                    ? (e.className = a.className)
                                    : (e.className =
                                        i.settings.classNamePrefix + "--input"),
                                  a.min && (e.minLength = a.min),
                                  a.max && (e.maxLength = a.max),
                                  i.config.fieldProperty
                                    ? (e.name =
                                        i.config.fieldProperty +
                                        "[" +
                                        a.field +
                                        "]")
                                    : (e.name = a.field),
                                  e.setAttribute("id", r),
                                  i._linkProductForm(e),
                                  e
                                );
                              };
                              if ("select" === a.type) {
                                var d = document.createElement("select");
                                if (
                                  ((d.required = !0 === a.required),
                                  a.className
                                    ? (d.className = a.className)
                                    : (d.className =
                                        i.settings.classNamePrefix + "--input"),
                                  i.config.fieldProperty
                                    ? (d.name =
                                        i.config.fieldProperty +
                                        "[" +
                                        a.field +
                                        "]")
                                    : (d.name = a.field),
                                  d.setAttribute("id", r),
                                  i._linkProductForm(d),
                                  a.value)
                                )
                                  for (
                                    var u = a.value.split(","), c = 0;
                                    c < u.length;
                                    c++
                                  ) {
                                    var f = u[c],
                                      h = document.createElement("option");
                                    (h.value = f),
                                      (h.innerText = f),
                                      d.appendChild(h);
                                  }
                                s.appendChild(d);
                              } else if ("textarea" === a.type) {
                                var p = document.createElement("textarea");
                                (p.required = !0 === a.required),
                                  a.className
                                    ? (p.className = a.className)
                                    : (p.className =
                                        i.settings.classNamePrefix + "--input"),
                                  a.min && (p.minLength = a.min),
                                  a.max && (p.maxLength = a.max),
                                  i.config.fieldProperty
                                    ? (p.name =
                                        i.config.fieldProperty +
                                        "[" +
                                        a.field +
                                        "]")
                                    : (p.name = a.field),
                                  a.value && (p.placeholder = a.value),
                                  p.setAttribute("id", r),
                                  i._linkProductForm(p),
                                  s.appendChild(p);
                              } else if ("radio" === a.type) {
                                if (a.value)
                                  for (
                                    var g = a.value.split(","), m = 0;
                                    m < g.length;
                                    m++
                                  ) {
                                    var v = g[m],
                                      _ = document.createElement("label");
                                    (_.style.display = "block"),
                                      (_.style.cursor = "pointer"),
                                      (_.innerText = v);
                                    var y = l();
                                    (y.value = v),
                                      _.insertBefore(y, _.firstChild),
                                      s.appendChild(_);
                                  }
                              } else if ("color" === a.type) {
                                var C = !1;
                                if (a.value) {
                                  var b = a.value.split(",");
                                  if (b.length > 1) {
                                    (C = !0), (a.type = "radio");
                                    for (var x = 0; x < b.length; x++) {
                                      var k = b[x],
                                        M = document.createElement("label");
                                      (M.style.display = "inline-block"),
                                        (M.style.cursor = "pointer"),
                                        (M.innerHTML =
                                          '<div class="cl-upload-color-rect" style="background-color:' +
                                          k +
                                          ';">');
                                      var w = l();
                                      (w.value = k),
                                        (w.style.display = "none"),
                                        0 === x && (w.checked = !0),
                                        M.insertBefore(w, M.firstChild),
                                        s.appendChild(M);
                                    }
                                    a.type = "color";
                                  }
                                }
                                if (!C) {
                                  var E = null;
                                  try {
                                    ((E = l()).value = "!"),
                                      "color" === E.type && "!" !== E.value
                                        ? a.value && (E.value = a.value)
                                        : (E = null);
                                  } catch (P) {
                                    E = null;
                                  }
                                  null == E &&
                                    ((a.type = "text"),
                                    ((E = l()).pattern = "#[0-9A-Fa-f]{6}"),
                                    (E.placeholder = "#000000"),
                                    a.value && (E.value = a.value)),
                                    s.appendChild(E);
                                }
                              } else {
                                var F = l();
                                "checkbox" === a.type && (F.value = "✔"),
                                  a.value &&
                                    "text" === a.type &&
                                    (F.placeholder = a.value),
                                  s.appendChild(F);
                              }
                              i._inputFields.appendChild(s);
                            },
                            a = 0;
                          a < e.length;
                          a++
                        )
                          n(a);
                      }
                    },
                  },
                  {
                    key: "removeCss",
                    value: function () {
                      this._style &&
                        this._style.parentNode.removeChild(this._style);
                    },
                  },
                  {
                    key: "validate",
                    value: function () {
                      var e = this,
                        i = [],
                        a = "upload.config.error.",
                        s = this._upload.countFiles();
                      if (
                        (this.config.required &&
                          s <= 0 &&
                          i.push(t.default.get(a + "required")),
                        0 === i.length &&
                          (s < this.config.fileCountMin &&
                            i.push(
                              t.default.get(a + "fileCountMin", {
                                min: this.config.fileCountMin,
                              })
                            ),
                          s > this.config.fileCountMax &&
                            i.push(
                              t.default.get(a + "fileCountMax", {
                                max: this.config.fileCountMax,
                              })
                            )),
                        this._upload.isReady() ||
                          i.push(t.default.get(a + "ready")),
                        this._inputFields)
                      ) {
                        for (
                          var r = !0,
                            o = this._inputFields.querySelectorAll("[required]"),
                            l = 0;
                          l < o.length;
                          l++
                        ) {
                          var d = o[l];
                          d.checkValidity() ||
                            (d.classList.add(
                              this.settings.classNamePrefix + "--invalid"
                            ),
                            (r = !1));
                        }
                        if (!r) {
                          i.push(t.default.get(a + "inputs"));
                          this._inputFields.addEventListener(
                            "change",
                            function i() {
                              e._removeErrors(),
                                e._inputFields.removeEventListener("change", i);
                            }
                          );
                        }
                      }
                      return (
                        n.debug("validated upload-config: ", this.config, i),
                        this._displayErrors(i),
                        0 === i.length
                      );
                    },
                  },
                  {
                    key: "clearValidations",
                    value: function () {
                      this._removeErrors();
                    },
                  },
                  {
                    key: "clearFiles",
                    value: function () {
                      this._upload.removeFiles();
                    },
                  },
                  {
                    key: "restore",
                    value: function (e) {
                      this._upload.restoreFiles(e);
                    },
                  },
                  {
                    key: "send",
                    value: function (e, i) {
                      return this._upload._fileMeta.sendTemplate(e, i);
                    },
                  },
                  {
                    key: "tag",
                    value: function (e, i) {
                      return this._upload._fileMeta.tagOrder(e, i);
                    },
                  },
                  {
                    key: "onSubmit",
                    value: function () {
                      var e = this;
                      this.config.fileSubmitRemove &&
                        i.default.removeCookie("token"),
                        this.config.fileSubmitClear &&
                          setTimeout(function () {
                            e.clearFiles();
                          }, 1e3);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this._upload && this._upload.destroy(),
                        this.removeCss(),
                        this.element.removeChild(this._wrapper);
                    },
                  },
                  {
                    key: "_init",
                    value: function () {
                      var i = this;
                      this.config.css && this.updateCss(this.config.css),
                        (this._wrapper = document.createElement("div")),
                        (this._wrapper.className =
                          this.settings.classNamePrefix +
                          "--wrapper " +
                          this.config.className),
                        this._wrapper.setAttribute("id", this.config.uuid),
                        (this._uploadDiv = document.createElement("div")),
                        (this._uploadDiv.className =
                          this.settings.classNamePrefix + "--area"),
                        this._wrapper.appendChild(this._uploadDiv),
                        this.element.appendChild(this._wrapper),
                        this._findProductForm(),
                        this.config.text &&
                          (this.config.text = t.default.translate(
                            this.config.text
                          )),
                        this.config.label && this.updateLabel(this.config.label),
                        this.config.inputFields &&
                          this.updateInputFields(this.config.inputFields),
                        this._loadResources().then(function () {
                          i._checkImageValidateVariants();
                          var t = i._mapOptions();
                          (i._upload = new e.default(t)),
                            (i._uploadDiv = i._upload.getElement()),
                            i._displayFileGrid(),
                            i._displayUpload(),
                            i._subscribeEvents(),
                            i._upload._triggerEvent("upload:ready", i),
                            i._hasVariantConfigs() &&
                              (i.settings.product && i.settings.product.id
                                ? i._watchVariantChanges()
                                : n.warn(
                                    "variantConfigs not supported - no product is set for config: " +
                                      i.config.uuid
                                  )),
                            !1 !== window.clInApp &&
                              i._isInApp(i._getAgent()) &&
                              i._checkInAppFilePicker();
                        });
                    },
                  },
                  {
                    key: "_mapOptions",
                    value: function () {
                      var e = this,
                        t = this.config.fieldId;
                      t += "[]";
                      var a = {};
                      if (
                        (this.settings.product &&
                          this.settings.product.id &&
                          ((a.productId = this.settings.product.id),
                          (a.productHandle = this.settings.product.handle),
                          (a.productTitle = this.settings.product.title)),
                        this.element.dataset)
                      )
                        for (var s in this.element.dataset)
                          if (this.element.dataset.hasOwnProperty(s)) {
                            var r = this.element.dataset[s];
                            if ("config" === s) {
                              try {
                                var o = JSON.parse(r);
                                this.config = i.default.extend(this.config, o);
                              } catch (d) {
                                n.warn("failed to parse data-config: " + r, d);
                              }
                              continue;
                            }
                            (a[s] = isNaN(Number(r)) ? r : Number(r)),
                              ("orderId" !== s && "itemId" !== s) ||
                                (this.settings.queryParams[s] = r);
                          }
                      var l = {};
                      return (
                        this.config.imageThumbnail &&
                          !this.config.serverTransform &&
                          (l.thumbnail = function (i) {
                            return (
                              (i.resize = {
                                size: {
                                  width: e.config.imageThumbnailWidth,
                                  height: e.config.imageThumbnailHeight,
                                },
                              }),
                              i
                            );
                          }),
                        this.config.imageEditor &&
                          (l.original = function (e) {
                            return e;
                          }),
                        this.config.imageTransforms &&
                          (l = this.config.imageTransforms),
                        this.config.fileMultiple ||
                          ((this.config.fileCountMin = 0),
                          (this.config.fileCountMax = 1)),
                        {
                          selector: this._uploadDiv,
                          provider: this.settings.provider,
                          api: this.settings.api,
                          queryParams: this.settings.queryParams,
                          field: t,
                          text: this.config.text,
                          required: !1,
                          metaData: a,
                          fileMimeTypesValidate:
                            this.config.fileMimeTypesValidate,
                          fileMimeTypes: this.config.fileMimeTypes,
                          fileSizeMax:
                            (this.config.fileSizeMax &&
                            this.config.fileSizeMax < this.config.fileSizeMaxPlan
                              ? this.config.fileSizeMax
                              : this.config.fileSizeMaxPlan) + "MB",
                          fileMultiple: this.config.fileMultiple,
                          fileCountMin: this.config.fileCountMin,
                          fileCountMax: this.config.fileCountMax,
                          fileFetch: this.config.fileFetch,
                          fileFetchConfig: this.config.uuid,
                          pdfConvert: this.config.pdfConvert,
                          imageTransforms: l,
                          imageOriginal:
                            this.config.imageOriginal || !this.config.imageEditor,
                          imageResize: this.config.imageThumbnail,
                          imageCrop: this.config.imageEditor,
                          imageEditor: this.config.imageEditor,
                          imageEditorOpen: this.config.imageEditorOpen,
                          imageEditorUtils: this.config.imageEditorUtils,
                          imageEditorCropRatio:
                            this.config.imageEditorCropRestrict &&
                            this.config.imageEditorCropRatios.length > 0
                              ? this.config.imageEditorCropRatios[0].value
                              : null,
                          imageEditorCropRatios: this.config
                            .imageEditorCropRestrict
                            ? this.config.imageEditorCropRatios
                            : [],
                          imagePreview: this.config.imagePreview,
                          imagePreviewAppCloud: this.config.fileGrid,
                          imageSizeValidate: this.config.imageSizeValidate,
                          imageWidthMin: this.config.imageWidthMin,
                          imageWidthMax: this.config.imageWidthMax,
                          imageHeightMin: this.config.imageHeightMin,
                          imageHeightMax: this.config.imageHeightMax,
                          imageResolutionMin: this.config.imageResolutionMin,
                          imageResolutionMax: this.config.imageResolutionMax,
                          imageProcessCanvas: this.config.imageProcessCanvas,
                          imageProcessBlob: this.config.imageProcessBlob,
                          translatePrefix: "upload.config.",
                        }
                      );
                    },
                  },
                  {
                    key: "_loadResources",
                    value: function () {
                      var e = [];
                      return (
                        this.config.imageEditor &&
                          ("fetch" in window ||
                            e.push(
                              this.settings.assets +
                                "/static/lib/fetch/fetch.min.js"
                            ),
                          ("log10" in Math &&
                            "sign" in Math &&
                            "assign" in Object &&
                            "from" in Array &&
                            ["find", "findIndex", "includes"].reduce(function (
                              e,
                              i
                            ) {
                              return i in Array.prototype && e;
                            },
                            !0)) ||
                            e.push(
                              this.settings.assets +
                                "/static/lib/doka/doka.polyfill.min.js"
                            ),
                          e.push(
                            this.settings.assets + "/static/lib/doka/doka.min.js"
                          ),
                          e.push(
                            this.settings.assets + "/static/lib/doka/doka.min.css"
                          )),
                        e.length > 0
                          ? a.default.isDefined("upload-lib")
                            ? a.default.isReady("upload-lib").then(function () {
                                n.info("upload resources ready");
                              })
                            : a.default
                                .load(e, "upload-lib", { async: !1 })
                                .then(function () {
                                  n.info("upload resources loaded");
                                })
                                .catch(function (e) {
                                  n.error("failed to load resources: ", e);
                                })
                          : Promise.resolve()
                      );
                    },
                  },
                  {
                    key: "_subscribeEvents",
                    value: function () {
                      var e = this;
                      (this._inputs = {}),
                        (this.fileCounter = 0),
                        this._displayCounter(),
                        this._uploadDiv.addEventListener(
                          "upload:added",
                          function (i) {
                            var t = i.detail;
                            if (e.settings.link) {
                              var n = document.createElement("input");
                              (n.type = "hidden"),
                                e._buildInputElement(n, t),
                                (e._inputs[t.uuid] = n),
                                e._wrapper.appendChild(n);
                            }
                            e._removeErrors(), e._displayCounter();
                          }
                        ),
                        this._uploadDiv.addEventListener(
                          "upload:removed",
                          function (i) {
                            var t = i.detail;
                            e.settings.link &&
                              t &&
                              e._inputs[t.uuid] &&
                              (e._wrapper.removeChild(e._inputs[t.uuid]),
                              delete e._inputs[t.uuid],
                              e.config.fileMultiple &&
                                null == t.parent &&
                                e._rebuildInputs()),
                              e._removeErrors(),
                              e._displayCounter();
                          }
                        ),
                        this._uploadDiv.addEventListener(
                          "upload:maxFiles",
                          function (i) {
                            var n = [
                              t.default.get("upload.config.error.fileCountMax", {
                                max: e.config.fileCountMax,
                              }),
                            ];
                            e._displayErrors(n);
                          }
                        ),
                        this._uploadDiv.addEventListener(
                          "upload:sort",
                          function (i) {
                            (e._fileSort = i.detail.fileIds.reverse()),
                              e._rebuildInputs();
                          }
                        );
                    },
                  },
                  {
                    key: "_linkProductForm",
                    value: function (e) {
                      this._productFormLink &&
                        e.setAttribute("form", this._productFormLink);
                    },
                  },
                  {
                    key: "_buildInputElement",
                    value: function (e, i) {
                      var t;
                      if (
                        ((t =
                          "thumbnail" === i.meta.variant
                            ? this.config.fieldThumbnail
                              ? this.config.fieldThumbnail
                              : "_thumbnail"
                            : "_original" === i.meta.variant
                            ? this.config.fieldOriginal
                              ? this.config.fieldOriginal
                              : "original"
                            : "pdf" === i.meta.variant
                            ? this.config.fieldPdf
                              ? this.config.fieldPdf
                              : "pdf"
                            : this.config.field
                            ? this.config.field
                            : "upload"),
                        this.config.fileMultiple)
                      ) {
                        var a;
                        if (null == i.parent) {
                          if (
                            (this.fileCounter++,
                            (a = this.fileCounter),
                            this._fileSort)
                          ) {
                            var s = this._fileSort.indexOf(i.uuid);
                            n.trace("=> index of " + i.uuid + ":", s),
                              -1 !== s && (a = s + 1);
                          }
                          n.debug("=> count: of " + i.uuid + ":", a),
                            (i.meta.count = a);
                        } else
                          i.parent &&
                            this._upload.files[i.parent] &&
                            (a = this._upload.files[i.parent].meta.count);
                        a && (t += "_" + a);
                      }
                      this.config.fieldProperty
                        ? (e.name = this.config.fieldProperty + "[" + t + "]")
                        : (e.name = t),
                        this.config.hidden && (e.name = ""),
                        (e.value = i.url),
                        this._linkProductForm(e);
                    },
                  },
                  {
                    key: "_rebuildInputs",
                    value: function () {
                      for (var e in ((this.fileCounter = 0), this._inputs))
                        if (this._inputs.hasOwnProperty(e)) {
                          var i = this._upload.files[e],
                            t = this._inputs[e];
                          this._buildInputElement(t, i);
                        }
                    },
                  },
                  {
                    key: "_removeErrors",
                    value: function () {
                      if (
                        this._errors &&
                        (this._wrapper.removeChild(this._errors),
                        delete this._errors,
                        this._inputFields)
                      )
                        for (
                          var e = this._inputFields.querySelectorAll(
                              "." + this.settings.classNamePrefix + "--invalid"
                            ),
                            i = 0;
                          i < e.length;
                          i++
                        ) {
                          e[i].classList.remove(
                            this.settings.classNamePrefix + "--invalid"
                          );
                        }
                    },
                  },
                  {
                    key: "_displayErrors",
                    value: function (e) {
                      var i = this;
                      this._removeErrors(),
                        (this._errors = document.createElement("div")),
                        (this._errors.className =
                          this.settings.classNamePrefix + "--errors"),
                        this._wrapper.appendChild(this._errors);
                      for (
                        var t = function (t) {
                            var n = e[t],
                              a = document.createElement("div");
                            (a.className =
                              i.settings.classNamePrefix + "--error"),
                              (a.textContent = n),
                              a.addEventListener("click", function (e) {
                                (a.className += " dismissed"),
                                  setTimeout(function () {
                                    return i._errors.removeChild(a);
                                  }, 500);
                              }),
                              i._errors.appendChild(a);
                          },
                          n = 0;
                        n < e.length;
                        n++
                      )
                        t(n);
                      setTimeout(function () {
                        return (i._errors.className += " open");
                      }, 100);
                    },
                  },
                  {
                    key: "_displayUpload",
                    value: function () {
                      !0 === this.config.hidden
                        ? (this._uploadDiv.classList.add("cl-hide"),
                          this._label && this._label.classList.add("cl-hide"))
                        : (this._uploadDiv.classList.remove("cl-hide"),
                          this._label && this._label.classList.remove("cl-hide"));
                    },
                  },
                  {
                    key: "_displayCounter",
                    value: function () {
                      this.config.fileCounter &&
                      (this.config.fileMultiple || this._counter)
                        ? (this._counter ||
                            ((this._counter = document.createElement("div")),
                            (this._counter.className =
                              this.settings.classNamePrefix + "--counter"),
                            this._wrapper
                              .querySelector(".filepond--root")
                              .appendChild(this._counter)),
                          (this._counter.innerHTML =
                            this._upload.countFiles() +
                            "/" +
                            this.config.fileCountMax))
                        : this._counter &&
                          (this._counter.parentElement.removeChild(this._counter),
                          delete this._counter);
                    },
                  },
                  {
                    key: "_displayFileGrid",
                    value: function () {
                      var e = this;
                      if (this.config.fileGrid) {
                        this._uploadDiv.classList.add(
                          this.settings.classNamePrefix + "--grid"
                        );
                        var t = -1,
                          a = null,
                          s = function () {
                            var s = Math.min(
                              e._uploadDiv.offsetWidth,
                              window.screen.width
                            );
                            if (s !== t && 0 !== s) {
                              (t = s), null != a && a.parentNode.removeChild(a);
                              var r = s / 120;
                              (r = r >= 2 ? 2 * Math.floor(r / 2) : 1),
                                n.debug("calculated fileGrid grid columns:", r);
                              var o = 100 / r;
                              a = i.default.addStyleElement(
                                "#" +
                                  e.config.uuid +
                                  " .filepond--item {\n      width: calc(" +
                                  o +
                                  "% - .5em);\n}"
                              );
                            }
                          };
                        s(),
                          window.addEventListener(
                            "resize",
                            i.default.debounced(300, function () {
                              s();
                            })
                          ),
                          window.addEventListener(
                            "orientationchange",
                            function (e) {
                              return window.dispatchEvent(new Event("resize"));
                            }
                          );
                      }
                    },
                  },
                  {
                    key: "_hasVariantConfigs",
                    value: function () {
                      return (
                        this.config.variantConfig &&
                        this.config.variantConfigs &&
                        this.config.variantConfigs.length > 0
                      );
                    },
                  },
                  {
                    key: "_findProductForm",
                    value: function () {
                      if (
                        this.settings.product &&
                        "properties" === this.config.fieldProperty
                      ) {
                        if (
                          ((this._productForm = i.default.findParent(
                            this.element,
                            this.settings.selectorForm
                          )),
                          this._productForm ||
                            (this._productForm =
                              this.shopifyStore.findProductFormBestMatch(
                                this.settings.product.id,
                                { srcEl: this.element }
                              )),
                          this._productForm &&
                            ((this._productFormParent =
                              this._productForm.contains(this._wrapper)),
                            !this._productFormParent))
                        ) {
                          var e = this._productForm.getAttribute("id");
                          e && (this._productFormLink = e);
                          var t = this.shopifyStore.findExpressPaymentButtons();
                          if (t.length) {
                            n.debug(
                              "hiding expressPaymentButtons - NOT supported with app blocks",
                              t
                            );
                            for (var a = 0; a < t.length; a++) {
                              t[a].style.display = "none";
                            }
                          }
                        }
                      } else if ("attributes" === this.config.fieldProperty) {
                        var s = document.querySelectorAll(
                          'button[name="checkout"][form], input[name="checkout"][form]'
                        );
                        if (s.length) {
                          var r = s[0];
                          this._productFormLink = r.getAttribute("form");
                        }
                      }
                      return null !== this._productForm;
                    },
                  },
                  {
                    key: "_watchVariantChanges",
                    value: function () {
                      var e = this;
                      if (
                        ((this._productForm =
                          this._productForm ||
                          this.shopifyStore.findProductFormBestMatch(
                            this.settings.product.id
                          )),
                        this._productForm)
                      ) {
                        this._variantConfig = {
                          required: this.config.required,
                          fileMultiple: this.config.fileMultiple,
                          fileCountMin: this.config.fileCountMin,
                          fileCountMax: this.config.fileCountMax,
                          hidden:
                            void 0 !== this.config.hidden && this.config.hidden,
                          imageSizeValidate: this.config.imageSizeValidate,
                          imageWidthMin:
                            void 0 !== this.config.imageWidthMin
                              ? this.config.imageWidthMin
                              : null,
                          imageHeightMin:
                            void 0 !== this.config.imageHeightMin
                              ? this.config.imageHeightMin
                              : null,
                          imageResolutionMin:
                            void 0 !== this.config.imageResolutionMin
                              ? this.config.imageResolutionMin
                              : null,
                          imageEditorCropRestrict:
                            this.config.imageEditorCropRestrict,
                          imageEditorCropRatios:
                            this.config.imageEditorCropRatios,
                        };
                        for (
                          var i = 0;
                          i < this.config.variantConfigs.length;
                          i++
                        ) {
                          var t = this.config.variantConfigs[i];
                          for (var a in t)
                            t.hasOwnProperty(a) &&
                              this._variantConfig.hasOwnProperty(a) &&
                              (!t.imageSettings &&
                                a.startsWith("image") &&
                                (t[a] = this._variantConfig[a]),
                              !t.imageSizeValidate &&
                                "imageEditorCropRestrict" === a &&
                                t[a] &&
                                this._enableImageValidate(t));
                        }
                        this._onVariantChange(null, !0),
                          this._productForm.addEventListener(
                            "change",
                            function (i) {
                              return e._onVariantChange(i);
                            }
                          );
                      } else
                        n.warn(
                          "variantConfig no productForm found for config: " +
                            this.config.uuid
                        );
                    },
                  },
                  {
                    key: "_checkImageValidateVariants",
                    value: function () {
                      if (
                        !this.config.imageSizeValidate &&
                        this._hasVariantConfigs()
                      )
                        for (
                          var e = 0;
                          e < this.config.variantConfigs.length;
                          e++
                        ) {
                          var i = this.config.variantConfigs[e];
                          if (
                            i.imageSettings &&
                            (i.imageSizeValidate || i.imageEditorCropRestrict)
                          ) {
                            this._enableImageValidate(this.config);
                            break;
                          }
                        }
                    },
                  },
                  {
                    key: "_enableImageValidate",
                    value: function (e) {
                      (e.imageSizeValidate = !0),
                        (e.imageWidthMin = null),
                        (e.imageHeightMin = null),
                        (e.imageResolutionMin = null);
                    },
                  },
                  {
                    key: "_onVariantChange",
                    value: function (e) {
                      var i =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        t = this.shopifyStore.findProductFormVariantId(
                          this._productForm
                        );
                      if (t !== this._variantId) {
                        (this._variantId = t),
                          n.debug(
                            "---\x3e evaluating variant.id: " + this._variantId
                          );
                        for (
                          var a = !1, s = 0;
                          s < this.config.variantConfigs.length;
                          s++
                        ) {
                          for (
                            var r = this.config.variantConfigs[s], o = 0;
                            o < r.variants.length;
                            o++
                          ) {
                            if (
                              r.variants[o].id.toString() ===
                              this._variantId.toString()
                            ) {
                              var l = {};
                              for (var d in r)
                                r.hasOwnProperty(d) &&
                                  this._variantConfig.hasOwnProperty(d) &&
                                  (l[d] = r[d]);
                              this.updateConfig(l), (a = !0);
                              break;
                            }
                          }
                          if (a) break;
                        }
                        a || i || this.updateConfig(this._variantConfig);
                      }
                    },
                  },
                  {
                    key: "_getAgent",
                    value: function () {
                      return (
                        navigator.userAgent || navigator.vendor || window.opera
                      );
                    },
                  },
                  {
                    key: "_isInApp",
                    value: function (e) {
                      return (
                        e.indexOf("FBAN") > -1 ||
                        e.indexOf("FBAV") > -1 ||
                        e.indexOf("Instagram") > -1
                      );
                    },
                  },
                  {
                    key: "_isFacebook",
                    value: function (e) {
                      return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1;
                    },
                  },
                  {
                    key: "_isInstagram",
                    value: function (e) {
                      return e.indexOf("Instagram") > -1;
                    },
                  },
                  {
                    key: "_isIOS",
                    value: function (e) {
                      return (
                        (e = e.toLowerCase()).indexOf("iphone") > -1 ||
                        e.indexOf("ipad") > -1
                      );
                    },
                  },
                  {
                    key: "_isAndroid",
                    value: function (e) {
                      return (e = e.toLowerCase()).indexOf("android") > -1;
                    },
                  },
                  {
                    key: "_checkInAppFilePicker",
                    value: function () {
                      var e = this,
                        i = -1,
                        n = function (i) {
                          var n = document.createElement("div");
                          n.className = "cl-inapp--fail";
                          var s = e._getAgent(),
                            r = e._isFacebook(s) ? "facebook" : "instagram",
                            o = e._isAndroid(s) ? "android" : "ios";
                          (n.innerHTML = (function (e, i) {
                            return "\n                <style>\n                .cl-inapp--fail {\n                    width:100%; box-sizing:border-box; border-radius:5px; background-color: #e6615a; text-align:center; padding:1em; font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;\n                }\n                .cl-inapp--fail label {\n                    font-size:24px; font-weight:bold; color:white !important;\n                }\n                .cl-inapp--fail p {\n                    font-weight:450; color:white !important;\n                }\n                </style>\n                <label>"
                              .concat(
                                t.default.get("upload.config.error.inapp"),
                                "</label>\n                <p>"
                              )
                              .concat(
                                t.default.get("upload.config.error.inapp." + e),
                                '</p>\n                <img src="'
                              )
                              .concat(
                                "https://assets.cloudlift.app/static/img/inapp/" +
                                  i +
                                  ".png",
                                '" style="max-width: 100%;height: auto;" />\n            '
                              );
                          })(r, o)),
                            e.element.insertBefore(n, e._wrapper),
                            e._upload._fileMeta.inAppFailed(i),
                            e._uploadDiv.removeEventListener("click", a, {
                              capture: !0,
                            });
                        },
                        a = function (i) {
                          if ("INPUT" === i.target.nodeName) {
                            var t = null;
                            e._uploadDiv.addEventListener(
                              "upload:select",
                              function i() {
                                t && (clearTimeout(t), (t = null)),
                                  e._uploadDiv.removeEventListener(
                                    "upload:select",
                                    i
                                  ),
                                  window.localStorage &&
                                    window.localStorage.setItem(
                                      "inapp",
                                      new Date().getTime().toString()
                                    );
                              }
                            );
                            var a = !1;
                            document.addEventListener(
                              "visibilitychange",
                              function e() {
                                document.hidden
                                  ? (a = !0)
                                  : a &&
                                    (document.removeEventListener(
                                      "visibilitychange",
                                      e
                                    ),
                                    (t = setTimeout(function () {
                                      n(!1);
                                    }, 4e3)));
                              }
                            );
                          }
                        };
                      if (window.localStorage) {
                        var s = window.localStorage.getItem("inapp");
                        s && (i = new Date().getTime() - parseInt(s)),
                          window.localStorage.removeItem("inapp");
                      }
                      -1 !== i && i < 1e4
                        ? n(!0)
                        : this._uploadDiv.addEventListener("click", a, {
                            capture: !0,
                          });
                    },
                  },
                ]),
                r
              );
            })(),
            h = f;
          exports.default = h;
        },
        {
          "./upload": "Qlw6",
          "./util": "zY0S",
          "./translate": "IkY8",
          loglevel: "ohSP",
          "./resource-loader": "U86w",
          "./shopify-store": "cEki",
        },
      ],
      JKCa: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = o(require("./request")),
            t = o(require("./util")),
            n = a(require("loglevel"));
          function r(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              n = new WeakMap();
            return (r = function (e) {
              return e ? n : t;
            })(e);
          }
          function a(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(t);
            if (n && n.has(e)) return n.get(e);
            var a = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
              if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(a, u, i)
                  : (a[u] = e[u]);
              }
            return (a.default = e), n && n.set(e, a), a;
          }
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function u(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function f(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
          }
          var l = (function () {
              function r(e) {
                u(this, r);
                this.settings = t.default.extend(
                  { api: "", path: "/api/storage", queryParams: {} },
                  e || {}
                );
              }
              return (
                f(r, [
                  {
                    key: "upload",
                    value: function (t, r) {
                      for (
                        var a = this,
                          o = [],
                          u = [],
                          i = function (n) {
                            var i = t[n];
                            o.push(
                              new Promise(function (t, o) {
                                a._getSignedUrl(i)
                                  .then(function (a) {
                                    var f = {
                                      method: "PUT",
                                      headers: { "Content-type": i.mimeType },
                                      data: i._file,
                                    };
                                    0 === n && (f.onProgress = r);
                                    var l = new e.default(a.upload, f);
                                    u.push(l),
                                      l
                                        .then(function () {
                                          (i.url = a.download),
                                            (i.path = a.path),
                                            t(i);
                                        })
                                        .catch(function (e) {
                                          o(e);
                                        });
                                  })
                                  .catch(function (e) {
                                    o(e);
                                  });
                              })
                            );
                          },
                          f = 0;
                        f < t.length;
                        f++
                      )
                        i(f);
                      var l = Promise.all(o).then(function (e) {
                        return n.info(e), e;
                      });
                      return (
                        (l.cancel = function () {
                          for (var e = 0; e < u.length; e++) {
                            u[e].cancel();
                          }
                        }),
                        l
                      );
                    },
                  },
                  {
                    key: "_getSignedUrl",
                    value: function (n) {
                      var r = this.settings.api + this.settings.path,
                        a = t.default.extend(this.settings.queryParams, {
                          name: encodeURIComponent(n.name),
                          type: encodeURIComponent(n.mimeType),
                          public: "1",
                          cb: 1e18 * Math.random() + "",
                        });
                      return new e.default(r, {
                        method: "GET",
                        withCredentials: !0,
                        queryParams: a,
                      }).then(function (e) {
                        return e.data;
                      });
                    },
                  },
                ]),
                r
              );
            })(),
            c = l;
          exports.default = c;
        },
        { "./request": "mx8w", "./util": "zY0S", loglevel: "ohSP" },
      ],
      XoAR: [
        function (require, module, exports) {
          "use strict";
          function e(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          function n(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          }
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var i = (function () {
            function t() {
              e(this, t);
            }
            return (
              n(t, null, [
                {
                  key: "register",
                  value: function (e) {
                    var t = this;
                    return (
                      this.listeners.push(e),
                      this.patched || this._patch(),
                      function () {
                        var n = t.listeners.indexOf(e);
                        -1 !== n && t.listeners.splice(n, 1),
                          0 === t.listeners.length && t._unpatch();
                      }
                    );
                  },
                },
                {
                  key: "_callListeners",
                  value: function (e) {
                    for (var n = 0; n < t.listeners.length; n++) {
                      (0, t.listeners[n])(e);
                    }
                  },
                },
                {
                  key: "_patch",
                  value: function () {
                    (t.originalOpen = XMLHttpRequest.prototype.open),
                      (XMLHttpRequest.prototype.open = function () {
                        var e = arguments[0],
                          n = arguments[1];
                        this.addEventListener(
                          "readystatechange",
                          function () {
                            4 == this.readyState &&
                              200 == this.status &&
                              t._callListeners({ method: e, url: n });
                          },
                          !1
                        ),
                          t.originalOpen.apply(this, arguments);
                      }),
                      "function" == typeof window.fetch &&
                        ((t.originalFetch = window.fetch),
                        (window.fetch = function () {
                          var e = arguments[0],
                            n =
                              void 0 !== arguments[1]
                                ? arguments[1].method
                                : "GET",
                            i = t.originalFetch.apply(this, arguments);
                          return (
                            i.then(function () {
                              t._callListeners({ method: n, url: e });
                            }),
                            i
                          );
                        })),
                      (this.patched = !0);
                  },
                },
                {
                  key: "_unpatch",
                  value: function () {
                    t.originalOpen &&
                      (XMLHttpRequest.prototype.open = t.originalOpen),
                      t.originalFetch && (window.fetch = t.originalFetch),
                      (this.patched = !1);
                  },
                },
              ]),
              t
            );
          })();
          (i.patched = !1), (i.listeners = []);
          var r = i;
          exports.default = r;
        },
        {},
      ],
      innt: [
        function (require, module, exports) {
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: !0 }),
            (exports.default = void 0);
          var e = f(require("./upload")),
            t = f(require("./upload-field")),
            r = f(require("./shopify-store")),
            n = f(require("./provider-google")),
            o = f(require("./util")),
            a = f(require("./ajax-watch")),
            i = d(require("loglevel")),
            l = f(require("./translate"));
          function u(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              r = new WeakMap();
            return (u = function (e) {
              return e ? r : t;
            })(e);
          }
          function d(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var r = u(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
              o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(n, a, i)
                  : (n[a] = e[a]);
              }
            return (n.default = e), r && r.set(e, n), n;
          }
          function f(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function c(e) {
            return g(e) || h(e) || p(e) || s();
          }
          function s() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          function p(e, t) {
            if (e) {
              if ("string" == typeof e) return v(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? v(e, t)
                  : void 0
              );
            }
          }
          function h(e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          }
          function g(e) {
            if (Array.isArray(e)) return v(e);
          }
          function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          function m(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          function b(e, t, r) {
            return t && y(e.prototype, t), r && y(e, r), e;
          }
          var _ = (function () {
              function u(t, o) {
                var a = this;
                m(this, u),
                  (this.config = t),
                  (this.fields = []),
                  (this.shopifyStore = r.default.getInstance()),
                  (e.default.providers.google = new n.default({
                    api: t.api,
                    queryParams: { shop: t.shop },
                  })),
                  this.config.setup &&
                    (/complete|interactive|loaded/.test(document.readyState)
                      ? this.setup()
                      : (i.debug(
                          "---\x3e document not ready (" +
                            document.readyState +
                            ") => waiting for DOMContentLoaded"
                        ),
                        document.addEventListener(
                          "DOMContentLoaded",
                          function () {
                            return a.setup();
                          },
                          !1
                        )),
                    this.shopifyStore.onThemeSectionEvent("load", function (e) {
                      a.setup();
                    })),
                  this._fixThemeStyles();
              }
              return (
                b(u, [
                  {
                    key: "setup",
                    value: function () {
                      var e = this;
                      if (
                        (this.destroy(),
                        this.shopifyStore.parseProductJsonElements(),
                        this.shopifyStore.tryGetProductMap().then(function (t) {
                          if (e.config.setup) {
                            for (var r = 0; r < e.config.fields.length; r++) {
                              var n = e.config.fields[r];
                              if (
                                (i.debug("-> evaluating upload-field:", n.uuid),
                                0 === n.conditionMode)
                              ) {
                                var o = null;
                                e.shopifyStore.isProduct() &&
                                  (o =
                                    t[e.shopifyStore.getHandleFromUrl() + ".js"]);
                                var a = e._createUploadField(n, o);
                                i.debug(
                                  "--\x3e evaluated upload-config:",
                                  n.uuid,
                                  o,
                                  a
                                );
                              } else if (n.conditions.length > 0)
                                for (var l in t)
                                  if (t.hasOwnProperty(l)) {
                                    var u = t[l],
                                      d = e._evaluateConditions(
                                        n.conditions,
                                        n.conditionMode,
                                        u
                                      );
                                    if (d) {
                                      var f = "#product_form_" + u.id;
                                      (d = e._createUploadField(n, u, f)) ||
                                        (d = e._createUploadField(n, u));
                                    }
                                    i.debug(
                                      "--\x3e evaluated upload-config:",
                                      n.uuid,
                                      u,
                                      d
                                    );
                                  }
                            }
                            e.fields.length > 0 &&
                              e._validateFormSubmit(e.fields);
                          } else i.debug("[setup] skipping upload fields setup=false");
                        }),
                        !1 !== window.clProp)
                      ) {
                        var t = this.config.fields.filter(function (e) {
                          return e.propertyTransform;
                        });
                        t.length > 0 && this._watchCartProperties(t);
                      }
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      for (; this.fields.length; ) {
                        this.fields.pop().destroy();
                      }
                    },
                  },
                  {
                    key: "_createUploadField",
                    value: function (e, r, n) {
                      var a = null,
                        i = null;
                      r && (i = '[data-upload-lift="' + r.id + '"]'),
                        e.fieldBlock &&
                          (i || (i = ""),
                          (i += '[data-upload-field="' + e.fieldBlock + '"]')),
                        n ||
                          ((n = 'form[action*="/cart/add"]'),
                          "contact" === e.fieldProperty
                            ? ((n = 'form[action*="/contact"]'),
                              (a = "contact"),
                              (i = null))
                            : "customer[note]" === e.fieldProperty
                            ? ((n = 'form[action="/account"]'),
                              (a = "create_customer"),
                              (i = null))
                            : "attributes" === e.fieldProperty
                            ? ((n =
                                'form[action="/cart"], form[action*="/cart?"]'),
                              (i = null))
                            : "order" === e.fieldProperty &&
                              ((n = ""), (i = null)));
                      var l = this._findOrCreateContainer(e.selector, r, n, a, i);
                      if (l) {
                        var u;
                        u = Array.isArray(l) || o.default.isNodeList(l) ? l : [l];
                        for (var d = 0; d < u.length; d++) {
                          var f = u[d];
                          this.fields.push(
                            new t.default(e, {
                              api: this.config.api,
                              assets: this.config.assets,
                              selector: f,
                              link: this.config.link,
                              queryParams: { shop: this.config.shop },
                              product: r,
                            })
                          );
                        }
                        return !0;
                      }
                      return !1;
                    },
                  },
                  {
                    key: "_findOrCreateContainer",
                    value: function (e, t, r, n, a) {
                      var l,
                        u,
                        d = [];
                      if (
                        (r &&
                          (d = document.querySelectorAll(r)).length &&
                          (u = d[0]),
                        e)
                      ) {
                        if (d.length) {
                          l = [];
                          for (var f = 0; f < d.length; f++) {
                            var s,
                              p = d[f].querySelectorAll(e);
                            if (p.length) (s = l).push.apply(s, c(p));
                          }
                          if (l.length)
                            return (
                              i.debug(
                                "using container in form with provided selector:",
                                r,
                                e,
                                l
                              ),
                              l
                            );
                        }
                        return (l = document.querySelectorAll(e)).length
                          ? (i.debug(
                              "using container with provided selector:",
                              e,
                              l
                            ),
                            l)
                          : (i.debug("no container found with selector:", e),
                            null);
                      }
                      if (a && null != (l = document.querySelector(a)))
                        return (
                          i.debug("using container with default selector: ", a), l
                        );
                      if (n)
                        if (u) {
                          for (var h, g = 0; g < d.length; g++) {
                            var v = (u = d[g]).querySelector(
                              'form input[name="form_type"]'
                            );
                            if (v && v.value === n) {
                              h = u;
                              break;
                            }
                          }
                          if (!h) return null;
                          d = [u];
                        } else {
                          var m = document.querySelector(
                            'form input[name="form_type"]'
                          );
                          m &&
                            m.value === n &&
                            (d = [(u = o.default.findParent(m, "form"))]);
                        }
                      if (d.length) {
                        l = [];
                        for (var y = 0; y < d.length; y++)
                          if (
                            ((u = d[y]),
                            !(
                              d.length > 1 &&
                              "product-form-installment" === u.getAttribute("id")
                            ))
                          ) {
                            var b = u.querySelector(
                                "[type=submit],[name=checkout],.add_to_cart,.btn.add-to-cart"
                              ),
                              _ = document.createElement("div");
                            (_.className = "upload-container"),
                              (_.style.width = "100%"),
                              b
                                ? b.parentNode.insertBefore(_, b)
                                : u.action && -1 !== u.action.indexOf("/cart/add")
                                ? u.insertBefore(_, u.firstChild)
                                : u.appendChild(_),
                              i.debug("injected container into form:", u),
                              l.push(_);
                          }
                        if (l.length)
                          return i.debug("using injected container:", l), l;
                      }
                      return null;
                    },
                  },
                  {
                    key: "_validateConfigs",
                    value: function (e, t, r, n, a) {
                      for (var i = [], l = 0; l < r.length; l++) {
                        var u = r[l];
                        if (a)
                          if (o.default.findParent(u.element, "form") !== n)
                            continue;
                        i.push(u.validate(t));
                      }
                      if (-1 !== i.indexOf(!1))
                        e.preventDefault(), e.stopImmediatePropagation();
                      else
                        for (var d = 0; d < r.length; d++) {
                          var f = r[d];
                          i.push(f.onSubmit());
                        }
                    },
                  },
                  {
                    key: "_validateFormSubmit",
                    value: function (e) {
                      for (
                        var t = this,
                          r = [],
                          n = function (n) {
                            var a = e[n],
                              i = o.default.findParent(a.element, "form");
                            if (
                              (i ||
                                (i = t.shopifyStore.findProductFormBestMatch(
                                  a.settings.product.id,
                                  { srcEl: a.element }
                                )),
                              -1 === r.indexOf(i) && r.push(i),
                              i && !i.dataset.clValidate)
                            ) {
                              var l = !1 !== window.clUploadCartCapture,
                                u = i.querySelector(".cl-cart-validate");
                              if ((null != u && (l = !1), l)) {
                                var d =
                                  '[type=submit],.add_to_cart,.add-to-cart,.product-addToCart,.addToCart,.addtocart-js,.shopify-payment-button, [data-shopify="payment-button"]';
                                i.addEventListener(
                                  "click",
                                  function (n) {
                                    n.target &&
                                      (o.default.matches(n.target, d) ||
                                        null !=
                                          o.default.findParent(n.target, d)) &&
                                      t._validateConfigs(
                                        n,
                                        "click",
                                        e,
                                        i,
                                        r.length > 1
                                      );
                                  },
                                  { capture: !0 }
                                );
                              } else {
                                i.addEventListener("submit", function (n) {
                                  return t._validateConfigs(
                                    n,
                                    "submit",
                                    e,
                                    i,
                                    r.length > 1
                                  );
                                });
                                for (
                                  var f = i.querySelectorAll(
                                      "[type=submit],.add_to_cart,.btn.add-to-cart"
                                    ),
                                    c = 0;
                                  c < f.length;
                                  c++
                                ) {
                                  f[c].addEventListener("click", function (n) {
                                    return t._validateConfigs(
                                      n,
                                      "click",
                                      e,
                                      i,
                                      r.length > 1
                                    );
                                  });
                                }
                                for (
                                  var s = i.querySelectorAll(
                                      ".shopify-payment-button"
                                    ),
                                    p = 0;
                                  p < s.length;
                                  p++
                                ) {
                                  s[p].addEventListener(
                                    "click",
                                    function (n) {
                                      return t._validateConfigs(
                                        n,
                                        "click",
                                        e,
                                        i,
                                        r.length > 1
                                      );
                                    },
                                    { capture: !0 }
                                  );
                                }
                                null != u &&
                                  u.addEventListener(
                                    "click",
                                    function (n) {
                                      return t._validateConfigs(
                                        n,
                                        "click",
                                        e,
                                        i,
                                        r.length > 1
                                      );
                                    },
                                    { capture: !0 }
                                  );
                              }
                              i.dataset.clValidate = !0;
                            }
                          },
                          a = 0;
                        a < e.length;
                        a++
                      )
                        n(a);
                    },
                  },
                  {
                    key: "_fixThemeStyles",
                    value: function () {
                      if (this.shopifyStore.isTheme("Dawn")) {
                        o.default.addStyleElement(
                          "\n            .cl-upload--wrapper a:empty, .cl-upload--wrapper div:empty, .cl-upload--wrapper dl:empty, .cl-upload--wrapper pl:empty, .cl-upload--wrapper section:empty, .cl-upload--wrapper ul:empty {\n               display:block!important;\n             }\n             .doka--root a:empty, .doka--root div:empty, .doka--root dl:empty, .doka--rootpl:empty, .doka--root section:empty, .doka--root ul:empty {\n               display:block!important;\n             }\n            "
                        );
                      }
                    },
                  },
                  {
                    key: "_evaluateConditions",
                    value: function (e, t, r) {
                      for (var n = !1, o = 0; o < e.length; o++) {
                        var a = e[o];
                        if (
                          ((n = this._evaluateCondition(a, r)),
                          i.debug("evaluated condition: ", a, n),
                          1 == t)
                        ) {
                          if (n)
                            return (
                              i.debug(
                                "condition field " +
                                  a.field +
                                  " of the OR conditions matched"
                              ),
                              !0
                            );
                        } else if (!n) break;
                      }
                      return n
                        ? (i.debug(
                            "all of the  " +
                              e.length +
                              " conditions matched in mode: " +
                              t
                          ),
                          n)
                        : (i.debug(
                            "not all of the " +
                              e.length +
                              " conditions matched in mode: " +
                              t
                          ),
                          n);
                    },
                  },
                  {
                    key: "_evaluateCondition",
                    value: function (e, t) {
                      switch (e.field) {
                        case "product":
                          for (var r = 0; r < e.objects.length; r++)
                            if (e.objects[r].id.toString() === t.id.toString())
                              return !0;
                          break;
                        case "product_handle":
                          if (
                            this._evaluateOperation(e.operator, e.value, t.handle)
                          )
                            return !0;
                          break;
                        case "product_title":
                          if (
                            this._evaluateOperation(e.operator, e.value, t.title)
                          )
                            return !0;
                          break;
                        case "product_type":
                          if (
                            t.type &&
                            this._evaluateOperation(e.operator, e.value, t.type)
                          )
                            return !0;
                          if (
                            t.product_type &&
                            this._evaluateOperation(
                              e.operator,
                              e.value,
                              t.product_type
                            )
                          )
                            return !0;
                          break;
                        case "product_vendor":
                          if (
                            this._evaluateOperation(e.operator, e.value, t.vendor)
                          )
                            return !0;
                          break;
                        case "product_tags":
                          var n;
                          n = Array.isArray(t.tags)
                            ? t.tags
                            : t.tags.indexOf(", ") >= 0
                            ? t.tags.split(", ")
                            : [t.tags];
                          for (var o = 0; o < e.tags.length; o++)
                            for (var a = 0; a < n.length; a++)
                              if (
                                e.tags[o].toString().toLowerCase().trim() ===
                                n[a].toString().toLowerCase().trim()
                              )
                                return !0;
                      }
                      return !1;
                    },
                  },
                  {
                    key: "_evaluateOperation",
                    value: function (e, t, r) {
                      if (r)
                        return "equals" === e
                          ? r.toString().toLowerCase().trim() ===
                              t.toString().toLowerCase().trim()
                          : "contains" === e
                          ? r
                              .toString()
                              .toLowerCase()
                              .trim()
                              .indexOf(t.toString().toLowerCase().trim()) > -1
                          : void 0;
                    },
                  },
                  {
                    key: "_watchCartProperties",
                    value: function (e) {
                      var t = this;
                      this._processCartProperties(e);
                      var r = o.default.debounced(1e3, function () {
                        return t._processCartProperties(e);
                      });
                      a.default.register(function (e) {
                        e.url.length < 100 && /.*cart.*/.test(e.url) && r();
                      });
                      setTimeout(function () {
                        return r();
                      }, 2e3);
                    },
                  },
                  {
                    key: "_processCartProperties",
                    value: function (e) {
                      for (
                        var t = document.createNodeIterator(
                            document.body,
                            NodeFilter.SHOW_TEXT,
                            {
                              acceptNode: function (e) {
                                return -1 !==
                                  e.textContent.indexOf("cloudlift.app") &&
                                  "SCRIPT" !== e.parentNode.tagName
                                  ? NodeFilter.FILTER_ACCEPT
                                  : NodeFilter.FILTER_REJECT;
                              },
                            }
                          ),
                          r = [],
                          n = [],
                          o = 0;
                        o < e.length;
                        o++
                      ) {
                        var a = e[o];
                        a.fieldThumbnailPreview &&
                          (-1 === n.indexOf(a.fieldThumbnail)
                            ? n.push(a.fieldThumbnail)
                            : r.push(a.fieldThumbnail)),
                          -1 === r.indexOf(a.field) && r.push(a.field);
                      }
                      i.debug(
                        "--\x3e processing cart properties for upload fields: ",
                        r
                      ),
                        i.debug(
                          "--\x3e processing cart properties for thumbnail fields: ",
                          n
                        );
                      for (var u, d = []; (u = t.nextNode()); ) d.push(u);
                      for (var f = 0; f < d.length; f++) {
                        var c = (u = d[f]).textContent,
                          s = c.match(/(https?:\/\/[^\s]+)/g);
                        if (null != s && s.length > 0) {
                          var p = s[0],
                            h = document.createElement("span");
                          h.className = "cl-prop";
                          for (var g = "", v = u, m = 0; m < 3; m++) {
                            for (
                              var y = v.textContent.replace(p, ""), b = 0;
                              b < n.length;
                              b++
                            ) {
                              var _ = n[b];
                              if (-1 !== y.indexOf(_)) {
                                (h.innerHTML =
                                  '<img src="' +
                                  p +
                                  '" style="max-width:100px;max-height:100px;" />'),
                                  3 === v.nodeType
                                    ? u.parentNode.replaceChild(h, u)
                                    : ((v.innerHTML = ""), v.appendChild(h)),
                                  (g = _);
                                break;
                              }
                            }
                            if ("" === g)
                              for (var k = 0; k < r.length; k++) {
                                var C = r[k];
                                if (-1 !== y.indexOf(C)) {
                                  (h.innerHTML = c.replace(
                                    p,
                                    '<a href="' +
                                      p +
                                      '" target="_blank" style="cursor:pointer;border:0;">' +
                                      l.default.get("upload.config.file.link") +
                                      "</a>"
                                  )),
                                    u.parentNode.replaceChild(h, u),
                                    (g = C);
                                  break;
                                }
                              }
                            if ("" !== g) {
                              i.debug('found field "' + g + '" on node: ', v);
                              break;
                            }
                            i.getLevel() <= i.levels.TRACE &&
                              i.debug("no field found on node: ", v),
                              (v = v.parentNode),
                              2 === m &&
                                ((h.innerHTML = c.replace(
                                  p,
                                  '<a href="' +
                                    p +
                                    '" target="_blank" style="cursor:pointer;border:0;">' +
                                    l.default.get("upload.config.file.link") +
                                    "</a>"
                                )),
                                u.parentNode.replaceChild(h, u));
                          }
                        }
                      }
                    },
                  },
                ]),
                u
              );
            })(),
            k = _;
          exports.default = k;
        },
        {
          "./upload": "Qlw6",
          "./upload-field": "RRxM",
          "./shopify-store": "cEki",
          "./provider-google": "JKCa",
          "./util": "zY0S",
          "./ajax-watch": "XoAR",
          loglevel: "ohSP",
          "./translate": "IkY8",
        },
      ],
      Focm: [
        function (require, module, exports) {
          "use strict";
          require("filepond-polyfill");
          var e = d(require("./scripts/util")),
            t = d(require("./scripts/upload")),
            l = d(require("./scripts/upload-field")),
            a = d(require("./scripts/upload-app")),
            r = d(require("./scripts/translate")),
            o = u(require("loglevel")),
            i = d(require("loadjs"));
          function n(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap(),
              l = new WeakMap();
            return (n = function (e) {
              return e ? l : t;
            })(e);
          }
          function u(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var l = n(t);
            if (l && l.has(e)) return l.get(e);
            var a = {},
              r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(a, o, i)
                  : (a[o] = e[o]);
              }
            return (a.default = e), l && l.set(e, a), a;
          }
          function d(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = function () {
              return !(
                "Promise" in window &&
                "assign" in Object &&
                String.prototype.startsWith &&
                Array.prototype.flat
              );
            },
            f = function () {
              var i = window.Cloudlift.upload.config;
              debugger;
              o.setDefaultLevel(o.levels.ERROR);
              var n = o.getLevel();
              o.setLevel(void 0 !== i.log ? i.log : n),
                o.debug("got config", i),
                window.addEventListener("cloudlift.upload.ready", function (e) {
                  o.debug("resources loaded");
                });
              var u =
                -1 === i.api.indexOf("local")
                  ? i.api.replace("api.", "assets.")
                  : i.api;
              (r.default.translations = i.i18n || {}),
                i.setup
                  ? window.clTranslate
                    ? (r.default.translations = e.default.extend(
                        r.default.translations,
                        window.clTranslate
                      ))
                    : ((r.default.api =
                        u +
                        "/api/assets/" +
                        i.app +
                        "/translate/{locale}?shop=" +
                        i.shop),
                      (r.default.event += "." + i.app),
                      r.default.locale &&
                        i.locale &&
                        r.default.locale != i.locale &&
                        r.default.fetch(r.default.locale))
                  : (window.Translate = r.default),
                (window.Cloudlift.upload.lib = {
                  Upload: t.default,
                  UploadField: l.default,
                }),
                r.default.ready.then(function () {
                  window.Cloudlift.upload.App = new a.default(i);
                });
            };
          s()
            ? (0, i.default)(
                window.Cloudlift.upload.config.assets +
                  "/static/lib/core-js/core-js.min.js",
                f
              )
            : f();
        },
        {
          "filepond-polyfill": "Le6V",
          "./scripts/util": "zY0S",
          "./scripts/upload": "Qlw6",
          "./scripts/upload-field": "RRxM",
          "./scripts/upload-app": "innt",
          "./scripts/translate": "IkY8",
          loglevel: "ohSP",
          loadjs: "xAgl",
        },
      ],
    },
    {},
    ["Focm"],
    null
  );
