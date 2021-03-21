(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };

  // dist/build/_fallback-3f403429.js
  var require_fallback_3f403429 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => fallback_3f403429_default2
    });
    function v2(s2) {
      let a2, e2, d2, f2, v3, m3, p3, g2;
      return {c() {
        a2 = $("div"), e2 = $("div"), e2.textContent = "404", d2 = _(), f2 = $("div"), v3 = w("Page not found. \n  \n  "), m3 = $("a"), p3 = w("Go back"), k(e2, "class", "huge svelte-viq1pm"), k(m3, "href", g2 = s2[0]("../")), k(f2, "class", "big"), k(a2, "class", "e404 svelte-viq1pm");
      }, m(s3, t3) {
        m(s3, a2, t3), h(a2, e2), h(a2, d2), h(a2, f2), h(f2, v3), h(f2, m3), h(m3, p3);
      }, p(s3, [a3]) {
        1 & a3 && g2 !== (g2 = s3[0]("../")) && k(m3, "href", g2);
      }, i: t2, o: t2, d(s3) {
        s3 && g(a2);
      }};
    }
    function m2(s2, a2, e2) {
      let t3;
      return l(s2, Vt, (s3) => e2(0, t3 = s3)), [t3];
    }
    var fallback_3f403429_default = class extends ut {
      constructor(s2) {
        super(), lt(this, s2, m2, v2, i2, {});
      }
    };
    var fallback_3f403429_default2 = fallback_3f403429_default;
  });

  // dist/build/index-856fca81.js
  var require_index_856fca81 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_856fca81_default2
    });
    function H2(t3, n2, e2) {
      const i3 = t3.slice();
      return i3[11] = n2[e2], i3;
    }
    function L2(t3) {
      let n2, e2, d2, m2, f2, h2, v2, b2, x2, y2, $2, D2, j2, w2, H3, L3 = t3[2].img && k2(t3), M3 = t3[2].price && F2(t3), I3 = t3[2].body && T2(t3), C3 = t3[2].extra && q2(t3);
      return {c() {
        n2 = $("div"), e2 = $("div"), L3 && L3.c(), d2 = _(), m2 = $("div"), M3 && M3.c(), f2 = _(), h2 = $("div"), v2 = $("div"), b2 = $("input"), x2 = _(), y2 = $("div"), $2 = $("button"), $2.textContent = "Lis\xE4\xE4 ostoskoriin", D2 = _(), I3 && I3.c(), j2 = _(), C3 && C3.c(), k(e2, "id", "img"), k(b2, "name", "amount"), k(b2, "type", "number"), k(b2, "min", t3[3]), k(b2, "step", "1"), b2.required = true, k(b2, "class", "svelte-4nnwr5"), k($2, "class", "w100 svelte-4nnwr5"), k(h2, "id", "cartIt"), k(h2, "class", "border grid svelte-4nnwr5"), k(m2, "id", "productInfo"), k(n2, "id", "product"), k(n2, "class", "container double grid");
      }, m(i3, r2) {
        m(i3, n2, r2), h(n2, e2), L3 && L3.m(e2, null), h(n2, d2), h(n2, m2), M3 && M3.m(m2, null), h(m2, f2), h(m2, h2), h(h2, v2), h(v2, b2), O(b2, t3[0]), h(h2, x2), h(h2, y2), h(y2, $2), h(m2, D2), I3 && I3.m(m2, null), h(m2, j2), C3 && C3.m(m2, null), w2 || (H3 = [v(b2, "input", t3[7]), v($2, "click", t3[5])], w2 = true);
      }, p(t4, n3) {
        t4[2].img ? L3 ? L3.p(t4, n3) : (L3 = k2(t4), L3.c(), L3.m(e2, null)) : L3 && (L3.d(1), L3 = null), t4[2].price ? M3 ? M3.p(t4, n3) : (M3 = F2(t4), M3.c(), M3.m(m2, f2)) : M3 && (M3.d(1), M3 = null), 8 & n3 && k(b2, "min", t4[3]), 1 & n3 && j(b2.value) !== t4[0] && O(b2, t4[0]), t4[2].body ? I3 ? I3.p(t4, n3) : (I3 = T2(t4), I3.c(), I3.m(m2, j2)) : I3 && (I3.d(1), I3 = null), t4[2].extra ? C3 ? C3.p(t4, n3) : (C3 = q2(t4), C3.c(), C3.m(m2, null)) : C3 && (C3.d(1), C3 = null);
      }, d(t4) {
        t4 && g(n2), L3 && L3.d(), M3 && M3.d(), I3 && I3.d(), C3 && C3.d(), w2 = false, r(H3);
      }};
    }
    function k2(t3) {
      let n2, e2, o4, u2, d2, m2, p3, f2, g2, h2;
      return {c() {
        n2 = $("picture"), e2 = $("source"), u2 = _(), d2 = $("source"), p3 = _(), f2 = $("img"), k(e2, "srcset", o4 = t3[2].img[1]), k(e2, "type", "image/webp"), k(d2, "srcset", m2 = t3[2].img[0]), k(d2, "type", "image/jpeg"), f2.src !== (g2 = t3[2].img[0]) && k(f2, "src", g2), k(f2, "alt", h2 = t3[2].title), k(n2, "class", "block");
      }, m(t4, i3) {
        m(t4, n2, i3), h(n2, e2), h(n2, u2), h(n2, d2), h(n2, p3), h(n2, f2);
      }, p(t4, n3) {
        4 & n3 && o4 !== (o4 = t4[2].img[1]) && k(e2, "srcset", o4), 4 & n3 && m2 !== (m2 = t4[2].img[0]) && k(d2, "srcset", m2), 4 & n3 && f2.src !== (g2 = t4[2].img[0]) && k(f2, "src", g2), 4 & n3 && h2 !== (h2 = t4[2].title) && k(f2, "alt", h2);
      }, d(t4) {
        t4 && g(n2);
      }};
    }
    function F2(t3) {
      let n2, e2, o4, u2, p3, f2, g2 = t3[1].toFixed(2) + "", h2 = t3[0] > 1 && M2(t3);
      return {c() {
        n2 = $("div"), e2 = w("Hinta: "), o4 = $("strong"), u2 = w(g2), p3 = w(" \u20AC"), f2 = _(), h2 && h2.c(), k(n2, "id", "price");
      }, m(t4, i3) {
        m(t4, n2, i3), h(n2, e2), h(n2, o4), h(o4, u2), h(o4, p3), h(n2, f2), h2 && h2.m(n2, null);
      }, p(t4, e3) {
        2 & e3 && g2 !== (g2 = t4[1].toFixed(2) + "") && E(u2, g2), t4[0] > 1 ? h2 ? h2.p(t4, e3) : (h2 = M2(t4), h2.c(), h2.m(n2, null)) : h2 && (h2.d(1), h2 = null);
      }, d(t4) {
        t4 && g(n2), h2 && h2.d();
      }};
    }
    function M2(t3) {
      let n2, e2, s2, o4, u2, p3, f2, g2 = t3[4].toFixed(2) + "";
      return {c() {
        n2 = $("br"), e2 = _(), s2 = $("small"), o4 = w("Yhteens\xE4: "), u2 = $("strong"), p3 = w(g2), f2 = w(" \u20AC");
      }, m(t4, i3) {
        m(t4, n2, i3), m(t4, e2, i3), m(t4, s2, i3), h(s2, o4), h(s2, u2), h(u2, p3), h(u2, f2);
      }, p(t4, n3) {
        16 & n3 && g2 !== (g2 = t4[4].toFixed(2) + "") && E(p3, g2);
      }, d(t4) {
        t4 && g(n2), t4 && g(e2), t4 && g(s2);
      }};
    }
    function T2(t3) {
      let n2, e2 = t3[2].body + "";
      return {c() {
        n2 = $("div"), k(n2, "id", "body");
      }, m(t4, i3) {
        m(t4, n2, i3), n2.innerHTML = e2;
      }, p(t4, i3) {
        4 & i3 && e2 !== (e2 = t4[2].body + "") && (n2.innerHTML = e2);
      }, d(t4) {
        t4 && g(n2);
      }};
    }
    function q2(t3) {
      let n2, e2, r2 = t3[2].extra, o4 = [];
      for (let n3 = 0; n3 < r2.length; n3 += 1)
        o4[n3] = I2(H2(t3, r2, n3));
      return {c() {
        n2 = $("div"), e2 = $("ul");
        for (let t4 = 0; t4 < o4.length; t4 += 1)
          o4[t4].c();
        k(n2, "id", "extra");
      }, m(t4, i3) {
        m(t4, n2, i3), h(n2, e2);
        for (let t5 = 0; t5 < o4.length; t5 += 1)
          o4[t5].m(e2, null);
      }, p(t4, n3) {
        if (4 & n3) {
          let i3;
          for (r2 = t4[2].extra, i3 = 0; i3 < r2.length; i3 += 1) {
            const s2 = H2(t4, r2, i3);
            o4[i3] ? o4[i3].p(s2, n3) : (o4[i3] = I2(s2), o4[i3].c(), o4[i3].m(e2, null));
          }
          for (; i3 < o4.length; i3 += 1)
            o4[i3].d(1);
          o4.length = r2.length;
        }
      }, d(t4) {
        t4 && g(n2), y(o4, t4);
      }};
    }
    function I2(t3) {
      let n2, e2 = t3[11].name + "";
      return {c() {
        n2 = $("li");
      }, m(t4, i3) {
        m(t4, n2, i3), n2.innerHTML = e2;
      }, p(t4, i3) {
        4 & i3 && e2 !== (e2 = t4[11].name + "") && (n2.innerHTML = e2);
      }, d(t4) {
        t4 && g(n2);
      }};
    }
    function C2(t3) {
      let n2, e2 = t3[2] && L2(t3);
      return {c() {
        e2 && e2.c(), n2 = x();
      }, m(t4, i3) {
        e2 && e2.m(t4, i3), m(t4, n2, i3);
      }, p(t4, [i3]) {
        t4[2] ? e2 ? e2.p(t4, i3) : (e2 = L2(t4), e2.c(), e2.m(n2.parentNode, n2)) : e2 && (e2.d(1), e2 = null);
      }, i: t2, o: t2, d(t4) {
        e2 && e2.d(t4), t4 && g(n2);
      }};
    }
    function E2(t3, n2, e2) {
      let i3, r2, s2, c2, l2, o4, u2, a2;
      return l(t3, i, (t4) => e2(2, l2 = t4)), l(t3, Jt, (t4) => e2(8, o4 = t4)), l(t3, p, (t4) => e2(9, u2 = t4)), l(t3, Qt, (t4) => e2(6, a2 = t4)), t3.$$.update = () => {
        var n3;
        4 & t3.$$.dirty && e2(1, s2 = l2.price), 64 & t3.$$.dirty && a2.slug && (n3 = "path=" + a2.slug, o2(n3).then((t4) => {
          i.set(t4), l2.amountDiscounts && l2.amountDiscounts[0] && e2(0, i3 = e2(3, r2 = l2.amountDiscounts[0].amount)), o4();
        })), 7 & t3.$$.dirty && l2 && i3 && (l2.amountDiscounts && (e2(1, s2 = l2.price), l2.amountDiscounts.forEach(function(t4) {
          t4.amount <= i3 && e2(1, s2 = t4.price);
        })), e2(4, c2 = s2 * i3));
      }, e2(0, i3 = 1), e2(3, r2 = 1), e2(4, c2 = 0), [i3, s2, l2, r2, c2, function() {
        let t4 = {id: l2.id, title: l2.title, price: l2.price, price2: s2, amount: i3, total: c2};
        l2.amountDiscounts, d(p, u2.price += s2, u2), d(p, u2.total += c2, u2), d(p, u2.amount += i3, u2), u2.products.push(t4);
      }, a2, function() {
        i3 = j(this.value), e2(0, i3);
      }];
    }
    var index_856fca81_default = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, E2, C2, i2, {});
      }
    };
    var index_856fca81_default2 = index_856fca81_default;
  });

  // dist/build/index-598ff8d5.js
  var require_index_598ff8d5 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_598ff8d5_default2
    });
    function v2(t3, e2, s2) {
      const l2 = t3.slice();
      return l2[4] = e2[s2], l2;
    }
    function j2(t3, e2, s2) {
      const l2 = t3.slice();
      return l2[4] = e2[s2], l2;
    }
    function $2(t3) {
      let e2, s2 = t3[0].items, n2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        n2[e3] = F2(v2(t3, s2, e3));
      return {c() {
        e2 = $("div");
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].c();
        k(e2, "id", "products"), k(e2, "class", "tc grid bold");
      }, m(t4, s3) {
        m(t4, e2, s3);
        for (let t5 = 0; t5 < n2.length; t5 += 1)
          n2[t5].m(e2, null);
      }, p(t4, l2) {
        if (1 & l2) {
          let r2;
          for (s2 = t4[0].items, r2 = 0; r2 < s2.length; r2 += 1) {
            const c2 = v2(t4, s2, r2);
            n2[r2] ? n2[r2].p(c2, l2) : (n2[r2] = F2(c2), n2[r2].c(), n2[r2].m(e2, null));
          }
          for (; r2 < n2.length; r2 += 1)
            n2[r2].d(1);
          n2.length = s2.length;
        }
      }, d(t4) {
        t4 && g(e2), y(n2, t4);
      }};
    }
    function y2(t3) {
      let e2, s2 = t3[4].extra, n2 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        n2[e3] = k2(j2(t3, s2, e3));
      return {c() {
        e2 = $("div");
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].c();
        k(e2, "class", "extra");
      }, m(t4, s3) {
        m(t4, e2, s3);
        for (let t5 = 0; t5 < n2.length; t5 += 1)
          n2[t5].m(e2, null);
      }, p(t4, l2) {
        if (1 & l2) {
          let r2;
          for (s2 = t4[4].extra, r2 = 0; r2 < s2.length; r2 += 1) {
            const c2 = j2(t4, s2, r2);
            n2[r2] ? n2[r2].p(c2, l2) : (n2[r2] = k2(c2), n2[r2].c(), n2[r2].m(e2, null));
          }
          for (; r2 < n2.length; r2 += 1)
            n2[r2].d(1);
          n2.length = s2.length;
        }
      }, d(t4) {
        t4 && g(e2), y(n2, t4);
      }};
    }
    function k2(t3) {
      let e2, s2, d2, p3, u2 = t3[4].abbr + "";
      return {c() {
        e2 = $("div"), s2 = $("span"), d2 = w(u2), p3 = _(), k(s2, "class", "grid cell"), k(e2, "class", "inl");
      }, m(t4, l2) {
        m(t4, e2, l2), h(e2, s2), h(s2, d2), h(e2, p3);
      }, p(t4, e3) {
        1 & e3 && u2 !== (u2 = t4[4].abbr + "") && E(d2, u2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function F2(t3) {
      let e2, s2, d2, p3, u2, f2, g2, h2, b2, x2, v3, j3, $3, k3, F3, q3, w3, N2, S2, z2, A2, B2 = t3[4].title + "", C2 = t3[4].price.toFixed(2) + "", D2 = t3[4].extra && y2(t3);
      return {c() {
        e2 = $("a"), s2 = $("picture"), d2 = $("source"), u2 = _(), f2 = $("source"), h2 = _(), b2 = $("img"), j3 = _(), $3 = $("div"), k3 = w(B2), F3 = _(), q3 = $("div"), w3 = w(C2), N2 = w(" \u20AC"), S2 = _(), D2 && D2.c(), z2 = _(), k(d2, "srcset", p3 = t3[4].img[1]), k(d2, "type", "image/webp"), k(f2, "srcset", g2 = t3[4].img[0]), k(f2, "type", "image/jpeg"), b2.src !== (x2 = t3[4].img[0]) && k(b2, "src", x2), k(b2, "alt", v3 = t3[4].title), k(s2, "class", "block"), k($3, "class", "title"), k(q3, "class", "price"), k(e2, "class", "block"), k(e2, "href", A2 = t3[4].path);
      }, m(t4, l2) {
        m(t4, e2, l2), h(e2, s2), h(s2, d2), h(s2, u2), h(s2, f2), h(s2, h2), h(s2, b2), h(e2, j3), h(e2, $3), h($3, k3), h(e2, F3), h(e2, q3), h(q3, w3), h(q3, N2), h(e2, S2), D2 && D2.m(e2, null), h(e2, z2);
      }, p(t4, s3) {
        1 & s3 && p3 !== (p3 = t4[4].img[1]) && k(d2, "srcset", p3), 1 & s3 && g2 !== (g2 = t4[4].img[0]) && k(f2, "srcset", g2), 1 & s3 && b2.src !== (x2 = t4[4].img[0]) && k(b2, "src", x2), 1 & s3 && v3 !== (v3 = t4[4].title) && k(b2, "alt", v3), 1 & s3 && B2 !== (B2 = t4[4].title + "") && E(k3, B2), 1 & s3 && C2 !== (C2 = t4[4].price.toFixed(2) + "") && E(w3, C2), t4[4].extra ? D2 ? D2.p(t4, s3) : (D2 = y2(t4), D2.c(), D2.m(e2, z2)) : D2 && (D2.d(1), D2 = null), 1 & s3 && A2 !== (A2 = t4[4].path) && k(e2, "href", A2);
      }, d(t4) {
        t4 && g(e2), D2 && D2.d();
      }};
    }
    function q2(t3) {
      let e2, s2 = t3[0].items && $2(t3);
      return {c() {
        s2 && s2.c(), e2 = x();
      }, m(t4, l2) {
        s2 && s2.m(t4, l2), m(t4, e2, l2);
      }, p(t4, [l2]) {
        t4[0].items ? s2 ? s2.p(t4, l2) : (s2 = $2(t4), s2.c(), s2.m(e2.parentNode, e2)) : s2 && (s2.d(1), s2 = null);
      }, i: t2, o: t2, d(t4) {
        s2 && s2.d(t4), t4 && g(e2);
      }};
    }
    function w2(t3, e2, s2) {
      let l2, r2, c2;
      return l(t3, Jt, (t4) => s2(2, l2 = t4)), l(t3, Qt, (t4) => s2(1, r2 = t4)), l(t3, i, (t4) => s2(0, c2 = t4)), t3.$$.update = () => {
        var e3;
        2 & t3.$$.dirty && r2.cat && (e3 = "path=" + r2.cat, o2(e3).then((t4) => {
          i.set(t4), l2();
        }));
      }, [c2, r2];
    }
    var index_598ff8d5_default = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, w2, q2, i2, {});
      }
    };
    var index_598ff8d5_default2 = index_598ff8d5_default;
  });

  // dist/build/_layout-65b252e1.js
  var require_layout_65b252e1 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_65b252e1_default2
    });
    function c2(s2) {
      let t3;
      const e2 = s2[1].default, c3 = u(e2, s2, s2[0], null);
      return {c() {
        c3 && c3.c();
      }, m(s3, e3) {
        c3 && c3.m(s3, e3), t3 = true;
      }, p(s3, [t4]) {
        c3 && c3.p && 1 & t4 && f(c3, e2, s3, s3[0], t4, null, null);
      }, i(s3) {
        t3 || (et(c3, s3), t3 = true);
      }, o(s3) {
        nt(c3, s3), t3 = false;
      }, d(s3) {
        c3 && c3.d(s3);
      }};
    }
    function u2(s2, t3, e2) {
      let {$$slots: n2 = {}, $$scope: o4} = t3;
      return s2.$$set = (s3) => {
        "$$scope" in s3 && e2(0, o4 = s3.$$scope);
      }, [o4, n2];
    }
    var layout_65b252e1_default = class extends ut {
      constructor(s2) {
        super(), lt(this, s2, u2, c2, i2, {});
      }
    };
    var layout_65b252e1_default2 = layout_65b252e1_default;
  });

  // dist/build/index-3763bcd0.js
  var require_index_3763bcd0 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_3763bcd0_default2
    });
    function p3(t3, s2, e2) {
      const l2 = t3.slice();
      return l2[1] = s2[e2], l2;
    }
    function d2(t3) {
      let s2, e2, o4, g2, f2, m2, u2, p4, d3, h3, b3, k2, j2, v2, x2, y2, H2 = t3[1].title + "";
      return {c() {
        s2 = $("a"), e2 = $("figure"), o4 = $("picture"), g2 = $("source"), m2 = _(), u2 = $("source"), d3 = _(), h3 = $("img"), j2 = _(), v2 = $("figcaption"), x2 = _(), k(g2, "srcset", f2 = t3[1].img[1]), k(g2, "type", "image/webp"), k(u2, "srcset", p4 = t3[1].img[0]), k(u2, "type", "image/jpeg"), h3.src !== (b3 = t3[1].img[0]) && k(h3, "src", b3), k(h3, "alt", k2 = t3[1].title), k(o4, "class", "block"), k(v2, "class", "block"), k(e2, "class", "block"), k(s2, "class", "block"), k(s2, "href", y2 = t3[1].path);
      }, m(t4, l2) {
        m(t4, s2, l2), h(s2, e2), h(e2, o4), h(o4, g2), h(o4, m2), h(o4, u2), h(o4, d3), h(o4, h3), h(e2, j2), h(e2, v2), v2.innerHTML = H2, h(s2, x2);
      }, p(t4, e3) {
        1 & e3 && f2 !== (f2 = t4[1].img[1]) && k(g2, "srcset", f2), 1 & e3 && p4 !== (p4 = t4[1].img[0]) && k(u2, "srcset", p4), 1 & e3 && h3.src !== (b3 = t4[1].img[0]) && k(h3, "src", b3), 1 & e3 && k2 !== (k2 = t4[1].title) && k(h3, "alt", k2), 1 & e3 && H2 !== (H2 = t4[1].title + "") && (v2.innerHTML = H2), 1 & e3 && y2 !== (y2 = t4[1].path) && k(s2, "href", y2);
      }, d(t4) {
        t4 && g(s2);
      }};
    }
    function h2(t3) {
      let s2, e2 = t3[0].nav, i3 = [];
      for (let s3 = 0; s3 < e2.length; s3 += 1)
        i3[s3] = d2(p3(t3, e2, s3));
      return {c() {
        s2 = $("div");
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].c();
        k(s2, "id", "products"), k(s2, "class", "tc grid up bold");
      }, m(t4, e3) {
        m(t4, s2, e3);
        for (let t5 = 0; t5 < i3.length; t5 += 1)
          i3[t5].m(s2, null);
      }, p(t4, [l2]) {
        if (1 & l2) {
          let r2;
          for (e2 = t4[0].nav, r2 = 0; r2 < e2.length; r2 += 1) {
            const c2 = p3(t4, e2, r2);
            i3[r2] ? i3[r2].p(c2, l2) : (i3[r2] = d2(c2), i3[r2].c(), i3[r2].m(s2, null));
          }
          for (; r2 < i3.length; r2 += 1)
            i3[r2].d(1);
          i3.length = e2.length;
        }
      }, i: t2, o: t2, d(t4) {
        t4 && g(s2), y(i3, t4);
      }};
    }
    function b2(t3, s2, e2) {
      let l2;
      return l(t3, o, (t4) => e2(0, l2 = t4)), l2.site && i.set({title: l2.site.title, slogan: l2.site.slogan}), [l2];
    }
    var index_3763bcd0_default = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, b2, h2, i2, {});
      }
    };
    var index_3763bcd0_default2 = index_3763bcd0_default;
  });

  // dist/build/kassa-3fffe89d.js
  var require_kassa_3fffe89d = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => kassa_3fffe89d_default2
    });
    var S2 = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, null, null, i2, {});
      }
    };
    function z2(t3, e2, n2) {
      const l2 = t3.slice();
      return l2[5] = e2[n2], l2[15] = e2, l2[16] = n2, l2;
    }
    function I2(t3, e2, n2) {
      const l2 = t3.slice();
      return l2[5] = e2[n2], l2;
    }
    function B2(t3, e2, n2) {
      const l2 = t3.slice();
      return l2[5] = e2[n2], l2[19] = e2, l2[20] = n2, l2;
    }
    function J2(t3) {
      let e2, n2, u2, d2;
      const m2 = [O2, E2], p3 = [];
      function f2(t4, e3) {
        return t4[2] == 0 ? 0 : 1;
      }
      return n2 = f2(t3), u2 = p3[n2] = m2[n2](t3), {c() {
        e2 = $("div"), u2.c(), k(e2, "id", "checkout"), k(e2, "class", "container rel");
      }, m(t4, l2) {
        m(t4, e2, l2), p3[n2].m(e2, null), d2 = true;
      }, p(t4, l2) {
        let s2 = n2;
        n2 = f2(t4), n2 === s2 ? p3[n2].p(t4, l2) : (Y(), nt(p3[s2], 1, 1, () => {
          p3[s2] = null;
        }), tt(), u2 = p3[n2], u2 ? u2.p(t4, l2) : (u2 = p3[n2] = m2[n2](t4), u2.c()), et(u2, 1), u2.m(e2, null));
      }, i(t4) {
        d2 || (et(u2), d2 = true);
      }, o(t4) {
        nt(u2), d2 = false;
      }, d(t4) {
        t4 && g(e2), p3[n2].d();
      }};
    }
    function E2(t3) {
      let e2, n2, s2;
      function i3(t4, e3) {
        return typeof t4[2] != "number" ? V2 : P2;
      }
      let o4 = i3(t3), c2 = o4(t3);
      return {c() {
        e2 = $("h1"), e2.textContent = "Kiitos tilauksesta", n2 = _(), c2.c(), s2 = x();
      }, m(t4, l2) {
        m(t4, e2, l2), m(t4, n2, l2), c2.m(t4, l2), m(t4, s2, l2);
      }, p(t4, e3) {
        o4 === (o4 = i3(t4)) && c2 ? c2.p(t4, e3) : (c2.d(1), c2 = o4(t4), c2 && (c2.c(), c2.m(s2.parentNode, s2)));
      }, i: t2, o: t2, d(t4) {
        t4 && g(e2), t4 && g(n2), c2.d(t4), t4 && g(s2);
      }};
    }
    function O2(t3) {
      let e2, n2, d2, m2, p3, f2, b2, T2, C2, $2, w2, F2, j2, H2, N2, K2, q2, A2, S3, I3, J3, E3, O3, P3, V3, D3, G3, X3, U3, Z3, _3, tt3, et2, nt2, lt2, st2, at2, it2, ot2, ct2, rt2, ut2, dt2, mt2, pt2, ft2, ht2, xt2, gt2 = t3[0].total.toFixed(2) + "", yt2 = t3[4].toFixed(2) + "", bt2 = t3[1].toFixed(2) + "", vt2 = t3[3].body && Y2(t3), kt2 = t3[0].products, Tt2 = [];
      for (let e3 = 0; e3 < kt2.length; e3 += 1)
        Tt2[e3] = Q2(B2(t3, kt2, e3));
      let Ct2 = t3[3].delivery && R2(t3), $t2 = t3[6].price > 0 && function(t4) {
        let e3, n3, i3, o4;
        return {c() {
          e3 = $("tr"), n3 = $("td"), n3.textContent = "Kuljetus", i3 = _(), o4 = $("td"), o4.textContent = `${t4[6].price.toFixed(2)} \u20AC`, k(n3, "class", "label tl"), k(o4, "class", "value tr");
        }, m(t5, l2) {
          m(t5, e3, l2), h(e3, n3), h(e3, i3), h(e3, o4);
        }, p: t2, d(t5) {
          t5 && g(e3);
        }};
      }(t3), wt2 = t3[8], Ft2 = [];
      for (let e3 = 0; e3 < wt2.length; e3 += 1)
        Ft2[e3] = W2(z2(t3, wt2, e3));
      return {c() {
        vt2 && vt2.c(), e2 = _(), n2 = $("div"), d2 = $("div"), m2 = $("h2"), m2.textContent = "Tuotteet", p3 = _(), f2 = $("table"), b2 = $("thead"), b2.innerHTML = '<tr><th class="tl">Tuote</th> \n								<th class="tc">Hinta</th> \n								<th class="tc">M\xE4\xE4r\xE4</th> \n								<th class="tc">Yhteens\xE4</th> \n								<th></th></tr>', T2 = _(), C2 = $("tbody");
        for (let t4 = 0; t4 < Tt2.length; t4 += 1)
          Tt2[t4].c();
        $2 = _(), Ct2 && Ct2.c(), w2 = _(), F2 = $("div"), j2 = $("h2"), j2.textContent = "Maksutiedot", H2 = _(), N2 = $("table"), K2 = $("tbody"), q2 = $("tr"), A2 = $("td"), A2.textContent = "Tuotteet yhteens\xE4", S3 = _(), I3 = $("td"), J3 = w(gt2), E3 = w(" \u20AC"), O3 = _(), $t2 && $t2.c(), P3 = _(), V3 = $("tr"), D3 = $("td"), D3.textContent = "ALV 10%", G3 = _(), X3 = $("td"), U3 = w(yt2), Z3 = w(" \u20AC"), _3 = _(), tt3 = $("tr"), et2 = $("td"), et2.textContent = "Tilaus yhteens\xE4", nt2 = _(), lt2 = $("td"), st2 = w(bt2), at2 = w(" \u20AC"), it2 = _(), ot2 = $("form"), ct2 = $("div"), rt2 = $("h2"), rt2.textContent = "Asiakastiedot", ut2 = _(), dt2 = $("div");
        for (let t4 = 0; t4 < Ft2.length; t4 += 1)
          Ft2[t4].c();
        mt2 = _(), pt2 = $("div"), pt2.innerHTML = '<button id="ready" class="end" name="ready" type="submit">Vahvista tilaus</button>', k(f2, "id", "productList"), k(f2, "class", "w100"), k(f2, "rules", "rows"), k(d2, "class", "item"), k(A2, "class", "label tl"), k(I3, "class", "value tr"), k(D3, "class", "label tl"), k(X3, "class", "value tr"), k(et2, "class", "label tl"), k(lt2, "class", "value tr"), k(N2, "class", "w100"), k(F2, "id", "paymentInfo"), k(F2, "class", "item"), k(n2, "id", "tables"), k(n2, "class", "grid"), k(dt2, "class", "grid"), k(ct2, "id", "client"), k(ct2, "class", "item"), k(pt2, "id", "payment"), k(pt2, "class", "tc"), k(ot2, "class", "items");
      }, m(l2, s2) {
        vt2 && vt2.m(l2, s2), m(l2, e2, s2), m(l2, n2, s2), h(n2, d2), h(d2, m2), h(d2, p3), h(d2, f2), h(f2, b2), h(f2, T2), h(f2, C2);
        for (let t4 = 0; t4 < Tt2.length; t4 += 1)
          Tt2[t4].m(C2, null);
        h(d2, $2), Ct2 && Ct2.m(d2, null), h(n2, w2), h(n2, F2), h(F2, j2), h(F2, H2), h(F2, N2), h(N2, K2), h(K2, q2), h(q2, A2), h(q2, S3), h(q2, I3), h(I3, J3), h(I3, E3), h(K2, O3), $t2 && $t2.m(K2, null), h(K2, P3), h(K2, V3), h(V3, D3), h(V3, G3), h(V3, X3), h(X3, U3), h(X3, Z3), h(K2, _3), h(K2, tt3), h(tt3, et2), h(tt3, nt2), h(tt3, lt2), h(lt2, st2), h(lt2, at2), m(l2, it2, s2), m(l2, ot2, s2), h(ot2, ct2), h(ct2, rt2), h(ct2, ut2), h(ct2, dt2);
        for (let t4 = 0; t4 < Ft2.length; t4 += 1)
          Ft2[t4].m(dt2, null);
        h(ot2, mt2), h(ot2, pt2), ft2 = true, ht2 || (xt2 = v(ot2, "submit", P(t3[9])), ht2 = true);
      }, p(t4, n3) {
        if (t4[3].body ? vt2 ? vt2.p(t4, n3) : (vt2 = Y2(t4), vt2.c(), vt2.m(e2.parentNode, e2)) : vt2 && (vt2.d(1), vt2 = null), 129 & n3) {
          let e3;
          for (kt2 = t4[0].products, e3 = 0; e3 < kt2.length; e3 += 1) {
            const l2 = B2(t4, kt2, e3);
            Tt2[e3] ? Tt2[e3].p(l2, n3) : (Tt2[e3] = Q2(l2), Tt2[e3].c(), Tt2[e3].m(C2, null));
          }
          for (; e3 < Tt2.length; e3 += 1)
            Tt2[e3].d(1);
          Tt2.length = kt2.length;
        }
        if (t4[3].delivery ? Ct2 ? (Ct2.p(t4, n3), 8 & n3 && et(Ct2, 1)) : (Ct2 = R2(t4), Ct2.c(), et(Ct2, 1), Ct2.m(d2, null)) : Ct2 && (Y(), nt(Ct2, 1, 1, () => {
          Ct2 = null;
        }), tt()), (!ft2 || 1 & n3) && gt2 !== (gt2 = t4[0].total.toFixed(2) + "") && E(J3, gt2), t4[6].price > 0 && $t2.p(t4, n3), (!ft2 || 16 & n3) && yt2 !== (yt2 = t4[4].toFixed(2) + "") && E(U3, yt2), (!ft2 || 2 & n3) && bt2 !== (bt2 = t4[1].toFixed(2) + "") && E(st2, bt2), 257 & n3) {
          let e3;
          for (wt2 = t4[8], e3 = 0; e3 < wt2.length; e3 += 1) {
            const l2 = z2(t4, wt2, e3);
            Ft2[e3] ? Ft2[e3].p(l2, n3) : (Ft2[e3] = W2(l2), Ft2[e3].c(), Ft2[e3].m(dt2, null));
          }
          for (; e3 < Ft2.length; e3 += 1)
            Ft2[e3].d(1);
          Ft2.length = wt2.length;
        }
      }, i(t4) {
        ft2 || (et(Ct2), ft2 = true);
      }, o(t4) {
        nt(Ct2), ft2 = false;
      }, d(t4) {
        vt2 && vt2.d(t4), t4 && g(e2), t4 && g(n2), y(Tt2, t4), Ct2 && Ct2.d(), $t2 && $t2.d(), t4 && g(it2), t4 && g(ot2), y(Ft2, t4), ht2 = false, xt2();
      }};
    }
    function P2(t3) {
      let e2, n2, s2, i3, o4, c2;
      return {c() {
        e2 = $("p"), n2 = w("Tilaus on vahvistettu ja tilaustiedot on l\xE4hetetty\n					s\xE4hk\xF6postiin.\n					"), s2 = $("br"), i3 = w("\n					Tilausnumerosi on "), o4 = w(t3[2]), c2 = w(".");
      }, m(t4, l2) {
        m(t4, e2, l2), h(e2, n2), h(e2, s2), h(e2, i3), h(e2, o4), h(e2, c2);
      }, p(t4, e3) {
        4 & e3 && E(o4, t4[2]);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function V2(t3) {
      let e2, n2;
      return {c() {
        e2 = $("p"), n2 = w(t3[2]);
      }, m(t4, l2) {
        m(t4, e2, l2), h(e2, n2);
      }, p(t4, e3) {
        4 & e3 && E(n2, t4[2]);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function Y2(t3) {
      let e2, n2 = t3[3].body + "";
      return {c() {
        e2 = $("div"), k(e2, "class", "body");
      }, m(t4, l2) {
        m(t4, e2, l2), e2.innerHTML = n2;
      }, p(t4, l2) {
        8 & l2 && n2 !== (n2 = t4[3].body + "") && (e2.innerHTML = n2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function D2(t3) {
      let e2, n2, i3, o4, c2, d2, m2, p3, f2, h2, x2, $2, w2, F2, j2, H2, L2, M2, N2, K2, q2, A2, S3, z3, I3, B3, J3, E3, O3, P3 = t3[5].title + "", V3 = t3[5].price2.toFixed(2) + "", Y3 = t3[5].total.toFixed(2) + "", D3 = t3[5].size && G2(t3), Q3 = t3[5].id && X2(t3);
      function R3() {
        t3[10].call(M2, t3[20]);
      }
      function U3() {
        return t3[11](t3[20]);
      }
      return {c() {
        e2 = $("tr"), n2 = $("td"), i3 = $("strong"), o4 = w(P3), c2 = _(), D3 && D3.c(), d2 = _(), m2 = $("br"), p3 = _(), Q3 && Q3.c(), f2 = _(), h2 = $("td"), x2 = $("span"), x2.textContent = "Hinta:", $2 = _(), w2 = w(V3), F2 = _(), j2 = $("td"), H2 = $("span"), H2.textContent = "M\xE4\xE4r\xE4:", L2 = _(), M2 = $("input"), N2 = _(), K2 = $("td"), q2 = $("span"), q2.textContent = "Yhteens\xE4:", A2 = _(), S3 = w(Y3), z3 = _(), I3 = $("td"), B3 = $("button"), B3.textContent = "X", J3 = _(), k(n2, "class", "product tl"), k(h2, "class", "price tc pt"), k(M2, "type", "number"), k(M2, "name", "amount"), k(j2, "class", "amount tc"), k(K2, "class", "total tc pt"), k(B3, "class", "del noBor"), k(I3, "class", "tr pt");
      }, m(l2, s2) {
        m(l2, e2, s2), h(e2, n2), h(n2, i3), h(i3, o4), h(i3, c2), D3 && D3.m(i3, null), h(n2, d2), h(n2, m2), h(n2, p3), Q3 && Q3.m(n2, null), h(e2, f2), h(e2, h2), h(h2, x2), h(h2, $2), h(h2, w2), h(e2, F2), h(e2, j2), h(j2, H2), h(j2, L2), h(j2, M2), O(M2, t3[0].products[t3[20]].amount), h(e2, N2), h(e2, K2), h(K2, q2), h(K2, A2), h(K2, S3), h(e2, z3), h(e2, I3), h(I3, B3), h(e2, J3), E3 || (O3 = [v(M2, "input", R3), v(B3, "click", U3)], E3 = true);
      }, p(e3, l2) {
        t3 = e3, 1 & l2 && P3 !== (P3 = t3[5].title + "") && E(o4, P3), t3[5].size ? D3 ? D3.p(t3, l2) : (D3 = G2(t3), D3.c(), D3.m(i3, null)) : D3 && (D3.d(1), D3 = null), t3[5].id ? Q3 ? Q3.p(t3, l2) : (Q3 = X2(t3), Q3.c(), Q3.m(n2, null)) : Q3 && (Q3.d(1), Q3 = null), 1 & l2 && V3 !== (V3 = t3[5].price2.toFixed(2) + "") && E(w2, V3), 1 & l2 && j(M2.value) !== t3[0].products[t3[20]].amount && O(M2, t3[0].products[t3[20]].amount), 1 & l2 && Y3 !== (Y3 = t3[5].total.toFixed(2) + "") && E(S3, Y3);
      }, d(t4) {
        t4 && g(e2), D3 && D3.d(), Q3 && Q3.d(), E3 = false, r(O3);
      }};
    }
    function G2(t3) {
      let e2, n2, l2 = t3[5].size + "";
      return {c() {
        e2 = w("- "), n2 = w(l2);
      }, m(t4, l3) {
        m(t4, e2, l3), m(t4, n2, l3);
      }, p(t4, e3) {
        1 & e3 && l2 !== (l2 = t4[5].size + "") && E(n2, l2);
      }, d(t4) {
        t4 && g(e2), t4 && g(n2);
      }};
    }
    function X2(t3) {
      let e2, n2, s2 = t3[5].id + "";
      return {c() {
        e2 = $("small"), n2 = w(s2);
      }, m(t4, l2) {
        m(t4, e2, l2), h(e2, n2);
      }, p(t4, e3) {
        1 & e3 && s2 !== (s2 = t4[5].id + "") && E(n2, s2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function Q2(t3) {
      let e2, n2 = t3[5] != null && D2(t3);
      return {c() {
        n2 && n2.c(), e2 = x();
      }, m(t4, l2) {
        n2 && n2.m(t4, l2), m(t4, e2, l2);
      }, p(t4, l2) {
        t4[5] != null ? n2 ? n2.p(t4, l2) : (n2 = D2(t4), n2.c(), n2.m(e2.parentNode, e2)) : n2 && (n2.d(1), n2 = null);
      }, d(t4) {
        n2 && n2.d(t4), t4 && g(e2);
      }};
    }
    function R2(t3) {
      let e2, n2, d2, m2, p3, f2, x2, g2, b2 = t3[3].delivery, k2 = [];
      for (let e3 = 0; e3 < b2.length; e3 += 1)
        k2[e3] = U2(I2(t3, b2, e3));
      const T2 = (t4) => nt(k2[t4], 1, 1, () => {
        k2[t4] = null;
      });
      return {c() {
        e2 = $("div"), n2 = $("label"), d2 = $("span"), d2.innerHTML = "<h2>Toimitustapa</h2>", m2 = _(), p3 = $("select");
        for (let t4 = 0; t4 < k2.length; t4 += 1)
          k2[t4].c();
        k(d2, "class", "block"), t3[5] === void 0 && z(() => t3[12].call(p3)), k(e2, "id", "shipping");
      }, m(l2, s2) {
        m(l2, e2, s2), h(e2, n2), h(n2, d2), h(n2, m2), h(n2, p3);
        for (let t4 = 0; t4 < k2.length; t4 += 1)
          k2[t4].m(p3, null);
        L(p3, t3[5]), f2 = true, x2 || (g2 = v(p3, "change", t3[12]), x2 = true);
      }, p(t4, e3) {
        if (8 & e3) {
          let n3;
          for (b2 = t4[3].delivery, n3 = 0; n3 < b2.length; n3 += 1) {
            const l2 = I2(t4, b2, n3);
            k2[n3] ? (k2[n3].p(l2, e3), et(k2[n3], 1)) : (k2[n3] = U2(l2), k2[n3].c(), et(k2[n3], 1), k2[n3].m(p3, null));
          }
          for (Y(), n3 = b2.length; n3 < k2.length; n3 += 1)
            T2(n3);
          tt();
        }
        32 & e3 && L(p3, t4[5]);
      }, i(t4) {
        if (!f2) {
          for (let t5 = 0; t5 < b2.length; t5 += 1)
            et(k2[t5]);
          f2 = true;
        }
      }, o(t4) {
        k2 = k2.filter(Boolean);
        for (let t5 = 0; t5 < k2.length; t5 += 1)
          nt(k2[t5]);
        f2 = false;
      }, d(t4) {
        t4 && g(e2), y(k2, t4), x2 = false, g2();
      }};
    }
    function U2(t3) {
      let e2, n2;
      return e2 = new S2({props: {id: t3[5].id, name: t3[5].name, price: t3[5].price}}), {c() {
        it(e2.$$.fragment);
      }, m(t4, l2) {
        at(e2, t4, l2), n2 = true;
      }, p(t4, n3) {
        const l2 = {};
        8 & n3 && (l2.id = t4[5].id), 8 & n3 && (l2.name = t4[5].name), 8 & n3 && (l2.price = t4[5].price), e2.$set(l2);
      }, i(t4) {
        n2 || (et(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        nt(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ct(e2, t4);
      }};
    }
    function W2(t3) {
      let e2, n2, i3, o4, c2, d2, m2, p3, f2, h2 = t3[5].title + "";
      function x2() {
        t3[13].call(d2, t3[5]);
      }
      return {c() {
        e2 = $("div"), n2 = $("label"), i3 = $("span"), o4 = w(h2), c2 = _(), d2 = $("input"), m2 = _(), k(i3, "class", "block"), k(d2, "id", t3[5].name), k(d2, "class", "w100"), k(d2, "name", t3[5].name), d2.required = true, k(e2, "class", "item");
      }, m(l2, s2) {
        m(l2, e2, s2), h(e2, n2), h(n2, i3), h(i3, o4), h(n2, c2), h(n2, d2), O(d2, t3[0].customer[t3[5].name]), h(e2, m2), p3 || (f2 = v(d2, "input", x2), p3 = true);
      }, p(e3, n3) {
        t3 = e3, 257 & n3 && d2.value !== t3[0].customer[t3[5].name] && O(d2, t3[0].customer[t3[5].name]);
      }, d(t4) {
        t4 && g(e2), p3 = false, f2();
      }};
    }
    function Z2(t3) {
      let e2, n2, l2, s2;
      document.title = e2 = _2;
      let m2 = t3[0].products[0] && J2(t3);
      return {c() {
        n2 = _(), m2 && m2.c(), l2 = x();
      }, m(t4, e3) {
        m(t4, n2, e3), m2 && m2.m(t4, e3), m(t4, l2, e3), s2 = true;
      }, p(t4, [n3]) {
        (!s2 || 0 & n3) && e2 !== (e2 = _2) && (document.title = e2), t4[0].products[0] ? m2 ? (m2.p(t4, n3), 1 & n3 && et(m2, 1)) : (m2 = J2(t4), m2.c(), et(m2, 1), m2.m(l2.parentNode, l2)) : m2 && (Y(), nt(m2, 1, 1, () => {
          m2 = null;
        }), tt());
      }, i(t4) {
        s2 || (et(m2), s2 = true);
      }, o(t4) {
        nt(m2), s2 = false;
      }, d(t4) {
        t4 && g(n2), m2 && m2.d(t4), t4 && g(l2);
      }};
    }
    var _2 = "Kassa";
    function tt2(t3, e2, n2) {
      let l2, s2, a2, i3, o4;
      l(t3, p, (t4) => n2(0, i3 = t4)), l(t3, i, (t4) => n2(3, o4 = t4)), i3.products[0] || window.location.replace("/"), d(p, i3.customer = {name1: "Timo", name2: "Anttila", street: "Testikuja 8", postal: 37130, area: "Nokia", phone: "0407746121", email: "timo@tuspe.com"}, i3), i3.customer || d(p, i3.customer = {name1: "Timo", name2: "Anttila", street: "Testikuja 8", postal: 37130, area: "Nokia", phone: "0407746121", email: "timo@tuspe.com"}, i3), d(i, o4 = {}, o4);
      let c2 = 0, r2 = {price: 0};
      function u2(t4, e3) {
        o2(t4, e3).then((t5) => {
          t5.redirect || t5.message ? t5.redirect !== void 0 ? window.location.replace(t5.redirect) : t5.message && n2(2, c2 = t5.message) : i.set(t5), i.set(t5);
        });
      }
      function d2(t4) {
        d(p, i3.products = i3.products.filter((e3, n3) => n3 !== parseInt(t4) && e3 != null).sort(), i3);
      }
      A(async () => {
        u2("path=kassa");
      });
      let h2 = [{title: "Etunimi", type: "text", name: "name1", min: 2, max: 30, req: 1}, {title: "Sukunimi", type: "text", name: "name2", min: 2, max: 30, req: 1}, {title: "Puhelin", type: "text", name: "phone", min: 5, max: 15, req: 1}, {title: "S\xE4hk\xF6posti", type: "email", name: "email", min: 6, max: 100, req: 1}, {title: "Katuosoite", type: "text", name: "street", min: 5, max: 50}, {title: "Postinumero", type: "text", name: "postal", min: 5, max: 5}, {title: "Kaupunki", type: "text", name: "area", min: 3, max: 50}];
      if (window.location.search) {
        let t4 = window.location.search.substr(1).split("=");
        c2 = t4[0] == "id" ? parseInt(t4[1]) : 0;
      }
      return t3.$$.update = () => {
        1 & t3.$$.dirty && n2(1, s2 = i3.total + r2.price), 2 & t3.$$.dirty && n2(4, a2 = 0.1 * s2);
      }, n2(5, l2 = ""), [i3, s2, c2, o4, a2, l2, r2, d2, h2, async function(t4) {
        let e3 = {cart: JSON.stringify(i3.products), delivery: JSON.stringify(r2), price: s2, vat: a2};
        console.log(e3), u2("path=kassa&payment=1", e3);
      }, function(t4) {
        i3.products[t4].amount = j(this.value), p.set(i3);
      }, (t4) => d2(t4), function() {
        l2 = I(this), n2(5, l2);
      }, function(t4) {
        i3.customer[t4.name] = this.value, p.set(i3), n2(8, h2);
      }];
    }
    var kassa_3fffe89d_default = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, tt2, Z2, i2, {});
      }
    };
    var kassa_3fffe89d_default2 = kassa_3fffe89d_default;
  });

  // dist/build/_layout-01a475fe.js
  var require_layout_01a475fe = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_01a475fe_default2
    });
    function C2(t3) {
      let e2, s2, h2, p3, g2, f2, v2, $2, w2, b2, y2, k2 = t3[0].amount + "";
      return {c() {
        e2 = $("div"), s2 = $("a"), h2 = b("svg"), p3 = b("title"), g2 = w("Jatka kassalle"), f2 = b("path"), v2 = _(), $2 = $("div"), w2 = $("div"), b2 = w(k2), k(f2, "d", "M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"), k(h2, "xmlns", "http://www.w3.org/2000/svg"), k(h2, "width", "38"), k(h2, "height", "38"), k(h2, "viewBox", "0 0 24 24"), k(w2, "class", y2 = "grid cell bold " + t3[2]), k($2, "id", "cartBall"), k($2, "class", "abs svelte-hzwaq2"), k(s2, "class", "grid cell"), k(s2, "href", t3[1]), k(s2, "rel", "nofollow"), k(e2, "id", "cartIcon"), k(e2, "class", "abs rel");
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2), h(s2, h2), h(h2, p3), h(p3, g2), h(h2, f2), h(s2, v2), h(s2, $2), h($2, w2), h(w2, b2);
      }, p(t4, [e3]) {
        1 & e3 && k2 !== (k2 = t4[0].amount + "") && E(b2, k2), 4 & e3 && y2 !== (y2 = "grid cell bold " + t4[2]) && k(w2, "class", y2), 2 & e3 && k(s2, "href", t4[1]);
      }, i: t2, o: t2, d(t4) {
        t4 && g(e2);
      }};
    }
    function I2(t3, e2, s2) {
      let a2, l2, n2;
      return l(t3, p, (t4) => s2(0, n2 = t4)), t3.$$.update = () => {
        1 & t3.$$.dirty && s2(1, a2 = n2.amount > 0 ? "/kassa" : "/"), 1 & t3.$$.dirty && s2(2, l2 = n2.amount > 0 ? "bgo tw" : "bgw");
      }, [n2, a2, l2];
    }
    var P2 = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, I2, C2, i2, {});
      }
    };
    function Y2(t3, e2, s2) {
      const a2 = t3.slice();
      return a2[6] = e2[s2], a2;
    }
    function D2(t3) {
      let e2, s2, l2, n2, u2, m2, h2, p3, T2, x2, z2, M2, j2, O2, B2, H2, L2, N2, A2, E2, J2, S2, q2, C3, I3;
      function D3(t4, e3) {
        return t4[3] ? F2 : K2;
      }
      let G3 = D3(t3), Q3 = G3(t3), R3 = t3[0].nav, U3 = [];
      for (let e3 = 0; e3 < R3.length; e3 += 1)
        U3[e3] = X2(Y2(t3, R3, e3));
      return S2 = new P2({}), {c() {
        e2 = $("header"), s2 = $("div"), l2 = $("a"), n2 = $("picture"), u2 = $("source"), h2 = _(), p3 = $("source"), x2 = _(), z2 = $("img"), O2 = _(), B2 = $("button"), Q3.c(), H2 = _(), L2 = $("nav"), N2 = $("ul"), A2 = $("li"), A2.innerHTML = '<a class="nav-link block" href="/" rel="home">Etusivu</a>', E2 = _();
        for (let t4 = 0; t4 < U3.length; t4 += 1)
          U3[t4].c();
        J2 = _(), it(S2.$$.fragment), k(u2, "srcset", m2 = t3[0].site.logo[1]), k(u2, "type", "image/webp"), k(p3, "srcset", T2 = t3[0].site.logo[0]), k(p3, "type", "image/jpeg"), z2.src !== (M2 = t3[0].site.logo[0]) && k(z2, "src", M2), k(z2, "alt", j2 = t3[0].site.title), k(n2, "class", "block"), k(l2, "id", "logo"), k(l2, "class", "block bgw"), k(l2, "href", "/"), k(l2, "rel", "home"), k(B2, "id", "menuToggle"), k(B2, "class", "noBor m0"), k(B2, "title", "Open/close main navigation"), k(A2, "class", "nav-item"), k(N2, "class", "m0"), k(L2, "id", "menu"), S(L2, "active", t3[3]), k(s2, "class", "content mx"), k(e2, "class", "block w100 bgw"), S(e2, "small", t3[2]);
      }, m(a2, i3) {
        m(a2, e2, i3), h(e2, s2), h(s2, l2), h(l2, n2), h(n2, u2), h(n2, h2), h(n2, p3), h(n2, x2), h(n2, z2), h(s2, O2), h(s2, B2), Q3.m(B2, null), h(s2, H2), h(s2, L2), h(L2, N2), h(N2, A2), h(N2, E2);
        for (let t4 = 0; t4 < U3.length; t4 += 1)
          U3[t4].m(N2, null);
        h(s2, J2), at(S2, s2, null), q2 = true, C3 || (I3 = v(B2, "click", t3[5]), C3 = true);
      }, p(t4, s3) {
        if ((!q2 || 1 & s3 && m2 !== (m2 = t4[0].site.logo[1])) && k(u2, "srcset", m2), (!q2 || 1 & s3 && T2 !== (T2 = t4[0].site.logo[0])) && k(p3, "srcset", T2), (!q2 || 1 & s3 && z2.src !== (M2 = t4[0].site.logo[0])) && k(z2, "src", M2), (!q2 || 1 & s3 && j2 !== (j2 = t4[0].site.title)) && k(z2, "alt", j2), G3 !== (G3 = D3(t4)) && (Q3.d(1), Q3 = G3(t4), Q3 && (Q3.c(), Q3.m(B2, null))), 1 & s3) {
          let e3;
          for (R3 = t4[0].nav, e3 = 0; e3 < R3.length; e3 += 1) {
            const a2 = Y2(t4, R3, e3);
            U3[e3] ? U3[e3].p(a2, s3) : (U3[e3] = X2(a2), U3[e3].c(), U3[e3].m(N2, null));
          }
          for (; e3 < U3.length; e3 += 1)
            U3[e3].d(1);
          U3.length = R3.length;
        }
        8 & s3 && S(L2, "active", t4[3]), 4 & s3 && S(e2, "small", t4[2]);
      }, i(t4) {
        q2 || (et(S2.$$.fragment, t4), q2 = true);
      }, o(t4) {
        nt(S2.$$.fragment, t4), q2 = false;
      }, d(t4) {
        t4 && g(e2), Q3.d(), y(U3, t4), ct(S2), C3 = false, I3();
      }};
    }
    function F2(t3) {
      let e2, s2;
      return {c() {
        e2 = b("svg"), s2 = b("path"), k(s2, "d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"), k(e2, "xmlns", "http://www.w3.org/2000/svg"), k(e2, "width", "24"), k(e2, "height", "24"), k(e2, "viewBox", "0 0 24 24");
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function K2(t3) {
      let e2, s2, a2, i3, u2, m2;
      return {c() {
        e2 = b("svg"), s2 = b("title"), a2 = w("Avaa ja sulkee mobiilivalikon"), i3 = b("rect"), u2 = b("rect"), m2 = b("rect"), k(i3, "width", "100"), k(i3, "height", "20"), k(u2, "y", "30"), k(u2, "width", "100"), k(u2, "height", "20"), k(m2, "y", "60"), k(m2, "width", "100"), k(m2, "height", "20"), k(e2, "viewBox", "0 0 100 80"), k(e2, "width", "30"), k(e2, "height", "30");
      }, m(t4, l2) {
        m(t4, e2, l2), h(e2, s2), h(s2, a2), h(e2, i3), h(e2, u2), h(e2, m2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function X2(t3) {
      let e2, s2, l2, n2, u2 = t3[6].title + "";
      return {c() {
        e2 = $("li"), s2 = $("a"), n2 = _(), k(s2, "class", "nav-link block"), k(s2, "href", l2 = t3[6].path), k(e2, "class", "nav-item");
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2), s2.innerHTML = u2, h(e2, n2);
      }, p(t4, e3) {
        1 & e3 && u2 !== (u2 = t4[6].title + "") && (s2.innerHTML = u2), 1 & e3 && l2 !== (l2 = t4[6].path) && k(s2, "href", l2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function G2(t3) {
      let e2, s2, a2, l2, n2, i3 = false, c2 = () => {
        i3 = false;
      };
      z(t3[4]);
      let r2 = t3[0] && t3[0].nav && D2(t3);
      return {c() {
        r2 && r2.c(), s2 = x();
      }, m(u2, m2) {
        r2 && r2.m(u2, m2), m(u2, s2, m2), a2 = true, l2 || (n2 = v(window, "scroll", () => {
          i3 = true, clearTimeout(e2), e2 = setTimeout(c2, 100), t3[4]();
        }), l2 = true);
      }, p(t4, [a3]) {
        2 & a3 && !i3 && (i3 = true, clearTimeout(e2), scrollTo(window.pageXOffset, t4[1]), e2 = setTimeout(c2, 100)), t4[0] && t4[0].nav ? r2 ? (r2.p(t4, a3), 1 & a3 && et(r2, 1)) : (r2 = D2(t4), r2.c(), et(r2, 1), r2.m(s2.parentNode, s2)) : r2 && (Y(), nt(r2, 1, 1, () => {
          r2 = null;
        }), tt());
      }, i(t4) {
        a2 || (et(r2), a2 = true);
      }, o(t4) {
        nt(r2), a2 = false;
      }, d(t4) {
        r2 && r2.d(t4), t4 && g(s2), l2 = false, n2();
      }};
    }
    function Q2(t3, e2, s2) {
      let a2, l2, n2, {data: i3} = e2;
      return t3.$$set = (t4) => {
        "data" in t4 && s2(0, i3 = t4.data);
      }, t3.$$.update = () => {
        2 & t3.$$.dirty && s2(2, l2 = a2 > 100 || "");
      }, [i3, a2, l2, n2, function() {
        s2(1, a2 = window.pageYOffset);
      }, () => s2(3, n2 = !n2)];
    }
    var R2 = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, Q2, G2, i2, {data: 0});
      }
    };
    function U2(t3) {
      let e2, s2, l2, n2, u2, m2, h2, p3, f2, $2, y2;
      function x2(t4, e3) {
        return t4[0].cat ? W2 : V2;
      }
      e2 = new R2({props: {data: t3[1]}});
      let z2 = x2(t3), j2 = z2(t3);
      const B2 = t3[7].default, H2 = u(B2, t3, t3[6], null);
      let L2 = t3[3].amount > 0 && t3[4].path != "/kassa" && Z2(t3);
      return {c() {
        it(e2.$$.fragment), s2 = _(), l2 = $("main"), n2 = $("div"), j2.c(), u2 = _(), m2 = $("div"), h2 = $("div"), H2 && H2.c(), f2 = _(), L2 && L2.c(), $2 = x(), k(n2, "id", "hero"), k(n2, "class", "grid tw up tc"), k(h2, "class", "container mx"), k(m2, "id", "content"), k(m2, "class", "bgw py"), k(l2, "class", "block"), k(l2, "style", p3 = "background-image:url(" + t3[1].site.hero[0] + ")");
      }, m(t4, a2) {
        at(e2, t4, a2), m(t4, s2, a2), m(t4, l2, a2), h(l2, n2), j2.m(n2, null), h(l2, u2), h(l2, m2), h(m2, h2), H2 && H2.m(h2, null), m(t4, f2, a2), L2 && L2.m(t4, a2), m(t4, $2, a2), y2 = true;
      }, p(t4, s3) {
        const a2 = {};
        2 & s3 && (a2.data = t4[1]), e2.$set(a2), z2 === (z2 = x2(t4)) && j2 ? j2.p(t4, s3) : (j2.d(1), j2 = z2(t4), j2 && (j2.c(), j2.m(n2, null))), H2 && H2.p && 64 & s3 && f(H2, B2, t4, t4[6], s3, null, null), (!y2 || 2 & s3 && p3 !== (p3 = "background-image:url(" + t4[1].site.hero[0] + ")")) && k(l2, "style", p3), t4[3].amount > 0 && t4[4].path != "/kassa" ? L2 ? L2.p(t4, s3) : (L2 = Z2(t4), L2.c(), L2.m($2.parentNode, $2)) : L2 && (L2.d(1), L2 = null);
      }, i(t4) {
        y2 || (et(e2.$$.fragment, t4), et(H2, t4), y2 = true);
      }, o(t4) {
        nt(e2.$$.fragment, t4), nt(H2, t4), y2 = false;
      }, d(t4) {
        ct(e2, t4), t4 && g(s2), t4 && g(l2), j2.d(), H2 && H2.d(t4), t4 && g(f2), L2 && L2.d(t4), t4 && g($2);
      }};
    }
    function V2(t3) {
      let e2, s2, l2, c2, m2, h2, p3 = t3[1].site.title + "", g2 = t3[1].site.slogan + "";
      return {c() {
        e2 = $("div"), s2 = $("h1"), l2 = w(p3), c2 = _(), m2 = $("h3"), h2 = w(g2);
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2), h(s2, l2), h(e2, c2), h(e2, m2), h(m2, h2);
      }, p(t4, e3) {
        2 & e3 && p3 !== (p3 = t4[1].site.title + "") && E(l2, p3), 2 & e3 && g2 !== (g2 = t4[1].site.slogan + "") && E(h2, g2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function W2(t3) {
      let e2, s2 = t3[2].title + "";
      return {c() {
        e2 = $("h1");
      }, m(t4, a2) {
        m(t4, e2, a2), e2.innerHTML = s2;
      }, p(t4, a2) {
        4 & a2 && s2 !== (s2 = t4[2].title + "") && (e2.innerHTML = s2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function Z2(t3) {
      let e2, s2, l2, m2, h2, p3, g2, f2, v2, $2, w2, b2, y2, k2 = t3[3].amount + "", T2 = t3[3].total + "";
      return {c() {
        e2 = $("div"), s2 = $("div"), l2 = $("div"), m2 = w("Tuotteita: "), h2 = w(k2), p3 = w(" kpl"), g2 = _(), f2 = $("div"), v2 = w("Yhteens\xE4: "), $2 = w(T2), w2 = w(" \u20AC"), b2 = _(), y2 = $("a"), y2.textContent = "Kassalle", k(l2, "id", "cartAmount"), k(f2, "id", "cartAmount"), k(y2, "class", "grid"), k(y2, "href", "/kassa"), k(y2, "rel", "nofollow"), k(e2, "id", "cart"), k(e2, "class", "grid");
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2), h(s2, l2), h(l2, m2), h(l2, h2), h(l2, p3), h(s2, g2), h(s2, f2), h(f2, v2), h(f2, $2), h(f2, w2), h(e2, b2), h(e2, y2);
      }, p(t4, e3) {
        8 & e3 && k2 !== (k2 = t4[3].amount + "") && E(h2, k2), 8 & e3 && T2 !== (T2 = t4[3].total + "") && E($2, T2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function _2(t3) {
      let e2, s2, a2 = t3[1] && t3[1].site && U2(t3);
      return {c() {
        a2 && a2.c(), e2 = x();
      }, m(t4, l2) {
        a2 && a2.m(t4, l2), m(t4, e2, l2), s2 = true;
      }, p(t4, [s3]) {
        t4[1] && t4[1].site ? a2 ? (a2.p(t4, s3), 2 & s3 && et(a2, 1)) : (a2 = U2(t4), a2.c(), et(a2, 1), a2.m(e2.parentNode, e2)) : a2 && (Y(), nt(a2, 1, 1, () => {
          a2 = null;
        }), tt());
      }, i(t4) {
        s2 || (et(a2), s2 = true);
      }, o(t4) {
        nt(a2), s2 = false;
      }, d(t4) {
        a2 && a2.d(t4), t4 && g(e2);
      }};
    }
    function tt2(t3, e2, s2) {
      let a2, l2, n2, i3, c2, o4;
      l(t3, Qt, (t4) => s2(0, a2 = t4)), l(t3, o, (t4) => s2(1, l2 = t4)), l(t3, i, (t4) => s2(2, n2 = t4)), l(t3, p, (t4) => s2(3, i3 = t4)), l(t3, t, (t4) => s2(5, c2 = t4)), l(t3, Kt, (t4) => s2(4, o4 = t4));
      let {$$slots: r2 = {}, $$scope: u2} = e2;
      return A(async () => {
        o2().then((t4) => {
          o.set(t4);
        });
      }), t3.$$set = (t4) => {
        "$$scope" in t4 && s2(6, u2 = t4.$$scope);
      }, t3.$$.update = () => {
        if (15 & t3.$$.dirty && a2 && ((l2.site || n2.title) && (Xt.title = a2.cat ? n2.title + " | " + l2.site.title : l2.site.title + " | " + l2.site.slogan, (i.summary || l2.site.summary) && (Xt.summary = n2.summary ? n2.summary : l2.site.summary)), i3.amount == 0 && n2.cart && d(p, i3 = n2.cart, i3)), 40 & t3.$$.dirty && i3.products) {
          let t4 = [0, 0];
          d(p, i3.products = i3.products.filter((t5, e3) => t5.amount > 0 && t5 != null).sort(), i3), Object.values(i3.products).forEach((e3) => {
            e3.discounts && (e3.price2 = e3.price, e3.discounts.forEach(function(t5) {
              t5.amount <= e3.amount && (e3.price2 = t5.price);
            })), t4[0] += e3.total = e3.price2 * e3.amount, t4[1] += e3.amount;
          }), t4[1] == 0 || t4[1] == null ? d(p, i3.products = [], i3) : (d(p, i3.total = t4[0], i3), d(p, i3.amount = t4[1], i3)), fetch(c2 + "?path=cart", {method: "POST", body: JSON.stringify(i3)});
        }
      }, [a2, l2, n2, i3, o4, c2, u2, r2];
    }
    var layout_01a475fe_default = class extends ut {
      constructor(t3) {
        super(), lt(this, t3, tt2, _2, i2, {});
      }
    };
    var layout_01a475fe_default2 = layout_01a475fe_default;
  });

  // dist/build/main.js
  function t2() {
  }
  function e(t3, e2) {
    for (const n2 in e2)
      t3[n2] = e2[n2];
    return t3;
  }
  function n(t3) {
    return t3();
  }
  function o3() {
    return Object.create(null);
  }
  function r(t3) {
    t3.forEach(n);
  }
  function s(t3) {
    return typeof t3 == "function";
  }
  function i2(t3, e2) {
    return t3 != t3 ? e2 == e2 : t3 !== e2 || t3 && typeof t3 == "object" || typeof t3 == "function";
  }
  function a(e2, ...n2) {
    if (e2 == null)
      return t2;
    const o4 = e2.subscribe(...n2);
    return o4.unsubscribe ? () => o4.unsubscribe() : o4;
  }
  function c(t3) {
    let e2;
    return a(t3, (t4) => e2 = t4)(), e2;
  }
  function l(t3, e2, n2) {
    t3.$$.on_destroy.push(a(e2, n2));
  }
  function u(t3, e2, n2, o4) {
    if (t3) {
      const r2 = p2(t3, e2, n2, o4);
      return t3[0](r2);
    }
  }
  function p2(t3, n2, o4, r2) {
    return t3[1] && r2 ? e(o4.ctx.slice(), t3[1](r2(n2))) : o4.ctx;
  }
  function f(t3, e2, n2, o4, r2, s2, i3) {
    const a2 = function(t4, e3, n3, o5) {
      if (t4[2] && o5) {
        const r3 = t4[2](o5(n3));
        if (e3.dirty === void 0)
          return r3;
        if (typeof r3 == "object") {
          const t5 = [], n4 = Math.max(e3.dirty.length, r3.length);
          for (let o6 = 0; o6 < n4; o6 += 1)
            t5[o6] = e3.dirty[o6] | r3[o6];
          return t5;
        }
        return e3.dirty | r3;
      }
      return e3.dirty;
    }(e2, o4, r2, s2);
    if (a2) {
      const r3 = p2(e2, n2, o4, i3);
      t3.p(r3, a2);
    }
  }
  function d(t3, e2, n2 = e2) {
    return t3.set(n2), e2;
  }
  function h(t3, e2) {
    t3.appendChild(e2);
  }
  function m(t3, e2, n2) {
    t3.insertBefore(e2, n2 || null);
  }
  function g(t3) {
    t3.parentNode.removeChild(t3);
  }
  function y(t3, e2) {
    for (let n2 = 0; n2 < t3.length; n2 += 1)
      t3[n2] && t3[n2].d(e2);
  }
  function $(t3) {
    return document.createElement(t3);
  }
  function b(t3) {
    return document.createElementNS("http://www.w3.org/2000/svg", t3);
  }
  function w(t3) {
    return document.createTextNode(t3);
  }
  function _() {
    return w(" ");
  }
  function x() {
    return w("");
  }
  function v(t3, e2, n2, o4) {
    return t3.addEventListener(e2, n2, o4), () => t3.removeEventListener(e2, n2, o4);
  }
  function P(t3) {
    return function(e2) {
      return e2.preventDefault(), t3.call(this, e2);
    };
  }
  function k(t3, e2, n2) {
    n2 == null ? t3.removeAttribute(e2) : t3.getAttribute(e2) !== n2 && t3.setAttribute(e2, n2);
  }
  function j(t3) {
    return t3 === "" ? null : +t3;
  }
  function E(t3, e2) {
    e2 = "" + e2, t3.wholeText !== e2 && (t3.data = e2);
  }
  function O(t3, e2) {
    t3.value = e2 == null ? "" : e2;
  }
  function L(t3, e2) {
    for (let n2 = 0; n2 < t3.options.length; n2 += 1) {
      const o4 = t3.options[n2];
      if (o4.__value === e2)
        return void (o4.selected = true);
    }
  }
  function I(t3) {
    const e2 = t3.querySelector(":checked") || t3.options[0];
    return e2 && e2.__value;
  }
  function S(t3, e2, n2) {
    t3.classList[n2 ? "add" : "remove"](e2);
  }
  var N;
  function T(t3) {
    N = t3;
  }
  function F() {
    if (!N)
      throw new Error("Function called outside component initialization");
    return N;
  }
  function A(t3) {
    F().$$.on_mount.push(t3);
  }
  function R(t3, e2) {
    F().$$.context.set(t3, e2);
  }
  function M(t3) {
    return F().$$.context.get(t3);
  }
  var q = [];
  var C = [];
  var B = [];
  var U = [];
  var D = Promise.resolve();
  var H = false;
  function K() {
    H || (H = true, D.then(Q));
  }
  function J() {
    return K(), D;
  }
  function z(t3) {
    B.push(t3);
  }
  var W = false;
  var G = new Set();
  function Q() {
    if (!W) {
      W = true;
      do {
        for (let t3 = 0; t3 < q.length; t3 += 1) {
          const e2 = q[t3];
          T(e2), V(e2.$$);
        }
        for (T(null), q.length = 0; C.length; )
          C.pop()();
        for (let t3 = 0; t3 < B.length; t3 += 1) {
          const e2 = B[t3];
          G.has(e2) || (G.add(e2), e2());
        }
        B.length = 0;
      } while (q.length);
      for (; U.length; )
        U.pop()();
      H = false, W = false, G.clear();
    }
  }
  function V(t3) {
    if (t3.fragment !== null) {
      t3.update(), r(t3.before_update);
      const e2 = t3.dirty;
      t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(z);
    }
  }
  var Z = new Set();
  var X;
  function Y() {
    X = {r: 0, c: [], p: X};
  }
  function tt() {
    X.r || r(X.c), X = X.p;
  }
  function et(t3, e2) {
    t3 && t3.i && (Z.delete(t3), t3.i(e2));
  }
  function nt(t3, e2, n2, o4) {
    if (t3 && t3.o) {
      if (Z.has(t3))
        return;
      Z.add(t3), X.c.push(() => {
        Z.delete(t3), o4 && (n2 && t3.d(1), o4());
      }), t3.o(e2);
    }
  }
  function ot(t3, e2) {
    t3.d(1), e2.delete(t3.key);
  }
  function rt(t3, e2) {
    nt(t3, 1, 1, () => {
      e2.delete(t3.key);
    });
  }
  function st(t3, e2, n2, o4, r2, s2, i3, a2, c2, l2, u2, p3) {
    let f2 = t3.length, d2 = s2.length, h2 = f2;
    const m2 = {};
    for (; h2--; )
      m2[t3[h2].key] = h2;
    const g2 = [], y2 = new Map(), $2 = new Map();
    for (h2 = d2; h2--; ) {
      const t4 = p3(r2, s2, h2), a3 = n2(t4);
      let c3 = i3.get(a3);
      c3 ? o4 && c3.p(t4, e2) : (c3 = l2(a3, t4), c3.c()), y2.set(a3, g2[h2] = c3), a3 in m2 && $2.set(a3, Math.abs(h2 - m2[a3]));
    }
    const b2 = new Set(), w2 = new Set();
    function _2(t4) {
      et(t4, 1), t4.m(a2, u2), i3.set(t4.key, t4), u2 = t4.first, d2--;
    }
    for (; f2 && d2; ) {
      const e3 = g2[d2 - 1], n3 = t3[f2 - 1], o5 = e3.key, r3 = n3.key;
      e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !i3.has(o5) || b2.has(o5) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o5) > $2.get(r3) ? (w2.add(o5), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, i3), f2--);
    }
    for (; f2--; ) {
      const e3 = t3[f2];
      y2.has(e3.key) || c2(e3, i3);
    }
    for (; d2; )
      _2(g2[d2 - 1]);
    return g2;
  }
  function it(t3) {
    t3 && t3.c();
  }
  function at(t3, e2, o4, i3) {
    const {fragment: a2, on_mount: c2, on_destroy: l2, after_update: u2} = t3.$$;
    a2 && a2.m(e2, o4), i3 || z(() => {
      const e3 = c2.map(n).filter(s);
      l2 ? l2.push(...e3) : r(e3), t3.$$.on_mount = [];
    }), u2.forEach(z);
  }
  function ct(t3, e2) {
    const n2 = t3.$$;
    n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
  }
  function lt(e2, n2, s2, i3, a2, c2, l2 = [-1]) {
    const u2 = N;
    T(e2);
    const p3 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a2, bound: o3(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o3(), dirty: l2, skip_bound: false};
    let f2 = false;
    if (p3.ctx = s2 ? s2(e2, n2.props || {}, (t3, n3, ...o4) => {
      const r2 = o4.length ? o4[0] : n3;
      return p3.ctx && a2(p3.ctx[t3], p3.ctx[t3] = r2) && (!p3.skip_bound && p3.bound[t3] && p3.bound[t3](r2), f2 && function(t4, e3) {
        t4.$$.dirty[0] === -1 && (q.push(t4), K(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
      }(e2, t3)), n3;
    }) : [], p3.update(), f2 = true, r(p3.before_update), p3.fragment = !!i3 && i3(p3.ctx), n2.target) {
      if (n2.hydrate) {
        const t3 = function(t4) {
          return Array.from(t4.childNodes);
        }(n2.target);
        p3.fragment && p3.fragment.l(t3), t3.forEach(g);
      } else
        p3.fragment && p3.fragment.c();
      n2.intro && et(e2.$$.fragment), at(e2, n2.target, n2.anchor, n2.customElement), Q();
    }
    T(u2);
  }
  var ut = class {
    $destroy() {
      ct(this, 1), this.$destroy = t2;
    }
    $on(t3, e2) {
      const n2 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
      return n2.push(e2), () => {
        const t4 = n2.indexOf(e2);
        t4 !== -1 && n2.splice(t4, 1);
      };
    }
    $set(t3) {
      var e2;
      this.$$set && (e2 = t3, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
    }
  };
  var pt = {queryHandler: {parse: (t3) => {
    return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n2]) => (t4[e3] = n2, t4), {});
    var e2;
  }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
  var ft = RegExp(/\:([^/()]+)/g);
  function dt(t3, e2) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    e2 && ht(t3), function() {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      const {hash: t4} = window.location;
      if (t4) {
        if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t4.substring(1))) {
          const e3 = document.querySelector(t4);
          e3 && e3.scrollIntoView();
        }
      }
    }();
  }
  function ht(t3) {
    t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", ht(t3.parentElement));
  }
  var mt = (t3) => {
    const e2 = [];
    let n2;
    for (; n2 = ft.exec(t3); )
      e2.push(n2[1]);
    return e2;
  };
  function gt(t3, e2) {
    gt._console = gt._console || {log: console.log, warn: console.warn};
    const {_console: n2} = gt, o4 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o4}> received an unexpected slot "default".`, `<${o4}> was created with unknown prop 'scoped'`, `<${o4}> was created with unknown prop 'scopedSync'`];
    for (const t4 of ["log", "warn"])
      console[t4] = (...e3) => {
        r2.includes(e3[0]) || n2[t4](...e3);
      }, e2().then(() => {
        console[t4] = n2[t4];
      });
  }
  function yt() {
    let t3 = window.location.pathname + window.location.search + window.location.hash;
    const {url: e2, options: n2} = function(t4) {
      const [e3, n3] = t4.split("__[[routify_url_options]]__"), o4 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
      return window.routify = window.routify || {}, window.routify.prefetched = o4.prefetch, {url: e3, options: o4};
    }(t3);
    return {...$t(e2), options: n2};
  }
  function $t(t3) {
    pt.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
    const e2 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e2);
    return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
  }
  function bt(t3, e2, n2) {
    const o4 = pt.useHash ? "#" : "";
    let r2;
    return r2 = function(t4, e3, n3) {
      const o5 = Object.assign({}, n3, e3), r3 = function(t5, e4) {
        if (!pt.queryHandler)
          return "";
        const n4 = mt(t5), o6 = {};
        e4 && Object.entries(e4).forEach(([t6, e5]) => {
          n4.includes(t6) || (o6[t6] = e5);
        });
        return pt.queryHandler.stringify(o6).replace(/\?$/, "");
      }(t4, e3);
      for (const [e4, n4] of Object.entries(o5))
        t4 = t4.replace(`:${e4}`, n4);
      return `${t4}${r3}`;
    }(t3, e2, n2), r2 = pt.urlTransform.apply(r2), r2 = o4 + r2, r2;
  }
  function wt(t3) {
    let e2;
    const n2 = t3[2].default, o4 = u(n2, t3, t3[1], null);
    return {c() {
      o4 && o4.c();
    }, m(t4, n3) {
      o4 && o4.m(t4, n3), e2 = true;
    }, p(t4, [e3]) {
      o4 && o4.p && 2 & e3 && f(o4, n2, t4, t4[1], e3, null, null);
    }, i(t4) {
      e2 || (et(o4, t4), e2 = true);
    }, o(t4) {
      nt(o4, t4), e2 = false;
    }, d(t4) {
      o4 && o4.d(t4);
    }};
  }
  function _t(t3, e2, n2) {
    let {$$slots: o4 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
    return t3.$$set = (t4) => {
      "scoped" in t4 && n2(0, s2 = t4.scoped), "$$scope" in t4 && n2(1, r2 = t4.$$scope);
    }, [s2, r2, o4];
  }
  var xt = class extends ut {
    constructor(t3) {
      super(), lt(this, t3, _t, wt, i2, {scoped: 0});
    }
  };
  var vt = [];
  function Pt(t3, e2) {
    return {subscribe: kt(t3, e2).subscribe};
  }
  function kt(e2, n2 = t2) {
    let o4;
    const r2 = [];
    function s2(t3) {
      if (i2(e2, t3) && (e2 = t3, o4)) {
        const t4 = !vt.length;
        for (let t5 = 0; t5 < r2.length; t5 += 1) {
          const n3 = r2[t5];
          n3[1](), vt.push(n3, e2);
        }
        if (t4) {
          for (let t5 = 0; t5 < vt.length; t5 += 2)
            vt[t5][0](vt[t5 + 1]);
          vt.length = 0;
        }
      }
    }
    return {set: s2, update: function(t3) {
      s2(t3(e2));
    }, subscribe: function(i3, a2 = t2) {
      const c2 = [i3, a2];
      return r2.push(c2), r2.length === 1 && (o4 = n2(s2) || t2), i3(e2), () => {
        const t3 = r2.indexOf(c2);
        t3 !== -1 && r2.splice(t3, 1), r2.length === 0 && (o4(), o4 = null);
      };
    }};
  }
  function jt(e2, n2, o4) {
    const i3 = !Array.isArray(e2), c2 = i3 ? [e2] : e2, l2 = n2.length < 2;
    return Pt(o4, (e3) => {
      let o5 = false;
      const u2 = [];
      let p3 = 0, f2 = t2;
      const d2 = () => {
        if (p3)
          return;
        f2();
        const o6 = n2(i3 ? u2[0] : u2, e3);
        l2 ? e3(o6) : f2 = s(o6) ? o6 : t2;
      }, h2 = c2.map((t3, e4) => a(t3, (t4) => {
        u2[e4] = t4, p3 &= ~(1 << e4), o5 && d2();
      }, () => {
        p3 |= 1 << e4;
      }));
      return o5 = true, d2(), function() {
        r(h2), f2();
      };
    });
  }
  window.routify = window.routify || {};
  var Et = kt(null);
  var Ot = kt([]);
  Ot.subscribe((t3) => window.routify.routes = t3);
  var Lt = kt({component: {params: {}}});
  var It = kt(null);
  var St = kt(true);
  async function Nt({page: t3, metatags: e2, afterPageLoad: n2, parentNode: o4}) {
    const r2 = t3.last !== t3;
    setTimeout(() => dt(o4, r2));
    const {path: s2} = t3, {options: i3} = yt(), a2 = i3.prefetch;
    for (const e3 of n2._hooks)
      e3 && await e3(t3.api);
    e2.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: s2, prefetchId: a2}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
  }
  function Tt(t3, e2 = false) {
    t3 = pt.urlTransform.remove(t3);
    let {pathname: n2, search: o4} = $t(t3).url;
    const r2 = c(Ot), s2 = r2.find((t4) => n2 === t4.meta.name) || r2.find((t4) => n2.match(t4.regex));
    if (!s2)
      throw new Error(`Route could not be found for "${n2}".`);
    const i3 = e2 ? Object.create(s2) : s2, {route: a2, redirectPath: l2, rewritePath: u2} = Ft(i3, r2);
    return u2 && ({pathname: n2, search: o4} = $t(bt(u2, a2.params)).url, l2 && (a2.redirectTo = bt(l2, a2.params || {}))), pt.queryHandler && (a2.params = Object.assign({}, pt.queryHandler.parse(o4))), function(t4, e3) {
      if (t4.paramKeys) {
        const n3 = function(t5) {
          const e4 = [];
          return t5.forEach((t6) => {
            e4[t6.path.split("/").filter(Boolean).length - 1] = t6;
          }), e4;
        }(t4.layouts), o5 = e3.split("/").filter(Boolean);
        (function(t5) {
          return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
        })(t4.path).forEach((e4, r3) => {
          e4 && (t4.params[e4] = o5[r3], n3[r3] ? n3[r3].param = {[e4]: o5[r3]} : t4.param = {[e4]: o5[r3]});
        });
      }
    }(a2, n2), a2.leftover = t3.replace(new RegExp(a2.regex), ""), a2;
  }
  function Ft(t3, e2, n2, o4) {
    const {redirect: r2, rewrite: s2} = t3.meta;
    if (r2 || s2) {
      n2 = r2 ? r2.path || r2 : n2, o4 = s2 ? s2.path || s2 : n2;
      const i3 = r2 && r2.params, a2 = s2 && s2.params, c2 = e2.find((t4) => t4.path === o4);
      return c2 === t3 && console.error(`${o4} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o4}`), (i3 || a2) && (c2.params = Object.assign({}, c2.params, i3, a2)), Ft(c2, e2, n2, o4);
    }
    return {route: t3, redirectPath: n2, rewritePath: o4};
  }
  function At(t3, e2, n2) {
    const o4 = t3.slice();
    return o4[1] = e2[n2], o4;
  }
  function Rt(t3, e2) {
    let n2, o4;
    return {key: t3, first: null, c() {
      n2 = $("iframe"), n2.src !== (o4 = e2[1].url) && k(n2, "src", o4), k(n2, "frameborder", "0"), k(n2, "title", "routify prefetcher"), this.first = n2;
    }, m(t4, e3) {
      m(t4, n2, e3);
    }, p(t4, r2) {
      e2 = t4, 1 & r2 && n2.src !== (o4 = e2[1].url) && k(n2, "src", o4);
    }, d(t4) {
      t4 && g(n2);
    }};
  }
  function Mt(e2) {
    let n2, o4 = [], r2 = new Map(), s2 = e2[0];
    const i3 = (t3) => t3[1].options.prefetch;
    for (let t3 = 0; t3 < s2.length; t3 += 1) {
      let n3 = At(e2, s2, t3), a2 = i3(n3);
      r2.set(a2, o4[t3] = Rt(a2, n3));
    }
    return {c() {
      n2 = $("div");
      for (let t4 = 0; t4 < o4.length; t4 += 1)
        o4[t4].c();
      var t3, e3, r3;
      k(n2, "id", "__routify_iframes"), t3 = "display", e3 = "none", n2.style.setProperty(t3, e3, r3 ? "important" : "");
    }, m(t3, e3) {
      m(t3, n2, e3);
      for (let t4 = 0; t4 < o4.length; t4 += 1)
        o4[t4].m(n2, null);
    }, p(t3, [e3]) {
      1 & e3 && (s2 = t3[0], o4 = st(o4, e3, i3, 1, t3, s2, r2, n2, ot, Rt, null, At));
    }, i: t2, o: t2, d(t3) {
      t3 && g(n2);
      for (let t4 = 0; t4 < o4.length; t4 += 1)
        o4[t4].d();
    }};
  }
  var qt = kt([]);
  var Ct = jt(qt, (t3) => t3.slice(0, 2));
  function Bt(t3) {
    const e2 = t3.data ? t3.data.prefetchId : t3;
    if (!e2)
      return null;
    const n2 = c(qt).find((t4) => t4 && t4.options.prefetch == e2);
    if (n2) {
      const {gracePeriod: t4} = n2.options, o4 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
        window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
      });
      Promise.all([o4, r2]).then(() => {
        qt.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
      });
    }
  }
  function Ut(t3, e2, n2) {
    let o4;
    return l(t3, Ct, (t4) => n2(0, o4 = t4)), [o4];
  }
  Ct.subscribe((t3) => t3.forEach(({options: t4}) => {
    setTimeout(() => Bt(t4.prefetch), t4.timeout);
  })), addEventListener("message", Bt, false);
  var Dt = class extends ut {
    constructor(t3) {
      super(), lt(this, t3, Ut, Mt, i2, {});
    }
  };
  function Ht() {
    return M("routify") || Lt;
  }
  var Kt = {subscribe: (t3) => jt(Et, (t4) => t4.api).subscribe(t3)};
  var Jt = {subscribe: (t3) => (window.routify.stopAutoReady = true, t3(async function() {
    await J(), await Nt({page: c(Et), metatags: Xt, afterPageLoad: zt});
  }), () => {
  })};
  var zt = {_hooks: [(t3) => St.set(false)], subscribe: Gt};
  var Wt = {_hooks: [], subscribe: Gt};
  function Gt(t3) {
    const e2 = this._hooks, n2 = e2.length;
    return t3((t4) => {
      e2[n2] = t4;
    }), () => delete e2[n2];
  }
  var Qt = {subscribe: (t3) => jt(Ht(), (t4) => t4.route.params).subscribe(t3)};
  var Vt = {subscribe(t3) {
    const e2 = Ht(), {route: n2, routes: o4} = c(e2);
    return jt(e2, (t4) => {
      return e3 = t4, r2 = n2, s2 = o4, function(t5, n3 = {}, o5) {
        const {component: i3} = e3, a2 = Object.assign({}, r2.params, i3.params);
        let c2 = t5 && t5.nodeType && t5;
        c2 && (t5 = t5.getAttribute("href")), t5 = t5 ? p3(t5) : i3.shortPath;
        const l2 = s2.find((e4) => [e4.shortPath || "/", e4.path].includes(t5));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t6);
        }
        o5 && o5.strict !== false || (t5 = t5.replace(/index$/, ""));
        let u2 = bt(t5, n3, a2);
        return c2 ? (c2.href = u2, {update(e4) {
          c2.href = bt(t5, e4, a2);
        }}) : u2;
        function p3(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e4, n4] = t6.match(/^([\.\/]+)(.*)/), o6 = i3.path.replace(/\/$/, "");
            const r3 = e4.match(/\.\.\//g) || [];
            i3.isPage && r3.push(null), r3.forEach(() => o6 = o6.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o6}/${n4}`.replace(/\/$/, "")) || "/";
          } else if (t6.match(/^\//))
            ;
          else {
            const e4 = s2.find((e5) => e5.meta.name === t6);
            e4 && (t6 = e4.shortPath);
          }
          return t6;
        }
      };
      var e3, r2, s2;
    }).subscribe(t3);
  }};
  var Zt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, (Zt.getLongest(Zt.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
    Zt.writeMeta(t3, e2);
  }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
    Zt.writeMeta(`og:${t3}`, e2);
  }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
    document.title = e2;
  }}], getLongest(t3, e2) {
    const n2 = t3[e2];
    if (n2) {
      const o4 = c(Et).path;
      return n2[Object.keys(t3[e2]).filter((t4) => o4.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
    }
  }, writeMeta(t3, e2) {
    const n2 = document.getElementsByTagName("head")[0], o4 = t3.match(/(.+)\:/), r2 = o4 && o4[1] || "plain", {propField: s2, valueField: i3} = Xt.services[r2] || Xt.services.plain, a2 = document.querySelector(`meta[${s2}='${t3}']`);
    a2 && a2.remove();
    const c2 = document.createElement("meta");
    c2.setAttribute(s2, t3), c2.setAttribute(i3, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
  }, set(t3, e2) {
    Zt.plugins.forEach((n2) => {
      n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
    });
  }, clear() {
    const t3 = document.querySelector("meta");
    t3 && t3.remove();
  }, template(t3, e2) {
    const n2 = Zt.getOrigin();
    Zt.templates[t3] = Zt.templates[t3] || {}, Zt.templates[t3][n2] = e2;
  }, update() {
    Object.keys(Zt.props).forEach((t3) => {
      let e2 = Zt.getLongest(Zt.props, t3);
      Zt.plugins.forEach((n2) => {
        n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
      });
    });
  }, batchedUpdate() {
    Zt._pendingUpdate || (Zt._pendingUpdate = true, setTimeout(() => {
      Zt._pendingUpdate = false, this.update();
    }));
  }, _updateQueued: false, getOrigin() {
    const t3 = Ht();
    return t3 && c(t3).path || "/";
  }, _pendingUpdate: false};
  var Xt = new Proxy(Zt, {set(t3, e2, n2, o4) {
    const {props: r2, getOrigin: s2} = t3;
    return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n2, o4) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
  }});
  function Yt(t3, e2, n2) {
    const o4 = t3.slice();
    return o4[21] = e2[n2].component, o4[22] = e2[n2].componentFile, o4[2] = e2[n2].decorator, o4[1] = e2[n2].nodes, o4;
  }
  function te(t3) {
    let e2, n2, o4 = [], r2 = new Map(), s2 = [t3[4]];
    const i3 = (t4) => t4[6];
    for (let e3 = 0; e3 < 1; e3 += 1) {
      let n3 = Yt(t3, s2, e3), a2 = i3(n3);
      r2.set(a2, o4[e3] = re(a2, n3));
    }
    return {c() {
      for (let t4 = 0; t4 < 1; t4 += 1)
        o4[t4].c();
      e2 = x();
    }, m(t4, r3) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o4[e3].m(t4, r3);
      m(t4, e2, r3), n2 = true;
    }, p(t4, n3) {
      33554557 & n3 && (s2 = [t4[4]], Y(), o4 = st(o4, n3, i3, 1, t4, s2, r2, e2.parentNode, rt, re, e2, Yt), tt());
    }, i(t4) {
      if (!n2) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          et(o4[t5]);
        n2 = true;
      }
    }, o(t4) {
      for (let t5 = 0; t5 < 1; t5 += 1)
        nt(o4[t5]);
      n2 = false;
    }, d(t4) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o4[e3].d(t4);
      t4 && g(e2);
    }};
  }
  function ee(t3) {
    let e2, n2;
    return e2 = new ae({props: {decorator: t3[2], nodes: t3[1], scoped: {...t3[0], ...t3[25]}}}), {c() {
      it(e2.$$.fragment);
    }, m(t4, o4) {
      at(e2, t4, o4), n2 = true;
    }, p(t4, n3) {
      const o4 = {};
      4 & n3 && (o4.decorator = t4[2]), 16 & n3 && (o4.nodes = t4[1]), 33554433 & n3 && (o4.scoped = {...t4[0], ...t4[25]}), e2.$set(o4);
    }, i(t4) {
      n2 || (et(e2.$$.fragment, t4), n2 = true);
    }, o(t4) {
      nt(e2.$$.fragment, t4), n2 = false;
    }, d(t4) {
      ct(e2, t4);
    }};
  }
  function ne(t3) {
    let e2, n2, o4 = t3[21] && t3[1].length && ee(t3);
    return {c() {
      o4 && o4.c(), e2 = x();
    }, m(t4, r2) {
      o4 && o4.m(t4, r2), m(t4, e2, r2), n2 = true;
    }, p(t4, n3) {
      t4[21] && t4[1].length ? o4 ? (o4.p(t4, n3), 16 & n3 && et(o4, 1)) : (o4 = ee(t4), o4.c(), et(o4, 1), o4.m(e2.parentNode, e2)) : o4 && (Y(), nt(o4, 1, 1, () => {
        o4 = null;
      }), tt());
    }, i(t4) {
      n2 || (et(o4), n2 = true);
    }, o(t4) {
      nt(o4), n2 = false;
    }, d(t4) {
      o4 && o4.d(t4), t4 && g(e2);
    }};
  }
  function oe(t3) {
    let n2, o4, r2;
    const s2 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
    var i3 = t3[22];
    function a2(t4) {
      let n3 = {$$slots: {default: [ne, ({scoped: t5, decorator: e2}) => ({25: t5, 2: e2}), ({scoped: t5, decorator: e2}) => (t5 ? 33554432 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t4}};
      for (let t5 = 0; t5 < s2.length; t5 += 1)
        n3 = e(n3, s2[t5]);
      return {props: n3};
    }
    return i3 && (n2 = new i3(a2(t3))), {c() {
      n2 && it(n2.$$.fragment), o4 = _();
    }, m(t4, e2) {
      n2 && at(n2, t4, e2), m(t4, o4, e2), r2 = true;
    }, p(t4, e2) {
      const r3 = 41 & e2 ? function(t5, e3) {
        const n3 = {}, o5 = {}, r4 = {$$scope: 1};
        let s3 = t5.length;
        for (; s3--; ) {
          const i4 = t5[s3], a3 = e3[s3];
          if (a3) {
            for (const t6 in i4)
              t6 in a3 || (o5[t6] = 1);
            for (const t6 in a3)
              r4[t6] || (n3[t6] = a3[t6], r4[t6] = 1);
            t5[s3] = a3;
          } else
            for (const t6 in i4)
              r4[t6] = 1;
        }
        for (const t6 in o5)
          t6 in n3 || (n3[t6] = void 0);
        return n3;
      }(s2, [1 & e2 && {scoped: t4[0]}, 32 & e2 && {scopedSync: t4[5]}, 8 & e2 && (c2 = t4[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
      var c2;
      if (100663317 & e2 && (r3.$$scope = {dirty: e2, ctx: t4}), i3 !== (i3 = t4[22])) {
        if (n2) {
          Y();
          const t5 = n2;
          nt(t5.$$.fragment, 1, 0, () => {
            ct(t5, 1);
          }), tt();
        }
        i3 ? (n2 = new i3(a2(t4)), it(n2.$$.fragment), et(n2.$$.fragment, 1), at(n2, o4.parentNode, o4)) : n2 = null;
      } else
        i3 && n2.$set(r3);
    }, i(t4) {
      r2 || (n2 && et(n2.$$.fragment, t4), r2 = true);
    }, o(t4) {
      n2 && nt(n2.$$.fragment, t4), r2 = false;
    }, d(t4) {
      n2 && ct(n2, t4), t4 && g(o4);
    }};
  }
  function re(t3, e2) {
    let n2, o4, r2, s2;
    var i3 = e2[2];
    function a2(t4) {
      return {props: {scoped: t4[0], $$slots: {default: [oe]}, $$scope: {ctx: t4}}};
    }
    return i3 && (o4 = new i3(a2(e2))), {key: t3, first: null, c() {
      n2 = x(), o4 && it(o4.$$.fragment), r2 = x(), this.first = n2;
    }, m(t4, e3) {
      m(t4, n2, e3), o4 && at(o4, t4, e3), m(t4, r2, e3), s2 = true;
    }, p(t4, n3) {
      e2 = t4;
      const s3 = {};
      if (1 & n3 && (s3.scoped = e2[0]), 67108925 & n3 && (s3.$$scope = {dirty: n3, ctx: e2}), i3 !== (i3 = e2[2])) {
        if (o4) {
          Y();
          const t5 = o4;
          nt(t5.$$.fragment, 1, 0, () => {
            ct(t5, 1);
          }), tt();
        }
        i3 ? (o4 = new i3(a2(e2)), it(o4.$$.fragment), et(o4.$$.fragment, 1), at(o4, r2.parentNode, r2)) : o4 = null;
      } else
        i3 && o4.$set(s3);
    }, i(t4) {
      s2 || (o4 && et(o4.$$.fragment, t4), s2 = true);
    }, o(t4) {
      o4 && nt(o4.$$.fragment, t4), s2 = false;
    }, d(t4) {
      t4 && g(n2), t4 && g(r2), o4 && ct(o4, t4);
    }};
  }
  function se(e2) {
    let n2, o4, r2, i3, a2, c2 = e2[4] && te(e2);
    return {c() {
      c2 && c2.c(), n2 = _(), o4 = $("span");
    }, m(l2, u2) {
      var p3;
      c2 && c2.m(l2, u2), m(l2, n2, u2), m(l2, o4, u2), r2 = true, i3 || (p3 = e2[9].call(null, o4), a2 = p3 && s(p3.destroy) ? p3.destroy : t2, i3 = true);
    }, p(t3, [e3]) {
      t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && et(c2, 1)) : (c2 = te(t3), c2.c(), et(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (Y(), nt(c2, 1, 1, () => {
        c2 = null;
      }), tt());
    }, i(t3) {
      r2 || (et(c2), r2 = true);
    }, o(t3) {
      nt(c2), r2 = false;
    }, d(t3) {
      c2 && c2.d(t3), t3 && g(n2), t3 && g(o4), i3 = false, a2();
    }};
  }
  function ie(t3, e2, n2) {
    let o4, r2, s2, i3, a2;
    l(t3, Et, (t4) => n2(15, i3 = t4)), l(t3, Ot, (t4) => n2(16, a2 = t4));
    let c2, {nodes: u2 = []} = e2, {scoped: p3 = {}} = e2, {decorator: f2} = e2, h2 = null, m2 = null, g2 = {}, y2 = 1;
    const $2 = kt(null);
    l(t3, $2, (t4) => n2(4, r2 = t4));
    const b2 = M("routify") || Lt;
    l(t3, b2, (t4) => n2(14, s2 = t4));
    R("routify", $2);
    let w2 = [];
    function _2(t4) {
      n2(5, g2 = {...p3});
      const e3 = {...r2, nodes: m2, decorator: f2 || xt, layout: h2.isLayout ? h2 : s2.layout, component: h2, route: i3, routes: a2, componentFile: t4, parentNode: c2 || s2.parentNode};
      $2.set(e3), d(b2, s2.child = h2, s2), m2.length === 0 && async function() {
        await new Promise((t6) => setTimeout(t6));
        const t5 = r2.component.path === i3.path;
        !window.routify.stopAutoReady && t5 && Nt({page: r2.component, metatags: Xt, afterPageLoad: zt, parentNode: c2});
      }();
    }
    return t3.$$set = (t4) => {
      "nodes" in t4 && n2(1, u2 = t4.nodes), "scoped" in t4 && n2(0, p3 = t4.scoped), "decorator" in t4 && n2(2, f2 = t4.decorator);
    }, t3.$$.update = () => {
      3074 & t3.$$.dirty && w2 !== u2 && (n2(11, w2 = u2), n2(3, [h2, ...m2] = [...u2], h2), n2(3, h2.api.reset = () => n2(10, y2++, y2), h2)), 8 & t3.$$.dirty && function(t4) {
        let e3 = t4.component();
        e3 instanceof Promise ? e3.then(_2) : _2(e3);
      }(h2), 1040 & t3.$$.dirty && n2(6, o4 = r2 && y2 && function({meta: t4, path: e3, param: n3, params: o5}) {
        return JSON.stringify({path: e3, invalidate: y2, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o5});
      }(r2.component)), 16 & t3.$$.dirty && r2 && gt(r2, J);
    }, [p3, u2, f2, h2, r2, g2, o4, $2, b2, (t4) => c2 = t4.parentNode, y2, w2];
  }
  var ae = class extends ut {
    constructor(t3) {
      super(), lt(this, t3, ie, se, i2, {nodes: 1, scoped: 0, decorator: 2});
    }
  };
  function ce(t3, e2) {
    let n2 = false;
    function o4(o5, r3) {
      const s2 = Tt(o5 || yt().fullpath);
      s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
      const i3 = [...(r3 && Tt(yt().fullpath, t3) || s2).layouts, s2];
      n2 && delete n2.last, s2.last = n2, n2 = s2, o5 || It.set(s2), Et.set(s2), s2.api.preload().then(() => {
        St.set(true), e2(i3);
      });
    }
    const r2 = function(t4) {
      ["pushState", "replaceState"].forEach((t5) => {
        history[t5 + "Native"] || (history[t5 + "Native"] = history[t5]), history[t5] = async function(e4 = {}, n4, o5) {
          if (o5 === location.pathname + location.search + location.hash)
            return false;
          const {id: r3, path: s2, params: i3} = c(Et);
          e4 = {id: r3, path: s2, params: i3, ...e4};
          const a2 = new Event(t5.toLowerCase());
          Object.assign(a2, {state: e4, title: n4, url: o5});
          return await ue(a2, o5) ? (history[t5 + "Native"].apply(this, [e4, n4, o5]), dispatchEvent(a2)) : void 0;
        };
      });
      let e3 = false;
      const n3 = {click: le, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
        e3 ? e3 = false : await ue(n4, yt().fullpath) ? t4() : (e3 = true, n4.preventDefault(), history.go(1));
      }};
      Object.entries(n3).forEach((t5) => addEventListener(...t5));
      return () => {
        Object.entries(n3).forEach((t5) => removeEventListener(...t5));
      };
    }(o4);
    return {updatePage: o4, destroy: r2};
  }
  function le(t3) {
    const e2 = t3.target.closest("a"), n2 = e2 && e2.href;
    if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
      return;
    if (!n2 || e2.target || e2.host !== location.host)
      return;
    const o4 = new URL(n2), r2 = o4.pathname + o4.search + o4.hash;
    t3.preventDefault(), history.pushState({}, "", r2);
  }
  async function ue(t3, e2) {
    const n2 = Tt(e2).api;
    for (const o4 of Wt._hooks.filter(Boolean)) {
      if (!await o4(t3, n2, {url: e2}))
        return false;
    }
    return true;
  }
  function pe(t3) {
    let e2, n2;
    return e2 = new ae({props: {nodes: t3[0]}}), {c() {
      it(e2.$$.fragment);
    }, m(t4, o4) {
      at(e2, t4, o4), n2 = true;
    }, p(t4, n3) {
      const o4 = {};
      1 & n3 && (o4.nodes = t4[0]), e2.$set(o4);
    }, i(t4) {
      n2 || (et(e2.$$.fragment, t4), n2 = true);
    }, o(t4) {
      nt(e2.$$.fragment, t4), n2 = false;
    }, d(t4) {
      ct(e2, t4);
    }};
  }
  function fe(t3) {
    let e2, n2, o4, r2 = t3[0] && t3[1] !== null && pe(t3);
    return n2 = new Dt({}), {c() {
      r2 && r2.c(), e2 = _(), it(n2.$$.fragment);
    }, m(t4, s2) {
      r2 && r2.m(t4, s2), m(t4, e2, s2), at(n2, t4, s2), o4 = true;
    }, p(t4, [n3]) {
      t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n3), 3 & n3 && et(r2, 1)) : (r2 = pe(t4), r2.c(), et(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (Y(), nt(r2, 1, 1, () => {
        r2 = null;
      }), tt());
    }, i(t4) {
      o4 || (et(r2), et(n2.$$.fragment, t4), o4 = true);
    }, o(t4) {
      nt(r2), nt(n2.$$.fragment, t4), o4 = false;
    }, d(t4) {
      r2 && r2.d(t4), t4 && g(e2), ct(n2, t4);
    }};
  }
  function de(t3, e2, n2) {
    let o4;
    l(t3, Et, (t4) => n2(1, o4 = t4));
    let r2, s2, {routes: i3} = e2, {config: a2 = {}} = e2;
    window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(pt, a2);
    R("routifyupdatepage", (...t4) => s2 && s2.updatePage(...t4));
    const c2 = (t4) => n2(0, r2 = t4), u2 = () => {
      s2 && (s2.destroy(), s2 = null);
    };
    let p3 = null;
    var f2;
    return f2 = u2, F().$$.on_destroy.push(f2), t3.$$set = (t4) => {
      "routes" in t4 && n2(2, i3 = t4.routes), "config" in t4 && n2(3, a2 = t4.config);
    }, t3.$$.update = () => {
      4 & t3.$$.dirty && i3 && (clearTimeout(p3), p3 = setTimeout(() => {
        u2(), s2 = ce(i3, c2), Ot.set(i3), s2.updatePage();
      }));
    }, [r2, o4, i3, a2];
  }
  var he = class extends ut {
    constructor(t3) {
      super(), lt(this, t3, de, fe, i2, {routes: 2, config: 3});
    }
  };
  function me(t3) {
    const e2 = async function(e3) {
      return await ge(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    };
    return e2.sync = function(e3) {
      return ye(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    }, e2;
  }
  async function ge(t3, e2) {
    const n2 = await t3(e2);
    if (n2 === false)
      return false;
    const o4 = n2 || e2.file;
    if (o4.children) {
      const n3 = await Promise.all(o4.children.map(async (n4) => ge(t3, {state: e2.state, scope: $e(e2.scope || {}), parent: e2.file, file: await n4})));
      o4.children = n3.filter(Boolean);
    }
    return o4;
  }
  function ye(t3, e2) {
    const n2 = t3(e2);
    if (n2 === false)
      return false;
    const o4 = n2 || e2.file;
    if (o4.children) {
      const n3 = o4.children.map((n4) => ye(t3, {state: e2.state, scope: $e(e2.scope || {}), parent: e2.file, file: n4}));
      o4.children = n3.filter(Boolean);
    }
    return o4;
  }
  function $e(t3) {
    return JSON.parse(JSON.stringify(t3));
  }
  var be = me(({file: t3}) => {
    (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
      const n2 = e2 ? "" : "/?$";
      return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(ft, "([^/]+)") + n2}`;
    })(t3.path, t3.isFallback));
  });
  var we = me(({file: t3}) => {
    t3.paramKeys = mt(t3.path);
  });
  var _e = me(({file: t3}) => {
    t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
  });
  var xe = me(({file: t3}) => {
    t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
  });
  var ve = me(({file: t3}) => {
    const e2 = t3, n2 = t3.meta && t3.meta.children || [];
    n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
  });
  var Pe = me((t3) => {
    const {file: e2} = t3, {isFallback: n2, meta: o4} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i3 = o4.index || o4.index === 0, a2 = o4.index === false;
    e2.isIndexable = i3 || !n2 && !r2 && !s2 && !a2, e2.isNonIndexable = !e2.isIndexable;
  });
  var ke = me(({file: t3, parent: e2}) => {
    Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => Ee(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => Ee(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => je(e2)});
  });
  function je(t3, e2 = []) {
    return t3 && (e2.unshift(t3), je(t3.parent, e2)), e2;
  }
  function Ee(t3, e2) {
    if (!t3.root) {
      const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o4 = n2.indexOf(t3);
      return n2[o4 + e2];
    }
  }
  var Oe = me(({file: t3, parent: e2}) => {
    t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
  });
  var Le = me(({file: t3, scope: e2}) => {
    function n2(t4) {
      if (!t4.isLayout && t4.meta.reset)
        return [];
      const {parent: e3} = t4, o4 = e3 && e3.component && e3, r2 = o4 && (o4.isReset || o4.meta.reset), s2 = e3 && !r2 && n2(e3) || [];
      return o4 && s2.push(o4), s2;
    }
    Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
  });
  var Ie = me(({file: t3}) => {
    const e2 = t3.root ? function() {
    } : t3.children ? (t3.isPage, function() {
    }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
    });
    Object.setPrototypeOf(t3, e2.prototype);
  });
  var Se = Object.freeze({__proto__: null, setRegex: be, setParamKeys: we, setShortPath: _e, setRank: xe, addMetaChildren: ve, setIsIndexable: Pe, assignRelations: ke, assignIndex: Oe, assignLayout: Le, createFlatList: (t3) => {
    me((t4) => {
      (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
    }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
  }, setPrototype: Ie});
  var Ne = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
  function Te(t3) {
    return Object.entries(Ne).forEach(([e2, n2]) => {
      t3[e2] === void 0 && (t3[e2] = n2);
    }), t3.children && (t3.children = t3.children.map(Te)), t3;
  }
  var Fe = me(({file: t3}) => {
    t3.api = new Ae(t3);
  });
  var Ae = class {
    constructor(t3) {
      this.__file = t3, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t3.isMeta, this.path = t3.path, this.title = function(t4) {
        return t4.meta.title !== void 0 ? t4.meta.title : (t4.shortPath || t4.path).split("/").pop().replace(/-/g, " ");
      }(t3), this.meta = t3.meta;
    }
    get parent() {
      return !this.__file.root && this.__file.parent.api;
    }
    get children() {
      return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t3) => !t3.isNonIndexable).sort((t3, e2) => t3.isMeta && e2.isMeta ? 0 : (t3 = (t3.meta.index || t3.meta.title || t3.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t3.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t3}) => t3);
    }
    get next() {
      return Re(this, 1);
    }
    get prev() {
      return Re(this, -1);
    }
    async preload() {
      const t3 = [...this.__file.layouts, this.__file, this.index && this.index.__file].filter(Boolean).map((t4) => t4.component());
      await Promise.all(t3);
    }
    get component() {
      return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
    }
    get componentWithIndex() {
      return new Promise((t3) => Promise.all([this.component, this.index && this.index.component]).then((e2) => t3(e2)));
    }
    get index() {
      const t3 = this.__file.children && this.__file.children.find((t4) => t4.isIndex);
      return t3 && t3.api;
    }
  };
  function Re(t3, e2) {
    if (!t3.__file.root) {
      const n2 = t3.parent.children.indexOf(t3);
      return t3.parent.children[n2 + e2];
    }
  }
  var Me = {...Se, restoreDefaults: ({tree: t3}) => Te(t3), assignAPI: Fe};

  // dist/build/store-de3c9fe4.js
  var t = Pt("http://foodis.dataline.fi/pw/");
  var o = kt({});
  var i = kt({});
  var p = kt({total: 0, amount: 0, products: []});

  // dist/build/fetch-c1b3b3cf.js
  async function o2(o4 = "", t3 = "", n2 = "") {
    console.log(t3), o4 && (o4 = "?" + o4);
    const a2 = await fetch(`http://foodis.dataline.fi/pw/${o4}`, {method: t3 ? "POST" : "GET", mode: "cors", cache: "no-cache", headers: {"Content-Type": "application/json", ...n2 ? {Authorization: `Bearer ${n2}`} : void 0}, body: t3 ? JSON.stringify(t3) : null});
    return await a2.json();
  }

  // dist/build/main.js
  var qe = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => require_fallback_3f403429()).then((t3) => t3.default)}, {isDir: true, children: [{isDir: true, ext: "", children: [{isIndex: true, isPage: true, path: "/:cat/:slug/index", id: "__cat__slug_index", component: () => Promise.resolve().then(() => require_index_856fca81()).then((t3) => t3.default)}], path: "/:cat/:slug"}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => require_index_598ff8d5()).then((t3) => t3.default)}], isLayout: true, path: "/:cat", id: "__cat__layout", component: () => Promise.resolve().then(() => require_layout_65b252e1()).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => require_index_3763bcd0()).then((t3) => t3.default)}, {isPage: true, path: "/kassa", id: "_kassa", component: () => Promise.resolve().then(() => require_kassa_3fffe89d()).then((t3) => t3.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => require_layout_01a475fe()).then((t3) => t3.default)};
  var {tree: Ce, routes: Be} = function(t3) {
    const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
    for (let t4 of e2) {
      (Me[t4].sync || Me[t4])(n2);
    }
    return n2;
  }(qe);
  function Ue(e2) {
    let n2, o4;
    return n2 = new he({props: {routes: Be}}), {c() {
      it(n2.$$.fragment);
    }, m(t3, e3) {
      at(n2, t3, e3), o4 = true;
    }, p: t2, i(t3) {
      o4 || (et(n2.$$.fragment, t3), o4 = true);
    }, o(t3) {
      nt(n2.$$.fragment, t3), o4 = false;
    }, d(t3) {
      ct(n2, t3);
    }};
  }
  !function(t3, e2 = {target: document.body}, n2 = "hmr", o4 = "app-loaded") {
    const r2 = document.getElementById(n2), s2 = document.createElement("div");
    function i3() {
      removeEventListener(o4, i3), r2 && r2.remove(), s2.style.visibility = null, s2.setAttribute("id", n2);
    }
    s2.style.visibility = "hidden", e2.target.appendChild(s2), r2 ? addEventListener(o4, i3) : i3(), new t3({...e2, target: s2});
  }(class extends ut {
    constructor(t3) {
      super(), lt(this, t3, null, Ue, i2, {});
    }
  }, {target: document.body}, "routify-app");
})();
