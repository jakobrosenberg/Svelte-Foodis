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

  // dist/build/_fallback-7f08fc9f.js
  var require_fallback_7f08fc9f = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_7f08fc9f_default
    });
    const main2 = __toModule(require_main());
    function v(s3) {
      let a3, e2, d2, f2, v2, g2, h, m;
      return {c() {
        a3 = main2.e("div"), e2 = main2.e("div"), e2.textContent = "404", d2 = main2.a(), f2 = main2.e("div"), v2 = main2.t("Page not found. \n  \n  "), g2 = main2.e("a"), h = main2.t("Go back"), main2.b(e2, "class", "huge svelte-33l10e"), main2.b(g2, "href", m = s3[0]("../")), main2.b(f2, "class", "big"), main2.b(a3, "class", "e404 svelte-33l10e");
      }, m(s4, t2) {
        main2.c(s4, a3, t2), main2.d(a3, e2), main2.d(a3, d2), main2.d(a3, f2), main2.d(f2, v2), main2.d(f2, g2), main2.d(g2, h);
      }, p(s4, [a4]) {
        1 & a4 && m !== (m = s4[0]("../")) && main2.b(g2, "href", m);
      }, i: main2.n, o: main2.n, d(s4) {
        s4 && main2.f(a3);
      }};
    }
    function g(s3, a3, e2) {
      let t2;
      return main2.g(s3, main2.u, (s4) => e2(0, t2 = s4)), [t2];
    }
    class fallback_7f08fc9f_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, g, v, main2.s, {});
      }
    }
  });

  // dist/build/[slug]-9884fa52.js
  var require_slug_9884fa52 = __commonJS((exports) => {
    __export(exports, {
      default: () => slug_9884fa52_default
    });
    const main2 = __toModule(require_main());
    function f(t2) {
      let e2, i3, u2, p2, m2, g2, b, f2, v2, j2, $, w, x, H, L, M, T, k, I = t2[0].title + "", N = t2[0].price && y(t2), S = t2[0].body && h(t2);
      return {c() {
        e2 = main2.e("div"), i3 = main2.e("div"), u2 = main2.e("picture"), p2 = main2.e("source"), g2 = main2.a(), b = main2.e("source"), v2 = main2.a(), j2 = main2.e("img"), x = main2.a(), H = main2.e("div"), L = main2.e("h1"), M = main2.t(I), T = main2.a(), N && N.c(), k = main2.a(), S && S.c(), main2.b(p2, "srcset", m2 = t2[0].img[1]), main2.b(p2, "type", "image/webp"), main2.b(b, "srcset", f2 = t2[0].img[0]), main2.b(b, "type", "image/jpeg"), j2.src !== ($ = t2[0].img[0]) && main2.b(j2, "src", $), main2.b(j2, "alt", w = t2[0].title), main2.b(u2, "class", "block"), main2.b(i3, "id", "img"), main2.b(H, "id", "productInfo"), main2.b(e2, "id", "product"), main2.b(e2, "class", "container double grid svelte-1hthv3j");
      }, m(t3, s3) {
        main2.c(t3, e2, s3), main2.d(e2, i3), main2.d(i3, u2), main2.d(u2, p2), main2.d(u2, g2), main2.d(u2, b), main2.d(u2, v2), main2.d(u2, j2), main2.d(e2, x), main2.d(e2, H), main2.d(H, L), main2.d(L, M), main2.d(H, T), N && N.m(H, null), main2.d(H, k), S && S.m(H, null);
      }, p(t3, e3) {
        1 & e3 && m2 !== (m2 = t3[0].img[1]) && main2.b(p2, "srcset", m2), 1 & e3 && f2 !== (f2 = t3[0].img[0]) && main2.b(b, "srcset", f2), 1 & e3 && j2.src !== ($ = t3[0].img[0]) && main2.b(j2, "src", $), 1 & e3 && w !== (w = t3[0].title) && main2.b(j2, "alt", w), 1 & e3 && I !== (I = t3[0].title + "") && main2.h(M, I), t3[0].price ? N ? N.p(t3, e3) : (N = y(t3), N.c(), N.m(H, k)) : N && (N.d(1), N = null), t3[0].body ? S ? S.p(t3, e3) : (S = h(t3), S.c(), S.m(H, null)) : S && (S.d(1), S = null);
      }, d(t3) {
        t3 && main2.f(e2), N && N.d(), S && S.d();
      }};
    }
    function y(t2) {
      let e2, i3, c2, u2 = t2[0].price + "";
      return {c() {
        e2 = main2.e("div"), i3 = main2.t(u2), c2 = main2.t(" \u20AC"), main2.b(e2, "id", "price");
      }, m(t3, s3) {
        main2.c(t3, e2, s3), main2.d(e2, i3), main2.d(e2, c2);
      }, p(t3, e3) {
        1 & e3 && u2 !== (u2 = t3[0].price + "") && main2.h(i3, u2);
      }, d(t3) {
        t3 && main2.f(e2);
      }};
    }
    function h(t2) {
      let e2, i3 = t2[0].body + "";
      return {c() {
        e2 = main2.e("div"), main2.b(e2, "id", "body");
      }, m(t3, s3) {
        main2.c(t3, e2, s3), e2.innerHTML = i3;
      }, p(t3, s3) {
        1 & s3 && i3 !== (i3 = t3[0].body + "") && (e2.innerHTML = i3);
      }, d(t3) {
        t3 && main2.f(e2);
      }};
    }
    function v(t2) {
      let e2, i3 = t2[0] && f(t2);
      return {c() {
        i3 && i3.c(), e2 = main2.j();
      }, m(t3, s3) {
        i3 && i3.m(t3, s3), main2.c(t3, e2, s3);
      }, p(t3, [s3]) {
        t3[0] ? i3 ? i3.p(t3, s3) : (i3 = f(t3), i3.c(), i3.m(e2.parentNode, e2)) : i3 && (i3.d(1), i3 = null);
      }, i: main2.n, o: main2.n, d(t3) {
        i3 && i3.d(t3), t3 && main2.f(e2);
      }};
    }
    function j(t2, e2, i3) {
      let s3, c2, r2;
      return main2.g(t2, i, (t3) => i3(2, s3 = t3)), main2.g(t2, main2.p, (t3) => i3(1, c2 = t3)), t2.$$.update = () => {
        2 & t2.$$.dirty && c2.slug && async function(t3) {
          let e3 = await fetch(s3 + "?path=" + t3);
          i3(0, r2 = await e3.json());
        }(c2.slug);
      }, [r2, c2];
    }
    class slug_9884fa52_default extends main2.S {
      constructor(t2) {
        super(), main2.i(this, t2, j, v, main2.s, {});
      }
    }
  });

  // dist/build/index-7e20247d.js
  var require_index_7e20247d = __commonJS((exports) => {
    __export(exports, {
      default: () => index_7e20247d_default
    });
    const main2 = __toModule(require_main());
    function b(t2, e2, s3) {
      const c2 = t2.slice();
      return c2[4] = e2[s3], c2;
    }
    function j(t2) {
      let e2, s3 = t2[0].items, i3 = [];
      for (let e3 = 0; e3 < s3.length; e3 += 1)
        i3[e3] = y(b(t2, s3, e3));
      return {c() {
        e2 = main2.e("div");
        for (let t3 = 0; t3 < i3.length; t3 += 1)
          i3[t3].c();
        main2.b(e2, "id", "products"), main2.b(e2, "class", "tc grid up bold");
      }, m(t3, s4) {
        main2.c(t3, e2, s4);
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].m(e2, null);
      }, p(t3, c2) {
        if (1 & c2) {
          let a3;
          for (s3 = t3[0].items, a3 = 0; a3 < s3.length; a3 += 1) {
            const r2 = b(t3, s3, a3);
            i3[a3] ? i3[a3].p(r2, c2) : (i3[a3] = y(r2), i3[a3].c(), i3[a3].m(e2, null));
          }
          for (; a3 < i3.length; a3 += 1)
            i3[a3].d(1);
          i3.length = s3.length;
        }
      }, d(t3) {
        t3 && main2.f(e2), main2.k(i3, t3);
      }};
    }
    function y(t2) {
      let e2, s3, m2, u2, d2, f2, g2, h, b2, j2, y2, $2, k2, v, w, x, N, S, q, z, A = t2[4].title + "", B = t2[4].price + "";
      return {c() {
        e2 = main2.e("a"), s3 = main2.e("picture"), m2 = main2.e("source"), d2 = main2.a(), f2 = main2.e("source"), h = main2.a(), b2 = main2.e("img"), $2 = main2.a(), k2 = main2.e("div"), v = main2.t(A), w = main2.a(), x = main2.e("div"), N = main2.t(B), S = main2.t(" \u20AC"), q = main2.a(), main2.b(m2, "srcset", u2 = t2[4].img[1]), main2.b(m2, "type", "image/webp"), main2.b(f2, "srcset", g2 = t2[4].img[0]), main2.b(f2, "type", "image/jpeg"), b2.src !== (j2 = t2[4].img[0]) && main2.b(b2, "src", j2), main2.b(b2, "alt", y2 = t2[4].title), main2.b(s3, "class", "block"), main2.b(k2, "class", "title"), main2.b(x, "class", "price"), main2.b(e2, "class", "block"), main2.b(e2, "href", z = t2[4].path);
      }, m(t3, c2) {
        main2.c(t3, e2, c2), main2.d(e2, s3), main2.d(s3, m2), main2.d(s3, d2), main2.d(s3, f2), main2.d(s3, h), main2.d(s3, b2), main2.d(e2, $2), main2.d(e2, k2), main2.d(k2, v), main2.d(e2, w), main2.d(e2, x), main2.d(x, N), main2.d(x, S), main2.d(e2, q);
      }, p(t3, s4) {
        1 & s4 && u2 !== (u2 = t3[4].img[1]) && main2.b(m2, "srcset", u2), 1 & s4 && g2 !== (g2 = t3[4].img[0]) && main2.b(f2, "srcset", g2), 1 & s4 && b2.src !== (j2 = t3[4].img[0]) && main2.b(b2, "src", j2), 1 & s4 && y2 !== (y2 = t3[4].title) && main2.b(b2, "alt", y2), 1 & s4 && A !== (A = t3[4].title + "") && main2.h(v, A), 1 & s4 && B !== (B = t3[4].price + "") && main2.h(N, B), 1 & s4 && z !== (z = t3[4].path) && main2.b(e2, "href", z);
      }, d(t3) {
        t3 && main2.f(e2);
      }};
    }
    function $(t2) {
      let e2, s3 = t2[0] && j(t2);
      return {c() {
        s3 && s3.c(), e2 = main2.j();
      }, m(t3, c2) {
        s3 && s3.m(t3, c2), main2.c(t3, e2, c2);
      }, p(t3, [c2]) {
        t3[0] ? s3 ? s3.p(t3, c2) : (s3 = j(t3), s3.c(), s3.m(e2.parentNode, e2)) : s3 && (s3.d(1), s3 = null);
      }, i: main2.n, o: main2.n, d(t3) {
        s3 && s3.d(t3), t3 && main2.f(e2);
      }};
    }
    function k(t2, e2, s3) {
      let c2, a3, r2;
      return main2.g(t2, i, (t3) => s3(2, c2 = t3)), main2.g(t2, main2.p, (t3) => s3(1, a3 = t3)), t2.$$.update = () => {
        2 & t2.$$.dirty && a3.cat && async function(t3) {
          let e3 = await fetch(c2 + "?path=" + t3);
          s3(0, r2 = await e3.json());
        }(a3.cat);
      }, [r2, a3];
    }
    class index_7e20247d_default extends main2.S {
      constructor(t2) {
        super(), main2.i(this, t2, k, $, main2.s, {});
      }
    }
  });

  // dist/build/index-b859eee5.js
  var require_index_b859eee5 = __commonJS((exports) => {
    __export(exports, {
      default: () => index_b859eee5_default
    });
    const main2 = __toModule(require_main());
    function d(t2, s3, e2) {
      const c2 = t2.slice();
      return c2[2] = s3[e2], c2;
    }
    function b(t2) {
      let s3, e2, m2, p2, u2, f2, h, d2, b2, k2, j2, v, x, y, w, D, S, q = t2[2].title + "";
      return {c() {
        s3 = main2.e("a"), e2 = main2.e("figure"), m2 = main2.e("picture"), p2 = main2.e("source"), f2 = main2.a(), h = main2.e("source"), b2 = main2.a(), k2 = main2.e("img"), x = main2.a(), y = main2.e("figcaption"), w = main2.t(q), D = main2.a(), main2.b(p2, "srcset", u2 = t2[2].img[1]), main2.b(p2, "type", "image/webp"), main2.b(h, "srcset", d2 = t2[2].img[0]), main2.b(h, "type", "image/jpeg"), k2.src !== (j2 = t2[2].img[0]) && main2.b(k2, "src", j2), main2.b(k2, "alt", v = t2[2].title), main2.b(m2, "class", "block"), main2.b(y, "class", "block"), main2.b(e2, "class", "block"), main2.b(s3, "class", "block"), main2.b(s3, "href", S = t2[2].path);
      }, m(t3, c2) {
        main2.c(t3, s3, c2), main2.d(s3, e2), main2.d(e2, m2), main2.d(m2, p2), main2.d(m2, f2), main2.d(m2, h), main2.d(m2, b2), main2.d(m2, k2), main2.d(e2, x), main2.d(e2, y), main2.d(y, w), main2.d(s3, D);
      }, p(t3, e3) {
        1 & e3 && u2 !== (u2 = t3[2].img[1]) && main2.b(p2, "srcset", u2), 1 & e3 && d2 !== (d2 = t3[2].img[0]) && main2.b(h, "srcset", d2), 1 & e3 && k2.src !== (j2 = t3[2].img[0]) && main2.b(k2, "src", j2), 1 & e3 && v !== (v = t3[2].title) && main2.b(k2, "alt", v), 1 & e3 && q !== (q = t3[2].title + "") && main2.h(w, q), 1 & e3 && S !== (S = t3[2].path) && main2.b(s3, "href", S);
      }, d(t3) {
        t3 && main2.f(s3);
      }};
    }
    function k(t2) {
      let s3, e2 = t2[0].nav, i3 = [];
      for (let s4 = 0; s4 < e2.length; s4 += 1)
        i3[s4] = b(d(t2, e2, s4));
      return {c() {
        s3 = main2.e("div");
        for (let t3 = 0; t3 < i3.length; t3 += 1)
          i3[t3].c();
        main2.b(s3, "id", "products"), main2.b(s3, "class", "tc grid up bold");
      }, m(t3, e3) {
        main2.c(t3, s3, e3);
        for (let t4 = 0; t4 < i3.length; t4 += 1)
          i3[t4].m(s3, null);
      }, p(t3, [c2]) {
        if (1 & c2) {
          let l2;
          for (e2 = t3[0].nav, l2 = 0; l2 < e2.length; l2 += 1) {
            const r2 = d(t3, e2, l2);
            i3[l2] ? i3[l2].p(r2, c2) : (i3[l2] = b(r2), i3[l2].c(), i3[l2].m(s3, null));
          }
          for (; l2 < i3.length; l2 += 1)
            i3[l2].d(1);
          i3.length = e2.length;
        }
      }, i: main2.n, o: main2.n, d(t3) {
        t3 && main2.f(s3), main2.k(i3, t3);
      }};
    }
    function j(t2, s3, e2) {
      let c2;
      return main2.g(t2, o, (t3) => e2(0, c2 = t3)), main2.m.title = c2.site.title + " | " + c2.site.slogan, main2.m.description = "Description coming soon...", [c2];
    }
    class index_b859eee5_default extends main2.S {
      constructor(t2) {
        super(), main2.i(this, t2, j, k, main2.s, {});
      }
    }
  });

  // dist/build/_layout-1be4c2b2.js
  var require_layout_1be4c2b2 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_1be4c2b2_default
    });
    const main2 = __toModule(require_main());
    function T(e2, s3, t2) {
      const l2 = e2.slice();
      return l2[1] = s3[t2], l2;
    }
    function q(e2) {
      let s3, t2, o3, i3, f2, m2, g2, p2, v2, h2, $2, b2, k2, w2, y2, j2, x2, z, N, q2, B2 = e2[0].nav, C2 = [];
      for (let s4 = 0; s4 < B2.length; s4 += 1)
        C2[s4] = A(T(e2, B2, s4));
      return {c() {
        s3 = main2.e("header"), t2 = main2.e("div"), o3 = main2.e("a"), i3 = main2.e("picture"), f2 = main2.e("source"), g2 = main2.a(), p2 = main2.e("source"), h2 = main2.a(), $2 = main2.e("img"), w2 = main2.a(), y2 = main2.e("button"), j2 = main2.a(), x2 = main2.e("nav"), z = main2.e("ul"), N = main2.e("li"), N.innerHTML = '<a class="nav-link block svelte-fursde" href="/" rel="home">Etusivu</a>', q2 = main2.a();
        for (let e3 = 0; e3 < C2.length; e3 += 1)
          C2[e3].c();
        main2.b(f2, "srcset", m2 = e2[0].site.logo[1]), main2.b(f2, "type", "image/webp"), main2.b(p2, "srcset", v2 = e2[0].site.logo[0]), main2.b(p2, "type", "image/jpeg"), $2.src !== (b2 = e2[0].site.logo[0]) && main2.b($2, "src", b2), main2.b($2, "alt", k2 = e2[0].site.title), main2.b(i3, "class", "block"), main2.b(o3, "id", "logo"), main2.b(o3, "class", "block bgw svelte-fursde"), main2.b(o3, "href", "/"), main2.b(o3, "rel", "home"), main2.b(y2, "id", "menuToggle"), main2.b(y2, "class", "svelte-fursde"), main2.b(N, "class", "nav-item svelte-fursde"), main2.b(x2, "id", "menu"), main2.b(x2, "class", "svelte-fursde"), main2.b(t2, "class", "grid content mx svelte-fursde"), main2.b(s3, "class", "block w100 bgw svelte-fursde");
      }, m(e3, l2) {
        main2.c(e3, s3, l2), main2.d(s3, t2), main2.d(t2, o3), main2.d(o3, i3), main2.d(i3, f2), main2.d(i3, g2), main2.d(i3, p2), main2.d(i3, h2), main2.d(i3, $2), main2.d(t2, w2), main2.d(t2, y2), main2.d(t2, j2), main2.d(t2, x2), main2.d(x2, z), main2.d(z, N), main2.d(z, q2);
        for (let e4 = 0; e4 < C2.length; e4 += 1)
          C2[e4].m(z, null);
      }, p(e3, s4) {
        if (1 & s4 && m2 !== (m2 = e3[0].site.logo[1]) && main2.b(f2, "srcset", m2), 1 & s4 && v2 !== (v2 = e3[0].site.logo[0]) && main2.b(p2, "srcset", v2), 1 & s4 && $2.src !== (b2 = e3[0].site.logo[0]) && main2.b($2, "src", b2), 1 & s4 && k2 !== (k2 = e3[0].site.title) && main2.b($2, "alt", k2), 1 & s4) {
          let t3;
          for (B2 = e3[0].nav, t3 = 0; t3 < B2.length; t3 += 1) {
            const l2 = T(e3, B2, t3);
            C2[t3] ? C2[t3].p(l2, s4) : (C2[t3] = A(l2), C2[t3].c(), C2[t3].m(z, null));
          }
          for (; t3 < C2.length; t3 += 1)
            C2[t3].d(1);
          C2.length = B2.length;
        }
      }, d(e3) {
        e3 && main2.f(s3), main2.k(C2, e3);
      }};
    }
    function A(e2) {
      let s3, t2, d2, f2, m2, g2 = e2[1].title + "";
      return {c() {
        s3 = main2.e("li"), t2 = main2.e("a"), d2 = main2.t(g2), m2 = main2.a(), main2.b(t2, "class", "nav-link block svelte-fursde"), main2.b(t2, "href", f2 = e2[1].path), main2.b(s3, "class", "nav-item svelte-fursde");
      }, m(e3, l2) {
        main2.c(e3, s3, l2), main2.d(s3, t2), main2.d(t2, d2), main2.d(s3, m2);
      }, p(e3, s4) {
        1 & s4 && g2 !== (g2 = e3[1].title + "") && main2.h(d2, g2), 1 & s4 && f2 !== (f2 = e3[1].path) && main2.b(t2, "href", f2);
      }, d(e3) {
        e3 && main2.f(s3);
      }};
    }
    function B(e2) {
      let s3, t2 = e2[0] && e2[0].nav && q(e2);
      return {c() {
        t2 && t2.c(), s3 = main2.j();
      }, m(e3, l2) {
        t2 && t2.m(e3, l2), main2.c(e3, s3, l2);
      }, p(e3, [l2]) {
        e3[0] && e3[0].nav ? t2 ? t2.p(e3, l2) : (t2 = q(e3), t2.c(), t2.m(s3.parentNode, s3)) : t2 && (t2.d(1), t2 = null);
      }, i: main2.n, o: main2.n, d(e3) {
        t2 && t2.d(e3), e3 && main2.f(s3);
      }};
    }
    function C(e2, s3, t2) {
      let {data: l2} = s3;
      return e2.$$set = (e3) => {
        "data" in e3 && t2(0, l2 = e3.data);
      }, [l2];
    }
    class E extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, C, B, main2.s, {data: 0});
      }
    }
    function H(e2) {
      let s3, t2, o3, i3, d2, f2;
      s3 = new E({props: {data: e2[0]}});
      const m2 = e2[2].default, k2 = main2.B(m2, e2, e2[1], null);
      return {c() {
        main2.l(s3.$$.fragment), t2 = main2.a(), o3 = main2.e("main"), i3 = main2.e("div"), k2 && k2.c(), main2.b(i3, "id", "content"), main2.b(i3, "class", "bgw"), main2.b(o3, "class", "block svelte-1vlmclz"), main2.b(o3, "style", d2 = "background-image:url(" + e2[0].site.hero[0] + ")");
      }, m(e3, l2) {
        main2.o(s3, e3, l2), main2.c(e3, t2, l2), main2.c(e3, o3, l2), main2.d(o3, i3), k2 && k2.m(i3, null), f2 = true;
      }, p(e3, t3) {
        const l2 = {};
        1 & t3 && (l2.data = e3[0]), s3.$set(l2), k2 && k2.p && 2 & t3 && main2.q(k2, m2, e3, e3[1], t3, null, null), (!f2 || 1 & t3 && d2 !== (d2 = "background-image:url(" + e3[0].site.hero[0] + ")")) && main2.b(o3, "style", d2);
      }, i(e3) {
        f2 || (main2.v(s3.$$.fragment, e3), main2.v(k2, e3), f2 = true);
      }, o(e3) {
        main2.x(s3.$$.fragment, e3), main2.x(k2, e3), f2 = false;
      }, d(e3) {
        main2.y(s3, e3), e3 && main2.f(t2), e3 && main2.f(o3), k2 && k2.d(e3);
      }};
    }
    function L(e2) {
      let s3, t2, l2 = e2[0] && e2[0].site && H(e2);
      return {c() {
        l2 && l2.c(), s3 = main2.j();
      }, m(e3, a3) {
        l2 && l2.m(e3, a3), main2.c(e3, s3, a3), t2 = true;
      }, p(e3, [t3]) {
        e3[0] && e3[0].site ? l2 ? (l2.p(e3, t3), 1 & t3 && main2.v(l2, 1)) : (l2 = H(e3), l2.c(), main2.v(l2, 1), l2.m(s3.parentNode, s3)) : l2 && (main2.C(), main2.x(l2, 1, 1, () => {
          l2 = null;
        }), main2.z());
      }, i(e3) {
        t2 || (main2.v(l2), t2 = true);
      }, o(e3) {
        main2.x(l2), t2 = false;
      }, d(e3) {
        l2 && l2.d(e3), e3 && main2.f(s3);
      }};
    }
    function M(e2, s3, t2) {
      let l2, a3;
      main2.g(e2, i, (e3) => t2(3, l2 = e3)), main2.g(e2, o, (e3) => t2(0, a3 = e3));
      let {$$slots: n2 = {}, $$scope: r2} = s3;
      return main2.A(async () => {
        const e3 = await fetch(l2);
        o.set(await e3.json());
      }), e2.$$set = (e3) => {
        "$$scope" in e3 && t2(1, r2 = e3.$$scope);
      }, [a3, r2, n2];
    }
    class layout_1be4c2b2_default extends main2.S {
      constructor(e2) {
        super(), main2.i(this, e2, M, L, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => j,
      B: () => u,
      C: () => K,
      S: () => et,
      a: () => b,
      b: () => _,
      c: () => h,
      d: () => d,
      e: () => y,
      f: () => m,
      g: () => l,
      h: () => x,
      i: () => tt,
      j: () => w,
      k: () => g,
      l: () => Z,
      m: () => Bt,
      n: () => t,
      o: () => X,
      p: () => Mt,
      q: () => f,
      r: () => mt,
      s: () => i2,
      t: () => $,
      u: () => Ct,
      v: () => J,
      w: () => gt,
      x: () => W,
      y: () => Y,
      z: () => z
    });
    function t() {
    }
    function e(t2, e2) {
      for (const n2 in e2)
        t2[n2] = e2[n2];
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
    function i2(t2, e2) {
      return t2 != t2 ? e2 == e2 : t2 !== e2 || t2 && typeof t2 == "object" || typeof t2 == "function";
    }
    function a2(e2, ...n2) {
      if (e2 == null)
        return t;
      const o3 = e2.subscribe(...n2);
      return o3.unsubscribe ? () => o3.unsubscribe() : o3;
    }
    function c(t2) {
      let e2;
      return a2(t2, (t3) => e2 = t3)(), e2;
    }
    function l(t2, e2, n2) {
      t2.$$.on_destroy.push(a2(e2, n2));
    }
    function u(t2, e2, n2, o3) {
      if (t2) {
        const r2 = p(t2, e2, n2, o3);
        return t2[0](r2);
      }
    }
    function p(t2, n2, o3, r2) {
      return t2[1] && r2 ? e(o3.ctx.slice(), t2[1](r2(n2))) : o3.ctx;
    }
    function f(t2, e2, n2, o3, r2, s3, i3) {
      const a3 = function(t3, e3, n3, o4) {
        if (t3[2] && o4) {
          const r3 = t3[2](o4(n3));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t4 = [], n4 = Math.max(e3.dirty.length, r3.length);
            for (let o5 = 0; o5 < n4; o5 += 1)
              t4[o5] = e3.dirty[o5] | r3[o5];
            return t4;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o3, r2, s3);
      if (a3) {
        const r3 = p(e2, n2, o3, i3);
        t2.p(r3, a3);
      }
    }
    function d(t2, e2) {
      t2.appendChild(e2);
    }
    function h(t2, e2, n2) {
      t2.insertBefore(e2, n2 || null);
    }
    function m(t2) {
      t2.parentNode.removeChild(t2);
    }
    function g(t2, e2) {
      for (let n2 = 0; n2 < t2.length; n2 += 1)
        t2[n2] && t2[n2].d(e2);
    }
    function y(t2) {
      return document.createElement(t2);
    }
    function $(t2) {
      return document.createTextNode(t2);
    }
    function b() {
      return $(" ");
    }
    function w() {
      return $("");
    }
    function _(t2, e2, n2) {
      n2 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n2 && t2.setAttribute(e2, n2);
    }
    function x(t2, e2) {
      e2 = "" + e2, t2.wholeText !== e2 && (t2.data = e2);
    }
    let v;
    function P(t2) {
      v = t2;
    }
    function k() {
      if (!v)
        throw new Error("Function called outside component initialization");
      return v;
    }
    function j(t2) {
      k().$$.on_mount.push(t2);
    }
    function O(t2, e2) {
      k().$$.context.set(t2, e2);
    }
    function E(t2) {
      return k().$$.context.get(t2);
    }
    const I = [];
    const S = [];
    const L = [];
    const R = [];
    const F = Promise.resolve();
    let N = false;
    function T() {
      N || (N = true, F.then(B));
    }
    function A() {
      return T(), F;
    }
    function M(t2) {
      L.push(t2);
    }
    let C = false;
    const q = new Set();
    function B() {
      if (!C) {
        C = true;
        do {
          for (let t2 = 0; t2 < I.length; t2 += 1) {
            const e2 = I[t2];
            P(e2), U(e2.$$);
          }
          for (P(null), I.length = 0; S.length; )
            S.pop()();
          for (let t2 = 0; t2 < L.length; t2 += 1) {
            const e2 = L[t2];
            q.has(e2) || (q.add(e2), e2());
          }
          L.length = 0;
        } while (I.length);
        for (; R.length; )
          R.pop()();
        N = false, C = false, q.clear();
      }
    }
    function U(t2) {
      if (t2.fragment !== null) {
        t2.update(), r(t2.before_update);
        const e2 = t2.dirty;
        t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e2), t2.after_update.forEach(M);
      }
    }
    const D = new Set();
    let H;
    function K() {
      H = {r: 0, c: [], p: H};
    }
    function z() {
      H.r || r(H.c), H = H.p;
    }
    function J(t2, e2) {
      t2 && t2.i && (D.delete(t2), t2.i(e2));
    }
    function W(t2, e2, n2, o3) {
      if (t2 && t2.o) {
        if (D.has(t2))
          return;
        D.add(t2), H.c.push(() => {
          D.delete(t2), o3 && (n2 && t2.d(1), o3());
        }), t2.o(e2);
      }
    }
    function G(t2, e2) {
      t2.d(1), e2.delete(t2.key);
    }
    function Q(t2, e2) {
      W(t2, 1, 1, () => {
        e2.delete(t2.key);
      });
    }
    function V(t2, e2, n2, o3, r2, s3, i3, a3, c2, l2, u2, p2) {
      let f2 = t2.length, d2 = s3.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t2[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t3 = p2(r2, s3, h2), a4 = n2(t3);
        let c3 = i3.get(a4);
        c3 ? o3 && c3.p(t3, e2) : (c3 = l2(a4, t3), c3.c()), y2.set(a4, g2[h2] = c3), a4 in m2 && $2.set(a4, Math.abs(h2 - m2[a4]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t3) {
        J(t3, 1), t3.m(a3, u2), i3.set(t3.key, t3), u2 = t3.first, d2--;
      }
      for (; f2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t2[f2 - 1], o4 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !i3.has(o4) || b2.has(o4) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o4) > $2.get(r3) ? (w2.add(o4), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, i3), f2--);
      }
      for (; f2--; ) {
        const e3 = t2[f2];
        y2.has(e3.key) || c2(e3, i3);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function Z(t2) {
      t2 && t2.c();
    }
    function X(t2, e2, o3) {
      const {fragment: i3, on_mount: a3, on_destroy: c2, after_update: l2} = t2.$$;
      i3 && i3.m(e2, o3), M(() => {
        const e3 = a3.map(n).filter(s2);
        c2 ? c2.push(...e3) : r(e3), t2.$$.on_mount = [];
      }), l2.forEach(M);
    }
    function Y(t2, e2) {
      const n2 = t2.$$;
      n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function tt(e2, n2, s3, i3, a3, c2, l2 = [-1]) {
      const u2 = v;
      P(e2);
      const p2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a3, bound: o2(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o2(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (p2.ctx = s3 ? s3(e2, n2.props || {}, (t2, n3, ...o3) => {
        const r2 = o3.length ? o3[0] : n3;
        return p2.ctx && a3(p2.ctx[t2], p2.ctx[t2] = r2) && (!p2.skip_bound && p2.bound[t2] && p2.bound[t2](r2), f2 && function(t3, e3) {
          t3.$$.dirty[0] === -1 && (I.push(t3), T(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t2)), n3;
      }) : [], p2.update(), f2 = true, r(p2.before_update), p2.fragment = !!i3 && i3(p2.ctx), n2.target) {
        if (n2.hydrate) {
          const t2 = function(t3) {
            return Array.from(t3.childNodes);
          }(n2.target);
          p2.fragment && p2.fragment.l(t2), t2.forEach(m);
        } else
          p2.fragment && p2.fragment.c();
        n2.intro && J(e2.$$.fragment), X(e2, n2.target, n2.anchor), B();
      }
      P(u2);
    }
    class et {
      $destroy() {
        Y(this, 1), this.$destroy = t;
      }
      $on(t2, e2) {
        const n2 = this.$$.callbacks[t2] || (this.$$.callbacks[t2] = []);
        return n2.push(e2), () => {
          const t3 = n2.indexOf(e2);
          t3 !== -1 && n2.splice(t3, 1);
        };
      }
      $set(t2) {
        var e2;
        this.$$set && (e2 = t2, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t2), this.$$.skip_bound = false);
      }
    }
    var nt = {queryHandler: {parse: (t2) => {
      return e2 = new URLSearchParams(t2), [...e2].reduce((t3, [e3, n2]) => (t3[e3] = n2, t3), {});
      var e2;
    }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
    const ot = RegExp(/\:([^/()]+)/g);
    function rt(t2) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      st(t2), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t3} = window.location;
        if (t3) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t3.substring(1))) {
            const e2 = document.querySelector(t3);
            e2 && e2.scrollIntoView();
          }
        }
      }();
    }
    function st(t2) {
      t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", st(t2.parentElement));
    }
    const it = (t2) => {
      const e2 = [];
      let n2;
      for (; n2 = ot.exec(t2); )
        e2.push(n2[1]);
      return e2;
    };
    function at(t2, e2) {
      at._console = at._console || {log: console.log, warn: console.warn};
      const {_console: n2} = at, o3 = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
      for (const t3 of ["log", "warn"])
        console[t3] = (...e3) => {
          r2.includes(e3[0]) || n2[t3](...e3);
        }, e2().then(() => {
          console[t3] = n2[t3];
        });
    }
    function ct() {
      let t2 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n2} = function(t3) {
        const [e3, n3] = t3.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e3, options: o3};
      }(t2);
      return {...lt(e2), options: n2};
    }
    function lt(t2) {
      nt.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
      const e2 = t2.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t2, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function ut(t2, e2, n2) {
      const o3 = nt.useHash ? "#" : "";
      let r2;
      return r2 = function(t3, e3, n3) {
        const o4 = Object.assign({}, n3, e3), r3 = function(t4, e4) {
          if (!nt.queryHandler)
            return "";
          const n4 = it(t4), o5 = {};
          e4 && Object.entries(e4).forEach(([t5, e5]) => {
            n4.includes(t5) || (o5[t5] = e5);
          });
          return nt.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t3, e3);
        for (const [e4, n4] of Object.entries(o4))
          t3 = t3.replace(`:${e4}`, n4);
        return `${t3}${r3}`;
      }(t2, e2, n2), r2 = nt.urlTransform.apply(r2), r2 = o3 + r2, r2;
    }
    function pt(t2) {
      let e2;
      const n2 = t2[2].default, o3 = u(n2, t2, t2[1], null);
      return {c() {
        o3 && o3.c();
      }, m(t3, n3) {
        o3 && o3.m(t3, n3), e2 = true;
      }, p(t3, [e3]) {
        o3 && o3.p && 2 & e3 && f(o3, n2, t3, t3[1], e3, null, null);
      }, i(t3) {
        e2 || (J(o3, t3), e2 = true);
      }, o(t3) {
        W(o3, t3), e2 = false;
      }, d(t3) {
        o3 && o3.d(t3);
      }};
    }
    function ft(t2, e2, n2) {
      let {$$slots: o3 = {}, $$scope: r2} = e2, {scoped: s3 = {}} = e2;
      return t2.$$set = (t3) => {
        "scoped" in t3 && n2(0, s3 = t3.scoped), "$$scope" in t3 && n2(1, r2 = t3.$$scope);
      }, [s3, r2, o3];
    }
    class dt extends et {
      constructor(t2) {
        super(), tt(this, t2, ft, pt, i2, {scoped: 0});
      }
    }
    const ht = [];
    function mt(t2, e2) {
      return {subscribe: gt(t2, e2).subscribe};
    }
    function gt(e2, n2 = t) {
      let o3;
      const r2 = [];
      function s3(t2) {
        if (i2(e2, t2) && (e2 = t2, o3)) {
          const t3 = !ht.length;
          for (let t4 = 0; t4 < r2.length; t4 += 1) {
            const n3 = r2[t4];
            n3[1](), ht.push(n3, e2);
          }
          if (t3) {
            for (let t4 = 0; t4 < ht.length; t4 += 2)
              ht[t4][0](ht[t4 + 1]);
            ht.length = 0;
          }
        }
      }
      return {set: s3, update: function(t2) {
        s3(t2(e2));
      }, subscribe: function(i3, a3 = t) {
        const c2 = [i3, a3];
        return r2.push(c2), r2.length === 1 && (o3 = n2(s3) || t), i3(e2), () => {
          const t2 = r2.indexOf(c2);
          t2 !== -1 && r2.splice(t2, 1), r2.length === 0 && (o3(), o3 = null);
        };
      }};
    }
    function yt(e2, n2, o3) {
      const i3 = !Array.isArray(e2), c2 = i3 ? [e2] : e2, l2 = n2.length < 2;
      return mt(o3, (e3) => {
        let o4 = false;
        const u2 = [];
        let p2 = 0, f2 = t;
        const d2 = () => {
          if (p2)
            return;
          f2();
          const o5 = n2(i3 ? u2[0] : u2, e3);
          l2 ? e3(o5) : f2 = s2(o5) ? o5 : t;
        }, h2 = c2.map((t2, e4) => a2(t2, (t3) => {
          u2[e4] = t3, p2 &= ~(1 << e4), o4 && d2();
        }, () => {
          p2 |= 1 << e4;
        }));
        return o4 = true, d2(), function() {
          r(h2), f2();
        };
      });
    }
    window.routify = window.routify || {};
    const $t = gt(null);
    const bt = gt([]);
    bt.subscribe((t2) => window.routify.routes = t2);
    let wt = gt({component: {params: {}}});
    const _t = gt(null);
    const xt = gt(true);
    function vt(t2, e2 = false) {
      t2 = nt.urlTransform.remove(t2);
      let {pathname: n2, search: o3} = lt(t2).url;
      const r2 = c(bt), s3 = r2.find((t3) => n2 === t3.meta.name) || r2.find((t3) => n2.match(t3.regex));
      if (!s3)
        throw new Error(`Route could not be found for "${n2}".`);
      const i3 = e2 ? Object.create(s3) : s3, {route: a3, redirectPath: l2, rewritePath: u2} = Pt(i3, r2);
      return u2 && ({pathname: n2, search: o3} = lt(ut(u2, a3.params)).url, l2 && (a3.redirectTo = ut(l2, a3.params || {}))), nt.queryHandler && (a3.params = Object.assign({}, a3.params, nt.queryHandler.parse(o3))), function(t3, e3) {
        if (t3.paramKeys) {
          const n3 = function(t4) {
            const e4 = [];
            return t4.forEach((t5) => {
              e4[t5.path.split("/").filter(Boolean).length - 1] = t5;
            }), e4;
          }(t3.layouts), o4 = e3.split("/").filter(Boolean);
          (function(t4) {
            return t4.split("/").filter(Boolean).map((t5) => t5.match(/\:(.+)/)).map((t5) => t5 && t5[1]);
          })(t3.path).forEach((e4, r3) => {
            e4 && (t3.params[e4] = o4[r3], n3[r3] ? n3[r3].param = {[e4]: o4[r3]} : t3.param = {[e4]: o4[r3]});
          });
        }
      }(a3, n2), a3.leftover = t2.replace(new RegExp(a3.regex), ""), a3;
    }
    function Pt(t2, e2, n2, o3) {
      const {redirect: r2, rewrite: s3} = t2.meta;
      if (r2 || s3) {
        n2 = r2 ? r2.path || r2 : n2, o3 = s3 ? s3.path || s3 : n2;
        const i3 = r2 && r2.params, a3 = s3 && s3.params, c2 = e2.find((t3) => t3.path === o3);
        return c2 === t2 && console.error(`${o3} is redirecting to itself`), c2 || console.error(`${t2.path} is redirecting to non-existent path: ${o3}`), (i3 || a3) && (c2.params = Object.assign({}, c2.params, i3, a3)), Pt(c2, e2, n2, o3);
      }
      return {route: t2, redirectPath: n2, rewritePath: o3};
    }
    function kt(t2, e2, n2) {
      const o3 = t2.slice();
      return o3[1] = e2[n2], o3;
    }
    function jt(t2, e2) {
      let n2, o3;
      return {key: t2, first: null, c() {
        n2 = y("iframe"), n2.src !== (o3 = e2[1].url) && _(n2, "src", o3), _(n2, "frameborder", "0"), _(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t3, e3) {
        h(t3, n2, e3);
      }, p(t3, r2) {
        e2 = t3, 1 & r2 && n2.src !== (o3 = e2[1].url) && _(n2, "src", o3);
      }, d(t3) {
        t3 && m(n2);
      }};
    }
    function Ot(e2) {
      let n2, o3 = [], r2 = new Map(), s3 = e2[0];
      const i3 = (t2) => t2[1].options.prefetch;
      for (let t2 = 0; t2 < s3.length; t2 += 1) {
        let n3 = kt(e2, s3, t2), a3 = i3(n3);
        r2.set(a3, o3[t2] = jt(a3, n3));
      }
      return {c() {
        n2 = y("div");
        for (let t3 = 0; t3 < o3.length; t3 += 1)
          o3[t3].c();
        var t2, e3, r3;
        _(n2, "id", "__routify_iframes"), t2 = "display", e3 = "none", n2.style.setProperty(t2, e3, r3 ? "important" : "");
      }, m(t2, e3) {
        h(t2, n2, e3);
        for (let t3 = 0; t3 < o3.length; t3 += 1)
          o3[t3].m(n2, null);
      }, p(t2, [e3]) {
        1 & e3 && (s3 = t2[0], o3 = V(o3, e3, i3, 1, t2, s3, r2, n2, G, jt, null, kt));
      }, i: t, o: t, d(t2) {
        t2 && m(n2);
        for (let t3 = 0; t3 < o3.length; t3 += 1)
          o3[t3].d();
      }};
    }
    const Et = gt([]);
    const It = yt(Et, (t2) => t2.slice(0, 2));
    function St(t2) {
      const e2 = t2.data ? t2.data.prefetchId : t2;
      if (!e2)
        return null;
      const n2 = c(Et).find((t3) => t3 && t3.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t3} = n2.options, o3 = new Promise((e3) => setTimeout(e3, t3)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t3 + 1e3);
        });
        Promise.all([o3, r2]).then(() => {
          Et.update((t4) => t4.filter((t5) => t5.options.prefetch != e2));
        });
      }
    }
    function Lt(t2, e2, n2) {
      let o3;
      return l(t2, It, (t3) => n2(0, o3 = t3)), [o3];
    }
    It.subscribe((t2) => t2.forEach(({options: t3}) => {
      setTimeout(() => St(t3.prefetch), t3.timeout);
    })), addEventListener("message", St, false);
    class Rt extends et {
      constructor(t2) {
        super(), tt(this, t2, Lt, Ot, i2, {});
      }
    }
    function Ft() {
      return E("routify") || wt;
    }
    const Nt = {_hooks: [(t2) => xt.set(false)], subscribe: At};
    const Tt = {_hooks: [], subscribe: At};
    function At(t2) {
      const e2 = this._hooks, n2 = e2.length;
      return t2((t3) => {
        e2[n2] = t3;
      }), () => delete e2[n2];
    }
    const Mt = {subscribe: (t2) => yt(Ft(), (t3) => t3.route.params).subscribe(t2)};
    const Ct = {subscribe: (t2) => yt([Ft(), $t, bt], (t3) => function(t4, e2, n2) {
      return function(o3, r2 = {}, s3) {
        const {component: i3} = t4, a3 = Object.assign({}, e2.params, i3.params);
        let c2 = o3 && o3.nodeType && o3;
        c2 && (o3 = o3.getAttribute("href")), o3 = o3 ? p2(o3) : i3.shortPath;
        const l2 = n2.find((t5) => [t5.shortPath || "/", t5.path].includes(o3));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t5 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t5);
        }
        s3 && s3.strict !== false || (o3 = o3.replace(/index$/, ""));
        let u2 = ut(o3, r2, a3);
        return c2 ? (c2.href = u2, {update(t5) {
          c2.href = ut(o3, t5, a3);
        }}) : u2;
        function p2(t5) {
          if (t5.match(/^\.\.?\//)) {
            let [, e3, n3] = t5.match(/^([\.\/]+)(.*)/), o4 = i3.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            i3.isPage && r3.push(null), r3.forEach(() => o4 = o4.replace(/\/[^\/]+\/?$/, "")), t5 = (t5 = `${o4}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t5.match(/^\//))
            ;
          else {
            const e3 = n2.find((e4) => e4.meta.name === t5);
            e3 && (t5 = e3.shortPath);
          }
          return t5;
        }
      };
    }(...t3)).subscribe(t2)};
    const qt = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (qt.getLongest(qt.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
      qt.writeMeta(t2, e2);
    }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
      qt.writeMeta(`og:${t2}`, e2);
    }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
      document.title = e2;
    }}], getLongest(t2, e2) {
      const n2 = t2[e2];
      if (n2) {
        const o3 = c($t).path;
        return n2[Object.keys(t2[e2]).filter((t3) => o3.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
      }
    }, writeMeta(t2, e2) {
      const n2 = document.getElementsByTagName("head")[0], o3 = t2.match(/(.+)\:/), r2 = o3 && o3[1] || "plain", {propField: s3, valueField: i3} = Bt.services[r2] || Bt.services.plain, a3 = document.querySelector(`meta[${s3}='${t2}']`);
      a3 && a3.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(s3, t2), c2.setAttribute(i3, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t2, e2) {
      qt.plugins.forEach((n2) => {
        n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
      });
    }, clear() {
      const t2 = document.querySelector("meta");
      t2 && t2.remove();
    }, template(t2, e2) {
      const n2 = qt.getOrigin();
      qt.templates[t2] = qt.templates[t2] || {}, qt.templates[t2][n2] = e2;
    }, update() {
      Object.keys(qt.props).forEach((t2) => {
        let e2 = qt.getLongest(qt.props, t2);
        qt.plugins.forEach((n2) => {
          n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
        });
      });
    }, batchedUpdate() {
      qt._pendingUpdate || (qt._pendingUpdate = true, setTimeout(() => {
        qt._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t2 = Ft();
      return t2 && c(t2).path || "/";
    }, _pendingUpdate: false};
    const Bt = new Proxy(qt, {set(t2, e2, n2, o3) {
      const {props: r2, getOrigin: s3} = t2;
      return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n2, o3) : (r2[e2] = r2[e2] || {}, r2[e2][s3()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
    }});
    function Ut(t2, e2, n2) {
      const o3 = t2.slice();
      return o3[18] = e2[n2].component, o3[19] = e2[n2].componentFile, o3[2] = e2[n2].decorator, o3[1] = e2[n2].nodes, o3;
    }
    function Dt(t2) {
      let e2, n2, o3 = [], r2 = new Map(), s3 = [t2[4]];
      const i3 = (t3) => function({meta: t4, path: e3, param: n3, params: o4}) {
        return JSON.stringify({path: e3, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o4});
      }(t3[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = Ut(t2, s3, e3), a3 = i3(n3);
        r2.set(a3, o3[e3] = Jt(a3, n3));
      }
      return {c() {
        for (let t3 = 0; t3 < 1; t3 += 1)
          o3[t3].c();
        e2 = w();
      }, m(t3, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].m(t3, r3);
        h(t3, e2, r3), n2 = true;
      }, p(t3, n3) {
        4194365 & n3 && (s3 = [t3[4]], K(), o3 = V(o3, n3, i3, 1, t3, s3, r2, e2.parentNode, Q, Jt, e2, Ut), z());
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < 1; t4 += 1)
            J(o3[t4]);
          n2 = true;
        }
      }, o(t3) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          W(o3[t4]);
        n2 = false;
      }, d(t3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o3[e3].d(t3);
        t3 && m(e2);
      }};
    }
    function Ht(t2) {
      let e2, n2;
      return e2 = new Qt({props: {decorator: t2[2], nodes: [...t2[1]], scoped: {...t2[0], ...t2[22]}}}), {c() {
        Z(e2.$$.fragment);
      }, m(t3, o3) {
        X(e2, t3, o3), n2 = true;
      }, p(t3, n3) {
        const o3 = {};
        4 & n3 && (o3.decorator = t3[2]), 16 & n3 && (o3.nodes = [...t3[1]]), 4194305 & n3 && (o3.scoped = {...t3[0], ...t3[22]}), e2.$set(o3);
      }, i(t3) {
        n2 || (J(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        W(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        Y(e2, t3);
      }};
    }
    function Kt(t2) {
      let e2, n2, o3 = t2[18] && t2[1].length && Ht(t2);
      return {c() {
        o3 && o3.c(), e2 = w();
      }, m(t3, r2) {
        o3 && o3.m(t3, r2), h(t3, e2, r2), n2 = true;
      }, p(t3, n3) {
        t3[18] && t3[1].length ? o3 ? (o3.p(t3, n3), 16 & n3 && J(o3, 1)) : (o3 = Ht(t3), o3.c(), J(o3, 1), o3.m(e2.parentNode, e2)) : o3 && (K(), W(o3, 1, 1, () => {
          o3 = null;
        }), z());
      }, i(t3) {
        n2 || (J(o3), n2 = true);
      }, o(t3) {
        W(o3), n2 = false;
      }, d(t3) {
        o3 && o3.d(t3), t3 && m(e2);
      }};
    }
    function zt(t2) {
      let n2, o3, r2;
      const s3 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
      var i3 = t2[19];
      function a3(t3) {
        let n3 = {$$slots: {default: [Kt, ({scoped: t4, decorator: e2}) => ({22: t4, 2: e2}), ({scoped: t4, decorator: e2}) => (t4 ? 4194304 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t3}};
        for (let t4 = 0; t4 < s3.length; t4 += 1)
          n3 = e(n3, s3[t4]);
        return {props: n3};
      }
      return i3 && (n2 = new i3(a3(t2))), {c() {
        n2 && Z(n2.$$.fragment), o3 = b();
      }, m(t3, e2) {
        n2 && X(n2, t3, e2), h(t3, o3, e2), r2 = true;
      }, p(t3, e2) {
        const r3 = 41 & e2 ? function(t4, e3) {
          const n3 = {}, o4 = {}, r4 = {$$scope: 1};
          let s4 = t4.length;
          for (; s4--; ) {
            const i4 = t4[s4], a4 = e3[s4];
            if (a4) {
              for (const t5 in i4)
                t5 in a4 || (o4[t5] = 1);
              for (const t5 in a4)
                r4[t5] || (n3[t5] = a4[t5], r4[t5] = 1);
              t4[s4] = a4;
            } else
              for (const t5 in i4)
                r4[t5] = 1;
          }
          for (const t5 in o4)
            t5 in n3 || (n3[t5] = void 0);
          return n3;
        }(s3, [1 & e2 && {scoped: t3[0]}, 32 & e2 && {scopedSync: t3[5]}, 8 & e2 && (c2 = t3[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & e2 && (r3.$$scope = {dirty: e2, ctx: t3}), i3 !== (i3 = t3[19])) {
          if (n2) {
            K();
            const t4 = n2;
            W(t4.$$.fragment, 1, 0, () => {
              Y(t4, 1);
            }), z();
          }
          i3 ? (n2 = new i3(a3(t3)), Z(n2.$$.fragment), J(n2.$$.fragment, 1), X(n2, o3.parentNode, o3)) : n2 = null;
        } else
          i3 && n2.$set(r3);
      }, i(t3) {
        r2 || (n2 && J(n2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        n2 && W(n2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        n2 && Y(n2, t3), t3 && m(o3);
      }};
    }
    function Jt(t2, e2) {
      let n2, o3, r2, s3;
      var i3 = e2[2];
      function a3(t3) {
        return {props: {scoped: t3[0], $$slots: {default: [zt]}, $$scope: {ctx: t3}}};
      }
      return i3 && (o3 = new i3(a3(e2))), {key: t2, first: null, c() {
        n2 = w(), o3 && Z(o3.$$.fragment), r2 = w(), this.first = n2;
      }, m(t3, e3) {
        h(t3, n2, e3), o3 && X(o3, t3, e3), h(t3, r2, e3), s3 = true;
      }, p(t3, n3) {
        e2 = t3;
        const s4 = {};
        if (1 & n3 && (s4.scoped = e2[0]), 8388669 & n3 && (s4.$$scope = {dirty: n3, ctx: e2}), i3 !== (i3 = e2[2])) {
          if (o3) {
            K();
            const t4 = o3;
            W(t4.$$.fragment, 1, 0, () => {
              Y(t4, 1);
            }), z();
          }
          i3 ? (o3 = new i3(a3(e2)), Z(o3.$$.fragment), J(o3.$$.fragment, 1), X(o3, r2.parentNode, r2)) : o3 = null;
        } else
          i3 && o3.$set(s4);
      }, i(t3) {
        s3 || (o3 && J(o3.$$.fragment, t3), s3 = true);
      }, o(t3) {
        o3 && W(o3.$$.fragment, t3), s3 = false;
      }, d(t3) {
        t3 && m(n2), t3 && m(r2), o3 && Y(o3, t3);
      }};
    }
    function Wt(e2) {
      let n2, o3, r2, i3, a3, c2 = e2[4] && Dt(e2);
      return {c() {
        c2 && c2.c(), n2 = b(), o3 = y("span");
      }, m(l2, u2) {
        var p2;
        c2 && c2.m(l2, u2), h(l2, n2, u2), h(l2, o3, u2), r2 = true, i3 || (p2 = e2[8].call(null, o3), a3 = p2 && s2(p2.destroy) ? p2.destroy : t, i3 = true);
      }, p(t2, [e3]) {
        t2[4] ? c2 ? (c2.p(t2, e3), 16 & e3 && J(c2, 1)) : (c2 = Dt(t2), c2.c(), J(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (K(), W(c2, 1, 1, () => {
          c2 = null;
        }), z());
      }, i(t2) {
        r2 || (J(c2), r2 = true);
      }, o(t2) {
        W(c2), r2 = false;
      }, d(t2) {
        c2 && c2.d(t2), t2 && m(n2), t2 && m(o3), i3 = false, a3();
      }};
    }
    function Gt(t2, e2, n2) {
      let o3, r2, s3, i3;
      l(t2, $t, (t3) => n2(14, s3 = t3));
      let a3, {nodes: c2 = []} = e2, {scoped: u2 = {}} = e2, {isRoot: p2 = false} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = gt(null);
      l(t2, g2, (t3) => n2(4, i3 = t3));
      const y2 = E("routify");
      l(t2, y2, (t3) => n2(10, r2 = t3));
      function $2(t3) {
        n2(5, m2 = {...u2}), h2.length === 0 && async function() {
          await A(), rt(a3);
          const t4 = i3.component.path === s3.path;
          !window.routify.stopAutoReady && t4 && async function({page: t5, metatags: e4, afterPageLoad: n3}) {
            const {path: o4} = t5, {options: r3} = ct(), s4 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t5.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o4, prefetchId: s4}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: i3.component, metatags: Bt, afterPageLoad: Nt});
        }();
        const e3 = {nodes: h2, decorator: f2 || dt, layout: d2.isLayout ? d2 : o3 && o3.layout, component: d2, route: s3, componentFile: t3, parentNode: a3 || o3 && o3.parentNode};
        g2.set(e3), p2 && wt.set(e3);
      }
      return O("routify", g2), t2.$$set = (t3) => {
        "nodes" in t3 && n2(1, c2 = t3.nodes), "scoped" in t3 && n2(0, u2 = t3.scoped), "isRoot" in t3 && n2(9, p2 = t3.isRoot), "decorator" in t3 && n2(2, f2 = t3.decorator);
      }, t2.$$.update = () => {
        1024 & t2.$$.dirty && (o3 = r2), 2 & t2.$$.dirty && n2(3, [d2, ...h2] = c2, d2), 8 & t2.$$.dirty && function(t3) {
          let e3 = t3.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t2.$$.dirty && i3 && at(i3, A);
      }, [u2, c2, f2, d2, i3, m2, g2, y2, (t3) => a3 = t3.parentNode, p2, r2];
    }
    class Qt extends et {
      constructor(t2) {
        super(), tt(this, t2, Gt, Wt, i2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function Vt(t2, e2) {
      let n2 = false;
      function o3(o4, r3) {
        const s3 = vt(o4 || ct().fullpath);
        s3.redirectTo && (history.replaceStateNative({}, null, s3.redirectTo), delete s3.redirectTo);
        const i3 = [...(r3 && vt(ct().fullpath, t2) || s3).layouts, s3];
        n2 && delete n2.last, s3.last = n2, n2 = s3, o4 || _t.set(s3), $t.set(s3), s3.api.preload().then(() => {
          xt.set(true), e2(i3);
        });
      }
      const r2 = function(t3) {
        ["pushState", "replaceState"].forEach((t4) => {
          history[t4 + "Native"] = history[t4], history[t4] = async function(e4 = {}, n4, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: s3, params: i3} = c($t);
            e4 = {id: r3, path: s3, params: i3, ...e4};
            const a3 = new Event(t4.toLowerCase());
            Object.assign(a3, {state: e4, title: n4, url: o4});
            return await Xt(a3, o4) ? (history[t4 + "Native"].apply(this, [e4, n4, o4]), dispatchEvent(a3)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: Zt, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
          e3 ? e3 = false : await Xt(n4, ct().fullpath) ? t3() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t4) => addEventListener(...t4));
        return () => {
          Object.entries(n3).forEach((t4) => removeEventListener(...t4));
        };
      }(o3);
      return {updatePage: o3, destroy: r2};
    }
    function Zt(t2) {
      const e2 = t2.target.closest("a"), n2 = e2 && e2.href;
      if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o3 = new URL(n2), r2 = o3.pathname + o3.search + o3.hash;
      t2.preventDefault(), history.pushState({}, "", r2);
    }
    async function Xt(t2, e2) {
      const n2 = vt(e2).api;
      for (const o3 of Tt._hooks.filter(Boolean)) {
        if (!await o3(t2, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function Yt(t2) {
      let e2, n2;
      return e2 = new Qt({props: {nodes: t2[0], isRoot: true}}), {c() {
        Z(e2.$$.fragment);
      }, m(t3, o3) {
        X(e2, t3, o3), n2 = true;
      }, p(t3, n3) {
        const o3 = {};
        1 & n3 && (o3.nodes = t3[0]), e2.$set(o3);
      }, i(t3) {
        n2 || (J(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        W(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        Y(e2, t3);
      }};
    }
    function te(t2) {
      let e2, n2, o3, r2 = t2[0] && t2[1] !== null && Yt(t2);
      return n2 = new Rt({}), {c() {
        r2 && r2.c(), e2 = b(), Z(n2.$$.fragment);
      }, m(t3, s3) {
        r2 && r2.m(t3, s3), h(t3, e2, s3), X(n2, t3, s3), o3 = true;
      }, p(t3, [n3]) {
        t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && J(r2, 1)) : (r2 = Yt(t3), r2.c(), J(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (K(), W(r2, 1, 1, () => {
          r2 = null;
        }), z());
      }, i(t3) {
        o3 || (J(r2), J(n2.$$.fragment, t3), o3 = true);
      }, o(t3) {
        W(r2), W(n2.$$.fragment, t3), o3 = false;
      }, d(t3) {
        r2 && r2.d(t3), t3 && m(e2), Y(n2, t3);
      }};
    }
    function ee(t2, e2, n2) {
      let o3;
      l(t2, $t, (t3) => n2(1, o3 = t3));
      let r2, s3, {routes: i3} = e2, {config: a3 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(nt, a3);
      O("routifyupdatepage", (...t3) => s3 && s3.updatePage(...t3));
      const c2 = (t3) => n2(0, r2 = t3), u2 = () => {
        s3 && (s3.destroy(), s3 = null);
      };
      let p2 = null;
      var f2;
      return f2 = u2, k().$$.on_destroy.push(f2), t2.$$set = (t3) => {
        "routes" in t3 && n2(2, i3 = t3.routes), "config" in t3 && n2(3, a3 = t3.config);
      }, t2.$$.update = () => {
        4 & t2.$$.dirty && i3 && (clearTimeout(p2), p2 = setTimeout(() => {
          u2(), s3 = Vt(i3, c2), bt.set(i3), s3.updatePage();
        }));
      }, [r2, o3, i3, a3];
    }
    class ne extends et {
      constructor(t2) {
        super(), tt(this, t2, ee, te, i2, {routes: 2, config: 3});
      }
    }
    function oe(t2) {
      const e2 = async function(e3) {
        return await re(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return se(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function re(t2, e2) {
      const n2 = await t2(e2);
      if (n2 === false)
        return false;
      const o3 = n2 || e2.file;
      if (o3.children) {
        const n3 = await Promise.all(o3.children.map(async (n4) => re(t2, {state: e2.state, scope: ie(e2.scope || {}), parent: e2.file, file: await n4})));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function se(t2, e2) {
      const n2 = t2(e2);
      if (n2 === false)
        return false;
      const o3 = n2 || e2.file;
      if (o3.children) {
        const n3 = o3.children.map((n4) => se(t2, {state: e2.state, scope: ie(e2.scope || {}), parent: e2.file, file: n4}));
        o3.children = n3.filter(Boolean);
      }
      return o3;
    }
    function ie(t2) {
      return JSON.parse(JSON.stringify(t2));
    }
    const ae = oe(({file: t2}) => {
      (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(ot, "([^/]+)") + n2}`;
      })(t2.path, t2.isFallback));
    });
    const ce = oe(({file: t2}) => {
      t2.paramKeys = it(t2.path);
    });
    const le = oe(({file: t2}) => {
      t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
    });
    const ue = oe(({file: t2}) => {
      t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
    });
    const pe = oe(({file: t2}) => {
      const e2 = t2, n2 = t2.meta && t2.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
    });
    const fe = oe((t2) => {
      const {file: e2} = t2, {isFallback: n2, meta: o3} = e2, r2 = e2.path.match("/:"), s3 = e2.path.endsWith("/index"), i3 = o3.index || o3.index === 0, a3 = o3.index === false;
      e2.isIndexable = i3 || !n2 && !r2 && !s3 && !a3, e2.isNonIndexable = !e2.isIndexable;
    });
    const de = oe(({file: t2, parent: e2}) => {
      Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => me(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => me(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => he(e2)});
    });
    function he(t2, e2 = []) {
      return t2 && (e2.unshift(t2), he(t2.parent, e2)), e2;
    }
    function me(t2, e2) {
      if (!t2.root) {
        const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o3 = n2.indexOf(t2);
        return n2[o3 + e2];
      }
    }
    const ge = oe(({file: t2, parent: e2}) => {
      t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
    });
    const ye = oe(({file: t2, scope: e2}) => {
      function n2(t3) {
        const {parent: e3} = t3, o3 = e3 && e3.component && e3, r2 = o3 && o3.isReset, s3 = e3 && !r2 && n2(e3) || [];
        return o3 && s3.push(o3), s3;
      }
      Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
    });
    const $e = oe(({file: t2}) => {
      const e2 = t2.root ? function() {
      } : t2.children ? (t2.isPage, function() {
      }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
      });
      Object.setPrototypeOf(t2, e2.prototype);
    });
    var be = Object.freeze({__proto__: null, setRegex: ae, setParamKeys: ce, setShortPath: le, setRank: ue, addMetaChildren: pe, setIsIndexable: fe, assignRelations: de, assignIndex: ge, assignLayout: ye, createFlatList: (t2) => {
      oe((t3) => {
        (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
      }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: $e});
    const we = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function _e(t2) {
      return Object.entries(we).forEach(([e2, n2]) => {
        t2[e2] === void 0 && (t2[e2] = n2);
      }), t2.children && (t2.children = t2.children.map(_e)), t2;
    }
    const xe = oe(({file: t2}) => {
      t2.api = new ve(t2);
    });
    class ve {
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
        return Pe(this, 1);
      }
      get prev() {
        return Pe(this, -1);
      }
      async preload() {
        const t2 = [...this.__file.layouts, this.__file].map((t3) => t3.component());
        await Promise.all(t2);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function Pe(t2, e2) {
      if (!t2.__file.root) {
        const n2 = t2.parent.children.indexOf(t2);
        return t2.parent.children[n2 + e2];
      }
    }
    const ke = {...be, restoreDefaults: ({tree: t2}) => _e(t2), assignAPI: xe};
    const je = {root: true, children: [{isFallback: true, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_7f08fc9f())).then((t2) => t2.default)}, {isDir: true, ext: "", children: [{isPage: true, path: "/:cat/:slug", id: "__cat__slug", component: () => Promise.resolve().then(() => __toModule(require_slug_9884fa52())).then((t2) => t2.default)}, {isIndex: true, isPage: true, path: "/:cat/index", id: "__cat_index", component: () => Promise.resolve().then(() => __toModule(require_index_7e20247d())).then((t2) => t2.default)}], path: "/:cat"}, {isDir: true, ext: "", children: [], path: "/example"}, {isIndex: true, isPage: true, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_b859eee5())).then((t2) => t2.default)}], isLayout: true, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_1be4c2b2())).then((t2) => t2.default)};
    const {tree: Oe, routes: Ee} = function(t2) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
      for (let t3 of e2) {
        (ke[t3].sync || ke[t3])(n2);
      }
      return n2;
    }(je);
    function Ie(e2) {
      let n2, o3;
      return n2 = new ne({props: {routes: Ee}}), {c() {
        Z(n2.$$.fragment);
      }, m(t2, e3) {
        X(n2, t2, e3), o3 = true;
      }, p: t, i(t2) {
        o3 || (J(n2.$$.fragment, t2), o3 = true);
      }, o(t2) {
        W(n2.$$.fragment, t2), o3 = false;
      }, d(t2) {
        Y(n2, t2);
      }};
    }
    !function(t2, e2 = {target: document.body}, n2 = "hmr", o3 = "app-loaded") {
      const r2 = document.getElementById(n2), s3 = document.createElement("div");
      function i3() {
        r2 && r2.remove(), s3.style.visibility = null, s3.setAttribute("id", n2);
      }
      s3.style.visibility = "hidden", e2.target.appendChild(s3), r2 ? addEventListener(o3, i3) : i3(), new t2({...e2, target: s3});
    }(class extends et {
      constructor(t2) {
        super(), tt(this, t2, null, Ie, i2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/store-4ceb92bb.js
  const main = __toModule(require_main());
  const i = main.r("http://foodis.dataline.fi/pw/");
  const o = main.w({});
  require_main();
})();
