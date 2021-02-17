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

  // dist/build/_fallback-86e855f0.js
  var require_fallback_86e855f0 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_86e855f0_default
    });
    const main2 = __toModule(require_main());
    function v(s3) {
      let a3, e2, d2, f2, v2, g2, h, m;
      return {c() {
        a3 = main2.e("div"), e2 = main2.e("div"), e2.textContent = "404", d2 = main2.a(), f2 = main2.e("div"), v2 = main2.t("Page not found. \n  \n  "), g2 = main2.e("a"), h = main2.t("Go back"), main2.b(e2, "class", "huge svelte-33l10e"), main2.b(g2, "href", m = s3[0]("../")), main2.b(f2, "class", "big"), main2.b(a3, "class", "e404 svelte-33l10e");
      }, m(s4, t3) {
        main2.c(s4, a3, t3), main2.d(a3, e2), main2.d(a3, d2), main2.d(a3, f2), main2.d(f2, v2), main2.d(f2, g2), main2.d(g2, h);
      }, p(s4, [a4]) {
        1 & a4 && m !== (m = s4[0]("../")) && main2.b(g2, "href", m);
      }, i: main2.n, o: main2.n, d(s4) {
        s4 && main2.f(a3);
      }};
    }
    function g(s3, a3, e2) {
      let t3;
      return main2.g(s3, main2.u, (s4) => e2(0, t3 = s4)), [t3];
    }
    class fallback_86e855f0_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, g, v, main2.s, {});
      }
    }
  });

  // dist/build/[slug]-a86aaa04.js
  var require_slug_a86aaa04 = __commonJS((exports) => {
    __export(exports, {
      default: () => slug_a86aaa04_default
    });
    const main2 = __toModule(require_main());
    function h(t3) {
      let e2, s3, l2, u2, v2, g2, b2, f2, y, $, h2, x2, H2, L, k, M, T, F, I, q, N, S, z, A = t3[1].price && j(t3), B = t3[1].body && w(t3);
      return {c() {
        e2 = main2.e("div"), s3 = main2.e("div"), l2 = main2.e("picture"), u2 = main2.e("source"), g2 = main2.a(), b2 = main2.e("source"), y = main2.a(), $ = main2.e("img"), H2 = main2.a(), L = main2.e("div"), A && A.c(), k = main2.a(), M = main2.e("div"), T = main2.e("div"), F = main2.e("input"), I = main2.a(), q = main2.e("div"), q.innerHTML = '<button class="w100">Lis\xE4\xE4 ostoskoriin</button>', N = main2.a(), B && B.c(), main2.b(u2, "srcset", v2 = t3[1].img[1]), main2.b(u2, "type", "image/webp"), main2.b(b2, "srcset", f2 = t3[1].img[0]), main2.b(b2, "type", "image/jpeg"), $.src !== (h2 = t3[1].img[0]) && main2.b($, "src", h2), main2.b($, "alt", x2 = t3[1].title), main2.b(l2, "class", "block"), main2.b(s3, "id", "img"), main2.b(F, "name", "amount"), main2.b(F, "type", "number"), main2.b(F, "min", "1"), main2.b(F, "step", "1"), F.required = true, main2.b(M, "id", "cartIt"), main2.b(M, "class", "border grid svelte-ve38v6"), main2.b(L, "id", "productInfo"), main2.b(e2, "id", "product"), main2.b(e2, "class", "container double grid svelte-ve38v6");
      }, m(i3, r2) {
        main2.c(i3, e2, r2), main2.d(e2, s3), main2.d(s3, l2), main2.d(l2, u2), main2.d(l2, g2), main2.d(l2, b2), main2.d(l2, y), main2.d(l2, $), main2.d(e2, H2), main2.d(e2, L), A && A.m(L, null), main2.d(L, k), main2.d(L, M), main2.d(M, T), main2.d(T, F), main2.h(F, t3[0]), main2.d(M, I), main2.d(M, q), main2.d(L, N), B && B.m(L, null), S || (z = main2.l(F, "input", t3[4]), S = true);
      }, p(t4, e3) {
        2 & e3 && v2 !== (v2 = t4[1].img[1]) && main2.b(u2, "srcset", v2), 2 & e3 && f2 !== (f2 = t4[1].img[0]) && main2.b(b2, "srcset", f2), 2 & e3 && $.src !== (h2 = t4[1].img[0]) && main2.b($, "src", h2), 2 & e3 && x2 !== (x2 = t4[1].title) && main2.b($, "alt", x2), t4[1].price ? A ? A.p(t4, e3) : (A = j(t4), A.c(), A.m(L, k)) : A && (A.d(1), A = null), 1 & e3 && main2.k(F.value) !== t4[0] && main2.h(F, t4[0]), t4[1].body ? B ? B.p(t4, e3) : (B = w(t4), B.c(), B.m(L, null)) : B && (B.d(1), B = null);
      }, d(t4) {
        t4 && main2.f(e2), A && A.d(), B && B.d(), S = false, z();
      }};
    }
    function j(t3) {
      let e2, s3, r2, d2, o3, p2 = t3[2].toFixed(2) + "";
      return {c() {
        e2 = main2.e("div"), s3 = main2.t("Hinta: "), r2 = main2.e("strong"), d2 = main2.t(p2), o3 = main2.t(" \u20AC"), main2.b(e2, "id", "price"), main2.b(e2, "class", "svelte-ve38v6");
      }, m(t4, i3) {
        main2.c(t4, e2, i3), main2.d(e2, s3), main2.d(e2, r2), main2.d(r2, d2), main2.d(r2, o3);
      }, p(t4, e3) {
        4 & e3 && p2 !== (p2 = t4[2].toFixed(2) + "") && main2.j(d2, p2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function w(t3) {
      let e2, s3 = t3[1].body + "";
      return {c() {
        e2 = main2.e("div"), main2.b(e2, "id", "body");
      }, m(t4, i3) {
        main2.c(t4, e2, i3), e2.innerHTML = s3;
      }, p(t4, i3) {
        2 & i3 && s3 !== (s3 = t4[1].body + "") && (e2.innerHTML = s3);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function x(t3) {
      let e2, s3 = t3[1] && h(t3);
      return {c() {
        s3 && s3.c(), e2 = main2.m();
      }, m(t4, i3) {
        s3 && s3.m(t4, i3), main2.c(t4, e2, i3);
      }, p(t4, [i3]) {
        t4[1] ? s3 ? s3.p(t4, i3) : (s3 = h(t4), s3.c(), s3.m(e2.parentNode, e2)) : s3 && (s3.d(1), s3 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        s3 && s3.d(t4), t4 && main2.f(e2);
      }};
    }
    function H(t3, e2, s3) {
      let i3, r2, n2;
      main2.g(t3, i, (t4) => s3(5, i3 = t4)), main2.g(t3, main2.p, (t4) => s3(3, r2 = t4)), main2.g(t3, t, (t4) => s3(1, n2 = t4));
      let a3 = 1, c2 = 0;
      return t3.$$.update = () => {
        8 & t3.$$.dirty && r2.slug && async function(t4) {
          let e3 = await fetch(i3 + "?path=" + t4);
          t.set(await e3.json());
        }(r2.slug), 3 & t3.$$.dirty && n2 && a3 && s3(2, c2 = n2.price * a3);
      }, [a3, n2, c2, r2, function() {
        a3 = main2.k(this.value), s3(0, a3);
      }];
    }
    class slug_a86aaa04_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, H, x, main2.s, {});
      }
    }
  });

  // dist/build/index-0fc54e09.js
  var require_index_0fc54e09 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_0fc54e09_default
    });
    const main2 = __toModule(require_main());
    function j(t3, s3, e2) {
      const c2 = t3.slice();
      return c2[4] = s3[e2], c2;
    }
    function y(t3) {
      let s3, e2 = t3[0].items, r2 = [];
      for (let s4 = 0; s4 < e2.length; s4 += 1)
        r2[s4] = $(j(t3, e2, s4));
      return {c() {
        s3 = main2.e("div");
        for (let t4 = 0; t4 < r2.length; t4 += 1)
          r2[t4].c();
        main2.b(s3, "id", "products"), main2.b(s3, "class", "tc grid up bold");
      }, m(t4, e3) {
        main2.c(t4, s3, e3);
        for (let t5 = 0; t5 < r2.length; t5 += 1)
          r2[t5].m(s3, null);
      }, p(t4, c2) {
        if (1 & c2) {
          let a3;
          for (e2 = t4[0].items, a3 = 0; a3 < e2.length; a3 += 1) {
            const i3 = j(t4, e2, a3);
            r2[a3] ? r2[a3].p(i3, c2) : (r2[a3] = $(i3), r2[a3].c(), r2[a3].m(s3, null));
          }
          for (; a3 < r2.length; a3 += 1)
            r2[a3].d(1);
          r2.length = e2.length;
        }
      }, d(t4) {
        t4 && main2.f(s3), main2.o(r2, t4);
      }};
    }
    function $(t3) {
      let s3, e2, p2, u2, d2, f2, g2, h, b, j2, y2, $2, v2, w2, k, x, N, S, q, z, A = t3[4].title + "", B = t3[4].price + "";
      return {c() {
        s3 = main2.e("a"), e2 = main2.e("picture"), p2 = main2.e("source"), d2 = main2.a(), f2 = main2.e("source"), h = main2.a(), b = main2.e("img"), $2 = main2.a(), v2 = main2.e("div"), w2 = main2.t(A), k = main2.a(), x = main2.e("div"), N = main2.t(B), S = main2.t(" \u20AC"), q = main2.a(), main2.b(p2, "srcset", u2 = t3[4].img[1]), main2.b(p2, "type", "image/webp"), main2.b(f2, "srcset", g2 = t3[4].img[0]), main2.b(f2, "type", "image/jpeg"), b.src !== (j2 = t3[4].img[0]) && main2.b(b, "src", j2), main2.b(b, "alt", y2 = t3[4].title), main2.b(e2, "class", "block"), main2.b(v2, "class", "title"), main2.b(x, "class", "price"), main2.b(s3, "class", "block"), main2.b(s3, "href", z = t3[4].path);
      }, m(t4, c2) {
        main2.c(t4, s3, c2), main2.d(s3, e2), main2.d(e2, p2), main2.d(e2, d2), main2.d(e2, f2), main2.d(e2, h), main2.d(e2, b), main2.d(s3, $2), main2.d(s3, v2), main2.d(v2, w2), main2.d(s3, k), main2.d(s3, x), main2.d(x, N), main2.d(x, S), main2.d(s3, q);
      }, p(t4, e3) {
        1 & e3 && u2 !== (u2 = t4[4].img[1]) && main2.b(p2, "srcset", u2), 1 & e3 && g2 !== (g2 = t4[4].img[0]) && main2.b(f2, "srcset", g2), 1 & e3 && b.src !== (j2 = t4[4].img[0]) && main2.b(b, "src", j2), 1 & e3 && y2 !== (y2 = t4[4].title) && main2.b(b, "alt", y2), 1 & e3 && A !== (A = t4[4].title + "") && main2.j(w2, A), 1 & e3 && B !== (B = t4[4].price + "") && main2.j(N, B), 1 & e3 && z !== (z = t4[4].path) && main2.b(s3, "href", z);
      }, d(t4) {
        t4 && main2.f(s3);
      }};
    }
    function v(t3) {
      let s3, e2 = t3[0].items && y(t3);
      return {c() {
        e2 && e2.c(), s3 = main2.m();
      }, m(t4, c2) {
        e2 && e2.m(t4, c2), main2.c(t4, s3, c2);
      }, p(t4, [c2]) {
        t4[0].items ? e2 ? e2.p(t4, c2) : (e2 = y(t4), e2.c(), e2.m(s3.parentNode, s3)) : e2 && (e2.d(1), e2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        e2 && e2.d(t4), t4 && main2.f(s3);
      }};
    }
    function w(t3, s3, e2) {
      let c2, a3, i3;
      return main2.g(t3, i, (t4) => e2(2, c2 = t4)), main2.g(t3, main2.p, (t4) => e2(1, a3 = t4)), main2.g(t3, t, (t4) => e2(0, i3 = t4)), t3.$$.update = () => {
        2 & t3.$$.dirty && a3.cat && async function(t4) {
          let s4 = await fetch(c2 + "?path=" + t4);
          t.set(await s4.json());
        }(a3.cat);
      }, [i3, a3];
    }
    class index_0fc54e09_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, w, v, main2.s, {});
      }
    }
  });

  // dist/build/index-4560130c.js
  var require_index_4560130c = __commonJS((exports) => {
    __export(exports, {
      default: () => index_4560130c_default
    });
    const main2 = __toModule(require_main());
    function h(t3, s3, e2) {
      const l2 = t3.slice();
      return l2[1] = s3[e2], l2;
    }
    function b(t3) {
      let s3, e2, u2, f2, m2, p, d, h2, b2, j2, k2, v, x, y, w, S, q, z = t3[1].title + "";
      return {c() {
        s3 = main2.e("a"), e2 = main2.e("figure"), u2 = main2.e("picture"), f2 = main2.e("source"), p = main2.a(), d = main2.e("source"), b2 = main2.a(), j2 = main2.e("img"), x = main2.a(), y = main2.e("figcaption"), w = main2.t(z), S = main2.a(), main2.b(f2, "srcset", m2 = t3[1].img[1]), main2.b(f2, "type", "image/webp"), main2.b(d, "srcset", h2 = t3[1].img[0]), main2.b(d, "type", "image/jpeg"), j2.src !== (k2 = t3[1].img[0]) && main2.b(j2, "src", k2), main2.b(j2, "alt", v = t3[1].title), main2.b(u2, "class", "block"), main2.b(y, "class", "block"), main2.b(e2, "class", "block"), main2.b(s3, "class", "block"), main2.b(s3, "href", q = t3[1].path);
      }, m(t4, l2) {
        main2.c(t4, s3, l2), main2.d(s3, e2), main2.d(e2, u2), main2.d(u2, f2), main2.d(u2, p), main2.d(u2, d), main2.d(u2, b2), main2.d(u2, j2), main2.d(e2, x), main2.d(e2, y), main2.d(y, w), main2.d(s3, S);
      }, p(t4, e3) {
        1 & e3 && m2 !== (m2 = t4[1].img[1]) && main2.b(f2, "srcset", m2), 1 & e3 && h2 !== (h2 = t4[1].img[0]) && main2.b(d, "srcset", h2), 1 & e3 && j2.src !== (k2 = t4[1].img[0]) && main2.b(j2, "src", k2), 1 & e3 && v !== (v = t4[1].title) && main2.b(j2, "alt", v), 1 & e3 && z !== (z = t4[1].title + "") && main2.j(w, z), 1 & e3 && q !== (q = t4[1].path) && main2.b(s3, "href", q);
      }, d(t4) {
        t4 && main2.f(s3);
      }};
    }
    function j(t3) {
      let s3, e2 = t3[0].nav, c2 = [];
      for (let s4 = 0; s4 < e2.length; s4 += 1)
        c2[s4] = b(h(t3, e2, s4));
      return {c() {
        s3 = main2.e("div");
        for (let t4 = 0; t4 < c2.length; t4 += 1)
          c2[t4].c();
        main2.b(s3, "id", "products"), main2.b(s3, "class", "tc grid up bold");
      }, m(t4, e3) {
        main2.c(t4, s3, e3);
        for (let t5 = 0; t5 < c2.length; t5 += 1)
          c2[t5].m(s3, null);
      }, p(t4, [l2]) {
        if (1 & l2) {
          let i3;
          for (e2 = t4[0].nav, i3 = 0; i3 < e2.length; i3 += 1) {
            const r2 = h(t4, e2, i3);
            c2[i3] ? c2[i3].p(r2, l2) : (c2[i3] = b(r2), c2[i3].c(), c2[i3].m(s3, null));
          }
          for (; i3 < c2.length; i3 += 1)
            c2[i3].d(1);
          c2.length = e2.length;
        }
      }, i: main2.n, o: main2.n, d(t4) {
        t4 && main2.f(s3), main2.o(c2, t4);
      }};
    }
    function k(t3, s3, e2) {
      let l2;
      return main2.g(t3, o, (t4) => e2(0, l2 = t4)), l2.site && t.set({title: l2.site.title, slogan: l2.site.slogan}), [l2];
    }
    class index_4560130c_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, k, j, main2.s, {});
      }
    }
  });

  // dist/build/_layout-e18f467f.js
  var require_layout_e18f467f = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_e18f467f_default
    });
    const main2 = __toModule(require_main());
    function B(t3, e2, s3) {
      const l2 = t3.slice();
      return l2[4] = e2[s3], l2;
    }
    function C(t3) {
      let e2, s3, l2, u2, d2, v2, g2, p2, $2, h2, w2, y2, b2, z2, k2, T2, x2, j2, E2, H2, N2 = t3[0].nav, O = [];
      for (let e3 = 0; e3 < N2.length; e3 += 1)
        O[e3] = D(B(t3, N2, e3));
      return {c() {
        e2 = main2.e("header"), s3 = main2.e("div"), l2 = main2.e("a"), u2 = main2.e("picture"), d2 = main2.e("source"), g2 = main2.a(), p2 = main2.e("source"), h2 = main2.a(), w2 = main2.e("img"), z2 = main2.a(), k2 = main2.e("button"), T2 = main2.a(), x2 = main2.e("nav"), j2 = main2.e("ul"), E2 = main2.e("li"), E2.innerHTML = '<a class="nav-link block svelte-142d7vf" href="/" rel="home">Etusivu</a>', H2 = main2.a();
        for (let t4 = 0; t4 < O.length; t4 += 1)
          O[t4].c();
        main2.b(d2, "srcset", v2 = t3[0].site.logo[1]), main2.b(d2, "type", "image/webp"), main2.b(p2, "srcset", $2 = t3[0].site.logo[0]), main2.b(p2, "type", "image/jpeg"), w2.src !== (y2 = t3[0].site.logo[0]) && main2.b(w2, "src", y2), main2.b(w2, "alt", b2 = t3[0].site.title), main2.b(u2, "class", "block"), main2.b(l2, "id", "logo"), main2.b(l2, "class", "block bgw svelte-142d7vf"), main2.b(l2, "href", "/"), main2.b(l2, "rel", "home"), main2.b(k2, "id", "menuToggle"), main2.b(k2, "class", "svelte-142d7vf"), main2.b(E2, "class", "nav-item svelte-142d7vf"), main2.b(x2, "id", "menu"), main2.b(x2, "class", "svelte-142d7vf"), main2.b(s3, "class", "grid content mx svelte-142d7vf"), main2.b(e2, "class", "block w100 bgw svelte-142d7vf"), main2.v(e2, "small", t3[2]);
      }, m(t4, a3) {
        main2.c(t4, e2, a3), main2.d(e2, s3), main2.d(s3, l2), main2.d(l2, u2), main2.d(u2, d2), main2.d(u2, g2), main2.d(u2, p2), main2.d(u2, h2), main2.d(u2, w2), main2.d(s3, z2), main2.d(s3, k2), main2.d(s3, T2), main2.d(s3, x2), main2.d(x2, j2), main2.d(j2, E2), main2.d(j2, H2);
        for (let t5 = 0; t5 < O.length; t5 += 1)
          O[t5].m(j2, null);
      }, p(t4, s4) {
        if (1 & s4 && v2 !== (v2 = t4[0].site.logo[1]) && main2.b(d2, "srcset", v2), 1 & s4 && $2 !== ($2 = t4[0].site.logo[0]) && main2.b(p2, "srcset", $2), 1 & s4 && w2.src !== (y2 = t4[0].site.logo[0]) && main2.b(w2, "src", y2), 1 & s4 && b2 !== (b2 = t4[0].site.title) && main2.b(w2, "alt", b2), 1 & s4) {
          let e3;
          for (N2 = t4[0].nav, e3 = 0; e3 < N2.length; e3 += 1) {
            const l3 = B(t4, N2, e3);
            O[e3] ? O[e3].p(l3, s4) : (O[e3] = D(l3), O[e3].c(), O[e3].m(j2, null));
          }
          for (; e3 < O.length; e3 += 1)
            O[e3].d(1);
          O.length = N2.length;
        }
        4 & s4 && main2.v(e2, "small", t4[2]);
      }, d(t4) {
        t4 && main2.f(e2), main2.o(O, t4);
      }};
    }
    function D(t3) {
      let e2, s3, l2, c2, f2, v2 = t3[4].title + "";
      return {c() {
        e2 = main2.e("li"), s3 = main2.e("a"), l2 = main2.t(v2), f2 = main2.a(), main2.b(s3, "class", "nav-link block svelte-142d7vf"), main2.b(s3, "href", c2 = t3[4].path), main2.b(e2, "class", "nav-item svelte-142d7vf");
      }, m(t4, a3) {
        main2.c(t4, e2, a3), main2.d(e2, s3), main2.d(s3, l2), main2.d(e2, f2);
      }, p(t4, e3) {
        1 & e3 && v2 !== (v2 = t4[4].title + "") && main2.j(l2, v2), 1 & e3 && c2 !== (c2 = t4[4].path) && main2.b(s3, "href", c2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function F(t3) {
      let e2, s3, a3, n2, i3 = false, c2 = () => {
        i3 = false;
      };
      main2.q(t3[3]);
      let r2 = t3[0] && t3[0].nav && C(t3);
      return {c() {
        r2 && r2.c(), s3 = main2.m();
      }, m(l2, u2) {
        r2 && r2.m(l2, u2), main2.c(l2, s3, u2), a3 || (n2 = main2.l(window, "scroll", () => {
          i3 = true, clearTimeout(e2), e2 = setTimeout(c2, 100), t3[3]();
        }), a3 = true);
      }, p(t4, [l2]) {
        2 & l2 && !i3 && (i3 = true, clearTimeout(e2), scrollTo(window.pageXOffset, t4[1]), e2 = setTimeout(c2, 100)), t4[0] && t4[0].nav ? r2 ? r2.p(t4, l2) : (r2 = C(t4), r2.c(), r2.m(s3.parentNode, s3)) : r2 && (r2.d(1), r2 = null);
      }, i: main2.n, o: main2.n, d(t4) {
        r2 && r2.d(t4), t4 && main2.f(s3), a3 = false, n2();
      }};
    }
    function G(t3, e2, s3) {
      let l2, a3, {data: n2} = e2;
      return t3.$$set = (t4) => {
        "data" in t4 && s3(0, n2 = t4.data);
      }, t3.$$.update = () => {
        2 & t3.$$.dirty && s3(2, a3 = l2 > 100 || "");
      }, [n2, l2, a3, function() {
        s3(1, l2 = window.pageYOffset);
      }];
    }
    class L extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, G, F, main2.s, {data: 0});
      }
    }
    function M(t3) {
      let e2, s3, l2, c2, u2, d2, f2, v2, g2;
      function p2(t4, e3) {
        return t4[0].cat ? X : S;
      }
      e2 = new L({props: {data: t3[1]}});
      let k2 = p2(t3), T2 = k2(t3);
      const x2 = t3[4].default, E2 = main2.F(x2, t3, t3[3], null);
      return {c() {
        main2.x(e2.$$.fragment), s3 = main2.a(), l2 = main2.e("main"), c2 = main2.e("div"), T2.c(), u2 = main2.a(), d2 = main2.e("div"), f2 = main2.e("div"), E2 && E2.c(), main2.b(c2, "id", "hero"), main2.b(c2, "class", "grid tw up tc svelte-8lzwz0"), main2.b(f2, "class", "container mx svelte-8lzwz0"), main2.b(d2, "id", "content"), main2.b(d2, "class", "bgw py"), main2.b(l2, "class", "block svelte-8lzwz0"), main2.b(l2, "style", v2 = "background-image:url(" + t3[1].site.hero[0] + ")");
      }, m(t4, a3) {
        main2.y(e2, t4, a3), main2.c(t4, s3, a3), main2.c(t4, l2, a3), main2.d(l2, c2), T2.m(c2, null), main2.d(l2, u2), main2.d(l2, d2), main2.d(d2, f2), E2 && E2.m(f2, null), g2 = true;
      }, p(t4, s4) {
        const a3 = {};
        2 & s4 && (a3.data = t4[1]), e2.$set(a3), k2 === (k2 = p2(t4)) && T2 ? T2.p(t4, s4) : (T2.d(1), T2 = k2(t4), T2 && (T2.c(), T2.m(c2, null))), E2 && E2.p && 8 & s4 && main2.z(E2, x2, t4, t4[3], s4, null, null), (!g2 || 2 & s4 && v2 !== (v2 = "background-image:url(" + t4[1].site.hero[0] + ")")) && main2.b(l2, "style", v2);
      }, i(t4) {
        g2 || (main2.A(e2.$$.fragment, t4), main2.A(E2, t4), g2 = true);
      }, o(t4) {
        main2.B(e2.$$.fragment, t4), main2.B(E2, t4), g2 = false;
      }, d(t4) {
        main2.C(e2, t4), t4 && main2.f(s3), t4 && main2.f(l2), T2.d(), E2 && E2.d(t4);
      }};
    }
    function S(t3) {
      let e2, s3, l2, c2, f2, v2, g2 = t3[1].site.title + "", p2 = t3[1].site.slogan + "";
      return {c() {
        e2 = main2.e("div"), s3 = main2.e("h1"), l2 = main2.t(g2), c2 = main2.a(), f2 = main2.e("h3"), v2 = main2.t(p2), main2.b(s3, "class", "svelte-8lzwz0"), main2.b(f2, "class", "svelte-8lzwz0");
      }, m(t4, a3) {
        main2.c(t4, e2, a3), main2.d(e2, s3), main2.d(s3, l2), main2.d(e2, c2), main2.d(e2, f2), main2.d(f2, v2);
      }, p(t4, e3) {
        2 & e3 && g2 !== (g2 = t4[1].site.title + "") && main2.j(l2, g2), 2 & e3 && p2 !== (p2 = t4[1].site.slogan + "") && main2.j(v2, p2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function X(t3) {
      let e2, s3, l2 = t3[2].title + "";
      return {c() {
        e2 = main2.e("h1"), s3 = main2.t(l2), main2.b(e2, "class", "svelte-8lzwz0");
      }, m(t4, l3) {
        main2.c(t4, e2, l3), main2.d(e2, s3);
      }, p(t4, e3) {
        4 & e3 && l2 !== (l2 = t4[2].title + "") && main2.j(s3, l2);
      }, d(t4) {
        t4 && main2.f(e2);
      }};
    }
    function Y(t3) {
      let e2, s3, l2 = t3[1] && t3[1].site && M(t3);
      return {c() {
        l2 && l2.c(), e2 = main2.m();
      }, m(t4, a3) {
        l2 && l2.m(t4, a3), main2.c(t4, e2, a3), s3 = true;
      }, p(t4, [s4]) {
        t4[1] && t4[1].site ? l2 ? (l2.p(t4, s4), 2 & s4 && main2.A(l2, 1)) : (l2 = M(t4), l2.c(), main2.A(l2, 1), l2.m(e2.parentNode, e2)) : l2 && (main2.G(), main2.B(l2, 1, 1, () => {
          l2 = null;
        }), main2.D());
      }, i(t4) {
        s3 || (main2.A(l2), s3 = true);
      }, o(t4) {
        main2.B(l2), s3 = false;
      }, d(t4) {
        l2 && l2.d(t4), t4 && main2.f(e2);
      }};
    }
    function I(t3, e2, s3) {
      let l2, a3, n2, i3;
      main2.g(t3, i, (t4) => s3(6, l2 = t4)), main2.g(t3, main2.p, (t4) => s3(0, a3 = t4)), main2.g(t3, o, (t4) => s3(1, n2 = t4)), main2.g(t3, t, (t4) => s3(2, i3 = t4));
      let {$$slots: c2 = {}, $$scope: o3} = e2;
      return main2.E(async () => {
        const t4 = await fetch(l2);
        o.set(await t4.json());
      }), t3.$$set = (t4) => {
        "$$scope" in t4 && s3(3, o3 = t4.$$scope);
      }, t3.$$.update = () => {
        7 & t3.$$.dirty && a3 && (n2.site || i3.title) && (main2.H.title = a3.cat ? i3.title + " | " + n2.site.title : n2.site.title + " | " + n2.site.slogan, (t.summary || n2.site.summary) && (main2.H.summary = i3.summary ? i3.summary : n2.site.summary));
      }, [a3, n2, i3, o3, c2];
    }
    class layout_e18f467f_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, I, Y, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => V,
      B: () => Z,
      C: () => ot,
      D: () => Q,
      E: () => I,
      F: () => u,
      G: () => G,
      H: () => Kt,
      S: () => st,
      a: () => b,
      b: () => x,
      c: () => h,
      d: () => d,
      e: () => y,
      f: () => m,
      g: () => l,
      h: () => k,
      i: () => rt,
      j: () => P,
      k: () => v,
      l: () => _,
      m: () => w,
      n: () => t2,
      o: () => g,
      p: () => Ut,
      q: () => U,
      r: () => bt,
      s: () => i2,
      t: () => $,
      u: () => Ht,
      v: () => j,
      w: () => wt,
      x: () => et,
      y: () => nt,
      z: () => f
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
    function i2(t3, e2) {
      return t3 != t3 ? e2 == e2 : t3 !== e2 || t3 && typeof t3 == "object" || typeof t3 == "function";
    }
    function a2(e2, ...n2) {
      if (e2 == null)
        return t2;
      const o3 = e2.subscribe(...n2);
      return o3.unsubscribe ? () => o3.unsubscribe() : o3;
    }
    function c(t3) {
      let e2;
      return a2(t3, (t4) => e2 = t4)(), e2;
    }
    function l(t3, e2, n2) {
      t3.$$.on_destroy.push(a2(e2, n2));
    }
    function u(t3, e2, n2, o3) {
      if (t3) {
        const r2 = p(t3, e2, n2, o3);
        return t3[0](r2);
      }
    }
    function p(t3, n2, o3, r2) {
      return t3[1] && r2 ? e(o3.ctx.slice(), t3[1](r2(n2))) : o3.ctx;
    }
    function f(t3, e2, n2, o3, r2, s3, i3) {
      const a3 = function(t4, e3, n3, o4) {
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
      if (a3) {
        const r3 = p(e2, n2, o3, i3);
        t3.p(r3, a3);
      }
    }
    function d(t3, e2) {
      t3.appendChild(e2);
    }
    function h(t3, e2, n2) {
      t3.insertBefore(e2, n2 || null);
    }
    function m(t3) {
      t3.parentNode.removeChild(t3);
    }
    function g(t3, e2) {
      for (let n2 = 0; n2 < t3.length; n2 += 1)
        t3[n2] && t3[n2].d(e2);
    }
    function y(t3) {
      return document.createElement(t3);
    }
    function $(t3) {
      return document.createTextNode(t3);
    }
    function b() {
      return $(" ");
    }
    function w() {
      return $("");
    }
    function _(t3, e2, n2, o3) {
      return t3.addEventListener(e2, n2, o3), () => t3.removeEventListener(e2, n2, o3);
    }
    function x(t3, e2, n2) {
      n2 == null ? t3.removeAttribute(e2) : t3.getAttribute(e2) !== n2 && t3.setAttribute(e2, n2);
    }
    function v(t3) {
      return t3 === "" ? null : +t3;
    }
    function P(t3, e2) {
      e2 = "" + e2, t3.wholeText !== e2 && (t3.data = e2);
    }
    function k(t3, e2) {
      t3.value = e2 == null ? "" : e2;
    }
    function j(t3, e2, n2) {
      t3.classList[n2 ? "add" : "remove"](e2);
    }
    let O;
    function E(t3) {
      O = t3;
    }
    function L() {
      if (!O)
        throw new Error("Function called outside component initialization");
      return O;
    }
    function I(t3) {
      L().$$.on_mount.push(t3);
    }
    function S(t3, e2) {
      L().$$.context.set(t3, e2);
    }
    function R(t3) {
      return L().$$.context.get(t3);
    }
    const F = [];
    const N = [];
    const T = [];
    const A = [];
    const M = Promise.resolve();
    let C = false;
    function q() {
      C || (C = true, M.then(K));
    }
    function B() {
      return q(), M;
    }
    function U(t3) {
      T.push(t3);
    }
    let H = false;
    const D = new Set();
    function K() {
      if (!H) {
        H = true;
        do {
          for (let t3 = 0; t3 < F.length; t3 += 1) {
            const e2 = F[t3];
            E(e2), z(e2.$$);
          }
          for (E(null), F.length = 0; N.length; )
            N.pop()();
          for (let t3 = 0; t3 < T.length; t3 += 1) {
            const e2 = T[t3];
            D.has(e2) || (D.add(e2), e2());
          }
          T.length = 0;
        } while (F.length);
        for (; A.length; )
          A.pop()();
        C = false, H = false, D.clear();
      }
    }
    function z(t3) {
      if (t3.fragment !== null) {
        t3.update(), r(t3.before_update);
        const e2 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e2), t3.after_update.forEach(U);
      }
    }
    const J = new Set();
    let W;
    function G() {
      W = {r: 0, c: [], p: W};
    }
    function Q() {
      W.r || r(W.c), W = W.p;
    }
    function V(t3, e2) {
      t3 && t3.i && (J.delete(t3), t3.i(e2));
    }
    function Z(t3, e2, n2, o3) {
      if (t3 && t3.o) {
        if (J.has(t3))
          return;
        J.add(t3), W.c.push(() => {
          J.delete(t3), o3 && (n2 && t3.d(1), o3());
        }), t3.o(e2);
      }
    }
    function X(t3, e2) {
      t3.d(1), e2.delete(t3.key);
    }
    function Y(t3, e2) {
      Z(t3, 1, 1, () => {
        e2.delete(t3.key);
      });
    }
    function tt(t3, e2, n2, o3, r2, s3, i3, a3, c2, l2, u2, p2) {
      let f2 = t3.length, d2 = s3.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t3[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t4 = p2(r2, s3, h2), a4 = n2(t4);
        let c3 = i3.get(a4);
        c3 ? o3 && c3.p(t4, e2) : (c3 = l2(a4, t4), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t4) {
        V(t4, 1), t4.m(a3, u2), i3.set(t4.key, t4), u2 = t4.first, d2--;
      }
      for (; f2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t3[f2 - 1], o4 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !i3.has(o4) || b2.has(o4) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o4) > $2.get(r3) ? (w2.add(o4), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, i3), f2--);
      }
      for (; f2--; ) {
        const e3 = t3[f2];
        y2.has(e3.key) || c2(e3, i3);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function et(t3) {
      t3 && t3.c();
    }
    function nt(t3, e2, o3) {
      const {fragment: i3, on_mount: a3, on_destroy: c2, after_update: l2} = t3.$$;
      i3 && i3.m(e2, o3), U(() => {
        const e3 = a3.map(n).filter(s2);
        c2 ? c2.push(...e3) : r(e3), t3.$$.on_mount = [];
      }), l2.forEach(U);
    }
    function ot(t3, e2) {
      const n2 = t3.$$;
      n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function rt(e2, n2, s3, i3, a3, c2, l2 = [-1]) {
      const u2 = O;
      E(e2);
      const p2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t2, not_equal: a3, bound: o2(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o2(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (p2.ctx = s3 ? s3(e2, n2.props || {}, (t3, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return p2.ctx && a3(p2.ctx[t3], p2.ctx[t3] = r2) && (!p2.skip_bound && p2.bound[t3] && p2.bound[t3](r2), f2 && function(t4, e3) {
          t4.$$.dirty[0] === -1 && (F.push(t4), q(), t4.$$.dirty.fill(0)), t4.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t3)), n3;
      }) : [], p2.update(), f2 = true, r(p2.before_update), p2.fragment = !!i3 && i3(p2.ctx), n2.target) {
        if (n2.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n2.target);
          p2.fragment && p2.fragment.l(t3), t3.forEach(m);
        } else
          p2.fragment && p2.fragment.c();
        n2.intro && V(e2.$$.fragment), nt(e2, n2.target, n2.anchor), K();
      }
      E(u2);
    }
    class st {
      $destroy() {
        ot(this, 1), this.$destroy = t2;
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
    var it = {queryHandler: {parse: (t3) => {
      return e2 = new URLSearchParams(t3), [...e2].reduce((t4, [e3, n2]) => (t4[e3] = n2, t4), {});
      var e2;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const at = RegExp(/\:([^/()]+)/g);
    function ct(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      lt(t3), function() {
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
    function lt(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", lt(t3.parentElement));
    }
    const ut = (t3) => {
      const e2 = [];
      let n2;
      for (; n2 = at.exec(t3); )
        e2.push(n2[1]);
      return e2;
    };
    function pt(t3, e2) {
      pt._console = pt._console || {log: console.log, warn: console.warn};
      const {_console: n2} = pt, o3 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e3) => {
          r2.includes(e3[0]) || n2[t4](...e3);
        }, e2().then(() => {
          console[t4] = n2[t4];
        });
    }
    function ft() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n2} = function(t4) {
        const [e3, n3] = t4.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e3, options: o3};
      }(t3);
      return {...dt(e2), options: n2};
    }
    function dt(t3) {
      it.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const e2 = t3.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t3, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function ht(t3, e2, n2) {
      const o3 = it.useHash ? "#" : "";
      let r2;
      return r2 = function(t4, e3, n3) {
        const o4 = Object.assign({}, n3, e3), r3 = function(t5, e4) {
          if (!it.queryHandler)
            return "";
          const n4 = ut(t5), o5 = {};
          e4 && Object.entries(e4).forEach(([t6, e5]) => {
            n4.includes(t6) || (o5[t6] = e5);
          });
          return it.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t4, e3);
        for (const [e4, n4] of Object.entries(o4))
          t4 = t4.replace(`:${e4}`, n4);
        return `${t4}${r3}`;
      }(t3, e2, n2), r2 = it.urlTransform.apply(r2), r2 = o3 + r2, r2;
    }
    function mt(t3) {
      let e2;
      const n2 = t3[2].default, o3 = u(n2, t3, t3[1], null);
      return {c() {
        o3 && o3.c();
      }, m(t4, n3) {
        o3 && o3.m(t4, n3), e2 = true;
      }, p(t4, [e3]) {
        o3 && o3.p && 2 & e3 && f(o3, n2, t4, t4[1], e3, null, null);
      }, i(t4) {
        e2 || (V(o3, t4), e2 = true);
      }, o(t4) {
        Z(o3, t4), e2 = false;
      }, d(t4) {
        o3 && o3.d(t4);
      }};
    }
    function gt(t3, e2, n2) {
      let {$$slots: o3 = {}, $$scope: r2} = e2, {scoped: s3 = {}} = e2;
      return t3.$$set = (t4) => {
        "scoped" in t4 && n2(0, s3 = t4.scoped), "$$scope" in t4 && n2(1, r2 = t4.$$scope);
      }, [s3, r2, o3];
    }
    class yt extends st {
      constructor(t3) {
        super(), rt(this, t3, gt, mt, i2, {scoped: 0});
      }
    }
    const $t = [];
    function bt(t3, e2) {
      return {subscribe: wt(t3, e2).subscribe};
    }
    function wt(e2, n2 = t2) {
      let o3;
      const r2 = [];
      function s3(t3) {
        if (i2(e2, t3) && (e2 = t3, o3)) {
          const t4 = !$t.length;
          for (let t5 = 0; t5 < r2.length; t5 += 1) {
            const n3 = r2[t5];
            n3[1](), $t.push(n3, e2);
          }
          if (t4) {
            for (let t5 = 0; t5 < $t.length; t5 += 2)
              $t[t5][0]($t[t5 + 1]);
            $t.length = 0;
          }
        }
      }
      return {set: s3, update: function(t3) {
        s3(t3(e2));
      }, subscribe: function(i3, a3 = t2) {
        const c2 = [i3, a3];
        return r2.push(c2), r2.length === 1 && (o3 = n2(s3) || t2), i3(e2), () => {
          const t3 = r2.indexOf(c2);
          t3 !== -1 && r2.splice(t3, 1), r2.length === 0 && (o3(), o3 = null);
        };
      }};
    }
    function _t(e2, n2, o3) {
      const i3 = !Array.isArray(e2), c2 = i3 ? [e2] : e2, l2 = n2.length < 2;
      return bt(o3, (e3) => {
        let o4 = false;
        const u2 = [];
        let p2 = 0, f2 = t2;
        const d2 = () => {
          if (p2)
            return;
          f2();
          const o5 = n2(i3 ? u2[0] : u2, e3);
          l2 ? e3(o5) : f2 = s2(o5) ? o5 : t2;
        }, h2 = c2.map((t3, e4) => a2(t3, (t4) => {
          u2[e4] = t4, p2 &= ~(1 << e4), o4 && d2();
        }, () => {
          p2 |= 1 << e4;
        }));
        return o4 = true, d2(), function() {
          r(h2), f2();
        };
      });
    }
    window.routify = window.routify || {};
    const xt = wt(null);
    const vt = wt([]);
    vt.subscribe((t3) => window.routify.routes = t3);
    let Pt = wt({component: {params: {}}});
    const kt = wt(null);
    const jt = wt(true);
    function Ot(t3, e2 = false) {
      t3 = it.urlTransform.remove(t3);
      let {pathname: n2, search: o3} = dt(t3).url;
      const r2 = c(vt), s3 = r2.find((t4) => n2 === t4.meta.name) || r2.find((t4) => n2.match(t4.regex));
      if (!s3)
        throw new Error(`Route could not be found for "${n2}".`);
      const i3 = e2 ? Object.create(s3) : s3, {route: a3, redirectPath: l2, rewritePath: u2} = Et(i3, r2);
      return u2 && ({pathname: n2, search: o3} = dt(ht(u2, a3.params)).url, l2 && (a3.redirectTo = ht(l2, a3.params || {}))), it.queryHandler && (a3.params = Object.assign({}, a3.params, it.queryHandler.parse(o3))), function(t4, e3) {
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
      }(a3, n2), a3.leftover = t3.replace(new RegExp(a3.regex), ""), a3;
    }
    function Et(t3, e2, n2, o3) {
      const {redirect: r2, rewrite: s3} = t3.meta;
      if (r2 || s3) {
        n2 = r2 ? r2.path || r2 : n2, o3 = s3 ? s3.path || s3 : n2;
        const i3 = r2 && r2.params, a3 = s3 && s3.params, c2 = e2.find((t4) => t4.path === o3);
        return c2 === t3 && console.error(`${o3} is redirecting to itself`), c2 || console.error(`${t3.path} is redirecting to non-existent path: ${o3}`), (i3 || a3) && (c2.params = Object.assign({}, c2.params, i3, a3)), Et(c2, e2, n2, o3);
      }
      return {route: t3, redirectPath: n2, rewritePath: o3};
    }
    function Lt(t3, e2, n2) {
      const o3 = t3.slice();
      return o3[1] = e2[n2], o3;
    }
    function It(t3, e2) {
      let n2, o3;
      return {key: t3, first: null, c() {
        n2 = y("iframe"), n2.src !== (o3 = e2[1].url) && x(n2, "src", o3), x(n2, "frameborder", "0"), x(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t4, e3) {
        h(t4, n2, e3);
      }, p(t4, r2) {
        e2 = t4, 1 & r2 && n2.src !== (o3 = e2[1].url) && x(n2, "src", o3);
      }, d(t4) {
        t4 && m(n2);
      }};
    }
    function St(e2) {
      let n2, o3 = [], r2 = new Map(), s3 = e2[0];
      const i3 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < s3.length; t3 += 1) {
        let n3 = Lt(e2, s3, t3), a3 = i3(n3);
        r2.set(a3, o3[t3] = It(a3, n3));
      }
      return {c() {
        n2 = y("div");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        var t3, e3, r3;
        x(n2, "id", "__routify_iframes"), t3 = "display", e3 = "none", n2.style.setProperty(t3, e3, r3 ? "important" : "");
      }, m(t3, e3) {
        h(t3, n2, e3);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].m(n2, null);
      }, p(t3, [e3]) {
        1 & e3 && (s3 = t3[0], o3 = tt(o3, e3, i3, 1, t3, s3, r2, n2, X, It, null, Lt));
      }, i: t2, o: t2, d(t3) {
        t3 && m(n2);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].d();
      }};
    }
    const Rt = wt([]);
    const Ft = _t(Rt, (t3) => t3.slice(0, 2));
    function Nt(t3) {
      const e2 = t3.data ? t3.data.prefetchId : t3;
      if (!e2)
        return null;
      const n2 = c(Rt).find((t4) => t4 && t4.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t4} = n2.options, o3 = new Promise((e3) => setTimeout(e3, t4)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t4 + 1e3);
        });
        Promise.all([o3, r2]).then(() => {
          Rt.update((t5) => t5.filter((t6) => t6.options.prefetch != e2));
        });
      }
    }
    function Tt(t3, e2, n2) {
      let o3;
      return l(t3, Ft, (t4) => n2(0, o3 = t4)), [o3];
    }
    Ft.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => Nt(t4.prefetch), t4.timeout);
    })), addEventListener("message", Nt, false);
    class At extends st {
      constructor(t3) {
        super(), rt(this, t3, Tt, St, i2, {});
      }
    }
    function Mt() {
      return R("routify") || Pt;
    }
    const Ct = {_hooks: [(t3) => jt.set(false)], subscribe: Bt};
    const qt = {_hooks: [], subscribe: Bt};
    function Bt(t3) {
      const e2 = this._hooks, n2 = e2.length;
      return t3((t4) => {
        e2[n2] = t4;
      }), () => delete e2[n2];
    }
    const Ut = {subscribe: (t3) => _t(Mt(), (t4) => t4.route.params).subscribe(t3)};
    const Ht = {subscribe: (t3) => _t([Mt(), xt, vt], (t4) => function(t5, e2, n2) {
      return function(o3, r2 = {}, s3) {
        const {component: i3} = t5, a3 = Object.assign({}, e2.params, i3.params);
        let c2 = o3 && o3.nodeType && o3;
        c2 && (o3 = o3.getAttribute("href")), o3 = o3 ? p2(o3) : i3.shortPath;
        const l2 = n2.find((t6) => [t6.shortPath || "/", t6.path].includes(o3));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t6);
        }
        s3 && s3.strict !== false || (o3 = o3.replace(/index$/, ""));
        let u2 = ht(o3, r2, a3);
        return c2 ? (c2.href = u2, {update(t6) {
          c2.href = ht(o3, t6, a3);
        }}) : u2;
        function p2(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e3, n3] = t6.match(/^([\.\/]+)(.*)/), o4 = i3.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            i3.isPage && r3.push(null), r3.forEach(() => o4 = o4.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o4}/${n3}`.replace(/\/$/, "")) || "/";
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
    const Dt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e2) => [t3, (Dt.getLongest(Dt.templates, t3) || ((t4) => t4))(e2)]}, {name: "createMeta", condition: () => true, action(t3, e2) {
      Dt.writeMeta(t3, e2);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e2) {
      Dt.writeMeta(`og:${t3}`, e2);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e2) {
      document.title = e2;
    }}], getLongest(t3, e2) {
      const n2 = t3[e2];
      if (n2) {
        const o3 = c(xt).path;
        return n2[Object.keys(t3[e2]).filter((t4) => o3.includes(t4)).sort((t4, e3) => e3.length - t4.length)[0]];
      }
    }, writeMeta(t3, e2) {
      const n2 = document.getElementsByTagName("head")[0], o3 = t3.match(/(.+)\:/), r2 = o3 && o3[1] || "plain", {propField: s3, valueField: i3} = Kt.services[r2] || Kt.services.plain, a3 = document.querySelector(`meta[${s3}='${t3}']`);
      a3 && a3.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s3, t3), c2.setAttribute(i3, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t3, e2) {
      Dt.plugins.forEach((n2) => {
        n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e2) {
      const n2 = Dt.getOrigin();
      Dt.templates[t3] = Dt.templates[t3] || {}, Dt.templates[t3][n2] = e2;
    }, update() {
      Object.keys(Dt.props).forEach((t3) => {
        let e2 = Dt.getLongest(Dt.props, t3);
        Dt.plugins.forEach((n2) => {
          n2.condition(t3, e2) && ([t3, e2] = n2.action(t3, e2) || [t3, e2]);
        });
      });
    }, batchedUpdate() {
      Dt._pendingUpdate || (Dt._pendingUpdate = true, setTimeout(() => {
        Dt._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = Mt();
      return t3 && c(t3).path || "/";
    }, _pendingUpdate: false};
    const Kt = new Proxy(Dt, {set(t3, e2, n2, o3) {
      const {props: r2, getOrigin: s3} = t3;
      return Reflect.has(t3, e2) ? Reflect.set(t3, e2, n2, o3) : (r2[e2] = r2[e2] || {}, r2[e2][s3()] = n2), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function zt(t3, e2, n2) {
      const o3 = t3.slice();
      return o3[18] = e2[n2].component, o3[19] = e2[n2].componentFile, o3[2] = e2[n2].decorator, o3[1] = e2[n2].nodes, o3;
    }
    function Jt(t3) {
      let e2, n2, o3 = [], r2 = new Map(), s3 = [t3[4]];
      const i3 = (t4) => function({meta: t5, path: e3, param: n3, params: o4}) {
        return JSON.stringify({path: e3, param: (t5["param-is-page"] || t5["slug-is-page"]) && n3, queryParams: t5["query-params-is-page"] && o4});
      }(t4[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = zt(t3, s3, e3), a3 = i3(n3);
        r2.set(a3, o3[e3] = Vt(a3, n3));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o3[t4].c();
        e2 = w();
      }, m(t4, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].m(t4, r3);
        h(t4, e2, r3), n2 = true;
      }, p(t4, n3) {
        4194365 & n3 && (s3 = [t4[4]], G(), o3 = tt(o3, n3, i3, 1, t4, s3, r2, e2.parentNode, Y, Vt, e2, zt), Q());
      }, i(t4) {
        if (!n2) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            V(o3[t5]);
          n2 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          Z(o3[t5]);
        n2 = false;
      }, d(t4) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].d(t4);
        t4 && m(e2);
      }};
    }
    function Wt(t3) {
      let e2, n2;
      return e2 = new Yt({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        et(e2.$$.fragment);
      }, m(t4, o3) {
        nt(e2, t4, o3), n2 = true;
      }, p(t4, n3) {
        const o3 = {};
        4 & n3 && (o3.decorator = t4[2]), 16 & n3 && (o3.nodes = [...t4[1]]), 4194305 & n3 && (o3.scoped = {...t4[0], ...t4[22]}), e2.$set(o3);
      }, i(t4) {
        n2 || (V(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        Z(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ot(e2, t4);
      }};
    }
    function Gt(t3) {
      let e2, n2, o3 = t3[18] && t3[1].length && Wt(t3);
      return {c() {
        o3 && o3.c(), e2 = w();
      }, m(t4, r2) {
        o3 && o3.m(t4, r2), h(t4, e2, r2), n2 = true;
      }, p(t4, n3) {
        t4[18] && t4[1].length ? o3 ? (o3.p(t4, n3), 16 & n3 && V(o3, 1)) : (o3 = Wt(t4), o3.c(), V(o3, 1), o3.m(e2.parentNode, e2)) : o3 && (G(), Z(o3, 1, 1, () => {
          o3 = null;
        }), Q());
      }, i(t4) {
        n2 || (V(o3), n2 = true);
      }, o(t4) {
        Z(o3), n2 = false;
      }, d(t4) {
        o3 && o3.d(t4), t4 && m(e2);
      }};
    }
    function Qt(t3) {
      let n2, o3, r2;
      const s3 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var i3 = t3[19];
      function a3(t4) {
        let n3 = {$$slots: {default: [Gt, ({scoped: t5, decorator: e2}) => ({22: t5, 2: e2}), ({scoped: t5, decorator: e2}) => (t5 ? 4194304 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < s3.length; t5 += 1)
          n3 = e(n3, s3[t5]);
        return {props: n3};
      }
      return i3 && (n2 = new i3(a3(t3))), {c() {
        n2 && et(n2.$$.fragment), o3 = b();
      }, m(t4, e2) {
        n2 && nt(n2, t4, e2), h(t4, o3, e2), r2 = true;
      }, p(t4, e2) {
        const r3 = 41 & e2 ? function(t5, e3) {
          const n3 = {}, o4 = {}, r4 = {$$scope: 1};
          let s4 = t5.length;
          for (; s4--; ) {
            const i4 = t5[s4], a4 = e3[s4];
            if (a4) {
              for (const t6 in i4)
                t6 in a4 || (o4[t6] = 1);
              for (const t6 in a4)
                r4[t6] || (n3[t6] = a4[t6], r4[t6] = 1);
              t5[s4] = a4;
            } else
              for (const t6 in i4)
                r4[t6] = 1;
          }
          for (const t6 in o4)
            t6 in n3 || (n3[t6] = void 0);
          return n3;
        }(s3, [1 & e2 && {scoped: t4[0]}, 32 & e2 && {scopedSync: t4[5]}, 8 & e2 && (c2 = t4[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & e2 && (r3.$$scope = {dirty: e2, ctx: t4}), i3 !== (i3 = t4[19])) {
          if (n2) {
            G();
            const t5 = n2;
            Z(t5.$$.fragment, 1, 0, () => {
              ot(t5, 1);
            }), Q();
          }
          i3 ? (n2 = new i3(a3(t4)), et(n2.$$.fragment), V(n2.$$.fragment, 1), nt(n2, o3.parentNode, o3)) : n2 = null;
        } else
          i3 && n2.$set(r3);
      }, i(t4) {
        r2 || (n2 && V(n2.$$.fragment, t4), r2 = true);
      }, o(t4) {
        n2 && Z(n2.$$.fragment, t4), r2 = false;
      }, d(t4) {
        n2 && ot(n2, t4), t4 && m(o3);
      }};
    }
    function Vt(t3, e2) {
      let n2, o3, r2, s3;
      var i3 = e2[2];
      function a3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [Qt]}, $$scope: {ctx: t4}}};
      }
      return i3 && (o3 = new i3(a3(e2))), {key: t3, first: null, c() {
        n2 = w(), o3 && et(o3.$$.fragment), r2 = w(), this.first = n2;
      }, m(t4, e3) {
        h(t4, n2, e3), o3 && nt(o3, t4, e3), h(t4, r2, e3), s3 = true;
      }, p(t4, n3) {
        e2 = t4;
        const s4 = {};
        if (1 & n3 && (s4.scoped = e2[0]), 8388669 & n3 && (s4.$$scope = {dirty: n3, ctx: e2}), i3 !== (i3 = e2[2])) {
          if (o3) {
            G();
            const t5 = o3;
            Z(t5.$$.fragment, 1, 0, () => {
              ot(t5, 1);
            }), Q();
          }
          i3 ? (o3 = new i3(a3(e2)), et(o3.$$.fragment), V(o3.$$.fragment, 1), nt(o3, r2.parentNode, r2)) : o3 = null;
        } else
          i3 && o3.$set(s4);
      }, i(t4) {
        s3 || (o3 && V(o3.$$.fragment, t4), s3 = true);
      }, o(t4) {
        o3 && Z(o3.$$.fragment, t4), s3 = false;
      }, d(t4) {
        t4 && m(n2), t4 && m(r2), o3 && ot(o3, t4);
      }};
    }
    function Zt(e2) {
      let n2, o3, r2, i3, a3, c2 = e2[4] && Jt(e2);
      return {c() {
        c2 && c2.c(), n2 = b(), o3 = y("span");
      }, m(l2, u2) {
        var p2;
        c2 && c2.m(l2, u2), h(l2, n2, u2), h(l2, o3, u2), r2 = true, i3 || (p2 = e2[8].call(null, o3), a3 = p2 && s2(p2.destroy) ? p2.destroy : t2, i3 = true);
      }, p(t3, [e3]) {
        t3[4] ? c2 ? (c2.p(t3, e3), 16 & e3 && V(c2, 1)) : (c2 = Jt(t3), c2.c(), V(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (G(), Z(c2, 1, 1, () => {
          c2 = null;
        }), Q());
      }, i(t3) {
        r2 || (V(c2), r2 = true);
      }, o(t3) {
        Z(c2), r2 = false;
      }, d(t3) {
        c2 && c2.d(t3), t3 && m(n2), t3 && m(o3), i3 = false, a3();
      }};
    }
    function Xt(t3, e2, n2) {
      let o3, r2, s3, i3;
      l(t3, xt, (t4) => n2(14, s3 = t4));
      let a3, {nodes: c2 = []} = e2, {scoped: u2 = {}} = e2, {isRoot: p2 = false} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = wt(null);
      l(t3, g2, (t4) => n2(4, i3 = t4));
      const y2 = R("routify");
      l(t3, y2, (t4) => n2(10, r2 = t4));
      function $2(t4) {
        n2(5, m2 = {...u2}), h2.length === 0 && async function() {
          await B(), ct(a3);
          const t5 = i3.component.path === s3.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e4, afterPageLoad: n3}) {
            const {path: o4} = t6, {options: r3} = ft(), s4 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t6.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o4, prefetchId: s4}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i3.component, metatags: Kt, afterPageLoad: Ct});
        }();
        const e3 = {nodes: h2, decorator: f2 || yt, layout: d2.isLayout ? d2 : o3 && o3.layout, component: d2, route: s3, componentFile: t4, parentNode: a3 || o3 && o3.parentNode};
        g2.set(e3), p2 && Pt.set(e3);
      }
      return S("routify", g2), t3.$$set = (t4) => {
        "nodes" in t4 && n2(1, c2 = t4.nodes), "scoped" in t4 && n2(0, u2 = t4.scoped), "isRoot" in t4 && n2(9, p2 = t4.isRoot), "decorator" in t4 && n2(2, f2 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o3 = r2), 2 & t3.$$.dirty && n2(3, [d2, ...h2] = c2, d2), 8 & t3.$$.dirty && function(t4) {
          let e3 = t4.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t3.$$.dirty && i3 && pt(i3, B);
      }, [u2, c2, f2, d2, i3, m2, g2, y2, (t4) => a3 = t4.parentNode, p2, r2];
    }
    class Yt extends st {
      constructor(t3) {
        super(), rt(this, t3, Xt, Zt, i2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function te(t3, e2) {
      let n2 = false;
      function o3(o4, r3) {
        const s3 = Ot(o4 || ft().fullpath);
        s3.redirectTo && (history.replaceStateNative({}, null, s3.redirectTo), delete s3.redirectTo);
        const i3 = [...(r3 && Ot(ft().fullpath, t3) || s3).layouts, s3];
        n2 && delete n2.last, s3.last = n2, n2 = s3, o4 || kt.set(s3), xt.set(s3), s3.api.preload().then(() => {
          jt.set(true), e2(i3);
        });
      }
      const r2 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e4 = {}, n4, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s3, params: i3} = c(xt);
            e4 = {id: r3, path: s3, params: i3, ...e4};
            const a3 = new Event(t5.toLowerCase());
            Object.assign(a3, {state: e4, title: n4, url: o4});
            return await ne(a3, o4) ? (history[t5 + "Native"].apply(this, [e4, n4, o4]), dispatchEvent(a3)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: ee, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n4) => {
          e3 ? e3 = false : await ne(n4, ft().fullpath) ? t4() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n3).forEach((t5) => removeEventListener(...t5));
        };
      }(o3);
      return {updatePage: o3, destroy: r2};
    }
    function ee(t3) {
      const e2 = t3.target.closest("a"), n2 = e2 && e2.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o3 = new URL(n2), r2 = o3.pathname + o3.search + o3.hash;
      t3.preventDefault(), history.pushState({}, "", r2);
    }
    async function ne(t3, e2) {
      const n2 = Ot(e2).api;
      for (const o3 of qt._hooks.filter(Boolean)) {
        if (!await o3(t3, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function oe(t3) {
      let e2, n2;
      return e2 = new Yt({props: {nodes: t3[0], isRoot: true}}), {c() {
        et(e2.$$.fragment);
      }, m(t4, o3) {
        nt(e2, t4, o3), n2 = true;
      }, p(t4, n3) {
        const o3 = {};
        1 & n3 && (o3.nodes = t4[0]), e2.$set(o3);
      }, i(t4) {
        n2 || (V(e2.$$.fragment, t4), n2 = true);
      }, o(t4) {
        Z(e2.$$.fragment, t4), n2 = false;
      }, d(t4) {
        ot(e2, t4);
      }};
    }
    function re(t3) {
      let e2, n2, o3, r2 = t3[0] && t3[1] !== null && oe(t3);
      return n2 = new At({}), {c() {
        r2 && r2.c(), e2 = b(), et(n2.$$.fragment);
      }, m(t4, s3) {
        r2 && r2.m(t4, s3), h(t4, e2, s3), nt(n2, t4, s3), o3 = true;
      }, p(t4, [n3]) {
        t4[0] && t4[1] !== null ? r2 ? (r2.p(t4, n3), 3 & n3 && V(r2, 1)) : (r2 = oe(t4), r2.c(), V(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (G(), Z(r2, 1, 1, () => {
          r2 = null;
        }), Q());
      }, i(t4) {
        o3 || (V(r2), V(n2.$$.fragment, t4), o3 = true);
      }, o(t4) {
        Z(r2), Z(n2.$$.fragment, t4), o3 = false;
      }, d(t4) {
        r2 && r2.d(t4), t4 && m(e2), ot(n2, t4);
      }};
    }
    function se(t3, e2, n2) {
      let o3;
      l(t3, xt, (t4) => n2(1, o3 = t4));
      let r2, s3, {routes: i3} = e2, {config: a3 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(it, a3);
      S("routifyupdatepage", (...t4) => s3 && s3.updatePage(...t4));
      const c2 = (t4) => n2(0, r2 = t4), u2 = () => {
        s3 && (s3.destroy(), s3 = null);
      };
      let p2 = null;
      var f2;
      return f2 = u2, L().$$.on_destroy.push(f2), t3.$$set = (t4) => {
        "routes" in t4 && n2(2, i3 = t4.routes), "config" in t4 && n2(3, a3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && i3 && (clearTimeout(p2), p2 = setTimeout(() => {
          u2(), s3 = te(i3, c2), vt.set(i3), s3.updatePage();
        }));
      }, [r2, o3, i3, a3];
    }
    class ie extends st {
      constructor(t3) {
        super(), rt(this, t3, se, re, i2, {routes: 2, config: 3});
      }
    }
    function ae(t3) {
      const e2 = async function(e3) {
        return await ce(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return le(t3, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function ce(t3, e2) {
      const n2 = await t3(e2);
      if (n2 === false)
        return false;
      const o3 = n2 || e2.file;
      if (o3.children) {
        const n3 = await Promise.all(o3.children.map(async (n4) => ce(t3, {state: e2.state, scope: ue(e2.scope || {}), parent: e2.file, file: await n4})));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function le(t3, e2) {
      const n2 = t3(e2);
      if (n2 === false)
        return false;
      const o3 = n2 || e2.file;
      if (o3.children) {
        const n3 = o3.children.map((n4) => le(t3, {state: e2.state, scope: ue(e2.scope || {}), parent: e2.file, file: n4}));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function ue(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const pe = ae(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(at, "([^/]+)") + n2}`;
      })(t3.path, t3.isFallback));
    });
    const fe = ae(({file: t3}) => {
      t3.paramKeys = ut(t3.path);
    });
    const de = ae(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const he = ae(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const me = ae(({file: t3}) => {
      const e2 = t3, n2 = t3.meta && t3.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const ge = ae((t3) => {
      const {file: e2} = t3, {isFallback: n2, meta: o3} = e2, r2 = e2.path.match("/:"), s3 = e2.path.endsWith("/index"), i3 = o3.index || o3.index === 0, a3 = o3.index === false;
      e2.isIndexable = i3 || !n2 && !r2 && !s3 && !a3, e2.isNonIndexable = !e2.isIndexable;
    });
    const ye = ae(({file: t3, parent: e2}) => {
      Object.defineProperty(t3, "parent", {get: () => e2}), Object.defineProperty(t3, "nextSibling", {get: () => be(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => be(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => $e(e2)});
    });
    function $e(t3, e2 = []) {
      return t3 && (e2.unshift(t3), $e(t3.parent, e2)), e2;
    }
    function be(t3, e2) {
      if (!t3.root) {
        const n2 = t3.parent.children.filter((t4) => t4.isIndexable), o3 = n2.indexOf(t3);
        return n2[o3 + e2];
      }
    }
    const we = ae(({file: t3, parent: e2}) => {
      t3.isIndex && Object.defineProperty(e2, "index", {get: () => t3});
    });
    const _e = ae(({file: t3, scope: e2}) => {
      function n2(t4) {
        const {parent: e3} = t4, o3 = e3 && e3.component && e3, r2 = o3 && o3.isReset, s3 = e3 && !r2 && n2(e3) || [];
        return o3 && s3.push(o3), s3;
      }
      Object.defineProperty(t3, "layouts", {get: () => n2(t3)});
    });
    const xe = ae(({file: t3}) => {
      const e2 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e2.prototype);
    });
    var ve = Object.freeze({__proto__: null, setRegex: pe, setParamKeys: fe, setShortPath: de, setRank: he, addMetaChildren: me, setIsIndexable: ge, assignRelations: ye, assignIndex: we, assignLayout: _e, createFlatList: (t3) => {
      ae((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e2) => t4.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: xe});
    const Pe = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function ke(t3) {
      return Object.entries(Pe).forEach(([e2, n2]) => {
        t3[e2] === void 0 && (t3[e2] = n2);
      }), t3.children && (t3.children = t3.children.map(ke)), t3;
    }
    const je = ae(({file: t3}) => {
      t3.api = new Oe(t3);
    });
    class Oe {
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
        return Ee(this, 1);
      }
      get prev() {
        return Ee(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Ee(t3, e2) {
      if (!t3.__file.root) {
        const n2 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n2 + e2];
      }
    }
    const Le = {...ve, restoreDefaults: ({tree: t3}) => ke(t3), assignAPI: je};
    const Ie = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_86e855f0())).then((t3) => t3.default)}, {isDir: true, ext: "", children: [{isPage: true, path: "/:cat/:slug", id: "__cat__slug", component: () => Promise.resolve().then(() => __toModule(require_slug_a86aaa04())).then((t3) => t3.default)}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => __toModule(require_index_0fc54e09())).then((t3) => t3.default)}], path: "/:cat"}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_4560130c())).then((t3) => t3.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_e18f467f())).then((t3) => t3.default)};
    const {tree: Se, routes: Re} = function(t3) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t3, routes: []};
      for (let t4 of e2) {
        (Le[t4].sync || Le[t4])(n2);
      }
      return n2;
    }(Ie);
    function Fe(e2) {
      let n2, o3;
      return n2 = new ie({props: {routes: Re}}), {c() {
        et(n2.$$.fragment);
      }, m(t3, e3) {
        nt(n2, t3, e3), o3 = true;
      }, p: t2, i(t3) {
        o3 || (V(n2.$$.fragment, t3), o3 = true);
      }, o(t3) {
        Z(n2.$$.fragment, t3), o3 = false;
      }, d(t3) {
        ot(n2, t3);
      }};
    }
    !function(t3, e2 = {target: document.body}, n2 = "hmr", o3 = "app-loaded") {
      const r2 = document.getElementById(n2), s3 = document.createElement("div");
      function i3() {
        r2 && r2.remove(), s3.style.visibility = null, s3.setAttribute("id", n2);
      }
      s3.style.visibility = "hidden", e2.target.appendChild(s3), r2 ? addEventListener(o3, i3) : i3(), new t3({...e2, target: s3});
    }(class extends st {
      constructor(t3) {
        super(), rt(this, t3, null, Fe, i2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/store-2d749559.js
  const main = __toModule(require_main());
  const i = main.r("http://foodis.dataline.fi/pw/");
  const o = main.w({});
  const t = main.w({});
  require_main();
})();
