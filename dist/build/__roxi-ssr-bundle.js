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

  // dist/build/_fallback-c46e4570.js
  var require_fallback_c46e4570 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => fallback_c46e4570_default2
    });
    function m2(s2) {
      let a2, e2, d2, f2, v2, m3, p4, g2;
      return {c() {
        a2 = w("div"), e2 = w("div"), e2.textContent = "404", d2 = v(), f2 = w("div"), v2 = x("Page not found.\n    \n    "), m3 = w("a"), p4 = x("Go back"), j(e2, "class", "huge svelte-viq1pm"), j(m3, "href", g2 = s2[0]("../")), j(f2, "class", "big"), j(a2, "class", "e404 svelte-viq1pm");
      }, m(s3, t2) {
        y(s3, a2, t2), g(a2, e2), g(a2, d2), g(a2, f2), g(f2, v2), g(f2, m3), g(m3, p4);
      }, p(s3, [a3]) {
        1 & a3 && g2 !== (g2 = s3[0]("../")) && j(m3, "href", g2);
      }, i: t, o: t, d(s3) {
        s3 && $(a2);
      }};
    }
    function p3(s2, a2, e2) {
      let t2, n3;
      return l2(s2, Ht, (s3) => e2(1, t2 = s3)), l2(s2, Gt, (s3) => e2(0, n3 = s3)), t2(), [n3];
    }
    var fallback_c46e4570_default = class extends ct {
      constructor(s2) {
        super(), at(this, s2, p3, m2, i2, {});
      }
    };
    var fallback_c46e4570_default2 = fallback_c46e4570_default;
  });

  // dist/build/index-cbf4ddc7.js
  var require_index_cbf4ddc7 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_cbf4ddc7_default2
    });
    function L2(t2, n3, e2) {
      const l3 = t2.slice();
      return l3[12] = n3[e2], l3;
    }
    function j2(t2, n3, e2) {
      const l3 = t2.slice();
      return l3[12] = n3[e2], l3;
    }
    function k2(t2) {
      let n3, e2, a2, m2, f2, h2, v2, b2, y2, $2, x2, D2, H2, L3, j3, k3, T3, I3, E3 = t2[2].img && F2(t2), N3 = t2[2].price && M2(t2), S3 = t2[2].body && w2(t2), Y2 = t2[2].docs && q2(t2), z2 = t2[2].extra && C2(t2);
      return {c() {
        n3 = w("div"), e2 = w("div"), E3 && E3.c(), a2 = v(), m2 = w("div"), N3 && N3.c(), f2 = v(), h2 = w("div"), v2 = w("div"), b2 = w("div"), y2 = w("input"), $2 = v(), x2 = w("div"), D2 = w("button"), D2.textContent = "Lis\xE4\xE4 ostoskoriin", H2 = v(), L3 = w("div"), S3 && S3.c(), j3 = v(), Y2 && Y2.c(), k3 = v(), z2 && z2.c(), j(e2, "id", "img"), j(y2, "name", "amount"), j(y2, "type", "number"), j(y2, "min", t2[3]), j(y2, "step", "1"), y2.required = true, j(D2, "class", "w100"), j(v2, "id", "cartIt"), j(v2, "class", "border grid"), j(h2, "id", "inputs"), j(L3, "class", "content"), j(m2, "id", "productInfo"), j(n3, "id", "product"), j(n3, "class", "container double grid");
      }, m(l3, i3) {
        y(l3, n3, i3), g(n3, e2), E3 && E3.m(e2, null), g(n3, a2), g(n3, m2), N3 && N3.m(m2, null), g(m2, f2), g(m2, h2), g(h2, v2), g(v2, b2), g(b2, y2), L(y2, t2[0]), g(v2, $2), g(v2, x2), g(x2, D2), g(m2, H2), g(m2, L3), S3 && S3.m(L3, null), g(L3, j3), Y2 && Y2.m(L3, null), g(L3, k3), z2 && z2.m(L3, null), T3 || (I3 = [k(y2, "input", t2[10]), k(D2, "click", t2[5])], T3 = true);
      }, p(t3, n4) {
        t3[2].img ? E3 ? E3.p(t3, n4) : (E3 = F2(t3), E3.c(), E3.m(e2, null)) : E3 && (E3.d(1), E3 = null), t3[2].price ? N3 ? N3.p(t3, n4) : (N3 = M2(t3), N3.c(), N3.m(m2, f2)) : N3 && (N3.d(1), N3 = null), 8 & n4 && j(y2, "min", t3[3]), 1 & n4 && E(y2.value) !== t3[0] && L(y2, t3[0]), t3[2].body ? S3 ? S3.p(t3, n4) : (S3 = w2(t3), S3.c(), S3.m(L3, j3)) : S3 && (S3.d(1), S3 = null), t3[2].docs ? Y2 ? Y2.p(t3, n4) : (Y2 = q2(t3), Y2.c(), Y2.m(L3, k3)) : Y2 && (Y2.d(1), Y2 = null), t3[2].extra ? z2 ? z2.p(t3, n4) : (z2 = C2(t3), z2.c(), z2.m(L3, null)) : z2 && (z2.d(1), z2 = null);
      }, d(t3) {
        t3 && $(n3), E3 && E3.d(), N3 && N3.d(), S3 && S3.d(), Y2 && Y2.d(), z2 && z2.d(), T3 = false, r2(I3);
      }};
    }
    function F2(t2) {
      let n3, e2, s2, u2, a2, m2, p3, f2, g2, h2;
      return {c() {
        n3 = w("picture"), e2 = w("source"), u2 = v(), a2 = w("source"), p3 = v(), f2 = w("img"), j(e2, "srcset", s2 = t2[2].img[0][1]), j(e2, "type", "image/webp"), j(a2, "srcset", m2 = t2[2].img[0][0]), j(a2, "type", "image/jpeg"), f2.src !== (g2 = t2[2].img[0][0]) && j(f2, "src", g2), j(f2, "alt", h2 = t2[2].title), j(n3, "class", "block");
      }, m(t3, l3) {
        y(t3, n3, l3), g(n3, e2), g(n3, u2), g(n3, a2), g(n3, p3), g(n3, f2);
      }, p(t3, n4) {
        4 & n4 && s2 !== (s2 = t3[2].img[0][1]) && j(e2, "srcset", s2), 4 & n4 && m2 !== (m2 = t3[2].img[0][0]) && j(a2, "srcset", m2), 4 & n4 && f2.src !== (g2 = t3[2].img[0][0]) && j(f2, "src", g2), 4 & n4 && h2 !== (h2 = t3[2].title) && j(f2, "alt", h2);
      }, d(t3) {
        t3 && $(n3);
      }};
    }
    function M2(t2) {
      let n3, e2, s2, u2, p3, f2, g2 = t2[1].toFixed(2) + "", h2 = t2[0] > 1 && T2(t2);
      return {c() {
        n3 = w("div"), e2 = x("Hinta: "), s2 = w("strong"), u2 = x(g2), p3 = x(" \u20AC"), f2 = v(), h2 && h2.c(), j(n3, "id", "price");
      }, m(t3, l3) {
        y(t3, n3, l3), g(n3, e2), g(n3, s2), g(s2, u2), g(s2, p3), g(n3, f2), h2 && h2.m(n3, null);
      }, p(t3, e3) {
        2 & e3 && g2 !== (g2 = t3[1].toFixed(2) + "") && O(u2, g2), t3[0] > 1 ? h2 ? h2.p(t3, e3) : (h2 = T2(t3), h2.c(), h2.m(n3, null)) : h2 && (h2.d(1), h2 = null);
      }, d(t3) {
        t3 && $(n3), h2 && h2.d();
      }};
    }
    function T2(t2) {
      let n3, e2, c3, s2, u2, p3, f2, g2 = t2[4].toFixed(2) + "";
      return {c() {
        n3 = w("br"), e2 = v(), c3 = w("small"), s2 = x("Yhteens\xE4: "), u2 = w("strong"), p3 = x(g2), f2 = x(" \u20AC");
      }, m(t3, l3) {
        y(t3, n3, l3), y(t3, e2, l3), y(t3, c3, l3), g(c3, s2), g(c3, u2), g(u2, p3), g(u2, f2);
      }, p(t3, n4) {
        16 & n4 && g2 !== (g2 = t3[4].toFixed(2) + "") && O(p3, g2);
      }, d(t3) {
        t3 && $(n3), t3 && $(e2), t3 && $(c3);
      }};
    }
    function w2(t2) {
      let n3, e2 = t2[2].body + "";
      return {c() {
        n3 = w("div"), j(n3, "id", "body");
      }, m(t3, l3) {
        y(t3, n3, l3), n3.innerHTML = e2;
      }, p(t3, l3) {
        4 & l3 && e2 !== (e2 = t3[2].body + "") && (n3.innerHTML = e2);
      }, d(t3) {
        t3 && $(n3);
      }};
    }
    function q2(t2) {
      let n3, e2, i3 = t2[2].docs, s2 = [];
      for (let n4 = 0; n4 < i3.length; n4 += 1)
        s2[n4] = I2(j2(t2, i3, n4));
      return {c() {
        n3 = w("div"), e2 = w("ul");
        for (let t3 = 0; t3 < s2.length; t3 += 1)
          s2[t3].c();
        j(n3, "id", "docs");
      }, m(t3, l3) {
        y(t3, n3, l3), g(n3, e2);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          s2[t4].m(e2, null);
      }, p(t3, n4) {
        if (4 & n4) {
          let l3;
          for (i3 = t3[2].docs, l3 = 0; l3 < i3.length; l3 += 1) {
            const c3 = j2(t3, i3, l3);
            s2[l3] ? s2[l3].p(c3, n4) : (s2[l3] = I2(c3), s2[l3].c(), s2[l3].m(e2, null));
          }
          for (; l3 < s2.length; l3 += 1)
            s2[l3].d(1);
          s2.length = i3.length;
        }
      }, d(t3) {
        t3 && $(n3), b(s2, t3);
      }};
    }
    function I2(t2) {
      let n3, e2, s2, u2, p3, f2, g2 = t2[12].label + "";
      return {c() {
        n3 = w("li"), e2 = w("a"), s2 = x(g2), u2 = x(" \u2192"), f2 = v(), j(e2, "href", p3 = t2[12].value), j(e2, "rel", "nofollow");
      }, m(t3, l3) {
        y(t3, n3, l3), g(n3, e2), g(e2, s2), g(e2, u2), g(n3, f2);
      }, p(t3, n4) {
        4 & n4 && g2 !== (g2 = t3[12].label + "") && O(s2, g2), 4 & n4 && p3 !== (p3 = t3[12].value) && j(e2, "href", p3);
      }, d(t3) {
        t3 && $(n3);
      }};
    }
    function C2(t2) {
      let n3, e2, i3 = t2[2].extra, s2 = [];
      for (let n4 = 0; n4 < i3.length; n4 += 1)
        s2[n4] = E2(L2(t2, i3, n4));
      return {c() {
        n3 = w("div"), e2 = w("ul");
        for (let t3 = 0; t3 < s2.length; t3 += 1)
          s2[t3].c();
        j(n3, "id", "extra");
      }, m(t3, l3) {
        y(t3, n3, l3), g(n3, e2);
        for (let t4 = 0; t4 < s2.length; t4 += 1)
          s2[t4].m(e2, null);
      }, p(t3, n4) {
        if (4 & n4) {
          let l3;
          for (i3 = t3[2].extra, l3 = 0; l3 < i3.length; l3 += 1) {
            const c3 = L2(t3, i3, l3);
            s2[l3] ? s2[l3].p(c3, n4) : (s2[l3] = E2(c3), s2[l3].c(), s2[l3].m(e2, null));
          }
          for (; l3 < s2.length; l3 += 1)
            s2[l3].d(1);
          s2.length = i3.length;
        }
      }, d(t3) {
        t3 && $(n3), b(s2, t3);
      }};
    }
    function E2(t2) {
      let n3, e2 = t2[12].name + "";
      return {c() {
        n3 = w("li");
      }, m(t3, l3) {
        y(t3, n3, l3), n3.innerHTML = e2;
      }, p(t3, l3) {
        4 & l3 && e2 !== (e2 = t3[12].name + "") && (n3.innerHTML = e2);
      }, d(t3) {
        t3 && $(n3);
      }};
    }
    function N2(t2) {
      let n3, e2 = t2[2] && k2(t2);
      return {c() {
        e2 && e2.c(), n3 = P();
      }, m(t3, l3) {
        e2 && e2.m(t3, l3), y(t3, n3, l3);
      }, p(t3, [l3]) {
        t3[2] ? e2 ? e2.p(t3, l3) : (e2 = k2(t3), e2.c(), e2.m(n3.parentNode, n3)) : e2 && (e2.d(1), e2 = null);
      }, i: t, o: t, d(t3) {
        e2 && e2.d(t3), t3 && $(n3);
      }};
    }
    function S2(t2, n3, e2) {
      let l3, i3, c3, r3, o3, s2, u2, d2, a2, m2;
      return l2(t2, r, (t3) => e2(2, s2 = t3)), l2(t2, i, (t3) => e2(11, u2 = t3)), l2(t2, Wt, (t3) => e2(8, d2 = t3)), l2(t2, p, (t3) => e2(9, a2 = t3)), t2.$$.update = () => {
        4 & t2.$$.dirty && e2(1, c3 = s2.price), 256 & t2.$$.dirty && e2(7, o3 = d2.slug.replace(/<\/?[^>]+(>|$)/g, "")), 708 & t2.$$.dirty && o3 != m2 && (e2(6, m2 = o3), a2(o3).then(function(t3) {
          r.set(t3), s2.amountDiscounts && s2.amountDiscounts[0] && e2(0, l3 = e2(3, i3 = s2.amountDiscounts[0].amount));
        })), 7 & t2.$$.dirty && s2 && l3 && (s2.amountDiscounts && (e2(1, c3 = s2.price), s2.amountDiscounts.forEach(function(t3) {
          t3.amount <= l3 && e2(1, c3 = t3.price);
        })), e2(4, r3 = c3 * l3)), 3 & t2.$$.dirty && e2(4, r3 = l3 * c3);
      }, e2(0, l3 = 1), e2(3, i3 = 1), [l3, c3, s2, i3, r3, function() {
        let t3 = {id: s2.id, title: s2.title, price: s2.price, current: c3, amount: l3, vat: 14, total: r3};
        s2.amountDiscounts, f(i, u2.total += r3, u2), f(i, u2.amount += l3, u2), u2.products.push(t3);
      }, m2, o3, d2, a2, function() {
        l3 = E(this.value), e2(0, l3), e2(7, o3), e2(6, m2), e2(9, a2), e2(2, s2), e2(8, d2);
      }];
    }
    var index_cbf4ddc7_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, S2, N2, i2, {});
      }
    };
    var index_cbf4ddc7_default2 = index_cbf4ddc7_default;
  });

  // dist/build/index-1b3af9bb.js
  var require_index_1b3af9bb = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_1b3af9bb_default2
    });
    function x2(t2, e2, l3) {
      const n3 = t2.slice();
      return n3[5] = e2[l3], n3;
    }
    function y2(t2, e2, l3) {
      const n3 = t2.slice();
      return n3[5] = e2[l3], n3;
    }
    function $2(t2) {
      let e2, l3 = t2[0].body + "";
      return {c() {
        e2 = w("div"), j(e2, "id", "body");
      }, m(t3, n3) {
        y(t3, e2, n3), e2.innerHTML = l3;
      }, p(t3, n3) {
        1 & n3 && l3 !== (l3 = t3[0].body + "") && (e2.innerHTML = l3);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function v2(t2) {
      let e2, l3 = t2[0].items, i3 = [];
      for (let e3 = 0; e3 < l3.length; e3 += 1)
        i3[e3] = F2(x2(t2, l3, e3));
      return {c() {
        e2 = w("div");
        for (let t3 = 0; t3 < i3.length; t3 += 1)
          i3[t3].c();
        j(e2, "id", "products"), j(e2, "class", "tc grid bold");
      }, m(t3, l4) {
        y(t3, e2, l4);
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].m(e2, null);
      }, p(t3, n3) {
        if (1 & n3) {
          let r3;
          for (l3 = t3[0].items, r3 = 0; r3 < l3.length; r3 += 1) {
            const s2 = x2(t3, l3, r3);
            i3[r3] ? i3[r3].p(s2, n3) : (i3[r3] = F2(s2), i3[r3].c(), i3[r3].m(e2, null));
          }
          for (; r3 < i3.length; r3 += 1)
            i3[r3].d(1);
          i3.length = l3.length;
        }
      }, d(t3) {
        t3 && $(e2), b(i3, t3);
      }};
    }
    function j2(t2) {
      let e2, l3, i3, u2, p3, g2, f2, h2, b2, x3, y3, $3, v3, j3, k3, F3, H3, L3, M2, T2, q2, w2 = t2[5].title + "", S2 = t2[5].price.toFixed(2) + "", z2 = t2[5].extra && N2(t2);
      return {c() {
        e2 = w("a"), l3 = w("picture"), i3 = w("source"), p3 = v(), g2 = w("source"), h2 = v(), b2 = w("img"), $3 = v(), v3 = w("div"), j3 = x(w2), k3 = v(), F3 = w("div"), H3 = x(S2), L3 = x(" \u20AC"), M2 = v(), z2 && z2.c(), T2 = v(), j(i3, "srcset", u2 = t2[5].img[1]), j(i3, "type", "image/webp"), j(g2, "srcset", f2 = t2[5].img[0]), j(g2, "type", "image/jpeg"), b2.src !== (x3 = t2[5].img[0]) && j(b2, "src", x3), j(b2, "alt", y3 = t2[5].title), j(l3, "class", "block"), j(v3, "class", "title"), j(F3, "class", "price"), j(e2, "class", "block"), j(e2, "href", q2 = t2[5].path);
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, l3), g(l3, i3), g(l3, p3), g(l3, g2), g(l3, h2), g(l3, b2), g(e2, $3), g(e2, v3), g(v3, j3), g(e2, k3), g(e2, F3), g(F3, H3), g(F3, L3), g(e2, M2), z2 && z2.m(e2, null), g(e2, T2);
      }, p(t3, l4) {
        1 & l4 && u2 !== (u2 = t3[5].img[1]) && j(i3, "srcset", u2), 1 & l4 && f2 !== (f2 = t3[5].img[0]) && j(g2, "srcset", f2), 1 & l4 && b2.src !== (x3 = t3[5].img[0]) && j(b2, "src", x3), 1 & l4 && y3 !== (y3 = t3[5].title) && j(b2, "alt", y3), 1 & l4 && w2 !== (w2 = t3[5].title + "") && O(j3, w2), 1 & l4 && S2 !== (S2 = t3[5].price.toFixed(2) + "") && O(H3, S2), t3[5].extra ? z2 ? z2.p(t3, l4) : (z2 = N2(t3), z2.c(), z2.m(e2, T2)) : z2 && (z2.d(1), z2 = null), 1 & l4 && q2 !== (q2 = t3[5].path) && j(e2, "href", q2);
      }, d(t3) {
        t3 && $(e2), z2 && z2.d();
      }};
    }
    function N2(t2) {
      let e2, l3 = t2[5].extra, i3 = [];
      for (let e3 = 0; e3 < l3.length; e3 += 1)
        i3[e3] = k2(y2(t2, l3, e3));
      return {c() {
        e2 = w("div");
        for (let t3 = 0; t3 < i3.length; t3 += 1)
          i3[t3].c();
        j(e2, "class", "extra");
      }, m(t3, l4) {
        y(t3, e2, l4);
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].m(e2, null);
      }, p(t3, n3) {
        if (1 & n3) {
          let r3;
          for (l3 = t3[5].extra, r3 = 0; r3 < l3.length; r3 += 1) {
            const s2 = y2(t3, l3, r3);
            i3[r3] ? i3[r3].p(s2, n3) : (i3[r3] = k2(s2), i3[r3].c(), i3[r3].m(e2, null));
          }
          for (; r3 < i3.length; r3 += 1)
            i3[r3].d(1);
          i3.length = l3.length;
        }
      }, d(t3) {
        t3 && $(e2), b(i3, t3);
      }};
    }
    function k2(t2) {
      let e2, l3, i3, u2, p3 = t2[5].abbr + "";
      return {c() {
        e2 = w("div"), l3 = w("span"), i3 = x(p3), u2 = v(), j(l3, "class", "grid cell"), j(e2, "class", "inl");
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, l3), g(l3, i3), g(e2, u2);
      }, p(t3, e3) {
        1 & e3 && p3 !== (p3 = t3[5].abbr + "") && O(i3, p3);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function F2(t2) {
      let e2, l3 = t2[5].img && j2(t2);
      return {c() {
        l3 && l3.c(), e2 = P();
      }, m(t3, n3) {
        l3 && l3.m(t3, n3), y(t3, e2, n3);
      }, p(t3, n3) {
        t3[5].img ? l3 ? l3.p(t3, n3) : (l3 = j2(t3), l3.c(), l3.m(e2.parentNode, e2)) : l3 && (l3.d(1), l3 = null);
      }, d(t3) {
        l3 && l3.d(t3), t3 && $(e2);
      }};
    }
    function H2(t2) {
      let e2, l3, n3 = t2[0].body && $2(t2), r3 = t2[0].items && v2(t2);
      return {c() {
        n3 && n3.c(), e2 = v(), r3 && r3.c(), l3 = P();
      }, m(t3, c3) {
        n3 && n3.m(t3, c3), y(t3, e2, c3), r3 && r3.m(t3, c3), y(t3, l3, c3);
      }, p(t3, [s2]) {
        t3[0].body ? n3 ? n3.p(t3, s2) : (n3 = $2(t3), n3.c(), n3.m(e2.parentNode, e2)) : n3 && (n3.d(1), n3 = null), t3[0].items ? r3 ? r3.p(t3, s2) : (r3 = v2(t3), r3.c(), r3.m(l3.parentNode, l3)) : r3 && (r3.d(1), r3 = null);
      }, i: t, o: t, d(t3) {
        n3 && n3.d(t3), t3 && $(e2), r3 && r3.d(t3), t3 && $(l3);
      }};
    }
    function L2(t2, e2, l3) {
      let n3, r3, s2, c3, i3;
      return l2(t2, Wt, (t3) => l3(3, r3 = t3)), l2(t2, o, (t3) => l3(4, s2 = t3)), l2(t2, r, (t3) => l3(0, c3 = t3)), t2.$$.update = () => {
        8 & t2.$$.dirty && l3(2, n3 = r3.cat.replace(/<\/?[^>]+(>|$)/g, "")), 22 & t2.$$.dirty && n3 != i3 && (l3(1, i3 = n3), fetch(s2 + n3).then((t3) => t3.json()).then((t3) => {
          r.set(t3);
        }));
      }, [c3, i3, n3, r3, s2];
    }
    var index_1b3af9bb_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, L2, H2, i2, {});
      }
    };
    var index_1b3af9bb_default2 = index_1b3af9bb_default;
  });

  // dist/build/_layout-226d1c9b.js
  var require_layout_226d1c9b = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_226d1c9b_default2
    });
    function c3(s2) {
      let t2;
      const e2 = s2[1].default, c4 = u(e2, s2, s2[0], null);
      return {c() {
        c4 && c4.c();
      }, m(s3, e3) {
        c4 && c4.m(s3, e3), t2 = true;
      }, p(s3, [n3]) {
        c4 && c4.p && (!t2 || 1 & n3) && d(c4, e2, s3, s3[0], n3, null, null);
      }, i(s3) {
        t2 || (Y(c4, s3), t2 = true);
      }, o(s3) {
        tt(c4, s3), t2 = false;
      }, d(s3) {
        c4 && c4.d(s3);
      }};
    }
    function u2(s2, t2, e2) {
      let {$$slots: n3 = {}, $$scope: o3} = t2;
      return s2.$$set = (s3) => {
        "$$scope" in s3 && e2(0, o3 = s3.$$scope);
      }, [o3, n3];
    }
    var layout_226d1c9b_default = class extends ct {
      constructor(s2) {
        super(), at(this, s2, u2, c3, i2, {});
      }
    };
    var layout_226d1c9b_default2 = layout_226d1c9b_default;
  });

  // dist/build/index-6c0d0aba.js
  var require_index_6c0d0aba = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => index_6c0d0aba_default2
    });
    function d2(t2, s2, e2) {
      const l3 = t2.slice();
      return l3[1] = s2[e2], l3;
    }
    function h2(t2) {
      let s2, e2, l3, g2, m2, u2, p3, f2, d3, h3, b3, k3, j3, v2, x2, y2, H2 = t2[1].title + "";
      return {c() {
        s2 = w("a"), e2 = w("figure"), l3 = w("picture"), g2 = w("source"), u2 = v(), p3 = w("source"), d3 = v(), h3 = w("img"), j3 = v(), v2 = w("figcaption"), x2 = v(), j(g2, "srcset", m2 = t2[1].img[1]), j(g2, "type", "image/webp"), j(p3, "srcset", f2 = t2[1].img[0]), j(p3, "type", "image/jpeg"), h3.src !== (b3 = t2[1].img[0]) && j(h3, "src", b3), j(h3, "alt", k3 = t2[1].title), j(l3, "class", "block"), j(v2, "class", "block"), j(e2, "class", "block"), j(s2, "class", "block"), j(s2, "href", y2 = t2[1].path);
      }, m(t3, r3) {
        y(t3, s2, r3), g(s2, e2), g(e2, l3), g(l3, g2), g(l3, u2), g(l3, p3), g(l3, d3), g(l3, h3), g(e2, j3), g(e2, v2), v2.innerHTML = H2, g(s2, x2);
      }, p(t3, e3) {
        1 & e3 && m2 !== (m2 = t3[1].img[1]) && j(g2, "srcset", m2), 1 & e3 && f2 !== (f2 = t3[1].img[0]) && j(p3, "srcset", f2), 1 & e3 && h3.src !== (b3 = t3[1].img[0]) && j(h3, "src", b3), 1 & e3 && k3 !== (k3 = t3[1].title) && j(h3, "alt", k3), 1 & e3 && H2 !== (H2 = t3[1].title + "") && (v2.innerHTML = H2), 1 & e3 && y2 !== (y2 = t3[1].path) && j(s2, "href", y2);
      }, d(t3) {
        t3 && $(s2);
      }};
    }
    function b2(t2) {
      let s2, e2 = t2[1].img && h2(t2);
      return {c() {
        e2 && e2.c(), s2 = P();
      }, m(t3, l3) {
        e2 && e2.m(t3, l3), y(t3, s2, l3);
      }, p(t3, l3) {
        t3[1].img ? e2 ? e2.p(t3, l3) : (e2 = h2(t3), e2.c(), e2.m(s2.parentNode, s2)) : e2 && (e2.d(1), e2 = null);
      }, d(t3) {
        e2 && e2.d(t3), t3 && $(s2);
      }};
    }
    function k2(t2) {
      let s2, e2 = t2[0].nav, l3 = [];
      for (let s3 = 0; s3 < e2.length; s3 += 1)
        l3[s3] = b2(d2(t2, e2, s3));
      return {c() {
        s2 = w("div");
        for (let t3 = 0; t3 < l3.length; t3 += 1)
          l3[t3].c();
        j(s2, "id", "products"), j(s2, "class", "tc grid up bold");
      }, m(t3, e3) {
        y(t3, s2, e3);
        for (let t4 = 0; t4 < l3.length; t4 += 1)
          l3[t4].m(s2, null);
      }, p(t3, [i3]) {
        if (1 & i3) {
          let r3;
          for (e2 = t3[0].nav, r3 = 0; r3 < e2.length; r3 += 1) {
            const c3 = d2(t3, e2, r3);
            l3[r3] ? l3[r3].p(c3, i3) : (l3[r3] = b2(c3), l3[r3].c(), l3[r3].m(s2, null));
          }
          for (; r3 < l3.length; r3 += 1)
            l3[r3].d(1);
          l3.length = e2.length;
        }
      }, i: t, o: t, d(t3) {
        t3 && $(s2), b(l3, t3);
      }};
    }
    function j2(t2, s2, e2) {
      let l3;
      return l2(t2, n, (t3) => e2(0, l3 = t3)), l3.site && r.set({title: l3.site.title, slogan: l3.site.slogan}), [l3];
    }
    var index_6c0d0aba_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, j2, k2, i2, {});
      }
    };
    var index_6c0d0aba_default2 = index_6c0d0aba_default;
  });

  // dist/build/kassa-c962830e.js
  var require_kassa_c962830e = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => kassa_c962830e_default2
    });
    function A2(t2, e2, n3) {
      const l3 = t2.slice();
      return l3[20] = e2[n3], l3[21] = e2, l3[22] = n3, l3;
    }
    function H2(t2, e2, n3) {
      const l3 = t2.slice();
      return l3[20] = e2[n3], l3[23] = e2, l3[24] = n3, l3;
    }
    function N2(t2) {
      let e2, n3, u2, d2, m2, f2, v2, x2, y2, b2, g2, k2, $2, C2, F2, T2, w2, M2, I2, L2, j2, N3, S3, q3, z3, Y3, D3, G3, J3, X3, O3, Q3, R3, U3, W3, Z3, _3, tt3, et3, nt3, lt3, st3, at3, ot3, ct3 = t2[2].total.toFixed(2) + "", rt3 = t2[6].toFixed(2) + "", it3 = t2[3].toFixed(2) + "", ut3 = t2[5].body && E2(t2), dt2 = t2[2].products, mt2 = [];
      for (let e3 = 0; e3 < dt2.length; e3 += 1)
        mt2[e3] = K2(H2(t2, dt2, e3));
      let pt2 = t2[0].distance && !t2[1] && B2(t2), ft2 = t2[9], vt2 = [];
      for (let e3 = 0; e3 < ft2.length; e3 += 1)
        vt2[e3] = V2(A2(t2, ft2, e3));
      let ht2 = t2[2].customer.name1 && t2[2].customer.name2 && t2[2].customer.street && t2[2].customer.postal && t2[2].customer.area && P2(t2);
      return {c() {
        e2 = w("div"), ut3 && ut3.c(), n3 = v(), u2 = w("div"), d2 = w("div"), m2 = w("h2"), m2.textContent = "Tuotteet", f2 = v(), v2 = w("table"), x2 = w("thead"), x2.innerHTML = '<tr><th class="tl">Tuote</th> \n							<th class="tc">Hinta</th> \n							<th class="tc">M\xE4\xE4r\xE4</th> \n							<th class="tc">Yhteens\xE4</th> \n							<th></th></tr>', y2 = v(), b2 = w("tbody");
        for (let t3 = 0; t3 < mt2.length; t3 += 1)
          mt2[t3].c();
        g2 = v(), k2 = w("div"), $2 = w("h2"), $2.textContent = "Maksutiedot", C2 = v(), F2 = w("table"), T2 = w("tbody"), w2 = w("tr"), M2 = w("td"), M2.textContent = "Tuotteet yhteens\xE4", I2 = v(), L2 = w("td"), j2 = x(ct3), N3 = x(" \u20AC"), S3 = v(), pt2 && pt2.c(), q3 = v(), z3 = w("tr"), Y3 = w("td"), Y3.textContent = "ALV 10%", D3 = v(), G3 = w("td"), J3 = x(rt3), X3 = x(" \u20AC"), O3 = v(), Q3 = w("tr"), R3 = w("td"), R3.textContent = "Tilaus yhteens\xE4", U3 = v(), W3 = w("td"), Z3 = x(it3), _3 = x(" \u20AC"), tt3 = v(), et3 = w("div"), nt3 = w("div"), lt3 = w("h2"), lt3.textContent = "Asiakastiedot", st3 = v(), at3 = w("div");
        for (let t3 = 0; t3 < vt2.length; t3 += 1)
          vt2[t3].c();
        ot3 = v(), ht2 && ht2.c(), j(m2, "class", "mb-4"), j(x2, "class", "svelte-tonrnl"), j(v2, "id", "productList"), j(v2, "class", "w100 svelte-tonrnl"), j(v2, "rules", "rows"), j($2, "class", "mt-4 mb-4"), j(M2, "class", "label tl"), j(L2, "class", "value tr"), j(Y3, "class", "label tl"), j(G3, "class", "value tr"), j(R3, "class", "label tl"), j(W3, "class", "value tr"), j(F2, "class", "w100"), j(k2, "id", "paymentInfo"), j(k2, "class", "item svelte-tonrnl"), j(d2, "class", "item"), j(lt3, "class", "mb-4"), j(at3, "class", "grid"), j(nt3, "id", "client"), j(nt3, "class", "item"), j(et3, "class", "items"), j(u2, "id", "tables"), j(u2, "class", "grid svelte-tonrnl"), j(e2, "id", "checkout"), j(e2, "class", "container rel");
      }, m(t3, l3) {
        y(t3, e2, l3), ut3 && ut3.m(e2, null), g(e2, n3), g(e2, u2), g(u2, d2), g(d2, m2), g(d2, f2), g(d2, v2), g(v2, x2), g(v2, y2), g(v2, b2);
        for (let t4 = 0; t4 < mt2.length; t4 += 1)
          mt2[t4].m(b2, null);
        g(d2, g2), g(d2, k2), g(k2, $2), g(k2, C2), g(k2, F2), g(F2, T2), g(T2, w2), g(w2, M2), g(w2, I2), g(w2, L2), g(L2, j2), g(L2, N3), g(T2, S3), pt2 && pt2.m(T2, null), g(T2, q3), g(T2, z3), g(z3, Y3), g(z3, D3), g(z3, G3), g(G3, J3), g(G3, X3), g(T2, O3), g(T2, Q3), g(Q3, R3), g(Q3, U3), g(Q3, W3), g(W3, Z3), g(W3, _3), g(u2, tt3), g(u2, et3), g(et3, nt3), g(nt3, lt3), g(nt3, st3), g(nt3, at3);
        for (let t4 = 0; t4 < vt2.length; t4 += 1)
          vt2[t4].m(at3, null);
        g(et3, ot3), ht2 && ht2.m(et3, null);
      }, p(t3, l3) {
        if (t3[5].body ? ut3 ? ut3.p(t3, l3) : (ut3 = E2(t3), ut3.c(), ut3.m(e2, n3)) : ut3 && (ut3.d(1), ut3 = null), 260 & l3) {
          let e3;
          for (dt2 = t3[2].products, e3 = 0; e3 < dt2.length; e3 += 1) {
            const n4 = H2(t3, dt2, e3);
            mt2[e3] ? mt2[e3].p(n4, l3) : (mt2[e3] = K2(n4), mt2[e3].c(), mt2[e3].m(b2, null));
          }
          for (; e3 < mt2.length; e3 += 1)
            mt2[e3].d(1);
          mt2.length = dt2.length;
        }
        if (4 & l3 && ct3 !== (ct3 = t3[2].total.toFixed(2) + "") && O(j2, ct3), t3[0].distance && !t3[1] ? pt2 ? pt2.p(t3, l3) : (pt2 = B2(t3), pt2.c(), pt2.m(T2, q3)) : pt2 && (pt2.d(1), pt2 = null), 64 & l3 && rt3 !== (rt3 = t3[6].toFixed(2) + "") && O(J3, rt3), 8 & l3 && it3 !== (it3 = t3[3].toFixed(2) + "") && O(Z3, it3), 516 & l3) {
          let e3;
          for (ft2 = t3[9], e3 = 0; e3 < ft2.length; e3 += 1) {
            const n4 = A2(t3, ft2, e3);
            vt2[e3] ? vt2[e3].p(n4, l3) : (vt2[e3] = V2(n4), vt2[e3].c(), vt2[e3].m(at3, null));
          }
          for (; e3 < vt2.length; e3 += 1)
            vt2[e3].d(1);
          vt2.length = ft2.length;
        }
        t3[2].customer.name1 && t3[2].customer.name2 && t3[2].customer.street && t3[2].customer.postal && t3[2].customer.area ? ht2 ? ht2.p(t3, l3) : (ht2 = P2(t3), ht2.c(), ht2.m(et3, null)) : ht2 && (ht2.d(1), ht2 = null);
      }, d(t3) {
        t3 && $(e2), ut3 && ut3.d(), b(mt2, t3), pt2 && pt2.d(), b(vt2, t3), ht2 && ht2.d();
      }};
    }
    function E2(t2) {
      let e2, n3 = t2[5].body + "";
      return {c() {
        e2 = w("div"), j(e2, "class", "body");
      }, m(t3, l3) {
        y(t3, e2, l3), e2.innerHTML = n3;
      }, p(t3, l3) {
        32 & l3 && n3 !== (n3 = t3[5].body + "") && (e2.innerHTML = n3);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function S2(t2) {
      let e2, n3, u2, h2, x2, y2, b2, g2, k2, $2, C2, F2, T2, w2, M2, I2, L2, j2, A3, H3, N3, E3, S3, K3, B3, V3, P3, Y3, D3, G3 = t2[20].title + "", J3 = t2[20].current.toFixed(2) + "", X3 = t2[20].total.toFixed(2) + "", O3 = t2[20].size && q2(t2), Q3 = t2[20].id && z2(t2);
      function R3() {
        t2[11].call(j2, t2[24]);
      }
      function U3() {
        return t2[12](t2[24]);
      }
      return {c() {
        e2 = w("tr"), n3 = w("td"), u2 = w("strong"), h2 = x(G3), x2 = v(), O3 && O3.c(), y2 = v(), b2 = w("br"), g2 = v(), Q3 && Q3.c(), k2 = v(), $2 = w("td"), C2 = w("span"), C2.textContent = "Hinta:", F2 = v(), T2 = x(J3), w2 = v(), M2 = w("td"), I2 = w("span"), I2.textContent = "M\xE4\xE4r\xE4:", L2 = v(), j2 = w("input"), A3 = v(), H3 = w("td"), N3 = w("span"), N3.textContent = "Yhteens\xE4:", E3 = v(), S3 = x(X3), K3 = v(), B3 = w("td"), V3 = w("button"), V3.textContent = "X", P3 = v(), j(n3, "class", "product tl svelte-tonrnl"), j(C2, "class", "svelte-tonrnl"), j($2, "class", "price tc pt svelte-tonrnl"), j(I2, "class", "svelte-tonrnl"), j(j2, "type", "number"), j(j2, "name", "amount"), j(j2, "class", "svelte-tonrnl"), j(M2, "class", "amount tc svelte-tonrnl"), j(N3, "class", "svelte-tonrnl"), j(H3, "class", "total tc pt svelte-tonrnl"), j(V3, "class", "del noBor"), j(B3, "class", "tr pt svelte-tonrnl");
      }, m(l3, s2) {
        y(l3, e2, s2), g(e2, n3), g(n3, u2), g(u2, h2), g(u2, x2), O3 && O3.m(u2, null), g(n3, y2), g(n3, b2), g(n3, g2), Q3 && Q3.m(n3, null), g(e2, k2), g(e2, $2), g($2, C2), g($2, F2), g($2, T2), g(e2, w2), g(e2, M2), g(M2, I2), g(M2, L2), g(M2, j2), L(j2, t2[2].products[t2[24]].amount), g(e2, A3), g(e2, H3), g(H3, N3), g(H3, E3), g(H3, S3), g(e2, K3), g(e2, B3), g(B3, V3), g(e2, P3), Y3 || (D3 = [k(j2, "input", R3), k(V3, "click", U3)], Y3 = true);
      }, p(e3, l3) {
        t2 = e3, 4 & l3 && G3 !== (G3 = t2[20].title + "") && O(h2, G3), t2[20].size ? O3 ? O3.p(t2, l3) : (O3 = q2(t2), O3.c(), O3.m(u2, null)) : O3 && (O3.d(1), O3 = null), t2[20].id ? Q3 ? Q3.p(t2, l3) : (Q3 = z2(t2), Q3.c(), Q3.m(n3, null)) : Q3 && (Q3.d(1), Q3 = null), 4 & l3 && J3 !== (J3 = t2[20].current.toFixed(2) + "") && O(T2, J3), 4 & l3 && E(j2.value) !== t2[2].products[t2[24]].amount && L(j2, t2[2].products[t2[24]].amount), 4 & l3 && X3 !== (X3 = t2[20].total.toFixed(2) + "") && O(S3, X3);
      }, d(t3) {
        t3 && $(e2), O3 && O3.d(), Q3 && Q3.d(), Y3 = false, r2(D3);
      }};
    }
    function q2(t2) {
      let e2, n3, l3 = t2[20].size + "";
      return {c() {
        e2 = x("- "), n3 = x(l3);
      }, m(t3, l4) {
        y(t3, e2, l4), y(t3, n3, l4);
      }, p(t3, e3) {
        4 & e3 && l3 !== (l3 = t3[20].size + "") && O(n3, l3);
      }, d(t3) {
        t3 && $(e2), t3 && $(n3);
      }};
    }
    function z2(t2) {
      let e2, n3, s2 = t2[20].id + "";
      return {c() {
        e2 = w("small"), n3 = x(s2);
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3);
      }, p(t3, e3) {
        4 & e3 && s2 !== (s2 = t3[20].id + "") && O(n3, s2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function K2(t2) {
      let e2, n3 = t2[20] != null && S2(t2);
      return {c() {
        n3 && n3.c(), e2 = P();
      }, m(t3, l3) {
        n3 && n3.m(t3, l3), y(t3, e2, l3);
      }, p(t3, l3) {
        t3[20] != null ? n3 ? n3.p(t3, l3) : (n3 = S2(t3), n3.c(), n3.m(e2.parentNode, e2)) : n3 && (n3.d(1), n3 = null);
      }, d(t3) {
        n3 && n3.d(t3), t3 && $(e2);
      }};
    }
    function B2(t2) {
      let e2, n3, u2, d2, m2, f2, v2, h2, x2 = t2[0].distance.text + "", y2 = t2[0].price.toFixed(2) + "";
      return {c() {
        e2 = w("tr"), n3 = w("td"), u2 = x("Toimitus, "), d2 = x(x2), m2 = v(), f2 = w("td"), v2 = x(y2), h2 = x(" \u20AC"), j(n3, "class", "label tl"), j(f2, "class", "value tr");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(n3, u2), g(n3, d2), g(e2, m2), g(e2, f2), g(f2, v2), g(f2, h2);
      }, p(t3, e3) {
        1 & e3 && x2 !== (x2 = t3[0].distance.text + "") && O(d2, x2), 1 & e3 && y2 !== (y2 = t3[0].price.toFixed(2) + "") && O(v2, y2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function V2(t2) {
      let e2, n3, u2, p3, f2, v2, h2, x2, y2, b2 = t2[20].title + "";
      function g2() {
        t2[13].call(v2, t2[20]);
      }
      return {c() {
        e2 = w("div"), n3 = w("label"), u2 = w("span"), p3 = x(b2), f2 = v(), v2 = w("input"), h2 = v(), j(u2, "class", "block"), j(v2, "id", t2[20].name), j(v2, "class", "w100 svelte-tonrnl"), j(v2, "name", t2[20].name), j(e2, "class", "item");
      }, m(l3, s2) {
        y(l3, e2, s2), g(e2, n3), g(n3, u2), g(u2, p3), g(n3, f2), g(n3, v2), L(v2, t2[2].customer[t2[20].name]), g(e2, h2), x2 || (y2 = k(v2, "input", g2), x2 = true);
      }, p(e3, n4) {
        t2 = e3, 516 & n4 && v2.value !== t2[2].customer[t2[20].name] && L(v2, t2[2].customer[t2[20].name]);
      }, d(t3) {
        t3 && $(e2), x2 = false, y2();
      }};
    }
    function P2(t2) {
      let e2;
      function n3(t3, e3) {
        return t3[1] ? G2 : t3[0].distance ? D2 : Y2;
      }
      let s2 = n3(t2), a2 = s2(t2);
      return {c() {
        e2 = w("div"), a2.c(), j(e2, "id", "payment"), j(e2, "class", "tc pad svelte-tonrnl");
      }, m(t3, n4) {
        y(t3, e2, n4), a2.m(e2, null);
      }, p(t3, l3) {
        s2 === (s2 = n3(t3)) && a2 ? a2.p(t3, l3) : (a2.d(1), a2 = s2(t3), a2 && (a2.c(), a2.m(e2, null)));
      }, d(t3) {
        t3 && $(e2), a2.d();
      }};
    }
    function Y2(t2) {
      let e2, n3, a2, r3, u2 = t2[4] && J2(t2);
      return {c() {
        u2 && u2.c(), e2 = v(), n3 = w("button"), n3.textContent = "Laske tomituskulut", j(n3, "id", "done"), j(n3, "class", "end up svelte-tonrnl"), j(n3, "name", "shipping");
      }, m(l3, s2) {
        u2 && u2.m(l3, s2), y(l3, e2, s2), y(l3, n3, s2), a2 || (r3 = k(n3, "click", t2[16]), a2 = true);
      }, p(t3, n4) {
        t3[4] ? u2 ? u2.p(t3, n4) : (u2 = J2(t3), u2.c(), u2.m(e2.parentNode, e2)) : u2 && (u2.d(1), u2 = null);
      }, d(t3) {
        u2 && u2.d(t3), t3 && $(e2), t3 && $(n3), a2 = false, r3();
      }};
    }
    function D2(t2) {
      let e2, n3, s2;
      return {c() {
        e2 = w("button"), e2.textContent = "Vahvista tilaus", j(e2, "id", "done"), j(e2, "class", "end up svelte-tonrnl"), j(e2, "name", "done"), j(e2, "type", "submit");
      }, m(l3, a2) {
        y(l3, e2, a2), n3 || (s2 = k(e2, "click", t2[15]), n3 = true);
      }, p: t, d(t3) {
        t3 && $(e2), n3 = false, s2();
      }};
    }
    function G2(t2) {
      let e2, n3, a2, r3, u2;
      return {c() {
        e2 = w("p"), e2.textContent = "Emme toimita verkkokaupasta yli 20 km s\xE4teelle,\n								mutta voitte olla yhteydess\xE4 asiakaspalveluun.", n3 = v(), a2 = w("button"), a2.textContent = "L\xE4het\xE4 tarjouspyynt\xF6", j(a2, "id", "done"), j(a2, "class", "end up svelte-tonrnl"), j(a2, "name", "done"), j(a2, "type", "submit");
      }, m(l3, s2) {
        y(l3, e2, s2), y(l3, n3, s2), y(l3, a2, s2), r3 || (u2 = k(a2, "click", t2[14]), r3 = true);
      }, p: t, d(t3) {
        t3 && $(e2), t3 && $(n3), t3 && $(a2), r3 = false, u2();
      }};
    }
    function J2(t2) {
      let e2, n3;
      return {c() {
        e2 = w("p"), n3 = x(t2[4]);
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3);
      }, p(t3, e3) {
        16 & e3 && O(n3, t3[4]);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function X2(t2) {
      let e2, n3 = t2[2].products[0] && N2(t2);
      return {c() {
        n3 && n3.c(), e2 = P();
      }, m(t3, l3) {
        n3 && n3.m(t3, l3), y(t3, e2, l3);
      }, p(t3, [l3]) {
        t3[2].products[0] ? n3 ? n3.p(t3, l3) : (n3 = N2(t3), n3.c(), n3.m(e2.parentNode, e2)) : n3 && (n3.d(1), n3 = null);
      }, i: t, o: t, d(t3) {
        n3 && n3.d(t3), t3 && $(e2);
      }};
    }
    function O2(t2, e2, n3) {
      let l3, s2, a2, o3, c3, r3;
      l2(t2, r, (t3) => n3(5, a2 = t3)), l2(t2, i, (t3) => n3(2, o3 = t3)), l2(t2, p, (t3) => n3(17, c3 = t3)), l2(t2, Ht, (t3) => n3(18, r3 = t3)), f(r, a2 = {}, a2);
      let i3, u2, d2 = {title: "Toimitusmaksu", price: 0};
      f(i, o3.customer = {name1: "Timo", name2: "Anttila", street: "Lautasuontie 2 A 4", postal: "80400", area: "Joensuu", phone: "0407746121", email: "timo@tuspe.com"}, o3);
      let m2 = {price: [{distance: 5, price: 4.9}, {distance: 10, price: 8.9}, {distance: 20, price: 12.9}], pcs: [{amount: 5, discount: 0}, {amount: 7, discount: 1}, {amount: 10, discount: 2}, {amount: 14, discount: 3}]};
      function p3(t3, e3) {
        c3(t3, e3).then(function(t4) {
          t4.error ? n3(4, u2 = t4.error) : t4.distance ? n3(0, d2.distance = {text: t4.distance.text, value: t4.distance.value / 1e3}, d2) : r.set(t4);
        });
      }
      function v2(t3) {
        f(i, o3.products = o3.products.filter((e3, n4) => n4 !== parseInt(t3) && e3 != null).sort(), o3);
      }
      let h2 = [{title: "Etunimi", type: "text", name: "name1", min: 2, max: 30, req: 1}, {title: "Sukunimi", type: "text", name: "name2", min: 2, max: 30, req: 1}, {title: "Puhelin", type: "text", name: "phone", min: 5, max: 15, req: 1}, {title: "S\xE4hk\xF6posti", type: "email", name: "email", min: 6, max: 100, req: 1}, {title: "Katuosoite", type: "text", name: "street", min: 5, max: 50}, {title: "Postinumero", type: "text", name: "postal", min: 5, max: 5}, {title: "Kaupunki", type: "text", name: "area", min: 3, max: 50}];
      function x2(t3) {
        d2 && f(i, o3.delivery = d2, o3), f(i, o3.total = l3, o3), f(i, o3.vat = s2, o3), parseInt(t3) == 2 ? p3("offer", o3) : f(i, o3.state = 2, o3), r3();
      }
      return t2.$$.update = () => {
        7 & t2.$$.dirty && d2.distance && (d2.distance.value > 20 ? n3(1, i3 = 1) : (i3 && n3(1, i3 = ""), m2.price.forEach(function(t3) {
          if (d2.distance.value <= t3.distance)
            return n3(0, d2.price = t3.price, d2), true;
        }), m2.pcs.forEach(function(t3) {
          if (o3.amount <= t3.amount)
            return n3(0, d2.price = d2.price - t3.discount, d2), true;
        }))), 5 & t2.$$.dirty && n3(3, l3 = o3.total + d2.price), 8 & t2.$$.dirty && n3(6, s2 = 0.1 * l3);
      }, [d2, i3, o3, l3, u2, a2, s2, p3, v2, h2, x2, function(t3) {
        o3.products[t3].amount = E(this.value), i.set(o3);
      }, (t3) => v2(t3), function(t3) {
        o3.customer[t3.name] = this.value, i.set(o3), n3(9, h2);
      }, () => x2(2), () => x2(1), () => p3("distance", {address: o3.customer.street + "+" + o3.customer.postal + "+" + o3.customer.area})];
    }
    var Q2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, O2, X2, i2, {});
      }
    };
    function R2(t2, e2, n3) {
      const l3 = t2.slice();
      return l3[6] = e2[n3], l3;
    }
    function U2(t2) {
      let e2, n3, u2, d2, m2, f2, v2, h2, x2, y2, b2, g2, k2, $2, C2, F2, T2, w2, M2, I2, L2, j2, A3, H3, N3, E3, S3, q3, z3, K3, B3, V3, P3, Y3, D3, G3, J3, X3, O3, Q3, R3, U3, tt3, et3, nt3, lt3 = t2[1].customer.name1 + "", st3 = t2[1].customer.name2 + "", at3 = t2[1].customer.street + "", ot3 = t2[1].customer.postal + "", ct3 = t2[1].customer.area + "", rt3 = t2[1].customer.phone + "", it3 = t2[1].customer.email + "", ut3 = t2[1].total.toFixed(2) + "", dt2 = t2[1].total.toFixed(2) + "", mt2 = t2[1].delivery && W2(t2), pt2 = t2[1].vat && Z2(t2), ft2 = t2[0] && _2(t2);
      return {c() {
        e2 = w("div"), n3 = w("div"), u2 = w("div"), d2 = w("h2"), d2.textContent = "Asiakastiedot", m2 = v(), f2 = w("p"), v2 = x(lt3), h2 = v(), x2 = x(st3), y2 = w("br"), b2 = v(), g2 = x(at3), k2 = w("br"), $2 = v(), C2 = x(ot3), F2 = v(), T2 = x(ct3), w2 = w("br"), M2 = v(), I2 = x(rt3), L2 = w("br"), j2 = v(), A3 = x(it3), H3 = v(), N3 = w("div"), E3 = w("h2"), E3.textContent = "Maksutiedot", S3 = v(), q3 = w("table"), z3 = w("tbody"), K3 = w("tr"), B3 = w("td"), B3.textContent = "Tuotteet yhteens\xE4", V3 = v(), P3 = w("td"), Y3 = x(ut3), D3 = x(" \u20AC"), G3 = v(), mt2 && mt2.c(), J3 = v(), pt2 && pt2.c(), X3 = v(), O3 = w("tr"), Q3 = w("td"), Q3.textContent = "Tilaus yhteens\xE4", R3 = v(), U3 = w("td"), tt3 = x(dt2), et3 = x(" \u20AC"), nt3 = v(), ft2 && ft2.c(), j(d2, "class", "mb-4"), j(E3, "class", "mt-4 mb-4"), j(B3, "class", "label tl"), j(P3, "class", "value tr"), j(Q3, "class", "label tl"), j(U3, "class", "value tr"), j(q3, "class", "w100"), j(N3, "id", "paymentInfo"), j(N3, "class", "item svelte-p1wt4e"), j(u2, "class", "items"), j(n3, "id", "paymentInfo"), j(n3, "class", "grid svelte-p1wt4e"), j(e2, "id", "checkout"), j(e2, "class", "container rel");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(n3, u2), g(u2, d2), g(u2, m2), g(u2, f2), g(f2, v2), g(f2, h2), g(f2, x2), g(f2, y2), g(f2, b2), g(f2, g2), g(f2, k2), g(f2, $2), g(f2, C2), g(f2, F2), g(f2, T2), g(f2, w2), g(f2, M2), g(f2, I2), g(f2, L2), g(f2, j2), g(f2, A3), g(u2, H3), g(u2, N3), g(N3, E3), g(N3, S3), g(N3, q3), g(q3, z3), g(z3, K3), g(K3, B3), g(K3, V3), g(K3, P3), g(P3, Y3), g(P3, D3), g(z3, G3), mt2 && mt2.m(z3, null), g(z3, J3), pt2 && pt2.m(z3, null), g(z3, X3), g(z3, O3), g(O3, Q3), g(O3, R3), g(O3, U3), g(U3, tt3), g(U3, et3), g(n3, nt3), ft2 && ft2.m(n3, null);
      }, p(t3, e3) {
        2 & e3 && lt3 !== (lt3 = t3[1].customer.name1 + "") && O(v2, lt3), 2 & e3 && st3 !== (st3 = t3[1].customer.name2 + "") && O(x2, st3), 2 & e3 && at3 !== (at3 = t3[1].customer.street + "") && O(g2, at3), 2 & e3 && ot3 !== (ot3 = t3[1].customer.postal + "") && O(C2, ot3), 2 & e3 && ct3 !== (ct3 = t3[1].customer.area + "") && O(T2, ct3), 2 & e3 && rt3 !== (rt3 = t3[1].customer.phone + "") && O(I2, rt3), 2 & e3 && it3 !== (it3 = t3[1].customer.email + "") && O(A3, it3), 2 & e3 && ut3 !== (ut3 = t3[1].total.toFixed(2) + "") && O(Y3, ut3), t3[1].delivery ? mt2 ? mt2.p(t3, e3) : (mt2 = W2(t3), mt2.c(), mt2.m(z3, J3)) : mt2 && (mt2.d(1), mt2 = null), t3[1].vat ? pt2 ? pt2.p(t3, e3) : (pt2 = Z2(t3), pt2.c(), pt2.m(z3, X3)) : pt2 && (pt2.d(1), pt2 = null), 2 & e3 && dt2 !== (dt2 = t3[1].total.toFixed(2) + "") && O(tt3, dt2), t3[0] ? ft2 ? ft2.p(t3, e3) : (ft2 = _2(t3), ft2.c(), ft2.m(n3, null)) : ft2 && (ft2.d(1), ft2 = null);
      }, d(t3) {
        t3 && $(e2), mt2 && mt2.d(), pt2 && pt2.d(), ft2 && ft2.d();
      }};
    }
    function W2(t2) {
      let e2, n3, u2, d2, m2, f2, v2, h2, x2 = t2[1].delivery.distance.text + "", y2 = t2[1].delivery.price.toFixed(2) + "";
      return {c() {
        e2 = w("tr"), n3 = w("td"), u2 = x("Toimitus, "), d2 = x(x2), m2 = v(), f2 = w("td"), v2 = x(y2), h2 = x(" \u20AC"), j(n3, "class", "label tl"), j(f2, "class", "value tr");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(n3, u2), g(n3, d2), g(e2, m2), g(e2, f2), g(f2, v2), g(f2, h2);
      }, p(t3, e3) {
        2 & e3 && x2 !== (x2 = t3[1].delivery.distance.text + "") && O(d2, x2), 2 & e3 && y2 !== (y2 = t3[1].delivery.price.toFixed(2) + "") && O(v2, y2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function Z2(t2) {
      let e2, n3, u2, d2, m2, f2, v2 = t2[1].vat.toFixed(2) + "";
      return {c() {
        e2 = w("tr"), n3 = w("td"), n3.textContent = "ALV", u2 = v(), d2 = w("td"), m2 = x(v2), f2 = x(" \u20AC"), j(n3, "class", "label tl"), j(d2, "class", "value tr");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(e2, u2), g(e2, d2), g(d2, m2), g(d2, f2);
      }, p(t3, e3) {
        2 & e3 && v2 !== (v2 = t3[1].vat.toFixed(2) + "") && O(m2, v2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function _2(t2) {
      let e2, n3, a2, u2, d2 = t2[0], m2 = [];
      for (let e3 = 0; e3 < d2.length; e3 += 1)
        m2[e3] = tt2(R2(t2, d2, e3));
      return {c() {
        e2 = w("div"), n3 = w("h2"), n3.textContent = "Maksuvaihtoehdot", a2 = v(), u2 = w("div");
        for (let t3 = 0; t3 < m2.length; t3 += 1)
          m2[t3].c();
        j(n3, "class", "mb-4"), j(u2, "id", "methods"), j(e2, "id", "paymentMethods"), j(e2, "class", "tc svelte-p1wt4e");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(e2, a2), g(e2, u2);
        for (let t4 = 0; t4 < m2.length; t4 += 1)
          m2[t4].m(u2, null);
      }, p(t3, e3) {
        if (5 & e3) {
          let n4;
          for (d2 = t3[0], n4 = 0; n4 < d2.length; n4 += 1) {
            const l3 = R2(t3, d2, n4);
            m2[n4] ? m2[n4].p(l3, e3) : (m2[n4] = tt2(l3), m2[n4].c(), m2[n4].m(u2, null));
          }
          for (; n4 < m2.length; n4 += 1)
            m2[n4].d(1);
          m2.length = d2.length;
        }
      }, d(t3) {
        t3 && $(e2), b(m2, t3);
      }};
    }
    function tt2(t2) {
      let e2, n3, a2, u2, d2, p3, f2, v2;
      function h2() {
        return t2[3](t2[6]);
      }
      return {c() {
        e2 = w("button"), n3 = w("img"), d2 = v(), n3.src !== (a2 = t2[6].img) && j(n3, "src", a2), j(n3, "alt", u2 = t2[6].name), j(e2, "class", "inl noBor svelte-p1wt4e"), j(e2, "name", "paymentMethod"), e2.value = p3 = t2[6].value;
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(e2, d2), f2 || (v2 = k(e2, "click", h2), f2 = true);
      }, p(l3, s2) {
        t2 = l3, 1 & s2 && n3.src !== (a2 = t2[6].img) && j(n3, "src", a2), 1 & s2 && u2 !== (u2 = t2[6].name) && j(n3, "alt", u2), 1 & s2 && p3 !== (p3 = t2[6].value) && (e2.value = p3);
      }, d(t3) {
        t3 && $(e2), f2 = false, v2();
      }};
    }
    function et2(t2) {
      let e2, n3 = t2[1].products && U2(t2);
      return {c() {
        n3 && n3.c(), e2 = P();
      }, m(t3, l3) {
        n3 && n3.m(t3, l3), y(t3, e2, l3);
      }, p(t3, [l3]) {
        t3[1].products ? n3 ? n3.p(t3, l3) : (n3 = U2(t3), n3.c(), n3.m(e2.parentNode, e2)) : n3 && (n3.d(1), n3 = null);
      }, i: t, o: t, d(t3) {
        n3 && n3.d(t3), t3 && $(e2);
      }};
    }
    function nt2(t2, e2, n3) {
      let l3, s2, a2, o3;
      function c3(t3, e3 = "") {
        let c4;
        e3 ? c4 = {paymentState: t3, paymentMethod: e3, order: s2.orderId} : (c4 = s2, c4.paymentState = t3), a2("payment", c4).then(function(t4) {
          t4.redirect || t4.message ? t4.redirect !== void 0 ? window.location.replace(t4.redirect) : t4.message && f(i, s2.done = t4.message, s2) : (f(i, s2.orderId = t4.orderId, s2), f(i, s2.total = t4.total, s2), f(i, s2.vat = t4.vat, s2), n3(0, l3 = t4.methods)), o3();
        });
      }
      l2(t2, i, (t3) => n3(1, s2 = t3)), l2(t2, p, (t3) => n3(4, a2 = t3)), l2(t2, Ht, (t3) => n3(5, o3 = t3));
      return t2.$$.update = () => {
        1 & t2.$$.dirty && (l3[0] || c3("methods"));
      }, n3(0, l3 = []), [l3, s2, c3, (t3) => c3("create", t3.value)];
    }
    var lt2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, nt2, et2, i2, {});
      }
    };
    function st2(t2) {
      let e2, n3;
      return e2 = new Q2({}), {c() {
        rt(e2.$$.fragment);
      }, m(t3, l3) {
        st(e2, t3, l3), n3 = true;
      }, p: t, i(t3) {
        n3 || (Y(e2.$$.fragment, t3), n3 = true);
      }, o(t3) {
        tt(e2.$$.fragment, t3), n3 = false;
      }, d(t3) {
        it(e2, t3);
      }};
    }
    function at2(t2) {
      let e2, n3;
      return e2 = new lt2({}), {c() {
        rt(e2.$$.fragment);
      }, m(t3, l3) {
        st(e2, t3, l3), n3 = true;
      }, p: t, i(t3) {
        n3 || (Y(e2.$$.fragment, t3), n3 = true);
      }, o(t3) {
        tt(e2.$$.fragment, t3), n3 = false;
      }, d(t3) {
        it(e2, t3);
      }};
    }
    function ot2(t2) {
      let e2, n3, a2;
      function o3(t3, e3) {
        return typeof t3[1].done != "number" ? rt2 : ct2;
      }
      let r3 = o3(t2), d2 = r3(t2);
      return {c() {
        e2 = w("h1"), e2.textContent = "Kiitos tilauksesta", n3 = v(), d2.c(), a2 = P();
      }, m(t3, l3) {
        y(t3, e2, l3), y(t3, n3, l3), d2.m(t3, l3), y(t3, a2, l3);
      }, p(t3, e3) {
        r3 === (r3 = o3(t3)) && d2 ? d2.p(t3, e3) : (d2.d(1), d2 = r3(t3), d2 && (d2.c(), d2.m(a2.parentNode, a2)));
      }, i: t, o: t, d(t3) {
        t3 && $(e2), t3 && $(n3), d2.d(t3), t3 && $(a2);
      }};
    }
    function ct2(t2) {
      let e2, n3, s2, o3, u2, d2, m2 = t2[1].done + "";
      return {c() {
        e2 = w("p"), n3 = x("Tilaus on vahvistettu ja tilaustiedot on l\xE4hetetty s\xE4hk\xF6postiin.\n			"), s2 = w("br"), o3 = x("\n			Tilausnumerosi on "), u2 = x(m2), d2 = x(".");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(e2, s2), g(e2, o3), g(e2, u2), g(e2, d2);
      }, p(t3, e3) {
        2 & e3 && m2 !== (m2 = t3[1].done + "") && O(u2, m2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function rt2(t2) {
      let e2, n3, s2, o3, u2;
      return {c() {
        e2 = w("p"), n3 = x("Tilauksenne on vastaanotettu ja tiedot on l\xE4hetetty s\xE4hk\xF6postiin.\n			Tilausnumeronne on "), s2 = w("strong"), o3 = x(t2[0]), u2 = x(".");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, n3), g(e2, s2), g(s2, o3), g(e2, u2);
      }, p(t3, e3) {
        1 & e3 && O(o3, t3[0]);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function it2(t2) {
      let e2, n3, a2, d2, m2, p3;
      const f2 = [ot2, at2, st2], v2 = [];
      function h2(t3, e3) {
        return t3[0] ? 0 : t3[1].state == 2 ? 1 : 2;
      }
      return a2 = h2(t2), d2 = v2[a2] = f2[a2](t2), {c() {
        e2 = w("meta"), n3 = v(), d2.c(), m2 = P(), document.title = "Kassa - Tervetuloa maksamaan", j(e2, "name", "googlebot"), j(e2, "content", "noindex");
      }, m(t3, l3) {
        g(document.head, e2), y(t3, n3, l3), v2[a2].m(t3, l3), y(t3, m2, l3), p3 = true;
      }, p(t3, [e3]) {
        let n4 = a2;
        a2 = h2(t3), a2 === n4 ? v2[a2].p(t3, e3) : (Z(), tt(v2[n4], 1, 1, () => {
          v2[n4] = null;
        }), X(), d2 = v2[a2], d2 ? d2.p(t3, e3) : (d2 = v2[a2] = f2[a2](t3), d2.c()), Y(d2, 1), d2.m(m2.parentNode, m2));
      }, i(t3) {
        p3 || (Y(d2), p3 = true);
      }, o(t3) {
        tt(d2), p3 = false;
      }, d(t3) {
        $(e2), t3 && $(n3), v2[a2].d(t3), t3 && $(m2);
      }};
    }
    function ut2(t2, e2, n3) {
      let l3, s2;
      if (l2(t2, i, (t3) => n3(1, l3 = t3)), f(i, l3.state = 1, l3), window.location.search) {
        let t3 = window.location.search.substr(1).split("=");
        s2 = t3[0] == "id" ? parseInt(t3[1]) : "";
      }
      return [s2, l3];
    }
    var kassa_c962830e_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, ut2, it2, i2, {});
      }
    };
    var kassa_c962830e_default2 = kassa_c962830e_default;
  });

  // dist/build/_layout-0c0ceec6.js
  var require_layout_0c0ceec6 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => layout_0c0ceec6_default2
    });
    function J2(t2) {
      let e2, s2, h2, p3, g2, f2, v2, $2, w2, y2, b2, k2 = t2[0].amount + "";
      return {c() {
        e2 = w("div"), s2 = w("a"), h2 = _("svg"), p3 = _("title"), g2 = x("Jatka kassalle"), f2 = _("path"), v2 = v(), $2 = w("div"), w2 = w("div"), y2 = x(k2), j(f2, "d", "M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z"), j(h2, "xmlns", "http://www.w3.org/2000/svg"), j(h2, "width", "38"), j(h2, "height", "38"), j(h2, "viewBox", "0 0 24 24"), j(w2, "class", b2 = "grid cell bold " + t2[2]), j($2, "id", "cartBall"), j($2, "class", "abs"), j(s2, "class", "grid cell"), j(s2, "href", t2[1]), j(s2, "rel", "nofollow"), j(e2, "id", "cartIcon"), j(e2, "class", "rel");
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, s2), g(s2, h2), g(h2, p3), g(p3, g2), g(h2, f2), g(s2, v2), g(s2, $2), g($2, w2), g(w2, y2);
      }, p(t3, [e3]) {
        1 & e3 && k2 !== (k2 = t3[0].amount + "") && O(y2, k2), 4 & e3 && b2 !== (b2 = "grid cell bold " + t3[2]) && j(w2, "class", b2), 2 & e3 && j(s2, "href", t3[1]);
      }, i: t, o: t, d(t3) {
        t3 && $(e2);
      }};
    }
    function F2(t2, e2, s2) {
      let n3, l3, a2;
      return l2(t2, i, (t3) => s2(0, a2 = t3)), t2.$$.update = () => {
        1 & t2.$$.dirty && s2(1, n3 = a2.amount > 0 ? "/kassa" : "/"), 1 & t2.$$.dirty && s2(2, l3 = a2.amount > 0 ? "bgo tw" : "bgw");
      }, [a2, n3, l3];
    }
    var G2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, F2, J2, i2, {});
      }
    };
    function K2(t2, e2, s2) {
      const n3 = t2.slice();
      return n3[8] = e2[s2], n3;
    }
    function P2(t2) {
      let e2, s2, l3, a2, u2, d2 = t2[1][0] && Y2(t2);
      return {c() {
        e2 = w("div"), s2 = w("input"), l3 = v(), d2 && d2.c(), j(s2, "type", "search"), j(s2, "placeholder", "hakusanat"), j(s2, "minlength", "3"), j(s2, "maxlength", "50"), j(e2, "id", "searchForm"), j(e2, "class", "abs");
      }, m(n3, c3) {
        y(n3, e2, c3), g(e2, s2), L(s2, t2[0]), g(e2, l3), d2 && d2.m(e2, null), a2 || (u2 = k(s2, "input", t2[4]), a2 = true);
      }, p(t3, n3) {
        1 & n3 && L(s2, t3[0]), t3[1][0] ? d2 ? d2.p(t3, n3) : (d2 = Y2(t3), d2.c(), d2.m(e2, null)) : d2 && (d2.d(1), d2 = null);
      }, d(t3) {
        t3 && $(e2), d2 && d2.d(), a2 = false, u2();
      }};
    }
    function Y2(t2) {
      let e2, s2 = t2[1], l3 = [];
      for (let e3 = 0; e3 < s2.length; e3 += 1)
        l3[e3] = q2(K2(t2, s2, e3));
      return {c() {
        e2 = w("div");
        for (let t3 = 0; t3 < l3.length; t3 += 1)
          l3[t3].c();
        j(e2, "id", "results"), j(e2, "class", "bgw tl");
      }, m(t3, s3) {
        y(t3, e2, s3);
        for (let t4 = 0; t4 < l3.length; t4 += 1)
          l3[t4].m(e2, null);
      }, p(t3, n3) {
        if (6 & n3) {
          let a2;
          for (s2 = t3[1], a2 = 0; a2 < s2.length; a2 += 1) {
            const c3 = K2(t3, s2, a2);
            l3[a2] ? l3[a2].p(c3, n3) : (l3[a2] = q2(c3), l3[a2].c(), l3[a2].m(e2, null));
          }
          for (; a2 < l3.length; a2 += 1)
            l3[a2].d(1);
          l3.length = s2.length;
        }
      }, d(t3) {
        t3 && $(e2), b(l3, t3);
      }};
    }
    function q2(t2) {
      let e2, s2, l3, c3, d2, h2 = t2[8].title + "";
      return {c() {
        e2 = w("a"), s2 = x(h2), j(e2, "class", "block"), j(e2, "href", l3 = t2[8].path);
      }, m(n3, l4) {
        y(n3, e2, l4), g(e2, s2), c3 || (d2 = k(e2, "click", t2[5]), c3 = true);
      }, p(t3, n3) {
        2 & n3 && h2 !== (h2 = t3[8].title + "") && O(s2, h2), 2 & n3 && l3 !== (l3 = t3[8].path) && j(e2, "href", l3);
      }, d(t3) {
        t3 && $(e2), c3 = false, d2();
      }};
    }
    function D2(t2) {
      let e2, s2, l3, a2, u2, h2 = t2[2] && P2(t2);
      return {c() {
        e2 = w("div"), s2 = w("button"), s2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"></path></svg>', l3 = v(), h2 && h2.c(), j(s2, "class", "grid cell noBor"), j(e2, "id", "searchIcon"), j(e2, "class", "rel");
      }, m(n3, c3) {
        y(n3, e2, c3), g(e2, s2), g(e2, l3), h2 && h2.m(e2, null), a2 || (u2 = k(s2, "click", t2[3]), a2 = true);
      }, p(t3, [s3]) {
        t3[2] ? h2 ? h2.p(t3, s3) : (h2 = P2(t3), h2.c(), h2.m(e2, null)) : h2 && (h2.d(1), h2 = null);
      }, i: t, o: t, d(t3) {
        t3 && $(e2), h2 && h2.d(), a2 = false, u2();
      }};
    }
    function V2(t2, e2, s2) {
      let n3, l3, a2, c3;
      function i3() {
        let t3 = n3.replace(/[&\/\\#,()$~%@^'"!:*?<>{}]/g, "");
        t3 = t3.replace(" ", "+"), async function(t4 = "", e3 = "", s3 = "") {
          const n4 = await fetch(`http://foodis.dataline.fi/pw/${t4}`, {method: e3 ? "POST" : "GET", mode: "cors", cache: "no-cache", headers: {"Content-Type": "application/json", ...s3 ? {Authorization: `Bearer ${s3}`} : void 0}, body: e3 ? JSON.stringify(e3) : null});
          return await n4.json();
        }("?search=" + t3).then((t4) => {
          s2(1, l3 = t4);
        }).catch((t4) => {
          console.log(t4);
        }), a2();
      }
      l2(t2, Ht, (t3) => s2(6, a2 = t3));
      return t2.$$.update = () => {
        1 & t2.$$.dirty && n3.length >= 3 && i3(), 3 & t2.$$.dirty && n3.length < 3 && l3[0] && s2(1, l3 = []);
      }, s2(0, n3 = ""), s2(1, l3 = []), [n3, l3, c3, () => s2(2, c3 = !c3), function() {
        n3 = this.value, s2(0, n3);
      }, () => s2(2, c3 = "")];
    }
    var X2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, V2, D2, i2, {});
      }
    };
    function Q2(t2, e2, s2) {
      const n3 = t2.slice();
      return n3[6] = e2[s2], n3;
    }
    function R2(t2) {
      let e2, s2, l3, a2, u2, d2, h2, p3, v2, $2, z2, M2, j2, B2, L2, H2, O2, A2, E2, N2, S2, C2, I2, J3, F3, K3, P3, Y3;
      function q3(t3, e3) {
        return t3[3] ? U2 : W2;
      }
      let D3 = q3(t2), V3 = D3(t2), R3 = t2[0].nav, _3 = [];
      for (let e3 = 0; e3 < R3.length; e3 += 1)
        _3[e3] = Z2(Q2(t2, R3, e3));
      return I2 = new X2({}), F3 = new G2({}), {c() {
        e2 = w("header"), s2 = w("div"), l3 = w("a"), a2 = w("picture"), u2 = w("source"), h2 = v(), p3 = w("source"), $2 = v(), z2 = w("img"), B2 = v(), L2 = w("button"), V3.c(), H2 = v(), O2 = w("nav"), A2 = w("ul"), E2 = w("li"), E2.innerHTML = '<a class="nav-link block" href="/" rel="home">Etusivu</a>', N2 = v();
        for (let t3 = 0; t3 < _3.length; t3 += 1)
          _3[t3].c();
        S2 = v(), C2 = w("div"), rt(I2.$$.fragment), J3 = v(), rt(F3.$$.fragment), j(u2, "srcset", d2 = t2[0].site.logo[1]), j(u2, "type", "image/webp"), j(p3, "srcset", v2 = t2[0].site.logo[0]), j(p3, "type", "image/jpeg"), z2.src !== (M2 = t2[0].site.logo[0]) && j(z2, "src", M2), j(z2, "alt", j2 = t2[0].site.title), j(a2, "class", "block"), j(l3, "id", "logo"), j(l3, "class", "block bgw"), j(l3, "href", "/"), j(l3, "rel", "home"), j(L2, "id", "menuToggle"), j(L2, "class", "noBor m0 abs"), j(L2, "title", "Open/close main navigation"), j(E2, "class", "nav-item"), j(A2, "class", "m0"), j(O2, "id", "menu"), I(O2, "active", t2[3]), j(C2, "id", "icons"), j(C2, "class", "abs grid"), j(s2, "class", "content mx"), j(e2, "class", "block w100 bgw"), I(e2, "small", t2[2]);
      }, m(n3, c3) {
        y(n3, e2, c3), g(e2, s2), g(s2, l3), g(l3, a2), g(a2, u2), g(a2, h2), g(a2, p3), g(a2, $2), g(a2, z2), g(s2, B2), g(s2, L2), V3.m(L2, null), g(s2, H2), g(s2, O2), g(O2, A2), g(A2, E2), g(A2, N2);
        for (let t3 = 0; t3 < _3.length; t3 += 1)
          _3[t3].m(A2, null);
        g(s2, S2), g(s2, C2), st(I2, C2, null), g(C2, J3), st(F3, C2, null), K3 = true, P3 || (Y3 = k(L2, "click", t2[5]), P3 = true);
      }, p(t3, s3) {
        if ((!K3 || 1 & s3 && d2 !== (d2 = t3[0].site.logo[1])) && j(u2, "srcset", d2), (!K3 || 1 & s3 && v2 !== (v2 = t3[0].site.logo[0])) && j(p3, "srcset", v2), (!K3 || 1 & s3 && z2.src !== (M2 = t3[0].site.logo[0])) && j(z2, "src", M2), (!K3 || 1 & s3 && j2 !== (j2 = t3[0].site.title)) && j(z2, "alt", j2), D3 !== (D3 = q3(t3)) && (V3.d(1), V3 = D3(t3), V3 && (V3.c(), V3.m(L2, null))), 1 & s3) {
          let e3;
          for (R3 = t3[0].nav, e3 = 0; e3 < R3.length; e3 += 1) {
            const n3 = Q2(t3, R3, e3);
            _3[e3] ? _3[e3].p(n3, s3) : (_3[e3] = Z2(n3), _3[e3].c(), _3[e3].m(A2, null));
          }
          for (; e3 < _3.length; e3 += 1)
            _3[e3].d(1);
          _3.length = R3.length;
        }
        8 & s3 && I(O2, "active", t3[3]), 4 & s3 && I(e2, "small", t3[2]);
      }, i(t3) {
        K3 || (Y(I2.$$.fragment, t3), Y(F3.$$.fragment, t3), K3 = true);
      }, o(t3) {
        tt(I2.$$.fragment, t3), tt(F3.$$.fragment, t3), K3 = false;
      }, d(t3) {
        t3 && $(e2), V3.d(), b(_3, t3), it(I2), it(F3), P3 = false, Y3();
      }};
    }
    function U2(t2) {
      let e2, s2;
      return {c() {
        e2 = _("svg"), s2 = _("path"), j(s2, "d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"), j(e2, "xmlns", "http://www.w3.org/2000/svg"), j(e2, "width", "24"), j(e2, "height", "24"), j(e2, "viewBox", "0 0 24 24");
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, s2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function W2(t2) {
      let e2, s2, n3, c3, u2, d2;
      return {c() {
        e2 = _("svg"), s2 = _("title"), n3 = x("Avaa ja sulkee mobiilivalikon"), c3 = _("rect"), u2 = _("rect"), d2 = _("rect"), j(c3, "width", "100"), j(c3, "height", "20"), j(u2, "y", "30"), j(u2, "width", "100"), j(u2, "height", "20"), j(d2, "y", "60"), j(d2, "width", "100"), j(d2, "height", "20"), j(e2, "viewBox", "0 0 100 80"), j(e2, "width", "30"), j(e2, "height", "30");
      }, m(t3, l3) {
        y(t3, e2, l3), g(e2, s2), g(s2, n3), g(e2, c3), g(e2, u2), g(e2, d2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function Z2(t2) {
      let e2, s2, l3, a2, u2 = t2[6].title + "";
      return {c() {
        e2 = w("li"), s2 = w("a"), a2 = v(), j(s2, "class", "nav-link block"), j(s2, "href", l3 = t2[6].path), j(e2, "class", "nav-item");
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, s2), s2.innerHTML = u2, g(e2, a2);
      }, p(t3, e3) {
        1 & e3 && u2 !== (u2 = t3[6].title + "") && (s2.innerHTML = u2), 1 & e3 && l3 !== (l3 = t3[6].path) && j(s2, "href", l3);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function _2(t2) {
      let e2, s2, n3, l3, a2, c3 = false, i3 = () => {
        c3 = false;
      };
      K(t2[4]);
      let o3 = t2[0] && t2[0].nav && R2(t2);
      return {c() {
        o3 && o3.c(), s2 = P();
      }, m(u2, d2) {
        o3 && o3.m(u2, d2), y(u2, s2, d2), n3 = true, l3 || (a2 = k(window, "scroll", () => {
          c3 = true, clearTimeout(e2), e2 = setTimeout(i3, 100), t2[4]();
        }), l3 = true);
      }, p(t3, [n4]) {
        2 & n4 && !c3 && (c3 = true, clearTimeout(e2), scrollTo(window.pageXOffset, t3[1]), e2 = setTimeout(i3, 100)), t3[0] && t3[0].nav ? o3 ? (o3.p(t3, n4), 1 & n4 && Y(o3, 1)) : (o3 = R2(t3), o3.c(), Y(o3, 1), o3.m(s2.parentNode, s2)) : o3 && (Z(), tt(o3, 1, 1, () => {
          o3 = null;
        }), X());
      }, i(t3) {
        n3 || (Y(o3), n3 = true);
      }, o(t3) {
        tt(o3), n3 = false;
      }, d(t3) {
        o3 && o3.d(t3), t3 && $(s2), l3 = false, a2();
      }};
    }
    function tt2(t2, e2, s2) {
      let n3, l3, a2, {data: c3} = e2;
      return t2.$$set = (t3) => {
        "data" in t3 && s2(0, c3 = t3.data);
      }, t2.$$.update = () => {
        2 & t2.$$.dirty && s2(2, l3 = n3 > 100 || "");
      }, [c3, n3, l3, a2, function() {
        s2(1, n3 = window.pageYOffset);
      }, () => s2(3, a2 = !a2)];
    }
    var et2 = class extends ct {
      constructor(t2) {
        super(), at(this, t2, tt2, _2, i2, {data: 0});
      }
    };
    function st2(t2) {
      let e2, s2, l3, a2, u2, d2, h2, p3, g2, f2, v2, $2;
      function y2(t3, e3) {
        return t3[1].cat ? lt2 : nt2;
      }
      e2 = new et2({props: {data: t2[0]}});
      let M2 = y2(t2), j2 = M2(t2);
      const H2 = t2[6].default, O2 = u(H2, t2, t2[5], null);
      let A2 = t2[3].amount > 0 && t2[4].path != "/kassa" && t2[4].path != "/maksu" && at2(t2), E2 = t2[0].site && t2[0].site.payment && ct2(t2);
      return {c() {
        rt(e2.$$.fragment), s2 = v(), l3 = w("main"), a2 = w("div"), j2.c(), u2 = v(), d2 = w("div"), h2 = w("div"), O2 && O2.c(), g2 = v(), A2 && A2.c(), f2 = v(), E2 && E2.c(), v2 = P(), j(a2, "id", "hero"), j(a2, "class", "grid tw up tc"), j(h2, "class", "container mx"), j(d2, "id", "content"), j(d2, "class", "bgw py"), j(l3, "class", "block"), j(l3, "style", p3 = "background-image:url(" + t2[0].site.hero[0] + ")");
      }, m(t3, n3) {
        st(e2, t3, n3), y(t3, s2, n3), y(t3, l3, n3), g(l3, a2), j2.m(a2, null), g(l3, u2), g(l3, d2), g(d2, h2), O2 && O2.m(h2, null), y(t3, g2, n3), A2 && A2.m(t3, n3), y(t3, f2, n3), E2 && E2.m(t3, n3), y(t3, v2, n3), $2 = true;
      }, p(t3, s3) {
        const n3 = {};
        1 & s3 && (n3.data = t3[0]), e2.$set(n3), M2 === (M2 = y2(t3)) && j2 ? j2.p(t3, s3) : (j2.d(1), j2 = M2(t3), j2 && (j2.c(), j2.m(a2, null))), O2 && O2.p && (!$2 || 32 & s3) && d(O2, H2, t3, t3[5], s3, null, null), (!$2 || 1 & s3 && p3 !== (p3 = "background-image:url(" + t3[0].site.hero[0] + ")")) && j(l3, "style", p3), t3[3].amount > 0 && t3[4].path != "/kassa" && t3[4].path != "/maksu" ? A2 ? A2.p(t3, s3) : (A2 = at2(t3), A2.c(), A2.m(f2.parentNode, f2)) : A2 && (A2.d(1), A2 = null), t3[0].site && t3[0].site.payment ? E2 ? E2.p(t3, s3) : (E2 = ct2(t3), E2.c(), E2.m(v2.parentNode, v2)) : E2 && (E2.d(1), E2 = null);
      }, i(t3) {
        $2 || (Y(e2.$$.fragment, t3), Y(O2, t3), $2 = true);
      }, o(t3) {
        tt(e2.$$.fragment, t3), tt(O2, t3), $2 = false;
      }, d(t3) {
        it(e2, t3), t3 && $(s2), t3 && $(l3), j2.d(), O2 && O2.d(t3), t3 && $(g2), A2 && A2.d(t3), t3 && $(f2), E2 && E2.d(t3), t3 && $(v2);
      }};
    }
    function nt2(t2) {
      let e2, s2, l3, i3, d2, h2, p3 = t2[0].site.title + "", g2 = t2[0].site.slogan + "";
      return {c() {
        e2 = w("div"), s2 = w("h1"), l3 = x(p3), i3 = v(), d2 = w("h3"), h2 = x(g2);
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, s2), g(s2, l3), g(e2, i3), g(e2, d2), g(d2, h2);
      }, p(t3, e3) {
        1 & e3 && p3 !== (p3 = t3[0].site.title + "") && O(l3, p3), 1 & e3 && g2 !== (g2 = t3[0].site.slogan + "") && O(h2, g2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function lt2(t2) {
      let e2, s2 = t2[2].title + "";
      return {c() {
        e2 = w("h1");
      }, m(t3, n3) {
        y(t3, e2, n3), e2.innerHTML = s2;
      }, p(t3, n3) {
        4 & n3 && s2 !== (s2 = t3[2].title + "") && (e2.innerHTML = s2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function at2(t2) {
      let e2, s2, l3, d2, h2, p3, g2, f2, v2, $2, w2, y2, b2, k2 = t2[3].amount + "", x2 = t2[3].total + "";
      return {c() {
        e2 = w("div"), s2 = w("div"), l3 = w("div"), d2 = x("Tuotteita: "), h2 = x(k2), p3 = x(" kpl"), g2 = v(), f2 = w("div"), v2 = x("Yhteens\xE4: "), $2 = x(x2), w2 = x(" \u20AC"), y2 = v(), b2 = w("a"), b2.textContent = "Kassalle", j(l3, "id", "cartAmount"), j(f2, "id", "cartAmount"), j(b2, "class", "grid"), j(b2, "href", "/kassa"), j(b2, "rel", "nofollow"), j(e2, "id", "cart"), j(e2, "class", "grid");
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, s2), g(s2, l3), g(l3, d2), g(l3, h2), g(l3, p3), g(s2, g2), g(s2, f2), g(f2, v2), g(f2, $2), g(f2, w2), g(e2, y2), g(e2, b2);
      }, p(t3, e3) {
        8 & e3 && k2 !== (k2 = t3[3].amount + "") && O(h2, k2), 8 & e3 && x2 !== (x2 = t3[3].total + "") && O($2, x2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function ct2(t2) {
      let e2, s2, l3, a2, u2, d2, h2, p3, g2, f2, v2;
      return {c() {
        e2 = w("footer"), s2 = w("div"), l3 = w("picture"), a2 = w("source"), d2 = v(), h2 = w("source"), g2 = v(), f2 = w("img"), a2.src !== (u2 = t2[0].site.payment[1]) && j(a2, "src", u2), j(a2, "type", "image/webp"), h2.src !== (p3 = t2[0].site.payment[0]) && j(h2, "src", p3), j(h2, "type", "image/jpeg"), j(f2, "class", "inl"), f2.src !== (v2 = t2[0].site.payment[0]) && j(f2, "src", v2), j(f2, "alt", "Visma Pay"), j(l3, "class", "inl"), j(s2, "class", "container mx pad"), j(e2, "class", "tc");
      }, m(t3, n3) {
        y(t3, e2, n3), g(e2, s2), g(s2, l3), g(l3, a2), g(l3, d2), g(l3, h2), g(l3, g2), g(l3, f2);
      }, p(t3, e3) {
        1 & e3 && a2.src !== (u2 = t3[0].site.payment[1]) && j(a2, "src", u2), 1 & e3 && h2.src !== (p3 = t3[0].site.payment[0]) && j(h2, "src", p3), 1 & e3 && f2.src !== (v2 = t3[0].site.payment[0]) && j(f2, "src", v2);
      }, d(t3) {
        t3 && $(e2);
      }};
    }
    function it2(t2) {
      let e2, s2, n3 = t2[0] && t2[0].site && st2(t2);
      return {c() {
        n3 && n3.c(), e2 = P();
      }, m(t3, l3) {
        n3 && n3.m(t3, l3), y(t3, e2, l3), s2 = true;
      }, p(t3, [s3]) {
        t3[0] && t3[0].site ? n3 ? (n3.p(t3, s3), 1 & s3 && Y(n3, 1)) : (n3 = st2(t3), n3.c(), Y(n3, 1), n3.m(e2.parentNode, e2)) : n3 && (Z(), tt(n3, 1, 1, () => {
          n3 = null;
        }), X());
      }, i(t3) {
        s2 || (Y(n3), s2 = true);
      }, o(t3) {
        tt(n3), s2 = false;
      }, d(t3) {
        n3 && n3.d(t3), t3 && $(e2);
      }};
    }
    function rt2(t2, e2, s2) {
      let n3, l3, a2, c3, i3, r3;
      l2(t2, n, (t3) => s2(0, n3 = t3)), l2(t2, p, (t3) => s2(8, l3 = t3)), l2(t2, Wt, (t3) => s2(1, a2 = t3)), l2(t2, r, (t3) => s2(2, c3 = t3)), l2(t2, i, (t3) => s2(3, i3 = t3)), l2(t2, Dt, (t3) => s2(4, r3 = t3));
      let {$$slots: o3 = {}, $$scope: u2} = e2;
      return window && i.useLocalStorage(), n3.site || l3().then(function(t3) {
        n.set(t3);
      }), t2.$$set = (t3) => {
        "$$scope" in t3 && s2(5, u2 = t3.$$scope);
      }, t2.$$.update = () => {
        if (15 & t2.$$.dirty && a2 && ((n3.site || c3.title) && (Vt.title = a2.cat ? c3.title + " | " + n3.site.title : n3.site.title + " | " + n3.site.slogan, (r.summary || n3.site.summary) && (Vt.summary = c3.summary ? c3.summary : n3.site.summary)), i3.amount == 0 && c3.cart && f(i, i3 = c3.cart, i3)), 8 & t2.$$.dirty && i3.products) {
          let t3 = [0, 0];
          f(i, i3.products = i3.products.filter((t4, e3) => t4.amount > 0 && t4 != null).sort(), i3), Object.values(i3.products).forEach((e3) => {
            e3.discounts && (e3.current = e3.price, e3.discounts.forEach(function(t4) {
              t4.amount <= e3.amount && (e3.current = t4.price);
            })), t3[0] += e3.total = e3.current * e3.amount, t3[1] += e3.amount;
          }), t3[1] == 0 || t3[1] == null ? f(i, i3.products = [], i3) : (f(i, i3.total = t3[0], i3), f(i, i3.amount = t3[1], i3));
        }
      }, [n3, a2, c3, i3, r3, u2, o3];
    }
    var layout_0c0ceec6_default = class extends ct {
      constructor(t2) {
        super(), at(this, t2, rt2, it2, i2, {});
      }
    };
    var layout_0c0ceec6_default2 = layout_0c0ceec6_default;
  });

  // dist/build/main.js
  function t() {
  }
  function e(t2, e2) {
    for (const n3 in e2)
      t2[n3] = e2[n3];
    return t2;
  }
  function n2(t2) {
    return t2();
  }
  function o2() {
    return Object.create(null);
  }
  function r2(t2) {
    t2.forEach(n2);
  }
  function s(t2) {
    return typeof t2 == "function";
  }
  function i2(t2, e2) {
    return t2 != t2 ? e2 == e2 : t2 !== e2 || t2 && typeof t2 == "object" || typeof t2 == "function";
  }
  function a(e2, ...n3) {
    if (e2 == null)
      return t;
    const o3 = e2.subscribe(...n3);
    return o3.unsubscribe ? () => o3.unsubscribe() : o3;
  }
  function c2(t2) {
    let e2;
    return a(t2, (t3) => e2 = t3)(), e2;
  }
  function l2(t2, e2, n3) {
    t2.$$.on_destroy.push(a(e2, n3));
  }
  function u(t2, e2, n3, o3) {
    if (t2) {
      const r3 = p2(t2, e2, n3, o3);
      return t2[0](r3);
    }
  }
  function p2(t2, n3, o3, r3) {
    return t2[1] && r3 ? e(o3.ctx.slice(), t2[1](r3(n3))) : o3.ctx;
  }
  function d(t2, e2, n3, o3, r3, s2, i3) {
    const a2 = function(t3, e3, n4, o4) {
      if (t3[2] && o4) {
        const r4 = t3[2](o4(n4));
        if (e3.dirty === void 0)
          return r4;
        if (typeof r4 == "object") {
          const t4 = [], n5 = Math.max(e3.dirty.length, r4.length);
          for (let o5 = 0; o5 < n5; o5 += 1)
            t4[o5] = e3.dirty[o5] | r4[o5];
          return t4;
        }
        return e3.dirty | r4;
      }
      return e3.dirty;
    }(e2, o3, r3, s2);
    if (a2) {
      const r4 = p2(e2, n3, o3, i3);
      t2.p(r4, a2);
    }
  }
  function f(t2, e2, n3 = e2) {
    return t2.set(n3), e2;
  }
  var h = false;
  var m = new Set();
  function g(t2, e2) {
    h && m.delete(e2), e2.parentNode !== t2 && t2.appendChild(e2);
  }
  function y(t2, e2, n3) {
    h && m.delete(e2), (e2.parentNode !== t2 || n3 && e2.nextSibling !== n3) && t2.insertBefore(e2, n3 || null);
  }
  function $(t2) {
    h ? m.add(t2) : t2.parentNode && t2.parentNode.removeChild(t2);
  }
  function b(t2, e2) {
    for (let n3 = 0; n3 < t2.length; n3 += 1)
      t2[n3] && t2[n3].d(e2);
  }
  function w(t2) {
    return document.createElement(t2);
  }
  function _(t2) {
    return document.createElementNS("http://www.w3.org/2000/svg", t2);
  }
  function x(t2) {
    return document.createTextNode(t2);
  }
  function v() {
    return x(" ");
  }
  function P() {
    return x("");
  }
  function k(t2, e2, n3, o3) {
    return t2.addEventListener(e2, n3, o3), () => t2.removeEventListener(e2, n3, o3);
  }
  function j(t2, e2, n3) {
    n3 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n3 && t2.setAttribute(e2, n3);
  }
  function E(t2) {
    return t2 === "" ? null : +t2;
  }
  function O(t2, e2) {
    e2 = "" + e2, t2.wholeText !== e2 && (t2.data = e2);
  }
  function L(t2, e2) {
    t2.value = e2 == null ? "" : e2;
  }
  function I(t2, e2, n3) {
    t2.classList[n3 ? "add" : "remove"](e2);
  }
  var S;
  function N(t2) {
    S = t2;
  }
  function T() {
    if (!S)
      throw new Error("Function called outside component initialization");
    return S;
  }
  function F(t2, e2) {
    T().$$.context.set(t2, e2);
  }
  function A(t2) {
    return T().$$.context.get(t2);
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
  function K(t2) {
    C.push(t2);
  }
  var J = false;
  var z = new Set();
  function W() {
    if (!J) {
      J = true;
      do {
        for (let t2 = 0; t2 < R.length; t2 += 1) {
          const e2 = R[t2];
          N(e2), G(e2.$$);
        }
        for (N(null), R.length = 0; M.length; )
          M.pop()();
        for (let t2 = 0; t2 < C.length; t2 += 1) {
          const e2 = C[t2];
          z.has(e2) || (z.add(e2), e2());
        }
        C.length = 0;
      } while (R.length);
      for (; q.length; )
        q.pop()();
      U = false, J = false, z.clear();
    }
  }
  function G(t2) {
    if (t2.fragment !== null) {
      t2.update(), r2(t2.before_update);
      const e2 = t2.dirty;
      t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e2), t2.after_update.forEach(K);
    }
  }
  var Q = new Set();
  var V;
  function Z() {
    V = {r: 0, c: [], p: V};
  }
  function X() {
    V.r || r2(V.c), V = V.p;
  }
  function Y(t2, e2) {
    t2 && t2.i && (Q.delete(t2), t2.i(e2));
  }
  function tt(t2, e2, n3, o3) {
    if (t2 && t2.o) {
      if (Q.has(t2))
        return;
      Q.add(t2), V.c.push(() => {
        Q.delete(t2), o3 && (n3 && t2.d(1), o3());
      }), t2.o(e2);
    }
  }
  function et(t2, e2) {
    t2.d(1), e2.delete(t2.key);
  }
  function nt(t2, e2) {
    tt(t2, 1, 1, () => {
      e2.delete(t2.key);
    });
  }
  function ot(t2, e2, n3, o3, r3, s2, i3, a2, c3, l3, u2, p3) {
    let d2 = t2.length, f2 = s2.length, h2 = d2;
    const m2 = {};
    for (; h2--; )
      m2[t2[h2].key] = h2;
    const g2 = [], y2 = new Map(), $2 = new Map();
    for (h2 = f2; h2--; ) {
      const t3 = p3(r3, s2, h2), a3 = n3(t3);
      let c4 = i3.get(a3);
      c4 ? o3 && c4.p(t3, e2) : (c4 = l3(a3, t3), c4.c()), y2.set(a3, g2[h2] = c4), a3 in m2 && $2.set(a3, Math.abs(h2 - m2[a3]));
    }
    const b2 = new Set(), w2 = new Set();
    function _2(t3) {
      Y(t3, 1), t3.m(a2, u2), i3.set(t3.key, t3), u2 = t3.first, f2--;
    }
    for (; d2 && f2; ) {
      const e3 = g2[f2 - 1], n4 = t2[d2 - 1], o4 = e3.key, r4 = n4.key;
      e3 === n4 ? (u2 = e3.first, d2--, f2--) : y2.has(r4) ? !i3.has(o4) || b2.has(o4) ? _2(e3) : w2.has(r4) ? d2-- : $2.get(o4) > $2.get(r4) ? (w2.add(o4), _2(e3)) : (b2.add(r4), d2--) : (c3(n4, i3), d2--);
    }
    for (; d2--; ) {
      const e3 = t2[d2];
      y2.has(e3.key) || c3(e3, i3);
    }
    for (; f2; )
      _2(g2[f2 - 1]);
    return g2;
  }
  function rt(t2) {
    t2 && t2.c();
  }
  function st(t2, e2, o3, i3) {
    const {fragment: a2, on_mount: c3, on_destroy: l3, after_update: u2} = t2.$$;
    a2 && a2.m(e2, o3), i3 || K(() => {
      const e3 = c3.map(n2).filter(s);
      l3 ? l3.push(...e3) : r2(e3), t2.$$.on_mount = [];
    }), u2.forEach(K);
  }
  function it(t2, e2) {
    const n3 = t2.$$;
    n3.fragment !== null && (r2(n3.on_destroy), n3.fragment && n3.fragment.d(e2), n3.on_destroy = n3.fragment = null, n3.ctx = []);
  }
  function at(e2, n3, s2, i3, a2, c3, l3 = [-1]) {
    const u2 = S;
    N(e2);
    const p3 = e2.$$ = {fragment: null, ctx: null, props: c3, update: t, not_equal: a2, bound: o2(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : n3.context || []), callbacks: o2(), dirty: l3, skip_bound: false};
    let d2 = false;
    if (p3.ctx = s2 ? s2(e2, n3.props || {}, (t2, n4, ...o3) => {
      const r3 = o3.length ? o3[0] : n4;
      return p3.ctx && a2(p3.ctx[t2], p3.ctx[t2] = r3) && (!p3.skip_bound && p3.bound[t2] && p3.bound[t2](r3), d2 && function(t3, e3) {
        t3.$$.dirty[0] === -1 && (R.push(t3), D(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
      }(e2, t2)), n4;
    }) : [], p3.update(), d2 = true, r2(p3.before_update), p3.fragment = !!i3 && i3(p3.ctx), n3.target) {
      if (n3.hydrate) {
        h = true;
        const t2 = function(t3) {
          return Array.from(t3.childNodes);
        }(n3.target);
        p3.fragment && p3.fragment.l(t2), t2.forEach($);
      } else
        p3.fragment && p3.fragment.c();
      n3.intro && Y(e2.$$.fragment), st(e2, n3.target, n3.anchor, n3.customElement), function() {
        h = false;
        for (const t2 of m)
          t2.parentNode.removeChild(t2);
        m.clear();
      }(), W();
    }
    N(u2);
  }
  var ct = class {
    $destroy() {
      it(this, 1), this.$destroy = t;
    }
    $on(t2, e2) {
      const n3 = this.$$.callbacks[t2] || (this.$$.callbacks[t2] = []);
      return n3.push(e2), () => {
        const t3 = n3.indexOf(e2);
        t3 !== -1 && n3.splice(t3, 1);
      };
    }
    $set(t2) {
      var e2;
      this.$$set && (e2 = t2, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t2), this.$$.skip_bound = false);
    }
  };
  var lt = {queryHandler: {parse: (t2) => {
    return e2 = new URLSearchParams(t2), [...e2].reduce((t3, [e3, n3]) => (t3[e3] = n3, t3), {});
    var e2;
  }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
  var ut = RegExp(/\:([^/()]+)/g);
  function pt(t2, e2) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    e2 && dt(t2), function() {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      const {hash: t3} = window.location;
      if (t3) {
        if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t3.substring(1))) {
          const e3 = document.querySelector(t3);
          e3 && e3.scrollIntoView();
        }
      }
    }();
  }
  function dt(t2) {
    t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", dt(t2.parentElement));
  }
  var ft = (t2) => {
    const e2 = [];
    let n3;
    for (; n3 = ut.exec(t2); )
      e2.push(n3[1]);
    return e2;
  };
  function ht(t2, e2) {
    ht._console = ht._console || {log: console.log, warn: console.warn};
    const {_console: n3} = ht, o3 = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r3 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
    for (const t3 of ["log", "warn"])
      console[t3] = (...e3) => {
        r3.includes(e3[0]) || n3[t3](...e3);
      }, e2().then(() => {
        console[t3] = n3[t3];
      });
  }
  function mt() {
    let t2 = window.location.pathname + window.location.search + window.location.hash;
    const {url: e2, options: n3} = function(t3) {
      const [e3, n4] = t3.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n4 || "") || "{}");
      return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e3, options: o3};
    }(t2);
    return {...gt(e2), options: n3};
  }
  function gt(t2) {
    lt.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
    const e2 = t2.startsWith("/") ? window.location.origin : void 0, n3 = new URL(t2, e2);
    return {url: n3, fullpath: n3.pathname + n3.search + n3.hash};
  }
  function yt(t2, e2, n3) {
    const o3 = lt.useHash ? "#" : "";
    let r3;
    return r3 = function(t3, e3, n4) {
      const o4 = Object.assign({}, n4, e3), r4 = function(t4, e4) {
        if (!lt.queryHandler)
          return "";
        const n5 = ft(t4), o5 = {};
        e4 && Object.entries(e4).forEach(([t5, e5]) => {
          n5.includes(t5) || (o5[t5] = e5);
        });
        return lt.queryHandler.stringify(o5).replace(/\?$/, "");
      }(t3, e3);
      for (const [e4, n5] of Object.entries(o4))
        t3 = t3.replace(`:${e4}`, n5);
      return `${t3}${r4}`;
    }(t2, e2, n3), r3 = lt.urlTransform.apply(r3), r3 = o3 + r3, r3;
  }
  function $t(t2) {
    let e2;
    const n3 = t2[2].default, o3 = u(n3, t2, t2[1], null);
    return {c() {
      o3 && o3.c();
    }, m(t3, n4) {
      o3 && o3.m(t3, n4), e2 = true;
    }, p(t3, [r3]) {
      o3 && o3.p && (!e2 || 2 & r3) && d(o3, n3, t3, t3[1], r3, null, null);
    }, i(t3) {
      e2 || (Y(o3, t3), e2 = true);
    }, o(t3) {
      tt(o3, t3), e2 = false;
    }, d(t3) {
      o3 && o3.d(t3);
    }};
  }
  function bt(t2, e2, n3) {
    let {$$slots: o3 = {}, $$scope: r3} = e2, {scoped: s2 = {}} = e2;
    return t2.$$set = (t3) => {
      "scoped" in t3 && n3(0, s2 = t3.scoped), "$$scope" in t3 && n3(1, r3 = t3.$$scope);
    }, [s2, r3, o3];
  }
  var wt = class extends ct {
    constructor(t2) {
      super(), at(this, t2, bt, $t, i2, {scoped: 0});
    }
  };
  var _t = [];
  function xt(t2, e2) {
    return {subscribe: vt(t2, e2).subscribe};
  }
  function vt(e2, n3 = t) {
    let o3;
    const r3 = [];
    function s2(t2) {
      if (i2(e2, t2) && (e2 = t2, o3)) {
        const t3 = !_t.length;
        for (let t4 = 0; t4 < r3.length; t4 += 1) {
          const n4 = r3[t4];
          n4[1](), _t.push(n4, e2);
        }
        if (t3) {
          for (let t4 = 0; t4 < _t.length; t4 += 2)
            _t[t4][0](_t[t4 + 1]);
          _t.length = 0;
        }
      }
    }
    return {set: s2, update: function(t2) {
      s2(t2(e2));
    }, subscribe: function(i3, a2 = t) {
      const c3 = [i3, a2];
      return r3.push(c3), r3.length === 1 && (o3 = n3(s2) || t), i3(e2), () => {
        const t2 = r3.indexOf(c3);
        t2 !== -1 && r3.splice(t2, 1), r3.length === 0 && (o3(), o3 = null);
      };
    }};
  }
  function Pt(e2, n3, o3) {
    const i3 = !Array.isArray(e2), c3 = i3 ? [e2] : e2, l3 = n3.length < 2;
    return xt(o3, (e3) => {
      let o4 = false;
      const u2 = [];
      let p3 = 0, d2 = t;
      const f2 = () => {
        if (p3)
          return;
        d2();
        const o5 = n3(i3 ? u2[0] : u2, e3);
        l3 ? e3(o5) : d2 = s(o5) ? o5 : t;
      }, h2 = c3.map((t2, e4) => a(t2, (t3) => {
        u2[e4] = t3, p3 &= ~(1 << e4), o4 && f2();
      }, () => {
        p3 |= 1 << e4;
      }));
      return o4 = true, f2(), function() {
        r2(h2), d2();
      };
    });
  }
  window.routify = window.routify || {};
  var kt = vt(null);
  var jt = vt([]);
  jt.subscribe((t2) => window.routify.routes = t2);
  var Et = vt({component: {params: {}}});
  var Ot = vt(null);
  var Lt = vt(true);
  async function It({page: t2, metatags: e2, afterPageLoad: n3, parentNode: o3}) {
    const r3 = t2.last !== t2;
    setTimeout(() => pt(o3, r3));
    const {path: s2} = t2, {options: i3} = mt(), a2 = i3.prefetch;
    for (const e3 of n3._hooks)
      e3 && await e3(t2.api);
    e2.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: s2, prefetchId: a2}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
  }
  function St(t2, e2 = false) {
    t2 = lt.urlTransform.remove(t2);
    let {pathname: n3, search: o3} = gt(t2).url;
    const r3 = c2(jt), s2 = r3.find((t3) => n3 === t3.meta.name) || r3.find((t3) => n3.match(t3.regex));
    if (!s2)
      throw new Error(`Route could not be found for "${n3}".`);
    const i3 = e2 ? Object.create(s2) : s2, {route: a2, redirectPath: l3, rewritePath: u2} = Nt(i3, r3);
    return u2 && ({pathname: n3, search: o3} = gt(yt(u2, a2.params)).url, l3 && (a2.redirectTo = yt(l3, a2.params || {}))), lt.queryHandler && (a2.params = Object.assign({}, lt.queryHandler.parse(o3))), function(t3, e3) {
      if (t3.paramKeys) {
        const n4 = function(t4) {
          const e4 = [];
          return t4.forEach((t5) => {
            e4[t5.path.split("/").filter(Boolean).length - 1] = t5;
          }), e4;
        }(t3.layouts), o4 = e3.split("/").filter(Boolean);
        (function(t4) {
          return t4.split("/").filter(Boolean).map((t5) => t5.match(/\:(.+)/)).map((t5) => t5 && t5[1]);
        })(t3.path).forEach((e4, r4) => {
          e4 && (t3.params[e4] = o4[r4], n4[r4] ? n4[r4].param = {[e4]: o4[r4]} : t3.param = {[e4]: o4[r4]});
        });
      }
    }(a2, n3), a2.leftover = t2.replace(new RegExp(a2.regex), ""), a2;
  }
  function Nt(t2, e2, n3, o3) {
    const {redirect: r3, rewrite: s2} = t2.meta;
    if (r3 || s2) {
      n3 = r3 ? r3.path || r3 : n3, o3 = s2 ? s2.path || s2 : n3;
      const i3 = r3 && r3.params, a2 = s2 && s2.params, c3 = e2.find((t3) => t3.path === o3);
      return c3 === t2 && console.error(`${o3} is redirecting to itself`), c3 || console.error(`${t2.path} is redirecting to non-existent path: ${o3}`), (i3 || a2) && (c3.params = Object.assign({}, c3.params, i3, a2)), Nt(c3, e2, n3, o3);
    }
    return {route: t2, redirectPath: n3, rewritePath: o3};
  }
  function Tt(t2, e2, n3) {
    const o3 = t2.slice();
    return o3[1] = e2[n3], o3;
  }
  function Ft(t2, e2) {
    let n3, o3;
    return {key: t2, first: null, c() {
      n3 = w("iframe"), n3.src !== (o3 = e2[1].url) && j(n3, "src", o3), j(n3, "frameborder", "0"), j(n3, "title", "routify prefetcher"), this.first = n3;
    }, m(t3, e3) {
      y(t3, n3, e3);
    }, p(t3, r3) {
      e2 = t3, 1 & r3 && n3.src !== (o3 = e2[1].url) && j(n3, "src", o3);
    }, d(t3) {
      t3 && $(n3);
    }};
  }
  function At(e2) {
    let n3, o3 = [], r3 = new Map(), s2 = e2[0];
    const i3 = (t2) => t2[1].options.prefetch;
    for (let t2 = 0; t2 < s2.length; t2 += 1) {
      let n4 = Tt(e2, s2, t2), a2 = i3(n4);
      r3.set(a2, o3[t2] = Ft(a2, n4));
    }
    return {c() {
      n3 = w("div");
      for (let t3 = 0; t3 < o3.length; t3 += 1)
        o3[t3].c();
      var t2, e3, r4;
      j(n3, "id", "__routify_iframes"), t2 = "display", e3 = "none", n3.style.setProperty(t2, e3, r4 ? "important" : "");
    }, m(t2, e3) {
      y(t2, n3, e3);
      for (let t3 = 0; t3 < o3.length; t3 += 1)
        o3[t3].m(n3, null);
    }, p(t2, [e3]) {
      1 & e3 && (s2 = t2[0], o3 = ot(o3, e3, i3, 1, t2, s2, r3, n3, et, Ft, null, Tt));
    }, i: t, o: t, d(t2) {
      t2 && $(n3);
      for (let t3 = 0; t3 < o3.length; t3 += 1)
        o3[t3].d();
    }};
  }
  var Rt = vt([]);
  var Mt = Pt(Rt, (t2) => t2.slice(0, 2));
  function Ct(t2) {
    const e2 = t2.data ? t2.data.prefetchId : t2;
    if (!e2)
      return null;
    const n3 = c2(Rt).find((t3) => t3 && t3.options.prefetch == e2);
    if (n3) {
      const {gracePeriod: t3} = n3.options, o3 = new Promise((e3) => setTimeout(e3, t3)), r3 = new Promise((e3) => {
        window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t3 + 1e3);
      });
      Promise.all([o3, r3]).then(() => {
        Rt.update((t4) => t4.filter((t5) => t5.options.prefetch != e2));
      });
    }
  }
  function qt(t2, e2, n3) {
    let o3;
    return l2(t2, Mt, (t3) => n3(0, o3 = t3)), [o3];
  }
  Mt.subscribe((t2) => t2.forEach(({options: t3}) => {
    setTimeout(() => Ct(t3.prefetch), t3.timeout);
  })), addEventListener("message", Ct, false);
  var Bt = class extends ct {
    constructor(t2) {
      super(), at(this, t2, qt, At, i2, {});
    }
  };
  function Ut() {
    return A("routify") || Et;
  }
  var Dt = {subscribe: (t2) => Pt(kt, (t3) => t3.api).subscribe(t2)};
  var Ht = {subscribe: (t2) => (window.routify.stopAutoReady = true, t2(async function() {
    await H(), await It({page: c2(kt), metatags: Vt, afterPageLoad: Kt});
  }), () => {
  })};
  var Kt = {_hooks: [(t2) => Lt.set(false)], subscribe: zt};
  var Jt = {_hooks: [], subscribe: zt};
  function zt(t2) {
    const e2 = this._hooks, n3 = e2.length;
    return t2((t3) => {
      e2[n3] = t3;
    }), () => delete e2[n3];
  }
  var Wt = {subscribe: (t2) => Pt(Ut(), (t3) => t3.route.params).subscribe(t2)};
  var Gt = {subscribe(t2) {
    const e2 = Ut(), {route: n3, routes: o3} = c2(e2);
    return Pt(e2, (t3) => {
      return e3 = t3, r3 = n3, s2 = o3, function(t4, n4 = {}, o4) {
        const {component: i3} = e3, a2 = Object.assign({}, r3.params, i3.params);
        let c3 = t4 && t4.nodeType && t4;
        c3 && (t4 = t4.getAttribute("href")), t4 = t4 ? p3(t4) : i3.shortPath;
        const l3 = s2.find((e4) => [e4.shortPath || "/", e4.path].includes(t4));
        if (l3 && l3.meta.preload === "proximity" && window.requestIdleCallback) {
          const t5 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l3.api.preload());
          }, t5);
        }
        o4 && o4.strict !== false || (t4 = t4.replace(/index$/, ""));
        let u2 = yt(t4, n4, a2);
        return c3 ? (c3.href = u2, {update(e4) {
          c3.href = yt(t4, e4, a2);
        }}) : u2;
        function p3(t5) {
          if (t5.match(/^\.\.?\//)) {
            let [, e4, n5] = t5.match(/^([\.\/]+)(.*)/), o5 = i3.path.replace(/\/$/, "");
            const r4 = e4.match(/\.\.\//g) || [];
            i3.isPage && r4.push(null), r4.forEach(() => o5 = o5.replace(/\/[^\/]+\/?$/, "")), t5 = (t5 = `${o5}/${n5}`.replace(/\/$/, "")) || "/";
          } else if (t5.match(/^\//))
            ;
          else {
            const e4 = s2.find((e5) => e5.meta.name === t5);
            e4 && (t5 = e4.shortPath);
          }
          return t5;
        }
      };
      var e3, r3, s2;
    }).subscribe(t2);
  }};
  var Qt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (Qt.getLongest(Qt.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
    Qt.writeMeta(t2, e2);
  }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
    Qt.writeMeta(`og:${t2}`, e2);
  }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
    document.title = e2;
  }}], getLongest(t2, e2) {
    const n3 = t2[e2];
    if (n3) {
      const o3 = c2(kt).path;
      return n3[Object.keys(t2[e2]).filter((t3) => o3.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
    }
  }, writeMeta(t2, e2) {
    const n3 = document.getElementsByTagName("head")[0], o3 = t2.match(/(.+)\:/), r3 = o3 && o3[1] || "plain", {propField: s2, valueField: i3} = Vt.services[r3] || Vt.services.plain, a2 = document.querySelector(`meta[${s2}='${t2}']`);
    a2 && a2.remove();
    const c3 = document.createElement("meta");
    c3.setAttribute(s2, t2), c3.setAttribute(i3, e2), c3.setAttribute("data-origin", "routify"), n3.appendChild(c3);
  }, set(t2, e2) {
    Qt.plugins.forEach((n3) => {
      n3.condition(t2, e2) && ([t2, e2] = n3.action(t2, e2) || [t2, e2]);
    });
  }, clear() {
    const t2 = document.querySelector("meta");
    t2 && t2.remove();
  }, template(t2, e2) {
    const n3 = Qt.getOrigin();
    Qt.templates[t2] = Qt.templates[t2] || {}, Qt.templates[t2][n3] = e2;
  }, update() {
    Object.keys(Qt.props).forEach((t2) => {
      let e2 = Qt.getLongest(Qt.props, t2);
      Qt.plugins.forEach((n3) => {
        n3.condition(t2, e2) && ([t2, e2] = n3.action(t2, e2) || [t2, e2]);
      });
    });
  }, batchedUpdate() {
    Qt._pendingUpdate || (Qt._pendingUpdate = true, setTimeout(() => {
      Qt._pendingUpdate = false, this.update();
    }));
  }, _updateQueued: false, getOrigin() {
    const t2 = Ut();
    return t2 && c2(t2).path || "/";
  }, _pendingUpdate: false};
  var Vt = new Proxy(Qt, {set(t2, e2, n3, o3) {
    const {props: r3, getOrigin: s2} = t2;
    return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n3, o3) : (r3[e2] = r3[e2] || {}, r3[e2][s2()] = n3), window.routify.appLoaded && t2.batchedUpdate(), true;
  }});
  function Zt(t2, e2, n3) {
    const o3 = t2.slice();
    return o3[21] = e2[n3].component, o3[22] = e2[n3].componentFile, o3[2] = e2[n3].decorator, o3[1] = e2[n3].nodes, o3;
  }
  function Xt(t2) {
    let e2, n3, o3 = [], r3 = new Map(), s2 = [t2[4]];
    const i3 = (t3) => t3[6];
    for (let e3 = 0; e3 < 1; e3 += 1) {
      let n4 = Zt(t2, s2, e3), a2 = i3(n4);
      r3.set(a2, o3[e3] = ne(a2, n4));
    }
    return {c() {
      for (let t3 = 0; t3 < 1; t3 += 1)
        o3[t3].c();
      e2 = P();
    }, m(t3, r4) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o3[e3].m(t3, r4);
      y(t3, e2, r4), n3 = true;
    }, p(t3, n4) {
      33554557 & n4 && (s2 = [t3[4]], Z(), o3 = ot(o3, n4, i3, 1, t3, s2, r3, e2.parentNode, nt, ne, e2, Zt), X());
    }, i(t3) {
      if (!n3) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          Y(o3[t4]);
        n3 = true;
      }
    }, o(t3) {
      for (let t4 = 0; t4 < 1; t4 += 1)
        tt(o3[t4]);
      n3 = false;
    }, d(t3) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o3[e3].d(t3);
      t3 && $(e2);
    }};
  }
  function Yt(t2) {
    let e2, n3;
    return e2 = new se({props: {decorator: t2[2], nodes: t2[1], scoped: {...t2[0], ...t2[25]}}}), {c() {
      rt(e2.$$.fragment);
    }, m(t3, o3) {
      st(e2, t3, o3), n3 = true;
    }, p(t3, n4) {
      const o3 = {};
      4 & n4 && (o3.decorator = t3[2]), 16 & n4 && (o3.nodes = t3[1]), 33554433 & n4 && (o3.scoped = {...t3[0], ...t3[25]}), e2.$set(o3);
    }, i(t3) {
      n3 || (Y(e2.$$.fragment, t3), n3 = true);
    }, o(t3) {
      tt(e2.$$.fragment, t3), n3 = false;
    }, d(t3) {
      it(e2, t3);
    }};
  }
  function te(t2) {
    let e2, n3, o3 = t2[21] && t2[1].length && Yt(t2);
    return {c() {
      o3 && o3.c(), e2 = P();
    }, m(t3, r3) {
      o3 && o3.m(t3, r3), y(t3, e2, r3), n3 = true;
    }, p(t3, n4) {
      t3[21] && t3[1].length ? o3 ? (o3.p(t3, n4), 16 & n4 && Y(o3, 1)) : (o3 = Yt(t3), o3.c(), Y(o3, 1), o3.m(e2.parentNode, e2)) : o3 && (Z(), tt(o3, 1, 1, () => {
        o3 = null;
      }), X());
    }, i(t3) {
      n3 || (Y(o3), n3 = true);
    }, o(t3) {
      tt(o3), n3 = false;
    }, d(t3) {
      o3 && o3.d(t3), t3 && $(e2);
    }};
  }
  function ee(t2) {
    let n3, o3, r3;
    const s2 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
    var i3 = t2[22];
    function a2(t3) {
      let n4 = {$$slots: {default: [te, ({scoped: t4, decorator: e2}) => ({25: t4, 2: e2}), ({scoped: t4, decorator: e2}) => (t4 ? 33554432 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t3}};
      for (let t4 = 0; t4 < s2.length; t4 += 1)
        n4 = e(n4, s2[t4]);
      return {props: n4};
    }
    return i3 && (n3 = new i3(a2(t2))), {c() {
      n3 && rt(n3.$$.fragment), o3 = v();
    }, m(t3, e2) {
      n3 && st(n3, t3, e2), y(t3, o3, e2), r3 = true;
    }, p(t3, e2) {
      const r4 = 41 & e2 ? function(t4, e3) {
        const n4 = {}, o4 = {}, r5 = {$$scope: 1};
        let s3 = t4.length;
        for (; s3--; ) {
          const i4 = t4[s3], a3 = e3[s3];
          if (a3) {
            for (const t5 in i4)
              t5 in a3 || (o4[t5] = 1);
            for (const t5 in a3)
              r5[t5] || (n4[t5] = a3[t5], r5[t5] = 1);
            t4[s3] = a3;
          } else
            for (const t5 in i4)
              r5[t5] = 1;
        }
        for (const t5 in o4)
          t5 in n4 || (n4[t5] = void 0);
        return n4;
      }(s2, [1 & e2 && {scoped: t3[0]}, 32 & e2 && {scopedSync: t3[5]}, 8 & e2 && (c3 = t3[3].param || {}, typeof c3 == "object" && c3 !== null ? c3 : {})]) : {};
      var c3;
      if (100663317 & e2 && (r4.$$scope = {dirty: e2, ctx: t3}), i3 !== (i3 = t3[22])) {
        if (n3) {
          Z();
          const t4 = n3;
          tt(t4.$$.fragment, 1, 0, () => {
            it(t4, 1);
          }), X();
        }
        i3 ? (n3 = new i3(a2(t3)), rt(n3.$$.fragment), Y(n3.$$.fragment, 1), st(n3, o3.parentNode, o3)) : n3 = null;
      } else
        i3 && n3.$set(r4);
    }, i(t3) {
      r3 || (n3 && Y(n3.$$.fragment, t3), r3 = true);
    }, o(t3) {
      n3 && tt(n3.$$.fragment, t3), r3 = false;
    }, d(t3) {
      n3 && it(n3, t3), t3 && $(o3);
    }};
  }
  function ne(t2, e2) {
    let n3, o3, r3, s2;
    var i3 = e2[2];
    function a2(t3) {
      return {props: {scoped: t3[0], $$slots: {default: [ee]}, $$scope: {ctx: t3}}};
    }
    return i3 && (o3 = new i3(a2(e2))), {key: t2, first: null, c() {
      n3 = P(), o3 && rt(o3.$$.fragment), r3 = P(), this.first = n3;
    }, m(t3, e3) {
      y(t3, n3, e3), o3 && st(o3, t3, e3), y(t3, r3, e3), s2 = true;
    }, p(t3, n4) {
      e2 = t3;
      const s3 = {};
      if (1 & n4 && (s3.scoped = e2[0]), 67108925 & n4 && (s3.$$scope = {dirty: n4, ctx: e2}), i3 !== (i3 = e2[2])) {
        if (o3) {
          Z();
          const t4 = o3;
          tt(t4.$$.fragment, 1, 0, () => {
            it(t4, 1);
          }), X();
        }
        i3 ? (o3 = new i3(a2(e2)), rt(o3.$$.fragment), Y(o3.$$.fragment, 1), st(o3, r3.parentNode, r3)) : o3 = null;
      } else
        i3 && o3.$set(s3);
    }, i(t3) {
      s2 || (o3 && Y(o3.$$.fragment, t3), s2 = true);
    }, o(t3) {
      o3 && tt(o3.$$.fragment, t3), s2 = false;
    }, d(t3) {
      t3 && $(n3), t3 && $(r3), o3 && it(o3, t3);
    }};
  }
  function oe(e2) {
    let n3, o3, r3, i3, a2, c3 = e2[4] && Xt(e2);
    return {c() {
      c3 && c3.c(), n3 = v(), o3 = w("span");
    }, m(l3, u2) {
      var p3;
      c3 && c3.m(l3, u2), y(l3, n3, u2), y(l3, o3, u2), r3 = true, i3 || (p3 = e2[9].call(null, o3), a2 = p3 && s(p3.destroy) ? p3.destroy : t, i3 = true);
    }, p(t2, [e3]) {
      t2[4] ? c3 ? (c3.p(t2, e3), 16 & e3 && Y(c3, 1)) : (c3 = Xt(t2), c3.c(), Y(c3, 1), c3.m(n3.parentNode, n3)) : c3 && (Z(), tt(c3, 1, 1, () => {
        c3 = null;
      }), X());
    }, i(t2) {
      r3 || (Y(c3), r3 = true);
    }, o(t2) {
      tt(c3), r3 = false;
    }, d(t2) {
      c3 && c3.d(t2), t2 && $(n3), t2 && $(o3), i3 = false, a2();
    }};
  }
  function re(t2, e2, n3) {
    let o3, r3, s2, i3, a2;
    l2(t2, kt, (t3) => n3(15, i3 = t3)), l2(t2, jt, (t3) => n3(16, a2 = t3));
    let c3, {nodes: u2 = []} = e2, {scoped: p3 = {}} = e2, {decorator: d2} = e2, h2 = null, m2 = null, g2 = {}, y2 = 1;
    const $2 = vt(null);
    l2(t2, $2, (t3) => n3(4, r3 = t3));
    const b2 = A("routify") || Et;
    l2(t2, b2, (t3) => n3(14, s2 = t3));
    F("routify", $2);
    let w2 = [];
    function _2(t3) {
      n3(5, g2 = {...p3});
      const e3 = {...r3, nodes: m2, decorator: d2 || wt, layout: h2.isLayout ? h2 : s2.layout, component: h2, route: i3, routes: a2, componentFile: t3, parentNode: c3 || s2.parentNode};
      $2.set(e3), f(b2, s2.child = h2, s2), m2.length === 0 && async function() {
        await new Promise((t5) => setTimeout(t5));
        const t4 = r3.component.path === i3.path;
        !window.routify.stopAutoReady && t4 && It({page: r3.component, metatags: Vt, afterPageLoad: Kt, parentNode: c3});
      }();
    }
    return t2.$$set = (t3) => {
      "nodes" in t3 && n3(1, u2 = t3.nodes), "scoped" in t3 && n3(0, p3 = t3.scoped), "decorator" in t3 && n3(2, d2 = t3.decorator);
    }, t2.$$.update = () => {
      3074 & t2.$$.dirty && w2 !== u2 && (n3(11, w2 = u2), n3(3, [h2, ...m2] = [...u2], h2), n3(3, h2.api.reset = () => n3(10, y2++, y2), h2)), 8 & t2.$$.dirty && function(t3) {
        let e3 = t3.component();
        e3 instanceof Promise ? e3.then(_2) : _2(e3);
      }(h2), 1040 & t2.$$.dirty && n3(6, o3 = r3 && y2 && function({meta: t3, path: e3, param: n4, params: o4}) {
        return JSON.stringify({path: e3, invalidate: y2, param: (t3["param-is-page"] || t3["slug-is-page"]) && n4, queryParams: t3["query-params-is-page"] && o4});
      }(r3.component)), 16 & t2.$$.dirty && r3 && ht(r3, H);
    }, [p3, u2, d2, h2, r3, g2, o3, $2, b2, (t3) => c3 = t3.parentNode, y2, w2];
  }
  var se = class extends ct {
    constructor(t2) {
      super(), at(this, t2, re, oe, i2, {nodes: 1, scoped: 0, decorator: 2});
    }
  };
  function ie(t2, e2) {
    let n3 = false;
    function o3(o4, r4) {
      const s2 = St(o4 || mt().fullpath);
      s2.redirectTo && (history.replaceStateNative({}, null, s2.redirectTo), delete s2.redirectTo);
      const i3 = [...(r4 && St(mt().fullpath, t2) || s2).layouts, s2];
      n3 && delete n3.last, s2.last = n3, n3 = s2, o4 || Ot.set(s2), kt.set(s2), s2.api.preload().then(() => {
        Lt.set(true), e2(i3);
      });
    }
    const r3 = function(t3) {
      ["pushState", "replaceState"].forEach((t4) => {
        history[t4 + "Native"] || (history[t4 + "Native"] = history[t4]), history[t4] = async function(e4 = {}, n5, o4) {
          if (o4 === location.pathname + location.search + location.hash)
            return false;
          const {id: r4, path: s2, params: i3} = c2(kt);
          e4 = {id: r4, path: s2, params: i3, ...e4};
          const a2 = new Event(t4.toLowerCase());
          Object.assign(a2, {state: e4, title: n5, url: o4});
          return await ce(a2, o4) ? (history[t4 + "Native"].apply(this, [e4, n5, o4]), dispatchEvent(a2)) : void 0;
        };
      });
      let e3 = false;
      const n4 = {click: ae, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n5) => {
        e3 ? e3 = false : await ce(n5, mt().fullpath) ? t3() : (e3 = true, n5.preventDefault(), history.go(1));
      }};
      Object.entries(n4).forEach((t4) => addEventListener(...t4));
      return () => {
        Object.entries(n4).forEach((t4) => removeEventListener(...t4));
      };
    }(o3);
    return {updatePage: o3, destroy: r3};
  }
  function ae(t2) {
    const e2 = t2.target.closest("a"), n3 = e2 && e2.href;
    if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
      return;
    if (!n3 || e2.target || e2.host !== location.host)
      return;
    const o3 = new URL(n3), r3 = o3.pathname + o3.search + o3.hash;
    t2.preventDefault(), history.pushState({}, "", r3);
  }
  async function ce(t2, e2) {
    const n3 = St(e2).api;
    for (const o3 of Jt._hooks.filter(Boolean)) {
      if (!await o3(t2, n3, {url: e2}))
        return false;
    }
    return true;
  }
  function le(t2) {
    let e2, n3;
    return e2 = new se({props: {nodes: t2[0]}}), {c() {
      rt(e2.$$.fragment);
    }, m(t3, o3) {
      st(e2, t3, o3), n3 = true;
    }, p(t3, n4) {
      const o3 = {};
      1 & n4 && (o3.nodes = t3[0]), e2.$set(o3);
    }, i(t3) {
      n3 || (Y(e2.$$.fragment, t3), n3 = true);
    }, o(t3) {
      tt(e2.$$.fragment, t3), n3 = false;
    }, d(t3) {
      it(e2, t3);
    }};
  }
  function ue(t2) {
    let e2, n3, o3, r3 = t2[0] && t2[1] !== null && le(t2);
    return n3 = new Bt({}), {c() {
      r3 && r3.c(), e2 = v(), rt(n3.$$.fragment);
    }, m(t3, s2) {
      r3 && r3.m(t3, s2), y(t3, e2, s2), st(n3, t3, s2), o3 = true;
    }, p(t3, [n4]) {
      t3[0] && t3[1] !== null ? r3 ? (r3.p(t3, n4), 3 & n4 && Y(r3, 1)) : (r3 = le(t3), r3.c(), Y(r3, 1), r3.m(e2.parentNode, e2)) : r3 && (Z(), tt(r3, 1, 1, () => {
        r3 = null;
      }), X());
    }, i(t3) {
      o3 || (Y(r3), Y(n3.$$.fragment, t3), o3 = true);
    }, o(t3) {
      tt(r3), tt(n3.$$.fragment, t3), o3 = false;
    }, d(t3) {
      r3 && r3.d(t3), t3 && $(e2), it(n3, t3);
    }};
  }
  function pe(t2, e2, n3) {
    let o3;
    l2(t2, kt, (t3) => n3(1, o3 = t3));
    let r3, s2, {routes: i3} = e2, {config: a2 = {}} = e2;
    window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(lt, a2);
    F("routifyupdatepage", (...t3) => s2 && s2.updatePage(...t3));
    const c3 = (t3) => n3(0, r3 = t3), u2 = () => {
      s2 && (s2.destroy(), s2 = null);
    };
    let p3 = null;
    var d2;
    return d2 = u2, T().$$.on_destroy.push(d2), t2.$$set = (t3) => {
      "routes" in t3 && n3(2, i3 = t3.routes), "config" in t3 && n3(3, a2 = t3.config);
    }, t2.$$.update = () => {
      4 & t2.$$.dirty && i3 && (clearTimeout(p3), p3 = setTimeout(() => {
        u2(), s2 = ie(i3, c3), jt.set(i3), s2.updatePage();
      }));
    }, [r3, o3, i3, a2];
  }
  var de = class extends ct {
    constructor(t2) {
      super(), at(this, t2, pe, ue, i2, {routes: 2, config: 3});
    }
  };
  function fe(t2) {
    const e2 = async function(e3) {
      return await he(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    };
    return e2.sync = function(e3) {
      return me(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    }, e2;
  }
  async function he(t2, e2) {
    const n3 = await t2(e2);
    if (n3 === false)
      return false;
    const o3 = n3 || e2.file;
    if (o3.children) {
      const n4 = await Promise.all(o3.children.map(async (n5) => he(t2, {state: e2.state, scope: ge(e2.scope || {}), parent: e2.file, file: await n5})));
      o3.children = n4.filter(Boolean);
    }
    return o3;
  }
  function me(t2, e2) {
    const n3 = t2(e2);
    if (n3 === false)
      return false;
    const o3 = n3 || e2.file;
    if (o3.children) {
      const n4 = o3.children.map((n5) => me(t2, {state: e2.state, scope: ge(e2.scope || {}), parent: e2.file, file: n5}));
      o3.children = n4.filter(Boolean);
    }
    return o3;
  }
  function ge(t2) {
    return JSON.parse(JSON.stringify(t2));
  }
  var ye = fe(({file: t2}) => {
    (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
      const n3 = e2 ? "" : "/?$";
      return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(ut, "([^/]+)") + n3}`;
    })(t2.path, t2.isFallback));
  });
  var $e = fe(({file: t2}) => {
    t2.paramKeys = ft(t2.path);
  });
  var be = fe(({file: t2}) => {
    t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
  });
  var we = fe(({file: t2}) => {
    t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
  });
  var _e = fe(({file: t2}) => {
    const e2 = t2, n3 = t2.meta && t2.meta.children || [];
    n3.length && (e2.children = e2.children || [], e2.children.push(...n3.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
  });
  var xe = fe((t2) => {
    const {file: e2} = t2, {isFallback: n3, meta: o3} = e2, r3 = e2.path.match("/:"), s2 = e2.path.endsWith("/index"), i3 = o3.index || o3.index === 0, a2 = o3.index === false;
    e2.isIndexable = i3 || !n3 && !r3 && !s2 && !a2, e2.isNonIndexable = !e2.isIndexable;
  });
  var ve = fe(({file: t2, parent: e2}) => {
    Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => ke(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => ke(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => Pe(e2)});
  });
  function Pe(t2, e2 = []) {
    return t2 && (e2.unshift(t2), Pe(t2.parent, e2)), e2;
  }
  function ke(t2, e2) {
    if (!t2.root) {
      const n3 = t2.parent.children.filter((t3) => t3.isIndexable), o3 = n3.indexOf(t2);
      return n3[o3 + e2];
    }
  }
  var je = fe(({file: t2, parent: e2}) => {
    t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
  });
  var Ee = fe(({file: t2, scope: e2}) => {
    function n3(t3) {
      if (!t3.isLayout && t3.meta.reset)
        return [];
      const {parent: e3} = t3, o3 = e3 && e3.component && e3, r3 = o3 && (o3.isReset || o3.meta.reset), s2 = e3 && !r3 && n3(e3) || [];
      return o3 && s2.push(o3), s2;
    }
    Object.defineProperty(t2, "layouts", {get: () => n3(t2)});
  });
  var Oe = fe(({file: t2}) => {
    const e2 = t2.root ? function() {
    } : t2.children ? (t2.isPage, function() {
    }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
    });
    Object.setPrototypeOf(t2, e2.prototype);
  });
  var Le = Object.freeze({__proto__: null, setRegex: ye, setParamKeys: $e, setShortPath: be, setRank: we, addMetaChildren: _e, setIsIndexable: xe, assignRelations: ve, assignIndex: je, assignLayout: Ee, createFlatList: (t2) => {
    fe((t3) => {
      (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
    }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
  }, setPrototype: Oe});
  var Ie = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
  function Se(t2) {
    return Object.entries(Ie).forEach(([e2, n3]) => {
      t2[e2] === void 0 && (t2[e2] = n3);
    }), t2.children && (t2.children = t2.children.map(Se)), t2;
  }
  var Ne = fe(({file: t2}) => {
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
      return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t2) => !t2.isNonIndexable).sort((t2, e2) => t2.isMeta && e2.isMeta ? 0 : (t2 = (t2.meta.index || t2.meta.title || t2.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t2.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t2}) => t2);
    }
    get next() {
      return Fe(this, 1);
    }
    get prev() {
      return Fe(this, -1);
    }
    async preload() {
      const t2 = [...this.__file.layouts, this.__file, this.index && this.index.__file].filter(Boolean).map((t3) => t3.component());
      await Promise.all(t2);
    }
    get component() {
      return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
    }
    get componentWithIndex() {
      return new Promise((t2) => Promise.all([this.component, this.index && this.index.component]).then((e2) => t2(e2)));
    }
    get index() {
      const t2 = this.__file.children && this.__file.children.find((t3) => t3.isIndex);
      return t2 && t2.api;
    }
  };
  function Fe(t2, e2) {
    if (!t2.__file.root) {
      const n3 = t2.parent.children.indexOf(t2);
      return t2.parent.children[n3 + e2];
    }
  }
  var Ae = {...Le, restoreDefaults: ({tree: t2}) => Se(t2), assignAPI: Ne};

  // dist/build/store-9d38801d.js
  var o = xt("http://foodis.dataline.fi/pw/");
  var n = vt({});
  var r = vt({});
  var i = ((t2, a2) => {
    const {subscribe: e2, set: o3, update: n3} = vt(a2);
    return {subscribe: e2, set: o3, update: n3, useLocalStorage: () => {
      const a3 = localStorage.getItem(t2);
      a3 && o3(JSON.parse(a3)), e2((a4) => {
        localStorage.setItem(t2, JSON.stringify(a4));
      });
    }};
  })("cart", {total: 0, amount: 0, products: []});
  var c = 0;
  var l = 0;
  var p = Pt(Ht, (t2) => async function(a2 = "", s2 = null, e2 = null) {
    c++;
    let o3 = s2 ? "POST" : "GET";
    const n3 = await fetch(`http://foodis.dataline.fi/pw/${a2}`, {method: o3, mode: "cors", headers: {"Content-Type": "application/json", ...e2 ? {Authorization: `Bearer ${e2}`} : void 0}, body: s2 ? JSON.stringify(s2) : null}).then((t3) => t3.json());
    return l++, l === c && t2(), n3;
  });

  // dist/build/main.js
  var Re = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => require_fallback_c46e4570()).then((t2) => t2.default)}, {isDir: true, children: [{isDir: true, ext: "", children: [{isIndex: true, isPage: true, path: "/:cat/:slug/index", id: "__cat__slug_index", component: () => Promise.resolve().then(() => require_index_cbf4ddc7()).then((t2) => t2.default)}], path: "/:cat/:slug"}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => require_index_1b3af9bb()).then((t2) => t2.default)}], isLayout: true, path: "/:cat", id: "__cat__layout", component: () => Promise.resolve().then(() => require_layout_226d1c9b()).then((t2) => t2.default)}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => require_index_6c0d0aba()).then((t2) => t2.default)}, {isPage: true, path: "/kassa", id: "_kassa", component: () => Promise.resolve().then(() => require_kassa_c962830e()).then((t2) => t2.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => require_layout_0c0ceec6()).then((t2) => t2.default)};
  var {tree: Me, routes: Ce} = function(t2) {
    const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n3 = {tree: t2, routes: []};
    for (let t3 of e2) {
      (Ae[t3].sync || Ae[t3])(n3);
    }
    return n3;
  }(Re);
  function qe(e2) {
    let n3, o3;
    return n3 = new de({props: {routes: Ce}}), {c() {
      rt(n3.$$.fragment);
    }, m(t2, e3) {
      st(n3, t2, e3), o3 = true;
    }, p: t, i(t2) {
      o3 || (Y(n3.$$.fragment, t2), o3 = true);
    }, o(t2) {
      tt(n3.$$.fragment, t2), o3 = false;
    }, d(t2) {
      it(n3, t2);
    }};
  }
  !function(t2, e2 = {target: document.body}, n3 = "hmr", o3 = "app-loaded") {
    const r3 = document.getElementById(n3), s2 = document.createElement("div");
    function i3() {
      removeEventListener(o3, i3), r3 && r3.remove(), s2.style.visibility = null, s2.setAttribute("id", n3);
    }
    s2.style.visibility = "hidden", e2.target.appendChild(s2), r3 ? addEventListener(o3, i3) : i3(), new t2({...e2, target: s2});
  }(class extends ct {
    constructor(t2) {
      super(), at(this, t2, null, qe, i2, {});
    }
  }, {target: document.body}, "routify-app");
})();
