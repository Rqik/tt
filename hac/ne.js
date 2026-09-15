"use strict";
(self.webpackChunksirena_tower_game = self.webpackChunksirena_tower_game || []).push([[330], {
    5534: function(e, t, i) {
        i.d(t, {
            U: function() {
                return et
            }
        });
        var s = i(2427)
          , r = i(7871)
          , n = i(38)
          , o = i(1208);
        var a = i(414);
        const l = e => Math.min(1.05, Math.max(-.05, e))
          , d = e => !1 !== e?.isTrusted && (!0 !== e?.hidden && ("undefined" == typeof document || !document.hidden));
        var c = i(5595)
          , p = i(3546);
        const h = e => Math.max(1, Math.round(e.current))
          , u = () => {
            const e = p.SP.defaults.headers.common.Authorization
              , t = "string" == typeof e ? e : void 0;
            return {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                ...t ? {
                    Authorization: t
                } : {}
            }
        }
          , f = (e, t) => {
            const i = p.SP.defaults.baseURL ?? "";
            fetch(`${i}${e}`, {
                method: "POST",
                headers: u(),
                body: JSON.stringify(t),
                keepalive: !0
            }).catch( () => {}
            )
        }
          , m = (e, t) => {
            f("/game/session/ping", {
                session_id: e.session_id,
                session_holder_id: e.session_holder_id,
                duration_ms: t
            })
        }
          , g = ({elapsedRef: e, enabled: t=!0, gameState: i, onSessionBlocked: r, onStartError: o}) => {
            const a = (0,
            s.useRef)(null)
              , l = (0,
            s.useRef)(!1)
              , u = (0,
            s.useRef)(null)
              , g = (0,
            s.useRef)(0)
              , x = (0,
            s.useRef)([])
              , b = (0,
            s.useRef)(0)
              , [y,v,w,k,j] = (0,
            n.useUnit)([c.vH, c.wW, c.PK, c.Qm.pending, c.L2.pending]);
            (0,
            s.useEffect)( () => {
                u.current = y
            }
            , [y]),
            (0,
            s.useEffect)( () => {
                g.current = 0,
                x.current = []
            }
            , [y?.session_id]);
            const R = (0,
            s.useCallback)(async () => {
                if (!t)
                    return;
                const i = u.current;
                if (!i || 0 === x.current.length)
                    return;
                const s = x.current.splice(0, 50);
                try {
                    await (0,
                    c.E)({
                        session_id: i.session_id,
                        session_holder_id: i.session_holder_id,
                        duration_ms: h(e),
                        taps: s
                    })
                } catch {
                    x.current.unshift(...s)
                }
            }
            , [e, t])
              , M = (0,
            s.useCallback)(i => {
                if (!t)
                    return;
                if (!d(i.pointer))
                    return;
                const s = i.pointer;
                x.current.push({
                    tap_index: g.current++,
                    timestamp_ms: Math.round(e.current),
                    block_offset: i.blockOffset,
                    result: i.result,
                    floors_after: i.floorsAfter,
                    nx: s?.nx,
                    ny: s?.ny,
                    pointer_type: s?.pointerType,
                    radius: s?.radius,
                    is_trusted: s?.isTrusted ?? !0,
                    hidden: s?.hidden ?? !1
                }),
                x.current.length >= 10 && R()
            }
            , [e, t, R])
              , z = (0,
            s.useCallback)(async () => {
                if (!t || l.current)
                    return null;
                l.current = !0;
                try {
                    return await (0,
                    c.L2)((0,
                    c.i$)())
                } catch (e) {
                    return l.current = !1,
                    o?.(e),
                    null
                }
            }
            , [t, o]);
            (0,
            s.useEffect)( () => {
                "idle" === i && (l.current = !1)
            }
            , [i]),
            (0,
            s.useEffect)( () => {
                t && y && R()
            }
            , [y, t, R]),
            (0,
            s.useEffect)( () => {
                if (!t || "playing" !== i)
                    return;
                const e = window.setInterval( () => {
                    R()
                }
                , 2e3);
                return () => window.clearInterval(e)
            }
            , [t, R, i]),
            (0,
            s.useEffect)( () => {
                if (!t || !y || "playing" !== i)
                    return;
                const s = window.setInterval( () => {
                    (0,
                    c.vx)({
                        session_id: y.session_id,
                        session_holder_id: y.session_holder_id,
                        duration_ms: h(e)
                    }).catch(e => {
                        e instanceof p.hD && ("session revoked" === e.code || "session not found" === e.code) && ((0,
                        c.S0)(),
                        r())
                    }
                    )
                }
                , 3e4);
                return () => window.clearInterval(s)
            }
            , [y, e, t, i, r]),
            (0,
            s.useEffect)( () => {
                if (!t)
                    return;
                const i = () => {
                    const e = Date.now();
                    return e - b.current < 500 || (b.current = e,
                    !1)
                }
                  , s = () => {
                    const t = u.current;
                    if (!t || i())
                        return;
                    const s = h(e);
                    ( (e, t, i) => {
                        0 !== t.length && f("/game/taps", {
                            session_id: e.session_id,
                            session_holder_id: e.session_holder_id,
                            duration_ms: i,
                            taps: t
                        })
                    }
                    )(t, x.current.splice(0, 50), s),
                    m(t, s)
                }
                  , r = () => {
                    if ("hidden" !== document.visibilityState)
                        return;
                    const t = u.current;
                    t && !i() && (R(),
                    m(t, h(e)))
                }
                ;
                return window.addEventListener("pagehide", s),
                document.addEventListener("visibilitychange", r),
                () => {
                    window.removeEventListener("pagehide", s),
                    document.removeEventListener("visibilitychange", r)
                }
            }
            , [e, t, R]),
            (0,
            s.useEffect)( () => {
                t && y && "gameover" === i && !k && a.current !== y.session_id && (a.current = y.session_id,
                (async () => {
                    await R(),
                    await (0,
                    c.Qm)({
                        session_id: y.session_id,
                        session_holder_id: y.session_holder_id,
                        duration_ms: h(e),
                        end_reason: "collapsed"
                    })
                }
                )())
            }
            , [y, e, t, k, R, i]);
            const S = (0,
            s.useCallback)( (t, i) => {
                if (!y)
                    return;
                const s = h(e);
                (t ? c.a7 : c.bF)({
                    session_id: y.session_id,
                    session_holder_id: y.session_holder_id,
                    duration_ms: s
                }).then( () => i(!t))
            }
            , [y, e]);
            return {
                activeSession: y,
                endedFloors: v?.floors,
                endPending: k,
                error: w,
                recordTap: M,
                startPending: j,
                startSession: z,
                togglePause: S
            }
        }
        ;
        i(633);
        var x = i(3684);
        const b = "game-start"
          , y = "game-end"
          , v = "block-clap"
          , w = "game-background"
          , k = 1
          , j = .5
          , R = .5
          , M = .8
          , z = .35;
        let S = null
          , C = null;
        const A = (e, t) => `${e.replace(/\/$/, "")}/assets/sound/${t}`
          , F = (e, t, i={}) => new Promise(s => {
            const r = n => {
                x.J.register(e, {
                    src: [t],
                    preload: !0,
                    html5: n,
                    ...i,
                    onload: () => s(),
                    onloaderror: () => {
                        n ? s() : r(!0)
                    }
                })
            }
            ;
            r(!1)
        }
        )
          , T = e => (S && C === e || (C = e,
        S = Promise.all([F(b, A(e, "start.mp3"), {
            volume: j
        }), F(y, A(e, "end.mp3"), {
            volume: R
        }), F(v, A(e, "clap.mp3"), {
            volume: M
        }), F(w, A(e, "background.mp3"), {
            loop: !0,
            volume: z
        })]).then( () => {}
        )),
        S)
          , D = {
            playBackground() {
                x.J.isPlaying(w) || x.J.play(w)
            },
            applyVolumes() {
                x.J.setGlobalVolume(k),
                x.J.setVolume(b, j),
                x.J.setVolume(y, R),
                x.J.setVolume(v, M),
                x.J.setVolume(w, z)
            },
            previewStart() {
                x.J.stop(b),
                x.J.play(b)
            },
            previewEnd() {
                x.J.stop(y),
                x.J.play(y)
            },
            previewClap() {
                x.J.play(v)
            },
            toggleBackground() {
                x.J.stop(w),
                x.J.play(w)
            },
            start() {
                x.J.stop(y),
                x.J.play(b),
                this.playBackground()
            },
            end() {
                x.J.stop(w),
                x.J.play(y)
            },
            clap() {
                x.J.play(v)
            },
            pause() {
                x.J.pause(w)
            },
            resume() {
                x.J.play(w)
            },
            stop() {
                x.J.stop(b),
                x.J.stop(y),
                x.J.stop(w)
            }
        };
        var _ = i(4755)
          , $ = i(3872)
          , L = i(5307)
          , P = i(5804)
          , O = i(8383)
          , E = i(5723);
        function B(e) {
            const t = function() {
                const e = navigator.userAgent;
                return /Android/i.test(e) && !/Firefox/i.test(e)
            }()
              , i = new _.Scene;
            i.fog = new _.Fog(3809134,30,80);
            const s = e.clientWidth || window.innerWidth
              , r = e.clientHeight || window.innerHeight
              , n = 10
              , o = s / r
              , a = new _.OrthographicCamera(-10 * o / 2,n * o / 2,5,-5,.1,200);
            a.position.set(10, 11, 10),
            a.lookAt(0, 0, 0);
            const l = new _.WebGLRenderer({
                alpha: !0,
                antialias: !0,
                powerPreference: t ? "default" : "high-performance"
            })
              , d = (window.matchMedia("(pointer: coarse)").matches,
            t ? 1.75 : 2)
              , c = Math.min(window.devicePixelRatio, d);
            l.setClearColor(0, 0),
            l.setPixelRatio(c),
            l.setSize(s, r),
            l.shadowMap.enabled = !t,
            l.shadowMap.type = _.PCFShadowMap,
            l.toneMapping = _.ACESFilmicToneMapping,
            l.toneMappingExposure = 1.05,
            e.appendChild(l.domElement);
            const p = new _.HemisphereLight(16772859,3809134,.55);
            i.add(p);
            const h = new _.DirectionalLight(16774112,1.6);
            h.position.set(8, 18, 6),
            h.castShadow = !0,
            h.shadow.mapSize.set(2048, 2048),
            h.shadow.camera.near = 1,
            h.shadow.camera.far = 60,
            h.shadow.camera.left = -12,
            h.shadow.camera.right = 12,
            h.shadow.camera.top = 16,
            h.shadow.camera.bottom = -12,
            h.shadow.bias = -5e-4,
            h.shadow.normalBias = .02,
            i.add(h);
            const u = new _.DirectionalLight(9334271,.6);
            u.position.set(-6, 4, -8),
            i.add(u);
            const f = new L.s(l);
            f.setPixelRatio(c),
            f.setSize(s, r),
            f.addPass(new P.A(i,a));
            const m = new O.C(new _.Vector2(s,r),.55,.7,1);
            f.addPass(m),
            f.addPass(new E.X);
            const g = new ResizeObserver(e => {
                const t = e[0];
                if (!t)
                    return;
                const {width: i, height: s} = t.contentRect;
                if (0 === i || 0 === s)
                    return;
                const r = i / s;
                a.left = -10 * r / 2,
                a.right = n * r / 2,
                a.top = 5,
                a.bottom = -5,
                a.updateProjectionMatrix(),
                l.setSize(i, s),
                l.setPixelRatio(c),
                f.setPixelRatio(c),
                f.setSize(i, s),
                m.resolution.set(i, s)
            }
            );
            g.observe(e);
            return {
                scene: i,
                camera: a,
                renderer: l,
                composer: f,
                bloom: m,
                keyLight: h,
                ambient: p,
                dispose: () => {
                    g.disconnect(),
                    l.forceContextLoss(),
                    l.dispose();
                    const e = l.domElement;
                    e.parentElement?.removeChild(e)
                }
            }
        }
        var I = i(150);
        const J = ["#ff7a5a", "#ffd166", "#06d6a0", "#4cc9f0", "#b14aed", "#ff5ea8", "#84d36f", "#f48c06", "#ef476f", "#118ab2"];
        function N(e) {
            const t = new _.Color(J[e % J.length])
              , i = {
                h: 0,
                s: 0,
                l: 0
            };
            return t.getHSL(i),
            i.h = (i.h + .013 * e) % 1,
            t.setHSL(i.h, i.s, i.l),
            t
        }
        const Y = new Map
          , Q = new Map
          , U = new Map
          , H = new Map;
        function q(e, t, i, s) {
            const r = function(e, t, i, s) {
                return `${e.toFixed(3)}|${t.toFixed(3)}|${i.toFixed(3)}|${function(e) {
                    return `${e.uMin.toFixed(4)}|${e.uMax.toFixed(4)}|${e.vMin.toFixed(4)}|${e.vMax.toFixed(4)}`
                }(s)}`
            }(e, t, i, s);
            let n = Q.get(r);
            if (!n) {
                if (n = function(e, t, i, s) {
                    const r = new _.BoxGeometry(e,t,i)
                      , n = r.groups.find(e => 2 === e.materialIndex)
                      , o = r.getIndex()
                      , a = r.getAttribute("uv");
                    if (!n || !o)
                        return r;
                    const l = new Set;
                    for (let e = n.start; e < n.start + n.count; e++) {
                        const t = o.getX(e);
                        if (l.has(t))
                            continue;
                        l.add(t);
                        const i = a.getX(t)
                          , r = a.getY(t);
                        a.setXY(t, _.MathUtils.lerp(s.uMin, s.uMax, i), _.MathUtils.lerp(s.vMin, s.vMax, r))
                    }
                    return a.needsUpdate = !0,
                    r
                }(e, t, i, s),
                Q.size >= 256) {
                    const e = Q.keys().next().value;
                    e && (Q.get(e)?.dispose(),
                    Q.delete(e))
                }
                Q.set(r, n)
            }
            return n
        }
        function W(e, t, i, s, r) {
            const n = function(e) {
                return `${e.topTextureUrl}|${e.leftColor}|${e.rightColor}`
            }(s);
            let o = U.get(n);
            o || (o = [],
            U.set(n, o));
            let a = o.pop();
            return a || (a = se(e, t, i, function(e) {
                let t = H.get(e);
                return t || (t = new _.Color(e),
                H.set(e, t)),
                t
            }(s.rightColor), s.topTextureUrl, s.leftColor, s.rightColor),
            a.castShadow = !0,
            a.receiveShadow = !0),
            a.geometry = q(e, t, i, r),
            re(a, 1),
            a.scale.set(1, 1, 1),
            a.position.set(0, 0, 0),
            a.quaternion.set(0, 0, 0, 1),
            {
                mesh: a,
                poolKey: n
            }
        }
        function V(e, t) {
            e.removeFromParent(),
            e.scale.set(1, 1, 1);
            const i = Array.isArray(e.material) ? e.material : [e.material];
            for (const e of i)
                e.transparent = !0,
                e.opacity = 1;
            let s = U.get(t);
            s || (s = [],
            U.set(t, s)),
            s.push(e)
        }
        const X = {
            uMin: 0,
            uMax: 1,
            vMin: 0,
            vMax: 1
        };
        const G = new Map
          , K = new _.TextureLoader;
        function Z(e) {
            return e.colorSpace = _.SRGBColorSpace,
            e.anisotropy = 8,
            e
        }
        async function ee(e) {
            await Promise.all(e.map(async e => {
                if (G.has(e))
                    return;
                const t = Z(await K.loadAsync(e));
                G.set(e, t)
            }
            ))
        }
        function te(e) {
            const t = G.get(e);
            if (t)
                return t;
            const i = Z(K.load(e));
            return G.set(e, i),
            i
        }
        function ie(e, t={}) {
            return new _.MeshStandardMaterial({
                color: e,
                roughness: .45,
                metalness: .05,
                emissive: e.clone().multiplyScalar(t.emissive ?? .08)
            })
        }
        function se(e, t, i, s, r, n="#c2135c", o="#ff4392", a=X) {
            const l = ie(new _.Color(n))
              , d = ie(new _.Color(o))
              , c = ie(s)
              , p = [d, d, new _.MeshBasicMaterial({
                map: te(r)
            }), c, l, l]
              , h = 0 === a.uMin && 1 === a.uMax && 0 === a.vMin && 1 === a.vMax ? function(e, t, i) {
                const s = `${e.toFixed(3)}|${t.toFixed(3)}|${i.toFixed(3)}`;
                let r = Y.get(s);
                return r || (r = new _.BoxGeometry(e,t,i),
                Y.set(s, r)),
                r
            }(e, t, i) : q(e, t, i, a)
              , u = new _.Mesh(h,p);
            return u.castShadow = !0,
            u.receiveShadow = !0,
            u
        }
        function re(e, t=1) {
            const i = Array.isArray(e.material) ? e.material : [e.material];
            for (const e of i)
                e.transparent = !0,
                e.opacity = t
        }
        function ne(e) {
            !0 === e.geometry.userData.disposeWithBlockMesh && e.geometry.dispose()
        }
        function oe(e) {
            if (Array.isArray(e.material)) {
                const t = new Set;
                for (const i of e.material)
                    t.has(i) || (t.add(i),
                    i.dispose())
            } else
                e.material.dispose()
        }
        const ae = (e, t, i) => {
            const s = Number.parseInt(e.slice(t, t + 8), 16);
            return Number.isFinite(s) ? s >>> 0 : i
        }
        ;
        var le = i(4779)
          , de = i(8255)
          , ce = i(5011)
          , pe = i(1627)
          , he = i(6971)
          , ue = i(6665)
          , fe = i(7375)
          , me = i(960)
          , ge = i(5796)
          , xe = i(520)
          , be = i(6224)
          , ye = i(1936)
          , ve = i(8482)
          , we = i(4916);
        const ke = [{
            texture: ce,
            left: "#c2135c",
            right: "#ff4392"
        }, {
            texture: le,
            left: "#1e4acc",
            right: "#4876ff"
        }, {
            texture: de,
            left: "#65b23c",
            right: "#aeff82"
        }, {
            texture: pe,
            left: "#c4c400",
            right: "#fffe3d"
        }, {
            texture: he,
            left: "#999999",
            right: "#e6e6e6"
        }, {
            texture: ue,
            left: "#5b5b5b",
            right: "#a3a3a3"
        }, {
            texture: fe,
            left: "#363636",
            right: "#464646"
        }, {
            texture: xe,
            left: "#c2135c",
            right: "#ff4392"
        }, {
            texture: me,
            left: "#1e4acc",
            right: "#4876ff"
        }, {
            texture: ge,
            left: "#65b23c",
            right: "#aeff82"
        }, {
            texture: be,
            left: "#c4c400",
            right: "#fffe3d"
        }, {
            texture: ye,
            left: "#999999",
            right: "#e6e6e6"
        }, {
            texture: ve,
            left: "#5b5b5b",
            right: "#a3a3a3"
        }, {
            texture: we,
            left: "#363636",
            right: "#464646"
        }];
        function je(e) {
            return ke[e % ke.length]
        }
        function Re(e, t, i, s) {
            if ("x" === t) {
                const t = e.uMax - e.uMin;
                return {
                    ...e,
                    uMin: e.uMin + t * i,
                    uMax: e.uMin + t * s
                }
            }
            const r = e.vMax - e.vMin;
            return {
                ...e,
                vMin: e.vMin + r * (1 - s),
                vMax: e.vMin + r * (1 - i)
            }
        }
        class Me {
            config = {
                blockHeight: .3,
                initialSize: 2.4,
                baseSpeed: 3.6,
                speedPerLevel: .12,
                maxSpeed: 9,
                perfectThreshold: .08,
                cameraOffsetY: 3.5,
                cameraEase: .06,
                bloomStrength: .55,
                bloomThreshold: 1,
                bloomRadius: .7,
                exposure: 1.05,
                shake: .12,
                towerFriction: 2.4,
                towerRestitution: 0,
                towerDensity: .6,
                towerLinearDamping: .5,
                towerAngularDamping: .7,
                gravity: -18
            };
            state = "idle";
            paused = !1;
            score = 0;
            streak = 0;
            placed = [];
            current = null;
            debris = [];
            skipNextRender = !1;
            lastTapAcceptedAt = 0;
            lastWarmupDurationMs = 0;
            debrisReserve = null;
            towerRng = null;
            cameraTargetY = 0;
            cameraSmoothedY = 0;
            cameraBaseOffset = new _.Vector3;
            shakeAmp = 0;
            scoreListeners = [];
            perfectListeners = [];
            stateListeners = [];
            cameraOffsetListeners = [];
            tapListeners = [];
            animationId = null;
            introDropAnimationId = null;
            perfFrameCount = 0;
            perfFrameDurationTotal = 0;
            perfLastFrameAt = null;
            perfLastReportAt = performance.now();
            perfLongFrames = 0;
            perfWorstFrame = 0;
            onScore(e) {
                this.scoreListeners.push(e)
            }
            onPerfect(e) {
                this.perfectListeners.push(e)
            }
            onState(e) {
                this.stateListeners.push(e)
            }
            onCameraOffset(e) {
                this.cameraOffsetListeners.push(e)
            }
            onTapOutcome(e) {
                this.tapListeners.push(e)
            }
            emitScore(e) {
                for (const t of this.scoreListeners)
                    t(e)
            }
            emitPerfect(e) {
                for (const t of this.perfectListeners)
                    t(e)
            }
            emitState(e) {
                for (const t of this.stateListeners)
                    t(e)
            }
            emitTapOutcome(e) {
                (0,
                I.u3)() && (0,
                I.MJ)("tap_outcome", {
                    blockOffset: Number(e.blockOffset.toFixed(4)),
                    floorsAfter: e.floorsAfter,
                    result: e.result
                });
                for (const t of this.tapListeners)
                    t(e)
            }
            timer = new _.Timer;
            constructor(e) {
                this.ctx = B(e),
                this.cameraBaseOffset.copy(this.ctx.camera.position),
                this.timer.connect(document)
            }
            async init(e="") {
                await Promise.all([$.default.init(), ee(ke.map( ({texture: e}) => e)), T(e)]),
                this.world = new $.default.World({
                    x: 0,
                    y: this.config.gravity,
                    z: 0
                }),
                this.buildPodium(),
                this.reset(),
                this.warmupColdPaths(),
                D.playBackground(),
                this.animate()
            }
            warmupColdPaths() {
                const e = performance.now()
                  , t = this.config.blockHeight
                  , i = .8 * this.config.initialSize
                  , s = this.config.initialSize
                  , r = []
                  , n = []
                  , o = [Re(X, "x", .2, .8), Re(X, "z", .15, .65), Re(X, "x", .4, .9)];
                for (const e of o)
                    q(i, t, s, e);
                for (const e of ke) {
                    r.push(this.addPlacedCollider(0, -100, 0, i, s)),
                    this.spawnDebris(0, -100, 0, .25, s, e.texture, e.left, e.right, o[0], this.config.baseSpeed, {
                        silent: !0
                    });
                    const t = this.debris.pop();
                    t && (this.world.removeRigidBody(t.body),
                    V(t.mesh, t.poolKey))
                }
                for (let e = 0; e < ke.length; e++) {
                    const r = je(e)
                      , a = se(i, t, s, N(e), r.texture, r.left, r.right, o[0]);
                    a.position.set(0, -100, 0),
                    this.ctx.scene.add(a),
                    n.push(a)
                }
                for (let e = 0; e < 4; e++)
                    this.world.step();
                this.ctx.renderer.render(this.ctx.scene, this.ctx.camera);
                for (const e of n)
                    this.ctx.scene.remove(e),
                    ne(e),
                    oe(e);
                for (const e of r)
                    this.world.removeRigidBody(e);
                this.lastWarmupDurationMs = Number((performance.now() - e).toFixed(2)),
                (0,
                I.u3)() && (0,
                I.MJ)("warmup_complete", {
                    appearances: ke.length,
                    durationMs: this.lastWarmupDurationMs,
                    movingMeshes: ke.length
                })
            }
            destroy() {
                D.stop(),
                null !== this.introDropAnimationId && (cancelAnimationFrame(this.introDropAnimationId),
                this.introDropAnimationId = null),
                null !== this.animationId && (cancelAnimationFrame(this.animationId),
                this.animationId = null),
                this.clearDebris(),
                this.skipNextRender = !1;
                for (const e of this.placed)
                    this.ctx.scene.remove(e.mesh),
                    ne(e.mesh),
                    oe(e.mesh),
                    e.body && this.world.removeRigidBody(e.body);
                this.placed = [],
                this.current && (this.ctx.scene.remove(this.current.mesh),
                ne(this.current.mesh),
                oe(this.current.mesh),
                this.current = null),
                this.ctx.dispose(),
                U.forEach(e => {
                    for (const t of e)
                        oe(t)
                }
                ),
                U.clear(),
                this.timer.dispose(),
                this.scoreListeners = [],
                this.perfectListeners = [],
                this.stateListeners = [],
                this.cameraOffsetListeners = [],
                this.tapListeners = [],
                this.towerRng = null
            }
            buildPodium() {
                const e = this.world.createRigidBody($.default.RigidBodyDesc.fixed().setTranslation(0, -.5, 0));
                this.world.createCollider($.default.ColliderDesc.cuboid(40, .5, 40), e)
            }
            activeDebrisCount() {
                return this.debris.length + (this.debrisReserve ? 1 : 0)
            }
            releaseDebris(e) {
                this.ctx.scene.remove(e.mesh),
                V(e.mesh, e.poolKey),
                this.world && this.world.removeRigidBody(e.body)
            }
            releaseDebrisReserve() {
                this.debrisReserve && (this.releaseDebris(this.debrisReserve),
                this.debrisReserve = null)
            }
            stashDebrisReserve(e) {
                this.releaseDebrisReserve();
                const t = e.body.translation()
                  , i = e.body.rotation();
                e.body.setTranslation({
                    x: t.x,
                    y: t.y,
                    z: t.z
                }, !0),
                e.body.setRotation({
                    x: i.x,
                    y: i.y,
                    z: i.z,
                    w: i.w
                }, !0),
                e.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0),
                e.body.setAngvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0),
                e.mesh.position.set(t.x, t.y, t.z),
                e.mesh.quaternion.set(i.x, i.y, i.z, i.w);
                const s = Array.isArray(e.mesh.material) ? e.mesh.material : [e.mesh.material];
                for (const e of s)
                    e.opacity = 1;
                this.debrisReserve = e
            }
            pinDebrisReserve() {
                if (!this.debrisReserve)
                    return;
                const {x: e, y: t, z: i} = this.debrisReserve.mesh.position
                  , s = this.debrisReserve.mesh.quaternion;
                this.debrisReserve.body.setTranslation({
                    x: e,
                    y: t,
                    z: i
                }, !0),
                this.debrisReserve.body.setRotation({
                    x: s.x,
                    y: s.y,
                    z: s.z,
                    w: s.w
                }, !0),
                this.debrisReserve.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0),
                this.debrisReserve.body.setAngvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0)
            }
            addPlacedCollider(e, t, i, s, r) {
                const n = this.config.blockHeight
                  , o = this.world.createRigidBody($.default.RigidBodyDesc.fixed().setTranslation(e, t, i));
                return this.world.createCollider($.default.ColliderDesc.cuboid(s / 2, n / 2, r / 2).setFriction(this.config.towerFriction).setRestitution(this.config.towerRestitution), o),
                o
            }
            reset() {
                D.stop(),
                null !== this.introDropAnimationId && (cancelAnimationFrame(this.introDropAnimationId),
                this.introDropAnimationId = null),
                this.paused = !1,
                this.skipNextRender = !1,
                this.lastTapAcceptedAt = 0,
                this.towerRng = null;
                for (const e of this.placed)
                    this.ctx.scene.remove(e.mesh),
                    ne(e.mesh),
                    oe(e.mesh),
                    e.body && this.world.removeRigidBody(e.body);
                this.placed = [],
                this.current && (this.ctx.scene.remove(this.current.mesh),
                ne(this.current.mesh),
                oe(this.current.mesh),
                this.current = null),
                this.clearDebris(),
                this.score = 0,
                this.streak = 0,
                this.emitScore(0),
                this.emitPerfect(0);
                const e = this.config.initialSize
                  , t = this.config.blockHeight
                  , i = N(0)
                  , s = je(0)
                  , r = t / 2
                  , n = se(e, t, e, i, s.texture, s.left, s.right);
                n.position.set(0, r, 0),
                re(n),
                this.ctx.scene.add(n),
                this.placed.push({
                    mesh: n,
                    body: this.addPlacedCollider(0, r, 0, e, e),
                    sx: e,
                    sz: e,
                    px: 0,
                    pz: 0,
                    py: r,
                    color: i,
                    textureRegion: {
                        ...X
                    }
                }),
                this.cameraTargetY = r,
                this.cameraSmoothedY = this.cameraTargetY,
                this.ctx.camera.position.set(this.cameraBaseOffset.x, this.cameraBaseOffset.y + this.cameraSmoothedY, this.cameraBaseOffset.z),
                this.ctx.camera.lookAt(0, this.cameraSmoothedY + this.config.cameraOffsetY, 0),
                this.setState("idle")
            }
            prepareIntroDrop() {
                const e = this.placed[0]?.mesh;
                e && (e.visible = !1)
            }
            playIntroDrop() {
                const e = this.placed[0]?.mesh;
                if (!e || e.visible)
                    return;
                const t = this.placed[0].py
                  , i = t + 4 * this.config.blockHeight
                  , s = performance.now();
                e.position.y = i,
                e.visible = !0;
                const r = n => {
                    const o = Math.min(1, (n - s) / 280)
                      , a = o * o;
                    e.position.y = i + (t - i) * a,
                    o < 1 ? this.introDropAnimationId = requestAnimationFrame(r) : (e.position.y = t,
                    this.introDropAnimationId = null,
                    this.pulseBlock(e),
                    this.bumpShake(.12))
                }
                ;
                this.introDropAnimationId = requestAnimationFrame(r)
            }
            setState(e) {
                const t = this.state;
                this.state = e,
                "gameover" === e && "gameover" !== t && D.end(),
                this.emitState(e)
            }
            start(e) {
                if ("playing" !== this.state && ("gameover" === this.state && this.reset(),
                this.paused = !1,
                this.towerRng = e ? (e => {
                    const t = e.length >= 32 ? e.slice(0, 32) : e.padEnd(32, "0");
                    let i = ae(t, 0, 1)
                      , s = ae(t, 8, 2)
                      , r = ae(t, 16, 3)
                      , n = ae(t, 24, 4);
                    return 0 === (i | s | r | n) && (i = 1,
                    s = 2,
                    r = 3,
                    n = 4),
                    () => {
                        const e = i ^ i << 11;
                        return i = s,
                        s = r,
                        r = n,
                        n = n ^ n >>> 19 ^ e ^ e >>> 8,
                        (n >>> 0) / 4294967296
                    }
                }
                )(e) : null,
                this.setState("playing"),
                D.start(),
                this.spawnNext(),
                (0,
                I.u3)())) {
                    (0,
                    I.wA)(),
                    this.resetPerformanceCounters();
                    const e = this.ctx.renderer.getContext().getContextAttributes();
                    (0,
                    I.MJ)("game_start", {
                        alpha: e?.alpha ?? null,
                        antialias: e?.antialias ?? null,
                        debrisReserve: null !== this.debrisReserve,
                        pixelRatio: this.ctx.renderer.getPixelRatio(),
                        renderer: this.ctx.renderer.info.programs?.length ?? 0,
                        shadows: this.ctx.renderer.shadowMap.enabled,
                        warmupAppearances: ke.length,
                        warmupMs: this.lastWarmupDurationMs
                    })
                }
            }
            pause() {
                "playing" === this.state && (this.paused = !0,
                this.skipNextRender = !1,
                D.pause())
            }
            resume() {
                "playing" === this.state && (this.paused = !1,
                D.resume(),
                this.timer.reset())
            }
            spawnNext() {
                const e = (0,
                I.u3)() ? performance.now() : 0
                  , t = this.placed[this.placed.length - 1]
                  , i = this.placed.length
                  , s = i % 2 == 1 ? "x" : "z"
                  , r = this.nextRandom() < .5 ? 1 : -1
                  , n = this.config.blockHeight
                  , o = N(i)
                  , a = je(i)
                  , l = t.sx
                  , d = t.sz
                  , c = t.py + n
                  , p = "x" === s ? t.px - 5.5 * r : t.px
                  , h = "z" === s ? t.pz - 5.5 * r : t.pz
                  , u = se(l, n, d, o, a.texture, a.left, a.right, t.textureRegion);
                u.position.set(p, c, h),
                re(u),
                this.ctx.scene.add(u);
                const f = Math.min(this.config.maxSpeed, this.config.baseSpeed + this.config.speedPerLevel * (i - 1));
                this.current = {
                    mesh: u,
                    sx: l,
                    sz: d,
                    py: c,
                    axis: s,
                    dir: r,
                    speed: f,
                    travel: 11,
                    travelled: 0,
                    color: o,
                    topTextureUrl: a.texture,
                    leftColor: a.left,
                    rightColor: a.right,
                    textureRegion: {
                        ...t.textureRegion
                    }
                },
                e > 0 && ((0,
                I.MJ)("spawn_next", {
                    appearanceIndex: i % ke.length,
                    axis: s,
                    debris: this.activeDebrisCount(),
                    durationMs: Number((performance.now() - e).toFixed(2)),
                    floorIndex: i
                }),
                requestAnimationFrame( () => {
                    (0,
                    I.MJ)("spawn_next_frame", {
                        durationMs: Number((performance.now() - e).toFixed(2)),
                        floorIndex: i
                    })
                }
                ))
            }
            nextRandom() {
                return this.towerRng ? this.towerRng() : Math.random()
            }
            queueTap(e) {
                if (this.paused)
                    return;
                if (!d(e))
                    return;
                const t = performance.now();
                if (t - this.lastTapAcceptedAt < 300)
                    return;
                if (this.lastTapAcceptedAt = t,
                "idle" === this.state || "gameover" === this.state || !this.current)
                    return void this.processTap(e);
                const i = this.current
                  , s = {
                    movingPos: "x" === i.axis ? i.mesh.position.x : i.mesh.position.z,
                    crossX: i.mesh.position.x,
                    crossZ: i.mesh.position.z
                }
                  , r = (0,
                I.u3)() ? performance.now() : 0;
                r > 0 && (0,
                I.MJ)("tap", {
                    axis: i.axis,
                    debris: this.activeDebrisCount(),
                    dir: i.dir,
                    floors: this.score,
                    hasMovingBlock: !0,
                    state: this.state
                }),
                this.placeBlock(s, e),
                this.presentTapCut(r)
            }
            onTap() {
                this.queueTap()
            }
            presentTapCut(e) {
                const t = e > 0 && (0,
                I.u3)()
                  , i = t ? performance.now() : 0;
                this.skipNextRender = !0,
                this.ctx.renderer.render(this.ctx.scene, this.ctx.camera),
                t && (0,
                I.MJ)("cut_rendered", {
                    durationMs: Number((performance.now() - i).toFixed(2)),
                    sinceTapMs: Number((performance.now() - e).toFixed(2))
                }),
                D.clap(),
                t && ((0,
                I.MJ)("clap_at", {
                    sinceTapMs: Number((performance.now() - e).toFixed(2))
                }),
                (0,
                I.MJ)("tap_processed", {
                    durationMs: Number((performance.now() - e).toFixed(2))
                }),
                requestAnimationFrame( () => {
                    (0,
                    I.MJ)("tap_next_frame", {
                        durationMs: Number((performance.now() - e).toFixed(2))
                    })
                }
                ))
            }
            processTap(e) {
                const t = (0,
                I.u3)()
                  , i = t ? performance.now() : 0;
                if (t && (0,
                I.MJ)("tap", {
                    debris: this.activeDebrisCount(),
                    floors: this.score,
                    hasMovingBlock: null !== this.current,
                    state: this.state
                }),
                "idle" === this.state)
                    return void this.start();
                if ("gameover" === this.state)
                    return void this.reset();
                if (!this.current)
                    return;
                const s = this.current
                  , r = {
                    movingPos: "x" === s.axis ? s.mesh.position.x : s.mesh.position.z,
                    crossX: s.mesh.position.x,
                    crossZ: s.mesh.position.z
                };
                this.placeBlock(r, e),
                this.presentTapCut(i)
            }
            placeBlock(e, t) {
                const i = this.current;
                "x" === i.axis ? i.mesh.position.x = e.movingPos : i.mesh.position.z = e.movingPos;
                const s = this.placed[this.placed.length - 1]
                  , r = i.axis
                  , n = e.movingPos
                  , o = "x" === r ? s.px : s.pz
                  , a = "x" === r ? i.sx : i.sz
                  , l = "x" === r ? s.sx : s.sz
                  , d = n - a / 2
                  , c = n + a / 2
                  , p = o - l / 2
                  , h = o + l / 2
                  , u = Math.max(d, p)
                  , f = Math.min(c, h)
                  , m = f - u;
                if (m <= 0)
                    return this.emitTapOutcome({
                        blockOffset: n - o,
                        floorsAfter: this.score,
                        pointer: t,
                        result: "miss"
                    }),
                    this.spawnDebrisFromCurrent(i, e.crossX, e.crossZ, i.sx, i.sz),
                    this.ctx.scene.remove(i.mesh),
                    ne(i.mesh),
                    oe(i.mesh),
                    this.current = null,
                    void this.gameOver();
                const g = Math.abs(n - o) < this.config.perfectThreshold;
                let x, b, y = i.textureRegion;
                if (g)
                    x = a,
                    b = o,
                    this.streak += 1,
                    this.emitPerfect(this.streak),
                    this.bumpShake(.4);
                else {
                    x = m,
                    b = (u + f) / 2,
                    this.streak = 0,
                    this.emitPerfect(0);
                    const t = a - m
                      , s = n < o ? d + t / 2 : c - t / 2
                      , l = "x" === r ? s : e.crossX
                      , p = "z" === r ? s : e.crossZ
                      , h = "x" === r ? t : i.sx
                      , g = "z" === r ? t : i.sz
                      , v = (u - d) / a
                      , w = (f - d) / a
                      , k = n < o
                      , j = k ? 0 : w
                      , R = k ? v : 1;
                    y = Re(i.textureRegion, r, v, w);
                    const M = Re(i.textureRegion, r, j, R);
                    this.spawnDebris(l, i.py, p, h, g, i.topTextureUrl, i.leftColor, i.rightColor, M, i.speed)
                }
                const v = this.config.blockHeight
                  , w = "x" === r ? x : i.sx
                  , k = "z" === r ? x : i.sz
                  , j = "x" === r ? b : e.crossX
                  , R = "z" === r ? b : e.crossZ
                  , M = s.py + v
                  , z = q(w, v, k, y);
                ne(i.mesh),
                i.mesh.geometry = z,
                i.mesh.position.set(j, M, R),
                function(e) {
                    const t = Array.isArray(e.material) ? e.material : [e.material];
                    for (const e of t)
                        e.transparent = !1,
                        e.opacity = 1
                }(i.mesh);
                const S = {
                    mesh: i.mesh,
                    body: this.addPlacedCollider(j, M, R, w, k),
                    sx: w,
                    sz: k,
                    px: j,
                    pz: R,
                    py: M,
                    color: i.color,
                    textureRegion: y
                };
                this.placed.push(S),
                this.current = null,
                this.score = this.placed.length - 1,
                this.emitScore(this.score),
                this.emitTapOutcome({
                    blockOffset: n - o,
                    floorsAfter: this.score,
                    pointer: t,
                    result: g ? "perfect" : "partial"
                });
                const C = Math.max(0, this.placed.length - 10);
                this.cameraTargetY = this.placed[0].py + C * this.config.blockHeight,
                this.pulseBlock(S.mesh),
                this.spawnNext()
            }
            spawnDebrisFromCurrent(e, t, i, s, r) {
                this.spawnDebris(t, e.py, i, s, r, e.topTextureUrl, e.leftColor, e.rightColor, e.textureRegion, e.speed)
            }
            spawnDebris(e, t, i, s, r, n, o, a, l, d, c={}) {
                c.silent || this.releaseDebrisReserve();
                const p = this.config.blockHeight
                  , h = {
                    topTextureUrl: n,
                    leftColor: o,
                    rightColor: a
                }
                  , {mesh: u, poolKey: f} = W(s, p, r, h, l);
                u.position.set(e, t, i),
                this.ctx.scene.add(u);
                const m = this.world.createRigidBody($.default.RigidBodyDesc.dynamic().setTranslation(e, t, i).setAngularDamping(.2).setLinearDamping(.05));
                this.world.createCollider($.default.ColliderDesc.cuboid(s / 2, p / 2, r / 2).setRestitution(.25).setFriction(.6).setDensity(1), m);
                const g = this.placed[this.placed.length - 1]
                  , x = e - (g ? g.px : 0)
                  , b = i - (g ? g.pz : 0)
                  , y = Math.hypot(x, b) || 1
                  , v = .35 * d;
                m.setLinvel({
                    x: x / y * v,
                    y: .5,
                    z: b / y * v
                }, !0),
                m.setAngvel({
                    x: 4 * (Math.random() - .5),
                    y: 4 * (Math.random() - .5),
                    z: 4 * (Math.random() - .5)
                }, !0),
                this.debris.push({
                    mesh: u,
                    body: m,
                    spawnedAt: performance.now(),
                    poolKey: f
                }),
                !c.silent && (0,
                I.u3)() && (0,
                I.MJ)("debris_created", {
                    activeDebris: this.activeDebrisCount(),
                    count: this.debris.length,
                    sizeX: Number(s.toFixed(3)),
                    sizeZ: Number(r.toFixed(3))
                })
            }
            pulseBlock(e) {
                const t = performance.now()
                  , i = () => {
                    const s = (performance.now() - t) / 220;
                    if (s >= 1)
                        return void e.scale.set(1, 1, 1);
                    const r = 1 - Math.pow(1 - s, 3)
                      , n = 1 + .18 * (1 - r)
                      , o = 1 - .04 * (1 - r);
                    e.scale.set(o, n, o),
                    requestAnimationFrame(i)
                }
                ;
                i()
            }
            bumpShake(e) {
                this.shakeAmp = Math.min(1, this.shakeAmp + e)
            }
            gameOver() {
                "gameover" !== this.state && (this.setState("gameover"),
                this.current && (this.ctx.scene.remove(this.current.mesh),
                ne(this.current.mesh),
                oe(this.current.mesh),
                this.current = null),
                this.bumpShake(.35))
            }
            clearDebris() {
                for (const e of this.debris)
                    this.releaseDebris(e);
                this.debris = [],
                this.releaseDebrisReserve(),
                this.skipNextRender = !1
            }
            updateDebris(e) {
                const t = 3500;
                for (let i = this.debris.length - 1; i >= 0; i--) {
                    const s = this.debris[i]
                      , r = s.body.translation()
                      , n = s.body.rotation();
                    s.mesh.position.set(r.x, r.y, r.z),
                    s.mesh.quaternion.set(n.x, n.y, n.z, n.w);
                    const o = e - s.spawnedAt;
                    if (o > 2900) {
                        const e = Array.isArray(s.mesh.material) ? s.mesh.material : [s.mesh.material];
                        if (1 === this.debris.length)
                            for (const t of e)
                                t.opacity = 1;
                        else {
                            const t = Math.max(0, 1 - (o - 2900) / 600);
                            for (const i of e)
                                i.opacity = t
                        }
                    }
                    if (o > t || r.y < -20) {
                        if (1 === this.debris.length) {
                            this.stashDebrisReserve(s),
                            this.debris.splice(i, 1),
                            (0,
                            I.u3)() && (0,
                            I.MJ)("debris_reserved", {
                                activeDebris: this.activeDebrisCount(),
                                visibleDebris: this.debris.length
                            });
                            continue
                        }
                        this.releaseDebris(s),
                        this.debris.splice(i, 1),
                        (0,
                        I.u3)() && (0,
                        I.MJ)("debris_removed", {
                            activeDebris: this.activeDebrisCount(),
                            count: this.debris.length
                        })
                    }
                }
            }
            updateCurrent(e) {
                if (!this.current)
                    return;
                const t = this.current
                  , i = t.speed * e * t.dir;
                "x" === t.axis ? t.mesh.position.x += i : t.mesh.position.z += i;
                const s = this.placed[this.placed.length - 1]
                  , r = "x" === t.axis ? s.px : s.pz
                  , n = "x" === t.axis ? t.mesh.position.x : t.mesh.position.z
                  , o = t.travel / 2;
                if (Math.abs(n - r) >= o) {
                    const e = r + Math.sign(n - r) * o;
                    "x" === t.axis ? t.mesh.position.x = e : t.mesh.position.z = e,
                    t.dir = -1 * t.dir,
                    (0,
                    I.u3)() && (0,
                    I.MJ)("dir_reversed", {
                        axis: t.axis,
                        debris: this.activeDebrisCount(),
                        floors: this.score
                    })
                }
            }
            updateCamera(e) {
                const t = this.ctx.camera
                  , i = 1 - Math.exp(60 * -this.config.cameraEase * e);
                this.cameraSmoothedY += (this.cameraTargetY - this.cameraSmoothedY) * i,
                t.position.x = this.cameraBaseOffset.x,
                t.position.y = this.cameraBaseOffset.y + this.cameraSmoothedY,
                t.position.z = this.cameraBaseOffset.z,
                t.lookAt(0, this.cameraSmoothedY + this.config.cameraOffsetY, 0);
                const s = this.placed[0]?.py ?? this.cameraSmoothedY
                  , r = Math.max(0, this.cameraSmoothedY - s);
                for (const e of this.cameraOffsetListeners)
                    e(r);
                if (this.shakeAmp > .001) {
                    const i = this.shakeAmp * this.config.shake;
                    t.position.x += (Math.random() - .5) * i,
                    t.position.z += (Math.random() - .5) * i,
                    this.shakeAmp *= Math.pow(.001, e)
                }
            }
            applyBloomFromConfig() {
                this.ctx.bloom.strength = this.config.bloomStrength,
                this.ctx.bloom.threshold = this.config.bloomThreshold,
                this.ctx.bloom.radius = this.config.bloomRadius,
                this.ctx.renderer.toneMappingExposure = this.config.exposure
            }
            applyGravity() {
                this.world.gravity.y = this.config.gravity,
                this.debrisReserve?.body.wakeUp();
                for (const e of this.debris)
                    e.body.wakeUp()
            }
            resetPerformanceCounters() {
                const e = performance.now();
                this.perfFrameCount = 0,
                this.perfFrameDurationTotal = 0,
                this.perfLastFrameAt = null,
                this.perfLastReportAt = e,
                this.perfLongFrames = 0,
                this.perfWorstFrame = 0
            }
            updatePerformanceLog(e, t) {
                if (!(0,
                I.u3)())
                    return;
                if ("playing" !== this.state)
                    return void (this.perfLastFrameAt = e);
                if (null !== this.perfLastFrameAt) {
                    const t = e - this.perfLastFrameAt;
                    this.perfFrameCount += 1,
                    this.perfFrameDurationTotal += t,
                    this.perfWorstFrame = Math.max(this.perfWorstFrame, t),
                    t >= 50 && (this.perfLongFrames += 1,
                    (0,
                    I.MJ)("long_frame", {
                        debris: this.activeDebrisCount(),
                        durationMs: Number(t.toFixed(2)),
                        floors: this.score,
                        moving: null !== this.current
                    }))
                }
                this.perfLastFrameAt = e;
                const i = e - this.perfLastReportAt;
                if (i < 1e3 || 0 === this.perfFrameCount)
                    return;
                const s = this.ctx.renderer.info
                  , r = performance.memory;
                (0,
                I.MJ)("fps_sample", {
                    averageFrameMs: Number((this.perfFrameDurationTotal / this.perfFrameCount).toFixed(2)),
                    calls: s.render.calls,
                    debris: this.activeDebrisCount(),
                    floors: this.score,
                    fps: Number((1e3 * this.perfFrameCount / i).toFixed(1)),
                    geometries: s.memory.geometries,
                    longFrames: this.perfLongFrames,
                    ...r ? {
                        heapLimitMb: Number((r.jsHeapSizeLimit / 1048576).toFixed(1)),
                        heapUsedMb: Number((r.usedJSHeapSize / 1048576).toFixed(1))
                    } : {},
                    renderDurationMs: Number(t.toFixed(2)),
                    textures: s.memory.textures,
                    triangles: s.render.triangles,
                    worstFrameMs: Number(this.perfWorstFrame.toFixed(2))
                }),
                this.perfFrameCount = 0,
                this.perfFrameDurationTotal = 0,
                this.perfLastReportAt = e,
                this.perfLongFrames = 0,
                this.perfWorstFrame = 0
            }
            animate = e => {
                this.animationId = requestAnimationFrame(this.animate),
                this.timer.update(e);
                const t = Math.min(.05, this.timer.getDelta())
                  , i = performance.now();
                this.paused || (this.world.step(),
                this.debris.length > 0 && this.updateDebris(i),
                this.pinDebrisReserve(),
                this.updateCurrent(t),
                this.updateCamera(t));
                let s = 0;
                if (this.skipNextRender)
                    this.skipNextRender = !1;
                else if ((0,
                I.u3)()) {
                    const e = performance.now();
                    this.ctx.renderer.render(this.ctx.scene, this.ctx.camera),
                    s = performance.now() - e,
                    this.updatePerformanceLog(i, s)
                } else
                    this.ctx.renderer.render(this.ctx.scene, this.ctx.camera)
            }
        }
        var ze = i(3717)
          , Se = i(8591)
          , Ce = i(669)
          , Ae = i(6918)
          , Fe = i(4848);
        const Te = ({floors: e, onConfirm: t, onExit: i, onRestart: s, training: r=!1}) => (0,
        Fe.jsxs)(_e, {
            "aria-label": "Игра завершена",
            "aria-modal": "true",
            onPointerDown: e => e.stopPropagation(),
            role: "dialog",
            children: [(0,
            Fe.jsxs)($e, {
                children: [(0,
                Fe.jsxs)(Le, {
                    children: [(0,
                    Fe.jsx)(Pe, {
                        "aria-hidden": "true"
                    }), (0,
                    Fe.jsx)(Oe, {
                        children: (0,
                        Fe.jsxs)(Ee, {
                            "aria-label": r ? `Результат: ${e} этажей` : `Зачислено этажей: ${e}`,
                            children: [(0,
                            Fe.jsx)(Be, {
                                children: r ? e : `+${e}`
                            }), (0,
                            Fe.jsx)(Ce.I, {
                                "aria-hidden": "true",
                                height: 16,
                                name: "layer",
                                width: 16
                            })]
                        })
                    })]
                }), (0,
                Fe.jsx)(Ie, {
                    children: r ? "Твой результат" : "Зачислили на баланс"
                })]
            }), r ? (0,
            Fe.jsxs)(Ne, {
                children: [(0,
                Fe.jsx)(Ye, {
                    onClick: i,
                    variant: "secondary",
                    children: "Выйти"
                }), (0,
                Fe.jsx)(Ye, {
                    onClick: s,
                    children: "Играть ещё"
                })]
            }) : (0,
            Fe.jsx)(Je, {
                onClick: t,
                children: "Супер!"
            })]
        })
          , De = (0,
        r.keyframes)(["from{opacity:0;}to{opacity:1;}"])
          , _e = r.default.div(["display:flex;justify-content:center;align-items:center;padding:24px 16px 32px;position:absolute;z-index:101;inset:0;background:rgb(3 14 25 / 70%);backdrop-filter:blur(12px);animation:", " 300ms ease-out both;"], De)
          , $e = r.default.div(["display:flex;align-items:center;flex-direction:column;"])
          , Le = r.default.div(["width:240px;height:240px;position:relative;"])
          , Pe = (0,
        r.default)(ze.A)(["display:block;width:240px;height:240px;"])
          , Oe = r.default.div(["position:absolute;top:50px;right:2px;"])
          , Ee = r.default.div(["display:flex;justify-content:center;align-items:center;gap:4px;height:40px;min-width:83px;padding:8px 12px;border-radius:100px;background:rgb(255 255 255 / 15%);color:#fff;backdrop-filter:blur(15px);"])
          , Be = r.default.span(["font-family:", ";font-size:24px;font-weight:400;line-height:30px;white-space:nowrap;font-feature-settings:'liga' off,'clig' off;"], Ae.pQ.onyOne)
          , Ie = r.default.div(["color:#fff;font-family:", ";font-size:24px;font-weight:400;line-height:30px;text-align:center;font-feature-settings:'liga' off,'clig' off;"], Ae.pQ.onyOne)
          , Je = (0,
        r.default)(Se.m)(["width:225px;position:absolute;bottom:var(--navigation-bottom);left:50%;transform:translateX(-50%);"])
          , Ne = r.default.div(["display:flex;gap:16px;width:calc(100% - 32px);position:absolute;bottom:var(--navigation-bottom);left:16px;"])
          , Ye = (0,
        r.default)(Se.m)(["flex:1;backdrop-filter:none !important;"])
          , Qe = (0,
        r.createGlobalStyle)([".game-page-root{width:100%;height:100%;position:relative;overflow:hidden;}@media (max-width:768px){.game-page-root{width:100%;height:100%;padding:0;}}.game-page-root,.game-page-root *{touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;}.game-page-root canvas{display:block !important;width:100% !important;height:100% !important;}.tp-dfwv{z-index:1000 !important;pointer-events:all !important;}"]);
        var Ue = i(7568)
          , He = i(8627)
          , qe = i(5887)
          , We = i(8156)
          , Ve = i(7795)
          , Xe = i(3040)
          , Ge = i(5424)
          , Ke = i(2006);
        const Ze = ({elapsedRef: e, gameState: t, headerVisible: i, isPaused: r, isSoundEnabled: n, onPauseToggle: o, onSoundToggle: a}) => {
            const l = ( (e, t, i) => {
                const [r,n] = (0,
                s.useState)(0);
                return (0,
                s.useEffect)( () => {
                    if ("idle" === e)
                        return i.current = 0,
                        void n(0);
                    if ("playing" !== e || t)
                        return;
                    const s = performance.now() - i.current;
                    let r = performance.now()
                      , o = 0;
                    const a = () => {
                        const e = performance.now()
                          , t = e - s;
                        i.current = t,
                        e - r >= 50 && (r = e,
                        n(t)),
                        o = requestAnimationFrame(a)
                    }
                    ;
                    return a(),
                    () => cancelAnimationFrame(o)
                }
                , [i, e, t]),
                r
            }
            )(t, r, e);
            return (0,
            Fe.jsx)(rt, {
                $visible: i,
                children: (0,
                Fe.jsx)(Ue.Y, {
                    elapsedMs: l,
                    isPaused: r,
                    isSoundEnabled: n,
                    onPauseToggle: o,
                    onSoundToggle: a,
                    variant: "game"
                })
            })
        }
          , et = ({gameVisible: e=!0, headerVisible: t=!0, training: i=!1, onBackgroundShift: r, onLoadError: c, onReady: h}) => {
            const u = (0,
            s.useRef)(null)
              , f = (0,
            s.useRef)(null)
              , m = (0,
            s.useRef)(!1)
              , x = (0,
            o.useNavigate)()
              , b = (0,
            n.useUnit)(He.Fn)
              , y = (0,
            n.useUnit)(We.c)
              , v = (0,
            n.useUnit)(Ve.Q9)
              , w = (0,
            n.useUnit)(Ve.Pm)
              , {mainGameClose: k, mainGameRepeat: j} = (0,
            qe.A)()
              , [R,M] = (0,
            s.useState)(0)
              , [z,S] = (0,
            s.useState)("idle")
              , [C,A] = (0,
            s.useState)(!1)
              , [F,T] = (0,
            s.useState)(!1)
              , D = (0,
            s.useRef)(0)
              , _ = (0,
            s.useCallback)( () => {
                f.current?.setState("gameover")
            }
            , [])
              , $ = (0,
            s.useCallback)( () => {
                x("/start")
            }
            , [x])
              , {activeSession: L, endedFloors: P, endPending: O, error: E, recordTap: B, startPending: I, startSession: J, togglePause: N} = g({
                elapsedRef: D,
                enabled: !i,
                gameState: z,
                onSessionBlocked: _,
                onStartError: $
            })
              , Y = (0,
            s.useCallback)( () => {
                J().then(e => {
                    if (!e)
                        return;
                    const t = f.current;
                    t && "idle" === t.state && t.start(e.tower_seed)
                }
                )
            }
            , [J]);
            (0,
            s.useEffect)( () => {
                i || 0 !== L?.attempts_balance_after || (m.current = !0)
            }
            , [L, i]),
            (0,
            s.useEffect)( () => {
                if (!u.current || f.current)
                    return;
                const e = new Me(u.current);
                f.current = e,
                e.onScore(e => {
                    M(e),
                    A(!0),
                    setTimeout( () => A(!1), 150)
                }
                ),
                e.onTapOutcome(e => {
                    B(e)
                }
                ),
                e.onState(e => {
                    S(e),
                    "playing" !== e && T(!1)
                }
                ),
                e.onCameraOffset(t => {
                    const i = 25 * e.config.blockHeight
                      , s = Math.min(1, t / i);
                    r?.(350 * s)
                }
                );
                let t = !1;
                return e.init(y).then( () => {
                    t || (e.prepareIntroDrop(),
                    requestAnimationFrame( () => {
                        requestAnimationFrame( () => {
                            t || h?.()
                        }
                        )
                    }
                    ))
                }
                ).catch(e => {
                    t || c?.(e)
                }
                ),
                () => {
                    t = !0,
                    e.destroy(),
                    f.current = null
                }
            }
            , [r, c, h, B, y]),
            (0,
            s.useEffect)( () => {
                e && f.current?.playIntroDrop()
            }
            , [e]),
            (0,
            s.useEffect)( () => {
                const e = () => {
                    if ("hidden" !== document.visibilityState)
                        return;
                    const e = f.current;
                    e && "playing" === e.state && !e.paused && (e.pause(),
                    T(!0),
                    !i && L && N(!1, t => {
                        t && e.pause(),
                        T(!0)
                    }
                    ))
                }
                ;
                return document.addEventListener("visibilitychange", e),
                () => document.removeEventListener("visibilitychange", e)
            }
            , [L, N, i]),
            (0,
            s.useEffect)( () => {
                const t = t => {
                    if ("Space" !== t.code || t.repeat)
                        return;
                    const s = t.target
                      , r = s?.closest("button, a, input, textarea, select");
                    if (r?.checkVisibility())
                        return;
                    t.preventDefault();
                    const n = f.current;
                    n && e && "gameover" !== n.state && d({
                        hidden: document.hidden,
                        isTrusted: t.isTrusted
                    }) && (i || "idle" !== n.state ? n.queueTap({
                        hidden: document.hidden,
                        isTrusted: t.isTrusted
                    }) : Y())
                }
                ;
                return window.addEventListener("keydown", t),
                () => window.removeEventListener("keydown", t)
            }
            , [e, Y, i]);
            const Q = () => {
                const e = f.current;
                if (e && "playing" === e.state)
                    return i || !L ? (e.paused ? e.resume() : e.pause(),
                    void T(e.paused)) : void N(e.paused, t => {
                        t ? e.pause() : e.resume(),
                        T(t)
                    }
                    )
            }
              , U = () => {
                k(),
                x("/start")
            }
            ;
            return (0,
            Fe.jsxs)(Fe.Fragment, {
                children: [(0,
                Fe.jsx)(Qe, {}), (0,
                Fe.jsxs)(it, {
                    className: "game-page-root",
                    onPointerDown: e => {
                        if (e.target.closest(".tp-dfwv"))
                            return;
                        if ("touch" === e.pointerType && e.clientY > window.innerHeight - 40)
                            return;
                        const t = f.current;
                        if (!t || "gameover" === t.state)
                            return;
                        const s = u.current ?? e.currentTarget
                          , r = ( (e, t) => {
                            const i = 0 === t.width ? 0 : (e.clientX - t.left) / t.width
                              , s = 0 === t.height ? 0 : (e.clientY - t.top) / t.height
                              , r = Math.max(e.width, e.height) / 2;
                            return {
                                nx: l(i),
                                ny: l(s),
                                pointerType: (n = e.pointerType,
                                a.F.includes(n) ? e.pointerType : void 0),
                                radius: r > 0 ? r : void 0,
                                isTrusted: e.isTrusted,
                                hidden: "undefined" != typeof document && document.hidden
                            };
                            var n
                        }
                        )(e.nativeEvent, s.getBoundingClientRect());
                        d(r) && (i || "idle" !== t.state ? t.queueTap(r) : Y())
                    }
                    ,
                    children: [(0,
                    Fe.jsx)(st, {
                        ref: u
                    }), (0,
                    Fe.jsx)(Ze, {
                        elapsedRef: D,
                        gameState: z,
                        headerVisible: t,
                        isPaused: F,
                        isSoundEnabled: b,
                        onPauseToggle: Q,
                        onSoundToggle: () => {
                            (0,
                            He.QF)()
                        }
                    }), (0,
                    Fe.jsxs)(nt, {
                        children: [(0,
                        Fe.jsx)(dt, {
                            $bump: C,
                            children: R
                        }), (0,
                        Fe.jsx)(ct, {
                            $hidden: "playing" === z,
                            children: O || I ? "" : !i && E instanceof p.hD ? tt(E.code) : "idle" === z ? "Жми по экрану, \n чтобы ставить этажи" : ""
                        })]
                    }), F && (0,
                    Fe.jsx)(ot, {
                        onPointerDown: e => e.stopPropagation(),
                        children: (0,
                        Fe.jsx)(at, {
                            "aria-label": "Продолжить игру",
                            onClick: Q,
                            type: "button",
                            children: (0,
                            Fe.jsx)(Ce.I, {
                                "aria-hidden": "true",
                                height: 80,
                                name: "play",
                                width: 80
                            })
                        })
                    }), "gameover" === z && (0,
                    Fe.jsx)(Te, {
                        floors: i ? R : P ?? R,
                        training: i,
                        onExit: U,
                        onRestart: () => {
                            j();
                            const e = f.current;
                            e && e.reset()
                        }
                        ,
                        onConfirm: () => {
                            U(),
                            m.current && v && (0,
                            Ge.cO)(v.attempts, v.bet_progress, w ? 1 : 0) && (0,
                            Ke.sd)(Xe.MP, {
                                mode: "spent-all"
                            })
                        }
                    })]
                })]
            })
        }
          , tt = e => {
            switch (e) {
            case "no attempts":
                return "Попытки закончились";
            case "daily limit reached":
                return "Дневной лимит игр исчерпан";
            case "session revoked":
                return "Игра продолжена в другой вкладке";
            case "session not found":
                return "Игровая сессия завершена";
            default:
                return "Не удалось связаться с сервером"
            }
        }
          , it = r.default.div(["background:transparent;"])
          , st = r.default.div(["position:absolute;inset:0;"])
          , rt = r.default.div(["position:absolute;z-index:100;inset:0;opacity:", ";transform:translateY(", ");transition:opacity 220ms ease,transform 420ms cubic-bezier(0.22,1,0.36,1);pointer-events:", ";"], ({$visible: e}) => e ? 1 : 0, ({$visible: e}) => e ? "0" : "-100%", ({$visible: e}) => e ? "auto" : "none")
          , nt = r.default.div(["display:flex;align-items:center;padding-top:120px;flex-direction:column;position:absolute;inset:0;pointer-events:none;z-index:10;"])
          , ot = r.default.div(["display:flex;justify-content:center;align-items:center;position:absolute;z-index:101;inset:0;background:rgb(3 14 25 / 70%);backdrop-filter:blur(12px);"])
          , at = r.default.button(["display:flex;justify-content:center;align-items:center;width:80px;height:80px;padding:0;border:0;background:transparent;color:#fff;cursor:pointer;"])
          , lt = (0,
        r.keyframes)(["0%{transform:scale(1);}50%{transform:scale(1.18);}100%{transform:scale(1);}"])
          , dt = r.default.div(["color:#fff;text-align:center;font-family:", ";font-feature-settings:'liga' off,'clig' off;font-size:100px;font-style:normal;font-weight:900;line-height:96px;text-transform:uppercase;", ""], Ae.pQ.onyTrack, ({$bump: e}) => e && (0,
        r.css)(["animation:", " 150ms ease-out;"], lt))
          , ct = r.default.div(["margin-top:16px;font-size:20px;font-family:", ";font-weight:500;line-height:24px;font-feature-settings:'liga' off,'clig' off;color:#fff;text-align:center;white-space:pre-line;opacity:", ";transition:opacity 240ms ease;pointer-events:none;"], Ae.pQ.onyOne, ({$hidden: e}) => e ? "0" : "1")
    },
    150: function(e, t, i) {
        i.d(t, {
            IA: function() {
                return p
            },
            MJ: function() {
                return c
            },
            Mr: function() {
                return d
            },
            jv: function() {
                return h
            },
            u3: function() {
                return l
            },
            wA: function() {
                return a
            }
        });
        let s = []
          , r = !1
          , n = null
          , o = null;
        const a = () => {
            s = [],
            o = (new Date).toISOString()
        }
          , l = () => r
          , d = e => {
            if (r = e,
            r) {
                if ("undefined" != typeof PerformanceObserver)
                    try {
                        n = new PerformanceObserver(e => {
                            for (const t of e.getEntries())
                                c("browser_long_task", {
                                    durationMs: Number(t.duration.toFixed(2)),
                                    name: t.name,
                                    startTimeMs: Number(t.startTime.toFixed(2))
                                })
                        }
                        ),
                        n.observe({
                            type: "longtask",
                            buffered: !1
                        })
                    } catch {
                        n = null
                    }
            } else
                n?.disconnect(),
                n = null,
                s = [],
                o = null
        }
          , c = (e, t={}) => {
            r && (s.push({
                atMs: Math.round(performance.now()),
                data: t,
                type: e
            }),
            s.length > 2e3 && s.shift())
        }
          , p = () => s.length
          , h = () => {
            if (0 === s.length)
                return !1;
            const e = (new Date).toISOString().replace(/[:.]/g, "-")
              , t = new Blob([JSON.stringify({
                metadata: {
                    devicePixelRatio: window.devicePixelRatio,
                    language: navigator.language,
                    platform: navigator.platform,
                    screen: `${window.screen.width}x${window.screen.height}`,
                    userAgent: navigator.userAgent,
                    viewport: `${window.innerWidth}x${window.innerHeight}`
                },
                startedAt: o,
                entries: s
            }, null, 2)],{
                type: "application/json"
            })
              , i = URL.createObjectURL(t)
              , r = document.createElement("a");
            return r.href = i,
            r.download = `tower-perf-${e}.json`,
            document.body.appendChild(r),
            r.click(),
            r.remove(),
            window.setTimeout( () => URL.revokeObjectURL(i), 1e3),
            !0
        }
    },
    7568: function(e, t, i) {
        i.d(t, {
            Y: function() {
                return k
            }
        });
        var s = i(7871)
          , r = i(7795)
          , n = i(3040)
          , o = i(4477)
          , a = i(9082)
          , l = i(5887)
          , d = i(3558)
          , c = i(6918)
          , p = i(4848);
        const h = ({attempts: e, serverTime: t}) => {
            const {mainNotifyMakeBet: i} = (0,
            l.A)()
              , s = (0,
            r.Yu)(e.refreshes_at, t)
              , o = (0,
            d.zt)(s)
              , c = (0,
            a.q)(e.used_today, 0, 10)
              , h = (0,
            a.q)(Math.min(e.balance, e.remaining_today), 0, 10 - c);
            return (0,
            p.jsxs)(u, {
                onClick: () => {
                    i(),
                    (0,
                    n.qB)()
                }
                ,
                type: "button",
                children: [(0,
                p.jsx)(f, {
                    $available: h,
                    $used: c,
                    "aria-hidden": "true",
                    focusable: "false"
                }), (0,
                p.jsxs)(m, {
                    children: [(0,
                    p.jsx)(g, {
                        children: o
                    }), (0,
                    p.jsx)(x, {
                        children: "до обновления"
                    })]
                })]
            })
        }
          , u = s.default.button(["display:flex;align-items:center;gap:8px;height:48px;padding:8px 16px 8px 8px;border:0;border-radius:24px;background:var(--transparent-light-15,rgb(255 255 255 / 15%));cursor:pointer;pointer-events:auto;"])
          , f = (0,
        s.default)(o.A)(["flex:0 0 32px;width:32px;height:32px;", ""], ({$available: e, $used: t}) => ( ({$available: e, $used: t}) => Array.from({
            length: 10
        }, (i, r) => {
            const n = r < t
              , o = r < t + e
              , a = n ? "#fff" : o ? "#FAF948" : "#fff"
              , l = n ? .75 : o ? 1 : .2;
            return (0,
            s.css)(["path[data-petal='", "']{fill:", ";fill-opacity:", ";}"], r + 1, a, l)
        }
        ))({
            $available: e,
            $used: t
        }))
          , m = s.default.div(["display:flex;align-items:flex-start;flex-direction:column;"])
          , g = s.default.span(["color:var(--text-primary,#fff);font-family:", ";font-size:16px;font-weight:500;line-height:20px;font-variant-numeric:lining-nums tabular-nums;"], c.pQ.onyOne)
          , x = s.default.span(["color:var(--text-primary,#fff);font-family:", ";font-size:12px;font-weight:400;line-height:14px;font-feature-settings:'liga' off,'clig' off;"], c.pQ.onyOne);
        var b = i(5043)
          , y = i(2006)
          , v = i(669)
          , w = i(7511);
        const k = e => "start" === e.variant ? (0,
        p.jsx)(A, {
            attempts: e.attempts,
            serverTime: e.serverTime,
            totalFloors: e.totalFloors
        }) : (0,
        p.jsx)(j, {
            ...e
        })
          , j = ({elapsedMs: e, isPaused: t, isSoundEnabled: i, onPauseToggle: s, onSoundToggle: r}) => (0,
        p.jsxs)(M, {
            onPointerDown: e => e.stopPropagation(),
            children: [(0,
            p.jsxs)(z, {
                children: [(0,
                p.jsx)(S, {
                    "aria-label": t ? "Продолжить игру" : "Поставить игру на паузу",
                    onClick: s,
                    type: "button",
                    children: (0,
                    p.jsx)(v.I, {
                        "aria-hidden": "true",
                        name: t ? "play" : "pause",
                        size: 24
                    })
                }), (0,
                p.jsx)(S, {
                    "aria-label": i ? "Выключить звук" : "Включить звук",
                    onClick: r,
                    type: "button",
                    children: (0,
                    p.jsx)(v.I, {
                        "aria-hidden": "true",
                        name: i ? "sound-on" : "sound-off",
                        size: 24
                    })
                })]
            }), (0,
            p.jsx)(C, {
                children: (0,
                p.jsx)(w.z, {
                    value: R(e)
                })
            })]
        })
          , R = e => `${Math.floor(e / 6e4).toString().padStart(2, "0")}:${Math.floor(e % 6e4 / 1e3).toString().padStart(2, "0")}.${Math.floor(e % 1e3 / 10).toString().padStart(2, "0")}`
          , M = s.default.header(["display:flex;justify-content:space-between;align-items:center;width:calc(100% - 32px);position:absolute;z-index:100;top:24px;left:50%;transform:translateX(-50%);"])
          , z = s.default.div(["display:flex;gap:8px;"])
          , S = s.default.button(["display:flex;justify-content:center;align-items:center;width:48px;height:48px;padding:8px;border:0;border-radius:50%;background:rgb(255 255 255 / 10%);color:#fff;cursor:pointer;backdrop-filter:blur(10px);"])
          , C = s.default.div(["display:flex;align-items:center;gap:8px;height:48px;padding:8px 16px;border-radius:48px;border:1px solid rgb(255 255 255 / 15%);background:rgb(255 255 255 / 5%);color:#fff;font-family:", ";font-variant-numeric:lining-nums tabular-nums;font-feature-settings:'liga' off,'clig' off;font-size:16px;font-style:normal;font-weight:400;line-height:22px;text-align:center;"], c.pQ.onyOne)
          , A = ({attempts: e, serverTime: t, totalFloors: i}) => {
            const {mainInformation: s} = (0,
            l.A)();
            return (0,
            p.jsx)(F, {
                children: (0,
                p.jsxs)(T, {
                    children: [(0,
                    p.jsx)(h, {
                        attempts: e,
                        serverTime: t
                    }), (0,
                    p.jsxs)(D, {
                        "aria-label": `Этажей за всё время: ${i}`,
                        onClick: () => {
                            s(),
                            (0,
                            y.sd)(b.l)
                        }
                        ,
                        type: "button",
                        children: [(0,
                        p.jsx)(v.I, {
                            "aria-hidden": "true",
                            name: "layer",
                            size: 24
                        }), (0,
                        p.jsx)(_, {
                            children: i
                        })]
                    })]
                })
            })
        }
          , F = s.default.header(["height:120px;padding:16px;position:absolute;z-index:100;top:0;right:0;left:0;background:linear-gradient(180deg,#366a95 0%,rgb(133 181 221 / 0%) 100%);pointer-events:none;"])
          , T = s.default.div(["display:flex;justify-content:space-between;align-items:center;width:100%;"])
          , D = s.default.button(["display:flex;justify-content:center;align-items:center;gap:6px;height:48px;padding:8px 16px 8px 12px;border:0;border-radius:48px;background:var(--transparent-light-15,rgb(255 255 255 / 15%));backdrop-filter:blur(4px);cursor:pointer;pointer-events:auto;"])
          , _ = s.default.span(["color:var(--text-primary,#fff);font-family:", ";font-size:16px;font-weight:400;line-height:22px;"], c.pQ.onyOne)
    },
    5946: function(e, t, i) {
        i.d(t, {
            YW: function() {
                return k
            },
            zB: function() {
                return C
            },
            lM: function() {
                return l
            }
        });
        var s = i(7871)
          , r = i(669)
          , n = i(7511)
          , o = i(6918)
          , a = i(4848);
        const l = ({isLoading: e=!1, items: t}) => (0,
        a.jsxs)(a.Fragment, {
            children: [t.map(e => (0,
            a.jsxs)(c, {
                children: [(0,
                a.jsx)(b, {
                    children: e.date
                }), (0,
                a.jsx)(y, {
                    value: e.duration
                }), (0,
                a.jsxs)(v, {
                    children: [e.points, (0,
                    a.jsx)(r.I, {
                        "aria-hidden": "true",
                        name: "layer",
                        size: 20
                    })]
                })]
            }, e.id)), e && Array.from({
                length: 7
            }, (e, t) => (0,
            a.jsx)(d, {}, "skeleton-" + t))]
        })
          , d = () => (0,
        a.jsxs)(p, {
            "aria-hidden": "true",
            children: [(0,
            a.jsx)(u, {}), (0,
            a.jsx)(f, {}), (0,
            a.jsxs)(m, {
                children: [(0,
                a.jsx)(g, {}), (0,
                a.jsx)(x, {})]
            })]
        })
          , c = s.default.article(["display:grid;align-items:center;column-gap:12px;min-height:48px;padding:4px 16px;grid-template-columns:minmax(0,1fr) max-content max-content;border-radius:16px;background:rgb(255 255 255 / 5%);"])
          , p = s.default.article(["display:grid;align-items:center;column-gap:12px;min-height:48px;padding:4px 16px;grid-template-columns:minmax(0,1fr) 48px max-content;border-radius:16px;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , h = s.default.span(["display:block;border-radius:12px;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , u = (0,
        s.default)(h)(["width:100%;height:16px;"])
          , f = s.default.span(["width:48px;height:100%;"])
          , m = s.default.span(["display:flex;justify-content:flex-end;align-items:center;gap:4px;height:100%;"])
          , g = (0,
        s.default)(h)(["width:64px;height:16px;"])
          , x = (0,
        s.default)(h)(["width:20px;height:20px;"])
          , b = s.default.span(["overflow:hidden;color:#fff;font-feature-settings:'liga' off,'clig' off;text-overflow:ellipsis;white-space:nowrap;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], o.pQ.onyOne)
          , y = (0,
        s.default)(n.z)(["overflow:hidden;color:rgb(255 255 255 / 75%);font-variant-numeric:lining-nums tabular-nums;font-feature-settings:'liga' off,'clig' off;text-overflow:ellipsis;text-align:right;white-space:nowrap;font-family:", ";font-size:14px;font-weight:400;line-height:18px;"], o.pQ.onyOne)
          , v = s.default.span(["display:flex;justify-content:flex-end;align-items:center;gap:2px;overflow:hidden;color:#fff;font-feature-settings:'liga' off,'clig' off;text-overflow:ellipsis;white-space:nowrap;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], o.pQ.onyOne)
          , w = new Intl.NumberFormat("ru-RU")
          , k = ({items: e}) => (0,
        a.jsx)(a.Fragment, {
            children: e.map(e => (0,
            a.jsxs)(j, {
                children: [(0,
                a.jsx)(R, {
                    children: e.date
                }), (0,
                a.jsxs)(M, {
                    children: [w.format(e.points), (0,
                    a.jsx)(r.I, {
                        "aria-hidden": "true",
                        name: "freebet",
                        size: 20
                    })]
                })]
            }, e.id))
        })
          , j = s.default.article(["display:flex;align-items:center;min-height:48px;padding:4px 16px;border-radius:16px;background:rgb(255 255 255 / 5%);"])
          , R = s.default.span(["overflow:hidden;color:#fff;font-feature-settings:'liga' off,'clig' off;text-overflow:ellipsis;white-space:nowrap;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], o.pQ.onyOne)
          , M = s.default.span(["display:flex;align-items:center;gap:2px;margin-left:auto;color:#fff;font-variant-numeric:lining-nums tabular-nums;font-feature-settings:'liga' off,'clig' off;font-family:", ";font-size:14px;font-weight:400;line-height:20px;white-space:nowrap;"], o.pQ.onyOne);
        var z = i(5584)
          , S = i(7791);
        const C = ({onClose: e}) => (0,
        a.jsxs)(A, {
            role: "status",
            children: [(0,
            a.jsx)(F, {
                children: "Все заработанные тобой фрибеты будут начислены автоматически на баланс аккаунта до 12:00 мск следующего дня"
            }), (0,
            a.jsx)(T, {
                alt: "",
                "aria-hidden": "true",
                src: S
            }), (0,
            a.jsx)(D, {
                "aria-label": "Закрыть уведомление",
                onClick: e,
                type: "button",
                children: (0,
                a.jsx)(z.A, {
                    "aria-hidden": "true"
                })
            })]
        })
          , A = s.default.aside(["display:flex;align-items:flex-start;gap:4px;flex:none;width:100%;min-height:64px;margin-top:24px;padding:8px 8px 0 16px;overflow:hidden;border-radius:16px;background:rgb(255 255 255 / 10%);"])
          , F = s.default.p(["flex:1;min-width:0;margin:0;padding:4px 0 12px;color:#fff;font-feature-settings:'liga' off,'clig' off;font-family:", ";font-size:12px;font-weight:400;line-height:14px;"], o.pQ.onyOne)
          , T = s.default.img(["align-self:flex-end;flex:0 0 93px;width:93px;height:auto;object-fit:contain;pointer-events:none;"])
          , D = s.default.button(["display:flex;flex:0 0 20px;justify-content:center;align-items:center;width:20px;height:20px;padding:0;border:0;background:transparent;cursor:pointer;svg{width:20px;height:20px;}"])
    },
    9727: function(e, t, i) {
        i.d(t, {
            V: function() {
                return u
            }
        });
        var s = i(1208)
          , r = i(7871)
          , n = i(38);
        const o = [{
            icon: "home",
            label: "Игра",
            to: "/start"
        }, {
            icon: "help",
            label: "Об акции",
            to: "/prize"
        }, {
            icon: "history",
            label: "История",
            to: "/history"
        }, {
            icon: "cup",
            label: "Рейтинг",
            to: "/rating"
        }]
          , a = [{
            icon: "clapperboard",
            label: "Итоги",
            to: "/results"
        }, {
            icon: "help",
            label: "Об акции",
            to: "/prize"
        }, {
            icon: "history",
            label: "История",
            to: "/history"
        }, {
            icon: "cup",
            label: "Победители",
            to: "/winners"
        }];
        var l = i(7795)
          , d = i(669)
          , c = i(5887)
          , p = i(6918)
          , h = i(4848);
        const u = () => {
            const {pathname: e} = (0,
            s.useLocation)()
              , t = (0,
            n.useUnit)(l.Q9)
              , i = (0,
            c.A)()
              , r = t?.experience.navigation_variant ?? "game"
              , p = (u = r,
            x = t?.participation_status,
            ("results" === u ? a : o).filter(e => "/history" !== e.to || "not_joined" !== x));
            var u, x;
            const b = "/game" !== e && "awaiting_results" !== t?.experience.phase;
            return (0,
            h.jsx)(f, {
                $visible: b,
                "aria-hidden": !b,
                "aria-label": "Основная навигация",
                children: p.map( ({icon: t, label: s, to: r}) => {
                    const n = e === r || "/start" === r && "/game" === e || "/winners" === r && "/rating" === e;
                    return (0,
                    h.jsx)(m, {
                        "aria-current": n ? "page" : void 0,
                        "aria-label": s,
                        className: n ? "is-active" : void 0,
                        onClick: () => (t => {
                            const s = {
                                "/start:/history": i.mainHistory,
                                "/start:/prize": i.mainRules,
                                "/start:/rating": i.mainEndResultsRating,
                                "/history:/start": i.historyMain,
                                "/history:/prize": i.historyRules,
                                "/history:/rating": i.historyEndResultsRating,
                                "/history:/results": i.historyEndResults,
                                "/history:/winners": i.historyEndResultsRating,
                                "/rating:/start": i.endResultsRatingMain,
                                "/rating:/history": i.endResultsRatingHistory,
                                "/rating:/prize": i.endResultsRatingRules,
                                "/results:/history": i.endResultsHistory,
                                "/results:/winners": i.endResultsRating,
                                "/results:/prize": i.endResultsRules,
                                "/winners:/results": i.endResultsRatingEndResults,
                                "/winners:/history": i.endResultsRatingHistory,
                                "/winners:/prize": i.endResultsRatingRules
                            };
                            s[`${e}:${t}`]?.()
                        }
                        )(r),
                        to: r,
                        children: (0,
                        h.jsxs)(h.Fragment, {
                            children: [(0,
                            h.jsx)(d.I, {
                                "aria-hidden": "true",
                                name: t,
                                size: 24
                            }), (0,
                            h.jsx)(g, {
                                $isActive: n,
                                children: s
                            })]
                        })
                    }, r)
                }
                )
            })
        }
          , f = r.default.nav(["display:flex;justify-content:center;align-items:center;padding:4px;position:absolute;z-index:100;bottom:var(--navigation-bottom);left:50%;border-radius:40px;background:rgb(255 255 255 / 5%);backdrop-filter:blur(12px);opacity:", ";transform:translate(-50%,", ");visibility:", ";transition:opacity var(--bottom-controls-opacity-duration) ease,transform var(--bottom-controls-transform-duration) var(--bottom-controls-exit-easing),visibility 0s linear ", ";pointer-events:", ";"], ({$visible: e}) => e ? 1 : 0, ({$visible: e}) => e ? "0" : "120px", ({$visible: e}) => e ? "visible" : "hidden", ({$visible: e}) => e ? "0s" : "var(--bottom-controls-transform-duration)", ({$visible: e}) => e ? "auto" : "none")
          , m = (0,
        r.default)(s.NavLink)(["display:flex;justify-content:center;align-items:center;padding:12px;position:relative;border-radius:24px;background:transparent;color:rgb(255 255 255 / 75%);text-decoration:none;transition:color 200ms ease,background-color 200ms ease,padding 200ms ease;svg path{fill:currentcolor;}&.is-active{padding:12px 16px 12px 12px;background:rgb(255 255 255 / 10%);color:#fff;}"])
          , g = r.default.span(["display:block;margin-left:", ";max-width:", ";overflow:hidden;color:inherit;font-family:", ";font-size:14px;font-weight:400;line-height:20px;white-space:nowrap;letter-spacing:0;opacity:", ";transition:max-width 200ms ease,margin-left 200ms ease,opacity 150ms ease;"], ({$isActive: e}) => e ? "8px" : "0", ({$isActive: e}) => e ? "100px" : "0", p.pQ.onyOne, ({$isActive: e}) => e ? 1 : 0)
    },
    9856: function(e, t, i) {
        i.d(t, {
            d_: function() {
                return d
            },
            op: function() {
                return w
            },
            Or: function() {
                return H
            }
        });
        var s = i(2427)
          , r = i(7871)
          , n = i(8488)
          , o = i(669)
          , a = i(6918)
          , l = i(4848);
        const d = 999
          , c = ({url: e, background: t}) => e ? (0,
        l.jsx)(x, {
            alt: "",
            $background: t,
            src: e
        }) : (0,
        l.jsx)(b, {
            $background: t,
            children: (0,
            l.jsx)(n.A, {
                "aria-hidden": "true"
            })
        })
          , p = ({isCurrent: e=!1, showTime: t, user: i}) => {
            return (0,
            l.jsxs)(g, {
                $isCurrent: e,
                $isOverflow: e && i.place > d,
                children: [(0,
                l.jsx)(h, {
                    children: (s = i.place,
                    s > d ? `${d}+` : String(s))
                }), (0,
                l.jsxs)(u, {
                    children: [(0,
                    l.jsx)(c, {
                        background: i.avatarBackground,
                        url: i.avatarUrl
                    }), (0,
                    l.jsx)(y, {
                        children: i.name
                    })]
                }), (0,
                l.jsxs)(f, {
                    children: [t && (0,
                    l.jsx)(m, {
                        children: i.time
                    }), (0,
                    l.jsxs)(v, {
                        children: [i.balance, (0,
                        l.jsx)(o.I, {
                            "aria-hidden": "true",
                            name: "layer",
                            size: 16
                        })]
                    })]
                })]
            });
            var s
        }
          , h = r.default.span(["width:32px;color:#fff;text-align:center;font-feature-settings:'liga' off,'clig' off;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], a.pQ.onyOne)
          , u = r.default.div(["display:flex;align-items:center;gap:12px;position:absolute;top:50%;left:32px;transform:translateY(-50%);"])
          , f = r.default.div(["display:flex;align-items:center;gap:12px;margin-left:auto;"])
          , m = r.default.span(["color:rgb(255 255 255 / 75%);text-align:right;font-variant-numeric:lining-nums tabular-nums;font-feature-settings:'liga' off,'clig' off;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], a.pQ.onyOne)
          , g = r.default.article(["display:flex;align-items:center;justify-content:space-between;width:", ";min-height:40px;margin-left:", ";padding:", ";position:relative;border-radius:", ";background:", ";", "{left:", ";}"], ({$isCurrent: e}) => e ? "calc(100% + 16px)" : "100%", ({$isCurrent: e}) => e ? "-8px" : "0", ({$isCurrent: e}) => e ? "0 8px" : "0", ({$isCurrent: e}) => e ? "12px" : "0", ({$isCurrent: e}) => e ? "var(--opacity-light-5, rgba(255, 255, 255, 0.05))" : "transparent", u, ({$isCurrent: e, $isOverflow: t}) => t ? "44px" : e ? "40px" : "32px")
          , x = r.default.img(["width:32px;height:32px;border:0.8px solid #fff;border-radius:8px;object-fit:cover;background:", ";"], ({$background: e}) => e ?? "transparent")
          , b = r.default.span(["display:flex;flex:0 0 32px;justify-content:center;align-items:center;width:32px;height:32px;border-radius:8px;background:", ";svg{width:16px;height:16px;}"], ({$background: e}) => e ?? "#606266")
          , y = r.default.span(["overflow:hidden;max-width:150px;color:#fff;font-feature-settings:'liga' off,'clig' off;text-overflow:ellipsis;white-space:nowrap;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], a.pQ.onyOne)
          , v = r.default.span(["display:flex;align-items:center;gap:4px;margin-left:auto;white-space:nowrap;color:#fff;text-align:right;font-variant-numeric:lining-nums tabular-nums;font-feature-settings:'liga' off,'clig' off;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], a.pQ.onyOne)
          , w = ({currentUserId: e, isLoading: t, sentinelRef: i, showTime: r, users: n}) => {
            const o = t
              , a = (0,
            s.useRef)(null);
            return (0,
            s.useEffect)( () => {
                a.current && (a.current.scrollTop = 0)
            }
            , [r]),
            (0,
            l.jsxs)(j, {
                "aria-busy": t,
                children: [(0,
                l.jsxs)(R, {
                    children: [(0,
                    l.jsxs)(M, {
                        children: [(0,
                        l.jsx)("span", {
                            children: "№"
                        }), (0,
                        l.jsx)("span", {
                            children: "Игрок"
                        })]
                    }), (0,
                    l.jsx)("span", {
                        children: r ? "Результат дня" : "Баланс"
                    })]
                }), (0,
                l.jsxs)(z, {
                    ref: a,
                    children: [n.map(t => (0,
                    l.jsx)(p, {
                        isCurrent: t.userId === e,
                        showTime: r,
                        user: t
                    }, t.userId)), o && Array.from({
                        length: 6
                    }, (e, t) => (0,
                    l.jsx)(k, {}, `skeleton-${t}`)), (0,
                    l.jsx)(L, {
                        ref: i
                    })]
                })]
            })
        }
          , k = () => (0,
        l.jsxs)(S, {
            "aria-hidden": "true",
            children: [(0,
            l.jsx)(C, {}), (0,
            l.jsxs)(A, {
                children: [(0,
                l.jsx)(F, {}), (0,
                l.jsx)(T, {})]
            }), (0,
            l.jsxs)(D, {
                children: [(0,
                l.jsx)(_, {}), (0,
                l.jsx)($, {})]
            })]
        })
          , j = r.default.section(["display:flex;flex:1;gap:16px;width:100%;min-height:0;margin-top:16px;flex-direction:column;"])
          , R = r.default.div(["display:flex;opacity:0.6;justify-content:space-between;align-items:center;height:20px;color:rgb(255 255 255 / 75%);font-feature-settings:'liga' off,'clig' off;font-family:", ";font-size:14px;font-weight:400;line-height:20px;"], a.pQ.onyOne)
          , M = r.default.div(["display:flex;flex:1;gap:8px;span:first-child{width:24px;}"])
          , z = r.default.div(["display:flex;gap:8px;width:calc(100% + 16px);min-height:0;padding:0 8px 120px;margin-left:-8px;flex-direction:column;overflow:hidden auto;overscroll-behavior:contain;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"])
          , S = r.default.div(["display:flex;flex:0 0 40px;align-items:center;gap:12px;width:100%;min-height:40px;padding:4px 0;backdrop-filter:blur(8px);"])
          , C = r.default.span(["flex:0 0 28px;width:28px;height:20px;border-radius:12px;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , A = r.default.div(["display:flex;flex:1 1 0;align-items:center;gap:8px;min-width:0;"])
          , F = r.default.span(["flex:0 0 32px;width:32px;height:32px;border-radius:8px;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , T = r.default.span(["flex:0 0 80px;width:80px;height:16px;border-radius:12px;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , D = r.default.div(["display:flex;flex:0 0 auto;align-items:center;gap:4px;margin-left:auto;"])
          , _ = r.default.span(["flex:0 0 64px;width:64px;height:16px;border-radius:12px;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , $ = r.default.span(["flex:0 0 20px;width:20px;height:20px;border-radius:50%;background:var(--opacity-light-5,rgb(255 255 255 / 5%));"])
          , L = r.default.div(["flex:0 0 1px;height:1px;"])
          , P = ({date: e, description: t, image: i, place: s, title: r}) => (0,
        l.jsxs)(O, {
            children: [(0,
            l.jsxs)(E, {
                children: [(0,
                l.jsx)(B, {
                    children: s
                }), e && (0,
                l.jsx)(I, {
                    children: e
                })]
            }), (0,
            l.jsxs)(J, {
                children: [(0,
                l.jsx)(N, {
                    children: r
                }), t && (0,
                l.jsx)(Y, {
                    children: t
                })]
            }), (0,
            l.jsx)(Q, {
                children: (0,
                l.jsx)(U, {
                    alt: "",
                    src: i
                })
            })]
        })
          , O = r.default.article(["display:flex;flex:0 0 100%;align-items:center;gap:8px;width:100%;min-height:176px;padding:16px;border:1px solid rgb(255 255 255 / 10%);border-radius:24px;position:relative;overflow:hidden;background:rgb(255 255 255 / 5%);scroll-snap-align:start;"])
          , E = r.default.div(["display:flex;gap:4px;position:absolute;z-index:2;top:-1px;left:22px;"])
          , B = r.default.span(["display:flex;align-items:center;height:24px;padding:0 12px;border-radius:0 0 16px 16px;background:rgb(255 255 255 / 10%);color:#fff;font-family:", ";font-size:12px;line-height:14px;white-space:nowrap;backdrop-filter:blur(8px);"], a.pQ.onyOne)
          , I = (0,
        r.default)(B)(["background:#f8f700;color:#090a0a;font-feature-settings:'liga' off,'clig' off;"])
          , J = r.default.div(["display:flex;flex:1 1 0;justify-content:flex-end;gap:8px;min-width:0;align-self:stretch;flex-direction:column;"])
          , N = r.default.h3(["margin:0;color:#fff;font-family:", ";font-size:16px;font-weight:500;line-height:20px;white-space:nowrap;"], a.pQ.onyOne)
          , Y = r.default.p(["margin:0;color:rgb(255 255 255 / 75%);font-family:", ";font-size:14px;line-height:20px;"], a.pQ.onyOne)
          , Q = r.default.div(["display:flex;flex:0 0 144px;justify-content:center;align-items:center;width:144px;height:144px;overflow:hidden;"])
          , U = r.default.img(["display:block;width:100%;height:100%;object-fit:contain;"])
          , H = ({prizes: e}) => {
            const t = (0,
            s.useRef)(null)
              , [i,r] = (0,
            s.useState)(0);
            (0,
            s.useEffect)( () => {
                t.current?.scrollTo({
                    left: 0
                }),
                r(0)
            }
            , [e]);
            const n = e => {
                const i = t.current
                  , s = i?.firstElementChild;
                i && s && i.scrollBy({
                    behavior: "smooth",
                    left: e * (s.offsetWidth + 8)
                })
            }
            ;
            return (0,
            l.jsxs)(q, {
                children: [(0,
                l.jsx)(W, {
                    onScroll: () => {
                        const i = t.current
                          , s = i?.firstElementChild;
                        i && s && r(Math.min(e.length - 1, Math.max(0, Math.round(i.scrollLeft / (s.offsetWidth + 8)))))
                    }
                    ,
                    ref: t,
                    children: e.map(e => (0,
                    l.jsx)(P, {
                        ...e
                    }, `${e.place}-${e.title}`))
                }), i > 0 && (0,
                l.jsx)(V, {
                    $direction: "previous",
                    "aria-label": "Предыдущий приз",
                    onClick: () => n(-1),
                    type: "button",
                    children: (0,
                    l.jsx)(o.I, {
                        "aria-hidden": "true",
                        name: "chevron-right-small",
                        size: 24
                    })
                }), i < e.length - 1 && (0,
                l.jsx)(V, {
                    $direction: "next",
                    "aria-label": "Следующий приз",
                    onClick: () => n(1),
                    type: "button",
                    children: (0,
                    l.jsx)(o.I, {
                        "aria-hidden": "true",
                        name: "chevron-right-small",
                        size: 24
                    })
                })]
            })
        }
          , q = r.default.div(["width:calc(100% + 32px);margin-top:16px;margin-right:-16px;margin-left:-16px;position:relative;"])
          , W = r.default.div(["display:flex;column-gap:8px;padding:0 16px;overflow-x:auto;scroll-padding-inline:16px;scroll-snap-type:x mandatory;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"])
          , V = r.default.button(["display:flex;flex:0 0 32px;justify-content:center;align-items:center;width:32px;height:32px;padding:8px;border-radius:40px;background:rgb(255 255 255 / 10%);backdrop-filter:blur(10px);border:none;outline:none;cursor:pointer;position:absolute;top:50%;", " transform:translateY(-50%);svg{display:block;flex:none;width:24px;height:24px;}", " &:active{transform:translateY(-50%) scale(0.96);}"], ({$direction: e}) => ("previous" === e ? "left" : "right") + ": 4px;", ({$direction: e}) => "previous" === e && "svg { transform: rotate(180deg); }")
    }
}]);
