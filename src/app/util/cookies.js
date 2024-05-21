// utils/cookies.js
import { Cookie } from 'next-cookie';

export function deleteCookie(ctx, name) {
    const cookies = Cookie(ctx);
    cookies.set(name, '', { maxAge: -1 });
}