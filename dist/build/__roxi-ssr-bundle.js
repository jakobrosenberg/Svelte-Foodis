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

  // dist/build/_fallback-261b8cfe.js
  var require_fallback_261b8cfe = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => fallback_261b8cfe_default2
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
      return l(s2, Gt, (s3) => e2(0, t3 = s3)), [t3];
    }
    var fallback_261b8cfe_default = class extends ct {
      constructor(s2) {
        super(), at(this, s2, m2, v2, i2, {});
      }
    };
    var fallback_261b8cfe_default2 = fallback_261b8cfe_default;
  });

  // dist/build/index-cb75f065.js
  var require_index_cb75f065 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_cb75f065_default2
    });
    function L2(t3, n2, e2) {
      const i3 = t3.slice();
      return i3[11] = n2[e2], i3;
    }
    function k2(t3) {
      let n2, e2, d2, m2, f2, h2, b2, v2, x2, y2, $2, D2, j2, H2, L3, k3 = t3[2].img && F2(t3), T3 = t3[2].price && M2(t3), I3 = t3[2].body && q2(t3), C3 = t3[2].extra && w2(t3);
      return {c() {
        n2 = $("div"), e2 = $("div"), k3 && k3.c(), d2 = _(), m2 = $("div"), T3 && T3.c(), f2 = _(), h2 = $("div"), b2 = $("div"), v2 = $("input"), x2 = _(), y2 = $("div"), $2 = $("button"), $2.textContent = "Lis\xE4\xE4 ostoskoriin", D2 = _(), I3 && I3.c(), j2 = _(), C3 && C3.c(), k(e2, "id", "img"), k(v2, "name", "amount"), k(v2, "type", "number"), k(v2, "min", t3[3]), k(v2, "step", "1"), v2.required = true, k($2, "class", "w100"), k(h2, "id", "cartIt"), k(h2, "class", "border grid"), k(m2, "id", "productInfo"), k(n2, "id", "product"), k(n2, "class", "container double grid");
      }, m(i3, r2) {
        m(i3, n2, r2), h(n2, e2), k3 && k3.m(e2, null), h(n2, d2), h(n2, m2), T3 && T3.m(m2, null), h(m2, f2), h(m2, h2), h(h2, b2), h(b2, v2), O(v2, t3[0]), h(h2, x2), h(h2, y2), h(y2, $2), h(m2, D2), I3 && I3.m(m2, null), h(m2, j2), C3 && C3.m(m2, null), H2 || (L3 = [v(v2, "input", t3[7]), v($2, "click", t3[5])], H2 = true);
      }, p(t4, n3) {
        t4[2].img ? k3 ? k3.p(t4, n3) : (k3 = F2(t4), k3.c(), k3.m(e2, null)) : k3 && (k3.d(1), k3 = null), t4[2].price ? T3 ? T3.p(t4, n3) : (T3 = M2(t4), T3.c(), T3.m(m2, f2)) : T3 && (T3.d(1), T3 = null), 8 & n3 && k(v2, "min", t4[3]), 1 & n3 && j(v2.value) !== t4[0] && O(v2, t4[0]), t4[2].body ? I3 ? I3.p(t4, n3) : (I3 = q2(t4), I3.c(), I3.m(m2, j2)) : I3 && (I3.d(1), I3 = null), t4[2].extra ? C3 ? C3.p(t4, n3) : (C3 = w2(t4), C3.c(), C3.m(m2, null)) : C3 && (C3.d(1), C3 = null);
      }, d(t4) {
        t4 && g(n2), k3 && k3.d(), T3 && T3.d(), I3 && I3.d(), C3 && C3.d(), H2 = false, r(L3);
      }};
    }
    function F2(t3) {
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
    function M2(t3) {
      let n2, e2, o4, u2, p3, f2, g2 = t3[1].toFixed(2) + "", h2 = t3[0] > 1 && T2(t3);
      return {c() {
        n2 = $("div"), e2 = w("Hinta: "), o4 = $("strong"), u2 = w(g2), p3 = w(" \u20AC"), f2 = _(), h2 && h2.c(), k(n2, "id", "price");
      }, m(t4, i3) {
        m(t4, n2, i3), h(n2, e2), h(n2, o4), h(o4, u2), h(o4, p3), h(n2, f2), h2 && h2.m(n2, null);
      }, p(t4, e3) {
        2 & e3 && g2 !== (g2 = t4[1].toFixed(2) + "") && E(u2, g2), t4[0] > 1 ? h2 ? h2.p(t4, e3) : (h2 = T2(t4), h2.c(), h2.m(n2, null)) : h2 && (h2.d(1), h2 = null);
      }, d(t4) {
        t4 && g(n2), h2 && h2.d();
      }};
    }
    function T2(t3) {
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
    function q2(t3) {
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
    function w2(t3) {
      let n2, e2, r2 = t3[2].extra, o4 = [];
      for (let n3 = 0; n3 < r2.length; n3 += 1)
        o4[n3] = I2(L2(t3, r2, n3));
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
            const s2 = L2(t4, r2, i3);
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
      let n2, e2 = t3[2] && k2(t3);
      return {c() {
        e2 && e2.c(), n2 = x();
      }, m(t4, i3) {
        e2 && e2.m(t4, i3), m(t4, n2, i3);
      }, p(t4, [i3]) {
        t4[2] ? e2 ? e2.p(t4, i3) : (e2 = k2(t4), e2.c(), e2.m(n2.parentNode, n2)) : e2 && (e2.d(1), e2 = null);
      }, i: t2, o: t2, d(t4) {
        e2 && e2.d(t4), t4 && g(n2);
      }};
    }
    function E2(t3, n2, e2) {
      let i3, r2, s2, c2, l2, o4, u2, a2;
      return l(t3, i, (t4) => e2(2, l2 = t4)), l(t3, Ht, (t4) => e2(8, o4 = t4)), l(t3, p, (t4) => e2(9, u2 = t4)), l(t3, Wt, (t4) => e2(6, a2 = t4)), t3.$$.update = () => {
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
    var index_cb75f065_default = class extends ct {
      constructor(t3) {
        super(), at(this, t3, E2, C2, i2, {});
      }
    };
    var index_cb75f065_default2 = index_cb75f065_default;
  });

  // dist/build/index-bfae5c19.js
  var require_index_bfae5c19 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_bfae5c19_default2
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
      return l(t3, Ht, (t4) => s2(2, l2 = t4)), l(t3, Wt, (t4) => s2(1, r2 = t4)), l(t3, i, (t4) => s2(0, c2 = t4)), t3.$$.update = () => {
        var e3;
        2 & t3.$$.dirty && r2.cat && (e3 = "path=" + r2.cat, o2(e3).then((t4) => {
          i.set(t4), l2();
        }));
      }, [c2, r2];
    }
    var index_bfae5c19_default = class extends ct {
      constructor(t3) {
        super(), at(this, t3, w2, q2, i2, {});
      }
    };
    var index_bfae5c19_default2 = index_bfae5c19_default;
  });

  // dist/build/_layout-230d3b27.js
  var require_layout_230d3b27 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_230d3b27_default2
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
        t3 || (Y(c3, s3), t3 = true);
      }, o(s3) {
        tt(c3, s3), t3 = false;
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
    var layout_230d3b27_default = class extends ct {
      constructor(s2) {
        super(), at(this, s2, u2, c2, i2, {});
      }
    };
    var layout_230d3b27_default2 = layout_230d3b27_default;
  });

  // dist/build/index-47a5898d.js
  var require_index_47a5898d = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_47a5898d_default2
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
    var index_47a5898d_default = class extends ct {
      constructor(t3) {
        super(), at(this, t3, b2, h2, i2, {});
      }
    };
    var index_47a5898d_default2 = index_47a5898d_default;
  });

  // dist/build/kassa-ca5bde99.js
  var require_kassa_ca5bde99 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => kassa_ca5bde99_default2
    });
    function F2(t3, e2, n2) {
      const s2 = t3.slice();
      return s2[14] = e2[n2], s2[15] = e2, s2[16] = n2, s2;
    }
    function N2(t3, e2, n2) {
      const s2 = t3.slice();
      return s2[14] = e2[n2], s2[17] = e2, s2[18] = n2, s2;
    }
    function j2(t3) {
      let e2;
      function n2(t4, e3) {
        return t4[3] == 0 ? M2 : L2;
      }
      let o4 = n2(t3), c2 = o4(t3);
      return {c() {
        e2 = $("div"), c2.c(), k(e2, "id", "checkout"), k(e2, "class", "container rel");
      }, m(t4, n3) {
        m(t4, e2, n3), c2.m(e2, null);
      }, p(t4, s2) {
        o4 === (o4 = n2(t4)) && c2 ? c2.p(t4, s2) : (c2.d(1), c2 = o4(t4), c2 && (c2.c(), c2.m(e2, null)));
      }, d(t4) {
        t4 && g(e2), c2.d();
      }};
    }
    function L2(t3) {
      let e2, n2, a2;
      function r2(t4, e3) {
        return typeof t4[3] != "number" ? q2 : $2;
      }
      let u2 = r2(t3), d2 = u2(t3);
      return {c() {
        e2 = $("h1"), e2.textContent = "Kiitos tilauksesta", n2 = _(), d2.c(), a2 = x();
      }, m(t4, s2) {
        m(t4, e2, s2), m(t4, n2, s2), d2.m(t4, s2), m(t4, a2, s2);
      }, p(t4, e3) {
        u2 === (u2 = r2(t4)) && d2 ? d2.p(t4, e3) : (d2.d(1), d2 = u2(t4), d2 && (d2.c(), d2.m(a2.parentNode, a2)));
      }, d(t4) {
        t4 && g(e2), t4 && g(n2), d2.d(t4), t4 && g(a2);
      }};
    }
    function M2(t3) {
      let e2, n2, u2, d2, m2, p3, f2, b2, g2, T2, C2, w2, j3, L3, M3, $3, q3, S3, z3, A3, P3, V3, Y3, B3, D2, E2, X2, G2, Q2, R2, U2, W2, Z2, _2, tt2, et2, nt2, st2, at2, lt2, it2, ot2, ct2, rt2, ut2, dt2, mt2 = t3[1].total.toFixed(2) + "", pt2 = t3[5].toFixed(2) + "", ht2 = t3[2].toFixed(2) + "", ft2 = t3[4].body && H2(t3), xt2 = t3[1].products, yt2 = [];
      for (let e3 = 0; e3 < xt2.length; e3 += 1)
        yt2[e3] = K2(N2(t3, xt2, e3));
      let bt2 = t3[0].distance && I2(t3), gt2 = t3[8], vt2 = [];
      for (let e3 = 0; e3 < gt2.length; e3 += 1)
        vt2[e3] = J2(F2(t3, gt2, e3));
      let kt2 = t3[1].customer.street && t3[1].customer.postal && t3[1].customer.area && O2(t3);
      return {c() {
        ft2 && ft2.c(), e2 = _(), n2 = $("div"), u2 = $("div"), d2 = $("h2"), d2.textContent = "Tuotteet", m2 = _(), p3 = $("table"), f2 = $("thead"), f2.innerHTML = '<tr><th class="tl">Tuote</th> \n								<th class="tc">Hinta</th> \n								<th class="tc">M\xE4\xE4r\xE4</th> \n								<th class="tc">Yhteens\xE4</th> \n								<th></th></tr>', b2 = _(), g2 = $("tbody");
        for (let t4 = 0; t4 < yt2.length; t4 += 1)
          yt2[t4].c();
        T2 = _(), C2 = $("div"), w2 = $("h2"), w2.textContent = "Maksutiedot", j3 = _(), L3 = $("table"), M3 = $("tbody"), $3 = $("tr"), q3 = $("td"), q3.textContent = "Tuotteet yhteens\xE4", S3 = _(), z3 = $("td"), A3 = w(mt2), P3 = w(" \u20AC"), V3 = _(), bt2 && bt2.c(), Y3 = _(), B3 = $("tr"), D2 = $("td"), D2.textContent = "ALV 10%", E2 = _(), X2 = $("td"), G2 = w(pt2), Q2 = w(" \u20AC"), R2 = _(), U2 = $("tr"), W2 = $("td"), W2.textContent = "Tilaus yhteens\xE4", Z2 = _(), _2 = $("td"), tt2 = w(ht2), et2 = w(" \u20AC"), nt2 = _(), st2 = $("form"), at2 = $("div"), lt2 = $("h2"), lt2.textContent = "Asiakastiedot", it2 = _(), ot2 = $("div");
        for (let t4 = 0; t4 < vt2.length; t4 += 1)
          vt2[t4].c();
        ct2 = _(), kt2 && kt2.c(), rt2 = x(), k(p3, "id", "productList"), k(p3, "class", "w100"), k(p3, "rules", "rows"), k(u2, "class", "item"), k(q3, "class", "label tl"), k(z3, "class", "value tr"), k(D2, "class", "label tl"), k(X2, "class", "value tr"), k(W2, "class", "label tl"), k(_2, "class", "value tr"), k(L3, "class", "w100"), k(C2, "id", "paymentInfo"), k(C2, "class", "item"), k(n2, "id", "tables"), k(n2, "class", "grid"), k(ot2, "class", "grid"), k(at2, "id", "client"), k(at2, "class", "item"), k(st2, "class", "items");
      }, m(s2, a2) {
        ft2 && ft2.m(s2, a2), m(s2, e2, a2), m(s2, n2, a2), h(n2, u2), h(u2, d2), h(u2, m2), h(u2, p3), h(p3, f2), h(p3, b2), h(p3, g2);
        for (let t4 = 0; t4 < yt2.length; t4 += 1)
          yt2[t4].m(g2, null);
        h(n2, T2), h(n2, C2), h(C2, w2), h(C2, j3), h(C2, L3), h(L3, M3), h(M3, $3), h($3, q3), h($3, S3), h($3, z3), h(z3, A3), h(z3, P3), h(M3, V3), bt2 && bt2.m(M3, null), h(M3, Y3), h(M3, B3), h(B3, D2), h(B3, E2), h(B3, X2), h(X2, G2), h(X2, Q2), h(M3, R2), h(M3, U2), h(U2, W2), h(U2, Z2), h(U2, _2), h(_2, tt2), h(_2, et2), m(s2, nt2, a2), m(s2, st2, a2), h(st2, at2), h(at2, lt2), h(at2, it2), h(at2, ot2);
        for (let t4 = 0; t4 < vt2.length; t4 += 1)
          vt2[t4].m(ot2, null);
        m(s2, ct2, a2), kt2 && kt2.m(s2, a2), m(s2, rt2, a2), ut2 || (dt2 = v(st2, "submit", P(t3[9])), ut2 = true);
      }, p(t4, n3) {
        if (t4[4].body ? ft2 ? ft2.p(t4, n3) : (ft2 = H2(t4), ft2.c(), ft2.m(e2.parentNode, e2)) : ft2 && (ft2.d(1), ft2 = null), 130 & n3) {
          let e3;
          for (xt2 = t4[1].products, e3 = 0; e3 < xt2.length; e3 += 1) {
            const s2 = N2(t4, xt2, e3);
            yt2[e3] ? yt2[e3].p(s2, n3) : (yt2[e3] = K2(s2), yt2[e3].c(), yt2[e3].m(g2, null));
          }
          for (; e3 < yt2.length; e3 += 1)
            yt2[e3].d(1);
          yt2.length = xt2.length;
        }
        if (2 & n3 && mt2 !== (mt2 = t4[1].total.toFixed(2) + "") && E(A3, mt2), t4[0].distance ? bt2 ? bt2.p(t4, n3) : (bt2 = I2(t4), bt2.c(), bt2.m(M3, Y3)) : bt2 && (bt2.d(1), bt2 = null), 32 & n3 && pt2 !== (pt2 = t4[5].toFixed(2) + "") && E(G2, pt2), 4 & n3 && ht2 !== (ht2 = t4[2].toFixed(2) + "") && E(tt2, ht2), 258 & n3) {
          let e3;
          for (gt2 = t4[8], e3 = 0; e3 < gt2.length; e3 += 1) {
            const s2 = F2(t4, gt2, e3);
            vt2[e3] ? vt2[e3].p(s2, n3) : (vt2[e3] = J2(s2), vt2[e3].c(), vt2[e3].m(ot2, null));
          }
          for (; e3 < vt2.length; e3 += 1)
            vt2[e3].d(1);
          vt2.length = gt2.length;
        }
        t4[1].customer.street && t4[1].customer.postal && t4[1].customer.area ? kt2 ? kt2.p(t4, n3) : (kt2 = O2(t4), kt2.c(), kt2.m(rt2.parentNode, rt2)) : kt2 && (kt2.d(1), kt2 = null);
      }, d(t4) {
        ft2 && ft2.d(t4), t4 && g(e2), t4 && g(n2), y(yt2, t4), bt2 && bt2.d(), t4 && g(nt2), t4 && g(st2), y(vt2, t4), t4 && g(ct2), kt2 && kt2.d(t4), t4 && g(rt2), ut2 = false, dt2();
      }};
    }
    function $2(t3) {
      let e2, n2, a2, o4, c2, u2;
      return {c() {
        e2 = $("p"), n2 = w("Tilaus on vahvistettu ja tilaustiedot on l\xE4hetetty\n					s\xE4hk\xF6postiin.\n					"), a2 = $("br"), o4 = w("\n					Tilausnumerosi on "), c2 = w(t3[3]), u2 = w(".");
      }, m(t4, s2) {
        m(t4, e2, s2), h(e2, n2), h(e2, a2), h(e2, o4), h(e2, c2), h(e2, u2);
      }, p(t4, e3) {
        8 & e3 && E(c2, t4[3]);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function q2(t3) {
      let e2, n2;
      return {c() {
        e2 = $("p"), n2 = w(t3[3]);
      }, m(t4, s2) {
        m(t4, e2, s2), h(e2, n2);
      }, p(t4, e3) {
        8 & e3 && E(n2, t4[3]);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function H2(t3) {
      let e2, n2 = t3[4].body + "";
      return {c() {
        e2 = $("div"), k(e2, "class", "body");
      }, m(t4, s2) {
        m(t4, e2, s2), e2.innerHTML = n2;
      }, p(t4, s2) {
        16 & s2 && n2 !== (n2 = t4[4].body + "") && (e2.innerHTML = n2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function S2(t3) {
      let e2, n2, c2, u2, d2, m2, p3, v2, k2, T2, C2, w2, F3, N3, j3, L3, M3, $3, q3, H3, S3, K3, I3, J3, O3, P3, V3, Y3, B3, D2 = t3[14].title + "", E2 = t3[14].price2.toFixed(2) + "", X2 = t3[14].total.toFixed(2) + "", G2 = t3[14].size && z2(t3), Q2 = t3[14].id && A2(t3);
      function R2() {
        t3[10].call($3, t3[18]);
      }
      function U2() {
        return t3[11](t3[18]);
      }
      return {c() {
        e2 = $("tr"), n2 = $("td"), c2 = $("strong"), u2 = w(D2), d2 = _(), G2 && G2.c(), m2 = _(), p3 = $("br"), v2 = _(), Q2 && Q2.c(), k2 = _(), T2 = $("td"), C2 = $("span"), C2.textContent = "Hinta:", w2 = _(), F3 = w(E2), N3 = _(), j3 = $("td"), L3 = $("span"), L3.textContent = "M\xE4\xE4r\xE4:", M3 = _(), $3 = $("input"), q3 = _(), H3 = $("td"), S3 = $("span"), S3.textContent = "Yhteens\xE4:", K3 = _(), I3 = w(X2), J3 = _(), O3 = $("td"), P3 = $("button"), P3.textContent = "X", V3 = _(), k(n2, "class", "product tl"), k(T2, "class", "price tc pt"), k($3, "type", "number"), k($3, "name", "amount"), k(j3, "class", "amount tc"), k(H3, "class", "total tc pt"), k(P3, "class", "del noBor"), k(O3, "class", "tr pt");
      }, m(s2, a2) {
        m(s2, e2, a2), h(e2, n2), h(n2, c2), h(c2, u2), h(c2, d2), G2 && G2.m(c2, null), h(n2, m2), h(n2, p3), h(n2, v2), Q2 && Q2.m(n2, null), h(e2, k2), h(e2, T2), h(T2, C2), h(T2, w2), h(T2, F3), h(e2, N3), h(e2, j3), h(j3, L3), h(j3, M3), h(j3, $3), O($3, t3[1].products[t3[18]].amount), h(e2, q3), h(e2, H3), h(H3, S3), h(H3, K3), h(H3, I3), h(e2, J3), h(e2, O3), h(O3, P3), h(e2, V3), Y3 || (B3 = [v($3, "input", R2), v(P3, "click", U2)], Y3 = true);
      }, p(e3, s2) {
        t3 = e3, 2 & s2 && D2 !== (D2 = t3[14].title + "") && E(u2, D2), t3[14].size ? G2 ? G2.p(t3, s2) : (G2 = z2(t3), G2.c(), G2.m(c2, null)) : G2 && (G2.d(1), G2 = null), t3[14].id ? Q2 ? Q2.p(t3, s2) : (Q2 = A2(t3), Q2.c(), Q2.m(n2, null)) : Q2 && (Q2.d(1), Q2 = null), 2 & s2 && E2 !== (E2 = t3[14].price2.toFixed(2) + "") && E(F3, E2), 2 & s2 && j($3.value) !== t3[1].products[t3[18]].amount && O($3, t3[1].products[t3[18]].amount), 2 & s2 && X2 !== (X2 = t3[14].total.toFixed(2) + "") && E(I3, X2);
      }, d(t4) {
        t4 && g(e2), G2 && G2.d(), Q2 && Q2.d(), Y3 = false, r(B3);
      }};
    }
    function z2(t3) {
      let e2, n2, s2 = t3[14].size + "";
      return {c() {
        e2 = w("- "), n2 = w(s2);
      }, m(t4, s3) {
        m(t4, e2, s3), m(t4, n2, s3);
      }, p(t4, e3) {
        2 & e3 && s2 !== (s2 = t4[14].size + "") && E(n2, s2);
      }, d(t4) {
        t4 && g(e2), t4 && g(n2);
      }};
    }
    function A2(t3) {
      let e2, n2, a2 = t3[14].id + "";
      return {c() {
        e2 = $("small"), n2 = w(a2);
      }, m(t4, s2) {
        m(t4, e2, s2), h(e2, n2);
      }, p(t4, e3) {
        2 & e3 && a2 !== (a2 = t4[14].id + "") && E(n2, a2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function K2(t3) {
      let e2, n2 = t3[14] != null && S2(t3);
      return {c() {
        n2 && n2.c(), e2 = x();
      }, m(t4, s2) {
        n2 && n2.m(t4, s2), m(t4, e2, s2);
      }, p(t4, s2) {
        t4[14] != null ? n2 ? n2.p(t4, s2) : (n2 = S2(t4), n2.c(), n2.m(e2.parentNode, e2)) : n2 && (n2.d(1), n2 = null);
      }, d(t4) {
        n2 && n2.d(t4), t4 && g(e2);
      }};
    }
    function I2(t3) {
      let e2, n2, c2, u2, d2, m2, p3, f2, x2 = t3[0].distance.text + "", b2 = t3[0].price.toFixed(2) + "";
      return {c() {
        e2 = $("tr"), n2 = $("td"), c2 = w("Toimitus, "), u2 = w(x2), d2 = _(), m2 = $("td"), p3 = w(b2), f2 = w(" \u20AC"), k(n2, "class", "label tl"), k(m2, "class", "value tr");
      }, m(t4, s2) {
        m(t4, e2, s2), h(e2, n2), h(n2, c2), h(n2, u2), h(e2, d2), h(e2, m2), h(m2, p3), h(m2, f2);
      }, p(t4, e3) {
        1 & e3 && x2 !== (x2 = t4[0].distance.text + "") && E(u2, x2), 1 & e3 && b2 !== (b2 = t4[0].price.toFixed(2) + "") && E(p3, b2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function J2(t3) {
      let e2, n2, c2, u2, d2, m2, p3, y2, b2, g2 = t3[14].title + "";
      function v2() {
        t3[12].call(m2, t3[14]);
      }
      return {c() {
        e2 = $("div"), n2 = $("label"), c2 = $("span"), u2 = w(g2), d2 = _(), m2 = $("input"), p3 = _(), k(c2, "class", "block"), k(m2, "id", t3[14].name), k(m2, "class", "w100"), k(m2, "name", t3[14].name), m2.required = true, k(e2, "class", "item");
      }, m(s2, a2) {
        m(s2, e2, a2), h(e2, n2), h(n2, c2), h(c2, u2), h(n2, d2), h(n2, m2), O(m2, t3[1].customer[t3[14].name]), h(e2, p3), y2 || (b2 = v(m2, "input", v2), y2 = true);
      }, p(e3, n3) {
        t3 = e3, 258 & n3 && m2.value !== t3[1].customer[t3[14].name] && O(m2, t3[1].customer[t3[14].name]);
      }, d(t4) {
        t4 && g(e2), y2 = false, b2();
      }};
    }
    function O2(t3) {
      let e2;
      function n2(t4, e3) {
        return t4[0].distance ? V2 : P2;
      }
      let o4 = n2(t3), c2 = o4(t3);
      return {c() {
        e2 = $("div"), c2.c(), k(e2, "id", "payment"), k(e2, "class", "tc");
      }, m(t4, n3) {
        m(t4, e2, n3), c2.m(e2, null);
      }, p(t4, s2) {
        o4 === (o4 = n2(t4)) && c2 ? c2.p(t4, s2) : (c2.d(1), c2 = o4(t4), c2 && (c2.c(), c2.m(e2, null)));
      }, d(t4) {
        t4 && g(e2), c2.d();
      }};
    }
    function P2(t3) {
      let e2, n2, o4;
      return {c() {
        e2 = $("button"), e2.textContent = "Laske tomituskulut", k(e2, "id", "ready"), k(e2, "class", "end"), k(e2, "name", "shipping");
      }, m(s2, a2) {
        m(s2, e2, a2), n2 || (o4 = v(e2, "click", t3[13]), n2 = true);
      }, p: t2, d(t4) {
        t4 && g(e2), n2 = false, o4();
      }};
    }
    function V2(t3) {
      let e2;
      return {c() {
        e2 = $("button"), e2.textContent = "Vahvista tilaus", k(e2, "id", "ready"), k(e2, "class", "end"), k(e2, "name", "ready"), k(e2, "type", "submit");
      }, m(t4, n2) {
        m(t4, e2, n2);
      }, p: t2, d(t4) {
        t4 && g(e2);
      }};
    }
    function Y2(t3) {
      let e2, n2, d2, m2 = t3[1].products[0] && j2(t3);
      return {c() {
        e2 = $("meta"), n2 = _(), m2 && m2.c(), d2 = x(), document.title = "Kassa - Tervetuloa maksamaan", k(e2, "name", "googlebot"), k(e2, "content", "noindex");
      }, m(t4, s2) {
        h(document.head, e2), m(t4, n2, s2), m2 && m2.m(t4, s2), m(t4, d2, s2);
      }, p(t4, [e3]) {
        t4[1].products[0] ? m2 ? m2.p(t4, e3) : (m2 = j2(t4), m2.c(), m2.m(d2.parentNode, d2)) : m2 && (m2.d(1), m2 = null);
      }, i: t2, o: t2, d(t4) {
        g(e2), t4 && g(n2), m2 && m2.d(t4), t4 && g(d2);
      }};
    }
    function B2(t3, e2, n2) {
      let s2, a2, l2, i3;
      l(t3, p, (t4) => n2(1, l2 = t4)), l(t3, i, (t4) => n2(4, i3 = t4)), l2.products[0] || window.location.replace("/"), d(p, l2.customer = {name1: "Timo", name2: "Anttila", street: "Testikuja 8", postal: 37130, area: "Nokia", phone: "0407746121", email: "timo@tuspe.com"}, l2), l2.customer || d(p, l2.customer = {name1: "Timo", name2: "Anttila", street: "Testikuja 8", postal: 37130, area: "Nokia", phone: "0407746121", email: "timo@tuspe.com", distance: {}, shipping: ""}, l2), d(i, i3 = {}, i3);
      let o4 = 0, c2 = {price: 0};
      function r2(t4, e3) {
        o2(t4, e3).then((t5) => {
          t5.redirect || t5.message ? t5.redirect !== void 0 ? window.location.replace(t5.redirect) : t5.message && n2(3, o4 = t5.message) : t5.distance ? n2(0, c2.distance = t5.distance, c2) : i.set(t5);
        });
      }
      function u2(t4) {
        d(p, l2.products = l2.products.filter((e3, n3) => n3 !== parseInt(t4) && e3 != null).sort(), l2);
      }
      T(async () => {
        r2("path=kassa");
      });
      let h2 = [{title: "Etunimi", type: "text", name: "name1", min: 2, max: 30, req: 1}, {title: "Sukunimi", type: "text", name: "name2", min: 2, max: 30, req: 1}, {title: "Puhelin", type: "text", name: "phone", min: 5, max: 15, req: 1}, {title: "S\xE4hk\xF6posti", type: "email", name: "email", min: 6, max: 100, req: 1}, {title: "Katuosoite", type: "text", name: "street", min: 5, max: 50}, {title: "Postinumero", type: "text", name: "postal", min: 5, max: 5}, {title: "Kaupunki", type: "text", name: "area", min: 3, max: 50}];
      if (window.location.search) {
        let t4 = window.location.search.substr(1).split("=");
        o4 = t4[0] == "id" ? parseInt(t4[1]) : 0;
      }
      return t3.$$.update = () => {
        3 & t3.$$.dirty && n2(2, s2 = l2.total + c2.price), 4 & t3.$$.dirty && n2(5, a2 = 0.1 * s2);
      }, [c2, l2, s2, o4, i3, a2, r2, u2, h2, async function(t4) {
        r2("path=kassa&payment=1", {cart: JSON.stringify(l2.products), delivery: JSON.stringify(c2), price: s2, vat: a2});
      }, function(t4) {
        l2.products[t4].amount = j(this.value), p.set(l2);
      }, (t4) => u2(t4), function(t4) {
        l2.customer[t4.name] = this.value, p.set(l2), n2(8, h2);
      }, () => r2("path=matka", {address: l2.customer.street + "+" + l2.customer.postal + "+" + l2.customer.area})];
    }
    var kassa_ca5bde99_default = class extends ct {
      constructor(t3) {
        super(), at(this, t3, B2, Y2, i2, {});
      }
    };
    var kassa_ca5bde99_default2 = kassa_ca5bde99_default;
  });

  // dist/build/_layout-1a0b2f71.js
  var require_layout_1a0b2f71 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_1a0b2f71_default2
    });
    function I2(t3) {
      let e2, s2, h2, p3, g2, f2, v2, $2, w2, b2, y2, k2 = t3[0].amount + "";
      return {c() {
        e2 = $("div"), s2 = $("a"), h2 = b("svg"), p3 = b("title"), g2 = w("Jatka kassalle"), f2 = b("path"), v2 = _(), $2 = $("div"), w2 = $("div"), b2 = w(k2), k(f2, "d", "M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"), k(h2, "xmlns", "http://www.w3.org/2000/svg"), k(h2, "width", "38"), k(h2, "height", "38"), k(h2, "viewBox", "0 0 24 24"), k(w2, "class", y2 = "grid cell bold " + t3[2]), k($2, "id", "cartBall"), k($2, "class", "abs"), k(s2, "class", "grid cell"), k(s2, "href", t3[1]), k(s2, "rel", "nofollow"), k(e2, "id", "cartIcon"), k(e2, "class", "abs rel");
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2), h(s2, h2), h(h2, p3), h(p3, g2), h(h2, f2), h(s2, v2), h(s2, $2), h($2, w2), h(w2, b2);
      }, p(t4, [e3]) {
        1 & e3 && k2 !== (k2 = t4[0].amount + "") && E(b2, k2), 4 & e3 && y2 !== (y2 = "grid cell bold " + t4[2]) && k(w2, "class", y2), 2 & e3 && k(s2, "href", t4[1]);
      }, i: t2, o: t2, d(t4) {
        t4 && g(e2);
      }};
    }
    function K2(t3, e2, s2) {
      let a2, l2, n2;
      return l(t3, p, (t4) => s2(0, n2 = t4)), t3.$$.update = () => {
        1 & t3.$$.dirty && s2(1, a2 = n2.amount > 0 ? "/kassa" : "/"), 1 & t3.$$.dirty && s2(2, l2 = n2.amount > 0 ? "bgo tw" : "bgw");
      }, [n2, a2, l2];
    }
    var Y2 = class extends ct {
      constructor(t3) {
        super(), at(this, t3, K2, I2, i2, {});
      }
    };
    function q2(t3, e2, s2) {
      const a2 = t3.slice();
      return a2[6] = e2[s2], a2;
    }
    function F2(t3) {
      let e2, s2, l2, n2, u2, m2, h2, p3, T2, x2, z2, M2, j2, B2, H2, L2, O2, N2, A2, E2, J2, S2, C2, I3, K3;
      function F3(t4, e3) {
        return t4[3] ? G2 : P2;
      }
      let D3 = F3(t3), Q3 = D3(t3), R3 = t3[0].nav, U3 = [];
      for (let e3 = 0; e3 < R3.length; e3 += 1)
        U3[e3] = X2(q2(t3, R3, e3));
      return S2 = new Y2({}), {c() {
        e2 = $("header"), s2 = $("div"), l2 = $("a"), n2 = $("picture"), u2 = $("source"), h2 = _(), p3 = $("source"), x2 = _(), z2 = $("img"), B2 = _(), H2 = $("button"), Q3.c(), L2 = _(), O2 = $("nav"), N2 = $("ul"), A2 = $("li"), A2.innerHTML = '<a class="nav-link block" href="/" rel="home">Etusivu</a>', E2 = _();
        for (let t4 = 0; t4 < U3.length; t4 += 1)
          U3[t4].c();
        J2 = _(), rt(S2.$$.fragment), k(u2, "srcset", m2 = t3[0].site.logo[1]), k(u2, "type", "image/webp"), k(p3, "srcset", T2 = t3[0].site.logo[0]), k(p3, "type", "image/jpeg"), z2.src !== (M2 = t3[0].site.logo[0]) && k(z2, "src", M2), k(z2, "alt", j2 = t3[0].site.title), k(n2, "class", "block"), k(l2, "id", "logo"), k(l2, "class", "block bgw"), k(l2, "href", "/"), k(l2, "rel", "home"), k(H2, "id", "menuToggle"), k(H2, "class", "noBor m0"), k(H2, "title", "Open/close main navigation"), k(A2, "class", "nav-item"), k(N2, "class", "m0"), k(O2, "id", "menu"), L(O2, "active", t3[3]), k(s2, "class", "content mx"), k(e2, "class", "block w100 bgw"), L(e2, "small", t3[2]);
      }, m(a2, i3) {
        m(a2, e2, i3), h(e2, s2), h(s2, l2), h(l2, n2), h(n2, u2), h(n2, h2), h(n2, p3), h(n2, x2), h(n2, z2), h(s2, B2), h(s2, H2), Q3.m(H2, null), h(s2, L2), h(s2, O2), h(O2, N2), h(N2, A2), h(N2, E2);
        for (let t4 = 0; t4 < U3.length; t4 += 1)
          U3[t4].m(N2, null);
        h(s2, J2), st(S2, s2, null), C2 = true, I3 || (K3 = v(H2, "click", t3[5]), I3 = true);
      }, p(t4, s3) {
        if ((!C2 || 1 & s3 && m2 !== (m2 = t4[0].site.logo[1])) && k(u2, "srcset", m2), (!C2 || 1 & s3 && T2 !== (T2 = t4[0].site.logo[0])) && k(p3, "srcset", T2), (!C2 || 1 & s3 && z2.src !== (M2 = t4[0].site.logo[0])) && k(z2, "src", M2), (!C2 || 1 & s3 && j2 !== (j2 = t4[0].site.title)) && k(z2, "alt", j2), D3 !== (D3 = F3(t4)) && (Q3.d(1), Q3 = D3(t4), Q3 && (Q3.c(), Q3.m(H2, null))), 1 & s3) {
          let e3;
          for (R3 = t4[0].nav, e3 = 0; e3 < R3.length; e3 += 1) {
            const a2 = q2(t4, R3, e3);
            U3[e3] ? U3[e3].p(a2, s3) : (U3[e3] = X2(a2), U3[e3].c(), U3[e3].m(N2, null));
          }
          for (; e3 < U3.length; e3 += 1)
            U3[e3].d(1);
          U3.length = R3.length;
        }
        8 & s3 && L(O2, "active", t4[3]), 4 & s3 && L(e2, "small", t4[2]);
      }, i(t4) {
        C2 || (Y(S2.$$.fragment, t4), C2 = true);
      }, o(t4) {
        tt(S2.$$.fragment, t4), C2 = false;
      }, d(t4) {
        t4 && g(e2), Q3.d(), y(U3, t4), it(S2), I3 = false, K3();
      }};
    }
    function G2(t3) {
      let e2, s2;
      return {c() {
        e2 = b("svg"), s2 = b("path"), k(s2, "d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"), k(e2, "xmlns", "http://www.w3.org/2000/svg"), k(e2, "width", "24"), k(e2, "height", "24"), k(e2, "viewBox", "0 0 24 24");
      }, m(t4, a2) {
        m(t4, e2, a2), h(e2, s2);
      }, d(t4) {
        t4 && g(e2);
      }};
    }
    function P2(t3) {
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
    function D2(t3) {
      let e2, s2, a2, l2, n2, i3 = false, c2 = () => {
        i3 = false;
      };
      K(t3[4]);
      let r2 = t3[0] && t3[0].nav && F2(t3);
      return {c() {
        r2 && r2.c(), s2 = x();
      }, m(u2, m2) {
        r2 && r2.m(u2, m2), m(u2, s2, m2), a2 = true, l2 || (n2 = v(window, "scroll", () => {
          i3 = true, clearTimeout(e2), e2 = setTimeout(c2, 100), t3[4]();
        }), l2 = true);
      }, p(t4, [a3]) {
        2 & a3 && !i3 && (i3 = true, clearTimeout(e2), scrollTo(window.pageXOffset, t4[1]), e2 = setTimeout(c2, 100)), t4[0] && t4[0].nav ? r2 ? (r2.p(t4, a3), 1 & a3 && Y(r2, 1)) : (r2 = F2(t4), r2.c(), Y(r2, 1), r2.m(s2.parentNode, s2)) : r2 && (Z(), tt(r2, 1, 1, () => {
          r2 = null;
        }), X());
      }, i(t4) {
        a2 || (Y(r2), a2 = true);
      }, o(t4) {
        tt(r2), a2 = false;
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
    var R2 = class extends ct {
      constructor(t3) {
        super(), at(this, t3, Q2, D2, i2, {data: 0});
      }
    };
    function U2(t3) {
      let e2, s2, l2, n2, u2, m2, h2, p3, f2, $2, y2;
      function x2(t4, e3) {
        return t4[0].cat ? W2 : V2;
      }
      e2 = new R2({props: {data: t3[1]}});
      let z2 = x2(t3), j2 = z2(t3);
      const H2 = t3[7].default, L2 = u(H2, t3, t3[6], null);
      let O2 = t3[3].amount > 0 && t3[4].path != "/kassa" && Z2(t3);
      return {c() {
        rt(e2.$$.fragment), s2 = _(), l2 = $("main"), n2 = $("div"), j2.c(), u2 = _(), m2 = $("div"), h2 = $("div"), L2 && L2.c(), f2 = _(), O2 && O2.c(), $2 = x(), k(n2, "id", "hero"), k(n2, "class", "grid tw up tc"), k(h2, "class", "container mx"), k(m2, "id", "content"), k(m2, "class", "bgw py"), k(l2, "class", "block"), k(l2, "style", p3 = "background-image:url(" + t3[1].site.hero[0] + ")");
      }, m(t4, a2) {
        st(e2, t4, a2), m(t4, s2, a2), m(t4, l2, a2), h(l2, n2), j2.m(n2, null), h(l2, u2), h(l2, m2), h(m2, h2), L2 && L2.m(h2, null), m(t4, f2, a2), O2 && O2.m(t4, a2), m(t4, $2, a2), y2 = true;
      }, p(t4, s3) {
        const a2 = {};
        2 & s3 && (a2.data = t4[1]), e2.$set(a2), z2 === (z2 = x2(t4)) && j2 ? j2.p(t4, s3) : (j2.d(1), j2 = z2(t4), j2 && (j2.c(), j2.m(n2, null))), L2 && L2.p && 64 & s3 && f(L2, H2, t4, t4[6], s3, null, null), (!y2 || 2 & s3 && p3 !== (p3 = "background-image:url(" + t4[1].site.hero[0] + ")")) && k(l2, "style", p3), t4[3].amount > 0 && t4[4].path != "/kassa" ? O2 ? O2.p(t4, s3) : (O2 = Z2(t4), O2.c(), O2.m($2.parentNode, $2)) : O2 && (O2.d(1), O2 = null);
      }, i(t4) {
        y2 || (Y(e2.$$.fragment, t4), Y(L2, t4), y2 = true);
      }, o(t4) {
        tt(e2.$$.fragment, t4), tt(L2, t4), y2 = false;
      }, d(t4) {
        it(e2, t4), t4 && g(s2), t4 && g(l2), j2.d(), L2 && L2.d(t4), t4 && g(f2), O2 && O2.d(t4), t4 && g($2);
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
        t4[1] && t4[1].site ? a2 ? (a2.p(t4, s3), 2 & s3 && Y(a2, 1)) : (a2 = U2(t4), a2.c(), Y(a2, 1), a2.m(e2.parentNode, e2)) : a2 && (Z(), tt(a2, 1, 1, () => {
          a2 = null;
        }), X());
      }, i(t4) {
        s2 || (Y(a2), s2 = true);
      }, o(t4) {
        tt(a2), s2 = false;
      }, d(t4) {
        a2 && a2.d(t4), t4 && g(e2);
      }};
    }
    function tt2(t3, e2, s2) {
      let a2, l2, n2, i3, c2, o4;
      l(t3, Wt, (t4) => s2(0, a2 = t4)), l(t3, o, (t4) => s2(1, l2 = t4)), l(t3, i, (t4) => s2(2, n2 = t4)), l(t3, p, (t4) => s2(3, i3 = t4)), l(t3, t, (t4) => s2(5, c2 = t4)), l(t3, Dt, (t4) => s2(4, o4 = t4));
      let {$$slots: r2 = {}, $$scope: u2} = e2;
      return T(async () => {
        o2().then((t4) => {
          o.set(t4);
        });
      }), t3.$$set = (t4) => {
        "$$scope" in t4 && s2(6, u2 = t4.$$scope);
      }, t3.$$.update = () => {
        if (15 & t3.$$.dirty && a2 && ((l2.site || n2.title) && (Vt.title = a2.cat ? n2.title + " | " + l2.site.title : l2.site.title + " | " + l2.site.slogan, (i.summary || l2.site.summary) && (Vt.summary = n2.summary ? n2.summary : l2.site.summary)), i3.amount == 0 && n2.cart && d(p, i3 = n2.cart, i3)), 40 & t3.$$.dirty && i3.products) {
          let t4 = [0, 0];
          d(p, i3.products = i3.products.filter((t5, e3) => t5.amount > 0 && t5 != null).sort(), i3), Object.values(i3.products).forEach((e3) => {
            e3.discounts && (e3.price2 = e3.price, e3.discounts.forEach(function(t5) {
              t5.amount <= e3.amount && (e3.price2 = t5.price);
            })), t4[0] += e3.total = e3.price2 * e3.amount, t4[1] += e3.amount;
          }), t4[1] == 0 || t4[1] == null ? d(p, i3.products = [], i3) : (d(p, i3.total = t4[0], i3), d(p, i3.amount = t4[1], i3)), fetch(c2 + "?path=cart", {method: "POST", body: JSON.stringify(i3)});
        }
      }, [a2, l2, n2, i3, o4, c2, u2, r2];
    }
    var layout_1a0b2f71_default = class extends ct {
      constructor(t3) {
        super(), at(this, t3, tt2, _2, i2, {});
      }
    };
    var layout_1a0b2f71_default2 = layout_1a0b2f71_default;
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
  function L(t3, e2, n2) {
    t3.classList[n2 ? "add" : "remove"](e2);
  }
  var I;
  function S(t3) {
    I = t3;
  }
  function N() {
    if (!I)
      throw new Error("Function called outside component initialization");
    return I;
  }
  function T(t3) {
    N().$$.on_mount.push(t3);
  }
  function F(t3, e2) {
    N().$$.context.set(t3, e2);
  }
  function A(t3) {
    return N().$$.context.get(t3);
  }
  var R = [];
  var M = [];
  var C = [];
  var q = [];
  var B = Promise.resolve();
  var U = false;
  function D() {
    U || (U = true, B.then(W));
  }
  function H() {
    return D(), B;
  }
  function K(t3) {
    C.push(t3);
  }
  var J = false;
  var z = new Set();
  function W() {
    if (!J) {
      J = true;
      do {
        for (let t3 = 0; t3 < R.length; t3 += 1) {
          const e2 = R[t3];
          S(e2), G(e2.$$);
        }
        for (S(null), R.length = 0; M.length; )
          M.pop()();
        for (let t3 = 0; t3 < C.length; t3 += 1) {
          const e2 = C[t3];
          z.has(e2) || (z.add(e2), e2());
        }
        C.length = 0;
      } while (R.length);
      for (; q.length; )
        q.pop()();
      U = false, J = false, z.clear();
    }
  }
  function G(t3) {
    if (t3.fragment !== null) {
      t3.update(), r(t3.before_update);
      const e2 = t3.dirty;
      t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(K);
    }
  }
  var Q = new Set();
  var V;
  function Z() {
    V = {r: 0, c: [], p: V};
  }
  function X() {
    V.r || r(V.c), V = V.p;
  }
  function Y(t3, e2) {
    t3 && t3.i && (Q.delete(t3), t3.i(e2));
  }
  function tt(t3, e2, n2, o4) {
    if (t3 && t3.o) {
      if (Q.has(t3))
        return;
      Q.add(t3), V.c.push(() => {
        Q.delete(t3), o4 && (n2 && t3.d(1), o4());
      }), t3.o(e2);
    }
  }
  function et(t3, e2) {
    t3.d(1), e2.delete(t3.key);
  }
  function nt(t3, e2) {
    tt(t3, 1, 1, () => {
      e2.delete(t3.key);
    });
  }
  function ot(t3, e2, n2, o4, r2, s2, i3, a2, c2, l2, u2, p3) {
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
      Y(t4, 1), t4.m(a2, u2), i3.set(t4.key, t4), u2 = t4.first, d2--;
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
  function rt(t3) {
    t3 && t3.c();
  }
  function st(t3, e2, o4, i3) {
    const {fragment: a2, on_mount: c2, on_destroy: l2, after_update: u2} = t3.$$;
    a2 && a2.m(e2, o4), i3 || K(() => {
      const e3 = c2.map(n).filter(s);
      l2 ? l2.push(...e3) : r(e3), t3.$$.on_mount = [];
    }), u2.forEach(K);
  }
  function it(t3, e2) {
    const n2 = t3.$$;
    n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
  }
  function at(e2, n2, s2, i3, a2, c2, l2 = [-1]) {
    const u2 = I;
    S(e2);
    const p3 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a2, bound: o3(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o3(), dirty: l2, skip_bound: false};
    let f2 = false;
    if (p3.ctx = s2 ? s2(e2, n2.props || {}, (t3, n3, ...o4) => {
      const r2 = o4.length ? o4[0] : n3;
      return p3.ctx && a2(p3.ctx[t3], p3.ctx[t3] = r2) && (!p3.skip_bound && p3.bound[t3] && p3.bound[t3](r2), f2 && function(t4, e3) {
        t4.$$.dirty[0] === -1 && (R.push(t4), D(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
      }(e2, t3)), n3;
    }) : [], p3.update(), f2 = true, r(p3.before_update), p3.fragment = !!i3 && i3(p3.ctx), n2.target) {
      if (n2.hydrate) {
        const t3 = function(t4) {
          return Array.from(t4.childNodes);
        }(n2.target);
        p3.fragment && p3.fragment.l(t3), t3.forEach(g);
      } else
        p3.fragment && p3.fragment.c();
      n2.intro && Y(e2.$$.fragment), st(e2, n2.target, n2.anchor, n2.customElement), W();
    }
    S(u2);
  }
  var ct = class {
    $destroy() {
      it(this, 1), this.$destroy = t2;
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
  var lt = {queryHandler: {parse: (t3) => {
    return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n2]) => (t4[e3] = n2, t4), {});
    var e2;
  }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
  var ut = RegExp(/\:([^/()]+)/g);
  function pt(t3, e2) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    e2 && ft(t3), function() {
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
  function ft(t3) {
    t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", ft(t3.parentElement));
  }
  var dt = (t3) => {
    const e2 = [];
    let n2;
    for (; n2 = ut.exec(t3); )
      e2.push(n2[1]);
    return e2;
  };
  function ht(t3, e2) {
    ht._console = ht._console || {log: console.log, warn: console.warn};
    const {_console: n2} = ht, o4 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o4}> received an unexpected slot "default".`, `<${o4}> was created with unknown prop 'scoped'`, `<${o4}> was created with unknown prop 'scopedSync'`];
    for (const t4 of ["log", "warn"])
      console[t4] = (...e3) => {
        r2.includes(e3[0]) || n2[t4](...e3);
      }, e2().then(() => {
        console[t4] = n2[t4];
      });
  }
  function mt() {
    let t3 = window.location.pathname + window.location.search + window.location.hash;
    const {url: e2, options: n2} = function(t4) {
      const [e3, n3] = t4.split("__[[routify_url_options]]__"), o4 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
      return window.routify = window.routify || {}, window.routify.prefetched = o4.prefetch, {url: e3, options: o4};
    }(t3);
    return {...gt(e2), options: n2};
  }
  function gt(t3) {
    lt.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
    const e2 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e2);
    return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
  }
  function yt(t3, e2, n2) {
    const o4 = lt.useHash ? "#" : "";
    let r2;
    return r2 = function(t4, e3, n3) {
      const o5 = Object.assign({}, n3, e3), r3 = function(t5, e4) {
        if (!lt.queryHandler)
          return "";
        const n4 = dt(t5), o6 = {};
        e4 && Object.entries(e4).forEach(([t6, e5]) => {
          n4.includes(t6) || (o6[t6] = e5);
        });
        return lt.queryHandler.stringify(o6).replace(/\?$/, "");
      }(t4, e3);
      for (const [e4, n4] of Object.entries(o5))
        t4 = t4.replace(`:${e4}`, n4);
      return `${t4}${r3}`;
    }(t3, e2, n2), r2 = lt.urlTransform.apply(r2), r2 = o4 + r2, r2;
  }
  function $t(t3) {
    let e2;
    const n2 = t3[2].default, o4 = u(n2, t3, t3[1], null);
    return {c() {
      o4 && o4.c();
    }, m(t4, n3) {
      o4 && o4.m(t4, n3), e2 = true;
    }, p(t4, [e3]) {
      o4 && o4.p && 2 & e3 && f(o4, n2, t4, t4[1], e3, null, null);
    }, i(t4) {
      e2 || (Y(o4, t4), e2 = true);
    }, o(t4) {
      tt(o4, t4), e2 = false;
    }, d(t4) {
      o4 && o4.d(t4);
    }};
  }
  function bt(t3, e2, n2) {
    let {$$slots: o4 = {}, $$scope: r2} = e2, {scoped: s2 = {}} = e2;
    return t3.$$set = (t4) => {
      "scoped" in t4 && n2(0, s2 = t4.scoped), "$$scope" in t4 && n2(1, r2 = t4.$$scope);
    }, [s2, r2, o4];
  }
  var wt = class extends ct {
    constructor(t3) {
      super(), at(this, t3, bt, $t, i2, {scoped: 0});
    }
  };
  var _t = [];
  function xt(t3, e2) {
    return {subscribe: vt(t3, e2).subscribe};
  }
  function vt(e2, n2 = t2) {
    let o4;
    const r2 = [];
    function s2(t3) {
      if (i2(e2, t3) && (e2 = t3, o4)) {
        const t4 = !_t.length;
        for (let t5 = 0; t5 < r2.length; t5 += 1) {
          const n3 = r2[t5];
          n3[1](), _t.push(n3, e2);
        }
        if (t4) {
          for (let t5 = 0; t5 < _t.length; t5 += 2)
            _t[t5][0](_t[t5 + 1]);
          _t.length = 0;
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
  function Pt(e2, n2, o4) {
    const i3 = !Array.isArray(e2), c2 = i3 ? [e2] : e2, l2 = n2.length < 2;
    return xt(o4, (e3) => {
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
  var kt = vt(null);
  var jt = vt([]);
  jt.subscribe((t3) => window.routify.routes = t3);
  var Et = vt({component: {params: {}}});
  var Ot = vt(null);
  var Lt = vt(true);
  async function It({page: t3, metatags: e2, afterPageLoad: n2, parentNode: o4}) {
    const r2 = t3.last !== t3;
    setTimeout(() => pt(o4, r2));
    const {path: s2} = t3, {options: i3} = mt(), a2 = i3.prefetch;
    for (const e3 of n2._hooks)
      e3 && await e3(t3.api);
    e2.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: s2, prefetchId: a2}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
  }
  function St(t3, e2 = false) {
    t3 = lt.urlTransform.remove(t3);
    let {pathname: n2, search: o4} = gt(t3).url;
    const r2 = c(jt), s2 = r2.find((t4) => n2 === t4.meta.name) || r2.find((t4) => n2.match(t4.regex));
    if (!s2)
      throw new Error(`Route could not be found for "${n2}".`);
    const i3 = e2 ? Object.create(s2) : s2, {route: a2, redirectPath: l2, rewritePath: u2} = Nt(i3, r2);
    return u2 && ({pathname: n2, search: o4} = gt(yt(u2, a2.params)).url, l2 && (a2.redirectTo = yt(l2, a2.params || {}))), lt.queryHandler && (a2.params = Object.assign({}, lt.queryHandler.parse(o4))), function(t4, e3) {
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
  function Nt(t3, e2, n2, o4) {
    const {redirect: r2, rewrite: s2} = t3.meta;
    if (r2 || s2) {
      n2 = r2 ? r2.path || r2 : n2, o4 = s2 ? s2.path || s2 : n2;
      const i3 = r2 && r2.params, a2 = s2 && s2.params, c2 = e2.find((t4) => t4.path === o4);
      return c2 === t3 && console.error(`${o4} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o4}`), (i3 || a2) && (c2.params = Object.assign({}, c2.params, i3, a2)), Nt(c2, e2, n2, o4);
    }
    return {route: t3, redirectPath: n2, rewritePath: o4};
  }
  function Tt(t3, e2, n2) {
    const o4 = t3.slice();
    return o4[1] = e2[n2], o4;
  }
  function Ft(t3, e2) {
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
  function At(e2) {
    let n2, o4 = [], r2 = new Map(), s2 = e2[0];
    const i3 = (t3) => t3[1].options.prefetch;
    for (let t3 = 0; t3 < s2.length; t3 += 1) {
      let n3 = Tt(e2, s2, t3), a2 = i3(n3);
      r2.set(a2, o4[t3] = Ft(a2, n3));
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
      1 & e3 && (s2 = t3[0], o4 = ot(o4, e3, i3, 1, t3, s2, r2, n2, et, Ft, null, Tt));
    }, i: t2, o: t2, d(t3) {
      t3 && g(n2);
      for (let t4 = 0; t4 < o4.length; t4 += 1)
        o4[t4].d();
    }};
  }
  var Rt = vt([]);
  var Mt = Pt(Rt, (t3) => t3.slice(0, 2));
  function Ct(t3) {
    const e2 = t3.data ? t3.data.prefetchId : t3;
    if (!e2)
      return null;
    const n2 = c(Rt).find((t4) => t4 && t4.options.prefetch == e2);
    if (n2) {
      const {gracePeriod: t4} = n2.options, o4 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
        window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
      });
      Promise.all([o4, r2]).then(() => {
        Rt.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
      });
    }
  }
  function qt(t3, e2, n2) {
    let o4;
    return l(t3, Mt, (t4) => n2(0, o4 = t4)), [o4];
  }
  Mt.subscribe((t3) => t3.forEach(({options: t4}) => {
    setTimeout(() => Ct(t4.prefetch), t4.timeout);
  })), addEventListener("message", Ct, false);
  var Bt = class extends ct {
    constructor(t3) {
      super(), at(this, t3, qt, At, i2, {});
    }
  };
  function Ut() {
    return A("routify") || Et;
  }
  var Dt = {subscribe: (t3) => Pt(kt, (t4) => t4.api).subscribe(t3)};
  var Ht = {subscribe: (t3) => (window.routify.stopAutoReady = true, t3(async function() {
    await H(), await It({page: c(kt), metatags: Vt, afterPageLoad: Kt});
  }), () => {
  })};
  var Kt = {_hooks: [(t3) => Lt.set(false)], subscribe: zt};
  var Jt = {_hooks: [], subscribe: zt};
  function zt(t3) {
    const e2 = this._hooks, n2 = e2.length;
    return t3((t4) => {
      e2[n2] = t4;
    }), () => delete e2[n2];
  }
  var Wt = {subscribe: (t3) => Pt(Ut(), (t4) => t4.route.params).subscribe(t3)};
  var Gt = {subscribe(t3) {
    const e2 = Ut(), {route: n2, routes: o4} = c(e2);
    return Pt(e2, (t4) => {
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
        let u2 = yt(t5, n3, a2);
        return c2 ? (c2.href = u2, {update(e4) {
          c2.href = yt(t5, e4, a2);
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
  var Qt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, (Qt.getLongest(Qt.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
    Qt.writeMeta(t3, e2);
  }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
    Qt.writeMeta(`og:${t3}`, e2);
  }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
    document.title = e2;
  }}], getLongest(t3, e2) {
    const n2 = t3[e2];
    if (n2) {
      const o4 = c(kt).path;
      return n2[Object.keys(t3[e2]).filter((t4) => o4.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
    }
  }, writeMeta(t3, e2) {
    const n2 = document.getElementsByTagName("head")[0], o4 = t3.match(/(.+)\:/), r2 = o4 && o4[1] || "plain", {propField: s2, valueField: i3} = Vt.services[r2] || Vt.services.plain, a2 = document.querySelector(`meta[${s2}='${t3}']`);
    a2 && a2.remove();
    const c2 = document.createElement("meta");
    c2.setAttribute(s2, t3), c2.setAttribute(i3, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
  }, set(t3, e2) {
    Qt.plugins.forEach((n2) => {
      n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
    });
  }, clear() {
    const t3 = document.querySelector("meta");
    t3 && t3.remove();
  }, template(t3, e2) {
    const n2 = Qt.getOrigin();
    Qt.templates[t3] = Qt.templates[t3] || {}, Qt.templates[t3][n2] = e2;
  }, update() {
    Object.keys(Qt.props).forEach((t3) => {
      let e2 = Qt.getLongest(Qt.props, t3);
      Qt.plugins.forEach((n2) => {
        n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
      });
    });
  }, batchedUpdate() {
    Qt._pendingUpdate || (Qt._pendingUpdate = true, setTimeout(() => {
      Qt._pendingUpdate = false, this.update();
    }));
  }, _updateQueued: false, getOrigin() {
    const t3 = Ut();
    return t3 && c(t3).path || "/";
  }, _pendingUpdate: false};
  var Vt = new Proxy(Qt, {set(t3, e2, n2, o4) {
    const {props: r2, getOrigin: s2} = t3;
    return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n2, o4) : (r2[e2] = r2[e2] || {}, r2[e2][s2()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
  }});
  function Zt(t3, e2, n2) {
    const o4 = t3.slice();
    return o4[21] = e2[n2].component, o4[22] = e2[n2].componentFile, o4[2] = e2[n2].decorator, o4[1] = e2[n2].nodes, o4;
  }
  function Xt(t3) {
    let e2, n2, o4 = [], r2 = new Map(), s2 = [t3[4]];
    const i3 = (t4) => t4[6];
    for (let e3 = 0; e3 < 1; e3 += 1) {
      let n3 = Zt(t3, s2, e3), a2 = i3(n3);
      r2.set(a2, o4[e3] = ne(a2, n3));
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
      33554557 & n3 && (s2 = [t4[4]], Z(), o4 = ot(o4, n3, i3, 1, t4, s2, r2, e2.parentNode, nt, ne, e2, Zt), X());
    }, i(t4) {
      if (!n2) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          Y(o4[t5]);
        n2 = true;
      }
    }, o(t4) {
      for (let t5 = 0; t5 < 1; t5 += 1)
        tt(o4[t5]);
      n2 = false;
    }, d(t4) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o4[e3].d(t4);
      t4 && g(e2);
    }};
  }
  function Yt(t3) {
    let e2, n2;
    return e2 = new se({props: {decorator: t3[2], nodes: t3[1], scoped: {...t3[0], ...t3[25]}}}), {c() {
      rt(e2.$$.fragment);
    }, m(t4, o4) {
      st(e2, t4, o4), n2 = true;
    }, p(t4, n3) {
      const o4 = {};
      4 & n3 && (o4.decorator = t4[2]), 16 & n3 && (o4.nodes = t4[1]), 33554433 & n3 && (o4.scoped = {...t4[0], ...t4[25]}), e2.$set(o4);
    }, i(t4) {
      n2 || (Y(e2.$$.fragment, t4), n2 = true);
    }, o(t4) {
      tt(e2.$$.fragment, t4), n2 = false;
    }, d(t4) {
      it(e2, t4);
    }};
  }
  function te(t3) {
    let e2, n2, o4 = t3[21] && t3[1].length && Yt(t3);
    return {c() {
      o4 && o4.c(), e2 = x();
    }, m(t4, r2) {
      o4 && o4.m(t4, r2), m(t4, e2, r2), n2 = true;
    }, p(t4, n3) {
      t4[21] && t4[1].length ? o4 ? (o4.p(t4, n3), 16 & n3 && Y(o4, 1)) : (o4 = Yt(t4), o4.c(), Y(o4, 1), o4.m(e2.parentNode, e2)) : o4 && (Z(), tt(o4, 1, 1, () => {
        o4 = null;
      }), X());
    }, i(t4) {
      n2 || (Y(o4), n2 = true);
    }, o(t4) {
      tt(o4), n2 = false;
    }, d(t4) {
      o4 && o4.d(t4), t4 && g(e2);
    }};
  }
  function ee(t3) {
    let n2, o4, r2;
    const s2 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
    var i3 = t3[22];
    function a2(t4) {
      let n3 = {$$slots: {default: [te, ({scoped: t5, decorator: e2}) => ({25: t5, 2: e2}), ({scoped: t5, decorator: e2}) => (t5 ? 33554432 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t4}};
      for (let t5 = 0; t5 < s2.length; t5 += 1)
        n3 = e(n3, s2[t5]);
      return {props: n3};
    }
    return i3 && (n2 = new i3(a2(t3))), {c() {
      n2 && rt(n2.$$.fragment), o4 = _();
    }, m(t4, e2) {
      n2 && st(n2, t4, e2), m(t4, o4, e2), r2 = true;
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
          Z();
          const t5 = n2;
          tt(t5.$$.fragment, 1, 0, () => {
            it(t5, 1);
          }), X();
        }
        i3 ? (n2 = new i3(a2(t4)), rt(n2.$$.fragment), Y(n2.$$.fragment, 1), st(n2, o4.parentNode, o4)) : n2 = null;
      } else
        i3 && n2.$set(r3);
    }, i(t4) {
      r2 || (n2 && Y(n2.$$.fragment, t4), r2 = true);
    }, o(t4) {
      n2 && tt(n2.$$.fragment, t4), r2 = false;
    }, d(t4) {
      n2 && it(n2, t4), t4 && g(o4);
    }};
  }
  function ne(t3, e2) {
    let n2, o4, r2, s2;
    var i3 = e2[2];
    function a2(t4) {
      return {props: {scoped: t4[0], $$slots: {default: [ee]}, $$scope: {ctx: t4}}};
    }
    return i3 && (o4 = new i3(a2(e2))), {key: t3, first: null, c() {
      n2 = x(), o4 && rt(o4.$$.fragment), r2 = x(), this.first = n2;
    }, m(t4, e3) {
      m(t4, n2, e3), o4 && st(o4, t4, e3), m(t4, r2, e3), s2 = true;
    }, p(t4, n3) {
      e2 = t4;
      const s3 = {};
      if (1 & n3 && (s3.scoped = e2[0]), 67108925 & n3 && (s3.$$scope = {dirty: n3, ctx: e2}), i3 !== (i3 = e2[2])) {
        if (o4) {
          Z();
          const t5 = o4;
          tt(t5.$$.fragment, 1, 0, () => {
            it(t5, 1);
          }), X();
        }
        i3 ? (o4 = new i3(a2(e2)), rt(o4.$$.fragment), Y(o4.$$.fragment, 1), st(o4, r2.parentNode, r2)) : o4 = null;
      } else
        i3 && o4.$set(s3);
    }, i(t4) {
      s2 || (o4 && Y(o4.$$.fragment, t4), s2 = true);
    }, o(t4) {
      o4 && tt(o4.$$.fragment, t4), s2 = false;
    }, d(t4) {
      t4 && g(n2), t4 && g(r2), o4 && it(o4, t4);
    }};
  }
  function oe(e2) {
    let n2, o4, r2, i3, a2, c2 = e2[4] && Xt(e2);
    return {c() {
      c2 && c2.c(), n2 = _(), o4 = $("span");
    }, m(l2, u2) {
      var p3;
      c2 && c2.m(l2, u2), m(l2, n2, u2), m(l2, o4, u2), r2 = true, i3 || (p3 = e2[9].call(null, o4), a2 = p3 && s(p3.destroy) ? p3.destroy : t2, i3 = true);
    }, p(t3, [e3]) {
      t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && Y(c2, 1)) : (c2 = Xt(t3), c2.c(), Y(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (Z(), tt(c2, 1, 1, () => {
        c2 = null;
      }), X());
    }, i(t3) {
      r2 || (Y(c2), r2 = true);
    }, o(t3) {
      tt(c2), r2 = false;
    }, d(t3) {
      c2 && c2.d(t3), t3 && g(n2), t3 && g(o4), i3 = false, a2();
    }};
  }
  function re(t3, e2, n2) {
    let o4, r2, s2, i3, a2;
    l(t3, kt, (t4) => n2(15, i3 = t4)), l(t3, jt, (t4) => n2(16, a2 = t4));
    let c2, {nodes: u2 = []} = e2, {scoped: p3 = {}} = e2, {decorator: f2} = e2, h2 = null, m2 = null, g2 = {}, y2 = 1;
    const $2 = vt(null);
    l(t3, $2, (t4) => n2(4, r2 = t4));
    const b2 = A("routify") || Et;
    l(t3, b2, (t4) => n2(14, s2 = t4));
    F("routify", $2);
    let w2 = [];
    function _2(t4) {
      n2(5, g2 = {...p3});
      const e3 = {...r2, nodes: m2, decorator: f2 || wt, layout: h2.isLayout ? h2 : s2.layout, component: h2, route: i3, routes: a2, componentFile: t4, parentNode: c2 || s2.parentNode};
      $2.set(e3), d(b2, s2.child = h2, s2), m2.length === 0 && async function() {
        await new Promise((t6) => setTimeout(t6));
        const t5 = r2.component.path === i3.path;
        !window.routify.stopAutoReady && t5 && It({page: r2.component, metatags: Vt, afterPageLoad: Kt, parentNode: c2});
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
      }(r2.component)), 16 & t3.$$.dirty && r2 && ht(r2, H);
    }, [p3, u2, f2, h2, r2, g2, o4, $2, b2, (t4) => c2 = t4.parentNode, y2, w2];
  }
  var se = class extends ct {
    constructor(t3) {
      super(), at(this, t3, re, oe, i2, {nodes: 1, scoped: 0, decorator: 2});
    }
  };
  function ie(t3, e2) {
    let n2 = false;
    function o4(o5, r3) {
      const s2 = St(o5 || mt().fullpath);
      s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
      const i3 = [...(r3 && St(mt().fullpath, t3) || s2).layouts, s2];
      n2 && delete n2.last, s2.last = n2, n2 = s2, o5 || Ot.set(s2), kt.set(s2), s2.api.preload().then(() => {
        Lt.set(true), e2(i3);
      });
    }
    const r2 = function(t4) {
      ["pushState", "replaceState"].forEach((t5) => {
        history[t5 + "Native"] || (history[t5 + "Native"] = history[t5]), history[t5] = async function(e4 = {}, n4, o5) {
          if (o5 === location.pathname + location.search + location.hash)
            return false;
          const {id: r3, path: s2, params: i3} = c(kt);
          e4 = {id: r3, path: s2, params: i3, ...e4};
          const a2 = new Event(t5.toLowerCase());
          Object.assign(a2, {state: e4, title: n4, url: o5});
          return await ce(a2, o5) ? (history[t5 + "Native"].apply(this, [e4, n4, o5]), dispatchEvent(a2)) : void 0;
        };
      });
      let e3 = false;
      const n3 = {click: ae, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
        e3 ? e3 = false : await ce(n4, mt().fullpath) ? t4() : (e3 = true, n4.preventDefault(), history.go(1));
      }};
      Object.entries(n3).forEach((t5) => addEventListener(...t5));
      return () => {
        Object.entries(n3).forEach((t5) => removeEventListener(...t5));
      };
    }(o4);
    return {updatePage: o4, destroy: r2};
  }
  function ae(t3) {
    const e2 = t3.target.closest("a"), n2 = e2 && e2.href;
    if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
      return;
    if (!n2 || e2.target || e2.host !== location.host)
      return;
    const o4 = new URL(n2), r2 = o4.pathname + o4.search + o4.hash;
    t3.preventDefault(), history.pushState({}, "", r2);
  }
  async function ce(t3, e2) {
    const n2 = St(e2).api;
    for (const o4 of Jt._hooks.filter(Boolean)) {
      if (!await o4(t3, n2, {url: e2}))
        return false;
    }
    return true;
  }
  function le(t3) {
    let e2, n2;
    return e2 = new se({props: {nodes: t3[0]}}), {c() {
      rt(e2.$$.fragment);
    }, m(t4, o4) {
      st(e2, t4, o4), n2 = true;
    }, p(t4, n3) {
      const o4 = {};
      1 & n3 && (o4.nodes = t4[0]), e2.$set(o4);
    }, i(t4) {
      n2 || (Y(e2.$$.fragment, t4), n2 = true);
    }, o(t4) {
      tt(e2.$$.fragment, t4), n2 = false;
    }, d(t4) {
      it(e2, t4);
    }};
  }
  function ue(t3) {
    let e2, n2, o4, r2 = t3[0] && t3[1] !== null && le(t3);
    return n2 = new Bt({}), {c() {
      r2 && r2.c(), e2 = _(), rt(n2.$$.fragment);
    }, m(t4, s2) {
      r2 && r2.m(t4, s2), m(t4, e2, s2), st(n2, t4, s2), o4 = true;
    }, p(t4, [n3]) {
      t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n3), 3 & n3 && Y(r2, 1)) : (r2 = le(t4), r2.c(), Y(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (Z(), tt(r2, 1, 1, () => {
        r2 = null;
      }), X());
    }, i(t4) {
      o4 || (Y(r2), Y(n2.$$.fragment, t4), o4 = true);
    }, o(t4) {
      tt(r2), tt(n2.$$.fragment, t4), o4 = false;
    }, d(t4) {
      r2 && r2.d(t4), t4 && g(e2), it(n2, t4);
    }};
  }
  function pe(t3, e2, n2) {
    let o4;
    l(t3, kt, (t4) => n2(1, o4 = t4));
    let r2, s2, {routes: i3} = e2, {config: a2 = {}} = e2;
    window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(lt, a2);
    F("routifyupdatepage", (...t4) => s2 && s2.updatePage(...t4));
    const c2 = (t4) => n2(0, r2 = t4), u2 = () => {
      s2 && (s2.destroy(), s2 = null);
    };
    let p3 = null;
    var f2;
    return f2 = u2, N().$$.on_destroy.push(f2), t3.$$set = (t4) => {
      "routes" in t4 && n2(2, i3 = t4.routes), "config" in t4 && n2(3, a2 = t4.config);
    }, t3.$$.update = () => {
      4 & t3.$$.dirty && i3 && (clearTimeout(p3), p3 = setTimeout(() => {
        u2(), s2 = ie(i3, c2), jt.set(i3), s2.updatePage();
      }));
    }, [r2, o4, i3, a2];
  }
  var fe = class extends ct {
    constructor(t3) {
      super(), at(this, t3, pe, ue, i2, {routes: 2, config: 3});
    }
  };
  function de(t3) {
    const e2 = async function(e3) {
      return await he(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    };
    return e2.sync = function(e3) {
      return me(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    }, e2;
  }
  async function he(t3, e2) {
    const n2 = await t3(e2);
    if (n2 === false)
      return false;
    const o4 = n2 || e2.file;
    if (o4.children) {
      const n3 = await Promise.all(o4.children.map(async (n4) => he(t3, {state: e2.state, scope: ge(e2.scope || {}), parent: e2.file, file: await n4})));
      o4.children = n3.filter(Boolean);
    }
    return o4;
  }
  function me(t3, e2) {
    const n2 = t3(e2);
    if (n2 === false)
      return false;
    const o4 = n2 || e2.file;
    if (o4.children) {
      const n3 = o4.children.map((n4) => me(t3, {state: e2.state, scope: ge(e2.scope || {}), parent: e2.file, file: n4}));
      o4.children = n3.filter(Boolean);
    }
    return o4;
  }
  function ge(t3) {
    return JSON.parse(JSON.stringify(t3));
  }
  var ye = de(({file: t3}) => {
    (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
      const n2 = e2 ? "" : "/?$";
      return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(ut, "([^/]+)") + n2}`;
    })(t3.path, t3.isFallback));
  });
  var $e = de(({file: t3}) => {
    t3.paramKeys = dt(t3.path);
  });
  var be = de(({file: t3}) => {
    t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
  });
  var we = de(({file: t3}) => {
    t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
  });
  var _e = de(({file: t3}) => {
    const e2 = t3, n2 = t3.meta && t3.meta.children || [];
    n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
  });
  var xe = de((t3) => {
    const {file: e2} = t3, {isFallback: n2, meta: o4} = e2, r2 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i3 = o4.index || o4.index === 0, a2 = o4.index === false;
    e2.isIndexable = i3 || !n2 && !r2 && !s2 && !a2, e2.isNonIndexable = !e2.isIndexable;
  });
  var ve = de(({file: t3, parent: e2}) => {
    Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => ke(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => ke(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => Pe(e2)});
  });
  function Pe(t3, e2 = []) {
    return t3 && (e2.unshift(t3), Pe(t3.parent, e2)), e2;
  }
  function ke(t3, e2) {
    if (!t3.root) {
      const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o4 = n2.indexOf(t3);
      return n2[o4 + e2];
    }
  }
  var je = de(({file: t3, parent: e2}) => {
    t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
  });
  var Ee = de(({file: t3, scope: e2}) => {
    function n2(t4) {
      if (!t4.isLayout && t4.meta.reset)
        return [];
      const {parent: e3} = t4, o4 = e3 && e3.component && e3, r2 = o4 && (o4.isReset || o4.meta.reset), s2 = e3 && !r2 && n2(e3) || [];
      return o4 && s2.push(o4), s2;
    }
    Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
  });
  var Oe = de(({file: t3}) => {
    const e2 = t3.root ? function() {
    } : t3.children ? (t3.isPage, function() {
    }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
    });
    Object.setPrototypeOf(t3, e2.prototype);
  });
  var Le = Object.freeze({__proto__: null, setRegex: ye, setParamKeys: $e, setShortPath: be, setRank: we, addMetaChildren: _e, setIsIndexable: xe, assignRelations: ve, assignIndex: je, assignLayout: Ee, createFlatList: (t3) => {
    de((t4) => {
      (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
    }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
  }, setPrototype: Oe});
  var Ie = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
  function Se(t3) {
    return Object.entries(Ie).forEach(([e2, n2]) => {
      t3[e2] === void 0 && (t3[e2] = n2);
    }), t3.children && (t3.children = t3.children.map(Se)), t3;
  }
  var Ne = de(({file: t3}) => {
    t3.api = new Te(t3);
  });
  var Te = class {
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
      return Fe(this, 1);
    }
    get prev() {
      return Fe(this, -1);
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
  function Fe(t3, e2) {
    if (!t3.__file.root) {
      const n2 = t3.parent.children.indexOf(t3);
      return t3.parent.children[n2 + e2];
    }
  }
  var Ae = {...Le, restoreDefaults: ({tree: t3}) => Se(t3), assignAPI: Ne};

  // dist/build/store-a83f109a.js
  var t = xt("http://foodis.dataline.fi/pw/");
  var o = vt({});
  var i = vt({});
  var p = vt({total: 0, amount: 0, products: []});

  // dist/build/fetch-d9c99915.js
  async function o2(o4 = "", t3 = "", a2 = "") {
    o4 && (o4 = "?" + o4);
    const n2 = await fetch(`http://foodis.dataline.fi/pw/${o4}`, {method: t3 ? "POST" : "GET", mode: "cors", cache: "no-cache", headers: {"Content-Type": "application/json", ...a2 ? {Authorization: `Bearer ${a2}`} : void 0}, body: t3 ? JSON.stringify(t3) : null});
    return await n2.json();
  }

  // dist/build/main.js
  var Re = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => require_fallback_261b8cfe()).then((t3) => t3.default)}, {isDir: true, children: [{isDir: true, ext: "", children: [{isIndex: true, isPage: true, path: "/:cat/:slug/index", id: "__cat__slug_index", component: () => Promise.resolve().then(() => require_index_cb75f065()).then((t3) => t3.default)}], path: "/:cat/:slug"}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => require_index_bfae5c19()).then((t3) => t3.default)}], isLayout: true, path: "/:cat", id: "__cat__layout", component: () => Promise.resolve().then(() => require_layout_230d3b27()).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => require_index_47a5898d()).then((t3) => t3.default)}, {isPage: true, path: "/kassa", id: "_kassa", component: () => Promise.resolve().then(() => require_kassa_ca5bde99()).then((t3) => t3.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => require_layout_1a0b2f71()).then((t3) => t3.default)};
  var {tree: Me, routes: Ce} = function(t3) {
    const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
    for (let t4 of e2) {
      (Ae[t4].sync || Ae[t4])(n2);
    }
    return n2;
  }(Re);
  function qe(e2) {
    let n2, o4;
    return n2 = new fe({props: {routes: Ce}}), {c() {
      rt(n2.$$.fragment);
    }, m(t3, e3) {
      st(n2, t3, e3), o4 = true;
    }, p: t2, i(t3) {
      o4 || (Y(n2.$$.fragment, t3), o4 = true);
    }, o(t3) {
      tt(n2.$$.fragment, t3), o4 = false;
    }, d(t3) {
      it(n2, t3);
    }};
  }
  !function(t3, e2 = {target: document.body}, n2 = "hmr", o4 = "app-loaded") {
    const r2 = document.getElementById(n2), s2 = document.createElement("div");
    function i3() {
      removeEventListener(o4, i3), r2 && r2.remove(), s2.style.visibility = null, s2.setAttribute("id", n2);
    }
    s2.style.visibility = "hidden", e2.target.appendChild(s2), r2 ? addEventListener(o4, i3) : i3(), new t3({...e2, target: s2});
  }(class extends ct {
    constructor(t3) {
      super(), at(this, t3, null, qe, i2, {});
    }
  }, {target: document.body}, "routify-app");
})();
