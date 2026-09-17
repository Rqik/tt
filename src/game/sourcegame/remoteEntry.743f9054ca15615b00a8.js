var sirena_tower_game;
(function () {
  "use strict";
  var __webpack_modules__ = {
      6367: function (e, r, t) {
        var n = {};
        t.r(n), t.d(n, {
          Module: function () {
            return ur
          },
          ModuleFederation: function () {
            return vr
          },
          createInstance: function () {
            return qr
          },
          getInstance: function () {
            return Lr
          },
          getRemoteEntry: function () {
            return ir
          },
          getRemoteInfo: function () {
            return ar
          },
          init: function () {
            return Rr
          },
          loadRemote: function () {
            return Tr
          },
          loadScript: function () {
            return o.k0
          },
          loadScriptNode: function () {
            return o.oe
          },
          loadShare: function () {
            return $r
          },
          loadShareSync: function () {
            return Or
          },
          preloadRemote: function () {
            return Ar
          },
          registerGlobalPlugins: function () {
            return X
          },
          registerPlugins: function () {
            return Pr
          },
          registerRemotes: function () {
            return Mr
          },
          registerShared: function () {
            return xr
          }
        });
        var o = t(9615);
        const i = "RUNTIME-001",
          a = "RUNTIME-002",
          s = "RUNTIME-003",
          c = "RUNTIME-004",
          u = "RUNTIME-005",
          _ = "RUNTIME-006",
          l = "RUNTIME-007",
          f = "RUNTIME-008",
          p = "RUNTIME-009",
          h = "TYPE-001",
          d = "BUILD-001",
          m = "BUILD-002",
          b = (e, r, t, n) => {
            const o = [`${[r[e]]} #${e}`];
            return t && o.push(`args: ${JSON.stringify(t)}`), o.push((e => `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${e.split("-")[0].toLowerCase()}/${e}`)(e)), n && o.push(`Original Error Message:\n ${n}`), o.join("\n")
          },
          g = {
            [i]: "Failed to get remoteEntry exports.",
            [a]: 'The remote entry interface does not contain "init"',
            [s]: "Failed to get manifest.",
            [c]: "Failed to locate remote.",
            [u]: "Invalid loadShareSync function call from bundler runtime",
            [_]: "Invalid loadShareSync function call from runtime",
            [l]: "Failed to get remote snapshot.",
            [f]: "Failed to load script resources.",
            [p]: "Please call createInstance first."
          },
          y = {
            [h]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error."
          },
          w = {
            [d]: "Failed to find expose module.",
            [m]: "PublicPath is required in prod mode."
          },
          k = "[ Federation Runtime ]",
          E = (0, o.h)(k);

        function S(e, r) {
          e || N(r)
        }

        function N(e) {
          if (e instanceof Error) throw e.message.startsWith(k) || (e.message = `${k}: ${e.message}`), e;
          throw new Error(`${k}: ${e}`)
        }

        function v(e) {
          e instanceof Error ? (e.message.startsWith(k) || (e.message = `${k}: ${e.message}`), E.warn(e)) : E.warn(e)
        }

        function q(e, r) {
          return -1 === e.findIndex(e => e === r) && e.push(r), e
        }

        function I(e) {
          return "version" in e && e.version ? `${e.name}:${e.version}` : "entry" in e && e.entry ? `${e.name}:${e.entry}` : `${e.name}`
        }

        function R(e) {
          return void 0 !== e.entry
        }

        function T(e) {
          return !e.entry.includes(".json")
        }

        function $(e) {
          return e && "object" == typeof e
        }
        const O = Object.prototype.toString;

        function A(e) {
          return Array.isArray(e) ? e : [e]
        }

        function M(e) {
          const r = {
            url: "",
            type: "global",
            globalName: ""
          };
          return (0, o.OL)() || (0, o.tf)() ? "remoteEntry" in e ? {
            url: e.remoteEntry,
            type: e.remoteEntryType,
            globalName: e.globalName
          } : r : "ssrRemoteEntry" in e ? {
            url: e.ssrRemoteEntry || r.url,
            type: e.ssrRemoteEntryType || r.type,
            globalName: e.globalName
          } : r
        }
        const P = "object" == typeof globalThis ? globalThis : window,
          L = (() => {
            try {
              return document.defaultView
            } catch {
              return P
            }
          })(),
          x = L;

        function D(e, r, t) {
          Object.defineProperty(e, r, {
            value: t,
            configurable: !1,
            writable: !0
          })
        }

        function F(e, r) {
          return Object.hasOwnProperty.call(e, r)
        }
        F(P, "__GLOBAL_LOADING_REMOTE_ENTRY__") || D(P, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
        const H = P.__GLOBAL_LOADING_REMOTE_ENTRY__;

        function C(e) {
          F(e, "__VMOK__") && !F(e, "__FEDERATION__") && D(e, "__FEDERATION__", e.__VMOK__), F(e, "__FEDERATION__") || (D(e, "__FEDERATION__", {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map
          }), D(e, "__VMOK__", e.__FEDERATION__)), e.__FEDERATION__.__GLOBAL_PLUGIN__ ?? = [], e.__FEDERATION__.__INSTANCES__ ?? = [], e.__FEDERATION__.moduleInfo ?? = {}, e.__FEDERATION__.__SHARE__ ?? = {}, e.__FEDERATION__.__MANIFEST_LOADING__ ?? = {}, e.__FEDERATION__.__PRELOADED_MAP__ ?? = new Map
        }

        function j(e) {
          P.__FEDERATION__.__INSTANCES__.push(e)
        }

        function V() {
          return P.__FEDERATION__.__DEBUG_CONSTRUCTOR__
        }

        function G(e, r = (0, o.Bb)()) {
          r && (P.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e, P.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.21.6")
        }

        function U(e, r) {
          if ("string" == typeof r) {
            if (e[r]) return {
              value: e[r],
              key: r
            }; {
              const t = Object.keys(e);
              for (const n of t) {
                const [t, o] = n.split(":"), i = `${t}:${r}`, a = e[i];
                if (a) return {
                  value: a,
                  key: i
                }
              }
              return {
                value: void 0,
                key: r
              }
            }
          }
          throw new Error("key must be string")
        }
        C(P), C(L);
        const B = () => L.__FEDERATION__.moduleInfo,
          K = (e, r) => {
            const t = U(r, I(e)).value;
            if (t && !t.version && "version" in e && e.version && (t.version = e.version), t) return t;
            if ("version" in e && e.version) {
              const {
                version: r,
                ...t
              } = e, n = I(t), o = U(L.__FEDERATION__.moduleInfo, n).value;
              if (o?.version === r) return o
            }
          },
          W = e => K(e, L.__FEDERATION__.moduleInfo),
          z = (e, r) => {
            const t = I(e);
            return L.__FEDERATION__.moduleInfo[t] = r, L.__FEDERATION__.moduleInfo
          },
          J = e => (L.__FEDERATION__.moduleInfo = {
            ...L.__FEDERATION__.moduleInfo,
            ...e
          }, () => {
            const r = Object.keys(e);
            for (const e of r) delete L.__FEDERATION__.moduleInfo[e]
          }),
          Y = (e, r) => {
            const t = r || `__FEDERATION_${e}:custom__`;
            return {
              remoteEntryKey: t,
              entryExports: P[t]
            }
          },
          X = e => {
            const {
              __GLOBAL_PLUGIN__: r
            } = L.__FEDERATION__;
            e.forEach(e => {
              -1 === r.findIndex(r => r.name === e.name) ? r.push(e) : v(`The plugin ${e.name} has been registered.`)
            })
          },
          Z = () => L.__FEDERATION__.__GLOBAL_PLUGIN__,
          Q = e => P.__FEDERATION__.__PRELOADED_MAP__.get(e),
          ee = e => P.__FEDERATION__.__PRELOADED_MAP__.set(e, !0),
          re = "default",
          te = "global",
          ne = "[0-9A-Za-z-]+",
          oe = `(?:\\+(${ne}(?:\\.${ne})*))`,
          ie = "0|[1-9]\\d*",
          ae = "[0-9]+",
          se = "\\d*[a-zA-Z-][a-zA-Z0-9-]*",
          ce = `(?:${ae}|${se})`,
          ue = `(?:${ie}|${se})`,
          _e = `(?:-(${ue}(?:\\.${ue})*))`,
          le = `${ie}|x|X|\\*`,
          fe = `[v=\\s]*(${le})(?:\\.(${le})(?:\\.(${le})(?:${_e})?${oe}?)?)?`,
          pe = `^\\s*(${fe})\\s+-\\s+(${fe})\\s*$`,
          he = "((?:<|>)?=?)",
          de = `(\\s*)${he}\\s*(${`[v=\\s]*${`(${ae})\\.(${ae})\\.(${ae})`}${`(?:-?(${ce}(?:\\.${ce})*))`}?${oe}?`}|${fe})`,
          me = "(?:~>?)",
          be = `(\\s*)${me}\\s+`,
          ge = "(?:\\^)",
          ye = `(\\s*)${ge}\\s+`,
          we = `^${ge}${fe}$`,
          ke = `^${me}${fe}$`,
          Ee = `^${he}\\s*${fe}$`,
          Se = `^${he}\\s*(${`v?${`(${ie})\\.(${ie})\\.(${ie})`}${_e}?${oe}?`})$|^$`;

        function Ne(e) {
          return new RegExp(e)
        }

        function ve(e) {
          return !e || "x" === e.toLowerCase() || "*" === e
        }

        function qe(...e) {
          return r => e.reduce((e, r) => r(e), r)
        }

        function Ie(e) {
          return e.match(Ne(Se))
        }

        function Re(e, r, t, n) {
          const o = `${e}.${r}.${t}`;
          return n ? `${o}-${n}` : o
        }

        function Te(e) {
          return e.replace(Ne(pe), (e, r, t, n, o, i, a, s, c, u, _, l) => `${r=ve(t)?"":ve(n)?`>=${t}.0.0`:ve(o)?`>=${t}.${n}.0`:`>=${r}`} ${s=ve(c)?"":ve(u)?`<${Number(c)+1}.0.0-0`:ve(_)?`<${c}.${Number(u)+1}.0-0`:l?`<=${c}.${u}.${_}-${l}`:`<=${s}`}`.trim())
        }

        function $e(e) {
          return e.replace(Ne(de), "$1$2$3")
        }

        function Oe(e) {
          return e.replace(Ne(be), "$1~")
        }

        function Ae(e) {
          return e.replace(Ne(ye), "$1^")
        }

        function Me(e) {
          return e.trim().split(/\s+/).map(e => e.replace(Ne(we), (e, r, t, n, o) => ve(r) ? "" : ve(t) ? `>=${r}.0.0 <${Number(r)+1}.0.0-0` : ve(n) ? "0" === r ? `>=${r}.${t}.0 <${r}.${Number(t)+1}.0-0` : `>=${r}.${t}.0 <${Number(r)+1}.0.0-0` : o ? "0" === r ? "0" === t ? `>=${r}.${t}.${n}-${o} <${r}.${t}.${Number(n)+1}-0` : `>=${r}.${t}.${n}-${o} <${r}.${Number(t)+1}.0-0` : `>=${r}.${t}.${n}-${o} <${Number(r)+1}.0.0-0` : "0" === r ? "0" === t ? `>=${r}.${t}.${n} <${r}.${t}.${Number(n)+1}-0` : `>=${r}.${t}.${n} <${r}.${Number(t)+1}.0-0` : `>=${r}.${t}.${n} <${Number(r)+1}.0.0-0`)).join(" ")
        }

        function Pe(e) {
          return e.trim().split(/\s+/).map(e => e.replace(Ne(ke), (e, r, t, n, o) => ve(r) ? "" : ve(t) ? `>=${r}.0.0 <${Number(r)+1}.0.0-0` : ve(n) ? `>=${r}.${t}.0 <${r}.${Number(t)+1}.0-0` : o ? `>=${r}.${t}.${n}-${o} <${r}.${Number(t)+1}.0-0` : `>=${r}.${t}.${n} <${r}.${Number(t)+1}.0-0`)).join(" ")
        }

        function Le(e) {
          return e.split(/\s+/).map(e => e.trim().replace(Ne(Ee), (e, r, t, n, o, i) => {
            const a = ve(t),
              s = a || ve(n),
              c = s || ve(o);
            return "=" === r && c && (r = ""), i = "", a ? ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && c ? (s && (n = 0), o = 0, ">" === r ? (r = ">=", s ? (t = Number(t) + 1, n = 0, o = 0) : (n = Number(n) + 1, o = 0)) : "<=" === r && (r = "<", s ? t = Number(t) + 1 : n = Number(n) + 1), "<" === r && (i = "-0"), `${r+t}.${n}.${o}${i}`) : s ? `>=${t}.0.0${i} <${Number(t)+1}.0.0-0` : c ? `>=${t}.${n}.0${i} <${t}.${Number(n)+1}.0-0` : e
          })).join(" ")
        }

        function xe(e) {
          return e.trim().replace(Ne("(<|>)?=?\\s*\\*"), "")
        }

        function De(e, r) {
          return (e = Number(e) || e) > (r = Number(r) || r) ? 1 : e === r ? 0 : -1
        }

        function Fe(e, r) {
          return De(e.major, r.major) || De(e.minor, r.minor) || De(e.patch, r.patch) || function (e, r) {
            const {
              preRelease: t
            } = e, {
              preRelease: n
            } = r;
            if (void 0 === t && Boolean(n)) return 1;
            if (Boolean(t) && void 0 === n) return -1;
            if (void 0 === t && void 0 === n) return 0;
            for (let e = 0, r = t.length; e <= r; e++) {
              const r = t[e],
                o = n[e];
              if (r !== o) return void 0 === r && void 0 === o ? 0 : r ? o ? De(r, o) : -1 : 1
            }
            return 0
          }(e, r)
        }

        function He(e, r) {
          return e.version === r.version
        }

        function Ce(e, r) {
          switch (e.operator) {
            case "":
            case "=":
              return He(e, r);
            case ">":
              return Fe(e, r) < 0;
            case ">=":
              return He(e, r) || Fe(e, r) < 0;
            case "<":
              return Fe(e, r) > 0;
            case "<=":
              return He(e, r) || Fe(e, r) > 0;
            case void 0:
              return !0;
            default:
              return !1
          }
        }

        function je(e) {
          return qe(Me, Pe, Le, xe)(e)
        }

        function Ve(e) {
          return qe(Te, $e, Oe, Ae)(e.trim()).split(/\s+/).join(" ")
        }

        function Ge(e, r) {
          if (!e) return !1;
          const t = Ie(e);
          if (!t) return !1;
          const [, n, , o, i, a, s] = t, c = {
            operator: n,
            version: Re(o, i, a, s),
            major: o,
            minor: i,
            patch: a,
            preRelease: s?.split(".")
          }, u = r.split("||");
          for (const e of u) {
            const r = e.trim();
            if (!r) return !0;
            if ("*" === r || "x" === r) return !0;
            try {
              const e = Ve(r);
              if (!e.trim()) return !0;
              const t = e.split(" ").map(e => je(e)).join(" ");
              if (!t.trim()) return !0;
              const n = t.split(/\s+/).map(e => e.trim().replace(Ne("^\\s*>=\\s*0.0.0\\s*$"), "")).filter(Boolean);
              if (0 === n.length) continue;
              let o = !0;
              for (const e of n) {
                const r = Ie(e);
                if (!r) {
                  o = !1;
                  break
                }
                const [, t, , n, i, a, s] = r;
                if (!Ce({
                    operator: t,
                    version: Re(n, i, a, s),
                    major: n,
                    minor: i,
                    patch: a,
                    preRelease: s?.split(".")
                  }, c)) {
                  o = !1;
                  break
                }
              }
              if (o) return !0
            } catch (e) {
              continue
            }
          }
          return !1
        }

        function Ue(e, r) {
          const t = r.shared || {},
            n = r.name,
            o = Object.keys(t).reduce((e, o) => {
              const i = A(t[o]);
              return e[o] = e[o] || [], i.forEach(t => {
                e[o].push(function (e, r, t, n) {
                  let o;
                  return o = "get" in e ? e.get : "lib" in e ? () => Promise.resolve(e.lib) : () => Promise.resolve(() => {
                    throw new Error(`Can not get shared '${t}'!`)
                  }), {
                    deps: [],
                    useIn: [],
                    from: r,
                    loading: null,
                    ...e,
                    shareConfig: {
                      requiredVersion: `^${e.version}`,
                      singleton: !1,
                      eager: !1,
                      strictVersion: !1,
                      ...e.shareConfig
                    },
                    get: o,
                    loaded: !(!e?.loaded && !("lib" in e)) || void 0,
                    version: e.version ?? "0",
                    scope: Array.isArray(e.scope) ? e.scope : [e.scope ?? "default"],
                    strategy: (e.strategy ?? n) || "version-first"
                  }
                }(t, n, o, r.shareStrategy))
              }), e
            }, {}),
            i = {
              ...e.shared
            };
          return Object.keys(o).forEach(e => {
            i[e] ? o[e].forEach(r => {
              i[e].find(e => e.version === r.version) || i[e].push(r)
            }) : i[e] = o[e]
          }), {
            shared: i,
            shareInfos: o
          }
        }

        function Be(e, r) {
          const t = e => {
            if (!Number.isNaN(Number(e))) {
              const r = e.split(".");
              let t = e;
              for (let e = 0; e < 3 - r.length; e++) t += ".0";
              return t
            }
            return e
          };
          return !!Ge(t(e), `<=${t(r)}`)
        }
        const Ke = (e, r) => {
            const t = r || function (e, r) {
              return Be(e, r)
            };
            return Object.keys(e).reduce((e, r) => e ? t(e, r) || "0" === e ? r : e : r, 0)
          },
          We = e => Boolean(e.loaded) || "function" == typeof e.lib;

        function ze(e, r, t) {
          const n = e[r][t];
          return Ke(e[r][t], function (e, r) {
            return !We(n[e]) && Be(e, r)
          })
        }

        function Je(e, r, t) {
          const n = e[r][t];
          return Ke(e[r][t], function (e, r) {
            const t = e => We(e) || (e => Boolean(e.loading))(e);
            return t(n[r]) ? !t(n[e]) || Boolean(Be(e, r)) : !t(n[e]) && Be(e, r)
          })
        }

        function Ye(e) {
          return "loaded-first" === e ? Je : ze
        }

        function Xe(e, r, t, n) {
          if (!e) return;
          const {
            shareConfig: o,
            scope: i = re,
            strategy: a
          } = t, s = Array.isArray(i) ? i : [i];
          for (const i of s)
            if (o && e[i] && e[i][r]) {
              const {
                requiredVersion: s
              } = o, c = Ye(a)(e, i, r), u = () => {
                if (o.singleton) {
                  if ("string" == typeof s && !Ge(c, s)) {
                    const n = `Version ${c} from ${c&&e[i][r][c].from} of shared singleton module ${r} does not satisfy the requirement of ${t.from} which needs ${s})`;
                    o.strictVersion ? N(n) : v(n)
                  }
                  return e[i][r][c]
                }
                if (!1 === s || "*" === s) return e[i][r][c];
                if (Ge(c, s)) return e[i][r][c];
                for (const [t, n] of Object.entries(e[i][r]))
                  if (Ge(t, s)) return n
              }, _ = {
                shareScopeMap: e,
                scope: i,
                pkgName: r,
                version: c,
                GlobalFederation: x.__FEDERATION__,
                resolver: u
              };
              return (n.emit(_) || _).resolver()
            }
        }

        function Ze() {
          return x.__FEDERATION__.__SHARE__
        }

        function Qe(e) {
          const {
            pkgName: r,
            extraOptions: t,
            shareInfos: n
          } = e, o = t?.resolver ?? (e => {
            if (!e) return;
            const r = {};
            e.forEach(e => {
              r[e.version] = e
            });
            const t = Ke(r, function (e, t) {
              return !We(r[e]) && Be(e, t)
            });
            return r[t]
          });
          return Object.assign({}, o(n[r]), t?.customShareInfo)
        }

        function er(e, r) {
          for (const t of e) {
            const e = r.startsWith(t.name);
            let n = r.replace(t.name, "");
            if (e) {
              if (n.startsWith("/")) {
                return n = `.${n}`, {
                  pkgNameOrAlias: t.name,
                  expose: n,
                  remote: t
                }
              }
              if ("" === n) return {
                pkgNameOrAlias: t.name,
                expose: ".",
                remote: t
              }
            }
            const o = t.alias && r.startsWith(t.alias);
            let i = t.alias && r.replace(t.alias, "");
            if (t.alias && o) {
              if (i && i.startsWith("/")) {
                return i = `.${i}`, {
                  pkgNameOrAlias: t.alias,
                  expose: i,
                  remote: t
                }
              }
              if ("" === i) return {
                pkgNameOrAlias: t.alias,
                expose: ".",
                remote: t
              }
            }
          }
        }
        const rr = ".then(callbacks[0]).catch(callbacks[1])";

        function tr(e, r, t) {
          const {
            remoteEntryKey: n,
            entryExports: o
          } = Y(e, r);
          return S(o, b(i, g, {
            remoteName: e,
            remoteEntryUrl: t,
            remoteEntryKey: n
          })), o
        }
        async function nr({
          remoteInfo: e,
          remoteEntryExports: r,
          loaderHook: t,
          getEntryUrl: n
        }) {
          const {
            entry: i,
            entryGlobalName: a,
            name: s,
            type: c
          } = e;
          switch (c) {
            case "esm":
            case "module":
              return async function ({
                entry: e,
                remoteEntryExports: r
              }) {
                return new Promise((t, n) => {
                  try {
                    r ? t(r) : "undefined" != typeof FEDERATION_ALLOW_NEW_FUNCTION ? new Function("callbacks", `import("${e}")${rr}`)([t, n]) : import(e).then(t).catch(n)
                  } catch (e) {
                    n(e)
                  }
                })
              }({
                entry: i,
                remoteEntryExports: r
              });
            case "system":
              return async function ({
                entry: e,
                remoteEntryExports: r
              }) {
                return new Promise((t, n) => {
                  try {
                    r ? t(r) : new Function("callbacks", `System.import("${e}")${rr}`)([t, n])
                  } catch (e) {
                    n(e)
                  }
                })
              }({
                entry: i,
                remoteEntryExports: r
              });
            default:
              return async function ({
                name: e,
                globalName: r,
                entry: t,
                loaderHook: n,
                getEntryUrl: i
              }) {
                const {
                  entryExports: a
                } = Y(e, r);
                if (a) return a;
                const s = i ? i(t) : t;
                return (0, o.k0)(s, {
                  attrs: {},
                  createScriptHook: (e, r) => {
                    const t = n.lifecycle.createScript.emit({
                      url: e,
                      attrs: r
                    });
                    if (t) return t instanceof HTMLScriptElement || "script" in t || "timeout" in t ? t : void 0
                  }
                }).then(() => tr(e, r, t)).catch(r => {
                  throw S(void 0, b(f, g, {
                    remoteName: e,
                    resourceUrl: t
                  })), r
                })
              }({
                entry: i,
                globalName: a,
                name: s,
                loaderHook: t,
                getEntryUrl: n
              })
          }
        }

        function or(e) {
          const {
            entry: r,
            name: t
          } = e;
          return (0, o.lG)(t, r)
        }
        async function ir(e) {
          const {
            origin: r,
            remoteEntryExports: t,
            remoteInfo: n,
            getEntryUrl: i,
            _inErrorHandling: a = !1
          } = e, s = or(n);
          if (t) return t;
          if (!H[s]) {
            const e = r.remoteHandler.hooks.lifecycle.loadEntry,
              c = r.loaderHook;
            H[s] = e.emit({
              loaderHook: c,
              remoteInfo: n,
              remoteEntryExports: t
            }).then(e => {
              if (e) return e;
              return ("undefined" != typeof ENV_TARGET ? "web" === ENV_TARGET : (0, o.OL)()) ? nr({
                remoteInfo: n,
                remoteEntryExports: t,
                loaderHook: c,
                getEntryUrl: i
              }) : async function ({
                remoteInfo: e,
                loaderHook: r
              }) {
                const {
                  entry: t,
                  entryGlobalName: n,
                  name: i,
                  type: a
                } = e, {
                  entryExports: s
                } = Y(i, n);
                return s || (0, o.oe)(t, {
                  attrs: {
                    name: i,
                    globalName: n,
                    type: a
                  },
                  loaderHook: {
                    createScriptHook: (e, t = {}) => {
                      const n = r.lifecycle.createScript.emit({
                        url: e,
                        attrs: t
                      });
                      if (n) return "url" in n ? n : void 0
                    }
                  }
                }).then(() => tr(i, n, t)).catch(e => {
                  throw e
                })
              }({
                remoteInfo: n,
                loaderHook: c
              })
            }).catch(async e => {
              const o = or(n);
              if (e instanceof Error && e.message.includes(f) && !a) {
                const e = e => ir({
                    ...e,
                    _inErrorHandling: !0
                  }),
                  i = await r.loaderHook.lifecycle.loadEntryError.emit({
                    getRemoteEntry: e,
                    origin: r,
                    remoteInfo: n,
                    remoteEntryExports: t,
                    globalLoading: H,
                    uniqueKey: o
                  });
                if (i) return i
              }
              throw e
            })
          }
          return H[s]
        }

        function ar(e) {
          return {
            ...e,
            entry: "entry" in e ? e.entry : "",
            type: e.type || te,
            entryGlobalName: e.entryGlobalName || e.name,
            shareScope: e.shareScope || re
          }
        }

        function sr(e) {
          return {
            resourceCategory: "sync",
            share: !0,
            depsRemote: !0,
            prefetchInterface: !1,
            ...e
          }
        }

        function cr(e, r, t, n = !0) {
          const {
            cssAssets: i,
            jsAssetsWithoutEntry: a,
            entryAssets: s
          } = t;
          if (r.options.inBrowser) {
            if (s.forEach(t => {
                const {
                  moduleInfo: n
                } = t, o = r.moduleCache.get(e.name);
                ir(o ? {
                  origin: r,
                  remoteInfo: n,
                  remoteEntryExports: o.remoteEntryExports
                } : {
                  origin: r,
                  remoteInfo: n,
                  remoteEntryExports: void 0
                })
              }), n) {
              const e = {
                rel: "preload",
                as: "style"
              };
              i.forEach(t => {
                const {
                  link: n,
                  needAttach: i
                } = (0, o.d)({
                  url: t,
                  cb: () => {},
                  attrs: e,
                  createLinkHook: (e, t) => {
                    const n = r.loaderHook.lifecycle.createLink.emit({
                      url: e,
                      attrs: t
                    });
                    if (n instanceof HTMLLinkElement) return n
                  }
                });
                i && document.head.appendChild(n)
              })
            } else {
              const e = {
                rel: "stylesheet",
                type: "text/css"
              };
              i.forEach(t => {
                const {
                  link: n,
                  needAttach: i
                } = (0, o.d)({
                  url: t,
                  cb: () => {},
                  attrs: e,
                  createLinkHook: (e, t) => {
                    const n = r.loaderHook.lifecycle.createLink.emit({
                      url: e,
                      attrs: t
                    });
                    if (n instanceof HTMLLinkElement) return n
                  },
                  needDeleteLink: !1
                });
                i && document.head.appendChild(n)
              })
            }
            if (n) {
              const e = {
                rel: "preload",
                as: "script"
              };
              a.forEach(t => {
                const {
                  link: n,
                  needAttach: i
                } = (0, o.d)({
                  url: t,
                  cb: () => {},
                  attrs: e,
                  createLinkHook: (e, t) => {
                    const n = r.loaderHook.lifecycle.createLink.emit({
                      url: e,
                      attrs: t
                    });
                    if (n instanceof HTMLLinkElement) return n
                  }
                });
                i && document.head.appendChild(n)
              })
            } else {
              const t = {
                fetchpriority: "high",
                type: "module" === e?.type ? "module" : "text/javascript"
              };
              a.forEach(e => {
                const {
                  script: n,
                  needAttach: i
                } = (0, o.so)({
                  url: e,
                  cb: () => {},
                  attrs: t,
                  createScriptHook: (e, t) => {
                    const n = r.loaderHook.lifecycle.createScript.emit({
                      url: e,
                      attrs: t
                    });
                    if (n instanceof HTMLScriptElement) return n
                  },
                  needDeleteScript: !0
                });
                i && document.head.appendChild(n)
              })
            }
          }
        }
        class ur {
          constructor({
            remoteInfo: e,
            host: r
          }) {
            this.inited = !1, this.lib = void 0, this.remoteInfo = e, this.host = r
          }
          async getEntry() {
            if (this.remoteEntryExports) return this.remoteEntryExports;
            let e;
            return e = await ir({
              origin: this.host,
              remoteInfo: this.remoteInfo,
              remoteEntryExports: this.remoteEntryExports
            }), S(e, `remoteEntryExports is undefined \n ${(0,o.ML)(this.remoteInfo)}`), this.remoteEntryExports = e, this.remoteEntryExports
          }
          async get(e, r, t, n) {
            const {
              loadFactory: o = !0
            } = t || {
              loadFactory: !0
            }, i = await this.getEntry();
            if (!this.inited) {
              const r = this.host.shareScopeMap,
                t = Array.isArray(this.remoteInfo.shareScope) ? this.remoteInfo.shareScope : [this.remoteInfo.shareScope];
              t.length || t.push("default"), t.forEach(e => {
                r[e] || (r[e] = {})
              });
              const o = r[t[0]],
                s = [],
                c = {
                  version: this.remoteInfo.version || "",
                  shareScopeKeys: Array.isArray(this.remoteInfo.shareScope) ? t : this.remoteInfo.shareScope || "default"
                };
              Object.defineProperty(c, "shareScopeMap", {
                value: r,
                enumerable: !1
              });
              const u = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                shareScope: o,
                remoteEntryInitOptions: c,
                initScope: s,
                remoteInfo: this.remoteInfo,
                origin: this.host
              });
              void 0 === i?.init && N(b(a, g, {
                hostName: this.host.name,
                remoteName: this.remoteInfo.name,
                remoteEntryUrl: this.remoteInfo.entry,
                remoteEntryKey: this.remoteInfo.entryGlobalName
              })), await i.init(u.shareScope, u.initScope, u.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit({
                ...u,
                id: e,
                remoteSnapshot: n,
                remoteEntryExports: i
              })
            }
            let s;
            this.lib = i, this.inited = !0, s = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
              remoteEntryExports: i,
              expose: r,
              moduleInfo: this.remoteInfo
            }), s || (s = await i.get(r)), S(s, `${I(this.remoteInfo)} remote don't export ${r}.`);
            const c = ((e, r) => {
                let t;
                return t = e.endsWith("/") ? e.slice(0, -1) : e, r.startsWith(".") && (r = r.slice(1)), t += r, t
              })(this.remoteInfo.name, r),
              u = this.wraperFactory(s, c);
            if (!o) return u;
            return await u()
          }
          wraperFactory(e, r) {
            function t(e, r) {
              e && "object" == typeof e && Object.isExtensible(e) && !Object.getOwnPropertyDescriptor(e, Symbol.for("mf_module_id")) && Object.defineProperty(e, Symbol.for("mf_module_id"), {
                value: r,
                enumerable: !1
              })
            }
            return e instanceof Promise ? async () => {
              const n = await e();
              return t(n, r), n
            }: () => {
              const n = e();
              return t(n, r), n
            }
          }
        }
        class _r {
          constructor(e) {
            this.type = "", this.listeners = new Set, e && (this.type = e)
          }
          on(e) {
            "function" == typeof e && this.listeners.add(e)
          }
          once(e) {
            const r = this;
            this.on(function t(...n) {
              return r.remove(t), e.apply(null, n)
            })
          }
          emit(...e) {
            let r;
            return this.listeners.size > 0 && this.listeners.forEach(t => {
              r = t(...e)
            }), r
          }
          remove(e) {
            this.listeners.delete(e)
          }
          removeAll() {
            this.listeners.clear()
          }
        }
        class lr extends _r {
          emit(...e) {
            let r;
            const t = Array.from(this.listeners);
            if (t.length > 0) {
              let n = 0;
              const o = r => !1 !== r && (n < t.length ? Promise.resolve(t[n++].apply(null, e)).then(o) : r);
              r = o()
            }
            return Promise.resolve(r)
          }
        }

        function fr(e, r) {
          if (!$(r)) return !1;
          if (e !== r)
            for (const t in e)
              if (!(t in r)) return !1;
          return !0
        }
        class pr extends _r {
          constructor(e) {
            super(), this.onerror = N, this.type = e
          }
          emit(e) {
            $(e) || N(`The data for the "${this.type}" hook should be an object.`);
            for (const r of this.listeners) try {
              const t = r(e);
              if (!fr(e, t)) {
                this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                break
              }
              e = t
            } catch (e) {
              v(e), this.onerror(e)
            }
            return e
          }
        }
        class hr extends _r {
          constructor(e) {
            super(), this.onerror = N, this.type = e
          }
          emit(e) {
            $(e) || N(`The response data for the "${this.type}" hook must be an object.`);
            const r = Array.from(this.listeners);
            if (r.length > 0) {
              let t = 0;
              const n = r => (v(r), this.onerror(r), e),
                o = i => {
                  if (fr(e, i)) {
                    if (e = i, t < r.length) try {
                      return Promise.resolve(r[t++](e)).then(o, n)
                    } catch (e) {
                      return n(e)
                    }
                  } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                  return e
                };
              return Promise.resolve(o(e))
            }
            return Promise.resolve(e)
          }
        }
        class dr {
          constructor(e) {
            this.registerPlugins = {}, this.lifecycle = e, this.lifecycleKeys = Object.keys(e)
          }
          applyPlugin(e, r) {
            var t;
            S((t = e, "[object Object]" === O.call(t)), "Plugin configuration is invalid.");
            const n = e.name;
            S(n, "A name must be provided by the plugin."), this.registerPlugins[n] || (this.registerPlugins[n] = e, e.apply?.(r), Object.keys(this.lifecycle).forEach(r => {
              const t = e[r];
              t && this.lifecycle[r].on(t)
            }))
          }
          removePlugin(e) {
            S(e, "A name is required.");
            const r = this.registerPlugins[e];
            S(r, `The plugin "${e}" is not registered.`), Object.keys(r).forEach(e => {
              "name" !== e && this.lifecycle[e].remove(r[e])
            })
          }
        }

        function mr(e, r) {
          const t = M(r);
          t.url || N(`The attribute remoteEntry of ${e.name} must not be undefined.`);
          let n = (0, o.Al)(r, t.url);
          (0, o.OL)() || n.startsWith("http") || (n = `https:${n}`), e.type = t.type, e.entryGlobalName = t.globalName, e.entry = n, e.version = r.version, e.buildVersion = r.buildVersion
        }

        function br(e) {
          const r = e.split(":");
          return 1 === r.length ? {
            name: r[0],
            version: void 0
          } : 2 === r.length ? {
            name: r[0],
            version: r[1]
          } : {
            name: r[1],
            version: r[2]
          }
        }

        function gr(e, r, t, n, i = {}, a) {
          const s = I(r),
            {
              value: c
            } = U(e, s),
            u = a || c;
          if (u && !(0, o.Tr)(u) && (t(u, r, n), u.remotesInfo)) {
            const r = Object.keys(u.remotesInfo);
            for (const n of r) {
              if (i[n]) continue;
              i[n] = !0;
              const r = br(n),
                o = u.remotesInfo[n];
              gr(e, {
                name: r.name,
                version: o.matchedVersion
              }, t, !1, i, void 0)
            }
          }
        }
        const yr = (e, r) => document.querySelector(`${e}[${"link"===e?"href":"src"}="${r}"]`);

        function wr(e, r, t, n, i) {
          const a = [],
            s = [],
            c = [],
            u = new Set,
            _ = new Set,
            {
              options: l
            } = e,
            {
              preloadConfig: f
            } = r,
            {
              depsRemote: p
            } = f;
          if (gr(n, t, (r, t, n) => {
              let i;
              if (n) i = f;
              else if (Array.isArray(p)) {
                const e = p.find(e => e.nameOrAlias === t.name || e.nameOrAlias === t.alias);
                if (!e) return;
                i = sr(e)
              } else {
                if (!0 !== p) return;
                i = f
              }
              const u = (0, o.Al)(r, M(r).url);
              u && c.push({
                name: t.name,
                moduleInfo: {
                  name: t.name,
                  entry: u,
                  type: "remoteEntryType" in r ? r.remoteEntryType : "global",
                  entryGlobalName: "globalName" in r ? r.globalName : t.name,
                  shareScope: "",
                  version: "version" in r ? r.version : void 0
                },
                url: u
              });
              let _ = "modules" in r ? r.modules : [];
              const l = (h = i.exposes) ? h.map(e => "." === e ? e : e.startsWith("./") ? e.replace("./", "") : e) : [];
              var h;

              function d(e) {
                const t = e.map(e => (0, o.Al)(r, e));
                return i.filter ? t.filter(i.filter) : t
              }
              if (l.length && "modules" in r && (_ = r?.modules?.reduce((e, r) => (-1 !== l?.indexOf(r.moduleName) && e.push(r), e), [])), _) {
                const n = _.length;
                for (let o = 0; o < n; o++) {
                  const n = _[o],
                    c = `${t.name}/${n.moduleName}`;
                  e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: "." === n.moduleName ? t.name : c,
                    name: t.name,
                    remoteSnapshot: r,
                    preloadConfig: i,
                    remote: t,
                    origin: e
                  });
                  Q(c) || ("all" === i.resourceCategory ? (a.push(...d(n.assets.css.async)), a.push(...d(n.assets.css.sync)), s.push(...d(n.assets.js.async)), s.push(...d(n.assets.js.sync))) : (i.resourceCategory = "sync") && (a.push(...d(n.assets.css.sync)), s.push(...d(n.assets.js.sync))), ee(c))
                }
              }
            }, !0, {}, i), i.shared && i.shared.length > 0) {
            const r = (r, t) => {
              const n = Xe(e.shareScopeMap, t.sharedName, r, e.sharedHandler.hooks.lifecycle.resolveShare);
              n && "function" == typeof n.lib && (t.assets.js.sync.forEach(e => {
                u.add(e)
              }), t.assets.css.sync.forEach(e => {
                _.add(e)
              }))
            };
            i.shared.forEach(e => {
              const t = l.shared?. [e.sharedName];
              if (!t) return;
              const n = e.version ? t.find(r => r.version === e.version) : t;
              if (!n) return;
              A(n).forEach(t => {
                r(t, e)
              })
            })
          }
          const h = s.filter(e => !u.has(e) && !yr("script", e));
          return {
            cssAssets: a.filter(e => !_.has(e) && !yr("link", e)),
            jsAssetsWithoutEntry: h,
            entryAssets: c.filter(e => !yr("script", e.url))
          }
        }

        function kr(e, r) {
          const t = W({
              name: r.name,
              version: r.options.version
            }),
            n = t && "remotesInfo" in t && t.remotesInfo && U(t.remotesInfo, e.name).value;
          return n && n.matchedVersion ? {
            hostGlobalSnapshot: t,
            globalSnapshot: B(),
            remoteSnapshot: W({
              name: e.name,
              version: n.matchedVersion
            })
          } : {
            hostGlobalSnapshot: void 0,
            globalSnapshot: B(),
            remoteSnapshot: W({
              name: e.name,
              version: "version" in e ? e.version : void 0
            })
          }
        }
        class Er {
          constructor(e) {
            this.loadingHostSnapshot = null, this.manifestCache = new Map, this.hooks = new dr({
              beforeLoadRemoteSnapshot: new lr("beforeLoadRemoteSnapshot"),
              loadSnapshot: new hr("loadGlobalSnapshot"),
              loadRemoteSnapshot: new hr("loadRemoteSnapshot"),
              afterLoadSnapshot: new hr("afterLoadSnapshot")
            }), this.manifestLoading = x.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e, this.loaderHook = e.loaderHook
          }
          async loadRemoteSnapshotInfo({
            moduleInfo: e,
            id: r,
            expose: t
          }) {
            const {
              options: n
            } = this.HostInstance;
            await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
              options: n,
              moduleInfo: e
            });
            let i = W({
              name: this.HostInstance.options.name,
              version: this.HostInstance.options.version
            });
            i || (i = {
              version: this.HostInstance.options.version || "",
              remoteEntry: "",
              remotesInfo: {}
            }, J({
              [this.HostInstance.options.name]: i
            })), i && "remotesInfo" in i && !U(i.remotesInfo, e.name).value && ("version" in e || "entry" in e) && (i.remotesInfo = {
              ...i?.remotesInfo,
              [e.name]: {
                matchedVersion: "version" in e ? e.version : e.entry
              }
            });
            const {
              hostGlobalSnapshot: a,
              remoteSnapshot: s,
              globalSnapshot: c
            } = this.getGlobalRemoteInfo(e), {
              remoteSnapshot: u,
              globalSnapshot: _
            } = await this.hooks.lifecycle.loadSnapshot.emit({
              options: n,
              moduleInfo: e,
              hostGlobalSnapshot: a,
              remoteSnapshot: s,
              globalSnapshot: c
            });
            let f, p;
            if (u)
              if ((0, o.Tr)(u)) {
                const r = (0, o.OL)() ? u.remoteEntry : u.ssrRemoteEntry || u.remoteEntry || "",
                  t = await this.getManifestJson(r, e, {});
                f = t, p = z({
                  ...e,
                  entry: r
                }, t)
              } else {
                const {
                  remoteSnapshot: r
                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: e,
                  remoteSnapshot: u,
                  from: "global"
                });
                f = r, p = _
              }
            else if (R(e)) {
              const r = await this.getManifestJson(e.entry, e, {}),
                t = z(e, r),
                {
                  remoteSnapshot: n
                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: e,
                  remoteSnapshot: r,
                  from: "global"
                });
              f = n, p = t
            } else N(b(l, g, {
              hostName: e.name,
              hostVersion: e.version,
              globalSnapshot: JSON.stringify(_)
            }));
            return await this.hooks.lifecycle.afterLoadSnapshot.emit({
              id: r,
              host: this.HostInstance,
              options: n,
              moduleInfo: e,
              remoteSnapshot: f
            }), {
              remoteSnapshot: f,
              globalSnapshot: p
            }
          }
          getGlobalRemoteInfo(e) {
            return kr(e, this.HostInstance)
          }
          async getManifestJson(e, r, t) {
            const n = async () => {
              let t = this.manifestCache.get(e);
              if (t) return t;
              try {
                let r = await this.loaderHook.lifecycle.fetch.emit(e, {});
                r && r instanceof Response || (r = await fetch(e, {})), t = await r.json()
              } catch (n) {
                t = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                  id: e,
                  error: n,
                  from: "runtime",
                  lifecycle: "afterResolve",
                  origin: this.HostInstance
                }), t || (delete this.manifestLoading[e], N(b(s, g, {
                  manifestUrl: e,
                  moduleName: r.name,
                  hostName: this.HostInstance.options.name
                }, `${n}`)))
              }
              return S(t.metaData && t.exposes && t.shared, `${e} is not a federation manifest`), this.manifestCache.set(e, t), t
            }, i = async () => {
              const t = await n(),
                i = (0, o.Jn)(t, {
                  version: e
                }),
                {
                  remoteSnapshot: a
                } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                  options: this.HostInstance.options,
                  moduleInfo: r,
                  manifestJson: t,
                  remoteSnapshot: i,
                  manifestUrl: e,
                  from: "manifest"
                });
              return a
            };
            return this.manifestLoading[e] || (this.manifestLoading[e] = i().then(e => e)), this.manifestLoading[e]
          }
        }
        class Sr {
          constructor(e) {
            this.hooks = new dr({
              afterResolve: new hr("afterResolve"),
              beforeLoadShare: new hr("beforeLoadShare"),
              loadShare: new lr,
              resolveShare: new pr("resolveShare"),
              initContainerShareScopeMap: new pr("initContainerShareScopeMap")
            }), this.host = e, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e.options)
          }
          registerShared(e, r) {
            const {
              shareInfos: t,
              shared: n
            } = Ue(e, r);
            return Object.keys(t).forEach(e => {
              t[e].forEach(t => {
                t.scope.forEach(n => {
                  const o = this.shareScopeMap[n]?. [e];
                  o || this.setShared({
                    pkgName: e,
                    lib: t.lib,
                    get: t.get,
                    loaded: t.loaded || Boolean(t.lib),
                    shared: t,
                    from: r.name
                  })
                })
              })
            }), {
              shareInfos: t,
              shared: n
            }
          }
          async loadShare(e, r) {
            const {
              host: t
            } = this, n = Qe({
              pkgName: e,
              extraOptions: r,
              shareInfos: t.options.shared
            });
            n?.scope && await Promise.all(n.scope.map(async e => {
              await Promise.all(this.initializeSharing(e, {
                strategy: n.strategy
              }))
            }));
            const o = await this.hooks.lifecycle.beforeLoadShare.emit({
                pkgName: e,
                shareInfo: n,
                shared: t.options.shared,
                origin: t
              }),
              {
                shareInfo: i
              } = o;
            S(i, `Cannot find ${e} Share in the ${t.options.name}. Please ensure that the ${e} Share parameters have been injected`);
            const a = Xe(this.shareScopeMap, e, i, this.hooks.lifecycle.resolveShare),
              s = e => {
                e.useIn || (e.useIn = []), q(e.useIn, t.options.name)
              };
            if (a && a.lib) return s(a), a.lib;
            if (a && a.loading && !a.loaded) {
              const e = await a.loading;
              return a.loaded = !0, a.lib || (a.lib = e), s(a), e
            }
            if (a) {
              const r = (async () => {
                const e = await a.get();
                return s(a), a.loaded = !0, a.lib = e, e
              })();
              return this.setShared({
                pkgName: e,
                loaded: !1,
                shared: a,
                from: t.options.name,
                lib: null,
                loading: r
              }), r
            } {
              if (r?.customShareInfo) return !1;
              const n = (async () => {
                const r = await i.get();
                i.lib = r, i.loaded = !0, s(i);
                const t = Xe(this.shareScopeMap, e, i, this.hooks.lifecycle.resolveShare);
                return t && (t.lib = r, t.loaded = !0, t.from = i.from), r
              })();
              return this.setShared({
                pkgName: e,
                loaded: !1,
                shared: i,
                from: t.options.name,
                lib: null,
                loading: n
              }), n
            }
          }
          initializeSharing(e = re, r) {
            const {
              host: t
            } = this, n = r?.from, o = r?.strategy;
            let i = r?.initScope;
            const a = [];
            if ("build" !== n) {
              const {
                initTokens: r
              } = this;
              i || (i = []);
              let t = r[e];
              if (t || (t = r[e] = {
                  from: this.host.name
                }), i.indexOf(t) >= 0) return a;
              i.push(t)
            }
            const s = this.shareScopeMap,
              c = t.options.name;
            s[e] || (s[e] = {});
            const u = s[e],
              _ = async r => {
                const {
                  module: n
                } = await t.remoteHandler.getRemoteModuleAndOptions({
                  id: r
                });
                if (n.getEntry) {
                  let a;
                  try {
                    a = await n.getEntry()
                  } catch (e) {
                    a = await t.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                      id: r,
                      error: e,
                      from: "runtime",
                      lifecycle: "beforeLoadShare",
                      origin: t
                    })
                  }
                  n.inited || (await (o = a, o && o.init && o.init(s[e], i)), n.inited = !0)
                }
                var o
              };
            return Object.keys(t.options.shared).forEach(r => {
              t.options.shared[r].forEach(t => {
                t.scope.includes(e) && ((e, r) => {
                  const {
                    version: t,
                    eager: n
                  } = r;
                  u[e] = u[e] || {};
                  const o = u[e],
                    i = o[t],
                    a = Boolean(i && (i.eager || i.shareConfig?.eager));
                  (!i || "loaded-first" !== i.strategy && !i.loaded && (Boolean(!n) !== !a ? n : c > i.from)) && (o[t] = r)
                })(r, t)
              })
            }), "version-first" !== t.options.shareStrategy && "version-first" !== o || t.options.remotes.forEach(r => {
              r.shareScope === e && a.push(_(r.name))
            }), a
          }
          loadShareSync(e, r) {
            const {
              host: t
            } = this, n = Qe({
              pkgName: e,
              extraOptions: r,
              shareInfos: t.options.shared
            });
            n?.scope && n.scope.forEach(e => {
              this.initializeSharing(e, {
                strategy: n.strategy
              })
            });
            const o = Xe(this.shareScopeMap, e, n, this.hooks.lifecycle.resolveShare),
              i = e => {
                e.useIn || (e.useIn = []), q(e.useIn, t.options.name)
              };
            if (o) {
              if ("function" == typeof o.lib) return i(o), o.loaded || (o.loaded = !0, o.from === t.options.name && (n.loaded = !0)), o.lib;
              if ("function" == typeof o.get) {
                const r = o.get();
                if (!(r instanceof Promise)) return i(o), this.setShared({
                  pkgName: e,
                  loaded: !0,
                  from: t.options.name,
                  lib: r,
                  shared: o
                }), r
              }
            }
            if (n.lib) return n.loaded || (n.loaded = !0), n.lib;
            if (n.get) {
              const o = n.get();
              if (o instanceof Promise) {
                throw new Error(b("build" === r?.from ? u : _, g, {
                  hostName: t.options.name,
                  sharedPkgName: e
                }))
              }
              return n.lib = o, this.setShared({
                pkgName: e,
                loaded: !0,
                from: t.options.name,
                lib: n.lib,
                shared: n
              }), n.lib
            }
            throw new Error(b(_, g, {
              hostName: t.options.name,
              sharedPkgName: e
            }))
          }
          initShareScopeMap(e, r, t = {}) {
            const {
              host: n
            } = this;
            this.shareScopeMap[e] = r, this.hooks.lifecycle.initContainerShareScopeMap.emit({
              shareScope: r,
              options: n.options,
              origin: n,
              scopeName: e,
              hostShareScopeMap: t.hostShareScopeMap
            })
          }
          setShared({
            pkgName: e,
            shared: r,
            from: t,
            lib: n,
            loading: o,
            loaded: i,
            get: a
          }) {
            const {
              version: s,
              scope: c = "default",
              ...u
            } = r;
            (Array.isArray(c) ? c : [c]).forEach(r => {
              if (this.shareScopeMap[r] || (this.shareScopeMap[r] = {}), this.shareScopeMap[r][e] || (this.shareScopeMap[r][e] = {}), !this.shareScopeMap[r][e][s]) return this.shareScopeMap[r][e][s] = {
                version: s,
                scope: [r],
                ...u,
                lib: n,
                loaded: i,
                loading: o
              }, void(a && (this.shareScopeMap[r][e][s].get = a));
              const c = this.shareScopeMap[r][e][s];
              o && !c.loading && (c.loading = o), i && !c.loaded && (c.loaded = i), t && c.from !== t && (c.from = t)
            })
          }
          _setGlobalShareScopeMap(e) {
            const r = Ze(),
              t = e.id || e.name;
            t && !r[t] && (r[t] = this.shareScopeMap)
          }
        }
        class Nr {
          constructor(e) {
            this.hooks = new dr({
              beforeRegisterRemote: new pr("beforeRegisterRemote"),
              registerRemote: new pr("registerRemote"),
              beforeRequest: new hr("beforeRequest"),
              onLoad: new lr("onLoad"),
              handlePreloadModule: new _r("handlePreloadModule"),
              errorLoadRemote: new lr("errorLoadRemote"),
              beforePreloadRemote: new lr("beforePreloadRemote"),
              generatePreloadAssets: new lr("generatePreloadAssets"),
              afterPreloadRemote: new lr,
              loadEntry: new lr
            }), this.host = e, this.idToRemoteMap = {}
          }
          formatAndRegisterRemote(e, r) {
            return (r.remotes || []).reduce((e, r) => (this.registerRemote(r, e, {
              force: !1
            }), e), e.remotes)
          }
          setIdToRemoteMap(e, r) {
            const {
              remote: t,
              expose: n
            } = r, {
              name: o,
              alias: i
            } = t;
            if (this.idToRemoteMap[e] = {
                name: t.name,
                expose: n
              }, i && e.startsWith(o)) {
              const r = e.replace(o, i);
              return void(this.idToRemoteMap[r] = {
                name: t.name,
                expose: n
              })
            }
            if (i && e.startsWith(i)) {
              const r = e.replace(i, o);
              this.idToRemoteMap[r] = {
                name: t.name,
                expose: n
              }
            }
          }
          async loadRemote(e, r) {
            const {
              host: t
            } = this;
            try {
              const {
                loadFactory: n = !0
              } = r || {
                loadFactory: !0
              }, {
                module: o,
                moduleOptions: i,
                remoteMatchInfo: a
              } = await this.getRemoteModuleAndOptions({
                id: e
              }), {
                pkgNameOrAlias: s,
                remote: c,
                expose: u,
                id: _,
                remoteSnapshot: l
              } = a, f = await o.get(_, u, r, l), p = await this.hooks.lifecycle.onLoad.emit({
                id: _,
                pkgNameOrAlias: s,
                expose: u,
                exposeModule: n ? f : void 0,
                exposeModuleFactory: n ? void 0 : f,
                remote: c,
                options: i,
                moduleInstance: o,
                origin: t
              });
              return this.setIdToRemoteMap(e, a), "function" == typeof p ? p : f
            } catch (n) {
              const {
                from: o = "runtime"
              } = r || {
                from: "runtime"
              }, i = await this.hooks.lifecycle.errorLoadRemote.emit({
                id: e,
                error: n,
                from: o,
                lifecycle: "onLoad",
                origin: t
              });
              if (!i) throw n;
              return i
            }
          }
          async preloadRemote(e) {
            const {
              host: r
            } = this;
            await this.hooks.lifecycle.beforePreloadRemote.emit({
              preloadOps: e,
              options: r.options,
              origin: r
            });
            const t = function (e, r) {
              return r.map(r => {
                const t = function (e, r) {
                  for (const t of e) {
                    if (r === t.name) return t;
                    if (t.alias && r === t.alias) return t
                  }
                }(e, r.nameOrAlias);
                return S(t, `Unable to preload ${r.nameOrAlias} as it is not included in ${!t&&(0,o.ML)({remoteInfo:t,remotes:e})}`), {
                  remote: t,
                  preloadConfig: sr(r)
                }
              })
            }(r.options.remotes, e);
            await Promise.all(t.map(async e => {
              const {
                remote: t
              } = e, n = ar(t), {
                globalSnapshot: o,
                remoteSnapshot: i
              } = await r.snapshotHandler.loadRemoteSnapshotInfo({
                moduleInfo: t
              }), a = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: r,
                preloadOptions: e,
                remote: t,
                remoteInfo: n,
                globalSnapshot: o,
                remoteSnapshot: i
              });
              a && cr(n, r, a)
            }))
          }
          registerRemotes(e, r) {
            const {
              host: t
            } = this;
            e.forEach(e => {
              this.registerRemote(e, t.options.remotes, {
                force: r?.force
              })
            })
          }
          async getRemoteModuleAndOptions(e) {
            const {
              host: r
            } = this, {
              id: t
            } = e;
            let n;
            try {
              n = await this.hooks.lifecycle.beforeRequest.emit({
                id: t,
                options: r.options,
                origin: r
              })
            } catch (e) {
              if (n = await this.hooks.lifecycle.errorLoadRemote.emit({
                  id: t,
                  options: r.options,
                  origin: r,
                  from: "runtime",
                  error: e,
                  lifecycle: "beforeRequest"
                }), !n) throw e
            }
            const {
              id: o
            } = n, i = er(r.options.remotes, o);
            S(i, b(c, g, {
              hostName: r.options.name,
              requestId: o
            }));
            const {
              remote: a
            } = i, s = ar(a), u = await r.sharedHandler.hooks.lifecycle.afterResolve.emit({
              id: o,
              ...i,
              options: r.options,
              origin: r,
              remoteInfo: s
            }), {
              remote: _,
              expose: l
            } = u;
            S(_ && l, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${o}.`);
            let f = r.moduleCache.get(_.name);
            const p = {
              host: r,
              remoteInfo: s
            };
            return f || (f = new ur(p), r.moduleCache.set(_.name, f)), {
              module: f,
              moduleOptions: p,
              remoteMatchInfo: u
            }
          }
          registerRemote(e, r, t) {
            const {
              host: n
            } = this, i = () => {
              if (e.alias) {
                const t = r.find(r => e.alias && (r.name.startsWith(e.alias) || r.alias?.startsWith(e.alias)));
                S(!t, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${t&&t.name} name or alias`)
              }
              "entry" in e && (0, o.OL)() && !e.entry.startsWith("http") && (e.entry = new URL(e.entry, window.location.origin).href), e.shareScope || (e.shareScope = re), e.type || (e.type = te)
            };
            this.hooks.lifecycle.beforeRegisterRemote.emit({
              remote: e,
              origin: n
            });
            const a = r.find(r => r.name === e.name);
            if (a) {
              const s = [`The remote "${e.name}" is already registered.`, "Please note that overriding it may cause unexpected errors."];
              t?.force && (this.removeRemote(a), i(), r.push(e), this.hooks.lifecycle.registerRemote.emit({
                remote: e,
                origin: n
              }), (0, o.R8)(s.join(" ")))
            } else i(), r.push(e), this.hooks.lifecycle.registerRemote.emit({
              remote: e,
              origin: n
            })
          }
          removeRemote(e) {
            try {
              const {
                host: r
              } = this, {
                name: t
              } = e, n = r.options.remotes.findIndex(e => e.name === t); - 1 !== n && r.options.remotes.splice(n, 1);
              const i = r.moduleCache.get(e.name);
              if (i) {
                const t = i.remoteInfo,
                  n = t.entryGlobalName;
                P[n] && (Object.getOwnPropertyDescriptor(P, n)?.configurable ? delete P[n] : P[n] = void 0);
                const a = or(i.remoteInfo);
                H[a] && delete H[a], r.snapshotHandler.manifestCache.delete(t.entry);
                let s = t.buildVersion ? (0, o.lG)(t.name, t.buildVersion) : t.name;
                const c = P.__FEDERATION__.__INSTANCES__.findIndex(e => t.buildVersion ? e.options.id === s : e.name === s);
                if (-1 !== c) {
                  const e = P.__FEDERATION__.__INSTANCES__[c];
                  s = e.options.id || s;
                  const r = Ze();
                  let n = !0;
                  const o = [];
                  Object.keys(r).forEach(e => {
                    const i = r[e];
                    i && Object.keys(i).forEach(r => {
                      const a = i[r];
                      a && Object.keys(a).forEach(i => {
                        const s = a[i];
                        s && Object.keys(s).forEach(a => {
                          const c = s[a];
                          c && "object" == typeof c && c.from === t.name && (c.loaded || c.loading ? (c.useIn = c.useIn.filter(e => e !== t.name), c.useIn.length ? n = !1 : o.push([e, r, i, a])) : o.push([e, r, i, a]))
                        })
                      })
                    })
                  }), n && (e.shareScopeMap = {}, delete r[s]), o.forEach(([e, t, n, o]) => {
                    delete r[e]?. [t]?. [n]?. [o]
                  }), P.__FEDERATION__.__INSTANCES__.splice(c, 1)
                }
                const {
                  hostGlobalSnapshot: u
                } = kr(e, r);
                if (u) {
                  const r = u && "remotesInfo" in u && u.remotesInfo && U(u.remotesInfo, e.name).key;
                  r && (delete u.remotesInfo[r], Boolean(x.__FEDERATION__.__MANIFEST_LOADING__[r]) && delete x.__FEDERATION__.__MANIFEST_LOADING__[r])
                }
                r.moduleCache.delete(e.name)
              }
            } catch (e) {
              E.log("removeRemote fail: ", e)
            }
          }
        }
        class vr {
          constructor(e) {
            this.hooks = new dr({
              beforeInit: new pr("beforeInit"),
              init: new _r,
              beforeInitContainer: new hr("beforeInitContainer"),
              initContainer: new hr("initContainer")
            }), this.version = "0.21.6", this.moduleCache = new Map, this.loaderHook = new dr({
              getModuleInfo: new _r,
              createScript: new _r,
              createLink: new _r,
              fetch: new lr,
              loadEntryError: new lr,
              getModuleFactory: new lr
            }), this.bridgeHook = new dr({
              beforeBridgeRender: new _r,
              afterBridgeRender: new _r,
              beforeBridgeDestroy: new _r,
              afterBridgeDestroy: new _r
            });
            const r = [{
                name: "snapshot-plugin",
                async afterResolve(e) {
                  const {
                    remote: r,
                    pkgNameOrAlias: t,
                    expose: n,
                    origin: o,
                    remoteInfo: i,
                    id: a
                  } = e;
                  if (!R(r) || !T(r)) {
                    const {
                      remoteSnapshot: s,
                      globalSnapshot: c
                    } = await o.snapshotHandler.loadRemoteSnapshotInfo({
                      moduleInfo: r,
                      id: a
                    });
                    mr(i, s);
                    const u = {
                        remote: r,
                        preloadConfig: {
                          nameOrAlias: t,
                          exposes: [n],
                          resourceCategory: "sync",
                          share: !1,
                          depsRemote: !1
                        }
                      },
                      _ = await o.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                        origin: o,
                        preloadOptions: u,
                        remoteInfo: i,
                        remote: r,
                        remoteSnapshot: s,
                        globalSnapshot: c
                      });
                    return _ && cr(i, o, _, !1), {
                      ...e,
                      remoteSnapshot: s
                    }
                  }
                  return e
                }
              }, {
                name: "generate-preload-assets-plugin",
                async generatePreloadAssets(e) {
                  const {
                    origin: r,
                    preloadOptions: t,
                    remoteInfo: n,
                    remote: i,
                    globalSnapshot: a,
                    remoteSnapshot: s
                  } = e;
                  return (0, o.OL)() ? R(i) && T(i) ? {
                    cssAssets: [],
                    jsAssetsWithoutEntry: [],
                    entryAssets: [{
                      name: i.name,
                      url: i.entry,
                      moduleInfo: {
                        name: n.name,
                        entry: i.entry,
                        type: n.type || "global",
                        entryGlobalName: "",
                        shareScope: ""
                      }
                    }]
                  } : (mr(n, s), wr(r, t, n, a, s)) : {
                    cssAssets: [],
                    jsAssetsWithoutEntry: [],
                    entryAssets: []
                  }
                }
              }],
              t = {
                id: "sirena_tower_game:1.0.0",
                name: e.name,
                plugins: r,
                remotes: [],
                shared: {},
                inBrowser: (0, o.OL)()
              };
            this.name = e.name, this.options = t, this.snapshotHandler = new Er(this), this.sharedHandler = new Sr(this), this.remoteHandler = new Nr(this), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([...t.plugins, ...e.plugins || []]), this.options = this.formatOptions(t, e)
          }
          initOptions(e) {
            this.registerPlugins(e.plugins);
            const r = this.formatOptions(this.options, e);
            return this.options = r, r
          }
          async loadShare(e, r) {
            return this.sharedHandler.loadShare(e, r)
          }
          loadShareSync(e, r) {
            return this.sharedHandler.loadShareSync(e, r)
          }
          initializeSharing(e = re, r) {
            return this.sharedHandler.initializeSharing(e, r)
          }
          initRawContainer(e, r, t) {
            const n = ar({
                name: e,
                entry: r
              }),
              o = new ur({
                host: this,
                remoteInfo: n
              });
            return o.remoteEntryExports = t, this.moduleCache.set(e, o), o
          }
          async loadRemote(e, r) {
            return this.remoteHandler.loadRemote(e, r)
          }
          async preloadRemote(e) {
            return this.remoteHandler.preloadRemote(e)
          }
          initShareScopeMap(e, r, t = {}) {
            this.sharedHandler.initShareScopeMap(e, r, t)
          }
          formatOptions(e, r) {
            const {
              shared: t
            } = Ue(e, r), {
              userOptions: n,
              options: o
            } = this.hooks.lifecycle.beforeInit.emit({
              origin: this,
              userOptions: r,
              options: e,
              shareInfo: t
            }), i = this.remoteHandler.formatAndRegisterRemote(o, n), {
              shared: a
            } = this.sharedHandler.registerShared(o, n), s = [...o.plugins];
            n.plugins && n.plugins.forEach(e => {
              s.includes(e) || s.push(e)
            });
            const c = {
              ...e,
              ...r,
              plugins: s,
              remotes: i,
              shared: a
            };
            return this.hooks.lifecycle.init.emit({
              origin: this,
              options: c
            }), c
          }
          registerPlugins(e) {
            const r = function (e, r) {
              const t = Z(),
                n = [r.hooks, r.remoteHandler.hooks, r.sharedHandler.hooks, r.snapshotHandler.hooks, r.loaderHook, r.bridgeHook];
              return t.length > 0 && t.forEach(r => {
                e?.find(e => e.name !== r.name) && e.push(r)
              }), e && e.length > 0 && e.forEach(e => {
                n.forEach(t => {
                  t.applyPlugin(e, r)
                })
              }), e
            }(e, this);
            this.options.plugins = this.options.plugins.reduce((e, r) => r ? (e && !e.find(e => e.name === r.name) && e.push(r), e) : e, r || [])
          }
          registerRemotes(e, r) {
            return this.remoteHandler.registerRemotes(e, r)
          }
          registerShared(e) {
            this.sharedHandler.registerShared(this.options, {
              ...this.options,
              shared: e
            })
          }
        }

        function qr(e) {
          const r = new(V() || vr)(e);
          return j(r), r
        }
        let Ir = null;

        function Rr(e) {
          const r = function (e, r) {
            const t = "sirena_tower_game:1.0.0";
            return P.__FEDERATION__.__INSTANCES__.find(n => !(n.options.id !== t && (n.options.name !== e || n.options.version || r) && (n.options.name !== e || !r || n.options.version !== r)))
          }(e.name, e.version);
          return r ? (r.initOptions(e), Ir || (Ir = r), r) : (Ir = qr(e), Ir)
        }

        function Tr(...e) {
          S(Ir, b(p, g));
          return Ir.loadRemote.apply(Ir, e)
        }

        function $r(...e) {
          S(Ir, b(p, g));
          return Ir.loadShare.apply(Ir, e)
        }

        function Or(...e) {
          S(Ir, b(p, g));
          return Ir.loadShareSync.apply(Ir, e)
        }

        function Ar(...e) {
          return S(Ir, b(p, g)), Ir.preloadRemote.apply(Ir, e)
        }

        function Mr(...e) {
          return S(Ir, b(p, g)), Ir.registerRemotes.apply(Ir, e)
        }

        function Pr(...e) {
          return S(Ir, b(p, g)), Ir.registerPlugins.apply(Ir, e)
        }

        function Lr() {
          return Ir
        }

        function xr(...e) {
          return S(Ir, b(p, g)), Ir.registerShared.apply(Ir, e)
        }
        G(vr);
        const Dr = ["script"];

        function Fr(e) {
          e.S && !e.federation.hasAttachShareScopeMap && e.federation.instance && e.federation.instance.shareScopeMap && (e.S = e.federation.instance.shareScopeMap, e.federation.hasAttachShareScopeMap = !0)
        }

        function Hr(e) {
          const {
            webpackRequire: r,
            moduleToHandlerMapping: t
          } = e, {
            consumesLoadingData: n,
            initializeSharingData: o
          } = r;
          if (n && !n._updated) {
            const {
              moduleIdToConsumeDataMapping: r = {},
              initialConsumes: o = [],
              chunkMapping: i = {}
            } = n;
            if (Object.entries(r).forEach(([e, r]) => {
                t[e] || (t[e] = {
                  getter: r.fallback,
                  shareInfo: {
                    shareConfig: {
                      requiredVersion: r.requiredVersion,
                      strictVersion: r.strictVersion,
                      singleton: r.singleton,
                      eager: r.eager,
                      layer: r.layer
                    },
                    scope: Array.isArray(r.shareScope) ? r.shareScope : [r.shareScope || "default"]
                  },
                  shareKey: r.shareKey
                })
              }), "initialConsumes" in e) {
              const {
                initialConsumes: r = []
              } = e;
              o.forEach(e => {
                r.includes(e) || r.push(e)
              })
            }
            if ("chunkMapping" in e) {
              const {
                chunkMapping: r = {}
              } = e;
              Object.entries(i).forEach(([e, t]) => {
                r[e] || (r[e] = []), t.forEach(t => {
                  r[e].includes(t) || r[e].push(t)
                })
              })
            }
            n._updated = 1
          }
          if (o && !o._updated) {
            const {
              federation: e
            } = r;
            if (!e.instance || !o.scopeToSharingDataMapping) return;
            const t = {};
            for (let [e, r] of Object.entries(o.scopeToSharingDataMapping))
              for (let n of r)
                if ("object" == typeof n && null !== n) {
                  const {
                    name: r,
                    version: o,
                    factory: i,
                    eager: a,
                    singleton: s,
                    requiredVersion: c,
                    strictVersion: u
                  } = n, _ = {
                    requiredVersion: `^${o}`
                  }, l = function (e) {
                    return void 0 !== e
                  };
                  l(s) && (_.singleton = s), l(c) && (_.requiredVersion = c), l(a) && (_.eager = a), l(u) && (_.strictVersion = u);
                  const f = {
                    version: o,
                    scope: [e],
                    shareConfig: _,
                    get: i
                  };
                  t[r] ? t[r].push(f) : t[r] = [f]
                } e.instance.registerShared(t), o._updated = 1
          }
        }
        const Cr = {
          runtime: n,
          instance: void 0,
          initOptions: void 0,
          bundlerRuntime: {
            remotes: function (e) {
              ! function (e) {
                const {
                  webpackRequire: r,
                  idToExternalAndNameMapping: t = {},
                  idToRemoteMap: n = {},
                  chunkMapping: o = {}
                } = e, {
                  remotesLoadingData: i
                } = r, a = r.federation?.bundlerRuntimeOptions?.remotes?.remoteInfos;
                if (!i || i._updated || !a) return;
                const {
                  chunkMapping: s,
                  moduleIdToRemoteDataMapping: c
                } = i;
                if (s && c) {
                  for (let [e, r] of Object.entries(c))
                    if (t[e] || (t[e] = [r.shareScope, r.name, r.externalModuleId]), !n[e] && a[r.remoteName]) {
                      const t = a[r.remoteName];
                      n[e] || = [], t.forEach(r => {
                        n[e].includes(r) || n[e].push(r)
                      })
                    } o && Object.entries(s).forEach(([e, r]) => {
                    o[e] || (o[e] = []), r.forEach(r => {
                      o[e].includes(r) || o[e].push(r)
                    })
                  }), i._updated = 1
                }
              }(e);
              const {
                chunkId: r,
                promises: t,
                webpackRequire: n,
                chunkMapping: i,
                idToExternalAndNameMapping: a,
                idToRemoteMap: s
              } = e;
              Fr(n), n.o(i, r) && i[r].forEach(e => {
                let r = n.R;
                r || (r = []);
                const i = a[e],
                  c = s[e] || [];
                if (r.indexOf(i) >= 0) return;
                if (r.push(i), i.p) return t.push(i.p);
                const u = r => {
                    r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += `\nwhile loading "${i[1]}" from ${i[2]}`), n.m[e] = () => {
                      throw r
                    }, i.p = 0
                  },
                  _ = (e, r, n, o, a, s) => {
                    try {
                      const c = e(r, n);
                      if (!c || !c.then) return a(c, o, s); {
                        const e = c.then(e => a(e, o), u);
                        if (!s) return e;
                        t.push(i.p = e)
                      }
                    } catch (e) {
                      u(e)
                    }
                  },
                  l = (e, r, t) => e ? _(n.I, i[0], 0, e, f, t) : u();
                var f = (e, t, n) => _(t.get, i[1], r, 0, p, n),
                  p = r => {
                    i.p = 1, n.m[e] = e => {
                      e.exports = r()
                    }
                  };
                const h = () => {
                  try {
                    const e = (0, o.e4)(c[0].name, o.yq) + i[1].slice(1),
                      r = n.federation.instance,
                      t = () => n.federation.instance.loadRemote(e, {
                        loadFactory: !1,
                        from: "build"
                      });
                    return "version-first" === r.options.shareStrategy ? Promise.all(r.sharedHandler.initializeSharing(i[0])).then(() => t()) : t()
                  } catch (e) {
                    u(e)
                  }
                };
                1 === c.length && Dr.includes(c[0].externalType) && c[0].name ? _(h, i[2], 0, 0, p, 1) : _(n, i[2], 0, 0, l, 1)
              })
            },
            consumes: function (e) {
              Hr(e);
              const {
                chunkId: r,
                promises: t,
                installedModules: n,
                webpackRequire: o,
                chunkMapping: i,
                moduleToHandlerMapping: a
              } = e;
              Fr(o), o.o(i, r) && i[r].forEach(e => {
                if (o.o(n, e)) return t.push(n[e]);
                const r = r => {
                    n[e] = 0, o.m[e] = t => {
                      delete o.c[e];
                      const n = r(),
                        {
                          shareInfo: i
                        } = a[e];
                      if (i?.shareConfig?.layer && n && "object" == typeof n) try {
                        n.hasOwnProperty("layer") && void 0 !== n.layer || (n.layer = i.shareConfig.layer)
                      } catch (e) {}
                      t.exports = n
                    }
                  },
                  i = r => {
                    delete n[e], o.m[e] = t => {
                      throw delete o.c[e], r
                    }
                  };
                try {
                  const s = o.federation.instance;
                  if (!s) throw new Error("Federation instance not found!");
                  const {
                    shareKey: c,
                    getter: u,
                    shareInfo: _
                  } = a[e], l = s.loadShare(c, {
                    customShareInfo: _
                  }).then(e => !1 === e ? u() : e);
                  l.then ? t.push(n[e] = l.then(r).catch(i)) : r(l)
                } catch (e) {
                  i(e)
                }
              })
            },
            I: function ({
              shareScopeName: e,
              webpackRequire: r,
              initPromises: t,
              initTokens: n,
              initScope: o
            }) {
              const i = Array.isArray(e) ? e : [e];
              var a = [],
                s = function (i) {
                  o || (o = []);
                  const a = r.federation.instance;
                  var s = n[i];
                  if (s || (s = n[i] = {
                      from: a.name
                    }), o.indexOf(s) >= 0) return;
                  o.push(s);
                  const c = t[i];
                  if (c) return c;
                  var u = t => {
                    var n = e => "undefined" != typeof console && console.warn && void 0;
                    try {
                      var a = r(t);
                      if (!a) return;
                      var s = t => t && t.init && t.init(r.S[i], o, {
                        shareScopeMap: r.S || {},
                        shareScopeKeys: e
                      });
                      if (a.then) return _.push(a.then(s, n));
                      var c = s(a);
                      if (c && "boolean" != typeof c && c.then) return _.push(c.catch(n))
                    } catch (e) {
                      n()
                    }
                  };
                  const _ = a.initializeSharing(i, {
                    strategy: a.options.shareStrategy,
                    initScope: o,
                    from: "build"
                  });
                  Fr(r);
                  const l = r.federation.bundlerRuntimeOptions.remotes;
                  return l && Object.keys(l.idToRemoteMap).forEach(e => {
                    const r = l.idToRemoteMap[e],
                      t = l.idToExternalAndNameMapping[e][2];
                    if (r.length > 1) u(t);
                    else if (1 === r.length) {
                      const e = r[0];
                      Dr.includes(e.externalType) || u(t)
                    }
                  }), _.length ? t[i] = Promise.all(_).then(() => t[i] = !0) : t[i] = !0
                };
              return i.forEach(e => {
                a.push(s(e))
              }), Promise.all(a).then(() => !0)
            },
            S: {},
            installInitialConsumes: function (e) {
              const {
                webpackRequire: r
              } = e;
              Hr(e);
              const {
                initialConsumes: t,
                moduleToHandlerMapping: n,
                installedModules: o
              } = e;
              t.forEach(e => {
                r.m[e] = t => {
                  o[e] = 0, delete r.c[e];
                  const i = function (e) {
                    const {
                      moduleId: r,
                      moduleToHandlerMapping: t,
                      webpackRequire: n
                    } = e, o = n.federation.instance;
                    if (!o) throw new Error("Federation instance not found!");
                    const {
                      shareKey: i,
                      shareInfo: a
                    } = t[r];
                    try {
                      return o.loadShareSync(i, {
                        customShareInfo: a
                      })
                    } catch (e) {
                      throw e
                    }
                  }({
                    moduleId: e,
                    moduleToHandlerMapping: n,
                    webpackRequire: r
                  });
                  if ("function" != typeof i) throw new Error(`Shared module is not available for eager consumption: ${e}`);
                  const a = i(),
                    {
                      shareInfo: s
                    } = n[e];
                  if (s?.shareConfig?.layer && a && "object" == typeof a) try {
                    a.hasOwnProperty("layer") && void 0 !== a.layer || (a.layer = s.shareConfig.layer)
                  } catch (e) {}
                  t.exports = a
                }
              })
            },
            initContainerEntry: function (e) {
              const {
                webpackRequire: r,
                shareScope: t,
                initScope: n,
                shareScopeKey: o,
                remoteEntryInitOptions: i
              } = e;
              if (!r.S) return;
              if (!r.federation || !r.federation.instance || !r.federation.initOptions) return;
              const a = r.federation.instance;
              a.initOptions({
                name: r.federation.initOptions.name,
                remotes: [],
                ...i
              });
              const s = i?.shareScopeKeys,
                c = i?.shareScopeMap;
              if (o && "string" != typeof o) o.forEach(e => {
                if (!s || !c) return void a.initShareScopeMap(e, t, {
                  hostShareScopeMap: i?.shareScopeMap || {}
                });
                c[e] || (c[e] = {});
                const r = c[e];
                a.initShareScopeMap(e, r, {
                  hostShareScopeMap: i?.shareScopeMap || {}
                })
              });
              else {
                const e = o || "default";
                Array.isArray(s) ? s.forEach(e => {
                  c[e] || (c[e] = {});
                  const r = c[e];
                  a.initShareScopeMap(e, r, {
                    hostShareScopeMap: i?.shareScopeMap || {}
                  })
                }) : a.initShareScopeMap(e, t, {
                  hostShareScopeMap: i?.shareScopeMap || {}
                })
              }
              return r.federation.attachShareScopeMap && r.federation.attachShareScopeMap(r), "function" == typeof r.federation.prefetch && r.federation.prefetch(), Array.isArray(o) ? Boolean(r.federation.initOptions.shared) ? r.I(o, n) : Promise.all(o.map(e => r.I(e, n))).then(() => !0) : r.I(o || "default", n)
            }
          },
          attachShareScopeMap: Fr,
          bundlerRuntimeOptions: {}
        };
        if (!t.federation.runtime) {
          var jr = t.federation;
          for (var Vr in t.federation = {}, Cr) t.federation[Vr] = Cr[Vr];
          for (var Vr in jr) t.federation[Vr] = jr[Vr]
        }
        t.federation.instance || (t.federation.instance = t.federation.runtime.init(t.federation.initOptions), t.federation.attachShareScopeMap && t.federation.attachShareScopeMap(t), t.federation.installInitialConsumes && t.federation.installInitialConsumes(), !t.federation.isMFRemote && t.federation.prefetch && t.federation.prefetch())
      },
      9102: function (e, r, t) {
        var n = {
            "./SirenaTowerGameApp": function () {
              return Promise.all([t.e(887), t.e(216), t.e(954), t.e(756), t.e(340), t.e(914)]).then(function () {
                return function () {
                  return t(8793)
                }
              })
            }
          },
          o = function (e, r) {
            return t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then(function () {
              throw new Error('Module "' + e + '" does not exist in container.')
            }), t.R = void 0, r
          },
          i = function (e, r, n) {
            return t.federation.bundlerRuntime.initContainerEntry({
              webpackRequire: t,
              shareScope: e,
              initScope: r,
              remoteEntryInitOptions: n,
              shareScopeKey: "default"
            })
          };
        t.d(r, {
          get: function () {
            return o
          },
          init: function () {
            return i
          }
        })
      },
      9615: function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
          Al: function () {
            return getResourceUrl
          },
          Bb: function () {
            return isDebugMode
          },
          Jn: function () {
            return generateSnapshotFromManifest
          },
          ML: function () {
            return safeToString
          },
          OL: function () {
            return isBrowserEnv
          },
          R8: function () {
            return warn
          },
          Tr: function () {
            return isManifestProvider
          },
          d: function () {
            return createLink
          },
          e4: function () {
            return decodeName
          },
          h: function () {
            return createLogger
          },
          k0: function () {
            return loadScript
          },
          lG: function () {
            return composeKeyWithSeparator
          },
          oe: function () {
            return loadScriptNode
          },
          so: function () {
            return createScript
          },
          tf: function () {
            return isReactNativeEnv
          },
          yq: function () {
            return ENCODE_NAME_PREFIX
          }
        });
        const FederationModuleManifest = "federation-manifest.json",
          MANIFEST_EXT = ".json",
          BROWSER_LOG_KEY = "FEDERATION_DEBUG",
          NameTransformSymbol = {
            AT: "@",
            HYPHEN: "-",
            SLASH: "/"
          },
          NameTransformMap = {
            [NameTransformSymbol.AT]: "scope_",
            [NameTransformSymbol.HYPHEN]: "_",
            [NameTransformSymbol.SLASH]: "__"
          },
          EncodedNameTransformMap = {
            [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
            [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
            [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
          },
          SEPARATOR = ":",
          ManifestFileName = "mf-manifest.json",
          StatsFileName = "mf-stats.json",
          MFModuleType = {
            NPM: "npm",
            APP: "app"
          },
          MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__",
          ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX",
          TEMP_DIR = ".federation",
          MFPrefetchCommon = {
            identifier: "MFDataPrefetch",
            globalKey: "__PREFETCH__",
            library: "mf-data-prefetch",
            exportsKey: "__PREFETCH_EXPORTS__",
            fileName: "bootstrap.js"
          };
        var ContainerPlugin = Object.freeze({
            __proto__: null
          }),
          ContainerReferencePlugin = Object.freeze({
            __proto__: null
          }),
          ModuleFederationPlugin = Object.freeze({
            __proto__: null
          }),
          SharePlugin = Object.freeze({
            __proto__: null
          });

        function isBrowserEnv() {
          return "undefined" != typeof window && void 0 !== window.document
        }

        function isReactNativeEnv() {
          return "undefined" != typeof navigator && "ReactNative" === navigator?.product
        }

        function isBrowserDebug() {
          try {
            if (isBrowserEnv() && window.localStorage) return Boolean(localStorage.getItem(BROWSER_LOG_KEY))
          } catch (e) {
            return !1
          }
          return !1
        }

        function isDebugMode() {
          return "undefined" != typeof process && process.env && process.env.FEDERATION_DEBUG ? Boolean(process.env.FEDERATION_DEBUG) : !("undefined" == typeof FEDERATION_DEBUG || !Boolean(FEDERATION_DEBUG)) || isBrowserDebug()
        }
        const getProcessEnv = function () {
            return "undefined" != typeof process && process.env ? process.env : {}
          },
          LOG_CATEGORY = "[ Federation Runtime ]",
          parseEntry = (e, r, t = SEPARATOR) => {
            const n = e.split(t),
              o = "development" === getProcessEnv().NODE_ENV && r,
              i = e => e.startsWith("http") || e.includes(MANIFEST_EXT);
            if (n.length >= 2) {
              let [r, ...a] = n;
              e.startsWith(t) && (r = n.slice(0, 2).join(t), a = [o || n.slice(2).join(t)]);
              let s = o || a.join(t);
              return i(s) ? {
                name: r,
                entry: s
              } : {
                name: r,
                version: s || "*"
              }
            }
            if (1 === n.length) {
              const [e] = n;
              return o && i(o) ? {
                name: e,
                entry: o
              } : {
                name: e,
                version: o || "*"
              }
            }
            throw `Invalid entry value: ${e}`
          },
          composeKeyWithSeparator = function (...e) {
            return e.length ? e.reduce((e, r) => r ? e ? `${e}${SEPARATOR}${r}` : r : e, "") : ""
          },
          encodeName = function (e, r = "", t = !1) {
            try {
              const n = t ? ".js" : "";
              return `${r}${e.replace(new RegExp(`${NameTransformSymbol.AT}`,"g"),NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`,"g"),NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`,"g"),NameTransformMap[NameTransformSymbol.SLASH])}${n}`
            } catch (e) {
              throw e
            }
          },
          decodeName = function (e, r, t) {
            try {
              let n = e;
              if (r) {
                if (!n.startsWith(r)) return n;
                n = n.replace(new RegExp(r, "g"), "")
              }
              return n = n.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]), t && (n = n.replace(".js", "")), n
            } catch (e) {
              throw e
            }
          },
          generateExposeFilename = (e, r) => {
            if (!e) return "";
            let t = e;
            return "." === t && (t = "default_export"), t.startsWith("./") && (t = t.replace("./", "")), encodeName(t, "__federation_expose_", r)
          },
          generateShareFilename = (e, r) => e ? encodeName(e, "__federation_shared_", r) : "",
          getResourceUrl = (e, r) => {
            if ("getPublicPath" in e) {
              let t;
              return t = e.getPublicPath.startsWith("function") ? new Function("return " + e.getPublicPath)()() : new Function(e.getPublicPath)(), `${t}${r}`
            }
            return "publicPath" in e ? isBrowserEnv() || isReactNativeEnv() || !("ssrPublicPath" in e) ? `${e.publicPath}${r}` : `${e.ssrPublicPath}${r}` : ""
          },
          assert = (e, r) => {
            e || error(r)
          },
          error = e => {
            throw new Error(`${LOG_CATEGORY}: ${e}`)
          },
          warn = e => {};

        function safeToString(e) {
          try {
            return JSON.stringify(e, null, 2)
          } catch (e) {
            return ""
          }
        }
        const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;

        function isRequiredVersion(e) {
          return VERSION_PATTERN_REGEXP.test(e)
        }
        const simpleJoinRemoteEntry = (e, r) => {
          if (!e) return r;
          const t = (e => {
            if ("." === e) return "";
            if (e.startsWith("./")) return e.replace("./", "");
            if (e.startsWith("/")) {
              const r = e.slice(1);
              return r.endsWith("/") ? r.slice(0, -1) : r
            }
            return e
          })(e);
          return t ? t.endsWith("/") ? `${t}${r}` : `${t}/${r}` : r
        };

        function inferAutoPublicPath(e) {
          return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/")
        }

        function generateSnapshotFromManifest(e, r = {}) {
          const {
            remotes: t = {},
            overrides: n = {},
            version: o
          } = r;
          let i;
          const a = () => "publicPath" in e.metaData ? "auto" === e.metaData.publicPath && o ? inferAutoPublicPath(o) : e.metaData.publicPath : e.metaData.getPublicPath,
            s = Object.keys(n);
          let c = {};
          Object.keys(t).length || (c = e.remotes?.reduce((e, r) => {
            let t;
            const o = r.federationContainerName;
            return t = s.includes(o) ? n[o] : "version" in r ? r.version : r.entry, e[o] = {
              matchedVersion: t
            }, e
          }, {}) || {}), Object.keys(t).forEach(e => c[e] = {
            matchedVersion: s.includes(e) ? n[e] : t[e]
          });
          const {
            remoteEntry: {
              path: u,
              name: _,
              type: l
            },
            types: f = {
              path: "",
              name: "",
              zip: "",
              api: ""
            },
            buildInfo: {
              buildVersion: p
            },
            globalName: h,
            ssrRemoteEntry: d
          } = e.metaData, {
            exposes: m
          } = e;
          let b = {
            version: o || "",
            buildVersion: p,
            globalName: h,
            remoteEntry: simpleJoinRemoteEntry(u, _),
            remoteEntryType: l,
            remoteTypes: simpleJoinRemoteEntry(f.path, f.name),
            remoteTypesZip: f.zip || "",
            remoteTypesAPI: f.api || "",
            remotesInfo: c,
            shared: e?.shared.map(e => ({
              assets: e.assets,
              sharedName: e.name,
              version: e.version
            })),
            modules: m?.map(e => ({
              moduleName: e.name,
              modulePath: e.path,
              assets: e.assets
            }))
          };
          if (e.metaData?.prefetchInterface) {
            const r = e.metaData.prefetchInterface;
            b = {
              ...b,
              prefetchInterface: r
            }
          }
          if (e.metaData?.prefetchEntry) {
            const {
              path: r,
              name: t,
              type: n
            } = e.metaData.prefetchEntry;
            b = {
              ...b,
              prefetchEntry: simpleJoinRemoteEntry(r, t),
              prefetchEntryType: n
            }
          }
          if (i = "publicPath" in e.metaData ? {
              ...b,
              publicPath: a(),
              ssrPublicPath: e.metaData.ssrPublicPath
            } : {
              ...b,
              getPublicPath: a()
            }, d) {
            const e = simpleJoinRemoteEntry(d.path, d.name);
            i.ssrRemoteEntry = e, i.ssrRemoteEntryType = d.type || "commonjs-module"
          }
          return i
        }

        function isManifestProvider(e) {
          return !(!("remoteEntry" in e) || !e.remoteEntry.includes(MANIFEST_EXT))
        }

        function getManifestFileName(e) {
          if (!e) return {
            statsFileName: StatsFileName,
            manifestFileName: ManifestFileName
          };
          let r = "boolean" == typeof e ? "" : e.filePath || "",
            t = "boolean" == typeof e ? "" : e.fileName || "";
          const n = ".json",
            o = t ? (i = t).endsWith(n) ? i : `${i}${n}` : ManifestFileName;
          var i;
          const a = t ? ((e, r) => e.replace(n, `${r}${n}`))(o, "-stats") : StatsFileName;
          return {
            statsFileName: simpleJoinRemoteEntry(r, a),
            manifestFileName: simpleJoinRemoteEntry(r, o)
          }
        }
        const PREFIX = "[ Module Federation ]",
          DEFAULT_DELEGATE = console,
          LOGGER_STACK_SKIP_TOKENS = ["logger.ts", "logger.js", "captureStackTrace", "Logger.emit", "Logger.log", "Logger.info", "Logger.warn", "Logger.error", "Logger.debug"];

        function captureStackTrace() {
          try {
            const e = (new Error).stack;
            if (!e) return;
            const [, ...r] = e.split("\n"), t = r.filter(e => !LOGGER_STACK_SKIP_TOKENS.some(r => e.includes(r)));
            if (!t.length) return;
            return `Stack trace:\n${t.slice(0,5).join("\n")}`
          } catch {
            return
          }
        }
        class Logger {
          constructor(e, r = DEFAULT_DELEGATE) {
            this.prefix = e, this.delegate = r ?? DEFAULT_DELEGATE
          }
          setPrefix(e) {
            this.prefix = e
          }
          setDelegate(e) {
            this.delegate = e ?? DEFAULT_DELEGATE
          }
          emit(e, r) {
            const t = this.delegate,
              n = isDebugMode() ? captureStackTrace() : void 0,
              o = n ? [...r, n] : r,
              i = (() => {
                switch (e) {
                  case "log":
                    return ["log", "info"];
                  case "info":
                    return ["info", "log"];
                  case "warn":
                    return ["warn", "info", "log"];
                  case "error":
                    return ["error", "warn", "log"];
                  default:
                    return ["debug", "log"]
                }
              })();
            for (const e of i) {
              const r = t[e];
              if ("function" == typeof r) return void r.call(t, this.prefix, ...o)
            }
            for (const e of i) {
              const r = DEFAULT_DELEGATE[e];
              if ("function" == typeof r) return void r.call(DEFAULT_DELEGATE, this.prefix, ...o)
            }
          }
          log(...e) {
            this.emit("log", e)
          }
          warn(...e) {
            this.emit("warn", e)
          }
          error(...e) {
            this.emit("error", e)
          }
          success(...e) {
            this.emit("info", e)
          }
          info(...e) {
            this.emit("info", e)
          }
          ready(...e) {
            this.emit("info", e)
          }
          debug(...e) {
            isDebugMode() && this.emit("debug", e)
          }
        }

        function createLogger(e) {
          return new Logger(e)
        }

        function createInfrastructureLogger(e) {
          const r = new Logger(e);
          return Object.defineProperty(r, "__mf_infrastructure_logger__", {
            value: !0,
            enumerable: !1,
            configurable: !1
          }), r
        }

        function bindLoggerToCompiler(e, r, t) {
          if (e.__mf_infrastructure_logger__ && r?.getInfrastructureLogger) try {
            const n = r.getInfrastructureLogger(t);
            !n || "object" != typeof n || "function" != typeof n.log && "function" != typeof n.info && "function" != typeof n.warn && "function" != typeof n.error || e.setDelegate(n)
          } catch {
            e.setDelegate(void 0)
          }
        }
        const logger = createLogger(PREFIX),
          infrastructureLogger = createInfrastructureLogger(PREFIX);
        async function safeWrapper(e, r) {
          try {
            return await e()
          } catch (e) {
            return void(!r && warn(e))
          }
        }

        function isStaticResourcesEqual(e, r) {
          const t = /^(https?:)?\/\//i;
          return e.replace(t, "").replace(/\/$/, "") === r.replace(t, "").replace(/\/$/, "")
        }

        function createScript(e) {
          let r, t = null,
            n = !0,
            o = 2e4;
          const i = document.getElementsByTagName("script");
          for (let r = 0; r < i.length; r++) {
            const o = i[r],
              a = o.getAttribute("src");
            if (a && isStaticResourcesEqual(a, e.url)) {
              t = o, n = !1;
              break
            }
          }
          if (!t) {
            const r = e.attrs;
            let n;
            t = document.createElement("script"), t.type = "module" === r?.type ? "module" : "text/javascript", e.createScriptHook && (n = e.createScriptHook(e.url, e.attrs), n instanceof HTMLScriptElement ? t = n : "object" == typeof n && ("script" in n && n.script && (t = n.script), "timeout" in n && n.timeout && (o = n.timeout))), t.src || (t.src = e.url), r && !n && Object.keys(r).forEach(e => {
              t && ("async" === e || "defer" === e ? t[e] = r[e] : t.getAttribute(e) || t.setAttribute(e, r[e]))
            })
          }
          const a = async (n, o) => {
            clearTimeout(r);
            const i = () => {
              "error" === o?.type ? e?.onErrorCallback && e?.onErrorCallback(o) : e?.cb && e?.cb()
            };
            if (t && (t.onerror = null, t.onload = null, safeWrapper(() => {
                const {
                  needDeleteScript: r = !0
                } = e;
                r && t?.parentNode && t.parentNode.removeChild(t)
              }), n && "function" == typeof n)) {
              const e = n(o);
              if (e instanceof Promise) {
                const r = await e;
                return i(), r
              }
              return i(), e
            }
            i()
          };
          return t.onerror = a.bind(null, t.onerror), t.onload = a.bind(null, t.onload), r = setTimeout(() => {
            a(null, new Error(`Remote script "${e.url}" time-outed.`))
          }, o), {
            script: t,
            needAttach: n
          }
        }

        function createLink(e) {
          let r = null,
            t = !0;
          const n = document.getElementsByTagName("link");
          for (let o = 0; o < n.length; o++) {
            const i = n[o],
              a = i.getAttribute("href"),
              s = i.getAttribute("rel");
            if (a && isStaticResourcesEqual(a, e.url) && s === e.attrs.rel) {
              r = i, t = !1;
              break
            }
          }
          if (!r) {
            let t;
            r = document.createElement("link"), r.setAttribute("href", e.url);
            const n = e.attrs;
            e.createLinkHook && (t = e.createLinkHook(e.url, n), t instanceof HTMLLinkElement && (r = t)), n && !t && Object.keys(n).forEach(e => {
              r && !r.getAttribute(e) && r.setAttribute(e, n[e])
            })
          }
          const o = (t, n) => {
            const o = () => {
              "error" === n?.type ? e?.onErrorCallback && e?.onErrorCallback(n) : e?.cb && e?.cb()
            };
            if (r && (r.onerror = null, r.onload = null, safeWrapper(() => {
                const {
                  needDeleteLink: t = !0
                } = e;
                t && r?.parentNode && r.parentNode.removeChild(r)
              }), t)) {
              const e = t(n);
              return o(), e
            }
            o()
          };
          return r.onerror = o.bind(null, r.onerror), r.onload = o.bind(null, r.onload), {
            link: r,
            needAttach: t
          }
        }

        function loadScript(e, r) {
          const {
            attrs: t = {},
            createScriptHook: n
          } = r;
          return new Promise((r, o) => {
            const {
              script: i,
              needAttach: a
            } = createScript({
              url: e,
              cb: r,
              onErrorCallback: o,
              attrs: {
                fetchpriority: "high",
                ...t
              },
              createScriptHook: n,
              needDeleteScript: !0
            });
            a && document.head.appendChild(i)
          })
        }
        const sdkImportCache = new Map;

        function importNodeModule(e) {
          if (!e) throw new Error("import specifier is required");
          if (sdkImportCache.has(e)) return sdkImportCache.get(e);
          const r = new Function("name", "return import(name)")(e).then(e => e).catch(r => {
            throw sdkImportCache.delete(e), r
          });
          return sdkImportCache.set(e, r), r
        }
        const loadNodeFetch = async () => {
          const e = await importNodeModule("node-fetch");
          return e.default || e
        }, lazyLoaderHookFetch = async (e, r, t) => {
          const n = await ((e, r) => t.lifecycle.fetch.emit(e, r))(e, r || {});
          if (!(n && n instanceof Response)) {
            return ("undefined" == typeof fetch ? await loadNodeFetch() : fetch)(e, r || {})
          }
          return n
        }, createScriptNode = "undefined" == typeof ENV_TARGET || "web" !== ENV_TARGET ? (url, cb, attrs, loaderHook) => {
          if (loaderHook?.createScriptHook) {
            const e = loaderHook.createScriptHook(url);
            e && "object" == typeof e && "url" in e && (url = e.url)
          }
          let urlObj;
          try {
            urlObj = new URL(url)
          } catch (e) {
            return void cb(new Error(`Invalid URL: ${e}`))
          }
          const getFetch = async () => loaderHook?.fetch ? (e, r) => lazyLoaderHookFetch(e, r, loaderHook) : "undefined" == typeof fetch ? loadNodeFetch() : fetch, handleScriptFetch = async (f, urlObj) => {
            try {
              const res = await f(urlObj.href),
                data = await res.text(),
                [path, vm] = await Promise.all([importNodeModule("path"), importNodeModule("vm")]),
                scriptContext = {
                  exports: {},
                  module: {
                    exports: {}
                  }
                },
                urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/"),
                filename = path.basename(urlObj.pathname),
                script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
                  filename: filename,
                  importModuleDynamically: vm.constants?.USE_MAIN_CONTEXT_DEFAULT_LOADER ?? importNodeModule
                });
              script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
              const exportedInterface = scriptContext.module.exports || scriptContext.exports;
              if (attrs && exportedInterface && attrs.globalName) {
                const e = exportedInterface[attrs.globalName] || exportedInterface;
                return void cb(void 0, e)
              }
              cb(void 0, exportedInterface)
            } catch (e) {
              cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`))
            }
          };
          getFetch().then(async e => {
            if ("esm" === attrs?.type || "module" === attrs?.type) return loadModule(urlObj.href, {
              fetch: e,
              vm: await importNodeModule("vm")
            }).then(async e => {
              await e.evaluate(), cb(void 0, e.namespace)
            }).catch(e => {
              cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`))
            });
            handleScriptFetch(e, urlObj)
          }).catch(e => {
            cb(e)
          })
        } : (e, r, t, n) => {
          r(new Error("createScriptNode is disabled in non-Node.js environment"))
        }, loadScriptNode = "undefined" == typeof ENV_TARGET || "web" !== ENV_TARGET ? (e, r) => new Promise((t, n) => {
          createScriptNode(e, (e, o) => {
            if (e) n(e);
            else {
              const e = globalThis[r?.attrs?.globalName || `__FEDERATION_${r?.attrs?.name}:custom__`] = o;
              t(e)
            }
          }, r.attrs, r.loaderHook)
        }) : (e, r) => {
          throw new Error("loadScriptNode is disabled in non-Node.js environment")
        }, esmModuleCache = new Map;
        async function loadModule(e, r) {
          if (esmModuleCache.has(e)) return esmModuleCache.get(e);
          const {
            fetch: t,
            vm: n
          } = r, o = await t(e), i = await o.text(), a = new n.SourceTextModule(i, {
            importModuleDynamically: async (t, n) => loadModule(new URL(t, e).href, r)
          });
          return esmModuleCache.set(e, a), await a.link(async t => {
            const n = new URL(t, e).href;
            return await loadModule(n, r)
          }), a
        }

        function normalizeOptions(e, r, t) {
          return function (n) {
            if (!1 === n) return !1;
            if (void 0 === n) return !!e && r;
            if (!0 === n) return r;
            if (n && "object" == typeof n) return {
              ...r,
              ...n
            };
            throw new Error(`Unexpected type for \`${t}\`, expect boolean/undefined/object, got: ${typeof n}`)
          }
        }
        const createModuleFederationConfig = e => e
      }
    },
    __webpack_module_cache__ = {},
    leafPrototypes, getProto, inProgress, dataWebpackPrefix, prevStartup, hasRun;

  function __webpack_require__(e) {
    var r = __webpack_module_cache__[e];
    if (void 0 !== r) return r.exports;
    var t = __webpack_module_cache__[e] = {
        id: e,
        exports: {}
      },
      n = {
        id: e,
        module: t,
        factory: __webpack_modules__[e],
        require: __webpack_require__
      };
    return __webpack_require__.i.forEach(function (e) {
      e(n)
    }), t = n.module, n.factory.call(t.exports, t, t.exports, n.require), t.exports
  }
  __webpack_require__.m = __webpack_modules__, __webpack_require__.c = __webpack_module_cache__, __webpack_require__.i = [], __webpack_require__.x = function () {}, __webpack_require__.federation || (__webpack_require__.federation = {
      initOptions: {
        name: "sirena_tower_game",
        remotes: [],
        shareStrategy: "version-first"
      },
      chunkMatcher: function (e) {
        return !/^(154|216|329|921|935)$/.test(e)
      },
      rootOutputDir: "",
      bundlerRuntimeOptions: {
        remotes: {
          remoteInfos: {},
          webpackRequire: __webpack_require__,
          idToRemoteMap: {},
          chunkMapping: {},
          idToExternalAndNameMapping: {}
        }
      }
    }, __webpack_require__.consumesLoadingData = {}, __webpack_require__.remotesLoadingData = {}), __webpack_require__.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return __webpack_require__.d(r, {
        a: r
      }), r
    }, getProto = Object.getPrototypeOf ? function (e) {
      return Object.getPrototypeOf(e)
    } : function (e) {
      return e.__proto__
    }, __webpack_require__.t = function (e, r) {
      if (1 & r && (e = this(e)), 8 & r) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e
      }
      var t = Object.create(null);
      __webpack_require__.r(t);
      var n = {};
      leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
      for (var o = 2 & r && e;
        ("object" == typeof o || "function" == typeof o) && !~leafPrototypes.indexOf(o); o = getProto(o)) Object.getOwnPropertyNames(o).forEach(function (r) {
        n[r] = function () {
          return e[r]
        }
      });
      return n.default = function () {
        return e
      }, __webpack_require__.d(t, n), t
    }, __webpack_require__.d = function (e, r) {
      for (var t in r) __webpack_require__.o(r, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
        enumerable: !0,
        get: r[t]
      })
    }, __webpack_require__.f = {}, __webpack_require__.e = function (e) {
      return Promise.all(Object.keys(__webpack_require__.f).reduce(function (r, t) {
        return __webpack_require__.f[t](e, r), r
      }, []))
    }, __webpack_require__.u = function (e) {
      return (914 === e ? "__federation_expose_SirenaTowerGameApp" : e) + "." + {
        31: "d5e29ffe32dd51116378",
        41: "7caf6de7e780d861f4e5",
        158: "edbb0c2fbbdda20c425f",
        196: "25c14540bb443dd348b2",
        197: "c30e8b1fbe1149d4bc04",
        201: "46affd757d4578b41264",
        221: "d33519b7003efee72a29",
        240: "5b4c4eb3312f723b053c",
        252: "e0836c4620b3d665d1c6",
        273: "ad01ba338b8e2553ba1b",
        321: "a8149c1b10dd22f5aca9",
        340: "6873fc9c30aad584fa76",
        356: "949e32b5c49dbe57a0d1",
        408: "b10870e1efd0c6281915",
        409: "83d29552f631ac88ae6c",
        437: "7e6ca6841e2edf130c7d",
        446: "776db87a4cab9907a655",
        447: "9b09d41f9a162b0cb111",
        489: "90b9d3acf23b257b680e",
        540: "2df7a3b56ad330c08bbd",
        559: "bf8a625d8cdffb48aaac",
        568: "eddda77a835d7708bc7f",
        578: "7ffa48bbadd99001e7b2",
        620: "e7fcb148f3142923224c",
        710: "0458be4f39487c802055",
        721: "364ad4f0b2dd4692c53f",
        740: "a68c5ac80ea77d0bfb58",
        751: "584dfdf83a3e8c8c673c",
        756: "f4af3305ca3517d62e3c",
        881: "33cb616b83a03a02fffb",
        882: "c9569ce169a2a5693f11",
        887: "64e4b1ed1c8c90815ffe",
        889: "1c7ba2b4af93767569ac",
        914: "93398ef4eb17d86ac806",
        922: "6b7bd998dd7cd94f3dd7",
        925: "03f056a9b02ab43fe2bf",
        954: "3e7d8631f0474a2f54af",
        961: "9bd619d8f39415d205cb",
        967: "930fd5a6434cb1719944",
        973: "cebcaa55b495e355e758"
      } [e] + ".js"
    }, __webpack_require__.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    }(), __webpack_require__.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r)
    }, inProgress = {}, dataWebpackPrefix = "sirena_tower_game:", __webpack_require__.l = function (e, r, t, n) {
      if (inProgress[e]) inProgress[e].push(r);
      else {
        var o, i;
        if (void 0 !== t)
          for (var a = document.getElementsByTagName("script"), s = 0; s < a.length; s++) {
            var c = a[s];
            if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == dataWebpackPrefix + t) {
              o = c;
              break
            }
          }
        o || (i = !0, (o = document.createElement("script")).charset = "utf-8", __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc), o.setAttribute("data-webpack", dataWebpackPrefix + t), o.src = e), inProgress[e] = [r];
        var u = function (r, t) {
            o.onerror = o.onload = null, clearTimeout(_);
            var n = inProgress[e];
            if (delete inProgress[e], o.parentNode && o.parentNode.removeChild(o), n && n.forEach(function (e) {
                return e(t)
              }), r) return r(t)
          },
          _ = setTimeout(u.bind(null, void 0, {
            type: "timeout",
            target: o
          }), 12e4);
        o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), i && document.head.appendChild(o)
      }
    }, __webpack_require__.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    },
    function () {
      __webpack_require__.S = {};
      var e = {},
        r = {};
      __webpack_require__.I = function (t, n) {
        n || (n = []);
        var o = r[t];
        if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
          if (n.push(o), e[t]) return e[t];
          __webpack_require__.o(__webpack_require__.S, t) || (__webpack_require__.S[t] = {});
          var i = __webpack_require__.S[t],
            a = "sirena_tower_game",
            s = function (e, r, t, n) {
              var o = i[e] = i[e] || {},
                s = o[r];
              (!s || !s.loaded && (!n != !s.eager ? n : a > s.from)) && (o[r] = {
                get: t,
                from: a,
                eager: !!n
              })
            },
            c = [];
          if ("default" === t) s("@dimforge/rapier3d-compat", "0.19.3", function () {
            return __webpack_require__.e(31).then(function () {
              return function () {
                return __webpack_require__(8031)
              }
            })
          }), s("@esotericsoftware/spine-player", "4.3.13", function () {
            return Promise.all([__webpack_require__.e(321), __webpack_require__.e(710), __webpack_require__.e(882), __webpack_require__.e(740), __webpack_require__.e(201), __webpack_require__.e(221), __webpack_require__.e(356), __webpack_require__.e(252), __webpack_require__.e(158), __webpack_require__.e(751), __webpack_require__.e(273), __webpack_require__.e(881), __webpack_require__.e(559), __webpack_require__.e(967), __webpack_require__.e(240), __webpack_require__.e(197), __webpack_require__.e(620), __webpack_require__.e(889), __webpack_require__.e(578), __webpack_require__.e(409), __webpack_require__.e(41), __webpack_require__.e(446)]).then(function () {
              return function () {
                return __webpack_require__(5889)
              }
            })
          }), s("axios", "1.13.5", function () {
            return __webpack_require__.e(447).then(function () {
              return function () {
                return __webpack_require__(4447)
              }
            })
          }), s("effector-react", "23.3.0", function () {
            return Promise.all([__webpack_require__.e(721), __webpack_require__.e(935)]).then(function () {
              return function () {
                return __webpack_require__(3721)
              }
            })
          }), s("effector", "23.4.4", function () {
            return __webpack_require__.e(489).then(function () {
              return function () {
                return __webpack_require__(2489)
              }
            })
          }), s("howler", "2.2.4", function () {
            return __webpack_require__.e(196).then(function () {
              return function () {
                return __webpack_require__(4196)
              }
            })
          }), s("react-dom", "18.3.1", function () {
            return Promise.all([__webpack_require__.e(961), __webpack_require__.e(154)]).then(function () {
              return function () {
                return __webpack_require__(961)
              }
            })
          }), s("react-router", "7.18.1", function () {
            return Promise.all([__webpack_require__.e(408), __webpack_require__.e(973), __webpack_require__.e(921)]).then(function () {
              return function () {
                return __webpack_require__(4408)
              }
            })
          }), s("react", "18.3.1", function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          }), s("styled-components", "5.3.11", function () {
            return Promise.all([__webpack_require__.e(568), __webpack_require__.e(329)]).then(function () {
              return function () {
                return __webpack_require__(2568)
              }
            })
          }), s("three", "0.184.0", function () {
            return Promise.all([__webpack_require__.e(922), __webpack_require__.e(437)]).then(function () {
              return function () {
                return __webpack_require__(9437)
              }
            })
          }), s("tweakpane", "4.0.5", function () {
            return __webpack_require__.e(925).then(function () {
              return function () {
                return __webpack_require__(3925)
              }
            })
          });
          return c.length ? e[t] = Promise.all(c).then(function () {
            return e[t] = 1
          }) : e[t] = 1
        }
      }
    }(),
    function () {
      __webpack_require__.federation.initOptions.shared = {
        "@dimforge/rapier3d-compat": [{
          version: "0.19.3",
          get: function () {
            return __webpack_require__.e(31).then(function () {
              return function () {
                return __webpack_require__(8031)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^0.19.3",
            singleton: !1,
            layer: null
          }
        }],
        "@esotericsoftware/spine-player": [{
          version: "4.3.13",
          get: function () {
            return Promise.all([__webpack_require__.e(321), __webpack_require__.e(710), __webpack_require__.e(882), __webpack_require__.e(740), __webpack_require__.e(201), __webpack_require__.e(221), __webpack_require__.e(356), __webpack_require__.e(252), __webpack_require__.e(158), __webpack_require__.e(751), __webpack_require__.e(273), __webpack_require__.e(881), __webpack_require__.e(559), __webpack_require__.e(967), __webpack_require__.e(240), __webpack_require__.e(197), __webpack_require__.e(620), __webpack_require__.e(889), __webpack_require__.e(578), __webpack_require__.e(409), __webpack_require__.e(41), __webpack_require__.e(446)]).then(function () {
              return function () {
                return __webpack_require__(5889)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "4.3",
            singleton: !1,
            layer: null
          }
        }],
        axios: [{
          version: "1.13.5",
          get: function () {
            return __webpack_require__.e(447).then(function () {
              return function () {
                return __webpack_require__(4447)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "1.13.5",
            singleton: !1,
            layer: null
          }
        }],
        "effector-react": [{
          version: "23.3.0",
          get: function () {
            return Promise.all([__webpack_require__.e(721), __webpack_require__.e(935)]).then(function () {
              return function () {
                return __webpack_require__(3721)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^23.3.0",
            singleton: !1,
            layer: null
          }
        }],
        effector: [{
          version: "23.4.4",
          get: function () {
            return __webpack_require__.e(489).then(function () {
              return function () {
                return __webpack_require__(2489)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^23.4.4",
            singleton: !1,
            layer: null
          }
        }],
        howler: [{
          version: "2.2.4",
          get: function () {
            return __webpack_require__.e(196).then(function () {
              return function () {
                return __webpack_require__(4196)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^2.2.4",
            singleton: !1,
            layer: null
          }
        }],
        "react-dom": [{
          version: "18.3.1",
          get: function () {
            return Promise.all([__webpack_require__.e(961), __webpack_require__.e(154)]).then(function () {
              return function () {
                return __webpack_require__(961)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            singleton: !0,
            layer: null
          }
        }],
        "react-router": [{
          version: "7.18.1",
          get: function () {
            return Promise.all([__webpack_require__.e(408), __webpack_require__.e(973), __webpack_require__.e(921)]).then(function () {
              return function () {
                return __webpack_require__(4408)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^7.18.1",
            singleton: !1,
            layer: null
          }
        }],
        react: [{
          version: "18.3.1",
          get: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            singleton: !0,
            layer: null
          }
        }],
        "styled-components": [{
          version: "5.3.11",
          get: function () {
            return Promise.all([__webpack_require__.e(568), __webpack_require__.e(329)]).then(function () {
              return function () {
                return __webpack_require__(2568)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            singleton: !0,
            layer: null
          }
        }],
        three: [{
          version: "0.184.0",
          get: function () {
            return Promise.all([__webpack_require__.e(922), __webpack_require__.e(437)]).then(function () {
              return function () {
                return __webpack_require__(9437)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^0.184.0",
            singleton: !1,
            layer: null
          }
        }],
        tweakpane: [{
          version: "4.0.5",
          get: function () {
            return __webpack_require__.e(925).then(function () {
              return function () {
                return __webpack_require__(3925)
              }
            })
          },
          scope: ["default"],
          shareConfig: {
            eager: !1,
            requiredVersion: "^4.0.5",
            singleton: !1,
            layer: null
          }
        }]
      }, __webpack_require__.S = {};
      var e = {},
        r = {};
      __webpack_require__.I = function (t, n) {
        return __webpack_require__.federation.bundlerRuntime.I({
          shareScopeName: t,
          webpackRequire: __webpack_require__,
          initPromises: e,
          initTokens: r,
          initScope: n
        })
      }
    }(),
    function () {
      var e;
      __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
      var r = __webpack_require__.g.document;
      if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        if (t.length)
          for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = t[n--].src
      }
      if (!e) throw new Error("Automatic publicPath is not supported in this browser");
      e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), __webpack_require__.p = e
    }(),
    function () {
      var e = {};
      __webpack_require__.consumesLoadingData.moduleIdToConsumeDataMapping = {
        1617: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: ">=16.8.0 <20.0.0",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        8719: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        154: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: "^18.3.1",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        921: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: ">=18",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        1329: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: ">= 16.8.0",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        38: {
          fallback: function () {
            return Promise.all([__webpack_require__.e(721), __webpack_require__.e(935)]).then(function () {
              return function () {
                return __webpack_require__(3721)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^23.3.0",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "effector-react"
        },
        633: {
          fallback: function () {
            return __webpack_require__.e(925).then(function () {
              return function () {
                return __webpack_require__(3925)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^4.0.5",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "tweakpane"
        },
        1208: {
          fallback: function () {
            return Promise.all([__webpack_require__.e(408), __webpack_require__.e(973), __webpack_require__.e(921)]).then(function () {
              return function () {
                return __webpack_require__(4408)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^7.18.1",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "react-router"
        },
        1263: {
          fallback: function () {
            return Promise.all([__webpack_require__.e(961), __webpack_require__.e(154)]).then(function () {
              return function () {
                return __webpack_require__(961)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: "18.3.1",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react-dom"
        },
        2298: {
          fallback: function () {
            return Promise.all([__webpack_require__.e(321), __webpack_require__.e(710), __webpack_require__.e(882), __webpack_require__.e(740), __webpack_require__.e(201), __webpack_require__.e(221), __webpack_require__.e(356), __webpack_require__.e(252), __webpack_require__.e(158), __webpack_require__.e(751), __webpack_require__.e(273), __webpack_require__.e(881), __webpack_require__.e(559), __webpack_require__.e(967), __webpack_require__.e(240), __webpack_require__.e(197), __webpack_require__.e(620), __webpack_require__.e(889), __webpack_require__.e(578), __webpack_require__.e(409), __webpack_require__.e(41), __webpack_require__.e(446)]).then(function () {
              return function () {
                return __webpack_require__(5889)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "4.3",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "@esotericsoftware/spine-player"
        },
        2427: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: "18.3.1",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        3872: {
          fallback: function () {
            return __webpack_require__.e(31).then(function () {
              return function () {
                return __webpack_require__(8031)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^0.19.3",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "@dimforge/rapier3d-compat"
        },
        4055: {
          fallback: function () {
            return __webpack_require__.e(540).then(function () {
              return function () {
                return __webpack_require__(6540)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: !1,
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "react"
        },
        4099: {
          fallback: function () {
            return __webpack_require__.e(196).then(function () {
              return function () {
                return __webpack_require__(4196)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^2.2.4",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "howler"
        },
        4755: {
          fallback: function () {
            return Promise.all([__webpack_require__.e(922), __webpack_require__.e(437)]).then(function () {
              return function () {
                return __webpack_require__(9437)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^0.184.0",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "three"
        },
        7871: {
          fallback: function () {
            return Promise.all([__webpack_require__.e(568), __webpack_require__.e(329)]).then(function () {
              return function () {
                return __webpack_require__(2568)
              }
            })
          },
          shareScope: ["default"],
          singleton: !0,
          requiredVersion: "5.3.11",
          strictVersion: !1,
          eager: !1,
          layer: void 0,
          shareKey: "styled-components"
        },
        7995: {
          fallback: function () {
            return __webpack_require__.e(489).then(function () {
              return function () {
                return __webpack_require__(2489)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "^23.4.4",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "effector"
        },
        8378: {
          fallback: function () {
            return __webpack_require__.e(447).then(function () {
              return function () {
                return __webpack_require__(4447)
              }
            })
          },
          shareScope: ["default"],
          singleton: !1,
          requiredVersion: "1.13.5",
          strictVersion: !0,
          eager: !1,
          layer: void 0,
          shareKey: "axios"
        }
      };
      var r = {};
      __webpack_require__.consumesLoadingData.chunkMapping = {
        154: [154],
        216: [38, 633, 1208, 1263, 2298, 2427, 3872, 4055, 4099, 4755, 7871, 7995, 8378],
        329: [1329],
        921: [921],
        935: [1617, 8719]
      }, __webpack_require__.f.consumes = function (t, n) {
        __webpack_require__.federation.bundlerRuntime.consumes({
          chunkMapping: __webpack_require__.consumesLoadingData.chunkMapping,
          installedModules: e,
          chunkId: t,
          moduleToHandlerMapping: r,
          promises: n,
          webpackRequire: __webpack_require__
        })
      }
    }(), prevStartup = __webpack_require__.x, hasRun = !1, __webpack_require__.x = function () {
      if (hasRun || (hasRun = !0, __webpack_require__(6367)), "function" == typeof prevStartup) return prevStartup()
    },
    function () {
      __webpack_require__.b = "undefined" != typeof document && document.baseURI || self.location.href;
      var e = {
        234: 0
      };
      __webpack_require__.f.j = function (r, t) {
        var n = __webpack_require__.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (/^(154|216|329|921|935)$/.test(r)) e[r] = 0;
        else {
          var o = new Promise(function (t, o) {
            n = e[r] = [t, o]
          });
          t.push(n[2] = o);
          var i = __webpack_require__.p + __webpack_require__.u(r),
            a = new Error;
          __webpack_require__.l(i, function (t) {
            if (__webpack_require__.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              a.message = "Loading chunk " + r + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, n[1](a)
            }
          }, "chunk-" + r, r)
        }
      };
      var r = function (r, t) {
          var n, o, i = t[0],
            a = t[1],
            s = t[2],
            c = 0;
          if (i.some(function (r) {
              return 0 !== e[r]
            })) {
            for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
            if (s) s(__webpack_require__)
          }
          for (r && r(t); c < i.length; c++) o = i[c], __webpack_require__.o(e, o) && e[o] && e[o][0](), e[o] = 0
        },
        t = self.webpackChunksirena_tower_game = self.webpackChunksirena_tower_game || [];
      t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    }(), __webpack_require__.nc = void 0, __webpack_require__.x();
  var __webpack_exports__ = __webpack_require__(9102);
  sirena_tower_game = __webpack_exports__
})();