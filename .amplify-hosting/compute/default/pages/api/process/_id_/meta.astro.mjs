export { renderers } from '../../../../renderers.mjs';

const GET = async ({ params }) => {
  const { id } = params;
  const url = `https://poc-registration-services-production.up.railway.app/api/user/${id}/meta`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const res = await response.json();
  return new Response(JSON.stringify(res), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
