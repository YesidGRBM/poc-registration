import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Db7UDbJN.mjs';
import { $ as $$Layout } from '../chunks/Layout_C35J6rXf.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Proceso finalizado</h1> ` })}`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/pages/finally/index.astro", void 0);

const $$file = "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/pages/finally/index.astro";
const $$url = "/finally";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
