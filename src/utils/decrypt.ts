export async function decrypt(encryptedBase64: string, ivBase64: string) {

    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=') as [string, string];
        Object.assign(acc, {[key]: value})
        return acc;
      }, {});
      if (!('key' in cookies)) {
        return
      }
    const encrypted = Uint8Array.from(atob(encryptedBase64), (c) => c.charCodeAt(0));
    const iv = Uint8Array.from(atob(ivBase64), (c) => c.charCodeAt(0))
    const key = Uint8Array.from(atob(cookies.key as string), (c) => c.charCodeAt(0))

    document.cookie = 'key=; Max-Age=0; Path=/; Secure; SameSite=Strict;'

    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        key,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
    )

    const data = encrypted.slice(0, -16);
    const authTag = encrypted.slice(-16);
    const combined = new Uint8Array([...data, ...authTag]);

    const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        combined
    );

    const decoded = new TextDecoder().decode(decrypted);
    return JSON.parse(decoded)

}