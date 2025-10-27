import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_Db7UDbJN.mjs';
import { $ as $$Layout } from '../../chunks/Layout_-YmQeH2E.mjs';
import { o as onboarding } from '../../chunks/onboarding_aC_db12B.mjs';
import $$Boarding from '../../chunks/Boarding_C0-op4nw.mjs';
/* empty css                                   */
import 'clsx';
import QRCode from 'qrcode';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$MobilePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobilePage;
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col max-h-[30rem] items-center gap-10 px-4"> <img${addAttribute(onboarding.src, "src")} alt="on Boarding"> ${renderComponent($$result, "Boarding", $$Boarding, { "id": Astro2.params.id ?? "", "server:defer": true, "server:component-directive": "defer", "server:component-path": "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/Boarding.astro", "server:component-export": "default" }, { "fallback": ($$result2) => renderTemplate`<span>
Cargando información de tu proceso...
</span>` })} </main> <footer class="flex justify-center items-center py-4">
SoyYO - Tu identidad digital segura
</footer>`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/MobilePage.astro", "self");

const $$Astro$1 = createAstro();
const $$DesktopPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DesktopPage;
  const url = new URL(Astro2.request.url);
  const fullUrl = url.href;
  const qrCode = (await QRCode.toString(fullUrl, { type: "svg" })).toString().replace(/^<svg /, '<svg class="w-full h-auto" ').replace("#000000", "currentColor");
  return renderTemplate`${maybeRenderHead()}<main class="flex justify-between items-center gap-4"> <aside class="grid gap-4 justify-center items-center max-w-2xs"> <h1 class="text-2xl text-purple-900 font-bold">No puedes usarlo</h1> <p class="text-xl text-pretty">Por favor usa un dispositivo móvil para continuar con el proceso.</p> </aside> <div class="w-96 text-purple-900">${unescapeHTML(qrCode)}</div> </main> <footer class="flex justify-center items-center py-4">
SoyYO - Tu identidad digital segura
</footer>`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/DesktopPage.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const userAgent = Astro2.request.headers.get("user-agent") || "";
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(userAgent);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${isMobile ? renderTemplate`${renderComponent($$result2, "MobilePage", $$MobilePage, { "id": Astro2.params.id ?? "" })}` : renderTemplate`${renderComponent($$result2, "DesktopPage", $$DesktopPage, { "id": Astro2.params.id ?? "" })}`}` })}`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/pages/process/[id].astro", void 0);

const $$file = "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/pages/process/[id].astro";
const $$url = "/process/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
