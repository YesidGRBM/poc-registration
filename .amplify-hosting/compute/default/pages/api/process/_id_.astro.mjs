export { renderers } from '../../../renderers.mjs';

const GET = async ({ params }) => {
  const { id } = params;
  try {
    const response = await fetch(`https://poc-registration-services-production.up.railway.app/api/user/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    const res = await response.json();
    if (!response.ok) throw new Error(res.detail);
    const key = await crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
    const rawKey = await crypto.subtle.exportKey("raw", key);
    const keyBase64 = btoa(String.fromCharCode(...new Uint8Array(rawKey)));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encoder = new TextEncoder();
    const encoded = encoder.encode(JSON.stringify(res));
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encoded
    );
    const encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encryptedBuffer)));
    const ivBase64 = btoa(String.fromCharCode(...iv));
    const cookie = `key=${keyBase64}; Max-Age=60; Path=/; Secure; SameSite=Strict;`;
    return new Response(
      JSON.stringify({
        data: encryptedBase64,
        iv: ivBase64
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie,
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    return new Response(`${error}`, {
      status: 400
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
