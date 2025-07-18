import { router } from "./routes";

export function guardian() {
    let auth = sessionStorage.getItem('Auth');
    if (!auth || auth !== 'true') {
        router('')
    }
}