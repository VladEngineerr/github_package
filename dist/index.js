function Nt(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Zr = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function pn() {
  if (Pt) return Y;
  Pt = 1;
  var d = Symbol.for("react.element"), m = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), w = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), I = Symbol.iterator;
  function N(n) {
    return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, J = Object.assign, z = {};
  function B(n, i, y) {
    this.props = n, this.context = i, this.refs = z, this.updater = y || U;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, B.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function re() {
  }
  re.prototype = B.prototype;
  function X(n, i, y) {
    this.props = n, this.context = i, this.refs = z, this.updater = y || U;
  }
  var ee = X.prototype = new re();
  ee.constructor = X, J(ee, B.prototype), ee.isPureReactComponent = !0;
  var K = Array.isArray, f = Object.prototype.hasOwnProperty, oe = { current: null }, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Re(n, i, y) {
    var v, b = {}, g = null, _ = null;
    if (i != null) for (v in i.ref !== void 0 && (_ = i.ref), i.key !== void 0 && (g = "" + i.key), i) f.call(i, v) && !_e.hasOwnProperty(v) && (b[v] = i[v]);
    var R = arguments.length - 2;
    if (R === 1) b.children = y;
    else if (1 < R) {
      for (var S = Array(R), k = 0; k < R; k++) S[k] = arguments[k + 2];
      b.children = S;
    }
    if (n && n.defaultProps) for (v in R = n.defaultProps, R) b[v] === void 0 && (b[v] = R[v]);
    return { $$typeof: d, type: n, key: g, ref: _, props: b, _owner: oe.current };
  }
  function Te(n, i) {
    return { $$typeof: d, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Se(n) {
    return typeof n == "object" && n !== null && n.$$typeof === d;
  }
  function we(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(y) {
      return i[y];
    });
  }
  var Ce = /\/+/g;
  function de(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? we("" + n.key) : i.toString(36);
  }
  function fe(n, i, y, v, b) {
    var g = typeof n;
    (g === "undefined" || g === "boolean") && (n = null);
    var _ = !1;
    if (n === null) _ = !0;
    else switch (g) {
      case "string":
      case "number":
        _ = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case d:
          case m:
            _ = !0;
        }
    }
    if (_) return _ = n, b = b(_), n = v === "" ? "." + de(_, 0) : v, K(b) ? (y = "", n != null && (y = n.replace(Ce, "$&/") + "/"), fe(b, i, y, "", function(k) {
      return k;
    })) : b != null && (Se(b) && (b = Te(b, y + (!b.key || _ && _.key === b.key ? "" : ("" + b.key).replace(Ce, "$&/") + "/") + n)), i.push(b)), 1;
    if (_ = 0, v = v === "" ? "." : v + ":", K(n)) for (var R = 0; R < n.length; R++) {
      g = n[R];
      var S = v + de(g, R);
      _ += fe(g, i, y, S, b);
    }
    else if (S = N(n), typeof S == "function") for (n = S.call(n), R = 0; !(g = n.next()).done; ) g = g.value, S = v + de(g, R++), _ += fe(g, i, y, S, b);
    else if (g === "object") throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return _;
  }
  function le(n, i, y) {
    if (n == null) return n;
    var v = [], b = 0;
    return fe(n, v, "", "", function(g) {
      return i.call(y, g, b++);
    }), v;
  }
  function se(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(y) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = y);
      }, function(y) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = y);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var T = { current: null }, ge = { transition: null }, Oe = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: ge, ReactCurrentOwner: oe };
  function s() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Y.Children = { map: le, forEach: function(n, i, y) {
    le(n, function() {
      i.apply(this, arguments);
    }, y);
  }, count: function(n) {
    var i = 0;
    return le(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return le(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!Se(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, Y.Component = B, Y.Fragment = M, Y.Profiler = D, Y.PureComponent = X, Y.StrictMode = O, Y.Suspense = A, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, Y.act = s, Y.cloneElement = function(n, i, y) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var v = J({}, n.props), b = n.key, g = n.ref, _ = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (g = i.ref, _ = oe.current), i.key !== void 0 && (b = "" + i.key), n.type && n.type.defaultProps) var R = n.type.defaultProps;
      for (S in i) f.call(i, S) && !_e.hasOwnProperty(S) && (v[S] = i[S] === void 0 && R !== void 0 ? R[S] : i[S]);
    }
    var S = arguments.length - 2;
    if (S === 1) v.children = y;
    else if (1 < S) {
      R = Array(S);
      for (var k = 0; k < S; k++) R[k] = arguments[k + 2];
      v.children = R;
    }
    return { $$typeof: d, type: n.type, key: b, ref: g, props: v, _owner: _ };
  }, Y.createContext = function(n) {
    return n = { $$typeof: w, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: p, _context: n }, n.Consumer = n;
  }, Y.createElement = Re, Y.createFactory = function(n) {
    var i = Re.bind(null, n);
    return i.type = n, i;
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(n) {
    return { $$typeof: C, render: n };
  }, Y.isValidElement = Se, Y.lazy = function(n) {
    return { $$typeof: P, _payload: { _status: -1, _result: n }, _init: se };
  }, Y.memo = function(n, i) {
    return { $$typeof: F, type: n, compare: i === void 0 ? null : i };
  }, Y.startTransition = function(n) {
    var i = ge.transition;
    ge.transition = {};
    try {
      n();
    } finally {
      ge.transition = i;
    }
  }, Y.unstable_act = s, Y.useCallback = function(n, i) {
    return T.current.useCallback(n, i);
  }, Y.useContext = function(n) {
    return T.current.useContext(n);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(n) {
    return T.current.useDeferredValue(n);
  }, Y.useEffect = function(n, i) {
    return T.current.useEffect(n, i);
  }, Y.useId = function() {
    return T.current.useId();
  }, Y.useImperativeHandle = function(n, i, y) {
    return T.current.useImperativeHandle(n, i, y);
  }, Y.useInsertionEffect = function(n, i) {
    return T.current.useInsertionEffect(n, i);
  }, Y.useLayoutEffect = function(n, i) {
    return T.current.useLayoutEffect(n, i);
  }, Y.useMemo = function(n, i) {
    return T.current.useMemo(n, i);
  }, Y.useReducer = function(n, i, y) {
    return T.current.useReducer(n, i, y);
  }, Y.useRef = function(n) {
    return T.current.useRef(n);
  }, Y.useState = function(n) {
    return T.current.useState(n);
  }, Y.useSyncExternalStore = function(n, i, y) {
    return T.current.useSyncExternalStore(n, i, y);
  }, Y.useTransition = function() {
    return T.current.useTransition();
  }, Y.version = "18.3.1", Y;
}
var nr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
nr.exports;
var kt;
function vn() {
  return kt || (kt = 1, function(d, m) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.3.1", O = Symbol.for("react.element"), D = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), F = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), B = Symbol.iterator, re = "@@iterator";
      function X(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = B && e[B] || e[re];
        return typeof r == "function" ? r : null;
      }
      var ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, K = {
        transition: null
      }, f = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {}, Re = null;
      function Te(e) {
        Re = e;
      }
      _e.setExtraStackFrame = function(e) {
        Re = e;
      }, _e.getCurrentStack = null, _e.getStackAddendum = function() {
        var e = "";
        Re && (e += Re);
        var r = _e.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Se = !1, we = !1, Ce = !1, de = !1, fe = !1, le = {
        ReactCurrentDispatcher: ee,
        ReactCurrentBatchConfig: K,
        ReactCurrentOwner: oe
      };
      le.ReactDebugCurrentFrame = _e, le.ReactCurrentActQueue = f;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ge("warn", e, a);
        }
      }
      function T(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ge("error", e, a);
        }
      }
      function ge(e, r, a) {
        {
          var o = le.ReactDebugCurrentFrame, l = o.getStackAddendum();
          l !== "" && (r += "%s", a = a.concat([l]));
          var j = a.map(function(E) {
            return String(E);
          });
          j.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, j);
        }
      }
      var Oe = {};
      function s(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", l = o + "." + r;
          if (Oe[l])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Oe[l] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          s(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          s(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          s(e, "setState");
        }
      }, i = Object.assign, y = {};
      Object.freeze(y);
      function v(e, r, a) {
        this.props = e, this.context = r, this.refs = y, this.updater = a || n;
      }
      v.prototype.isReactComponent = {}, v.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var b = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, g = function(e, r) {
          Object.defineProperty(v.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var _ in b)
          b.hasOwnProperty(_) && g(_, b[_]);
      }
      function R() {
      }
      R.prototype = v.prototype;
      function S(e, r, a) {
        this.props = e, this.context = r, this.refs = y, this.updater = a || n;
      }
      var k = S.prototype = new R();
      k.constructor = S, i(k, v.prototype), k.isPureReactComponent = !0;
      function ve() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var h = Array.isArray;
      function ye(e) {
        return h(e);
      }
      function Ae(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function ke(e) {
        try {
          return Ie(e), !1;
        } catch {
          return !0;
        }
      }
      function Ie(e) {
        return "" + e;
      }
      function Le(e) {
        if (ke(e))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(e)), Ie(e);
      }
      function or(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var l = r.displayName || r.name || "";
        return l !== "" ? a + "(" + l + ")" : a;
      }
      function Ye(e) {
        return e.displayName || "Context";
      }
      function Pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case p:
            return "Fragment";
          case D:
            return "Portal";
          case C:
            return "Profiler";
          case w:
            return "StrictMode";
          case I:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              var r = e;
              return Ye(r) + ".Consumer";
            case A:
              var a = e;
              return Ye(a._context) + ".Provider";
            case P:
              return or(e, e.render, "ForwardRef");
            case U:
              var o = e.displayName || null;
              return o !== null ? o : Pe(e.type) || "Memo";
            case J: {
              var l = e, j = l._payload, E = l._init;
              try {
                return Pe(E(j));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var We = Object.prototype.hasOwnProperty, ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ir, ur, Be;
      Be = {};
      function Je(e) {
        if (We.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function $e(e) {
        if (We.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Or(e, r) {
        var a = function() {
          ir || (ir = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function sr(e, r) {
        var a = function() {
          ur || (ur = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function cr(e) {
        if (typeof e.ref == "string" && oe.current && e.__self && oe.current.stateNode !== e.__self) {
          var r = Pe(oe.current.type);
          Be[r] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Be[r] = !0);
        }
      }
      var Ne = function(e, r, a, o, l, j, E) {
        var $ = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: O,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: E,
          // Record the component responsible for creating this element.
          _owner: j
        };
        return $._store = {}, Object.defineProperty($._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty($, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty($, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
      };
      function wr(e, r, a) {
        var o, l = {}, j = null, E = null, $ = null, V = null;
        if (r != null) {
          Je(r) && (E = r.ref, cr(r)), $e(r) && (Le(r.key), j = "" + r.key), $ = r.__self === void 0 ? null : r.__self, V = r.__source === void 0 ? null : r.__source;
          for (o in r)
            We.call(r, o) && !ze.hasOwnProperty(o) && (l[o] = r[o]);
        }
        var Z = arguments.length - 2;
        if (Z === 1)
          l.children = a;
        else if (Z > 1) {
          for (var te = Array(Z), ne = 0; ne < Z; ne++)
            te[ne] = arguments[ne + 2];
          Object.freeze && Object.freeze(te), l.children = te;
        }
        if (e && e.defaultProps) {
          var ue = e.defaultProps;
          for (o in ue)
            l[o] === void 0 && (l[o] = ue[o]);
        }
        if (j || E) {
          var pe = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          j && Or(l, pe), E && sr(l, pe);
        }
        return Ne(e, j, E, $, V, oe.current, l);
      }
      function Pr(e, r) {
        var a = Ne(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function kr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, l = i({}, e.props), j = e.key, E = e.ref, $ = e._self, V = e._source, Z = e._owner;
        if (r != null) {
          Je(r) && (E = r.ref, Z = oe.current), $e(r) && (Le(r.key), j = "" + r.key);
          var te;
          e.type && e.type.defaultProps && (te = e.type.defaultProps);
          for (o in r)
            We.call(r, o) && !ze.hasOwnProperty(o) && (r[o] === void 0 && te !== void 0 ? l[o] = te[o] : l[o] = r[o]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          l.children = a;
        else if (ne > 1) {
          for (var ue = Array(ne), pe = 0; pe < ne; pe++)
            ue[pe] = arguments[pe + 2];
          l.children = ue;
        }
        return Ne(e.type, j, E, $, V, Z, l);
      }
      function De(e) {
        return typeof e == "object" && e !== null && e.$$typeof === O;
      }
      var fr = ".", jr = ":";
      function xr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(l) {
          return a[l];
        });
        return "$" + o;
      }
      var Ke = !1, lr = /\/+/g;
      function je(e) {
        return e.replace(lr, "$&/");
      }
      function Ue(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Le(e.key), xr("" + e.key)) : r.toString(36);
      }
      function Fe(e, r, a, o, l) {
        var j = typeof e;
        (j === "undefined" || j === "boolean") && (e = null);
        var E = !1;
        if (e === null)
          E = !0;
        else
          switch (j) {
            case "string":
            case "number":
              E = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case O:
                case D:
                  E = !0;
              }
          }
        if (E) {
          var $ = e, V = l($), Z = o === "" ? fr + Ue($, 0) : o;
          if (ye(V)) {
            var te = "";
            Z != null && (te = je(Z) + "/"), Fe(V, r, te, "", function(dn) {
              return dn;
            });
          } else V != null && (De(V) && (V.key && (!$ || $.key !== V.key) && Le(V.key), V = Pr(
            V,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (V.key && (!$ || $.key !== V.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              je("" + V.key) + "/"
            ) : "") + Z
          )), r.push(V));
          return 1;
        }
        var ne, ue, pe = 0, me = o === "" ? fr : o + jr;
        if (ye(e))
          for (var Tr = 0; Tr < e.length; Tr++)
            ne = e[Tr], ue = me + Ue(ne, Tr), pe += Fe(ne, r, a, ue, l);
        else {
          var Br = X(e);
          if (typeof Br == "function") {
            var Ct = e;
            Br === Ct.entries && (Ke || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ke = !0);
            for (var fn = Br.call(Ct), Ot, ln = 0; !(Ot = fn.next()).done; )
              ne = Ot.value, ue = me + Ue(ne, ln++), pe += Fe(ne, r, a, ue, l);
          } else if (j === "object") {
            var wt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (wt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : wt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return pe;
      }
      function Ve(e, r, a) {
        if (e == null)
          return e;
        var o = [], l = 0;
        return Fe(e, o, "", "", function(j) {
          return r.call(a, j, l++);
        }), o;
      }
      function Ar(e) {
        var r = 0;
        return Ve(e, function() {
          r++;
        }), r;
      }
      function dr(e, r, a) {
        Ve(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Ir(e) {
        return Ve(e, function(r) {
          return r;
        }) || [];
      }
      function pr(e) {
        if (!De(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function vr(e) {
        var r = {
          $$typeof: F,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: A,
          _context: r
        };
        var a = !1, o = !1, l = !1;
        {
          var j = {
            $$typeof: F,
            _context: r
          };
          Object.defineProperties(j, {
            Provider: {
              get: function() {
                return o || (o = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(E) {
                r.Provider = E;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(E) {
                r._currentValue = E;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(E) {
                r._currentValue2 = E;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(E) {
                r._threadCount = E;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(E) {
                l || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", E), l = !0);
              }
            }
          }), r.Consumer = j;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var qe = -1, Xe = 0, Qe = 1, yr = 2;
      function $r(e) {
        if (e._status === qe) {
          var r = e._result, a = r();
          if (a.then(function(j) {
            if (e._status === Xe || e._status === qe) {
              var E = e;
              E._status = Qe, E._result = j;
            }
          }, function(j) {
            if (e._status === Xe || e._status === qe) {
              var E = e;
              E._status = yr, E._result = j;
            }
          }), e._status === qe) {
            var o = e;
            o._status = Xe, o._result = a;
          }
        }
        if (e._status === Qe) {
          var l = e._result;
          return l === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, l), "default" in l || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, l), l.default;
        } else
          throw e._result;
      }
      function Dr(e) {
        var r = {
          // We use these fields to store the result.
          _status: qe,
          _result: e
        }, a = {
          $$typeof: J,
          _payload: r,
          _init: $r
        };
        {
          var o, l;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(j) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = j, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return l;
              },
              set: function(j) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = j, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Fr(e) {
        e != null && e.$$typeof === U ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? T("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: P,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var hr;
      hr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === p || e === C || fe || e === w || e === I || e === N || de || e === z || Se || we || Ce || typeof e == "object" && e !== null && (e.$$typeof === J || e.$$typeof === U || e.$$typeof === A || e.$$typeof === F || e.$$typeof === P || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === hr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || T("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: U,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(l) {
              o = l, !e.name && !e.displayName && (e.displayName = l);
            }
          });
        }
        return a;
      }
      function c() {
        var e = ee.current;
        return e === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function x(e) {
        var r = c();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function q(e) {
        var r = c();
        return r.useState(e);
      }
      function Q(e, r, a) {
        var o = c();
        return o.useReducer(e, r, a);
      }
      function W(e) {
        var r = c();
        return r.useRef(e);
      }
      function L(e, r) {
        var a = c();
        return a.useEffect(e, r);
      }
      function he(e, r) {
        var a = c();
        return a.useInsertionEffect(e, r);
      }
      function ie(e, r) {
        var a = c();
        return a.useLayoutEffect(e, r);
      }
      function ce(e, r) {
        var a = c();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = c();
        return a.useMemo(e, r);
      }
      function Me(e, r, a) {
        var o = c();
        return o.useImperativeHandle(e, r, a);
      }
      function xe(e, r) {
        {
          var a = c();
          return a.useDebugValue(e, r);
        }
      }
      function be() {
        var e = c();
        return e.useTransition();
      }
      function Ze(e) {
        var r = c();
        return r.useDeferredValue(e);
      }
      function Mr() {
        var e = c();
        return e.useId();
      }
      function Lr(e, r, a) {
        var o = c();
        return o.useSyncExternalStore(e, r, a);
      }
      var er = 0, at, ot, it, ut, st, ct, ft;
      function lt() {
      }
      lt.__reactDisabledLog = !0;
      function zt() {
        {
          if (er === 0) {
            at = console.log, ot = console.info, it = console.warn, ut = console.error, st = console.group, ct = console.groupCollapsed, ft = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: lt,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          er++;
        }
      }
      function Bt() {
        {
          if (er--, er === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: at
              }),
              info: i({}, e, {
                value: ot
              }),
              warn: i({}, e, {
                value: it
              }),
              error: i({}, e, {
                value: ut
              }),
              group: i({}, e, {
                value: st
              }),
              groupCollapsed: i({}, e, {
                value: ct
              }),
              groupEnd: i({}, e, {
                value: ft
              })
            });
          }
          er < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Yr = le.ReactCurrentDispatcher, Wr;
      function mr(e, r, a) {
        {
          if (Wr === void 0)
            try {
              throw Error();
            } catch (l) {
              var o = l.stack.trim().match(/\n( *(at )?)/);
              Wr = o && o[1] || "";
            }
          return `
` + Wr + e;
        }
      }
      var Nr = !1, br;
      {
        var Kt = typeof WeakMap == "function" ? WeakMap : Map;
        br = new Kt();
      }
      function dt(e, r) {
        if (!e || Nr)
          return "";
        {
          var a = br.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Nr = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var j;
        j = Yr.current, Yr.current = null, zt();
        try {
          if (r) {
            var E = function() {
              throw Error();
            };
            if (Object.defineProperty(E.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(E, []);
              } catch (me) {
                o = me;
              }
              Reflect.construct(e, [], E);
            } else {
              try {
                E.call();
              } catch (me) {
                o = me;
              }
              e.call(E.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (me) {
              o = me;
            }
            e();
          }
        } catch (me) {
          if (me && o && typeof me.stack == "string") {
            for (var $ = me.stack.split(`
`), V = o.stack.split(`
`), Z = $.length - 1, te = V.length - 1; Z >= 1 && te >= 0 && $[Z] !== V[te]; )
              te--;
            for (; Z >= 1 && te >= 0; Z--, te--)
              if ($[Z] !== V[te]) {
                if (Z !== 1 || te !== 1)
                  do
                    if (Z--, te--, te < 0 || $[Z] !== V[te]) {
                      var ne = `
` + $[Z].replace(" at new ", " at ");
                      return e.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", e.displayName)), typeof e == "function" && br.set(e, ne), ne;
                    }
                  while (Z >= 1 && te >= 0);
                break;
              }
          }
        } finally {
          Nr = !1, Yr.current = j, Bt(), Error.prepareStackTrace = l;
        }
        var ue = e ? e.displayName || e.name : "", pe = ue ? mr(ue) : "";
        return typeof e == "function" && br.set(e, pe), pe;
      }
      function Ht(e, r, a) {
        return dt(e, !1);
      }
      function Gt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function gr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return dt(e, Gt(e));
        if (typeof e == "string")
          return mr(e);
        switch (e) {
          case I:
            return mr("Suspense");
          case N:
            return mr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case P:
              return Ht(e.render);
            case U:
              return gr(e.type, r, a);
            case J: {
              var o = e, l = o._payload, j = o._init;
              try {
                return gr(j(l), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var pt = {}, vt = le.ReactDebugCurrentFrame;
      function _r(e) {
        if (e) {
          var r = e._owner, a = gr(e.type, e._source, r ? r.type : null);
          vt.setExtraStackFrame(a);
        } else
          vt.setExtraStackFrame(null);
      }
      function Jt(e, r, a, o, l) {
        {
          var j = Function.call.bind(We);
          for (var E in e)
            if (j(e, E)) {
              var $ = void 0;
              try {
                if (typeof e[E] != "function") {
                  var V = Error((o || "React class") + ": " + a + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw V.name = "Invariant Violation", V;
                }
                $ = e[E](r, E, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                $ = Z;
              }
              $ && !($ instanceof Error) && (_r(l), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, E, typeof $), _r(null)), $ instanceof Error && !($.message in pt) && (pt[$.message] = !0, _r(l), T("Failed %s type: %s", a, $.message), _r(null));
            }
        }
      }
      function He(e) {
        if (e) {
          var r = e._owner, a = gr(e.type, e._source, r ? r.type : null);
          Te(a);
        } else
          Te(null);
      }
      var Ur;
      Ur = !1;
      function yt() {
        if (oe.current) {
          var e = Pe(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Xt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Qt(e) {
        return e != null ? Xt(e.__source) : "";
      }
      var ht = {};
      function Zt(e) {
        var r = yt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function mt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Zt(r);
          if (!ht[a]) {
            ht[a] = !0;
            var o = "";
            e && e._owner && e._owner !== oe.current && (o = " It was passed a child from " + Pe(e._owner.type) + "."), He(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), He(null);
          }
        }
      }
      function bt(e, r) {
        if (typeof e == "object") {
          if (ye(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              De(o) && mt(o, r);
            }
          else if (De(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var l = X(e);
            if (typeof l == "function" && l !== e.entries)
              for (var j = l.call(e), E; !(E = j.next()).done; )
                De(E.value) && mt(E.value, r);
          }
        }
      }
      function gt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === P || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === U))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = Pe(r);
            Jt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Ur) {
            Ur = !0;
            var l = Pe(r);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function en(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              He(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), He(null);
              break;
            }
          }
          e.ref !== null && (He(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
        }
      }
      function _t(e, r, a) {
        var o = t(e);
        if (!o) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Qt(r);
          j ? l += j : l += yt();
          var E;
          e === null ? E = "null" : ye(e) ? E = "array" : e !== void 0 && e.$$typeof === O ? (E = "<" + (Pe(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, l);
        }
        var $ = wr.apply(this, arguments);
        if ($ == null)
          return $;
        if (o)
          for (var V = 2; V < arguments.length; V++)
            bt(arguments[V], e);
        return e === p ? en($) : gt($), $;
      }
      var Et = !1;
      function rn(e) {
        var r = _t.bind(null, e);
        return r.type = e, Et || (Et = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function tn(e, r, a) {
        for (var o = kr.apply(this, arguments), l = 2; l < arguments.length; l++)
          bt(arguments[l], o.type);
        return gt(o), o;
      }
      function nn(e, r) {
        var a = K.transition;
        K.transition = {};
        var o = K.transition;
        K.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (K.transition = a, a === null && o._updatedFibers) {
            var l = o._updatedFibers.size;
            l > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var Rt = !1, Er = null;
      function an(e) {
        if (Er === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = d && d[r];
            Er = a.call(d, "timers").setImmediate;
          } catch {
            Er = function(l) {
              Rt === !1 && (Rt = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var j = new MessageChannel();
              j.port1.onmessage = l, j.port2.postMessage(void 0);
            };
          }
        return Er(e);
      }
      var Ge = 0, Tt = !1;
      function St(e) {
        {
          var r = Ge;
          Ge++, f.current === null && (f.current = []);
          var a = f.isBatchingLegacy, o;
          try {
            if (f.isBatchingLegacy = !0, o = e(), !a && f.didScheduleLegacyUpdate) {
              var l = f.current;
              l !== null && (f.didScheduleLegacyUpdate = !1, zr(l));
            }
          } catch (ue) {
            throw Rr(r), ue;
          } finally {
            f.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var j = o, E = !1, $ = {
              then: function(ue, pe) {
                E = !0, j.then(function(me) {
                  Rr(r), Ge === 0 ? Vr(me, ue, pe) : ue(me);
                }, function(me) {
                  Rr(r), pe(me);
                });
              }
            };
            return !Tt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              E || (Tt = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), $;
          } else {
            var V = o;
            if (Rr(r), Ge === 0) {
              var Z = f.current;
              Z !== null && (zr(Z), f.current = null);
              var te = {
                then: function(ue, pe) {
                  f.current === null ? (f.current = [], Vr(V, ue, pe)) : ue(V);
                }
              };
              return te;
            } else {
              var ne = {
                then: function(ue, pe) {
                  ue(V);
                }
              };
              return ne;
            }
          }
        }
      }
      function Rr(e) {
        e !== Ge - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ge = e;
      }
      function Vr(e, r, a) {
        {
          var o = f.current;
          if (o !== null)
            try {
              zr(o), an(function() {
                o.length === 0 ? (f.current = null, r(e)) : Vr(e, r, a);
              });
            } catch (l) {
              a(l);
            }
          else
            r(e);
        }
      }
      var qr = !1;
      function zr(e) {
        if (!qr) {
          qr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            qr = !1;
          }
        }
      }
      var on = _t, un = tn, sn = rn, cn = {
        map: Ve,
        forEach: dr,
        count: Ar,
        toArray: Ir,
        only: pr
      };
      m.Children = cn, m.Component = v, m.Fragment = p, m.Profiler = C, m.PureComponent = S, m.StrictMode = w, m.Suspense = I, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, m.act = St, m.cloneElement = un, m.createContext = vr, m.createElement = on, m.createFactory = sn, m.createRef = ve, m.forwardRef = Fr, m.isValidElement = De, m.lazy = Dr, m.memo = u, m.startTransition = nn, m.unstable_act = St, m.useCallback = ce, m.useContext = x, m.useDebugValue = xe, m.useDeferredValue = Ze, m.useEffect = L, m.useId = Mr, m.useImperativeHandle = Me, m.useInsertionEffect = he, m.useLayoutEffect = ie, m.useMemo = Ee, m.useReducer = Q, m.useRef = W, m.useState = q, m.useSyncExternalStore = Lr, m.useTransition = be, m.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(nr, nr.exports)), nr.exports;
}
process.env.NODE_ENV === "production" ? Zr.exports = pn() : Zr.exports = vn();
var tt = Zr.exports, et = { exports: {} }, rr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function yn() {
  if (jt) return rr;
  jt = 1;
  var d = tt, m = Symbol.for("react.element"), M = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, D = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(C, A, F) {
    var P, I = {}, N = null, U = null;
    F !== void 0 && (N = "" + F), A.key !== void 0 && (N = "" + A.key), A.ref !== void 0 && (U = A.ref);
    for (P in A) O.call(A, P) && !p.hasOwnProperty(P) && (I[P] = A[P]);
    if (C && C.defaultProps) for (P in A = C.defaultProps, A) I[P] === void 0 && (I[P] = A[P]);
    return { $$typeof: m, type: C, key: N, ref: U, props: I, _owner: D.current };
  }
  return rr.Fragment = M, rr.jsx = w, rr.jsxs = w, rr;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function hn() {
  return xt || (xt = 1, process.env.NODE_ENV !== "production" && function() {
    var d = tt, m = Symbol.for("react.element"), M = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), C = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), J = Symbol.iterator, z = "@@iterator";
    function B(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = J && t[J] || t[z];
      return typeof u == "function" ? u : null;
    }
    var re = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function X(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), x = 1; x < u; x++)
          c[x - 1] = arguments[x];
        ee("error", t, c);
      }
    }
    function ee(t, u, c) {
      {
        var x = re.ReactDebugCurrentFrame, q = x.getStackAddendum();
        q !== "" && (u += "%s", c = c.concat([q]));
        var Q = c.map(function(W) {
          return String(W);
        });
        Q.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, Q);
      }
    }
    var K = !1, f = !1, oe = !1, _e = !1, Re = !1, Te;
    Te = Symbol.for("react.module.reference");
    function Se(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === O || t === p || Re || t === D || t === F || t === P || _e || t === U || K || f || oe || typeof t == "object" && t !== null && (t.$$typeof === N || t.$$typeof === I || t.$$typeof === w || t.$$typeof === C || t.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Te || t.getModuleId !== void 0));
    }
    function we(t, u, c) {
      var x = t.displayName;
      if (x)
        return x;
      var q = u.displayName || u.name || "";
      return q !== "" ? c + "(" + q + ")" : c;
    }
    function Ce(t) {
      return t.displayName || "Context";
    }
    function de(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case O:
          return "Fragment";
        case M:
          return "Portal";
        case p:
          return "Profiler";
        case D:
          return "StrictMode";
        case F:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case C:
            var u = t;
            return Ce(u) + ".Consumer";
          case w:
            var c = t;
            return Ce(c._context) + ".Provider";
          case A:
            return we(t, t.render, "ForwardRef");
          case I:
            var x = t.displayName || null;
            return x !== null ? x : de(t.type) || "Memo";
          case N: {
            var q = t, Q = q._payload, W = q._init;
            try {
              return de(W(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, le = 0, se, T, ge, Oe, s, n, i;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function v() {
      {
        if (le === 0) {
          se = console.log, T = console.info, ge = console.warn, Oe = console.error, s = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        le++;
      }
    }
    function b() {
      {
        if (le--, le === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, t, {
              value: se
            }),
            info: fe({}, t, {
              value: T
            }),
            warn: fe({}, t, {
              value: ge
            }),
            error: fe({}, t, {
              value: Oe
            }),
            group: fe({}, t, {
              value: s
            }),
            groupCollapsed: fe({}, t, {
              value: n
            }),
            groupEnd: fe({}, t, {
              value: i
            })
          });
        }
        le < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var g = re.ReactCurrentDispatcher, _;
    function R(t, u, c) {
      {
        if (_ === void 0)
          try {
            throw Error();
          } catch (q) {
            var x = q.stack.trim().match(/\n( *(at )?)/);
            _ = x && x[1] || "";
          }
        return `
` + _ + t;
      }
    }
    var S = !1, k;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      k = new ve();
    }
    function h(t, u) {
      if (!t || S)
        return "";
      {
        var c = k.get(t);
        if (c !== void 0)
          return c;
      }
      var x;
      S = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = g.current, g.current = null, v();
      try {
        if (u) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (be) {
              x = be;
            }
            Reflect.construct(t, [], W);
          } else {
            try {
              W.call();
            } catch (be) {
              x = be;
            }
            t.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            x = be;
          }
          t();
        }
      } catch (be) {
        if (be && x && typeof be.stack == "string") {
          for (var L = be.stack.split(`
`), he = x.stack.split(`
`), ie = L.length - 1, ce = he.length - 1; ie >= 1 && ce >= 0 && L[ie] !== he[ce]; )
            ce--;
          for (; ie >= 1 && ce >= 0; ie--, ce--)
            if (L[ie] !== he[ce]) {
              if (ie !== 1 || ce !== 1)
                do
                  if (ie--, ce--, ce < 0 || L[ie] !== he[ce]) {
                    var Ee = `
` + L[ie].replace(" at new ", " at ");
                    return t.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", t.displayName)), typeof t == "function" && k.set(t, Ee), Ee;
                  }
                while (ie >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        S = !1, g.current = Q, b(), Error.prepareStackTrace = q;
      }
      var Me = t ? t.displayName || t.name : "", xe = Me ? R(Me) : "";
      return typeof t == "function" && k.set(t, xe), xe;
    }
    function ye(t, u, c) {
      return h(t, !1);
    }
    function Ae(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function ke(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return h(t, Ae(t));
      if (typeof t == "string")
        return R(t);
      switch (t) {
        case F:
          return R("Suspense");
        case P:
          return R("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case A:
            return ye(t.render);
          case I:
            return ke(t.type, u, c);
          case N: {
            var x = t, q = x._payload, Q = x._init;
            try {
              return ke(Q(q), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Le = {}, or = re.ReactDebugCurrentFrame;
    function Ye(t) {
      if (t) {
        var u = t._owner, c = ke(t.type, t._source, u ? u.type : null);
        or.setExtraStackFrame(c);
      } else
        or.setExtraStackFrame(null);
    }
    function Pe(t, u, c, x, q) {
      {
        var Q = Function.call.bind(Ie);
        for (var W in t)
          if (Q(t, W)) {
            var L = void 0;
            try {
              if (typeof t[W] != "function") {
                var he = Error((x || "React class") + ": " + c + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              L = t[W](u, W, x, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              L = ie;
            }
            L && !(L instanceof Error) && (Ye(q), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", c, W, typeof L), Ye(null)), L instanceof Error && !(L.message in Le) && (Le[L.message] = !0, Ye(q), X("Failed %s type: %s", c, L.message), Ye(null));
          }
      }
    }
    var We = Array.isArray;
    function ze(t) {
      return We(t);
    }
    function ir(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function ur(t) {
      try {
        return Be(t), !1;
      } catch {
        return !0;
      }
    }
    function Be(t) {
      return "" + t;
    }
    function Je(t) {
      if (ur(t))
        return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(t)), Be(t);
    }
    var $e = re.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, cr, Ne;
    Ne = {};
    function wr(t) {
      if (Ie.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Pr(t) {
      if (Ie.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function kr(t, u) {
      if (typeof t.ref == "string" && $e.current && u && $e.current.stateNode !== u) {
        var c = de($e.current.type);
        Ne[c] || (X('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de($e.current.type), t.ref), Ne[c] = !0);
      }
    }
    function De(t, u) {
      {
        var c = function() {
          sr || (sr = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function fr(t, u) {
      {
        var c = function() {
          cr || (cr = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var jr = function(t, u, c, x, q, Q, W) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: W,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function xr(t, u, c, x, q) {
      {
        var Q, W = {}, L = null, he = null;
        c !== void 0 && (Je(c), L = "" + c), Pr(u) && (Je(u.key), L = "" + u.key), wr(u) && (he = u.ref, kr(u, q));
        for (Q in u)
          Ie.call(u, Q) && !Or.hasOwnProperty(Q) && (W[Q] = u[Q]);
        if (t && t.defaultProps) {
          var ie = t.defaultProps;
          for (Q in ie)
            W[Q] === void 0 && (W[Q] = ie[Q]);
        }
        if (L || he) {
          var ce = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          L && De(W, ce), he && fr(W, ce);
        }
        return jr(t, L, he, q, x, $e.current, W);
      }
    }
    var Ke = re.ReactCurrentOwner, lr = re.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var u = t._owner, c = ke(t.type, t._source, u ? u.type : null);
        lr.setExtraStackFrame(c);
      } else
        lr.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === m;
    }
    function Ve() {
      {
        if (Ke.current) {
          var t = de(Ke.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ar(t) {
      return "";
    }
    var dr = {};
    function Ir(t) {
      {
        var u = Ve();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function pr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Ir(u);
        if (dr[c])
          return;
        dr[c] = !0;
        var x = "";
        t && t._owner && t._owner !== Ke.current && (x = " It was passed a child from " + de(t._owner.type) + "."), je(t), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, x), je(null);
      }
    }
    function vr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (ze(t))
          for (var c = 0; c < t.length; c++) {
            var x = t[c];
            Fe(x) && pr(x, u);
          }
        else if (Fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var q = B(t);
          if (typeof q == "function" && q !== t.entries)
            for (var Q = q.call(t), W; !(W = Q.next()).done; )
              Fe(W.value) && pr(W.value, u);
        }
      }
    }
    function qe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === I))
          c = u.propTypes;
        else
          return;
        if (c) {
          var x = de(u);
          Pe(c, t.props, "prop", x, t);
        } else if (u.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var q = de(u);
          X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xe(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var x = u[c];
          if (x !== "children" && x !== "key") {
            je(t), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), je(null);
            break;
          }
        }
        t.ref !== null && (je(t), X("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var Qe = {};
    function yr(t, u, c, x, q, Q) {
      {
        var W = Se(t);
        if (!W) {
          var L = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Ar();
          he ? L += he : L += Ve();
          var ie;
          t === null ? ie = "null" : ze(t) ? ie = "array" : t !== void 0 && t.$$typeof === m ? (ie = "<" + (de(t.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof t, X("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, L);
        }
        var ce = xr(t, u, c, q, Q);
        if (ce == null)
          return ce;
        if (W) {
          var Ee = u.children;
          if (Ee !== void 0)
            if (x)
              if (ze(Ee)) {
                for (var Me = 0; Me < Ee.length; Me++)
                  vr(Ee[Me], t);
                Object.freeze && Object.freeze(Ee);
              } else
                X("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vr(Ee, t);
        }
        if (Ie.call(u, "key")) {
          var xe = de(t), be = Object.keys(u).filter(function(Lr) {
            return Lr !== "key";
          }), Ze = be.length > 0 ? "{key: someKey, " + be.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[xe + Ze]) {
            var Mr = be.length > 0 ? "{" + be.join(": ..., ") + ": ...}" : "{}";
            X(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, xe, Mr, xe), Qe[xe + Ze] = !0;
          }
        }
        return t === O ? Xe(ce) : qe(ce), ce;
      }
    }
    function $r(t, u, c) {
      return yr(t, u, c, !0);
    }
    function Dr(t, u, c) {
      return yr(t, u, c, !1);
    }
    var Fr = Dr, hr = $r;
    tr.Fragment = O, tr.jsx = Fr, tr.jsxs = hr;
  }()), tr;
}
process.env.NODE_ENV === "production" ? et.exports = yn() : et.exports = hn();
var ar = et.exports, rt = { exports: {} }, Sr = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function mn() {
  if (At) return H;
  At = 1;
  var d = typeof Symbol == "function" && Symbol.for, m = d ? Symbol.for("react.element") : 60103, M = d ? Symbol.for("react.portal") : 60106, O = d ? Symbol.for("react.fragment") : 60107, D = d ? Symbol.for("react.strict_mode") : 60108, p = d ? Symbol.for("react.profiler") : 60114, w = d ? Symbol.for("react.provider") : 60109, C = d ? Symbol.for("react.context") : 60110, A = d ? Symbol.for("react.async_mode") : 60111, F = d ? Symbol.for("react.concurrent_mode") : 60111, P = d ? Symbol.for("react.forward_ref") : 60112, I = d ? Symbol.for("react.suspense") : 60113, N = d ? Symbol.for("react.suspense_list") : 60120, U = d ? Symbol.for("react.memo") : 60115, J = d ? Symbol.for("react.lazy") : 60116, z = d ? Symbol.for("react.block") : 60121, B = d ? Symbol.for("react.fundamental") : 60117, re = d ? Symbol.for("react.responder") : 60118, X = d ? Symbol.for("react.scope") : 60119;
  function ee(f) {
    if (typeof f == "object" && f !== null) {
      var oe = f.$$typeof;
      switch (oe) {
        case m:
          switch (f = f.type, f) {
            case A:
            case F:
            case O:
            case p:
            case D:
            case I:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case C:
                case P:
                case J:
                case U:
                case w:
                  return f;
                default:
                  return oe;
              }
          }
        case M:
          return oe;
      }
    }
  }
  function K(f) {
    return ee(f) === F;
  }
  return H.AsyncMode = A, H.ConcurrentMode = F, H.ContextConsumer = C, H.ContextProvider = w, H.Element = m, H.ForwardRef = P, H.Fragment = O, H.Lazy = J, H.Memo = U, H.Portal = M, H.Profiler = p, H.StrictMode = D, H.Suspense = I, H.isAsyncMode = function(f) {
    return K(f) || ee(f) === A;
  }, H.isConcurrentMode = K, H.isContextConsumer = function(f) {
    return ee(f) === C;
  }, H.isContextProvider = function(f) {
    return ee(f) === w;
  }, H.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === m;
  }, H.isForwardRef = function(f) {
    return ee(f) === P;
  }, H.isFragment = function(f) {
    return ee(f) === O;
  }, H.isLazy = function(f) {
    return ee(f) === J;
  }, H.isMemo = function(f) {
    return ee(f) === U;
  }, H.isPortal = function(f) {
    return ee(f) === M;
  }, H.isProfiler = function(f) {
    return ee(f) === p;
  }, H.isStrictMode = function(f) {
    return ee(f) === D;
  }, H.isSuspense = function(f) {
    return ee(f) === I;
  }, H.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === O || f === F || f === p || f === D || f === I || f === N || typeof f == "object" && f !== null && (f.$$typeof === J || f.$$typeof === U || f.$$typeof === w || f.$$typeof === C || f.$$typeof === P || f.$$typeof === B || f.$$typeof === re || f.$$typeof === X || f.$$typeof === z);
  }, H.typeOf = ee, H;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function bn() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var d = typeof Symbol == "function" && Symbol.for, m = d ? Symbol.for("react.element") : 60103, M = d ? Symbol.for("react.portal") : 60106, O = d ? Symbol.for("react.fragment") : 60107, D = d ? Symbol.for("react.strict_mode") : 60108, p = d ? Symbol.for("react.profiler") : 60114, w = d ? Symbol.for("react.provider") : 60109, C = d ? Symbol.for("react.context") : 60110, A = d ? Symbol.for("react.async_mode") : 60111, F = d ? Symbol.for("react.concurrent_mode") : 60111, P = d ? Symbol.for("react.forward_ref") : 60112, I = d ? Symbol.for("react.suspense") : 60113, N = d ? Symbol.for("react.suspense_list") : 60120, U = d ? Symbol.for("react.memo") : 60115, J = d ? Symbol.for("react.lazy") : 60116, z = d ? Symbol.for("react.block") : 60121, B = d ? Symbol.for("react.fundamental") : 60117, re = d ? Symbol.for("react.responder") : 60118, X = d ? Symbol.for("react.scope") : 60119;
    function ee(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === O || h === F || h === p || h === D || h === I || h === N || typeof h == "object" && h !== null && (h.$$typeof === J || h.$$typeof === U || h.$$typeof === w || h.$$typeof === C || h.$$typeof === P || h.$$typeof === B || h.$$typeof === re || h.$$typeof === X || h.$$typeof === z);
    }
    function K(h) {
      if (typeof h == "object" && h !== null) {
        var ye = h.$$typeof;
        switch (ye) {
          case m:
            var Ae = h.type;
            switch (Ae) {
              case A:
              case F:
              case O:
              case p:
              case D:
              case I:
                return Ae;
              default:
                var ke = Ae && Ae.$$typeof;
                switch (ke) {
                  case C:
                  case P:
                  case J:
                  case U:
                  case w:
                    return ke;
                  default:
                    return ye;
                }
            }
          case M:
            return ye;
        }
      }
    }
    var f = A, oe = F, _e = C, Re = w, Te = m, Se = P, we = O, Ce = J, de = U, fe = M, le = p, se = D, T = I, ge = !1;
    function Oe(h) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(h) || K(h) === A;
    }
    function s(h) {
      return K(h) === F;
    }
    function n(h) {
      return K(h) === C;
    }
    function i(h) {
      return K(h) === w;
    }
    function y(h) {
      return typeof h == "object" && h !== null && h.$$typeof === m;
    }
    function v(h) {
      return K(h) === P;
    }
    function b(h) {
      return K(h) === O;
    }
    function g(h) {
      return K(h) === J;
    }
    function _(h) {
      return K(h) === U;
    }
    function R(h) {
      return K(h) === M;
    }
    function S(h) {
      return K(h) === p;
    }
    function k(h) {
      return K(h) === D;
    }
    function ve(h) {
      return K(h) === I;
    }
    G.AsyncMode = f, G.ConcurrentMode = oe, G.ContextConsumer = _e, G.ContextProvider = Re, G.Element = Te, G.ForwardRef = Se, G.Fragment = we, G.Lazy = Ce, G.Memo = de, G.Portal = fe, G.Profiler = le, G.StrictMode = se, G.Suspense = T, G.isAsyncMode = Oe, G.isConcurrentMode = s, G.isContextConsumer = n, G.isContextProvider = i, G.isElement = y, G.isForwardRef = v, G.isFragment = b, G.isLazy = g, G.isMemo = _, G.isPortal = R, G.isProfiler = S, G.isStrictMode = k, G.isSuspense = ve, G.isValidElementType = ee, G.typeOf = K;
  }()), G;
}
var $t;
function Ut() {
  return $t || ($t = 1, process.env.NODE_ENV === "production" ? Sr.exports = mn() : Sr.exports = bn()), Sr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kr, Dt;
function gn() {
  if (Dt) return Kr;
  Dt = 1;
  var d = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
  function O(p) {
    if (p == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(p);
  }
  function D() {
    try {
      if (!Object.assign)
        return !1;
      var p = new String("abc");
      if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5")
        return !1;
      for (var w = {}, C = 0; C < 10; C++)
        w["_" + String.fromCharCode(C)] = C;
      var A = Object.getOwnPropertyNames(w).map(function(P) {
        return w[P];
      });
      if (A.join("") !== "0123456789")
        return !1;
      var F = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(P) {
        F[P] = P;
      }), Object.keys(Object.assign({}, F)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Kr = D() ? Object.assign : function(p, w) {
    for (var C, A = O(p), F, P = 1; P < arguments.length; P++) {
      C = Object(arguments[P]);
      for (var I in C)
        m.call(C, I) && (A[I] = C[I]);
      if (d) {
        F = d(C);
        for (var N = 0; N < F.length; N++)
          M.call(C, F[N]) && (A[F[N]] = C[F[N]]);
      }
    }
    return A;
  }, Kr;
}
var Hr, Ft;
function nt() {
  if (Ft) return Hr;
  Ft = 1;
  var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hr = d, Hr;
}
var Gr, Mt;
function Vt() {
  return Mt || (Mt = 1, Gr = Function.call.bind(Object.prototype.hasOwnProperty)), Gr;
}
var Jr, Lt;
function _n() {
  if (Lt) return Jr;
  Lt = 1;
  var d = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var m = nt(), M = {}, O = Vt();
    d = function(p) {
      var w = "Warning: " + p;
      typeof console < "u" && console.error(w);
      try {
        throw new Error(w);
      } catch {
      }
    };
  }
  function D(p, w, C, A, F) {
    if (process.env.NODE_ENV !== "production") {
      for (var P in p)
        if (O(p, P)) {
          var I;
          try {
            if (typeof p[P] != "function") {
              var N = Error(
                (A || "React class") + ": " + C + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw N.name = "Invariant Violation", N;
            }
            I = p[P](w, P, A, C, null, m);
          } catch (J) {
            I = J;
          }
          if (I && !(I instanceof Error) && d(
            (A || "React class") + ": type specification of " + C + " `" + P + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in M)) {
            M[I.message] = !0;
            var U = F ? F() : "";
            d(
              "Failed " + C + " type: " + I.message + (U ?? "")
            );
          }
        }
    }
  }
  return D.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (M = {});
  }, Jr = D, Jr;
}
var Xr, Yt;
function En() {
  if (Yt) return Xr;
  Yt = 1;
  var d = Ut(), m = gn(), M = nt(), O = Vt(), D = _n(), p = function() {
  };
  process.env.NODE_ENV !== "production" && (p = function(C) {
    var A = "Warning: " + C;
    typeof console < "u" && console.error(A);
    try {
      throw new Error(A);
    } catch {
    }
  });
  function w() {
    return null;
  }
  return Xr = function(C, A) {
    var F = typeof Symbol == "function" && Symbol.iterator, P = "@@iterator";
    function I(s) {
      var n = s && (F && s[F] || s[P]);
      if (typeof n == "function")
        return n;
    }
    var N = "<<anonymous>>", U = {
      array: re("array"),
      bigint: re("bigint"),
      bool: re("boolean"),
      func: re("function"),
      number: re("number"),
      object: re("object"),
      string: re("string"),
      symbol: re("symbol"),
      any: X(),
      arrayOf: ee,
      element: K(),
      elementType: f(),
      instanceOf: oe,
      node: Se(),
      objectOf: Re,
      oneOf: _e,
      oneOfType: Te,
      shape: Ce,
      exact: de
    };
    function J(s, n) {
      return s === n ? s !== 0 || 1 / s === 1 / n : s !== s && n !== n;
    }
    function z(s, n) {
      this.message = s, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    z.prototype = Error.prototype;
    function B(s) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, i = 0;
      function y(b, g, _, R, S, k, ve) {
        if (R = R || N, k = k || _, ve !== M) {
          if (A) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = R + ":" + _;
            !n[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            i < 3 && (p(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[ye] = !0, i++);
          }
        }
        return g[_] == null ? b ? g[_] === null ? new z("The " + S + " `" + k + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new z("The " + S + " `" + k + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : s(g, _, R, S, k);
      }
      var v = y.bind(null, !1);
      return v.isRequired = y.bind(null, !0), v;
    }
    function re(s) {
      function n(i, y, v, b, g, _) {
        var R = i[y], S = se(R);
        if (S !== s) {
          var k = T(R);
          return new z(
            "Invalid " + b + " `" + g + "` of type " + ("`" + k + "` supplied to `" + v + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return B(n);
    }
    function X() {
      return B(w);
    }
    function ee(s) {
      function n(i, y, v, b, g) {
        if (typeof s != "function")
          return new z("Property `" + g + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var _ = i[y];
        if (!Array.isArray(_)) {
          var R = se(_);
          return new z("Invalid " + b + " `" + g + "` of type " + ("`" + R + "` supplied to `" + v + "`, expected an array."));
        }
        for (var S = 0; S < _.length; S++) {
          var k = s(_, S, v, b, g + "[" + S + "]", M);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return B(n);
    }
    function K() {
      function s(n, i, y, v, b) {
        var g = n[i];
        if (!C(g)) {
          var _ = se(g);
          return new z("Invalid " + v + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(s);
    }
    function f() {
      function s(n, i, y, v, b) {
        var g = n[i];
        if (!d.isValidElementType(g)) {
          var _ = se(g);
          return new z("Invalid " + v + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(s);
    }
    function oe(s) {
      function n(i, y, v, b, g) {
        if (!(i[y] instanceof s)) {
          var _ = s.name || N, R = Oe(i[y]);
          return new z("Invalid " + b + " `" + g + "` of type " + ("`" + R + "` supplied to `" + v + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return B(n);
    }
    function _e(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? p(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : p("Invalid argument supplied to oneOf, expected an array.")), w;
      function n(i, y, v, b, g) {
        for (var _ = i[y], R = 0; R < s.length; R++)
          if (J(_, s[R]))
            return null;
        var S = JSON.stringify(s, function(ve, h) {
          var ye = T(h);
          return ye === "symbol" ? String(h) : h;
        });
        return new z("Invalid " + b + " `" + g + "` of value `" + String(_) + "` " + ("supplied to `" + v + "`, expected one of " + S + "."));
      }
      return B(n);
    }
    function Re(s) {
      function n(i, y, v, b, g) {
        if (typeof s != "function")
          return new z("Property `" + g + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var _ = i[y], R = se(_);
        if (R !== "object")
          return new z("Invalid " + b + " `" + g + "` of type " + ("`" + R + "` supplied to `" + v + "`, expected an object."));
        for (var S in _)
          if (O(_, S)) {
            var k = s(_, S, v, b, g + "." + S, M);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return B(n);
    }
    function Te(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && p("Invalid argument supplied to oneOfType, expected an instance of array."), w;
      for (var n = 0; n < s.length; n++) {
        var i = s[n];
        if (typeof i != "function")
          return p(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(i) + " at index " + n + "."
          ), w;
      }
      function y(v, b, g, _, R) {
        for (var S = [], k = 0; k < s.length; k++) {
          var ve = s[k], h = ve(v, b, g, _, R, M);
          if (h == null)
            return null;
          h.data && O(h.data, "expectedType") && S.push(h.data.expectedType);
        }
        var ye = S.length > 0 ? ", expected one of type [" + S.join(", ") + "]" : "";
        return new z("Invalid " + _ + " `" + R + "` supplied to " + ("`" + g + "`" + ye + "."));
      }
      return B(y);
    }
    function Se() {
      function s(n, i, y, v, b) {
        return fe(n[i]) ? null : new z("Invalid " + v + " `" + b + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return B(s);
    }
    function we(s, n, i, y, v) {
      return new z(
        (s || "React class") + ": " + n + " type `" + i + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function Ce(s) {
      function n(i, y, v, b, g) {
        var _ = i[y], R = se(_);
        if (R !== "object")
          return new z("Invalid " + b + " `" + g + "` of type `" + R + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var S in s) {
          var k = s[S];
          if (typeof k != "function")
            return we(v, b, g, S, T(k));
          var ve = k(_, S, v, b, g + "." + S, M);
          if (ve)
            return ve;
        }
        return null;
      }
      return B(n);
    }
    function de(s) {
      function n(i, y, v, b, g) {
        var _ = i[y], R = se(_);
        if (R !== "object")
          return new z("Invalid " + b + " `" + g + "` of type `" + R + "` " + ("supplied to `" + v + "`, expected `object`."));
        var S = m({}, i[y], s);
        for (var k in S) {
          var ve = s[k];
          if (O(s, k) && typeof ve != "function")
            return we(v, b, g, k, T(ve));
          if (!ve)
            return new z(
              "Invalid " + b + " `" + g + "` key `" + k + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(i[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var h = ve(_, k, v, b, g + "." + k, M);
          if (h)
            return h;
        }
        return null;
      }
      return B(n);
    }
    function fe(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(fe);
          if (s === null || C(s))
            return !0;
          var n = I(s);
          if (n) {
            var i = n.call(s), y;
            if (n !== s.entries) {
              for (; !(y = i.next()).done; )
                if (!fe(y.value))
                  return !1;
            } else
              for (; !(y = i.next()).done; ) {
                var v = y.value;
                if (v && !fe(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(s, n) {
      return s === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function se(s) {
      var n = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : le(n, s) ? "symbol" : n;
    }
    function T(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var n = se(s);
      if (n === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function ge(s) {
      var n = T(s);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function Oe(s) {
      return !s.constructor || !s.constructor.name ? N : s.constructor.name;
    }
    return U.checkPropTypes = D, U.resetWarningCache = D.resetWarningCache, U.PropTypes = U, U;
  }, Xr;
}
var Qr, Wt;
function Rn() {
  if (Wt) return Qr;
  Wt = 1;
  var d = nt();
  function m() {
  }
  function M() {
  }
  return M.resetWarningCache = m, Qr = function() {
    function O(w, C, A, F, P, I) {
      if (I !== d) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    O.isRequired = O;
    function D() {
      return O;
    }
    var p = {
      array: O,
      bigint: O,
      bool: O,
      func: O,
      number: O,
      object: O,
      string: O,
      symbol: O,
      any: O,
      arrayOf: D,
      element: O,
      elementType: O,
      instanceOf: D,
      node: O,
      objectOf: D,
      oneOf: D,
      oneOfType: D,
      shape: D,
      exact: D,
      checkPropTypes: M,
      resetWarningCache: m
    };
    return p.PropTypes = p, p;
  }, Qr;
}
if (process.env.NODE_ENV !== "production") {
  var Tn = Ut(), Sn = !0;
  rt.exports = En()(Tn.isElement, Sn);
} else
  rt.exports = Rn()();
var Cn = rt.exports;
const ae = /* @__PURE__ */ Nt(Cn);
var qt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(d) {
  (function() {
    var m = {}.hasOwnProperty;
    function M() {
      for (var p = "", w = 0; w < arguments.length; w++) {
        var C = arguments[w];
        C && (p = D(p, O(C)));
      }
      return p;
    }
    function O(p) {
      if (typeof p == "string" || typeof p == "number")
        return p;
      if (typeof p != "object")
        return "";
      if (Array.isArray(p))
        return M.apply(null, p);
      if (p.toString !== Object.prototype.toString && !p.toString.toString().includes("[native code]"))
        return p.toString();
      var w = "";
      for (var C in p)
        m.call(p, C) && p[C] && (w = D(w, C));
      return w;
    }
    function D(p, w) {
      return w ? p ? p + " " + w : p + w : p;
    }
    d.exports ? (M.default = M, d.exports = M) : window.classNames = M;
  })();
})(qt);
var On = qt.exports;
const Cr = /* @__PURE__ */ Nt(On);
function wn({
  className: d,
  design: m = "primary",
  disabled: M = !1,
  onClick: O,
  testID: D = "xButton",
  text: p,
  type: w = "button"
}) {
  return /* @__PURE__ */ ar.jsx(
    "button",
    {
      className: Cr(
        "button classes here",
        { disabled: "disabled" },
        m,
        d
      ),
      onClick: O,
      type: w,
      "data-testid": D,
      disabled: M,
      children: p
    }
  );
}
wn.propTypes = {
  className: ae.string,
  // accept className for placement
  design: ae.oneOf(["primary", "secondary", "link"]),
  // built-in styles
  disabled: ae.bool,
  onClick: ae.func.isRequired,
  testID: ae.string,
  text: ae.string.isRequired,
  type: ae.oneOf(["button", "submit"])
  // only allowable types, button to ignore form submission
};
const Pn = tt.forwardRef(function({
  className: d,
  disabled: m = !1,
  defaultValue: M,
  error: O = !1,
  errorMessage: D,
  label: p,
  name: w,
  onBlur: C = () => {
  },
  onChange: A = () => {
  },
  onFocus: F = () => {
  },
  onInput: P = () => {
  },
  pattern: I,
  placeholder: N,
  required: U = !1,
  testID: J = "xInput",
  type: z = "text"
}, B) {
  return /* @__PURE__ */ ar.jsxs(
    "fieldset",
    {
      className: Cr("component classes here", d),
      "data-testid": J,
      children: [
        /* @__PURE__ */ ar.jsx(
          "label",
          {
            htmlFor: w,
            className: Cr("label classes here", O),
            "data-testid": `${J}-label`,
            children: p
          }
        ),
        /* @__PURE__ */ ar.jsx(
          "input",
          {
            ref: B,
            "data-testid": `${J}-input`,
            className: Cr("input classes here", O),
            defaultValue: M,
            onBlur: C,
            onChange: A,
            onFocus: F,
            onInput: P,
            placeholder: p || N,
            type: z,
            pattern: I,
            required: U,
            disabled: m,
            name: w
          }
        ),
        O && /* @__PURE__ */ ar.jsx("p", { "data-testid": `${J}-error`, className: "error classes here", children: D })
      ]
    }
  );
});
Pn.propTypes = {
  className: ae.string,
  // accept className for placement
  defaultValue: ae.any,
  design: ae.oneOf(["primary", "secondary", "link"]),
  // built-in styles
  disabled: ae.bool,
  error: ae.bool,
  errorMessage: ae.string,
  label: ae.string.isRequired,
  name: ae.string.isRequired,
  onBlur: ae.func,
  onChange: ae.func,
  onFocus: ae.func,
  onInput: ae.func,
  pattern: ae.any,
  placeholder: ae.string,
  required: ae.bool,
  testID: ae.string,
  type: ae.oneOf([
    "date",
    "datetime",
    "email",
    "number",
    "password",
    "tel",
    "text"
  ])
  // only allowable types, button to ignore form submission
};
export {
  wn as Button,
  Pn as Input
};
