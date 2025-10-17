import type { APIRoute } from "astro";
import { URL_SERVER } from 'astro:env/server'
import crypto from 'node:crypto'


export const GET: APIRoute = async ({ params }) => {
    const { id } = params
    console.log({id, URL_SERVER})
    try {
        const response = await fetch(`${URL_SERVER}/api/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const res = await response.json()
        if(!response.ok) throw new Error(res.detail )
        const tempKey = crypto.randomBytes(32);
        const keyBase64 = tempKey.toString('base64');
        const iv = crypto.randomBytes(12)
        const cipher = crypto.createCipheriv('aes-256-gcm', tempKey, iv);
        const json = JSON.stringify(res);
        const encrypted = Buffer.concat([
            cipher.update(json, 'utf8'),
            cipher.final()
        ])
        const auth = cipher.getAuthTag();
        const cookie = `key=${keyBase64}; Max-Age=60; Path=/; Secure; SameSite=Strict;`;
        return new Response(JSON.stringify({
                data: Buffer.concat([encrypted, auth]).toString('base64'),
                iv: iv.toString('base64')
            }),{
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