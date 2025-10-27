import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Db7UDbJN.mjs';
import { $ as $$Layout } from '../chunks/Layout_C35J6rXf.mjs';
import { o as onboarding } from '../chunks/onboarding_aC_db12B.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col max-h-[30rem] items-center gap-10 px-4"> <img${addAttribute(onboarding.src, "src")} alt="on Boarding"> <section class="grid gap-2"> <h1 class="font-bold text-3xl text-[#13222A] text-center text-pretty">
¡Bienvenido a tu Identidad Digital!
</h1> <p class="text-base font-normal text-[#3A4B53] text-center">
Para continuar tu proceso con [nombre de la entidad], es necesario crear tu identidad digital segura con SoyYO, solo necesitarás:
<strong class="font-bold">Tu selfie y tu cédula (debes tenerla a mano)</strong> </p> </section> </main> ` })}`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/pages/index.astro", void 0);

const $$file = "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
