"use strict";
(self.webpackChunksirena_tower_game = self.webpackChunksirena_tower_game || []).push([
  [158], {
    5780: function (t, e, n) {
      n.d(e, {
        V: function () {
          return l
        }
      });
      var i = n(953),
        s = n(4705);
      class l {
        minX = 0;
        minY = 0;
        maxX = 0;
        maxY = 0;
        boundingBoxes = [];
        polygons = [];
        polygonPool = new s.bC(() => s.Aq.newFloatArray(16));
        update(t, e) {
          if (!t) throw new Error("skeleton cannot be null.");
          const n = this.boundingBoxes,
            l = this.polygons,
            r = this.polygonPool,
            c = t.slots,
            o = c.length;
          n.length = 0, r.freeAll(l), l.length = 0;
          for (let e = 0; e < o; e++) {
            const o = c[e];
            if (!o.bone.active) continue;
            const h = o.appliedPose.attachment;
            if (h instanceof i.b) {
              n.push(h);
              let e = r.obtain();
              e.length !== h.worldVerticesLength && (e = s.Aq.newFloatArray(h.worldVerticesLength)), l.push(e), h.computeWorldVertices(t, o, 0, h.worldVerticesLength, e, 0, 2)
            }
          }
          e ? this.aabbCompute() : (this.minX = Number.POSITIVE_INFINITY, this.minY = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.maxY = Number.NEGATIVE_INFINITY)
        }
        aabbCompute() {
          let t = Number.POSITIVE_INFINITY,
            e = Number.POSITIVE_INFINITY,
            n = Number.NEGATIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          const s = this.polygons;
          for (let l = 0, r = s.length; l < r; l++) {
            const r = s[l],
              c = r;
            for (let s = 0, l = r.length; s < l; s += 2) {
              const l = c[s],
                r = c[s + 1];
              t = Math.min(t, l), e = Math.min(e, r), n = Math.max(n, l), i = Math.max(i, r)
            }
          }
          this.minX = t, this.minY = e, this.maxX = n, this.maxY = i
        }
        aabbContainsPoint(t, e) {
          return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
        }
        aabbIntersectsSegment(t, e, n, i) {
          const s = this.minX,
            l = this.minY,
            r = this.maxX,
            c = this.maxY;
          if (t <= s && n <= s || e <= l && i <= l || t >= r && n >= r || e >= c && i >= c) return !1;
          const o = (i - e) / (n - t);
          let h = o * (s - t) + e;
          if (h > l && h < c) return !0;
          if (h = o * (r - t) + e, h > l && h < c) return !0;
          let p = (l - e) / o + t;
          return p > s && p < r || (p = (c - e) / o + t, p > s && p < r)
        }
        aabbIntersectsSkeleton(t) {
          return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
        }
        containsPoint(t, e) {
          const n = this.polygons;
          for (let i = 0, s = n.length; i < s; i++)
            if (this.containsPointPolygon(n[i], t, e)) return this.boundingBoxes[i];
          return null
        }
        containsPointPolygon(t, e, n) {
          const i = t,
            s = t.length;
          let l = s - 2,
            r = !1;
          for (let t = 0; t < s; t += 2) {
            const s = i[t + 1],
              c = i[l + 1];
            if (s < n && c >= n || c < n && s >= n) {
              const o = i[t];
              o + (n - s) / (c - s) * (i[l] - o) < e && (r = !r)
            }
            l = t
          }
          return r
        }
        intersectsSegment(t, e, n, i) {
          const s = this.polygons;
          for (let l = 0, r = s.length; l < r; l++)
            if (this.intersectsSegmentPolygon(s[l], t, e, n, i)) return this.boundingBoxes[l];
          return null
        }
        intersectsSegmentPolygon(t, e, n, i, s) {
          const l = t,
            r = t.length,
            c = e - i,
            o = n - s,
            h = e * s - n * i;
          let p = l[r - 2],
            a = l[r - 1];
          for (let t = 0; t < r; t += 2) {
            const r = l[t],
              g = l[t + 1],
              u = p * g - a * r,
              d = p - r,
              y = a - g,
              f = c * y - o * d,
              T = (h * d - c * u) / f;
            if ((T >= p && T <= r || T >= r && T <= p) && (T >= e && T <= i || T >= i && T <= e)) {
              const t = (h * y - o * u) / f;
              if ((t >= a && t <= g || t >= g && t <= a) && (t >= n && t <= s || t >= s && t <= n)) return !0
            }
            p = r, a = g
          }
          return !1
        }
        getPolygon(t) {
          if (!t) throw new Error("boundingBox cannot be null.");
          const e = this.boundingBoxes.indexOf(t);
          return -1 === e ? null : this.polygons[e]
        }
        getWidth() {
          return this.maxX - this.minX
        }
        getHeight() {
          return this.maxY - this.minY
        }
      }
    },
    4175: function (t, e, n) {
      n.d(e, {
        q: function () {
          return l
        }
      });
      var i = n(8528),
        s = n(4705);
      class l {
        triangulator = null;
        clippingPolygon = [];
        clippingPolygons = [];
        clipOutput = [];
        clippedVertices = [];
        clippedUVs = [];
        clippedTriangles = [];
        inverseVertices = [];
        _clippedVerticesTyped = new Float32Array(1024);
        _clippedUVsTyped = new Float32Array(1024);
        _clippedTrianglesTyped = new Uint16Array(1024);
        clippedVerticesTyped = new Float32Array(0);
        clippedUVsTyped = new Float32Array(0);
        clippedTrianglesTyped = new Uint16Array(0);
        clippedVerticesLength = 0;
        clippedUVsLength = 0;
        clippedTrianglesLength = 0;
        scratch = [];
        inverse = !1;
        clipAttachment = null;
        clipStart(t, e, n) {
          if (this.clipAttachment) return;
          const l = n.worldVerticesLength;
          this.clipAttachment = n, this.inverse = n.inverse;
          const r = s.Aq.setArraySize(this.clippingPolygon, l);
          n.computeWorldVertices(t, e, 0, l, r, 0, 2);
          const c = this.clippingPolygon,
            o = this.makeClockwise(c);
          o || this.inverse || n.convex ? (o || this.makeConvex(c), this.clippingPolygon.push(c[0], c[1]), this.clippingPolygons.push(c)) : (null === this.triangulator && (this.triangulator = new i.R), this.clippingPolygons.push(...this.triangulator.decompose(c, this.triangulator.triangulate(c))))
        }
        clipEnd(t) {
          this.clipAttachment && (t && this.clipAttachment.endSlot !== t.data || (this.clipAttachment = null, this.clippingPolygons.length = 0))
        }
        isClipping() {
          return null != this.clipAttachment
        }
        clipTriangles(t, e, n, i, s, l, r, c) {
          return i && s && l && "boolean" == typeof r && "number" == typeof c ? this.clipTrianglesRender(t, e, n, i, s, l, r, c) : this.clipTrianglesNoRender(t, e, n)
        }
        clipTrianglesNoRender(t, e, n) {
          const i = this.clippedVertices;
          i.length = 0;
          const l = this.clippedTriangles;
          l.length = 0;
          let r = 0;
          if (this.inverse) {
            const c = this.clippingPolygons[0];
            for (let o = 0; o < n; o += 3) {
              let n = e[o] << 1;
              const h = t[n],
                p = t[n + 1];
              n = e[o + 1] << 1;
              const a = t[n],
                g = t[n + 1];
              n = e[o + 2] << 1;
              const u = t[n],
                d = t[n + 1];
              this.clipInverse(h, p, a, g, u, d, c);
              const y = this.inverseVertices;
              for (let t = 0, e = this.inverseVertices.length; t < e;) {
                const e = y[t++];
                let n = e >> 1,
                  c = i.length;
                const o = s.Aq.setArraySize(i, c + e);
                s.Aq.arrayCopy(y, t, o, c, e), c = l.length;
                const h = s.Aq.setArraySize(l, c + 3 * (n - 2));
                for (let t = 1; t < n - 1; t++, c += 3) h[c] = r, h[c + 1] = r + t, h[c + 2] = r + t + 1;
                r += n, t += e
              }
            }
            return !0
          }
          const c = this.clipOutput,
            o = this.clippingPolygons,
            h = o.length;
          let p = null;
          for (let a = 0; a < n; a += 3) {
            let n = e[a] << 1;
            const g = t[n],
              u = t[n + 1];
            n = e[a + 1] << 1;
            const d = t[n],
              y = t[n + 1];
            n = e[a + 2] << 1;
            const f = t[n],
              T = t[n + 1];
            for (let t = 0; t < h; t++) {
              let e = i.length;
              if (!this.clip(g, u, d, y, f, T, o[t])) {
                const t = s.Aq.setArraySize(i, e + 6);
                t[e] = g, t[e + 1] = u, t[e + 2] = d, t[e + 3] = y, t[e + 4] = f, t[e + 5] = T, e = l.length;
                const n = s.Aq.setArraySize(l, e + 3);
                n[e] = r, n[e + 1] = r + 1, n[e + 2] = r + 2, r += 3;
                break
              } {
                p = this.clipOutput;
                const t = c.length;
                if (0 === t) continue;
                let n = t >> 1;
                const o = s.Aq.setArraySize(i, e + t);
                s.Aq.arrayCopy(p, 0, o, e, t), e = l.length;
                const h = s.Aq.setArraySize(l, e + 3 * (n - 2));
                n--;
                for (let t = 1; t < n; t++, e += 3) h[e] = r, h[e + 1] = r + t, h[e + 2] = r + t + 1;
                r += n
              }
            }
          }
          return null != p
        }
        clipTrianglesRender(t, e, n, i, l, r, c, o) {
          const h = this.clippedVertices;
          h.length = 0;
          const p = this.clippedTriangles;
          p.length = 0;
          let a = 0;
          if (this.inverse) {
            const g = this.clippingPolygons[0];
            for (let u = 0; u < n; u += 3) {
              let n = e[u],
                d = e[u + 1],
                y = e[u + 2];
              const f = t[n * o],
                T = t[n * o + 1],
                V = t[d * o],
                m = t[d * o + 1],
                b = t[y * o],
                A = t[y * o + 1];
              this.clipInverse(f, T, V, m, b, A, g);
              const _ = this.inverseVertices.length;
              if (0 === _) continue;
              const w = i[n <<= 1],
                I = i[n + 1],
                v = i[d <<= 1],
                U = i[d + 1],
                L = i[y <<= 1],
                N = i[y + 1],
                P = m - A,
                x = b - V,
                S = f - b,
                Y = A - T,
                k = 1 / (P * S + x * (T - A)),
                E = this.inverseVertices;
              for (let t = 0; t < _;) {
                const e = E[t++],
                  n = e >> 1;
                let i = h.length;
                const g = s.Aq.setArraySize(h, i + n * o);
                for (let n = 0; n < e; n += 2, i += o) {
                  const e = E[t + n],
                    s = E[t + n + 1];
                  g[i] = e, g[i + 1] = s, g[i + 2] = l.r, g[i + 3] = l.g, g[i + 4] = l.b, g[i + 5] = l.a;
                  const o = e - b,
                    h = s - A,
                    p = (P * o + x * h) * k,
                    a = (Y * o + S * h) * k,
                    u = 1 - p - a;
                  g[i + 6] = w * p + v * a + L * u, g[i + 7] = I * p + U * a + N * u, c && (g[i + 8] = r.r, g[i + 9] = r.g, g[i + 10] = r.b, g[i + 11] = r.a)
                }
                i = p.length;
                const u = s.Aq.setArraySize(p, i + 3 * (n - 2));
                for (let t = 1; t < n - 1; t++, i += 3) u[i] = a, u[i + 1] = a + t, u[i + 2] = a + t + 1;
                a += n, t += e
              }
            }
            return !0
          }
          const g = this.clipOutput,
            u = this.clippingPolygons,
            d = this.clippingPolygons.length;
          let y = null;
          for (let f = 0; f < n; f += 3) {
            let n = e[f];
            const T = t[n * o],
              V = t[n * o + 1],
              m = i[n << 1],
              b = i[1 + (n << 1)];
            n = e[f + 1];
            const A = t[n * o],
              _ = t[n * o + 1],
              w = i[n << 1],
              I = i[1 + (n << 1)];
            n = e[f + 2];
            const v = t[n * o],
              U = t[n * o + 1],
              L = i[n << 1],
              N = i[1 + (n << 1)];
            let P = 0,
              x = 0,
              S = 0,
              Y = 0,
              k = 0;
            for (let t = 0; t < d; t++) {
              let e = h.length;
              if (!this.clip(T, V, A, _, v, U, u[t])) {
                const t = s.Aq.setArraySize(h, e + 3 * o);
                t[e] = T, t[e + 1] = V, t[e + 2] = l.r, t[e + 3] = l.g, t[e + 4] = l.b, t[e + 5] = l.a, c ? (t[e + 6] = m, t[e + 7] = b, t[e + 8] = r.r, t[e + 9] = r.g, t[e + 10] = r.b, t[e + 11] = r.a, t[e + 12] = A, t[e + 13] = _, t[e + 14] = l.r, t[e + 15] = l.g, t[e + 16] = l.b, t[e + 17] = l.a, t[e + 18] = w, t[e + 19] = I, t[e + 20] = r.r, t[e + 21] = r.g, t[e + 22] = r.b, t[e + 23] = r.a, t[e + 24] = v, t[e + 25] = U, t[e + 26] = l.r, t[e + 27] = l.g, t[e + 28] = l.b, t[e + 29] = l.a, t[e + 30] = L, t[e + 31] = N, t[e + 32] = r.r, t[e + 33] = r.g, t[e + 34] = r.b, t[e + 35] = r.a) : (t[e + 6] = m, t[e + 7] = b, t[e + 8] = A, t[e + 9] = _, t[e + 10] = l.r, t[e + 11] = l.g, t[e + 12] = l.b, t[e + 13] = l.a, t[e + 14] = w, t[e + 15] = I, t[e + 16] = v, t[e + 17] = U, t[e + 18] = l.r, t[e + 19] = l.g, t[e + 20] = l.b, t[e + 21] = l.a, t[e + 22] = L, t[e + 23] = N), e = p.length;
                const n = s.Aq.setArraySize(p, e + 3);
                n[e] = a, n[e + 1] = a + 1, n[e + 2] = a + 2, a += 3;
                break
              } {
                y = this.clipOutput;
                const t = g.length;
                if (0 === t) continue;
                let n = t >> 1;
                0 === k && (P = _ - U, x = v - A, S = T - v, Y = U - V, k = 1 / (P * S - x * Y));
                const i = s.Aq.setArraySize(h, e + n * o);
                for (let n = 0; n < t; n += 2, e += o) {
                  const t = y[n],
                    s = y[n + 1];
                  i[e] = t, i[e + 1] = s, i[e + 2] = l.r, i[e + 3] = l.g, i[e + 4] = l.b, i[e + 5] = l.a;
                  const o = t - v,
                    h = s - U,
                    p = (P * o + x * h) * k,
                    a = (Y * o + S * h) * k,
                    g = 1 - p - a;
                  i[e + 6] = m * p + w * a + L * g, i[e + 7] = b * p + I * a + N * g, c && (i[e + 8] = r.r, i[e + 9] = r.g, i[e + 10] = r.b, i[e + 11] = r.a)
                }
                e = p.length;
                const u = s.Aq.setArraySize(p, e + 3 * (n - 2));
                n--;
                for (let t = 1; t < n; t++, e += 3) u[e] = a, u[e + 1] = a + t, u[e + 2] = a + t + 1;
                a += n + 1
              }
            }
          }
          return null != y
        }
        clipTrianglesUnpacked(t, e, n, i, s, l = 2) {
          let r = this._clippedVerticesTyped,
            c = this._clippedUVsTyped,
            o = this._clippedTrianglesTyped,
            h = 0;
          if (this.clippedVerticesLength = 0, this.clippedUVsLength = 0, this.clippedTrianglesLength = 0, this.inverse) {
            const p = this.clippingPolygons[0];
            for (let a = 0; a < i; a += 3) {
              let i = n[a] * l;
              const g = t[e + i],
                u = t[e + i + 1];
              let d = n[a] << 1;
              const y = s[d],
                f = s[d + 1];
              i = n[a + 1] * l;
              const T = t[e + i],
                V = t[e + i + 1];
              d = n[a + 1] << 1;
              const m = s[d],
                b = s[d + 1];
              i = n[a + 2] * l;
              const A = t[e + i],
                _ = t[e + i + 1];
              d = n[a + 2] << 1;
              const w = s[d],
                I = s[d + 1];
              this.clipInverse(g, u, T, V, A, _, p);
              const v = this.inverseVertices.length;
              if (0 === v) continue;
              const U = V - _,
                L = A - T,
                N = g - A,
                P = _ - u,
                x = 1 / (U * N + L * (u - _)),
                S = this.inverseVertices;
              for (let t = 0; t < v;) {
                const e = S[t++],
                  n = e >> 1;
                let i = this.clippedVerticesLength;
                const s = i + n * l,
                  p = this.clippedUVsLength + 2 * n;
                r.length < s && (this._clippedVerticesTyped = new Float32Array(2 * s), this._clippedVerticesTyped.set(r.subarray(0, i)), r = this._clippedVerticesTyped), c.length < p && (this._clippedUVsTyped = new Float32Array(2 * p), this._clippedUVsTyped.set(c.subarray(0, this.clippedUVsLength)), c = this._clippedUVsTyped), this.clippedVerticesLength = s, this.clippedUVsLength = p;
                const a = this._clippedVerticesTyped,
                  g = this._clippedUVsTyped;
                let u = p - 2 * n;
                for (let n = 0; n < e; n += 2, i += l, u += 2) {
                  const e = S[t + n],
                    s = S[t + n + 1];
                  a[i] = e, a[i + 1] = s;
                  const l = e - A,
                    r = s - _,
                    c = (U * l + L * r) * x,
                    o = (P * l + N * r) * x,
                    h = 1 - c - o;
                  g[u] = y * c + m * o + w * h, g[u + 1] = f * c + b * o + I * h
                }
                i = this.clippedTrianglesLength;
                const d = i + 3 * (n - 2);
                o.length < d && (this._clippedTrianglesTyped = new Uint16Array(2 * d), this._clippedTrianglesTyped.set(o.subarray(0, i)), o = this._clippedTrianglesTyped), this.clippedTrianglesLength = d;
                const T = o;
                for (let t = 1; t < n - 1; t++, i += 3) T[i] = h, T[i + 1] = h + t, T[i + 2] = h + t + 1;
                h += n, t += e
              }
            }
            return this.clippedVerticesTyped = this._clippedVerticesTyped.subarray(0, this.clippedVerticesLength), this.clippedUVsTyped = this._clippedUVsTyped.subarray(0, this.clippedUVsLength), this.clippedTrianglesTyped = this._clippedTrianglesTyped.subarray(0, this.clippedTrianglesLength), !0
          }
          const p = this.clipOutput,
            a = this.clippingPolygons,
            g = this.clippingPolygons.length;
          let u = null;
          for (let d = 0; d < i; d += 3) {
            let i = n[d],
              y = i * l;
            const f = t[e + y],
              T = t[e + y + 1];
            let V = i << 1;
            const m = s[V],
              b = s[V + 1];
            i = n[d + 1], y = i * l;
            const A = t[e + y],
              _ = t[e + y + 1];
            V = i << 1;
            const w = s[V],
              I = s[V + 1];
            i = n[d + 2], y = i * l;
            const v = t[e + y],
              U = t[e + y + 1];
            V = i << 1;
            const L = s[V],
              N = s[V + 1];
            let P = 0,
              x = 0,
              S = 0,
              Y = 0,
              k = 0;
            for (let t = 0; t < g; t++) {
              let e = this.clippedVerticesLength;
              if (!this.clip(f, T, A, _, v, U, a[t])) {
                let t = e + 3 * l;
                r.length < t && (this._clippedVerticesTyped = new Float32Array(2 * t), this._clippedVerticesTyped.set(r.subarray(0, e)), r = this._clippedVerticesTyped), r[e] = f, r[e + 1] = T, r[e + l] = A, r[e + l + 1] = _, r[e + 2 * l] = v, r[e + 2 * l + 1] = U;
                const n = this.clippedUVsLength + 6;
                c.length < n && (this._clippedUVsTyped = new Float32Array(2 * n), this._clippedUVsTyped.set(c.subarray(0, this.clippedUVsLength)), c = this._clippedUVsTyped);
                const i = this.clippedUVsLength;
                c[i] = m, c[i + 1] = b, c[i + 2] = w, c[i + 3] = I, c[i + 4] = L, c[i + 5] = N, this.clippedVerticesLength = t, this.clippedUVsLength = n, e = this.clippedTrianglesLength, t = e + 3, o.length < t && (this._clippedTrianglesTyped = new Uint16Array(2 * t), this._clippedTrianglesTyped.set(o.subarray(0, e)), o = this._clippedTrianglesTyped);
                const s = o;
                s[e] = h, s[e + 1] = h + 1, s[e + 2] = h + 2, h += 3, this.clippedTrianglesLength = t;
                break
              } {
                u = p;
                const t = p.length;
                if (0 === t) continue;
                let n = t >> 1;
                0 === k && (P = _ - U, x = v - A, S = f - v, Y = U - T, k = 1 / (P * S - x * Y));
                const i = e + n * l;
                r.length < i && (this._clippedVerticesTyped = new Float32Array(2 * i), this._clippedVerticesTyped.set(r.subarray(0, e)), this._clippedUVsTyped = new Float32Array(2 * (this.clippedUVsLength + 2 * n)), this._clippedUVsTyped.set(c.subarray(0, this.clippedUVsLength)), r = this._clippedVerticesTyped, c = this._clippedUVsTyped);
                const s = r,
                  a = c;
                this.clippedVerticesLength = i;
                let g = this.clippedUVsLength;
                this.clippedUVsLength = g + 2 * n;
                for (let n = 0; n < t; n += 2, e += l, g += 2) {
                  const t = u[n],
                    i = u[n + 1];
                  s[e] = t, s[e + 1] = i;
                  const l = t - v,
                    r = i - U,
                    c = (P * l + x * r) * k,
                    o = (Y * l + S * r) * k,
                    h = 1 - c - o;
                  a[g] = m * c + w * o + L * h, a[g + 1] = b * c + I * o + N * h
                }
                e = this.clippedTrianglesLength;
                const d = e + 3 * (n - 2);
                o.length < d && (this._clippedTrianglesTyped = new Uint16Array(2 * d), this._clippedTrianglesTyped.set(o.subarray(0, e)), o = this._clippedTrianglesTyped), this.clippedTrianglesLength = d;
                const y = o;
                n--;
                for (let t = 1; t < n; t++, e += 3) y[e] = h, y[e + 1] = h + t, y[e + 2] = h + t + 1;
                h += n + 1
              }
            }
          }
          return this.clippedVerticesTyped = this._clippedVerticesTyped.subarray(0, this.clippedVerticesLength), this.clippedUVsTyped = this._clippedUVsTyped.subarray(0, this.clippedUVsLength), this.clippedTrianglesTyped = this._clippedTrianglesTyped.subarray(0, this.clippedTrianglesLength), null !== u
        }
        clip(t, e, n, i, s, l, r) {
          const c = this.clipOutput;
          let o, h, p = !1;
          r.length % 4 >= 2 ? (o = this.clipOutput, h = this.scratch) : (o = this.scratch, h = this.clipOutput);
          const a = r;
          o.length = 8;
          const g = o;
          g[0] = t, g[1] = e, g[2] = n, g[3] = i, g[4] = s, g[5] = l, g[6] = t, g[7] = e, h.length = 0;
          const u = r.length - 4;
          for (let s = 0;; s += 2) {
            const l = a[s],
              r = a[s + 1],
              g = l - a[s + 2],
              d = r - a[s + 3],
              y = h.length,
              f = o;
            let T = d * (l - (t = f[0])) - g * (r - (e = f[1]));
            for (let s = 2, c = o.length - 2; s <= c; s += 2) {
              const c = d * (l - (n = f[s])) - g * (r - (i = f[s + 1]));
              if (T > 0)
                if (c > 0) h.push(n, i);
                else {
                  const s = n - t,
                    l = i - e,
                    r = T / (s * d - l * g);
                  r >= 0 && r <= 1 ? (h.push(t + s * r, e + l * r), p = !0) : h.push(n, i)
                }
              else if (c > 0) {
                const s = n - t,
                  l = i - e,
                  r = T / (s * d - l * g);
                r >= 0 && r <= 1 ? (h.push(t + s * r, e + l * r, n, i), p = !0) : h.push(n, i)
              } else p = !0;
              t = n, e = i, T = c
            }
            if (y === h.length) return c.length = 0, !0;
            if (h.push(h[0], h[1]), s === u) break;
            const V = h;
            h = o, h.length = 0, o = V
          }
          if (c !== h) {
            c.length = 0;
            for (let t = 0, e = h.length - 2; t < e; t++) c[t] = h[t]
          } else c.length = c.length - 2;
          return p
        }
        clipInverse(t, e, n, i, s, l, r) {
          this.inverseVertices.length = 0;
          const c = r.length - 4;
          let o, h;
          r.length % 4 >= 2 ? (o = this.clipOutput, h = this.scratch) : (o = this.scratch, h = this.clipOutput), o.length = 8;
          let p = r,
            a = o;
          a[0] = t, a[1] = e, a[2] = n, a[3] = i, a[4] = s, a[5] = l, a[6] = t, a[7] = e, h.length = 0;
          for (let s = 0;; s += 2) {
            const l = p[s],
              r = p[s + 1],
              g = l - p[s + 2],
              u = r - p[s + 3],
              d = h.length,
              y = this.inverseVertices.length;
            this.inverseVertices.push(0), a = o;
            let f = u * (l - (t = a[0])) - g * (r - (e = a[1]));
            for (let s = 2, c = o.length - 2; s <= c; s += 2) {
              const c = u * (l - (n = a[s])) - g * (r - (i = a[s + 1]));
              if (f > 0)
                if (c > 0) h.push(n, i);
                else {
                  const s = n - t,
                    l = i - e,
                    r = f / (s * u - l * g);
                  if (r >= 0 && r <= 1) {
                    const c = t + s * r,
                      o = e + l * r;
                    h.push(c, o), this.inverseVertices.push(c, o, n, i)
                  } else h.push(n, i)
                }
              else if (c > 0) {
                const s = n - t,
                  l = i - e,
                  r = f / (s * u - l * g);
                if (r >= 0 && r <= 1) {
                  const c = t + s * r,
                    o = e + l * r;
                  this.inverseVertices.push(c, o), h.push(c, o, n, i)
                } else h.push(n, i)
              } else this.inverseVertices.push(n, i);
              t = n, e = i, f = c
            }
            const T = this.inverseVertices.length - y - 1;
            if (T >= 6 ? this.inverseVertices[y] = T : this.inverseVertices.length = y, d === h.length) break;
            if (h.push(h[0], h[1]), s === c) break;
            const V = h;
            h = o, h.length = 0, o = V
          }
        }
        makeClockwise(t) {
          const e = t,
            n = t.length;
          let i = !0,
            s = !0,
            l = 0,
            r = e[n - 2],
            c = e[n - 1],
            o = e[0],
            h = e[1];
          for (let t = 2; t < n; t += 2) {
            const n = e[t],
              p = e[t + 1];
            l += o * p - n * h;
            const a = (o - r) * (p - h) - (h - c) * (n - o);
            s = s && a <= 0, i = i && a >= 0, r = o, c = h, o = n, h = p
          }
          l += o * e[1] - e[0] * h;
          const p = (o - r) * (e[1] - h) - (h - c) * (e[0] - o);
          if (s = s && p <= 0, i = i && p >= 0, l >= 0) {
            for (let t = 0, i = n - 2, s = n >> 1; t < s; t += 2) {
              const n = e[t],
                s = e[t + 1],
                l = i - t;
              e[t] = e[l], e[t + 1] = e[l + 1], e[l] = n, e[l + 1] = s
            }
            return i
          }
          return s
        }
        makeConvex(t) {
          const e = t.length,
            n = t;
          this.clipOutput.length = e;
          const i = this.clipOutput;
          i[0] = n[0], i[1] = n[1];
          for (let t = 2; t < e; t += 2) {
            const e = n[t],
              s = n[t + 1];
            let l = t - 2;
            for (; l >= 0 && (i[l] > e || i[l] === e && i[l + 1] > s); l -= 2) i[l + 2] = i[l], i[l + 3] = i[l + 1];
            i[l + 2] = e, i[l + 3] = s
          }
          n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3];
          let s = 4;
          for (let t = 4; t < e; t += 2, s += 2) {
            const e = i[t],
              l = i[t + 1];
            for (;
              (n[s - 2] - n[s - 4]) * (l - n[s - 3]) - (n[s - 1] - n[s - 3]) * (e - n[s - 4]) >= 0 && (s -= 2, 2 !== s););
            n[s] = e, n[s + 1] = l
          }
          n[s] = i[e - 4], n[s + 1] = i[e - 3];
          const l = s;
          s += 2;
          for (let t = e - 6; t >= 0; t -= 2, s += 2) {
            const e = i[t],
              r = i[t + 1];
            for (;
              (n[s - 2] - n[s - 4]) * (r - n[s - 3]) - (n[s - 1] - n[s - 3]) * (e - n[s - 4]) >= 0 && (s -= 2, s !== l););
            n[s] = e, n[s + 1] = r
          }
          t.length = s - 2
        }
      }
    },
    7217: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return s
        }
      });
      var i = n(3867);
      class s {
        name = null;
        bones = [];
        slots = [];
        skins = [];
        defaultSkin = null;
        events = [];
        animations = [];
        constraints = [];
        x = 0;
        y = 0;
        width = 0;
        height = 0;
        referenceScale = 100;
        version = null;
        hash = null;
        fps = 30;
        imagesPath = null;
        audioPath = null;
        findBone(t) {
          if (!t) throw new Error("boneName cannot be null.");
          const e = this.bones;
          for (let n = 0, i = e.length; n < i; n++)
            if (e[n].name === t) return e[n];
          return null
        }
        findSlot(t) {
          if (!t) throw new Error("slotName cannot be null.");
          const e = this.slots;
          for (let n = 0, i = e.length; n < i; n++)
            if (e[n].name === t) return e[n];
          return null
        }
        findSkin(t) {
          if (!t) throw new Error("skinName cannot be null.");
          const e = this.skins;
          for (let n = 0, i = e.length; n < i; n++)
            if (e[n].name === t) return e[n];
          return null
        }
        findEvent(t) {
          if (!t) throw new Error("eventDataName cannot be null.");
          const e = this.events;
          for (let n = 0, i = e.length; n < i; n++)
            if (e[n].name === t) return e[n];
          return null
        }
        findSliderAnimations(t) {
          const e = this.constraints;
          for (let n = 0, s = this.constraints.length; n < s; n++) {
            const s = e[n];
            s instanceof i.c && null != s.animation && t.push(s.animation)
          }
          return t
        }
        findAnimation(t) {
          if (!t) throw new Error("animationName cannot be null.");
          const e = this.animations;
          for (let n = 0, i = e.length; n < i; n++)
            if (e[n].name === t) return e[n];
          return null
        }
        findConstraint(t, e) {
          if (!t) throw new Error("constraintName cannot be null.");
          if (null == e) throw new Error("type cannot be null.");
          const n = this.constraints;
          for (let i = 0, s = this.constraints.length; i < s; i++) {
            const s = n[i];
            if (s instanceof e && s.name === t) return s
          }
          return null
        }
      }
    }
  }
]);