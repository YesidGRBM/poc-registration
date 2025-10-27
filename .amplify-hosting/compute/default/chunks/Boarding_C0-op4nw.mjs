import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, k as renderComponent } from './astro/server_Db7UDbJN.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="flex justify-center items-center min-h-12 bg-[#3A4B53] py-2 px-6 font-bold text-base text-[#FAFAFA] rounded-sm w-full"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/Link.astro", void 0);

const $$Astro = createAstro();
const $$Boarding = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boarding;
  const { id } = Astro2.props;
  const response = await fetch(new URL(`/api/process/${id}/meta`, Astro2.url));
  if (!response.ok) return Astro2.redirect("/");
  const res = await response.json();
  return renderTemplate`${maybeRenderHead()}<section class="grid gap-2"> <h1 class="font-bold text-3xl text-[#13222A] text-center text-pretty">
¡Bienvenido a tu Identidad Digital!
</h1> <p class="text-base font-normal text-[#3A4B53] text-center">
Para continuar tu proceso con <strong class="font-bold">${res.process}</strong>, es necesario crear tu identidad digital segura con SoyYO, solo necesitarás:
<strong class="font-bold">Tu selfie y tu cédula (debes tenerla a mano)</strong> </p> </section> ${res.active ? renderTemplate`${renderComponent($$result, "Button", null, { "id": id, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/Button.svelte", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": "http://www.google.com" }, { "default": async ($$result2) => renderTemplate`
Tu proceso caduco
` })}`}`;
}, "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/Boarding.astro", void 0);

const $$file = "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/components/Boarding.astro";
const $$url = undefined;

export { $$Boarding as default, $$file as file, $$url as url };
