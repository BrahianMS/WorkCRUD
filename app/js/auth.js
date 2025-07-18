import { router } from "./routes.js";

export function guardian() {
    let auth = sessionStorage.getItem('Auth');
    if (!auth || auth !== 'true') {
        router('')
    }
}