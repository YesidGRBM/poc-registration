import type { APIRoute } from "astro";

import { generateKey, encryptData } from '../../../../utils/encrypt'

export const GET: APIRoute = async ({ params }) => {
    const { id } = params
    try {
        const response = await fetch(`http://localhost:8000/api/user/${id}`)
        const res = await response.json()
        if(!response.ok) throw new Error(res.detail )
        const tempKey = generateKey();
        const keyBase64 = tempKey.toString('base64');
        const data = encryptData(res, tempKey)
        const cookie = `key=${keyBase64}; Max-Age=60; Path=/; Secure; SameSite=Strict;`;
        return new Response(JSON.stringify(data),{
            status: 200,
            headers: {
                'Set-Cookie': cookie,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store'
            }
        })
    } catch (error) {
        return new Response(`${error}`,{
            status: 400,
        })
    }
}