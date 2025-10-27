import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DQoWi7xJ.mjs';
import { manifest } from './manifest_W5Y0J4fB.mjs';

const serverIslandMap = new Map([
	['Boarding', () => import('./chunks/Boarding_C0-op4nw.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/process/_id_/meta.astro.mjs');
const _page2 = () => import('./pages/api/process/_id_.astro.mjs');
const _page3 = () => import('./pages/finally.astro.mjs');
const _page4 = () => import('./pages/process/_id_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/process/[id]/meta.ts", _page1],
    ["src/pages/api/process/[id]/index.ts", _page2],
    ["src/pages/finally/index.astro", _page3],
    ["src/pages/process/[id].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///C:/Users/oyquintero/projects/pocs/poc-registration-gateway/.amplify-hosting/static/",
    "server": "file:///C:/Users/oyquintero/projects/pocs/poc-registration-gateway/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
