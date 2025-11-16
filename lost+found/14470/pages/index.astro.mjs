globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, n as renderComponent } from '../chunks/astro/server_nZhxKutS.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { pageClass = "" } = Astro2.props;
  return renderTemplate`<html lang="en"${addAttribute(pageClass, "class")}> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Crypto Wallet Manager</title>${renderHead()}</head> <!-- Dark mode class injection point - will be replaced with \`dark\` class based on your site palette --> <body class="__DARK_MODE_CLASS__"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/app/src/layouts/main.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageClass = "wallet-splash";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Main, { "pageClass": pageClass }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WalletSplash", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/app/src/components/WalletSplash", "client:component-export": "default" })} ` })} `;
}, "/app/src/pages/index.astro", void 0);

const $$file = "/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
