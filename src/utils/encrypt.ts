import crypto from 'node:crypto'

export function generateKey(): Buffer {
    return crypto.randomBytes(32);
}

export function encryptData(data: object, key: Buffer) {
    const iv = crypto.randomBytes(12)
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

    const json = JSON.stringify(data);
    const encrypted = Buffer.concat([
        cipher.update(json, 'utf8'),
        cipher.final()
    ])

    const auth = cipher.getAuthTag();

    return {
        data: Buffer.concat([encrypted, auth]).toString('base64'),
        iv: iv.toString('base64')
    }
}

