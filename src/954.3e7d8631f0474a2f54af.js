"use strict";
(self.webpackChunksirena_tower_game = self.webpackChunksirena_tower_game || []).push([
  [954], {
    4086: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ee
        }
      });
      var r = n(2427),
        a = n(1208),
        o = n(38),
        i = n(7871),
        s = n(3040),
        l = n(7795),
        c = n(3546),
        u = n(2006),
        d = n(8591),
        f = n(5918),
        p = n(6918),
        m = n(150),
        h = n(4848);
      const g = "admin",
        x = i.default.div(["display:flex;gap:32px;padding:32px 16px var(--navigation-bottom);flex-direction:column;border-radius:32px 32px 0 0;background:linear-gradient(180deg,#578fc4 0%,#0f4366 100%);"]),
        y = i.default.div(["display:flex;justify-content:space-between;align-items:flex-start;gap:16px;"]),
        b = i.default.h2(["margin:0 0 8px;color:#fff;font-family:", ";font-size:24px;font-weight:500;line-height:28px;"], p.pQ.onyOne),
        v = i.default.p(["margin:0;color:rgb(255 255 255 / 75%);font-family:", ";font-size:14px;line-height:20px;font-feature-settings:'liga' off,'clig' off;"], p.pQ.onyOne),
        w = i.default.div(["display:flex;gap:12px;flex-direction:column;"]),
        j = i.default.label(["display:flex;align-items:center;gap:8px;color:#fff;font-family:", ";font-size:14px;line-height:20px;cursor:pointer;input{width:20px;height:20px;margin:0;}"], p.pQ.onyOne),
        _ = i.default.p(["margin:-16px 0 0;color:#ffd6d6;font-family:", ";font-size:14px;line-height:20px;"], p.pQ.onyOne),
        S = i.default.p(["margin:-16px 0 0;color:#d6ffe3;font-family:", ";font-size:14px;line-height:20px;"], p.pQ.onyOne),
        k = (0, i.default)(d.m)(["width:100%;"]);
      var M = n(4489);
      const E = "first-entry",
        C = i.default.div(["display:flex;justify-content:flex-end;gap:40px;padding:24px 16px var(--navigation-bottom);flex-direction:column;position:relative;"]),
        D = i.default.img(["width:240px;height:240px;position:absolute;top:-239px;left:50%;z-index:2;transform:translateX(-50%);object-fit:contain;"]),
        $ = i.default.div(["display:flex;align-items:center;gap:12px;flex-direction:column;text-align:center;"]),
        I = i.default.h2(["margin:0;color:var(--text-primary,#fff);font-family:", ";font-size:24px;font-weight:500;line-height:28px;font-feature-settings:'liga' off,'clig' off;"], p.pQ.onyOne),
        T = i.default.p(["margin:0;max-width:343px;color:var(--transparent-light-75,rgb(255 255 255 / 75%));font-family:", ";font-size:16px;font-weight:400;line-height:22px;font-feature-settings:'liga' off,'clig' off;"], p.pQ.onyOne),
        U = (0, i.default)(d.m)(["width:225px;align-self:center;"]);
      var A = n(9292);
      const O = "bb-tower:first-entry-drawer:v1",
        z = () => {
          const [e, t] = (0, o.useUnit)([l.Q9, u.x2]), n = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            if (!e || "active" !== e.experience.phase || t || (0, A.vo)(e)) return;
            const r = {
                shownAt: e.server_time.slice(0, 10),
                tourId: e.tour.id,
                userId: e.user.user_id
              },
              a = `${r.userId}:${r.tourId}:${r.shownAt}`,
              o = (() => {
                try {
                  const e = localStorage.getItem(O);
                  return e ? JSON.parse(e) : null
                } catch {
                  return null
                }
              })();
            o?.userId === r.userId && o.tourId === r.tourId && o.shownAt === r.shownAt || n.current === a || (n.current = a, (e => {
              try {
                localStorage.setItem(O, JSON.stringify(e))
              } catch {}
            })(r), (0, u.sd)(E))
          }, [t, e])
        };
      var P = n(5043),
        Q = n(2437),
        R = n(5887);
      const B = {
          [g]: {
            Content: ({
              closeDrawer: e
            }) => {
              const [t, n] = (0, r.useState)(null), [a, i] = (0, r.useState)(null), [d, p] = (0, r.useState)(null), [g, M] = (0, r.useState)(!1), [E, C] = (0, r.useState)(m.u3), D = (0, o.useUnit)(l.Q9), $ = async (e, t) => {
                n(e), i(null), p(null);
                try {
                  await t(), await (0, l.Qe)()
                } catch {
                  i("Не удалось выполнить действие. Попробуйте ещё раз.")
                } finally {
                  n(null)
                }
              }, I = null !== t || g || !D?.tour.is_active;
              return (0, h.jsxs)(x, {
                children: [(0, h.jsxs)(y, {
                  children: [(0, h.jsxs)("div", {
                    children: [(0, h.jsx)(b, {
                      children: "QA-админка"
                    }), (0, h.jsxs)(v, {
                      children: ["Баланс: ", D?.attempts.balance ?? "—", ", использовано сегодня:", " ", D?.attempts.used_today ?? "—", ", осталось попыток:", " ", D?.attempts.remaining_today ?? "—"]
                    })]
                  }), (0, h.jsx)(f.K, {
                    "aria-label": "Закрыть",
                    icon: "cancel",
                    onClick: e
                  })]
                }), a && (0, h.jsx)(_, {
                  role: "alert",
                  children: a
                }), d && (0, h.jsx)(S, {
                  role: "status",
                  children: d
                }), (0, h.jsxs)(w, {
                  children: [(0, h.jsxs)(j, {
                    children: [(0, h.jsx)("input", {
                      checked: E,
                      onChange: () => {
                        const e = !E;
                        (0, m.Mr)(e), C(e), i(null), p(e ? "Сбор perf-лога включён. Запусти новую игру." : "Сбор perf-лога выключен.")
                      },
                      type: "checkbox"
                    }), "Собирать perf-лог"]
                  }), (0, h.jsx)(k, {
                    loading: "reset-attempts" === t,
                    disabled: null !== t,
                    onClick: () => $("reset-attempts", l.xd),
                    variant: "secondary",
                    children: "Сбросить попытки в 0"
                  }), (0, h.jsx)(k, {
                    loading: "add-attempts" === t,
                    disabled: null !== t,
                    onClick: () => $("add-attempts", l.xf),
                    children: "Добавить 10 попыток"
                  }), (0, h.jsx)(k, {
                    loading: "grant-bet-step" === t,
                    disabled: I,
                    onClick: () => (async () => {
                      n("grant-bet-step"), i(null), p(null);
                      try {
                        const e = await (0, l.bI)();
                        if (await (0, l.Qe)(), e.granted > 0 && D) {
                          const {
                            attempts_per_step: t,
                            step_rub: n
                          } = D.bet_progress, r = Math.max(0, e.attempts_from_bets_today - e.granted), a = Math.floor(r / t);
                          return void(0, u.sd)(s.MP, {
                            mode: "bet-return",
                            betAmount: n,
                            previousBetSum: a * n,
                            previousUsedToday: D.attempts.used_today
                          })
                        }
                        p(e.granted > 0 ? `Начислено попыток: ${e.granted}` : "Лимит попыток со ставок на сегодня уже достигнут.")
                      } catch (e) {
                        e instanceof c.hD && 403 === e.status ? (M(!0), i("Тур не активен: ставочное условие недоступно.")) : i("Не удалось выполнить действие. Попробуйте ещё раз.")
                      } finally {
                        n(null)
                      }
                    })(),
                    children: "Выполнить одно ставочное условие"
                  }), (0, h.jsx)(k, {
                    loading: "reset-bet-attempts" === t,
                    disabled: null !== t,
                    onClick: () => $("reset-bet-attempts", l.eD),
                    variant: "secondary",
                    children: "Сбросить ставочные попытки"
                  }), (0, h.jsx)(k, {
                    loading: "reset-daily-limit" === t,
                    disabled: null !== t,
                    onClick: () => $("reset-daily-limit", l.Vk),
                    variant: "secondary",
                    children: "Сбросить дневной лимит"
                  }), (0, h.jsx)(k, {
                    disabled: null !== t || !E,
                    onClick: () => {
                      (0, m.jv)() ? (i(null), p(`Perf-лог скачан: ${(0,m.IA)()} записей.`)) : (p(null), i("Perf-лог пуст. Сначала запусти игру."))
                    },
                    variant: "secondary",
                    children: "Скачать perf-лог"
                  })]
                })]
              })
            },
            shape: "simple"
          },
          [s.MP]: {
            Content: s._x,
            shape: "simple"
          },
          [E]: {
            Content: ({
              closeDrawer: e
            }) => (0, h.jsxs)(C, {
              children: [(0, h.jsx)(D, {
                alt: "",
                "aria-hidden": "true",
                src: M
              }), (0, h.jsxs)($, {
                children: [(0, h.jsx)(I, {
                  children: "Заходи в акцию каждый день"
                }), (0, h.jsx)(T, {
                  children: "и получай одну бесплатную попытку"
                })]
              }), (0, h.jsx)(U, {
                onClick: e,
                children: "Спасибо!"
              })]
            })
          },
          [P.l]: {
            Content: P.$
          }
        },
        L = () => {
          const e = (0, o.useUnit)(u.x2),
            {
              mainInformationClose: t,
              mainMakeBetClose: n
            } = (0, R.A)(),
            a = e ? B[e.type] : null,
            i = a?.Content,
            l = (0, r.useCallback)(() => {
              e?.type === s.MP && n(), e?.type === P.l && t(), (0, u.St)()
            }, [e?.type, t, n]);
          return (0, h.jsx)(Q._, {
            isOpen: void 0 !== i,
            height: a?.height,
            onClose: l,
            shape: a?.shape,
            children: i && e && (0, h.jsx)(i, {
              closeDrawer: u.St,
              meta: e.meta
            })
          })
        },
        N = new Set(["/results", "/results-pending", "/winners"]);
      var G = n(5595);
      var F = n(8595),
        H = n(5069),
        K = n(8091),
        X = n(4743),
        q = n(7935),
        J = n(2941),
        V = n(5544),
        Y = n(9727);
      const W = () => {
          const {
            pathname: e
          } = (0, a.useLocation)(), {
            endResultsLoad: t,
            endResultsRatingLoad: n,
            historyLoad: o,
            mainLoad: i
          } = (0, R.A)();
          return (0, r.useEffect)(() => {
            const r = {
              "/start": i,
              "/history": o,
              "/results": t,
              "/rating": n,
              "/winners": n
            };
            r[e]?.()
          }, [t, n, o, i, e]), null
        },
        Z = () => {
          const e = (0, o.useUnit)(l.Q9),
            {
              pathname: t
            } = (0, a.useLocation)(),
            n = (0, a.useNavigate)();
          return (0, r.useEffect)(() => {
            if (!e) return;
            const r = ((e, t, n) => "active" === e ? N.has(t) ? "/start" : null : "awaiting_results" === e ? "/results-pending" === t ? null : "/results-pending" : "/start" === t || "/game" === t || "/rating" === t || "/results-pending" === t || "/history" === t && "not_joined" === n ? "/results" : null)(e.experience.phase, t, e.participation_status);
            r && n(r, {
              replace: !0
            })
          }, [n, t, e]), null
        },
        ee = ({
          renderAbout: e
        }) => {
          const t = (0, o.useUnit)(V.Mq);
          return (() => {
            const [e, t, n] = (0, o.useUnit)([l.Q9, u.x2, G.vH]), a = (0, r.useRef)(null), i = (0, r.useRef)(crypto.randomUUID());
            (0, A.Kg)(i.current), (0, r.useEffect)(() => {
              if (!e || "active" !== e.experience.phase || t || n) return;
              const r = (0, A.L7)(e, {
                excludeSourceEntryId: i.current
              });
              if (!r || a.current === r.createdAt) return;
              const o = Math.max(0, e.bet_progress.bet_sum - r.betSum);
              a.current = r.createdAt, (0, u.sd)(s.MP, {
                mode: "bet-return",
                betAmount: o,
                previousBetSum: r.betSum,
                previousUsedToday: r.usedToday
              }), (0, A.bx)()
            }, [n, t, e])
          })(), z(), (0, h.jsx)(a.MemoryRouter, {
            initialEntries: ["/start"],
            children: (0, h.jsxs)(te, {
              $isWebView: t,
              "data-bb-tower-root": !0,
              children: [(0, h.jsxs)(a.Routes, {
                children: [(0, h.jsxs)(a.Route, {
                  element: (0, h.jsx)(H.c, {}),
                  children: [(0, h.jsx)(a.Route, {
                    element: null,
                    path: "/start"
                  }), (0, h.jsx)(a.Route, {
                    element: null,
                    path: "/game"
                  })]
                }), (0, h.jsx)(a.Route, {
                  Component: e,
                  path: "/prize"
                }), (0, h.jsx)(a.Route, {
                  element: (0, h.jsx)(F.K, {}),
                  path: "/history"
                }), (0, h.jsx)(a.Route, {
                  element: (0, h.jsx)(K.B, {}),
                  path: "/rating"
                }), (0, h.jsx)(a.Route, {
                  element: (0, h.jsx)(X.S, {}),
                  path: "/results"
                }), (0, h.jsx)(a.Route, {
                  element: (0, h.jsx)(q.N, {}),
                  path: "/results-pending"
                }), (0, h.jsx)(a.Route, {
                  element: (0, h.jsx)(J.M, {}),
                  path: "/winners"
                }), (0, h.jsx)(a.Route, {
                  element: (0, h.jsx)(a.Navigate, {
                    replace: !0,
                    to: "/start"
                  }),
                  path: "*"
                })]
              }), (0, h.jsx)(W, {}), (0, h.jsx)(Z, {}), (0, h.jsx)(Y.V, {}), (0, h.jsx)(L, {})]
            })
          })
        },
        te = i.default.div(["--navigation-bottom:", ";--navigation-height:56px;--navigation-gap:16px;--bottom-controls-opacity-duration:180ms;--bottom-controls-transform-duration:320ms;--bottom-controls-exit-easing:cubic-bezier(0.55,0,1,0.45);width:100%;height:100%;position:relative;background:linear-gradient(180deg,#578fc4 0%,#06314e 100%);@media (width >= 769px){width:440px;height:640px;box-shadow:0 8px 32px rgb(0 0 0 / 40%);}"], ({
          $isWebView: e
        }) => e ? "48px" : "16px")
    },
    5441: function (e, t, n) {
      n.d(t, {
        t: function () {
          return l
        }
      });
      var r = n(2427),
        a = n.n(r),
        o = n(1857),
        i = n(4848);
      class s extends a().Component {
        constructor(e) {
          super(e), this.state = {
            hasError: !1,
            error: null
          }
        }
        static getDerivedStateFromError(e) {
          return {
            hasError: !0,
            error: e
          }
        }
        componentDidCatch(e, t) {}
        render() {
          const {
            hasError: e,
            error: t
          } = this.state, {
            children: n
          } = this.props;
          return e && t ? (0, i.jsx)(o.M, {
            error: t
          }) : n
        }
      }
      var l = s
    },
    6396: function (e, t, n) {
      n.d(t, {
        I: function () {
          return c
        }
      });
      var r = n(7871),
        a = n(6918),
        o = (0, r.css)(["*{box-sizing:border-box;outline:none;}html{height:100%;box-sizing:border-box;overflow:hidden;background-color:", " !important;}#root{display:flex;justify-content:center;align-items:center;width:100%;height:100%;overflow:hidden;}body{height:100%;min-width:320px;margin:0;padding:0;overflow:hidden;background-color:", " !important;box-sizing:border-box;color:", " !important;font-family:", ";font-feature-settings:'tnum','tnum';-webkit-font-smoothing:antialiased;font-weight:400;-webkit-tap-highlight-color:transparent;transition:color ", "s ", ",background-color ", "s ", ";}input::-webkit-textfield-decoration-container{margin:0;-webkit-appearance:none;}input:focus::-webkit-textfield-decoration-container{pointer-events:none;visibility:hidden;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus{-webkit-text-fill-color:", " !important;transition:background-color ", "s ", " 0s;}"], ({
          theme: e
        }) => e.colors.color0d0xf9f, ({
          theme: e
        }) => e.colors.color0d0xf9f, ({
          theme: e
        }) => e.colors.colorfffx0d0, a.pQ.lato, a.H$, a.Y, a.H$, a.Y, ({
          theme: e
        }) => e.colors.colorfffx0d0, 2e4 * a.H$, a.Y);
      const i = (0, r.createGlobalStyle)(["", ""], o),
        s = {
          dark: {
            colors: a.GJ,
            typography: a.K4,
            staticUrl: ""
          },
          light: {
            colors: a.ag,
            typography: a.K4,
            staticUrl: ""
          }
        };
      var l = n(4848);
      const c = e => {
        const {
          children: t,
          staticUrl: n,
          theme: a
        } = e, o = (e => (s.dark.staticUrl = e, s.light.staticUrl = e, s))(n);
        return (0, l.jsxs)(r.ThemeProvider, {
          theme: o[a],
          children: [(0, l.jsx)(i, {}), t]
        })
      }
    },
    1532: function (e, t, n) {
      n.d(t, {
        B: function () {
          return r
        }
      });
      const r = (0, n(38).createGate)();
      var a = n(7995);
      const o = (0, a.createStore)(!1);
      (0, a.sample)({
        clock: r.open,
        fn: e => e,
        target: o
      })
    },
    1635: function (e, t, n) {
      n.d(t, {
        Y5: function () {
          return p
        }
      });
      var r = n(609),
        a = n(7995);
      const o = (0, a.createEvent)(),
        i = (0, a.createEvent)();
      class s {
        constructor(e, t) {
          this.mediator = e, this.nameColleague = t
        }
        send(e, t) {
          this.mediator.notify(e, t)
        }
        receive(e, t) {
          this.mediator.register(`${this.nameColleague}_${e}`, t)
        }
        stopReceiving(e, t) {
          this.mediator.unregister(`${this.nameColleague}_${e}`, t)
        }
      }
      class l {
        register() {}
        unregister() {}
        notify() {}
      }
      const c = (0, n(6083).h)("EventBus"),
        u = (0, a.createEffect)(({
          mediator: e,
          collegeName: t,
          eventRegisters: n
        }) => {
          const r = new s(e, t);
          return n.length && n.forEach(({
            eventName: e,
            callback: t
          }) => {
            r.receive(e, t)
          }), c.info("createColleagueFx success"), r
        }),
        d = (0, a.createEffect)(() => {
          let e;
          return "undefined" != typeof window && window?.BBEventMediator ? e = window.BBEventMediator : (e = new l, window.BBEventMediator = e), c.info("createMediatorFx success"), e
        }),
        f = (0, a.createEffect)(async e => {
          const t = await d(),
            n = await u({
              mediator: t,
              collegeName: "sirena_tower_game_colleague",
              eventRegisters: e
            });
          return c.info("initColleagueFx success"), n
        });
      const p = (0, n(38).createGate)();
      (0, a.sample)({
        clock: p.open,
        source: r.H,
        target: f
      }), (0, a.sample)({
        clock: f.doneData,
        target: o
      }), (0, a.sample)({
        source: o,
        target: r.l
      }), (0, a.sample)({
        clock: p.close,
        target: i
      }), (0, a.sample)({
        clock: i,
        source: (0, a.combine)({
          colleague: r.l,
          eventRegisters: r.H
        }),
        fn: ({
          colleague: e,
          eventRegisters: t
        }) => (e && t.forEach(({
          eventName: t,
          callback: n
        }) => {
          e.stopReceiving(t, n)
        }), null),
        target: o
      })
    },
    609: function (e, t, n) {
      n.d(t, {
        H: function () {
          return o
        },
        l: function () {
          return a
        }
      });
      var r = n(7995);
      const a = (0, r.createStore)(null),
        o = (0, r.createStore)([{
          eventName: "test_action",
          callback: () => {}
        }])
    },
    5595: function (e, t, n) {
      n.d(t, {
        vH: function () {
          return h
        },
        PK: function () {
          return g
        },
        S0: function () {
          return m
        },
        Qm: function () {
          return p
        },
        i$: function () {
          return s
        },
        bF: function () {
          return d
        },
        vx: function () {
          return c
        },
        E: function () {
          return u
        },
        a7: function () {
          return f
        },
        L2: function () {
          return l
        }
      });
      var r = n(7995),
        a = n(3546),
        o = n(7795);
      const i = "bb-tower-session-holder-id",
        s = () => {
          const e = sessionStorage.getItem(i);
          if (e) return e;
          const t = crypto.randomUUID();
          return sessionStorage.setItem(i, t), t
        },
        l = (0, r.createEffect)(async e => ({
          ...await (0, a.MU)({
            url: "/game/start",
            method: "POST",
            data: {
              session_holder_id: e
            }
          }),
          session_holder_id: e,
          started_at: Date.now()
        })),
        c = (0, r.createEffect)(async e => {
          await (0, a.MU)({
            url: "/game/session/ping",
            method: "POST",
            data: e
          })
        }),
        u = (0, r.createEffect)(e => (0, a.MU)({
          url: "/game/taps",
          method: "POST",
          data: e
        })),
        d = (0, r.createEffect)(e => (0, a.MU)({
          url: "/game/session/pause",
          method: "POST",
          data: e
        })),
        f = (0, r.createEffect)(e => (0, a.MU)({
          url: "/game/session/resume",
          method: "POST",
          data: e
        })),
        p = (0, r.createEffect)(e => (0, a.MU)({
          url: "/game/end",
          method: "POST",
          data: e
        })),
        m = (0, r.createEvent)(),
        h = (0, r.createStore)(null).on(l.doneData, (e, t) => t).on(u.doneData, (e, t) => e ? {
          ...e,
          session_generation: t.session_generation
        } : e).on(d.doneData, (e, t) => e ? {
          ...e,
          session_generation: t.session_generation
        } : e).on(f.doneData, (e, t) => e ? {
          ...e,
          session_generation: t.session_generation
        } : e).reset([p.done, m]),
        g = (0, r.createStore)(null).on(l.failData, (e, t) => t).on(c.failData, (e, t) => t).on(d.failData, (e, t) => t).on(f.failData, (e, t) => t).on(p.failData, (e, t) => t).reset([l, p]);
      l.doneData.watch(e => {
        (0, o.xz)(e.attempts_balance_after)
      }), p.doneData.watch(e => {
        (0, o.sm)({
          total_floors: e.personal_stats.total_floors,
          rank_all_time: e.personal_stats.rank_all_time,
          rank_today: e.personal_stats.rank_today
        }), (0, o.Qe)()
      })
    },
    1009: function (e, t, n) {
      n.d(t, {
        tb: function () {
          return f
        },
        v4: function () {
          return m
        },
        t4: function () {
          return p
        },
        hp: function () {
          return h
        },
        tx: function () {
          return x
        },
        VI: function () {
          return g
        },
        xm: function () {
          return c
        },
        Fu: function () {
          return u
        }
      });
      var r = n(7995),
        a = n(5595),
        o = n(7795),
        i = n(3546);
      const s = {
          fetchedAt: null,
          tourId: null
        },
        l = [o.j8.done, a.Qm.done, o.p3],
        c = (0, r.createEffect)(e => (0, i.MU)({
          url: "/game/history",
          method: "GET",
          params: e
        })),
        u = (0, r.createEffect)(e => (0, i.MU)({
          url: "/prizes/history",
          method: "GET",
          params: e
        })),
        d = (0, r.createEvent)(),
        f = (0, r.createStore)([]).on(c.done, (e, {
          params: t,
          result: n
        }) => t.cursor ? [...e, ...n.entries] : n.entries).reset([d, ...l]),
        p = (0, r.createStore)(null).on(c.doneData, (e, t) => t.next_cursor).reset([d, ...l]),
        m = (0, r.createStore)(s).on(c.done, (e, {
          params: t
        }) => t.cursor ? e : {
          fetchedAt: Date.now(),
          tourId: t.tour_id ?? null
        }).reset([d, ...l]),
        h = (0, r.createStore)([]).on(u.done, (e, {
          params: t,
          result: n
        }) => t.cursor ? [...e, ...n.entries] : n.entries).reset([d, ...l]),
        g = (0, r.createStore)(null).on(u.doneData, (e, t) => t.next_cursor).reset([d, ...l]),
        x = (0, r.createStore)(s).on(u.done, (e, {
          params: t
        }) => t.cursor ? e : {
          fetchedAt: Date.now(),
          tourId: t.tour_id ?? null
        }).reset([d, ...l])
    },
    2688: function (e, t, n) {
      n.d(t, {
        XN: function () {
          return f
        },
        Lz: function () {
          return l
        },
        AS: function () {
          return c
        },
        kK: function () {
          return p
        }
      });
      var r = n(7995),
        a = n(5595),
        o = n(7795),
        i = n(3546);
      const s = {
          fetchedAt: null,
          tourId: null
        },
        l = (0, r.createEffect)(e => (0, i.MU)({
          url: "/leaderboard/daily",
          method: "GET",
          params: e
        })),
        c = (0, r.createEffect)(e => (0, i.MU)({
          url: "/leaderboard/tour",
          method: "GET",
          params: e
        })),
        u = [(0, r.createEvent)(), a.L2.done, a.Qm.done, o.j8.done, o.p3],
        d = e => ({
          entries: (0, r.createStore)([]).on(e.done, (e, {
            params: t,
            result: n
          }) => t.cursor ? [...e, ...n.entries] : n.entries).reset([...u]),
          cursor: (0, r.createStore)(null).on(e.doneData, (e, t) => t.next_cursor).reset([...u]),
          myEntry: (0, r.createStore)(null).on(e.doneData, (e, t) => t.my_entry).reset([...u]),
          cache: (0, r.createStore)(s).on(e.done, (e, {
            params: t
          }) => t.cursor ? e : {
            fetchedAt: Date.now(),
            tourId: t.tour_id ?? null
          }).reset([...u])
        }),
        f = d(l),
        p = d(c)
    },
    8156: function (e, t, n) {
      n.d(t, {
        c: function () {
          return o
        },
        Z: function () {
          return r
        }
      });
      const r = (0, n(38).createGate)();
      var a = n(7995);
      const o = (0, a.createStore)("");
      (0, a.sample)({
        clock: r.open,
        fn: e => e,
        target: o
      })
    },
    7795: function (e, t, n) {
      n.d(t, {
        Pm: function () {
          return g
        },
        Q9: function () {
          return h
        },
        xf: function () {
          return l
        },
        Qe: function () {
          return i
        },
        bI: function () {
          return c
        },
        xd: function () {
          return s
        },
        eD: function () {
          return u
        },
        Vk: function () {
          return d
        },
        p3: function () {
          return m
        },
        xz: function () {
          return f
        },
        sm: function () {
          return p
        },
        j8: function () {
          return o
        },
        Yu: function () {
          return w
        }
      });
      var r = n(7995),
        a = n(3546);
      const o = (0, r.createEffect)(e => (0, a.MU)({
          url: "/user/sync/",
          method: "POST",
          data: e,
          withCredentials: !0
        })),
        i = (0, r.createEffect)(e => (0, a.MU)({
          url: "/user/summary/",
          method: "GET",
          params: e?.refreshBetProgress ? {
            refresh_bet_progress: !0
          } : void 0,
          withCredentials: !0
        })),
        s = (0, r.createEffect)(() => (0, a.MU)({
          url: "/admin/attempts/reset/",
          method: "POST",
          withCredentials: !0
        })),
        l = (0, r.createEffect)(() => (0, a.MU)({
          url: "/admin/attempts/add/",
          method: "POST",
          withCredentials: !0
        })),
        c = (0, r.createEffect)(() => (0, a.MU)({
          url: "/admin/attempts/grant-bet-step/",
          method: "POST",
          withCredentials: !0
        })),
        u = (0, r.createEffect)(() => (0, a.MU)({
          url: "/admin/attempts/bet-progress/reset/",
          method: "POST",
          withCredentials: !0
        })),
        d = (0, r.createEffect)(() => (0, a.MU)({
          url: "/admin/daily-limit/reset/",
          method: "POST",
          withCredentials: !0
        })),
        f = (0, r.createEvent)(),
        p = (0, r.createEvent)(),
        m = (0, r.createEvent)(),
        h = (0, r.createStore)(null).on(o.doneData, (e, t) => t).on(i.doneData, (e, t) => t).on(f, (e, t) => e ? {
          ...e,
          attempts: {
            ...e.attempts,
            balance: t
          }
        } : e).on(p, (e, t) => e ? {
          ...e,
          personal_stats: {
            ...t,
            games_played: e.personal_stats.games_played + 1
          }
        } : e).reset(m),
        g = ((0, r.createStore)(null).on(o.failData, (e, t) => t).on(i.failData, (e, t) => t).reset([o, i, m]), (0, r.createStore)(!1).on(o.pending, (e, t) => t).on(i.pending, (e, t) => t)),
        x = (0, r.createEffect)(e => new Promise(t => {
          setTimeout(() => {
            t(e)
          }, 2e3)
        })),
        y = (0, r.createStore)(0).on(x, e => e + 1).reset(o.done);
      (0, r.sample)({
        clock: o.fail,
        filter: y.map(e => e < 3),
        fn: ({
          params: e
        }) => e,
        target: x
      }), (0, r.sample)({
        clock: x.doneData,
        filter: o.pending.map(e => !e),
        target: o
      });
      var b = n(2427);
      const v = (e, t) => {
          const n = Date.parse(e),
            r = Date.parse(t);
          return Number.isFinite(n) && Number.isFinite(r) ? Math.max(0, n - r) : 0
        },
        w = (e, t) => {
          const [n, r] = (0, b.useState)(() => v(e, t));
          return (0, b.useEffect)(() => {
            const n = Date.now() + v(e, t);
            let a = !1;
            const o = () => {
              const e = Math.max(0, n - Date.now());
              r(e), 0 !== e || a || (a = !0, i())
            };
            o();
            const s = window.setInterval(o, 1e3);
            return () => window.clearInterval(s)
          }, [e, t]), n
        }
    },
    9140: function (e, t, n) {
      n.d(t, {
        uz: function () {
          return s
        },
        Oy: function () {
          return l
        },
        Ul: function () {
          return o
        },
        ZT: function () {
          return i
        }
      });
      var r = n(7995),
        a = n(3546);
      const o = (0, r.createEffect)(e => (0, a.MU)({
          url: "/user/results",
          method: "GET",
          params: {
            tour_id: e
          },
          withCredentials: !0
        })),
        i = (0, r.createEvent)(),
        s = (0, r.createStore)(null).on(o.doneData, (e, t) => t).reset(i),
        l = (0, r.createStore)(null).on(o.failData, (e, t) => t).reset([o, i])
    },
    5544: function (e, t, n) {
      n.d(t, {
        Mq: function () {
          return s
        },
        rO: function () {
          return l
        },
        Xz: function () {
          return o
        }
      });
      var r = n(7995);
      const a = (0, r.createEvent)(),
        o = (0, r.createEvent)(),
        i = (0, r.createEffect)(e => {
          window && (window?.webkit?.messageHandlers?.message?.postMessage?.(e, "*"), window?.Android?.postMessage?.(JSON.stringify(e)))
        }),
        s = (0, r.createStore)(!1);
      const l = (0, n(38).createGate)();
      (0, r.sample)({
        clock: l.state,
        fn: e => e?.isWebView ?? !1,
        target: a
      }), (0, r.sample)({
        clock: o,
        target: i
      }), (0, r.sample)({
        clock: a,
        fn: e => e ?? !1,
        target: s
      })
    },
    3040: function (e, t, n) {
      n.d(t, {
        MP: function () {
          return B
        },
        _x: function () {
          return L
        },
        qB: function () {
          return G
        }
      });
      var r = n(2427),
        a = n(38),
        o = n(1208),
        i = n(5424),
        s = n(7871),
        l = n(8591),
        c = n(5918),
        u = n(6918);
      const d = s.default.div(["display:flex;justify-content:flex-end;gap:40px;padding:40px 16px var(--navigation-bottom);flex-direction:column;overflow:hidden;border-radius:32px 32px 0 0;background:linear-gradient(180deg,#578fc4 0%,#0f4366 100%);"]),
        f = s.default.div(["display:flex;align-items:center;gap:24px;flex-direction:column;"]),
        p = s.default.div(["display:flex;align-items:center;gap:12px;flex-direction:column;text-align:center;"]),
        m = s.default.h2(["margin:0;color:var(--text-primary,#fff);font-family:", ";font-size:24px;font-weight:500;line-height:28px;font-feature-settings:'liga' off,'clig' off;"], u.pQ.onyOne),
        h = s.default.p(["margin:0;color:var(--transparent-light-75,rgb(255 255 255 / 75%));font-family:", ";font-size:16px;font-weight:400;line-height:22px;font-feature-settings:'liga' off,'clig' off;"], u.pQ.onyOne),
        g = s.default.div(["display:flex;align-items:center;gap:4px;width:100%;"]),
        x = s.default.div(["display:flex;justify-content:center;gap:6px;width:100%;"]),
        y = s.default.span(["flex:0 0 16px;width:16px;height:32px;border-radius:8px;background:", ";"], ({
          $spent: e
        }) => e ? "rgb(255 255 255 / 75%)" : "var(--brand-yellow-active, #f8f700)"),
        b = (0, s.keyframes)(["from{width:0;flex-basis:0;opacity:0;transform:scaleX(0);}to{width:16px;flex-basis:16px;opacity:1;transform:scaleX(1);}"]),
        v = s.default.div(["display:flex;justify-content:center;align-items:center;gap:6px;flex:", ";transition:flex-grow 500ms cubic-bezier(0.22,1,0.36,1);"], ({
          $centered: e
        }) => e ? "1 1 auto" : "0 0 auto"),
        w = (0, s.default)(y)(["transform-origin:center;animation:", " 320ms cubic-bezier(0.22,1,0.36,1) both;"], b),
        j = (0, s.keyframes)(["from{opacity:1;transform:scaleX(1);}to{opacity:0;transform:scaleX(0.45);}"]),
        _ = s.default.div(["display:flex;flex:1 1 0;overflow:hidden;align-items:center;min-width:0;height:32px;padding:0 8px;position:relative;border-radius:8px;background:var(--transparent-light-10,rgb(255 255 255 / 10%));color:", ";transform-origin:left center;animation:", ";&::before{width:", ";min-width:", ";position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--brand-yellow-active,#f8f700);content:'';}"], ({
          $isCurrent: e
        }) => e ? "#fff" : "rgb(255 255 255 / 30%)", ({
          $completing: e
        }) => e ? (0, s.css)(["", " 260ms ease-in both"], j) : "none", ({
          $fill: e
        }) => 100 * Math.max(0, Math.min(1, e)) + "%", ({
          $isCurrent: e
        }) => e ? "2px" : "0"),
        S = s.default.span(["flex:0 0 auto;width:16px;height:32px;border-radius:8px;background:", ";"], ({
          $spent: e
        }) => e ? "rgb(255 255 255 / 75%)" : "var(--brand-yellow-active, #f8f700)"),
        k = s.default.span(["overflow:hidden;position:relative;z-index:1;font-family:", ";font-size:13px;font-weight:500;line-height:16px;letter-spacing:0.13px;text-overflow:ellipsis;white-space:nowrap;"], u.pQ.onyOne),
        M = s.default.span(["width:", ";position:absolute;z-index:2;inset:0 auto 0 0;overflow:hidden;border-radius:inherit;pointer-events:none;"], ({
          $fill: e
        }) => 100 * Math.max(0, Math.min(1, e)) + "%"),
        E = (0, s.default)(k)(["position:absolute;top:50%;left:8px;color:#090a0a;transform:translateY(-50%);"]),
        C = s.default.div(["display:flex;align-items:center;width:100%;height:56px;position:relative;"]),
        D = s.default.div(["display:flex;width:100%;padding:", ";"], ({
          $withClose: e
        }) => e ? "0 68px" : "0 52px"),
        $ = (0, s.default)(l.m)(["width:100%;"]),
        I = (0, s.default)(c.K)(["position:absolute;top:0;right:0;"]);
      var T = n(4848);
      const U = ({
          allAttemptsSpent: e,
          dailyLimit: t,
          usedToday: n,
          onClose: r,
          onTraining: a
        }) => (0, T.jsxs)(d, {
          children: [(0, T.jsxs)(f, {
            children: [(0, T.jsxs)(p, {
              children: [(0, T.jsx)(m, {
                children: e ? "Ты потратил всё" : "Ты набрал максимум"
              }), (0, T.jsx)(h, {
                children: e ? (0, T.jsxs)(T.Fragment, {
                  children: ["Сегодня получить попытки больше не выйдет.", (0, T.jsx)("br", {}), "Но ты можешь потренировать свои навыки в игре бесплатно"]
                }) : (0, T.jsxs)(T.Fragment, {
                  children: ["Сегодня получить больше попыток не выйдет.", (0, T.jsx)("br", {}), "Успей потратить оставшиеся попытки до обновления"]
                })
              })]
            }), (0, T.jsx)(x, {
              "aria-label": "Состояние попыток",
              children: Array.from({
                length: t
              }, (e, t) => (0, T.jsx)(y, {
                $spent: t < n,
                "aria-hidden": "true"
              }, t))
            })]
          }), (0, T.jsxs)(C, {
            children: [(0, T.jsx)(D, {
              $withClose: e,
              children: (0, T.jsx)($, {
                onClick: e ? a : r,
                variant: "secondary",
                children: e ? "На тренировку" : "Понятно"
              })
            }), e && (0, T.jsx)(I, {
              "aria-label": "Закрыть",
              icon: "cancel",
              onClick: r
            })]
          })]
        }),
        A = (e, t) => `${Math.round(e).toLocaleString("ru-RU")} ₽/${t.toLocaleString("ru-RU")} ₽`,
        O = ({
          animatedAttemptsCount: e,
          attemptsPerStep: t,
          completedSteps: n,
          completingStep: r,
          displayedBetSum: a,
          displayedUsedToday: o,
          hasAnimation: s,
          stepRub: l,
          onClose: c,
          onGoToLine: u
        }) => (0, T.jsxs)(d, {
          children: [(0, T.jsxs)(f, {
            children: [(0, T.jsxs)(p, {
              children: [(0, T.jsx)(m, {
                children: "Получи попытки"
              }), (0, T.jsxs)(h, {
                children: ["Выполни условие и получи ", t, " ", "попытки. ", (0, T.jsx)("br", {}), " ", "Максимум в", " ", "сутки можно накопить и потратить 10", " ", "попыток"]
              })]
            }), s ? (0, T.jsxs)(g, {
              "aria-label": "Прогресс получения попыток",
              children: [(0, T.jsx)(v, {
                $centered: n === i.lH,
                children: Array.from({
                  length: e
                }, (e, t) => (0, T.jsx)(w, {
                  $spent: t < o,
                  "aria-hidden": "true"
                }, t))
              }), Array.from({
                length: i.lH - n
              }, (e, t) => {
                const o = n + t,
                  i = 0 === t ? a - n * l : 0,
                  s = i / l,
                  c = A(i, l);
                return (0, T.jsxs)(_, {
                  $completing: 0 === t && r,
                  $fill: s,
                  $isCurrent: 0 === t,
                  children: [(0, T.jsx)(k, {
                    children: c
                  }), (0, T.jsx)(M, {
                    $fill: s,
                    children: (0, T.jsx)(E, {
                      children: c
                    })
                  })]
                }, o)
              })]
            }) : (0, T.jsxs)(g, {
              "aria-label": "Прогресс получения попыток",
              children: [0 === n ? (0, T.jsx)(S, {
                $spent: o > 0,
                "aria-hidden": "true"
              }) : (0, T.jsx)(v, {
                $centered: !1,
                children: Array.from({
                  length: e
                }, (e, t) => (0, T.jsx)(y, {
                  $spent: t < o,
                  "aria-hidden": "true"
                }, t))
              }), Array.from({
                length: i.lH - n
              }, (e, t) => {
                const r = 0 === t ? a - n * l : 0,
                  o = r / l,
                  i = A(r, l);
                return (0, T.jsxs)(_, {
                  $completing: !1,
                  $fill: o,
                  $isCurrent: 0 === t,
                  children: [(0, T.jsx)(k, {
                    children: i
                  }), (0, T.jsx)(M, {
                    $fill: o,
                    children: (0, T.jsx)(E, {
                      children: i
                    })
                  })]
                }, n + t)
              })]
            })]
          }), (0, T.jsxs)(C, {
            children: [(0, T.jsx)(D, {
              $withClose: !0,
              children: (0, T.jsxs)($, {
                onClick: u,
                children: ["В", " ", "линию"]
              })
            }), (0, T.jsx)(I, {
              "aria-label": "Закрыть",
              icon: "cancel",
              onClick: c
            })]
          })]
        });
      var z = n(7795),
        P = n(8633),
        Q = n(9292),
        R = n(5887);
      const B = "attempts-info",
        L = ({
          closeDrawer: e,
          meta: t
        }) => {
          const n = (0, a.useUnit)(z.Q9),
            s = (0, o.useNavigate)(),
            {
              navigateToSport: l
            } = (0, P.o)(),
            {
              mainMakeBetAgree: c,
              mainMakeBetClose: u,
              mainMakeBetLoad: d,
              mainMakeBetPractice: f
            } = (0, R.A)(),
            p = (0, i.es)(t) ? t : null,
            m = (0, i.jj)(t) ? 1 : 0,
            h = n?.bet_progress.step_rub ?? 1e3,
            g = n?.bet_progress.attempts_per_step ?? 3,
            {
              animationComplete: x,
              completingStep: y,
              displayedBetSum: b,
              revealedSteps: v
            } = (0, i.vl)(p, h),
            w = !!n && (n.attempts.balance + n.attempts.used_today + m >= n.attempts.daily_limit || n.bet_progress.attempts_from_bets_today >= n.bet_progress.max_bet_attempts),
            j = !!n && (0, i.cO)(n.attempts, n.bet_progress, m),
            _ = Math.min(i.lH, Math.floor((n?.bet_progress.attempts_from_bets_today ?? 0) / g)),
            S = p ? v : _,
            k = (n?.bet_progress.bet_sum ?? 0) % h,
            M = p ? b : S * h + k,
            E = p?.previousUsedToday ?? (n?.attempts.used_today ?? 0) + m,
            C = p ? x : w;
          (0, r.useEffect)(() => {
            d()
          }, [d]);
          const D = () => {
              u(), e()
            },
            $ = () => {
              f(), e(), s("/game?mode=training")
            };
          return C && n ? (0, T.jsx)(U, {
            allAttemptsSpent: !p && j,
            dailyLimit: n.attempts.daily_limit,
            usedToday: E,
            onClose: D,
            onTraining: $
          }) : (0, T.jsx)(O, {
            animatedAttemptsCount: 1 + S * g,
            attemptsPerStep: g,
            completedSteps: S,
            completingStep: y,
            displayedBetSum: M,
            displayedUsedToday: E,
            hasAnimation: null !== p,
            stepRub: h,
            onClose: D,
            onGoToLine: () => {
              n && (0, Q.a6)(n), c(), e(), l()
            }
          })
        };
      var N = n(2006);
      const G = () => {
        (0, N.sd)(B), (0, z.Qe)({
          refreshBetProgress: !0
        }).catch(() => {})
      }
    },
    5424: function (e, t, n) {
      n.d(t, {
        cO: function () {
          return c
        },
        es: function () {
          return s
        },
        jj: function () {
          return l
        },
        lH: function () {
          return a
        },
        vl: function () {
          return u
        }
      });
      var r = n(2427);
      const a = 3,
        o = e => new Promise(t => window.setTimeout(t, e)),
        i = (e, t, n, r, a) => new Promise(o => {
          const i = performance.now(),
            s = l => {
              if (a()) return void o();
              const c = Math.min(1, (l - i) / n);
              r(e + (t - e) * (1 - (1 - c) ** 3)), c < 1 ? requestAnimationFrame(s) : o()
            };
          requestAnimationFrame(s)
        }),
        s = e => {
          if (!e || "object" != typeof e) return !1;
          const t = e;
          return "bet-return" === t.mode && "number" == typeof t.previousBetSum && "number" == typeof t.previousUsedToday && "number" == typeof t.betAmount
        },
        l = e => !(!e || "object" != typeof e) && "spent-all" === e.mode,
        c = (e, t, n = 0) => e.balance <= 0 && (e.remaining_today - n <= 0 || t.attempts_from_bets_today >= t.max_bet_attempts),
        u = (e, t) => {
          const n = t * a,
            s = Math.min(n, Math.max(0, e?.previousBetSum ?? 0)),
            [l, c] = (0, r.useState)(s),
            [u, d] = (0, r.useState)(!1),
            [f, p] = (0, r.useState)(!1),
            [m, h] = (0, r.useState)(() => Math.min(a, Math.floor(s / t)));
          return (0, r.useEffect)(() => {
            if (!e) return;
            let r = !1;
            const l = () => r,
              u = Math.min(n, Math.max(s, s + Math.max(0, e.betAmount)));
            return c(s), d(!1), p(!1), h(Math.min(a, Math.floor(s / t))), (async () => {
              await o(300);
              let e = s;
              for (; !r && e < u;) {
                const n = Math.min(u, (Math.floor(e / t) + 1) * t),
                  s = n - e,
                  d = Math.max(180, s / t * 1e3);
                await i(e, n, d, c, l), e = n;
                if (e > 0 && e % t === 0) {
                  if (p(!0), await o(260), r) return;
                  h(e => Math.min(a, e + 1)), p(!1), await o(500)
                }
              }
              r || u < n || (await o(500), r || d(!0))
            })(), () => {
              r = !0
            }
          }, [s, n, e, t]), {
            animationComplete: u,
            completingStep: f,
            displayedBetSum: l,
            revealedSteps: m
          }
        }
    },
    9292: function (e, t, n) {
      n.d(t, {
        Kg: function () {
          return o
        },
        L7: function () {
          return l
        },
        a6: function () {
          return s
        },
        bx: function () {
          return c
        },
        vo: function () {
          return u
        }
      });
      const r = "bb-tower:attempts-return:v1";
      let a = "";
      const o = e => {
          a = e
        },
        i = () => {
          try {
            localStorage.removeItem(r)
          } catch {}
        },
        s = e => {
          const t = {
            attemptsFromBetsToday: e.bet_progress.attempts_from_bets_today,
            betSum: e.bet_progress.bet_sum,
            createdAt: Date.now(),
            moscowDate: e.server_time.slice(0, 10),
            sourceEntryId: a,
            tourId: e.tour.id,
            usedToday: e.attempts.used_today,
            userId: e.user.user_id
          };
          try {
            localStorage.setItem(r, JSON.stringify(t))
          } catch {}
        },
        l = (e, t = {}) => {
          let n = null;
          try {
            n = localStorage.getItem(r)
          } catch {
            return null
          }
          if (!n) return null;
          const a = (e => {
            try {
              const t = JSON.parse(e),
                n = [t.attemptsFromBetsToday, t.betSum, t.createdAt, t.tourId, t.usedToday, t.userId];
              return "string" != typeof t.moscowDate || "string" != typeof t.sourceEntryId || n.some(e => "number" != typeof e) ? null : t
            } catch {
              return null
            }
          })(n);
          return !!a && a.userId === e.user.user_id && a.tourId === e.tour.id && a.moscowDate === e.server_time.slice(0, 10) ? a.sourceEntryId === t.excludeSourceEntryId ? null : a : (i(), null)
        },
        c = () => {
          i()
        },
        u = e => null !== l(e)
    },
    5043: function (e, t, n) {
      n.d(t, {
        l: function () {
          return f
        },
        $: function () {
          return p
        }
      });
      var r = n(2427),
        a = n(1208),
        o = n(7871),
        i = n(5839),
        s = n(8591),
        l = n(5918),
        c = n(6918),
        u = n(5887),
        d = n(4848);
      const f = "floors-info",
        p = ({
          closeDrawer: e
        }) => {
          const t = (0, a.useNavigate)(),
            {
              mainInformationAgree: n,
              mainInformationClose: o,
              mainInformationLoad: s
            } = (0, u.A)();
          (0, r.useEffect)(() => {
            s()
          }, [s]);
          return (0, d.jsxs)(m, {
            children: [(0, d.jsx)(h, {
              alt: "",
              "aria-hidden": "true",
              src: i
            }), (0, d.jsx)(g, {
              children: (0, d.jsxs)(x, {
                children: [(0, d.jsx)(y, {
                  children: "Зарабатывай этажи"
                }), (0, d.jsx)(b, {
                  children: "Чем их больше, тем выше твоё место в рейтинге для розыгрыша"
                })]
              })
            }), (0, d.jsxs)(v, {
              children: [(0, d.jsx)(w, {
                children: (0, d.jsx)(j, {
                  onClick: () => {
                    n(), e(), t("/rating")
                  },
                  variant: "secondary",
                  children: "Смотреть рейтинг"
                })
              }), (0, d.jsx)(_, {
                "aria-label": "Закрыть",
                icon: "cancel",
                onClick: () => {
                  o(), e()
                }
              })]
            })]
          })
        },
        m = o.default.div(["display:flex;justify-content:flex-end;gap:40px;padding:24px 16px var(--navigation-bottom);flex-direction:column;position:relative;"]),
        h = o.default.img(["width:240px;height:240px;position:absolute;top:-239px;left:50%;z-index:2;transform:translateX(-50%);object-fit:contain;"]),
        g = o.default.div(["display:flex;align-items:center;flex-direction:column;"]),
        x = o.default.div(["display:flex;align-items:center;gap:12px;flex-direction:column;text-align:center;"]),
        y = o.default.h2(["margin:0;color:var(--text-primary,#fff);font-family:", ";font-size:24px;font-weight:500;line-height:28px;font-feature-settings:'liga' off,'clig' off;"], c.pQ.onyOne),
        b = o.default.p(["margin:0;max-width:343px;color:var(--transparent-light-75,rgb(255 255 255 / 75%));font-family:", ";font-size:16px;font-weight:400;line-height:22px;font-feature-settings:'liga' off,'clig' off;"], c.pQ.onyOne),
        v = o.default.div(["display:flex;align-items:center;width:100%;height:56px;position:relative;"]),
        w = o.default.div(["display:flex;width:100%;padding:0 68px;"]),
        j = (0, o.default)(s.m)(["width:100%;"]),
        _ = (0, o.default)(l.K)(["position:absolute;top:0;right:0;"])
    },
    8633: function (e, t, n) {
      n.d(t, {
        o: function () {
          return s
        }
      });
      var r = n(38),
        a = n(9658),
        o = n(609),
        i = n(5544);
      const s = () => {
        const [e, t] = (0, r.useUnit)([i.Mq, o.l]);
        return {
          navigateToSport: () => {
            e ? (0, i.Xz)({
              action: a.qh.GoTo,
              route: a.L.Sport,
              module_id: a.JN.Sport,
              sport: 2,
              sport_id: 2
            }) : t?.send("host_change_route", "/sport/football")
          },
          openSupportChat: () => {
            t?.send("host_open_support_chat")
          },
          navigateToActions: () => {
            e ? (0, i.Xz)({
              action: a.qh.GoTo,
              route: a.L.Actions
            }) : t?.send("host_change_route", "/actions")
          }
        }
      }
    },
    6948: function (e, t, n) {
      n.d(t, {
        O: function () {
          return o
        }
      });
      var r = n(719),
        a = n(4848);
      const o = () => (0, a.jsx)(r.$, {
        onClick: () => {
          location.reload()
        },
        title: "Перезагрузить"
      })
    }
  }
]);