"use strict";
(self.webpackChunksirena_tower_game = self.webpackChunksirena_tower_game || []).push([
  [41], {
    8709: function (t, e, i) {
      i.d(e, {
        M: function () {
          return s
        }
      });
      var r = i(5875);
      class s {
        vertexShader;
        fragmentShader;
        static MVP_MATRIX = "u_projTrans";
        static POSITION = "a_position";
        static COLOR = "a_color";
        static COLOR2 = "a_color2";
        static TEXCOORDS = "a_texCoords";
        static SAMPLER = "u_texture";
        context;
        vs = null;
        vsSource;
        fs = null;
        fsSource;
        program = null;
        tmp2x2 = new Float32Array(4);
        tmp3x3 = new Float32Array(9);
        tmp4x4 = new Float32Array(16);
        getProgram() {
          return this.program
        }
        getVertexShader() {
          return this.vertexShader
        }
        getFragmentShader() {
          return this.fragmentShader
        }
        getVertexShaderSource() {
          return this.vsSource
        }
        getFragmentSource() {
          return this.fsSource
        }
        constructor(t, e, i) {
          this.vertexShader = e, this.fragmentShader = i, this.vsSource = e, this.fsSource = i, this.context = t instanceof r.O ? t : new r.O(t), this.context.addRestorable(this), this.compile()
        }
        compile() {
          const t = this.context.gl;
          try {
            if (this.vs = this.compileShader(t.VERTEX_SHADER, this.vertexShader), !this.vs) throw new Error("Couldn't compile vertex shader.");
            if (this.fs = this.compileShader(t.FRAGMENT_SHADER, this.fragmentShader), !this.fs) throw new Error("Couldn#t compile fragment shader.");
            this.program = this.compileProgram(this.vs, this.fs)
          } catch (t) {
            throw this.dispose(), t
          }
        }
        compileShader(t, e) {
          const i = this.context.gl,
            r = i.createShader(t);
          if (!r) throw new Error("Couldn't create shader.");
          if (i.shaderSource(r, e), i.compileShader(r), !i.getShaderParameter(r, i.COMPILE_STATUS)) {
            const t = `Couldn't compile shader: ${i.getShaderInfoLog(r)}`;
            if (i.deleteShader(r), !i.isContextLost()) throw new Error(t)
          }
          return r
        }
        compileProgram(t, e) {
          const i = this.context.gl,
            r = i.createProgram();
          if (!r) throw new Error("Couldn't compile program.");
          if (i.attachShader(r, t), i.attachShader(r, e), i.linkProgram(r), !i.getProgramParameter(r, i.LINK_STATUS)) {
            const t = `Couldn't compile shader program: ${i.getProgramInfoLog(r)}`;
            if (i.deleteProgram(r), !i.isContextLost()) throw new Error(t)
          }
          return r
        }
        restore() {
          this.compile()
        }
        bind() {
          this.context.gl.useProgram(this.program)
        }
        unbind() {
          this.context.gl.useProgram(null)
        }
        setUniformi(t, e) {
          this.context.gl.uniform1i(this.getUniformLocation(t), e)
        }
        setUniformf(t, e) {
          this.context.gl.uniform1f(this.getUniformLocation(t), e)
        }
        setUniform2f(t, e, i) {
          this.context.gl.uniform2f(this.getUniformLocation(t), e, i)
        }
        setUniform3f(t, e, i, r) {
          this.context.gl.uniform3f(this.getUniformLocation(t), e, i, r)
        }
        setUniform4f(t, e, i, r, s) {
          this.context.gl.uniform4f(this.getUniformLocation(t), e, i, r, s)
        }
        setUniform2x2f(t, e) {
          const i = this.context.gl;
          this.tmp2x2.set(e), i.uniformMatrix2fv(this.getUniformLocation(t), !1, this.tmp2x2)
        }
        setUniform3x3f(t, e) {
          const i = this.context.gl;
          this.tmp3x3.set(e), i.uniformMatrix3fv(this.getUniformLocation(t), !1, this.tmp3x3)
        }
        setUniform4x4f(t, e) {
          const i = this.context.gl;
          this.tmp4x4.set(e), i.uniformMatrix4fv(this.getUniformLocation(t), !1, this.tmp4x4)
        }
        getUniformLocation(t) {
          const e = this.context.gl;
          if (!this.program) throw new Error("Shader not compiled.");
          const i = e.getUniformLocation(this.program, t);
          if (!i && !e.isContextLost()) throw new Error(`Couldn't find location for uniform ${t}`);
          return i
        }
        getAttributeLocation(t) {
          const e = this.context.gl;
          if (!this.program) throw new Error("Shader not compiled.");
          const i = e.getAttribLocation(this.program, t);
          if (-1 === i && !e.isContextLost()) throw new Error(`Couldn't find location for attribute ${t}`);
          return i
        }
        dispose() {
          this.context.removeRestorable(this);
          const t = this.context.gl;
          this.vs && (t.deleteShader(this.vs), this.vs = null), this.fs && (t.deleteShader(this.fs), this.fs = null), this.program && (t.deleteProgram(this.program), this.program = null)
        }
        static newColoredTextured(t) {
          return new s(t, `\nattribute vec4 ${s.POSITION};\nattribute vec4 ${s.COLOR};\nattribute vec2 ${s.TEXCOORDS};\nuniform mat4 ${s.MVP_MATRIX};\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main () {\n\tv_color = ${s.COLOR};\n\tv_texCoords = ${s.TEXCOORDS};\n\tgl_Position = ${s.MVP_MATRIX} * ${s.POSITION};\n}\n`, "\n#ifdef GL_ES\n\t#define LOWP lowp\n\tprecision mediump float;\n#else\n\t#define LOWP\n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\n\nvoid main () {\n\tgl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}\n")
        }
        static newTwoColoredTextured(t) {
          return new s(t, `\nattribute vec4 ${s.POSITION};\nattribute vec4 ${s.COLOR};\nattribute vec4 ${s.COLOR2};\nattribute vec2 ${s.TEXCOORDS};\nuniform mat4 ${s.MVP_MATRIX};\nvarying vec4 v_light;\nvarying vec4 v_dark;\nvarying vec2 v_texCoords;\n\nvoid main () {\n\tv_light = ${s.COLOR};\n\tv_dark = ${s.COLOR2};\n\tv_texCoords = ${s.TEXCOORDS};\n\tgl_Position = ${s.MVP_MATRIX} * ${s.POSITION};\n}\n`, "\n#ifdef GL_ES\n\t#define LOWP lowp\n\tprecision mediump float;\n#else\n\t#define LOWP\n#endif\nvarying LOWP vec4 v_light;\nvarying LOWP vec4 v_dark;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\n\nvoid main () {\n\tvec4 texColor = texture2D(u_texture, v_texCoords);\n\tgl_FragColor.a = texColor.a * v_light.a;\n\tgl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;\n}\n")
        }
        static newColored(t) {
          return new s(t, `\nattribute vec4 ${s.POSITION};\nattribute vec4 ${s.COLOR};\nuniform mat4 ${s.MVP_MATRIX};\nvarying vec4 v_color;\n\nvoid main () {\n\tv_color = ${s.COLOR};\n\tgl_Position = ${s.MVP_MATRIX} * ${s.POSITION};\n}\n`, "\n#ifdef GL_ES\n\t#define LOWP lowp\n\tprecision mediump float;\n#else\n\t#define LOWP\n#endif\nvarying LOWP vec4 v_color;\n\nvoid main () {\n\tgl_FragColor = v_color;\n}\n")
        }
      }
    },
    2940: function (t, e, i) {
      i.d(e, {
        F: function () {
          return a
        },
        I: function () {
          return r
        }
      });
      var r, s = i(5252),
        n = i(6413),
        o = i(5875);
      class a {
        context;
        isDrawing = !1;
        mesh;
        shapeType = r.Filled;
        color = new s.Q1(1, 1, 1, 1);
        shader = null;
        vertexIndex = 0;
        tmp = new s.pM;
        srcColorBlend;
        srcAlphaBlend;
        dstBlend;
        constructor(t, e = 10920) {
          if (e > 10920) throw new Error(`Can't have more than 10920 triangles per batch: ${e}`);
          this.context = t instanceof o.O ? t : new o.O(t), this.mesh = new n.e(t, [new n.QD, new n.wJ], e, 0);
          const i = this.context.gl;
          this.srcColorBlend = i.SRC_ALPHA, this.srcAlphaBlend = i.ONE, this.dstBlend = i.ONE_MINUS_SRC_ALPHA
        }
        begin(t) {
          if (this.isDrawing) throw new Error("ShapeRenderer.begin() has already been called");
          this.shader = t, this.vertexIndex = 0, this.isDrawing = !0;
          const e = this.context.gl;
          e.enable(e.BLEND), e.blendFuncSeparate(this.srcColorBlend, this.dstBlend, this.srcAlphaBlend, this.dstBlend)
        }
        setBlendMode(t, e, i) {
          if (this.srcColorBlend = t, this.srcAlphaBlend = e, this.dstBlend = i, this.isDrawing) {
            this.flush();
            this.context.gl.blendFuncSeparate(t, i, e, i)
          }
        }
        setColor(t) {
          this.color.setFromColor(t)
        }
        setColorWith(t, e, i, r) {
          this.color.set(t, e, i, r)
        }
        point(t, e, i) {
          this.check(r.Point, 1), i || (i = this.color), this.vertex(t, e, i)
        }
        line(t, e, i, s, n) {
          this.check(r.Line, 2), n || (n = this.color), this.vertex(t, e, n), this.vertex(i, s, n)
        }
        triangle(t, e, i, s, n, o, a, h, l, c) {
          this.check(t ? r.Filled : r.Line, 3), h || (h = this.color), l || (l = this.color), c || (c = this.color), t ? (this.vertex(e, i, h), this.vertex(s, n, l), this.vertex(o, a, c)) : (this.vertex(e, i, h), this.vertex(s, n, l), this.vertex(s, n, h), this.vertex(o, a, l), this.vertex(o, a, h), this.vertex(e, i, l))
        }
        quad(t, e, i, s, n, o, a, h, l, c, d, g, f) {
          this.check(t ? r.Filled : r.Line, 3), c || (c = this.color), d || (d = this.color), g || (g = this.color), f || (f = this.color), t ? (this.vertex(e, i, c), this.vertex(s, n, d), this.vertex(o, a, g), this.vertex(o, a, g), this.vertex(h, l, f), this.vertex(e, i, c)) : (this.vertex(e, i, c), this.vertex(s, n, d), this.vertex(s, n, d), this.vertex(o, a, g), this.vertex(o, a, g), this.vertex(h, l, f), this.vertex(h, l, f), this.vertex(e, i, c))
        }
        rect(t, e, i, r, s, n) {
          this.quad(t, e, i, e + r, i, e + r, i + s, e, i + s, n, n, n, n)
        }
        rectLine(t, e, i, s, n, o, a) {
          this.check(t ? r.Filled : r.Line, 8), a || (a = this.color);
          const h = this.tmp.set(n - i, e - s);
          h.normalize(), o *= .5;
          const l = h.x * o,
            c = h.y * o;
          t ? (this.vertex(e + l, i + c, a), this.vertex(e - l, i - c, a), this.vertex(s + l, n + c, a), this.vertex(s - l, n - c, a), this.vertex(s + l, n + c, a), this.vertex(e - l, i - c, a)) : (this.vertex(e + l, i + c, a), this.vertex(e - l, i - c, a), this.vertex(s + l, n + c, a), this.vertex(s - l, n - c, a), this.vertex(s + l, n + c, a), this.vertex(e + l, i + c, a), this.vertex(s - l, n - c, a), this.vertex(e - l, i - c, a))
        }
        x(t, e, i) {
          this.line(t - i, e - i, t + i, e + i), this.line(t - i, e + i, t + i, e - i)
        }
        polygon(t, e, i, s) {
          if (i < 3) throw new Error("Polygon must contain at least 3 vertices");
          this.check(r.Line, 2 * i), s || (s = this.color), i <<= 1;
          const n = t[e <<= 1],
            o = t[e + 1],
            a = e + i;
          for (let r = e, h = e + i - 2; r < h; r += 2) {
            const e = t[r],
              i = t[r + 1];
            let h = 0,
              l = 0;
            r + 2 >= a ? (h = n, l = o) : (h = t[r + 2], l = t[r + 3]), this.vertex(e, i, s), this.vertex(h, l, s)
          }
        }
        circle(t, e, i, n, o, a = 0) {
          if (0 === a && (a = Math.max(1, 6 * s.cj.cbrt(n) | 0)), a <= 0) throw new Error("segments must be > 0.");
          o || (o = this.color);
          const h = 2 * s.cj.PI / a,
            l = Math.cos(h),
            c = Math.sin(h);
          let d = n,
            g = 0;
          if (t) {
            this.check(r.Filled, 3 * a + 3), a--;
            for (let t = 0; t < a; t++) {
              this.vertex(e, i, o), this.vertex(e + d, i + g, o);
              const t = d;
              d = l * d - c * g, g = c * t + l * g, this.vertex(e + d, i + g, o)
            }
            this.vertex(e, i, o), this.vertex(e + d, i + g, o)
          } else {
            this.check(r.Line, 2 * a + 2);
            for (let t = 0; t < a; t++) {
              this.vertex(e + d, i + g, o);
              const t = d;
              d = l * d - c * g, g = c * t + l * g, this.vertex(e + d, i + g, o)
            }
            this.vertex(e + d, i + g, o)
          }
          d = n, g = 0, this.vertex(e + d, i + g, o)
        }
        curve(t, e, i, s, n, o, a, h, l, c) {
          this.check(r.Line, 2 * l + 2), c || (c = this.color);
          const d = 1 / l,
            g = d * d,
            f = d * d * d,
            p = 3 * d,
            v = 3 * g,
            m = 6 * g,
            u = 6 * f,
            x = t - 2 * i + n,
            w = e - 2 * s + o,
            C = 3 * (i - n) - t + a,
            L = 3 * (s - o) - e + h;
          let S = t,
            O = e,
            b = (i - t) * p + x * v + C * f,
            _ = (s - e) * p + w * v + L * f,
            P = x * m + C * u,
            A = w * m + L * u;
          const E = C * u,
            T = L * u;
          for (; l-- > 0;) this.vertex(S, O, c), S += b, O += _, b += P, _ += A, P += E, A += T, this.vertex(S, O, c);
          this.vertex(S, O, c), this.vertex(a, h, c)
        }
        vertex(t, e, i) {
          let r = this.vertexIndex;
          const s = this.mesh.getVertices();
          s[r++] = t, s[r++] = e, s[r++] = i.r, s[r++] = i.g, s[r++] = i.b, s[r++] = i.a, this.vertexIndex = r
        }
        end() {
          if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
          this.flush();
          const t = this.context.gl;
          t.disable(t.BLEND), this.isDrawing = !1
        }
        flush() {
          if (0 !== this.vertexIndex) {
            if (!this.shader) throw new Error("No shader set.");
            this.mesh.setVerticesLength(this.vertexIndex), this.mesh.draw(this.shader, this.shapeType), this.vertexIndex = 0
          }
        }
        check(t, e) {
          if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
          if (this.shapeType === t) {
            if (!(this.mesh.maxVertices() - this.mesh.numVertices() < e)) return;
            this.flush()
          } else this.flush(), this.shapeType = t
        }
        dispose() {
          this.mesh.dispose()
        }
      }! function (t) {
        t[t.Point = 0] = "Point", t[t.Line = 1] = "Line", t[t.Filled = 4] = "Filled"
      }(r || (r = {}))
    },
    551: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n
        }
      });
      var r = i(5252),
        s = i(5875);
      class n {
        boneLineColor = new r.Q1(1, 0, 0, 1);
        boneOriginColor = new r.Q1(0, 1, 0, 1);
        attachmentLineColor = new r.Q1(0, 0, 1, .5);
        triangleLineColor = new r.Q1(1, .64, 0, .5);
        pathColor = (new r.Q1).setFromString("FF7F00");
        clipColor = new r.Q1(.8, 0, 0, 2);
        aabbColor = new r.Q1(0, 1, 0, .5);
        drawBones = !0;
        drawRegionAttachments = !0;
        drawBoundingBoxes = !0;
        drawMeshHull = !0;
        drawMeshTriangles = !0;
        drawPaths = !0;
        drawSkeletonXY = !1;
        drawClipping = !0;
        scale = 1;
        boneWidth = 2;
        context;
        bounds = new r.VT;
        temp = [];
        vertices = r.Aq.newFloatArray(2048);
        static LIGHT_GRAY = new r.Q1(192 / 255, 192 / 255, 192 / 255, 1);
        static GREEN = new r.Q1(0, 1, 0, 1);
        constructor(t) {
          this.context = t instanceof s.O ? t : new s.O(t)
        }
        draw(t, e, i) {
          const s = e.x,
            o = e.y,
            a = this.context.gl;
          t.setBlendMode(a.ONE, a.ONE, a.ONE_MINUS_SRC_ALPHA);
          const h = e.bones;
          if (this.drawBones) {
            t.setColor(this.boneLineColor);
            for (let e = 0, r = h.length; e < r; e++) {
              const r = h[e];
              if (i && i.indexOf(r.data.name) > -1) continue;
              if (!r.parent) continue;
              const s = r.appliedPose,
                n = r.data.length * s.a + s.worldX,
                o = r.data.length * s.c + s.worldY;
              t.rectLine(!0, s.worldX, s.worldY, n, o, this.boneWidth * this.scale)
            }
            this.drawSkeletonXY && t.x(s, o, 4 * this.scale)
          }
          if (this.drawRegionAttachments) {
            t.setColor(this.attachmentLineColor);
            const i = e.slots;
            for (let e = 0, s = i.length; e < s; e++) {
              const s = i[e];
              if (!s.bone.active) continue;
              const n = s.appliedPose.attachment;
              if (n instanceof r.Qb) {
                const e = this.vertices;
                n.computeWorldVertices(s, n.getOffsets(s.appliedPose), e, 0, 2), t.line(e[0], e[1], e[2], e[3]), t.line(e[2], e[3], e[4], e[5]), t.line(e[4], e[5], e[6], e[7]), t.line(e[6], e[7], e[0], e[1])
              }
            }
          }
          if (this.drawMeshHull || this.drawMeshTriangles) {
            const i = e.slots;
            for (let s = 0, n = i.length; s < n; s++) {
              const n = i[s];
              if (!n.bone.active) continue;
              const o = n.appliedPose.attachment;
              if (!(o instanceof r.fj)) continue;
              const a = this.vertices;
              o.computeWorldVertices(e, n, 0, o.worldVerticesLength, a, 0, 2);
              const h = o.triangles;
              let l = o.hullLength;
              if (this.drawMeshTriangles) {
                t.setColor(this.triangleLineColor);
                for (let e = 0, i = h.length; e < i; e += 3) {
                  const i = 2 * h[e],
                    r = 2 * h[e + 1],
                    s = 2 * h[e + 2];
                  t.triangle(!1, a[i], a[i + 1], a[r], a[r + 1], a[s], a[s + 1])
                }
              }
              if (this.drawMeshHull && l > 0) {
                t.setColor(this.attachmentLineColor), l = 2 * (l >> 1);
                let e = a[l - 2],
                  i = a[l - 1];
                for (let r = 0, s = l; r < s; r += 2) {
                  const s = a[r],
                    n = a[r + 1];
                  t.line(s, n, e, i), e = s, i = n
                }
              }
            }
          }
          if (this.drawBoundingBoxes) {
            const i = this.bounds;
            i.update(e, !0), t.setColor(this.aabbColor), t.rect(!1, i.minX, i.minY, i.getWidth(), i.getHeight());
            const r = i.polygons,
              s = i.boundingBoxes;
            for (let e = 0, i = r.length; e < i; e++) {
              const i = r[e];
              t.setColor(s[e].color), t.polygon(i, 0, i.length)
            }
          }
          if (this.drawPaths) {
            const i = e.slots;
            for (let s = 0, o = i.length; s < o; s++) {
              const o = i[s];
              if (!o.bone.active) continue;
              const a = o.appliedPose.attachment;
              if (!(a instanceof r.He)) continue;
              let h = a.worldVerticesLength;
              const l = this.temp = r.Aq.setArraySize(this.temp, h, 0);
              a.computeWorldVertices(e, o, 0, h, l, 0, 2);
              const c = this.pathColor;
              let d = l[2],
                g = l[3],
                f = 0,
                p = 0;
              if (a.closed) {
                t.setColor(c);
                const e = l[0],
                  i = l[1],
                  r = l[h - 2],
                  s = l[h - 1];
                f = l[h - 4], p = l[h - 3], t.curve(d, g, e, i, r, s, f, p, 32), t.setColor(n.LIGHT_GRAY), t.line(d, g, e, i), t.line(f, p, r, s)
              }
              h -= 4;
              for (let e = 4; e < h; e += 6) {
                const i = l[e],
                  r = l[e + 1],
                  s = l[e + 2],
                  o = l[e + 3];
                f = l[e + 4], p = l[e + 5], t.setColor(c), t.curve(d, g, i, r, s, o, f, p, 32), t.setColor(n.LIGHT_GRAY), t.line(d, g, i, r), t.line(f, p, s, o), d = f, g = p
              }
            }
          }
          if (this.drawBones) {
            t.setColor(this.boneOriginColor);
            for (let e = 0, r = h.length; e < r; e++) {
              const r = h[e];
              if (i && i.indexOf(r.data.name) > -1) continue;
              const s = r.appliedPose;
              t.circle(!0, s.worldX, s.worldY, 3 * this.scale, this.boneOriginColor, 8)
            }
          }
          if (this.drawClipping) {
            const i = e.slots;
            t.setColor(this.clipColor);
            for (let s = 0, n = i.length; s < n; s++) {
              const n = i[s];
              if (!n.bone.active) continue;
              const o = n.appliedPose.attachment;
              if (!(o instanceof r.K$)) continue;
              const a = o.worldVerticesLength,
                h = this.temp = r.Aq.setArraySize(this.temp, a, 0);
              o.computeWorldVertices(e, n, 0, a, h, 0, 2);
              for (let e = 0, i = h.length; e < i; e += 2) {
                const i = h[e],
                  r = h[e + 1],
                  s = h[(e + 2) % h.length],
                  n = h[(e + 3) % h.length];
                t.line(i, r, s, n)
              }
            }
          }
        }
        dispose() {}
      }
    },
    2460: function (t, e, i) {
      i.d(e, {
        d: function () {
          return n
        }
      });
      var r = i(5252);
      class s {
        vertices;
        numVertices;
        numFloats;
        constructor(t, e, i) {
          this.vertices = t, this.numVertices = e, this.numFloats = i
        }
      }
      class n {
        static QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
        tempColor = new r.Q1;
        tempColor2 = new r.Q1;
        vertices;
        vertexSize = 8;
        twoColorTint = !1;
        renderable = new s([], 0, 0);
        clipper = new r.qy;
        pmaAdditiveBatching = !0;
        constructor(t, e = !0) {
          this.twoColorTint = e, e && (this.vertexSize += 4), this.vertices = r.Aq.newFloatArray(1024 * this.vertexSize)
        }
        draw(t, e, i = -1, s = -1, o = null) {
          const a = this.clipper,
            h = this.twoColorTint;
          let l = null;
          const c = this.renderable;
          let d, g;
          const f = e.drawOrder.appliedPose;
          let p;
          const v = e.color,
            m = h ? 12 : 8;
          let u = !1; - 1 === i && (u = !0);
          for (let x = 0, w = f.length; x < w; x++) {
            const w = f[x];
            if (!w.bone.active) {
              a.clipEnd(w);
              continue
            }
            if (i >= 0 && i === w.data.index && (u = !0), !u) {
              a.clipEnd(w);
              continue
            }
            s >= 0 && s === w.data.index && (u = !1);
            const C = w.appliedPose,
              L = C.attachment;
            let S;
            if (L instanceof r.Qb) {
              c.vertices = this.vertices, c.numVertices = 4, c.numFloats = m << 2;
              const t = L.sequence,
                e = t.resolveIndex(C);
              L.computeWorldVertices(w, L.getOffsets(C), c.vertices, 0, m), g = n.QUAD_TRIANGLES, d = t.getUVs(e), S = t.regions[e]?.texture, p = L.color
            } else {
              if (!(L instanceof r.fj)) {
                if (L instanceof r.K$) {
                  a.clipEnd(w), a.clipStart(e, w, L);
                  continue
                }
                a.clipEnd(w);
                continue
              } {
                c.vertices = this.vertices, c.numVertices = L.worldVerticesLength >> 1, c.numFloats = c.numVertices * m, c.numFloats > c.vertices.length && (c.vertices = this.vertices = r.Aq.newFloatArray(c.numFloats)), L.computeWorldVertices(e, w, 0, L.worldVerticesLength, c.vertices, 0, m), g = L.triangles;
                const t = L.sequence,
                  i = t.resolveIndex(C);
                S = t.regions[i]?.texture, d = t.getUVs(i), p = L.color
              }
            }
            if (S) {
              const e = C.color,
                i = this.tempColor,
                s = v.a * e.a * p.a;
              i.r = v.r * e.r * p.r * s, i.g = v.g * e.g * p.g * s, i.b = v.b * e.b * p.b * s;
              const n = w.data.blendMode,
                f = this.pmaAdditiveBatching && n === r.Nx.Additive;
              i.a = f ? 0 : s;
              const u = this.tempColor2;
              C.darkColor ? (u.r = C.darkColor.r * s, u.g = C.darkColor.g * s, u.b = C.darkColor.b * s, u.a = 1) : u.set(0, 0, 0, 1);
              const x = f ? r.Nx.Normal : n;
              if (x !== l && (l = x, t.setBlendMode(l)), a.isClipping() && a.clipTriangles(c.vertices, g, g.length, d, i, u, h, m)) {
                const e = new Float32Array(a.clippedVertices),
                  i = a.clippedTriangles;
                o && o(e, e.length, m), t.draw(S, e, i)
              } else {
                const e = c.vertices;
                if (h)
                  for (let t = 2, r = 0, s = c.numFloats; t < s; t += m, r += 2) e[t] = i.r, e[t + 1] = i.g, e[t + 2] = i.b, e[t + 3] = i.a, e[t + 4] = d[r], e[t + 5] = d[r + 1], e[t + 6] = u.r, e[t + 7] = u.g, e[t + 8] = u.b, e[t + 9] = u.a;
                else
                  for (let t = 2, r = 0, s = c.numFloats; t < s; t += m, r += 2) e[t] = i.r, e[t + 1] = i.g, e[t + 2] = i.b, e[t + 3] = i.a, e[t + 4] = d[r], e[t + 5] = d[r + 1];
                const r = c.vertices.subarray(0, c.numFloats);
                o && o(c.vertices, c.numFloats, m), t.draw(S, r, g)
              }
            }
            a.clipEnd(w)
          }
          a.clipEnd()
        }
        getSkeletonClipping() {
          return this.clipper
        }
      }
    },
    3809: function (t, e, i) {
      i.d(e, {
        I: function () {
          return s
        }
      });
      var r = i(6446);
      class s {
        config;
        context;
        time = new r.oMS;
        htmlCanvas;
        gl;
        renderer;
        assetManager;
        input;
        disposed = !1;
        constructor(t, e) {
          this.config = e, e.pathPrefix || (e.pathPrefix = ""), e.app || (e.app = {
            loadAssets: () => {},
            initialize: () => {},
            update: () => {},
            render: () => {},
            error: () => {},
            dispose: () => {}
          }), e.webglConfig || (e.webglConfig = {
            alpha: !0
          }), this.htmlCanvas = t, this.context = new r.Omg(t, e.webglConfig), this.renderer = new r.Mvo(t, this.context), this.gl = this.context.gl, this.assetManager = new r.EaC(this.context, e.pathPrefix), this.input = new r.pde(t), e.app.loadAssets && e.app.loadAssets(this);
          const i = () => {
              this.disposed || (requestAnimationFrame(i), this.time.update(), e.app.update && e.app.update(this, this.time.delta), e.app.render && e.app.render(this))
            },
            s = () => {
              this.disposed || (this.assetManager.isLoadingComplete() ? this.assetManager.hasErrors() ? e.app.error && e.app.error(this, this.assetManager.getErrors()) : (e.app.initialize && e.app.initialize(this), i()) : requestAnimationFrame(s))
            };
          requestAnimationFrame(s)
        }
        clear(t, e, i, r) {
          this.gl.clearColor(t, e, i, r), this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        }
        dispose() {
          this.config.app.dispose && this.config.app.dispose(this), this.disposed = !0
        }
      }
    }
  }
]);