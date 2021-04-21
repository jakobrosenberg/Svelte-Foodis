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

  // dist/build/_fallback-e2a75ff0.js
  var require_fallback_e2a75ff0 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => fallback_e2a75ff0_default2
    });
    function m2(s3) {
      let a3, e3, d2, f2, v2, m3, p3, g2;
      return {c() {
        a3 = $("div"), e3 = $("div"), e3.textContent = "404", d2 = _(), f2 = $("div"), v2 = w("Page not found.\n    \n    "), m3 = $("a"), p3 = w("Go back"), P(e3, "class", "huge svelte-viq1pm"), P(m3, "href", g2 = s3[0]("../")), P(f2, "class", "big"), P(a3, "class", "e404 svelte-viq1pm");
      }, m(s4, t2) {
        m(s4, a3, t2), h(a3, e3), h(a3, d2), h(a3, f2), h(f2, v2), h(f2, m3), h(m3, p3);
      }, p(s4, [a4]) {
        1 & a4 && g2 !== (g2 = s4[0]("../")) && P(m3, "href", g2);
      }, i: t, o: t, d(s4) {
        s4 && g(a3);
      }};
    }
    function p2(s3, a3, e3) {
      let t2, n2;
      return l(s3, Ht, (s4) => e3(1, t2 = s4)), l(s3, Wt, (s4) => e3(0, n2 = s4)), t2(), [n2];
    }
    var fallback_e2a75ff0_default = class extends ct {
      constructor(s3) {
        super(), at(this, s3, p2, m2, i, {});
      }
    };
    var fallback_e2a75ff0_default2 = fallback_e2a75ff0_default;
  });

  // dist/build/index-77cca0dc.js
  var require_index_77cca0dc = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_77cca0dc_default2
    });
    function L2(t2, n2, e3) {
      const l2 = t2.slice();
      return l2[11] = n2[e3], l2;
    }
    function k2(t2, n2, e3) {
      const l2 = t2.slice();
      return l2[11] = n2[e3], l2;
    }
    function F2(t2) {
      let n2, e3, a3, m2, f2, h2, v2, b2, x2, y2, $2, D2, j2, H2, L3, k3, F3, w3, C3 = t2[2].img && M2(t2), N3 = t2[2].price && T2(t2), S3 = t2[2].body && q2(t2), Y3 = t2[2].docs && I2(t2), z2 = t2[2].extra && E2(t2);
      return {c() {
        n2 = $("div"), e3 = $("div"), C3 && C3.c(), a3 = _(), m2 = $("div"), N3 && N3.c(), f2 = _(), h2 = $("div"), v2 = $("div"), b2 = $("div"), x2 = $("input"), y2 = _(), $2 = $("div"), D2 = $("button"), D2.textContent = "Lis\xE4\xE4 ostoskoriin", j2 = _(), H2 = $("div"), S3 && S3.c(), L3 = _(), Y3 && Y3.c(), k3 = _(), z2 && z2.c(), P(e3, "id", "img"), P(x2, "name", "amount"), P(x2, "type", "number"), P(x2, "min", t2[3]), P(x2, "step", "1"), x2.required = true, P(D2, "class", "w100"), P(v2, "id", "cartIt"), P(v2, "class", "border grid"), P(h2, "id", "inputs"), P(H2, "class", "content"), P(m2, "id", "productInfo"), P(n2, "id", "product"), P(n2, "class", "container double grid");
      }, m(l2, i2) {
        m(l2, n2, i2), h(n2, e3), C3 && C3.m(e3, null), h(n2, a3), h(n2, m2), N3 && N3.m(m2, null), h(m2, f2), h(m2, h2), h(h2, v2), h(v2, b2), h(b2, x2), E(x2, t2[0]), h(v2, y2), h(v2, $2), h($2, D2), h(m2, j2), h(m2, H2), S3 && S3.m(H2, null), h(H2, L3), Y3 && Y3.m(H2, null), h(H2, k3), z2 && z2.m(H2, null), F3 || (w3 = [v(x2, "input", t2[7]), v(D2, "click", t2[5])], F3 = true);
      }, p(t3, n3) {
        t3[2].img ? C3 ? C3.p(t3, n3) : (C3 = M2(t3), C3.c(), C3.m(e3, null)) : C3 && (C3.d(1), C3 = null), t3[2].price ? N3 ? N3.p(t3, n3) : (N3 = T2(t3), N3.c(), N3.m(m2, f2)) : N3 && (N3.d(1), N3 = null), 8 & n3 && P(x2, "min", t3[3]), 1 & n3 && k(x2.value) !== t3[0] && E(x2, t3[0]), t3[2].body ? S3 ? S3.p(t3, n3) : (S3 = q2(t3), S3.c(), S3.m(H2, L3)) : S3 && (S3.d(1), S3 = null), t3[2].docs ? Y3 ? Y3.p(t3, n3) : (Y3 = I2(t3), Y3.c(), Y3.m(H2, k3)) : Y3 && (Y3.d(1), Y3 = null), t3[2].extra ? z2 ? z2.p(t3, n3) : (z2 = E2(t3), z2.c(), z2.m(H2, null)) : z2 && (z2.d(1), z2 = null);
      }, d(t3) {
        t3 && g(n2), C3 && C3.d(), N3 && N3.d(), S3 && S3.d(), Y3 && Y3.d(), z2 && z2.d(), F3 = false, r(w3);
      }};
    }
    function M2(t2) {
      let n2, e3, s3, u2, a3, m2, p2, f2, g2, h2;
      return {c() {
        n2 = $("picture"), e3 = $("source"), u2 = _(), a3 = $("source"), p2 = _(), f2 = $("img"), P(e3, "srcset", s3 = t2[2].img[0][1]), P(e3, "type", "image/webp"), P(a3, "srcset", m2 = t2[2].img[0][0]), P(a3, "type", "image/jpeg"), f2.src !== (g2 = t2[2].img[0][0]) && P(f2, "src", g2), P(f2, "alt", h2 = t2[2].title), P(n2, "class", "block");
      }, m(t3, l2) {
        m(t3, n2, l2), h(n2, e3), h(n2, u2), h(n2, a3), h(n2, p2), h(n2, f2);
      }, p(t3, n3) {
        4 & n3 && s3 !== (s3 = t3[2].img[0][1]) && P(e3, "srcset", s3), 4 & n3 && m2 !== (m2 = t3[2].img[0][0]) && P(a3, "srcset", m2), 4 & n3 && f2.src !== (g2 = t3[2].img[0][0]) && P(f2, "src", g2), 4 & n3 && h2 !== (h2 = t3[2].title) && P(f2, "alt", h2);
      }, d(t3) {
        t3 && g(n2);
      }};
    }
    function T2(t2) {
      let n2, e3, s3, u2, p2, f2, g2 = t2[1].toFixed(2) + "", h2 = t2[0] > 1 && w2(t2);
      return {c() {
        n2 = $("div"), e3 = w("Hinta: "), s3 = $("strong"), u2 = w(g2), p2 = w(" \u20AC"), f2 = _(), h2 && h2.c(), P(n2, "id", "price");
      }, m(t3, l2) {
        m(t3, n2, l2), h(n2, e3), h(n2, s3), h(s3, u2), h(s3, p2), h(n2, f2), h2 && h2.m(n2, null);
      }, p(t3, e4) {
        2 & e4 && g2 !== (g2 = t3[1].toFixed(2) + "") && j(u2, g2), t3[0] > 1 ? h2 ? h2.p(t3, e4) : (h2 = w2(t3), h2.c(), h2.m(n2, null)) : h2 && (h2.d(1), h2 = null);
      }, d(t3) {
        t3 && g(n2), h2 && h2.d();
      }};
    }
    function w2(t2) {
      let n2, e3, c2, s3, u2, p2, f2, g2 = t2[4].toFixed(2) + "";
      return {c() {
        n2 = $("br"), e3 = _(), c2 = $("small"), s3 = w("Yhteens\xE4: "), u2 = $("strong"), p2 = w(g2), f2 = w(" \u20AC");
      }, m(t3, l2) {
        m(t3, n2, l2), m(t3, e3, l2), m(t3, c2, l2), h(c2, s3), h(c2, u2), h(u2, p2), h(u2, f2);
      }, p(t3, n3) {
        16 & n3 && g2 !== (g2 = t3[4].toFixed(2) + "") && j(p2, g2);
      }, d(t3) {
        t3 && g(n2), t3 && g(e3), t3 && g(c2);
      }};
    }
    function q2(t2) {
      let n2, e3 = t2[2].body + "";
      return {c() {
        n2 = $("div"), P(n2, "id", "body");
      }, m(t3, l2) {
        m(t3, n2, l2), n2.innerHTML = e3;
      }, p(t3, l2) {
        4 & l2 && e3 !== (e3 = t3[2].body + "") && (n2.innerHTML = e3);
      }, d(t3) {
        t3 && g(n2);
      }};
    }
    function I2(t2) {
      let n2, e3, i2 = t2[2].docs, s3 = [];
      for (let n3 = 0; n3 < i2.length; n3 += 1)
        s3[n3] = C2(k2(t2, i2, n3));
      return {c() {
        n2 = $("div"), e3 = $("ul");
        for (let t3 = 0; t3 < s3.length; t3 += 1)
          s3[t3].c();
        P(n2, "id", "docs");
      }, m(t3, l2) {
        m(t3, n2, l2), h(n2, e3);
        for (let t4 = 0; t4 < s3.length; t4 += 1)
          s3[t4].m(e3, null);
      }, p(t3, n3) {
        if (4 & n3) {
          let l2;
          for (i2 = t3[2].docs, l2 = 0; l2 < i2.length; l2 += 1) {
            const c2 = k2(t3, i2, l2);
            s3[l2] ? s3[l2].p(c2, n3) : (s3[l2] = C2(c2), s3[l2].c(), s3[l2].m(e3, null));
          }
          for (; l2 < s3.length; l2 += 1)
            s3[l2].d(1);
          s3.length = i2.length;
        }
      }, d(t3) {
        t3 && g(n2), y(s3, t3);
      }};
    }
    function C2(t2) {
      let n2, e3, s3, u2, p2, f2, g2 = t2[11].label + "";
      return {c() {
        n2 = $("li"), e3 = $("a"), s3 = w(g2), u2 = w(" \u2192"), f2 = _(), P(e3, "href", p2 = t2[11].value), P(e3, "rel", "nofollow");
      }, m(t3, l2) {
        m(t3, n2, l2), h(n2, e3), h(e3, s3), h(e3, u2), h(n2, f2);
      }, p(t3, n3) {
        4 & n3 && g2 !== (g2 = t3[11].label + "") && j(s3, g2), 4 & n3 && p2 !== (p2 = t3[11].value) && P(e3, "href", p2);
      }, d(t3) {
        t3 && g(n2);
      }};
    }
    function E2(t2) {
      let n2, e3, i2 = t2[2].extra, s3 = [];
      for (let n3 = 0; n3 < i2.length; n3 += 1)
        s3[n3] = N2(L2(t2, i2, n3));
      return {c() {
        n2 = $("div"), e3 = $("ul");
        for (let t3 = 0; t3 < s3.length; t3 += 1)
          s3[t3].c();
        P(n2, "id", "extra");
      }, m(t3, l2) {
        m(t3, n2, l2), h(n2, e3);
        for (let t4 = 0; t4 < s3.length; t4 += 1)
          s3[t4].m(e3, null);
      }, p(t3, n3) {
        if (4 & n3) {
          let l2;
          for (i2 = t3[2].extra, l2 = 0; l2 < i2.length; l2 += 1) {
            const c2 = L2(t3, i2, l2);
            s3[l2] ? s3[l2].p(c2, n3) : (s3[l2] = N2(c2), s3[l2].c(), s3[l2].m(e3, null));
          }
          for (; l2 < s3.length; l2 += 1)
            s3[l2].d(1);
          s3.length = i2.length;
        }
      }, d(t3) {
        t3 && g(n2), y(s3, t3);
      }};
    }
    function N2(t2) {
      let n2, e3 = t2[11].name + "";
      return {c() {
        n2 = $("li");
      }, m(t3, l2) {
        m(t3, n2, l2), n2.innerHTML = e3;
      }, p(t3, l2) {
        4 & l2 && e3 !== (e3 = t3[11].name + "") && (n2.innerHTML = e3);
      }, d(t3) {
        t3 && g(n2);
      }};
    }
    function S2(t2) {
      let n2, e3 = t2[2] && F2(t2);
      return {c() {
        e3 && e3.c(), n2 = x();
      }, m(t3, l2) {
        e3 && e3.m(t3, l2), m(t3, n2, l2);
      }, p(t3, [l2]) {
        t3[2] ? e3 ? e3.p(t3, l2) : (e3 = F2(t3), e3.c(), e3.m(n2.parentNode, n2)) : e3 && (e3.d(1), e3 = null);
      }, i: t, o: t, d(t3) {
        e3 && e3.d(t3), t3 && g(n2);
      }};
    }
    function Y2(t2, n2, e3) {
      let l2, i2, c2, r2, o3, s3, u2, d2;
      return l(t2, a, (t3) => e3(2, o3 = t3)), l(t2, Ht, (t3) => e3(8, s3 = t3)), l(t2, e, (t3) => e3(9, u2 = t3)), l(t2, zt, (t3) => e3(6, d2 = t3)), t2.$$.update = () => {
        var n3;
        4 & t2.$$.dirty && e3(1, c2 = o3.price), 7 & t2.$$.dirty && o3 && l2 && (o3.amountDiscounts && (e3(1, c2 = o3.price), o3.amountDiscounts.forEach(function(t3) {
          t3.amount <= l2 && e3(1, c2 = t3.price);
        })), e3(4, r2 = c2 * l2)), 3 & t2.$$.dirty && e3(4, r2 = l2 * c2), 64 & t2.$$.dirty && d2.slug && (n3 = d2.slug, o(n3).then((t3) => {
          a.set(t3), o3.amountDiscounts && o3.amountDiscounts[0] && e3(0, l2 = e3(3, i2 = o3.amountDiscounts[0].amount)), s3();
        }).catch((t3) => {
          console.log(t3);
        }));
      }, e3(0, l2 = 1), e3(3, i2 = 1), [l2, c2, o3, i2, r2, function() {
        let t3 = {id: o3.id, title: o3.title, price: o3.price, current: c2, amount: l2, vat: 14, total: r2};
        o3.amountDiscounts, d(e, u2.total += r2, u2), d(e, u2.amount += l2, u2), u2.products.push(t3);
      }, d2, function() {
        l2 = k(this.value), e3(0, l2);
      }];
    }
    var index_77cca0dc_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, Y2, S2, i, {});
      }
    };
    var index_77cca0dc_default2 = index_77cca0dc_default;
  });

  // dist/build/index-a475e41a.js
  var require_index_a475e41a = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_a475e41a_default2
    });
    function y2(t2, e3, l2) {
      const r2 = t2.slice();
      return r2[4] = e3[l2], r2;
    }
    function v2(t2, e3, l2) {
      const r2 = t2.slice();
      return r2[4] = e3[l2], r2;
    }
    function j2(t2) {
      let e3, l2 = t2[0].body + "";
      return {c() {
        e3 = $("div"), P(e3, "id", "body");
      }, m(t3, r2) {
        m(t3, e3, r2), e3.innerHTML = l2;
      }, p(t3, r2) {
        1 & r2 && l2 !== (l2 = t3[0].body + "") && (e3.innerHTML = l2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function $2(t2) {
      let e3, l2 = t2[0].items, i2 = [];
      for (let e4 = 0; e4 < l2.length; e4 += 1)
        i2[e4] = H2(y2(t2, l2, e4));
      return {c() {
        e3 = $("div");
        for (let t3 = 0; t3 < i2.length; t3 += 1)
          i2[t3].c();
        P(e3, "id", "products"), P(e3, "class", "tc grid bold");
      }, m(t3, l3) {
        m(t3, e3, l3);
        for (let t4 = 0; t4 < i2.length; t4 += 1)
          i2[t4].m(e3, null);
      }, p(t3, r2) {
        if (1 & r2) {
          let c2;
          for (l2 = t3[0].items, c2 = 0; c2 < l2.length; c2 += 1) {
            const s3 = y2(t3, l2, c2);
            i2[c2] ? i2[c2].p(s3, r2) : (i2[c2] = H2(s3), i2[c2].c(), i2[c2].m(e3, null));
          }
          for (; c2 < i2.length; c2 += 1)
            i2[c2].d(1);
          i2.length = l2.length;
        }
      }, d(t3) {
        t3 && g(e3), y(i2, t3);
      }};
    }
    function N2(t2) {
      let e3, l2, i2, u2, p2, f2, g2, h2, b2, x2, y3, v3, j3, $3, N3, F3, H3, L3, M3, T2, q2, w2 = t2[4].title + "", S2 = t2[4].price.toFixed(2) + "", z2 = t2[4].extra && k2(t2);
      return {c() {
        e3 = $("a"), l2 = $("picture"), i2 = $("source"), p2 = _(), f2 = $("source"), h2 = _(), b2 = $("img"), v3 = _(), j3 = $("div"), $3 = w(w2), N3 = _(), F3 = $("div"), H3 = w(S2), L3 = w(" \u20AC"), M3 = _(), z2 && z2.c(), T2 = _(), P(i2, "srcset", u2 = t2[4].img[1]), P(i2, "type", "image/webp"), P(f2, "srcset", g2 = t2[4].img[0]), P(f2, "type", "image/jpeg"), b2.src !== (x2 = t2[4].img[0]) && P(b2, "src", x2), P(b2, "alt", y3 = t2[4].title), P(l2, "class", "block"), P(j3, "class", "title"), P(F3, "class", "price"), P(e3, "class", "block"), P(e3, "href", q2 = t2[4].path);
      }, m(t3, r2) {
        m(t3, e3, r2), h(e3, l2), h(l2, i2), h(l2, p2), h(l2, f2), h(l2, h2), h(l2, b2), h(e3, v3), h(e3, j3), h(j3, $3), h(e3, N3), h(e3, F3), h(F3, H3), h(F3, L3), h(e3, M3), z2 && z2.m(e3, null), h(e3, T2);
      }, p(t3, l3) {
        1 & l3 && u2 !== (u2 = t3[4].img[1]) && P(i2, "srcset", u2), 1 & l3 && g2 !== (g2 = t3[4].img[0]) && P(f2, "srcset", g2), 1 & l3 && b2.src !== (x2 = t3[4].img[0]) && P(b2, "src", x2), 1 & l3 && y3 !== (y3 = t3[4].title) && P(b2, "alt", y3), 1 & l3 && w2 !== (w2 = t3[4].title + "") && j($3, w2), 1 & l3 && S2 !== (S2 = t3[4].price.toFixed(2) + "") && j(H3, S2), t3[4].extra ? z2 ? z2.p(t3, l3) : (z2 = k2(t3), z2.c(), z2.m(e3, T2)) : z2 && (z2.d(1), z2 = null), 1 & l3 && q2 !== (q2 = t3[4].path) && P(e3, "href", q2);
      }, d(t3) {
        t3 && g(e3), z2 && z2.d();
      }};
    }
    function k2(t2) {
      let e3, l2 = t2[4].extra, i2 = [];
      for (let e4 = 0; e4 < l2.length; e4 += 1)
        i2[e4] = F2(v2(t2, l2, e4));
      return {c() {
        e3 = $("div");
        for (let t3 = 0; t3 < i2.length; t3 += 1)
          i2[t3].c();
        P(e3, "class", "extra");
      }, m(t3, l3) {
        m(t3, e3, l3);
        for (let t4 = 0; t4 < i2.length; t4 += 1)
          i2[t4].m(e3, null);
      }, p(t3, r2) {
        if (1 & r2) {
          let c2;
          for (l2 = t3[4].extra, c2 = 0; c2 < l2.length; c2 += 1) {
            const s3 = v2(t3, l2, c2);
            i2[c2] ? i2[c2].p(s3, r2) : (i2[c2] = F2(s3), i2[c2].c(), i2[c2].m(e3, null));
          }
          for (; c2 < i2.length; c2 += 1)
            i2[c2].d(1);
          i2.length = l2.length;
        }
      }, d(t3) {
        t3 && g(e3), y(i2, t3);
      }};
    }
    function F2(t2) {
      let e3, l2, i2, u2, p2 = t2[4].abbr + "";
      return {c() {
        e3 = $("div"), l2 = $("span"), i2 = w(p2), u2 = _(), P(l2, "class", "grid cell"), P(e3, "class", "inl");
      }, m(t3, r2) {
        m(t3, e3, r2), h(e3, l2), h(l2, i2), h(e3, u2);
      }, p(t3, e4) {
        1 & e4 && p2 !== (p2 = t3[4].abbr + "") && j(i2, p2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function H2(t2) {
      let e3, l2 = t2[4].img && N2(t2);
      return {c() {
        l2 && l2.c(), e3 = x();
      }, m(t3, r2) {
        l2 && l2.m(t3, r2), m(t3, e3, r2);
      }, p(t3, r2) {
        t3[4].img ? l2 ? l2.p(t3, r2) : (l2 = N2(t3), l2.c(), l2.m(e3.parentNode, e3)) : l2 && (l2.d(1), l2 = null);
      }, d(t3) {
        l2 && l2.d(t3), t3 && g(e3);
      }};
    }
    function L2(t2) {
      let e3, l2, r2 = t2[0].body && j2(t2), c2 = t2[0].items && $2(t2);
      return {c() {
        r2 && r2.c(), e3 = _(), c2 && c2.c(), l2 = x();
      }, m(t3, n2) {
        r2 && r2.m(t3, n2), m(t3, e3, n2), c2 && c2.m(t3, n2), m(t3, l2, n2);
      }, p(t3, [s3]) {
        t3[0].body ? r2 ? r2.p(t3, s3) : (r2 = j2(t3), r2.c(), r2.m(e3.parentNode, e3)) : r2 && (r2.d(1), r2 = null), t3[0].items ? c2 ? c2.p(t3, s3) : (c2 = $2(t3), c2.c(), c2.m(l2.parentNode, l2)) : c2 && (c2.d(1), c2 = null);
      }, i: t, o: t, d(t3) {
        r2 && r2.d(t3), t3 && g(e3), c2 && c2.d(t3), t3 && g(l2);
      }};
    }
    function M2(t2, e3, l2) {
      let r2, c2, s3;
      return l(t2, Ht, (t3) => l2(2, r2 = t3)), l(t2, zt, (t3) => l2(1, c2 = t3)), l(t2, a, (t3) => l2(0, s3 = t3)), t2.$$.update = () => {
        var e4;
        2 & t2.$$.dirty && c2.cat && (e4 = c2.cat, o(e4).then((t3) => {
          a.set(t3), r2();
        }).catch((t3) => {
          console.log(t3);
        }));
      }, [s3, c2];
    }
    var index_a475e41a_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, M2, L2, i, {});
      }
    };
    var index_a475e41a_default2 = index_a475e41a_default;
  });

  // dist/build/_layout-a3755391.js
  var require_layout_a3755391 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_a3755391_default2
    });
    function c2(s3) {
      let t2;
      const e3 = s3[1].default, c3 = u(e3, s3, s3[0], null);
      return {c() {
        c3 && c3.c();
      }, m(s4, e4) {
        c3 && c3.m(s4, e4), t2 = true;
      }, p(s4, [t3]) {
        c3 && c3.p && 1 & t3 && f(c3, e3, s4, s4[0], t3, null, null);
      }, i(s4) {
        t2 || (Y(c3, s4), t2 = true);
      }, o(s4) {
        tt(c3, s4), t2 = false;
      }, d(s4) {
        c3 && c3.d(s4);
      }};
    }
    function u2(s3, t2, e3) {
      let {$$slots: n2 = {}, $$scope: o3} = t2;
      return s3.$$set = (s4) => {
        "$$scope" in s4 && e3(0, o3 = s4.$$scope);
      }, [o3, n2];
    }
    var layout_a3755391_default = class extends ct {
      constructor(s3) {
        super(), at(this, s3, u2, c2, i, {});
      }
    };
    var layout_a3755391_default2 = layout_a3755391_default;
  });

  // dist/build/index-00e6776a.js
  var require_index_00e6776a = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_00e6776a_default2
    });
    function d2(t2, e3, s3) {
      const c2 = t2.slice();
      return c2[1] = e3[s3], c2;
    }
    function h2(t2) {
      let e3, s3, c2, g2, m2, u2, p2, f2, d3, h3, b3, k3, j3, v2, x2, y2, H2 = t2[1].title + "";
      return {c() {
        e3 = $("a"), s3 = $("figure"), c2 = $("picture"), g2 = $("source"), u2 = _(), p2 = $("source"), d3 = _(), h3 = $("img"), j3 = _(), v2 = $("figcaption"), x2 = _(), P(g2, "srcset", m2 = t2[1].img[1]), P(g2, "type", "image/webp"), P(p2, "srcset", f2 = t2[1].img[0]), P(p2, "type", "image/jpeg"), h3.src !== (b3 = t2[1].img[0]) && P(h3, "src", b3), P(h3, "alt", k3 = t2[1].title), P(c2, "class", "block"), P(v2, "class", "block"), P(s3, "class", "block"), P(e3, "class", "block"), P(e3, "href", y2 = t2[1].path);
      }, m(t3, i2) {
        m(t3, e3, i2), h(e3, s3), h(s3, c2), h(c2, g2), h(c2, u2), h(c2, p2), h(c2, d3), h(c2, h3), h(s3, j3), h(s3, v2), v2.innerHTML = H2, h(e3, x2);
      }, p(t3, s4) {
        1 & s4 && m2 !== (m2 = t3[1].img[1]) && P(g2, "srcset", m2), 1 & s4 && f2 !== (f2 = t3[1].img[0]) && P(p2, "srcset", f2), 1 & s4 && h3.src !== (b3 = t3[1].img[0]) && P(h3, "src", b3), 1 & s4 && k3 !== (k3 = t3[1].title) && P(h3, "alt", k3), 1 & s4 && H2 !== (H2 = t3[1].title + "") && (v2.innerHTML = H2), 1 & s4 && y2 !== (y2 = t3[1].path) && P(e3, "href", y2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function b2(t2) {
      let e3, s3 = t2[1].img && h2(t2);
      return {c() {
        s3 && s3.c(), e3 = x();
      }, m(t3, c2) {
        s3 && s3.m(t3, c2), m(t3, e3, c2);
      }, p(t3, c2) {
        t3[1].img ? s3 ? s3.p(t3, c2) : (s3 = h2(t3), s3.c(), s3.m(e3.parentNode, e3)) : s3 && (s3.d(1), s3 = null);
      }, d(t3) {
        s3 && s3.d(t3), t3 && g(e3);
      }};
    }
    function k2(t2) {
      let e3, s3 = t2[0].nav, c2 = [];
      for (let e4 = 0; e4 < s3.length; e4 += 1)
        c2[e4] = b2(d2(t2, s3, e4));
      return {c() {
        e3 = $("div");
        for (let t3 = 0; t3 < c2.length; t3 += 1)
          c2[t3].c();
        P(e3, "id", "products"), P(e3, "class", "tc grid up bold");
      }, m(t3, s4) {
        m(t3, e3, s4);
        for (let t4 = 0; t4 < c2.length; t4 += 1)
          c2[t4].m(e3, null);
      }, p(t3, [l2]) {
        if (1 & l2) {
          let i2;
          for (s3 = t3[0].nav, i2 = 0; i2 < s3.length; i2 += 1) {
            const r2 = d2(t3, s3, i2);
            c2[i2] ? c2[i2].p(r2, l2) : (c2[i2] = b2(r2), c2[i2].c(), c2[i2].m(e3, null));
          }
          for (; i2 < c2.length; i2 += 1)
            c2[i2].d(1);
          c2.length = s3.length;
        }
      }, i: t, o: t, d(t3) {
        t3 && g(e3), y(c2, t3);
      }};
    }
    function j2(t2, e3, s3) {
      let c2;
      return l(t2, s, (t3) => s3(0, c2 = t3)), c2.site && a.set({title: c2.site.title, slogan: c2.site.slogan}), [c2];
    }
    var index_00e6776a_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, j2, k2, i, {});
      }
    };
    var index_00e6776a_default2 = index_00e6776a_default;
  });

  // dist/build/kassa-7997fa0f.js
  var require_kassa_7997fa0f = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => kassa_7997fa0f_default2
    });
    function $2(t2, e3, n2) {
      const s3 = t2.slice();
      return s3[21] = e3[n2], s3[22] = e3, s3[23] = n2, s3;
    }
    function L2(t2, e3, n2) {
      const s3 = t2.slice();
      return s3[21] = e3[n2], s3[24] = e3, s3[25] = n2, s3;
    }
    function H2(t2) {
      let e3;
      function n2(t3, e4) {
        return t3[4] ? M2 : j2;
      }
      let o3 = n2(t2), i2 = o3(t2);
      return {c() {
        e3 = $("div"), i2.c(), P(e3, "id", "checkout"), P(e3, "class", "container rel");
      }, m(t3, n3) {
        m(t3, e3, n3), i2.m(e3, null);
      }, p(t3, s3) {
        o3 === (o3 = n2(t3)) && i2 ? i2.p(t3, s3) : (i2.d(1), i2 = o3(t3), i2 && (i2.c(), i2.m(e3, null)));
      }, d(t3) {
        t3 && g(e3), i2.d();
      }};
    }
    function M2(t2) {
      let e3, n2;
      return {c() {
        n2 = x(), e3 = new L(n2);
      }, m(s3, a3) {
        e3.m(t2[4], s3, a3), m(s3, n2, a3);
      }, p(t3, n3) {
        16 & n3 && e3.p(t3[4]);
      }, d(t3) {
        t3 && g(n2), t3 && e3.d();
      }};
    }
    function j2(t2) {
      let e3, n2, r2, d2, m2, f2, h2, v2, y2, g2, k2, w2, C2, F2, T2, H3, M3, j3, q3, z3, E3, B3, P3, V3, Y3, X3, D3, G2, J2, O2, Q2, R2, U2, W2, Z2, _2, tt2, et2, nt2, st2, at2, lt2, ct2, ot2, it2 = t2[2].total.toFixed(2) + "", ut2 = t2[7].toFixed(2) + "", rt2 = t2[3].toFixed(2) + "", dt2 = t2[6].body && N2(t2), mt2 = t2[2].products, pt2 = [];
      for (let e4 = 0; e4 < mt2.length; e4 += 1)
        pt2[e4] = I2(L2(t2, mt2, e4));
      let ft2 = t2[0].distance && !t2[1] && K2(t2), ht2 = t2[10], xt2 = [];
      for (let e4 = 0; e4 < ht2.length; e4 += 1)
        xt2[e4] = S2($2(t2, ht2, e4));
      let vt2 = t2[2].customer.name1 && t2[2].customer.name2 && t2[2].customer.street && t2[2].customer.postal && t2[2].customer.area && A2(t2);
      return {c() {
        dt2 && dt2.c(), e3 = _(), n2 = $("div"), r2 = $("div"), d2 = $("h2"), d2.textContent = "Tuotteet", m2 = _(), f2 = $("table"), h2 = $("thead"), h2.innerHTML = '<tr><th class="tl">Tuote</th> \n								<th class="tc">Hinta</th> \n								<th class="tc">M\xE4\xE4r\xE4</th> \n								<th class="tc">Yhteens\xE4</th> \n								<th></th></tr>', v2 = _(), y2 = $("tbody");
        for (let t3 = 0; t3 < pt2.length; t3 += 1)
          pt2[t3].c();
        g2 = _(), k2 = $("div"), w2 = $("h2"), w2.textContent = "Maksutiedot", C2 = _(), F2 = $("table"), T2 = $("tbody"), H3 = $("tr"), M3 = $("td"), M3.textContent = "Tuotteet yhteens\xE4", j3 = _(), q3 = $("td"), z3 = w(it2), E3 = w(" \u20AC"), B3 = _(), ft2 && ft2.c(), P3 = _(), V3 = $("tr"), Y3 = $("td"), Y3.textContent = "ALV 10%", X3 = _(), D3 = $("td"), G2 = w(ut2), J2 = w(" \u20AC"), O2 = _(), Q2 = $("tr"), R2 = $("td"), R2.textContent = "Tilaus yhteens\xE4", U2 = _(), W2 = $("td"), Z2 = w(rt2), _2 = w(" \u20AC"), tt2 = _(), et2 = $("div"), nt2 = $("div"), st2 = $("h2"), st2.textContent = "Asiakastiedot", at2 = _(), lt2 = $("div");
        for (let t3 = 0; t3 < xt2.length; t3 += 1)
          xt2[t3].c();
        ct2 = _(), vt2 && vt2.c(), ot2 = x(), P(f2, "id", "productList"), P(f2, "class", "w100"), P(f2, "rules", "rows"), P(r2, "class", "item"), P(M3, "class", "label tl"), P(q3, "class", "value tr"), P(Y3, "class", "label tl"), P(D3, "class", "value tr"), P(R2, "class", "label tl"), P(W2, "class", "value tr"), P(F2, "class", "w100"), P(k2, "id", "paymentInfo"), P(k2, "class", "item"), P(n2, "id", "tables"), P(n2, "class", "grid"), P(lt2, "class", "grid"), P(nt2, "id", "client"), P(nt2, "class", "item"), P(et2, "class", "items");
      }, m(t3, s3) {
        dt2 && dt2.m(t3, s3), m(t3, e3, s3), m(t3, n2, s3), h(n2, r2), h(r2, d2), h(r2, m2), h(r2, f2), h(f2, h2), h(f2, v2), h(f2, y2);
        for (let t4 = 0; t4 < pt2.length; t4 += 1)
          pt2[t4].m(y2, null);
        h(n2, g2), h(n2, k2), h(k2, w2), h(k2, C2), h(k2, F2), h(F2, T2), h(T2, H3), h(H3, M3), h(H3, j3), h(H3, q3), h(q3, z3), h(q3, E3), h(T2, B3), ft2 && ft2.m(T2, null), h(T2, P3), h(T2, V3), h(V3, Y3), h(V3, X3), h(V3, D3), h(D3, G2), h(D3, J2), h(T2, O2), h(T2, Q2), h(Q2, R2), h(Q2, U2), h(Q2, W2), h(W2, Z2), h(W2, _2), m(t3, tt2, s3), m(t3, et2, s3), h(et2, nt2), h(nt2, st2), h(nt2, at2), h(nt2, lt2);
        for (let t4 = 0; t4 < xt2.length; t4 += 1)
          xt2[t4].m(lt2, null);
        m(t3, ct2, s3), vt2 && vt2.m(t3, s3), m(t3, ot2, s3);
      }, p(t3, n3) {
        if (t3[6].body ? dt2 ? dt2.p(t3, n3) : (dt2 = N2(t3), dt2.c(), dt2.m(e3.parentNode, e3)) : dt2 && (dt2.d(1), dt2 = null), 516 & n3) {
          let e4;
          for (mt2 = t3[2].products, e4 = 0; e4 < mt2.length; e4 += 1) {
            const s3 = L2(t3, mt2, e4);
            pt2[e4] ? pt2[e4].p(s3, n3) : (pt2[e4] = I2(s3), pt2[e4].c(), pt2[e4].m(y2, null));
          }
          for (; e4 < pt2.length; e4 += 1)
            pt2[e4].d(1);
          pt2.length = mt2.length;
        }
        if (4 & n3 && it2 !== (it2 = t3[2].total.toFixed(2) + "") && j(z3, it2), t3[0].distance && !t3[1] ? ft2 ? ft2.p(t3, n3) : (ft2 = K2(t3), ft2.c(), ft2.m(T2, P3)) : ft2 && (ft2.d(1), ft2 = null), 128 & n3 && ut2 !== (ut2 = t3[7].toFixed(2) + "") && j(G2, ut2), 8 & n3 && rt2 !== (rt2 = t3[3].toFixed(2) + "") && j(Z2, rt2), 1028 & n3) {
          let e4;
          for (ht2 = t3[10], e4 = 0; e4 < ht2.length; e4 += 1) {
            const s3 = $2(t3, ht2, e4);
            xt2[e4] ? xt2[e4].p(s3, n3) : (xt2[e4] = S2(s3), xt2[e4].c(), xt2[e4].m(lt2, null));
          }
          for (; e4 < xt2.length; e4 += 1)
            xt2[e4].d(1);
          xt2.length = ht2.length;
        }
        t3[2].customer.name1 && t3[2].customer.name2 && t3[2].customer.street && t3[2].customer.postal && t3[2].customer.area ? vt2 ? vt2.p(t3, n3) : (vt2 = A2(t3), vt2.c(), vt2.m(ot2.parentNode, ot2)) : vt2 && (vt2.d(1), vt2 = null);
      }, d(t3) {
        dt2 && dt2.d(t3), t3 && g(e3), t3 && g(n2), y(pt2, t3), ft2 && ft2.d(), t3 && g(tt2), t3 && g(et2), y(xt2, t3), t3 && g(ct2), vt2 && vt2.d(t3), t3 && g(ot2);
      }};
    }
    function N2(t2) {
      let e3, n2 = t2[6].body + "";
      return {c() {
        e3 = $("div"), P(e3, "class", "body");
      }, m(t3, s3) {
        m(t3, e3, s3), e3.innerHTML = n2;
      }, p(t3, s3) {
        64 & s3 && n2 !== (n2 = t3[6].body + "") && (e3.innerHTML = n2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function q2(t2) {
      let e3, n2, i2, r2, d2, m2, b2, g2, k2, w2, C2, F2, T2, $3, L3, H3, M3, j3, N3, q3, I3, K3, S3, A3, B3, P3, V3, Y3, X3, D3 = t2[21].title + "", G2 = t2[21].current.toFixed(2) + "", J2 = t2[21].total.toFixed(2) + "", O2 = t2[21].size && z2(t2), Q2 = t2[21].id && E2(t2);
      function R2() {
        t2[12].call(j3, t2[25]);
      }
      function U2() {
        return t2[13](t2[25]);
      }
      return {c() {
        e3 = $("tr"), n2 = $("td"), i2 = $("strong"), r2 = w(D3), d2 = _(), O2 && O2.c(), m2 = _(), b2 = $("br"), g2 = _(), Q2 && Q2.c(), k2 = _(), w2 = $("td"), C2 = $("span"), C2.textContent = "Hinta:", F2 = _(), T2 = w(G2), $3 = _(), L3 = $("td"), H3 = $("span"), H3.textContent = "M\xE4\xE4r\xE4:", M3 = _(), j3 = $("input"), N3 = _(), q3 = $("td"), I3 = $("span"), I3.textContent = "Yhteens\xE4:", K3 = _(), S3 = w(J2), A3 = _(), B3 = $("td"), P3 = $("button"), P3.textContent = "X", V3 = _(), P(n2, "class", "product tl"), P(w2, "class", "price tc pt"), P(j3, "type", "number"), P(j3, "name", "amount"), P(L3, "class", "amount tc"), P(q3, "class", "total tc pt"), P(P3, "class", "del noBor"), P(B3, "class", "tr pt");
      }, m(s3, a3) {
        m(s3, e3, a3), h(e3, n2), h(n2, i2), h(i2, r2), h(i2, d2), O2 && O2.m(i2, null), h(n2, m2), h(n2, b2), h(n2, g2), Q2 && Q2.m(n2, null), h(e3, k2), h(e3, w2), h(w2, C2), h(w2, F2), h(w2, T2), h(e3, $3), h(e3, L3), h(L3, H3), h(L3, M3), h(L3, j3), E(j3, t2[2].products[t2[25]].amount), h(e3, N3), h(e3, q3), h(q3, I3), h(q3, K3), h(q3, S3), h(e3, A3), h(e3, B3), h(B3, P3), h(e3, V3), Y3 || (X3 = [v(j3, "input", R2), v(P3, "click", U2)], Y3 = true);
      }, p(e4, s3) {
        t2 = e4, 4 & s3 && D3 !== (D3 = t2[21].title + "") && j(r2, D3), t2[21].size ? O2 ? O2.p(t2, s3) : (O2 = z2(t2), O2.c(), O2.m(i2, null)) : O2 && (O2.d(1), O2 = null), t2[21].id ? Q2 ? Q2.p(t2, s3) : (Q2 = E2(t2), Q2.c(), Q2.m(n2, null)) : Q2 && (Q2.d(1), Q2 = null), 4 & s3 && G2 !== (G2 = t2[21].current.toFixed(2) + "") && j(T2, G2), 4 & s3 && k(j3.value) !== t2[2].products[t2[25]].amount && E(j3, t2[2].products[t2[25]].amount), 4 & s3 && J2 !== (J2 = t2[21].total.toFixed(2) + "") && j(S3, J2);
      }, d(t3) {
        t3 && g(e3), O2 && O2.d(), Q2 && Q2.d(), Y3 = false, r(X3);
      }};
    }
    function z2(t2) {
      let e3, n2, s3 = t2[21].size + "";
      return {c() {
        e3 = w("- "), n2 = w(s3);
      }, m(t3, s4) {
        m(t3, e3, s4), m(t3, n2, s4);
      }, p(t3, e4) {
        4 & e4 && s3 !== (s3 = t3[21].size + "") && j(n2, s3);
      }, d(t3) {
        t3 && g(e3), t3 && g(n2);
      }};
    }
    function E2(t2) {
      let e3, n2, a3 = t2[21].id + "";
      return {c() {
        e3 = $("small"), n2 = w(a3);
      }, m(t3, s3) {
        m(t3, e3, s3), h(e3, n2);
      }, p(t3, e4) {
        4 & e4 && a3 !== (a3 = t3[21].id + "") && j(n2, a3);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function I2(t2) {
      let e3, n2 = t2[21] != null && q2(t2);
      return {c() {
        n2 && n2.c(), e3 = x();
      }, m(t3, s3) {
        n2 && n2.m(t3, s3), m(t3, e3, s3);
      }, p(t3, s3) {
        t3[21] != null ? n2 ? n2.p(t3, s3) : (n2 = q2(t3), n2.c(), n2.m(e3.parentNode, e3)) : n2 && (n2.d(1), n2 = null);
      }, d(t3) {
        n2 && n2.d(t3), t3 && g(e3);
      }};
    }
    function K2(t2) {
      let e3, n2, i2, r2, d2, m2, f2, h2, v2 = t2[0].distance.text + "", y2 = t2[0].price.toFixed(2) + "";
      return {c() {
        e3 = $("tr"), n2 = $("td"), i2 = w("Toimitus, "), r2 = w(v2), d2 = _(), m2 = $("td"), f2 = w(y2), h2 = w(" \u20AC"), P(n2, "class", "label tl"), P(m2, "class", "value tr");
      }, m(t3, s3) {
        m(t3, e3, s3), h(e3, n2), h(n2, i2), h(n2, r2), h(e3, d2), h(e3, m2), h(m2, f2), h(m2, h2);
      }, p(t3, e4) {
        1 & e4 && v2 !== (v2 = t3[0].distance.text + "") && j(r2, v2), 1 & e4 && y2 !== (y2 = t3[0].price.toFixed(2) + "") && j(f2, y2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function S2(t2) {
      let e3, n2, i2, r2, d2, m2, x2, v2, y2, b2 = t2[21].title + "";
      function g2() {
        t2[14].call(m2, t2[21]);
      }
      return {c() {
        e3 = $("div"), n2 = $("label"), i2 = $("span"), r2 = w(b2), d2 = _(), m2 = $("input"), x2 = _(), P(i2, "class", "block"), P(m2, "id", t2[21].name), P(m2, "class", "w100"), P(m2, "name", t2[21].name), P(e3, "class", "item");
      }, m(s3, a3) {
        m(s3, e3, a3), h(e3, n2), h(n2, i2), h(i2, r2), h(n2, d2), h(n2, m2), E(m2, t2[2].customer[t2[21].name]), h(e3, x2), v2 || (y2 = v(m2, "input", g2), v2 = true);
      }, p(e4, n3) {
        t2 = e4, 1028 & n3 && m2.value !== t2[2].customer[t2[21].name] && E(m2, t2[2].customer[t2[21].name]);
      }, d(t3) {
        t3 && g(e3), v2 = false, y2();
      }};
    }
    function A2(t2) {
      let e3;
      function n2(t3, e4) {
        return t3[1] ? V2 : t3[0].distance ? P2 : B2;
      }
      let o3 = n2(t2), i2 = o3(t2);
      return {c() {
        e3 = $("div"), i2.c(), P(e3, "id", "payment"), P(e3, "class", "tc pad svelte-1wamewy");
      }, m(t3, n3) {
        m(t3, e3, n3), i2.m(e3, null);
      }, p(t3, s3) {
        o3 === (o3 = n2(t3)) && i2 ? i2.p(t3, s3) : (i2.d(1), i2 = o3(t3), i2 && (i2.c(), i2.m(e3, null)));
      }, d(t3) {
        t3 && g(e3), i2.d();
      }};
    }
    function B2(t2) {
      let e3, n2, i2, u2, r2 = t2[5] && Y2(t2);
      return {c() {
        r2 && r2.c(), e3 = _(), n2 = $("button"), n2.textContent = "Laske tomituskulut", P(n2, "id", "done"), P(n2, "class", "end up svelte-1wamewy"), P(n2, "name", "shipping");
      }, m(s3, a3) {
        r2 && r2.m(s3, a3), m(s3, e3, a3), m(s3, n2, a3), i2 || (u2 = v(n2, "click", t2[17]), i2 = true);
      }, p(t3, n3) {
        t3[5] ? r2 ? r2.p(t3, n3) : (r2 = Y2(t3), r2.c(), r2.m(e3.parentNode, e3)) : r2 && (r2.d(1), r2 = null);
      }, d(t3) {
        r2 && r2.d(t3), t3 && g(e3), t3 && g(n2), i2 = false, u2();
      }};
    }
    function P2(t2) {
      let e3, n2, o3;
      return {c() {
        e3 = $("button"), e3.textContent = "Vahvista tilaus", P(e3, "id", "done"), P(e3, "class", "end up svelte-1wamewy"), P(e3, "name", "done"), P(e3, "type", "submit");
      }, m(s3, a3) {
        m(s3, e3, a3), n2 || (o3 = v(e3, "click", t2[16]), n2 = true);
      }, p: t, d(t3) {
        t3 && g(e3), n2 = false, o3();
      }};
    }
    function V2(t2) {
      let e3, n2, i2, u2, d2;
      return {c() {
        e3 = $("p"), e3.textContent = "Emme toimita verkkokaupasta yli 20 km s\xE4teelle,\n							mutta voitte olla yhteydess\xE4 asiakaspalveluun.", n2 = _(), i2 = $("button"), i2.textContent = "L\xE4het\xE4 tarjouspyynt\xF6", P(i2, "id", "done"), P(i2, "class", "end up svelte-1wamewy"), P(i2, "name", "done"), P(i2, "type", "submit");
      }, m(s3, a3) {
        m(s3, e3, a3), m(s3, n2, a3), m(s3, i2, a3), u2 || (d2 = v(i2, "click", t2[15]), u2 = true);
      }, p: t, d(t3) {
        t3 && g(e3), t3 && g(n2), t3 && g(i2), u2 = false, d2();
      }};
    }
    function Y2(t2) {
      let e3, n2;
      return {c() {
        e3 = $("p"), n2 = w(t2[5]);
      }, m(t3, s3) {
        m(t3, e3, s3), h(e3, n2);
      }, p(t3, e4) {
        32 & e4 && j(n2, t3[5]);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function X2(t2) {
      let e3, n2, d2, m2 = t2[2].products[0] && H2(t2);
      return {c() {
        e3 = $("meta"), n2 = _(), m2 && m2.c(), d2 = x(), document.title = "Kassa - Tervetuloa maksamaan", P(e3, "name", "googlebot"), P(e3, "content", "noindex");
      }, m(t3, s3) {
        h(document.head, e3), m(t3, n2, s3), m2 && m2.m(t3, s3), m(t3, d2, s3);
      }, p(t3, [e4]) {
        t3[2].products[0] ? m2 ? m2.p(t3, e4) : (m2 = H2(t3), m2.c(), m2.m(d2.parentNode, d2)) : m2 && (m2.d(1), m2 = null);
      }, i: t, o: t, d(t3) {
        g(e3), t3 && g(n2), m2 && m2.d(t3), t3 && g(d2);
      }};
    }
    function D2(t2, e3, n2) {
      let s3, a3, l2, c2, o3, i2, u2;
      l(t2, e, (t3) => n2(2, l2 = t3)), l(t2, Ht, (t3) => n2(18, c2 = t3)), l(t2, a, (t3) => n2(6, o3 = t3)), l(t2, Gt, (t3) => n2(19, i2 = t3)), u2 || l2.products[0] || (window.location.replace("/"), c2()), d(a, o3 = {}, o3);
      let r2, p2, f2 = {title: "Toimitusmaksu", price: 0};
      d(e, l2.customer = {name1: "", name2: "", street: "", postal: "", area: "", phone: "", email: ""}, l2);
      let h2 = {price: [{distance: 5, price: 4.9}, {distance: 10, price: 8.9}, {distance: 20, price: 12.9}], pcs: [{amount: 5, discount: 0}, {amount: 7, discount: 1}, {amount: 10, discount: 2}, {amount: 14, discount: 3}]};
      function x2(t3, e4) {
        o(t3, e4).then((t4) => {
          t4.error ? n2(5, p2 = t4.error) : t4.distance ? n2(0, f2.distance = {text: t4.distance.text, value: t4.distance.value / 1e3}, f2) : t4.message ? (n2(4, u2 = t4.message), e.set({})) : a.set(t4), c2();
        }).catch((t4) => {
          console.log(t4);
        });
      }
      function y2(t3) {
        d(e, l2.products = l2.products.filter((e4, n3) => n3 !== parseInt(t3) && e4 != null).sort(), l2);
      }
      let b2 = [{title: "Etunimi", type: "text", name: "name1", min: 2, max: 30, req: 1}, {title: "Sukunimi", type: "text", name: "name2", min: 2, max: 30, req: 1}, {title: "Puhelin", type: "text", name: "phone", min: 5, max: 15, req: 1}, {title: "S\xE4hk\xF6posti", type: "email", name: "email", min: 6, max: 100, req: 1}, {title: "Katuosoite", type: "text", name: "street", min: 5, max: 50}, {title: "Postinumero", type: "text", name: "postal", min: 5, max: 5}, {title: "Kaupunki", type: "text", name: "area", min: 3, max: 50}];
      function w2(t3) {
        f2 && d(e, l2.delivery = f2, l2), d(e, l2.total = s3, l2), d(e, l2.vat = a3, l2), parseInt(t3) == 2 ? x2("offer", l2) : i2("/maksu"), c2();
      }
      return t2.$$.update = () => {
        7 & t2.$$.dirty && f2.distance && (f2.distance.value > 20 ? n2(1, r2 = 1) : (r2 && n2(1, r2 = ""), h2.price.forEach(function(t3) {
          if (f2.distance.value <= t3.distance)
            return n2(0, f2.price = t3.price, f2), true;
        }), h2.pcs.forEach(function(t3) {
          if (l2.amount <= t3.amount)
            return n2(0, f2.price = f2.price - t3.discount, f2), true;
        }))), 5 & t2.$$.dirty && n2(3, s3 = l2.total + f2.price), 8 & t2.$$.dirty && n2(7, a3 = 0.1 * s3);
      }, [f2, r2, l2, s3, u2, p2, o3, a3, x2, y2, b2, w2, function(t3) {
        l2.products[t3].amount = k(this.value), e.set(l2);
      }, (t3) => y2(t3), function(t3) {
        l2.customer[t3.name] = this.value, e.set(l2), n2(10, b2);
      }, () => w2(2), () => w2(1), () => x2("distance", {address: l2.customer.street + "+" + l2.customer.postal + "+" + l2.customer.area})];
    }
    var kassa_7997fa0f_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, D2, X2, i, {});
      }
    };
    var kassa_7997fa0f_default2 = kassa_7997fa0f_default;
  });

  // dist/build/maksu-1fe1d0bf.js
  var require_maksu_1fe1d0bf = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => maksu_1fe1d0bf_default2
    });
    function b2(t2, e3, n2) {
      const l2 = t2.slice();
      return l2[6] = e3[n2], l2;
    }
    function w2(t2) {
      let e3;
      function n2(t3, e4) {
        return t3[0] == 0 ? k2 : F2;
      }
      let r2 = n2(t2), c2 = r2(t2);
      return {c() {
        e3 = $("div"), c2.c(), P(e3, "id", "checkout"), P(e3, "class", "container rel");
      }, m(t3, n3) {
        m(t3, e3, n3), c2.m(e3, null);
      }, p(t3, l2) {
        r2 === (r2 = n2(t3)) && c2 ? c2.p(t3, l2) : (c2.d(1), c2 = r2(t3), c2 && (c2.c(), c2.m(e3, null)));
      }, d(t3) {
        t3 && g(e3), c2.d();
      }};
    }
    function F2(t2) {
      let e3, n2, s3;
      function c2(t3, e4) {
        return typeof t3[0] != "number" ? I2 : C2;
      }
      let i2 = c2(t2), u2 = i2(t2);
      return {c() {
        e3 = $("h1"), e3.textContent = "Kiitos tilauksesta", n2 = _(), u2.c(), s3 = x();
      }, m(t3, l2) {
        m(t3, e3, l2), m(t3, n2, l2), u2.m(t3, l2), m(t3, s3, l2);
      }, p(t3, e4) {
        i2 === (i2 = c2(t3)) && u2 ? u2.p(t3, e4) : (u2.d(1), u2 = i2(t3), u2 && (u2.c(), u2.m(s3.parentNode, s3)));
      }, d(t3) {
        t3 && g(e3), t3 && g(n2), u2.d(t3), t3 && g(s3);
      }};
    }
    function k2(t2) {
      let e3, n2, r2, c2, i2, f2, v2, h2, x2, y2, g2, b3, w3, F3, k3, C3, I3, S3, A3, N3, B2, K2, L2, V2, q2, z2, D2, E2, G2, H2, J2, O2, P2, Q2, R2, U2, W2, X2, Y2, Z2, $2, _2, tt2, et2, nt2 = t2[2].customer.name1 + "", lt2 = t2[2].customer.name2 + "", st2 = t2[2].customer.street + "", at2 = t2[2].customer.postal + "", ot2 = t2[2].customer.area + "", rt2 = t2[2].customer.phone + "", ct2 = t2[2].customer.email + "", it2 = t2[2].total.toFixed(2) + "", dt2 = t2[2].total.toFixed(2) + "", ut2 = t2[2].delivery && j2(t2), mt2 = t2[2].vat && M2(t2), pt2 = t2[1] && T2(t2);
      return {c() {
        e3 = $("div"), n2 = $("div"), r2 = $("h2"), r2.textContent = "Asiakastiedot", c2 = _(), i2 = $("p"), f2 = w(nt2), v2 = _(), h2 = w(lt2), x2 = $("br"), y2 = _(), g2 = w(st2), b3 = $("br"), w3 = _(), F3 = w(at2), k3 = _(), C3 = w(ot2), I3 = $("br"), S3 = _(), A3 = w(rt2), N3 = $("br"), B2 = _(), K2 = w(ct2), L2 = _(), V2 = $("div"), q2 = $("h2"), q2.textContent = "Maksutiedot", z2 = _(), D2 = $("table"), E2 = $("tbody"), G2 = $("tr"), H2 = $("td"), H2.textContent = "Tuotteet yhteens\xE4", J2 = _(), O2 = $("td"), P2 = w(it2), Q2 = w(" \u20AC"), R2 = _(), ut2 && ut2.c(), U2 = _(), mt2 && mt2.c(), W2 = _(), X2 = $("tr"), Y2 = $("td"), Y2.textContent = "Tilaus yhteens\xE4", Z2 = _(), $2 = $("td"), _2 = w(dt2), tt2 = w(" \u20AC"), et2 = _(), pt2 && pt2.c(), P(H2, "class", "label tl"), P(O2, "class", "value tr"), P(Y2, "class", "label tl"), P($2, "class", "value tr"), P(D2, "class", "w100"), P(V2, "id", "paymentInfo"), P(V2, "class", "item svelte-p1wt4e"), P(n2, "class", "items"), P(e3, "id", "paymentInfo"), P(e3, "class", "grid svelte-p1wt4e");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2), h(n2, r2), h(n2, c2), h(n2, i2), h(i2, f2), h(i2, v2), h(i2, h2), h(i2, x2), h(i2, y2), h(i2, g2), h(i2, b3), h(i2, w3), h(i2, F3), h(i2, k3), h(i2, C3), h(i2, I3), h(i2, S3), h(i2, A3), h(i2, N3), h(i2, B2), h(i2, K2), h(n2, L2), h(n2, V2), h(V2, q2), h(V2, z2), h(V2, D2), h(D2, E2), h(E2, G2), h(G2, H2), h(G2, J2), h(G2, O2), h(O2, P2), h(O2, Q2), h(E2, R2), ut2 && ut2.m(E2, null), h(E2, U2), mt2 && mt2.m(E2, null), h(E2, W2), h(E2, X2), h(X2, Y2), h(X2, Z2), h(X2, $2), h($2, _2), h($2, tt2), h(e3, et2), pt2 && pt2.m(e3, null);
      }, p(t3, n3) {
        4 & n3 && nt2 !== (nt2 = t3[2].customer.name1 + "") && j(f2, nt2), 4 & n3 && lt2 !== (lt2 = t3[2].customer.name2 + "") && j(h2, lt2), 4 & n3 && st2 !== (st2 = t3[2].customer.street + "") && j(g2, st2), 4 & n3 && at2 !== (at2 = t3[2].customer.postal + "") && j(F3, at2), 4 & n3 && ot2 !== (ot2 = t3[2].customer.area + "") && j(C3, ot2), 4 & n3 && rt2 !== (rt2 = t3[2].customer.phone + "") && j(A3, rt2), 4 & n3 && ct2 !== (ct2 = t3[2].customer.email + "") && j(K2, ct2), 4 & n3 && it2 !== (it2 = t3[2].total.toFixed(2) + "") && j(P2, it2), t3[2].delivery ? ut2 ? ut2.p(t3, n3) : (ut2 = j2(t3), ut2.c(), ut2.m(E2, U2)) : ut2 && (ut2.d(1), ut2 = null), t3[2].vat ? mt2 ? mt2.p(t3, n3) : (mt2 = M2(t3), mt2.c(), mt2.m(E2, W2)) : mt2 && (mt2.d(1), mt2 = null), 4 & n3 && dt2 !== (dt2 = t3[2].total.toFixed(2) + "") && j(_2, dt2), t3[1] ? pt2 ? pt2.p(t3, n3) : (pt2 = T2(t3), pt2.c(), pt2.m(e3, null)) : pt2 && (pt2.d(1), pt2 = null);
      }, d(t3) {
        t3 && g(e3), ut2 && ut2.d(), mt2 && mt2.d(), pt2 && pt2.d();
      }};
    }
    function C2(t2) {
      let e3, n2, s3, r2, c2, i2;
      return {c() {
        e3 = $("p"), n2 = w("Tilaus on vahvistettu ja tilaustiedot on l\xE4hetetty\n					s\xE4hk\xF6postiin.\n					"), s3 = $("br"), r2 = w("\n					Tilausnumerosi on "), c2 = w(t2[0]), i2 = w(".");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2), h(e3, s3), h(e3, r2), h(e3, c2), h(e3, i2);
      }, p(t3, e4) {
        1 & e4 && j(c2, t3[0]);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function I2(t2) {
      let e3, n2;
      return {c() {
        e3 = $("p"), n2 = w(t2[0]);
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2);
      }, p(t3, e4) {
        1 & e4 && j(n2, t3[0]);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function j2(t2) {
      let e3, n2, r2, c2, i2, f2, v2, h2, x2 = t2[2].delivery.distance.text + "", y2 = t2[2].delivery.price.toFixed(2) + "";
      return {c() {
        e3 = $("tr"), n2 = $("td"), r2 = w("Toimitus, "), c2 = w(x2), i2 = _(), f2 = $("td"), v2 = w(y2), h2 = w(" \u20AC"), P(n2, "class", "label tl"), P(f2, "class", "value tr");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2), h(n2, r2), h(n2, c2), h(e3, i2), h(e3, f2), h(f2, v2), h(f2, h2);
      }, p(t3, e4) {
        4 & e4 && x2 !== (x2 = t3[2].delivery.distance.text + "") && j(c2, x2), 4 & e4 && y2 !== (y2 = t3[2].delivery.price.toFixed(2) + "") && j(v2, y2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function M2(t2) {
      let e3, n2, r2, c2, i2, f2, v2 = t2[2].vat.toFixed(2) + "";
      return {c() {
        e3 = $("tr"), n2 = $("td"), n2.textContent = "ALV", r2 = _(), c2 = $("td"), i2 = w(v2), f2 = w(" \u20AC"), P(n2, "class", "label tl"), P(c2, "class", "value tr");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2), h(e3, r2), h(e3, c2), h(c2, i2), h(c2, f2);
      }, p(t3, e4) {
        4 & e4 && v2 !== (v2 = t3[2].vat.toFixed(2) + "") && j(i2, v2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function T2(t2) {
      let e3, n2, r2, c2, i2 = t2[1], u2 = [];
      for (let e4 = 0; e4 < i2.length; e4 += 1)
        u2[e4] = S2(b2(t2, i2, e4));
      return {c() {
        e3 = $("div"), n2 = $("h2"), n2.textContent = "Maksuvaihtoehdot", r2 = _(), c2 = $("div");
        for (let t3 = 0; t3 < u2.length; t3 += 1)
          u2[t3].c();
        P(c2, "id", "methods"), P(e3, "id", "paymentMethods"), P(e3, "class", "tc svelte-p1wt4e");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2), h(e3, r2), h(e3, c2);
        for (let t4 = 0; t4 < u2.length; t4 += 1)
          u2[t4].m(c2, null);
      }, p(t3, e4) {
        if (10 & e4) {
          let n3;
          for (i2 = t3[1], n3 = 0; n3 < i2.length; n3 += 1) {
            const l2 = b2(t3, i2, n3);
            u2[n3] ? u2[n3].p(l2, e4) : (u2[n3] = S2(l2), u2[n3].c(), u2[n3].m(c2, null));
          }
          for (; n3 < u2.length; n3 += 1)
            u2[n3].d(1);
          u2.length = i2.length;
        }
      }, d(t3) {
        t3 && g(e3), y(u2, t3);
      }};
    }
    function S2(t2) {
      let e3, n2, r2, c2, i2, v2, h2, x2, y2, g2, b3, w3, F3 = t2[6].name + "";
      function k3() {
        return t2[4](t2[6]);
      }
      return {c() {
        e3 = $("button"), n2 = $("figure"), r2 = $("img"), v2 = _(), h2 = $("figcaption"), x2 = w(F3), y2 = _(), r2.src !== (c2 = t2[6].img) && P(r2, "src", c2), P(r2, "alt", i2 = t2[6].name), P(e3, "class", "inl noBor svelte-p1wt4e"), P(e3, "name", "paymentMethod"), e3.value = g2 = t2[6].value;
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, n2), h(n2, r2), h(n2, v2), h(n2, h2), h(h2, x2), h(e3, y2), b3 || (w3 = v(e3, "click", k3), b3 = true);
      }, p(n3, l2) {
        t2 = n3, 2 & l2 && r2.src !== (c2 = t2[6].img) && P(r2, "src", c2), 2 & l2 && i2 !== (i2 = t2[6].name) && P(r2, "alt", i2), 2 & l2 && F3 !== (F3 = t2[6].name + "") && j(x2, F3), 2 & l2 && g2 !== (g2 = t2[6].value) && (e3.value = g2);
      }, d(t3) {
        t3 && g(e3), b3 = false, w3();
      }};
    }
    function A2(t2) {
      let e3, n2 = t2[2].products && w2(t2);
      return {c() {
        n2 && n2.c(), e3 = x();
      }, m(t3, l2) {
        n2 && n2.m(t3, l2), m(t3, e3, l2);
      }, p(t3, [l2]) {
        t3[2].products ? n2 ? n2.p(t3, l2) : (n2 = w2(t3), n2.c(), n2.m(e3.parentNode, e3)) : n2 && (n2.d(1), n2 = null);
      }, i: t, o: t, d(t3) {
        n2 && n2.d(t3), t3 && g(e3);
      }};
    }
    function N2(t2, e3, n2) {
      let l2, s3, a3;
      l(t2, e, (t3) => n2(2, s3 = t3)), l(t2, Ht, (t3) => n2(5, a3 = t3));
      let o3 = 0;
      function r2(t3, e4 = "") {
        let r3;
        e4 ? r3 = {paymentState: t3, paymentMethod: e4, order: s3.orderId} : (r3 = s3, r3.paymentState = t3), o("payment", r3).then((t4) => {
          t4.redirect || t4.message ? t4.redirect !== void 0 ? window.location.replace(t4.redirect) : t4.message && n2(0, o3 = t4.message) : (d(e, s3.orderId = t4.orderId, s3), d(e, s3.total = t4.total, s3), d(e, s3.vat = t4.vat, s3), n2(1, l2 = t4.methods)), a3();
        }).catch((t4) => {
          console.log(t4);
        });
      }
      if (s3 && s3.products[0] || (window.location.replace("/"), a3()), r2("methods"), window.location.search) {
        let t3 = window.location.search.substr(1).split("=");
        o3 = t3[0] == "id" ? parseInt(t3[1]) : 0, a3();
      }
      return n2(1, l2 = []), [o3, l2, s3, r2, (t3) => r2("create", t3.value)];
    }
    var maksu_1fe1d0bf_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, N2, A2, i, {});
      }
    };
    var maksu_1fe1d0bf_default2 = maksu_1fe1d0bf_default;
  });

  // dist/build/_layout-0ac71bbb.js
  var require_layout_0ac71bbb = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_0ac71bbb_default2
    });
    function K2(t2) {
      let e3, s3, p2, h2, g2, f2, v2, $2, w2, y2, b2, k2 = t2[0].amount + "";
      return {c() {
        e3 = $("div"), s3 = $("a"), p2 = b("svg"), h2 = b("title"), g2 = w("Jatka kassalle"), f2 = b("path"), v2 = _(), $2 = $("div"), w2 = $("div"), y2 = w(k2), P(f2, "d", "M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"), P(p2, "xmlns", "http://www.w3.org/2000/svg"), P(p2, "width", "38"), P(p2, "height", "38"), P(p2, "viewBox", "0 0 24 24"), P(w2, "class", b2 = "grid cell bold " + t2[2]), P($2, "id", "cartBall"), P($2, "class", "abs"), P(s3, "class", "grid cell"), P(s3, "href", t2[1]), P(s3, "rel", "nofollow"), P(e3, "id", "cartIcon"), P(e3, "class", "rel");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, s3), h(s3, p2), h(p2, h2), h(h2, g2), h(p2, f2), h(s3, v2), h(s3, $2), h($2, w2), h(w2, y2);
      }, p(t3, [e4]) {
        1 & e4 && k2 !== (k2 = t3[0].amount + "") && j(y2, k2), 4 & e4 && b2 !== (b2 = "grid cell bold " + t3[2]) && P(w2, "class", b2), 2 & e4 && P(s3, "href", t3[1]);
      }, i: t, o: t, d(t3) {
        t3 && g(e3);
      }};
    }
    function S2(t2, e3, s3) {
      let l2, n2, a3;
      return l(t2, e, (t3) => s3(0, a3 = t3)), t2.$$.update = () => {
        1 & t2.$$.dirty && s3(1, l2 = a3.amount > 0 ? "/kassa" : "/"), 1 & t2.$$.dirty && s3(2, n2 = a3.amount > 0 ? "bgo tw" : "bgw");
      }, [a3, l2, n2];
    }
    var Y2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, S2, K2, i, {});
      }
    };
    function q2(t2, e3, s3) {
      const l2 = t2.slice();
      return l2[8] = e3[s3], l2;
    }
    function D2(t2) {
      let e3, s3, n2, a3, u2, m2 = t2[1][0] && G2(t2);
      return {c() {
        e3 = $("div"), s3 = $("input"), n2 = _(), m2 && m2.c(), P(s3, "type", "search"), P(s3, "placeholder", "hakusanat"), P(s3, "minlength", "3"), P(s3, "maxlength", "50"), P(e3, "id", "searchForm"), P(e3, "class", "abs");
      }, m(l2, c2) {
        m(l2, e3, c2), h(e3, s3), E(s3, t2[0]), h(e3, n2), m2 && m2.m(e3, null), a3 || (u2 = v(s3, "input", t2[4]), a3 = true);
      }, p(t3, l2) {
        1 & l2 && E(s3, t3[0]), t3[1][0] ? m2 ? m2.p(t3, l2) : (m2 = G2(t3), m2.c(), m2.m(e3, null)) : m2 && (m2.d(1), m2 = null);
      }, d(t3) {
        t3 && g(e3), m2 && m2.d(), a3 = false, u2();
      }};
    }
    function G2(t2) {
      let e3, s3 = t2[1], n2 = [];
      for (let e4 = 0; e4 < s3.length; e4 += 1)
        n2[e4] = P2(q2(t2, s3, e4));
      return {c() {
        e3 = $("div");
        for (let t3 = 0; t3 < n2.length; t3 += 1)
          n2[t3].c();
        P(e3, "id", "results"), P(e3, "class", "bgw tl");
      }, m(t3, s4) {
        m(t3, e3, s4);
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].m(e3, null);
      }, p(t3, l2) {
        if (6 & l2) {
          let a3;
          for (s3 = t3[1], a3 = 0; a3 < s3.length; a3 += 1) {
            const c2 = q2(t3, s3, a3);
            n2[a3] ? n2[a3].p(c2, l2) : (n2[a3] = P2(c2), n2[a3].c(), n2[a3].m(e3, null));
          }
          for (; a3 < n2.length; a3 += 1)
            n2[a3].d(1);
          n2.length = s3.length;
        }
      }, d(t3) {
        t3 && g(e3), y(n2, t3);
      }};
    }
    function P2(t2) {
      let e3, s3, n2, c2, m2, p2 = t2[8].title + "";
      return {c() {
        e3 = $("a"), s3 = w(p2), P(e3, "class", "block"), P(e3, "href", n2 = t2[8].path);
      }, m(l2, n3) {
        m(l2, e3, n3), h(e3, s3), c2 || (m2 = v(e3, "click", t2[5]), c2 = true);
      }, p(t3, l2) {
        2 & l2 && p2 !== (p2 = t3[8].title + "") && j(s3, p2), 2 & l2 && n2 !== (n2 = t3[8].path) && P(e3, "href", n2);
      }, d(t3) {
        t3 && g(e3), c2 = false, m2();
      }};
    }
    function V2(t2) {
      let e3, s3, n2, a3, u2, p2 = t2[2] && D2(t2);
      return {c() {
        e3 = $("div"), s3 = $("button"), s3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"></path></svg>', n2 = _(), p2 && p2.c(), P(s3, "class", "grid cell noBor"), P(e3, "id", "searchIcon"), P(e3, "class", "rel");
      }, m(l2, c2) {
        m(l2, e3, c2), h(e3, s3), h(e3, n2), p2 && p2.m(e3, null), a3 || (u2 = v(s3, "click", t2[3]), a3 = true);
      }, p(t3, [s4]) {
        t3[2] ? p2 ? p2.p(t3, s4) : (p2 = D2(t3), p2.c(), p2.m(e3, null)) : p2 && (p2.d(1), p2 = null);
      }, i: t, o: t, d(t3) {
        t3 && g(e3), p2 && p2.d(), a3 = false, u2();
      }};
    }
    function X2(t2, e3, s3) {
      let l2, n2, a3, c2;
      l(t2, Ht, (t3) => s3(6, a3 = t3));
      return t2.$$.update = () => {
        1 & t2.$$.dirty && l2.length >= 3 && function() {
          let t3 = l2.replace(/[&\/\\#,()$~%@^'"!:*?<>{}]/g, "");
          t3 = t3.replace(" ", "+"), o("?search=" + t3).then((t4) => {
            s3(1, n2 = t4);
          }).catch((t4) => {
            console.log(t4);
          }), a3();
        }(), 3 & t2.$$.dirty && l2.length < 3 && n2[0] && s3(1, n2 = []);
      }, s3(0, l2 = ""), s3(1, n2 = []), [l2, n2, c2, () => s3(2, c2 = !c2), function() {
        l2 = this.value, s3(0, l2);
      }, () => s3(2, c2 = "")];
    }
    var Q2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, X2, V2, i, {});
      }
    };
    function R2(t2, e3, s3) {
      const l2 = t2.slice();
      return l2[6] = e3[s3], l2;
    }
    function U2(t2) {
      let e3, s3, n2, a3, u2, m2, p2, h2, v2, $2, z2, M2, j2, L2, B2, H2, N2, A2, E2, O2, I2, C2, F2, J2, K3, S3, q3, D3;
      function G3(t3, e4) {
        return t3[3] ? W2 : Z2;
      }
      let P3 = G3(t2), V3 = P3(t2), X3 = t2[0].nav, U3 = [];
      for (let e4 = 0; e4 < X3.length; e4 += 1)
        U3[e4] = _2(R2(t2, X3, e4));
      return F2 = new Q2({}), K3 = new Y2({}), {c() {
        e3 = $("header"), s3 = $("div"), n2 = $("a"), a3 = $("picture"), u2 = $("source"), p2 = _(), h2 = $("source"), $2 = _(), z2 = $("img"), L2 = _(), B2 = $("button"), V3.c(), H2 = _(), N2 = $("nav"), A2 = $("ul"), E2 = $("li"), E2.innerHTML = '<a class="nav-link block" href="/" rel="home">Etusivu</a>', O2 = _();
        for (let t3 = 0; t3 < U3.length; t3 += 1)
          U3[t3].c();
        I2 = _(), C2 = $("div"), rt(F2.$$.fragment), J2 = _(), rt(K3.$$.fragment), P(u2, "srcset", m2 = t2[0].site.logo[1]), P(u2, "type", "image/webp"), P(h2, "srcset", v2 = t2[0].site.logo[0]), P(h2, "type", "image/jpeg"), z2.src !== (M2 = t2[0].site.logo[0]) && P(z2, "src", M2), P(z2, "alt", j2 = t2[0].site.title), P(a3, "class", "block"), P(n2, "id", "logo"), P(n2, "class", "block bgw"), P(n2, "href", "/"), P(n2, "rel", "home"), P(B2, "id", "menuToggle"), P(B2, "class", "noBor m0 abs"), P(B2, "title", "Open/close main navigation"), P(E2, "class", "nav-item"), P(A2, "class", "m0"), P(N2, "id", "menu"), O(N2, "active", t2[3]), P(C2, "id", "icons"), P(C2, "class", "abs grid"), P(s3, "class", "content mx"), P(e3, "class", "block w100 bgw"), O(e3, "small", t2[2]);
      }, m(l2, c2) {
        m(l2, e3, c2), h(e3, s3), h(s3, n2), h(n2, a3), h(a3, u2), h(a3, p2), h(a3, h2), h(a3, $2), h(a3, z2), h(s3, L2), h(s3, B2), V3.m(B2, null), h(s3, H2), h(s3, N2), h(N2, A2), h(A2, E2), h(A2, O2);
        for (let t3 = 0; t3 < U3.length; t3 += 1)
          U3[t3].m(A2, null);
        h(s3, I2), h(s3, C2), st(F2, C2, null), h(C2, J2), st(K3, C2, null), S3 = true, q3 || (D3 = v(B2, "click", t2[5]), q3 = true);
      }, p(t3, s4) {
        if ((!S3 || 1 & s4 && m2 !== (m2 = t3[0].site.logo[1])) && P(u2, "srcset", m2), (!S3 || 1 & s4 && v2 !== (v2 = t3[0].site.logo[0])) && P(h2, "srcset", v2), (!S3 || 1 & s4 && z2.src !== (M2 = t3[0].site.logo[0])) && P(z2, "src", M2), (!S3 || 1 & s4 && j2 !== (j2 = t3[0].site.title)) && P(z2, "alt", j2), P3 !== (P3 = G3(t3)) && (V3.d(1), V3 = P3(t3), V3 && (V3.c(), V3.m(B2, null))), 1 & s4) {
          let e4;
          for (X3 = t3[0].nav, e4 = 0; e4 < X3.length; e4 += 1) {
            const l2 = R2(t3, X3, e4);
            U3[e4] ? U3[e4].p(l2, s4) : (U3[e4] = _2(l2), U3[e4].c(), U3[e4].m(A2, null));
          }
          for (; e4 < U3.length; e4 += 1)
            U3[e4].d(1);
          U3.length = X3.length;
        }
        8 & s4 && O(N2, "active", t3[3]), 4 & s4 && O(e3, "small", t3[2]);
      }, i(t3) {
        S3 || (Y(F2.$$.fragment, t3), Y(K3.$$.fragment, t3), S3 = true);
      }, o(t3) {
        tt(F2.$$.fragment, t3), tt(K3.$$.fragment, t3), S3 = false;
      }, d(t3) {
        t3 && g(e3), V3.d(), y(U3, t3), it(F2), it(K3), q3 = false, D3();
      }};
    }
    function W2(t2) {
      let e3, s3;
      return {c() {
        e3 = b("svg"), s3 = b("path"), P(s3, "d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"), P(e3, "xmlns", "http://www.w3.org/2000/svg"), P(e3, "width", "24"), P(e3, "height", "24"), P(e3, "viewBox", "0 0 24 24");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, s3);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function Z2(t2) {
      let e3, s3, l2, c2, u2, m2;
      return {c() {
        e3 = b("svg"), s3 = b("title"), l2 = w("Avaa ja sulkee mobiilivalikon"), c2 = b("rect"), u2 = b("rect"), m2 = b("rect"), P(c2, "width", "100"), P(c2, "height", "20"), P(u2, "y", "30"), P(u2, "width", "100"), P(u2, "height", "20"), P(m2, "y", "60"), P(m2, "width", "100"), P(m2, "height", "20"), P(e3, "viewBox", "0 0 100 80"), P(e3, "width", "30"), P(e3, "height", "30");
      }, m(t3, n2) {
        m(t3, e3, n2), h(e3, s3), h(s3, l2), h(e3, c2), h(e3, u2), h(e3, m2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function _2(t2) {
      let e3, s3, n2, a3, u2 = t2[6].title + "";
      return {c() {
        e3 = $("li"), s3 = $("a"), a3 = _(), P(s3, "class", "nav-link block"), P(s3, "href", n2 = t2[6].path), P(e3, "class", "nav-item");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, s3), s3.innerHTML = u2, h(e3, a3);
      }, p(t3, e4) {
        1 & e4 && u2 !== (u2 = t3[6].title + "") && (s3.innerHTML = u2), 1 & e4 && n2 !== (n2 = t3[6].path) && P(s3, "href", n2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function tt2(t2) {
      let e3, s3, l2, n2, a3, c2 = false, i2 = () => {
        c2 = false;
      };
      K(t2[4]);
      let o3 = t2[0] && t2[0].nav && U2(t2);
      return {c() {
        o3 && o3.c(), s3 = x();
      }, m(u2, m2) {
        o3 && o3.m(u2, m2), m(u2, s3, m2), l2 = true, n2 || (a3 = v(window, "scroll", () => {
          c2 = true, clearTimeout(e3), e3 = setTimeout(i2, 100), t2[4]();
        }), n2 = true);
      }, p(t3, [l3]) {
        2 & l3 && !c2 && (c2 = true, clearTimeout(e3), scrollTo(window.pageXOffset, t3[1]), e3 = setTimeout(i2, 100)), t3[0] && t3[0].nav ? o3 ? (o3.p(t3, l3), 1 & l3 && Y(o3, 1)) : (o3 = U2(t3), o3.c(), Y(o3, 1), o3.m(s3.parentNode, s3)) : o3 && (Z(), tt(o3, 1, 1, () => {
          o3 = null;
        }), X());
      }, i(t3) {
        l2 || (Y(o3), l2 = true);
      }, o(t3) {
        tt(o3), l2 = false;
      }, d(t3) {
        o3 && o3.d(t3), t3 && g(s3), n2 = false, a3();
      }};
    }
    function et2(t2, e3, s3) {
      let l2, n2, a3, {data: c2} = e3;
      return t2.$$set = (t3) => {
        "data" in t3 && s3(0, c2 = t3.data);
      }, t2.$$.update = () => {
        2 & t2.$$.dirty && s3(2, n2 = l2 > 100 || "");
      }, [c2, l2, n2, a3, function() {
        s3(1, l2 = window.pageYOffset);
      }, () => s3(3, a3 = !a3)];
    }
    var st2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, et2, tt2, i, {data: 0});
      }
    };
    function lt2(t2) {
      let e3, s3, n2, a3, u2, m2, p2, h2, g2, f2, v2, $2;
      function y2(t3, e4) {
        return t3[0].cat ? at2 : nt2;
      }
      e3 = new st2({props: {data: t2[1]}});
      let M2 = y2(t2), j2 = M2(t2);
      const B2 = t2[6].default, N2 = u(B2, t2, t2[5], null);
      let A2 = t2[3].amount > 0 && t2[4].path != "/kassa" && t2[4].path != "/maksu" && ct2(t2), E2 = t2[1].site && t2[1].site.payment && it2(t2);
      return {c() {
        rt(e3.$$.fragment), s3 = _(), n2 = $("main"), a3 = $("div"), j2.c(), u2 = _(), m2 = $("div"), p2 = $("div"), N2 && N2.c(), g2 = _(), A2 && A2.c(), f2 = _(), E2 && E2.c(), v2 = x(), P(a3, "id", "hero"), P(a3, "class", "grid tw up tc"), P(p2, "class", "container mx"), P(m2, "id", "content"), P(m2, "class", "bgw py"), P(n2, "class", "block"), P(n2, "style", h2 = "background-image:url(" + t2[1].site.hero[0] + ")");
      }, m(t3, l2) {
        st(e3, t3, l2), m(t3, s3, l2), m(t3, n2, l2), h(n2, a3), j2.m(a3, null), h(n2, u2), h(n2, m2), h(m2, p2), N2 && N2.m(p2, null), m(t3, g2, l2), A2 && A2.m(t3, l2), m(t3, f2, l2), E2 && E2.m(t3, l2), m(t3, v2, l2), $2 = true;
      }, p(t3, s4) {
        const l2 = {};
        2 & s4 && (l2.data = t3[1]), e3.$set(l2), M2 === (M2 = y2(t3)) && j2 ? j2.p(t3, s4) : (j2.d(1), j2 = M2(t3), j2 && (j2.c(), j2.m(a3, null))), N2 && N2.p && 32 & s4 && f(N2, B2, t3, t3[5], s4, null, null), (!$2 || 2 & s4 && h2 !== (h2 = "background-image:url(" + t3[1].site.hero[0] + ")")) && P(n2, "style", h2), t3[3].amount > 0 && t3[4].path != "/kassa" && t3[4].path != "/maksu" ? A2 ? A2.p(t3, s4) : (A2 = ct2(t3), A2.c(), A2.m(f2.parentNode, f2)) : A2 && (A2.d(1), A2 = null), t3[1].site && t3[1].site.payment ? E2 ? E2.p(t3, s4) : (E2 = it2(t3), E2.c(), E2.m(v2.parentNode, v2)) : E2 && (E2.d(1), E2 = null);
      }, i(t3) {
        $2 || (Y(e3.$$.fragment, t3), Y(N2, t3), $2 = true);
      }, o(t3) {
        tt(e3.$$.fragment, t3), tt(N2, t3), $2 = false;
      }, d(t3) {
        it(e3, t3), t3 && g(s3), t3 && g(n2), j2.d(), N2 && N2.d(t3), t3 && g(g2), A2 && A2.d(t3), t3 && g(f2), E2 && E2.d(t3), t3 && g(v2);
      }};
    }
    function nt2(t2) {
      let e3, s3, n2, i2, m2, p2, h2 = t2[1].site.title + "", g2 = t2[1].site.slogan + "";
      return {c() {
        e3 = $("div"), s3 = $("h1"), n2 = w(h2), i2 = _(), m2 = $("h3"), p2 = w(g2);
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, s3), h(s3, n2), h(e3, i2), h(e3, m2), h(m2, p2);
      }, p(t3, e4) {
        2 & e4 && h2 !== (h2 = t3[1].site.title + "") && j(n2, h2), 2 & e4 && g2 !== (g2 = t3[1].site.slogan + "") && j(p2, g2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function at2(t2) {
      let e3, s3 = t2[2].title + "";
      return {c() {
        e3 = $("h1");
      }, m(t3, l2) {
        m(t3, e3, l2), e3.innerHTML = s3;
      }, p(t3, l2) {
        4 & l2 && s3 !== (s3 = t3[2].title + "") && (e3.innerHTML = s3);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function ct2(t2) {
      let e3, s3, n2, m2, p2, h2, g2, f2, v2, $2, w2, y2, b2, k2 = t2[3].amount + "", x2 = t2[3].total + "";
      return {c() {
        e3 = $("div"), s3 = $("div"), n2 = $("div"), m2 = w("Tuotteita: "), p2 = w(k2), h2 = w(" kpl"), g2 = _(), f2 = $("div"), v2 = w("Yhteens\xE4: "), $2 = w(x2), w2 = w(" \u20AC"), y2 = _(), b2 = $("a"), b2.textContent = "Kassalle", P(n2, "id", "cartAmount"), P(f2, "id", "cartAmount"), P(b2, "class", "grid"), P(b2, "href", "/kassa"), P(b2, "rel", "nofollow"), P(e3, "id", "cart"), P(e3, "class", "grid");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, s3), h(s3, n2), h(n2, m2), h(n2, p2), h(n2, h2), h(s3, g2), h(s3, f2), h(f2, v2), h(f2, $2), h(f2, w2), h(e3, y2), h(e3, b2);
      }, p(t3, e4) {
        8 & e4 && k2 !== (k2 = t3[3].amount + "") && j(p2, k2), 8 & e4 && x2 !== (x2 = t3[3].total + "") && j($2, x2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function it2(t2) {
      let e3, s3, n2, a3, u2, m2, p2, h2, g2, f2, v2;
      return {c() {
        e3 = $("footer"), s3 = $("div"), n2 = $("picture"), a3 = $("source"), m2 = _(), p2 = $("source"), g2 = _(), f2 = $("img"), a3.src !== (u2 = t2[1].site.payment[1]) && P(a3, "src", u2), P(a3, "type", "image/webp"), p2.src !== (h2 = t2[1].site.payment[0]) && P(p2, "src", h2), P(p2, "type", "image/jpeg"), P(f2, "class", "inl"), f2.src !== (v2 = t2[1].site.payment[0]) && P(f2, "src", v2), P(f2, "alt", "Visma Pay"), P(n2, "class", "inl"), P(s3, "class", "container mx pad"), P(e3, "class", "tc");
      }, m(t3, l2) {
        m(t3, e3, l2), h(e3, s3), h(s3, n2), h(n2, a3), h(n2, m2), h(n2, p2), h(n2, g2), h(n2, f2);
      }, p(t3, e4) {
        2 & e4 && a3.src !== (u2 = t3[1].site.payment[1]) && P(a3, "src", u2), 2 & e4 && p2.src !== (h2 = t3[1].site.payment[0]) && P(p2, "src", h2), 2 & e4 && f2.src !== (v2 = t3[1].site.payment[0]) && P(f2, "src", v2);
      }, d(t3) {
        t3 && g(e3);
      }};
    }
    function rt2(t2) {
      let e3, s3, l2 = t2[1] && t2[1].site && lt2(t2);
      return {c() {
        l2 && l2.c(), e3 = x();
      }, m(t3, n2) {
        l2 && l2.m(t3, n2), m(t3, e3, n2), s3 = true;
      }, p(t3, [s4]) {
        t3[1] && t3[1].site ? l2 ? (l2.p(t3, s4), 2 & s4 && Y(l2, 1)) : (l2 = lt2(t3), l2.c(), Y(l2, 1), l2.m(e3.parentNode, e3)) : l2 && (Z(), tt(l2, 1, 1, () => {
          l2 = null;
        }), X());
      }, i(t3) {
        s3 || (Y(l2), s3 = true);
      }, o(t3) {
        tt(l2), s3 = false;
      }, d(t3) {
        l2 && l2.d(t3), t3 && g(e3);
      }};
    }
    function ot2(t2, e3, s3) {
      let l2, n2, a3, c2, i2;
      l(t2, zt, (t3) => s3(0, l2 = t3)), l(t2, s, (t3) => s3(1, n2 = t3)), l(t2, a, (t3) => s3(2, a3 = t3)), l(t2, e, (t3) => s3(3, c2 = t3)), l(t2, Ut, (t3) => s3(4, i2 = t3));
      let {$$slots: r2 = {}, $$scope: o3} = e3;
      return e.useLocalStorage(), T(async () => {
        o().then((t3) => {
          s.set(t3);
        });
      }), t2.$$set = (t3) => {
        "$$scope" in t3 && s3(5, o3 = t3.$$scope);
      }, t2.$$.update = () => {
        if (15 & t2.$$.dirty && l2 && ((n2.site || a3.title) && (Vt.title = l2.cat ? a3.title + " | " + n2.site.title : n2.site.title + " | " + n2.site.slogan, (a.summary || n2.site.summary) && (Vt.summary = a3.summary ? a3.summary : n2.site.summary)), c2.amount == 0 && a3.cart && d(e, c2 = a3.cart, c2)), 8 & t2.$$.dirty && c2.products) {
          let t3 = [0, 0];
          d(e, c2.products = c2.products.filter((t4, e4) => t4.amount > 0 && t4 != null).sort(), c2), Object.values(c2.products).forEach((e4) => {
            e4.discounts && (e4.current = e4.price, e4.discounts.forEach(function(t4) {
              t4.amount <= e4.amount && (e4.current = t4.price);
            })), t3[0] += e4.total = e4.current * e4.amount, t3[1] += e4.amount;
          }), t3[1] == 0 || t3[1] == null ? d(e, c2.products = [], c2) : (d(e, c2.total = t3[0], c2), d(e, c2.amount = t3[1], c2));
        }
      }, [l2, n2, a3, c2, i2, o3, r2];
    }
    var layout_0ac71bbb_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, ot2, rt2, i, {});
      }
    };
    var layout_0ac71bbb_default2 = layout_0ac71bbb_default;
  });

  // dist/build/main.js
  function t() {
  }
  function e2(t2, e3) {
    for (const n2 in e3)
      t2[n2] = e3[n2];
    return t2;
  }
  function n(t2) {
    return t2();
  }
  function o2() {
    return Object.create(null);
  }
  function r(t2) {
    t2.forEach(n);
  }
  function s2(t2) {
    return typeof t2 == "function";
  }
  function i(t2, e3) {
    return t2 != t2 ? e3 == e3 : t2 !== e3 || t2 && typeof t2 == "object" || typeof t2 == "function";
  }
  function a2(e3, ...n2) {
    if (e3 == null)
      return t;
    const o3 = e3.subscribe(...n2);
    return o3.unsubscribe ? () => o3.unsubscribe() : o3;
  }
  function c(t2) {
    let e3;
    return a2(t2, (t3) => e3 = t3)(), e3;
  }
  function l(t2, e3, n2) {
    t2.$$.on_destroy.push(a2(e3, n2));
  }
  function u(t2, e3, n2, o3) {
    if (t2) {
      const r2 = p(t2, e3, n2, o3);
      return t2[0](r2);
    }
  }
  function p(t2, n2, o3, r2) {
    return t2[1] && r2 ? e2(o3.ctx.slice(), t2[1](r2(n2))) : o3.ctx;
  }
  function f(t2, e3, n2, o3, r2, s3, i2) {
    const a3 = function(t3, e4, n3, o4) {
      if (t3[2] && o4) {
        const r3 = t3[2](o4(n3));
        if (e4.dirty === void 0)
          return r3;
        if (typeof r3 == "object") {
          const t4 = [], n4 = Math.max(e4.dirty.length, r3.length);
          for (let o5 = 0; o5 < n4; o5 += 1)
            t4[o5] = e4.dirty[o5] | r3[o5];
          return t4;
        }
        return e4.dirty | r3;
      }
      return e4.dirty;
    }(e3, o3, r2, s3);
    if (a3) {
      const r3 = p(e3, n2, o3, i2);
      t2.p(r3, a3);
    }
  }
  function d(t2, e3, n2 = e3) {
    return t2.set(n2), e3;
  }
  function h(t2, e3) {
    t2.appendChild(e3);
  }
  function m(t2, e3, n2) {
    t2.insertBefore(e3, n2 || null);
  }
  function g(t2) {
    t2.parentNode.removeChild(t2);
  }
  function y(t2, e3) {
    for (let n2 = 0; n2 < t2.length; n2 += 1)
      t2[n2] && t2[n2].d(e3);
  }
  function $(t2) {
    return document.createElement(t2);
  }
  function b(t2) {
    return document.createElementNS("http://www.w3.org/2000/svg", t2);
  }
  function w(t2) {
    return document.createTextNode(t2);
  }
  function _() {
    return w(" ");
  }
  function x() {
    return w("");
  }
  function v(t2, e3, n2, o3) {
    return t2.addEventListener(e3, n2, o3), () => t2.removeEventListener(e3, n2, o3);
  }
  function P(t2, e3, n2) {
    n2 == null ? t2.removeAttribute(e3) : t2.getAttribute(e3) !== n2 && t2.setAttribute(e3, n2);
  }
  function k(t2) {
    return t2 === "" ? null : +t2;
  }
  function j(t2, e3) {
    e3 = "" + e3, t2.wholeText !== e3 && (t2.data = e3);
  }
  function E(t2, e3) {
    t2.value = e3 == null ? "" : e3;
  }
  function O(t2, e3, n2) {
    t2.classList[n2 ? "add" : "remove"](e3);
  }
  var L = class {
    constructor(t2 = null) {
      this.a = t2, this.e = this.n = null;
    }
    m(t2, e3, n2 = null) {
      this.e || (this.e = $(e3.nodeName), this.t = e3, this.h(t2)), this.i(n2);
    }
    h(t2) {
      this.e.innerHTML = t2, this.n = Array.from(this.e.childNodes);
    }
    i(t2) {
      for (let e3 = 0; e3 < this.n.length; e3 += 1)
        m(this.t, this.n[e3], t2);
    }
    p(t2) {
      this.d(), this.h(t2), this.i(this.a);
    }
    d() {
      this.n.forEach(g);
    }
  };
  var I;
  function S(t2) {
    I = t2;
  }
  function N() {
    if (!I)
      throw new Error("Function called outside component initialization");
    return I;
  }
  function T(t2) {
    N().$$.on_mount.push(t2);
  }
  function A(t2, e3) {
    N().$$.context.set(t2, e3);
  }
  function F(t2) {
    return N().$$.context.get(t2);
  }
  var M = [];
  var R = [];
  var C = [];
  var q = [];
  var B = Promise.resolve();
  var U = false;
  function H() {
    U || (U = true, B.then(W));
  }
  function D() {
    return H(), B;
  }
  function K(t2) {
    C.push(t2);
  }
  var J = false;
  var z = new Set();
  function W() {
    if (!J) {
      J = true;
      do {
        for (let t2 = 0; t2 < M.length; t2 += 1) {
          const e3 = M[t2];
          S(e3), G(e3.$$);
        }
        for (S(null), M.length = 0; R.length; )
          R.pop()();
        for (let t2 = 0; t2 < C.length; t2 += 1) {
          const e3 = C[t2];
          z.has(e3) || (z.add(e3), e3());
        }
        C.length = 0;
      } while (M.length);
      for (; q.length; )
        q.pop()();
      U = false, J = false, z.clear();
    }
  }
  function G(t2) {
    if (t2.fragment !== null) {
      t2.update(), r(t2.before_update);
      const e3 = t2.dirty;
      t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e3), t2.after_update.forEach(K);
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
  function Y(t2, e3) {
    t2 && t2.i && (Q.delete(t2), t2.i(e3));
  }
  function tt(t2, e3, n2, o3) {
    if (t2 && t2.o) {
      if (Q.has(t2))
        return;
      Q.add(t2), V.c.push(() => {
        Q.delete(t2), o3 && (n2 && t2.d(1), o3());
      }), t2.o(e3);
    }
  }
  function et(t2, e3) {
    t2.d(1), e3.delete(t2.key);
  }
  function nt(t2, e3) {
    tt(t2, 1, 1, () => {
      e3.delete(t2.key);
    });
  }
  function ot(t2, e3, n2, o3, r2, s3, i2, a3, c2, l2, u2, p2) {
    let f2 = t2.length, d2 = s3.length, h2 = f2;
    const m2 = {};
    for (; h2--; )
      m2[t2[h2].key] = h2;
    const g2 = [], y2 = new Map(), $2 = new Map();
    for (h2 = d2; h2--; ) {
      const t3 = p2(r2, s3, h2), a4 = n2(t3);
      let c3 = i2.get(a4);
      c3 ? o3 && c3.p(t3, e3) : (c3 = l2(a4, t3), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
    }
    const b2 = new Set(), w2 = new Set();
    function _2(t3) {
      Y(t3, 1), t3.m(a3, u2), i2.set(t3.key, t3), u2 = t3.first, d2--;
    }
    for (; f2 && d2; ) {
      const e4 = g2[d2 - 1], n3 = t2[f2 - 1], o4 = e4.key, r3 = n3.key;
      e4 === n3 ? (u2 = e4.first, f2--, d2--) : y2.has(r3) ? !i2.has(o4) || b2.has(o4) ? _2(e4) : w2.has(r3) ? f2-- : $2.get(o4) > $2.get(r3) ? (w2.add(o4), _2(e4)) : (b2.add(r3), f2--) : (c2(n3, i2), f2--);
    }
    for (; f2--; ) {
      const e4 = t2[f2];
      y2.has(e4.key) || c2(e4, i2);
    }
    for (; d2; )
      _2(g2[d2 - 1]);
    return g2;
  }
  function rt(t2) {
    t2 && t2.c();
  }
  function st(t2, e3, o3, i2) {
    const {fragment: a3, on_mount: c2, on_destroy: l2, after_update: u2} = t2.$$;
    a3 && a3.m(e3, o3), i2 || K(() => {
      const e4 = c2.map(n).filter(s2);
      l2 ? l2.push(...e4) : r(e4), t2.$$.on_mount = [];
    }), u2.forEach(K);
  }
  function it(t2, e3) {
    const n2 = t2.$$;
    n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e3), n2.on_destroy = n2.fragment = null, n2.ctx = []);
  }
  function at(e3, n2, s3, i2, a3, c2, l2 = [-1]) {
    const u2 = I;
    S(e3);
    const p2 = e3.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a3, bound: o2(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : n2.context || []), callbacks: o2(), dirty: l2, skip_bound: false};
    let f2 = false;
    if (p2.ctx = s3 ? s3(e3, n2.props || {}, (t2, n3, ...o3) => {
      const r2 = o3.length ? o3[0] : n3;
      return p2.ctx && a3(p2.ctx[t2], p2.ctx[t2] = r2) && (!p2.skip_bound && p2.bound[t2] && p2.bound[t2](r2), f2 && function(t3, e4) {
        t3.$$.dirty[0] === -1 && (M.push(t3), H(), t3.$$.dirty.fill(0)), t3.$$.dirty[e4 / 31 | 0] |= 1 << e4 % 31;
      }(e3, t2)), n3;
    }) : [], p2.update(), f2 = true, r(p2.before_update), p2.fragment = !!i2 && i2(p2.ctx), n2.target) {
      if (n2.hydrate) {
        const t2 = function(t3) {
          return Array.from(t3.childNodes);
        }(n2.target);
        p2.fragment && p2.fragment.l(t2), t2.forEach(g);
      } else
        p2.fragment && p2.fragment.c();
      n2.intro && Y(e3.$$.fragment), st(e3, n2.target, n2.anchor, n2.customElement), W();
    }
    S(u2);
  }
  var ct = class {
    $destroy() {
      it(this, 1), this.$destroy = t;
    }
    $on(t2, e3) {
      const n2 = this.$$.callbacks[t2] || (this.$$.callbacks[t2] = []);
      return n2.push(e3), () => {
        const t3 = n2.indexOf(e3);
        t3 !== -1 && n2.splice(t3, 1);
      };
    }
    $set(t2) {
      var e3;
      this.$$set && (e3 = t2, Object.keys(e3).length !== 0) && (this.$$.skip_bound = true, this.$$set(t2), this.$$.skip_bound = false);
    }
  };
  var lt = {queryHandler: {parse: (t2) => {
    return e3 = new URLSearchParams(t2), [...e3].reduce((t3, [e4, n2]) => (t3[e4] = n2, t3), {});
    var e3;
  }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
  var ut = RegExp(/\:([^/()]+)/g);
  function pt(t2, e3) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    e3 && ft(t2), function() {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      const {hash: t3} = window.location;
      if (t3) {
        if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t3.substring(1))) {
          const e4 = document.querySelector(t3);
          e4 && e4.scrollIntoView();
        }
      }
    }();
  }
  function ft(t2) {
    t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", ft(t2.parentElement));
  }
  var dt = (t2) => {
    const e3 = [];
    let n2;
    for (; n2 = ut.exec(t2); )
      e3.push(n2[1]);
    return e3;
  };
  function ht(t2, e3) {
    ht._console = ht._console || {log: console.log, warn: console.warn};
    const {_console: n2} = ht, o3 = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
    for (const t3 of ["log", "warn"])
      console[t3] = (...e4) => {
        r2.includes(e4[0]) || n2[t3](...e4);
      }, e3().then(() => {
        console[t3] = n2[t3];
      });
  }
  function mt() {
    let t2 = window.location.pathname + window.location.search + window.location.hash;
    const {url: e3, options: n2} = function(t3) {
      const [e4, n3] = t3.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
      return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e4, options: o3};
    }(t2);
    return {...gt(e3), options: n2};
  }
  function gt(t2) {
    lt.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
    const e3 = t2.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t2, e3);
    return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
  }
  function yt(t2, e3, n2) {
    const o3 = lt.useHash ? "#" : "";
    let r2;
    return r2 = function(t3, e4, n3) {
      const o4 = Object.assign({}, n3, e4), r3 = function(t4, e5) {
        if (!lt.queryHandler)
          return "";
        const n4 = dt(t4), o5 = {};
        e5 && Object.entries(e5).forEach(([t5, e6]) => {
          n4.includes(t5) || (o5[t5] = e6);
        });
        return lt.queryHandler.stringify(o5).replace(/\?$/, "");
      }(t3, e4);
      for (const [e5, n4] of Object.entries(o4))
        t3 = t3.replace(`:${e5}`, n4);
      return `${t3}${r3}`;
    }(t2, e3, n2), r2 = lt.urlTransform.apply(r2), r2 = o3 + r2, r2;
  }
  function $t(t2) {
    let e3;
    const n2 = t2[2].default, o3 = u(n2, t2, t2[1], null);
    return {c() {
      o3 && o3.c();
    }, m(t3, n3) {
      o3 && o3.m(t3, n3), e3 = true;
    }, p(t3, [e4]) {
      o3 && o3.p && 2 & e4 && f(o3, n2, t3, t3[1], e4, null, null);
    }, i(t3) {
      e3 || (Y(o3, t3), e3 = true);
    }, o(t3) {
      tt(o3, t3), e3 = false;
    }, d(t3) {
      o3 && o3.d(t3);
    }};
  }
  function bt(t2, e3, n2) {
    let {$$slots: o3 = {}, $$scope: r2} = e3, {scoped: s3 = {}} = e3;
    return t2.$$set = (t3) => {
      "scoped" in t3 && n2(0, s3 = t3.scoped), "$$scope" in t3 && n2(1, r2 = t3.$$scope);
    }, [s3, r2, o3];
  }
  var wt = class extends ct {
    constructor(t2) {
      super(), at(this, t2, bt, $t, i, {scoped: 0});
    }
  };
  var _t = [];
  function xt(e3, n2 = t) {
    let o3;
    const r2 = [];
    function s3(t2) {
      if (i(e3, t2) && (e3 = t2, o3)) {
        const t3 = !_t.length;
        for (let t4 = 0; t4 < r2.length; t4 += 1) {
          const n3 = r2[t4];
          n3[1](), _t.push(n3, e3);
        }
        if (t3) {
          for (let t4 = 0; t4 < _t.length; t4 += 2)
            _t[t4][0](_t[t4 + 1]);
          _t.length = 0;
        }
      }
    }
    return {set: s3, update: function(t2) {
      s3(t2(e3));
    }, subscribe: function(i2, a3 = t) {
      const c2 = [i2, a3];
      return r2.push(c2), r2.length === 1 && (o3 = n2(s3) || t), i2(e3), () => {
        const t2 = r2.indexOf(c2);
        t2 !== -1 && r2.splice(t2, 1), r2.length === 0 && (o3(), o3 = null);
      };
    }};
  }
  function vt(e3, n2, o3) {
    const i2 = !Array.isArray(e3), c2 = i2 ? [e3] : e3, l2 = n2.length < 2;
    return {subscribe: xt(o3, (e4) => {
      let o4 = false;
      const u2 = [];
      let p2 = 0, f2 = t;
      const d2 = () => {
        if (p2)
          return;
        f2();
        const o5 = n2(i2 ? u2[0] : u2, e4);
        l2 ? e4(o5) : f2 = s2(o5) ? o5 : t;
      }, h2 = c2.map((t2, e5) => a2(t2, (t3) => {
        u2[e5] = t3, p2 &= ~(1 << e5), o4 && d2();
      }, () => {
        p2 |= 1 << e5;
      }));
      return o4 = true, d2(), function() {
        r(h2), f2();
      };
    }).subscribe};
  }
  window.routify = window.routify || {};
  var Pt = xt(null);
  var kt = xt([]);
  kt.subscribe((t2) => window.routify.routes = t2);
  var jt = xt({component: {params: {}}});
  var Et = xt(null);
  var Ot = xt(true);
  async function Lt({page: t2, metatags: e3, afterPageLoad: n2, parentNode: o3}) {
    const r2 = t2.last !== t2;
    setTimeout(() => pt(o3, r2));
    const {path: s3} = t2, {options: i2} = mt(), a3 = i2.prefetch;
    for (const e4 of n2._hooks)
      e4 && await e4(t2.api);
    e3.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: s3, prefetchId: a3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
  }
  function It(t2, e3 = false) {
    t2 = lt.urlTransform.remove(t2);
    let {pathname: n2, search: o3} = gt(t2).url;
    const r2 = c(kt), s3 = r2.find((t3) => n2 === t3.meta.name) || r2.find((t3) => n2.match(t3.regex));
    if (!s3)
      throw new Error(`Route could not be found for "${n2}".`);
    const i2 = e3 ? Object.create(s3) : s3, {route: a3, redirectPath: l2, rewritePath: u2} = St(i2, r2);
    return u2 && ({pathname: n2, search: o3} = gt(yt(u2, a3.params)).url, l2 && (a3.redirectTo = yt(l2, a3.params || {}))), lt.queryHandler && (a3.params = Object.assign({}, lt.queryHandler.parse(o3))), function(t3, e4) {
      if (t3.paramKeys) {
        const n3 = function(t4) {
          const e5 = [];
          return t4.forEach((t5) => {
            e5[t5.path.split("/").filter(Boolean).length - 1] = t5;
          }), e5;
        }(t3.layouts), o4 = e4.split("/").filter(Boolean);
        (function(t4) {
          return t4.split("/").filter(Boolean).map((t5) => t5.match(/\:(.+)/)).map((t5) => t5 && t5[1]);
        })(t3.path).forEach((e5, r3) => {
          e5 && (t3.params[e5] = o4[r3], n3[r3] ? n3[r3].param = {[e5]: o4[r3]} : t3.param = {[e5]: o4[r3]});
        });
      }
    }(a3, n2), a3.leftover = t2.replace(new RegExp(a3.regex), ""), a3;
  }
  function St(t2, e3, n2, o3) {
    const {redirect: r2, rewrite: s3} = t2.meta;
    if (r2 || s3) {
      n2 = r2 ? r2.path || r2 : n2, o3 = s3 ? s3.path || s3 : n2;
      const i2 = r2 && r2.params, a3 = s3 && s3.params, c2 = e3.find((t3) => t3.path === o3);
      return c2 === t2 && console.error(`${o3} is redirecting to itself`), c2 || console.error(`${t2.path} is redirecting to non-existent path: ${o3}`), (i2 || a3) && (c2.params = Object.assign({}, c2.params, i2, a3)), St(c2, e3, n2, o3);
    }
    return {route: t2, redirectPath: n2, rewritePath: o3};
  }
  function Nt(t2, e3, n2) {
    const o3 = t2.slice();
    return o3[1] = e3[n2], o3;
  }
  function Tt(t2, e3) {
    let n2, o3;
    return {key: t2, first: null, c() {
      n2 = $("iframe"), n2.src !== (o3 = e3[1].url) && P(n2, "src", o3), P(n2, "frameborder", "0"), P(n2, "title", "routify prefetcher"), this.first = n2;
    }, m(t3, e4) {
      m(t3, n2, e4);
    }, p(t3, r2) {
      e3 = t3, 1 & r2 && n2.src !== (o3 = e3[1].url) && P(n2, "src", o3);
    }, d(t3) {
      t3 && g(n2);
    }};
  }
  function At(e3) {
    let n2, o3 = [], r2 = new Map(), s3 = e3[0];
    const i2 = (t2) => t2[1].options.prefetch;
    for (let t2 = 0; t2 < s3.length; t2 += 1) {
      let n3 = Nt(e3, s3, t2), a3 = i2(n3);
      r2.set(a3, o3[t2] = Tt(a3, n3));
    }
    return {c() {
      n2 = $("div");
      for (let t3 = 0; t3 < o3.length; t3 += 1)
        o3[t3].c();
      var t2, e4, r3;
      P(n2, "id", "__routify_iframes"), t2 = "display", e4 = "none", n2.style.setProperty(t2, e4, r3 ? "important" : "");
    }, m(t2, e4) {
      m(t2, n2, e4);
      for (let t3 = 0; t3 < o3.length; t3 += 1)
        o3[t3].m(n2, null);
    }, p(t2, [e4]) {
      1 & e4 && (s3 = t2[0], o3 = ot(o3, e4, i2, 1, t2, s3, r2, n2, et, Tt, null, Nt));
    }, i: t, o: t, d(t2) {
      t2 && g(n2);
      for (let t3 = 0; t3 < o3.length; t3 += 1)
        o3[t3].d();
    }};
  }
  var Ft = xt([]);
  var Mt = vt(Ft, (t2) => t2.slice(0, 2));
  function Rt(t2) {
    const e3 = t2.data ? t2.data.prefetchId : t2;
    if (!e3)
      return null;
    const n2 = c(Ft).find((t3) => t3 && t3.options.prefetch == e3);
    if (n2) {
      const {gracePeriod: t3} = n2.options, o3 = new Promise((e4) => setTimeout(e4, t3)), r2 = new Promise((e4) => {
        window.requestIdleCallback ? window.requestIdleCallback(e4) : setTimeout(e4, t3 + 1e3);
      });
      Promise.all([o3, r2]).then(() => {
        Ft.update((t4) => t4.filter((t5) => t5.options.prefetch != e3));
      });
    }
  }
  function Ct(t2, e3, n2) {
    let o3;
    return l(t2, Mt, (t3) => n2(0, o3 = t3)), [o3];
  }
  Mt.subscribe((t2) => t2.forEach(({options: t3}) => {
    setTimeout(() => Rt(t3.prefetch), t3.timeout);
  })), addEventListener("message", Rt, false);
  var qt = class extends ct {
    constructor(t2) {
      super(), at(this, t2, Ct, At, i, {});
    }
  };
  function Bt() {
    return F("routify") || jt;
  }
  var Ut = {subscribe: (t2) => vt(Pt, (t3) => t3.api).subscribe(t2)};
  var Ht = {subscribe: (t2) => (window.routify.stopAutoReady = true, t2(async function() {
    await D(), await Lt({page: c(Pt), metatags: Vt, afterPageLoad: Dt});
  }), () => {
  })};
  var Dt = {_hooks: [(t2) => Ot.set(false)], subscribe: Jt};
  var Kt = {_hooks: [], subscribe: Jt};
  function Jt(t2) {
    const e3 = this._hooks, n2 = e3.length;
    return t2((t3) => {
      e3[n2] = t3;
    }), () => delete e3[n2];
  }
  var zt = {subscribe: (t2) => vt(Bt(), (t3) => t3.route.params).subscribe(t2)};
  var Wt = {subscribe(t2) {
    const e3 = Bt(), {route: n2, routes: o3} = c(e3);
    return vt(e3, (t3) => {
      return e4 = t3, r2 = n2, s3 = o3, function(t4, n3 = {}, o4) {
        const {component: i2} = e4, a3 = Object.assign({}, r2.params, i2.params);
        let c2 = t4 && t4.nodeType && t4;
        c2 && (t4 = t4.getAttribute("href")), t4 = t4 ? p2(t4) : i2.shortPath;
        const l2 = s3.find((e5) => [e5.shortPath || "/", e5.path].includes(t4));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t5 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t5);
        }
        o4 && o4.strict !== false || (t4 = t4.replace(/index$/, ""));
        let u2 = yt(t4, n3, a3);
        return c2 ? (c2.href = u2, {update(e5) {
          c2.href = yt(t4, e5, a3);
        }}) : u2;
        function p2(t5) {
          if (t5.match(/^\.\.?\//)) {
            let [, e5, n4] = t5.match(/^([\.\/]+)(.*)/), o5 = i2.path.replace(/\/$/, "");
            const r3 = e5.match(/\.\.\//g) || [];
            i2.isPage && r3.push(null), r3.forEach(() => o5 = o5.replace(/\/[^\/]+\/?$/, "")), t5 = (t5 = `${o5}/${n4}`.replace(/\/$/, "")) || "/";
          } else if (t5.match(/^\//))
            ;
          else {
            const e5 = s3.find((e6) => e6.meta.name === t5);
            e5 && (t5 = e5.shortPath);
          }
          return t5;
        }
      };
      var e4, r2, s3;
    }).subscribe(t2);
  }};
  var Gt = {subscribe(t2) {
    const e3 = F("routifyupdatepage");
    return vt(Wt, (t3) => function(n2, o3, r2, s3) {
      const i2 = t3(n2, o3);
      r2 ? e3(i2, s3) : history.pushState({}, null, i2);
    }).subscribe(t2);
  }};
  var Qt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e3) => [t2, (Qt.getLongest(Qt.templates, t2) || ((t3) => t3))(e3)]}, {name: "createMeta", condition: () => true, action(t2, e3) {
    Qt.writeMeta(t2, e3);
  }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e3) {
    Qt.writeMeta(`og:${t2}`, e3);
  }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e3) {
    document.title = e3;
  }}], getLongest(t2, e3) {
    const n2 = t2[e3];
    if (n2) {
      const o3 = c(Pt).path;
      return n2[Object.keys(t2[e3]).filter((t3) => o3.includes(t3)).sort((t3, e4) => e4.length - t3.length)[0]];
    }
  }, writeMeta(t2, e3) {
    const n2 = document.getElementsByTagName("head")[0], o3 = t2.match(/(.+)\:/), r2 = o3 && o3[1] || "plain", {propField: s3, valueField: i2} = Vt.services[r2] || Vt.services.plain, a3 = document.querySelector(`meta[${s3}='${t2}']`);
    a3 && a3.remove();
    const c2 = document.createElement("meta");
    c2.setAttribute(s3, t2), c2.setAttribute(i2, e3), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
  }, set(t2, e3) {
    Qt.plugins.forEach((n2) => {
      n2.condition(t2, e3) && ([t2, e3] = n2.action(t2, e3) || [t2, e3]);
    });
  }, clear() {
    const t2 = document.querySelector("meta");
    t2 && t2.remove();
  }, template(t2, e3) {
    const n2 = Qt.getOrigin();
    Qt.templates[t2] = Qt.templates[t2] || {}, Qt.templates[t2][n2] = e3;
  }, update() {
    Object.keys(Qt.props).forEach((t2) => {
      let e3 = Qt.getLongest(Qt.props, t2);
      Qt.plugins.forEach((n2) => {
        n2.condition(t2, e3) && ([t2, e3] = n2.action(t2, e3) || [t2, e3]);
      });
    });
  }, batchedUpdate() {
    Qt._pendingUpdate || (Qt._pendingUpdate = true, setTimeout(() => {
      Qt._pendingUpdate = false, this.update();
    }));
  }, _updateQueued: false, getOrigin() {
    const t2 = Bt();
    return t2 && c(t2).path || "/";
  }, _pendingUpdate: false};
  var Vt = new Proxy(Qt, {set(t2, e3, n2, o3) {
    const {props: r2, getOrigin: s3} = t2;
    return Reflect.has(t2, e3) ? Reflect.set(t2, e3, n2, o3) : (r2[e3] = r2[e3] || {}, r2[e3][s3()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
  }});
  function Zt(t2, e3, n2) {
    const o3 = t2.slice();
    return o3[21] = e3[n2].component, o3[22] = e3[n2].componentFile, o3[2] = e3[n2].decorator, o3[1] = e3[n2].nodes, o3;
  }
  function Xt(t2) {
    let e3, n2, o3 = [], r2 = new Map(), s3 = [t2[4]];
    const i2 = (t3) => t3[6];
    for (let e4 = 0; e4 < 1; e4 += 1) {
      let n3 = Zt(t2, s3, e4), a3 = i2(n3);
      r2.set(a3, o3[e4] = ne(a3, n3));
    }
    return {c() {
      for (let t3 = 0; t3 < 1; t3 += 1)
        o3[t3].c();
      e3 = x();
    }, m(t3, r3) {
      for (let e4 = 0; e4 < 1; e4 += 1)
        o3[e4].m(t3, r3);
      m(t3, e3, r3), n2 = true;
    }, p(t3, n3) {
      33554557 & n3 && (s3 = [t3[4]], Z(), o3 = ot(o3, n3, i2, 1, t3, s3, r2, e3.parentNode, nt, ne, e3, Zt), X());
    }, i(t3) {
      if (!n2) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          Y(o3[t4]);
        n2 = true;
      }
    }, o(t3) {
      for (let t4 = 0; t4 < 1; t4 += 1)
        tt(o3[t4]);
      n2 = false;
    }, d(t3) {
      for (let e4 = 0; e4 < 1; e4 += 1)
        o3[e4].d(t3);
      t3 && g(e3);
    }};
  }
  function Yt(t2) {
    let e3, n2;
    return e3 = new se({props: {decorator: t2[2], nodes: t2[1], scoped: {...t2[0], ...t2[25]}}}), {c() {
      rt(e3.$$.fragment);
    }, m(t3, o3) {
      st(e3, t3, o3), n2 = true;
    }, p(t3, n3) {
      const o3 = {};
      4 & n3 && (o3.decorator = t3[2]), 16 & n3 && (o3.nodes = t3[1]), 33554433 & n3 && (o3.scoped = {...t3[0], ...t3[25]}), e3.$set(o3);
    }, i(t3) {
      n2 || (Y(e3.$$.fragment, t3), n2 = true);
    }, o(t3) {
      tt(e3.$$.fragment, t3), n2 = false;
    }, d(t3) {
      it(e3, t3);
    }};
  }
  function te(t2) {
    let e3, n2, o3 = t2[21] && t2[1].length && Yt(t2);
    return {c() {
      o3 && o3.c(), e3 = x();
    }, m(t3, r2) {
      o3 && o3.m(t3, r2), m(t3, e3, r2), n2 = true;
    }, p(t3, n3) {
      t3[21] && t3[1].length ? o3 ? (o3.p(t3, n3), 16 & n3 && Y(o3, 1)) : (o3 = Yt(t3), o3.c(), Y(o3, 1), o3.m(e3.parentNode, e3)) : o3 && (Z(), tt(o3, 1, 1, () => {
        o3 = null;
      }), X());
    }, i(t3) {
      n2 || (Y(o3), n2 = true);
    }, o(t3) {
      tt(o3), n2 = false;
    }, d(t3) {
      o3 && o3.d(t3), t3 && g(e3);
    }};
  }
  function ee(t2) {
    let n2, o3, r2;
    const s3 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
    var i2 = t2[22];
    function a3(t3) {
      let n3 = {$$slots: {default: [te, ({scoped: t4, decorator: e3}) => ({25: t4, 2: e3}), ({scoped: t4, decorator: e3}) => (t4 ? 33554432 : 0) | (e3 ? 4 : 0)]}, $$scope: {ctx: t3}};
      for (let t4 = 0; t4 < s3.length; t4 += 1)
        n3 = e2(n3, s3[t4]);
      return {props: n3};
    }
    return i2 && (n2 = new i2(a3(t2))), {c() {
      n2 && rt(n2.$$.fragment), o3 = _();
    }, m(t3, e3) {
      n2 && st(n2, t3, e3), m(t3, o3, e3), r2 = true;
    }, p(t3, e3) {
      const r3 = 41 & e3 ? function(t4, e4) {
        const n3 = {}, o4 = {}, r4 = {$$scope: 1};
        let s4 = t4.length;
        for (; s4--; ) {
          const i3 = t4[s4], a4 = e4[s4];
          if (a4) {
            for (const t5 in i3)
              t5 in a4 || (o4[t5] = 1);
            for (const t5 in a4)
              r4[t5] || (n3[t5] = a4[t5], r4[t5] = 1);
            t4[s4] = a4;
          } else
            for (const t5 in i3)
              r4[t5] = 1;
        }
        for (const t5 in o4)
          t5 in n3 || (n3[t5] = void 0);
        return n3;
      }(s3, [1 & e3 && {scoped: t3[0]}, 32 & e3 && {scopedSync: t3[5]}, 8 & e3 && (c2 = t3[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
      var c2;
      if (100663317 & e3 && (r3.$$scope = {dirty: e3, ctx: t3}), i2 !== (i2 = t3[22])) {
        if (n2) {
          Z();
          const t4 = n2;
          tt(t4.$$.fragment, 1, 0, () => {
            it(t4, 1);
          }), X();
        }
        i2 ? (n2 = new i2(a3(t3)), rt(n2.$$.fragment), Y(n2.$$.fragment, 1), st(n2, o3.parentNode, o3)) : n2 = null;
      } else
        i2 && n2.$set(r3);
    }, i(t3) {
      r2 || (n2 && Y(n2.$$.fragment, t3), r2 = true);
    }, o(t3) {
      n2 && tt(n2.$$.fragment, t3), r2 = false;
    }, d(t3) {
      n2 && it(n2, t3), t3 && g(o3);
    }};
  }
  function ne(t2, e3) {
    let n2, o3, r2, s3;
    var i2 = e3[2];
    function a3(t3) {
      return {props: {scoped: t3[0], $$slots: {default: [ee]}, $$scope: {ctx: t3}}};
    }
    return i2 && (o3 = new i2(a3(e3))), {key: t2, first: null, c() {
      n2 = x(), o3 && rt(o3.$$.fragment), r2 = x(), this.first = n2;
    }, m(t3, e4) {
      m(t3, n2, e4), o3 && st(o3, t3, e4), m(t3, r2, e4), s3 = true;
    }, p(t3, n3) {
      e3 = t3;
      const s4 = {};
      if (1 & n3 && (s4.scoped = e3[0]), 67108925 & n3 && (s4.$$scope = {dirty: n3, ctx: e3}), i2 !== (i2 = e3[2])) {
        if (o3) {
          Z();
          const t4 = o3;
          tt(t4.$$.fragment, 1, 0, () => {
            it(t4, 1);
          }), X();
        }
        i2 ? (o3 = new i2(a3(e3)), rt(o3.$$.fragment), Y(o3.$$.fragment, 1), st(o3, r2.parentNode, r2)) : o3 = null;
      } else
        i2 && o3.$set(s4);
    }, i(t3) {
      s3 || (o3 && Y(o3.$$.fragment, t3), s3 = true);
    }, o(t3) {
      o3 && tt(o3.$$.fragment, t3), s3 = false;
    }, d(t3) {
      t3 && g(n2), t3 && g(r2), o3 && it(o3, t3);
    }};
  }
  function oe(e3) {
    let n2, o3, r2, i2, a3, c2 = e3[4] && Xt(e3);
    return {c() {
      c2 && c2.c(), n2 = _(), o3 = $("span");
    }, m(l2, u2) {
      var p2;
      c2 && c2.m(l2, u2), m(l2, n2, u2), m(l2, o3, u2), r2 = true, i2 || (p2 = e3[9].call(null, o3), a3 = p2 && s2(p2.destroy) ? p2.destroy : t, i2 = true);
    }, p(t2, [e4]) {
      t2[4] ? c2 ? (c2.p(t2, e4), 16 & e4 && Y(c2, 1)) : (c2 = Xt(t2), c2.c(), Y(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (Z(), tt(c2, 1, 1, () => {
        c2 = null;
      }), X());
    }, i(t2) {
      r2 || (Y(c2), r2 = true);
    }, o(t2) {
      tt(c2), r2 = false;
    }, d(t2) {
      c2 && c2.d(t2), t2 && g(n2), t2 && g(o3), i2 = false, a3();
    }};
  }
  function re(t2, e3, n2) {
    let o3, r2, s3, i2, a3;
    l(t2, Pt, (t3) => n2(15, i2 = t3)), l(t2, kt, (t3) => n2(16, a3 = t3));
    let c2, {nodes: u2 = []} = e3, {scoped: p2 = {}} = e3, {decorator: f2} = e3, h2 = null, m2 = null, g2 = {}, y2 = 1;
    const $2 = xt(null);
    l(t2, $2, (t3) => n2(4, r2 = t3));
    const b2 = F("routify") || jt;
    l(t2, b2, (t3) => n2(14, s3 = t3));
    A("routify", $2);
    let w2 = [];
    function _2(t3) {
      n2(5, g2 = {...p2});
      const e4 = {...r2, nodes: m2, decorator: f2 || wt, layout: h2.isLayout ? h2 : s3.layout, component: h2, route: i2, routes: a3, componentFile: t3, parentNode: c2 || s3.parentNode};
      $2.set(e4), d(b2, s3.child = h2, s3), m2.length === 0 && async function() {
        await new Promise((t5) => setTimeout(t5));
        const t4 = r2.component.path === i2.path;
        !window.routify.stopAutoReady && t4 && Lt({page: r2.component, metatags: Vt, afterPageLoad: Dt, parentNode: c2});
      }();
    }
    return t2.$$set = (t3) => {
      "nodes" in t3 && n2(1, u2 = t3.nodes), "scoped" in t3 && n2(0, p2 = t3.scoped), "decorator" in t3 && n2(2, f2 = t3.decorator);
    }, t2.$$.update = () => {
      3074 & t2.$$.dirty && w2 !== u2 && (n2(11, w2 = u2), n2(3, [h2, ...m2] = [...u2], h2), n2(3, h2.api.reset = () => n2(10, y2++, y2), h2)), 8 & t2.$$.dirty && function(t3) {
        let e4 = t3.component();
        e4 instanceof Promise ? e4.then(_2) : _2(e4);
      }(h2), 1040 & t2.$$.dirty && n2(6, o3 = r2 && y2 && function({meta: t3, path: e4, param: n3, params: o4}) {
        return JSON.stringify({path: e4, invalidate: y2, param: (t3["param-is-page"] || t3["slug-is-page"]) && n3, queryParams: t3["query-params-is-page"] && o4});
      }(r2.component)), 16 & t2.$$.dirty && r2 && ht(r2, D);
    }, [p2, u2, f2, h2, r2, g2, o3, $2, b2, (t3) => c2 = t3.parentNode, y2, w2];
  }
  var se = class extends ct {
    constructor(t2) {
      super(), at(this, t2, re, oe, i, {nodes: 1, scoped: 0, decorator: 2});
    }
  };
  function ie(t2, e3) {
    let n2 = false;
    function o3(o4, r3) {
      const s3 = It(o4 || mt().fullpath);
      s3.redirectTo && (history.replaceStateNative({}, null, s3.redirectTo), delete s3.redirectTo);
      const i2 = [...(r3 && It(mt().fullpath, t2) || s3).layouts, s3];
      n2 && delete n2.last, s3.last = n2, n2 = s3, o4 || Et.set(s3), Pt.set(s3), s3.api.preload().then(() => {
        Ot.set(true), e3(i2);
      });
    }
    const r2 = function(t3) {
      ["pushState", "replaceState"].forEach((t4) => {
        history[t4 + "Native"] || (history[t4 + "Native"] = history[t4]), history[t4] = async function(e5 = {}, n4, o4) {
          if (o4 === location.pathname + location.search + location.hash)
            return false;
          const {id: r3, path: s3, params: i2} = c(Pt);
          e5 = {id: r3, path: s3, params: i2, ...e5};
          const a3 = new Event(t4.toLowerCase());
          Object.assign(a3, {state: e5, title: n4, url: o4});
          return await ce(a3, o4) ? (history[t4 + "Native"].apply(this, [e5, n4, o4]), dispatchEvent(a3)) : void 0;
        };
      });
      let e4 = false;
      const n3 = {click: ae, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
        e4 ? e4 = false : await ce(n4, mt().fullpath) ? t3() : (e4 = true, n4.preventDefault(), history.go(1));
      }};
      Object.entries(n3).forEach((t4) => addEventListener(...t4));
      return () => {
        Object.entries(n3).forEach((t4) => removeEventListener(...t4));
      };
    }(o3);
    return {updatePage: o3, destroy: r2};
  }
  function ae(t2) {
    const e3 = t2.target.closest("a"), n2 = e3 && e3.href;
    if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
      return;
    if (!n2 || e3.target || e3.host !== location.host)
      return;
    const o3 = new URL(n2), r2 = o3.pathname + o3.search + o3.hash;
    t2.preventDefault(), history.pushState({}, "", r2);
  }
  async function ce(t2, e3) {
    const n2 = It(e3).api;
    for (const o3 of Kt._hooks.filter(Boolean)) {
      if (!await o3(t2, n2, {url: e3}))
        return false;
    }
    return true;
  }
  function le(t2) {
    let e3, n2;
    return e3 = new se({props: {nodes: t2[0]}}), {c() {
      rt(e3.$$.fragment);
    }, m(t3, o3) {
      st(e3, t3, o3), n2 = true;
    }, p(t3, n3) {
      const o3 = {};
      1 & n3 && (o3.nodes = t3[0]), e3.$set(o3);
    }, i(t3) {
      n2 || (Y(e3.$$.fragment, t3), n2 = true);
    }, o(t3) {
      tt(e3.$$.fragment, t3), n2 = false;
    }, d(t3) {
      it(e3, t3);
    }};
  }
  function ue(t2) {
    let e3, n2, o3, r2 = t2[0] && t2[1] !== null && le(t2);
    return n2 = new qt({}), {c() {
      r2 && r2.c(), e3 = _(), rt(n2.$$.fragment);
    }, m(t3, s3) {
      r2 && r2.m(t3, s3), m(t3, e3, s3), st(n2, t3, s3), o3 = true;
    }, p(t3, [n3]) {
      t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && Y(r2, 1)) : (r2 = le(t3), r2.c(), Y(r2, 1), r2.m(e3.parentNode, e3)) : r2 && (Z(), tt(r2, 1, 1, () => {
        r2 = null;
      }), X());
    }, i(t3) {
      o3 || (Y(r2), Y(n2.$$.fragment, t3), o3 = true);
    }, o(t3) {
      tt(r2), tt(n2.$$.fragment, t3), o3 = false;
    }, d(t3) {
      r2 && r2.d(t3), t3 && g(e3), it(n2, t3);
    }};
  }
  function pe(t2, e3, n2) {
    let o3;
    l(t2, Pt, (t3) => n2(1, o3 = t3));
    let r2, s3, {routes: i2} = e3, {config: a3 = {}} = e3;
    window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(lt, a3);
    A("routifyupdatepage", (...t3) => s3 && s3.updatePage(...t3));
    const c2 = (t3) => n2(0, r2 = t3), u2 = () => {
      s3 && (s3.destroy(), s3 = null);
    };
    let p2 = null;
    var f2;
    return f2 = u2, N().$$.on_destroy.push(f2), t2.$$set = (t3) => {
      "routes" in t3 && n2(2, i2 = t3.routes), "config" in t3 && n2(3, a3 = t3.config);
    }, t2.$$.update = () => {
      4 & t2.$$.dirty && i2 && (clearTimeout(p2), p2 = setTimeout(() => {
        u2(), s3 = ie(i2, c2), kt.set(i2), s3.updatePage();
      }));
    }, [r2, o3, i2, a3];
  }
  var fe = class extends ct {
    constructor(t2) {
      super(), at(this, t2, pe, ue, i, {routes: 2, config: 3});
    }
  };
  function de(t2) {
    const e3 = async function(e4) {
      return await he(t2, {file: e4.tree, state: {treePayload: e4}, scope: {}});
    };
    return e3.sync = function(e4) {
      return me(t2, {file: e4.tree, state: {treePayload: e4}, scope: {}});
    }, e3;
  }
  async function he(t2, e3) {
    const n2 = await t2(e3);
    if (n2 === false)
      return false;
    const o3 = n2 || e3.file;
    if (o3.children) {
      const n3 = await Promise.all(o3.children.map(async (n4) => he(t2, {state: e3.state, scope: ge(e3.scope || {}), parent: e3.file, file: await n4})));
      o3.children = n3.filter(Boolean);
    }
    return o3;
  }
  function me(t2, e3) {
    const n2 = t2(e3);
    if (n2 === false)
      return false;
    const o3 = n2 || e3.file;
    if (o3.children) {
      const n3 = o3.children.map((n4) => me(t2, {state: e3.state, scope: ge(e3.scope || {}), parent: e3.file, file: n4}));
      o3.children = n3.filter(Boolean);
    }
    return o3;
  }
  function ge(t2) {
    return JSON.parse(JSON.stringify(t2));
  }
  var ye = de(({file: t2}) => {
    (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e3) => {
      const n2 = e3 ? "" : "/?$";
      return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(ut, "([^/]+)") + n2}`;
    })(t2.path, t2.isFallback));
  });
  var $e = de(({file: t2}) => {
    t2.paramKeys = dt(t2.path);
  });
  var be = de(({file: t2}) => {
    t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
  });
  var we = de(({file: t2}) => {
    t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
  });
  var _e = de(({file: t2}) => {
    const e3 = t2, n2 = t2.meta && t2.meta.children || [];
    n2.length && (e3.children = e3.children || [], e3.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
  });
  var xe = de((t2) => {
    const {file: e3} = t2, {isFallback: n2, meta: o3} = e3, r2 = e3.path.match("/:"), s3 = e3.path.endsWith("/index"), i2 = o3.index || o3.index === 0, a3 = o3.index === false;
    e3.isIndexable = i2 || !n2 && !r2 && !s3 && !a3, e3.isNonIndexable = !e3.isIndexable;
  });
  var ve = de(({file: t2, parent: e3}) => {
    Object.defineProperty(t2, "parent", {get: () => e3}), Object.defineProperty(t2, "nextSibling", {get: () => ke(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => ke(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => Pe(e3)});
  });
  function Pe(t2, e3 = []) {
    return t2 && (e3.unshift(t2), Pe(t2.parent, e3)), e3;
  }
  function ke(t2, e3) {
    if (!t2.root) {
      const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o3 = n2.indexOf(t2);
      return n2[o3 + e3];
    }
  }
  var je = de(({file: t2, parent: e3}) => {
    t2.isIndex && Object.defineProperty(e3, "index", {get: () => t2});
  });
  var Ee = de(({file: t2, scope: e3}) => {
    function n2(t3) {
      if (!t3.isLayout && t3.meta.reset)
        return [];
      const {parent: e4} = t3, o3 = e4 && e4.component && e4, r2 = o3 && (o3.isReset || o3.meta.reset), s3 = e4 && !r2 && n2(e4) || [];
      return o3 && s3.push(o3), s3;
    }
    Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
  });
  var Oe = de(({file: t2}) => {
    const e3 = t2.root ? function() {
    } : t2.children ? (t2.isPage, function() {
    }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
    });
    Object.setPrototypeOf(t2, e3.prototype);
  });
  var Le = Object.freeze({__proto__: null, setRegex: ye, setParamKeys: $e, setShortPath: be, setRank: we, addMetaChildren: _e, setIsIndexable: xe, assignRelations: ve, assignIndex: je, assignLayout: Ee, createFlatList: (t2) => {
    de((t3) => {
      (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
    }).sync(t2), t2.routes.sort((t3, e3) => t3.ranking >= e3.ranking ? -1 : 1);
  }, setPrototype: Oe});
  var Ie = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
  function Se(t2) {
    return Object.entries(Ie).forEach(([e3, n2]) => {
      t2[e3] === void 0 && (t2[e3] = n2);
    }), t2.children && (t2.children = t2.children.map(Se)), t2;
  }
  var Ne = de(({file: t2}) => {
    t2.api = new Te(t2);
  });
  var Te = class {
    constructor(t2) {
      this.__file = t2, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t2.isMeta, this.path = t2.path, this.title = function(t3) {
        return t3.meta.title !== void 0 ? t3.meta.title : (t3.shortPath || t3.path).split("/").pop().replace(/-/g, " ");
      }(t2), this.meta = t2.meta;
    }
    get parent() {
      return !this.__file.root && this.__file.parent.api;
    }
    get children() {
      return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t2) => !t2.isNonIndexable).sort((t2, e3) => t2.isMeta && e3.isMeta ? 0 : (t2 = (t2.meta.index || t2.meta.title || t2.path).toString(), e3 = (e3.meta.index || e3.meta.title || e3.path).toString(), t2.localeCompare(e3, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t2}) => t2);
    }
    get next() {
      return Ae(this, 1);
    }
    get prev() {
      return Ae(this, -1);
    }
    async preload() {
      const t2 = [...this.__file.layouts, this.__file, this.index && this.index.__file].filter(Boolean).map((t3) => t3.component());
      await Promise.all(t2);
    }
    get component() {
      return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
    }
    get componentWithIndex() {
      return new Promise((t2) => Promise.all([this.component, this.index && this.index.component]).then((e3) => t2(e3)));
    }
    get index() {
      const t2 = this.__file.children && this.__file.children.find((t3) => t3.isIndex);
      return t2 && t2.api;
    }
  };
  function Ae(t2, e3) {
    if (!t2.__file.root) {
      const n2 = t2.parent.children.indexOf(t2);
      return t2.parent.children[n2 + e3];
    }
  }
  var Fe = {...Le, restoreDefaults: ({tree: t2}) => Se(t2), assignAPI: Ne};

  // dist/build/store-2ccf8e64.js
  var s = xt({});
  var a = xt({});
  var e = ((s3, a3) => {
    const {subscribe: e3, set: o3, update: r2} = xt(a3);
    return {subscribe: e3, set: o3, update: r2, useLocalStorage: () => {
      const t2 = localStorage.getItem(s3);
      t2 && o3(JSON.parse(t2)), e3((t3) => {
        localStorage.setItem(s3, JSON.stringify(t3));
      });
    }};
  })("cart", {total: 0, amount: 0, products: []});

  // dist/build/fetch-f3058738.js
  async function o(o3 = "", t2 = "", a3 = "") {
    const n2 = await fetch(`http://foodis.dataline.fi/pw/${o3}`, {method: t2 ? "POST" : "GET", mode: "cors", cache: "no-cache", headers: {"Content-Type": "application/json", ...a3 ? {Authorization: `Bearer ${a3}`} : void 0}, body: t2 ? JSON.stringify(t2) : null});
    return await n2.json();
  }

  // dist/build/main.js
  var Me = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => require_fallback_e2a75ff0()).then((t2) => t2.default)}, {isDir: true, children: [{isDir: true, ext: "", children: [{isIndex: true, isPage: true, path: "/:cat/:slug/index", id: "__cat__slug_index", component: () => Promise.resolve().then(() => require_index_77cca0dc()).then((t2) => t2.default)}], path: "/:cat/:slug"}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => require_index_a475e41a()).then((t2) => t2.default)}], isLayout: true, path: "/:cat", id: "__cat__layout", component: () => Promise.resolve().then(() => require_layout_a3755391()).then((t2) => t2.default)}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => require_index_00e6776a()).then((t2) => t2.default)}, {isPage: true, path: "/kassa", id: "_kassa", component: () => Promise.resolve().then(() => require_kassa_7997fa0f()).then((t2) => t2.default)}, {isPage: true, path: "/maksu", id: "_maksu", component: () => Promise.resolve().then(() => require_maksu_1fe1d0bf()).then((t2) => t2.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => require_layout_0ac71bbb()).then((t2) => t2.default)};
  var {tree: Re, routes: Ce} = function(t2) {
    const e3 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
    for (let t3 of e3) {
      (Fe[t3].sync || Fe[t3])(n2);
    }
    return n2;
  }(Me);
  function qe(e3) {
    let n2, o3;
    return n2 = new fe({props: {routes: Ce}}), {c() {
      rt(n2.$$.fragment);
    }, m(t2, e4) {
      st(n2, t2, e4), o3 = true;
    }, p: t, i(t2) {
      o3 || (Y(n2.$$.fragment, t2), o3 = true);
    }, o(t2) {
      tt(n2.$$.fragment, t2), o3 = false;
    }, d(t2) {
      it(n2, t2);
    }};
  }
  !function(t2, e3 = {target: document.body}, n2 = "hmr", o3 = "app-loaded") {
    const r2 = document.getElementById(n2), s3 = document.createElement("div");
    function i2() {
      removeEventListener(o3, i2), r2 && r2.remove(), s3.style.visibility = null, s3.setAttribute("id", n2);
    }
    s3.style.visibility = "hidden", e3.target.appendChild(s3), r2 ? addEventListener(o3, i2) : i2(), new t2({...e3, target: s3});
  }(class extends ct {
    constructor(t2) {
      super(), at(this, t2, null, qe, i, {});
    }
  }, {target: document.body}, "routify-app");
})();
