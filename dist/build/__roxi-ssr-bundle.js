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

  // dist/build/_fallback-659c727e.js
  var require_fallback_659c727e = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_659c727e_default
    });
    const main2 = __toModule(require_main());
    function v(s3) {
      let a3, e2, d2, f2, v2, m2, p2, g;
      return {c() {
        a3 = main2.e("div"), e2 = main2.e("div"), e2.textContent = "404", d2 = main2.a(), f2 = main2.e("div"), v2 = main2.t("Page not found. \n  \n  "), m2 = main2.e("a"), p2 = main2.t("Go back"), main2.b(e2, "class", "huge svelte-viq1pm"), main2.b(m2, "href", g = s3[0]("../")), main2.b(f2, "class", "big"), main2.b(a3, "class", "e404 svelte-viq1pm");
      }, m(s4, t3) {
        main2.c(s4, a3, t3), main2.d(a3, e2), main2.d(a3, d2), main2.d(a3, f2), main2.d(f2, v2), main2.d(f2, m2), main2.d(m2, p2);
      }, p(s4, [a4]) {
        1 & a4 && g !== (g = s4[0]("../")) && main2.b(m2, "href", g);
      }, i: main2.n, o: main2.n, d(s4) {
        s4 && main2.f(a3);
      }};
    }
    function m(s3, a3, e2) {
      let t3;
      return main2.g(s3, main2.u, (s4) => e2(0, t3 = s4)), [t3];
    }
    class fallback_659c727e_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, m, v, main2.s, {});
      }
    }
  });

  // dist/build/[slug]-ee7bdcf0.js
  var require_slug_ee7bdcf0 = __commonJS((exports) => {
    __export(exports, {
      default: () => slug_ee7bdcf0_default
    });
    const main2 = __toModule(require_main());
    function L(t3, n2, e2) {
      const i3 = t3.slice();
      return i3[10] = n2[e2], i3;
    }
    function k(t3) {
      let n2, e2, d2, m2, f2, h2, b2, y2, x2, v2, $, j, H, L2, k2, M2 = t3[2].img && w(t3), q2 = t3[2].price && F(t3), I2 = t3[2].body && T(t3), C2 = t3[2].extra && D(t3);
      return {c() {
        n2 = main2.e("div"), e2 = main2.e("div"), M2 && M2.c(), d2 = main2.a(), m2 = main2.e("div"), q2 && q2.c(), f2 = main2.a(), h2 = main2.e("div"), b2 = main2.e("div"), y2 = main2.e("input"), x2 = main2.a(), v2 = main2.e("div"), $ = main2.e("button"), $.textContent = "Lis\xE4\xE4 ostoskoriin", j = main2.a(), I2 && I2.c(), H = main2.a(), C2 && C2.c(), main2.b(e2, "id", "img"), main2.b(y2, "name", "amount"), main2.b(y2, "type", "number"), main2.b(y2, "min", "1"), main2.b(y2, "step", "1"), y2.required = true, main2.b($, "class", "w100"), main2.b(h2, "id", "cartIt"), main2.b(h2, "class", "border grid"), main2.b(m2, "id", "productInfo"), main2.b(n2, "id", "product"), main2.b(n2, "class", "container double grid");
      }, m(i3, r2) {
        main2.c(i3, n2, r2), main2.d(n2, e2), M2 && M2.m(e2, null), main2.d(n2, d2), main2.d(n2, m2), q2 && q2.m(m2, null), main2.d(m2, f2), main2.d(m2, h2), main2.d(h2, b2), main2.d(b2, y2), main2.h(y2, t3[0]), main2.d(h2, x2), main2.d(h2, v2), main2.d(v2, $), main2.d(m2, j), I2 && I2.m(m2, null), main2.d(m2, H), C2 && C2.m(m2, null), L2 || (k2 = [main2.l(y2, "input", t3[6]), main2.l($, "click", t3[4])], L2 = true);
      }, p(t4, n3) {
        t4[2].img ? M2 ? M2.p(t4, n3) : (M2 = w(t4), M2.c(), M2.m(e2, null)) : M2 && (M2.d(1), M2 = null), t4[2].price ? q2 ? q2.p(t4, n3) : (q2 = F(t4), q2.c(), q2.m(m2, f2)) : q2 && (q2.d(1), q2 = null), 1 & n3 && main2.k(y2.value) !== t4[0] && main2.h(y2, t4[0]), t4[2].body ? I2 ? I2.p(t4, n3) : (I2 = T(t4), I2.c(), I2.m(m2, H)) : I2 && (I2.d(1), I2 = null), t4[2].extra ? C2 ? C2.p(t4, n3) : (C2 = D(t4), C2.c(), C2.m(m2, null)) : C2 && (C2.d(1), C2 = null);
      }, d(t4) {
        t4 && main2.f(n2), M2 && M2.d(), q2 && q2.d(), I2 && I2.d(), C2 && C2.d(), L2 = false, main2.r(k2);
      }};
    }
    function w(t3) {
      let n2, e2, o3, u2, d2, m2, p3, f2, g2, h2;
      return {c() {
        n2 = main2.e("picture"), e2 = main2.e("source"), u2 = main2.a(), d2 = main2.e("source"), p3 = main2.a(), f2 = main2.e("img"), main2.b(e2, "srcset", o3 = t3[2].img[1]), main2.b(e2, "type", "image/webp"), main2.b(d2, "srcset", m2 = t3[2].img[0]), main2.b(d2, "type", "image/jpeg"), f2.src !== (g2 = t3[2].img[0]) && main2.b(f2, "src", g2), main2.b(f2, "alt", h2 = t3[2].title), main2.b(n2, "class", "block");
      }, m(t4, i3) {
        main2.c(t4, n2, i3), main2.d(n2, e2), main2.d(n2, u2), main2.d(n2, d2), main2.d(n2, p3), main2.d(n2, f2);
      }, p(t4, n3) {
        4 & n3 && o3 !== (o3 = t4[2].img[1]) && main2.b(e2, "srcset", o3), 4 & n3 && m2 !== (m2 = t4[2].img[0]) && main2.b(d2, "srcset", m2), 4 & n3 && f2.src !== (g2 = t4[2].img[0]) && main2.b(f2, "src", g2), 4 & n3 && h2 !== (h2 = t4[2].title) && main2.b(f2, "alt", h2);
      }, d(t4) {
        t4 && main2.f(n2);
      }};
    }
    function F(t3) {
      let n2, e2, o3, u2, p3, f2, g2 = t3[1].toFixed(2) + "", h2 = t3[0] > 1 && M(t3);
      return {c() {
        n2 = main2.e("div"), e2 = main2.t("Hinta: "), o3 = main2.e("strong"), u2 = main2.t(g2), p3 = main2.t(" \u20AC"), f2 = main2.a(), h2 && h2.c(), main2.b(n2, "id", "price");
      }, m(t4, i3) {
        main2.c(t4, n2, i3), main2.d(n2, e2), main2.d(n2, o3), main2.d(o3, u2), main2.d(o3, p3), main2.d(n2, f2), h2 && h2.m(n2, null);
      }, p(t4, e3) {
        2 & e3 && g2 !== (g2 = t4[1].toFixed(2) + "") && main2.j(u2, g2), t4[0] > 1 ? h2 ? h2.p(t4, e3) : (h2 = M(t4), h2.c(), h2.m(n2, null)) : h2 && (h2.d(1), h2 = null);
      }, d(t4) {
        t4 && main2.f(n2), h2 && h2.d();
      }};
    }
    function M(t3) {
      let n2, e2, c2, o3, u2, p3, f2, g2 = t3[3].toFixed(2) + "";
      return {c() {
        n2 = main2.e("br"), e2 = main2.a(), c2 = main2.e("small"), o3 = main2.t("Yhteens\xE4: "), u2 = main2.e("strong"), p3 = main2.t(g2), f2 = main2.t(" \u20AC");
      }, m(t4, i3) {
        main2.c(t4, n2, i3), main2.c(t4, e2, i3), main2.c(t4, c2, i3), main2.d(c2, o3), main2.d(c2, u2), main2.d(u2, p3), main2.d(u2, f2);
      }, p(t4, n3) {
        8 & n3 && g2 !== (g2 = t4[3].toFixed(2) + "") && main2.j(p3, g2);
      }, d(t4) {
        t4 && main2.f(n2), t4 && main2.f(e2), t4 && main2.f(c2);
      }};
    }
    function T(t3) {
      let n2, e2 = t3[2].body + "";
      return {c() {
        n2 = main2.e("div"), main2.b(n2, "id", "body");
      }, m(t4, i3) {
        main2.c(t4, n2, i3), n2.innerHTML = e2;
      }, p(t4, i3) {
        4 & i3 && e2 !== (e2 = t4[2].body + "") && (n2.innerHTML = e2);
      }, d(t4) {
        t4 && main2.f(n2);
      }};
    }
    function D(t3) {
      let n2, e2, r2 = t3[2].extra, o3 = [];
      for (let n3 = 0; n3 < r2.length; n3 += 1)
        o3[n3] = q(L(t3, r2, n3));
      return {c() {
        n2 = main2.e("div"), e2 = main2.e("ul");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        main2.b(n2, "id", "extra");
      }, m(t4, i3) {
        main2.c(t4, n2, i3), main2.d(n2, e2);
        for (let t5 = 0; t5 < o3.length; t5 += 1)
          o3[t5].m(e2, null);
      }, p(t4, n3) {
        if (4 & n3) {
          let i3;
          for (r2 = t4[2].extra, i3 = 0; i3 < r2.length; i3 += 1) {
            const c2 = L(t4, r2, i3);
            o3[i3] ? o3[i3].p(c2, n3) : (o3[i3] = q(c2), o3[i3].c(), o3[i3].m(e2, null));
          }
          for (; i3 < o3.length; i3 += 1)
            o3[i3].d(1);
          o3.length = r2.length;
        }
      }, d(t4) {
        t4 && main2.f(n2), main2.m(o3, t4);
      }};
    }
    function q(t3) {
      let n2, e2 = t3[10].name + "";
      return {c() {
        n2 = main2.e("li");
      }, m(t4, i3) {
        main2.c(t4, n2, i3), n2.innerHTML = e2;
      }, p(t4, i3) {
        4 & i3 && e2 !== (e2 = t4[10].name + "") && (n2.innerHTML = e2);
      }, d(t4) {
        t4 && main2.f(n2);
      }};
    }
    function I(t3) {
      let n2, e2 = t3[2] && k(t3);
      return {c() {
        e2 && e2.c(), n2 = main2.o();
      }, m(t4, i3) {
        e2 && e2.m(t4, i3), main2.c(t4, n2, i3);
      }, p(t4, [i3]) {
        t4[2] ? e2 ? e2.p(t4, i3) : (e2 = k(t4), e2.c(), e2.m(n2.parentNode, n2)) : e2 && (e2.d(1), e2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        e2 && e2.d(t4), t4 && main2.f(n2);
      }};
    }
    function C(t3, n2, e2) {
      let i3, r2, c2, s3, l2, o3, u2;
      return main2.g(t3, i, (t4) => e2(2, s3 = t4)), main2.g(t3, t, (t4) => e2(7, l2 = t4)), main2.g(t3, p, (t4) => e2(8, o3 = t4)), main2.g(t3, main2.p, (t4) => e2(5, u2 = t4)), t3.$$.update = () => {
        4 & t3.$$.dirty && e2(1, r2 = s3.price), 32 & t3.$$.dirty && u2.slug && async function(t4) {
          try {
            let n3 = await fetch(l2 + "?path=" + t4);
            i.set(await n3.json());
          } catch (t5) {
            console.error(t5);
          }
        }(u2.slug), 7 & t3.$$.dirty && s3 && i3 && (s3.amountDiscounts && (e2(1, r2 = s3.price), s3.amountDiscounts.forEach(function(t4) {
          t4.amount <= i3 && e2(1, r2 = t4.price);
        })), e2(3, c2 = r2 * i3));
      }, e2(0, i3 = 1), e2(3, c2 = 0), [i3, r2, s3, c2, function() {
        let t4 = {id: s3.id, title: s3.title, price: s3.price, price2: r2, amount: i3, total: c2, discounts: s3.amountDiscounts};
        main2.q(p, o3.price += r2, o3), main2.q(p, o3.total += c2, o3), main2.q(p, o3.amount += i3, o3), o3.products.push(t4);
      }, u2, function() {
        i3 = main2.k(this.value), e2(0, i3);
      }];
    }
    class slug_ee7bdcf0_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, C, I, main2.s, {});
      }
    }
  });

  // dist/build/index-44b7a890.js
  var require_index_44b7a890 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_44b7a890_default
    });
    const main2 = __toModule(require_main());
    function v(t3, e2, s3) {
      const l2 = t3.slice();
      return l2[4] = e2[s3], l2;
    }
    function x(t3, e2, s3) {
      const l2 = t3.slice();
      return l2[4] = e2[s3], l2;
    }
    function j(t3) {
      let e2, s3 = t3[0].items, n2 = [];
      for (let e3 = 0; e3 < s3.length; e3 += 1)
        n2[e3] = w(v(t3, s3, e3));
      return {c() {
        e2 = main2.e("div");
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].c();
        main2.b(e2, "id", "products"), main2.b(e2, "class", "tc grid up bold svelte-dss212");
      }, m(t4, s4) {
        main2.c(t4, e2, s4);
        for (let t5 = 0; t5 < n2.length; t5 += 1)
          n2[t5].m(e2, null);
      }, p(t4, l2) {
        if (1 & l2) {
          let c2;
          for (s3 = t4[0].items, c2 = 0; c2 < s3.length; c2 += 1) {
            const r2 = v(t4, s3, c2);
            n2[c2] ? n2[c2].p(r2, l2) : (n2[c2] = w(r2), n2[c2].c(), n2[c2].m(e2, null));
          }
          for (; c2 < n2.length; c2 += 1)
            n2[c2].d(1);
          n2.length = s3.length;
        }
      }, d(t4) {
        t4 && main2.f(e2), main2.m(n2, t4);
      }};
    }
    function y(t3) {
      let e2, s3 = t3[4].extra, n2 = [];
      for (let e3 = 0; e3 < s3.length; e3 += 1)
        n2[e3] = $(x(t3, s3, e3));
      return {c() {
        e2 = main2.e("div");
        for (let t4 = 0; t4 < n2.length; t4 += 1)
          n2[t4].c();
        main2.b(e2, "class", "extra svelte-dss212");
      }, m(t4, s4) {
        main2.c(t4, e2, s4);
        for (let t5 = 0; t5 < n2.length; t5 += 1)
          n2[t5].m(e2, null);
      }, p(t4, l2) {
        if (1 & l2) {
          let c2;
          for (s3 = t4[4].extra, c2 = 0; c2 < s3.length; c2 += 1) {
            const r2 = x(t4, s3, c2);
            n2[c2] ? n2[c2].p(r2, l2) : (n2[c2] = $(r2), n2[c2].c(), n2[c2].m(e2, null));
          }
          for (; c2 < n2.length; c2 += 1)
            n2[c2].d(1);
          n2.length = s3.length;
        }
      }, d(t4) {
        t4 && main2.f(e2), main2.m(n2, t4);
      }};
    }
    function $(t3) {
      let e2, s3, u2, m2, p3 = t3[4].abbr + "";
      return {c() {
        e2 = main2.e("div"), s3 = main2.e("span"), u2 = main2.t(p3), m2 = main2.a(), main2.b(s3, "class", "grid cell svelte-dss212"), main2.b(e2, "class", "inl svelte-dss212");
      }, m(t4, l2) {
        main2.c(t4, e2, l2), main2.d(e2, s3), main2.d(s3, u2), main2.d(e2, m2);
      }, p(t4, e3) {
        1 & e3 && p3 !== (p3 = t4[4].abbr + "") && main2.j(u2, p3);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function w(t3) {
      let e2, s3, u2, m2, p3, f2, g2, h, b, v2, x2, j2, $2, w2, k2, F2, N, S, q, z, A, B = t3[4].title + "", C = t3[4].price.toFixed(2) + "", D = t3[4].extra && y(t3);
      return {c() {
        e2 = main2.e("a"), s3 = main2.e("picture"), u2 = main2.e("source"), p3 = main2.a(), f2 = main2.e("source"), h = main2.a(), b = main2.e("img"), j2 = main2.a(), $2 = main2.e("div"), w2 = main2.t(B), k2 = main2.a(), F2 = main2.e("div"), N = main2.t(C), S = main2.t(" \u20AC"), q = main2.a(), D && D.c(), z = main2.a(), main2.b(u2, "srcset", m2 = t3[4].img[1]), main2.b(u2, "type", "image/webp"), main2.b(f2, "srcset", g2 = t3[4].img[0]), main2.b(f2, "type", "image/jpeg"), b.src !== (v2 = t3[4].img[0]) && main2.b(b, "src", v2), main2.b(b, "alt", x2 = t3[4].title), main2.b(s3, "class", "block"), main2.b($2, "class", "title svelte-dss212"), main2.b(F2, "class", "price"), main2.b(e2, "class", "block"), main2.b(e2, "href", A = t3[4].path);
      }, m(t4, l2) {
        main2.c(t4, e2, l2), main2.d(e2, s3), main2.d(s3, u2), main2.d(s3, p3), main2.d(s3, f2), main2.d(s3, h), main2.d(s3, b), main2.d(e2, j2), main2.d(e2, $2), main2.d($2, w2), main2.d(e2, k2), main2.d(e2, F2), main2.d(F2, N), main2.d(F2, S), main2.d(e2, q), D && D.m(e2, null), main2.d(e2, z);
      }, p(t4, s4) {
        1 & s4 && m2 !== (m2 = t4[4].img[1]) && main2.b(u2, "srcset", m2), 1 & s4 && g2 !== (g2 = t4[4].img[0]) && main2.b(f2, "srcset", g2), 1 & s4 && b.src !== (v2 = t4[4].img[0]) && main2.b(b, "src", v2), 1 & s4 && x2 !== (x2 = t4[4].title) && main2.b(b, "alt", x2), 1 & s4 && B !== (B = t4[4].title + "") && main2.j(w2, B), 1 & s4 && C !== (C = t4[4].price.toFixed(2) + "") && main2.j(N, C), t4[4].extra ? D ? D.p(t4, s4) : (D = y(t4), D.c(), D.m(e2, z)) : D && (D.d(1), D = null), 1 & s4 && A !== (A = t4[4].path) && main2.b(e2, "href", A);
      }, d(t4) {
        t4 && main2.f(e2), D && D.d();
      }};
    }
    function k(t3) {
      let e2, s3 = t3[0].items && j(t3);
      return {c() {
        s3 && s3.c(), e2 = main2.o();
      }, m(t4, l2) {
        s3 && s3.m(t4, l2), main2.c(t4, e2, l2);
      }, p(t4, [l2]) {
        t4[0].items ? s3 ? s3.p(t4, l2) : (s3 = j(t4), s3.c(), s3.m(e2.parentNode, e2)) : s3 && (s3.d(1), s3 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        s3 && s3.d(t4), t4 && main2.f(e2);
      }};
    }
    function F(t3, e2, s3) {
      let l2, c2, r2;
      return main2.g(t3, t, (t4) => s3(2, l2 = t4)), main2.g(t3, main2.p, (t4) => s3(1, c2 = t4)), main2.g(t3, i, (t4) => s3(0, r2 = t4)), t3.$$.update = () => {
        2 & t3.$$.dirty && c2.cat && async function(t4) {
          try {
            let e3 = await fetch(l2 + "?path=" + t4);
            i.set(await e3.json());
          } catch (t5) {
            console.error(t5);
          }
        }(c2.cat);
      }, [r2, c2];
    }
    class index_44b7a890_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, F, k, main2.s, {});
      }
    }
  });

  // dist/build/_layout-a9fbdbca.js
  var require_layout_a9fbdbca = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_a9fbdbca_default
    });
    const main2 = __toModule(require_main());
    function c(s3) {
      let t3;
      const e2 = s3[1].default, c2 = main2.x(e2, s3, s3[0], null);
      return {c() {
        c2 && c2.c();
      }, m(s4, e3) {
        c2 && c2.m(s4, e3), t3 = true;
      }, p(s4, [t4]) {
        c2 && c2.p && 1 & t4 && main2.y(c2, e2, s4, s4[0], t4, null, null);
      }, i(s4) {
        t3 || (main2.z(c2, s4), t3 = true);
      }, o(s4) {
        main2.A(c2, s4), t3 = false;
      }, d(s4) {
        c2 && c2.d(s4);
      }};
    }
    function u(s3, t3, e2) {
      let {$$slots: n2 = {}, $$scope: o3} = t3;
      return s3.$$set = (s4) => {
        "$$scope" in s4 && e2(0, o3 = s4.$$scope);
      }, [o3, n2];
    }
    class layout_a9fbdbca_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, u, c, main2.s, {});
      }
    }
  });

  // dist/build/index-b760118a.js
  var require_index_b760118a = __commonJS((exports) => {
    __export(exports, {
      default: () => index_b760118a_default
    });
    const main2 = __toModule(require_main());
    function p2(t3, s3, e2) {
      const l2 = t3.slice();
      return l2[1] = s3[e2], l2;
    }
    function d(t3) {
      let s3, e2, o3, g2, m2, u, f, p3, d2, h2, b2, k, j, v, x, y, H = t3[1].title + "";
      return {c() {
        s3 = main2.e("a"), e2 = main2.e("figure"), o3 = main2.e("picture"), g2 = main2.e("source"), u = main2.a(), f = main2.e("source"), d2 = main2.a(), h2 = main2.e("img"), j = main2.a(), v = main2.e("figcaption"), x = main2.a(), main2.b(g2, "srcset", m2 = t3[1].img[1]), main2.b(g2, "type", "image/webp"), main2.b(f, "srcset", p3 = t3[1].img[0]), main2.b(f, "type", "image/jpeg"), h2.src !== (b2 = t3[1].img[0]) && main2.b(h2, "src", b2), main2.b(h2, "alt", k = t3[1].title), main2.b(o3, "class", "block"), main2.b(v, "class", "block"), main2.b(e2, "class", "block"), main2.b(s3, "class", "block"), main2.b(s3, "href", y = t3[1].path);
      }, m(t4, l2) {
        main2.c(t4, s3, l2), main2.d(s3, e2), main2.d(e2, o3), main2.d(o3, g2), main2.d(o3, u), main2.d(o3, f), main2.d(o3, d2), main2.d(o3, h2), main2.d(e2, j), main2.d(e2, v), v.innerHTML = H, main2.d(s3, x);
      }, p(t4, e3) {
        1 & e3 && m2 !== (m2 = t4[1].img[1]) && main2.b(g2, "srcset", m2), 1 & e3 && p3 !== (p3 = t4[1].img[0]) && main2.b(f, "srcset", p3), 1 & e3 && h2.src !== (b2 = t4[1].img[0]) && main2.b(h2, "src", b2), 1 & e3 && k !== (k = t4[1].title) && main2.b(h2, "alt", k), 1 & e3 && H !== (H = t4[1].title + "") && (v.innerHTML = H), 1 & e3 && y !== (y = t4[1].path) && main2.b(s3, "href", y);
      }, d(t4) {
        t4 && main2.f(s3);
      }};
    }
    function h(t3) {
      let s3, e2 = t3[0].nav, i3 = [];
      for (let s4 = 0; s4 < e2.length; s4 += 1)
        i3[s4] = d(p2(t3, e2, s4));
      return {c() {
        s3 = main2.e("div");
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].c();
        main2.b(s3, "id", "products"), main2.b(s3, "class", "tc grid up bold");
      }, m(t4, e3) {
        main2.c(t4, s3, e3);
        for (let t5 = 0; t5 < i3.length; t5 += 1)
          i3[t5].m(s3, null);
      }, p(t4, [l2]) {
        if (1 & l2) {
          let r2;
          for (e2 = t4[0].nav, r2 = 0; r2 < e2.length; r2 += 1) {
            const c2 = p2(t4, e2, r2);
            i3[r2] ? i3[r2].p(c2, l2) : (i3[r2] = d(c2), i3[r2].c(), i3[r2].m(s3, null));
          }
          for (; r2 < i3.length; r2 += 1)
            i3[r2].d(1);
          i3.length = e2.length;
        }
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(s3), main2.m(i3, t4);
      }};
    }
    function b(t3, s3, e2) {
      let l2;
      return main2.g(t3, o, (t4) => e2(0, l2 = t4)), l2.site && i.set({title: l2.site.title, slogan: l2.site.slogan}), [l2];
    }
    class index_b760118a_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, b, h, main2.s, {});
      }
    }
  });

  // dist/build/kassa-a42bfd0e.js
  var require_kassa_a42bfd0e = __commonJS((exports) => {
    __export(exports, {
      default: () => kassa_a42bfd0e_default
    });
    const main2 = __toModule(require_main());
    class N extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, null, null, main2.s, {});
      }
    }
    function I(t3, e2, n2) {
      const l2 = t3.slice();
      return l2[6] = e2[n2], l2;
    }
    function A(t3, e2, n2) {
      const l2 = t3.slice();
      return l2[6] = e2[n2], l2;
    }
    function B(t3, e2, n2) {
      const l2 = t3.slice();
      return l2[6] = e2[n2], l2[18] = e2, l2[19] = n2, l2;
    }
    function E(t3) {
      let e2, n2, a3;
      function r2(t4, e3) {
        return typeof t4[3] != "number" ? O : D;
      }
      let c2 = r2(t3), o3 = c2(t3);
      return {c() {
        e2 = main2.e("h1"), e2.textContent = "Kiitos tilauksesta", n2 = main2.a(), o3.c(), a3 = main2.o();
      }, m(t4, l2) {
        main2.c(t4, e2, l2), main2.c(t4, n2, l2), o3.m(t4, l2), main2.c(t4, a3, l2);
      }, p(t4, e3) {
        c2 === (c2 = r2(t4)) && o3 ? o3.p(t4, e3) : (o3.d(1), o3 = c2(t4), o3 && (o3.c(), o3.m(a3.parentNode, a3)));
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2), o3.d(t4), t4 && main2.f(a3);
      }};
    }
    function J(t3) {
      let e2, n2, u2, m2, v2, x2, f2, h2, g2, b2, C2, $2, w2, T2, H2, M2, q, K, z, N2, A2, E2, J2, D2, O2, V2, Y2, G2, R2, Z2, _2, tt2, et, nt, lt, st, at, it, rt, ct, ot, dt, ut, mt, pt, vt, xt, ft, ht = t3[1].total.toFixed(2) + "", gt = t3[5].toFixed(2) + "", yt = t3[2].toFixed(2) + "", jt = t3[4].body && P(t3), bt = t3[1].products, Ft = [];
      for (let e3 = 0; e3 < bt.length; e3 += 1)
        Ft[e3] = X(B(t3, bt, e3));
      let kt = t3[4].delivery && Q(t3), Ct = t3[0].price > 0 && U(t3), $t = t3[8], wt = [];
      for (let e3 = 0; e3 < $t.length; e3 += 1)
        wt[e3] = W(I(t3, $t, e3));
      return {c() {
        jt && jt.c(), e2 = main2.a(), n2 = main2.e("div"), u2 = main2.e("div"), m2 = main2.e("h2"), m2.textContent = "Tuotteet", v2 = main2.a(), x2 = main2.e("table"), f2 = main2.e("thead"), f2.innerHTML = '<tr><th class="tl svelte-1gmxvjr">Tuote</th> \n							<th class="tc svelte-1gmxvjr">Hinta</th> \n							<th class="tc svelte-1gmxvjr">M\xE4\xE4r\xE4</th> \n							<th class="tc svelte-1gmxvjr">Yhteens\xE4</th> \n							<th class="svelte-1gmxvjr"></th></tr>', h2 = main2.a(), g2 = main2.e("tbody");
        for (let t4 = 0; t4 < Ft.length; t4 += 1)
          Ft[t4].c();
        b2 = main2.a(), kt && kt.c(), C2 = main2.a(), $2 = main2.e("div"), w2 = main2.e("h2"), w2.textContent = "Maksutiedot", T2 = main2.a(), H2 = main2.e("table"), M2 = main2.e("tbody"), q = main2.e("tr"), K = main2.e("td"), K.textContent = "Tuotteet yhteens\xE4", z = main2.a(), N2 = main2.e("td"), A2 = main2.t(ht), E2 = main2.t(" \u20AC"), J2 = main2.a(), Ct && Ct.c(), D2 = main2.a(), O2 = main2.e("tr"), V2 = main2.e("td"), V2.textContent = "ALV 10%", Y2 = main2.a(), G2 = main2.e("td"), R2 = main2.t(gt), Z2 = main2.t(" \u20AC"), _2 = main2.a(), tt2 = main2.e("tr"), et = main2.e("td"), et.textContent = "Tilaus yhteens\xE4", nt = main2.a(), lt = main2.e("td"), st = main2.t(yt), at = main2.t(" \u20AC"), it = main2.a(), rt = main2.e("form"), ct = main2.e("div"), ot = main2.e("h2"), ot.textContent = "Asiakastiedot", dt = main2.a(), ut = main2.e("div");
        for (let t4 = 0; t4 < wt.length; t4 += 1)
          wt[t4].c();
        mt = main2.a(), pt = main2.e("div"), pt.innerHTML = '<button id="ready" class="end svelte-1gmxvjr" name="ready" type="submit">Vahvista tilaus</button>', main2.b(x2, "id", "productList"), main2.b(x2, "class", "w100"), main2.b(x2, "rules", "rows"), main2.b(u2, "class", "item"), main2.b(K, "class", "label tl svelte-1gmxvjr"), main2.b(N2, "class", "value tr svelte-1gmxvjr"), main2.b(V2, "class", "label tl svelte-1gmxvjr"), main2.b(G2, "class", "value tr svelte-1gmxvjr"), main2.b(et, "class", "label tl svelte-1gmxvjr"), main2.b(lt, "class", "value tr svelte-1gmxvjr"), main2.b(H2, "class", "w100"), main2.b($2, "id", "paymentInfo"), main2.b($2, "class", "item"), main2.b(n2, "id", "tables"), main2.b(n2, "class", "grid svelte-1gmxvjr"), main2.b(ut, "class", "grid svelte-1gmxvjr"), main2.b(ct, "id", "client"), main2.b(ct, "class", "item svelte-1gmxvjr"), main2.b(pt, "id", "payment"), main2.b(pt, "class", "tc"), main2.b(rt, "class", "items");
      }, m(l2, s3) {
        jt && jt.m(l2, s3), main2.c(l2, e2, s3), main2.c(l2, n2, s3), main2.d(n2, u2), main2.d(u2, m2), main2.d(u2, v2), main2.d(u2, x2), main2.d(x2, f2), main2.d(x2, h2), main2.d(x2, g2);
        for (let t4 = 0; t4 < Ft.length; t4 += 1)
          Ft[t4].m(g2, null);
        main2.d(u2, b2), kt && kt.m(u2, null), main2.d(n2, C2), main2.d(n2, $2), main2.d($2, w2), main2.d($2, T2), main2.d($2, H2), main2.d(H2, M2), main2.d(M2, q), main2.d(q, K), main2.d(q, z), main2.d(q, N2), main2.d(N2, A2), main2.d(N2, E2), main2.d(M2, J2), Ct && Ct.m(M2, null), main2.d(M2, D2), main2.d(M2, O2), main2.d(O2, V2), main2.d(O2, Y2), main2.d(O2, G2), main2.d(G2, R2), main2.d(G2, Z2), main2.d(M2, _2), main2.d(M2, tt2), main2.d(tt2, et), main2.d(tt2, nt), main2.d(tt2, lt), main2.d(lt, st), main2.d(lt, at), main2.c(l2, it, s3), main2.c(l2, rt, s3), main2.d(rt, ct), main2.d(ct, ot), main2.d(ct, dt), main2.d(ct, ut);
        for (let t4 = 0; t4 < wt.length; t4 += 1)
          wt[t4].m(ut, null);
        main2.d(rt, mt), main2.d(rt, pt), vt = true, xt || (ft = main2.l(rt, "submit", main2.K(t3[9])), xt = true);
      }, p(t4, n3) {
        if (t4[4].body ? jt ? jt.p(t4, n3) : (jt = P(t4), jt.c(), jt.m(e2.parentNode, e2)) : jt && (jt.d(1), jt = null), 130 & n3) {
          let e3;
          for (bt = t4[1].products, e3 = 0; e3 < bt.length; e3 += 1) {
            const l2 = B(t4, bt, e3);
            Ft[e3] ? Ft[e3].p(l2, n3) : (Ft[e3] = X(l2), Ft[e3].c(), Ft[e3].m(g2, null));
          }
          for (; e3 < Ft.length; e3 += 1)
            Ft[e3].d(1);
          Ft.length = bt.length;
        }
        if (t4[4].delivery ? kt ? (kt.p(t4, n3), 16 & n3 && main2.z(kt, 1)) : (kt = Q(t4), kt.c(), main2.z(kt, 1), kt.m(u2, null)) : kt && (main2.D(), main2.A(kt, 1, 1, () => {
          kt = null;
        }), main2.B()), (!vt || 2 & n3) && ht !== (ht = t4[1].total.toFixed(2) + "") && main2.j(A2, ht), t4[0].price > 0 ? Ct ? Ct.p(t4, n3) : (Ct = U(t4), Ct.c(), Ct.m(M2, D2)) : Ct && (Ct.d(1), Ct = null), (!vt || 32 & n3) && gt !== (gt = t4[5].toFixed(2) + "") && main2.j(R2, gt), (!vt || 4 & n3) && yt !== (yt = t4[2].toFixed(2) + "") && main2.j(st, yt), 256 & n3) {
          let e3;
          for ($t = t4[8], e3 = 0; e3 < $t.length; e3 += 1) {
            const l2 = I(t4, $t, e3);
            wt[e3] ? wt[e3].p(l2, n3) : (wt[e3] = W(l2), wt[e3].c(), wt[e3].m(ut, null));
          }
          for (; e3 < wt.length; e3 += 1)
            wt[e3].d(1);
          wt.length = $t.length;
        }
      }, i(t4) {
        vt || (main2.z(kt), vt = true);
      }, o(t4) {
        main2.A(kt), vt = false;
      }, d(t4) {
        jt && jt.d(t4), t4 && main2.f(e2), t4 && main2.f(n2), main2.m(Ft, t4), kt && kt.d(), Ct && Ct.d(), t4 && main2.f(it), t4 && main2.f(rt), main2.m(wt, t4), xt = false, ft();
      }};
    }
    function D(t3) {
      let e2, n2, l2, a3;
      return {c() {
        e2 = main2.e("p"), n2 = main2.t("Tilaus on vahvistettu ja tilaustiedot on l\xE4hetetty s\xE4hk\xF6postiin.\n				Tilausnumerosi on "), l2 = main2.t(t3[3]), a3 = main2.t(".");
      }, m(t4, s3) {
        main2.c(t4, e2, s3), main2.d(e2, n2), main2.d(e2, l2), main2.d(e2, a3);
      }, p(t4, e3) {
        8 & e3 && main2.j(l2, t4[3]);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function O(t3) {
      let e2, n2;
      return {c() {
        e2 = main2.e("p"), n2 = main2.t(t3[3]);
      }, m(t4, l2) {
        main2.c(t4, e2, l2), main2.d(e2, n2);
      }, p(t4, e3) {
        8 & e3 && main2.j(n2, t4[3]);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function P(t3) {
      let e2, n2 = t3[4].body + "";
      return {c() {
        e2 = main2.e("div"), main2.b(e2, "class", "body");
      }, m(t4, l2) {
        main2.c(t4, e2, l2), e2.innerHTML = n2;
      }, p(t4, l2) {
        16 & l2 && n2 !== (n2 = t4[4].body + "") && (e2.innerHTML = n2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function V(t3) {
      let e2, n2, r2, c2, o3, u2, m2, p3, v2, f2, h2, g2, $2, w2, T2, H2, M2, L2, S2, q, K, z, N2, I2, A2, B2, E2, J2, D2, O2 = t3[6].title + "", P2 = t3[6].price2.toFixed(2) + "", V2 = t3[6].total.toFixed(2) + "", X2 = t3[6].size && Y(t3), Q2 = t3[6].id && G(t3);
      function R2() {
        t3[10].call(L2, t3[19]);
      }
      function U2() {
        return t3[11](t3[19]);
      }
      return {c() {
        e2 = main2.e("tr"), n2 = main2.e("td"), r2 = main2.e("strong"), c2 = main2.t(O2), o3 = main2.a(), X2 && X2.c(), u2 = main2.a(), m2 = main2.e("br"), p3 = main2.a(), Q2 && Q2.c(), v2 = main2.a(), f2 = main2.e("td"), h2 = main2.e("span"), h2.textContent = "Hinta:", g2 = main2.a(), $2 = main2.t(P2), w2 = main2.a(), T2 = main2.e("td"), H2 = main2.e("span"), H2.textContent = "M\xE4\xE4r\xE4:", M2 = main2.a(), L2 = main2.e("input"), S2 = main2.a(), q = main2.e("td"), K = main2.e("span"), K.textContent = "Yhteens\xE4:", z = main2.a(), N2 = main2.t(V2), I2 = main2.a(), A2 = main2.e("td"), B2 = main2.e("button"), B2.textContent = "X", E2 = main2.a(), main2.b(n2, "class", "product tl svelte-1gmxvjr"), main2.b(h2, "class", "svelte-1gmxvjr"), main2.b(f2, "class", "price tc pt svelte-1gmxvjr"), main2.b(H2, "class", "svelte-1gmxvjr"), main2.b(L2, "type", "number"), main2.b(L2, "name", "amount"), main2.b(L2, "class", "svelte-1gmxvjr"), main2.b(T2, "class", "amount tc svelte-1gmxvjr"), main2.b(K, "class", "svelte-1gmxvjr"), main2.b(q, "class", "total tc pt svelte-1gmxvjr"), main2.b(B2, "class", "del noBor"), main2.b(A2, "class", "tr pt svelte-1gmxvjr");
      }, m(l2, s3) {
        main2.c(l2, e2, s3), main2.d(e2, n2), main2.d(n2, r2), main2.d(r2, c2), main2.d(r2, o3), X2 && X2.m(r2, null), main2.d(n2, u2), main2.d(n2, m2), main2.d(n2, p3), Q2 && Q2.m(n2, null), main2.d(e2, v2), main2.d(e2, f2), main2.d(f2, h2), main2.d(f2, g2), main2.d(f2, $2), main2.d(e2, w2), main2.d(e2, T2), main2.d(T2, H2), main2.d(T2, M2), main2.d(T2, L2), main2.h(L2, t3[1].products[t3[19]].amount), main2.d(e2, S2), main2.d(e2, q), main2.d(q, K), main2.d(q, z), main2.d(q, N2), main2.d(e2, I2), main2.d(e2, A2), main2.d(A2, B2), main2.d(e2, E2), J2 || (D2 = [main2.l(L2, "input", R2), main2.l(B2, "click", U2)], J2 = true);
      }, p(e3, l2) {
        t3 = e3, 2 & l2 && O2 !== (O2 = t3[6].title + "") && main2.j(c2, O2), t3[6].size ? X2 ? X2.p(t3, l2) : (X2 = Y(t3), X2.c(), X2.m(r2, null)) : X2 && (X2.d(1), X2 = null), t3[6].id ? Q2 ? Q2.p(t3, l2) : (Q2 = G(t3), Q2.c(), Q2.m(n2, null)) : Q2 && (Q2.d(1), Q2 = null), 2 & l2 && P2 !== (P2 = t3[6].price2.toFixed(2) + "") && main2.j($2, P2), 2 & l2 && main2.k(L2.value) !== t3[1].products[t3[19]].amount && main2.h(L2, t3[1].products[t3[19]].amount), 2 & l2 && V2 !== (V2 = t3[6].total.toFixed(2) + "") && main2.j(N2, V2);
      }, d(t4) {
        t4 && main2.f(e2), X2 && X2.d(), Q2 && Q2.d(), J2 = false, main2.r(D2);
      }};
    }
    function Y(t3) {
      let e2, n2, l2 = t3[6].size + "";
      return {c() {
        e2 = main2.t("- "), n2 = main2.t(l2);
      }, m(t4, l3) {
        main2.c(t4, e2, l3), main2.c(t4, n2, l3);
      }, p(t4, e3) {
        2 & e3 && l2 !== (l2 = t4[6].size + "") && main2.j(n2, l2);
      }, d(t4) {
        t4 && main2.f(e2), t4 && main2.f(n2);
      }};
    }
    function G(t3) {
      let e2, n2, l2 = t3[6].id + "";
      return {c() {
        e2 = main2.e("small"), n2 = main2.t(l2);
      }, m(t4, l3) {
        main2.c(t4, e2, l3), main2.d(e2, n2);
      }, p(t4, e3) {
        2 & e3 && l2 !== (l2 = t4[6].id + "") && main2.j(n2, l2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function X(t3) {
      let e2, n2 = t3[6] != null && V(t3);
      return {c() {
        n2 && n2.c(), e2 = main2.o();
      }, m(t4, l2) {
        n2 && n2.m(t4, l2), main2.c(t4, e2, l2);
      }, p(t4, l2) {
        t4[6] != null ? n2 ? n2.p(t4, l2) : (n2 = V(t4), n2.c(), n2.m(e2.parentNode, e2)) : n2 && (n2.d(1), n2 = null);
      }, d(t4) {
        n2 && n2.d(t4), t4 && main2.f(e2);
      }};
    }
    function Q(t3) {
      let e2, n2, u2, m2, v2, x2, f2, h2, g2 = t3[4].delivery, y2 = [];
      for (let e3 = 0; e3 < g2.length; e3 += 1)
        y2[e3] = R(A(t3, g2, e3));
      const b2 = (t4) => main2.A(y2[t4], 1, 1, () => {
        y2[t4] = null;
      });
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("label"), u2 = main2.e("span"), u2.innerHTML = "<h2>Toimitustapa</h2>", m2 = main2.a(), v2 = main2.e("select");
        for (let t4 = 0; t4 < y2.length; t4 += 1)
          y2[t4].c();
        main2.b(u2, "class", "block"), t3[6] === void 0 && main2.F(() => t3[12].call(v2)), main2.b(e2, "id", "shipping");
      }, m(l2, s3) {
        main2.c(l2, e2, s3), main2.d(e2, n2), main2.d(n2, u2), main2.d(n2, m2), main2.d(n2, v2);
        for (let t4 = 0; t4 < y2.length; t4 += 1)
          y2[t4].m(v2, null);
        main2.G(v2, t3[6]), x2 = true, f2 || (h2 = main2.l(v2, "change", t3[12]), f2 = true);
      }, p(t4, e3) {
        if (16 & e3) {
          let n3;
          for (g2 = t4[4].delivery, n3 = 0; n3 < g2.length; n3 += 1) {
            const l2 = A(t4, g2, n3);
            y2[n3] ? (y2[n3].p(l2, e3), main2.z(y2[n3], 1)) : (y2[n3] = R(l2), y2[n3].c(), main2.z(y2[n3], 1), y2[n3].m(v2, null));
          }
          for (main2.D(), n3 = g2.length; n3 < y2.length; n3 += 1)
            b2(n3);
          main2.B();
        }
        64 & e3 && main2.G(v2, t4[6]);
      }, i(t4) {
        if (!x2) {
          for (let t5 = 0; t5 < g2.length; t5 += 1)
            main2.z(y2[t5]);
          x2 = true;
        }
      }, o(t4) {
        y2 = y2.filter(Boolean);
        for (let t5 = 0; t5 < y2.length; t5 += 1)
          main2.A(y2[t5]);
        x2 = false;
      }, d(t4) {
        t4 && main2.f(e2), main2.m(y2, t4), f2 = false, h2();
      }};
    }
    function R(t3) {
      let e2, n2;
      return e2 = new N({props: {id: t3[6].id, name: t3[6].name, price: t3[6].price}}), {c() {
        main2.H(e2.$$.fragment);
      }, m(t4, l2) {
        main2.I(e2, t4, l2), n2 = true;
      }, p(t4, n3) {
        const l2 = {};
        16 & n3 && (l2.id = t4[6].id), 16 & n3 && (l2.name = t4[6].name), 16 & n3 && (l2.price = t4[6].price), e2.$set(l2);
      }, i(t4) {
        n2 || (main2.z(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        main2.A(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        main2.J(e2, t4);
      }};
    }
    function U(t3) {
      let e2, n2, r2, c2, o3, u2, m2 = t3[0].price.toFixed(2) + "";
      return {c() {
        e2 = main2.e("tr"), n2 = main2.e("td"), n2.textContent = "Kuljetus", r2 = main2.a(), c2 = main2.e("td"), o3 = main2.t(m2), u2 = main2.t(" \u20AC"), main2.b(n2, "class", "label tl svelte-1gmxvjr"), main2.b(c2, "class", "value tr svelte-1gmxvjr");
      }, m(t4, l2) {
        main2.c(t4, e2, l2), main2.d(e2, n2), main2.d(e2, r2), main2.d(e2, c2), main2.d(c2, o3), main2.d(c2, u2);
      }, p(t4, e3) {
        1 & e3 && m2 !== (m2 = t4[0].price.toFixed(2) + "") && main2.j(o3, m2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function W(t3) {
      let e2, n2, r2, c2, o3, u2, m2, p3 = t3[6].title + "";
      return {c() {
        e2 = main2.e("div"), n2 = main2.e("label"), r2 = main2.e("span"), c2 = main2.t(p3), o3 = main2.a(), u2 = main2.e("input"), m2 = main2.a(), main2.b(r2, "class", "block"), main2.b(u2, "id", t3[6].name), main2.b(u2, "class", "w100 svelte-1gmxvjr"), main2.b(u2, "type", t3[6].type), main2.b(u2, "name", t3[6].name), main2.b(u2, "minlength", t3[6].min), main2.b(u2, "maxlength", t3[6].max), u2.required = true, main2.b(e2, "class", "item");
      }, m(t4, l2) {
        main2.c(t4, e2, l2), main2.d(e2, n2), main2.d(n2, r2), main2.d(r2, c2), main2.d(n2, o3), main2.d(n2, u2), main2.d(e2, m2);
      }, p: main2.n, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Z(t3) {
      let e2, n2, u2, m2, v2, x2;
      document.title = e2 = _;
      const f2 = [J, E], h2 = [];
      function g2(t4, e3) {
        return t4[3] == 0 && t4[1].products[0] ? 0 : 1;
      }
      return m2 = g2(t3), v2 = h2[m2] = f2[m2](t3), {c() {
        n2 = main2.a(), u2 = main2.e("div"), v2.c(), main2.b(u2, "id", "checkout"), main2.b(u2, "class", "container rel");
      }, m(t4, e3) {
        main2.c(t4, n2, e3), main2.c(t4, u2, e3), h2[m2].m(u2, null), x2 = true;
      }, p(t4, [n3]) {
        (!x2 || 0 & n3) && e2 !== (e2 = _) && (document.title = e2);
        let l2 = m2;
        m2 = g2(t4), m2 === l2 ? h2[m2].p(t4, n3) : (main2.D(), main2.A(h2[l2], 1, 1, () => {
          h2[l2] = null;
        }), main2.B(), v2 = h2[m2], v2 ? v2.p(t4, n3) : (v2 = h2[m2] = f2[m2](t4), v2.c()), main2.z(v2, 1), v2.m(u2, null));
      }, i(t4) {
        x2 || (main2.z(v2), x2 = true);
      }, o(t4) {
        main2.A(v2), x2 = false;
      }, d(t4) {
        t4 && main2.f(n2), t4 && main2.f(u2), h2[m2].d();
      }};
    }
    let _ = "Kassa";
    function tt(t3, e2, n2) {
      let l2, s3, a3, i3, r2, c2;
      main2.g(t3, t, (t4) => n2(13, i3 = t4)), main2.g(t3, i, (t4) => n2(4, r2 = t4)), main2.g(t3, p, (t4) => n2(1, c2 = t4));
      let o3 = 0, d2 = {price: 0};
      function p3(t4) {
        main2.q(p, c2.products = c2.products.filter((e3, n3) => n3 !== parseInt(t4) && e3 != null).sort(), c2);
      }
      main2.C(async () => {
        try {
          const t4 = await fetch(i3 + "?type=kassa");
          i.set(await t4.json()), n2(0, d2 = r2.delivery.items[0]);
        } catch (t4) {
          console.error(t4);
        }
      });
      let h2 = [{title: "Etunimi", type: "text", name: "name1", min: 2, max: 30, req: 1}, {title: "Sukunimi", type: "text", name: "name2", min: 2, max: 30, req: 1}, {title: "Puhelin", type: "text", name: "phone", min: 5, max: 15, req: 1}, {title: "S\xE4hk\xF6posti", type: "email", name: "email", min: 6, max: 100, req: 1}, {title: "Katuosoite", type: "text", name: "street", min: 5, max: 50}, {title: "Postinumero", type: "text", name: "postal", min: 5, max: 5}, {title: "Kaupunki", type: "text", name: "area", min: 3, max: 50}];
      if (window.location.search) {
        let t4 = window.location.search.substr(1).split("=");
        t4[0] == "id" && (o3 = parseInt(t4[1]));
      }
      return t3.$$.update = () => {
        3 & t3.$$.dirty && n2(2, s3 = c2.total + d2.price), 4 & t3.$$.dirty && n2(5, a3 = 0.1 * s3);
      }, n2(6, l2 = ""), [d2, c2, s3, o3, r2, a3, l2, p3, h2, async function(t4) {
        typeof paymentSelected != "undefined" && (main2.q(p, c2.method = paymentSelected, c2), p.set(c2));
        const e3 = new FormData();
        h2.forEach(function(n3) {
          t4.target[n3.name] !== void 0 && e3.append(n3.name, t4.target[n3.name].value);
        }), e3.append("cart", JSON.stringify(c2.products)), e3.append("delivery", JSON.stringify(d2)), e3.append("price", s3), e3.append("vat", a3);
      }, function(t4) {
        c2.products[t4].amount = main2.k(this.value), p.set(c2);
      }, (t4) => p3(t4), function() {
        l2 = main2.E(this), n2(6, l2);
      }];
    }
    class kassa_a42bfd0e_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, tt, Z, main2.s, {});
      }
    }
  });

  // dist/build/_layout-cd71cfa6.js
  var require_layout_cd71cfa6 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_cd71cfa6_default
    });
    const main2 = __toModule(require_main());
    function C(t3, e2, s3) {
      const a3 = t3.slice();
      return a3[6] = e2[s3], a3;
    }
    function J(t3) {
      let e2, s3, a3, p3, g2, h2, f2, v2, y2, $2, w2, b2, k2, T2, x2, O2, M2, j2, H2, L2, N2, B2;
      function A2(t4, e3) {
        return t4[3] ? Y : q;
      }
      let E = A2(t3), P = E(t3), S = t3[0].nav, z = [];
      for (let e3 = 0; e3 < S.length; e3 += 1)
        z[e3] = D(C(t3, S, e3));
      return {c() {
        e2 = main2.e("header"), s3 = main2.e("div"), a3 = main2.e("a"), p3 = main2.e("picture"), g2 = main2.e("source"), f2 = main2.a(), v2 = main2.e("source"), $2 = main2.a(), w2 = main2.e("img"), T2 = main2.a(), x2 = main2.e("button"), P.c(), O2 = main2.a(), M2 = main2.e("nav"), j2 = main2.e("ul"), H2 = main2.e("li"), H2.innerHTML = '<a class="nav-link block" href="/" rel="home">Etusivu</a>', L2 = main2.a();
        for (let t4 = 0; t4 < z.length; t4 += 1)
          z[t4].c();
        main2.b(g2, "srcset", h2 = t3[0].site.logo[1]), main2.b(g2, "type", "image/webp"), main2.b(v2, "srcset", y2 = t3[0].site.logo[0]), main2.b(v2, "type", "image/jpeg"), w2.src !== (b2 = t3[0].site.logo[0]) && main2.b(w2, "src", b2), main2.b(w2, "alt", k2 = t3[0].site.title), main2.b(p3, "class", "block"), main2.b(a3, "id", "logo"), main2.b(a3, "class", "block bgw"), main2.b(a3, "href", "/"), main2.b(a3, "rel", "home"), main2.b(x2, "id", "menuToggle"), main2.b(x2, "class", "noBor"), main2.b(x2, "title", "Open/close main navigation"), main2.b(H2, "class", "nav-item"), main2.b(M2, "id", "menu"), main2.L(M2, "active", t3[3]), main2.b(s3, "class", "grid content mx"), main2.b(e2, "class", "block w100 bgw"), main2.L(e2, "small", t3[2]);
      }, m(n2, l2) {
        main2.c(n2, e2, l2), main2.d(e2, s3), main2.d(s3, a3), main2.d(a3, p3), main2.d(p3, g2), main2.d(p3, f2), main2.d(p3, v2), main2.d(p3, $2), main2.d(p3, w2), main2.d(s3, T2), main2.d(s3, x2), P.m(x2, null), main2.d(s3, O2), main2.d(s3, M2), main2.d(M2, j2), main2.d(j2, H2), main2.d(j2, L2);
        for (let t4 = 0; t4 < z.length; t4 += 1)
          z[t4].m(j2, null);
        N2 || (B2 = main2.l(x2, "click", t3[5]), N2 = true);
      }, p(t4, s4) {
        if (1 & s4 && h2 !== (h2 = t4[0].site.logo[1]) && main2.b(g2, "srcset", h2), 1 & s4 && y2 !== (y2 = t4[0].site.logo[0]) && main2.b(v2, "srcset", y2), 1 & s4 && w2.src !== (b2 = t4[0].site.logo[0]) && main2.b(w2, "src", b2), 1 & s4 && k2 !== (k2 = t4[0].site.title) && main2.b(w2, "alt", k2), E !== (E = A2(t4)) && (P.d(1), P = E(t4), P && (P.c(), P.m(x2, null))), 1 & s4) {
          let e3;
          for (S = t4[0].nav, e3 = 0; e3 < S.length; e3 += 1) {
            const a4 = C(t4, S, e3);
            z[e3] ? z[e3].p(a4, s4) : (z[e3] = D(a4), z[e3].c(), z[e3].m(j2, null));
          }
          for (; e3 < z.length; e3 += 1)
            z[e3].d(1);
          z.length = S.length;
        }
        8 & s4 && main2.L(M2, "active", t4[3]), 4 & s4 && main2.L(e2, "small", t4[2]);
      }, d(t4) {
        t4 && main2.f(e2), P.d(), main2.m(z, t4), N2 = false, B2();
      }};
    }
    function Y(t3) {
      let e2, s3;
      return {c() {
        e2 = main2.M("svg"), s3 = main2.M("path"), main2.b(s3, "d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"), main2.b(e2, "xmlns", "http://www.w3.org/2000/svg"), main2.b(e2, "width", "24"), main2.b(e2, "height", "24"), main2.b(e2, "viewBox", "0 0 24 24");
      }, m(t4, a3) {
        main2.c(t4, e2, a3), main2.d(e2, s3);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function q(t3) {
      let e2, s3, a3, n2, l2, o3, u2, m2;
      return {c() {
        e2 = main2.M("svg"), s3 = main2.M("title"), a3 = main2.t("Open or close navigation"), n2 = main2.M("desc"), l2 = main2.t("Pressing the button in the mobile version opens the\n							main navigation menu. Pressing again closes the\n							menu.\n						"), o3 = main2.M("rect"), u2 = main2.M("rect"), m2 = main2.M("rect"), main2.b(o3, "width", "100"), main2.b(o3, "height", "20"), main2.b(u2, "y", "30"), main2.b(u2, "width", "100"), main2.b(u2, "height", "20"), main2.b(m2, "y", "60"), main2.b(m2, "width", "100"), main2.b(m2, "height", "20"), main2.b(e2, "viewBox", "0 0 100 80"), main2.b(e2, "width", "30"), main2.b(e2, "height", "30");
      }, m(t4, i3) {
        main2.c(t4, e2, i3), main2.d(e2, s3), main2.d(s3, a3), main2.d(e2, n2), main2.d(n2, l2), main2.d(e2, o3), main2.d(e2, u2), main2.d(e2, m2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function D(t3) {
      let e2, s3, a3, o3, u2 = t3[6].title + "";
      return {c() {
        e2 = main2.e("li"), s3 = main2.e("a"), o3 = main2.a(), main2.b(s3, "class", "nav-link block"), main2.b(s3, "href", a3 = t3[6].path), main2.b(e2, "class", "nav-item");
      }, m(t4, a4) {
        main2.c(t4, e2, a4), main2.d(e2, s3), s3.innerHTML = u2, main2.d(e2, o3);
      }, p(t4, e3) {
        1 & e3 && u2 !== (u2 = t4[6].title + "") && (s3.innerHTML = u2), 1 & e3 && a3 !== (a3 = t4[6].path) && main2.b(s3, "href", a3);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function F(t3) {
      let e2, s3, n2, l2, i3 = false, o3 = () => {
        i3 = false;
      };
      main2.F(t3[4]);
      let r2 = t3[0] && t3[0].nav && J(t3);
      return {c() {
        r2 && r2.c(), s3 = main2.o();
      }, m(a3, d2) {
        r2 && r2.m(a3, d2), main2.c(a3, s3, d2), n2 || (l2 = main2.l(window, "scroll", () => {
          i3 = true, clearTimeout(e2), e2 = setTimeout(o3, 100), t3[4]();
        }), n2 = true);
      }, p(t4, [a3]) {
        2 & a3 && !i3 && (i3 = true, clearTimeout(e2), scrollTo(window.pageXOffset, t4[1]), e2 = setTimeout(o3, 100)), t4[0] && t4[0].nav ? r2 ? r2.p(t4, a3) : (r2 = J(t4), r2.c(), r2.m(s3.parentNode, s3)) : r2 && (r2.d(1), r2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        r2 && r2.d(t4), t4 && main2.f(s3), n2 = false, l2();
      }};
    }
    function I(t3, e2, s3) {
      let a3, n2, l2, {data: i3} = e2;
      return t3.$$set = (t4) => {
        "data" in t4 && s3(0, i3 = t4.data);
      }, t3.$$.update = () => {
        2 & t3.$$.dirty && s3(2, n2 = a3 > 100 || "");
      }, [i3, a3, n2, l2, function() {
        s3(1, a3 = window.pageYOffset);
      }, () => s3(3, l2 = !l2)];
    }
    class K extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, I, F, main2.s, {data: 0});
      }
    }
    function X(t3) {
      let e2, s3, a3, o3, u2, m2, g2, h2, f2, w2, x2;
      function O2(t4, e3) {
        return t4[0].cat ? Q : G;
      }
      e2 = new K({props: {data: t3[1]}});
      let M2 = O2(t3), H2 = M2(t3);
      const L2 = t3[7].default, N2 = main2.x(L2, t3, t3[6], null);
      let B2 = t3[3].amount > 0 && t3[4].path != "/kassa" && R(t3);
      return {c() {
        main2.H(e2.$$.fragment), s3 = main2.a(), a3 = main2.e("main"), o3 = main2.e("div"), H2.c(), u2 = main2.a(), m2 = main2.e("div"), g2 = main2.e("div"), N2 && N2.c(), f2 = main2.a(), B2 && B2.c(), w2 = main2.o(), main2.b(o3, "id", "hero"), main2.b(o3, "class", "grid tw up tc svelte-18otry4"), main2.b(g2, "class", "container mx svelte-18otry4"), main2.b(m2, "id", "content"), main2.b(m2, "class", "bgw py"), main2.b(a3, "class", "block svelte-18otry4"), main2.b(a3, "style", h2 = "background-image:url(" + t3[1].site.hero[0] + ")");
      }, m(t4, n2) {
        main2.I(e2, t4, n2), main2.c(t4, s3, n2), main2.c(t4, a3, n2), main2.d(a3, o3), H2.m(o3, null), main2.d(a3, u2), main2.d(a3, m2), main2.d(m2, g2), N2 && N2.m(g2, null), main2.c(t4, f2, n2), B2 && B2.m(t4, n2), main2.c(t4, w2, n2), x2 = true;
      }, p(t4, s4) {
        const n2 = {};
        2 & s4 && (n2.data = t4[1]), e2.$set(n2), M2 === (M2 = O2(t4)) && H2 ? H2.p(t4, s4) : (H2.d(1), H2 = M2(t4), H2 && (H2.c(), H2.m(o3, null))), N2 && N2.p && 64 & s4 && main2.y(N2, L2, t4, t4[6], s4, null, null), (!x2 || 2 & s4 && h2 !== (h2 = "background-image:url(" + t4[1].site.hero[0] + ")")) && main2.b(a3, "style", h2), t4[3].amount > 0 && t4[4].path != "/kassa" ? B2 ? B2.p(t4, s4) : (B2 = R(t4), B2.c(), B2.m(w2.parentNode, w2)) : B2 && (B2.d(1), B2 = null);
      }, i(t4) {
        x2 || (main2.z(e2.$$.fragment, t4), main2.z(N2, t4), x2 = true);
      }, o(t4) {
        main2.A(e2.$$.fragment, t4), main2.A(N2, t4), x2 = false;
      }, d(t4) {
        main2.J(e2, t4), t4 && main2.f(s3), t4 && main2.f(a3), H2.d(), N2 && N2.d(t4), t4 && main2.f(f2), B2 && B2.d(t4), t4 && main2.f(w2);
      }};
    }
    function G(t3) {
      let e2, s3, a3, o3, u2, m2, p3 = t3[1].site.title + "", g2 = t3[1].site.slogan + "";
      return {c() {
        e2 = main2.e("div"), s3 = main2.e("h1"), a3 = main2.t(p3), o3 = main2.a(), u2 = main2.e("h3"), m2 = main2.t(g2), main2.b(s3, "class", "svelte-18otry4"), main2.b(u2, "class", "svelte-18otry4");
      }, m(t4, n2) {
        main2.c(t4, e2, n2), main2.d(e2, s3), main2.d(s3, a3), main2.d(e2, o3), main2.d(e2, u2), main2.d(u2, m2);
      }, p(t4, e3) {
        2 & e3 && p3 !== (p3 = t4[1].site.title + "") && main2.j(a3, p3), 2 & e3 && g2 !== (g2 = t4[1].site.slogan + "") && main2.j(m2, g2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Q(t3) {
      let e2, s3 = t3[2].title + "";
      return {c() {
        e2 = main2.e("h1"), main2.b(e2, "class", "svelte-18otry4");
      }, m(t4, a3) {
        main2.c(t4, e2, a3), e2.innerHTML = s3;
      }, p(t4, a3) {
        4 & a3 && s3 !== (s3 = t4[2].title + "") && (e2.innerHTML = s3);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function R(t3) {
      let e2, s3, a3, o3, u2, m2, p3, g2, h2, v2, y2, $2, b2, k2 = t3[3].amount + "", T2 = t3[3].total + "";
      return {c() {
        e2 = main2.e("div"), s3 = main2.e("div"), a3 = main2.e("div"), o3 = main2.t("Tuotteita: "), u2 = main2.t(k2), m2 = main2.t(" kpl"), p3 = main2.a(), g2 = main2.e("div"), h2 = main2.t("Yhteens\xE4: "), v2 = main2.t(T2), y2 = main2.t(" \u20AC"), $2 = main2.a(), b2 = main2.e("a"), b2.textContent = "Kassalle", main2.b(a3, "id", "cartAmount"), main2.b(g2, "id", "cartAmount"), main2.b(b2, "class", "grid svelte-18otry4"), main2.b(b2, "href", "/kassa"), main2.b(b2, "rel", "nofollow"), main2.b(e2, "id", "cart"), main2.b(e2, "class", "grid svelte-18otry4");
      }, m(t4, n2) {
        main2.c(t4, e2, n2), main2.d(e2, s3), main2.d(s3, a3), main2.d(a3, o3), main2.d(a3, u2), main2.d(a3, m2), main2.d(s3, p3), main2.d(s3, g2), main2.d(g2, h2), main2.d(g2, v2), main2.d(g2, y2), main2.d(e2, $2), main2.d(e2, b2);
      }, p(t4, e3) {
        8 & e3 && k2 !== (k2 = t4[3].amount + "") && main2.j(u2, k2), 8 & e3 && T2 !== (T2 = t4[3].total + "") && main2.j(v2, T2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function U(t3) {
      let e2, s3, a3 = t3[1] && t3[1].site && X(t3);
      return {c() {
        a3 && a3.c(), e2 = main2.o();
      }, m(t4, n2) {
        a3 && a3.m(t4, n2), main2.c(t4, e2, n2), s3 = true;
      }, p(t4, [s4]) {
        t4[1] && t4[1].site ? a3 ? (a3.p(t4, s4), 2 & s4 && main2.z(a3, 1)) : (a3 = X(t4), a3.c(), main2.z(a3, 1), a3.m(e2.parentNode, e2)) : a3 && (main2.D(), main2.A(a3, 1, 1, () => {
          a3 = null;
        }), main2.B());
      }, i(t4) {
        s3 || (main2.z(a3), s3 = true);
      }, o(t4) {
        main2.A(a3), s3 = false;
      }, d(t4) {
        a3 && a3.d(t4), t4 && main2.f(e2);
      }};
    }
    function V(t3, e2, s3) {
      let a3, n2, l2, i3, o3, c2;
      main2.g(t3, t, (t4) => s3(5, a3 = t4)), main2.g(t3, main2.p, (t4) => s3(0, n2 = t4)), main2.g(t3, o, (t4) => s3(1, l2 = t4)), main2.g(t3, i, (t4) => s3(2, i3 = t4)), main2.g(t3, p, (t4) => s3(3, o3 = t4)), main2.g(t3, main2.N, (t4) => s3(4, c2 = t4));
      let {$$slots: r2 = {}, $$scope: u2} = e2;
      return main2.C(async () => {
        try {
          const t4 = await fetch(a3);
          o.set(await t4.json());
        } catch (t4) {
          console.error(t4);
        }
      }), t3.$$set = (t4) => {
        "$$scope" in t4 && s3(6, u2 = t4.$$scope);
      }, t3.$$.update = () => {
        if (15 & t3.$$.dirty && n2 && ((l2.site || i3.title) && (main2.O.title = n2.cat ? i3.title + " | " + l2.site.title : l2.site.title + " | " + l2.site.slogan, (i.summary || l2.site.summary) && (main2.O.summary = i3.summary ? i3.summary : l2.site.summary)), o3.amount == 0 && i3.cart && main2.q(p, o3 = i3.cart, o3)), 40 & t3.$$.dirty && o3.products) {
          let t4 = [0, 0];
          main2.q(p, o3.products = o3.products.filter((t5, e3) => t5.amount > 0 && t5 != null).sort(), o3), Object.values(o3.products).forEach((e3) => {
            e3.discounts && (e3.price2 = e3.price, e3.discounts.forEach(function(t5) {
              t5.amount <= e3.amount && (e3.price2 = t5.price);
            })), t4[0] += e3.total = e3.price2 * e3.amount, t4[1] += e3.amount;
          }), t4[1] == 0 || t4[1] == null ? main2.q(p, o3.products = [], o3) : (main2.q(p, o3.total = t4[0], o3), main2.q(p, o3.amount = t4[1], o3)), fetch(a3 + "?path=cart", {method: "POST", body: JSON.stringify(o3)});
        }
      }, [n2, l2, i3, o3, c2, a3, u2, r2];
    }
    class layout_cd71cfa6_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, V, U, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => nt,
      B: () => tt,
      C: () => T,
      D: () => Y,
      E: () => S,
      F: () => z,
      G: () => L,
      H: () => at,
      I: () => it,
      J: () => ct,
      K: () => P,
      L: () => I,
      M: () => b,
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
      r: () => r,
      s: () => a2,
      t: () => w,
      u: () => Gt,
      v: () => Pt,
      w: () => kt,
      x: () => u,
      y: () => f,
      z: () => et
    });
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
    function o2() {
      return Object.create(null);
    }
    function r(t3) {
      t3.forEach(n);
    }
    function s2(t3) {
      return typeof t3 == "function";
    }
    function a2(t3, e2) {
      return t3 != t3 ? e2 == e2 : t3 !== e2 || t3 && typeof t3 == "object" || typeof t3 == "function";
    }
    function i2(e2, ...n2) {
      if (e2 == null)
        return t2;
      const o3 = e2.subscribe(...n2);
      return o3.unsubscribe ? () => o3.unsubscribe() : o3;
    }
    function c(t3) {
      let e2;
      return i2(t3, (t4) => e2 = t4)(), e2;
    }
    function l(t3, e2, n2) {
      t3.$$.on_destroy.push(i2(e2, n2));
    }
    function u(t3, e2, n2, o3) {
      if (t3) {
        const r2 = p2(t3, e2, n2, o3);
        return t3[0](r2);
      }
    }
    function p2(t3, n2, o3, r2) {
      return t3[1] && r2 ? e(o3.ctx.slice(), t3[1](r2(n2))) : o3.ctx;
    }
    function f(t3, e2, n2, o3, r2, s3, a3) {
      const i3 = function(t4, e3, n3, o4) {
        if (t4[2] && o4) {
          const r3 = t4[2](o4(n3));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t5 = [], n4 = Math.max(e3.dirty.length, r3.length);
            for (let o5 = 0; o5 < n4; o5 += 1)
              t5[o5] = e3.dirty[o5] | r3[o5];
            return t5;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o3, r2, s3);
      if (i3) {
        const r3 = p2(e2, n2, o3, a3);
        t3.p(r3, i3);
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
    function v(t3, e2, n2, o3) {
      return t3.addEventListener(e2, n2, o3), () => t3.removeEventListener(e2, n2, o3);
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
    function O(t3, e2) {
      e2 = "" + e2, t3.wholeText !== e2 && (t3.data = e2);
    }
    function E(t3, e2) {
      t3.value = e2 == null ? "" : e2;
    }
    function L(t3, e2) {
      for (let n2 = 0; n2 < t3.options.length; n2 += 1) {
        const o3 = t3.options[n2];
        if (o3.__value === e2)
          return void (o3.selected = true);
      }
    }
    function S(t3) {
      const e2 = t3.querySelector(":checked") || t3.options[0];
      return e2 && e2.__value;
    }
    function I(t3, e2, n2) {
      t3.classList[n2 ? "add" : "remove"](e2);
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
    function A(t3, e2) {
      F().$$.context.set(t3, e2);
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
            const e2 = q[t3];
            N(e2), V(e2.$$);
          }
          for (N(null), q.length = 0; C.length; )
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
    const Z = new Set();
    let X;
    function Y() {
      X = {r: 0, c: [], p: X};
    }
    function tt() {
      X.r || r(X.c), X = X.p;
    }
    function et(t3, e2) {
      t3 && t3.i && (Z.delete(t3), t3.i(e2));
    }
    function nt(t3, e2, n2, o3) {
      if (t3 && t3.o) {
        if (Z.has(t3))
          return;
        Z.add(t3), X.c.push(() => {
          Z.delete(t3), o3 && (n2 && t3.d(1), o3());
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
    function st(t3, e2, n2, o3, r2, s3, a3, i3, c2, l2, u2, p3) {
      let f2 = t3.length, d2 = s3.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t4 = p3(r2, s3, h2), i4 = n2(t4);
        let c3 = a3.get(i4);
        c3 ? o3 && c3.p(t4, e2) : (c3 = l2(i4, t4), c3.c()), y2.set(i4, g2[h2] = c3), i4 in m2 && $2.set(i4, Math.abs(h2 - m2[i4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        et(t4, 1), t4.m(i3, u2), a3.set(t4.key, t4), u2 = t4.first, d2--;
      }
      for (; f2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t3[f2 - 1], o4 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !a3.has(o4) || b2.has(o4) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o4) > $2.get(r3) ? (w2.add(o4), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, a3), f2--);
      }
      for (; f2--; ) {
        const e3 = t3[f2];
        y2.has(e3.key) || c2(e3, a3);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function at(t3) {
      t3 && t3.c();
    }
    function it(t3, e2, o3) {
      const {fragment: a3, on_mount: i3, on_destroy: c2, after_update: l2} = t3.$$;
      a3 && a3.m(e2, o3), z(() => {
        const e3 = i3.map(n).filter(s2);
        c2 ? c2.push(...e3) : r(e3), t3.$$.on_mount = [];
      }), l2.forEach(z);
    }
    function ct(t3, e2) {
      const n2 = t3.$$;
      n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function lt(e2, n2, s3, a3, i3, c2, l2 = [-1]) {
      const u2 = R;
      N(e2);
      const p3 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: i3, bound: o2(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o2(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (p3.ctx = s3 ? s3(e2, n2.props || {}, (t3, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return p3.ctx && i3(p3.ctx[t3], p3.ctx[t3] = r2) && (!p3.skip_bound && p3.bound[t3] && p3.bound[t3](r2), f2 && function(t4, e3) {
          t4.$$.dirty[0] === -1 && (q.push(t4), K(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t3)), n3;
      }) : [], p3.update(), f2 = true, r(p3.before_update), p3.fragment = !!a3 && a3(p3.ctx), n2.target) {
        if (n2.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n2.target);
          p3.fragment && p3.fragment.l(t3), t3.forEach(g);
        } else
          p3.fragment && p3.fragment.c();
        n2.intro && et(e2.$$.fragment), it(e2, n2.target, n2.anchor), Q();
      }
      N(u2);
    }
    class ut {
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
    }
    var pt = {queryHandler: {parse: (t3) => {
      return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n2]) => (t4[e3] = n2, t4), {});
      var e2;
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
            const e2 = document.querySelector(t4);
            e2 && e2.scrollIntoView();
          }
        }
      }();
    }
    function ht(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", ht(t3.parentElement));
    }
    const mt = (t3) => {
      const e2 = [];
      let n2;
      for (; n2 = ft.exec(t3); )
        e2.push(n2[1]);
      return e2;
    };
    function gt(t3, e2) {
      gt._console = gt._console || {log: console.log, warn: console.warn};
      const {_console: n2} = gt, o3 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
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
        const [e3, n3] = t4.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e3, options: o3};
      }(t3);
      return {...$t(e2), options: n2};
    }
    function $t(t3) {
      pt.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e2 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function bt(t3, e2, n2) {
      const o3 = pt.useHash ? "#" : "";
      let r2;
      return r2 = function(t4, e3, n3) {
        const o4 = Object.assign({}, n3, e3), r3 = function(t5, e4) {
          if (!pt.queryHandler)
            return "";
          const n4 = mt(t5), o5 = {};
          e4 && Object.entries(e4).forEach(([t6, e5]) => {
            n4.includes(t6) || (o5[t6] = e5);
          });
          return pt.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t4, e3);
        for (const [e4, n4] of Object.entries(o4))
          t4 = t4.replace(`:${e4}`, n4);
        return `${t4}${r3}`;
      }(t3, e2, n2), r2 = pt.urlTransform.apply(r2), r2 = o3 + r2, r2;
    }
    function wt(t3) {
      let e2;
      const n2 = t3[2].default, o3 = u(n2, t3, t3[1], null);
      return {c() {
        o3 && o3.c();
      }, m(t4, n3) {
        o3 && o3.m(t4, n3), e2 = true;
      }, p(t4, [e3]) {
        o3 && o3.p && 2 & e3 && f(o3, n2, t4, t4[1], e3, null, null);
      }, i(t4) {
        e2 || (et(o3, t4), e2 = true);
      }, o(t4) {
        nt(o3, t4), e2 = false;
      }, d(t4) {
        o3 && o3.d(t4);
      }};
    }
    function _t(t3, e2, n2) {
      let {$$slots: o3 = {}, $$scope: r2} = e2, {scoped: s3 = {}} = e2;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n2(0, s3 = t4.scoped), "$$scope" in t4 && n2(1, r2 = t4.$$scope);
      }, [s3, r2, o3];
    }
    class xt extends ut {
      constructor(t3) {
        super(), lt(this, t3, _t, wt, a2, {scoped: 0});
      }
    }
    const vt = [];
    function Pt(t3, e2) {
      return {subscribe: kt(t3, e2).subscribe};
    }
    function kt(e2, n2 = t2) {
      let o3;
      const r2 = [];
      function s3(t3) {
        if (a2(e2, t3) && (e2 = t3, o3)) {
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
      return {set: s3, update: function(t3) {
        s3(t3(e2));
      }, subscribe: function(a3, i3 = t2) {
        const c2 = [a3, i3];
        return r2.push(c2), r2.length === 1 && (o3 = n2(s3) || t2), a3(e2), () => {
          const t3 = r2.indexOf(c2);
          t3 !== -1 && r2.splice(t3, 1), r2.length === 0 && (o3(), o3 = null);
        };
      }};
    }
    function jt(e2, n2, o3) {
      const a3 = !Array.isArray(e2), c2 = a3 ? [e2] : e2, l2 = n2.length < 2;
      return Pt(o3, (e3) => {
        let o4 = false;
        const u2 = [];
        let p3 = 0, f2 = t2;
        const d2 = () => {
          if (p3)
            return;
          f2();
          const o5 = n2(a3 ? u2[0] : u2, e3);
          l2 ? e3(o5) : f2 = s2(o5) ? o5 : t2;
        }, h2 = c2.map((t3, e4) => i2(t3, (t4) => {
          u2[e4] = t4, p3 &= ~(1 << e4), o4 && d2();
        }, () => {
          p3 |= 1 << e4;
        }));
        return o4 = true, d2(), function() {
          r(h2), f2();
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
    function Rt(t3, e2 = false) {
      t3 = pt.urlTransform.remove(t3);
      let {pathname: n2, search: o3} = $t(t3).url;
      const r2 = c(Et), s3 = r2.find((t4) => n2 === t4.meta.name) || r2.find((t4) => n2.match(t4.regex));
      if (!s3)
        throw new Error(`Route could not be found for "${n2}".`);
      const a3 = e2 ? Object.create(s3) : s3, {route: i3, redirectPath: l2, rewritePath: u2} = Nt(a3, r2);
      return u2 && ({pathname: n2, search: o3} = $t(bt(u2, i3.params)).url, l2 && (i3.redirectTo = bt(l2, i3.params || {}))), pt.queryHandler && (i3.params = Object.assign({}, i3.params, pt.queryHandler.parse(o3))), function(t4, e3) {
        if (t4.paramKeys) {
          const n3 = function(t5) {
            const e4 = [];
            return t5.forEach((t6) => {
              e4[t6.path.split("/").filter(Boolean).length - 1] = t6;
            }), e4;
          }(t4.layouts), o4 = e3.split("/").filter(Boolean);
          (function(t5) {
            return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
          })(t4.path).forEach((e4, r3) => {
            e4 && (t4.params[e4] = o4[r3], n3[r3] ? n3[r3].param = {[e4]: o4[r3]} : t4.param = {[e4]: o4[r3]});
          });
        }
      }(i3, n2), i3.leftover = t3.replace(new RegExp(i3.regex), ""), i3;
    }
    function Nt(t3, e2, n2, o3) {
      const {redirect: r2, rewrite: s3} = t3.meta;
      if (r2 || s3) {
        n2 = r2 ? r2.path || r2 : n2, o3 = s3 ? s3.path || s3 : n2;
        const a3 = r2 && r2.params, i3 = s3 && s3.params, c2 = e2.find((t4) => t4.path === o3);
        return c2 === t3 && console.error(`${o3} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o3}`), (a3 || i3) && (c2.params = Object.assign({}, c2.params, a3, i3)), Nt(c2, e2, n2, o3);
      }
      return {route: t3, redirectPath: n2, rewritePath: o3};
    }
    function Ft(t3, e2, n2) {
      const o3 = t3.slice();
      return o3[1] = e2[n2], o3;
    }
    function Tt(t3, e2) {
      let n2, o3;
      return {key: t3, first: null, c() {
        n2 = $("iframe"), n2.src !== (o3 = e2[1].url) && k(n2, "src", o3), k(n2, "frameborder", "0"), k(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t4, e3) {
        m(t4, n2, e3);
      }, p(t4, r2) {
        e2 = t4, 1 & r2 && n2.src !== (o3 = e2[1].url) && k(n2, "src", o3);
      }, d(t4) {
        t4 && g(n2);
      }};
    }
    function At(e2) {
      let n2, o3 = [], r2 = new Map(), s3 = e2[0];
      const a3 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < s3.length; t3 += 1) {
        let n3 = Ft(e2, s3, t3), i3 = a3(n3);
        r2.set(i3, o3[t3] = Tt(i3, n3));
      }
      return {c() {
        n2 = $("div");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        var t3, e3, r3;
        k(n2, "id", "__routify_iframes"), t3 = "display", e3 = "none", n2.style.setProperty(t3, e3, r3 ? "important" : "");
      }, m(t3, e3) {
        m(t3, n2, e3);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].m(n2, null);
      }, p(t3, [e3]) {
        1 & e3 && (s3 = t3[0], o3 = st(o3, e3, a3, 1, t3, s3, r2, n2, ot, Tt, null, Ft));
      }, i: t2, o: t2, d(t3) {
        t3 && g(n2);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].d();
      }};
    }
    const Mt = kt([]);
    const qt = jt(Mt, (t3) => t3.slice(0, 2));
    function Ct(t3) {
      const e2 = t3.data ? t3.data.prefetchId : t3;
      if (!e2)
        return null;
      const n2 = c(Mt).find((t4) => t4 && t4.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t4} = n2.options, o3 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
        });
        Promise.all([o3, r2]).then(() => {
          Mt.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
        });
      }
    }
    function Bt(t3, e2, n2) {
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
      const e2 = this._hooks, n2 = e2.length;
      return t3((t4) => {
        e2[n2] = t4;
      }), () => delete e2[n2];
    }
    const Wt = {subscribe: (t3) => jt(Dt(), (t4) => t4.route.params).subscribe(t3)};
    const Gt = {subscribe: (t3) => jt([Dt(), Ot, Et], (t4) => function(t5, e2, n2) {
      return function(o3, r2 = {}, s3) {
        const {component: a3} = t5, i3 = Object.assign({}, e2.params, a3.params);
        let c2 = o3 && o3.nodeType && o3;
        c2 && (o3 = o3.getAttribute("href")), o3 = o3 ? p3(o3) : a3.shortPath;
        const l2 = n2.find((t6) => [t6.shortPath || "/", t6.path].includes(o3));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t6);
        }
        s3 && s3.strict !== false || (o3 = o3.replace(/index$/, ""));
        let u2 = bt(o3, r2, i3);
        return c2 ? (c2.href = u2, {update(t6) {
          c2.href = bt(o3, t6, i3);
        }}) : u2;
        function p3(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e3, n3] = t6.match(/^([\.\/]+)(.*)/), o4 = a3.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            a3.isPage && r3.push(null), r3.forEach(() => o4 = o4.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o4}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t6.match(/^\//))
            ;
          else {
            const e3 = n2.find((e4) => e4.meta.name === t6);
            e3 && (t6 = e3.shortPath);
          }
          return t6;
        }
      };
    }(...t4)).subscribe(t3)};
    const Qt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, (Qt.getLongest(Qt.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
      Qt.writeMeta(t3, e2);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
      Qt.writeMeta(`og:${t3}`, e2);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
      document.title = e2;
    }}], getLongest(t3, e2) {
      const n2 = t3[e2];
      if (n2) {
        const o3 = c(Ot).path;
        return n2[Object.keys(t3[e2]).filter((t4) => o3.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
      }
    }, writeMeta(t3, e2) {
      const n2 = document.getElementsByTagName("head")[0], o3 = t3.match(/(.+)\:/), r2 = o3 && o3[1] || "plain", {propField: s3, valueField: a3} = Vt.services[r2] || Vt.services.plain, i3 = document.querySelector(`meta[${s3}='${t3}']`);
      i3 && i3.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s3, t3), c2.setAttribute(a3, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
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
      const t3 = Dt();
      return t3 && c(t3).path || "/";
    }, _pendingUpdate: false};
    const Vt = new Proxy(Qt, {set(t3, e2, n2, o3) {
      const {props: r2, getOrigin: s3} = t3;
      return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n2, o3) : (r2[e2] = r2[e2] || {}, r2[e2][s3()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function Zt(t3, e2, n2) {
      const o3 = t3.slice();
      return o3[18] = e2[n2].component, o3[19] = e2[n2].componentFile, o3[2] = e2[n2].decorator, o3[1] = e2[n2].nodes, o3;
    }
    function Xt(t3) {
      let e2, n2, o3 = [], r2 = new Map(), s3 = [t3[4]];
      const a3 = (t4) => function({meta: t5, path: e3, param: n3, params: o4}) {
        return JSON.stringify({path: e3, param: (t5["param-is-page"] || t5["slug-is-page"]) && n3, queryParams: t5["query-params-is-page"] && o4});
      }(t4[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = Zt(t3, s3, e3), i3 = a3(n3);
        r2.set(i3, o3[e3] = ne(i3, n3));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o3[t4].c();
        e2 = x();
      }, m(t4, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].m(t4, r3);
        m(t4, e2, r3), n2 = true;
      }, p(t4, n3) {
        4194365 & n3 && (s3 = [t4[4]], Y(), o3 = st(o3, n3, a3, 1, t4, s3, r2, e2.parentNode, rt, ne, e2, Zt), tt());
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
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].d(t4);
        t4 && g(e2);
      }};
    }
    function Yt(t3) {
      let e2, n2;
      return e2 = new se({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        at(e2.$$.fragment);
      }, m(t4, o3) {
        it(e2, t4, o3), n2 = true;
      }, p(t4, n3) {
        const o3 = {};
        4 & n3 && (o3.decorator = t4[2]), 16 & n3 && (o3.nodes = [...t4[1]]), 4194305 & n3 && (o3.scoped = {...t4[0], ...t4[22]}), e2.$set(o3);
      }, i(t4) {
        n2 || (et(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        nt(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ct(e2, t4);
      }};
    }
    function te(t3) {
      let e2, n2, o3 = t3[18] && t3[1].length && Yt(t3);
      return {c() {
        o3 && o3.c(), e2 = x();
      }, m(t4, r2) {
        o3 && o3.m(t4, r2), m(t4, e2, r2), n2 = true;
      }, p(t4, n3) {
        t4[18] && t4[1].length ? o3 ? (o3.p(t4, n3), 16 & n3 && et(o3, 1)) : (o3 = Yt(t4), o3.c(), et(o3, 1), o3.m(e2.parentNode, e2)) : o3 && (Y(), nt(o3, 1, 1, () => {
          o3 = null;
        }), tt());
      }, i(t4) {
        n2 || (et(o3), n2 = true);
      }, o(t4) {
        nt(o3), n2 = false;
      }, d(t4) {
        o3 && o3.d(t4), t4 && g(e2);
      }};
    }
    function ee(t3) {
      let n2, o3, r2;
      const s3 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var a3 = t3[19];
      function i3(t4) {
        let n3 = {$$slots: {default: [te, ({scoped: t5, decorator: e2}) => ({22: t5, 2: e2}), ({scoped: t5, decorator: e2}) => (t5 ? 4194304 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < s3.length; t5 += 1)
          n3 = e(n3, s3[t5]);
        return {props: n3};
      }
      return a3 && (n2 = new a3(i3(t3))), {c() {
        n2 && at(n2.$$.fragment), o3 = _();
      }, m(t4, e2) {
        n2 && it(n2, t4, e2), m(t4, o3, e2), r2 = true;
      }, p(t4, e2) {
        const r3 = 41 & e2 ? function(t5, e3) {
          const n3 = {}, o4 = {}, r4 = {$$scope: 1};
          let s4 = t5.length;
          for (; s4--; ) {
            const a4 = t5[s4], i4 = e3[s4];
            if (i4) {
              for (const t6 in a4)
                t6 in i4 || (o4[t6] = 1);
              for (const t6 in i4)
                r4[t6] || (n3[t6] = i4[t6], r4[t6] = 1);
              t5[s4] = i4;
            } else
              for (const t6 in a4)
                r4[t6] = 1;
          }
          for (const t6 in o4)
            t6 in n3 || (n3[t6] = void 0);
          return n3;
        }(s3, [1 & e2 && {scoped: t4[0]}, 32 & e2 && {scopedSync: t4[5]}, 8 & e2 && (c2 = t4[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & e2 && (r3.$$scope = {dirty: e2, ctx: t4}), a3 !== (a3 = t4[19])) {
          if (n2) {
            Y();
            const t5 = n2;
            nt(t5.$$.fragment, 1, 0, () => {
              ct(t5, 1);
            }), tt();
          }
          a3 ? (n2 = new a3(i3(t4)), at(n2.$$.fragment), et(n2.$$.fragment, 1), it(n2, o3.parentNode, o3)) : n2 = null;
        } else
          a3 && n2.$set(r3);
      }, i(t4) {
        r2 || (n2 && et(n2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        n2 && nt(n2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        n2 && ct(n2, t4), t4 && g(o3);
      }};
    }
    function ne(t3, e2) {
      let n2, o3, r2, s3;
      var a3 = e2[2];
      function i3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [ee]}, $$scope: {ctx: t4}}};
      }
      return a3 && (o3 = new a3(i3(e2))), {key: t3, first: null, c() {
        n2 = x(), o3 && at(o3.$$.fragment), r2 = x(), this.first = n2;
      }, m(t4, e3) {
        m(t4, n2, e3), o3 && it(o3, t4, e3), m(t4, r2, e3), s3 = true;
      }, p(t4, n3) {
        e2 = t4;
        const s4 = {};
        if (1 & n3 && (s4.scoped = e2[0]), 8388669 & n3 && (s4.$$scope = {dirty: n3, ctx: e2}), a3 !== (a3 = e2[2])) {
          if (o3) {
            Y();
            const t5 = o3;
            nt(t5.$$.fragment, 1, 0, () => {
              ct(t5, 1);
            }), tt();
          }
          a3 ? (o3 = new a3(i3(e2)), at(o3.$$.fragment), et(o3.$$.fragment, 1), it(o3, r2.parentNode, r2)) : o3 = null;
        } else
          a3 && o3.$set(s4);
      }, i(t4) {
        s3 || (o3 && et(o3.$$.fragment, t4), s3 = true);
      }, o(t4) {
        o3 && nt(o3.$$.fragment, t4), s3 = false;
      }, d(t4) {
        t4 && g(n2), t4 && g(r2), o3 && ct(o3, t4);
      }};
    }
    function oe(e2) {
      let n2, o3, r2, a3, i3, c2 = e2[4] && Xt(e2);
      return {c() {
        c2 && c2.c(), n2 = _(), o3 = $("span");
      }, m(l2, u2) {
        var p3;
        c2 && c2.m(l2, u2), m(l2, n2, u2), m(l2, o3, u2), r2 = true, a3 || (p3 = e2[8].call(null, o3), i3 = p3 && s2(p3.destroy) ? p3.destroy : t2, a3 = true);
      }, p(t3, [e3]) {
        t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && et(c2, 1)) : (c2 = Xt(t3), c2.c(), et(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (Y(), nt(c2, 1, 1, () => {
          c2 = null;
        }), tt());
      }, i(t3) {
        r2 || (et(c2), r2 = true);
      }, o(t3) {
        nt(c2), r2 = false;
      }, d(t3) {
        c2 && c2.d(t3), t3 && g(n2), t3 && g(o3), a3 = false, i3();
      }};
    }
    function re(t3, e2, n2) {
      let o3, r2, s3, a3;
      l(t3, Ot, (t4) => n2(14, s3 = t4));
      let i3, {nodes: c2 = []} = e2, {scoped: u2 = {}} = e2, {isRoot: p3 = false} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = kt(null);
      l(t3, g2, (t4) => n2(4, a3 = t4));
      const y2 = M("routify");
      l(t3, y2, (t4) => n2(10, r2 = t4));
      function $2(t4) {
        n2(5, m2 = {...u2}), h2.length === 0 && async function() {
          await J(), dt(i3);
          const t5 = a3.component.path === s3.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e4, afterPageLoad: n3}) {
            const {path: o4} = t6, {options: r3} = yt(), s4 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t6.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o4, prefetchId: s4}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: a3.component, metatags: Vt, afterPageLoad: Kt});
        }();
        const e3 = {nodes: h2, decorator: f2 || xt, layout: d2.isLayout ? d2 : o3 && o3.layout, component: d2, route: s3, componentFile: t4, parentNode: i3 || o3 && o3.parentNode};
        g2.set(e3), p3 && Lt.set(e3);
      }
      return A("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n2(1, c2 = t4.nodes), "scoped" in t4 && n2(0, u2 = t4.scoped), "isRoot" in t4 && n2(9, p3 = t4.isRoot), "decorator" in t4 && n2(2, f2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o3 = r2), 2 & t3.$$.dirty && n2(3, [d2, ...h2] = c2, d2), 8 & t3.$$.dirty && function(t4) {
          let e3 = t4.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t3.$$.dirty && a3 && gt(a3, J);
      }, [u2, c2, f2, d2, a3, m2, g2, y2, (t4) => i3 = t4.parentNode, p3, r2];
    }
    class se extends ut {
      constructor(t3) {
        super(), lt(this, t3, re, oe, a2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function ae(t3, e2) {
      let n2 = false;
      function o3(o4, r3) {
        const s3 = Rt(o4 || yt().fullpath);
        s3.redirectTo && (history.replaceStateNative({}, null, s3.redirectTo), delete s3.redirectTo);
        const a3 = [...(r3 && Rt(yt().fullpath, t3) || s3).layouts, s3];
        n2 && delete n2.last, s3.last = n2, n2 = s3, o4 || St.set(s3), Ot.set(s3), s3.api.preload().then(() => {
          It.set(true), e2(a3);
        });
      }
      const r2 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e4 = {}, n4, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s3, params: a3} = c(Ot);
            e4 = {id: r3, path: s3, params: a3, ...e4};
            const i3 = new Event(t5.toLowerCase());
            Object.assign(i3, {state: e4, title: n4, url: o4});
            return await ce(i3, o4) ? (history[t5 + "Native"].apply(this, [e4, n4, o4]), dispatchEvent(i3)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: ie, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
          e3 ? e3 = false : await ce(n4, yt().fullpath) ? t4() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n3).forEach((t5) => removeEventListener(...t5));
        };
      }(o3);
      return {updatePage: o3, destroy: r2};
    }
    function ie(t3) {
      const e2 = t3.target.closest("a"), n2 = e2 && e2.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o3 = new URL(n2), r2 = o3.pathname + o3.search + o3.hash;
      t3.preventDefault(), history.pushState({}, "", r2);
    }
    async function ce(t3, e2) {
      const n2 = Rt(e2).api;
      for (const o3 of Jt._hooks.filter(Boolean)) {
        if (!await o3(t3, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function le(t3) {
      let e2, n2;
      return e2 = new se({props: {nodes: t3[0], isRoot: true}}), {c() {
        at(e2.$$.fragment);
      }, m(t4, o3) {
        it(e2, t4, o3), n2 = true;
      }, p(t4, n3) {
        const o3 = {};
        1 & n3 && (o3.nodes = t4[0]), e2.$set(o3);
      }, i(t4) {
        n2 || (et(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        nt(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ct(e2, t4);
      }};
    }
    function ue(t3) {
      let e2, n2, o3, r2 = t3[0] && t3[1] !== null && le(t3);
      return n2 = new Ut({}), {c() {
        r2 && r2.c(), e2 = _(), at(n2.$$.fragment);
      }, m(t4, s3) {
        r2 && r2.m(t4, s3), m(t4, e2, s3), it(n2, t4, s3), o3 = true;
      }, p(t4, [n3]) {
        t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n3), 3 & n3 && et(r2, 1)) : (r2 = le(t4), r2.c(), et(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (Y(), nt(r2, 1, 1, () => {
          r2 = null;
        }), tt());
      }, i(t4) {
        o3 || (et(r2), et(n2.$$.fragment, t4), o3 = true);
      }, o(t4) {
        nt(r2), nt(n2.$$.fragment, t4), o3 = false;
      }, d(t4) {
        r2 && r2.d(t4), t4 && g(e2), ct(n2, t4);
      }};
    }
    function pe(t3, e2, n2) {
      let o3;
      l(t3, Ot, (t4) => n2(1, o3 = t4));
      let r2, s3, {routes: a3} = e2, {config: i3 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(pt, i3);
      A("routifyupdatepage", (...t4) => s3 && s3.updatePage(...t4));
      const c2 = (t4) => n2(0, r2 = t4), u2 = () => {
        s3 && (s3.destroy(), s3 = null);
      };
      let p3 = null;
      var f2;
      return f2 = u2, F().$$.on_destroy.push(f2), t3.$$set = (t4) => {
        "routes" in t4 && n2(2, a3 = t4.routes), "config" in t4 && n2(3, i3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && a3 && (clearTimeout(p3), p3 = setTimeout(() => {
          u2(), s3 = ae(a3, c2), Et.set(a3), s3.updatePage();
        }));
      }, [r2, o3, a3, i3];
    }
    class fe extends ut {
      constructor(t3) {
        super(), lt(this, t3, pe, ue, a2, {routes: 2, config: 3});
      }
    }
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
      const o3 = n2 || e2.file;
      if (o3.children) {
        const n3 = await Promise.all(o3.children.map(async (n4) => he(t3, {state: e2.state, scope: ge(e2.scope || {}), parent: e2.file, file: await n4})));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function me(t3, e2) {
      const n2 = t3(e2);
      if (n2 === false)
        return false;
      const o3 = n2 || e2.file;
      if (o3.children) {
        const n3 = o3.children.map((n4) => me(t3, {state: e2.state, scope: ge(e2.scope || {}), parent: e2.file, file: n4}));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function ge(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const ye = de(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
        const n2 = e2 ? "" : "/?$";
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
      const e2 = t3, n2 = t3.meta && t3.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const xe = de((t3) => {
      const {file: e2} = t3, {isFallback: n2, meta: o3} = e2, r2 = e2.path.match("/:"), s3 = e2.path.endsWith("/index"), a3 = o3.index || o3.index === 0, i3 = o3.index === false;
      e2.isIndexable = a3 || !n2 && !r2 && !s3 && !i3, e2.isNonIndexable = !e2.isIndexable;
    });
    const ve = de(({file: t3, parent: e2}) => {
      Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => ke(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => ke(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => Pe(e2)});
    });
    function Pe(t3, e2 = []) {
      return t3 && (e2.unshift(t3), Pe(t3.parent, e2)), e2;
    }
    function ke(t3, e2) {
      if (!t3.root) {
        const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o3 = n2.indexOf(t3);
        return n2[o3 + e2];
      }
    }
    const je = de(({file: t3, parent: e2}) => {
      t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
    });
    const Oe = de(({file: t3, scope: e2}) => {
      function n2(t4) {
        const {parent: e3} = t4, o3 = e3 && e3.component && e3, r2 = o3 && o3.isReset, s3 = e3 && !r2 && n2(e3) || [];
        return o3 && s3.push(o3), s3;
      }
      Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
    });
    const Ee = de(({file: t3}) => {
      const e2 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e2.prototype);
    });
    var Le = Object.freeze({__proto__: null, setRegex: ye, setParamKeys: $e, setShortPath: be, setRank: we, addMetaChildren: _e, setIsIndexable: xe, assignRelations: ve, assignIndex: je, assignLayout: Oe, createFlatList: (t3) => {
      de((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: Ee});
    const Se = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function Ie(t3) {
      return Object.entries(Se).forEach(([e2, n2]) => {
        t3[e2] === void 0 && (t3[e2] = n2);
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
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t3) => !t3.isNonIndexable).sort((t3, e2) => t3.isMeta && e2.isMeta ? 0 : (t3 = (t3.meta.index || t3.meta.title || t3.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t3.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t3}) => t3);
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
    function Fe(t3, e2) {
      if (!t3.__file.root) {
        const n2 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n2 + e2];
      }
    }
    const Te = {...Le, restoreDefaults: ({tree: t3}) => Ie(t3), assignAPI: Re};
    const Ae = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_659c727e())).then((t3) => t3.default)}, {isDir: true, children: [{isPage: true, path: "/:cat/:slug", id: "__cat__slug", component: () => Promise.resolve().then(() => __toModule(require_slug_ee7bdcf0())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => __toModule(require_index_44b7a890())).then((t3) => t3.default)}], isLayout: true, path: "/:cat", id: "__cat__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_a9fbdbca())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_b760118a())).then((t3) => t3.default)}, {isPage: true, path: "/kassa", id: "_kassa", component: () => Promise.resolve().then(() => __toModule(require_kassa_a42bfd0e())).then((t3) => t3.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_cd71cfa6())).then((t3) => t3.default)};
    const {tree: Me, routes: qe} = function(t3) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
      for (let t4 of e2) {
        (Te[t4].sync || Te[t4])(n2);
      }
      return n2;
    }(Ae);
    function Ce(e2) {
      let n2, o3;
      return n2 = new fe({props: {routes: qe}}), {c() {
        at(n2.$$.fragment);
      }, m(t3, e3) {
        it(n2, t3, e3), o3 = true;
      }, p: t2, i(t3) {
        o3 || (et(n2.$$.fragment, t3), o3 = true);
      }, o(t3) {
        nt(n2.$$.fragment, t3), o3 = false;
      }, d(t3) {
        ct(n2, t3);
      }};
    }
    !function(t3, e2 = {target: document.body}, n2 = "hmr", o3 = "app-loaded") {
      const r2 = document.getElementById(n2), s3 = document.createElement("div");
      function a3() {
        r2 && r2.remove(), s3.style.visibility = null, s3.setAttribute("id", n2);
      }
      s3.style.visibility = "hidden", e2.target.appendChild(s3), r2 ? addEventListener(o3, a3) : a3(), new t3({...e2, target: s3});
    }(class extends ut {
      constructor(t3) {
        super(), lt(this, t3, null, Ce, a2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/store-dcd02ba1.js
  const main = __toModule(require_main());
  const t = main.v("http://foodis.dataline.fi/pw/");
  const o = main.w({});
  const i = main.w({});
  const p = main.w({total: 0, amount: 0, products: []});
  require_main();
})();
