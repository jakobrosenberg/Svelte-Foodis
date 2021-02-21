(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // dist/build/_fallback-b144d832.js
  var require_fallback_b144d832 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_b144d832_default
    });
    const main2 = __toModule(require_main());
    function v(s3) {
      let a3, e3, d2, f2, v2, g2, h, m;
      return {c() {
        a3 = main2.e("div"), e3 = main2.e("div"), e3.textContent = "404", d2 = main2.a(), f2 = main2.e("div"), v2 = main2.t("Page not found. \n  \n  "), g2 = main2.e("a"), h = main2.t("Go back"), main2.b(e3, "class", "huge svelte-33l10e"), main2.b(g2, "href", m = s3[0]("../")), main2.b(f2, "class", "big"), main2.b(a3, "class", "e404 svelte-33l10e");
      }, m(s4, t3) {
        main2.c(s4, a3, t3), main2.d(a3, e3), main2.d(a3, d2), main2.d(a3, f2), main2.d(f2, v2), main2.d(f2, g2), main2.d(g2, h);
      }, p(s4, [a4]) {
        1 & a4 && m !== (m = s4[0]("../")) && main2.b(g2, "href", m);
      }, i: main2.n, o: main2.n, d(s4) {
        s4 && main2.f(a3);
      }};
    }
    function g(s3, a3, e3) {
      let t3;
      return main2.g(s3, main2.u, (s4) => e3(0, t3 = s4)), [t3];
    }
    class fallback_b144d832_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, g, v, main2.s, {});
      }
    }
  });

  // dist/build/[slug]-aa6a4f66.js
  var require_slug_aa6a4f66 = __commonJS((exports) => {
    __export(exports, {
      default: () => slug_aa6a4f66_default
    });
    const main2 = __toModule(require_main());
    function z(t3, e3, n2) {
      const i3 = t3.slice();
      return i3[10] = e3[n2], i3;
    }
    function H(t3) {
      let e3, n2, d2, m2, f2, v2, h2, b2, x2, y2, w, $, j, z2, H2, F2 = t3[2].img && L(t3), D2 = t3[2].price && k(t3), q2 = t3[2].body && M(t3), I2 = t3[2].extra && T(t3);
      return {c() {
        e3 = main2.e("div"), n2 = main2.e("div"), F2 && F2.c(), d2 = main2.a(), m2 = main2.e("div"), D2 && D2.c(), f2 = main2.a(), v2 = main2.e("div"), h2 = main2.e("div"), b2 = main2.e("input"), x2 = main2.a(), y2 = main2.e("div"), w = main2.e("button"), w.textContent = "Lis\xE4\xE4 ostoskoriin", $ = main2.a(), q2 && q2.c(), j = main2.a(), I2 && I2.c(), main2.b(n2, "id", "img"), main2.b(b2, "name", "amount"), main2.b(b2, "type", "number"), main2.b(b2, "min", "1"), main2.b(b2, "step", "1"), b2.required = true, main2.b(w, "class", "w100"), main2.b(v2, "id", "cartIt"), main2.b(v2, "class", "border grid svelte-8fvvzw"), main2.b(m2, "id", "productInfo"), main2.b(e3, "id", "product"), main2.b(e3, "class", "container double grid svelte-8fvvzw");
      }, m(i3, s3) {
        main2.c(i3, e3, s3), main2.d(e3, n2), F2 && F2.m(n2, null), main2.d(e3, d2), main2.d(e3, m2), D2 && D2.m(m2, null), main2.d(m2, f2), main2.d(m2, v2), main2.d(v2, h2), main2.d(h2, b2), main2.h(b2, t3[0]), main2.d(v2, x2), main2.d(v2, y2), main2.d(y2, w), main2.d(m2, $), q2 && q2.m(m2, null), main2.d(m2, j), I2 && I2.m(m2, null), z2 || (H2 = [main2.l(b2, "input", t3[6]), main2.l(w, "click", t3[4])], z2 = true);
      }, p(t4, e4) {
        t4[2].img ? F2 ? F2.p(t4, e4) : (F2 = L(t4), F2.c(), F2.m(n2, null)) : F2 && (F2.d(1), F2 = null), t4[2].price ? D2 ? D2.p(t4, e4) : (D2 = k(t4), D2.c(), D2.m(m2, f2)) : D2 && (D2.d(1), D2 = null), 1 & e4 && main2.k(b2.value) !== t4[0] && main2.h(b2, t4[0]), t4[2].body ? q2 ? q2.p(t4, e4) : (q2 = M(t4), q2.c(), q2.m(m2, j)) : q2 && (q2.d(1), q2 = null), t4[2].extra ? I2 ? I2.p(t4, e4) : (I2 = T(t4), I2.c(), I2.m(m2, null)) : I2 && (I2.d(1), I2 = null);
      }, d(t4) {
        t4 && main2.f(e3), F2 && F2.d(), D2 && D2.d(), q2 && q2.d(), I2 && I2.d(), z2 = false, main2.r(H2);
      }};
    }
    function L(t3) {
      let e3, n2, o3, u2, d2, m2, p2, f2, g2, v2;
      return {c() {
        e3 = main2.e("picture"), n2 = main2.e("source"), u2 = main2.a(), d2 = main2.e("source"), p2 = main2.a(), f2 = main2.e("img"), main2.b(n2, "srcset", o3 = t3[2].img[1]), main2.b(n2, "type", "image/webp"), main2.b(d2, "srcset", m2 = t3[2].img[0]), main2.b(d2, "type", "image/jpeg"), f2.src !== (g2 = t3[2].img[0]) && main2.b(f2, "src", g2), main2.b(f2, "alt", v2 = t3[2].title), main2.b(e3, "class", "block");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), main2.d(e3, n2), main2.d(e3, u2), main2.d(e3, d2), main2.d(e3, p2), main2.d(e3, f2);
      }, p(t4, e4) {
        4 & e4 && o3 !== (o3 = t4[2].img[1]) && main2.b(n2, "srcset", o3), 4 & e4 && m2 !== (m2 = t4[2].img[0]) && main2.b(d2, "srcset", m2), 4 & e4 && f2.src !== (g2 = t4[2].img[0]) && main2.b(f2, "src", g2), 4 & e4 && v2 !== (v2 = t4[2].title) && main2.b(f2, "alt", v2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function k(t3) {
      let e3, n2, o3, u2, p2, f2, g2 = t3[1].toFixed(2) + "", v2 = t3[0] > 1 && F(t3);
      return {c() {
        e3 = main2.e("div"), n2 = main2.t("Hinta: "), o3 = main2.e("strong"), u2 = main2.t(g2), p2 = main2.t(" \u20AC"), f2 = main2.a(), v2 && v2.c(), main2.b(e3, "id", "price"), main2.b(e3, "class", "svelte-8fvvzw");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), main2.d(e3, n2), main2.d(e3, o3), main2.d(o3, u2), main2.d(o3, p2), main2.d(e3, f2), v2 && v2.m(e3, null);
      }, p(t4, n3) {
        2 & n3 && g2 !== (g2 = t4[1].toFixed(2) + "") && main2.j(u2, g2), t4[0] > 1 ? v2 ? v2.p(t4, n3) : (v2 = F(t4), v2.c(), v2.m(e3, null)) : v2 && (v2.d(1), v2 = null);
      }, d(t4) {
        t4 && main2.f(e3), v2 && v2.d();
      }};
    }
    function F(t3) {
      let e3, n2, l2, o3, u2, p2, f2, g2 = t3[3].toFixed(2) + "";
      return {c() {
        e3 = main2.e("br"), n2 = main2.a(), l2 = main2.e("small"), o3 = main2.t("Yhteens\xE4: "), u2 = main2.e("strong"), p2 = main2.t(g2), f2 = main2.t(" \u20AC");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), main2.c(t4, n2, i3), main2.c(t4, l2, i3), main2.d(l2, o3), main2.d(l2, u2), main2.d(u2, p2), main2.d(u2, f2);
      }, p(t4, e4) {
        8 & e4 && g2 !== (g2 = t4[3].toFixed(2) + "") && main2.j(p2, g2);
      }, d(t4) {
        t4 && main2.f(e3), t4 && main2.f(n2), t4 && main2.f(l2);
      }};
    }
    function M(t3) {
      let e3, n2 = t3[2].body + "";
      return {c() {
        e3 = main2.e("div"), main2.b(e3, "id", "body");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), e3.innerHTML = n2;
      }, p(t4, i3) {
        4 & i3 && n2 !== (n2 = t4[2].body + "") && (e3.innerHTML = n2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function T(t3) {
      let e3, n2, s3 = t3[2].extra, o3 = [];
      for (let e4 = 0; e4 < s3.length; e4 += 1)
        o3[e4] = D(z(t3, s3, e4));
      return {c() {
        e3 = main2.e("div"), n2 = main2.e("ul");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        main2.b(n2, "class", "svelte-8fvvzw"), main2.b(e3, "id", "extra"), main2.b(e3, "class", "svelte-8fvvzw");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), main2.d(e3, n2);
        for (let t5 = 0; t5 < o3.length; t5 += 1)
          o3[t5].m(n2, null);
      }, p(t4, e4) {
        if (4 & e4) {
          let i3;
          for (s3 = t4[2].extra, i3 = 0; i3 < s3.length; i3 += 1) {
            const l2 = z(t4, s3, i3);
            o3[i3] ? o3[i3].p(l2, e4) : (o3[i3] = D(l2), o3[i3].c(), o3[i3].m(n2, null));
          }
          for (; i3 < o3.length; i3 += 1)
            o3[i3].d(1);
          o3.length = s3.length;
        }
      }, d(t4) {
        t4 && main2.f(e3), main2.m(o3, t4);
      }};
    }
    function D(t3) {
      let e3, n2 = t3[10].name + "";
      return {c() {
        e3 = main2.e("li");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), e3.innerHTML = n2;
      }, p(t4, i3) {
        4 & i3 && n2 !== (n2 = t4[10].name + "") && (e3.innerHTML = n2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function q(t3) {
      let e3, n2 = t3[2] && H(t3);
      return {c() {
        n2 && n2.c(), e3 = main2.o();
      }, m(t4, i3) {
        n2 && n2.m(t4, i3), main2.c(t4, e3, i3);
      }, p(t4, [i3]) {
        t4[2] ? n2 ? n2.p(t4, i3) : (n2 = H(t4), n2.c(), n2.m(e3.parentNode, e3)) : n2 && (n2.d(1), n2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        n2 && n2.d(t4), t4 && main2.f(e3);
      }};
    }
    function I(t3, e3, n2) {
      let i3, s3, l2, c3, r3, o3, u2;
      return main2.g(t3, r, (t4) => n2(2, c3 = t4)), main2.g(t3, s, (t4) => n2(7, r3 = t4)), main2.g(t3, c, (t4) => n2(8, o3 = t4)), main2.g(t3, main2.p, (t4) => n2(5, u2 = t4)), t3.$$.update = () => {
        4 & t3.$$.dirty && n2(1, s3 = c3.price), 32 & t3.$$.dirty && u2.slug && async function(t4) {
          let e4 = await fetch(r3 + "?path=" + t4);
          r.set(await e4.json());
        }(u2.slug), 7 & t3.$$.dirty && c3 && i3 && (c3.amountDiscounts && (n2(1, s3 = c3.price), c3.amountDiscounts.forEach(function(t4) {
          t4.amount <= i3 && n2(1, s3 = t4.price);
        })), n2(3, l2 = s3 * i3));
      }, n2(0, i3 = 1), n2(3, l2 = 0), [i3, s3, c3, l2, function() {
        let t4 = {id: c3.id, title: c3.title, price: c3.price, price2: s3, amount: i3, total: l2, discounts: c3.amountDiscounts};
        main2.q(c, o3.price += s3, o3), main2.q(c, o3.total += l2, o3), main2.q(c, o3.amount += i3, o3), o3.products.push(t4);
      }, u2, function() {
        i3 = main2.k(this.value), n2(0, i3);
      }];
    }
    class slug_aa6a4f66_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, I, q, main2.s, {});
      }
    }
  });

  // dist/build/index-8c5a831a.js
  var require_index_8c5a831a = __commonJS((exports) => {
    __export(exports, {
      default: () => index_8c5a831a_default
    });
    const main2 = __toModule(require_main());
    function b(t3, e3, s3) {
      const l2 = t3.slice();
      return l2[4] = e3[s3], l2;
    }
    function x(t3, e3, s3) {
      const l2 = t3.slice();
      return l2[4] = e3[s3], l2;
    }
    function w(t3) {
      let e3, s3 = t3[0].items, n2 = [];
      for (let e4 = 0; e4 < s3.length; e4 += 1)
        n2[e4] = $(b(t3, s3, e4));
      return {c() {
        e3 = main2.e("div");
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].c();
        main2.b(e3, "id", "products"), main2.b(e3, "class", "tc grid up bold svelte-86wf7u");
      }, m(t4, s4) {
        main2.c(t4, e3, s4);
        for (let t5 = 0; t5 < n2.length; t5 += 1)
          n2[t5].m(e3, null);
      }, p(t4, l2) {
        if (1 & l2) {
          let c3;
          for (s3 = t4[0].items, c3 = 0; c3 < s3.length; c3 += 1) {
            const r3 = b(t4, s3, c3);
            n2[c3] ? n2[c3].p(r3, l2) : (n2[c3] = $(r3), n2[c3].c(), n2[c3].m(e3, null));
          }
          for (; c3 < n2.length; c3 += 1)
            n2[c3].d(1);
          n2.length = s3.length;
        }
      }, d(t4) {
        t4 && main2.f(e3), main2.m(n2, t4);
      }};
    }
    function j(t3) {
      let e3, s3 = t3[4].extra, n2 = [];
      for (let e4 = 0; e4 < s3.length; e4 += 1)
        n2[e4] = y(x(t3, s3, e4));
      return {c() {
        e3 = main2.e("div");
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].c();
        main2.b(e3, "class", "extra svelte-86wf7u");
      }, m(t4, s4) {
        main2.c(t4, e3, s4);
        for (let t5 = 0; t5 < n2.length; t5 += 1)
          n2[t5].m(e3, null);
      }, p(t4, l2) {
        if (1 & l2) {
          let c3;
          for (s3 = t4[4].extra, c3 = 0; c3 < s3.length; c3 += 1) {
            const r3 = x(t4, s3, c3);
            n2[c3] ? n2[c3].p(r3, l2) : (n2[c3] = y(r3), n2[c3].c(), n2[c3].m(e3, null));
          }
          for (; c3 < n2.length; c3 += 1)
            n2[c3].d(1);
          n2.length = s3.length;
        }
      }, d(t4) {
        t4 && main2.f(e3), main2.m(n2, t4);
      }};
    }
    function y(t3) {
      let e3, s3, f2, m2, d2 = t3[4].abbr + "";
      return {c() {
        e3 = main2.e("div"), s3 = main2.e("span"), f2 = main2.t(d2), m2 = main2.a(), main2.b(s3, "class", "grid cell svelte-86wf7u"), main2.b(e3, "class", "inl svelte-86wf7u");
      }, m(t4, l2) {
        main2.c(t4, e3, l2), main2.d(e3, s3), main2.d(s3, f2), main2.d(e3, m2);
      }, p(t4, e4) {
        1 & e4 && d2 !== (d2 = t4[4].abbr + "") && main2.j(f2, d2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function $(t3) {
      let e3, s3, f2, m2, d2, p2, g2, h, v, b2, x2, w2, y2, $2, k2, F2, N, S, q, z, A, B = t3[4].title + "", C = t3[4].price.toFixed(2) + "", D = t3[4].extra && j(t3);
      return {c() {
        e3 = main2.e("a"), s3 = main2.e("picture"), f2 = main2.e("source"), d2 = main2.a(), p2 = main2.e("source"), h = main2.a(), v = main2.e("img"), w2 = main2.a(), y2 = main2.e("div"), $2 = main2.t(B), k2 = main2.a(), F2 = main2.e("div"), N = main2.t(C), S = main2.t(" \u20AC"), q = main2.a(), D && D.c(), z = main2.a(), main2.b(f2, "srcset", m2 = t3[4].img[1]), main2.b(f2, "type", "image/webp"), main2.b(p2, "srcset", g2 = t3[4].img[0]), main2.b(p2, "type", "image/jpeg"), v.src !== (b2 = t3[4].img[0]) && main2.b(v, "src", b2), main2.b(v, "alt", x2 = t3[4].title), main2.b(s3, "class", "block"), main2.b(y2, "class", "title svelte-86wf7u"), main2.b(F2, "class", "price"), main2.b(e3, "class", "block"), main2.b(e3, "href", A = t3[4].path);
      }, m(t4, l2) {
        main2.c(t4, e3, l2), main2.d(e3, s3), main2.d(s3, f2), main2.d(s3, d2), main2.d(s3, p2), main2.d(s3, h), main2.d(s3, v), main2.d(e3, w2), main2.d(e3, y2), main2.d(y2, $2), main2.d(e3, k2), main2.d(e3, F2), main2.d(F2, N), main2.d(F2, S), main2.d(e3, q), D && D.m(e3, null), main2.d(e3, z);
      }, p(t4, s4) {
        1 & s4 && m2 !== (m2 = t4[4].img[1]) && main2.b(f2, "srcset", m2), 1 & s4 && g2 !== (g2 = t4[4].img[0]) && main2.b(p2, "srcset", g2), 1 & s4 && v.src !== (b2 = t4[4].img[0]) && main2.b(v, "src", b2), 1 & s4 && x2 !== (x2 = t4[4].title) && main2.b(v, "alt", x2), 1 & s4 && B !== (B = t4[4].title + "") && main2.j($2, B), 1 & s4 && C !== (C = t4[4].price.toFixed(2) + "") && main2.j(N, C), t4[4].extra ? D ? D.p(t4, s4) : (D = j(t4), D.c(), D.m(e3, z)) : D && (D.d(1), D = null), 1 & s4 && A !== (A = t4[4].path) && main2.b(e3, "href", A);
      }, d(t4) {
        t4 && main2.f(e3), D && D.d();
      }};
    }
    function k(t3) {
      let e3, s3 = t3[0].items && w(t3);
      return {c() {
        s3 && s3.c(), e3 = main2.o();
      }, m(t4, l2) {
        s3 && s3.m(t4, l2), main2.c(t4, e3, l2);
      }, p(t4, [l2]) {
        t4[0].items ? s3 ? s3.p(t4, l2) : (s3 = w(t4), s3.c(), s3.m(e3.parentNode, e3)) : s3 && (s3.d(1), s3 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        s3 && s3.d(t4), t4 && main2.f(e3);
      }};
    }
    function F(t3, e3, s3) {
      let l2, c3, r3;
      return main2.g(t3, s, (t4) => s3(2, l2 = t4)), main2.g(t3, main2.p, (t4) => s3(1, c3 = t4)), main2.g(t3, r, (t4) => s3(0, r3 = t4)), t3.$$.update = () => {
        2 & t3.$$.dirty && c3.cat && async function(t4) {
          let e4 = await fetch(l2 + "?path=" + t4);
          r.set(await e4.json());
        }(c3.cat);
      }, [r3, c3];
    }
    class index_8c5a831a_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, F, k, main2.s, {});
      }
    }
  });

  // dist/build/index-0854133f.js
  var require_index_0854133f = __commonJS((exports) => {
    __export(exports, {
      default: () => index_0854133f_default
    });
    const main2 = __toModule(require_main());
    function p(t3, s3, e3) {
      const l2 = t3.slice();
      return l2[1] = s3[e3], l2;
    }
    function d(t3) {
      let s3, e3, o3, g2, m2, u, f, p2, d2, h2, b2, k, j, v, x, y, H = t3[1].title + "";
      return {c() {
        s3 = main2.e("a"), e3 = main2.e("figure"), o3 = main2.e("picture"), g2 = main2.e("source"), u = main2.a(), f = main2.e("source"), d2 = main2.a(), h2 = main2.e("img"), j = main2.a(), v = main2.e("figcaption"), x = main2.a(), main2.b(g2, "srcset", m2 = t3[1].img[1]), main2.b(g2, "type", "image/webp"), main2.b(f, "srcset", p2 = t3[1].img[0]), main2.b(f, "type", "image/jpeg"), h2.src !== (b2 = t3[1].img[0]) && main2.b(h2, "src", b2), main2.b(h2, "alt", k = t3[1].title), main2.b(o3, "class", "block"), main2.b(v, "class", "block"), main2.b(e3, "class", "block"), main2.b(s3, "class", "block"), main2.b(s3, "href", y = t3[1].path);
      }, m(t4, l2) {
        main2.c(t4, s3, l2), main2.d(s3, e3), main2.d(e3, o3), main2.d(o3, g2), main2.d(o3, u), main2.d(o3, f), main2.d(o3, d2), main2.d(o3, h2), main2.d(e3, j), main2.d(e3, v), v.innerHTML = H, main2.d(s3, x);
      }, p(t4, e4) {
        1 & e4 && m2 !== (m2 = t4[1].img[1]) && main2.b(g2, "srcset", m2), 1 & e4 && p2 !== (p2 = t4[1].img[0]) && main2.b(f, "srcset", p2), 1 & e4 && h2.src !== (b2 = t4[1].img[0]) && main2.b(h2, "src", b2), 1 & e4 && k !== (k = t4[1].title) && main2.b(h2, "alt", k), 1 & e4 && H !== (H = t4[1].title + "") && (v.innerHTML = H), 1 & e4 && y !== (y = t4[1].path) && main2.b(s3, "href", y);
      }, d(t4) {
        t4 && main2.f(s3);
      }};
    }
    function h(t3) {
      let s3, e3 = t3[0].nav, i3 = [];
      for (let s4 = 0; s4 < e3.length; s4 += 1)
        i3[s4] = d(p(t3, e3, s4));
      return {c() {
        s3 = main2.e("div");
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].c();
        main2.b(s3, "id", "products"), main2.b(s3, "class", "tc grid up bold");
      }, m(t4, e4) {
        main2.c(t4, s3, e4);
        for (let t5 = 0; t5 < i3.length; t5 += 1)
          i3[t5].m(s3, null);
      }, p(t4, [l2]) {
        if (1 & l2) {
          let r3;
          for (e3 = t4[0].nav, r3 = 0; r3 < e3.length; r3 += 1) {
            const c3 = p(t4, e3, r3);
            i3[r3] ? i3[r3].p(c3, l2) : (i3[r3] = d(c3), i3[r3].c(), i3[r3].m(s3, null));
          }
          for (; r3 < i3.length; r3 += 1)
            i3[r3].d(1);
          i3.length = e3.length;
        }
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(s3), main2.m(i3, t4);
      }};
    }
    function b(t3, s3, e3) {
      let l2;
      return main2.g(t3, o, (t4) => e3(0, l2 = t4)), l2.site && r.set({title: l2.site.title, slogan: l2.site.slogan}), [l2];
    }
    class index_0854133f_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, b, h, main2.s, {});
      }
    }
  });

  // dist/build/kassa-534cd03a.js
  var require_kassa_534cd03a = __commonJS((exports) => {
    __export(exports, {
      default: () => kassa_534cd03a_default
    });
    const main2 = __toModule(require_main());
    class I extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, null, null, main2.s, {});
      }
    }
    function A(t3, e3, n2) {
      const l2 = t3.slice();
      return l2[6] = e3[n2], l2;
    }
    function B(t3, e3, n2) {
      const l2 = t3.slice();
      return l2[6] = e3[n2], l2;
    }
    function E(t3, e3, n2) {
      const l2 = t3.slice();
      return l2[6] = e3[n2], l2[19] = e3, l2[20] = n2, l2;
    }
    function D(t3) {
      let e3, n2, a3;
      function i2(t4, e4) {
        return typeof t4[3] != "number" ? P : O;
      }
      let o3 = i2(t3), r3 = o3(t3);
      return {c() {
        e3 = main2.e("h1"), e3.textContent = "Kiitos tilauksesta", n2 = main2.a(), r3.c(), a3 = main2.o();
      }, m(t4, l2) {
        main2.c(t4, e3, l2), main2.c(t4, n2, l2), r3.m(t4, l2), main2.c(t4, a3, l2);
      }, p(t4, e4) {
        o3 === (o3 = i2(t4)) && r3 ? r3.p(t4, e4) : (r3.d(1), r3 = o3(t4), r3 && (r3.c(), r3.m(a3.parentNode, a3)));
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e3), t4 && main2.f(n2), r3.d(t4), t4 && main2.f(a3);
      }};
    }
    function J(t3) {
      let e3, n2, i2, m2, p2, h2, v2, x2, y2, k2, C2, T2, H2, M2, S2, j2, z, K, N, I2, B2, D2, J2, O2, P2, Y2, G2, X2, U2, _2, tt2, et2, nt, lt, st, at, it, ct, ot, rt, dt, ut, mt, pt, ft, ht, vt, xt, yt, kt = t3[1].total.toFixed(2) + "", gt = t3[5].toFixed(2) + "", bt = t3[2].toFixed(2) + "", Ct = t3[4].body && V(t3), Ft = t3[1].products, $t = [];
      for (let e4 = 0; e4 < Ft.length; e4 += 1)
        $t[e4] = Q(E(t3, Ft, e4));
      let wt = t3[4].delivery && R(t3), Tt = t3[0].price > 0 && W(t3), Ht = t3[8], Mt = [];
      for (let e4 = 0; e4 < Ht.length; e4 += 1)
        Mt[e4] = Z(A(t3, Ht, e4));
      return {c() {
        Ct && Ct.c(), e3 = main2.a(), n2 = main2.e("div"), i2 = main2.e("div"), m2 = main2.e("h2"), m2.textContent = "Tuotteet", p2 = main2.a(), h2 = main2.e("table"), v2 = main2.e("thead"), v2.innerHTML = '<tr><th class="tl svelte-19e1tk1">Tuote</th> \n							<th class="tc svelte-19e1tk1">Hinta</th> \n							<th class="tc svelte-19e1tk1">M\xE4\xE4r\xE4</th> \n							<th class="tc svelte-19e1tk1">Yhteens\xE4</th> \n							<th class="svelte-19e1tk1"></th></tr>', x2 = main2.a(), y2 = main2.e("tbody");
        for (let t4 = 0; t4 < $t.length; t4 += 1)
          $t[t4].c();
        k2 = main2.a(), wt && wt.c(), C2 = main2.a(), T2 = main2.e("div"), H2 = main2.e("h2"), H2.textContent = "Maksutiedot", M2 = main2.a(), S2 = main2.e("table"), j2 = main2.e("tbody"), z = main2.e("tr"), K = main2.e("td"), K.textContent = "Tuotteet yhteens\xE4", N = main2.a(), I2 = main2.e("td"), B2 = main2.t(kt), D2 = main2.t(" \u20AC"), J2 = main2.a(), Tt && Tt.c(), O2 = main2.a(), P2 = main2.e("tr"), Y2 = main2.e("td"), Y2.textContent = "ALV 10%", G2 = main2.a(), X2 = main2.e("td"), U2 = main2.t(gt), _2 = main2.t(" \u20AC"), tt2 = main2.a(), et2 = main2.e("tr"), nt = main2.e("td"), nt.textContent = "Tilaus yhteens\xE4", lt = main2.a(), st = main2.e("td"), at = main2.t(bt), it = main2.t(" \u20AC"), ct = main2.a(), ot = main2.e("form"), rt = main2.e("div"), dt = main2.e("h2"), dt.textContent = "Asiakastiedot", ut = main2.a(), mt = main2.e("div");
        for (let t4 = 0; t4 < Mt.length; t4 += 1)
          Mt[t4].c();
        pt = main2.a(), ft = main2.e("div"), ht = main2.e("button"), ht.textContent = "Vahvista tilaus", main2.b(h2, "id", "productList"), main2.b(h2, "class", "w100"), main2.b(h2, "rules", "rows"), main2.b(i2, "class", "item"), main2.b(K, "class", "label tl svelte-19e1tk1"), main2.b(I2, "class", "value tr svelte-19e1tk1"), main2.b(Y2, "class", "label tl svelte-19e1tk1"), main2.b(X2, "class", "value tr svelte-19e1tk1"), main2.b(nt, "class", "label tl svelte-19e1tk1"), main2.b(st, "class", "value tr svelte-19e1tk1"), main2.b(S2, "class", "w100"), main2.b(T2, "id", "paymentInfo"), main2.b(T2, "class", "item"), main2.b(n2, "id", "tables"), main2.b(n2, "class", "grid svelte-19e1tk1"), main2.b(mt, "class", "grid svelte-19e1tk1"), main2.b(rt, "id", "client"), main2.b(rt, "class", "item svelte-19e1tk1"), main2.b(ht, "id", "ready"), main2.b(ht, "class", "end svelte-19e1tk1"), main2.b(ht, "name", "ready"), main2.b(ht, "type", "submit"), main2.b(ft, "id", "payment"), main2.b(ft, "class", "tc"), main2.b(ot, "class", "items");
      }, m(l2, s3) {
        Ct && Ct.m(l2, s3), main2.c(l2, e3, s3), main2.c(l2, n2, s3), main2.d(n2, i2), main2.d(i2, m2), main2.d(i2, p2), main2.d(i2, h2), main2.d(h2, v2), main2.d(h2, x2), main2.d(h2, y2);
        for (let t4 = 0; t4 < $t.length; t4 += 1)
          $t[t4].m(y2, null);
        main2.d(i2, k2), wt && wt.m(i2, null), main2.d(n2, C2), main2.d(n2, T2), main2.d(T2, H2), main2.d(T2, M2), main2.d(T2, S2), main2.d(S2, j2), main2.d(j2, z), main2.d(z, K), main2.d(z, N), main2.d(z, I2), main2.d(I2, B2), main2.d(I2, D2), main2.d(j2, J2), Tt && Tt.m(j2, null), main2.d(j2, O2), main2.d(j2, P2), main2.d(P2, Y2), main2.d(P2, G2), main2.d(P2, X2), main2.d(X2, U2), main2.d(X2, _2), main2.d(j2, tt2), main2.d(j2, et2), main2.d(et2, nt), main2.d(et2, lt), main2.d(et2, st), main2.d(st, at), main2.d(st, it), main2.c(l2, ct, s3), main2.c(l2, ot, s3), main2.d(ot, rt), main2.d(rt, dt), main2.d(rt, ut), main2.d(rt, mt);
        for (let t4 = 0; t4 < Mt.length; t4 += 1)
          Mt[t4].m(mt, null);
        main2.d(ot, pt), main2.d(ot, ft), main2.d(ft, ht), vt = true, xt || (yt = [main2.l(ht, "click", t3[13]), main2.l(ot, "submit", main2.I(t3[9]))], xt = true);
      }, p(t4, n3) {
        if (t4[4].body ? Ct ? Ct.p(t4, n3) : (Ct = V(t4), Ct.c(), Ct.m(e3.parentNode, e3)) : Ct && (Ct.d(1), Ct = null), 130 & n3) {
          let e4;
          for (Ft = t4[1].products, e4 = 0; e4 < Ft.length; e4 += 1) {
            const l2 = E(t4, Ft, e4);
            $t[e4] ? $t[e4].p(l2, n3) : ($t[e4] = Q(l2), $t[e4].c(), $t[e4].m(y2, null));
          }
          for (; e4 < $t.length; e4 += 1)
            $t[e4].d(1);
          $t.length = Ft.length;
        }
        if (t4[4].delivery ? wt ? (wt.p(t4, n3), 16 & n3 && main2.z(wt, 1)) : (wt = R(t4), wt.c(), main2.z(wt, 1), wt.m(i2, null)) : wt && (main2.B(), main2.x(wt, 1, 1, () => {
          wt = null;
        }), main2.y()), (!vt || 2 & n3) && kt !== (kt = t4[1].total.toFixed(2) + "") && main2.j(B2, kt), t4[0].price > 0 ? Tt ? Tt.p(t4, n3) : (Tt = W(t4), Tt.c(), Tt.m(j2, O2)) : Tt && (Tt.d(1), Tt = null), (!vt || 32 & n3) && gt !== (gt = t4[5].toFixed(2) + "") && main2.j(U2, gt), (!vt || 4 & n3) && bt !== (bt = t4[2].toFixed(2) + "") && main2.j(at, bt), 256 & n3) {
          let e4;
          for (Ht = t4[8], e4 = 0; e4 < Ht.length; e4 += 1) {
            const l2 = A(t4, Ht, e4);
            Mt[e4] ? Mt[e4].p(l2, n3) : (Mt[e4] = Z(l2), Mt[e4].c(), Mt[e4].m(mt, null));
          }
          for (; e4 < Mt.length; e4 += 1)
            Mt[e4].d(1);
          Mt.length = Ht.length;
        }
      }, i(t4) {
        vt || (main2.z(wt), vt = true);
      }, o(t4) {
        main2.x(wt), vt = false;
      }, d(t4) {
        Ct && Ct.d(t4), t4 && main2.f(e3), t4 && main2.f(n2), main2.m($t, t4), wt && wt.d(), Tt && Tt.d(), t4 && main2.f(ct), t4 && main2.f(ot), main2.m(Mt, t4), xt = false, main2.r(yt);
      }};
    }
    function O(t3) {
      let e3, n2, l2, a3;
      return {c() {
        e3 = main2.e("p"), n2 = main2.t("Tilaus on vahvistettu ja tilaustiedot on l\xE4hetetty s\xE4hk\xF6postiin.\n				Tilausnumerosi on "), l2 = main2.t(t3[3]), a3 = main2.t(".");
      }, m(t4, s3) {
        main2.c(t4, e3, s3), main2.d(e3, n2), main2.d(e3, l2), main2.d(e3, a3);
      }, p(t4, e4) {
        8 & e4 && main2.j(l2, t4[3]);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function P(t3) {
      let e3, n2;
      return {c() {
        e3 = main2.e("p"), n2 = main2.t(t3[3]);
      }, m(t4, l2) {
        main2.c(t4, e3, l2), main2.d(e3, n2);
      }, p(t4, e4) {
        8 & e4 && main2.j(n2, t4[3]);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function V(t3) {
      let e3, n2 = t3[4].body + "";
      return {c() {
        e3 = main2.e("div"), main2.b(e3, "class", "body");
      }, m(t4, l2) {
        main2.c(t4, e3, l2), e3.innerHTML = n2;
      }, p(t4, l2) {
        16 & l2 && n2 !== (n2 = t4[4].body + "") && (e3.innerHTML = n2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function Y(t3) {
      let e3, n2, i2, o3, r3, d2, m2, p2, f2, h2, x2, y2, k2, T2, H2, M2, S2, j2, q2, L2, z, K, N, I2, A2, B2, E2, D2, J2, O2 = t3[6].title + "", P2 = t3[6].price2.toFixed(2) + "", V2 = t3[6].total.toFixed(2) + "", Y2 = t3[6].size && G(t3), Q2 = t3[6].id && X(t3);
      function R2() {
        t3[10].call(j2, t3[20]);
      }
      function U2() {
        return t3[11](t3[20]);
      }
      return {c() {
        e3 = main2.e("tr"), n2 = main2.e("td"), i2 = main2.e("strong"), o3 = main2.t(O2), r3 = main2.a(), Y2 && Y2.c(), d2 = main2.a(), m2 = main2.e("br"), p2 = main2.a(), Q2 && Q2.c(), f2 = main2.a(), h2 = main2.e("td"), x2 = main2.e("span"), x2.textContent = "Hinta:", y2 = main2.a(), k2 = main2.t(P2), T2 = main2.a(), H2 = main2.e("td"), M2 = main2.e("span"), M2.textContent = "M\xE4\xE4r\xE4:", S2 = main2.a(), j2 = main2.e("input"), q2 = main2.a(), L2 = main2.e("td"), z = main2.e("span"), z.textContent = "Yhteens\xE4:", K = main2.a(), N = main2.t(V2), I2 = main2.a(), A2 = main2.e("td"), B2 = main2.e("button"), B2.textContent = "X", E2 = main2.a(), main2.b(n2, "class", "product tl svelte-19e1tk1"), main2.b(x2, "class", "svelte-19e1tk1"), main2.b(h2, "class", "price tc pt svelte-19e1tk1"), main2.b(M2, "class", "svelte-19e1tk1"), main2.b(j2, "type", "number"), main2.b(j2, "name", "amount"), main2.b(j2, "class", "svelte-19e1tk1"), main2.b(H2, "class", "amount tc svelte-19e1tk1"), main2.b(z, "class", "svelte-19e1tk1"), main2.b(L2, "class", "total tc pt svelte-19e1tk1"), main2.b(B2, "class", "del noBor"), main2.b(A2, "class", "tr pt svelte-19e1tk1");
      }, m(l2, s3) {
        main2.c(l2, e3, s3), main2.d(e3, n2), main2.d(n2, i2), main2.d(i2, o3), main2.d(i2, r3), Y2 && Y2.m(i2, null), main2.d(n2, d2), main2.d(n2, m2), main2.d(n2, p2), Q2 && Q2.m(n2, null), main2.d(e3, f2), main2.d(e3, h2), main2.d(h2, x2), main2.d(h2, y2), main2.d(h2, k2), main2.d(e3, T2), main2.d(e3, H2), main2.d(H2, M2), main2.d(H2, S2), main2.d(H2, j2), main2.h(j2, t3[1].products[t3[20]].amount), main2.d(e3, q2), main2.d(e3, L2), main2.d(L2, z), main2.d(L2, K), main2.d(L2, N), main2.d(e3, I2), main2.d(e3, A2), main2.d(A2, B2), main2.d(e3, E2), D2 || (J2 = [main2.l(j2, "input", R2), main2.l(B2, "click", U2)], D2 = true);
      }, p(e4, l2) {
        t3 = e4, 2 & l2 && O2 !== (O2 = t3[6].title + "") && main2.j(o3, O2), t3[6].size ? Y2 ? Y2.p(t3, l2) : (Y2 = G(t3), Y2.c(), Y2.m(i2, null)) : Y2 && (Y2.d(1), Y2 = null), t3[6].id ? Q2 ? Q2.p(t3, l2) : (Q2 = X(t3), Q2.c(), Q2.m(n2, null)) : Q2 && (Q2.d(1), Q2 = null), 2 & l2 && P2 !== (P2 = t3[6].price2.toFixed(2) + "") && main2.j(k2, P2), 2 & l2 && main2.k(j2.value) !== t3[1].products[t3[20]].amount && main2.h(j2, t3[1].products[t3[20]].amount), 2 & l2 && V2 !== (V2 = t3[6].total.toFixed(2) + "") && main2.j(N, V2);
      }, d(t4) {
        t4 && main2.f(e3), Y2 && Y2.d(), Q2 && Q2.d(), D2 = false, main2.r(J2);
      }};
    }
    function G(t3) {
      let e3, n2, l2 = t3[6].size + "";
      return {c() {
        e3 = main2.t("- "), n2 = main2.t(l2);
      }, m(t4, l3) {
        main2.c(t4, e3, l3), main2.c(t4, n2, l3);
      }, p(t4, e4) {
        2 & e4 && l2 !== (l2 = t4[6].size + "") && main2.j(n2, l2);
      }, d(t4) {
        t4 && main2.f(e3), t4 && main2.f(n2);
      }};
    }
    function X(t3) {
      let e3, n2, l2 = t3[6].id + "";
      return {c() {
        e3 = main2.e("small"), n2 = main2.t(l2);
      }, m(t4, l3) {
        main2.c(t4, e3, l3), main2.d(e3, n2);
      }, p(t4, e4) {
        2 & e4 && l2 !== (l2 = t4[6].id + "") && main2.j(n2, l2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function Q(t3) {
      let e3, n2 = t3[6] != null && Y(t3);
      return {c() {
        n2 && n2.c(), e3 = main2.o();
      }, m(t4, l2) {
        n2 && n2.m(t4, l2), main2.c(t4, e3, l2);
      }, p(t4, l2) {
        t4[6] != null ? n2 ? n2.p(t4, l2) : (n2 = Y(t4), n2.c(), n2.m(e3.parentNode, e3)) : n2 && (n2.d(1), n2 = null);
      }, d(t4) {
        n2 && n2.d(t4), t4 && main2.f(e3);
      }};
    }
    function R(t3) {
      let e3, n2, i2, m2, p2, h2, v2, x2, y2 = t3[4].delivery, k2 = [];
      for (let e4 = 0; e4 < y2.length; e4 += 1)
        k2[e4] = U(B(t3, y2, e4));
      const g2 = (t4) => main2.x(k2[t4], 1, 1, () => {
        k2[t4] = null;
      });
      return {c() {
        e3 = main2.e("div"), n2 = main2.e("label"), i2 = main2.e("span"), i2.innerHTML = "<h2>Toimitustapa</h2>", m2 = main2.a(), p2 = main2.e("select");
        for (let t4 = 0; t4 < k2.length; t4 += 1)
          k2[t4].c();
        main2.b(i2, "class", "block"), t3[6] === void 0 && main2.D(() => t3[12].call(p2)), main2.b(e3, "id", "shipping");
      }, m(l2, s3) {
        main2.c(l2, e3, s3), main2.d(e3, n2), main2.d(n2, i2), main2.d(n2, m2), main2.d(n2, p2);
        for (let t4 = 0; t4 < k2.length; t4 += 1)
          k2[t4].m(p2, null);
        main2.E(p2, t3[6]), h2 = true, v2 || (x2 = main2.l(p2, "change", t3[12]), v2 = true);
      }, p(t4, e4) {
        if (16 & e4) {
          let n3;
          for (y2 = t4[4].delivery, n3 = 0; n3 < y2.length; n3 += 1) {
            const l2 = B(t4, y2, n3);
            k2[n3] ? (k2[n3].p(l2, e4), main2.z(k2[n3], 1)) : (k2[n3] = U(l2), k2[n3].c(), main2.z(k2[n3], 1), k2[n3].m(p2, null));
          }
          for (main2.B(), n3 = y2.length; n3 < k2.length; n3 += 1)
            g2(n3);
          main2.y();
        }
        64 & e4 && main2.E(p2, t4[6]);
      }, i(t4) {
        if (!h2) {
          for (let t5 = 0; t5 < y2.length; t5 += 1)
            main2.z(k2[t5]);
          h2 = true;
        }
      }, o(t4) {
        k2 = k2.filter(Boolean);
        for (let t5 = 0; t5 < k2.length; t5 += 1)
          main2.x(k2[t5]);
        h2 = false;
      }, d(t4) {
        t4 && main2.f(e3), main2.m(k2, t4), v2 = false, x2();
      }};
    }
    function U(t3) {
      let e3, n2;
      return e3 = new I({props: {id: t3[6].id, name: t3[6].name, price: t3[6].price}}), {c() {
        main2.F(e3.$$.fragment);
      }, m(t4, l2) {
        main2.G(e3, t4, l2), n2 = true;
      }, p(t4, n3) {
        const l2 = {};
        16 & n3 && (l2.id = t4[6].id), 16 & n3 && (l2.name = t4[6].name), 16 & n3 && (l2.price = t4[6].price), e3.$set(l2);
      }, i(t4) {
        n2 || (main2.z(e3.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.x(e3.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.H(e3, t4);
      }};
    }
    function W(t3) {
      let e3, n2, i2, o3, r3, d2, m2 = t3[0].price.toFixed(2) + "";
      return {c() {
        e3 = main2.e("tr"), n2 = main2.e("td"), n2.textContent = "Kuljetus", i2 = main2.a(), o3 = main2.e("td"), r3 = main2.t(m2), d2 = main2.t(" \u20AC"), main2.b(n2, "class", "label tl svelte-19e1tk1"), main2.b(o3, "class", "value tr svelte-19e1tk1");
      }, m(t4, l2) {
        main2.c(t4, e3, l2), main2.d(e3, n2), main2.d(e3, i2), main2.d(e3, o3), main2.d(o3, r3), main2.d(o3, d2);
      }, p(t4, e4) {
        1 & e4 && m2 !== (m2 = t4[0].price.toFixed(2) + "") && main2.j(r3, m2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function Z(t3) {
      let e3, n2, i2, o3, r3, d2, m2, p2 = t3[6].title + "";
      return {c() {
        e3 = main2.e("div"), n2 = main2.e("label"), i2 = main2.e("span"), o3 = main2.t(p2), r3 = main2.a(), d2 = main2.e("input"), m2 = main2.a(), main2.b(i2, "class", "block"), main2.b(d2, "id", t3[6].name), main2.b(d2, "class", "w100 svelte-19e1tk1"), main2.b(d2, "type", t3[6].type), main2.b(d2, "name", t3[6].name), main2.b(d2, "minlength", t3[6].min), main2.b(d2, "maxlength", t3[6].max), d2.required = true, main2.b(e3, "class", "item");
      }, m(t4, l2) {
        main2.c(t4, e3, l2), main2.d(e3, n2), main2.d(n2, i2), main2.d(i2, o3), main2.d(n2, r3), main2.d(n2, d2), main2.d(e3, m2);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function _(t3) {
      let e3, n2, i2, m2, p2, h2;
      document.title = e3 = tt;
      const v2 = [J, D], x2 = [];
      function y2(t4, e4) {
        return t4[3] == 0 && t4[1].products[0] ? 0 : 1;
      }
      return m2 = y2(t3), p2 = x2[m2] = v2[m2](t3), {c() {
        n2 = main2.a(), i2 = main2.e("div"), p2.c(), main2.b(i2, "id", "checkout"), main2.b(i2, "class", "container rel");
      }, m(t4, e4) {
        main2.c(t4, n2, e4), main2.c(t4, i2, e4), x2[m2].m(i2, null), h2 = true;
      }, p(t4, [n3]) {
        (!h2 || 0 & n3) && e3 !== (e3 = tt) && (document.title = e3);
        let l2 = m2;
        m2 = y2(t4), m2 === l2 ? x2[m2].p(t4, n3) : (main2.B(), main2.x(x2[l2], 1, 1, () => {
          x2[l2] = null;
        }), main2.y(), p2 = x2[m2], p2 ? p2.p(t4, n3) : (p2 = x2[m2] = v2[m2](t4), p2.c()), main2.z(p2, 1), p2.m(i2, null));
      }, i(t4) {
        h2 || (main2.z(p2), h2 = true);
      }, o(t4) {
        main2.x(p2), h2 = false;
      }, d(t4) {
        t4 && main2.f(n2), t4 && main2.f(i2), x2[m2].d();
      }};
    }
    let tt = "Kassa";
    function et(t3, e3, n2) {
      let l2, s3, a3, c3, o3, r3;
      main2.g(t3, s, (t4) => n2(14, c3 = t4)), main2.g(t3, r, (t4) => n2(4, o3 = t4)), main2.g(t3, c, (t4) => n2(1, r3 = t4));
      let d2 = 0, u2 = {price: 0};
      function f2(t4) {
        main2.q(c, r3.products = r3.products.filter((e4, n3) => n3 !== parseInt(t4) && e4 != null).sort(), r3);
      }
      main2.A(async () => {
        const t4 = await fetch(c3 + "?type=kassa");
        r.set(await t4.json()), n2(0, u2 = o3.delivery.items[0]);
      });
      let y2 = [{title: "Etunimi", type: "text", name: "name1", min: 2, max: 30, req: 1}, {title: "Sukunimi", type: "text", name: "name2", min: 2, max: 30, req: 1}, {title: "Puhelin", type: "text", name: "phone", min: 5, max: 15, req: 1}, {title: "S\xE4hk\xF6posti", type: "email", name: "email", min: 6, max: 100, req: 1}, {title: "Katuosoite", type: "text", name: "street", min: 5, max: 50}, {title: "Postinumero", type: "text", name: "postal", min: 5, max: 5}, {title: "Kaupunki", type: "text", name: "area", min: 3, max: 50}];
      if (window.location.search) {
        let t4 = window.location.search.substr(1).split("=");
        t4[0] == "id" && (d2 = parseInt(t4[1]));
      }
      return t3.$$.update = () => {
        3 & t3.$$.dirty && n2(2, s3 = r3.total + u2.price), 4 & t3.$$.dirty && n2(5, a3 = 0.1 * s3);
      }, n2(6, l2 = ""), [u2, r3, s3, d2, o3, a3, l2, f2, y2, async function(t4) {
        typeof paymentSelected != "undefined" && (main2.q(c, r3.method = paymentSelected, r3), c.set(r3));
        const e4 = new FormData();
        y2.forEach(function(n3) {
          t4.target[n3.name] !== void 0 && e4.append(n3.name, t4.target[n3.name].value);
        }), e4.append("cart", JSON.stringify(r3.products)), e4.append("delivery", JSON.stringify(u2)), e4.append("price", s3), e4.append("vat", a3);
      }, function(t4) {
        r3.products[t4].amount = main2.k(this.value), c.set(r3);
      }, (t4) => f2(t4), function() {
        l2 = main2.C(this), n2(6, l2);
      }, () => i = 2];
    }
    class kassa_534cd03a_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, et, _, main2.s, {});
      }
    }
  });

  // dist/build/_layout-93bfe846.js
  var require_layout_93bfe846 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_93bfe846_default
    });
    const main2 = __toModule(require_main());
    function P(t3, e3, s3) {
      const a3 = t3.slice();
      return a3[6] = e3[s3], a3;
    }
    function Y(t3) {
      let e3, s3, a3, p2, g2, h2, f2, v2, w2, $2, y2, b2, k2, T2, x2, L2, M2, j2, H2, O2, B2, N2;
      function S2(t4, e4) {
        return t4[3] ? q : C;
      }
      let A = S2(t3), E = A(t3), z = t3[0].nav, K = [];
      for (let e4 = 0; e4 < z.length; e4 += 1)
        K[e4] = D(P(t3, z, e4));
      return {c() {
        e3 = main2.e("header"), s3 = main2.e("div"), a3 = main2.e("a"), p2 = main2.e("picture"), g2 = main2.e("source"), f2 = main2.a(), v2 = main2.e("source"), $2 = main2.a(), y2 = main2.e("img"), T2 = main2.a(), x2 = main2.e("button"), E.c(), L2 = main2.a(), M2 = main2.e("nav"), j2 = main2.e("ul"), H2 = main2.e("li"), H2.innerHTML = '<a class="nav-link block" href="/" rel="home">Etusivu</a>', O2 = main2.a();
        for (let t4 = 0; t4 < K.length; t4 += 1)
          K[t4].c();
        main2.b(g2, "srcset", h2 = t3[0].site.logo[1]), main2.b(g2, "type", "image/webp"), main2.b(v2, "srcset", w2 = t3[0].site.logo[0]), main2.b(v2, "type", "image/jpeg"), y2.src !== (b2 = t3[0].site.logo[0]) && main2.b(y2, "src", b2), main2.b(y2, "alt", k2 = t3[0].site.title), main2.b(p2, "class", "block"), main2.b(a3, "id", "logo"), main2.b(a3, "class", "block bgw"), main2.b(a3, "href", "/"), main2.b(a3, "rel", "home"), main2.b(x2, "id", "menuToggle"), main2.b(x2, "class", "noBor"), main2.b(x2, "title", "Open/close main navigation"), main2.b(H2, "class", "nav-item"), main2.b(M2, "id", "menu"), main2.J(M2, "active", t3[3]), main2.b(s3, "class", "grid content mx"), main2.b(e3, "class", "block w100 bgw"), main2.J(e3, "small", t3[2]);
      }, m(n2, l2) {
        main2.c(n2, e3, l2), main2.d(e3, s3), main2.d(s3, a3), main2.d(a3, p2), main2.d(p2, g2), main2.d(p2, f2), main2.d(p2, v2), main2.d(p2, $2), main2.d(p2, y2), main2.d(s3, T2), main2.d(s3, x2), E.m(x2, null), main2.d(s3, L2), main2.d(s3, M2), main2.d(M2, j2), main2.d(j2, H2), main2.d(j2, O2);
        for (let t4 = 0; t4 < K.length; t4 += 1)
          K[t4].m(j2, null);
        B2 || (N2 = main2.l(x2, "click", t3[5]), B2 = true);
      }, p(t4, s4) {
        if (1 & s4 && h2 !== (h2 = t4[0].site.logo[1]) && main2.b(g2, "srcset", h2), 1 & s4 && w2 !== (w2 = t4[0].site.logo[0]) && main2.b(v2, "srcset", w2), 1 & s4 && y2.src !== (b2 = t4[0].site.logo[0]) && main2.b(y2, "src", b2), 1 & s4 && k2 !== (k2 = t4[0].site.title) && main2.b(y2, "alt", k2), A !== (A = S2(t4)) && (E.d(1), E = A(t4), E && (E.c(), E.m(x2, null))), 1 & s4) {
          let e4;
          for (z = t4[0].nav, e4 = 0; e4 < z.length; e4 += 1) {
            const a4 = P(t4, z, e4);
            K[e4] ? K[e4].p(a4, s4) : (K[e4] = D(a4), K[e4].c(), K[e4].m(j2, null));
          }
          for (; e4 < K.length; e4 += 1)
            K[e4].d(1);
          K.length = z.length;
        }
        8 & s4 && main2.J(M2, "active", t4[3]), 4 & s4 && main2.J(e3, "small", t4[2]);
      }, d(t4) {
        t4 && main2.f(e3), E.d(), main2.m(K, t4), B2 = false, N2();
      }};
    }
    function q(t3) {
      let e3, s3;
      return {c() {
        e3 = main2.K("svg"), s3 = main2.K("path"), main2.b(s3, "d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"), main2.b(e3, "xmlns", "http://www.w3.org/2000/svg"), main2.b(e3, "width", "24"), main2.b(e3, "height", "24"), main2.b(e3, "viewBox", "0 0 24 24");
      }, m(t4, a3) {
        main2.c(t4, e3, a3), main2.d(e3, s3);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function C(t3) {
      let e3, s3, a3, n2, l2, o3, u2, m2;
      return {c() {
        e3 = main2.K("svg"), s3 = main2.K("title"), a3 = main2.t("Open or close navigation"), n2 = main2.K("desc"), l2 = main2.t("Pressing the button in the mobile version opens the\n							main navigation menu. Pressing again closes the\n							menu.\n						"), o3 = main2.K("rect"), u2 = main2.K("rect"), m2 = main2.K("rect"), main2.b(o3, "width", "100"), main2.b(o3, "height", "20"), main2.b(u2, "y", "30"), main2.b(u2, "width", "100"), main2.b(u2, "height", "20"), main2.b(m2, "y", "60"), main2.b(m2, "width", "100"), main2.b(m2, "height", "20"), main2.b(e3, "viewBox", "0 0 100 80"), main2.b(e3, "width", "30"), main2.b(e3, "height", "30");
      }, m(t4, i3) {
        main2.c(t4, e3, i3), main2.d(e3, s3), main2.d(s3, a3), main2.d(e3, n2), main2.d(n2, l2), main2.d(e3, o3), main2.d(e3, u2), main2.d(e3, m2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function D(t3) {
      let e3, s3, a3, o3, u2 = t3[6].title + "";
      return {c() {
        e3 = main2.e("li"), s3 = main2.e("a"), o3 = main2.a(), main2.b(s3, "class", "nav-link block"), main2.b(s3, "href", a3 = t3[6].path), main2.b(e3, "class", "nav-item");
      }, m(t4, a4) {
        main2.c(t4, e3, a4), main2.d(e3, s3), s3.innerHTML = u2, main2.d(e3, o3);
      }, p(t4, e4) {
        1 & e4 && u2 !== (u2 = t4[6].title + "") && (s3.innerHTML = u2), 1 & e4 && a3 !== (a3 = t4[6].path) && main2.b(s3, "href", a3);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function F(t3) {
      let e3, s3, n2, l2, i3 = false, o3 = () => {
        i3 = false;
      };
      main2.D(t3[4]);
      let r3 = t3[0] && t3[0].nav && Y(t3);
      return {c() {
        r3 && r3.c(), s3 = main2.o();
      }, m(a3, d2) {
        r3 && r3.m(a3, d2), main2.c(a3, s3, d2), n2 || (l2 = main2.l(window, "scroll", () => {
          i3 = true, clearTimeout(e3), e3 = setTimeout(o3, 100), t3[4]();
        }), n2 = true);
      }, p(t4, [a3]) {
        2 & a3 && !i3 && (i3 = true, clearTimeout(e3), scrollTo(window.pageXOffset, t4[1]), e3 = setTimeout(o3, 100)), t4[0] && t4[0].nav ? r3 ? r3.p(t4, a3) : (r3 = Y(t4), r3.c(), r3.m(s3.parentNode, s3)) : r3 && (r3.d(1), r3 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        r3 && r3.d(t4), t4 && main2.f(s3), n2 = false, l2();
      }};
    }
    function G(t3, e3, s3) {
      let a3, n2, l2, {data: i3} = e3;
      return t3.$$set = (t4) => {
        "data" in t4 && s3(0, i3 = t4.data);
      }, t3.$$.update = () => {
        2 & t3.$$.dirty && s3(2, n2 = a3 > 100 || "");
      }, [i3, a3, n2, l2, function() {
        s3(1, a3 = window.pageYOffset);
      }, () => s3(3, l2 = !l2)];
    }
    class J extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, G, F, main2.s, {data: 0});
      }
    }
    function X(t3) {
      let e3, s3, a3, o3, u2, m2, g2, h2, f2, y2, x2;
      function L2(t4, e4) {
        return t4[0].cat ? Q : I;
      }
      e3 = new J({props: {data: t3[1]}});
      let M2 = L2(t3), H2 = M2(t3);
      const O2 = t3[6].default, B2 = main2.M(O2, t3, t3[5], null);
      let N2 = t3[3].amount > 0 && t3[4].path != "/kassa" && R(t3);
      return {c() {
        main2.F(e3.$$.fragment), s3 = main2.a(), a3 = main2.e("main"), o3 = main2.e("div"), H2.c(), u2 = main2.a(), m2 = main2.e("div"), g2 = main2.e("div"), B2 && B2.c(), f2 = main2.a(), N2 && N2.c(), y2 = main2.o(), main2.b(o3, "id", "hero"), main2.b(o3, "class", "grid tw up tc svelte-1443w6s"), main2.b(g2, "class", "container mx svelte-1443w6s"), main2.b(m2, "id", "content"), main2.b(m2, "class", "bgw py"), main2.b(a3, "class", "block svelte-1443w6s"), main2.b(a3, "style", h2 = "background-image:url(" + t3[1].site.hero[0] + ")");
      }, m(t4, n2) {
        main2.G(e3, t4, n2), main2.c(t4, s3, n2), main2.c(t4, a3, n2), main2.d(a3, o3), H2.m(o3, null), main2.d(a3, u2), main2.d(a3, m2), main2.d(m2, g2), B2 && B2.m(g2, null), main2.c(t4, f2, n2), N2 && N2.m(t4, n2), main2.c(t4, y2, n2), x2 = true;
      }, p(t4, s4) {
        const n2 = {};
        2 & s4 && (n2.data = t4[1]), e3.$set(n2), M2 === (M2 = L2(t4)) && H2 ? H2.p(t4, s4) : (H2.d(1), H2 = M2(t4), H2 && (H2.c(), H2.m(o3, null))), B2 && B2.p && 32 & s4 && main2.L(B2, O2, t4, t4[5], s4, null, null), (!x2 || 2 & s4 && h2 !== (h2 = "background-image:url(" + t4[1].site.hero[0] + ")")) && main2.b(a3, "style", h2), t4[3].amount > 0 && t4[4].path != "/kassa" ? N2 ? N2.p(t4, s4) : (N2 = R(t4), N2.c(), N2.m(y2.parentNode, y2)) : N2 && (N2.d(1), N2 = null);
      }, i(t4) {
        x2 || (main2.z(e3.$$.fragment, t4), main2.z(B2, t4), x2 = true);
      }, o(t4) {
        main2.x(e3.$$.fragment, t4), main2.x(B2, t4), x2 = false;
      }, d(t4) {
        main2.H(e3, t4), t4 && main2.f(s3), t4 && main2.f(a3), H2.d(), B2 && B2.d(t4), t4 && main2.f(f2), N2 && N2.d(t4), t4 && main2.f(y2);
      }};
    }
    function I(t3) {
      let e3, s3, a3, o3, u2, m2, p2 = t3[1].site.title + "", g2 = t3[1].site.slogan + "";
      return {c() {
        e3 = main2.e("div"), s3 = main2.e("h1"), a3 = main2.t(p2), o3 = main2.a(), u2 = main2.e("h3"), m2 = main2.t(g2), main2.b(s3, "class", "svelte-1443w6s"), main2.b(u2, "class", "svelte-1443w6s");
      }, m(t4, n2) {
        main2.c(t4, e3, n2), main2.d(e3, s3), main2.d(s3, a3), main2.d(e3, o3), main2.d(e3, u2), main2.d(u2, m2);
      }, p(t4, e4) {
        2 & e4 && p2 !== (p2 = t4[1].site.title + "") && main2.j(a3, p2), 2 & e4 && g2 !== (g2 = t4[1].site.slogan + "") && main2.j(m2, g2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function Q(t3) {
      let e3, s3 = t3[2].title + "";
      return {c() {
        e3 = main2.e("h1"), main2.b(e3, "class", "svelte-1443w6s");
      }, m(t4, a3) {
        main2.c(t4, e3, a3), e3.innerHTML = s3;
      }, p(t4, a3) {
        4 & a3 && s3 !== (s3 = t4[2].title + "") && (e3.innerHTML = s3);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function R(t3) {
      let e3, s3, a3, o3, u2, m2, p2, g2, h2, v2, w2, $2, b2, k2 = t3[3].amount + "", T2 = t3[3].total + "";
      return {c() {
        e3 = main2.e("div"), s3 = main2.e("div"), a3 = main2.e("div"), o3 = main2.t("Tuotteita: "), u2 = main2.t(k2), m2 = main2.t(" kpl"), p2 = main2.a(), g2 = main2.e("div"), h2 = main2.t("Yhteens\xE4: "), v2 = main2.t(T2), w2 = main2.t(" \u20AC"), $2 = main2.a(), b2 = main2.e("a"), b2.textContent = "Kassalle", main2.b(a3, "id", "cartAmount"), main2.b(g2, "id", "cartAmount"), main2.b(b2, "class", "grid svelte-1443w6s"), main2.b(b2, "href", "/kassa"), main2.b(b2, "rel", "nofollow"), main2.b(e3, "id", "cart"), main2.b(e3, "class", "grid svelte-1443w6s");
      }, m(t4, n2) {
        main2.c(t4, e3, n2), main2.d(e3, s3), main2.d(s3, a3), main2.d(a3, o3), main2.d(a3, u2), main2.d(a3, m2), main2.d(s3, p2), main2.d(s3, g2), main2.d(g2, h2), main2.d(g2, v2), main2.d(g2, w2), main2.d(e3, $2), main2.d(e3, b2);
      }, p(t4, e4) {
        8 & e4 && k2 !== (k2 = t4[3].amount + "") && main2.j(u2, k2), 8 & e4 && T2 !== (T2 = t4[3].total + "") && main2.j(v2, T2);
      }, d(t4) {
        t4 && main2.f(e3);
      }};
    }
    function U(t3) {
      let e3, s3, a3 = t3[1] && t3[1].site && X(t3);
      return {c() {
        a3 && a3.c(), e3 = main2.o();
      }, m(t4, n2) {
        a3 && a3.m(t4, n2), main2.c(t4, e3, n2), s3 = true;
      }, p(t4, [s4]) {
        t4[1] && t4[1].site ? a3 ? (a3.p(t4, s4), 2 & s4 && main2.z(a3, 1)) : (a3 = X(t4), a3.c(), main2.z(a3, 1), a3.m(e3.parentNode, e3)) : a3 && (main2.B(), main2.x(a3, 1, 1, () => {
          a3 = null;
        }), main2.y());
      }, i(t4) {
        s3 || (main2.z(a3), s3 = true);
      }, o(t4) {
        main2.x(a3), s3 = false;
      }, d(t4) {
        a3 && a3.d(t4), t4 && main2.f(e3);
      }};
    }
    function V(t3, e3, s3) {
      let a3, n2, l2, i3, o3, c3;
      main2.g(t3, s, (t4) => s3(8, a3 = t4)), main2.g(t3, main2.p, (t4) => s3(0, n2 = t4)), main2.g(t3, o, (t4) => s3(1, l2 = t4)), main2.g(t3, r, (t4) => s3(2, i3 = t4)), main2.g(t3, c, (t4) => s3(3, o3 = t4)), main2.g(t3, main2.N, (t4) => s3(4, c3 = t4));
      let {$$slots: r3 = {}, $$scope: u2} = e3;
      return window && (r.useLocalStorage(), o.useLocalStorage(), c.useLocalStorage()), main2.A(async () => {
        const t4 = await fetch(a3);
        o.set(await t4.json());
      }), t3.$$set = (t4) => {
        "$$scope" in t4 && s3(5, u2 = t4.$$scope);
      }, t3.$$.update = () => {
        if (7 & t3.$$.dirty && n2 && (l2.site || i3.title) && (main2.O.title = n2.cat ? i3.title + " | " + l2.site.title : l2.site.title + " | " + l2.site.slogan, (r.summary || l2.site.summary) && (main2.O.summary = i3.summary ? i3.summary : l2.site.summary)), 8 & t3.$$.dirty && o3.products) {
          let t4 = [0, 0];
          main2.q(c, o3.products = o3.products.filter((t5, e4) => t5.amount > 0 && t5 != null).sort(), o3), Object.values(o3.products).forEach((e4) => {
            e4.discounts && (e4.price2 = e4.price, e4.discounts.forEach(function(t5) {
              t5.amount <= e4.amount && (e4.price2 = t5.price);
            })), t4[0] += e4.total = e4.price2 * e4.amount, t4[1] += e4.amount;
          }), t4[1] == 0 || t4[1] == null ? main2.q(c, o3.products = [], o3) : (main2.q(c, o3.total = t4[0], o3), main2.q(c, o3.amount = t4[1], o3));
        }
      }, [n2, l2, i3, o3, c3, u2, r3];
    }
    class layout_93bfe846_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, V, U, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => T,
      B: () => Y,
      C: () => S,
      D: () => z,
      E: () => L,
      F: () => at,
      G: () => it,
      H: () => ct,
      I: () => P,
      J: () => I,
      K: () => b,
      L: () => f,
      M: () => u,
      N: () => Ht,
      O: () => Vt,
      S: () => ut,
      a: () => _,
      b: () => k,
      c: () => m,
      d: () => h,
      e: () => $,
      f: () => g,
      g: () => l,
      h: () => E,
      i: () => lt,
      j: () => O,
      k: () => j,
      l: () => v,
      m: () => y,
      n: () => t2,
      o: () => x,
      p: () => Wt,
      q: () => d,
      r: () => r2,
      s: () => a2,
      t: () => w,
      u: () => Gt,
      v: () => Pt,
      w: () => kt,
      x: () => nt,
      y: () => tt,
      z: () => et
    });
    function t2() {
    }
    function e2(t3, e3) {
      for (const n2 in e3)
        t3[n2] = e3[n2];
      return t3;
    }
    function n(t3) {
      return t3();
    }
    function o2() {
      return Object.create(null);
    }
    function r2(t3) {
      t3.forEach(n);
    }
    function s2(t3) {
      return typeof t3 == "function";
    }
    function a2(t3, e3) {
      return t3 != t3 ? e3 == e3 : t3 !== e3 || t3 && typeof t3 == "object" || typeof t3 == "function";
    }
    function i2(e3, ...n2) {
      if (e3 == null)
        return t2;
      const o3 = e3.subscribe(...n2);
      return o3.unsubscribe ? () => o3.unsubscribe() : o3;
    }
    function c2(t3) {
      let e3;
      return i2(t3, (t4) => e3 = t4)(), e3;
    }
    function l(t3, e3, n2) {
      t3.$$.on_destroy.push(i2(e3, n2));
    }
    function u(t3, e3, n2, o3) {
      if (t3) {
        const r3 = p(t3, e3, n2, o3);
        return t3[0](r3);
      }
    }
    function p(t3, n2, o3, r3) {
      return t3[1] && r3 ? e2(o3.ctx.slice(), t3[1](r3(n2))) : o3.ctx;
    }
    function f(t3, e3, n2, o3, r3, s3, a3) {
      const i3 = function(t4, e4, n3, o4) {
        if (t4[2] && o4) {
          const r4 = t4[2](o4(n3));
          if (e4.dirty === void 0)
            return r4;
          if (typeof r4 == "object") {
            const t5 = [], n4 = Math.max(e4.dirty.length, r4.length);
            for (let o5 = 0; o5 < n4; o5 += 1)
              t5[o5] = e4.dirty[o5] | r4[o5];
            return t5;
          }
          return e4.dirty | r4;
        }
        return e4.dirty;
      }(e3, o3, r3, s3);
      if (i3) {
        const r4 = p(e3, n2, o3, a3);
        t3.p(r4, i3);
      }
    }
    function d(t3, e3, n2 = e3) {
      return t3.set(n2), e3;
    }
    function h(t3, e3) {
      t3.appendChild(e3);
    }
    function m(t3, e3, n2) {
      t3.insertBefore(e3, n2 || null);
    }
    function g(t3) {
      t3.parentNode.removeChild(t3);
    }
    function y(t3, e3) {
      for (let n2 = 0; n2 < t3.length; n2 += 1)
        t3[n2] && t3[n2].d(e3);
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
    function v(t3, e3, n2, o3) {
      return t3.addEventListener(e3, n2, o3), () => t3.removeEventListener(e3, n2, o3);
    }
    function P(t3) {
      return function(e3) {
        return e3.preventDefault(), t3.call(this, e3);
      };
    }
    function k(t3, e3, n2) {
      n2 == null ? t3.removeAttribute(e3) : t3.getAttribute(e3) !== n2 && t3.setAttribute(e3, n2);
    }
    function j(t3) {
      return t3 === "" ? null : +t3;
    }
    function O(t3, e3) {
      e3 = "" + e3, t3.wholeText !== e3 && (t3.data = e3);
    }
    function E(t3, e3) {
      t3.value = e3 == null ? "" : e3;
    }
    function L(t3, e3) {
      for (let n2 = 0; n2 < t3.options.length; n2 += 1) {
        const o3 = t3.options[n2];
        if (o3.__value === e3)
          return void (o3.selected = true);
      }
    }
    function S(t3) {
      const e3 = t3.querySelector(":checked") || t3.options[0];
      return e3 && e3.__value;
    }
    function I(t3, e3, n2) {
      t3.classList[n2 ? "add" : "remove"](e3);
    }
    let R;
    function N(t3) {
      R = t3;
    }
    function F() {
      if (!R)
        throw new Error("Function called outside component initialization");
      return R;
    }
    function T(t3) {
      F().$$.on_mount.push(t3);
    }
    function A(t3, e3) {
      F().$$.context.set(t3, e3);
    }
    function M(t3) {
      return F().$$.context.get(t3);
    }
    const q = [];
    const C = [];
    const B = [];
    const U = [];
    const D = Promise.resolve();
    let H = false;
    function K() {
      H || (H = true, D.then(Q));
    }
    function J() {
      return K(), D;
    }
    function z(t3) {
      B.push(t3);
    }
    let W = false;
    const G = new Set();
    function Q() {
      if (!W) {
        W = true;
        do {
          for (let t3 = 0; t3 < q.length; t3 += 1) {
            const e3 = q[t3];
            N(e3), V(e3.$$);
          }
          for (N(null), q.length = 0; C.length; )
            C.pop()();
          for (let t3 = 0; t3 < B.length; t3 += 1) {
            const e3 = B[t3];
            G.has(e3) || (G.add(e3), e3());
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
        t3.update(), r2(t3.before_update);
        const e3 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e3), t3.after_update.forEach(z);
      }
    }
    const Z = new Set();
    let X;
    function Y() {
      X = {r: 0, c: [], p: X};
    }
    function tt() {
      X.r || r2(X.c), X = X.p;
    }
    function et(t3, e3) {
      t3 && t3.i && (Z.delete(t3), t3.i(e3));
    }
    function nt(t3, e3, n2, o3) {
      if (t3 && t3.o) {
        if (Z.has(t3))
          return;
        Z.add(t3), X.c.push(() => {
          Z.delete(t3), o3 && (n2 && t3.d(1), o3());
        }), t3.o(e3);
      }
    }
    function ot(t3, e3) {
      t3.d(1), e3.delete(t3.key);
    }
    function rt(t3, e3) {
      nt(t3, 1, 1, () => {
        e3.delete(t3.key);
      });
    }
    function st(t3, e3, n2, o3, r3, s3, a3, i3, c3, l2, u2, p2) {
      let f2 = t3.length, d2 = s3.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t4 = p2(r3, s3, h2), i4 = n2(t4);
        let c4 = a3.get(i4);
        c4 ? o3 && c4.p(t4, e3) : (c4 = l2(i4, t4), c4.c()), y2.set(i4, g2[h2] = c4), i4 in m2 && $2.set(i4, Math.abs(h2 - m2[i4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        et(t4, 1), t4.m(i3, u2), a3.set(t4.key, t4), u2 = t4.first, d2--;
      }
      for (; f2 && d2; ) {
        const e4 = g2[d2 - 1], n3 = t3[f2 - 1], o4 = e4.key, r4 = n3.key;
        e4 === n3 ? (u2 = e4.first, f2--, d2--) : y2.has(r4) ? !a3.has(o4) || b2.has(o4) ? _2(e4) : w2.has(r4) ? f2-- : $2.get(o4) > $2.get(r4) ? (w2.add(o4), _2(e4)) : (b2.add(r4), f2--) : (c3(n3, a3), f2--);
      }
      for (; f2--; ) {
        const e4 = t3[f2];
        y2.has(e4.key) || c3(e4, a3);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function at(t3) {
      t3 && t3.c();
    }
    function it(t3, e3, o3) {
      const {fragment: a3, on_mount: i3, on_destroy: c3, after_update: l2} = t3.$$;
      a3 && a3.m(e3, o3), z(() => {
        const e4 = i3.map(n).filter(s2);
        c3 ? c3.push(...e4) : r2(e4), t3.$$.on_mount = [];
      }), l2.forEach(z);
    }
    function ct(t3, e3) {
      const n2 = t3.$$;
      n2.fragment !== null && (r2(n2.on_destroy), n2.fragment && n2.fragment.d(e3), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function lt(e3, n2, s3, a3, i3, c3, l2 = [-1]) {
      const u2 = R;
      N(e3);
      const p2 = e3.$$ = {fragment: null, ctx: null, props: c3, update: t2, not_equal: i3, bound: o2(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o2(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (p2.ctx = s3 ? s3(e3, n2.props || {}, (t3, n3, ...o3) => {
        const r3 = o3.length ? o3[0] : n3;
        return p2.ctx && i3(p2.ctx[t3], p2.ctx[t3] = r3) && (!p2.skip_bound && p2.bound[t3] && p2.bound[t3](r3), f2 && function(t4, e4) {
          t4.$$.dirty[0] === -1 && (q.push(t4), K(), t4.$$.dirty.fill(0)), t4.$$.dirty[e4 / 31 | 0] |= 1 << e4 % 31;
        }(e3, t3)), n3;
      }) : [], p2.update(), f2 = true, r2(p2.before_update), p2.fragment = !!a3 && a3(p2.ctx), n2.target) {
        if (n2.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n2.target);
          p2.fragment && p2.fragment.l(t3), t3.forEach(g);
        } else
          p2.fragment && p2.fragment.c();
        n2.intro && et(e3.$$.fragment), it(e3, n2.target, n2.anchor), Q();
      }
      N(u2);
    }
    class ut {
      $destroy() {
        ct(this, 1), this.$destroy = t2;
      }
      $on(t3, e3) {
        const n2 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
        return n2.push(e3), () => {
          const t4 = n2.indexOf(e3);
          t4 !== -1 && n2.splice(t4, 1);
        };
      }
      $set(t3) {
        var e3;
        this.$$set && (e3 = t3, Object.keys(e3).length !== 0) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
      }
    }
    var pt = {queryHandler: {parse: (t3) => {
      return e3 = new URLSearchParams(t3), [...e3].reduce((t4, [e4, n2]) => (t4[e4] = n2, t4), {});
      var e3;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const ft = RegExp(/\:([^/()]+)/g);
    function dt(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      ht(t3), function() {
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
    const mt = (t3) => {
      const e3 = [];
      let n2;
      for (; n2 = ft.exec(t3); )
        e3.push(n2[1]);
      return e3;
    };
    function gt(t3, e3) {
      gt._console = gt._console || {log: console.log, warn: console.warn};
      const {_console: n2} = gt, o3 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r3 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e4) => {
          r3.includes(e4[0]) || n2[t4](...e4);
        }, e3().then(() => {
          console[t4] = n2[t4];
        });
    }
    function yt() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e3, options: n2} = function(t4) {
        const [e4, n3] = t4.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e4, options: o3};
      }(t3);
      return {...$t(e3), options: n2};
    }
    function $t(t3) {
      pt.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e3 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e3);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function bt(t3, e3, n2) {
      const o3 = pt.useHash ? "#" : "";
      let r3;
      return r3 = function(t4, e4, n3) {
        const o4 = Object.assign({}, n3, e4), r4 = function(t5, e5) {
          if (!pt.queryHandler)
            return "";
          const n4 = mt(t5), o5 = {};
          e5 && Object.entries(e5).forEach(([t6, e6]) => {
            n4.includes(t6) || (o5[t6] = e6);
          });
          return pt.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t4, e4);
        for (const [e5, n4] of Object.entries(o4))
          t4 = t4.replace(`:${e5}`, n4);
        return `${t4}${r4}`;
      }(t3, e3, n2), r3 = pt.urlTransform.apply(r3), r3 = o3 + r3, r3;
    }
    function wt(t3) {
      let e3;
      const n2 = t3[2].default, o3 = u(n2, t3, t3[1], null);
      return {c() {
        o3 && o3.c();
      }, m(t4, n3) {
        o3 && o3.m(t4, n3), e3 = true;
      }, p(t4, [e4]) {
        o3 && o3.p && 2 & e4 && f(o3, n2, t4, t4[1], e4, null, null);
      }, i(t4) {
        e3 || (et(o3, t4), e3 = true);
      }, o(t4) {
        nt(o3, t4), e3 = false;
      }, d(t4) {
        o3 && o3.d(t4);
      }};
    }
    function _t(t3, e3, n2) {
      let {$$slots: o3 = {}, $$scope: r3} = e3, {scoped: s3 = {}} = e3;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n2(0, s3 = t4.scoped), "$$scope" in t4 && n2(1, r3 = t4.$$scope);
      }, [s3, r3, o3];
    }
    class xt extends ut {
      constructor(t3) {
        super(), lt(this, t3, _t, wt, a2, {scoped: 0});
      }
    }
    const vt = [];
    function Pt(t3, e3) {
      return {subscribe: kt(t3, e3).subscribe};
    }
    function kt(e3, n2 = t2) {
      let o3;
      const r3 = [];
      function s3(t3) {
        if (a2(e3, t3) && (e3 = t3, o3)) {
          const t4 = !vt.length;
          for (let t5 = 0; t5 < r3.length; t5 += 1) {
            const n3 = r3[t5];
            n3[1](), vt.push(n3, e3);
          }
          if (t4) {
            for (let t5 = 0; t5 < vt.length; t5 += 2)
              vt[t5][0](vt[t5 + 1]);
            vt.length = 0;
          }
        }
      }
      return {set: s3, update: function(t3) {
        s3(t3(e3));
      }, subscribe: function(a3, i3 = t2) {
        const c3 = [a3, i3];
        return r3.push(c3), r3.length === 1 && (o3 = n2(s3) || t2), a3(e3), () => {
          const t3 = r3.indexOf(c3);
          t3 !== -1 && r3.splice(t3, 1), r3.length === 0 && (o3(), o3 = null);
        };
      }};
    }
    function jt(e3, n2, o3) {
      const a3 = !Array.isArray(e3), c3 = a3 ? [e3] : e3, l2 = n2.length < 2;
      return Pt(o3, (e4) => {
        let o4 = false;
        const u2 = [];
        let p2 = 0, f2 = t2;
        const d2 = () => {
          if (p2)
            return;
          f2();
          const o5 = n2(a3 ? u2[0] : u2, e4);
          l2 ? e4(o5) : f2 = s2(o5) ? o5 : t2;
        }, h2 = c3.map((t3, e5) => i2(t3, (t4) => {
          u2[e5] = t4, p2 &= ~(1 << e5), o4 && d2();
        }, () => {
          p2 |= 1 << e5;
        }));
        return o4 = true, d2(), function() {
          r2(h2), f2();
        };
      });
    }
    window.routify = window.routify || {};
    const Ot = kt(null);
    const Et = kt([]);
    Et.subscribe((t3) => window.routify.routes = t3);
    let Lt = kt({component: {params: {}}});
    const St = kt(null);
    const It = kt(true);
    function Rt(t3, e3 = false) {
      t3 = pt.urlTransform.remove(t3);
      let {pathname: n2, search: o3} = $t(t3).url;
      const r3 = c2(Et), s3 = r3.find((t4) => n2 === t4.meta.name) || r3.find((t4) => n2.match(t4.regex));
      if (!s3)
        throw new Error(`Route could not be found for "${n2}".`);
      const a3 = e3 ? Object.create(s3) : s3, {route: i3, redirectPath: l2, rewritePath: u2} = Nt(a3, r3);
      return u2 && ({pathname: n2, search: o3} = $t(bt(u2, i3.params)).url, l2 && (i3.redirectTo = bt(l2, i3.params || {}))), pt.queryHandler && (i3.params = Object.assign({}, i3.params, pt.queryHandler.parse(o3))), function(t4, e4) {
        if (t4.paramKeys) {
          const n3 = function(t5) {
            const e5 = [];
            return t5.forEach((t6) => {
              e5[t6.path.split("/").filter(Boolean).length - 1] = t6;
            }), e5;
          }(t4.layouts), o4 = e4.split("/").filter(Boolean);
          (function(t5) {
            return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
          })(t4.path).forEach((e5, r4) => {
            e5 && (t4.params[e5] = o4[r4], n3[r4] ? n3[r4].param = {[e5]: o4[r4]} : t4.param = {[e5]: o4[r4]});
          });
        }
      }(i3, n2), i3.leftover = t3.replace(new RegExp(i3.regex), ""), i3;
    }
    function Nt(t3, e3, n2, o3) {
      const {redirect: r3, rewrite: s3} = t3.meta;
      if (r3 || s3) {
        n2 = r3 ? r3.path || r3 : n2, o3 = s3 ? s3.path || s3 : n2;
        const a3 = r3 && r3.params, i3 = s3 && s3.params, c3 = e3.find((t4) => t4.path === o3);
        return c3 === t3 && console.error(`${o3} is redirecting to itself`), c3 || console.error(`${t3.path} is redirecting to non-existent path: ${o3}`), (a3 || i3) && (c3.params = Object.assign({}, c3.params, a3, i3)), Nt(c3, e3, n2, o3);
      }
      return {route: t3, redirectPath: n2, rewritePath: o3};
    }
    function Ft(t3, e3, n2) {
      const o3 = t3.slice();
      return o3[1] = e3[n2], o3;
    }
    function Tt(t3, e3) {
      let n2, o3;
      return {key: t3, first: null, c() {
        n2 = $("iframe"), n2.src !== (o3 = e3[1].url) && k(n2, "src", o3), k(n2, "frameborder", "0"), k(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t4, e4) {
        m(t4, n2, e4);
      }, p(t4, r3) {
        e3 = t4, 1 & r3 && n2.src !== (o3 = e3[1].url) && k(n2, "src", o3);
      }, d(t4) {
        t4 && g(n2);
      }};
    }
    function At(e3) {
      let n2, o3 = [], r3 = new Map(), s3 = e3[0];
      const a3 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < s3.length; t3 += 1) {
        let n3 = Ft(e3, s3, t3), i3 = a3(n3);
        r3.set(i3, o3[t3] = Tt(i3, n3));
      }
      return {c() {
        n2 = $("div");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        var t3, e4, r4;
        k(n2, "id", "__routify_iframes"), t3 = "display", e4 = "none", n2.style.setProperty(t3, e4, r4 ? "important" : "");
      }, m(t3, e4) {
        m(t3, n2, e4);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].m(n2, null);
      }, p(t3, [e4]) {
        1 & e4 && (s3 = t3[0], o3 = st(o3, e4, a3, 1, t3, s3, r3, n2, ot, Tt, null, Ft));
      }, i: t2, o: t2, d(t3) {
        t3 && g(n2);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].d();
      }};
    }
    const Mt = kt([]);
    const qt = jt(Mt, (t3) => t3.slice(0, 2));
    function Ct(t3) {
      const e3 = t3.data ? t3.data.prefetchId : t3;
      if (!e3)
        return null;
      const n2 = c2(Mt).find((t4) => t4 && t4.options.prefetch == e3);
      if (n2) {
        const {gracePeriod: t4} = n2.options, o3 = new Promise((e4) => setTimeout(e4, t4)), r3 = new Promise((e4) => {
          window.requestIdleCallback ? window.requestIdleCallback(e4) : setTimeout(e4, t4 + 1e3);
        });
        Promise.all([o3, r3]).then(() => {
          Mt.update((t5) => t5.filter((t6) => t6.options.prefetch != e3));
        });
      }
    }
    function Bt(t3, e3, n2) {
      let o3;
      return l(t3, qt, (t4) => n2(0, o3 = t4)), [o3];
    }
    qt.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => Ct(t4.prefetch), t4.timeout);
    })), addEventListener("message", Ct, false);
    class Ut extends ut {
      constructor(t3) {
        super(), lt(this, t3, Bt, At, a2, {});
      }
    }
    function Dt() {
      return M("routify") || Lt;
    }
    const Ht = {subscribe: (t3) => jt(Ot, (t4) => t4.api).subscribe(t3)};
    const Kt = {_hooks: [(t3) => It.set(false)], subscribe: zt};
    const Jt = {_hooks: [], subscribe: zt};
    function zt(t3) {
      const e3 = this._hooks, n2 = e3.length;
      return t3((t4) => {
        e3[n2] = t4;
      }), () => delete e3[n2];
    }
    const Wt = {subscribe: (t3) => jt(Dt(), (t4) => t4.route.params).subscribe(t3)};
    const Gt = {subscribe: (t3) => jt([Dt(), Ot, Et], (t4) => function(t5, e3, n2) {
      return function(o3, r3 = {}, s3) {
        const {component: a3} = t5, i3 = Object.assign({}, e3.params, a3.params);
        let c3 = o3 && o3.nodeType && o3;
        c3 && (o3 = o3.getAttribute("href")), o3 = o3 ? p2(o3) : a3.shortPath;
        const l2 = n2.find((t6) => [t6.shortPath || "/", t6.path].includes(o3));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t6);
        }
        s3 && s3.strict !== false || (o3 = o3.replace(/index$/, ""));
        let u2 = bt(o3, r3, i3);
        return c3 ? (c3.href = u2, {update(t6) {
          c3.href = bt(o3, t6, i3);
        }}) : u2;
        function p2(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e4, n3] = t6.match(/^([\.\/]+)(.*)/), o4 = a3.path.replace(/\/$/, "");
            const r4 = e4.match(/\.\.\//g) || [];
            a3.isPage && r4.push(null), r4.forEach(() => o4 = o4.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o4}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t6.match(/^\//))
            ;
          else {
            const e4 = n2.find((e5) => e5.meta.name === t6);
            e4 && (t6 = e4.shortPath);
          }
          return t6;
        }
      };
    }(...t4)).subscribe(t3)};
    const Qt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e3) => [t3, (Qt.getLongest(Qt.templates, t3) || ((t4) => t4))(e3)]}, {name: "createMeta", condition: () => true, action(t3, e3) {
      Qt.writeMeta(t3, e3);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e3) {
      Qt.writeMeta(`og:${t3}`, e3);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e3) {
      document.title = e3;
    }}], getLongest(t3, e3) {
      const n2 = t3[e3];
      if (n2) {
        const o3 = c2(Ot).path;
        return n2[Object.keys(t3[e3]).filter((t4) => o3.includes(t4)).sort((t4, e4) => e4.length - t4.length)[0]];
      }
    }, writeMeta(t3, e3) {
      const n2 = document.getElementsByTagName("head")[0], o3 = t3.match(/(.+)\:/), r3 = o3 && o3[1] || "plain", {propField: s3, valueField: a3} = Vt.services[r3] || Vt.services.plain, i3 = document.querySelector(`meta[${s3}='${t3}']`);
      i3 && i3.remove();
      const c3 = document.createElement("meta");
      c3.setAttribute(s3, t3), c3.setAttribute(a3, e3), c3.setAttribute("data-origin", "routify"), n2.appendChild(c3);
    }, set(t3, e3) {
      Qt.plugins.forEach((n2) => {
        n2.condition(t3, e3) && ([t3, e3] = n2.action(t3, e3) || [t3, e3]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e3) {
      const n2 = Qt.getOrigin();
      Qt.templates[t3] = Qt.templates[t3] || {}, Qt.templates[t3][n2] = e3;
    }, update() {
      Object.keys(Qt.props).forEach((t3) => {
        let e3 = Qt.getLongest(Qt.props, t3);
        Qt.plugins.forEach((n2) => {
          n2.condition(t3, e3) && ([t3, e3] = n2.action(t3, e3) || [t3, e3]);
        });
      });
    }, batchedUpdate() {
      Qt._pendingUpdate || (Qt._pendingUpdate = true, setTimeout(() => {
        Qt._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = Dt();
      return t3 && c2(t3).path || "/";
    }, _pendingUpdate: false};
    const Vt = new Proxy(Qt, {set(t3, e3, n2, o3) {
      const {props: r3, getOrigin: s3} = t3;
      return Reflect.has(t3, e3) ? Reflect.set(t3, e3, n2, o3) : (r3[e3] = r3[e3] || {}, r3[e3][s3()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function Zt(t3, e3, n2) {
      const o3 = t3.slice();
      return o3[18] = e3[n2].component, o3[19] = e3[n2].componentFile, o3[2] = e3[n2].decorator, o3[1] = e3[n2].nodes, o3;
    }
    function Xt(t3) {
      let e3, n2, o3 = [], r3 = new Map(), s3 = [t3[4]];
      const a3 = (t4) => function({meta: t5, path: e4, param: n3, params: o4}) {
        return JSON.stringify({path: e4, param: (t5["param-is-page"] || t5["slug-is-page"]) && n3, queryParams: t5["query-params-is-page"] && o4});
      }(t4[18]);
      for (let e4 = 0; e4 < 1; e4 += 1) {
        let n3 = Zt(t3, s3, e4), i3 = a3(n3);
        r3.set(i3, o3[e4] = ne(i3, n3));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o3[t4].c();
        e3 = x();
      }, m(t4, r4) {
        for (let e4 = 0; e4 < 1; e4 += 1)
          o3[e4].m(t4, r4);
        m(t4, e3, r4), n2 = true;
      }, p(t4, n3) {
        4194365 & n3 && (s3 = [t4[4]], Y(), o3 = st(o3, n3, a3, 1, t4, s3, r3, e3.parentNode, rt, ne, e3, Zt), tt());
      }, i(t4) {
        if (!n2) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            et(o3[t5]);
          n2 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          nt(o3[t5]);
        n2 = false;
      }, d(t4) {
        for (let e4 = 0; e4 < 1; e4 += 1)
          o3[e4].d(t4);
        t4 && g(e3);
      }};
    }
    function Yt(t3) {
      let e3, n2;
      return e3 = new se({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        at(e3.$$.fragment);
      }, m(t4, o3) {
        it(e3, t4, o3), n2 = true;
      }, p(t4, n3) {
        const o3 = {};
        4 & n3 && (o3.decorator = t4[2]), 16 & n3 && (o3.nodes = [...t4[1]]), 4194305 & n3 && (o3.scoped = {...t4[0], ...t4[22]}), e3.$set(o3);
      }, i(t4) {
        n2 || (et(e3.$$.fragment, t4), n2 = true);
      }, o(t4) {
        nt(e3.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ct(e3, t4);
      }};
    }
    function te(t3) {
      let e3, n2, o3 = t3[18] && t3[1].length && Yt(t3);
      return {c() {
        o3 && o3.c(), e3 = x();
      }, m(t4, r3) {
        o3 && o3.m(t4, r3), m(t4, e3, r3), n2 = true;
      }, p(t4, n3) {
        t4[18] && t4[1].length ? o3 ? (o3.p(t4, n3), 16 & n3 && et(o3, 1)) : (o3 = Yt(t4), o3.c(), et(o3, 1), o3.m(e3.parentNode, e3)) : o3 && (Y(), nt(o3, 1, 1, () => {
          o3 = null;
        }), tt());
      }, i(t4) {
        n2 || (et(o3), n2 = true);
      }, o(t4) {
        nt(o3), n2 = false;
      }, d(t4) {
        o3 && o3.d(t4), t4 && g(e3);
      }};
    }
    function ee(t3) {
      let n2, o3, r3;
      const s3 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var a3 = t3[19];
      function i3(t4) {
        let n3 = {$$slots: {default: [te, ({scoped: t5, decorator: e3}) => ({22: t5, 2: e3}), ({scoped: t5, decorator: e3}) => (t5 ? 4194304 : 0) | (e3 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < s3.length; t5 += 1)
          n3 = e2(n3, s3[t5]);
        return {props: n3};
      }
      return a3 && (n2 = new a3(i3(t3))), {c() {
        n2 && at(n2.$$.fragment), o3 = _();
      }, m(t4, e3) {
        n2 && it(n2, t4, e3), m(t4, o3, e3), r3 = true;
      }, p(t4, e3) {
        const r4 = 41 & e3 ? function(t5, e4) {
          const n3 = {}, o4 = {}, r5 = {$$scope: 1};
          let s4 = t5.length;
          for (; s4--; ) {
            const a4 = t5[s4], i4 = e4[s4];
            if (i4) {
              for (const t6 in a4)
                t6 in i4 || (o4[t6] = 1);
              for (const t6 in i4)
                r5[t6] || (n3[t6] = i4[t6], r5[t6] = 1);
              t5[s4] = i4;
            } else
              for (const t6 in a4)
                r5[t6] = 1;
          }
          for (const t6 in o4)
            t6 in n3 || (n3[t6] = void 0);
          return n3;
        }(s3, [1 & e3 && {scoped: t4[0]}, 32 & e3 && {scopedSync: t4[5]}, 8 & e3 && (c3 = t4[3].param || {}, typeof c3 == "object" && c3 !== null ? c3 : {})]) : {};
        var c3;
        if (12582933 & e3 && (r4.$$scope = {dirty: e3, ctx: t4}), a3 !== (a3 = t4[19])) {
          if (n2) {
            Y();
            const t5 = n2;
            nt(t5.$$.fragment, 1, 0, () => {
              ct(t5, 1);
            }), tt();
          }
          a3 ? (n2 = new a3(i3(t4)), at(n2.$$.fragment), et(n2.$$.fragment, 1), it(n2, o3.parentNode, o3)) : n2 = null;
        } else
          a3 && n2.$set(r4);
      }, i(t4) {
        r3 || (n2 && et(n2.$$.fragment, t4), r3 = true);
      }, o(t4) {
        n2 && nt(n2.$$.fragment, t4), r3 = false;
      }, d(t4) {
        n2 && ct(n2, t4), t4 && g(o3);
      }};
    }
    function ne(t3, e3) {
      let n2, o3, r3, s3;
      var a3 = e3[2];
      function i3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [ee]}, $$scope: {ctx: t4}}};
      }
      return a3 && (o3 = new a3(i3(e3))), {key: t3, first: null, c() {
        n2 = x(), o3 && at(o3.$$.fragment), r3 = x(), this.first = n2;
      }, m(t4, e4) {
        m(t4, n2, e4), o3 && it(o3, t4, e4), m(t4, r3, e4), s3 = true;
      }, p(t4, n3) {
        e3 = t4;
        const s4 = {};
        if (1 & n3 && (s4.scoped = e3[0]), 8388669 & n3 && (s4.$$scope = {dirty: n3, ctx: e3}), a3 !== (a3 = e3[2])) {
          if (o3) {
            Y();
            const t5 = o3;
            nt(t5.$$.fragment, 1, 0, () => {
              ct(t5, 1);
            }), tt();
          }
          a3 ? (o3 = new a3(i3(e3)), at(o3.$$.fragment), et(o3.$$.fragment, 1), it(o3, r3.parentNode, r3)) : o3 = null;
        } else
          a3 && o3.$set(s4);
      }, i(t4) {
        s3 || (o3 && et(o3.$$.fragment, t4), s3 = true);
      }, o(t4) {
        o3 && nt(o3.$$.fragment, t4), s3 = false;
      }, d(t4) {
        t4 && g(n2), t4 && g(r3), o3 && ct(o3, t4);
      }};
    }
    function oe(e3) {
      let n2, o3, r3, a3, i3, c3 = e3[4] && Xt(e3);
      return {c() {
        c3 && c3.c(), n2 = _(), o3 = $("span");
      }, m(l2, u2) {
        var p2;
        c3 && c3.m(l2, u2), m(l2, n2, u2), m(l2, o3, u2), r3 = true, a3 || (p2 = e3[8].call(null, o3), i3 = p2 && s2(p2.destroy) ? p2.destroy : t2, a3 = true);
      }, p(t3, [e4]) {
        t3[4] ? c3 ? (c3.p(t3, e4), 16 & e4 && et(c3, 1)) : (c3 = Xt(t3), c3.c(), et(c3, 1), c3.m(n2.parentNode, n2)) : c3 && (Y(), nt(c3, 1, 1, () => {
          c3 = null;
        }), tt());
      }, i(t3) {
        r3 || (et(c3), r3 = true);
      }, o(t3) {
        nt(c3), r3 = false;
      }, d(t3) {
        c3 && c3.d(t3), t3 && g(n2), t3 && g(o3), a3 = false, i3();
      }};
    }
    function re(t3, e3, n2) {
      let o3, r3, s3, a3;
      l(t3, Ot, (t4) => n2(14, s3 = t4));
      let i3, {nodes: c3 = []} = e3, {scoped: u2 = {}} = e3, {isRoot: p2 = false} = e3, {decorator: f2} = e3, d2 = null, h2 = null, m2 = {};
      const g2 = kt(null);
      l(t3, g2, (t4) => n2(4, a3 = t4));
      const y2 = M("routify");
      l(t3, y2, (t4) => n2(10, r3 = t4));
      function $2(t4) {
        n2(5, m2 = {...u2}), h2.length === 0 && async function() {
          await J(), dt(i3);
          const t5 = a3.component.path === s3.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e5, afterPageLoad: n3}) {
            const {path: o4} = t6, {options: r4} = yt(), s4 = r4.prefetch;
            for (const e6 of n3._hooks)
              e6 && await e6(t6.api);
            e5.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o4, prefetchId: s4}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: a3.component, metatags: Vt, afterPageLoad: Kt});
        }();
        const e4 = {nodes: h2, decorator: f2 || xt, layout: d2.isLayout ? d2 : o3 && o3.layout, component: d2, route: s3, componentFile: t4, parentNode: i3 || o3 && o3.parentNode};
        g2.set(e4), p2 && Lt.set(e4);
      }
      return A("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n2(1, c3 = t4.nodes), "scoped" in t4 && n2(0, u2 = t4.scoped), "isRoot" in t4 && n2(9, p2 = t4.isRoot), "decorator" in t4 && n2(2, f2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o3 = r3), 2 & t3.$$.dirty && n2(3, [d2, ...h2] = c3, d2), 8 & t3.$$.dirty && function(t4) {
          let e4 = t4.component();
          e4 instanceof Promise ? e4.then($2) : $2(e4);
        }(d2), 16 & t3.$$.dirty && a3 && gt(a3, J);
      }, [u2, c3, f2, d2, a3, m2, g2, y2, (t4) => i3 = t4.parentNode, p2, r3];
    }
    class se extends ut {
      constructor(t3) {
        super(), lt(this, t3, re, oe, a2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function ae(t3, e3) {
      let n2 = false;
      function o3(o4, r4) {
        const s3 = Rt(o4 || yt().fullpath);
        s3.redirectTo && (history.replaceStateNative({}, null, s3.redirectTo), delete s3.redirectTo);
        const a3 = [...(r4 && Rt(yt().fullpath, t3) || s3).layouts, s3];
        n2 && delete n2.last, s3.last = n2, n2 = s3, o4 || St.set(s3), Ot.set(s3), s3.api.preload().then(() => {
          It.set(true), e3(a3);
        });
      }
      const r3 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e5 = {}, n4, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r4, path: s3, params: a3} = c2(Ot);
            e5 = {id: r4, path: s3, params: a3, ...e5};
            const i3 = new Event(t5.toLowerCase());
            Object.assign(i3, {state: e5, title: n4, url: o4});
            return await ce(i3, o4) ? (history[t5 + "Native"].apply(this, [e5, n4, o4]), dispatchEvent(i3)) : void 0;
          };
        });
        let e4 = false;
        const n3 = {click: ie, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
          e4 ? e4 = false : await ce(n4, yt().fullpath) ? t4() : (e4 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n3).forEach((t5) => removeEventListener(...t5));
        };
      }(o3);
      return {updatePage: o3, destroy: r3};
    }
    function ie(t3) {
      const e3 = t3.target.closest("a"), n2 = e3 && e3.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n2 || e3.target || e3.host !== location.host)
        return;
      const o3 = new URL(n2), r3 = o3.pathname + o3.search + o3.hash;
      t3.preventDefault(), history.pushState({}, "", r3);
    }
    async function ce(t3, e3) {
      const n2 = Rt(e3).api;
      for (const o3 of Jt._hooks.filter(Boolean)) {
        if (!await o3(t3, n2, {url: e3}))
          return false;
      }
      return true;
    }
    function le(t3) {
      let e3, n2;
      return e3 = new se({props: {nodes: t3[0], isRoot: true}}), {c() {
        at(e3.$$.fragment);
      }, m(t4, o3) {
        it(e3, t4, o3), n2 = true;
      }, p(t4, n3) {
        const o3 = {};
        1 & n3 && (o3.nodes = t4[0]), e3.$set(o3);
      }, i(t4) {
        n2 || (et(e3.$$.fragment, t4), n2 = true);
      }, o(t4) {
        nt(e3.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ct(e3, t4);
      }};
    }
    function ue(t3) {
      let e3, n2, o3, r3 = t3[0] && t3[1] !== null && le(t3);
      return n2 = new Ut({}), {c() {
        r3 && r3.c(), e3 = _(), at(n2.$$.fragment);
      }, m(t4, s3) {
        r3 && r3.m(t4, s3), m(t4, e3, s3), it(n2, t4, s3), o3 = true;
      }, p(t4, [n3]) {
        t4[0] && t4[1] !== null ? r3 ? (r3.p(t4, n3), 3 & n3 && et(r3, 1)) : (r3 = le(t4), r3.c(), et(r3, 1), r3.m(e3.parentNode, e3)) : r3 && (Y(), nt(r3, 1, 1, () => {
          r3 = null;
        }), tt());
      }, i(t4) {
        o3 || (et(r3), et(n2.$$.fragment, t4), o3 = true);
      }, o(t4) {
        nt(r3), nt(n2.$$.fragment, t4), o3 = false;
      }, d(t4) {
        r3 && r3.d(t4), t4 && g(e3), ct(n2, t4);
      }};
    }
    function pe(t3, e3, n2) {
      let o3;
      l(t3, Ot, (t4) => n2(1, o3 = t4));
      let r3, s3, {routes: a3} = e3, {config: i3 = {}} = e3;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(pt, i3);
      A("routifyupdatepage", (...t4) => s3 && s3.updatePage(...t4));
      const c3 = (t4) => n2(0, r3 = t4), u2 = () => {
        s3 && (s3.destroy(), s3 = null);
      };
      let p2 = null;
      var f2;
      return f2 = u2, F().$$.on_destroy.push(f2), t3.$$set = (t4) => {
        "routes" in t4 && n2(2, a3 = t4.routes), "config" in t4 && n2(3, i3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && a3 && (clearTimeout(p2), p2 = setTimeout(() => {
          u2(), s3 = ae(a3, c3), Et.set(a3), s3.updatePage();
        }));
      }, [r3, o3, a3, i3];
    }
    class fe extends ut {
      constructor(t3) {
        super(), lt(this, t3, pe, ue, a2, {routes: 2, config: 3});
      }
    }
    function de(t3) {
      const e3 = async function(e4) {
        return await he(t3, {file: e4.tree, state: {treePayload: e4}, scope: {}});
      };
      return e3.sync = function(e4) {
        return me(t3, {file: e4.tree, state: {treePayload: e4}, scope: {}});
      }, e3;
    }
    async function he(t3, e3) {
      const n2 = await t3(e3);
      if (n2 === false)
        return false;
      const o3 = n2 || e3.file;
      if (o3.children) {
        const n3 = await Promise.all(o3.children.map(async (n4) => he(t3, {state: e3.state, scope: ge(e3.scope || {}), parent: e3.file, file: await n4})));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function me(t3, e3) {
      const n2 = t3(e3);
      if (n2 === false)
        return false;
      const o3 = n2 || e3.file;
      if (o3.children) {
        const n3 = o3.children.map((n4) => me(t3, {state: e3.state, scope: ge(e3.scope || {}), parent: e3.file, file: n4}));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function ge(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const ye = de(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e3) => {
        const n2 = e3 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(ft, "([^/]+)") + n2}`;
      })(t3.path, t3.isFallback));
    });
    const $e = de(({file: t3}) => {
      t3.paramKeys = mt(t3.path);
    });
    const be = de(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const we = de(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const _e = de(({file: t3}) => {
      const e3 = t3, n2 = t3.meta && t3.meta.children || [];
      n2.length && (e3.children = e3.children || [], e3.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const xe = de((t3) => {
      const {file: e3} = t3, {isFallback: n2, meta: o3} = e3, r3 = e3.path.match("/:"), s3 = e3.path.endsWith("/index"), a3 = o3.index || o3.index === 0, i3 = o3.index === false;
      e3.isIndexable = a3 || !n2 && !r3 && !s3 && !i3, e3.isNonIndexable = !e3.isIndexable;
    });
    const ve = de(({file: t3, parent: e3}) => {
      Object.defineProperty(t3, "parent", {get: () => e3}), Object.defineProperty(t3, "nextSibling", {get: () => ke(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => ke(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => Pe(e3)});
    });
    function Pe(t3, e3 = []) {
      return t3 && (e3.unshift(t3), Pe(t3.parent, e3)), e3;
    }
    function ke(t3, e3) {
      if (!t3.root) {
        const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o3 = n2.indexOf(t3);
        return n2[o3 + e3];
      }
    }
    const je = de(({file: t3, parent: e3}) => {
      t3.isIndex && Object.defineProperty(e3, "index", {get: () => t3});
    });
    const Oe = de(({file: t3, scope: e3}) => {
      function n2(t4) {
        const {parent: e4} = t4, o3 = e4 && e4.component && e4, r3 = o3 && o3.isReset, s3 = e4 && !r3 && n2(e4) || [];
        return o3 && s3.push(o3), s3;
      }
      Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
    });
    const Ee = de(({file: t3}) => {
      const e3 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e3.prototype);
    });
    var Le = Object.freeze({__proto__: null, setRegex: ye, setParamKeys: $e, setShortPath: be, setRank: we, addMetaChildren: _e, setIsIndexable: xe, assignRelations: ve, assignIndex: je, assignLayout: Oe, createFlatList: (t3) => {
      de((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e3) => t4.ranking >= e3.ranking ? -1 : 1);
    }, setPrototype: Ee});
    const Se = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function Ie(t3) {
      return Object.entries(Se).forEach(([e3, n2]) => {
        t3[e3] === void 0 && (t3[e3] = n2);
      }), t3.children && (t3.children = t3.children.map(Ie)), t3;
    }
    const Re = de(({file: t3}) => {
      t3.api = new Ne(t3);
    });
    class Ne {
      constructor(t3) {
        this.__file = t3, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t3.isMeta, this.path = t3.path, this.title = function(t4) {
          return t4.meta.title !== void 0 ? t4.meta.title : (t4.shortPath || t4.path).split("/").pop().replace(/-/g, " ");
        }(t3), this.meta = t3.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t3) => !t3.isNonIndexable).sort((t3, e3) => t3.isMeta && e3.isMeta ? 0 : (t3 = (t3.meta.index || t3.meta.title || t3.path).toString(), e3 = (e3.meta.index || e3.meta.title || e3.path).toString(), t3.localeCompare(e3, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t3}) => t3);
      }
      get next() {
        return Fe(this, 1);
      }
      get prev() {
        return Fe(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Fe(t3, e3) {
      if (!t3.__file.root) {
        const n2 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n2 + e3];
      }
    }
    const Te = {...Le, restoreDefaults: ({tree: t3}) => Ie(t3), assignAPI: Re};
    const Ae = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_b144d832())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isPage: true, path: "/:cat/:slug", id: "__cat__slug", component: () => Promise.resolve().then(() => __toModule(require_slug_aa6a4f66())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => __toModule(require_index_8c5a831a())).then((t3) => t3.default)}], path: "/:cat"}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_0854133f())).then((t3) => t3.default)}, {isPage: true, path: "/kassa", id: "_kassa", component: () => Promise.resolve().then(() => __toModule(require_kassa_534cd03a())).then((t3) => t3.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_93bfe846())).then((t3) => t3.default)};
    const {tree: Me, routes: qe} = function(t3) {
      const e3 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
      for (let t4 of e3) {
        (Te[t4].sync || Te[t4])(n2);
      }
      return n2;
    }(Ae);
    function Ce(e3) {
      let n2, o3;
      return n2 = new fe({props: {routes: qe}}), {c() {
        at(n2.$$.fragment);
      }, m(t3, e4) {
        it(n2, t3, e4), o3 = true;
      }, p: t2, i(t3) {
        o3 || (et(n2.$$.fragment, t3), o3 = true);
      }, o(t3) {
        nt(n2.$$.fragment, t3), o3 = false;
      }, d(t3) {
        ct(n2, t3);
      }};
    }
    !function(t3, e3 = {target: document.body}, n2 = "hmr", o3 = "app-loaded") {
      const r3 = document.getElementById(n2), s3 = document.createElement("div");
      function a3() {
        r3 && r3.remove(), s3.style.visibility = null, s3.setAttribute("id", n2);
      }
      s3.style.visibility = "hidden", e3.target.appendChild(s3), r3 ? addEventListener(o3, a3) : a3(), new t3({...e3, target: s3});
    }(class extends ut {
      constructor(t3) {
        super(), lt(this, t3, null, Ce, a2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/store-4721e530.js
  const main = __toModule(require_main());
  const s = main.v("http://foodis.dataline.fi/pw/");
  const e = (t2, s2) => {
    const {subscribe: e2, set: o2, update: r2} = main.w(s2);
    return {subscribe: e2, set: o2, update: r2, useLocalStorage: () => {
      const a2 = localStorage.getItem(t2);
      a2 && o2(JSON.parse(a2)), e2((a3) => {
        localStorage.setItem(t2, JSON.stringify(a3));
      });
    }};
  };
  const o = e("info", {});
  const r = e("data", {});
  const c = e("cart", {total: 0, amount: 0, products: []});
  require_main();
})();
